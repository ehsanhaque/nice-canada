import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import { objectives, site } from "@/lib/site";
import { IconArrowRight } from "@/components/icons";

export const metadata = {
  title: "About Us | NICE",
  description:
    "Learn about North-Valley Islamic Centre (NICE), a not-for-profit charitable organization serving Brampton, Ontario.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="من نحن"
        title="About North-Valley Islamic Centre"
        description="A not-for-profit charitable organization incorporated in the province of Ontario, dedicated to serving the Muslim community of Brampton and beyond."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeading
              eyebrow="Our Mission"
              title="A center of excellence for our community"
            />
            <div className="prose prose-teal mt-6 max-w-none space-y-4 text-ink-700">
              <p>
                {site.fullName} (NICE) is a not-for-profit charitable
                organization which has been incorporated in the province of
                Ontario. We seek to establish a center of excellence that
                supports the socio-cultural development of women, youth, and
                adults in our community.
              </p>
              <p>
                Our goal is to develop a dynamic community where families are
                able to fulfill all of their divine and social needs — from
                daily worship and Islamic education to youth mentorship,
                family support, and outreach to those in need.
              </p>
              <p>
                {site.name} follows the school of thought of{" "}
                <strong>Ahlus Sunnah Wal-Jama&apos;ah</strong>, and follows
                the Hilal Council of Canada for moon-sighting methodology in
                determining Islamic dates.
              </p>
            </div>
          </div>

          <aside data-reveal className="rounded-2xl border border-teal-900/10 bg-cream-100 p-6 h-fit">
            <h3 className="font-display text-lg font-bold text-teal-900">
              At a glance
            </h3>
            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="font-semibold text-ink-500">Status</dt>
                <dd className="text-ink-700">
                  Registered not-for-profit charitable organization
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink-500">
                  Theological affiliation
                </dt>
                <dd className="text-ink-700">Ahlus Sunnah Wal-Jama&apos;ah</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink-500">
                  Moon sighting authority
                </dt>
                <dd className="text-ink-700">Hilal Council of Canada</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink-500">Serving</dt>
                <dd className="text-ink-700">
                  {site.city} and surrounding communities, {site.province}
                </dd>
              </div>
            </dl>
            <Link
              href="/donation/"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-teal-950 hover:bg-gold-400"
            >
              Support our mission
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </Section>

      <Section className="bg-teal-900">
        <SectionHeading
          eyebrow="Our Objectives"
          title="What we're working to build"
          align="center"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {objectives.map((objective, i) => (
            <div
              key={objective}
              data-reveal
              className="flex items-start gap-4 rounded-2xl bg-cream-50/5 p-6"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold-500 font-display font-bold text-teal-950">
                {i + 1}
              </span>
              <p className="text-cream-100/90">{objective}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Looking Ahead"
          title="Services we're building toward"
          description="As our community grows, NICE is working to expand into a full-service centre offering:"
        />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "A dedicated mosque and prayer facility",
            "Full-time Islamic school",
            "Community library",
            "Adult education & employment training",
            "Fitness facilities",
            "Elderly support services",
          ].map((item) => (
            <li
              key={item}
              data-reveal
              className="rounded-xl border border-teal-900/10 bg-white px-5 py-4 text-sm font-medium text-ink-700"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
