// Options ledger — the accounting layer that makes options tradable in the paper
// simulator. Pure and deterministic, mirroring the stock ledger (lib/trading/
// ledger.ts): given a book + an order + a fill premium, it returns the next book.
//
// Phase 2 scope: LONG options (buy-to-open / sell-to-close) + expiry settlement.
// `qty` is modelled SIGNED (+long / −short) so short writing and spreads slot in
// next without reworking the data model — this phase only fills/ tests the long
// side. Equity multiplier is 100 (one contract controls 100 shares).
//
// Settlement is CASH to intrinsic value (a deliberate teaching simplification —
// real equity options deliver 100 shares on exercise/assignment). The lessons will
// call this out; share-delivery can come with the short/spread phase.

import type { OptionType } from "@/lib/options/blackScholes";

/** Shares controlled by one equity option contract. */
export const CONTRACT_MULTIPLIER = 100;

export interface OptionLeg {
  underlying: string; // e.g. "AAPL"
  type: OptionType; // call | put
  strike: number;
  /** Expiry as an ISO date (YYYY-MM-DD). */
  expiry: string;
  /** Contracts held — signed (+long / −short). */
  qty: number;
  /** Average premium paid (long) or received (short) per share (≥ 0). */
  avgPrice: number;
  /** Short legs only: collateral reserved per contract (long legs: 0/undefined). */
  marginPerContract?: number;
}

export interface OptionsBook {
  /** Shared cash balance (in an integrated portfolio this is the same cash). */
  cash: number;
  /** Cumulative realized P&L locked in on closes/expiry. */
  realized: number;
  /** Open legs, keyed by {@link contractKey}. */
  legs: Record<string, OptionLeg>;
}

export type OptionAction = "buy_to_open" | "sell_to_close" | "sell_to_open" | "buy_to_close";

export interface OptionOrder {
  underlying: string;
  type: OptionType;
  strike: number;
  expiry: string;
  action: OptionAction;
  /** Whole contracts, > 0. */
  contracts: number;
}

export interface OptionResult {
  status: "filled" | "rejected";
  reason?: string;
  /** Premium per share the order filled at. */
  premiumPerShare?: number;
  /** Signed cash impact: negative = debit (bought), positive = credit (sold). */
  cashFlow?: number;
  /** Realized P&L booked by this order (closes only). */
  realizedDelta?: number;
}

/** Stable identity for a contract — same underlying/type/strike/expiry ⇒ same leg. */
export function contractKey(c: Pick<OptionLeg, "underlying" | "type" | "strike" | "expiry">): string {
  return `${c.underlying}|${c.type}|${c.strike}|${c.expiry}`;
}

/** Total premium cash for `contracts` at `pricePerShare` (× the 100 multiplier). */
export function premiumCash(pricePerShare: number, contracts: number): number {
  return pricePerShare * CONTRACT_MULTIPLIER * contracts;
}

/** Total collateral reserved against short legs (a buying-power reduction). */
export function reservedMargin(book: OptionsBook): number {
  let m = 0;
  for (const leg of Object.values(book.legs)) {
    if (leg.qty < 0) m += (leg.marginPerContract ?? 0) * -leg.qty;
  }
  return m;
}

/** Cash not tied up as short-collateral — what's available to spend or reserve. */
export function buyingPower(book: OptionsBook): number {
  return book.cash - reservedMargin(book);
}

/** Intrinsic value per share at a given underlying price. */
export function intrinsicPerShare(type: OptionType, strike: number, underlying: number): number {
  return type === "call" ? Math.max(underlying - strike, 0) : Math.max(strike - underlying, 0);
}

/** Mark-to-market unrealized P&L for a leg at `markPerShare` (signed by qty). */
export function legUnrealized(leg: OptionLeg, markPerShare: number): number {
  return (markPerShare - leg.avgPrice) * CONTRACT_MULTIPLIER * leg.qty;
}

const isWholePositive = (n: number) => Number.isFinite(n) && n > 0 && Number.isInteger(n);

/**
 * Apply an option order to a book at a given fill premium. Returns a NEW book
 * (inputs untouched) and a result. Rejections leave the book unchanged.
 *
 * Opening a short (`sell_to_open`) reserves `marginPerContract` of collateral per
 * contract — the caller computes it (e.g. a cash-secured put reserves strike×100,
 * a short call reserves the underlying value). Buying power = cash − reserved.
 */
