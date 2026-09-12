import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { benefits } from "@/content/home";

export function WhyBeExplorers() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why BeExplorers"
          tone="warm"
          title="Explore Differently"
          intro="One experienced guide, itineraries planned in advance, and a tour you can follow comfortably in your own language."
        />

        <ul className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <li key={benefit.title}>
              <span className="inline-flex size-12 items-center justify-center rounded-full bg-clay-100 text-clay-600">
                <Icon name={benefit.icon} className="size-6" />
              </span>
              <h3 className="mt-5 text-xl">{benefit.title}</h3>
              <p className="mt-2.5 leading-relaxed text-ink-muted">
                {benefit.body}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
