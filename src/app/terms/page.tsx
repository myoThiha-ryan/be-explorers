import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms that apply to BeExplorers tours.",
};

const sections = [
  {
    heading: "Enquiries and confirmation",
    body: "Nothing on this website is a booking. A tour is confirmed only once we have replied in writing and agreed a date, a price and a meeting point.",
  },
  {
    heading: "Payment",
    body: "Payment is arranged directly, by bank transfer, after the tour is confirmed. No payment is taken through this website.",
  },
  {
    heading: "Changes and cancellation",
    body: "Cancellations more than 7 days before the tour are refunded in full. Inside 7 days we will always try to move the date rather than cancel. If we have to cancel, you are refunded in full.",
  },
  {
    heading: "Weather and safety",
    body: "Tours run in most weather. If conditions make a route unsafe we will adapt it, or move the date at no cost to you.",
  },
  {
    heading: "Your responsibility",
    body: "Please arrive at the meeting point on time and tell us in advance about mobility needs, medical conditions or anything else that affects how the day should be planned.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms & Conditions"
        intro="Placeholder wording — have this reviewed by a solicitor before launch."
      />
      <section className="py-20 md:py-28">
        <Container size="narrow">
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-xl">{section.heading}</h2>
                <p className="mt-3 leading-relaxed text-ink-muted">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
