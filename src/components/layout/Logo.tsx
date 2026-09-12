import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

type Props = {
  tone?: "light" | "dark";
  className?: string;
};

/**
 * The client's emblem beside the wordmark.
 *
 * Only the emblem is used, not the full stacked lockup: at the 80px header
 * height its "TRAVEL AND TOURS" line would render around 7px tall. The emblem
 * is a transparent PNG of flat navy artwork, so `brightness-0 invert` turns it
 * white for the transparent header over the hero.
 */
export function Logo({ tone = "light", className }: Props) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={cn(
        "inline-flex items-center gap-2.5 transition-colors",
        tone === "dark" ? "text-white" : "text-navy-800",
        className,
      )}
    >
      <Image
        src="/images/logo-mark.png"
        alt=""
        width={343}
        height={457}
        priority
        className={cn("h-12 w-auto", tone === "dark" && "brightness-0 invert")}
      />
      <span className="font-display text-[1.375rem] leading-none tracking-tight">
        Be<span className="italic">Explorers</span>
      </span>
    </Link>
  );
}
