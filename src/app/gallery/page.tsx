import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import { GalleryClient } from "@/components/GalleryClient";
import { site } from "@/lib/site";
import { IconFacebook, IconYoutube } from "@/components/icons";

export const metadata = {
  title: "Gallery | NICE",
  description: "Moments from NICE community life — prayers, programs, and events.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        description="A look at community life at NICE — from daily prayers to Ramadan gatherings and youth programs, organized by year."
      />

      <Section>
        <SectionHeading
          eyebrow="Community Life"
          title="Moments from our masjid"
          description="Browse our photo albums below — select a year to view, and click any photo to view it larger."
        />
        <div className="mt-10">
          <GalleryClient />
        </div>
      </Section>

      <Section className="bg-teal-900">
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold text-cream-50">
            More photos & videos
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-cream-100/80">
            Our full photo and video library is shared on Facebook and
            YouTube — follow along to see the latest from our community.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a
              href={site.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-cream-50/10 px-6 py-3 font-semibold text-cream-50 hover:bg-gold-500 hover:text-teal-950"
            >
              <IconFacebook className="h-4 w-4" />
              Facebook
            </a>
            <a
              href={site.youtubeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-cream-50/10 px-6 py-3 font-semibold text-cream-50 hover:bg-gold-500 hover:text-teal-950"
            >
              <IconYoutube className="h-4 w-4" />
              YouTube
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
