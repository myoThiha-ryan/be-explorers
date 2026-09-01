import type { Metadata } from "next";
import { CTABanner } from "@/components/ui/CTABanner";
import { Container } from "@/components/ui/Container";
import { GuidePortrait } from "@/components/ui/GuidePortrait";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { benefits } from "@/content/home";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `${site.name} is ${site.guide} — a London guide leading walking tours and day trips in English, Myanmar and German.`,
};

const story = [
  {
    heading: "Tours designed for curious travellers",
    body: "Our itineraries are thoughtfully planned to make the most of your time, combining history, culture, famous landmarks and fascinating stories with a friendly and personal guiding experience.",
  },
  {
    heading: "Shared, private or tailor-made",
    body: "We offer both shared tours and private experiences, as well as corporate, group and tailor-made tours designed around your needs. Tell us your interests, schedule, group size and preferred destinations, and we will build the itinerary around them.",
  },
];

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
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <GuidePortrait className="aspect-4/5 w-full" priority />
            <div>
              <h2 className="text-[2rem] leading-[1.12] sm:text-[2.5rem]">
                Meet your guide
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-muted">
                <p>
                  All our tours are guided by {site.guide}, an experienced travel
                  professional who has worked in the tourism industry since 2012
                  with internationally recognised travel companies.
                </p>
                <p>
                  Tours are guided in English, Myanmar and German, which means
                  the same city can be shown to a family from Munich, a couple
                  from Yangon and visitors from anywhere else — and everyone can
                  follow it comfortably.
                </p>
                <p>
                  Every {site.name} tour is led personally. You are never handed
                  to a different guide on the day.
                </p>
              </div>

              <dl className="mt-10 grid gap-6 sm:grid-cols-2">
                <div>
                  <dt className="text-xs uppercase tracking-[0.14em] text-ink-muted">
                    Based in
                  </dt>
                  <dd className="mt-1 text-ink">London, United Kingdom</dd>
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
