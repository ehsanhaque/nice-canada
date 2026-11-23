"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Apple-style scroll effects, driven by data attributes so Server Components
// can opt in without becoming Client Components:
//   data-reveal / data-reveal="scale"  fade (and rise or scale) into view once
//   data-parallax="0.3"                 drift slower than the page while scrolling
//   data-parallax-zoom="0.1"            ...and gently zoom in
//   data-scroll-fade                    fade/lift away as its section scrolls past
// Effects are only active when the inline script in the root layout has added
// the `motion` class to <html> (i.e. the visitor hasn't asked for reduced motion).
export function ScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("motion")) return;

    // --- Reveal on enter -------------------------------------------------
    const observer = new IntersectionObserver(
      (entries) => {
        // Elements entering together are staggered top-to-bottom, left-to-right.
        const entering = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top ||
              a.boundingClientRect.left - b.boundingClientRect.left
          );
        entering.forEach((entry, i) => {
          const el = entry.target as HTMLElement;
          el.style.setProperty("--reveal-delay", `${Math.min(i, 6) * 90}ms`);
          el.classList.add("is-visible");
          observer.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    document
      .querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)")
      .forEach((el) => observer.observe(el));

    // --- Scroll-linked parallax & fade ------------------------------------
    const parallax = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]")
    );
    const fades = Array.from(
      document.querySelectorAll<HTMLElement>("[data-scroll-fade]")
    );
    let frame = 0;

    const update = () => {
      frame = 0;
      const vh = window.innerHeight;

      for (const el of parallax) {
        const section = el.parentElement;
        if (!section) continue;
        const rect = section.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > vh) continue;
        const scrolled = Math.max(0, -rect.top);
        const speed = Number(el.dataset.parallax) || 0;
        const zoom = Number(el.dataset.parallaxZoom) || 0;
        const progress = scrolled / Math.max(rect.height, 1);
        el.style.transform = `translate3d(0, ${scrolled * speed}px, 0) scale(${1 + progress * zoom})`;
      }

      for (const el of fades) {
        const section = el.parentElement;
        if (!section) continue;
        const rect = section.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > vh) continue;
        const scrolled = Math.max(0, -rect.top);
        const progress = Math.min(1, scrolled / (rect.height * 0.65));
        el.style.opacity = String(1 - progress);
        el.style.transform = `translate3d(0, ${scrolled * 0.25}px, 0)`;
      }
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return null;
}
