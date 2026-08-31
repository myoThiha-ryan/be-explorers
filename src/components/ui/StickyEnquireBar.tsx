"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

type Props = {
  /** Id of the section the bar links to */
  target: string;
  /** Ids that make the bar redundant while they are on screen */
  hideWhenVisible?: string[];
  label?: string;
};

/**
 * Mobile-only enquiry bar for tour detail pages. Fixed rather than sticky — a
 * sticky child only sticks inside its own container, so it would drift away
 * above the footer — and it steps aside while the enquiry form or the footer is
 * in view, so it never covers either.
 */
export function StickyEnquireBar({
  target,
  hideWhenVisible = [],
  label = "Enquire about this tour",
}: Props) {
  const [visibleIds, setVisibleIds] = useState<string[]>([]);

  useEffect(() => {
    const ids = [target, ...hideWhenVisible];
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleIds((current) => {
          const next = new Set(current);
          for (const entry of entries) {
            if (entry.isIntersecting) next.add(entry.target.id);
            else next.delete(entry.target.id);
          }
          return [...next];
        });
      },
      { rootMargin: "0px 0px -15% 0px" },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, hideWhenVisible.join(",")]);

  const hidden = visibleIds.length > 0;

  return (
    <div
      aria-hidden={hidden}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 p-4 backdrop-blur-md transition-transform duration-300 lg:hidden ${
        hidden ? "translate-y-full" : "translate-y-0"
      }`}
    >
      <Button href={`#${target}`} size="lg" className="w-full">
        {label}
      </Button>
    </div>
  );
}
