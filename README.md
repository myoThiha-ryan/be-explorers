# BeExplorers

Marketing site for BeExplorers — London walking tours and day trips to Oxford,
Cambridge, Windsor Castle and Stonehenge, guided in English, Myanmar and German
by A Kay Mon. Enquiry-led: there is no online booking and no payment in this
version, by design.

Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS v4.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## How the project is laid out

```
src/
  app/                 routes — one folder per page
    api/enquiry/       enquiry form endpoint
    blog/[slug]/       blog articles, generated from the blog data
    tours/[slug]/      tour detail pages, generated from the tour data
  components/
    layout/            Header, Footer, Logo
    home/              the homepage sections, in page order
    ui/                reusable pieces (see below)
  content/             all copy and data — edit here, not in components
  lib/                 tiny helpers
public/images/         bundled destination photography
```

**All copy lives in `src/content/`.** Tour names, prices, FAQs, contact details
and social links can all be changed without touching a component:

| File | What it holds |
| --- | --- |
| `site.ts` | Brand, navigation, languages, email, WhatsApp, socials |
| `tours.ts` | Every tour — the tours page, homepage cards and detail pages all read from it |
| `home.ts` | Homepage section copy: hero, benefits, destinations, steps, testimonials |
| `faqs.ts` | FAQ groups, used on the FAQs page and as teasers elsewhere |
| `blog.ts` | The blog articles — the index and each article page read from it |
| `privacy.ts` | The client's UK GDPR privacy policy |
| `images.ts` | Every image on the site, in one registry |

Adding a tour to `tours.ts` gives you a card on `/tours`, a detail page at
`/tours/<slug>`, and an option in the enquiry form — no other changes needed.
Set `featured: true` to put it on the homepage.

**Pricing model.** The four fully-specified London walking tours share a
`walkingTour` object at the top of `tours.ts`: 2 hours, £20 per person,
under-18s free, special rates for families and companies booking privately.
Change it in one place and all four update. The remaining tours carry no
published price, so they show "Price on enquiry" — they are marked
`detailsPending: true` because their itinerary, meeting point and price have not
been supplied yet.

### Reusable components

`Container`, `Button`, `SectionHeading`, `PageHero`, `CTABanner`, `TourCard`,
`DestinationCard`, `TestimonialCard`, `FaqAccordion`, `LanguageTags`,
`EnquiryForm`, `Icon`.

A note on `Button`: it sets its own `display`, so to hide one responsively wrap
it in an element (`<span className="hidden sm:block">`) rather than passing
`hidden` through `className` — two competing display utilities resolve by
stylesheet order, not by the order you write them.

## Design system

Defined as tokens in `src/app/globals.css`:

- White page ground, deep navy (`navy-800` `#0b2545`) as the brand colour
- `mist` (`#f4f7fa`) for secondary sections, `ink` (`#22262b`) for body copy
- Poppins (`font-display` — headings, sub-headings, wordmark, pull quotes) +
  DM Sans (`font-sans` — UI and body copy) + Noto Sans Myanmar for Myanmar
  script. Poppins has no variable cut, so `src/app/layout.tsx` loads only the
  weights in use (400/500/600, normal and italic) — add to that list before
  using a new one, or the weight will silently fall back
- Generous vertical rhythm (`py-20 md:py-28`), 1200px container, mobile-first

Animation is deliberately minimal: one entrance on the hero copy, slow image
scale on hover, colour transitions. Everything respects
`prefers-reduced-motion`.

## Enquiry form

`POST /api/enquiry` validates the submission, drops honeypot spam, then
delivers it based on environment variables — see `.env.example`. With none set
it logs to the server console and still confirms to the visitor, so the site
can be deployed before an email provider is chosen.

There is no database and no payment integration, deliberately.

## Languages

