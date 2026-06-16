// Paper-trading simulator types. The portfolio is per-user, persisted in Supabase
// (lib/trading/store.ts), and mutated by a deterministic local ledger
// (lib/trading/ledger.ts) that fills against the market-service quote feed.

export const STARTING_CASH = 100_000;

export type OrderSide = "buy" | "sell";
export type OrderType = "market" | "limit";
export type OrderStatus = "filled" | "pending" | "canceled" | "rejected";

export interface Position {
  symbol: string;
  qty: number;
  /** Average cost basis per share. */
  avgCost: number;
}

export interface Order {
  id: string;
  symbol: string;
  side: OrderSide;
  type: OrderType;
  qty: number;
  /** Required for limit orders; null for market. */
  limitPrice: number | null;
  status: OrderStatus;
  /** Price the order filled at, or null if not (yet) filled. */
  filledPrice: number | null;
  createdAt: string;
}

export interface Portfolio {
  userId: string | null;
  cash: number;
  /** Cumulative realized P&L locked in on sells. */
  realized: number;
  positions: Record<string, Position>; // keyed by symbol
  orders: Order[]; // most recent first
}

export function emptyPortfolio(): Portfolio {
  return { userId: null, cash: STARTING_CASH, realized: 0, positions: {}, orders: [] };
}
