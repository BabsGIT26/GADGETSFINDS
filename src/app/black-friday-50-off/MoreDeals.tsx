"use client";

import { useEffect, useState } from "react";

/** 11:59:59 p.m. Eastern on Cyber Monday, November 30, 2026. */
const END = Date.parse("2026-12-01T04:59:59Z");

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function remaining(now: number) {
  const seconds = Math.max(0, Math.floor((END - now) / 1000));
  return {
    d: Math.floor(seconds / 86400),
    h: Math.floor((seconds % 86400) / 3600),
    m: Math.floor((seconds % 3600) / 60),
    s: seconds % 60,
    done: seconds === 0,
  };
}

export function MoreDeals() {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);
  const time = now == null ? null : remaining(now);
  const cells: [string, string][] = time
    ? [
        ["Days", pad(time.d)],
        ["Hrs", pad(time.h)],
        ["Min", pad(time.m)],
        ["Sec", pad(time.s)],
      ]
    : [
        ["Days", "--"],
        ["Hrs", "--"],
        ["Min", "--"],
        ["Sec", "--"],
      ];

  return (
    <a
      href="https://link.amazon/B080y0dqv"
      rel="nofollow sponsored noopener noreferrer"
      className="mt-8 block overflow-hidden rounded-2xl bg-red-700 text-white shadow-[0_10px_28px_rgba(185,28,28,0.35)]"
    >
      <style>{`@keyframes deal-tick{0%{transform:scale(1.12)}100%{transform:scale(1)}}`}</style>
      <div className="flex flex-col gap-5 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-7">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-red-100">More Black Friday deals</p>
          <p className="mt-2 text-2xl font-bold leading-tight">Filtered to 50% off and above</p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-red-100">
            {time?.done
              ? "The timed window has closed. Amazon’s larger 50% off list is still open."
              : "Amazon’s larger list. The clock stops at the end of Cyber Monday."}
          </p>
        </div>
        {time?.done ? null : (
          <div className="flex gap-2" aria-label="Time left in the sale">
            {cells.map(([label, value]) => (
              <div key={label} className="w-14 rounded-lg bg-red-950/55 px-1 py-2 text-center">
                <p
                  key={label === "Sec" ? value : label}
                  className="text-2xl font-extrabold tabular-nums leading-none"
                  style={label === "Sec" && time ? { animation: "deal-tick 0.35s ease-out" } : undefined}
                >
                  {value}
                </p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-wide text-red-200">{label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex items-center justify-between bg-red-900 px-5 py-3 text-sm font-extrabold sm:px-7">
        <span className="inline-flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
          </span>
          Ending soon
        </span>
        <span className="rounded-full bg-white px-4 py-1.5 text-red-700">See the deals</span>
      </div>
    </a>
  );
}
