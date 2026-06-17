"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTrading } from "@/lib/trading/useTrading";
import { dailyChallenge } from "@/lib/challenge/daily";

// The challenge rotates by UTC calendar day. Computed on the client (after mount)
// so the date can't cause an SSR/hydration mismatch.
function useToday(): string | null {
  const [today, setToday] = useState<string | null>(null);
  useEffect(() => setToday(new Date().toISOString().slice(0, 10)), []);
  return today;
}

/**
 * Full challenge card for the simulator — reads the live portfolio and shows
 * whether today's challenge is done, auto-detected (no manual completion).
 * Must render inside the simulator's TradingProvider.
 */
export function DailyChallengeCard() {
  const { portfolio } = useTrading();
  const today = useToday();
  if (!today) return null;

  const ch = dailyChallenge(today);
  const done = ch.isDone(portfolio, today);

  return (
    <section className={`rounded-lg border p-4 ${done ? "border-up/40 bg-up/10" : "border-streak/30 bg-streak/5"}`}>
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-sm font-medium text-ink">
          Today&apos;s challenge: <span className="text-muted">{ch.title}</span>
        </h2>
        <span className={`shrink-0 font-mono text-xs ${done ? "text-up" : "text-streak"}`}>
          {done ? "✓ done" : "open"}
        </span>
      </div>
      <p className="mt-1.5 text-sm text-muted">{ch.prompt}</p>
    </section>
  );
}

/** Compact teaser for /today — the day's challenge title with a link to act on it. */
export function DailyChallengeTeaser() {
  const today = useToday();
  if (!today) return null;
  const ch = dailyChallenge(today);
  return (
    <p className="mt-6 text-sm text-muted">
      Today&apos;s simulator challenge: <span className="text-ink">{ch.title}</span> —{" "}
      <Link href="/simulator" className="text-learn transition hover:opacity-80">
        try it →
      </Link>
    </p>
  );
}
