import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PortraitPlaceholder } from "@/components/ui/PortraitPlaceholder";
import { aboutGuide } from "@/content/home";

export function AboutGuide() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <PortraitPlaceholder className="aspect-4/5 w-full sm:aspect-4/3 lg:aspect-4/5" />

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
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
            <Button href={aboutGuide.cta.href} variant="secondary" className="mt-9">
              {aboutGuide.cta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
