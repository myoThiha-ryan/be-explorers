"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { cn } from "@/lib/cn";

/** Above this many reviews, the dots give way to a counter. */
const DOT_LIMIT = 8;

type Testimonial = {
  quote: string;
  name: string;
  detail?: string;
  language?: string;
};

type Props = {
  items: Testimonial[];
};

/**
 * One review at a time, on a native scroll-snap track.
 *
 * No carousel library and no JS-driven transform: the track is an ordinary
 * horizontally scrolling list, so touch swipe, trackpad and keyboard arrows all
 * work before any of this code runs. The buttons and dots just call
 * `scrollTo`, and the active index is read back off the scroll position — so
 * the controls stay in step with a swipe rather than fighting it.
 *
 * Deliberately not auto-advancing: content that moves on its own is hard to
 * read, and the rest of the site keeps motion to a minimum.
 */
export function TestimonialCarousel({ items }: Props) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);

  // Read the active slide back off the scroll position.
  const handleScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const next = Math.round(track.scrollLeft / track.clientWidth);
    setIndex(Math.max(0, Math.min(items.length - 1, next)));
  }, [items.length]);

  const goTo = useCallback((to: number) => {
    const track = trackRef.current;
    if (!track) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({
      left: to * track.clientWidth,
      behavior: reduced ? "auto" : "smooth",
    });
  }, []);

  // Keep the slide in view if the viewport is resized mid-carousel.
  useEffect(() => {
    const onResize = () => goTo(index);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [goTo, index]);

  const atStart = index === 0;
  const atEnd = index === items.length - 1;

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label="Guest reviews"
      className="mt-14"
    >
      <ul
        ref={trackRef}
        onScroll={handleScroll}
        tabIndex={0}
        aria-label={`Guest reviews, ${items.length} in total`}
        className={cn(
          "flex snap-x snap-mandatory overflow-x-auto",
          // The scrollbar is redundant next to the dots, and its height would
          // shift the card on platforms that reserve space for it.
          "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        )}
      >
        {items.map((item, i) => (
          <li
            key={item.quote}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${items.length}`}
            aria-hidden={i !== index}
            className="w-full shrink-0 snap-center px-1"
          >
            <TestimonialCard {...item} className="mx-auto max-w-3xl" />
          </li>
        ))}
      </ul>

      <div className="mt-8 flex items-center justify-center gap-6">
        <CarouselButton
          label="Previous review"
          onClick={() => goTo(index - 1)}
          disabled={atStart}
          flip
        />

        {/* A dot per review stops being usable past a handful of them, so a
            long list gets a counter instead — which doubles as a count of how
            many reviews there are. */}
        {items.length > DOT_LIMIT ? (
          <p
            aria-live="polite"
            className="min-w-24 text-center text-sm tabular-nums text-ink-muted"
          >
            <span className="font-medium text-navy-800">{index + 1}</span> of{" "}
            {items.length}
          </p>
        ) : (
          <ul className="flex items-center gap-2.5">
            {items.map((item, i) => (
              <li key={item.quote}>
                <button
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Show review ${i + 1} of ${items.length}`}
                  aria-current={i === index}
                  className={cn(
                    "block size-2.5 rounded-full transition-colors",
                    i === index
                      ? "bg-clay-500"
                      : "bg-sand-200 hover:bg-clay-200",
                  )}
                />
              </li>
            ))}
          </ul>
        )}

        <CarouselButton
          label="Next review"
          onClick={() => goTo(index + 1)}
          disabled={atEnd}
        />
      </div>
    </div>
  );
}

function CarouselButton({
  label,
  onClick,
  disabled,
  flip,
}: {
  label: string;
  onClick: () => void;
  disabled: boolean;
  flip?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="inline-flex size-11 items-center justify-center rounded-full border border-sand-200 text-navy-800 transition-colors hover:border-clay-400 hover:text-clay-600 disabled:pointer-events-none disabled:opacity-35"
    >
      <Icon name="arrow" className={cn("size-4", flip && "rotate-180")} />
    </button>
  );
}
