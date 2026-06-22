// Coinbase public-REST adapters — real BTC/ETH quotes & candles, no API key.
// Server-side only (the routes call these); the browser never hits Coinbase
// directly, avoiding CORS. The pure mappers are unit-tested.

import type { Candle, Candles, Quote, Snapshot } from "@/lib/marketService";

const REST = "https://api.exchange.coinbase.com";

interface CoinbaseTicker {
  price: string;
  bid: string;
  ask: string;
  time: string;
}

/** Map a Coinbase ticker (string fields) to the app's Quote shape. */
export function mapTicker(symbol: string, t: CoinbaseTicker): Quote {
  return {
    symbol,
    price: Number(t.price),
    bid: Number(t.bid),
    ask: Number(t.ask),
    timestamp: t.time,
    source: "coinbase",
  };
}

/**
 * Map Coinbase candles to the app's Candles shape. Coinbase returns rows of
 * [time(unix s), low, high, open, close, volume], newest-first; we emit ISO time,
 * sorted ascending, and keep the most recent `limit`.
 */
export function mapCandles(symbol: string, rows: number[][], limit: number): Candles {
  const candles: Candle[] = rows
    .map((r) => ({
      time: new Date(r[0] * 1000).toISOString(),
      low: r[1],
      high: r[2],
      open: r[3],
      close: r[4],
      volume: r[5],
    }))
    .sort((a, b) => a.time.localeCompare(b.time))
    .slice(-limit);
  return { symbol, source: "coinbase", candles };
}

const HEADERS = { "User-Agent": "stock-market-explainer" };

export async function fetchCoinbaseQuote(symbol: string, product: string): Promise<Quote> {
  const res = await fetch(`${REST}/products/${product}/ticker`, { cache: "no-store", headers: HEADERS });
  if (!res.ok) throw new Error(`coinbase ${res.status}`);
  return mapTicker(symbol, (await res.json()) as CoinbaseTicker);
}

export async function fetchCoinbaseCandles(symbol: string, product: string, limit: number): Promise<Candles> {
  const res = await fetch(`${REST}/products/${product}/candles?granularity=60`, { cache: "no-store", headers: HEADERS });
  if (!res.ok) throw new Error(`coinbase ${res.status}`);
  return mapCandles(symbol, (await res.json()) as number[][], limit);
}

/**
 * Snapshot from DAILY candles (rows [time, low, high, open, close, vol], newest-
 * first): prior close (2nd-to-last) + the hi/lo over the window. Coinbase returns
 * up to ~300 daily buckets, so it's a ~300-day range (we still label it 52-week).
 */
export function mapCoinbaseSnapshot(symbol: string, rows: number[][]): Snapshot {
  const sorted = [...rows].sort((a, b) => a[0] - b[0]); // ascending by unix time
  const closes = sorted.map((r) => r[4]);
  const prevClose = closes.length >= 2 ? closes[closes.length - 2] : (closes[closes.length - 1] ?? 0);
  const high52 = sorted.length ? Math.max(...sorted.map((r) => r[2])) : prevClose;
  const low52 = sorted.length ? Math.min(...sorted.map((r) => r[1])) : prevClose;
  return { symbol, prevClose, high52, low52, source: "coinbase" };
}

export async function fetchCoinbaseSnapshot(symbol: string, product: string): Promise<Snapshot> {
  const res = await fetch(`${REST}/products/${product}/candles?granularity=86400`, { cache: "no-store", headers: HEADERS });
  if (!res.ok) throw new Error(`coinbase daily ${res.status}`);
  return mapCoinbaseSnapshot(symbol, (await res.json()) as number[][]);
}
