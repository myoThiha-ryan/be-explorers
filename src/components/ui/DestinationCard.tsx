import Image from "next/image";
import Link from "next/link";
import type { SiteImage } from "@/content/images";
import { cn } from "@/lib/cn";

type Props = {
  name: string;
  note?: string;
  href: string;
  image: SiteImage;
  className?: string;
};

export function DestinationCard({ name, note, href, image, className }: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative isolate block overflow-hidden rounded-2xl bg-navy-800",
        className,
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-linear-to-t from-navy-900/90 via-navy-900/25 to-transparent" />
      <div className="relative flex h-full flex-col justify-end p-6 sm:p-8">
        <h3 className="text-2xl text-white sm:text-[1.75rem]">{name}</h3>
        {note && (
          <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-white/80">
            {note}
          </p>
        )}
      </div>
    </Link>
  );
}
