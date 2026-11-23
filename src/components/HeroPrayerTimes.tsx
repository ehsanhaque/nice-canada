"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  DayTimings,
  PRAYER_LABELS,
  fetchTodayTimings,
  formatTime12h,
  getNextPrayer,
} from "@/lib/prayerTimes";
import { IconArrowRight } from "./icons";

// Compact, glassy prayer-times card designed to sit on top of the home hero image.
export function HeroPrayerTimes() {
  const [data, setData] = useState<DayTimings | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchTodayTimings()
      .then(setData)
      .catch(() => setError(true));
  }, []);

  const next = data ? getNextPrayer(data.timings) : null;

  return (
    <div className="rounded-2xl border border-white/15 bg-teal-950/55 p-6 shadow-2xl shadow-black/40 backdrop-blur-md sm:p-7">
      <h2 className="font-display text-xl font-bold text-cream-50">
        Today&apos;s Prayer Times
      </h2>
      <p className="mt-1 min-h-5 text-sm text-cream-100/75">
        {data ? (
          <>
            {data.weekday.slice(0, 3)}, {data.readableDate} &middot;{" "}
            {data.hijri.day} {data.hijri.month} {data.hijri.year}
          </>
        ) : null}
      </p>

      {error ? (
        <p className="mt-5 text-sm text-cream-100/80">
          Prayer times are temporarily unavailable. Please check back shortly.
        </p>
      ) : (
        <ul className="mt-4 divide-y divide-white/10">
          {PRAYER_LABELS.map(({ key, label }) => {
            const isNext = next?.name === label;
            const isSunrise = key === "Sunrise";
            return (
              <li
                key={key}
                className={`-mx-3 flex items-center justify-between rounded-lg px-3 py-2.5 ${
                  isNext ? "border-transparent bg-gold-500 text-teal-950" : ""
                }`}
              >
                <span
                  className={`font-medium ${
                    isNext
                      ? "font-semibold"
                      : isSunrise
                        ? "text-cream-100/60"
                        : "text-cream-50"
                  }`}
                >
                  {label}
                  {isNext ? (
                    <span className="ml-2 rounded-full bg-teal-950/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide">
                      Next
                    </span>
                  ) : null}
                </span>
                {data ? (
                  <span
                    className={`tabular-nums ${
                      isNext
                        ? "font-bold"
                        : isSunrise
                          ? "text-cream-100/60"
                          : "font-semibold text-cream-50"
                    }`}
                  >
                    {formatTime12h(data.timings[key])}
                  </span>
                ) : (
                  <span className="h-4 w-16 animate-pulse rounded bg-white/15" />
                )}
              </li>
            );
          })}
        </ul>
      )}

      <Link
        href="/daily-prayer-time/"
        className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-sm font-semibold text-cream-50 transition hover:bg-white/10"
      >
        View Full Schedule
        <IconArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
