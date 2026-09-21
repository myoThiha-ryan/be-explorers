import { images } from "@/content/images";
import { site } from "@/content/site";

export const hero = {
  headline: "Discover London Through a Local Perspective",
  supporting:
    "Walking tours and day trips across London and beyond, guided in English, Myanmar and German.",
  primaryCta: { label: "Explore Tours", href: "/tours" },
  secondaryCta: { label: "Plan Your Tour", href: "/contact" },
  /** Always shown: the LCP element, and the fallback whenever the video is not playing. */
  image: images.heroLondon,
  /**
   * Optional background video, layered over `image`. See public/video/README.md
   * for the specification. Empty means the hero is the photograph alone, which
   * is the current design.
   */
  videoSources: [] as { src: string; type: string }[],
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
    title: "Greenwich",
    body: "Royal history, maritime heritage and the Prime Meridian, on foot.",
    href: "/tours/greenwich-walking-tour",
    icon: "globe",
  },
  {
    title: "Day Trips from London",
    body: "Two full days out of the capital: Windsor, Stonehenge and Bath, or Oxford and Cambridge.",
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
    title: "Friendly & Affordable",
    body: "Great experiences without making travel unnecessarily complicated or expensive.",
    icon: "check",
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
    href: "/tours/oxford-and-cambridge",
    image: images.oxford,
    span: "narrow" as const,
  },
  {
    name: "Cambridge",
    note: "The Backs, King's College and the river",
    href: "/tours/oxford-and-cambridge",
    image: images.cambridge,
    span: "half" as const,
  },
  {
    name: "Windsor Castle",
    note: "The oldest occupied castle in the world",
    href: "/tours/windsor-stonehenge-and-bath",
    image: images.windsor,
    span: "half" as const,
  },
  {
    name: "Stonehenge",
    note: "Five thousand years of standing stones, in a day",
    href: "/tours/windsor-stonehenge-and-bath",
    image: images.stonehenge,
    span: "half" as const,
  },
  {
    name: "Bath",
    note: "Roman baths, Georgian crescents and honey-coloured stone",
    href: "/tours/windsor-stonehenge-and-bath",
    image: images.bath,
    span: "half" as const,
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

/**
 * Real guest reviews, supplied by the client (Reviews.pdf) — every review in
 * that document except three: two that praise "Lwin" (the same guide under a
 * different name, which a visitor would read as somebody else) and one that
 * describes a "Free Walking Tour", which contradicts the £20 price on every
 * tour page.
 *
 * Verbatim apart from the guide's name, normalised to "A Kay" (the source
 * spells it "Akay" in the earlier reviews), and a handful of stray double
 * full stops. Nothing has been shortened, and the guests' own emoji and
 * smileys are kept.
 *
 * The source gives first names only — no location, tour or date — so the cards
 * carry a name and nothing else. Two names appear twice, so anything rendering
 * this list must key on the quote rather than the name.
 */
export const testimonials = [
  {
    quote:
      "A wonderful tour with a guide who was charming and humorous, but also knowledgeable, making the tour unforgettable!!!",
    name: "Bartsch",
  },
  {
    quote:
      "A Kay was a really nice and friendly tour guide. She made everything interesting and varied — it was not boring at all! Thanks so much for the great tour!",
    name: "Olga",
  },
  {
    quote:
      "Very good and entertaining tour, we really enjoyed it!",
    name: "Klopfer",
  },
  {
    quote:
      "The tour with A Kay was really interesting and informative. She brought London really close to us and gave lots of tips for the rest of our stay. She is very friendly and open-minded. We would definitely book another tour with her anytime. Thanks for the great experience.",
    name: "Barbara",
  },
  {
    quote:
      "A Kay is very professional and tells stories about the different places we visited with a lot of charm and knowledge. A Kay was friendly and easy to understand. We would recommend the tour.",
    name: "Nadine",
  },
  {
    quote:
      "Sehr empfehlenswert. Der Tour hat sehr viel Spaß gemacht und war sehr informativ.",
    name: "Sabine",
    language: "de",
  },
  {
    quote:
      "A Kay answered our questions and we definitely learned and saw a lot. We were a small group and completely satisfied. I would book again.",
    name: "Klaudia",
  },
  {
    quote:
      "Great tour. Thanks a lot dear A Kay, it was fun and we saw a lot.",
    name: "Liane",
  },
  {
    quote:
      "The tour with A Kay in London was excellent! 🌟 Everything was well organized, interesting, and very enjoyable. 🙌 I can highly recommend it! 😊",
    name: "Maximilian",
  },
  {
    quote:
      "We had booked the tour in German and would love to do another one with A Kay anytime.",
    name: "Bettina",
  },
  {
    quote:
      "It was a very interesting tour. Learned a lot about the country and the people. Great sightseeing",
    name: "Tanja",
  },
  {
    quote:
      "A Kay is a really great tour guide! We really enjoyed the tour and learned so much about the history of London! A Kay answered all our questions very patiently and, most importantly, in detail! The tour was really entertaining! A Kay is very friendly and even gave us a gift at the end of the tour! A really great experience that we can only recommend!",
    name: "Jin",
  },
  {
    quote:
      "We had someone in the group who had never been to London, so we wanted a basic tour showing the ‘must sees’ for them. That’s exactly what we got, everything was explained in an interesting, not boring way. A very nice and friendly tour guide. The perfect tour for a first impression of London.",
    name: "Christine",
  },
  {
    quote:
      "A Kay is really nice and took a lot of time for our tour. You can tell she loves meeting new people and showing them around London. You always felt comfortable and could ask anything. There were interesting facts about the sights, but also lots of information about current life in London. Highly recommended :)",
    name: "Anna",
  },
  {
    quote:
      "A Kay ist eine offene, herzliche Person mit viel Hintergrundwissen, welches sie gerne teilt. Einfach neugierig sein :-)",
    name: "Paulina",
    language: "de",
  },
  {
    quote:
      "Nice tour. There was plenty of time for questions and answers.",
    name: "Laura",
  },
  {
    quote:
      "It was a really nice tour. We even got to see a changing of the guard and received tips for the rest of the trip. I highly recommend the tour :)",
    name: "Annalena",
  },
  {
    quote:
      "A Kay is a very open and friendly person who gave us a great and informative tour through the heart of London. An absolute hidden gem!",
    name: "Evelin",
  },
  {
    quote:
      "A Kay was very polite and told us a lot about the places. You can really recommend the tour.",
    name: "Tanja",
  },
  {
    quote:
      "A Kay gave us an amazing start in London. She explained all the main sights brilliantly and gave us a really good overview of the heart of the city. You can tell how much effort and love she puts into the tour. Really recommend it!",
    name: "Florian",
  },
  {
    quote:
      "The tour was great! Thank you… We learned a lot of new and interesting information about London and its sights. Our tour guide A Kay gave us an enjoyable tour with the main highlights.",
    name: "Andrea",
  },
  {
    quote:
      "We had a fun and informative tour around London. A Kay was really friendly and shared a lot of knowledge with us, and at the end she even had a little gift for everyone. The 2 hours flew by. We can fully recommend the tour. Thanks so much for this great walk.",
    name: "Anke",
  },
  {
    quote:
      "Really nice walk with information beyond the usual facts and dates. We had a private tour for just the two of us.",
    name: "Peter",
  },
  {
    quote:
      "We were lucky to walk through Westminster just the four of us as a family with A Kay. It was an informative tour with a great, professional guide! Thank you so much, dear A Kay.",
    name: "Katrin",
  },
  {
    quote:
      "A Kay is a nice person who told us everything about the visited sights. We had a private group because we were only 6 persons. Would do the tour again and again.",
    name: "Christoph",
  },
  {
    quote:
      "We had a great tour of London with A Kay. There were just the two of us, which made the tour even more valuable for us. A Kay shared lots of explanations and anecdotes about the typical London sights and took two 2-hour sessions just for us. We had so much fun with A Kay. I can only recommend the tour.",
    name: "Annika",
  },
  {
    quote:
      "A Kay charmed us with her friendly manner and told us lots of interesting stories about London.",
    name: "Shirli",
  },
  {
    quote:
      "I don’t usually write comments, but the tour was so informative and especially personalised. It was so much fun! Everything was very easy to understand, respect for the language skills. Keep it up!",
    name: "Ronald",
  },
  {
    quote:
      "It was my first trip to London and I was looking for a city tour at short notice. Luckily, I booked A Kay, as a private tour. That made the tour feel more like a stroll around the city with a friend who could tell you all sorts of interesting things about the city’s history and sights. I also had much more opportunity to ask questions than I would in a big group. That’s why I would definitely do a tour with A Kay again and recommend her to others.",
    name: "Albert",
  },
  {
    quote:
      "Today we had a private tour with A Kay. There was a lot of interesting information even beyond the landmarks. A Kay was very nice, put in a lot of effort and also engaged with our son. The tour was done at our pace and there was plenty of time for souvenir photos. We were out for a total of 2.5 hours and at the end there was a small gift. Thanks, A Kay.",
    name: "Manuela",
  },
  {
    quote:
      "A Kay is super nice, professional and punctual. We were lucky to have a private tour. It was really interesting. The tour even lasted 2.5 hours and we learnt a lot of new things about London. Each of us even got a small magnet of a London phone box as a souvenir. Absolutely recommendable. Thank you dear A Kay.",
    name: "Eva",
  },
  {
    quote:
      "We had a private tour with A Kay, she was very sweet, friendly and showed us many interesting sights, explaining everything well. We were even able to watch the Changing of the Horse Guards spontaneously. Thank you very much!",
    name: "Saskia",
  },
  {
    quote:
      "A Kay was very nice, the tour was interesting and informative, I can definitely recommend it.",
    name: "Sussanne",
  },
  {
    quote:
      "We really enjoyed the tour, it tells more than just about the buildings and their history, it also touches on interesting current topics, which we really liked. The sights we visited were top-notch.",
    name: "Mareike",
  },
  {
    quote:
      "Authentic, communicative, exciting! We had a really nice tour that shared fascinating information in an interesting way. We can definitely recommend it!",
    name: "Alex",
  },
  {
    quote:
      "Very likeable guide. :) We had a great afternoon and really enjoyed our time!",
    name: "Swantje",
  },
  {
    quote:
      "Thanks for the friendly and warm welcome to London!",
    name: "Eva",
  },
  {
    quote:
      "Very good and informative tour of London with A Kay! Thanks also for the gift at the end of the tour. We will come back.",
    name: "Isabella",
  },
  {
    quote:
      "Very nice and enthusiastic tour with A Kay! She has great tips on what else to do in London.",
    name: "Lucas",
  },
  {
    quote:
      "Very personal (bought tour for 2 of us), informative and interesting tour. A Kay answered all questions and took a lot of time for us. Highly recommendable.",
    name: "Karsten",
  },
  {
    quote:
      "Highly recommended! The tour was exciting, well organised, and A Kay was really friendly and knowledgeable. I was especially happy about the little gift — a magnet and some tea. Thanks so much for the great experience and the kind gesture!",
    name: "Darya",
  },
  {
    quote:
      "We were able to spend two informative hours with A Kay — we can recommend her as a guide anytime 🤩",
    name: "Sonja",
  },
  {
    quote:
      "We were lucky that my family and I (7 people) had a private tour with A Kay. We really enjoyed it and A Kay was a super nice guide :) we can wholeheartedly recommend the tour.",
    name: "Eva-Maria",
  },
  {
    quote:
      "We were lucky and bought private tour with A Kay. It was a lovely, interesting tour and A Kay was really nice and helpful :) absolutely recommend!",
    name: "Judith",
  },
  {
    quote:
      "The tour with A Kay was a lot of fun. She provided a lot of information about the different stops and put in a lot of effort. We’d be happy to come back…",
    name: "Christina",
  },
  {
    quote:
      "A Kay was a really nice and attentive guide. We were lucky to get a small group. The tour was well thought out and covered all the main sights. We were even on time for the changing of the guard at the square.",
    name: "T",
  },
  {
    quote:
      "A Kay was very friendly and helpful, she was able to answer all our questions about London. We had a lot of fun and laughed a lot together :)",
    name: "Diana",
  },
  {
    quote:
      "We did the tour on Sunday at 10am, which I can highly recommend. A Kay learned German at the Goethe Institute and has a pleasant accent. The tour covers all the sights in this area, including the Changing of the Guard at Buckingham Palace. There is also a small gift from A Kay.",
    name: "Patrick",
  },
  {
    quote:
      "A Kay is really a super nice person, and we had lots of fun with them! We would definitely book the tour again. Thank you and all the best!",
    name: "Markus",
  },
  {
    quote:
      "A Kay gave us a lovely tour and shared some interesting details about the different stops. She was also able to answer our questions and gave us a few helpful tips for our stay in London. We happily recommend A Kay!",
    name: "Susanne",
  },
  {
    quote:
      "A Kay is a very friendly person. Despite the heavy rain today, she competently guided our group through the Westminster area. Her German is good. Even though some in our group have been to London many times, we still learned a few new things. The most interesting aspects were especially about what life is like in modern London. Thanks for the lovely tour.",
    name: "Svenja",
  },
];

export const aboutGuide = {
  eyebrow: "Tours designed for curious travellers",
  heading: "Meet AK your Local Guide",
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

/**
 * Real tour photography from the client, replacing the stock London shots.
 * `images.akParliamentSquare` is deliberately left out: it is near-identical
 * to the guide portrait higher up the same page.
 */
export const socialGrid = [
  images.akPhoneBox,
  images.akBuckinghamPalace,
  images.akTheMall,
  images.akGroupSteps,
];
