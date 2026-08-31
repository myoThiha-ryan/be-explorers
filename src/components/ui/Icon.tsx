import { cn } from "@/lib/cn";

export type IconName =
  | "compass"
  | "heart"
  | "globe"
  | "map"
  | "clock"
  | "pin"
  | "users"
  | "person"
  | "arrow"
  | "chevron"
  | "mail"
  | "whatsapp"
  | "instagram"
  | "facebook"
  | "tiktok"
  | "check";

const paths: Record<IconName, React.ReactNode> = {
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.2 8.8-2 5.4-5.4 2 2-5.4Z" />
    </>
  ),
  heart: (
    <path d="M12 20s-7-4.35-7-9a4 4 0 0 1 7-2.65A4 4 0 0 1 19 11c0 4.65-7 9-7 9Z" />
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18-2.5-2.7-2.5-15.3 0-18Z" />
    </>
  ),
  map: (
    <>
      <path d="m9 4 6 2 5.2-1.7a.6.6 0 0 1 .8.6v12.3l-6 2-6-2-5.2 1.7a.6.6 0 0 1-.8-.6V6.3Z" />
      <path d="M9 4v13M15 6v13" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s6.5-5.5 6.5-10a6.5 6.5 0 1 0-13 0C5.5 15.5 12 21 12 21Z" />
      <circle cx="12" cy="11" r="2.4" />
    </>
  ),
  users: (
    <>
      <circle cx="9.5" cy="9" r="3.2" />
      <path d="M3.5 19.5c.6-3.1 3-5 6-5s5.4 1.9 6 5M16.5 7.2a3 3 0 0 1 0 5.6M18 19.5c-.3-1.6-.9-2.9-1.8-3.8" />
    </>
  ),
  person: (
    <>
      <circle cx="12" cy="8.6" r="3.6" />
      <path d="M4.9 20.4c.6-3.8 3.5-6.2 7.1-6.2s6.5 2.4 7.1 6.2" />
    </>
  ),
  arrow: <path d="M5 12h13m-5-5 5 5-5 5" />,
  chevron: <path d="m7 10 5 5 5-5" />,
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  whatsapp: (
    <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.38a9.86 9.86 0 0 0 4.74 1.21c5.46 0 9.9-4.44 9.9-9.9 0-2.64-1.03-5.13-2.9-7A9.82 9.82 0 0 0 12.04 2Zm0 1.8c2.16 0 4.19.84 5.72 2.37a8.05 8.05 0 0 1 2.37 5.73c0 4.47-3.63 8.1-8.1 8.1a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.07.8.82-2.99-.19-.31a8.05 8.05 0 0 1-1.24-4.29c0-4.47 3.64-8.1 8.12-8.1Zm-3.2 4.1c-.15 0-.4.06-.61.29-.21.23-.8.79-.8 1.92s.82 2.22.94 2.38c.11.15 1.6 2.45 3.88 3.34 1.9.75 2.28.6 2.7.56.41-.04 1.33-.54 1.52-1.07.19-.53.19-.98.13-1.07-.06-.1-.21-.15-.44-.27-.23-.11-1.33-.66-1.54-.73-.21-.08-.36-.11-.5.11-.15.23-.58.73-.71.88-.13.15-.26.17-.49.06-.23-.12-.96-.36-1.83-1.13-.68-.6-1.13-1.35-1.27-1.58-.13-.23-.01-.35.1-.46.1-.1.23-.27.34-.4.11-.14.15-.23.23-.38.08-.15.04-.29-.02-.4-.06-.12-.5-1.22-.7-1.67-.17-.4-.35-.35-.5-.36h-.43Z" />
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="16.9" cy="7.1" r=".9" fill="currentColor" stroke="none" />
    </>
  ),
  facebook: (
    <path d="M13.6 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.29-.04-1.27-.13-2.41-.13-2.39 0-4.02 1.46-4.02 4.13V9.9H7.6V13h2.76v8h3.24Z" />
  ),
  tiktok: (
    <path d="M16.9 2.5h-3v12.2a2.55 2.55 0 1 1-2.1-2.5V9.1a5.6 5.6 0 1 0 5.1 5.6V9.4a6.5 6.5 0 0 0 3.4 1V7.4a3.5 3.5 0 0 1-3.4-3.4V2.5Z" />
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
};

/** Brand marks read better as solid shapes than as outlines. */
const filled = new Set<IconName>(["facebook", "tiktok", "whatsapp"]);

type Props = {
  name: IconName;
  className?: string;
  strokeWidth?: number;
};

export function Icon({ name, className, strokeWidth = 1.4 }: Props) {
  const isFilled = filled.has(name);
  return (
    <svg
      viewBox="0 0 24 24"
      fill={isFilled ? "currentColor" : "none"}
      stroke={isFilled ? "none" : "currentColor"}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("size-6 shrink-0", className)}
    >
      {paths[name]}
    </svg>
  );
}
