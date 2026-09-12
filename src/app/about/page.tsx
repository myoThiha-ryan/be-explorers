import type { Metadata } from "next";
import Image from "next/image";
import { CTABanner } from "@/components/ui/CTABanner";
import { Container } from "@/components/ui/Container";
import { GuidePortrait } from "@/components/ui/GuidePortrait";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { gallery, guide, story, timeline } from "@/content/about";
import { benefits } from "@/content/home";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `${site.name} is ${site.guide} — a London guide with over a decade in the travel industry, leading walking tours and day trips in English, Myanmar and German.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A London guide, not a tour desk"
        intro={`${site.name} is a London-based travel company for memorable experiences across London and beyond. Every tour is personally guided by ${site.guide}.`}
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
            {/* Sticky on wide screens: the biography beside it is long. */}
            <div className="lg:sticky lg:top-28">
              <GuidePortrait className="aspect-4/5 w-full" priority />

              <dl className="mt-10 grid gap-6 sm:grid-cols-2">
                <div>
                  <dt className="text-xs uppercase tracking-[0.14em] text-ink-muted">
                    Based in
                  </dt>
                  <dd className="mt-1 text-ink">{site.city}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.14em] text-ink-muted">
                    Guiding in
                  </dt>
                  {/* leading-8: Myanmar glyphs are taller than the Latin line box */}
                  <dd className="mt-1 leading-8 text-ink">
                    English · Deutsch · <span className="font-my">မြန်မာ</span>
                  </dd>
                </div>
              </dl>
            </div>

            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
                {guide.eyebrow}
              </p>
              <h2 className="text-[2rem] leading-[1.12] sm:text-[2.5rem]">
                {guide.heading}
              </h2>
              <p className="mt-5 text-xl leading-relaxed text-ink">
                {guide.standfirst}
              </p>

              <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-muted">
                {guide.bio.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>

              <p className="mt-10 border-t border-line pt-8 font-display text-2xl leading-relaxed text-navy-800">
                {guide.closing}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-mist py-20 md:py-28">
        <Container size="narrow">
          <SectionHeading title="A decade in travel" />
          <ol className="mt-12 border-l border-line">
            {timeline.map((entry) => (
              <li
                key={`${entry.year}-${entry.label}`}
                className="grid gap-1 pb-9 pl-6 last:pb-0 sm:grid-cols-[8rem_1fr] sm:gap-6"
              >
                <span className="text-sm font-semibold tracking-[0.06em] text-navy-800">
                  {entry.year}
                </span>
                <span className="text-lg leading-relaxed text-ink-muted">
                  {entry.label}
                </span>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading title={gallery.heading} intro={gallery.intro} />

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {gallery.portraits.map((image) => (
              <div
                key={image.src}
                className="relative aspect-4/3 overflow-hidden rounded-2xl bg-mist sm:aspect-4/5"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="relative mt-4 aspect-4/3 overflow-hidden rounded-2xl bg-mist sm:aspect-2/1">
            <Image
              src={gallery.wide.src}
              alt={gallery.wide.alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="bg-mist py-20 md:py-28">
        <Container size="narrow">
          <div className="space-y-14">
            {story.map((item) => (
              <div key={item.heading}>
                <h2 className="text-[1.75rem] sm:text-[2rem]">{item.heading}</h2>
                <p className="mt-5 text-lg leading-relaxed text-ink-muted">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading title="Why travel with us" align="center" />
          <ul className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <li key={benefit.title}>
                <Icon name={benefit.icon} className="size-7 text-navy-800" />
                <h3 className="mt-5 text-xl">{benefit.title}</h3>
                <p className="mt-2.5 leading-relaxed text-ink-muted">
                  {benefit.body}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CTABanner
        heading="Let's plan your London experience"
        body="Tell us what you'd like to see and we'll suggest the right tour — or build a new one."
        primary={{ label: "Get in Touch", href: "/contact" }}
        secondary={{ label: "Explore Tours", href: "/tours" }}
      />
    </>
  );
}
