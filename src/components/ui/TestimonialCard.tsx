import { cn } from "@/lib/cn";

type Props = {
  quote: string;
  name: string;
  detail?: string;
  className?: string;
};

export function TestimonialCard({ quote, name, detail, className }: Props) {
  return (
    <figure
      className={cn(
        "flex h-full flex-col justify-between border-t border-navy-800 pt-6",
        className,
      )}
    >
      <blockquote className="font-display text-xl leading-relaxed text-navy-800">
        “{quote}”
      </blockquote>
      <figcaption className="mt-8 text-sm">
        <span className="font-medium text-ink">{name}</span>
        {detail && <span className="block text-ink-muted">{detail}</span>}
      </figcaption>
    </figure>
  );
}
