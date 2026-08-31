/**
 * Builds a client review pack: a PDF of the site's pages at desktop width, for
 * confirming design and content.
 *
 *   npm run build && PORT=3100 npm start      # production server, no dev badge
 *   node scripts/review-pdf.mjs               # writes review/BeExplorers-design-preview.pdf
 *
 * Pages are cut on section boundaries rather than at fixed heights, so a
 * section is never split across two sheets unless it is taller than one sheet.
 *
 * Override the target with BASE=http://localhost:3000.
 * Uses the Chrome already installed on the machine — no browser download.
 */
import { chromium } from "playwright";
import { mkdir, writeFile, rm } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import path from "node:path";

const BASE = process.env.BASE ?? "http://localhost:3100";
const OUT_DIR = path.resolve("review");
const SHOT_DIR = path.join(OUT_DIR, "screenshots");
const PDF_PATH = path.join(OUT_DIR, "BeExplorers-design-preview.pdf");

const PAGES = [
  { label: "Home", path: "/" },
  { label: "Tours", path: "/tours" },
  { label: "About Us", path: "/about" },
  { label: "FAQs", path: "/faqs" },
  { label: "Contact", path: "/contact" },
];

/* Page geometry in millimetres, for A4 landscape. */
const PAGE = { w: 297, h: 209.6, pad: 8 };
const BAND = { w: PAGE.w - PAGE.pad * 2, h: 185 };
const VIEWPORT = { width: 1440, height: 900 };

/** Tallest crop that still fits the band at full width, in CSS pixels. */
const MAX_SLICE_PX = Math.floor((BAND.h * VIEWPORT.width) / BAND.w);
/** Above this a section is split rather than shrunk — 1.5× means it never
 *  renders below two-thirds size, which stays readable. */
const SCALE_LIMIT_PX = Math.round(MAX_SLICE_PX * 1.5);

/** Scroll the whole page so lazy images load, then wait for them to decode. */
async function settle(page) {
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += window.innerHeight) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 220));
    }
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 400));
  });
  await page
    .waitForFunction(
      () => [...document.images].every((i) => i.complete && i.naturalWidth > 0),
      null,
      { timeout: 30000 },
    )
    .catch(() => console.warn("   (some images did not finish loading)"));

  // The header is `fixed`, so a full-page capture paints it partway down the
  // image — which reads as a bug. Pin it to the top of the document instead.
  await page.addStyleTag({
    content: "header { position: absolute !important; top: 0 !important; }",
  });
}

/**
 * Top-level sections, plus every candidate cut point inside them — the tops of
 * nested blocks such as card rows and FAQ groups. A section too tall for one
 * sheet is broken on those, never mid-content.
 */
async function readLayout(page) {
  return page.evaluate(() => {
    const offset = window.scrollY;
    const topOf = (el) => Math.round(el.getBoundingClientRect().top + offset);

    const nodes = [
      ...document.querySelectorAll("main > *"),
      document.querySelector("footer"),
    ].filter(Boolean);
    const total = document.body.scrollHeight;

    // Depth is recorded so the splitter can prefer coarse boundaries (a whole
    // FAQ group) over fine ones (a single question).
    const cutDepth = new Map();
    const walk = (node, depth) => {
      if (depth > 4) return;
      for (const child of node.children) {
        if (child.getBoundingClientRect().height >= 48) {
          const y = topOf(child);
          if (!cutDepth.has(y) || cutDepth.get(y) > depth) cutDepth.set(y, depth);
          walk(child, depth + 1);
        }
      }
    };
    nodes.forEach((node) => walk(node, 0));

    const measured = nodes
      .map((el) => {
        const heading = el.querySelector("h1, h2");
        return {
          top: topOf(el),
          label: heading ? heading.textContent.trim().slice(0, 48) : "",
        };
      })
      .filter((m, i, all) => m.top >= 0 && (i === 0 || m.top > all[i - 1].top));

    const segments = measured.map((m, i) => ({
      start: m.top,
      end: i + 1 < measured.length ? measured[i + 1].top : total,
      label: m.label,
    }));

    // Anything above the first section (rarely more than the header overlay)
    if (segments.length && segments[0].start > 0) {
      segments.unshift({ start: 0, end: segments[0].start, label: "" });
    }

    // Used to caption each sheet with whatever headings actually appear on it.
    const headings = [...document.querySelectorAll("main h1, main h2, main h3")]
      .filter((el) => el.offsetParent !== null)
      .map((el) => ({
        y: topOf(el),
        level: Number(el.tagName[1]),
        text: el.textContent.trim().slice(0, 48),
      }));

    return {
      segments: segments.length ? segments : [{ start: 0, end: total, label: "" }],
      cuts: [...cutDepth.entries()]
        .map(([y, depth]) => ({ y, depth }))
        .sort((a, b) => a.y - b.y),
      headings,
      footerTop: document.querySelector("footer")
        ? topOf(document.querySelector("footer"))
        : total,
    };
  });
}

