// Pure paper-trading ledger. No I/O — takes a portfolio + a quote, returns the
// next portfolio + a fill result. Rules (teaching-simple but correct):
//   market buy  -> fill at ask    market sell -> fill at bid   (the spread is a real cost)
//   limit buy   -> fills when ask <= limit (at the limit)      limit sell -> when bid >= limit
//   all-or-none, cash-only (no shorting/margin), average-cost basis, realized P&L on sells.

import type { Quote } from "@/lib/marketService";
import type { OrderSide, OrderType, Portfolio } from "@/lib/trading/schema";

export interface OrderRequest {
  symbol: string;
  side: OrderSide;
  type: OrderType;
  qty: number;
  limitPrice: number | null;
  /** Placed during a chart replay session (filled at a replay bar, not live). */
  replay?: boolean;
}

export interface FillResult {
  status: "filled" | "pending" | "rejected";
  reason?: string;
  filledPrice?: number;
}

/** Price a market order fills at: buy at ask, sell at bid; fall back to last. */
export function fillPrice(side: OrderSide, quote: Quote): number {
  const p = side === "buy" ? quote.ask : quote.bid;
  return p && p > 0 ? p : quote.price;
}

/** Does a resting limit order cross at the current quote? */
export function limitCrosses(side: OrderSide, limit: number, quote: Quote): boolean {
  return side === "buy" ? quote.ask <= limit : quote.bid >= limit;
}

/**
 * Evaluate an order against a quote. Returns the resulting portfolio and a result.
 * A non-crossing limit order leaves the portfolio unchanged with status "pending".
 */
export function evaluateOrder(
  pf: Portfolio,
  req: OrderRequest,
  quote: Quote,
): { portfolio: Portfolio; result: FillResult } {
  if (!Number.isFinite(req.qty) || req.qty <= 0) {
    return { portfolio: pf, result: { status: "rejected", reason: "Quantity must be a positive number." } };
  }
  if (req.type === "limit" && (!req.limitPrice || req.limitPrice <= 0)) {
    return { portfolio: pf, result: { status: "rejected", reason: "Enter a limit price." } };
  }

  const crosses = req.type === "market" || limitCrosses(req.side, req.limitPrice as number, quote);
  if (!crosses) return { portfolio: pf, result: { status: "pending" } };

  // A crossing limit fills at the limit price; a market at bid/ask.
  const fp = req.type === "limit" ? (req.limitPrice as number) : fillPrice(req.side, quote);

  if (req.side === "buy") {
    const cost = req.qty * fp;
    if (cost > pf.cash) {
      return { portfolio: pf, result: { status: "rejected", reason: "Not enough buying power." } };
    }
    const existing = pf.positions[req.symbol];
    const newQty = (existing?.qty ?? 0) + req.qty;
    const newAvg = existing ? (existing.qty * existing.avgCost + req.qty * fp) / newQty : fp;
    return {
      portfolio: {
        ...pf,
        cash: pf.cash - cost,
        positions: { ...pf.positions, [req.symbol]: { symbol: req.symbol, qty: newQty, avgCost: newAvg } },
      },
      result: { status: "filled", filledPrice: fp },
    };
  }

  // sell
  const existing = pf.positions[req.symbol];
  if (!existing || existing.qty < req.qty) {
    return { portfolio: pf, result: { status: "rejected", reason: "Not enough shares to sell." } };
  }
  const proceeds = req.qty * fp;
  const realizedGain = (fp - existing.avgCost) * req.qty; // locked in on the sold shares
  const newQty = existing.qty - req.qty;
  const positions = { ...pf.positions };
  if (newQty <= 1e-9) delete positions[req.symbol];
  else positions[req.symbol] = { ...existing, qty: newQty }; // avg cost unchanged on a sell
  return {
    portfolio: { ...pf, cash: pf.cash + proceeds, realized: pf.realized + realizedGain, positions },
    result: { status: "filled", filledPrice: fp },
  };
}

export function unrealizedPnL(avgCost: number, price: number, qty: number): number {
  return (price - avgCost) * qty;
}

/** Total account value = cash + mark-to-market of all positions. `prices` maps symbol→last. */
export function equity(pf: Portfolio, prices: Record<string, number>): number {
  let v = pf.cash;
  for (const pos of Object.values(pf.positions)) {
    v += pos.qty * (prices[pos.symbol] ?? pos.avgCost);
  }
  return v;
}
