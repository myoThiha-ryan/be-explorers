import Image from "next/image";
import { Container } from "@/components/ui/Container";
import type { SiteImage } from "@/content/images";

type Props = {
  eyebrow?: string;
  title: string;
  intro?: string;
  image?: SiteImage;
  children?: React.ReactNode;
};

/**
 * Compact hero for inner pages. With an image it renders as a dark banner;
 * without one, as a quiet white header. The homepage uses its own full-bleed hero.
 */
export function PageHero({ eyebrow, title, intro, image, children }: Props) {
  if (!image) {
    return (
      <section className="border-b border-line bg-mist pt-36 pb-16 md:pt-44 md:pb-20">
        <Container>
          {eyebrow && (
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
              {eyebrow}
            </p>
          )}
          <h1 className="max-w-3xl text-[2.25rem] leading-[1.08] sm:text-[3rem] lg:text-[3.5rem]">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
              {intro}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </Container>
      </section>
    );
  }

  return (
    <section className="relative isolate flex min-h-[62vh] items-end bg-navy-800 pt-36 pb-14 md:min-h-[68vh] md:pb-20">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-navy-900/55" />
      <Container className="relative">
        {eyebrow && (
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-navy-200">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl text-[2.25rem] leading-[1.08] text-white sm:text-[3rem] lg:text-[3.5rem]">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
            {intro}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </Container>
    </section>
  );
}
