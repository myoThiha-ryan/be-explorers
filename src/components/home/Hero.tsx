import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { hero } from "@/content/home";

export function Hero() {
  return (
    // Content is bottom-aligned, so the generous bottom padding is what holds
    // the headline at the height it sat at when a trust row followed it.
    <section className="relative isolate flex min-h-[92vh] items-end overflow-hidden bg-navy-900 pt-28 pb-48 md:min-h-[94vh] md:pb-40">
      <Image
        src={hero.image.src}
        alt={hero.image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Scrims: keep the type readable without washing out the photograph.
          A light overall wash, a top band for the transparent header, and a
          stronger foot where the headline sits. The wash is deliberately
          lighter than a pure navy scrim, and a clay layer over it warms the
          photograph rather than draining it. */}
      <div className="absolute inset-0 bg-navy-900/22" />
      <div className="absolute inset-0 bg-linear-to-tr from-clay-500/30 via-clay-400/10 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-navy-900/55 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-3/4 bg-linear-to-t from-navy-900/85 via-navy-900/35 to-transparent" />

      <Container className="relative">
        <div className="max-w-3xl">
          <h1 className="rise rise-1 text-[2.5rem] leading-[1.05] text-white sm:text-[3.5rem] lg:text-[4.25rem]">
            {hero.headline}
          </h1>
          <p className="rise rise-2 mt-6 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">
            {hero.supporting}
          </p>
          <div className="rise rise-3 mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button href={hero.primaryCta.href} variant="warm" size="lg">
              {hero.primaryCta.label}
            </Button>
            <Button
              href={hero.secondaryCta.href}
              variant="onDarkGhost"
              size="lg"
            >
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
