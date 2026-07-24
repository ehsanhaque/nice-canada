import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import { site } from "@/lib/site";
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
          description="Our sponsors help fund youth programs, education classes, and community outreach. Interested in becoming a sponsor? We'd love to hear from you."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="flex aspect-video items-center justify-center rounded-2xl border border-dashed border-teal-900/20 bg-cream-100 text-sm font-medium text-ink-500"
            >
              Sponsor Logo
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-teal-900">
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold text-cream-50">
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
