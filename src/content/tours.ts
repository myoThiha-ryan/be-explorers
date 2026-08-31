import { images, type SiteImage } from "@/content/images";
import type { LanguageCode } from "@/content/site";

export type TourCategory =
  | "London"
  | "Day Trips"
  | "Walking Tours"
  | "Full Day"
  | "Private Tours";

export type Tour = {
  slug: string;
  title: string;
  /** Sits above the title on the detail page, e.g. "London's Royal & Political Heart" */
  strapline?: string;
  location: string;
  duration: string;
  groupType: string;
  /** Shown as "from £X" — omit to show "Price on enquiry" */
  priceFrom?: number;
  priceUnit?: "per group" | "per person";
  /** Qualifies the headline price: concessions and private rates */
  priceNote?: string;
  summary: string;
  languages: LanguageCode[];
  categories: TourCategory[];
  image: SiteImage;
  featured?: boolean;

  /* Detail-page content */
  intro?: string[];
  /** Closing line of the introduction, set slightly larger */
  pullQuote?: string;
  highlightsTitle?: string;
  highlights?: string[];
  meetingPoint?: string;
  endPoint?: string;
  /** Overrides `tourIncludes` when a tour differs from the standard walk */
  included?: string[];
  notIncluded?: string[];
  whoFor?: string;
  /** Marks tours whose details are still to be confirmed */
  detailsPending?: boolean;
};

/** The standard walking-tour terms; a tour can override either list. */
export const tourIncludes = {
  included: [
    "Your local guide for the whole tour",
    "A bottle of water",
    "A small BeExplorers souvenir",
  ],
  notIncluded: [
    "Transport and travel cards",
    "Entrance tickets to any attraction",
    "Hotel pick-up and drop-off",
    "Tips",
  ],
};

/** Shared by every £20-per-person walking tour. */
const walkingTour = {
  duration: "2 hours",
  priceFrom: 20,
  priceUnit: "per person" as const,
  priceNote:
    "Free for under-18s · special rates for families and companies booking privately",
  groupType: "Small group · private tours on request",
  languages: ["en", "de", "my"] as LanguageCode[],
  categories: ["London", "Walking Tours", "Private Tours"] as TourCategory[],
};

