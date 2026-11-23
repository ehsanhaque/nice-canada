import Link from "next/link";
import { Container } from "@/components/Container";
import { Section, SectionHeading } from "@/components/Section";
import Image from "next/image";
import { HeroPrayerTimes } from "@/components/HeroPrayerTimes";
import { ScrollHighlight } from "@/components/ScrollHighlight";
import { asset } from "@/lib/asset";
import { ProgramCard } from "@/components/ProgramCard";
import { programs, objectives, site } from "@/lib/site";
import {
  IconArrowRight,
  IconBook,
  IconCalendar,
  IconHandHeart,
  IconHeart,
  IconPeople,
} from "@/components/icons";
import { PayPalDonateForm } from "@/components/DonateButton";

const pillars = [
  {
    title: "Learn Islam",
    subtitle: "Classes for every age",
    href: "/education/",
    Icon: IconBook,
  },
  {
    title: "Our Community",
    subtitle: "Programs for all ages",
    href: "/programs-services/",
    Icon: IconPeople,
  },
  {
    title: "Give & Support",
    subtitle: "Help us serve the community",
    href: "/donation/",
    Icon: IconHandHeart,
  },
  {
    title: "Events",
    subtitle: "Stay updated with upcoming events",
    href: "/events-calendar/",
    Icon: IconCalendar,
  },
];

export default function Home() {
  const featured = programs.slice(0, 6);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-teal-950">
        <div
          className="absolute inset-0 -z-20"
          data-parallax="0.35"
          data-parallax-zoom="0.12"
        >
          <Image
            src={asset("/hero/masjid-corridor.jpg")}
            alt=""
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-teal-950/60 lg:bg-teal-950/20" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-teal-950/95 via-teal-950/70 to-teal-950/10" />
        <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-teal-950/80 to-transparent" />

        <div data-scroll-fade>
          <Container className="grid gap-12 pt-36 pb-20 sm:pt-40 lg:min-h-[44rem] lg:grid-cols-[1fr_22rem] lg:items-center lg:gap-16 lg:pt-32 lg:pb-24">
            <div className="animate-fade-up">
              <p className="font-arabic text-3xl text-gold-400">
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </p>
              <h1 className="mt-5 max-w-2xl font-display text-4xl font-bold leading-tight text-cream-50 sm:text-5xl lg:text-6xl text-balance">
                A home for faith, family, and community in {site.city}
              </h1>
              <p className="mt-5 text-lg font-medium tracking-wide text-cream-100/90">
                Worship &middot; Learn &middot; Serve &middot; Belong
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
                  className="inline-flex items-center gap-2 rounded-full bg-cream-50 px-6 py-3 font-semibold text-teal-900 shadow-lg shadow-black/20 transition hover:bg-white"
                >
                  Join Our Community
                  <IconArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="animate-fade-up [animation-delay:120ms]">
              <HeroPrayerTimes />
            </div>
          </Container>
        </div>
      </section>

      <section className="border-b border-teal-900/10 bg-white">
        <Container className="grid grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ title, subtitle, href, Icon }, i) => (
            <Link
              key={title}
              href={href}
              data-reveal
              className={`group flex flex-col items-center px-4 py-10 text-center transition hover:bg-cream-50 sm:px-6 ${
                i % 2 === 1 ? "border-l border-teal-900/10" : ""
              } ${i === 2 ? "lg:border-l" : ""} ${i >= 2 ? "border-t border-teal-900/10 lg:border-t-0" : ""}`}
            >
              <Icon className="h-11 w-11 text-teal-800 transition group-hover:text-gold-600" />
              <h2 className="mt-4 font-display text-lg font-bold text-teal-900">
                {title}
              </h2>
              <p className="mt-1 text-sm text-ink-500">{subtitle}</p>
            </Link>
          ))}
        </Container>
      </section>

      <section className="bg-cream-50 py-28 sm:py-40">
        <Container>
          <p
            data-reveal
            className="text-sm font-semibold uppercase tracking-widest text-gold-600"
          >
            Our Purpose
          </p>
          <ScrollHighlight
            className="mt-6 max-w-5xl font-display text-3xl font-bold leading-[1.25] text-teal-900 sm:text-5xl sm:leading-[1.2]"
            text="We are building a centre of excellence in Brampton — a place where every family can pray, learn, grow, and serve together, and where no one in need is turned away."
          />
        </Container>
      </section>

      <Section className="pt-0 sm:pt-0">
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
          <div data-reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">
              Our Mission
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-cream-50 sm:text-4xl text-balance">
              Building a dynamic community, one family at a time
            </h2>
            <p className="mt-5 text-cream-100/80 text-balance">
              NICE seeks to establish a center of excellence supporting
              socio-cultural development for women, youth, and adults — creating
              an environment where every member can fulfill their divine and
              social needs.
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
                data-reveal
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
        <div
          data-reveal="scale"
          className="overflow-hidden rounded-3xl bg-gradient-to-br from-gold-500 to-gold-600 px-6 py-14 text-center sm:px-16"
        >
          <h2 className="font-display text-3xl font-bold text-teal-950 sm:text-4xl">
            Support the work of NICE
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-teal-950/80">
            Your donation helps sustain daily prayers, education programs, youth
            activities, and outreach for families in {site.city} and beyond.
            Every contribution makes a lasting difference.
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
