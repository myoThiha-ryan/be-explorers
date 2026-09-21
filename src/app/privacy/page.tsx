import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import {
  intro,
  lastUpdated,
  legalName,
  policySections,
  type PolicyBlock,
} from "@/content/privacy";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${legalName} collects, uses and protects your personal information under UK GDPR.`,
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        intro={`${legalName} · last updated ${lastUpdated}`}
      />

      <section className="py-20 md:py-28">
        <Container size="narrow">
          <div className="space-y-5 text-lg leading-relaxed text-ink-muted">
            {intro.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>

          {/* Numbered so a reader can cite a clause back at us */}
          <ol className="mt-14 space-y-12">
            {policySections.map((section, index) => (
              <li key={section.heading}>
                <h2 className="text-[1.5rem] sm:text-[1.75rem]">
                  <span className="mr-3 text-clay-500">{index + 1}.</span>
                  {section.heading}
                </h2>
                <div className="mt-5 space-y-5 leading-relaxed text-ink-muted">
                  {section.blocks.map((block, i) => (
                    <Block key={block.subheading ?? block.text ?? i} {...block} />
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
}

function Block({ subheading, text, list, contact }: PolicyBlock) {
  if (contact) {
    return (
      <div className="rounded-2xl bg-sand-50 p-6 ring-1 ring-sand-200">
        <p className="font-medium text-navy-800">{legalName}</p>
        <ul className="mt-2 space-y-1">
          <li>
            <a
              href={`mailto:${site.email}`}
              className="text-navy-800 underline underline-offset-4"
            >
              {site.email}
            </a>
          </li>
          <li>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="text-navy-800 underline underline-offset-4"
            >
              {site.phone}
            </a>
          </li>
          <li>{site.url.replace(/^https?:\/\//, "")}</li>
        </ul>
      </div>
    );
  }

  return (
    <div>
      {subheading && (
        <p className="font-medium text-navy-800">{subheading}</p>
      )}
      {text && <p className={subheading ? "mt-2" : undefined}>{text}</p>}
      {list && (
        <ul className="mt-3 space-y-1.5">
          {list.map((item) => (
            <li key={item} className="flex gap-2.5">
              <span aria-hidden="true" className="text-clay-400">
                &bull;
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
