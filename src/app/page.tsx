import Link from "next/link";
import { Container } from "@/components/Container";
import { Section, SectionHeading } from "@/components/Section";
import { PrayerTimesWidget } from "@/components/PrayerTimesWidget";
import { ProgramCard } from "@/components/ProgramCard";
import { programs, objectives, site } from "@/lib/site";
import { IconArrowRight, IconHeart } from "@/components/icons";
import { PayPalDonateForm } from "@/components/DonateButton";

export default function Home() {
  const featured = programs.slice(0, 6);

  return (
    <>
      <section className="relative overflow-hidden bg-teal-950">
        <div className="bg-arch-pattern absolute inset-0 opacity-[0.12]" />
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-teal-600/20 blur-3xl" />
        <Container className="relative grid gap-12 py-20 sm:py-28 lg:grid-cols-2 lg:items-center">
          <div className="animate-fade-up">
            <p className="font-arabic text-3xl text-gold-400">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-cream-50 sm:text-5xl text-balance">
              A home for faith, family, and community in {site.city}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-cream-100/80 text-balance">
              {site.fullName} (NICE) is a not-for-profit charitable
              organization dedicated to serving the spiritual, educational,
              and social needs of our community.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/donation/"
                className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 font-semibold text-teal-950 shadow-lg shadow-gold-500/20 transition hover:bg-gold-400"
              >
                <IconHeart className="h-4 w-4" />
                Donate Now
              </Link>
              <Link
                href="/about/"
                className="inline-flex items-center gap-2 rounded-full border border-cream-50/25 px-6 py-3 font-semibold text-cream-50 transition hover:bg-cream-50/10"
              >
                Learn About NICE
                <IconArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="animate-fade-up [animation-delay:120ms]">
            <PrayerTimesWidget />
          </div>
        </Container>
      </section>

      <Section>
        <SectionHeading
          eyebrow="Programs & Services"
          title="Rooted in faith, built for community"
          description="From daily congregational prayer to youth programs and outreach, NICE offers a full spectrum of services for every stage of life."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((program) => (
            <ProgramCard key={program.slug} program={program} />
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/programs-services/"
            className="inline-flex items-center gap-2 font-semibold text-teal-800 hover:text-teal-900"
          >
            View all programs & services
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <Section className="bg-teal-900">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">
              Our Mission
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-cream-50 sm:text-4xl text-balance">
              Building a dynamic community, one family at a time
            </h2>
            <p className="mt-5 text-cream-100/80 text-balance">
              NICE seeks to establish a center of excellence supporting
              socio-cultural development for women, youth, and adults —
              creating an environment where every member can fulfill their
              divine and social needs.
            </p>
            <Link
              href="/about/"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-gold-400 hover:text-gold-300"
            >
              Read our full mission
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ul className="grid gap-4">
            {objectives.map((objective) => (
              <li
                key={objective}
                className="flex items-start gap-3 rounded-2xl bg-cream-50/5 p-5 text-cream-100/90"
              >
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
                <span>{objective}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-gold-500 to-gold-600 px-6 py-14 text-center sm:px-16">
          <h2 className="font-display text-3xl font-bold text-teal-950 sm:text-4xl">
            Support the work of NICE
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-teal-950/80">
            Your donation helps sustain daily prayers, education programs,
            youth activities, and outreach for families in {site.city} and
            beyond. Every contribution makes a lasting difference.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <PayPalDonateForm className="[&_button]:bg-teal-950 [&_button]:text-cream-50 [&_button]:hover:bg-teal-900" />
            <Link
              href="/donation/"
              className="inline-flex items-center gap-2 rounded-full border border-teal-950/30 px-6 py-3 font-semibold text-teal-950 hover:bg-teal-950/5"
            >
              Other ways to give
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
