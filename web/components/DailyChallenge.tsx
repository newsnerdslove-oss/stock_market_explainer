"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useTrading } from "@/lib/trading/useTrading";
import { useProgress } from "@/lib/progress/useProgress";
import { useToast } from "@/components/Toast";
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
  const { markActiveToday } = useProgress();
  const toast = useToast();
  const today = useToday();

  const ch = today ? dailyChallenge(today) : null;
  const done = ch ? ch.isDone(portfolio, today!) : false;

  // Completing the challenge counts as training today (advances the streak, like
  // finishing a quiz). markActiveToday is idempotent. `wasDone` starts null so an
  // already-done-on-mount challenge still credits the streak but doesn't toast;
  // only an in-session open→done transition celebrates.
  const wasDone = useRef<boolean | null>(null);
  useEffect(() => {
    if (!today) return;
    if (done) markActiveToday();
    if (wasDone.current === false && done) {
      toast("Challenge complete — counted toward your streak 🔥", "ok");
    }
    wasDone.current = done;
  }, [done, today, markActiveToday, toast]);

  if (!today || !ch) return null;

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
      {done && <p className="mt-1.5 text-xs text-up">Counted toward today&apos;s streak.</p>}
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
