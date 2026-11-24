"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { asset } from "@/lib/asset";
import { IconClose } from "./icons";

export type LightboxImage = { src: string; alt: string };

type LightboxContextValue = { open: (index: number) => void; count: number };

const LightboxContext = createContext<LightboxContextValue | null>(null);

export function useLightbox() {
  return useContext(LightboxContext);
}

// Holds every image in a section/page and renders a full-screen viewer.
// Any <LightboxTrigger index={n}> inside opens the viewer at image n, and the
// visitor can move through all the images (arrows, swipe, or keyboard).
export function LightboxProvider({
  images,
  label,
  children,
}: {
  images: LightboxImage[];
  // Caption prefix, e.g. "Winter Break Program".
  label: string;
  children: React.ReactNode;
}) {
  const [index, setIndex] = useState<number | null>(null);
  const [touchX, setTouchX] = useState<number | null>(null);
  const count = images.length;

  const open = useCallback((i: number) => setIndex(i), []);
  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (delta: number) => setIndex((i) => (i === null ? i : (i + delta + count) % count)),
    [count]
  );

  useEffect(() => {
    if (index === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    }
    // Prevent the page behind from scrolling while the viewer is open.
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [index, close, step]);

  const current = index === null ? null : images[index];

  return (
    <LightboxContext.Provider value={{ open, count }}>
      {children}
      {current && index !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${label} — image ${index + 1} of ${count}`}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-teal-950/95 p-4 sm:p-8"
          onClick={close}
          onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX === null) return;
            const dx = e.changedTouches[0].clientX - touchX;
            if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
            setTouchX(null);
          }}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-cream-50/10 text-cream-50 hover:bg-cream-50/20"
            onClick={close}
          >
            <IconClose className="h-5 w-5" />
          </button>

          {count > 1 ? (
            <>
              <button
                type="button"
                aria-label="Previous image"
                className="absolute left-2 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-cream-50/10 text-2xl text-cream-50 hover:bg-cream-50/20 sm:left-6"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
              >
                &larr;
              </button>
              <button
                type="button"
                aria-label="Next image"
                className="absolute right-2 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-cream-50/10 text-2xl text-cream-50 hover:bg-cream-50/20 sm:right-6"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
              >
                &rarr;
              </button>
            </>
          ) : null}

          <div className="flex max-w-5xl flex-col items-center" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={current.src}
              src={asset(current.src)}
              alt={current.alt}
              className="max-h-[78vh] w-auto rounded-lg object-contain shadow-2xl"
            />
            <p className="mt-3 text-center text-sm text-cream-100/70">
              {label}
              {count > 1 ? ` · ${index + 1} of ${count}` : ""}
            </p>
          </div>

          {count > 1 ? (
            <div
              className="mt-4 flex max-w-full gap-2 overflow-x-auto px-2 pb-1"
              onClick={(e) => e.stopPropagation()}
            >
              {images.map((img, i) => (
                <button
                  key={img.src}
                  type="button"
                  aria-label={`Show image ${i + 1}`}
                  aria-current={i === index}
                  onClick={() => setIndex(i)}
                  className={`h-14 w-14 shrink-0 overflow-hidden rounded-md ring-2 transition ${
                    i === index ? "ring-gold-400" : "opacity-50 ring-transparent hover:opacity-100"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={asset(img.src)} alt="" loading="lazy" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </LightboxContext.Provider>
  );
}

// A button that opens the surrounding LightboxProvider at `index`.
export function LightboxTrigger({
  index,
  className,
  label,
  children,
  ...rest
}: {
  index: number;
  className?: string;
  label: string;
  children: React.ReactNode;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick">) {
  const ctx = useLightbox();
  return (
    <button
      type="button"
      aria-label={label}
      className={`cursor-zoom-in text-left ${className ?? ""}`}
      onClick={() => ctx?.open(index)}
      {...rest}
    >
      {children}
    </button>
  );
}
