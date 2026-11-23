import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { educationClasses, site } from "@/lib/site";
import { asset } from "@/lib/asset";
import { IconArrowRight, IconMail, IconWhatsapp } from "@/components/icons";

export function generateStaticParams() {
  return educationClasses.map((cls) => ({ slug: cls.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cls = educationClasses.find((c) => c.slug === slug);
  return {
    title: cls ? `${cls.title} | Education | NICE` : "Education | NICE",
    description: cls?.description,
  };
}

export default async function EducationClassPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cls = educationClasses.find((c) => c.slug === slug);
  if (!cls) notFound();

  const others = educationClasses.filter((c) => c.slug !== cls.slug);
  const enrollHref = `mailto:${site.email}?subject=${encodeURIComponent(
    `Enrollment: ${cls.title}`
  )}`;

  return (
    <>
      <PageHero eyebrow="التعليم" title={cls.title} description={cls.description} />

      <Section>
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div
              data-reveal
              className="relative aspect-[16/7] overflow-hidden rounded-2xl bg-teal-900/5"
            >
              <Image
                src={asset(cls.image)}
                alt={`${cls.title} at NICE`}
                fill
                unoptimized
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="object-cover"
              />
            </div>

            {cls.intro ? (
              <p data-reveal className="mt-8 text-lg leading-relaxed text-ink-700">
                {cls.intro}
              </p>
            ) : null}

            <div className="mt-10 space-y-10">
              {cls.sections.map((section) => (
                <section key={section.title} data-reveal>
                  <h2 className="font-display text-2xl font-bold text-teal-900">
                    {section.title}
                  </h2>
                  {section.subtitle ? (
                    <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-gold-600">
                      {section.subtitle}
                    </p>
                  ) : null}
                  <ul className="mt-5 space-y-3">
                    {section.items.map((item, i) => (
                      <li
                        key={item}
                        className="flex items-start gap-4 rounded-xl border border-teal-900/10 bg-white px-5 py-4 text-ink-700"
                      >
                        {section.ordered ? (
                          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-teal-800 text-sm font-semibold text-cream-50">
                            {i + 1}
                          </span>
                        ) : (
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold-500" />
                        )}
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:h-fit">
            <div
              data-reveal
              className="rounded-2xl border border-teal-900/10 bg-cream-100 p-6"
            >
              <h3 className="font-display text-lg font-bold text-teal-900">
                Class at a glance
              </h3>
              <ul className="mt-4 space-y-2">
                {cls.facts.map((fact) => (
                  <li key={fact} className="flex items-center gap-2.5 text-sm text-ink-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                    {fact}
                  </li>
                ))}
              </ul>
              <a
                href={enrollHref}
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-gold-500 px-5 py-3 text-sm font-semibold text-teal-950 hover:bg-gold-400"
              >
                <IconMail className="h-4 w-4" />
                Email to enroll
              </a>
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 flex items-center justify-center gap-2 rounded-full border border-teal-900/20 px-5 py-3 text-sm font-semibold text-teal-800 hover:bg-teal-900/5"
              >
                <IconWhatsapp className="h-4 w-4" />
                Ask on WhatsApp
              </a>
            </div>

            <div
              data-reveal
              className="rounded-2xl border border-teal-900/10 bg-cream-100 p-6"
            >
              <h3 className="font-display text-lg font-bold text-teal-900">
                Other classes
              </h3>
              <ul className="mt-4 space-y-3">
                {others.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/education/${c.slug}/`}
                      className="group flex items-center justify-between gap-2 text-sm font-medium text-ink-700 hover:text-teal-800"
                    >
                      {c.title}
                      <IconArrowRight className="h-4 w-4 text-gold-600 transition group-hover:translate-x-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/education/"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-800 hover:text-teal-900"
              >
                All classes
                <IconArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