/**
 * Pack sections onto sheets.
 *   • fits as-is            → share a sheet with its neighbours
 *   • up to `scaleLimit`    → its own sheet, scaled down to fit whole
 *   • taller than that      → split on the nearest inner boundary
 */
function paginate({ segments, cuts }, maxPx, scaleLimit) {
  const sheets = [];
  let current = null;

  const flush = () => {
    if (current) sheets.push(current);
    current = null;
  };

  for (const segment of segments) {
    const height = segment.end - segment.start;
    if (height <= 0) continue;
    const labels = segment.label ? [segment.label] : [];

    if (height <= maxPx) {
      if (!current) {
        current = { start: segment.start, end: segment.end, labels };
      } else if (segment.end - current.start <= maxPx) {
        current.end = segment.end;
        if (segment.label) current.labels.push(segment.label);
      } else {
        flush();
        current = { start: segment.start, end: segment.end, labels };
      }
      continue;
    }

    flush();

    if (height <= scaleLimit) {
      sheets.push({ start: segment.start, end: segment.end, labels, scaled: true });
      continue;
    }

    const inner = cuts.filter(
      (c) => c.y > segment.start + 100 && c.y < segment.end - 100,
    );
    const chunks = [];
    let from = segment.start;
    while (segment.end - from > maxPx) {
      const fits = inner.filter((c) => c.y > from + 100 && c.y - from <= maxPx);

      // Prefer the coarsest boundary that still fills most of the sheet — cut
      // between FAQ groups, not between two questions inside one.
      let to = null;
      for (let depth = 0; depth <= 4 && to === null; depth += 1) {
        const atDepth = fits.filter((c) => c.depth <= depth);
        if (!atDepth.length) continue;
        const furthest = Math.max(...atDepth.map((c) => c.y));
        if (furthest - from >= maxPx * 0.55) to = furthest;
      }
      if (to === null) {
        to = fits.length ? Math.max(...fits.map((c) => c.y)) : from + maxPx;
      }

      chunks.push({ start: from, end: to });
      from = to;
    }
    chunks.push({ start: from, end: segment.end });
    chunks.forEach((chunk, i) =>
      sheets.push({ ...chunk, labels, split: `${i + 1}/${chunks.length}` }),
    );
  }

  flush();
  return sheets;
}

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const browser = await chromium.launch({ channel: "chrome" });
await rm(SHOT_DIR, { recursive: true, force: true });
await mkdir(SHOT_DIR, { recursive: true });

const context = await browser.newContext({ viewport: VIEWPORT });
const page = await context.newPage();
const captured = [];

for (const entry of PAGES) {
  await page.goto(BASE + entry.path, { waitUntil: "networkidle" });
  await settle(page);

  const layout = await readLayout(page);
  const sheets = paginate(layout, MAX_SLICE_PX, SCALE_LIMIT_PX);
  const slug = entry.label.toLowerCase().replace(/\s+/g, "-");
  const files = [];

  for (const [i, sheet] of sheets.entries()) {
    const file = path.join(SHOT_DIR, `${slug}-${i}.jpg`);
    await page.screenshot({
      path: file,
      type: "jpeg",
      quality: 88,
      fullPage: true,
      clip: {
        x: 0,
        y: sheet.start,
        width: VIEWPORT.width,
        height: sheet.end - sheet.start,
      },
    });
    files.push({ file, ...sheet });
  }

  captured.push({ ...entry, files, layout });
  console.log(
    `captured ${entry.label} — ${layout.segments.length} sections across ${files.length} sheet(s)`,
  );
}
await context.close();

/* ---- assemble the document ------------------------------------------- */

const today = process.env.PACK_DATE ?? new Date().toISOString().slice(0, 10);

let body = `<section class="page cover">
  <div>
    <p class="kicker">Design &amp; content preview</p>
    <h1>BeExplorers</h1>
    <p class="lede">Home, Tours, About Us, FAQs and Contact, shown at desktop
    width. Each sheet holds a whole section of the page.</p>
    <p class="meta">Generated ${esc(today)}</p>
  </div>
  <div class="notes">
    <h2>Before you review</h2>
    <p>Some content is deliberately unfinished and is not up for approval yet:</p>
    <ul>
      <li><strong>Guest reviews are made-up examples.</strong> The three quotes on
      the homepage are placeholder text, not real guests.</li>
      <li><strong>Photography is placeholder.</strong> Every photo is a stock or
      freely-licensed stand-in, to be replaced with your own.</li>
      <li><strong>The guide photo is left out on purpose</strong> and shows a
      “photo coming soon” panel.</li>
      <li><strong>Five tours show “Price on enquiry”</strong> — Canary Wharf &amp;
      Greenwich, Oxford, Cambridge, Windsor Castle and Stonehenge — because their
      itinerary, meeting point and price have not been confirmed yet.</li>
      <li><strong>Social media links and the legal pages</strong> are placeholders.</li>
    </ul>
    <p class="ask">What we would like confirmed: the overall look, and whether the
    wording on each page is right. Feedback is easiest as
    “<em>Home, sheet 3 — change this sentence to…</em>”.</p>
  </div>
</section>`;

