import { Icon } from "@/components/ui/Icon";
import type { Faq } from "@/content/faqs";
import { cn } from "@/lib/cn";

type Props = {
  items: Faq[];
  className?: string;
};

/**
 * Native <details> accordion — keyboard accessible and works without JavaScript.
 */
export function FaqAccordion({ items, className }: Props) {
  return (
    <div className={cn("divide-y divide-line border-y border-line", className)}>
      {items.map((item) => (
        <details key={item.question} className="group">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-lg font-medium text-navy-800 marker:content-none [&::-webkit-details-marker]:hidden">
            {item.question}
            <Icon
              name="chevron"
              className="mt-1 size-5 shrink-0 text-ink-muted transition-transform duration-300 group-open:-rotate-180"
            />
          </summary>
          <div className="max-w-2xl pb-6 leading-relaxed text-ink-muted">
            <p>{item.answer}</p>
            {item.details?.map((block) => (
              <div key={block.heading ?? block.text} className="mt-5">
                {block.heading && (
                  <p className="font-medium text-navy-800">{block.heading}</p>
                )}
                {block.text && <p>{block.text}</p>}
                {block.list && (
                  <ul className="mt-2 space-y-1.5">
                    {block.list.map((line) => (
                      <li key={line} className="flex gap-2.5">
                        <span aria-hidden="true" className="text-clay-400">
                          &bull;
                        </span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </details>
      ))}
    </div>
  );
}
