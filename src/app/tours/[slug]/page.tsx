import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { EnquiryForm } from "@/components/ui/EnquiryForm";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { Icon, type IconName } from "@/components/ui/Icon";
import { LanguageTags } from "@/components/ui/LanguageTags";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StickyEnquireBar } from "@/components/ui/StickyEnquireBar";
import { TourCard } from "@/components/ui/TourCard";
import { faqTeaser } from "@/content/faqs";
import { getTour, tourFullName, tourIncludes, tours } from "@/content/tours";

export function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/tours/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTour(slug);
  if (!tour) return {};
  return {
    // The descriptive name is what gets searched for, so it belongs in the
    // <title> even though the detail page leads with the evocative one.
    title: tourFullName(tour),
    description: tour.summary,
    alternates: { canonical: `/tours/${tour.slug}` },
  };
}

export default async function TourDetailPage({
  params,
}: PageProps<"/tours/[slug]">) {
  const { slug } = await params;
  const tour = getTour(slug);
  if (!tour) notFound();

  const related = tours.filter((t) => t.slug !== tour.slug).slice(0, 3);

  // Duration and group size are omitted for tours the client has not
  // confirmed them for, rather than guessed at.
  const quickFacts: { icon: IconName; label: string; value: string }[] = [
    ...(tour.duration
      ? [{ icon: "clock" as const, label: "Duration", value: tour.duration }]
      : []),
    { icon: "pin" as const, label: "Location", value: tour.location },
    ...(tour.groupType
      ? [{ icon: "users" as const, label: "Group", value: tour.groupType }]
      : []),
    {
      icon: "globe" as const,
      label: "Price",
      value: tour.priceFrom
        ? `£${tour.priceFrom} ${tour.priceUnit}`
        : "On enquiry",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[62vh] items-end bg-navy-800 pt-36 pb-14 md:min-h-[70vh] md:pb-20">
        <Image
          src={tour.image.src}
          alt={tour.image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy-900/55" />
        <Container className="relative">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-navy-200">
            {tour.subtitle ?? tour.categories.join(" · ")}
          </p>
          <h1 className="max-w-3xl text-[2.25rem] leading-[1.08] text-white sm:text-[3rem] lg:text-[3.5rem]">
            {tour.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
            {tour.summary}
          </p>
        </Container>
      </section>

      {/* Quick information bar */}
      <section className="border-b border-line bg-mist">
        <Container className="grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {quickFacts.map((fact) => (
            <div key={fact.label} className="flex items-start gap-3">
              <Icon name={fact.icon} className="mt-0.5 size-5 text-navy-800" />
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-ink-muted">
                  {fact.label}
                </p>
                <p className="mt-1 text-[0.9375rem] text-ink">{fact.value}</p>
              </div>
            </div>
          ))}
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1.6fr_1fr] lg:gap-20">
            <div>
              <h2 className="text-[1.75rem] sm:text-[2rem]">Tour overview</h2>
              <div className="mt-5 space-y-5 text-lg leading-relaxed text-ink-muted">
                {(tour.intro ?? [tour.summary]).map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
              {tour.pullQuote && (
                <p className="mt-8 border-l-2 border-navy-200 pl-6 font-display text-xl leading-relaxed text-navy-800">
                  {tour.pullQuote}
                </p>
              )}

              {tour.highlights && (
                <>
                  <h2 className="mt-14 text-[1.75rem] sm:text-[2rem]">
                    {tour.highlightsTitle ?? "What you’ll experience"}
                  </h2>
                  <ul className="mt-6 space-y-4">
                    {tour.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 leading-relaxed"
                      >
                        <Icon
                          name="check"
                          className="mt-1 size-4 shrink-0 text-navy-800"
                          strokeWidth={2}
                        />
                        <span className="text-ink-muted">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {tour.sections?.map((section) => (
                <div key={section.heading}>
                  <h2 className="mt-14 text-[1.75rem] sm:text-[2rem]">
                    {section.heading}
                  </h2>
                  <p className="mt-5 text-lg leading-relaxed text-ink-muted">
                    {section.body}
                  </p>
                </div>
              ))}

              {tour.detailsPending ? (
                <div className="mt-14 rounded-2xl border border-line bg-mist p-6 leading-relaxed text-ink-muted">
                  Full details for this tour — the itinerary, meeting point
                  {tour.priceFrom ? " and what is included" : ", what is included and the price"} —
                  are being finalised. Send an enquiry with your dates and we
                  will send everything through.
                </div>
              ) : (
                <div className="mt-14 grid gap-10 sm:grid-cols-2">
                  <div>
                    <h3 className="text-xl">What&rsquo;s included</h3>
                    <ul className="mt-4 space-y-3 text-[0.9375rem] leading-relaxed text-ink-muted">
                      {(tour.included ?? tourIncludes.included).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl">Not included</h3>
                    <ul className="mt-4 space-y-3 text-[0.9375rem] leading-relaxed text-ink-muted">
                      {(tour.notIncluded ?? tourIncludes.notIncluded).map(
                        (item) => (
                          <li key={item}>{item}</li>
                        ),
                      )}
                    </ul>
                  </div>
                </div>
              )}

              {/* Skipped entirely when a tour has none of these yet */}
              {(tour.meetingPoint ||
                tour.endPoint ||
                tour.whoFor ||
                tour.walking) && (
                <div className="mt-14 grid gap-10 sm:grid-cols-2">
                  {tour.meetingPoint && (
                    <div>
                      <h3 className="text-xl">Meeting point</h3>
                      <p className="mt-4 leading-relaxed text-ink-muted">
                        {tour.meetingPoint}
                      </p>
                    </div>
                  )}
                  {tour.endPoint && (
                    <div>
                      <h3 className="text-xl">Where we finish</h3>
                      <p className="mt-4 leading-relaxed text-ink-muted">
                        {tour.endPoint}
                      </p>
                    </div>
                  )}
                  {tour.walking && (
                    <div>
                      <h3 className="text-xl">Walking</h3>
                      <p className="mt-4 leading-relaxed text-ink-muted">
                        {tour.walking}
                      </p>
                    </div>
                  )}
                  {tour.whoFor && (
                    <div>
                      <h3 className="text-xl">Who this tour is for</h3>
                      <p className="mt-4 leading-relaxed text-ink-muted">
                        {tour.whoFor}
                      </p>
                    </div>
                  )}
                </div>
              )}

              <div className="mt-14">
                <h3 className="text-xl">Languages available</h3>
                <LanguageTags codes={tour.languages} className="mt-4" />
                <p className="mt-4 leading-relaxed text-ink-muted">
                  Tell us your preferred language when you enquire and the whole
                  tour is guided in it.
                </p>
              </div>
            </div>

            {/* Enquiry rail */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-2xl border border-line bg-mist p-8">
                <p className="text-sm uppercase tracking-[0.14em] text-ink-muted">
                  Price
                </p>
                <p className="mt-2 font-display text-4xl text-navy-800">
                  {tour.priceFrom ? `£${tour.priceFrom}` : "On enquiry"}
                </p>
                {tour.priceFrom ? (
                  <>
                    <p className="mt-1 text-sm text-ink-muted">
                      {tour.priceUnit}
                    </p>
                    {tour.priceNote && (
                      <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                        {tour.priceNote}
                      </p>
                    )}
                  </>
                ) : (
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    Tell us your dates and group size and we will send a price.
                  </p>
                )}
                <Button href="#enquire" size="lg" className="mt-8 w-full">
                  Enquire About This Tour
                </Button>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                  No payment is taken online. We confirm availability first,
                  then send the details.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* FAQs */}
      <section className="border-t border-line py-20 md:py-28">
        <Container size="narrow">
          <SectionHeading title="Good to know" align="center" />
          <FaqAccordion items={faqTeaser} className="mt-10" />
        </Container>
      </section>

      {/* Enquiry form */}
      <section id="enquire" className="bg-mist py-20 md:py-28">
        <Container size="narrow">
          <SectionHeading
            eyebrow="Enquire"
            title={`Enquire about ${tour.title}`}
            intro="Tell us your dates, your group and your language, and we will come back to you personally."
            align="center"
          />
          <EnquiryForm defaultTour={tourFullName(tour)} className="mt-12" />
        </Container>
      </section>

      {/* Related tours */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading title="Other tours you might like" />
          <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <TourCard key={item.slug} tour={item} showPrice={false} />
            ))}
          </div>
        </Container>
      </section>

      <StickyEnquireBar target="enquire" hideWhenVisible={["site-footer"]} />
    </>
  );
}
