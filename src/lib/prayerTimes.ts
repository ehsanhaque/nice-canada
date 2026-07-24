import { site } from "./site";

export type Timings = {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Sunset: string;
  Maghrib: string;
  Isha: string;
};

export type DayTimings = {
  timings: Timings;
  readableDate: string;
  hijri: {
    day: string;
    month: string;
    year: string;
  };
  weekday: string;
};

const ALADHAN_BASE = "https://api.aladhan.com/v1";

// Strips the timezone abbreviation the API appends, e.g. "05:41 (EDT)" -> "05:41"
function cleanTime(value: string): string {
  return value.split(" ")[0];
}

export const PRAYER_LABELS: { key: keyof Timings; label: string }[] = [
  { key: "Fajr", label: "Fajr" },
  { key: "Sunrise", label: "Sunrise" },
  { key: "Dhuhr", label: "Dhuhr" },
  { key: "Asr", label: "Asr" },
  { key: "Maghrib", label: "Maghrib" },
  { key: "Isha", label: "Isha" },
];

export async function fetchTodayTimings(): Promise<DayTimings> {
  const { latitude, longitude, method } = site.prayerCoordinates;
  const res = await fetch(
    `${ALADHAN_BASE}/timings?latitude=${latitude}&longitude=${longitude}&method=${method}`
  );
  if (!res.ok) throw new Error("Failed to fetch prayer times");
  const json = await res.json();
  const t = json.data.timings;
  return {
    timings: {
      Fajr: cleanTime(t.Fajr),
      Sunrise: cleanTime(t.Sunrise),
      Dhuhr: cleanTime(t.Dhuhr),
      Asr: cleanTime(t.Asr),
      Sunset: cleanTime(t.Sunset),
      Maghrib: cleanTime(t.Maghrib),
      Isha: cleanTime(t.Isha),
    },
    readableDate: json.data.date.readable,
    hijri: {
      day: json.data.date.hijri.day,
      month: json.data.date.hijri.month.en,
      year: json.data.date.hijri.year,
    },
    weekday: json.data.date.gregorian.weekday.en,
  };
}

export async function fetchMonthCalendar(
  year: number,
  month: number
): Promise<DayTimings[]> {
  const { latitude, longitude, method } = site.prayerCoordinates;
  const res = await fetch(
    `${ALADHAN_BASE}/calendar/${year}/${month}?latitude=${latitude}&longitude=${longitude}&method=${method}`
  );
  if (!res.ok) throw new Error("Failed to fetch prayer calendar");
  const json = await res.json();
  return json.data.map((day: {
    timings: Record<string, string>;
    date: {
      readable: string;
      gregorian: { weekday: { en: string } };
      hijri: { day: string; month: { en: string }; year: string };
    };
  }) => ({
    timings: {
      Fajr: cleanTime(day.timings.Fajr),
      Sunrise: cleanTime(day.timings.Sunrise),
      Dhuhr: cleanTime(day.timings.Dhuhr),
      Asr: cleanTime(day.timings.Asr),
      Sunset: cleanTime(day.timings.Sunset),
      Maghrib: cleanTime(day.timings.Maghrib),
      Isha: cleanTime(day.timings.Isha),
    },
    readableDate: day.date.readable,
    hijri: {
      day: day.date.hijri.day,
      month: day.date.hijri.month.en,
      year: day.date.hijri.year,
    },
    weekday: day.date.gregorian.weekday.en,
  }));
}

function parseTimeToday(time: string): Date {
  const [h, m] = time.split(":").map(Number);
  const d = new Date();
  d.setHours(h, m, 0, 0);
  return d;
}

export function getNextPrayer(
  timings: Timings
): { name: string; time: string; date: Date } | null {
  const order: { key: keyof Timings; label: string }[] = [
    { key: "Fajr", label: "Fajr" },
    { key: "Dhuhr", label: "Dhuhr" },
    { key: "Asr", label: "Asr" },
    { key: "Maghrib", label: "Maghrib" },
    { key: "Isha", label: "Isha" },
  ];
  const now = new Date();
  for (const { key, label } of order) {
    const t = parseTimeToday(timings[key]);
    if (t > now) return { name: label, time: timings[key], date: t };
  }
  return null;
}
