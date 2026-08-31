import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How BeExplorers handles the information you send us.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        intro="Placeholder wording — have this reviewed against UK GDPR before launch."
      />
      <section className="py-20 md:py-28">
        <Container size="narrow">
          <div className="space-y-10 leading-relaxed text-ink-muted">
            <div>
              <h2 className="text-xl">What we collect</h2>
              <p className="mt-3">
                Only what you type into the enquiry form: your name, email,
                optional phone number, and the details of the tour you are asking
                about.
              </p>
            </div>
            <div>
              <h2 className="text-xl">What we do with it</h2>
              <p className="mt-3">
                We use it to answer your enquiry and arrange your tour. We do not
                sell it, and we do not add you to a mailing list without asking.
              </p>
            </div>
            <div>
              <h2 className="text-xl">How long we keep it</h2>
              <p className="mt-3">
                Enquiries are kept for as long as needed to run the business and
                meet UK accounting requirements, then deleted.
              </p>
            </div>
            <div>
              <h2 className="text-xl">Your rights</h2>
              <p className="mt-3">
                You can ask what we hold, ask for a copy, or ask us to delete it.
                Write to{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="text-navy-800 underline underline-offset-4"
                >
                  {site.email}
                </a>
                .
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
