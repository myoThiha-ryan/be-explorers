"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

export type VideoSource = { src: string; type: string };

type Props = {
  sources: VideoSource[];
};

/**
 * Background video for the hero, layered over the still photograph.
 *
 * The photograph stays underneath as the LCP element and the permanent
 * fallback, so this fades in only once the video can actually play. If the
 * file is missing, the format is unsupported, the connection is slow or the
 * browser blocks autoplay, nothing is lost — the hero simply stays a photo.
 */
export function HeroVideo({ sources }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // A full-bleed moving background is exactly what this setting is for, so
    // reduced-motion users keep the still photograph.
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const start = () => {
      if (motion.matches) {
        el.pause();
        setVisible(false);
        return;
      }
      el.play().then(() => setVisible(true)).catch(() => setVisible(false));
    };

    if (el.readyState >= 3) start();
    else el.addEventListener("canplay", start, { once: true });

    motion.addEventListener("change", start);
    return () => motion.removeEventListener("change", start);
  }, []);

  return (
    <video
      ref={ref}
      aria-hidden="true"
      tabIndex={-1}
      muted
      loop
      playsInline
      preload="metadata"
      onError={() => setVisible(false)}
      className={cn(
        "absolute inset-0 size-full object-cover transition-opacity duration-1000",
        visible ? "opacity-100" : "opacity-0",
      )}
    >
      {sources.map((source) => (
        <source key={source.src} src={source.src} type={source.type} />
      ))}
    </video>
  );
}
