import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { howItWorks } from "@/content/home";

export function HowItWorks() {
  return (
    <section className="bg-sand-50 py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          tone="warm"
          title="Three steps, no booking system"
          intro="Every tour is arranged personally, so the first move is simply telling us what you have in mind."
        />

        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {howItWorks.map((step) => (
            <li key={step.step} className="border-t-2 border-clay-200 pt-6">
              <span className="font-display text-2xl font-medium text-clay-500">
                {step.step}
              </span>
              <h3 className="mt-4 text-xl">{step.title}</h3>
              <p className="mt-2.5 leading-relaxed text-ink-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