/** Name a sheet after the headings that actually land on it. */
function sheetName(sheet, layout) {
  const inRange = layout.headings.filter(
    (h) => h.y >= sheet.start - 8 && h.y < sheet.end - 8,
  );
  // Prefer section headings; fall back to the sub-headings on the sheet.
  const top = inRange.filter((h) => h.level <= 2);
  const chosen = (top.length ? top : inRange).slice(0, 3).map((h) => h.text);
  if (chosen.length) return chosen.join(" · ");
  return sheet.start >= layout.footerTop - 8 ? "Footer" : "";
}

for (const entry of captured) {
  entry.files.forEach((sheet, i) => {
    const caption = [
      `${entry.label} · ${i + 1} of ${entry.files.length}`,
      sheetName(sheet, entry.layout),
      sheet.split ? `continued ${sheet.split}` : "",
    ]
      .filter(Boolean)
      .join("  —  ");

    // Shrink rather than crop when a whole section is taller than the band.
    const heightPx = sheet.end - sheet.start;
    const atFullWidth = (heightPx * BAND.w) / VIEWPORT.width;
    const widthMm =
      atFullWidth <= BAND.h ? BAND.w : BAND.w * (BAND.h / atFullWidth);

    body += `<section class="page">
      <p class="caption">${esc(caption)}</p>
      <div class="band"><img style="width:${widthMm.toFixed(1)}mm" src="${pathToFileURL(sheet.file).href}"></div>
    </section>`;
  });
}

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
  @page { size: A4 landscape; margin: 0; }
  * { box-sizing: border-box; }
  body { margin: 0; font-family: -apple-system, "Helvetica Neue", Arial, sans-serif; color: #22262b; }
  .page {
    width: ${PAGE.w}mm; height: ${PAGE.h}mm; padding: ${PAGE.pad}mm;
    break-after: page; overflow: hidden; background: #fff;
  }
  .page:last-child { break-after: auto; }
  .caption {
    margin: 0 0 3mm; font-size: 3.4mm; letter-spacing: 0.06em;
    text-transform: uppercase; color: #5b6672;
  }
  .band { display: flex; justify-content: center; }
  .band img {
    display: block; height: auto;
    border: 0.3mm solid #e4eaf0; border-radius: 1.5mm;
  }
  .cover { display: flex; gap: 14mm; align-items: flex-start; padding: 22mm; }
  .cover > div { flex: 1; }
  .kicker {
    margin: 0 0 4mm; font-size: 3.4mm; letter-spacing: 0.18em;
    text-transform: uppercase; color: #5b6672;
  }
  .cover h1 { margin: 0; font-family: Georgia, serif; font-size: 22mm; line-height: 1; color: #0b2545; font-weight: 400; }
  .lede { margin: 8mm 0 0; font-size: 4.6mm; line-height: 1.5; color: #5b6672; }
  .meta { margin: 6mm 0 0; font-size: 3.6mm; color: #5b6672; }
  .notes { background: #f4f7fa; border-radius: 3mm; padding: 10mm; }
  .notes h2 { margin: 0 0 4mm; font-family: Georgia, serif; font-size: 6mm; color: #0b2545; font-weight: 400; }
  .notes p { margin: 0 0 4mm; font-size: 3.8mm; line-height: 1.55; color: #5b6672; }
  .notes ul { margin: 0 0 5mm; padding-left: 5mm; }
  .notes li { font-size: 3.8mm; line-height: 1.55; color: #5b6672; margin-bottom: 2.5mm; }
  .notes strong { color: #22262b; }
  .ask { border-top: 0.3mm solid #c6d6e8; padding-top: 4mm; margin-bottom: 0 !important; }
</style></head><body>${body}</body></html>`;

const htmlPath = path.join(SHOT_DIR, "_pack.html");
await writeFile(htmlPath, html, "utf8");

const pdfCtx = await browser.newContext();
const pdfPageObj = await pdfCtx.newPage();
await pdfPageObj.goto(pathToFileURL(htmlPath).href, { waitUntil: "networkidle" });
await pdfPageObj.pdf({
  path: PDF_PATH,
  format: "A4",
  landscape: true,
  printBackground: true,
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
});
await browser.close();

console.log(`\nwrote ${PDF_PATH}`);
