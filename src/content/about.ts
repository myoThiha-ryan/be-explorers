import { images } from "@/content/images";
import { site } from "@/content/site";

/**
 * A Kay's biography, supplied by the client (AboutWebsiteOn31Aug&AboutAKay.pdf).
 *
 * Kept close to her own wording — only punctuation, dates and sentence breaks
 * have been tidied. Two dates in the source contradict each other; see the note
 * on `timeline` below.
 */

export const guide = {
  eyebrow: "About A Kay",
  heading: "Meet A Kay",
  standfirst: "Your guide to exploring London.",
  bio: [
    "With over a decade of experience in the travel industry, A Kay has worked as a tour guide, tour leader and travel professional across the UK, Europe and Southeast Asia.",
    "Her journey in tourism began in 2012, working with renowned international travel companies including Wendy Wu Tours, TUI, Tauck, Cox & Kings, Trailfinders and EXO Travel.",
    "From 2015 until March 2020, she worked as a Tour Leader in Southeast Asia for G Adventures and National Geographic, leading travellers from around the world and creating memorable experiences across the region.",
    "In 2018, her dedication and passion for guiding were recognised with a Golden Ticket from G Adventures, representing Burma (Myanmar) as Tour Guide of the Year in Toronto, Canada.",
    "A Kay has also worked behind the scenes of the travel industry. In 2019 she joined G Adventures UK in London as an Operations Coordinator, and that same year attended the Wanderlust Awards in London, one of the travel industry's celebrated events.",
    "From 2022 to December 2025 she worked at Trailfinders in London across both Reservations and Operations, strengthening her knowledge of travel arrangements, customer service and tour operations.",
    "At Trailfinders' London office she worked daily with leading international travel companies and tour operators — including Disney, G Adventures, Intrepid Travel, TTC Group brands such as Contiki and Luxury Gold, Journey Beyond, Rocky Mountaineer, Explore and Exodus. The role gave her hands-on experience in reservations, tour operations, travel arrangements and supplier coordination, and an in-depth understanding of how international holidays and group tours are planned and delivered.",
    `In January 2026, A Kay founded ${site.name}, bringing together her years of experience, love of travel and passion for sharing London's stories with visitors from around the world. Today, she personally guides every ${site.name} tour.`,
    "Whether you're discovering London's famous landmarks, exploring its hidden stories, enjoying a Harry Potter-inspired walk, or visiting Oxford, Cambridge, Windsor or Stonehenge, A Kay aims to make every tour informative, relaxed, personal and memorable.",
  ],
  closing:
    "Come explore with A Kay — and see London through the eyes of someone who truly knows and loves travel.",
};

/**
 * The client's timeline says "2023–Present" for founding Be Explorers and
 * "2022–2026" for Trailfinders, but her prose says the company was founded in
 * January 2026 and that she left Trailfinders in December 2025. The prose dates
 * are used here because they agree with each other; confirm before launch.
 */
export const timeline = [
  { year: "2012", label: "Began her professional career as a Tour Guide" },
  {
    year: "2015–2020",
    label: "Tour Leader, G Adventures & National Geographic",
  },
  {
    year: "2018",
    label: "G Adventures Golden Ticket — Tour Guide of the Year",
  },
  { year: "2019", label: "Operations Coordinator, G Adventures UK" },
  { year: "2019", label: "Attended the Wanderlust Awards, London" },
  { year: "2022–2025", label: "Reservations & Operations, Trailfinders London" },
  { year: "2026", label: `Founder & Tour Guide, ${site.name}` },
];

export const story = [
  {
    heading: "Tours designed for curious travellers",
    body: "Our itineraries are thoughtfully planned to make the most of your time, combining history, culture, famous landmarks and fascinating stories with a friendly and personal guiding experience.",
  },
  {
    heading: "Private, family and corporate tours",
    body: `${site.name} also offers private, family and corporate tours, with selected experiences available as carefully planned itineraries and tailor-made experiences to suit your needs. Tell us your interests, schedule, group size and preferred destinations, and we will build the tour around them.`,
  },
];

/**
 * AK on tour, supplied by the client. The three portraits sit in a row above
 * the wide shot of The Mall, so each photograph keeps its own shape rather
 * than being cropped into a uniform tile.
 */
export const gallery = {
  heading: "On tour with AK",
  intro:
    "Real groups, real mornings in London — no two tours are quite the same.",
  /** Six fills two clean rows of three above the wide shot of The Mall. */
  portraits: [
    images.akBlueDoor,
    images.akWhitehall,
    images.akPhoneBox,
    images.akBuckinghamPalace,
    images.akGroupSteps,
    images.akSouvenirKeyrings,
  ],
  wide: images.akTheMall,
};

/**
 * Sits with the timeline rather than the tour gallery: these are from the 2019
 * Wanderlust World Guide Awards, which the timeline already lists, so the
 * photographs make that line concrete instead of being stray snapshots.
 */
export const awards = {
  caption: "The Wanderlust World Guide Awards, London, 2019.",
  photos: [
    images.akWanderlustAwards,
    images.akWanderlustReception,
    images.wanderlustStage,
  ],
};
