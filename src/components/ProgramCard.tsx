import Link from "next/link";
import Image from "next/image";
import { Program } from "@/lib/site";
import { asset } from "@/lib/asset";
import { IconArrowRight } from "./icons";

export function ProgramCard({ program }: { program: Program }) {
  return (
    <Link
      href={`/programs/${program.slug}/`}
      data-reveal
      className="group flex flex-col overflow-hidden rounded-2xl border border-teal-900/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:border-gold-500/40"
    >
      {program.image ? (
        <div className="relative aspect-[16/7] overflow-hidden bg-teal-900/5">
          <Image
            src={asset(program.image)}
            alt=""
            fill
            unoptimized
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-6">
        <span className="w-fit rounded-full bg-teal-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700">
          {program.category}
        </span>
        <h3 className="mt-4 font-display text-lg font-bold text-teal-900">
          {program.title}
        </h3>
        <p className="mt-2 flex-1 text-sm text-ink-500">{program.summary}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600 group-hover:text-gold-700">
          Learn more
          <IconArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
