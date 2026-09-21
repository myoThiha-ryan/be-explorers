import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { LanguageTags } from "@/components/ui/LanguageTags";
import type { Tour } from "@/content/tours";
import { cn } from "@/lib/cn";

type Props = {
  tour: Tour;
  priority?: boolean;
  className?: string;
  showPrice?: boolean;
};

export function TourCard({
  tour,
  priority,
  className,
  showPrice = true,
}: Props) {
  const href = `/tours/${tour.slug}`;

  return (
    <article className={cn("group flex flex-col", className)}>
      <Link
        href={href}
        className="relative block aspect-4/3 w-full overflow-hidden rounded-2xl bg-mist"
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image
          src={tour.image.src}
          alt={tour.image.alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </Link>

      <div className="flex flex-1 flex-col pt-6">
        {/* Fixed height so titles stay aligned across a row when one card's
            meta wraps to a second line. */}
        <div className="flex min-h-11 flex-wrap items-start gap-x-4 gap-y-1 text-sm text-ink-muted">
          <span className="inline-flex items-center gap-1.5 text-red-600 font-bold">
            <Icon name="pin" className="size-4 shrink-0 text-clay-500" />
            {tour.location}
          </span>
          {tour.duration && (
            <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-red-600 font-bold">
              <Icon name="clock" className="size-4 shrink-0 text-clay-500" />
              {tour.duration}
            </span>
          )}
        </div>

        <h3 className="text-2xl leading-snug">
          <Link
            href={href}
            className="transition-colors font-bold hover:text-navy-600 focus-visible:text-navy-600"
          >
            {tour.title}
          </Link>
        </h3>

        {/* The evocative name alone doesn't say which tour this is — the plain
            name keeps a grid of nine cards scannable. */}
        {tour.subtitle && (
          <p className="mt-1.5 text-[0.9375rem] text-black">{tour.subtitle}</p>
        )}

        <p className="mt-3 leading-relaxed text-black">{tour.summary}</p>

        <LanguageTags codes={tour.languages} className="mt-5" />

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-line pt-5 sm:mt-auto">
          <Link
            href={href}
            className="inline-flex items-center gap-2 text-[0.9375rem] font-medium text-navy-800 transition-colors hover:text-navy-600"
          >
            View Tour
            <Icon
              name="arrow"
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
          {showPrice && (
            <p className="text-sm text-ink-muted">
              {tour.priceFrom ? (
                <>
                  <span className="font-medium text-ink">
                    £{tour.priceFrom}
                  </span>{" "}
                  {tour.priceUnit}
                </>
              ) : (
                "Price on enquiry"
              )}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
