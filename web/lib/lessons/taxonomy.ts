// Curriculum taxonomy: Track → Module → Lesson. The 100→400 ladder
// (docs/CURRICULUM_DEPTH.md) groups lessons into modules within parallel tracks.
//
// A lesson stores only its `moduleId` (its track is derived via moduleById),
// mirroring how a quiz question stores only its `lessonSlug`. `MODULES` is declared
// `as const` so `ModuleId` is a literal union — a typo'd moduleId in any content
// file fails typecheck, no runtime registry check needed.

export type TrackId = "markets" | "crypto";

export interface Track {
  id: TrackId;
  title: string;
  /** Display order across tracks. */
  order: number;
  description: string;
}

export const TRACKS = [
  {
    id: "markets",
    title: "Markets & Trading",
    order: 1,
    description: "Read a chart, understand a quote, place an order, and know what you own.",
  },
  {
    id: "crypto",
    title: "Crypto",
    order: 2,
    description: "How digital-asset markets work — coins, wallets, custody, and risk.",
  },
] as const satisfies readonly Track[];

interface ModuleDef {
  /** Globally unique, stable id (FK target for Lesson.moduleId). */
  id: string;
  trackId: TrackId;
  title: string;
  /** Order within the track. */
  order: number;
  /** Depth band (100/200/300/400), matching docs/CURRICULUM_DEPTH.md. */
  level: number;
  description: string;
}

// Full 100-level module set. Modules with no lessons yet are simply not rendered
// or gated (see moduleProgression) until content lands — so PR-by-PR authoring
// lights them up without touching this registry.
export const MODULES = [
  { id: "markets-basics", trackId: "markets", title: "Market basics", order: 1, level: 100, description: "What a market is, tickers, hours, participants, and brokers." },
  { id: "markets-reading-price", trackId: "markets", title: "Reading price", order: 2, level: 100, description: "Candles, timeframes, volume, trend, support/resistance, and gaps." },
  { id: "markets-quotes-orders", trackId: "markets", title: "Quotes & orders", order: 3, level: 100, description: "Spreads, order types, the order lifecycle, slippage, and liquidity." },
  { id: "markets-owning-position", trackId: "markets", title: "Owning a position", order: 4, level: 100, description: "P&L, cost basis, breakeven, long vs. short, and dividends." },
  { id: "markets-valuation", trackId: "markets", title: "Valuation intro", order: 5, level: 100, description: "P/E, EPS, market cap, what 'expensive' means, sectors and indices." },
  // 200-level: Mechanics & analysis.
  { id: "markets-technical", trackId: "markets", title: "Technical analysis", order: 6, level: 200, description: "Moving averages, RSI, MACD, volume, patterns, divergence, multi-timeframe." },
  { id: "markets-fundamental", trackId: "markets", title: "Fundamental analysis", order: 7, level: 200, description: "Financial statements, P/E depth, P/B & P/S, margins & ROE, growth vs. value." },
  { id: "markets-risk", trackId: "markets", title: "Risk management", order: 8, level: 200, description: "Position sizing, risk per trade, stops, risk/reward, drawdown, diversification." },
  { id: "crypto-100", trackId: "crypto", title: "Crypto basics", order: 1, level: 100, description: "Coins vs. tokens, exchanges vs. wallets, supply, volatility, and custody." },
] as const satisfies readonly ModuleDef[];

export type Module = (typeof MODULES)[number];
export type ModuleId = Module["id"];

export const moduleById = Object.fromEntries(MODULES.map((m) => [m.id, m])) as Record<ModuleId, Module>;
export const trackById = Object.fromEntries(TRACKS.map((t) => [t.id, t])) as Record<TrackId, Track>;
