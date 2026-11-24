import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import { site } from "@/lib/site";
import { asset } from "@/lib/asset";
import { IconArrowRight } from "@/components/icons";

export const metadata = {
  title: "Our Sponsors | NICE",
  description:
    "NICE is grateful to the local businesses and community members who sponsor our programs and services.",
};

export default function OurSponsorsPage() {
  return (
    <>
      <PageHero
        title="Our Sponsors"
        description="NICE is grateful to the generous businesses and community members who make our programs possible."
      />

      <Section>
        <SectionHeading
          eyebrow="With Gratitude"
          title="Thank you to our community partners"
          description="We are grateful to the businesses who support NICE. Interested in advertising with us? We'd love to hear from you."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <a
            data-reveal
            href="https://halalmeals.ca"
            target="_blank"
            rel="noreferrer"
            className="group overflow-hidden rounded-2xl border border-teal-900/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:col-span-2"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/sponsors/halalmeals.jpg")}
              alt="HalalMeals.ca — ready to eat iftars and dinners delivered. 20% off with promo code NICEMASJID"
              width={1400}
              height={788}
              className="h-auto w-full"
            />
            <div className="p-5">
              <p className="font-display text-lg font-bold text-teal-900">
                HalalMeals.ca
              </p>
              <p className="mt-1 text-sm text-ink-500">
                Ready-to-eat iftars &amp; dinners delivered &middot; 20% off
                with promo code{" "}
                <span className="font-semibold text-teal-800">NICEMASJID</span>
              </p>
            </div>
          </a>
          {Array.from({ length: 2 }).map((_, i) => (
            <a
              key={i}
              data-reveal
              href={`mailto:${site.email}?subject=${encodeURIComponent("Advertising with NICE")}`}
              className="flex min-h-48 flex-col items-center justify-center rounded-2xl border border-dashed border-teal-900/25 bg-cream-100 p-6 text-center transition hover:border-gold-500"
            >
              <span className="font-display text-lg font-bold text-teal-900">
                Your Advertisement Here
              </span>
              <span className="mt-1 text-sm text-ink-500">Contact us to advertise</span>
            </a>
          ))}
        </div>
      </Section>

      <Section className="bg-teal-900">
        <div className="text-center">
          <h2 data-reveal className="font-display text-2xl font-bold text-cream-50">
            Become a sponsor
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-cream-100/80">
            Partnering with NICE is a meaningful way for local businesses to
            invest in the community. Reach out to discuss sponsorship
            opportunities.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 font-semibold text-teal-950 hover:bg-gold-400"
          >
            Get in touch
            <IconArrowRight className="h-4 w-4" />
          </a>
        </div>
      </Section>
    </>
  );
}
