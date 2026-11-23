import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import { site } from "@/lib/site";
import { IconArrowRight } from "@/components/icons";

export const metadata = {
  title: "Events Calendar | NICE",
  description:
    "Weekly recurring programs and upcoming events at North-Valley Islamic Centre.",
};

const weeklySchedule = [
  { day: "Every day", event: "5 Daily Congregational Prayers" },
  { day: "Friday", event: "Jumu'ah Prayer & Khutbah" },
  { day: "Friday evening", event: "Family Night" },
  { day: "Weekly", event: "Sisters Halaqa" },
  { day: "Weekend", event: "Islamic Studies Classes" },
  { day: "Weekday evenings", event: "Evening Maktab" },
];

export default function EventsCalendarPage() {
  return (
    <>
      <PageHero
        title="Events Calendar"
        description="Join us for our regular weekly programs, seasonal activities, and community events throughout the year."
      />

      <Section>
        <SectionHeading eyebrow="Weekly Rhythm" title="What's happening at NICE" />
        <div className="mt-10 overflow-hidden rounded-2xl border border-teal-900/10">
          {weeklySchedule.map((row, i) => (
            <div
              key={row.event}
              data-reveal
              className={`flex flex-col justify-between gap-1 px-6 py-4 sm:flex-row sm:items-center ${
                i % 2 === 0 ? "bg-white" : "bg-cream-100"
              }`}
            >
              <span className="font-semibold text-teal-900">{row.event}</span>
              <span className="text-sm text-ink-500">{row.day}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-teal-900">
        <div className="text-center">
          <h2 data-reveal className="font-display text-3xl font-bold text-cream-50 text-balance">
            Seasonal programs & special events
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-cream-100/80">
            Ramadan programming, Eid celebrations, Boot Camp for Youths &
            Family, Winter and Summer Break Programs, and more are announced
            throughout the year. The best way to stay up to date is through
            our WhatsApp community and Facebook group.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 font-semibold text-teal-950 hover:bg-gold-400"
            >
              Join WhatsApp Updates
              <IconArrowRight className="h-4 w-4" />
            </a>
            <a
              href={site.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cream-50/25 px-6 py-3 font-semibold text-cream-50 hover:bg-cream-50/10"
            >
              Follow on Facebook
            </a>
          </div>
        </div>
      </Section>

      <Section>
        <div className="rounded-2xl border border-teal-900/10 bg-cream-100 p-8 text-center">
          <h3 className="font-display text-xl font-bold text-teal-900">
            Looking for prayer timings?
          </h3>
          <p className="mt-2 text-ink-500">
            Visit our live prayer times page for today&apos;s schedule and the
            full monthly calendar.
          </p>
          <Link
            href="/daily-prayer-time/"
            className="mt-5 inline-flex items-center gap-2 font-semibold text-teal-800 hover:text-teal-900"
          >
            View Daily Prayer Times
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
