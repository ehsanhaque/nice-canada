import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import { ProgramCard } from "@/components/ProgramCard";
import { programs, Program } from "@/lib/site";

export const metadata = {
  title: "Programs & Services | NICE",
  description:
    "Explore NICE's youth programs, community services, and outreach initiatives serving Brampton and surrounding communities.",
};

const categories: { key: Program["category"]; description: string }[] = [
  {
    key: "Youth",
    description:
      "Programs that build discipline, brotherhood, and Islamic character in the next generation.",
  },
  {
    key: "Community",
    description:
      "The regular rhythms of worship and support that hold our community together.",
  },
  {
    key: "Outreach",
    description:
      "Extending help and compassion to families in need, locally and abroad.",
  },
];

export default function ProgramsServicesPage() {
  return (
    <>
      <PageHero
        title="Programs & Services"
        description="From daily congregational prayer to youth mentorship and community outreach, NICE offers programs for every member of the family."
      />

      {categories.map(({ key, description }) => {
        const items = programs.filter((p) => p.category === key);
        return (
          <Section key={key}>
            <SectionHeading eyebrow={key} title={`${key} Programs`} description={description} />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((program) => (
                <ProgramCard key={program.slug} program={program} />
              ))}
            </div>
          </Section>
        );
      })}
    </>
  );
}
