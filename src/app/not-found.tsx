import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { IconArrowRight } from "@/components/icons";

export default function NotFound() {
  return (
    <>
      <PageHero
        title="Page not found"
        description="The page you're looking for doesn't exist or may have moved."
      />
      <Section>
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-semibold text-teal-800 hover:text-teal-900"
        >
          Back to home
          <IconArrowRight className="h-4 w-4" />
        </Link>
      </Section>
    </>
  );
}
