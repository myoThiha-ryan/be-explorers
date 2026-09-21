import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { offers } from "@/content/home";

export function WaysToExplore() {
  return (
    <section className="bg-sand-50 py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="What we offer"
          tone="warm"
          title="Ways to Explore"
          intro="Five ways to see London and the country around it — on foot, for a day, or privately with your own group."
        />

        <ul className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer) => (
            <li key={offer.title}>
              <span className="inline-flex size-12 items-center justify-center rounded-full bg-clay-100 text-clay-600">
                <Icon name={offer.icon} className="size-6" />
              </span>
              <h3 className="mt-5 text-xl">
                <Link
                  href={offer.href}
                  className="transition-colors hover:text-clay-600"
                >
                  {offer.title}
                </Link>
              </h3>
              <p className="mt-2.5 leading-relaxed text-black">{offer.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
