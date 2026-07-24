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

export type EducationClass = {
  slug: string;
  title: string;
  description: string;
};

export const educationClasses: EducationClass[] = [
  {
    slug: "islamic-studies",
    title: "Islamic Studies",
    description:
      "Core weekend classes covering Qur'an recitation, Islamic history, fiqh, and Aqeedah for students of all ages.",
  },
  {
    slug: "evening-makhtab",
    title: "Evening Maktab",
    description:
      "Weekday evening Qur'an memorization and Arabic reading classes for children, taught in a supportive setting.",
  },
  {
    slug: "junior-class",
    title: "Junior Class",
    description:
      "Foundational Islamic education for younger students — Qur'an basics, du'as, and Islamic manners.",
  },
  {
    slug: "senior-class",
    title: "Senior Class",
    description:
      "Advanced study for older students, deepening knowledge of Qur'an, seerah, and Islamic jurisprudence.",
  },
];

export const objectives = [
  "Advance the teachings of the Islamic faith and associated religious practices.",
  "Establish and maintain a mosque with services aligned to Islamic doctrine.",
  "Support missionary efforts promoting the Islamic faith.",
  "Operate a religious school for children, youths, and adults.",
];
