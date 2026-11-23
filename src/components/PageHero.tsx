import Image from "next/image";
import { Container } from "./Container";
import { asset } from "@/lib/asset";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="relative isolate flex min-h-[27rem] items-center overflow-hidden bg-teal-900 pt-20 sm:h-[31rem]">
      {/* Image is pinned to the right edge of the content column at full hero
          height so the whole window is always visible; both edges fade into
          the teal bg. The screen-blended teal layer lifts the photo's blacks to
          exactly teal-900, so the image's shadows match the background. */}
      <div
        className="absolute inset-0 -z-20"
        data-parallax="0.3"
        data-parallax-zoom="0.08"
      >
        <Container className="h-full">
          <div className="relative h-full">
            <div className="absolute inset-y-0 right-0 isolate">
              <Image
                src={asset("/hero/masjid-interior.jpg")}
                alt=""
                width={2048}
                height={1360}
                priority
                unoptimized
                className="h-full w-auto max-w-none"
              />
              <div className="absolute inset-0 bg-teal-900 mix-blend-screen" />
              <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-teal-900 to-transparent" />
              <div className="absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-teal-900 to-transparent" />
            </div>
          </div>
        </Container>
      </div>
      <div data-scroll-fade className="w-full">
        <Container className="relative py-16 [text-shadow:0_2px_16px_rgb(0_0_0/0.45)]">
          {eyebrow ? (
            <p className="mb-3 font-arabic text-2xl text-gold-400">{eyebrow}</p>
          ) : null}
          <h1 className="max-w-3xl font-display text-4xl font-bold text-cream-50 sm:text-5xl text-balance">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 max-w-2xl text-lg text-cream-100/85 text-balance">
              {description}
            </p>
          ) : null}
        </Container>
      </div>
    </div>
  );
}
