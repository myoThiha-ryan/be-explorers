import { Container } from "@/components/ui/Container";
import { welcome } from "@/content/home";

export function Welcome() {
  return (
    <section className="py-20 md:py-28">
      <Container size="narrow" className="text-center">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
          {welcome.eyebrow}
        </p>
        <h2 className="text-[2rem] leading-[1.12] sm:text-[2.5rem]">
          {welcome.heading}
        </h2>
        <div className="mt-7 space-y-5 text-lg leading-relaxed text-ink-muted">
          {welcome.body.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
      </Container>
    </section>
  );
}
