"use client";

import { useEffect, useRef } from "react";

// A large statement whose words light up one by one as it scrolls through the
// viewport. Falls back to fully lit text for reduced-motion visitors.
export function ScrollHighlight({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el || !document.documentElement.classList.contains("motion")) return;
    const spans = Array.from(el.querySelectorAll<HTMLElement>("[data-word]"));
    let frame = 0;

    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      const rect = el.getBoundingClientRect();
      // 0 when the text's top reaches 85% down the viewport, 1 when its
      // bottom reaches 40% down — so it finishes while comfortably on screen.
      const start = vh * 0.85;
      const end = vh * 0.4 - rect.height;
      const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
      const lit = progress * spans.length;
      spans.forEach((span, i) => {
        span.style.opacity = String(0.18 + 0.82 * Math.min(1, Math.max(0, lit - i)));
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} data-word className="transition-opacity duration-150">
          {word}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  );
}
