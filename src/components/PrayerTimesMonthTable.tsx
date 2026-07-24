"use client";

import { useEffect, useState } from "react";
import { DayTimings, PRAYER_LABELS, fetchMonthCalendar } from "@/lib/prayerTimes";

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export function PrayerTimesMonthTable() {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth() + 1);
  const [days, setDays] = useState<DayTimings[] | null>(null);
  const [error, setError] = useState(false);
  const [loadedKey, setLoadedKey] = useState<string | null>(null);
  const requestKey = `${year}-${month}`;

  useEffect(() => {
    let cancelled = false;
    fetchMonthCalendar(year, month)
      .then((result) => {
        if (cancelled) return;
        setDays(result);
        setLoadedKey(`${year}-${month}`);
        setError(false);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });
    return () => {
      cancelled = true;
    };
  }, [year, month]);

  const loading = loadedKey !== requestKey && !error;

  function goPrev() {
    if (month === 1) {
      setMonth(12);
      setYear((y) => y - 1);
    } else {
      setMonth((m) => m - 1);
    }
  }

  function goNext() {
    if (month === 12) {
      setMonth(1);
      setYear((y) => y + 1);
    } else {
      setMonth((m) => m + 1);
    }
  }

  const isCurrentMonth =
    year === today.getFullYear() && month === today.getMonth() + 1;
  const todayDate = today.getDate();

  return (
    <div className="overflow-hidden rounded-2xl border border-teal-900/10 bg-white">
      <div className="flex items-center justify-between border-b border-teal-900/10 bg-cream-100 px-5 py-4">
        <button
          type="button"
          onClick={goPrev}
          className="rounded-full px-3 py-1.5 text-sm font-semibold text-teal-800 hover:bg-teal-900/10"
        >
          &larr; Prev
        </button>
        <h3 className="font-display text-lg font-bold text-teal-900">
          {MONTH_NAMES[month - 1]} {year}
        </h3>
        <button
          type="button"
          onClick={goNext}
          className="rounded-full px-3 py-1.5 text-sm font-semibold text-teal-800 hover:bg-teal-900/10"
        >
          Next &rarr;
        </button>
      </div>

      {error ? (
        <p className="p-6 text-sm text-ink-500">
          Unable to load the calendar right now. Please try again shortly.
        </p>
      ) : loading || !days ? (
        <div className="space-y-2 p-5">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-9 animate-pulse rounded bg-cream-100" />
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="text-left text-xs font-semibold uppercase tracking-wide text-ink-500">
                <th className="px-5 py-3">Date</th>
                {PRAYER_LABELS.map(({ key, label }) => (
                  <th key={key} className="px-3 py-3">
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {days.map((day) => {
                const dayNum = parseInt(day.readableDate.split(" ")[0], 10);
                const isToday = isCurrentMonth && dayNum === todayDate;
                return (
                  <tr
                    key={day.readableDate}
                    className={`border-t border-teal-900/5 ${
                      isToday ? "bg-gold-500/10" : ""
                    }`}
                  >
                    <td className="whitespace-nowrap px-5 py-2.5 font-medium text-ink-700">
                      {day.weekday.slice(0, 3)}, {day.readableDate}
                    </td>
                    {PRAYER_LABELS.map(({ key }) => (
                      <td key={key} className="px-3 py-2.5 text-ink-700">
                        {day.timings[key]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
