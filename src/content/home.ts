import { images } from "@/content/images";
import { site } from "@/content/site";

export const hero = {
  headline: "Discover London Through a Local Perspective",
  supporting:
    "Walking tours and day trips across London and beyond, guided in English, Myanmar and German.",
  primaryCta: { label: "Explore Tours", href: "/tours" },
  secondaryCta: { label: "Plan Your Tour", href: "/contact" },
  image: images.heroLondon,
};

export const welcome = {
  eyebrow: "Welcome",
  heading: `Welcome to ${site.name}`,
  body: [
    "Your London-based travel company for memorable experiences across London and beyond.",
    "From the historic streets of Westminster and the City of London to the colourful neighbourhood of Notting Hill, the magic of Harry Potter, the modern skyline of Canary Wharf and the historic charm of Greenwich, our carefully planned tours make it easy to discover the best of London.",
    "Want to explore beyond the capital? Join us on our Oxford, Cambridge, Windsor Castle and Stonehenge day trips and discover more of England in a day.",
  ],
};

export type Offer = {
  title: string;
  body: string;
  href: string;
  icon: "map" | "compass" | "globe" | "users" | "heart";
};

/** The five ways to travel with us, as the client describes them. */
export const offers: Offer[] = [
  {
    title: "London Walking Tours",
    body: "Westminster and the City: London's history and iconic landmarks on foot.",
    href: "/tours",
    icon: "map",
  },
  {
    title: "Harry Potter Tours",
    body: "Explore London through the world of the wizarding world.",
    href: "/tours/harry-potter-walking-tour",
    icon: "compass",
  },
  {
    title: "Canary Wharf & Greenwich",
    body: "Experience modern London alongside its fascinating maritime heritage.",
    href: "/tours/canary-wharf-and-greenwich",
    icon: "globe",
  },
  {
    title: "Day Trips from London",
    body: "Explore Oxford, Cambridge, Windsor Castle and Stonehenge.",
    href: "/tours",
    icon: "map",
  },
  {
    title: "Private & Corporate Tours",
    body: "Special rates and arrangements for private groups, families and corporate bookings.",
    href: "/contact",
    icon: "users",
  },
];

export type Benefit = {
  title: string;
  body: string;
  icon: "compass" | "heart" | "globe" | "map" | "check";
};

export const benefits: Benefit[] = [
  {
    title: "Experienced Guide",
    body: "Years of experience in international tourism and guiding.",
    icon: "compass",
  },
  {
    title: "Carefully Planned Itineraries",
    body: "Our tours are designed in advance to give you an enjoyable and well-organised experience.",
    icon: "map",
  },
  {
    title: "Personal Experience",
    body: `Every ${site.name} tour is personally guided by ${site.guide}.`,
    icon: "heart",
  },
  {
    // Written in Latin script: the display serif has no Myanmar glyphs, and the
    // native spelling appears in the Languages section instead.
    title: "English · Myanmar · German",
    body: "Our tours are available in three languages, welcoming travellers from around the world.",
    icon: "globe",
  },
  {
    title: "Friendly & Affordable",
    body: "Great experiences without making travel unnecessarily complicated or expensive.",
    icon: "check",
  },
];

export const destinations = [
  {
    name: "London",
    note: "Westminster, the City, Notting Hill and Greenwich",
    href: "/tours",
    image: images.regentStreet,
    span: "wide" as const,
  },
  {
    name: "Oxford",
    note: "Colleges, courtyards and the Radcliffe Camera",
    href: "/tours/oxford-day-tour",
    image: images.oxford,
    span: "narrow" as const,
  },
  {
    name: "Cambridge",
    note: "The Backs, King's College and the river",
    href: "/tours/cambridge-day-tour",
    image: images.cambridge,
    span: "narrow" as const,
  },
  {
    name: "Windsor Castle",
    note: "The oldest occupied castle in the world",
    href: "/tours/windsor-castle-day-tour",
    image: images.windsor,
    span: "narrow" as const,
  },
  {
    name: "Stonehenge",
    note: "Five thousand years of standing stones, in a day",
    href: "/tours/stonehenge-day-tour",
    image: images.stonehenge,
    span: "narrow" as const,
  },
];

export const howItWorks = [
  {
    step: "01",
    title: "Find Your Tour",
    body: "Explore the available experiences.",
  },
  {
    step: "02",
    title: "Send an Enquiry",
    body: "Tell us your preferred date, group size and language.",
  },
  {
    step: "03",
    title: "Plan Your Experience",
    body: "We will get in touch to confirm availability and details.",
  },
];

/* Placeholder testimonials — replace with real guest reviews before launch. */
export const testimonials = [
  {
    quote:
      "A Kay Mon showed us a London we would never have found alone. Two hours went by in what felt like twenty minutes.",
    name: "Familie Brandt",
    detail: "Munich, Germany · Westminster Walking Tour",
  },
  {
    quote:
      "Having a guide who could explain everything in Myanmar made the day so much easier for my parents. Warm, patient and genuinely knowledgeable.",
    name: "Thida M.",
    detail: "Yangon · City of London Walking Tour",
  },
  {
    quote:
      "Everything was planned properly, and it still felt personal rather than packaged. We booked a second tour the same week.",
    name: "Claire & Tom",
    detail: "Sydney, Australia · Notting Hill Uncovered",
  },
];

export const aboutGuide = {
  eyebrow: "Tours designed for curious travellers",
  heading: "Your Local Guide",
  body: [
    "Our itineraries are thoughtfully planned to make the most of your time, combining history, culture, famous landmarks and fascinating stories with a friendly and personal guiding experience.",
    `All our tours are guided by ${site.guide}, an experienced travel professional who has worked in the tourism industry since 2012 with internationally recognised travel companies.`,
  ],
  cta: { label: "Meet Your Guide", href: "/about" },
};

export const closingCta = {
  heading: "London is waiting.",
  body: "Whether you're visiting London for the first time, travelling with family and friends, or looking for a different way to experience England, we are here to help you make the most of your journey.",
  primary: { label: "Choose a Tour", href: "/tours" },
  secondary: { label: "Get in Touch", href: "/contact" },
};

export const socialGrid = [
  images.bigBenSunset,
  images.boudica,
  images.thamesWestminster,
  images.towerBridgeDusk,
];
