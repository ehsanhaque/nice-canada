import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import { PayPalDonateForm } from "@/components/DonateButton";
import { FlyerGallery } from "@/components/FlyerGallery";
import {
  LightboxProvider,
  LightboxTrigger,
  type LightboxImage,
} from "@/components/Lightbox";
import type { Flyer } from "@/lib/flyers";
import { site } from "@/lib/site";
import { asset } from "@/lib/asset";
import { IconArrowRight } from "@/components/icons";

export const metadata = {
  title: "New Project | NICE",
  description:
    "The land for NICE's future home has been purchased — help us pay off the remaining $200,000 Qard-e-Hasana to build a masjid, an affordable Islamic school, a retirement home, and a halal outlet.",
};

// Status from NICE's "Future Home of NICE" and "Urgent Appeal" flyers
// (October 2025): the land is purchased; the Qard-e-Hasana still needs repaying.
const plans = [
  "Affordable Islamic School",
  "Masjid",
  "Retirement Home",
  "Halal Outlet",
];
const landAddress = "104 McLaughlin Road S, Brampton, ON";
const siteFlyer = "/media/flyers/2025-10-wa-2025-10-04-at-6-56-11-pm.jpg";
const siteFlyerAlt =
  "Future home of NICE — aerial view of the 1-acre site at 104 McLaughlin Road S, Brampton";

// Photos from the old site's New Project page (2021 and 2024).
const projectPhotos: Flyer[] = [
  {
    src: "/new-project/photo-01.jpg",
    thumb: "/new-project/thumb-photo-01.jpg",
    width: 1024,
    height: 768,
  },
  {
    src: "/new-project/photo-02.jpg",
    thumb: "/new-project/thumb-photo-02.jpg",
    width: 1600,
    height: 1200,
  },
  {
    src: "/new-project/photo-03.jpg",
    thumb: "/new-project/thumb-photo-03.jpg",
    width: 1600,
    height: 1200,
  },
  {
    src: "/new-project/photo-04.jpg",
    thumb: "/new-project/thumb-photo-04.jpg",
    width: 540,
    height: 960,
  },
  {
    src: "/new-project/photo-05.jpg",
    thumb: "/new-project/thumb-photo-05.jpg",
    width: 540,
    height: 960,
  },
  {
    src: "/new-project/photo-06.jpg",
    thumb: "/new-project/thumb-photo-06.jpg",
    width: 960,
    height: 960,
  },
  {
    src: "/new-project/photo-07.jpg",
    thumb: "/new-project/thumb-photo-07.jpg",
    width: 720,
    height: 960,
  },
  {
    src: "/new-project/photo-08.jpg",
    thumb: "/new-project/thumb-photo-08.jpg",
    width: 540,
    height: 960,
  },
  {
    src: "/new-project/photo-09.jpg",
    thumb: "/new-project/thumb-photo-09.jpg",
    width: 960,
    height: 720,
  },
  {
    src: "/new-project/photo-10.jpg",
    thumb: "/new-project/thumb-photo-10.jpg",
    width: 540,
    height: 960,
  },
  {
    src: "/new-project/photo-11.jpg",
    thumb: "/new-project/thumb-photo-11.jpg",
    width: 720,
    height: 960,
  },
  {
    src: "/new-project/photo-12.jpg",
    thumb: "/new-project/thumb-photo-12.jpg",
    width: 540,
    height: 960,
  },
  {
    src: "/new-project/photo-13.jpg",
    thumb: "/new-project/thumb-photo-13.jpg",
    width: 960,
    height: 960,
  },
];

export default function NewProjectPage() {
  // The site flyer and the project photos share one viewer.
  const gallery: LightboxImage[] = [
    { src: siteFlyer, alt: siteFlyerAlt },
    ...projectPhotos.map((p, i) => ({
      src: p.src,
      alt: `New Project photo ${i + 1}`,
    })),
  ];

  return (
    <LightboxProvider images={gallery} label="New Project">
      <PageHero
        eyebrow="مشروعنا الجديد"
        title="Our New Project"
        description="Please donate generously to build an Islamic Centre at the heart of Brampton."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Support to build the House of Allah"
              title="Future home of NICE, in sha Allah"
            />
            <ul data-reveal className="mt-8 grid grid-cols-2 gap-3">
              {plans.map((plan, i) => (
                <li
                  key={plan}
                  className="rounded-2xl border border-teal-900/10 bg-white p-5"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-teal-900 font-display font-bold text-cream-50">
                    {i + 1}
                  </span>
                  <p className="mt-3 font-display text-lg font-bold text-teal-900">
                    {plan}
                  </p>
                </li>
              ))}
            </ul>

            <blockquote
              data-reveal
              className="mt-8 rounded-2xl border-l-4 border-gold-500 bg-cream-100 px-6 py-5"
            >
              <p className="text-sm font-semibold text-ink-500">
                Our Prophet (PBUH) said,
              </p>
              <p className="mt-1 font-display text-xl italic text-teal-900">
                &ldquo;Whoever builds a Masjid for the sake of Allah, Allah will
                build for him a house in Paradise.&rdquo;
              </p>
            </blockquote>

            <div
              data-reveal
              className="mt-8 rounded-2xl bg-teal-900 p-7 text-cream-50"
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">
                Urgent appeal
              </p>
              <p className="mt-2 text-cream-100/90">
                Alhamdulillah, the land has been purchased.
              </p>
              <p className="mt-1 font-display text-3xl font-bold sm:text-4xl">
                We still need $200,000 to pay off Qard-e-Hasana
              </p>
              <p className="mt-3 text-cream-100/80">
                {`${landAddress} · Land size: 1 acre`}
              </p>
            </div>
          </div>

          <LightboxTrigger
            data-reveal
            index={0}
            label="View the Future Home of NICE flyer"
            className="group block w-full overflow-hidden rounded-2xl border border-teal-900/10 bg-white p-2 shadow-sm lg:sticky lg:top-28"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset(siteFlyer)}
              alt={siteFlyerAlt}
              width={1280}
              height={720}
              className="h-auto w-full rounded-xl"
            />
            <span className="flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-teal-800 group-hover:text-gold-700">
              View full flyer
              <IconArrowRight className="h-3.5 w-3.5" />
            </span>
          </LightboxTrigger>
        </div>
      </Section>

      <Section className="bg-teal-900">
        <div className="text-center">
          <h2
            data-reveal
            className="font-display text-3xl font-bold text-cream-50 text-balance"
          >
            Please donate generously
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream-100/80">
            Send an Interac e-Transfer to{" "}
            <a
              href={`mailto:${site.email}`}
              className="font-semibold text-gold-300 hover:text-gold-400"
            >
              {site.email}
            </a>
            , donate online with PayPal, or see all the ways to give.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <PayPalDonateForm />
            <Link
              href="/donation/"
              className="inline-flex items-center gap-2 rounded-full border border-cream-50/25 px-6 py-3 font-semibold text-cream-50 hover:bg-cream-50/10"
            >
              Other ways to give
            </Link>
          </div>
          <p className="mt-6 text-sm text-cream-100/60">
            Donation tax receipts are available on request &middot; Charitable
            Registration # {site.charityRegistration}
          </p>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Progress"
          title="Project photos"
          description="Photos from the project site and our volunteers at work."
        />
        <div className="mt-8">
          <FlyerGallery
            flyers={projectPhotos}
            label="New Project"
            noun="photo"
            offset={1}
          />
        </div>
      </Section>
    </LightboxProvider>
  );
}
