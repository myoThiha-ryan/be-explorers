import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = {
  tone?: "light" | "dark";
  className?: string;
};

/** Wordmark. `dark` renders white type for use over imagery. */
export function Logo({ tone = "light", className }: Props) {
  return (
    <Link
      href="/"
      aria-label="BeExplorers — home"
      className={cn(
        "font-display text-[1.375rem] leading-none tracking-tight transition-colors",
        tone === "dark" ? "text-white" : "text-navy-800",
        className,
      )}
    >
      Be<span className="italic">Explorers</span>
    </Link>
  );
}
