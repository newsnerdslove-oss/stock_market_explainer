// Sampling helpers for the Greeks Lab — the theoretical value curve (Black-Scholes
// price across a range of underlying prices) and the intrinsic line. Pure, so the
// chart is just a renderer over deterministic data.

import { priceOption, type OptionType } from "@/lib/options/blackScholes";

export interface CurvePoint {
  spot: number;
  /** Black-Scholes value at this spot (today, with time left). */
  value: number;
  /** Intrinsic value at this spot (value at expiry). */
  intrinsic: number;
}

export interface CurveParams {
  type: OptionType;
  strike: number;
  years: number;
  iv: number;
  rate?: number;
}

function intrinsic(type: OptionType, spot: number, strike: number): number {
  return type === "call" ? Math.max(spot - strike, 0) : Math.max(strike - spot, 0);
}

/**
 * Sample the option's Black-Scholes value and its intrinsic value at `steps`+1
 * evenly-spaced underlying prices across [from, to].
 */
export function optionValueCurve(p: CurveParams, from: number, to: number, steps = 60): CurvePoint[] {
  const out: CurvePoint[] = [];
  const span = to - from;
  for (let i = 0; i <= steps; i++) {
    const spot = from + (span * i) / steps;
    const value = priceOption({ type: p.type, spot, strike: p.strike, years: p.years, iv: p.iv, rate: p.rate }).price;
    out.push({ spot, value, intrinsic: intrinsic(p.type, spot, p.strike) });
  }
  return out;
}

/** Time value = model value − intrinsic (the premium you pay for optionality). */
export function timeValue(p: CurveParams, spot: number): number {
  const value = priceOption({ type: p.type, spot, strike: p.strike, years: p.years, iv: p.iv, rate: p.rate }).price;
  return value - intrinsic(p.type, spot, p.strike);
}
