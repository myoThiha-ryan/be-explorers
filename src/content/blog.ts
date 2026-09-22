import { images, type SiteImage } from "@/content/images";

/**
 * Blog articles, supplied by the client (to-edit-Sep20.pdf).
 *
 * Reproduced as written. The only changes are typographic: run-on sentences
 * that the PDF export had glued together ("museum.Lawyers still work here")
 * are separated, and the numbered headings are carried by the markup rather
 * than typed into the text.
 *
 * No publication dates were supplied, so none are shown. Add a `date` field
 * here and to the card and article headers if the client wants them.
 */

export type BlogSection = {
  heading: string;
  body: string[];
  list?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  /** The line under the title, where the client wrote one */
  standfirst?: string;
  /** Card and search-result description — written for this site, not the PDF */
  summary: string;
  image: SiteImage;
  intro: string[];
  sections: BlogSection[];
  /** The client's closing recap, e.g. "Five Chapters. One Incredible City." */
  outro?: BlogSection;
  /** The client's own call to action, where the article ends with one */
  cta?: { heading: string; body: string };
};

export const posts: BlogPost[] = [
  {
    slug: "first-time-visitor-guide",
    title: "London Calling! Things Every First-Time Visitor Should Know",
    summary:
      "Contactless or Oyster, unpredictable weather, pub etiquette and what to put in your bag — the practical things worth knowing before your first visit.",
    image: images.regentStreet,
    intro: [
      "Visiting London for the first time? Welcome!",
      "London is exciting, historic and wonderfully walkable — but a few simple tips can make your first visit much easier. Here are 10 things worth knowing before you arrive.",
    ],
    sections: [
      {
        heading: "Oyster or contactless?",
        body: [
          "For most visitors, contactless payment is one of the easiest ways to travel around London. You can use a contactless bank card or compatible phone or watch, while an Oyster card is another option.",
          "Remember to use the same card or device when touching in and out. On buses, you only touch in.",
          "If you're visiting from overseas, check whether your bank charges foreign transaction or currency-conversion fees.",
        ],
      },
      {
        heading: "Learn the basics of London's transport",
        body: [
          "The Tube, buses, Elizabeth line, DLR and trains make getting around London relatively easy.",
          "But don't take the Tube everywhere! Some famous sights are surprisingly close together, and walking between them lets you discover streets, buildings and little details you would otherwise miss.",
          "Our tip: combine public transport with walking.",
        ],
      },
      {
        heading: "Be ready for London weather",
        body: [
          "London weather can be unpredictable — even in summer!",
          "Bring comfortable shoes and a light waterproof jacket or small umbrella. On sunny days, sunglasses, sunscreen and a water bottle are useful; in colder months, dress in layers.",
          "Always check the forecast before leaving your hotel.",
          "And don't worry if it rains — a little London rain is part of the experience!",
        ],
      },
      {
        heading: "Tipping isn't always expected",
        body: [
          "Tipping is generally optional in the UK.",
          "In restaurants, check whether a service charge has already been included. If it hasn't, around 10–15% is a common guideline for good service.",
          "At traditional pubs, tipping when ordering drinks at the bar isn't normally expected.",
          "And if you enjoy a walking tour, a tip for your guide is always a lovely way to say thank you.",
        ],
      },
      {
        heading: "Bring comfortable shoes!",
        body: [
          "London is a walking city — and you'll probably walk much more than you expect.",
          "Places that look close together on a map can involve a surprisingly long walk, especially when you're sightseeing all day.",
          "So our advice is simple: comfort over fashion. Your feet will thank you later.",
        ],
      },
      {
        heading: "Know your pub etiquette",
        body: [
          "Traditional British pubs are part of the London experience.",
          "At many pubs, you order your drinks at the bar rather than waiting for table service. Simply tell the bartender what you'd like.",
          "You don't normally need to tip when ordering drinks at the bar, and pubs usually offer plenty of non-alcoholic options too.",
        ],
      },
      {
        heading: "Sundays can be different",
        body: [
          "Sunday is a great day to explore London, but some shops, attractions and businesses have different or shorter opening hours.",
          "If there's somewhere specific you want to visit, check its opening hours beforehand.",
          "Sunday is also perfect for walking tours, parks, museums, markets and a relaxed pub lunch.",
        ],
      },
      {
        heading: "Remember: we drive on the left!",
        body: [
          "If you're visiting from a country where traffic drives on the right, London's roads can take some getting used to.",
          "Look both ways before crossing, even when the road looks quiet, and use pedestrian crossings where possible.",
          "Be particularly aware of buses, black cabs, cyclists and turning vehicles.",
          "Take your time — there's no prize for crossing the road fastest!",
        ],
      },
      {
        heading: "What should you bring?",
        body: [
          "For a day exploring London, keep your bag light. We recommend:",
        ],
        list: [
          "Comfortable walking shoes",
          "Small umbrella or waterproof jacket",
          "Water bottle",
          "Sunglasses and sunscreen",
          "Phone and portable charger",
          "Contactless card or payment device",
          "An extra layer",
        ],
      },
    ],
    outro: {
      heading: "And don't forget your curiosity",
      body: [
        "London is full of fascinating details that are easy to miss.",
      ],
    },
  },
  {
    slug: "hidden-london-stories",
    title: "Look Again! 10 Hidden London Stories You Might Walk Right Past",
    summary:
      "Fleet Street, a gate that moved, Roman remains under the financial district and the pub on the corner — the details a walking guide loves pointing out.",
    image: images.phoneBox,
    intro: [
      "Think you've seen London? Look again.",
      "London's famous landmarks are incredible — Big Ben, Buckingham Palace, Tower Bridge and St Paul's Cathedral are famous for good reason.",
      "But some of London's most interesting stories are hiding somewhere else. They are tucked inside an old pub, carved into a building, hidden down a narrow alley or sitting quietly beside a busy street.",
      "As a London walking guide, these are the details I love pointing out — because sometimes the place you almost walked past has the best story.",
      "Here are 10 hidden London stories to look out for on your next walk.",
    ],
    sections: [
      {
        heading: "Fleet Street: where newspapers ruled the street",
        body: [
          "Today, Fleet Street is famous for its history, beautiful buildings and connections to the City of London. But for generations, it was closely associated with British newspapers and printing.",
          "The name became almost synonymous with the British press, with newspaper offices and printing works occupying the area. Even after the newspapers moved elsewhere, the name “Fleet Street” continued to represent Britain's newspaper industry.",
          "So when you walk through Fleet Street, you're not simply walking along an old London road. You're walking through a piece of Britain's media history.",
        ],
      },
      {
        heading: "Temple: London has a medieval secret",
        body: [
          "Tucked between Fleet Street and the River Thames is Temple, one of London's most fascinating historic areas. It is home to the Inner Temple and Middle Temple, two of London's historic Inns of Court.",
          "Nearby, you'll find Temple Church, founded in the 12th century by the Knights Templar. Look carefully and you'll find medieval architecture, stone effigies, peaceful courtyards and symbols that are easy to miss.",
          "The area can feel surprisingly peaceful considering how close it is to some of London's busiest streets. Step through one of its gateways and it can feel like you've left modern London behind.",
        ],
      },
      {
        heading: "Temple Bar: a gate that moved",
        body: [
          "Here's a wonderfully strange piece of London history.",
          "Temple Bar once stood at the junction of Fleet Street and the Strand, marking the historic boundary between the City of London and Westminster. The structure you can see today dates from the late 17th century, although a barrier existed here centuries earlier.",
          "But here's the interesting part: Temple Bar was eventually moved from its original location. Today, this historic gateway stands near St Paul's Cathedral.",
          "So next time you pass it, remember that you're looking at a former London gateway that has quite literally changed neighbourhoods.",
        ],
      },
      {
        heading: "Look up! London buildings have secrets",
        body: [
          "One of my favourite things about walking around London is simply to look up.",
          "You'll find strange faces, animals, coats of arms, statues and decorative details hiding above shopfronts and doorways.",
          "In Temple, for example, different legal institutions have their own historic symbols — including the Pegasus associated with Inner Temple and the lamb and cross associated with Middle Temple.",
          "Most people walk underneath them without noticing. That's one reason I love walking tours. Sometimes the most interesting thing isn't in front of you — it's above your head!",
        ],
      },
      {
        heading: "The old pub around the corner",
        body: [
          "London has no shortage of historic pubs, and some are hiding in streets that tourists might otherwise ignore. In the City, atmospheric pubs can be tucked away along old lanes and historic streets.",
          "These aren't simply places to have a drink. For centuries, pubs have been part of London's social life — places where workers, travellers, journalists, politicians and locals could meet.",
          "So when you see an old pub squeezed between modern buildings, don't walk past too quickly. The building may have more stories than you expect.",
        ],
      },
      {
        heading: "Beneath the modern city: Roman London",
        body: [
          "Here's something that surprises many visitors: London was already an important city almost 2,000 years ago.",
          "The modern City of London sits on top of layers of history, including remains from Roman London. Some archaeological discoveries are surprisingly close to modern offices, shops and busy streets.",
          "The City even has places where visitors can see Roman remains beneath today's London, including the remains of a Roman temple and amphitheatre. Imagine standing in the middle of today's financial district and thinking: “What was happening here nearly 2,000 years ago?”",
          "That's London for you.",
        ],
      },
      {
        heading: "A quiet corner in the middle of Westminster",
        body: [
          "Westminster is one of the busiest parts of London. Tourists arrive to see Buckingham Palace, Westminster Abbey, Parliament and Big Ben.",
          "But look carefully and you'll find quieter corners, gardens and historic streets tucked between the famous landmarks.",
          "That's part of London's charm. You can be surrounded by millions of visitors one minute and suddenly find yourself somewhere peaceful the next. The trick is simply to slow down and look beyond the obvious attractions.",
        ],
      },
      {
        heading: "London's churches have stories too",
        body: [
          "London's historic churches aren't just beautiful buildings. Many have survived fires, wars, rebuilding and centuries of change.",
          "Take St Clement Danes, sitting in the middle of the Strand. Its bells are famously associated with the nursery rhyme “Oranges and Lemons,” and today the church is also the Central Church of the Royal Air Force.",
          "So the next time you pass an old London church, don't just take a photograph. Ask yourself: what has this building seen?",
        ],
      },
      {
        heading: "The secret is sometimes the street itself",
        body: [
          "Some London streets look completely ordinary. A narrow passage. A small courtyard. An old stone arch. A little doorway.",
          "But many of these spaces are survivors from earlier versions of London. The City, in particular, is full of ancient lanes and atmospheric corners tucked between modern buildings.",
          "And that's why walking is so rewarding. From inside a Tube station, you see London as a map. On foot, you see the layers.",
        ],
      },
    ],
  },
  {
    slug: "london-2000-years-in-five-chapters",
    title: "London: 2,000 Years in Five Chapters",
    standfirst:
      "From Roman Londinium to Tudor kings, devastating fire and the world of British law.",
    summary:
      "Roman Londinium, medieval markets, Tudor kings, the Great Fire and legal London — two thousand years of the city in five chapters.",
    image: images.towerBridge,
    intro: [
      "Walk through London today and you see red buses, modern offices, busy streets and thousands of people rushing around.",
      "But underneath this modern city are almost 2,000 years of history.",
      "Let's take a quick journey through five chapters of London's fascinating past.",
    ],
    sections: [
      {
        heading: "Roman London — where Londinium began",
        body: [
          "Our story begins almost 2,000 years ago.",
          "Around AD 47–50, the Romans established Londinium beside the River Thames. Its location made it an ideal centre for trade and transport, and the settlement soon became an important city in Roman Britain.",
          "But Roman London wasn't always peaceful. Around AD 60–61, Boudica's rebellion led to Londinium being attacked and burned. The Romans rebuilt the city, and it continued to grow.",
          "Today, Roman remains can still be discovered beneath modern London. So when you're walking through the City, remember: you're walking through a place that has been part of London's story for nearly 2,000 years.",
        ],
      },
      {
        heading: "Medieval London — churches, markets and narrow streets",
        body: [
          "After the Romans left Britain, London changed dramatically, but the city eventually grew into a busy medieval centre. Merchants, craftsmen, traders and religious communities filled its streets.",
          "Many medieval buildings disappeared over the centuries, but some remarkable survivors remain. Westminster Hall, for example, was built in the late 11th century and became an important centre of royal government and law.",
          "The City was also filled with churches, markets and narrow streets — some of whose names still give us clues about London's medieval past.",
          "Look carefully as you explore today and you'll find pieces of this medieval London hiding among much newer buildings.",
        ],
      },
      {
        heading: "Tudor London — kings, queens and dramatic change",
        body: [
          "Then came the Tudors. This was the London of Henry VIII, Elizabeth I and Shakespeare — a period of enormous political, religious and cultural change.",
          "Henry VIII's break with Rome transformed England, while London became increasingly important as a centre of royal power, government and commerce.",
          "But Tudor London wasn't just about palaces and kings. It was crowded, noisy and full of ordinary people — merchants, craftsmen, workers and travellers.",
          "The River Thames was a vital transport route, and entertainment flourished. This was the world that eventually produced Shakespeare's London.",
          "Walk through Westminster or the City today and you're walking through streets that have witnessed some extraordinary Tudor stories.",
        ],
      },
      {
        heading: "The Great Fire — London rebuilt from the ashes",
        body: [
          "On 2 September 1666, a fire began in a bakery on Pudding Lane.",
          "Over the next four days, the Great Fire of London spread through the City, destroying much of it and leaving around 100,000 people homeless.",
          "But the story didn't end with the flames. London was rebuilt. Christopher Wren's magnificent St Paul's Cathedral rose from the destruction, while the Monument still commemorates the disaster.",
          "Much of the City was rebuilt on its existing street pattern, meaning that when you walk around London today, you are exploring a city that was literally rebuilt after catastrophe.",
        ],
      },
      {
        heading: "Legal London — where history is still alive",
        body: [
          "Just off Fleet Street lies one of London's most fascinating areas: Temple. Its quiet courtyards and historic buildings feel surprisingly peaceful compared with the busy streets around them.",
          "Temple is home to the historic Inner Temple and Middle Temple, closely connected with England's legal profession. And its history goes even further back: Temple Church was founded by the Knights Templar in the 12th century.",
          "What makes this area particularly special is that its history isn't simply something you read about in a museum. Lawyers still work here today. People still walk through the courtyards. Historic buildings are still part of everyday London life.",
        ],
      },
    ],
    outro: {
      heading: "Five chapters. One incredible city.",
      body: [
        "That's the magic of London. You don't need a time machine to travel through history. You just need a comfortable pair of shoes, a curious mind — and someone who knows where to look.",
      ],
      list: [
        "Roman London gave the city its foundations",
        "Medieval London created communities and institutions that shaped its future",
        "Tudor London witnessed kings, queens, religious change and Shakespeare",
        "The Great Fire transformed the City",
        "Legal London shows us that some of London's history is still alive today",
      ],
    },
    cta: {
      heading: "Come explore London's stories with us",
      body: "Join us on foot and discover the people, places and stories hiding behind the streets of London. Because when you know the story, London becomes much more than a city — it becomes an adventure.",
    },
  },
  {
    slug: "kings-steam-and-skyline",
    title: "Kings, Steam & Skyline: 5 More Chapters of London's Story",
    standfirst:
      "From royal Westminster and Victorian railways to the Blitz and the London of today.",
    summary:
      "Royal Westminster, the newspapers of Fleet Street, Victorian railways, the Blitz and the global capital London became — five more chapters.",
    image: images.bigBenSunset,
    intro: [
      "London's history didn't stop with the Tudors, the Great Fire or medieval streets.",
      "The city continued to change dramatically — kings and queens shaped Westminster, newspapers transformed Fleet Street, railways brought Victorian London into a new age, the Blitz tested the city during World War II, and today London stands as one of the world's great global cities.",
      "Here are five more chapters of London's incredible story.",
    ],
    sections: [
      {
        heading: "Royal London — where monarchy meets modern Britain",
        body: [
          "If you want to understand London's royal history, Westminster is a good place to begin.",
          "For centuries, this area has been closely connected with the monarchy and government. Westminster Abbey has hosted royal coronations for centuries, while nearby Buckingham Palace became the London residence of the British monarch in the 19th century.",
          "And then there's the Palace of Westminster — home to the UK's Parliament and one of London's most recognisable landmarks.",
          "What makes Royal London fascinating is that these aren't simply historic buildings. Royal traditions continue today. When you watch a Changing of the Guard ceremony or see the Union Flag flying over a royal residence, you're seeing traditions connected to a much longer story.",
        ],
      },
      {
        heading: "Fleet Street — where London learned to make news",
        body: [
          "Walk along Fleet Street today and you might not realise how important this street once was to British journalism.",
          "For centuries, printing and newspaper businesses grew around the area, and Fleet Street eventually became almost synonymous with the British newspaper industry. Journalists, editors and printers helped turn the street into one of the most famous centres of journalism in the world.",
          "Although the major newspapers have since moved elsewhere, the name Fleet Street still carries that connection.",
          "So next time you walk along it, remember: you're walking through the former heart of Britain's newspaper world.",
        ],
      },
      {
        heading: "Victorian London — when the city started moving faster",
        body: [
          "The Victorian era transformed London.",
          "The population grew rapidly, industry expanded and the city was connected by an increasingly extensive railway network. Suddenly, people could travel much further and much faster. New stations, bridges, roads and public buildings changed the face of London.",
          "The railway didn't just change transportation — it changed where people lived, where they worked and how they experienced the city.",
          "This was also the London of Charles Dickens, grand Victorian architecture and enormous social contrasts. Modern London owes much of its shape to this extraordinary period of expansion.",
        ],
      },
      {
        heading: "London during WWII — the city under fire",
        body: [
          "London faced one of its darkest chapters during the Second World War.",
          "From 1940, the Blitz brought sustained German bombing to London and other British cities. People sheltered in Underground stations, homes and public shelters while bombs damaged buildings across the capital.",
          "The destruction was enormous, but London continued to function. People went to work, children were evacuated, shops operated when possible and emergency services worked through the bombing.",
          "When you walk through London today, it's easy to forget that some of these streets once looked completely different. The war left scars across the city — but it also became an important part of London's modern identity.",
        ],
      },
      {
        heading: "Modern London — an ancient city, a global capital",
        body: [
          "And then we arrive at the London you see today.",
          "Look around and you'll see 2,000 years of history sitting beside modern life. Roman remains sit beneath modern buildings. Medieval churches stand beside skyscrapers. Victorian railway stations carry millions of passengers. Historic royal buildings coexist with a modern Parliament.",
          "And London's population continues to bring together people, languages, cultures and traditions from around the world.",
          "The skyline itself tells the story — old domes and towers alongside glass skyscrapers. London didn't replace its past. It was built on top of it. And that's what makes the city so fascinating.",
        ],
      },
    ],
    outro: {
      heading: "Five more chapters. One ever-changing London.",
      body: [
        "So next time you walk through London, look around. You might be standing where a king once walked. You might be passing a street where newspapers once changed the world. You might be travelling through a Victorian railway station, or walking through a neighbourhood rebuilt after the Blitz.",
        "London isn't just one story. It's thousands of stories, layered on top of each other. And the best way to discover them? On foot. One street at a time.",
      ],
      list: [
        "Royal London shows us the continuing story of monarchy and government",
        "Fleet Street reminds us of the power of newspapers and journalism",
        "Victorian London transformed the city through railways, industry and rapid growth",
        "The Blitz left a lasting mark on London's people and streets",
        "Modern London continues to evolve while carrying its extraordinary past with it",
      ],
    },
    cta: {
      heading: "Come explore London's story with us",
      body: "Join us on a walking tour and discover the history, people and stories behind the London you see today. Because every London street has a story — you just need to know where to look.",
    },
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

/** Rough reading time, rounded up, at 200 words per minute. */
export function readingMinutes(post: BlogPost) {
  const parts = [
    ...post.intro,
    ...post.sections.flatMap((s) => [s.heading, ...s.body, ...(s.list ?? [])]),
    ...(post.outro ? [...post.outro.body, ...(post.outro.list ?? [])] : []),
  ];
  const words = parts.join(" ").split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}
