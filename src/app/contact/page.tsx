import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { EnquiryForm } from "@/components/ui/EnquiryForm";
import { Icon, type IconName } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { site, socials } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Send an enquiry about a London walking tour or a full-day trip to Windsor, Stonehenge and Bath, or Oxford and Cambridge, guided in English, Myanmar or German.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Plan Your London Experience"
        intro="Tell us your dates, your group and the language you'd like — we'll come back with what's possible and what it costs. No online booking, no payment taken here."
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
            <EnquiryForm />

            <aside className="space-y-10">
              <div>
                <h2 className="text-xl">Contact directly</h2>
                <ul className="mt-5 space-y-4">
                  <ContactRow
                    icon="mail"
                    label={site.email}
                    href={`mailto:${site.email}`}
                  />
                  <ContactRow
                    icon="whatsapp"
                    label={`WhatsApp ${site.whatsapp}`}
                    href={site.whatsappUrl}
                    external
                  />
                </ul>
                <p className="mt-5 leading-relaxed text-ink-muted">
                  {site.responseTime} For anything in the next few days, WhatsApp
                  is fastest.
                </p>
              </div>

              <div>
                <h2 className="text-xl">Follow along</h2>
                <ul className="mt-5 space-y-4">
                  {socials.map((social) => (
                    <ContactRow
                      key={social.label}
                      icon={social.label.toLowerCase() as IconName}
                      label={`${social.label} · ${social.handle}`}
                      href={social.href}
                      external
                    />
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-line bg-mist p-6">
                <h2 className="text-lg">Before you write</h2>
                <p className="mt-3 leading-relaxed text-ink-muted">
                  Most questions about pricing, group sizes and cancellations are
                  already answered on the{" "}
                  <Link href="/faqs" className="text-navy-800 underline underline-offset-4">
                    FAQs page
                  </Link>
                  .
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}

function ContactRow({
  icon,
  label,
  href,
  external,
}: {
  icon: IconName;
  label: string;
  href: string;
  external?: boolean;
}) {
  return (
    <li>
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="inline-flex items-center gap-3 text-ink-muted transition-colors hover:text-navy-800"
      >
        <Icon name={icon} className="size-5 text-navy-800" />
        {label}
      </a>
    </li>
  );
}
