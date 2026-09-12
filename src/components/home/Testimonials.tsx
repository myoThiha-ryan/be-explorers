import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { testimonials } from "@/content/home";

export function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Guest stories"
          tone="warm"
          title="What travellers say"
        />

        <ul className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {testimonials.map((testimonial) => (
            <li key={testimonial.name}>
              <TestimonialCard {...testimonial} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
