"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { mainNav, site } from "@/lib/site";
import { IconClose, IconMenu } from "./icons";

const primaryNav = mainNav.filter((item) => item.href !== "/donation/");

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-teal-900/10 bg-cream-50/90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <Logo className="h-11 w-auto shrink-0" />
          <span className="leading-tight">
            <span className="block font-display text-xl font-bold text-teal-900">
              {site.name}
            </span>
            <span className="block whitespace-nowrap text-xs font-medium text-ink-500">
              {site.fullName}
            </span>
          </span>
        </Link>

        <nav className="hidden min-w-0 items-center gap-0.5 xl:flex">
          {primaryNav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-teal-800 text-cream-50"
                    : "text-ink-700 hover:bg-teal-900/5 hover:text-teal-800"
                }`}
              >
                {item.label}
              </Link>
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
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-teal-900 xl:hidden"
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
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-700 hover:bg-teal-900/5"
                >
                  {item.label}
                </Link>
              ))}
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
