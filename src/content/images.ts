/**
 * Central image registry.
 *
 * London photography is served from the Unsplash CDN; destination photography is
 * bundled in /public/images (see public/images/ATTRIBUTION.md).
 *
 * All of it is placeholder imagery — replace `src` values with the company's own photos
 * before launch and the rest of the site keeps working unchanged.
 */

const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export type SiteImage = { src: string; alt: string };

export const images = {
  heroLondon: {
    src: unsplash("1513635269975-59663e0ac1ad", 2400),
    alt: "Aerial view of the River Thames at dusk with Tower Bridge and the City of London skyline",
  },
  westminster: {
    src: unsplash("1486299267070-83823f5448dd"),
    alt: "The Houses of Parliament and Big Ben seen from Westminster Bridge",
  },
  towerBridge: {
    src: unsplash("1533929736458-ca588d08c8be"),
    alt: "Tower Bridge over the River Thames on a bright day",
  },
  towerBridgeDusk: {
    src: unsplash("1543832923-44667a44c804"),
    alt: "Tower Bridge and the Shard lit up at dusk",
  },
  bigBenSunset: {
    src: unsplash("1529655683826-aba9b3e77383"),
    alt: "Big Ben and the Palace of Westminster at sunset",
  },
  bigBenBus: {
    src: unsplash("1520986606214-8b456906c813"),
    alt: "A red double-decker bus passing Big Ben at dusk",
  },
  boudica: {
    src: unsplash("1500380804539-4e1e8c1e7118"),
    alt: "Big Ben framed beside the Boadicea statue on Westminster Bridge",
  },
  phoneBox: {
    src: unsplash("1517394834181-95ed159986c7"),
    alt: "A red telephone box on a rainy London side street",
  },
  thamesWestminster: {
    src: unsplash("1505761671935-60b3a7427bad"),
    alt: "Westminster Bridge and Big Ben viewed across the River Thames",
  },
  regentStreet: {
    src: unsplash("1526129318478-62ed807ebdf9"),
    alt: "Union Jack flags above Regent Street with a black cab and red bus below",
  },
  /* Supplied by the client — not placeholder imagery. */
  guidePortrait: {
    src: "/images/guide-portrait.jpg",
    alt: "Your BeExplorers guide in Parliament Square, with Big Ben and the Houses of Parliament behind",
  },

  /* AK on tour, supplied by the client. Used in the Follow the Journey grid. */
  akPhoneBox: {
    src: "/images/ak-phone-box.jpg",
    alt: "A BeExplorers group beside a red telephone box near Westminster station",
  },
  akBuckinghamPalace: {
    src: "/images/ak-buckingham-palace.jpg",
    alt: "A BeExplorers group in front of Buckingham Palace and the Victoria Memorial",
  },
  akTheMall: {
    src: "/images/ak-the-mall.jpg",
    alt: "A BeExplorers walking group listening to their guide on The Mall",
  },
  akGroupSteps: {
    src: "/images/ak-group-steps.jpg",
    alt: "A BeExplorers group of adults and children on the steps of a London townhouse",
  },
  akParliamentSquare: {
    src: "/images/ak-parliament-square.jpg",
    alt: "The BeExplorers guide with her red umbrella outside Westminster Abbey",
  },

  nottingHill: {
    src: "/images/notting-hill-travel-bookshop.jpg",
    alt: "The blue and terracotta shopfront of The Travel Bookshop on Blenheim Crescent, Notting Hill",
  },
  palaceTheatre: {
    src: "/images/palace-theatre.jpg",
    alt: "The Palace Theatre in London's West End, home of Harry Potter and the Cursed Child",
  },
  greenwich: {
    src: "/images/greenwich-park-view.jpg",
    alt: "The view from Greenwich Park over the Queen's House and the Old Royal Naval College, with Canary Wharf beyond",
  },
  stonehenge: {
    src: "/images/stonehenge.jpg",
    alt: "The standing stones of Stonehenge at sunset",
  },
  oxford: {
    src: "/images/oxford-radcliffe-camera.jpg",
    alt: "The Radcliffe Camera in Oxford under a clear blue sky",
  },
  cambridge: {
    src: "/images/cambridge-punting.jpg",
    alt: "Punts passing under Clare Bridge on the River Cam in Cambridge",
  },
  cotswolds: {
    src: "/images/cotswolds-bibury.jpg",
    alt: "Honey-coloured cottages along Arlington Row in Bibury, the Cotswolds",
  },
  windsor: {
    src: "/images/windsor-castle.jpg",
    alt: "The Henry VIII Gateway at Windsor Castle",
  },
  bath: {
    src: "/images/bath-roman-baths.jpg",
    alt: "The Great Bath at the Roman Baths, with Bath Abbey rising behind it",
  },
} satisfies Record<string, SiteImage>;

export type ImageKey = keyof typeof images;
