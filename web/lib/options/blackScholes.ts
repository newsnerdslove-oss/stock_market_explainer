// Black-Scholes option pricing + Greeks — the engine behind the options simulator.
//
// We price options ourselves from the live underlying price plus an implied-vol
// assumption, rather than pulling a (paid/delayed) options chain. That keeps the
// simulator self-contained AND pedagogically transparent: the premium isn't a
// mystery number — the lessons can show exactly why it moves (delta with the
// underlying, theta as expiry nears, vega with volatility).
//
// Conventions: prices in dollars per share (an equity contract controls 100
// shares — the ×100 multiplier lives in the ledger, not here). Time in YEARS.
// Rates/vols as decimals (0.04 = 4%, 0.30 = 30% annualized). European-style, no
// dividends — a deliberate teaching simplification (American early-exercise and a
// vol smile can come later without changing this interface).

export type OptionType = "call" | "put";

export interface Greeks {
  /** ∂price/∂underlying — shares-equivalent exposure, per share. */
  delta: number;
  /** ∂delta/∂underlying — how fast delta moves. */
  gamma: number;
  /** ∂price/∂time, per CALENDAR DAY (negative for a long option: it decays). */
  theta: number;
  /** ∂price per +1 percentage-point of implied vol. */
  vega: number;
  /** ∂price per +1 percentage-point of the risk-free rate. */
  rho: number;
}

export interface OptionQuote {
  price: number;
  greeks: Greeks;
}

/** Default risk-free rate when a caller doesn't supply one. */
export const DEFAULT_RISK_FREE = 0.04;
/** Default annualized implied vol for an equity underlying when none is supplied. */
export const DEFAULT_IV = 0.3;

const SQRT_2PI = Math.sqrt(2 * Math.PI);

/** Standard normal probability density. */
export function normPdf(x: number): number {
  return Math.exp(-0.5 * x * x) / SQRT_2PI;
}

/**
 * Standard normal CDF via a high-accuracy erf approximation (Abramowitz & Stegun
 * 7.1.26 — error < 1.5e-7), good enough for teaching-grade option prices.
 */
export function normCdf(x: number): number {
  const t = 1 / (1 + 0.2316419 * Math.abs(x));
  const d = normPdf(x);
  const p =
    d *
    t *
    (0.319381530 +
      t * (-0.356563782 + t * (1.781477937 + t * (-1.821255978 + t * 1.330274429))));
  return x >= 0 ? 1 - p : p;
}

/** Intrinsic value (per share) for a degenerate T/σ or at expiry. */
function intrinsic(type: OptionType, S: number, K: number): number {
  return type === "call" ? Math.max(S - K, 0) : Math.max(K - S, 0);
}

export interface PriceParams {
  type: OptionType;
  /** Underlying spot price. */
  spot: number;
  /** Strike. */
  strike: number;
  /** Time to expiry in YEARS (e.g. 30 days ≈ 30/365). */
  years: number;
  /** Annualized implied volatility (decimal). Defaults to {@link DEFAULT_IV}. */
  iv?: number;
  /** Risk-free rate (decimal). Defaults to {@link DEFAULT_RISK_FREE}. */
  rate?: number;
}

/**
 * Black-Scholes price + Greeks for a single European option. Degenerates safely:
 * at/after expiry (years ≤ 0) or zero vol, returns intrinsic value with delta the
 * only non-zero Greek.
 */
export function priceOption(p: PriceParams): OptionQuote {
  const { type, spot: S, strike: K } = p;
  const T = p.years;
  const sigma = p.iv ?? DEFAULT_IV;
  const r = p.rate ?? DEFAULT_RISK_FREE;

  // Degenerate cases — no diffusion left to price.
  if (T <= 0 || sigma <= 0 || S <= 0 || K <= 0) {
    const val = intrinsic(type, S, K);
    const itm = type === "call" ? S > K : S < K;
    return {
      price: val,
      greeks: { delta: itm ? (type === "call" ? 1 : -1) : 0, gamma: 0, theta: 0, vega: 0, rho: 0 },
    };
  }

  const sqrtT = Math.sqrt(T);
  const d1 = (Math.log(S / K) + (r + (sigma * sigma) / 2) * T) / (sigma * sqrtT);
  const d2 = d1 - sigma * sqrtT;
  const Nd1 = normCdf(d1);
  const Nd2 = normCdf(d2);
  const pdfD1 = normPdf(d1);
  const disc = Math.exp(-r * T); // present-value factor on the strike

  let price: number;
  let delta: number;
  let thetaPerYear: number;
  let rhoPerUnit: number; // per +1.00 of rate

  if (type === "call") {
    price = S * Nd1 - K * disc * Nd2;
    delta = Nd1;
    thetaPerYear = -(S * pdfD1 * sigma) / (2 * sqrtT) - r * K * disc * Nd2;
    rhoPerUnit = K * T * disc * Nd2;
  } else {
    price = K * disc * normCdf(-d2) - S * normCdf(-d1);
    delta = Nd1 - 1;
    thetaPerYear = -(S * pdfD1 * sigma) / (2 * sqrtT) + r * K * disc * normCdf(-d2);
    rhoPerUnit = -K * T * disc * normCdf(-d2);
  }

  const gamma = pdfD1 / (S * sigma * sqrtT);
  const vegaPerUnit = S * pdfD1 * sqrtT; // per +1.00 of vol

  return {
    price: Math.max(price, 0),
    greeks: {
      delta,
      gamma,
      theta: thetaPerYear / 365, // → per calendar day
      vega: vegaPerUnit / 100, // → per +1 vol POINT
      rho: rhoPerUnit / 100, // → per +1 rate POINT
    },
  };
}

/** Convenience: just the price. */
export function optionPrice(p: PriceParams): number {
  return priceOption(p).price;
}
