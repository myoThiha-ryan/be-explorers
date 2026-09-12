import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GuidePortrait } from "@/components/ui/GuidePortrait";
import { Icon } from "@/components/ui/Icon";
import { aboutGuide } from "@/content/home";
import { site } from "@/content/site";

export function AboutGuide() {
  return (
    <section className="bg-sand-50 py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* The portrait sits on an offset clay block — the one piece of flat
              colour on the page, and the reason this section reads as a person
              rather than a stock photo. */}
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl bg-clay-200 sm:-bottom-6 sm:-right-6"
            />
            <GuidePortrait className="relative aspect-4/5 w-full" />
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-clay-600">
              {aboutGuide.eyebrow}
            </p>
            <h2 className="text-[2rem] leading-[1.12] sm:text-[2.5rem]">
              {aboutGuide.heading}
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-muted">
              {aboutGuide.body.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>

            <p className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-clay-100 py-2 pl-3 pr-5 text-sm text-clay-700">
              <Icon name="heart" className="size-4" />
              Every tour guided personally by {site.guide}
            </p>

            <div className="mt-9">
              <Button href={aboutGuide.cta.href} variant="warm">
                {aboutGuide.cta.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
