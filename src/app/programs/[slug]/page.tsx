import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { programs, site, type ProgramSection } from "@/lib/site";
import { asset } from "@/lib/asset";
import {
  LightboxProvider,
  LightboxTrigger,
  type LightboxImage,
} from "@/components/Lightbox";
import { IconArrowRight, IconWhatsapp } from "@/components/icons";

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

function SectionList({ section }: { section: ProgramSection }) {
  return (
    <section data-reveal>
      <h2 className="font-display text-2xl font-bold text-teal-900">
        {section.title}
      </h2>
      {section.intro ? (
        <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-gold-600">
          {section.intro}
        </p>
      ) : null}
      <ul className="mt-5 space-y-3">
        {section.items.map((item, i) => (
          <li
            key={item}
            className="flex items-start gap-4 rounded-xl border border-teal-900/10 bg-white px-5 py-4 text-ink-700"
          >
            {section.marker ? (
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-teal-800 text-sm font-semibold text-cream-50">
                {section.marker === "letter"
                  ? String.fromCharCode(97 + i)
                  : i + 1}
              </span>
            ) : (
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold-500" />
            )}
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
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
    .slice(0, 4);

  // The flyer and photos share one viewer, so the visitor can move between
  // them without closing it. The banner image is decorative and not included.
  const gallery: LightboxImage[] = [];
  const flyerIndex = program.flyer
    ? gallery.push({ src: program.flyer, alt: `${program.title} flyer` }) - 1
    : -1;
  const photosOffset = gallery.length;
  program.photos?.images.forEach((src, i) =>
    gallery.push({ src, alt: `${program.photos!.title} photo ${i + 1}` }),
  );

  return (
    <>
      <PageHero
        eyebrow={program.category}
        title={program.title}
        description={program.summary}
      />
      <LightboxProvider images={gallery} label={program.title}>
        <Section>
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="min-w-0 lg:col-span-2">
              {program.image ? (
                <div
                  data-reveal
                  className="relative aspect-[16/6] overflow-hidden rounded-2xl bg-teal-900/5"
                >
                  <Image
                    src={asset(program.image)}
                    alt={`${program.title} at NICE`}
                    fill
                    unoptimized
                    sizes="(min-width: 1024px) 66vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ) : null}

              <div
                data-reveal
                className={`space-y-4 text-lg leading-relaxed text-ink-700 ${
                  program.image ? "mt-8" : ""
                }`}
              >
                {program.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {program.notice ? (
                <p
                  data-reveal
                  className="mt-8 rounded-xl border-l-4 border-gold-500 bg-gold-500/10 px-5 py-4 font-semibold text-teal-900"
                >
                  {program.notice}
                </p>
              ) : null}

              {program.sections?.length ? (
                <div className="mt-10 space-y-10">
                  {program.sections.map((section) => (
                    <SectionList key={section.title} section={section} />
                  ))}
                </div>
              ) : null}

              {program.photos ? (
                <section data-reveal className="mt-12">
                  <h2 className="font-display text-2xl font-bold text-teal-900">
                    {program.photos.title}
                  </h2>
                  <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {program.photos.images.map((src, i) => (
                      <LightboxTrigger
                        key={src}
                        index={photosOffset + i}
                        label={`View ${program.photos!.title} photo ${i + 1}`}
                        className="group relative block aspect-[3/4] overflow-hidden rounded-xl bg-teal-900/5"
                      >
                        <Image
                          src={asset(src)}
                          alt={`${program.photos!.title} photo ${i + 1}`}
                          fill
                          unoptimized
                          sizes="(min-width: 640px) 22vw, 50vw"
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />
                      </LightboxTrigger>
                    ))}
                  </div>
                </section>
              ) : null}

              <div className="mt-10 flex flex-wrap gap-4">
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

            <aside className="space-y-6 lg:sticky lg:top-28 lg:h-fit">
              {program.flyer ? (
                <LightboxTrigger
                  data-reveal
                  index={flyerIndex}
                  label={`View ${program.title} flyer`}
                  className="group block w-full overflow-hidden rounded-2xl border border-teal-900/10 bg-white p-2 shadow-sm"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={asset(program.flyer)}
                    alt={`${program.title} flyer`}
                    className="h-auto w-full rounded-xl"
                  />
                  <span className="flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-teal-800 group-hover:text-gold-700">
                    View full flyer
                    <IconArrowRight className="h-3.5 w-3.5" />
                  </span>
                </LightboxTrigger>
              ) : null}

              {program.contacts?.length ||
              program.downloads?.length ||
              program.links?.length ? (
                <div
                  data-reveal
                  className="rounded-2xl border border-teal-900/10 bg-cream-100 p-6"
                >
                  <h3 className="font-display text-lg font-bold text-teal-900">
                    Get in touch
                  </h3>
                  <ul className="mt-4 space-y-4 text-sm">
                    {program.contacts?.map((c) => (
                      <li key={c.phone}>
                        <p className="font-semibold text-ink-500">{c.label}</p>
                        {c.name ? (
                          <p className="text-ink-700">{c.name}</p>
                        ) : null}
                        <a
                          href={`tel:${c.phone.replace(/[^\d+]/g, "")}`}
                          className="font-display text-lg font-bold text-teal-800 hover:text-teal-900"
                        >
                          {c.phone}
                        </a>
                      </li>
                    ))}
                    {program.downloads?.map((d) => (
                      <li key={d.href}>
                        <a
                          href={asset(d.href)}
                          className="inline-flex items-center gap-2 font-semibold text-teal-800 hover:text-teal-900"
                        >
                          {d.label}
                          <IconArrowRight className="h-4 w-4" />
                        </a>
                      </li>
                    ))}
                    {program.links?.map((l) => (
                      <li key={l.href}>
                        <a
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 font-semibold text-teal-800 hover:text-teal-900"
                        >
                          {l.label}
                          <IconArrowRight className="h-4 w-4" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div
                data-reveal
                className="rounded-2xl border border-teal-900/10 bg-cream-100 p-6"
              >
                <h3 className="font-display text-lg font-bold text-teal-900">
                  Stay updated
                </h3>
                <p className="mt-2 text-sm text-ink-500">
                  Announcements and updates are shared in our WhatsApp group.
                </p>
                <a
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 flex items-center justify-center gap-2 rounded-full border border-teal-900/20 px-5 py-2.5 text-sm font-semibold text-teal-800 hover:bg-teal-900/5"
                >
                  <IconWhatsapp className="h-4 w-4" />
                  Join WhatsApp group
                </a>
              </div>

              {related.length ? (
                <div
                  data-reveal
                  className="rounded-2xl border border-teal-900/10 bg-cream-100 p-6"
                >
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
                          <IconArrowRight className="h-4 w-4 shrink-0 text-gold-600 transition group-hover:translate-x-0.5" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </aside>
          </div>
        </Section>
      </LightboxProvider>
    </>
  );
}
