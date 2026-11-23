import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import { educationClasses, site } from "@/lib/site";
import { IconArrowRight } from "@/components/icons";

export const metadata = {
  title: "Education | NICE",
  description:
    "Islamic Studies, Evening Maktab, and weekend classes for children, youth, and adults at NICE.",
};

export default function EducationPage() {
  return (
    <>
      <PageHero
        eyebrow="التعليم"
        title="Education"
        description="Nurturing Qur'an, Arabic, and Islamic knowledge in our children and community members through structured, age-appropriate classes."
      />

      <Section>
        <SectionHeading
          eyebrow="Our Classes"
          title="Islamic education for every age"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {educationClasses.map((cls) => (
            <div
              key={cls.slug}
              data-reveal
              className="rounded-2xl border border-teal-900/10 bg-white p-7 shadow-sm"
            >
              <h3 className="font-display text-xl font-bold text-teal-900">
                {cls.title}
              </h3>
              <p className="mt-3 text-ink-500">{cls.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-teal-900">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 data-reveal className="font-display text-3xl font-bold text-cream-50 text-balance">
              Ready to enroll your child?
            </h2>
            <p className="mt-4 text-cream-100/80">
              Admission for our weekend Islamic Studies classes is open
              throughout the year. Reach out to us directly or join our
              WhatsApp community to receive registration details and class
              schedules.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 lg:justify-end">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 font-semibold text-teal-950 hover:bg-gold-400"
            >
              Email to enroll
              <IconArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/programs-services/"
              className="inline-flex items-center gap-2 rounded-full border border-cream-50/25 px-6 py-3 font-semibold text-cream-50 hover:bg-cream-50/10"
            >
              View all programs
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
