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
        "flex h-full flex-col justify-between rounded-2xl bg-sand-50 p-7 ring-1 ring-sand-200",
        className,
      )}
    >
      <div>
        {/* Decorative: the quotation is already marked up as a blockquote. */}
        <span
          aria-hidden="true"
          className="block font-display text-5xl leading-none text-clay-400"
        >
          &ldquo;
        </span>
        <blockquote className="mt-3 text-lg leading-relaxed text-navy-800">
          {quote}
        </blockquote>
      </div>
      <figcaption className="mt-8 border-t border-sand-200 pt-5 text-sm">
        <span className="font-medium text-ink">{name}</span>
        {detail && <span className="block text-ink-muted">{detail}</span>}
      </figcaption>
    </figure>
  );
}
