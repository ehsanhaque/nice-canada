import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { PrayerTimesWidget } from "@/components/PrayerTimesWidget";
import { PrayerTimesMonthTable } from "@/components/PrayerTimesMonthTable";
import { site } from "@/lib/site";

export const metadata = {
  title: "Daily Prayer Times | NICE",
  description: `Live daily prayer times for ${site.city}, ${site.province}, calculated using the ISNA method.`,
};

export default function DailyPrayerTimePage() {
  return (
    <>
      <PageHero
        eyebrow="أوقات الصلاة"
        title="Daily Prayer Times"
        description={`Live prayer times for ${site.city}, ${site.province}, calculated using the ISNA (Islamic Society of North America) method — the standard convention followed by most North American masjids.`}
      />
      <Section>
        <PrayerTimesWidget />
      </Section>
      <Section className="pt-0">
        <h2 data-reveal className="mb-6 font-display text-2xl font-bold text-teal-900">
          Monthly Calendar
        </h2>
        <PrayerTimesMonthTable />
        <p className="mt-4 text-xs text-ink-500">
          Prayer times are sourced live from the Al-Adhan prayer times API
          based on {site.city} coordinates and may vary slightly by a minute
          or two depending on local mosque adjustments. Iqamah (congregation)
          times may follow the Adhan by 10–20 minutes — please confirm with
          the masjid for exact congregation timing.
        </p>
      </Section>
    </>
  );
}
