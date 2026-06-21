// Pure payoff math for multi-leg option strategies — the single source of truth
// for both the PayoffDiagram (the curve) and the Strategy Builder (the summary
// stats). P/L is at EXPIRATION. Option legs use the ×100 contract multiplier;
// stock legs use `premium` as the entry price.

import type { PayoffLeg } from "@/lib/lessons/types";

const OPT_MULT = 100;

/** P/L of one leg at an underlying price `s`, at expiration. */
export function legPayoff(leg: PayoffLeg, s: number): number {
  const qty = leg.qty ?? 1;
  const prem = leg.premium ?? 0;
  if (leg.instrument === "stock") {
    return (leg.side === "long" ? s - prem : prem - s) * qty;
  }
  const strike = leg.strike ?? 0;
  const intrinsic = leg.instrument === "call" ? Math.max(0, s - strike) : Math.max(0, strike - s);
  const per = leg.side === "long" ? intrinsic - prem : prem - intrinsic;
  return per * qty * OPT_MULT;
}

/** Total P/L of a position at `s`. */
export function totalPayoff(legs: PayoffLeg[], s: number): number {
  return legs.reduce((sum, l) => sum + legPayoff(l, s), 0);
}

/** Net opening cash flow: negative = net debit (you pay), positive = net credit. */
export function netPremium(legs: PayoffLeg[]): number {
  let net = 0;
  for (const leg of legs) {
    const qty = leg.qty ?? 1;
    const prem = leg.premium ?? 0;
    const mult = leg.instrument === "stock" ? 1 : OPT_MULT;
    net += (leg.side === "long" ? -prem : prem) * qty * mult;
  }
  return net;
}

export interface StrategyStats {
  /** Signed opening cash flow (negative = debit). */
  netPremium: number;
  /** Max profit ($), or Infinity when unbounded. */
  maxProfit: number;
  /** Max loss ($, negative), or -Infinity when unbounded. */
  maxLoss: number;
  /** Underlying prices where P/L crosses $0. */
  breakevens: number[];
}

/**
 * Summary stats for a strategy. Bounded extremes come from sampling the payoff
 * across a range derived from the strikes; unbounded directions are detected from
 * the asymptotic slope beyond the outermost strikes (so a long call reads
 * +Infinity, not a sampled number).
 */
export function strategyStats(legs: PayoffLeg[]): StrategyStats {
  const keys = legs
    .map((l) => (l.instrument === "stock" ? l.premium ?? 0 : l.strike ?? 0))
    .filter((k) => k > 0);
  const maxK = keys.length ? Math.max(...keys) : 100;
  // The underlying has a floor at 0 (so the downside is always bounded — sample
  // from 0); only the upside (S → ∞) can be unbounded.
  const lo = 0;
  const hi = maxK + Math.max(maxK * 0.5, 10);

  // Asymptotic $/$ slope above the highest strike (only calls + stock matter there).
  let slopeAbove = 0;
  for (const leg of legs) {
    const qty = leg.qty ?? 1;
    const dir = leg.side === "long" ? 1 : -1;
    if (leg.instrument === "call") slopeAbove += dir * qty * OPT_MULT;
    else if (leg.instrument === "stock") slopeAbove += dir * qty;
  }
  const EPS = 1e-9;
  const unboundedProfit = slopeAbove > EPS;
  const unboundedLoss = slopeAbove < -EPS;

  // Sample for bounded extremes + breakevens.
  const N = 400;
  let sMax = -Infinity;
  let sMin = Infinity;
  const breakevens: number[] = [];
  let prev: { x: number; y: number } | null = null;
  for (let i = 0; i <= N; i++) {
    const x = lo + ((hi - lo) * i) / N;
    const y = totalPayoff(legs, x);
    sMax = Math.max(sMax, y);
    sMin = Math.min(sMin, y);
    if (prev && ((prev.y < 0 && y >= 0) || (prev.y > 0 && y <= 0)) && y !== prev.y) {
      const t = -prev.y / (y - prev.y);
      breakevens.push(Math.round((prev.x + (x - prev.x) * t) * 100) / 100);
    }
    prev = { x, y };
  }

  return {
    netPremium: netPremium(legs),
    maxProfit: unboundedProfit ? Infinity : Math.round(sMax),
    maxLoss: unboundedLoss ? -Infinity : Math.round(sMin),
    breakevens: [...new Set(breakevens)],
  };
}
