import { Container } from "@/components/ui/Container";
import { DestinationCard } from "@/components/ui/DestinationCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { destinations } from "@/content/home";

export function Destinations() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Destinations"
          title="London & Beyond"
          intro="Start in the capital, then take a day trip to Oxford, Cambridge, Windsor Castle or Stonehenge and discover more of England in a day."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-6">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.name}
              name={destination.name}
              note={destination.note}
              href={destination.href}
              image={destination.image}
              className={
                destination.span === "wide"
                  ? "h-72 md:col-span-4 md:h-96"
                  : "h-72 md:col-span-2 md:h-96"
              }
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
