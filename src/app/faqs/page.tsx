import type { Metadata } from "next";
import { CTABanner } from "@/components/ui/CTABanner";
import { Container } from "@/components/ui/Container";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { PageHero } from "@/components/ui/PageHero";
import { faqGroups } from "@/content/faqs";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers on enquiries, private tours, languages, pricing, changes and accessibility.",
};

export default function FaqsPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Questions, answered"
        intro="Everything we are usually asked before a tour. If yours isn't here, just ask — we would rather answer it directly."
      />

      <section className="py-20 md:py-28">
        <Container size="narrow">
          <div className="space-y-16">
            {faqGroups.map((group) => (
              <div key={group.title}>
                <h2 className="text-[1.5rem] sm:text-[1.75rem]">{group.title}</h2>
                <FaqAccordion items={group.items} className="mt-6" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner
        heading="Still have a question?"
        body="Send it over — we answer every enquiry personally."
        primary={{ label: "Contact Us", href: "/contact" }}
        secondary={{ label: "View All Tours", href: "/tours" }}
      />
    </>
  );
}