export function evaluateOptionOrder(
  book: OptionsBook,
  order: OptionOrder,
  fillPremium: number,
  marginPerContract = 0,
): { book: OptionsBook; result: OptionResult } {
  const unchanged = { book, result: { status: "rejected" } as OptionResult };
  const reject = (reason: string) => ({ ...unchanged, result: { status: "rejected" as const, reason } });

  if (!isWholePositive(order.contracts)) return reject("Contracts must be a whole number ≥ 1.");
  if (!Number.isFinite(fillPremium) || fillPremium < 0) return reject("Invalid fill premium.");

  const key = contractKey(order);
  const existing = book.legs[key];
  const cash = premiumCash(fillPremium, order.contracts);
  const avail = buyingPower(book);
  const meta = { underlying: order.underlying, type: order.type, strike: order.strike, expiry: order.expiry };

  switch (order.action) {
    case "buy_to_open": {
      if (existing && existing.qty < 0) return reject("You're short this contract — use buy to close.");
      if (cash > avail) return reject("Not enough buying power for the premium.");
      const prevQty = existing?.qty ?? 0;
      const prevAvg = existing?.avgPrice ?? 0;
      const newQty = prevQty + order.contracts;
      const newAvg = (prevQty * prevAvg + order.contracts * fillPremium) / newQty;
      const legs = { ...book.legs, [key]: { ...meta, qty: newQty, avgPrice: newAvg } };
      return { book: { ...book, cash: book.cash - cash, legs }, result: { status: "filled", premiumPerShare: fillPremium, cashFlow: -cash } };
    }

    case "sell_to_close": {
      if (!existing || existing.qty < order.contracts) return reject("You don't hold enough contracts to close.");
      const realizedDelta = (fillPremium - existing.avgPrice) * CONTRACT_MULTIPLIER * order.contracts;
      const remaining = existing.qty - order.contracts;
      const legs = { ...book.legs };
      if (remaining <= 1e-9) delete legs[key];
      else legs[key] = { ...existing, qty: remaining };
      return {
        book: { ...book, cash: book.cash + cash, realized: book.realized + realizedDelta, legs },
        result: { status: "filled", premiumPerShare: fillPremium, cashFlow: cash, realizedDelta },
      };
    }

    case "sell_to_open": {
      if (existing && existing.qty > 0) return reject("You're long this contract — use sell to close.");
      const margin = marginPerContract * order.contracts;
      if (margin > avail) return reject("Not enough buying power for the margin.");
      const prevAbs = existing ? -existing.qty : 0;
      const prevAvg = existing?.avgPrice ?? 0;
      const newAbs = prevAbs + order.contracts;
      const newAvg = (prevAbs * prevAvg + order.contracts * fillPremium) / newAbs;
      const legs = { ...book.legs, [key]: { ...meta, qty: -newAbs, avgPrice: newAvg, marginPerContract } };
      return { book: { ...book, cash: book.cash + cash, legs }, result: { status: "filled", premiumPerShare: fillPremium, cashFlow: cash } };
    }

    case "buy_to_close": {
      if (!existing || existing.qty >= 0 || -existing.qty < order.contracts) return reject("You're not short enough contracts to close.");
      if (cash > book.cash) return reject("Not enough cash to buy the contracts back.");
      const realizedDelta = (existing.avgPrice - fillPremium) * CONTRACT_MULTIPLIER * order.contracts;
      const remainingAbs = -existing.qty - order.contracts;
      const legs = { ...book.legs };
      if (remainingAbs <= 1e-9) delete legs[key];
      else legs[key] = { ...existing, qty: -remainingAbs };
      return {
        book: { ...book, cash: book.cash - cash, realized: book.realized + realizedDelta, legs },
        result: { status: "filled", premiumPerShare: fillPremium, cashFlow: -cash, realizedDelta },
      };
    }
  }
}

export interface Settlement {
  key: string;
  leg: OptionLeg;
  intrinsicPerShare: number;
  /** Cash received from cash-settlement (long ITM ⇒ positive). */
  cash: number;
  realizedDelta: number;
}

/**
 * Cash-settle every leg expiring on or before `asOfISO`, using each underlying's
 * price. ITM longs receive intrinsic × 100 × qty; OTM longs expire worthless (the
 * premium paid is realized as a loss). Legs with no provided underlying price are
 * left untouched. Returns a NEW book and the list of settlements.
 */
export function settleExpirations(
  book: OptionsBook,
  asOfISO: string,
  underlyingPrices: Record<string, number>,
): { book: OptionsBook; settled: Settlement[] } {
  const settled: Settlement[] = [];
  const legs = { ...book.legs };
  let cash = book.cash;
  let realized = book.realized;

  for (const [key, leg] of Object.entries(book.legs)) {
    if (leg.expiry > asOfISO) continue; // not yet expired
    const px = underlyingPrices[leg.underlying];
    if (px == null || !Number.isFinite(px)) continue; // can't settle without a price

    const intrinsic = intrinsicPerShare(leg.type, leg.strike, px);
    const settleCash = intrinsic * CONTRACT_MULTIPLIER * leg.qty;
    const realizedDelta = (intrinsic - leg.avgPrice) * CONTRACT_MULTIPLIER * leg.qty;
    cash += settleCash;
    realized += realizedDelta;
    delete legs[key];
    settled.push({ key, leg, intrinsicPerShare: intrinsic, cash: settleCash, realizedDelta });
  }

  if (settled.length === 0) return { book, settled };
  return { book: { ...book, cash, realized, legs }, settled };
}
