// Alpaca free-tier (IEX) stock data adapter — real-time quotes & 1-minute bars,
// no payment. Server-side only: the API key/secret live in env (never
// NEXT_PUBLIC), and the routes call these so the browser never sees them. Pure
// mappers are unit-tested.

import type { Candle, Candles, Quote, Snapshot, Timeframe } from "@/lib/marketService";

const DATA = "https://data.alpaca.markets/v2";

/** Map a chart timeframe to Alpaca's bar timeframe string. */
const ALPACA_TF: Record<Timeframe, string> = { "1m": "1Min", "5m": "5Min", "15m": "15Min", "1h": "1Hour", "1d": "1Day" };
export function alpacaTimeframe(tf: Timeframe): string {
  return ALPACA_TF[tf];
}

export function alpacaConfigured(): boolean {
  return Boolean(process.env.ALPACA_API_KEY_ID && process.env.ALPACA_API_SECRET_KEY);
}

function headers() {
  return {
    "APCA-API-KEY-ID": process.env.ALPACA_API_KEY_ID ?? "",
    "APCA-API-SECRET-KEY": process.env.ALPACA_API_SECRET_KEY ?? "",
  };
}

interface AlpacaTrade {
  p: number; // last trade price
  t: string; // ISO time
}
interface AlpacaQuoteRaw {
  ap: number; // ask price
  bp: number; // bid price
}
interface AlpacaBar {
  o: number;
  h: number;
  l: number;
  c: number;
  v: number;
  t: string; // ISO
}

// IEX is a single exchange; off-hours its quote can be implausibly wide. If the
// spread is missing or exceeds this fraction of the last trade, we price both
// sides at the last trade so paper fills stay sane (market hours use the real,
// tight spread — the intended teaching cost).
const MAX_SPREAD_FRACTION = 0.05;

/** Build a Quote from the last trade (price) and the latest quote (bid/ask). */
export function mapAlpacaQuote(symbol: string, trade: AlpacaTrade, quote: AlpacaQuoteRaw | null): Quote {
  const price = trade.p;
  let bid = quote?.bp ?? 0;
  let ask = quote?.ap ?? 0;
  const implausible = !bid || !ask || ask - bid > price * MAX_SPREAD_FRACTION;
  if (implausible) {
    bid = price;
    ask = price;
  }
  return { symbol, price, bid, ask, timestamp: trade.t, source: "alpaca-iex" };
}

/** Map Alpaca 1-minute bars (ascending) to the app's Candles. */
export function mapAlpacaBars(symbol: string, bars: AlpacaBar[], limit: number): Candles {
  const candles: Candle[] = bars
    .map((b) => ({ time: b.t, open: b.o, high: b.h, low: b.l, close: b.c, volume: b.v }))
    .sort((a, b) => a.time.localeCompare(b.time))
    .slice(-limit);
  return { symbol, source: "alpaca-iex", candles };
}

export async function fetchAlpacaQuote(symbol: string): Promise<Quote> {
  const sym = encodeURIComponent(symbol.toUpperCase());
  const [tradeRes, quoteRes] = await Promise.all([
    fetch(`${DATA}/stocks/${sym}/trades/latest?feed=iex`, { cache: "no-store", headers: headers() }),
    fetch(`${DATA}/stocks/${sym}/quotes/latest?feed=iex`, { cache: "no-store", headers: headers() }),
  ]);
  if (!tradeRes.ok) throw new Error(`alpaca trade ${tradeRes.status}`);
  const trade = (await tradeRes.json()).trade as AlpacaTrade;
  const quote = quoteRes.ok ? ((await quoteRes.json()).quote as AlpacaQuoteRaw) : null;
  return mapAlpacaQuote(symbol.toUpperCase(), trade, quote);
}

// Approx market bars per trading day, to size the lookback window per timeframe.
const BARS_PER_DAY: Record<Timeframe, number> = { "1m": 390, "5m": 78, "15m": 26, "1h": 7, "1d": 1 };

export async function fetchAlpacaCandles(symbol: string, limit: number, timeframe: Timeframe = "1m"): Promise<Candles> {
  const sym = encodeURIComponent(symbol.toUpperCase());
  const tf = alpacaTimeframe(timeframe);
  // Alpaca returns nothing without a `start`; with `start` + `sort=desc` + `limit`
  // it returns the most recent `limit` bars. Size the window to hold ≥ limit bars
  // (×1.5 for weekends) PLUS a 7-day buffer so it still reaches the last session
  // across a long market closure. mapAlpacaBars re-sorts ascending.
  const windowDays = Math.ceil((limit / BARS_PER_DAY[timeframe]) * 1.5) + 7;
  const start = new Date(Date.now() - windowDays * 86_400_000).toISOString().slice(0, 10);
  const res = await fetch(`${DATA}/stocks/${sym}/bars?timeframe=${tf}&start=${start}&limit=${limit}&sort=desc&feed=iex`, {
    cache: "no-store",
    headers: headers(),
  });
  if (!res.ok) throw new Error(`alpaca bars ${res.status}`);
  const bars = ((await res.json()).bars ?? []) as AlpacaBar[];
  return mapAlpacaBars(symbol.toUpperCase(), bars, limit);
}

/** Snapshot from a year of DAILY bars: prior close (2nd-to-last) + 52-week hi/lo. */
export function mapAlpacaSnapshot(symbol: string, bars: AlpacaBar[]): Snapshot {
  const sorted = [...bars].sort((a, b) => a.t.localeCompare(b.t));
  const closes = sorted.map((b) => b.c);
  // Last daily bar is today's (possibly in-progress); prior close is the one before.
  const prevClose = closes.length >= 2 ? closes[closes.length - 2] : (closes[closes.length - 1] ?? 0);
  const high52 = sorted.length ? Math.max(...sorted.map((b) => b.h)) : prevClose;
  const low52 = sorted.length ? Math.min(...sorted.map((b) => b.l)) : prevClose;
  return { symbol, prevClose, high52, low52, source: "alpaca-iex" };
}

export async function fetchAlpacaSnapshot(symbol: string): Promise<Snapshot> {
  const sym = encodeURIComponent(symbol.toUpperCase());
  // Alpaca returns bars:null for a daily timeframe without an explicit start, so
  // anchor ~1 year back (370 days ⇒ ≥252 trading days).
  const start = new Date(Date.now() - 370 * 86_400_000).toISOString().slice(0, 10);
  const res = await fetch(`${DATA}/stocks/${sym}/bars?timeframe=1Day&start=${start}&limit=400&feed=iex`, {
    cache: "no-store",
    headers: headers(),
  });
  if (!res.ok) throw new Error(`alpaca daily bars ${res.status}`);
  const bars = ((await res.json()).bars ?? []) as AlpacaBar[];
  return mapAlpacaSnapshot(symbol.toUpperCase(), bars);
}
