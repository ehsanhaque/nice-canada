import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { PayPalDonateForm } from "@/components/DonateButton";
import { site } from "@/lib/site";
import { asset } from "@/lib/asset";
import { IconArrowRight, IconHeart } from "@/components/icons";

export const metadata = {
  title: "Donate | NICE",
  description:
    "Support North-Valley Islamic Centre through Interac e-Transfer, PayPal, or a monthly Preauthorized Donation (PAD).",
};

export default function DonationPage() {
  return (
    <>
      <PageHero
        eyebrow="الصدقة"
        title="Support NICE"
        description="Your donation sustains daily prayers, education, youth programs, and outreach for families in our community. Jazakum Allahu Khairan for your generosity."
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          <div data-reveal className="flex flex-col rounded-2xl border-2 border-teal-800 bg-white p-7 shadow-sm">
            <span className="w-fit rounded-full bg-teal-800 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cream-50">
              Preferred Method
            </span>
            <h3 className="mt-4 font-display text-xl font-bold text-teal-900">
              Interac e-Transfer
            </h3>
            <p className="mt-2 flex-1 text-sm text-ink-500">
              Send your donation directly and securely via Interac
              e-Transfer — our preferred method of giving.
            </p>
            <div className="mt-5 rounded-xl bg-cream-100 px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">
                Send to
              </p>
              <a
                href={`mailto:${site.email}`}
                className="font-display text-lg font-bold text-teal-800"
              >
                {site.email}
              </a>
            </div>
          </div>

          <div data-reveal className="flex flex-col rounded-2xl border border-teal-900/10 bg-white p-7 shadow-sm">
            <span className="w-fit rounded-full bg-gold-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold-700">
              Option 2
            </span>
            <h3 className="mt-4 font-display text-xl font-bold text-teal-900">
              Donate with PayPal
            </h3>
            <p className="mt-2 flex-1 text-sm text-ink-500">
              Give in less than two minutes using PayPal — pay with your
              PayPal balance, bank account, or credit card.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <IconHeart className="h-5 w-5 text-gold-600" />
              <PayPalDonateForm />
            </div>
          </div>

          <div data-reveal className="flex flex-col rounded-2xl border border-teal-900/10 bg-white p-7 shadow-sm">
            <span className="w-fit rounded-full bg-teal-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700">
              Option 3
            </span>
            <h3 className="mt-4 font-display text-xl font-bold text-teal-900">
              Become a Monthly Donor
            </h3>
            <p className="mt-2 flex-1 text-sm text-ink-500">
              Set up recurring giving with our Preauthorized Donation (PAD)
              form and support NICE&apos;s work with a sustained,
              predictable monthly gift.
            </p>
            <a
              href={asset(site.padFormUrl)}
              className="mt-5 inline-flex items-center gap-2 font-semibold text-teal-800 hover:text-teal-900"
            >
              Download PAD form
              <IconArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        <p data-reveal className="mt-8 text-center text-sm text-ink-500">
          Donation tax receipts are available on request &middot; Charitable
          Registration # {site.charityRegistration}
        </p>
      </Section>

      <Section className="bg-teal-900">
        <div className="mx-auto max-w-2xl text-center">
          <h2 data-reveal className="font-display text-2xl font-bold text-cream-50">
            Where your donation goes
          </h2>
          <div className="mt-8 grid gap-4 text-left sm:grid-cols-2">
            {[
              "Daily & Jumu'ah congregational prayers",
              "Weekend & evening Islamic education",
              "Youth boot camps & seasonal programs",
              "Funeral services & family support",
              "Help for the poor, locally and abroad",
              "Our new masjid & community centre project",
            ].map((item) => (
              <div
                key={item}
                data-reveal
                className="flex items-start gap-3 rounded-xl bg-cream-50/5 px-5 py-4"
              >
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
                <span className="text-sm text-cream-100/90">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
