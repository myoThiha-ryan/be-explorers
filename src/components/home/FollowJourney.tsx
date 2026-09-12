import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { socialGrid } from "@/content/home";
import { socials } from "@/content/site";

export function FollowJourney() {
  return (
    <section className="border-t border-sand-200 py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Instagram · Facebook · TikTok"
          tone="warm"
          title="Follow the Journey"
          intro="Corners of London, day trips and whatever the weather is doing — shared as we go."
          align="center"
        />

        <ul className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {socialGrid.map((image) => (
            <li
              key={image.src}
              className="relative aspect-square overflow-hidden rounded-xl bg-mist"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
              />
            </li>
          ))}
        </ul>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[0.9375rem] text-navy-800 underline-offset-4 transition-colors hover:underline"
              >
                <Icon
                  name={social.label.toLowerCase() as IconName}
                  className="size-5"
                />
                {social.handle}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
