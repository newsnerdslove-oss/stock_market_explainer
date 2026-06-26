// Positions analytics — replay a symbol's fill history (average-cost, matching the
// trading ledger) to reconstruct its lifecycle, then derive the brokerage-style
// metrics for the positions table (cost basis, market value, total/today gain-loss,
// % of account) and the per-symbol drill-down (avg-cost trajectory, realized P&L per
// close, holding period). Pure + deterministic — callers pass the live mark, prior
// close, account equity, and "now", so it's fully unit-testable. No UI, no storage.
//
// Note: a position's 52-week range and company name aren't derivable from fills —
// those come from a market-data fetch in a later phase.

import type { Order } from "@/lib/trading/schema";

export type TradeSide = "buy" | "sell";

/** One fill in a symbol's history. */
export interface Trade {
  symbol: string;
  side: TradeSide;
  /** Shares filled (> 0). Fractional allowed. */
  qty: number;
  /** Fill price per share. */
  price: number;
  /** ISO timestamp of the fill. */
  at: string;
}

export interface ReplayEvent extends Trade {
  /** Open quantity after this fill. */
  qtyAfter: number;
  /** Average cost of the open position after this fill (0 when flat). */
  avgCostAfter: number;
  /** Realized P&L booked by this fill (sells only; 0 for buys). */
  realizedDelta: number;
}

export interface Replay {
  events: ReplayEvent[];
  /** Open quantity at the end. */
  qty: number;
  /** Average cost of the open position (0 when flat). */
  avgCost: number;
  /** Cumulative realized P&L over the whole history. */
  realized: number;
  /** When the CURRENT open run was opened (last 0 → >0); null if flat. */
  openedAt: string | null;
}

const EPS = 1e-9;

/** Replay fills with average-cost accounting to reconstruct the position lifecycle. */
export function replayPosition(trades: Trade[]): Replay {
  const sorted = [...trades].sort((a, b) => a.at.localeCompare(b.at));
  let qty = 0;
  let avg = 0;
  let realized = 0;
  let openedAt: string | null = null;
  const events: ReplayEvent[] = [];

  for (const t of sorted) {
    let realizedDelta = 0;
    if (t.side === "buy") {
      if (qty <= EPS) openedAt = t.at; // opening a fresh run
      const newQty = qty + t.qty;
      avg = (qty * avg + t.qty * t.price) / newQty;
      qty = newQty;
    } else {
      const sellQty = Math.min(t.qty, qty); // can't sell more than held
      realizedDelta = (t.price - avg) * sellQty;
      realized += realizedDelta;
      qty -= sellQty;
      if (qty <= EPS) {
        qty = 0;
        avg = 0;
        openedAt = null;
      }
    }
    events.push({ ...t, qtyAfter: qty, avgCostAfter: avg, realizedDelta });
  }

  return { events, qty, avgCost: avg, realized, openedAt };
}

export interface MetricsInput {
  /** Live/last price per share. */
  mark: number;
  /** Prior session close, for today's gain/loss. */
  priorClose?: number;
  /** Total account equity, for % of account. */
  accountEquity?: number;
  /** Reference "now" for the holding period. */
  now?: Date;
}

export interface PositionMetrics {
  symbol: string;
  qty: number;
  avgCost: number;
  /** qty × avgCost. */
  costBasisTotal: number;
  /** qty × mark. */
  marketValue: number;
  /** Total gain/loss on the open position = marketValue − costBasisTotal (unrealized). */
  totalGainLoss: number;
  /** totalGainLoss / costBasisTotal (0 when flat). */
  totalGainLossPct: number;
  /** Cumulative realized P&L over the symbol's whole history. */
  realizedPnl: number;
  /** (mark − priorClose) × qty, when priorClose is given. */
  todayGainLoss?: number;
  todayGainLossPct?: number;
  /** marketValue / accountEquity, when accountEquity is given. */
  allocationPct?: number;
  openedAt: string | null;
  /** Whole days the current run has been open (vs `now`). */
  holdingDays?: number;
}

const MS_DAY = 86_400_000;

