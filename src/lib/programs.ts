// Programs & services, with content carried over from the old nice-canada.com
// WordPress site (static export). Lockdown-era notices have been left out.

export type ProgramSection = {
  title: string;
  intro?: string;
  items: string[];
  // "number" → 1, 2, 3…  "letter" → a, b, c…  default → bullets
  marker?: "number" | "letter";
};

export type Program = {
  slug: string;
  title: string;
  category: "Youth" | "Community" | "Outreach";
  summary: string;
  // Wide photo shown at the top of the program page.
  image?: string;
  // Poster-style flyer shown on the program page (opens full size).
  flyer?: string;
  body: string[];
  // Short highlighted note shown above the sections (e.g. eligibility).
  notice?: string;
  sections?: ProgramSection[];
  contacts?: { label: string; name?: string; phone: string }[];
  downloads?: { label: string; href: string }[];
  links?: { label: string; href: string }[];
  photos?: { title: string; images: string[] };
};

export const programs: Program[] = [
  {
    slug: "boot-camp-for-youths-and-family",
    title: "Boot Camp for Youths & Family",
    category: "Youth",
    summary:
      "Empowering the youth of our community to become strong leaders of tomorrow, with programs on Aqida, Sharia, and leadership.",
    image: "/programs/boot-camp.jpg",
    body: [
      "NICE strongly believes in empowering the youth of our community and helping them become strong leaders of tomorrow. Without the engagement and active participation of our youth, the spread of Islam will be challenging.",
      "We run programs on Aqida, Sharia, and leadership at NICE.",
    ],
  },
  {
    slug: "winter-break-program",
    title: "Winter Break Program",
    category: "Youth",
    summary:
      "A winter-break prayer challenge for Grade 5–12 PDSB students — attend any 3 daily prayers at least 5 days a week to receive a $100 gift card.",
    image: "/programs/winter-break.jpg",
    flyer: "/programs/winter-break-flyer.jpg",
    body: [
      "A special winter break event for elementary, middle, and high school students in the Peel District School Board (PDSB).",
    ],
    notice: "Only for Grade 5 to 12 PDSB students",
    sections: [
      {
        title: "How it works",
        items: [
          "Students who come for any 3 daily prayers at least 5 days a week for the whole winter break will receive a $100 gift card.",
          "The challenge runs from December 21st to January 3rd.",
          "Contact Imam Muhammad Noman by December 18th to register.",
        ],
      },
    ],
    links: [
      { label: "PDSB school calendar", href: "https://www.peelschools.org/calendar" },
    ],
    photos: {
      title: "Winter Break Program 2025",
      images: [
        "/programs/winter-2025-1.jpg",
        "/programs/winter-2025-2.jpg",
        "/programs/winter-2025-3.jpg",
        "/programs/winter-2025-4.jpg",
        "/programs/winter-2025-5.jpg",
        "/programs/winter-2025-6.jpg",
      ],
    },
  },
  {
    slug: "summer-break-program",
    title: "Summer Break Program",
    category: "Youth",
    summary:
      "A summer-long prayer challenge for Grade 5–12 PDSB students, with a bicycle, a basketball set, and a badminton set to be won.",
    image: "/programs/summer-break.jpg",
    flyer: "/programs/summer-break-flyer.jpg",
    body: [
      "A special summer break event encouraging students to stay connected to the masjid through daily prayer — all summer long and into the new school year.",
      "Contact Imam Muhammad Noman by June 26th to register.",
    ],
    notice: "Only for Grade 5 to 12 PDSB students",
    sections: [
      {
        title: "1st Prize — Bicycle",
        intro: "Eligibility",
        items: [
          "Each week, come for any 3 daily prayers, 5 days a week, for the whole summer break (July 1st to September 1st).",
          "Then continue to come for at least any 1 daily prayer, 2 days a week, for a month after the summer break (until October 1st).",
        ],
      },
      {
        title: "2nd Prize — Basketball Set",
        intro: "Eligibility",
        items: [
          "Each week, come for any 3 daily prayers, 4 days a week, for the whole summer break (July 1st to September 1st).",
          "Then continue to come for at least any 1 daily prayer, 2 days a week, for a month after the summer break (until October 1st).",
        ],
      },
      {
        title: "3rd Prize — Badminton Set",
        intro: "Eligibility",
        items: [
          "Each week, come for any 3 daily prayers, 3 days a week, for the whole summer break (July 1st to September 1st).",
          "Then continue to come for at least any 1 daily prayer, 2 days a week, for a month after the summer break (until October 1st).",
        ],
      },
    ],
  },
  {
    slug: "ramadan-program",
    title: "Ramadan Program",
    category: "Youth",
    summary:
      "Students who attend Tarawih prayer for the full month of Ramadan receive a $150 gift card.",
    image: "/programs/ramadan.jpg",
    flyer: "/programs/ramadan-flyer.jpg",
    body: [
      "A special Ramadan event for elementary, middle, and high school students.",
      "Students who come for Tarawih prayer for the full month of Ramadan will receive a $150 gift card.",
    ],
  },
  {
    slug: "umrah-hajj-package",
    title: "Umrah & Hajj Package",
    category: "Community",
    summary:
      "A Five Star Umrah Package offered by NICE in collaboration with Dar El Salam.",
    image: "/programs/umrah.jpg",
    flyer: "/programs/umrah-2026-flyer.jpg",
    body: [
      "NICE (North-Valley Islamic Centre) is collaborating with Dar El Salam to provide you with a Five Star Umrah Package.",
      "Contact Br. Syed Mahabubuzzman for more information.",
    ],
    contacts: [
      { label: "Umrah & Hajj enquiries", name: "Br. Syed Mahabubuzzman", phone: "416-568-2536" },
    ],
  },
  {
    slug: "5-daily-prayers",
    title: "5 Daily Prayers",
    category: "Community",
    summary:
      "All five daily prayers are held in congregation at the NICE facility, led by our Imam and volunteers.",
    image: "/programs/5-daily-prayers.jpg",
    body: [
      "We conduct the five daily prayers at the NICE facility, following proper safety protocols and provincial guidelines. Our knowledgeable Imam and volunteers do an exceptional job in helping spread the Deen.",
      "Please join our WhatsApp group for salah timings and any changes.",
    ],
  },
  {
    slug: "jumah-prayer",
    title: "Jumu'ah Prayer",
    category: "Community",
    summary:
      "Several Jumu'ah prayers each Friday, delivered by knowledgeable khatibs and Imams from across the GTA.",
    image: "/programs/jumah-prayer.jpg",
    body: [
      "We hold several Jumu'ah prayers at NICE, delivered by very knowledgeable khatibs and Imams from across the GTA.",
      "We follow all municipal and provincial guidelines and health and safety protocols.",
    ],
  },
  {
    slug: "funeral-program",
    title: "Funeral Program",
    category: "Community",
    summary:
      "A membership program that shares funeral costs among member families — covering up to $5,000 in funeral-related expenses in North America.",
    image: "/programs/funeral-program.jpg",
    flyer: "/programs/funeral-flyer.jpg",
    body: [
      "The NICE Funeral Program lessens the burden of funeral costs for its members by sharing them among all member families. Below is the full Policy & Procedure of the program.",
    ],
    notice:
      "Proof of Canadian citizenship or residency is required. This service is applicable to Canadian residents only.",
    sections: [
      {
        title: "Coverage",
        items: [
          "Actual costs of up to $5,000.00 CAD are provided for funeral-related costs only (burial expenses such as buying the grave, washing the body, casket, clothing, digging the grave, etc.) if the person passes away in North America (Canada & USA). Board members will review periodically whether the amount has to be adjusted.",
          "A death certificate and receipts for burial expenses must be provided. All expenses have to be funeral-related costs with official receipts.",
          "If the person passes away in South Asia, a maximum of 150,000.00 in local currency (or the equivalent in Canadian currency) or the actual cost — whichever is lower — will be disbursed to cover the funeral cost. The actual cost receipt has to be provided for the file.",
        ],
      },
      {
        title: "Membership & fees",
        items: [
          "One-time membership fee — Adult $75.00 (25 years and older), Children $25.00 (under 25 years / single / dependent), Siblings $25.00 (under 25 years / single / dependent / living at the same address).",
          "No monthly fee is collected from funeral members. All funeral members are encouraged to support NICE with a monthly donation — optional, but highly recommended to stay connected and support NICE's development.",
          "Each family (husband, wife, children, and siblings who meet the criteria above — not including parents or in-laws) is considered one member-family.",
          "Parents and parents-in-law require a separate form and are considered a separate member-family.",
          "Once a child or sibling no longer meets the criteria (under 25 years / single / dependent / living at the same address), they have 60 days to fill out a separate form as an adult, or they will not be eligible for any further funeral benefits.",
          "If any member fails to contribute to three consecutive funeral costs, their membership will automatically be terminated and they will no longer be eligible for this funeral benefit.",
        ],
      },
      {
        title: "Required documents",
        marker: "letter",
        items: [
          "Signed “Registration Form & Policy & Procedure”",
          "Initial membership fee",
          "Signed “Pre-Authorized Payment Form” with a VOID CHEQUE",
        ],
      },
      {
        title: "How funeral costs are shared",
        intro: "All fees and funeral pool payments are non-refundable.",
        marker: "letter",
        items: [
          "In case of a member's death, the NICE Funeral Program committee will withdraw funeral cost(s) from each member's account — not more than $30 per member-family per occurrence. If a member has three separate units, the maximum cost will be $90.00 per occurrence for that member-family.",
          "The amount for each occurrence will go down as our membership increases.",
          "For example: with 100 member-families and a funeral cost of $5,000, the cost is divided equally among all member-families except the deceased member's family — $50.50 each ($5,000 ÷ 99). Each member pays $30.00 and NICE pays the remaining $20.50. With 200 member-families, each member would pay $25.13 ($5,000 ÷ 199).",
          "Please help this program by inviting more members.",
          "You will be notified by e-mail that an incident has occurred and of the amount you are responsible for.",
          "The amount will be withdrawn from your bank account on the 15th of that month or the following month.",
          "Any additional balance remaining will be paid by NICE.",
        ],
      },
      {
        title: "Deaths outside Canada",
        intro: "In case of a Canadian resident's death outside Canada, the following amount will be paid:",
        marker: "letter",
        items: [
          "Anywhere in Southeast Asia: the actual cost with receipt, up to a maximum of 150,000 (one hundred fifty thousand) in local currency. A funeral-cost receipt has to be provided.",
          "Anywhere besides North America and Southeast Asia: an amount equivalent to the North American funeral cost, in the local currency of that country. For example, if a member passes away in Germany and the funeral cost in Canada is $5,000 CAD at that time, the equivalent of up to $5,000 CAD will be provided in German currency, or the actual cost — whichever is lower.",
        ],
      },
      {
        title: "Important notes",
        items: [
          "In the case of a death where the body is missing, no benefits will be provided, since this funeral program is NOT an insurance program. A key objective of the NICE Funeral Program is to lessen the burden of the FUNERAL COST ONLY for its members.",
          "Anyone can notify the Funeral Committee of a member's death (in detail) at (647) 573-6655. A committee member will start collecting the funeral-cost information and offer help to arrange all the formalities according to Islamic guidelines (Sunnah). The committee will let other members know the time and location of Salat-ul-Janazah, as well as the graveyard location, so that other community members can join the congregation.",
          "The North-Valley Islamic Centre (NICE) management board has full authority to change or modify any rule(s), and will decide fund disbursements case by case by a vote of the board members.",
        ],
      },
    ],
    contacts: [{ label: "Funeral Committee", phone: "(647) 573-6655" }],
    downloads: [
      {
        label: "Funeral Registration Form (PDF)",
        href: "/forms/nice-funeral-registration-form.pdf",
      },
    ],
  },
  {
    slug: "family-night-every-friday",
    title: "Family Night — Every Friday",
    category: "Community",
    summary:
      "A welcoming, safe evening at NICE every Friday for local and visiting Muslim families.",
    image: "/programs/family-night.jpg",
    body: [
      "As part of building our community, and to encourage the engagement of local and visiting Muslim families, we welcome families to the NICE facility every Friday in a safe environment.",
    ],
  },
  {
    slug: "sisters-halaqa",
    title: "Sisters Halaqa",
    category: "Community",
    summary:
      "Weekly gatherings for sisters to learn Qur'an and Hadith and deepen their understanding of the Deen.",
    image: "/programs/sisters-halaqa.jpg",
    body: [
      "Weekly Sisters Halaqa sessions are held at NICE to promote learning of the Qur'an and Hadith.",
      "Through the Halaqa sessions, sisters seek to gain a better understanding of our Deen and its practice in our daily lives.",
    ],
  },
  {
    slug: "interfaith-dialogue-activities",
    title: "Interfaith Dialogue & Activities",
    category: "Community",
    summary:
      "NICE takes part in community activities and dialogues — and has welcomed the Mayor, MPs, and MPPs to our events.",
    image: "/programs/interfaith.jpg",
    body: [
      "As a positive influencer and contributing member of our society, NICE participates in various activities and dialogues to provide an enriched experience for the residents of our community.",
      "Leaders of our community, such as the Mayor, MPs, and MPPs, have visited NICE and attended events acknowledging the contributions of NICE.",
    ],
  },
  {
    slug: "help-the-poor-locally-and-abroad",
    title: "Help the Poor — Locally & Abroad",
    category: "Outreach",
    summary:
      "Year-round programs supporting the needy locally and globally — from Ramadan baskets to Qurbani abroad and food bank drives.",
    image: "/programs/help-the-poor.jpg",
    body: [
      "Not only in Ramadan, but throughout the year, we launch many programs to help the needy locally and globally.",
    ],
    sections: [
      {
        title: "Our programs include",
        items: [
          "Ramadan Baskets",
          "Qurbani abroad to feed needy families",
          "Financial support for Muslim families worldwide",
          "Supporting local charities — inviting the Mayor to hand over donation cheques",
          "Collection and distribution for local families and food banks",
        ],
      },
    ],
  },
];
