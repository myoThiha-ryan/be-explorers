import { Container } from "@/components/ui/Container";
import { DestinationCard } from "@/components/ui/DestinationCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { destinations } from "@/content/home";

/** Six tiles over three rows of a 6-column grid: 4+2, 3+3, 3+3. */
const spans = {
  wide: "md:col-span-4",
  half: "md:col-span-3",
  narrow: "md:col-span-2",
};

export function Destinations() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Destinations"
          tone="warm"
          title="London & Beyond"
          intro="Start in the capital, then take a full-day trip to Windsor, Stonehenge and Bath, or Oxford and Cambridge, and discover more of England in a day."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-6">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.name}
              name={destination.name}
              note={destination.note}
              href={destination.href}
              image={destination.image}
              className={`h-72 md:h-96 ${spans[destination.span]}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
