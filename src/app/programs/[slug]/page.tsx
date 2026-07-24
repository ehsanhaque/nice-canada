import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { programs } from "@/lib/site";
import { IconArrowRight } from "@/components/icons";

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  return {
    title: program ? `${program.title} | NICE` : "Program | NICE",
    description: program?.summary,
  };
}

export default async function ProgramPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) notFound();

  const related = programs
    .filter((p) => p.category === program.category && p.slug !== program.slug)
    .slice(0, 3);

  return (
    <>
      <PageHero eyebrow={program.category} title={program.title} description={program.summary} />
      <Section>
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="prose prose-teal max-w-none text-ink-700">
              <p>
                {program.summary} This program is part of NICE&apos;s broader{" "}
                {program.category.toLowerCase()} initiatives, reflecting our
                mission to build a dynamic community where families can fulfill
                their divine and social needs.
              </p>
              <p>
                For dates, timings, and how to get involved, reach out to us
                directly or join our WhatsApp community group — announcements
                for this program are shared there first.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/donation/"
                className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-teal-950 hover:bg-gold-400"
              >
                Support this program
              </Link>
              <Link
                href="/programs-services/"
                className="inline-flex items-center gap-2 rounded-full border border-teal-900/20 px-6 py-3 text-sm font-semibold text-teal-800 hover:bg-teal-900/5"
              >
                View all programs
              </Link>
            </div>
          </div>

          <aside className="rounded-2xl border border-teal-900/10 bg-cream-100 p-6">
            <h3 className="font-display text-lg font-bold text-teal-900">
              Related programs
            </h3>
            <ul className="mt-4 space-y-3">
              {related.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/programs/${p.slug}/`}
                    className="group flex items-center justify-between gap-2 text-sm font-medium text-ink-700 hover:text-teal-800"
                  >
                    {p.title}
                    <IconArrowRight className="h-4 w-4 text-gold-600 transition group-hover:translate-x-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>
    </>
  );
}
