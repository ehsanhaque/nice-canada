export const site = {
  name: "NICE",
  fullName: "North-Valley Islamic Centre",
  tagline: "A home for faith, family, and community in Brampton",
  city: "Brampton",
  province: "Ontario",
  country: "Canada",
  email: "info@nice-canada.com",
  facebookUrl: "https://www.facebook.com/groups/174171940026994",
  youtubeUrl: "https://www.youtube.com/channel/UCkcusypv6MpwLE50a7KA4QA",
  whatsappUrl: "https://chat.whatsapp.com/Cc7ffQS3ukfClBxmqxxOeY",
  paypalHostedButtonId: "59NAY5NZS5BW8",
  padFormUrl:
    "https://www.nice-canada.com/wp-content/uploads/2022/01/NICE-PAD-Form-2020.docx",
  prayerCoordinates: {
    latitude: 43.7315,
    longitude: -79.7624,
    // ISNA calculation method — standard convention for North American mosques
    method: 2,
  },
};

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about/" },
  { label: "Education", href: "/education/" },
  { label: "Programs", href: "/programs-services/" },
  { label: "Prayer Times", href: "/daily-prayer-time/" },
  { label: "Events", href: "/events-calendar/" },
  { label: "Gallery", href: "/gallery/" },
  { label: "Sponsors", href: "/our-sponsors/" },
  { label: "Donate", href: "/donation/" },
];

export type Program = {
  slug: string;
  title: string;
  category: "Youth" | "Community" | "Outreach";
  summary: string;
};

export const programs: Program[] = [
  {
    slug: "boot-camp-for-youths-and-family",
    title: "Boot Camp for Youths & Family",
    category: "Youth",
    summary:
      "A structured program building discipline, brotherhood, and Islamic character in our youth alongside their families.",
  },
  {
    slug: "winter-break-program",
    title: "Winter Break Program",
    category: "Youth",
    summary:
      "Keeping youth engaged and connected to the masjid during the winter school break with activities and learning.",
  },
  {
    slug: "summer-break-program",
    title: "Summer Break Program",
    category: "Youth",
    summary:
      "A summer of Qur'an, sports, and community building designed to keep our children active and grounded in faith.",
  },
  {
    slug: "ramadan-program",
    title: "Ramadan Program",
    category: "Youth",
    summary:
      "Special taraweeh, iftars, and youth-focused Ramadan programming that brings the whole family together.",
  },
  {
    slug: "umrah-hajj-package",
    title: "Umrah & Hajj Package",
    category: "Community",
    summary:
      "Guidance and group packages to help members of our community fulfill the journey of Umrah and Hajj.",
  },
  {
    slug: "5-daily-prayers",
    title: "5 Daily Prayers",
    category: "Community",
    summary:
      "Congregational prayer five times a day, every day — the heartbeat of our masjid community.",
  },
  {
    slug: "jumah-prayer",
    title: "Jumu'ah Prayer",
    category: "Community",
    summary:
      "Weekly Friday congregational prayer and khutbah, open to the entire community.",
  },
  {
    slug: "funeral-program",
    title: "Funeral Program",
    category: "Community",
    summary:
      "Ghusl, funeral prayer, and burial support and guidance for families during times of loss.",
  },
  {
    slug: "family-night-every-friday",
    title: "Family Night — Every Friday",
    category: "Community",
    summary:
      "A weekly evening of food, fellowship, and reflection for families to connect after Jumu'ah.",
  },
  {
    slug: "sisters-halaqa",
    title: "Sisters Halaqa",
    category: "Community",
    summary:
      "A dedicated circle of learning and sisterhood for the women of our community.",
  },
  {
    slug: "interfaith-dialogue-activities",
    title: "Interfaith Dialogue & Activities",
    category: "Community",
    summary:
      "Building bridges and mutual understanding with our neighbours of all faiths across Brampton.",
  },
  {
    slug: "help-the-poor-locally-and-abroad",
    title: "Help the Poor — Locally & Abroad",
    category: "Outreach",
    summary:
      "Zakat, sadaqah, and relief efforts supporting families in need in our community and around the world.",
  },
];

export type EducationSection = {
  title: string;
  subtitle?: string;
  items: string[];
  ordered?: boolean;
};

export type EducationClass = {
  slug: string;
  title: string;
  description: string;
  image: string;
  // Short facts shown as chips on the card and detail page.
  facts: string[];
  intro?: string;
  sections: EducationSection[];
};

