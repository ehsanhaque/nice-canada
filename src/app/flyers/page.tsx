import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import { FlyerGallery } from "@/components/FlyerGallery";
import { flyerGroups } from "@/lib/flyers";

export const metadata = {
  title: "Flyers | NICE",
  description:
    "Current and previous flyers from North-Valley Islamic Centre — programs, events, notices, and fundraising.",
};

export default function FlyersPage() {
  return (
    <>
      <PageHero
        title="Flyers"
        description="Our current notices and events, plus an archive of flyers going back to 2018. Click any flyer to view it full size."
      />
      {flyerGroups.map((group, i) => (
        <Section key={group.label} className={i === 0 ? "" : "pt-0 sm:pt-0"}>
          <SectionHeading
            eyebrow={i === 0 ? "Now at NICE" : "Archive"}
            title={group.label}
          />
          <div className="mt-8">
            <FlyerGallery flyers={group.flyers} label={group.label} />
          </div>
        </Section>
      ))}
    </>
  );
}
