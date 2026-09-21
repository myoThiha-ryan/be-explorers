import { languages, type LanguageCode } from "@/content/site";
import { cn } from "@/lib/cn";

/**
 * One fill per language, so the three read apart at a glance rather than as a
 * row of identical chips. Black, red and yellow as asked — Tailwind's own
 * values rather than the site palette, since the brand navy and clay are not
 * black and red.
 *
 * Myanmar takes black text: white on yellow is 1.6:1, far under the 4.5:1
 * minimum, while black on it is 13.6:1.
 */
const swatches: Record<LanguageCode, string> = {
  en: "bg-black text-white",
  de: "bg-red-600 text-white",
  my: "bg-yellow-400 text-black",
};

type Props = {
  codes: LanguageCode[];
  className?: string;
};

/** Compact language indicators used on tour cards. */
export function LanguageTags({ codes, className }: Props) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-1.5", className)}>
      {codes.map((code) => {
        const language = languages.find((l) => l.code === code);
        if (!language) return null;
        // Myanmar glyphs are taller than Latin ones, so that pill gets its own
        // padding and leading rather than overriding the Latin ones (competing
        // utilities of the same kind resolve by stylesheet order, not by order
        // in the class list).
        const myanmar = language.script === "myanmar";
        return (
          <li
            key={code}
            className={cn(
              "rounded-full px-2.5 text-xs font-medium tracking-wide",
              myanmar ? "font-my py-1 leading-[1.9]" : "py-1 leading-5",
              swatches[code],
            )}
          >
            {language.native}
          </li>
        );
      })}
    </ul>
  );
}
