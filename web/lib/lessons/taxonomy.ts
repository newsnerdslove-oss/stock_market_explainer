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
  { id: "markets-structure", trackId: "markets", title: "Market structure", order: 9, level: 200, description: "Order book & depth, market makers, exchanges/ECNs/dark pools, clearing & settlement, extended hours, halts." },
  { id: "markets-derivatives", trackId: "markets", title: "Derivatives intro", order: 10, level: 200, description: "What a derivative is, calls & puts, option premium & leverage, futures." },
  // 300-level: Strategy & professional toolkit.
  { id: "markets-options", trackId: "markets", title: "Options strategies", order: 11, level: 300, description: "Greeks, covered calls, protective puts, spreads, straddles, iron condors — with payoff diagrams." },
  { id: "markets-margin", trackId: "markets", title: "Margin & leverage", order: 12, level: 300, description: "Margin accounts, Reg T, maintenance & calls, buying power, short selling, day-trading margin." },
  { id: "markets-styles", trackId: "markets", title: "Trading styles", order: 13, level: 300, description: "Day/swing/position trading, scalping, systematic vs discretionary, and trading psychology." },
  { id: "markets-fixed-income", trackId: "markets", title: "Fixed income & products", order: 14, level: 300, description: "Bonds, prices & yields, YTM, duration, credit ratings, the yield curve, and bond funds." },
  { id: "markets-portfolio", trackId: "markets", title: "Portfolio construction", order: 15, level: 300, description: "Asset allocation, diversification, MPT & the Sharpe ratio, rebalancing, and risk tolerance." },
  { id: "markets-backtesting", trackId: "markets", title: "Backtesting", order: 16, level: 300, description: "What backtesting is, overfitting, pitfalls (look-ahead/survivorship), and evaluating a backtest." },
  // 400-level: Mastery, regulation & the Series 7.
  { id: "markets-adv-options", trackId: "markets", title: "Advanced options", order: 17, level: 400, description: "Strategy matrix, exact spread math, butterflies/calendars, position limits, assignment, hedging, index options & LEAPS, exam-style problems." },
  { id: "markets-suitability", trackId: "markets", title: "Suitability & recommendations", order: 18, level: 400, description: "KYC (Rule 2090), customer profiles, Rule 2111 suitability, Reg BI, fiduciary vs Reg BI, Form CRS, recommendation scenarios, prohibited practices." },
  { id: "markets-margin-math", trackId: "markets", title: "Margin math (exam depth)", order: 19, level: 400, description: "Long & short margin account math, SMA, combined accounts, maintenance calls and the minimum-maintenance-price formulas." },
  { id: "crypto-100", trackId: "crypto", title: "Crypto basics", order: 1, level: 100, description: "Coins vs. tokens, exchanges vs. wallets, supply, volatility, and custody." },
  { id: "crypto-200", trackId: "crypto", title: "Crypto: wallets, DeFi & on-chain", order: 2, level: 200, description: "Hot/cold wallets, on-chain vs exchange price, stablecoins, gas, DEX vs CEX, staking, on-chain data." },
  { id: "crypto-300", trackId: "crypto", title: "Crypto: DeFi & derivatives", order: 3, level: 300, description: "DeFi lending, liquidity & impermanent loss, perpetual futures, leverage & liquidation, bridges, crypto risk." },
] as const satisfies readonly ModuleDef[];

export type Module = (typeof MODULES)[number];
export type ModuleId = Module["id"];

export const moduleById = Object.fromEntries(MODULES.map((m) => [m.id, m])) as Record<ModuleId, Module>;
export const trackById = Object.fromEntries(TRACKS.map((t) => [t.id, t])) as Record<TrackId, Track>;
