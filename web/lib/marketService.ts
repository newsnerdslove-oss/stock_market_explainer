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

export async function getQuote(symbol: string): Promise<Quote> {
  const res = await fetch(`${BASE}/quote/${encodeURIComponent(symbol)}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`market-service ${res.status}`);
  return res.json();
}

export async function getHealth(): Promise<{ status: string; provider: string }> {
  const res = await fetch(`${BASE}/health`, { cache: "no-store" });
  if (!res.ok) throw new Error(`market-service ${res.status}`);
  return res.json();
}
