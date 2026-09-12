import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TourCard } from "@/components/ui/TourCard";
import { featuredTours } from "@/content/tours";

export function FeaturedTours() {
  return (
    <section id="tours" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Featured"
          tone="warm"
          title="Explore Our Tours"
          intro="From iconic London landmarks to memorable day trips, discover experiences designed around you."
          aside={
            <span className="hidden md:block">
              <Button href="/tours" variant="secondary">
                View All Tours
                <Icon name="arrow" className="size-4" />
              </Button>
            </span>
          }
        />

        <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {featuredTours.map((tour, index) => (
            <TourCard key={tour.slug} tour={tour} priority={index === 0} />
          ))}
        </div>

        <div className="mt-12 md:hidden">
          <Button href="/tours" variant="secondary" className="w-full">
            View All Tours
            <Icon name="arrow" className="size-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
