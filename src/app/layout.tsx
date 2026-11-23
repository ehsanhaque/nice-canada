import type { Metadata } from "next";
import { Playfair_Display, Inter, Amiri } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ScrollEffects } from "@/components/ScrollEffects";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "NICE | North-Valley Islamic Centre — Brampton, Ontario",
  description:
    "North-Valley Islamic Centre (NICE) is a not-for-profit Islamic centre serving Brampton and the surrounding community with daily prayers, education, youth programs, and outreach.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${inter.variable} ${amiri.variable} h-full antialiased`}
    >
      <head>
        {/* Runs before first paint so scroll-reveal content starts hidden
            (no flash) — skipped entirely for reduced-motion visitors. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('motion')",
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-cream-50 text-ink-900">
        <ScrollEffects />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
