// Thin client for the Python market-service.
const BASE =
  process.env.NEXT_PUBLIC_MARKET_SERVICE_URL ?? "http://localhost:8000";

export type Quote = {
  symbol: string;
  price: number;
  bid: number;
  ask: number;
  timestamp: string;
  source: string;
};

export type Candle = {
  time: string; // ISO timestamp
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
};

export type Candles = {
  symbol: string;
  source: string;
  candles: Candle[];
};

export async function getQuote(symbol: string): Promise<Quote> {
  const res = await fetch(`${BASE}/quote/${encodeURIComponent(symbol)}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`market-service ${res.status}`);
  return res.json();
}

export async function getCandles(symbol: string, limit = 60): Promise<Candles> {
  const res = await fetch(
    `${BASE}/candles/${encodeURIComponent(symbol)}?limit=${limit}`,
    { cache: "no-store" },
  );
  if (!res.ok) throw new Error(`market-service ${res.status}`);
  return res.json();
}

/**
 * Same-origin candle fetch for client components (browser → Next route → market-
 * service), avoiding cross-origin CORS to the Python service.
 */
export async function getCandlesViaApi(symbol: string, limit = 60): Promise<Candles> {
  const res = await fetch(
    `/api/candles/${encodeURIComponent(symbol)}?limit=${limit}`,
    { cache: "no-store" },
  );
  if (!res.ok) throw new Error(`candles ${res.status}`);
  return res.json();
}

/**
 * Same-origin quote fetch for client components (browser → Next route → market-
 * service), avoiding cross-origin CORS to the Python service.
 */
export async function getQuoteViaApi(symbol: string): Promise<Quote> {
  const res = await fetch(`/api/quote/${encodeURIComponent(symbol)}`, { cache: "no-store" });
  if (!res.ok) throw new Error(`quote ${res.status}`);
  return res.json();
}

export async function getHealth(): Promise<{ status: string; provider: string }> {
  const res = await fetch(`${BASE}/health`, { cache: "no-store" });
  if (!res.ok) throw new Error(`market-service ${res.status}`);
  return res.json();
}