export const tours: Tour[] = [
  {
    ...walkingTour,
    slug: "westminster-walking-tour",
    title: "Westminster Walking Tour",
    strapline: "London's Royal & Political Heart",
    location: "Westminster, London",
    summary:
      "Big Ben, the Houses of Parliament, Westminster Abbey, Downing Street and Buckingham Palace — the landmarks at the centre of Britain's history, and the stories behind them.",
    intro: [
      "Step into the heart of London and discover the stories, landmarks and characters that have shaped Britain.",
      "On this guided walking tour, explore the historic streets of Westminster and see some of London's most iconic sights, including Big Ben, the Houses of Parliament, Westminster Abbey, Downing Street, Horse Guards Parade, St James's Park and Buckingham Palace.",
      "Along the way, your experienced local guide will bring Westminster to life with fascinating stories of British royalty, politics, historic events and London's traditions — from royal ceremonies to the heart of modern British government.",
      "Whether it's your first visit to London or you simply want to see the city from a different perspective, this is a relaxed and engaging way to discover the landmarks at the centre of Britain's history.",
    ],
    pullQuote:
      "Walk through the heart of London. Discover its stories. See it through the eyes of a local.",
    highlightsTitle: "Why you'll love it",
    highlights: [
      "See London's most iconic royal and political landmarks",
      "Discover the history behind Westminster's famous streets and buildings",
      "Hear fascinating stories, legends and royal connections",
      "Explore with an experienced local guide",
      "A relaxed walking experience with plenty of opportunities for photos",
    ],
    image: images.bigBenBus,
    featured: true,
  },
  {
    ...walkingTour,
    slug: "city-of-london-walking-tour",
    title: "City of London Walking Tour",
    strapline: "London's Ancient & Financial Heart",
    location: "The City of London",
    summary:
      "From the Roman origins of London to the modern financial centre — Tower Hill, the Tower of London, Leadenhall Market and the Bank of England, finishing at St Paul's Cathedral.",
    intro: [
      "Discover the fascinating history of the City of London — the ancient heart of the capital and the home of London's world-famous financial district.",
      "Join us for a relaxed 2-hour guided walking tour through centuries of history, from the Roman origins of London to the medieval city and the modern financial centre we know today.",
      "Starting at Tower Hill, we'll explore the stories behind some of London's most iconic landmarks, including the Tower of London, Tower Bridge, Monument, Leadenhall Market, Bank of England, Royal Exchange and St Paul's Cathedral.",
      "Along the way, your experienced guide will share fascinating stories of royal history, medieval London, famous characters, dramatic events, trade and the rise of the City as a global financial centre.",
      "This is more than simply seeing the sights — it's an opportunity to understand how London grew from a Roman settlement into one of the world's most influential cities.",
    ],
    pullQuote:
      "The tour finishes in front of St Paul's Cathedral, one of London's most magnificent and recognisable landmarks.",
    highlights: [
      "Explore Tower Hill and discover the ancient history of the City",
      "Hear the stories behind the Tower of London",
      "Admire Tower Bridge from the outside",
      "Discover the history of the Monument",
      "Wander through the beautiful Leadenhall Market",
      "Learn about London's financial power at the Bank of England",
      "See the historic Royal Exchange",
      "Finish at magnificent St Paul's Cathedral",
    ],
    meetingPoint:
      "Outside Tower Hill Underground station — look for your guide with a red umbrella.",
    endPoint: "In front of St Paul's Cathedral.",
    image: images.towerBridge,
    featured: true,
  },
  {
    ...walkingTour,
    slug: "notting-hill-uncovered",
    title: "Notting Hill Uncovered",
    strapline: "Film, Colour & Culture",
    location: "Notting Hill, London",
    summary:
      "Colourful streets, Victorian villas, Portobello Market and the film locations that made the neighbourhood famous — finishing at the Blue Door.",
    intro: [
      "Step into one of London's most colourful and characterful neighbourhoods on a 2-hour guided walking tour through Notting Hill.",
      "Famous for its colourful houses, independent shops, vibrant market and unforgettable film locations, Notting Hill has a story around almost every corner. On this relaxed walking tour, discover the neighbourhood beyond the postcard views — from its elegant Victorian villas and hidden gardens to the streets made famous by cinema.",
      "Explore Portobello Road and Market, Westbourne Grove, Rosmead Gardens, Electric Cinema, Saint Luke's Mews, Lancaster Road, Wetherby School and the beautiful Victorian streets of Notting Hill.",
      "Along the way, your experienced guide will share stories of the area's history, architecture, culture, local life and famous film connections, including the locations that helped make Notting Hill an internationally loved London neighbourhood.",
    ],
    pullQuote:
      "The tour finishes at the famous Blue Door and the charming bookshops — the perfect place to explore, take photos and soak up the atmosphere.",
    highlights: [
      "Discover Notting Hill's iconic colourful streets",
      "Visit famous film locations",
      "Admire beautiful Victorian villas and mews",
      "Explore Portobello Road & Market",
      "Discover Rosmead Gardens and other hidden corners",
      "See the historic Electric Cinema",
      "Visit Saint Luke's Mews and Lancaster Road",
      "Finish at the famous Blue Door & bookshops",
      "Hear fascinating stories about Notting Hill's history and culture",
    ],
    meetingPoint:
      "In front of the KFH estate agents outside Exit 4 of Notting Hill Gate Underground station — look for your guide with a red umbrella.",
    endPoint: "The Blue Door and the bookshops.",
    image: images.nottingHill,
    featured: true,
  },
  {
    ...walkingTour,
    slug: "harry-potter-walking-tour",
    title: "Harry Potter Walking Tour",
    strapline: "The Magic of London",
    location: "West End, London",
    summary:
      "The Palace Theatre, The House of Spells, Charing Cross Road and Great Scotland Yard — the magical side of London, for lifelong fans and muggles alike.",
    intro: [
      "Step into the magical side of London and discover the places, streets and stories that bring the wizarding world to life.",
      "Calling all Harry Potter fans! Join us on a 2-hour guided walking tour through the heart of London and explore some of the city's most fascinating Harry Potter-related spots.",
      "Starting outside the iconic Palace Theatre, home of Harry Potter and the Cursed Child, we'll make our way through the lively streets of London's West End, discovering magical shops, famous streets and landmarks along the way.",
      "Explore The House of Spells, Charing Cross Road, Trafalgar Square and Great Scotland Yard, while your experienced guide shares fascinating stories, film and theatre connections, and magical details you might otherwise walk straight past.",
      "Whether you're a lifelong Harry Potter fan or simply curious about the magical side of London, this relaxed walking tour offers a fun way to see the city through a different lens.",
    ],
    pullQuote: "Muggles are welcome too.",
    highlightsTitle: "Tour highlights",
    highlights: [
      "Start outside the Palace Theatre, home of Harry Potter and the Cursed Child",
      "Explore The House of Spells",
      "Walk along Charing Cross Road, famous for its bookshops and literary history",
      "Discover Trafalgar Square and its connections to the wizarding world",
      "Visit Great Scotland Yard",
      "Enjoy plenty of opportunities for magical London photos",
      "Hear fascinating stories about Harry Potter, London and the locations along the route",
    ],
    meetingPoint:
      "Outside the Palace Theatre, London W1D — just around the corner from Leicester Square Underground station. Look for your guide with a red umbrella.",
    endPoint: "Great Scotland Yard.",
    image: images.palaceTheatre,
  },
  {
    slug: "canary-wharf-and-greenwich",
    title: "Canary Wharf & Greenwich",
    strapline: "Modern London & Maritime Heritage",
    location: "Canary Wharf & Greenwich, London",
    duration: "Half day",
    groupType: "Small group · private tours on request",
    summary:
      "Experience modern London alongside its fascinating maritime heritage — the towers of Canary Wharf and the historic charm of Greenwich.",
    languages: ["en", "de", "my"],
    categories: ["London", "Walking Tours", "Private Tours"],
    intro: [
      "Two sides of the river and two sides of London: the glass towers of the Docklands, and the maritime town that measured the world.",
    ],
    image: images.canaryWharf,
    detailsPending: true,
  },

  /* ------------------------------------------------------------------
     Day trips. Final content for these has not been supplied yet, so the
     copy below is placeholder and no price is published. Add the real
     itinerary, meeting point and price, then remove `detailsPending`.
  ------------------------------------------------------------------ */
  {
    slug: "oxford-day-tour",
    title: "Oxford Day Tour",
    location: "Oxford · from London",
    duration: "Full day",
    groupType: "Private · small groups",
    summary:
      "Ancient colleges, the Radcliffe Camera and the quiet quadrangles of England's oldest university, an easy day trip from central London.",
    languages: ["en", "de", "my"],
    categories: ["Day Trips", "Full Day", "Private Tours"],
    intro: [
      "A day trip from London to Oxford, walking the colleges and side streets of the oldest university in the English-speaking world.",
    ],
    highlights: [
      "The Radcliffe Camera and the Bodleian Library",
      "A college quadrangle and dining hall",
      "The Bridge of Sighs and New College Lane",
      "The Covered Market, and lunch among students",
    ],
    whoFor:
      "Anyone with a spare day and an interest in history, books or film locations.",
    image: images.oxford,
    detailsPending: true,
  },
  {
    slug: "cambridge-day-tour",
    title: "Cambridge Day Tour",
    location: "Cambridge · from London",
    duration: "Full day",
    groupType: "Private · small groups",
    summary:
      "College courtyards, King's College Chapel and an afternoon punt along the Backs at the pace of the river.",
    languages: ["en", "de", "my"],
    categories: ["Day Trips", "Full Day", "Private Tours"],
    intro: [
      "A day in Cambridge at the pace of the river: colleges in the morning, punting along the Backs in the afternoon.",
    ],
    highlights: [
      "King's College Chapel and its fan vaulting",
      "The Backs and the Mathematical Bridge",
      "A punt along the River Cam",
      "The market square and the old town",
    ],
    whoFor: "Couples, families and travellers who prefer a quieter day out.",
    image: images.cambridge,
    detailsPending: true,
  },
  {
    slug: "windsor-castle-day-tour",
    title: "Windsor Castle Day Tour",
    location: "Windsor · from London",
    duration: "Full day",
    groupType: "Private · small groups",
    summary:
      "The oldest occupied castle in the world, the Long Walk and the riverside town beneath it — an easy day out from London.",
    languages: ["en", "de", "my"],
    categories: ["Day Trips", "Full Day", "Private Tours"],
    intro: [
      "A day at Windsor: the castle, St George's Chapel and the town along the Thames beneath it.",
    ],
    image: images.windsor,
    detailsPending: true,
  },
  {
    slug: "stonehenge-day-tour",
    title: "Stonehenge Day Tour",
    location: "Salisbury Plain · from London",
    duration: "Full day",
    groupType: "Private · small groups",
    summary:
      "Five thousand years of standing stones on Salisbury Plain, and the story of the people who raised them.",
    languages: ["en", "de", "my"],
    categories: ["Day Trips", "Full Day", "Private Tours"],
    intro: [
      "A day trip west from London to Stonehenge, one of the most remarkable prehistoric monuments in the world.",
    ],
    image: images.stonehenge,
    detailsPending: true,
  },
];

export const featuredTours = tours.filter((tour) => tour.featured);

export const tourCategories: TourCategory[] = [
  "London",
  "Day Trips",
  "Walking Tours",
  "Full Day",
  "Private Tours",
];

export const getTour = (slug: string) => tours.find((t) => t.slug === slug);
