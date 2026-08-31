/**
 * Global site content: brand, navigation, languages, contact details, socials.
 * Edit copy here rather than inside components.
 */

export const site = {
  name: "BeExplorers",
  /** The guide who leads every tour */
  guide: "A Kay Mon",
  tagline: "Walking tours and day trips across London and beyond.",
  description:
    "Shared and private walking tours of London — Westminster, the City, Notting Hill, Harry Potter, Canary Wharf & Greenwich — plus day trips to Oxford, Cambridge, Windsor Castle and Stonehenge. Guided in English, Myanmar and German.",
  url: "https://www.beexplorers.co.uk",
  city: "London, United Kingdom",
  email: "inquiry@beexplorertravelandtour.com",
  phone: "+44 7852 583872",
  whatsapp: "+44 7852 583872",
  whatsappUrl: "https://wa.me/447852583872",
  responseTime: "We usually reply within 24–48 hours.",
} as const;

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Tours", href: "/tours" },
  { label: "About Us", href: "/about" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

export type LanguageCode = "en" | "de" | "my";

/**
 * The languages tours are *guided* in. The site itself is published in English
 * only for this release — there is no language switcher.
 */
export type Language = {
  code: LanguageCode;
  /** Name written in the language itself */
  native: string;
  /** English name */
  english: string;
  blurb: string;
  /** Myanmar script needs its own font stack */
  script?: "myanmar";
};

export const languages: Language[] = [
  {
    code: "en",
    native: "English",
    english: "English",
    blurb:
      "Tours guided in clear, conversational English for visitors from anywhere in the world.",
  },
  {
    code: "de",
    native: "Deutsch",
    english: "German",
    blurb:
      "Führungen auf Deutsch — for travellers from Germany, Switzerland, Austria and Luxembourg.",
  },
  {
    code: "my",
    native: "မြန်မာ",
    english: "Myanmar",
    blurb:
      "Tours in Myanmar for travellers and families visiting London from around the world.",
    script: "myanmar",
  },
];

export const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/beexplorers",
    handle: "@beexplorers",
  },
  {
    label: "Facebook",
    href: "https://facebook.com/beexplorers",
    handle: "/beexplorers",
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@beexplorers",
    handle: "@beexplorers",
  },
] as const;

export const legalNav: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];
