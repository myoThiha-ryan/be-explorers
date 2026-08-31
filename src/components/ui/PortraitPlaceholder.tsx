import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  label?: string;
};

/**
 * Stands in for the guide's photograph.
 *
 * Deliberately not a stock portrait: showing a photo of someone else next to a
 * named real guide misrepresents them. Replace this with a `next/image` of the
 * real photo when there is one — keep the same wrapper classes so the layout
 * does not shift.
 */
export function PortraitPlaceholder({
  className,
  label = "Photo coming soon",
}: Props) {
  return (
    <div
      role="img"
      aria-label={`Guide portrait — ${label.toLowerCase()}`}
      className={cn(
        "flex flex-col items-center justify-center gap-5 rounded-2xl border border-line bg-mist",
        className,
      )}
    >
      <Icon
        name="person"
        strokeWidth={1}
        className="size-20 text-navy-200"
      />
      <p className="text-sm text-ink-muted">{label}</p>
    </div>
  );
}
