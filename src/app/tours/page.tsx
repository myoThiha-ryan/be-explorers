import type { Metadata } from "next";
import { CTABanner } from "@/components/ui/CTABanner";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { TourCard } from "@/components/ui/TourCard";
import { images } from "@/content/images";
import { tours } from "@/content/tours";

export const metadata: Metadata = {
  title: "Tours",
  description:
    "London walking tours and full-day trips to Windsor, Stonehenge and Bath, or Oxford and Cambridge — guided in English, Myanmar and German.",
};

export default function ToursPage() {
  return (
    <>
      <PageHero
        eyebrow="Tours"
        title="Explore Our Tours"
        intro="Small-group walking tours of London at £20 per person, and full-day trips further afield. Every tour can also be booked privately for families, friends or companies. If you don't see what you're after, it can almost certainly be arranged."
        image={images.thamesWestminster}
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {tours.map((tour, index) => (
              <TourCard key={tour.slug} tour={tour} priority={index < 3} />
            ))}
          </div>
        </Container>
      </section>

      <CTABanner
        heading="Looking for something different?"
        body="Half a day, a specific neighbourhood, a family history trail — tell us what you have in mind and we'll build the route around it."
        primary={{ label: "Plan a Custom Tour", href: "/contact" }}
        secondary={{ label: "Read the FAQs", href: "/faqs" }}
      />
    </>
  );
}
