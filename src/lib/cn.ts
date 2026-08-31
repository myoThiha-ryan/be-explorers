/** Tiny class-name joiner — keeps components dependency-free. */
export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
