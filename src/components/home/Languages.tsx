import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { languages } from "@/content/site";
import { cn } from "@/lib/cn";

export function Languages() {
  return (
    <section className="bg-navy-800 py-20 text-white md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Languages"
          title="Tours in Your Language"
          intro="Explore London with a guide who can explain it comfortably in the language you think in — not a translated script, just an ordinary conversation."
          tone="dark"
          align="center"
        />

        <ul className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/15 md:grid-cols-3">
          {languages.map((language) => (
            <li key={language.code} className="bg-navy-800 p-8 md:p-10">
              <p
                className={cn(
                  "font-display text-3xl text-white",
                  language.script === "myanmar" && "font-my text-2xl",
                )}
              >
                {language.native}
              </p>
              <p className="mt-1 text-sm uppercase tracking-[0.18em] text-navy-200">
                {language.english}
              </p>
              <p className="mt-5 leading-relaxed text-navy-100">
                {language.blurb}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
