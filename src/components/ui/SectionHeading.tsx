import { cn } from "@/lib/cn";

type Props = {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  /** Rendered to the right of the title on wide screens (e.g. a "View all" link) */
  aside?: React.ReactNode;
  /** `warm` is the homepage treatment: a clay eyebrow over the navy heading. */
  tone?: "light" | "warm" | "dark";
  className?: string;
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  aside,
  tone = "light",
  className,
  as: Heading = "h2",
}: Props) {
  const centered = align === "center";
  return (
    <div
      className={cn(
        "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
        centered && "md:flex-col md:items-center",
        className,
      )}
    >
      <div className={cn("max-w-2xl", centered && "mx-auto text-center")}>
        {eyebrow && (
          <p
            className={cn(
              "mb-4 text-xs font-semibold uppercase tracking-[0.18em]",
              tone === "dark" && "text-navy-200",
              tone === "warm" && "text-red-600",
              tone === "light" && "text-ink-muted",
            )}
          >
            {eyebrow}
          </p>
        )}
        <Heading
          className={cn(
            "text-[2rem] leading-[1.12] sm:text-[2.5rem] lg:text-[2.875rem] font-bold",
            tone === "dark" && "text-white",
          )}
        >
          {title}
        </Heading>
        {intro && (
          <p
            className={cn(
              "mt-5 text-lg leading-relaxed",
              tone === "dark" ? "text-navy-100" : "text-black",
            )}
          >
            {intro}
          </p>
        )}
      </div>
      {aside && (
        <div className={cn("shrink-0", centered && "md:mt-2")}>{aside}</div>
      )}
    </div>
  );
}
