// Options-chain generator. From a single live underlying price (plus an implied-
// vol assumption) we synthesize a realistic chain — a grid of strikes around the
// money × a set of expiries — pricing every call and put with Black-Scholes. This
// is what the simulator's chain picker renders; no paid options feed required.

import { priceOption, type OptionQuote, type OptionType } from "@/lib/options/blackScholes";

export type Moneyness = "ITM" | "ATM" | "OTM";

export interface ChainContract {
  type: OptionType;
  strike: number;
  /** Days to expiry (calendar). */
  days: number;
  quote: OptionQuote;
  moneyness: Moneyness;
}

export interface ChainRow {
  strike: number;
  call: ChainContract;
  put: ChainContract;
}

export interface ChainExpiry {
  days: number;
  /** Optional human label for the expiry (e.g. "Jul 18"). UI-supplied. */
  label?: string;
  rows: ChainRow[];
}

export interface ChainParams {
  spot: number;
  iv?: number;
  rate?: number;
  /** Strikes listed on each side of the at-the-money strike (default 6). */
  strikesEachSide?: number;
  /** Strike spacing in dollars; derived from the spot when omitted. */
  strikeStep?: number;
  /** Expiries to list, by days-to-expiry (e.g. [7, 30, 60]). */
  expiriesInDays: number[];
  /** Optional labels aligned with `expiriesInDays`. */
  expiryLabels?: string[];
}

/**
 * A sensible strike increment for a given price — roughly 2.5% of spot snapped to
 * a conventional ladder ($0.50 / $1 / $2.50 / $5 / $10 / $25 / $50 / $100).
 */
export function strikeIncrement(spot: number): number {
  const ladder = [0.5, 1, 2.5, 5, 10, 25, 50, 100, 250];
  const target = spot * 0.025;
  for (const step of ladder) if (step >= target) return step;
  return ladder[ladder.length - 1];
}

/** Round to the nearest multiple of `step`. */
function snap(value: number, step: number): number {
  return Math.round(value / step) * step;
}

function classify(type: OptionType, spot: number, strike: number, step: number): Moneyness {
  if (Math.abs(spot - strike) < step / 2) return "ATM";
  const itm = type === "call" ? spot > strike : spot < strike;
  return itm ? "ITM" : "OTM";
}

/**
 * Build a chain: for each expiry, a ladder of strikes centered on the at-the-money
 * strike, each with a Black-Scholes-priced call and put. Pure and deterministic
 * for given inputs (no wall-clock — callers pass days-to-expiry).
 */
export function generateChain(p: ChainParams): ChainExpiry[] {
  const step = p.strikeStep ?? strikeIncrement(p.spot);
  const side = p.strikesEachSide ?? 6;
  const atm = snap(p.spot, step);

  const strikes: number[] = [];
  for (let i = -side; i <= side; i++) {
    const k = atm + i * step;
    if (k > 0) strikes.push(Number(k.toFixed(2)));
  }

  return p.expiriesInDays.map((days, ei) => {
    const years = days / 365;
    const rows: ChainRow[] = strikes.map((strike) => {
      const base = { spot: p.spot, strike, years, iv: p.iv, rate: p.rate };
      const mk = (type: OptionType): ChainContract => ({
        type,
        strike,
        days,
        quote: priceOption({ ...base, type }),
        moneyness: classify(type, p.spot, strike, step),
      });
      return { strike, call: mk("call"), put: mk("put") };
    });
    return { days, label: p.expiryLabels?.[ei], rows };
  });
}
