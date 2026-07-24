"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  DayTimings,
  PRAYER_LABELS,
  fetchTodayTimings,
  getNextPrayer,
} from "@/lib/prayerTimes";
import { site } from "@/lib/site";

export function PrayerTimesWidget() {
  const [data, setData] = useState<DayTimings | null>(null);
  const [error, setError] = useState(false);
  const [now, setNow] = useState<Date | null>(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 30_000);
    fetchTodayTimings()
      .then(setData)
      .catch(() => setError(true));
    return () => clearInterval(timer);
  }, []);

  const next = data ? getNextPrayer(data.timings) : null;

  return (
    <div className="rounded-3xl border-2 border-gold-500/70 bg-gradient-to-br from-teal-800 to-teal-900 p-6 sm:p-8 shadow-2xl shadow-teal-950/50 ring-1 ring-white/5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-display text-xl font-bold text-cream-50">
          Today&apos;s Prayer Times
        </h3>
        <span className="text-xs font-medium text-gold-300">
          {site.city}, {site.province}
        </span>
      </div>

      {error ? (
        <p className="mt-6 text-sm text-cream-100/70">
          Prayer times are temporarily unavailable. Please check back
          shortly, or visit the{" "}
          <Link href="/daily-prayer-time/" className="underline text-gold-300">
            prayer times page
          </Link>
          .
        </p>
      ) : !data ? (
        <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-16 animate-pulse rounded-xl bg-cream-50/10"
            />
          ))}
        </div>
      ) : (
        <>
          <p className="mt-1 text-sm text-cream-100/60">
            {data.weekday}, {data.readableDate} &middot; {data.hijri.day}{" "}
            {data.hijri.month} {data.hijri.year} AH
          </p>

          <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-6">
            {PRAYER_LABELS.map(({ key, label }) => {
              const isNext = next?.name === label;
              return (
                <div
                  key={key}
                  className={`rounded-xl px-2 py-3 text-center ${
                    isNext
                      ? "bg-gold-500 text-teal-950 shadow-lg shadow-gold-500/30"
                      : "bg-teal-950/50 text-cream-50 ring-1 ring-white/5"
                  }`}
                >
                  <p
                    className={`text-[11px] font-semibold uppercase tracking-wide ${
                      isNext ? "text-teal-900" : "text-gold-300"
                    }`}
                  >
                    {label}
                  </p>
                  <p className="mt-1 font-display text-base font-bold sm:text-lg">
                    {data.timings[key]}
                  </p>
                </div>
              );
            })}
          </div>

          {next && now ? (
            <p className="mt-5 text-sm text-cream-100/80">
              Next: <span className="font-semibold text-gold-300">{next.name}</span>{" "}
              at {next.time}
            </p>
          ) : null}
        </>
      )}
    </div>
  );
}
