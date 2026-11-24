import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import { objectives, site } from "@/lib/site";
import { asset } from "@/lib/asset";
import { IconArrowRight } from "@/components/icons";

export const metadata = {
  title: "About Us | NICE",
  description:
    "Learn about North-Valley Islamic Centre (NICE), a not-for-profit charitable organization serving Brampton, Ontario.",
};

// Services named in the old site's Mission & Vision statement.
const plannedServices = [
  "A mosque",
  "An Islamic school",
  "Library",
  "Adult education",
  "Employment training centre",
  "Fitness centre",
  "Funeral services",
  "Support for elderly people",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="من نحن"
        title="About North-Valley Islamic Centre"
        description="A not-for-profit charitable organization incorporated in the province of Ontario, devoted to serving the communities living in Brampton and surrounding areas."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="Who Are We?" title="Serving Brampton with faith" />
            <div
              data-reveal
              className="mt-6 space-y-4 text-lg leading-relaxed text-ink-700"
            >
              <p>
                {site.fullName} (NICE) is a not-for-profit charitable
                organization which has been incorporated in the province of
                Ontario. NICE is an initiative which strives to develop a
                dynamic community where families should be able to fulfill all
                of their divine and social needs with comfort and ease. In this
                regard, our ultimate goal is to establish a unique environment
                for all of us.
              </p>
              <p>
                NICE shall be a charitable, non-profit, non-political, Islamic
                religious organization, and shall be devoted to the services of
                the communities living in Brampton and surrounding areas. NICE
                will carry out its objectives and all activities in accordance
                with Al-Qur&apos;an and the Traditions of Prophet Muhammad
                (pbuh).
              </p>
            </div>
            <div
              data-reveal
              className="relative mt-8 aspect-[12/5] overflow-hidden rounded-2xl bg-teal-900/5"
            >
              <Image
                src={asset("/about/community.jpg")}
                alt="The NICE community gathered for prayer outdoors"
                fill
                unoptimized
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <aside
            data-reveal
            className="h-fit rounded-2xl border border-teal-900/10 bg-cream-100 p-6"
          >
            <h3 className="font-display text-lg font-bold text-teal-900">
              At a glance
            </h3>
            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="font-semibold text-ink-500">Status</dt>
                <dd className="text-ink-700">
                  Registered not-for-profit charitable organization
                </dd>
                <dd className="text-ink-500">
                  Charitable Registration # {site.charityRegistration}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink-500">
                  Theological affiliation
                </dt>
                <dd className="text-ink-700">Ahlus Sunnah Wal-Jama&apos;ah</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink-500">
                  Moon sighting authority
                </dt>
                <dd className="text-ink-700">Hilal Council of Canada</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink-500">Serving</dt>
                <dd className="text-ink-700">
                  {site.city} and surrounding areas, {site.province}
                </dd>
              </div>
            </dl>
            <Link
              href="/donation/"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-teal-950 hover:bg-gold-400"
            >
              Support our mission
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </Section>

      <Section className="bg-teal-900">
        <div className="grid gap-12 lg:grid-cols-2">
          <div data-reveal>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold-400">
              Mission &amp; Vision
            </p>
            <h2 className="font-display text-3xl font-bold text-cream-50 sm:text-4xl text-balance">
              A center of excellence for our community
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-cream-100/90">
              NICE strives to become a center of excellence for community
              support and socio-cultural development for women, youth and
              adults.
            </p>
            <p className="mt-4 leading-relaxed text-cream-100/80">
              To establish, operate and maintain NICE for providing community
              services for the Muslims living in Brampton and the region, NICE
              will have the following, based on the community&apos;s needs:
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-2.5">
              {plannedServices.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-cream-100/90"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3
              data-reveal
              className="font-display text-xl font-bold text-cream-50"
            >
              Main Objectives
            </h3>
            <div className="mt-5 grid gap-4">
              {objectives.map((objective, i) => (
                <div
                  key={objective}
                  data-reveal
                  className="flex items-start gap-4 rounded-2xl bg-cream-50/5 p-5"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold-500 font-display font-bold text-teal-950">
                    {i + 1}
                  </span>
                  <p className="text-cream-100/90">{objective}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading eyebrow="Disclosures" title="What you should know" />
            <ul data-reveal className="mt-8 space-y-3">
              <li className="flex items-start gap-4 rounded-xl border border-teal-900/10 bg-white px-5 py-4 text-ink-700">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold-500" />
                <span>
                  North-Valley Islamic Centre (NICE) is Ahlus Sunnah
                  Wal-Jama&apos;ah.
                </span>
              </li>
              <li className="flex items-start gap-4 rounded-xl border border-teal-900/10 bg-white px-5 py-4 text-ink-700">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold-500" />
                <span>
                  Pictures and videos from our events can be shared on any of
                  our platforms (website, Facebook, WhatsApp).
                </span>
              </li>
              <li className="flex items-start gap-4 rounded-xl border border-teal-900/10 bg-white px-5 py-4 text-ink-700">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold-500" />
                <span>
                  Moon sighting methodology — NICE follows the{" "}
                  <a
                    href="https://hilalcouncilofcanada.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-teal-800 underline decoration-gold-500/60 underline-offset-2 hover:text-teal-900"
                  >
                    Hilal Council of Canada
                  </a>
                  .
                </span>
              </li>
            </ul>
          </div>

          <div
            data-reveal
            className="overflow-hidden rounded-2xl border border-teal-900/10 bg-cream-100"
          >
            <div className="grid grid-cols-2">
              <div className="relative aspect-square">
                <Image
                  src={asset("/about/members.jpg")}
                  alt="Members of the NICE community"
                  fill
                  unoptimized
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square">
                <Image
                  src={asset("/about/outdoor-prayer.jpg")}
                  alt="A NICE outdoor community gathering"
                  fill
                  unoptimized
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="p-7">
              <p className="font-arabic text-2xl text-gold-600">الله</p>
              <h2 className="mt-2 font-display text-2xl font-bold text-teal-900">
                A Place For You
              </h2>
              <p className="mt-3 leading-relaxed text-ink-700">
                Our Islamic Center takes honor in its heritage of diversity,
                open-mindedness, civic engagement and community building. Be a
                part of us and help to become an example citizen for our
                community.
              </p>
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 font-semibold text-teal-800 hover:text-teal-900"
              >
                Join our WhatsApp group
                <IconArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
