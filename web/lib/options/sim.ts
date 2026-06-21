// Glue between the pricer and the simulator: standard expiries, days-to-expiry,
// the implied-vol assumption, and marking a contract to a live premium. Pure and
// deterministic — callers pass the reference date (no wall-clock here), so it's
// unit-testable and SSR-safe.

import { priceOption, DEFAULT_IV, type OptionType } from "@/lib/options/blackScholes";

export interface ExpiryChoice {
  /** ISO date (YYYY-MM-DD). */
  date: string;
  /** Whole days from the reference date. */
  days: number;
  /** Short display label, e.g. "Jul 18". */
  label: string;
}

const MS_DAY = 86_400_000;
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** Midnight-UTC for a Date's calendar day. */
function utcMidnight(d: Date): number {
  return Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
}

/** ISO date string for `from`'s calendar day + `days`. */
function isoDatePlus(from: Date, days: number): string {
  return new Date(utcMidnight(from) + days * MS_DAY).toISOString().slice(0, 10);
}

function labelFor(iso: string): string {
  const [, m, d] = iso.split("-").map(Number);
  return `${MONTHS[m - 1]} ${d}`;
}

/** Standard expiry horizons (in days) from a reference date. */
export function standardExpiries(from: Date, horizons: number[] = [7, 14, 30, 60, 90]): ExpiryChoice[] {
  return horizons.map((days) => {
    const date = isoDatePlus(from, days);
    return { date, days, label: labelFor(date) };
  });
}

/** Whole days from `now` to an ISO expiry date, clamped at 0 (never negative). */
export function daysToExpiry(expiryISO: string, now: Date): number {
  const [y, m, d] = expiryISO.split("-").map(Number);
  const exp = Date.UTC(y, m - 1, d);
  return Math.max(0, Math.round((exp - utcMidnight(now)) / MS_DAY));
}

/** Flat implied-vol assumption per underlying (a teaching simplification — no smile). */
export function assumedIV(_underlying: string): number {
  return DEFAULT_IV;
}

export interface MarkInput {
  underlying: string;
  type: OptionType;
  strike: number;
  expiry: string;
}

/** Mark an option to a premium-per-share from the live underlying spot and date. */
export function markPremium(opt: MarkInput, spot: number, now: Date): number {
  const years = daysToExpiry(opt.expiry, now) / 365;
  return priceOption({ type: opt.type, spot, strike: opt.strike, years, iv: assumedIV(opt.underlying) }).price;
}
