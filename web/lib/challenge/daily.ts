// Daily simulator challenge — the third leg of the daily-training loop alongside
// a micro-lesson and the spaced-repetition review (see docs/ROADMAP.md). One
// challenge is surfaced per calendar day (deterministically), and completion is
// auto-detected from the paper-trading portfolio — no manual "mark done."

import type { Portfolio } from "@/lib/trading/schema";

export interface DailyChallenge {
  id: string;
  /** Short label (used in the /today teaser). */
  title: string;
  /** The instruction shown in the simulator card. */
  prompt: string;
  /** True once the portfolio shows it was completed. `today` is a YYYY-MM-DD (UTC) day. */
  isDone: (portfolio: Portfolio, today: string) => boolean;
}

/** Orders created on `today` (compared on the UTC calendar day of createdAt). */
function ordersToday(p: Portfolio, today: string) {
  return p.orders.filter((o) => o.createdAt.slice(0, 10) === today);
}

// Curated so each is checkable against the portfolio and teaches one habit.
export const CHALLENGES: DailyChallenge[] = [
  {
    id: "place-order",
    title: "Place a trade",
    prompt: "Place any order in the simulator today.",
    isDone: (p, t) => ordersToday(p, t).length > 0,
  },
  {
    id: "limit-order",
    title: "Use a limit order",
    prompt: "Place a limit order today — name your own price instead of taking the market.",
    isDone: (p, t) => ordersToday(p, t).some((o) => o.type === "limit"),
  },
  {
    id: "buy-5",
    title: "Buy 5+ shares",
    prompt: "Buy at least 5 shares of any stock today.",
    isDone: (p, t) => ordersToday(p, t).some((o) => o.side === "buy" && o.status === "filled" && o.qty >= 5),
  },
  {
    id: "sell-order",
    title: "Sell a position",
    prompt: "Place a sell order today (you'll need a position to sell first).",
    isDone: (p, t) => ordersToday(p, t).some((o) => o.side === "sell"),
  },
  {
    id: "two-symbols",
    title: "Trade two symbols",
    prompt: "Trade two different symbols today to practice diversifying.",
    isDone: (p, t) => new Set(ordersToday(p, t).map((o) => o.symbol)).size >= 2,
  },
  {
    id: "limit-buy-rest",
    title: "Bid below the market",
    prompt: "Place a limit buy below the current price and let it rest until it fills.",
    isDone: (p, t) => ordersToday(p, t).some((o) => o.type === "limit" && o.side === "buy"),
  },
  {
    id: "hold-position",
    title: "End the day invested",
    prompt: "Finish today holding at least one open position.",
    isDone: (p) => Object.keys(p.positions).length > 0,
  },
];

/** Pick the challenge for a given YYYY-MM-DD — stable for the whole day. */
export function dailyChallenge(dateStr: string): DailyChallenge {
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) hash = (hash * 31 + dateStr.charCodeAt(i)) >>> 0;
  return CHALLENGES[hash % CHALLENGES.length];
}
