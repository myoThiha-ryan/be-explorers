import { languages, type LanguageCode } from "@/content/site";
import { cn } from "@/lib/cn";

type Props = {
  codes: LanguageCode[];
  className?: string;
  tone?: "light" | "dark";
};

/** Compact language indicators used on tour cards. */
export function LanguageTags({ codes, className, tone = "light" }: Props) {
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
              "rounded-full border px-2.5 text-xs font-medium tracking-wide",
              myanmar ? "font-my py-1 leading-[1.9]" : "py-1 leading-5",
              tone === "dark"
                ? "border-white/30 text-white"
                : "border-clay-200 bg-clay-100 text-clay-700",
            )}
          >
            {language.native}
          </li>
        );
      })}
    </ul>
  );
}
