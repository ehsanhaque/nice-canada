import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import { PayPalDonateForm } from "@/components/DonateButton";
import { site } from "@/lib/site";

export const metadata = {
  title: "New Project | NICE",
  description:
    "Help NICE build a permanent home for worship, education, and community services in Brampton.",
};

const milestones = [
  {
    title: "Acquire land & secure permits",
    description:
      "Identify and secure a permanent site suitable for a purpose-built masjid and community centre.",
  },
  {
    title: "Design & build the masjid",
    description:
      "Construct a dedicated prayer hall, classrooms, and community hall to serve growing attendance.",
  },
  {
    title: "Launch full-time programming",
    description:
      "Expand education, youth, and social services with a permanent facility to call home.",
  },
];

export default function NewProjectPage() {
  return (
    <>
      <PageHero
        eyebrow="مشروعنا الجديد"
        title="Our New Project"
        description={`NICE is working toward a permanent home for worship, education, and community life in ${site.city} — and we need your support to get there.`}
      />

      <Section>
        <SectionHeading
          eyebrow="The Vision"
          title="Building a lasting home for our community"
          description="As our congregation grows, so does our need for a dedicated, permanent facility. This new project will provide a purpose-built masjid, classrooms, and community spaces to serve generations to come."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {milestones.map((m, i) => (
            <div
              key={m.title}
              data-reveal
              className="rounded-2xl border border-teal-900/10 bg-white p-6"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-teal-900 font-display font-bold text-cream-50">
                {i + 1}
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-teal-900">
                {m.title}
              </h3>
              <p className="mt-2 text-sm text-ink-500">{m.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-teal-900">
        <div className="text-center">
          <h2 data-reveal className="font-display text-3xl font-bold text-cream-50 text-balance">
            Every contribution brings us closer
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream-100/80">
            Whether it&apos;s Sadaqah Jariyah or a one-time gift, your donation
            to the New Project fund directly supports building a permanent
            home for our community.
          </p>
          <div className="mt-8 flex justify-center">
            <PayPalDonateForm />
          </div>
        </div>
      </Section>
    </>
  );
}
