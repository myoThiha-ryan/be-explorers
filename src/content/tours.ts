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
  /** The name the tour is sold under, e.g. "London's Royal & Political Heart" */
  title: string;
  /**
   * The plain descriptive name, set smaller above the title on the detail page
   * and under it on a card, e.g. "Westminster Walking Tour". It is what people
   * actually search for, so it also goes into the page title and the enquiry
   * form even though it is the quieter of the two on screen.
   */
  subtitle?: string;
  location: string;
  /** Optional: some tours have no confirmed running time yet */
  duration?: string;
  groupType?: string;
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
  /** How much walking the day involves, e.g. "Moderate walking" */
  walking?: string;
  /** Longer descriptions, one per place visited — used by the day trips */
  sections?: { heading: string; body: string }[];
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

/**
 * The standard London tour price. Per the client's FAQ: "The London walking
 * tours are £20 per person. Children under 18 go free, and special rates are
 * available for families, private groups and corporate bookings."
 */
const londonPricing = {
  priceFrom: 20,
  priceUnit: "per person" as const,
  priceNote:
    "Free for under-18s · special rates for families and companies booking privately",
};

/** Shared by every £20-per-person walking tour. */
const walkingTour = {
  duration: "2 hours",
  ...londonPricing,
  groupType: "Small group · private tours on request",
  languages: ["en", "de", "my"] as LanguageCode[],
  categories: ["London", "Walking Tours", "Private Tours"] as TourCategory[],
};

