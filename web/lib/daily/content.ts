// Daily content selection — the chart-of-the-day and question-of-the-day, chosen
// deterministically from a calendar date (YYYY-MM-DD) so every learner sees the same
// pair on the same day. The chart reuses the seeded pattern generator; the QOTD is a
// curated bank. Same date → same content, forever (pure, no wall-clock).
import { generatePattern, type PatternId } from "@/lib/charts/generate";
import type { OHLC } from "@/lib/charts/patterns";

export interface Qotd {
  q: string;
  options: string[];
  /** Index into options. */
  correct: number;
  explain: string;
}

interface ChartMeta {
  pattern: PatternId;
  title: string;
  prompt: string;
}

const QOTD_BANK: Qotd[] = [
  {
    q: "A long lower wick after a downtrend usually signals…",
    correct: 1,
    options: ["Sellers are still firmly in control", "Buyers stepped in to defend the low", "The market is closed for the day"],
    explain: "A long lower wick (a hammer) means buyers absorbed the selling and pushed price back up off the lows.",
  },
  {
    q: "What does a limit order let you do that a market order doesn't?",
    correct: 0,
    options: ["Name the exact price you'll accept", "Guarantee an instant fill", "Avoid all fees"],
    explain: "A limit order only fills at your price or better — you trade certainty of price for certainty of execution.",
  },
  {
    q: "A bullish engulfing candle is one that…",
    correct: 2,
    options: ["Has no real body", "Gaps far above the prior close", "Fully covers the prior candle's body and closes higher"],
    explain: "The up candle's body engulfs the prior down candle's — a sign buyers have taken over.",
  },
  {
    q: "Higher volatility means a stock's price…",
    correct: 1,
    options: ["Always trends upward", "Swings more sharply over time", "Is guaranteed to fall"],
    explain: "Volatility measures the size of price swings — not their direction.",
  },
  {
    q: "Why do traders watch the 50-day moving average?",
    correct: 0,
    options: ["To smooth out noise and gauge the trend", "Because it predicts earnings", "To set their stop exactly"],
    explain: "A moving average smooths day-to-day noise so the underlying trend is easier to read.",
  },
  {
    q: "A doji candle (open ≈ close) most often reflects…",
    correct: 2,
    options: ["A strong breakout", "A guaranteed reversal", "Indecision between buyers and sellers"],
    explain: "When open and close are nearly equal, neither side won the session — it signals indecision.",
  },
  {
    q: "Diversification mainly helps a portfolio by…",
    correct: 1,
    options: ["Maximizing returns", "Spreading risk across many holdings", "Eliminating all losses"],
    explain: "Holding many uncorrelated positions means one bad name hurts less — it reduces, not removes, risk.",
  },
  {
    q: "A shooting star after an uptrend warns that…",
    correct: 0,
    options: ["Buyers pushed up but sellers slammed it back down", "The trend will definitely continue", "Volume has dried up"],
    explain: "The long upper wick shows buyers lost control intraday — a possible top.",
  },
];

const CHART_BANK: ChartMeta[] = [
  { pattern: "hammer", title: "Spot the hammer", prompt: "One candle in today's chart marks a reversal. Find it to earn double XP and keep your streak alive." },
  { pattern: "shooting-star", title: "Find the shooting star", prompt: "A reversal candle is hiding near the top of today's chart. Can you spot where buyers lost control?" },
  { pattern: "bullish-engulfing", title: "Find the bullish engulfing", prompt: "One candle swallows the prior one and flips the trend. Spot the moment buyers took over." },
  { pattern: "bearish-engulfing", title: "Spot the bearish engulfing", prompt: "A big red candle engulfs the prior green one. Find the turn before it runs." },
  { pattern: "doji", title: "Find the doji", prompt: "Indecision shows up as a doji — open and close almost equal. Locate it in today's chart." },
];

function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

/** The question of the day for a YYYY-MM-DD date — stable for the whole day. */
export function qotdFor(date: string): Qotd {
  return QOTD_BANK[hash(`q:${date}`) % QOTD_BANK.length];
}

export interface ChartOfDay {
  meta: ChartMeta;
  candles: OHLC[];
  /** Index of the candle that completes the pattern. */
  signalIndex: number;
}

/** The chart of the day for a YYYY-MM-DD date — a seeded pattern, stable for the day. */
export function chartOfDayFor(date: string): ChartOfDay {
  const meta = CHART_BANK[hash(`c:${date}`) % CHART_BANK.length];
  const g = generatePattern(meta.pattern, hash(`s:${date}`));
  return { meta, candles: g.candles, signalIndex: g.signalIndex };
}
