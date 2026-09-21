import { site } from "@/content/site";

/** An optional block under the lead paragraph: a sub-heading, a list, or both. */
export type FaqBlock = { heading?: string; text?: string; list?: string[] };
export type Faq = { question: string; answer: string; details?: FaqBlock[] };
export type FaqGroup = { title: string; items: Faq[] };

export const faqGroups: FaqGroup[] = [
  {
    title: "Booking & Enquiries",
    items: [
      {
        question: `How can I book a tour with ${site.name}?`,
        answer:
          "Contact us once you find the tours you would like to book. If you have any questions or would like to arrange a private or tailor-made experience, please contact us and our team will be happy to assist you.",
      },
      {
        question: "Can I book a private tour for my family or friends?",
        answer:
          "Of course. Our private tours are perfect for families, friends and special occasions. You can either choose one of the tours on this website, or we can create a tailor-made tour for you.",
      },
      {
        question: "Can you create a tailor-made tour for my group?",
        answer:
          "Absolutely. We can create a bespoke itinerary based on your interests, schedule, group size and preferred destinations.",
      },
      {
        question: "Do you offer corporate tours?",
        answer:
          "Yes. We offer corporate and team experiences for companies, organisations and professional groups. Get in touch with us to discuss your requirements.",
      },
      {
        question: `How can I contact ${site.name}?`,
        answer: `For bookings, private tours and corporate enquiries, contact us through the enquiry form on this website, or email ${site.email} or call ${site.phone}.`,
      },
    ],
  },
  {
    title: "Our Tours",
    items: [
      {
        question: "What types of tours do you offer?",
        answer:
          "We offer London walking tours including City of Westminster, City of London, Notting Hill, Harry Potter, and Canary Wharf & Greenwich, as well as full-day trips from London to Windsor, Stonehenge and Bath, or to Oxford and Cambridge.",
      },
      {
        question: "Are your tours private or shared?",
        answer:
          "We offer both shared tours and private experiences. We also provide corporate, group and tailor-made tours designed around your needs.",
      },
      {
        question: "Do you offer tours outside London?",
        answer:
          "Yes. In addition to exploring London, we offer full-day trips from London — Windsor, Stonehenge and Bath, or Oxford and Cambridge — allowing you to discover more of England in a single day.",
      },
      {
        question: "Where do the tours start and finish?",
        answer:
          "Meeting points and finishing locations vary depending on the tour — where they are confirmed you will find them on the tour page. Full meeting-point and itinerary details are provided with your booking confirmation.",
      },
      {
        question: "How will I find the guide at the meeting point?",
        answer:
          "Look for the red umbrella. Your guide will be waiting at the meeting point holding one, which is easy to spot whatever the weather is doing.",
      },
      {
        question: "What should I bring and wear?",
        answer:
          "London weather can be unpredictable — you might start your tour in sunshine and finish with a little rain! Since our walking tours last around 2 hours and take place outdoors, we recommend coming prepared for the weather.",
        details: [
          {
            heading: "On sunny or warm days",
            list: [
              "Wear comfortable, breathable clothing",
              "Comfortable walking shoes are essential",
              "Bring a water bottle to stay hydrated",
              "Sunglasses, sunscreen and a hat are recommended, especially in summer",
              "A light jacket or cardigan can be useful, as temperatures change during the day",
            ],
          },
          {
            heading: "On rainy or cooler days",
            list: [
              "Bring a waterproof jacket or raincoat and/or a small umbrella",
              "Wear comfortable, water-resistant shoes if possible",
              "Dress in layers so you can adjust easily",
              "In colder months, bring a warm coat, scarf, gloves and hat",
            ],
          },
          {
            text: "Most importantly, please wear comfortable shoes — we will be walking and standing for approximately 2 hours, often on pavements and historic streets.",
          },
          {
            text: "Our little London tip: even if the forecast looks dry, carrying a small umbrella or lightweight waterproof jacket is always a good idea. You never quite know what London has planned!",
          },
          {
            text: "Please check the weather forecast on the day of your tour and dress accordingly. Our tours generally continue in light rain, so come prepared and enjoy exploring London with us!",
          },
        ],
      },
      {
        question: "What happens if it rains?",
        answer:
          "Most of our tours take place outdoors, and London weather can be unpredictable. Tours generally continue in light rain, but if weather conditions make a tour unsafe or impossible, we will contact guests and provide the appropriate alternative arrangements according to our terms and conditions.",
      },
    ],
  },
  {
    title: "Your Guide",
    items: [
      {
        question: "Who will be my tour guide?",
        answer: `Our tours are personally guided by ${site.guide}, an experienced tour guide who has worked in the travel industry since 2012 with internationally recognised travel companies. ${site.guide} personally guides every ${site.name} tour.`,
      },
    ],
  },
  {
    title: "Languages",
    items: [
      {
        question: "What languages are your tours available in?",
        answer:
          "Our tours are available in English, Myanmar and German, making our experiences accessible to travellers from different countries and backgrounds.",
      },
      {
        question: "Can I request a specific language?",
        answer:
          "Yes — choose your language when you enquire and the tour will be guided in it. Mixed-language groups are no problem either.",
      },
    ],
  },
  {
    title: "Pricing & Payment",
    items: [
      {
        question: "Is the price per person or per group?",
        answer:
          "The London walking tours are £20 per person. Children under 18 go free, and special rates are available for families, private groups and corporate bookings — just ask when you enquire. Day trips are quoted individually.",
      },
      {
        question: "What is included in the price?",
        answer:
          "Your guide for the whole tour, a bottle of water and a small souvenir. Transport, entrance tickets, hotel pick-up and tips are not included.",
      },
      {
        question: "Are attraction tickets included?",
        answer:
          "No — the walking tours view the landmarks from the outside, which is where most of the stories happen. If you would like to go inside somewhere such as the Tower of London or Windsor Castle, we are happy to help you arrange tickets in advance.",
      },
      {
        question: "How is payment arranged?",
        answer:
          "There is no online payment on this website. Once your tour is confirmed we will send you the payment details along with everything else you need to know.",
      },
    ],
  },
  {
    title: "Families & Accessibility",
    items: [
      {
        question: "Are your tours suitable for families and children?",
        answer:
          "Yes. Many of our experiences are suitable for families and children, and under-18s join free of charge. Please check the individual tour details, or contact us if you are travelling with young children so we can recommend the most suitable option.",
      },
      {
        question:
          "Are the tours suitable for older travellers or anyone with mobility needs?",
        answer:
          "Our walking tours cover a couple of hours on foot at a relaxed pace. Tell us what you need before you book and we will advise honestly on the walking involved and suggest the option that suits you best.",
      },
    ],
  },
  {
    title: "Changes & Cancellation",
    items: [
      {
        question: "Can I change the date, or cancel?",
        answer:
          "Get in touch as early as you can and we will do our best to move your tour to another date. Changes and cancellations are handled according to our terms and conditions.",
      },
    ],
  },
];

/** A short selection used as a teaser on other pages */
export const faqTeaser: Faq[] = [
  faqGroups[0].items[0],
  faqGroups[1].items[1],
  faqGroups[3].items[0],
  faqGroups[4].items[0],
];
