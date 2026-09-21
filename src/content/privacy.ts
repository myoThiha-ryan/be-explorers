import { site } from "@/content/site";

/**
 * Privacy policy, supplied by the client (GDPR.pdf, 14 September 2026).
 *
 * Reproduced as written — this is a legal document, so the wording is the
 * client's and has not been edited for style. The only substitutions are the
 * contact details, which come from `site.ts` so the policy cannot drift out of
 * step with the rest of the site. Note that the source document names
 * `www.beexplorerstravel.com` as the website; the live domain is
 * `beexplorerstravelandtours.com`, which is what `site.url` holds and what the
 * page renders. The email stays on the `beexplorerstravel.com` domain.
 */

export type PolicyBlock = {
  subheading?: string;
  text?: string;
  list?: string[];
  /** Renders the business's contact details from `site.ts` */
  contact?: boolean;
};

export type PolicySection = { heading: string; blocks: PolicyBlock[] };

/** The name the client trades under, used where the policy identifies them. */
export const legalName = "Be Explorers Travel & Tours";

export const lastUpdated = "14 September 2026";

export const intro: string[] = [
  `At ${legalName}, we respect your privacy and are committed to protecting your personal information.`,
  "This Privacy Policy explains how we collect, use, store and protect your personal information when you visit our website, contact us, make a booking or use our travel and tour services.",
];