// Subjects shared by the Junior and Senior classes.
const sharedSubjects: EducationSection[] = [
  {
    title: "Hadith",
    subtitle: "Selections from the 40 Hadith of Imam Nawawi",
    items: [
      "One hadith per week, starting with “actions are based on intentions”.",
      "Explanation provided by Hafiz Umar — context, perspective, and application.",
      "Takes about 15 minutes at the beginning of each class.",
    ],
  },
  {
    title: "Juz' Amma",
    subtitle: "Meanings of the surahs of the 30th juz",
    items: [
      "Students learn correct recitation (tajweed and pronunciation) along with the meanings of each surah — the reason for revelation and practical steps towards application.",
      "New students begin with Surah Al-Fatiha and the last 10 surahs.",
      "Existing students continue memorizing their assigned surahs, and may study the life of Prophet Yusuf from the Qur'an in terms of meaning and tafseer.",
      "Students are split into junior and senior groups when enough registrations are received.",
      "This class runs for 45 minutes.",
    ],
  },
];

export const educationClasses: EducationClass[] = [
  {
    slug: "islamic-studies",
    title: "Islamic Studies",
    description:
      "Curriculum-based weekend classes teaching aqaid, akhlaq, fiqh, seerah, and daily du'as.",
    image: "/education/islamic-studies.jpg",
    facts: ["Weekend class", "Curriculum-based"],
    intro:
      "We are starting Islamic curriculum-based classes, and we thank you for giving us the opportunity to educate your children with the proper knowledge of aqaid, akhlaq, fiqh, seerah, and daily du'as. The successful operation and progress of any educational facility requires some ground rules and financial cooperation, so we have prepared the following guidelines and terms for our registered students and their guardians.",
    sections: [
      {
        title: "Guidelines for students & guardians",
        ordered: true,
        items: [
          "Students are required to be punctual according to the given timetable.",
          "In case of an absence, late arrival, or early leave, the student must present a note with a reachable phone number.",
          "Students should be dressed in keeping with the sanctity of a Muslim.",
          "For any concern with a student, the teacher will arrange a meeting with the parents, and parents should attend.",
          "Parents should contact the teacher at least once a month to stay informed of their child's progress.",
          "If parents have any concern regarding the appointed teacher, please contact NICE management so the issue can be resolved with due diligence.",
          "Tuition fees continue during student and teacher vacations.",
          "If for any reason you decide to withdraw your child from the class, please let the management know in advance.",
          "Your feedback regarding the quality of education is highly appreciated.",
        ],
      },
    ],
  },
  {
    slug: "evening-makhtab",
    title: "Evening Maktab",
    description:
      "Weekday evening classes in Qur'an reading with tajweed, memorization, hadith, and stories of the Prophets.",
    image: "/education/evening-maktab.jpg",
    facts: ["Mon–Wed, 7:00–9:00 PM", "Ages 6–15"],
    sections: [
      {
        title: "What students learn",
        items: [
          "Learning to read Arabic with proper tajweed and memorizing the Qur'an.",
          "Discussion of hadith with their context, perspective, and application.",
          "Stories of the Prophets and applying their lessons in our lives.",
        ],
      },
    ],
  },
  {
    slug: "junior-class",
    title: "Junior Class",
    description:
      "Hadith, Juz' Amma, and foundational Islamic studies for younger students building their understanding of the deen.",
    image: "/education/junior-class.jpg",
    facts: ["Grade 3 or age 8+"],
    sections: [
      ...sharedSubjects,
      {
        title: "Islamic Studies for Juniors",
        subtitle: "Building foundations in religious understanding",
        items: [
          "Open for registration for children up to 11 years old.",
          "This class runs for 45 minutes.",
        ],
      },
    ],
  },
  {
    slug: "senior-class",
    title: "Senior Class",
    description:
      "Hadith, Juz' Amma, and essential deen studies designed for Canadian teens.",
    image: "/education/senior-class.jpg",
    facts: ["Grade 6 or age 11+"],
    sections: [
      ...sharedSubjects,
      {
        title: "Islamic Studies for Seniors",
        subtitle: "Essential deen studies for Canadian teens",
        items: [
          "Course designed for students aged 12–17.",
          "Previously enrolled Junior students may be given the option of moving up to the senior level if they meet their teachers' expectations.",
          "This class runs for 45 minutes.",
        ],
      },
    ],
  },
];

export const objectives = [
  "Advance the teachings of the Islamic faith and associated religious practices.",
  "Establish and maintain a mosque with services aligned to Islamic doctrine.",
  "Support missionary efforts promoting the Islamic faith.",
  "Operate a religious school for children, youths, and adults.",
];
