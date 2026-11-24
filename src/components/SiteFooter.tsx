import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { footerNav, site } from "@/lib/site";
import { IconFacebook, IconMail, IconPin, IconWhatsapp, IconYoutube } from "./icons";

export function SiteFooter() {
  return (
    <footer className="bg-teal-950 text-cream-100">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <Logo className="h-10 w-auto" />
            <span className="font-display text-lg font-bold text-cream-50">
              {site.name}
            </span>
          </div>
          <p className="mt-4 text-sm text-cream-100/70">
            {site.fullName} is a not-for-profit charitable organization
            incorporated in the province of Ontario, serving {site.city} and
            surrounding communities.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-gold-400">
            Explore
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-cream-100/75 hover:text-gold-300">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-gold-400">
            Contact Us
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-cream-100/75">
            <li className="flex items-start gap-2.5">
              <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span>
                Serving {site.city}, {site.province}, {site.country}
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <IconMail className="h-4 w-4 shrink-0 text-gold-400" />
              <a href={`mailto:${site.email}`} className="hover:text-gold-300">
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <IconWhatsapp className="h-4 w-4 shrink-0 text-gold-400" />
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-gold-300"
              >
                Join our WhatsApp group
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-gold-400">
            Follow Us
          </h3>
          <div className="mt-4 flex gap-3">
            <a
              href={site.facebookUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full bg-cream-50/10 text-cream-50 transition hover:bg-gold-500 hover:text-teal-950"
            >
              <IconFacebook className="h-5 w-5" />
            </a>
            <a
              href={site.youtubeUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="grid h-10 w-10 place-items-center rounded-full bg-cream-50/10 text-cream-50 transition hover:bg-gold-500 hover:text-teal-950"
            >
              <IconYoutube className="h-5 w-5" />
            </a>
          </div>
          <Link
            href="/donation/"
            className="mt-6 inline-flex items-center rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-teal-950"
          >
            Donate Now
          </Link>
        </div>
      </Container>

      <div className="border-t border-cream-50/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-cream-100/60 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {site.fullName} (NICE). All
            rights reserved.
          </p>
          <p>Serving the community since incorporation in Ontario.</p>
        </Container>
      </div>
    </footer>
  );
}