/** Brokerage-style metrics for one symbol from its fills + the live mark. */
export function positionMetrics(symbol: string, trades: Trade[], input: MetricsInput): PositionMetrics {
  const { qty, avgCost, realized, openedAt } = replayPosition(trades);
  const costBasisTotal = qty * avgCost;
  const marketValue = qty * input.mark;
  const totalGainLoss = marketValue - costBasisTotal;
  const totalGainLossPct = costBasisTotal > EPS ? totalGainLoss / costBasisTotal : 0;

  const m: PositionMetrics = {
    symbol,
    qty,
    avgCost,
    costBasisTotal,
    marketValue,
    totalGainLoss,
    totalGainLossPct,
    realizedPnl: realized,
    openedAt,
  };

  if (input.priorClose != null && input.priorClose > EPS) {
    m.todayGainLoss = (input.mark - input.priorClose) * qty;
    m.todayGainLossPct = (input.mark - input.priorClose) / input.priorClose;
  }
  if (input.accountEquity != null && input.accountEquity > EPS) {
    m.allocationPct = marketValue / input.accountEquity;
  }
  if (openedAt && input.now) {
    m.holdingDays = Math.max(0, Math.floor((input.now.getTime() - Date.parse(openedAt)) / MS_DAY));
  }

  return m;
}

export interface AvgCostPoint {
  at: string;
  avgCost: number;
  qty: number;
}

/** The average-cost (and size) of the position after each fill — for the drill-down. */
export function avgCostTrajectory(trades: Trade[]): AvgCostPoint[] {
  return replayPosition(trades).events.map((e) => ({ at: e.at, avgCost: e.avgCostAfter, qty: e.qtyAfter }));
}

export interface RealizedClose {
  at: string;
  qty: number;
  price: number;
  realized: number;
}

/** Each sell's realized P&L (the round-trip view) — for the drill-down. */
export function realizedCloses(trades: Trade[]): RealizedClose[] {
  return replayPosition(trades).events
    .filter((e) => e.side === "sell")
    .map((e) => ({ at: e.at, qty: e.qty, price: e.price, realized: e.realizedDelta }));
}

/**
 * Derive the per-symbol trade log from filled orders. Skips unfilled orders and
 * option orders (whose `symbol` is a contract label like "AAPL 300C 2026-07-17",
 * detected by the space) — this is the stock positions log.
 */
export function tradesFromOrders(orders: Order[]): Record<string, Trade[]> {
  const bySymbol: Record<string, Trade[]> = {};
  for (const o of orders) {
    if (o.status !== "filled" || o.filledPrice == null) continue;
    if (o.symbol.includes(" ")) continue; // option contract label, not a stock ticker
    (bySymbol[o.symbol] ??= []).push({ symbol: o.symbol, side: o.side, qty: o.qty, price: o.filledPrice, at: o.createdAt });
  }
  return bySymbol;
}

export interface SymbolClose extends RealizedClose {
  symbol: string;
}

/** Every closing sell across all symbols (round-trip outcomes), newest first. */
export function closesFromOrders(orders: Order[]): SymbolClose[] {
  const out: SymbolClose[] = [];
  for (const [symbol, trades] of Object.entries(tradesFromOrders(orders))) {
    for (const c of realizedCloses(trades)) out.push({ ...c, symbol });
  }
  return out.sort((a, b) => b.at.localeCompare(a.at));
}

export interface TradeStats {
  closes: number;
  wins: number;
  losses: number;
  winRate: number; // 0..1
  avgWin: number;
  avgLoss: number; // ≤ 0
  expectancy: number; // expected realized $ per close
  profitFactor: number; // gross win / gross loss
  totalRealized: number;
}

/** Win rate, expectancy, profit factor, etc. over a set of round-trip closes. */
export function tradeStats(closes: { realized: number }[]): TradeStats {
  const wins = closes.filter((c) => c.realized > 0);
  const losses = closes.filter((c) => c.realized < 0);
  const grossWin = wins.reduce((s, c) => s + c.realized, 0);
  const grossLoss = Math.abs(losses.reduce((s, c) => s + c.realized, 0));
  const n = closes.length;
  const total = grossWin - grossLoss;
  return {
    closes: n,
    wins: wins.length,
    losses: losses.length,
    winRate: n ? wins.length / n : 0,
    avgWin: wins.length ? grossWin / wins.length : 0,
    avgLoss: losses.length ? -grossLoss / losses.length : 0,
    expectancy: n ? total / n : 0,
    profitFactor: grossLoss > 0 ? grossWin / grossLoss : grossWin > 0 ? Infinity : 0,
    totalRealized: total,
  };
}
