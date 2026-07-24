"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { galleryAlbums } from "@/lib/gallery";
import { asset } from "@/lib/asset";
import { IconClose } from "./icons";

export function GalleryClient() {
  const [activeSlug, setActiveSlug] = useState(galleryAlbums[0].slug);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const activeAlbum =
    galleryAlbums.find((a) => a.slug === activeSlug) ?? galleryAlbums[0];

  function selectAlbum(slug: string) {
    setActiveSlug(slug);
    setLightboxIndex(null);
  }

  useEffect(() => {
    if (lightboxIndex === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") {
        setLightboxIndex((i) =>
          i === null ? null : (i + 1) % activeAlbum.images.length
        );
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((i) =>
          i === null
            ? null
            : (i - 1 + activeAlbum.images.length) % activeAlbum.images.length
        );
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, activeAlbum.images.length]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {galleryAlbums.map((album) => (
          <button
            key={album.slug}
            type="button"
            onClick={() => selectAlbum(album.slug)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              activeSlug === album.slug
                ? "bg-teal-800 text-cream-50"
                : "bg-cream-100 text-ink-700 hover:bg-teal-900/10"
            }`}
          >
            {album.label}
            <span
              className={`ml-1.5 text-xs ${
                activeSlug === album.slug ? "text-cream-100/70" : "text-ink-500"
              }`}
            >
              ({album.images.length})
            </span>
          </button>
        ))}
      </div>

      <div className="mt-8 columns-2 gap-3 sm:columns-3 lg:columns-4 [column-fill:_balance]">
        {activeAlbum.images.map((img, i) => (
          <button
            key={img.thumb}
            type="button"
            onClick={() => setLightboxIndex(i)}
            className="group mb-3 block w-full overflow-hidden rounded-xl bg-teal-900/5"
          >
            <Image
              src={asset(img.thumb)}
              alt={`${activeAlbum.label} photo ${i + 1}`}
              width={480}
              height={480}
              className="h-auto w-full object-cover transition duration-300 group-hover:scale-105"
              loading="lazy"
              unoptimized
            />
          </button>
        ))}
      </div>

      {lightboxIndex !== null ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-teal-950/95 p-4 sm:p-8"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-cream-50/10 text-cream-50 hover:bg-cream-50/20"
            onClick={() => setLightboxIndex(null)}
          >
            <IconClose className="h-5 w-5" />
          </button>

          <button
            type="button"
            aria-label="Previous"
            className="absolute left-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-cream-50/10 text-2xl text-cream-50 hover:bg-cream-50/20 sm:left-6"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((i) =>
                i !== null
                  ? (i - 1 + activeAlbum.images.length) % activeAlbum.images.length
                  : i
              );
            }}
          >
            &larr;
          </button>

          <button
            type="button"
            aria-label="Next"
            className="absolute right-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-cream-50/10 text-2xl text-cream-50 hover:bg-cream-50/20 sm:right-6"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((i) =>
                i !== null ? (i + 1) % activeAlbum.images.length : i
              );
            }}
          >
            &rarr;
          </button>

          <div
            className="relative max-h-[85vh] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={activeAlbum.images[lightboxIndex].full}
              alt={`${activeAlbum.label} photo ${lightboxIndex + 1}`}
              className="max-h-[85vh] w-auto rounded-lg object-contain shadow-2xl"
            />
            <p className="mt-3 text-center text-sm text-cream-100/70">
              {activeAlbum.label} &middot; {lightboxIndex + 1} of{" "}
              {activeAlbum.images.length}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
