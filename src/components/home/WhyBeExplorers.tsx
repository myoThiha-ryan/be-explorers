import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { benefits } from "@/content/home";

export function WhyBeExplorers() {
  return (
    <section className="bg-mist py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why BeExplorers"
          title="Explore Differently"
          intro="One experienced guide, itineraries planned in advance, and a tour you can follow comfortably in your own language."
        />

        <ul className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
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
  );
}