export const tours: Tour[] = [
  {
    ...walkingTour,
    slug: "westminster-walking-tour",
    title: "London's Royal & Political Heart",
    subtitle: "Westminster Walking Tour",
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
    title: "London's Ancient & Financial Heart",
    subtitle: "City of London Walking Tour",
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
    subtitle: "Film, Colour & Culture",
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
    title: "The Magic of London",
    subtitle: "Harry Potter Walking Tour",
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
    subtitle: "Modern London & Maritime Heritage",
    location: "Canary Wharf & Greenwich, London",
    duration: "Half day",
    groupType: "Small group · private tours on request",
    ...londonPricing,
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
     Day trips, from the client's "2MoreToursOutsideofLondon" document.
     Both are priced on enquiry — the document says "Contact us for the
     price", so that is the model rather than a missing figure. American
     spellings in the source have been normalised to British English.
  ------------------------------------------------------------------ */
  {
    slug: "windsor-stonehenge-and-bath",
    title: "Royalty, Mystery & Elegance",
    subtitle: "Windsor, Stonehenge & Bath",
    location: "Windsor, Stonehenge & Bath · from London",
    duration: "About 12 hours",
    groupType: "Private tour, just for you and the people you travel with",
    summary:
      "Windsor Castle and St George's Chapel, the standing stones on Salisbury Plain, and Georgian Bath with entry to the Roman Baths — collected from your hotel and returned to it.",
    languages: ["en", "de", "my"],
    categories: ["Day Trips", "Full Day", "Private Tours"],
    intro: [
      "Three of England's great sights in a single day: the oldest and largest inhabited castle in the world, a stone circle raised 5,000 years ago, and a city built around a Roman spring.",
    ],
    highlights: [
      "Windsor Castle, including St George's Chapel",
      "Stonehenge, and the visitor centre on Salisbury Plain",
      "Bath, with entrance to the Roman Baths",
    ],
    sections: [
      {
        heading: "Windsor",
        body: "Begin your British journey at Windsor Castle, the world's oldest and largest inhabited fortress, which has served as a royal residence for more than nine centuries. Inside, explore the lavish State Apartments to view Queen Victoria's statue, the historic Waterloo Chamber, the regal Monarch's Chambers, and fine art collections featuring works by Leonardo da Vinci and Rembrandt. Enter St George's Chapel, the venue for royal weddings — such as Prince Harry and Meghan Markle's — and the final resting place of Queen Elizabeth II. On Thursdays and Saturdays, witness the Changing of the Guard, complete with traditional red coats, bearskin hats and military music. Note that Windsor Castle is closed on Tuesdays and Wednesdays; tours running on those days include a guided walking tour of Windsor town instead.",
      },
      {
        heading: "Stonehenge",
        body: "Marvel at Stonehenge, the ancient stone monument recognised as one of the world's great historic wonders. Standing on Salisbury Plain for roughly 5,000 years, these Neolithic monoliths continue to spark debate over their origins, purpose and construction. Enhance your visit at the world-class visitor centre, home to 250 excavated artefacts, art displays, archival photographs, a gift shop and a café. Step outside to walk through recreated Neolithic dwellings based on archaeological finds from 2006 and 2007.",
      },
      {
        heading: "Bath",
        body: "Discover Bath, an entire city designated a UNESCO World Heritage site for its magnificent Georgian architecture. Its premier historic highlight, the ancient Roman Baths, offers a close-up look at the naturally heated thermal waters. Sample the mineral-rich spa water inside the historic Pump Room, or stroll down cobblestone lanes to see Bath Abbey, the Royal Crescent and Pulteney Bridge. Literature enthusiasts can also visit the Jane Austen Centre for a traditional Regency afternoon tea.",
      },
    ],
    meetingPoint:
      "At your hotel at 07:30. We collect you from your hotel and drop you back there at the end of the day.",
    endPoint: "Back at your hotel.",
    walking: "Moderate walking",
    included: [
      "Transportation",
      "Your tour guide for the whole day",
      "A bottle of water",
      "Entrance fees",
      "Hotel pick-up and drop-off",
    ],
    notIncluded: ["Lunch", "Snacks", "Tips"],
    image: images.windsor,
  },
  {
    slug: "oxford-and-cambridge",
    title: "England's Academic Heritage",
    subtitle: "Oxford & Cambridge",
    location: "Oxford & Cambridge · from London",
    summary:
      "Christ Church College in Oxford, King's College and the Corpus Clock in Cambridge — both of England's ancient university cities in a single day, door to door from your hotel.",
    languages: ["en", "de", "my"],
    categories: ["Day Trips", "Private Tours"],
    intro: [
      "Two university cities that between them have taught much of the English-speaking world — walked with a guide, with entry to the colleges at the heart of both.",
    ],
    highlights: [
      "Christ Church College, Oxford — a Harry Potter filming location",
      "King's College, Cambridge, and the Corpus Clock",
      "Guided walking tours of both cities",
    ],
    sections: [
      {
        heading: "Cambridge",
        body: "Discover the historic university city of Cambridge, starting with the neoclassically designed Senate House — formerly the assembly site for the Senate Council, and today the ceremonial stage for university graduations. Continue to admire the Corpus Clock at Corpus Christi College's Taylor Library, a striking and mechanically inventive masterpiece of modern clockmaking.",
      },
      {
        heading: "King's College Chapel",
        body: "Step inside King's College Chapel, a premier Cambridge landmark commissioned by Henry VI in 1446. Famous for its magnificent Gothic architecture, intricate medieval stained glass and exceptional acoustics, it offers a deep dive into the history of King's College and its world-renowned choir.",
      },
      {
        heading: "Walking tour of Oxford",
        body: "Trace the steps of scholars through Oxford, home to the English-speaking world's oldest university. Your guided walk takes you past the iconic Bodleian Library and through historic squares, quiet medieval alleys and beneath the city's famous dreaming spires.",
      },
      {
        heading: "Christ Church",
        body: "Explore the grand courtyards of Christ Church College alongside current students. Harry Potter enthusiasts will instantly spot several film locations throughout the grounds, most notably the Great Hall, which was the inspiration and setting for Hogwarts' dining hall.",
      },
    ],
    meetingPoint:
      "At your hotel at 08:00. We collect you from your hotel and drop you back there at the end of the day.",
    endPoint: "Back at your hotel.",
    walking: "Moderate walking",
    included: [
      "Transportation",
      "Your tour guide for the whole day",
      "A bottle of water",
      "Entrance fees",
      "Hotel pick-up and drop-off",
    ],
    notIncluded: ["Lunch", "Snacks", "Tips"],
    image: images.oxford,
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

/**
 * Both names together, for the places that have to be unambiguous rather than
 * evocative: the browser/search-result title, and the tour an enquiry names.
 * "London's Royal & Political Heart" alone tells AK very little in an inbox.
 */
export const tourFullName = (tour: Tour) =>
  tour.subtitle ? `${tour.title} — ${tour.subtitle}` : tour.title;