The site itself is published in **English only**, and there is no language
switcher — that is out of scope for the first release. English, German and
Myanmar still appear throughout as the languages the *tours* are guided in:
the "Tours in Your Language" section, the tags on each tour card, the footer,
and the preferred-language field on the enquiry form. All three are defined
once in `languages` (`src/content/site.ts`).

To translate the site later:

1. `npm install next-intl`
2. Move the routes under `src/app/[locale]/`
3. Move the strings out of `src/content/` into per-locale message files
4. Add a switcher to the header, pointing each locale at its route

Myanmar text is rendered with Noto Sans Myanmar via the `font-my` utility —
keep using it for any Myanmar string, or it will show as boxes on Windows.

## Client review pack

`review/BeExplorers-design-preview.pdf` is a PDF of Home, Tours, About Us, FAQs
and Contact at desktop width (1440px), with a cover page listing what is still
placeholder so a reviewer does not sign off on it.

Sheets are cut on section boundaries, not at fixed heights, so a section is
never sliced mid-content: one that fits gets a sheet to itself, one up to 1.5×
too tall is scaled down to fit whole, and anything taller is split on its own
inner boundaries (a row of tour cards, an FAQ group). Each sheet is captioned
with the headings that appear on it. To regenerate after content changes:

```bash
npm run build
PORT=3100 npm start          # production server, so no dev badge appears
npm run review:pdf           # in a second terminal
```

It drives the Chrome already installed on the machine (via the `playwright`
devDependency — no browser download). The `review/` folder is gitignored.

## Deploying

The site is **noindex by default** — `src/app/robots.ts` serves `Disallow: /`
and every page carries a `noindex` meta tag, so a preview deployment full of
placeholder copy cannot end up in Google. At launch, on the real domain, set
`SITE_INDEXABLE=true` and redeploy (it is read at build time).

To put a preview in front of the client:

```bash
npx vercel login
npx vercel            # first run: accept the defaults, Next.js is auto-detected
npx vercel --prod     # promotes it to the stable project URL you share
```

No environment variables are required to build. Note that without enquiry
delivery configured (see `.env.example`), a form submission on the deployed site
succeeds for the visitor but only lands in the Vercel function logs — set
`RESEND_API_KEY` or `ENQUIRY_WEBHOOK_URL` before anyone relies on it.

On the free plan the production URL is public to anyone who has the link;
password protection is a paid feature.

## Before launch

- [ ] Replace the placeholder photography (see `public/images/ATTRIBUTION.md`)
- [ ] Confirm the guide photo. `public/images/guide-portrait.jpg` was supplied
      by the client and renders in `GuidePortrait` on the homepage and About
      page. Its alt text does not name anyone — if the person in it is A Kay
      Mon, name her in `images.guidePortrait.alt` for accessibility and search
- [ ] Confirm `+44 7852 583872` is reachable on WhatsApp — the contact page and
      form confirmation both offer it as a WhatsApp number
- [ ] Replace the placeholder social URLs in `src/content/site.ts`
- [ ] Two blog articles promise ten items and list nine — "Here are 10 things
      worth knowing" in `first-time-visitor-guide`, and the title and intro of
      `hidden-london-stories`. Ask the client for the missing item in each, or
      change the number (`src/content/blog.ts`)
- [ ] Wire up enquiry delivery (`.env.example`)
- [ ] Replace the Terms & Conditions — still placeholder wording. (The Privacy
      Policy is the client's own UK GDPR text, in `src/content/privacy.ts`.)
- [ ] Set `SITE_INDEXABLE=true` on the production environment and redeploy, so
      the site can be indexed (it is deliberately noindex until then)
- [ ] Serve the site from one canonical host. `site.url` is
      `https://beexplorerstravelandtours.com` (no `www`), and it drives the
      canonical link, Open Graph URLs and `robots.txt` — so configure the host
      to redirect `www` to the bare domain rather than serving both

## Not built yet

Tour filtering on `/tours`, and translated content. The data model and
components are ready for both.
