import { TestimonialCarousel } from "@/components/home/TestimonialCarousel";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/content/home";
import { site } from "@/content/site";

export function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Guest stories"
          tone="warm"
          title="What travellers say"
          intro={`${testimonials.length} reviews from guests who have walked with ${site.guide}.`}
        />

        <TestimonialCarousel items={testimonials} />
      </Container>
    </section>
  );
}
