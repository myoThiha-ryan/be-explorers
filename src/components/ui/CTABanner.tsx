import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

type Props = {
  heading: string;
  body?: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
};

/** Full-width deep-blue enquiry prompt used at the foot of most pages. */
export function CTABanner({ heading, body, primary, secondary }: Props) {
  return (
    <section className="bg-navy-800 text-white">
      <Container className="py-20 text-center md:py-28">
        <h2 className="mx-auto max-w-2xl text-[2rem] leading-[1.12] text-white sm:text-[2.5rem] lg:text-[2.875rem]">
          {heading}
        </h2>
        {body && (
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-navy-100">
            {body}
          </p>
        )}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={primary.href} variant="onDark" size="lg" className="w-full sm:w-auto">
            {primary.label}
          </Button>
          {secondary && (
            <Button
              href={secondary.href}
              variant="onDarkGhost"
              size="lg"
              className="w-full sm:w-auto"
            >
              {secondary.label}
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}