export const policySections: PolicySection[] = [
  {
    heading: "Who we are",
    blocks: [
      { text: `${legalName} is a London-based travel and tour business.` },
      {
        text: `For the purposes of UK data protection law, including the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018, ${legalName} is responsible for the personal information we collect and use.`,
      },
      {
        text: "If you have any questions about this Privacy Policy or how we handle your personal information, please contact us:",
      },
      { contact: true },
    ],
  },
  {
    heading: "What personal information we collect",
    blocks: [
      {
        text: "Depending on how you interact with us, we may collect the following information:",
        list: [
          "Full name",
          "Email address",
          "Telephone number",
          "Booking details",
          "Tour date and time",
          "Number of adults and children travelling",
          "Special requests or requirements",
          "Information you provide when contacting us",
          "Payment and transaction information",
          "Information relating to private, family, group or corporate bookings",
          "Information provided through our website contact or booking forms",
          "Information provided through third-party booking platforms",
          "Website usage information, where applicable, such as IP address, browser type and cookie information",
        ],
      },
      {
        text: "We only collect information that is reasonably necessary for the purposes described in this Privacy Policy.",
      },
    ],
  },
  {
    heading: "How we collect your information",
    blocks: [
      {
        text: "We may collect personal information when you:",
        list: [
          "Make a booking with us",
          "Complete a contact or enquiry form on our website",
          "Contact us by email, telephone or social media",
          "Request information about our tours",
          "Purchase or enquire about one of our services",
          "Book through a third-party booking platform",
          "Subscribe to receive marketing communications",
          "Interact with our website",
        ],
      },
      {
        text: "If we receive your information from another organisation or booking platform, we will handle it in accordance with applicable data protection law.",
      },
    ],
  },
  {
    heading: "How we use your personal information",
    blocks: [
      {
        text: "We may use your personal information to:",
        list: [
          "Process and manage your tour booking",
          "Communicate with you about your booking",
          "Answer enquiries and provide customer support",
          "Provide our tours and travel services",
          "Manage payments and refunds",
          "Make arrangements necessary for your tour",
          "Manage private, family, group and corporate bookings",
          "Send booking confirmations and important service information",
          "Maintain business and financial records",
          "Improve our website, services and customer experience",
          "Prevent fraud or misuse of our services",
          "Comply with legal and regulatory requirements",
          "Send marketing communications where permitted by law and, where required, with your consent",
        ],
      },
      {
        text: "We will only use your personal information for appropriate and lawful purposes.",
      },
    ],
  },
  {
    heading: "Our lawful basis for processing your information",
    blocks: [
      {
        text: "Depending on the circumstances, we may process your personal information under one or more of the following lawful bases:",
      },
      {
        subheading: "Contract",
        text: "We may need to use your information to provide a tour or service you have booked, or to take steps at your request before entering into a contract.",
      },
      {
        subheading: "Legal obligation",
        text: "We may process certain information where we are legally required to do so, for example for accounting, tax, financial or regulatory purposes.",
      },
      {
        subheading: "Legitimate interests",
        text: "We may use personal information where it is necessary for our legitimate business interests, provided that those interests do not override your fundamental rights and freedoms. Examples may include managing our business, responding to enquiries, improving our services, preventing fraud and maintaining appropriate business records.",
      },
      {
        subheading: "Consent",
        text: "Where consent is required, such as for certain marketing communications or non-essential cookies, we will ask for your consent. You may withdraw your consent at any time.",
      },
    ],
  },
  {
    heading: "Marketing communications",
    blocks: [
      {
        text: "We may occasionally send you information about:",
        list: [
          "New tours",
          "Special offers",
          "Seasonal experiences",
          "Travel information",
          `${legalName} news and updates`,
        ],
      },
      {
        text: "We will only send direct marketing where we have an appropriate lawful basis to do so.",
      },
      {
        text: "You can unsubscribe from marketing communications at any time by contacting us or using the unsubscribe option provided in the communication.",
      },
      {
        text: "You have an absolute right to object to the use of your personal information for direct marketing.",
      },
    ],
  },
  {
    heading: "Sharing your personal information",
    blocks: [
      { text: "We do not sell your personal information." },
      {
        text: "Where necessary to provide our services or operate our business, we may share relevant information with trusted third parties, such as:",
        list: [
          "Payment providers",
          "Booking platforms",
          "Website hosting and technology providers",
          "Email and communication service providers",
          "Professional advisers, such as accountants",
          "Relevant suppliers or service providers involved in your booking",
          "Government, regulatory or law-enforcement authorities where legally required",
        ],
      },
      {
        text: "We only share information where there is a legitimate and appropriate reason to do so and, where applicable, under an appropriate lawful basis.",
      },
    ],
  },
  {
    heading: "Payment information",
    blocks: [
      { text: "Payments may be processed through third-party payment providers." },
      {
        text: "We generally do not need to store your full payment card details ourselves.",
      },
      {
        text: "Payment providers may collect and process payment information according to their own privacy policies and terms.",
      },
    ],
  },
  {
    heading: "How long we keep your information",
    blocks: [
      {
        text: "We will keep personal information only for as long as reasonably necessary for the purposes for which it was collected.",
      },
      {
        text: "The length of time we keep information may depend on:",
        list: [
          "The nature of the information",
          "The reason we collected it",
          "Whether you have an ongoing relationship with us",
          "Accounting and tax requirements",
          "Legal or regulatory requirements",
          "The need to resolve disputes or enforce agreements",
        ],
      },
      {
        text: "When information is no longer required, we will securely delete or dispose of it where appropriate.",
      },
    ],
  },
  {
    heading: "Keeping your information secure",
    blocks: [
      {
        text: "We take reasonable technical and organisational measures to protect your personal information against:",
        list: [
          "Unauthorised access",
          "Loss",
          "Misuse",
          "Alteration",
          "Disclosure",
          "Accidental destruction",
        ],
      },
      {
        text: "However, no method of transmission or electronic storage can be guaranteed to be completely secure.",
      },
    ],
  },
  {
    heading: "Cookies",
    blocks: [
      {
        text: "Our website may use cookies and similar technologies to improve website functionality, understand how visitors use our website and, where applicable, support analytics or marketing.",
      },
      { text: "Some cookies may be necessary for the website to operate." },
      {
        text: "Where required, we will ask for your consent before using non-essential cookies.",
      },
      { text: "You can also manage cookies through your browser settings." },
    ],
  },
  {
    heading: "Third-party websites and services",
    blocks: [
      {
        text: "Our website or communications may contain links to third-party websites, booking platforms or services.",
      },
      {
        text: `These websites are operated independently from ${legalName} and may have their own privacy policies.`,
      },
      {
        text: "We recommend checking the privacy policy of any third-party website you visit.",
      },
    ],
  },
  {
    heading: "International transfers",
    blocks: [
      {
        text: "Some of our service providers or booking platforms may process personal information outside the UK.",
      },
      {
        text: "Where personal information is transferred internationally, we will take appropriate steps to ensure that the transfer is carried out in accordance with applicable UK data protection law and appropriate safeguards are used where required.",
      },
    ],
  },
  {
    heading: "Your data protection rights",
    blocks: [
      {
        text: "Depending on the circumstances, you may have rights under UK data protection law, including the right to:",
        list: [
          "Request access to your personal information",
          "Ask us to correct inaccurate or incomplete information",
          "Request deletion of your personal information",
          "Request restriction of processing",
          "Object to certain processing",
          "Object to direct marketing",
          "Request transfer of certain personal information",
          "Withdraw consent where processing is based on consent",
        ],
      },
      { text: "These rights are subject to certain legal conditions and exceptions." },
      {
        text: `If you would like to exercise any of these rights, please contact us at ${site.email}.`,
      },
      {
        text: "The exact rights available can depend on the lawful basis used for processing your information.",
      },
    ],
  },
  {
    heading: "Children's information",
    blocks: [
      {
        text: "Our tours may be booked for families and may be attended by children.",
      },
      {
        text: "We do not intentionally collect unnecessary personal information about children.",
      },
      {
        text: "Where information about children is necessary for a booking, we will only collect and use information that is reasonably necessary to provide the service and manage the booking.",
      },
    ],
  },
  {
    heading: "Complaints",
    blocks: [
      {
        text: "If you have concerns about how we have handled your personal information, please contact us first so that we have an opportunity to address your concern.",
      },
      {
        text: "You also have the right to complain to the UK's data protection regulator, the Information Commissioner's Office (ICO). The ICO provides guidance and a complaints process for individuals who believe their personal information has not been handled correctly.",
      },
    ],
  },
  {
    heading: "Changes to this Privacy Policy",
    blocks: [
      {
        text: "We may update this Privacy Policy from time to time to reflect changes to our business, services, technology or legal requirements.",
      },
      {
        text: "Any updated version will be published on this page with a revised “Last updated” date.",
      },
    ],
  },
  {
    heading: "Contact us",
    blocks: [
      {
        text: `If you have any questions about this Privacy Policy or how ${legalName} handles your personal information, please contact:`,
      },
      { contact: true },
    ],
  },
];
