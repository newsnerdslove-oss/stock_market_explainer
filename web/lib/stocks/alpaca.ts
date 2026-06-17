// Alpaca free-tier (IEX) stock data adapter — real-time quotes & 1-minute bars,
// no payment. Server-side only: the API key/secret live in env (never
// NEXT_PUBLIC), and the routes call these so the browser never sees them. Pure
// mappers are unit-tested.

import type { Candle, Candles, Quote } from "@/lib/marketService";

const DATA = "https://data.alpaca.markets/v2";

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

export async function fetchAlpacaCandles(symbol: string, limit: number): Promise<Candles> {
  const sym = encodeURIComponent(symbol.toUpperCase());
  const res = await fetch(`${DATA}/stocks/${sym}/bars?timeframe=1Min&limit=${limit}&feed=iex`, {
    cache: "no-store",
    headers: headers(),
  });
  if (!res.ok) throw new Error(`alpaca bars ${res.status}`);
  const bars = ((await res.json()).bars ?? []) as AlpacaBar[];
  return mapAlpacaBars(symbol.toUpperCase(), bars, limit);
}
