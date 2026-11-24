"use client";

import type { Flyer } from "@/lib/flyers";
import { asset } from "@/lib/asset";
import { LightboxProvider, LightboxTrigger, useLightbox } from "./Lightbox";

type Props = {
  flyers: Flyer[];
  label: string;
  layout?: "grid" | "row";
  // Used in alt text, e.g. "photo".
  noun?: string;
  // When rendered inside a page-wide LightboxProvider, the position of this
  // gallery's first image in that provider's list.
  offset?: number;
};

// Flyer/photo thumbnails that open in the shared full-screen viewer.
// `layout="row"` renders a horizontally scrolling strip (home page); the
// default is a masonry grid. Uses the surrounding LightboxProvider if there
// is one (so the viewer moves through every image on the page), otherwise
// creates its own.
export function FlyerGallery(props: Props) {
  const ctx = useLightbox();
  if (ctx) return <Thumbs {...props} />;
  const { flyers, label, noun = "flyer" } = props;
  return (
    <LightboxProvider
      label={label}
      images={flyers.map((f, i) => ({ src: f.src, alt: `${label} ${noun} ${i + 1}` }))}
    >
      <Thumbs {...props} offset={0} />
    </LightboxProvider>
  );
}

function Thumbs({ flyers, label, layout = "grid", noun = "flyer", offset = 0 }: Props) {
  return (
    <div
      className={
        layout === "row"
          ? "-mx-5 flex scroll-px-5 snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:scroll-px-8 sm:px-8 [scrollbar-width:thin]"
          : "columns-2 gap-4 sm:columns-3 lg:columns-4"
      }
    >
      {flyers.map((flyer, i) => (
        <LightboxTrigger
          key={flyer.src}
          index={offset + i}
          label={`View ${label} ${noun} ${i + 1}`}
          className={`group block overflow-hidden rounded-xl border border-teal-900/10 bg-white p-1.5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
            layout === "row" ? "shrink-0 snap-start" : "mb-4 w-full break-inside-avoid"
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset(flyer.thumb)}
            alt={`${label} ${noun} ${i + 1}`}
            width={flyer.width}
            height={flyer.height}
            loading="lazy"
            className={`rounded-lg ${
              layout === "row" ? "h-64 w-auto max-w-none sm:h-80" : "h-auto w-full"
            }`}
          />
        </LightboxTrigger>
      ))}
    </div>
  );
}
