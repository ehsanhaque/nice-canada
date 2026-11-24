"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { mainNav, site, type NavItem } from "@/lib/site";
import { IconChevronDown, IconClose, IconMenu } from "./icons";

function isActive(item: NavItem, pathname: string | null) {
  if (!pathname) return false;
  if (item.href) return item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
  return (item.groups ?? []).some((g) => g.links.some((l) => pathname.startsWith(l.href)));
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Desktop: which dropdown is showing. Mobile: which section is expanded.
  const [menu, setMenu] = useState<string | null>(null);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  // True while the pointer is over the desktop nav, so every item (with or
  // without a sub-menu) gives the same solid-header hover treatment.
  const [navHover, setNavHover] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on navigation (reset-on-change during render, per React docs).
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMenu(null);
    setOpen(false);
  }

  // Close the desktop dropdown on Escape or a click outside the nav.
  useEffect(() => {
    if (!menu) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenu(null);
    const onClick = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setMenu(null);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
    };
  }, [menu]);

  // The header floats transparently over each page's hero image until the
  // visitor scrolls, opens the mobile menu, hovers the nav, or opens a dropdown.
  const overlay = !scrolled && !open && !menu && !navHover;

  const topItemClass = (active: boolean) =>
    `inline-flex items-center gap-0.5 whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition ${
      active
        ? overlay
          ? "bg-white/15 text-cream-50"
          : "bg-teal-800 text-cream-50"
        : overlay
          ? "text-cream-50/90 hover:bg-white/10 hover:text-cream-50"
          : "text-ink-700 hover:bg-teal-900/5 hover:text-teal-800"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        overlay
          ? "border-transparent bg-transparent"
          : "border-teal-900/10 bg-cream-50/95 backdrop-blur"
      }`}
    >
      <Container className="flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <Logo className="h-11 w-auto shrink-0" />
          <span className="leading-tight">
            <span
              className={`block font-display text-xl font-bold ${overlay ? "text-cream-50" : "text-teal-900"}`}
            >
              {site.name}
            </span>
            <span
              className={`block whitespace-nowrap text-xs font-medium ${overlay ? "text-cream-100/80" : "text-ink-500"}`}
            >
              {site.fullName}
            </span>
          </span>
        </Link>

        <nav
          ref={navRef}
          aria-label="Main"
          className="hidden min-w-0 items-center xl:flex"
          onMouseEnter={() => setNavHover(true)}
          onMouseLeave={() => setNavHover(false)}
        >
          {mainNav.map((item) => {
            const active = isActive(item, pathname);
            if (item.href) {
              return (
                <Link key={item.label} href={item.href} className={topItemClass(active)}>
                  {item.label}
                </Link>
              );
            }
            const groups = item.groups ?? [];
            const isMega = groups.length > 1;
            const expanded = menu === item.label;
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setMenu(item.label)}
                onMouseLeave={() => setMenu((m) => (m === item.label ? null : m))}
              >
                <button
                  type="button"
                  aria-expanded={expanded}
                  aria-haspopup="true"
                  className={topItemClass(active || expanded)}
                  onClick={() => setMenu((m) => (m === item.label ? null : item.label))}
                >
                  {item.label}
                  <IconChevronDown
                    className={`h-4 w-4 transition ${expanded ? "rotate-180" : ""}`}
                  />
                </button>
                {expanded ? (
                  // pt-3 bridges the gap so the hover doesn't drop on the way down.
                  <div
                    className={`absolute top-full pt-3 ${
                      isMega ? "left-1/2 -translate-x-1/2" : "left-0"
                    }`}
                  >
                    <div
                      className={`rounded-2xl border border-teal-900/10 bg-cream-50 p-3 shadow-xl shadow-teal-950/10 ${
                        isMega ? "grid w-[46rem] grid-cols-3 gap-2" : "w-60"
                      }`}
                    >
                      {groups.map((group, gi) => (
                        <div key={group.label ?? gi} className={isMega ? "p-2" : ""}>
                          {group.label ? (
                            <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-widest text-gold-600">
                              {group.label}
                            </p>
                          ) : null}
                          <ul>
                            {group.links.map((link) => {
                              const current = pathname?.startsWith(link.href);
                              return (
                                <li key={link.href}>
                                  <Link
                                    href={link.href}
                                    className={`block rounded-lg px-3 py-2 text-sm transition ${
                                      current
                                        ? "bg-teal-800 font-semibold text-cream-50"
                                        : "text-ink-700 hover:bg-teal-900/5 hover:text-teal-800"
                                    }`}
                                  >
                                    {link.label}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="hidden shrink-0 xl:block">
          <Link
            href="/donation/"
            className="inline-flex items-center whitespace-nowrap rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-teal-950 shadow-sm transition hover:bg-gold-400"
          >
            Donate Now
          </Link>
        </div>

        <button
          type="button"
          className={`grid h-10 w-10 shrink-0 place-items-center rounded-full xl:hidden ${overlay ? "text-cream-50" : "text-teal-900"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
        </button>
      </Container>

      {open ? (
        <>
          <button
            type="button"
            aria-label="Close menu"
            className="fixed inset-0 top-20 z-40 bg-teal-950/40 xl:hidden"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-x-0 top-full z-50 max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-teal-900/10 bg-cream-50 shadow-lg xl:hidden">
            <Container className="flex flex-col gap-1 py-4">
              {mainNav.map((item) => {
                if (item.href) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-700 hover:bg-teal-900/5"
                    >
                      {item.label}
                    </Link>
                  );
                }
                const expanded = mobileSection === item.label;
                return (
                  <div key={item.label}>
                    <button
                      type="button"
                      aria-expanded={expanded}
                      onClick={() => setMobileSection(expanded ? null : item.label)}
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-ink-700 hover:bg-teal-900/5"
                    >
                      {item.label}
                      <IconChevronDown
                        className={`h-4 w-4 transition ${expanded ? "rotate-180" : ""}`}
                      />
                    </button>
                    {expanded ? (
                      <div className="mb-2 ml-3 border-l-2 border-gold-500/40 pl-3">
                        {item.groups?.map((group, gi) => (
                          <div key={group.label ?? gi} className="py-1">
                            {group.label ? (
                              <p className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-widest text-gold-600">
                                {group.label}
                              </p>
                            ) : null}
                            {group.links.map((link) => (
                              <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="block rounded-lg px-3 py-2 text-sm text-ink-700 hover:bg-teal-900/5"
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              })}
              <Link
                href="/donation/"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-teal-950"
              >
                Donate Now
              </Link>
            </Container>
          </div>
        </>
      ) : null}
    </header>
  );
}
