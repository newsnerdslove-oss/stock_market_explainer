import { http, HttpResponse } from "msw";

// Deterministic mock data for the market-service API routes, so data-driven
// components (the home ticker strips, etc.) render in Storybook with no backend.
// Reuse these handlers per-story via `parameters.msw.handlers`, or extend them.

function priceFor(symbol: string): number {
  let h = 0;
  for (const ch of symbol) h = (h * 31 + ch.charCodeAt(0)) % 1000;
  return 80 + (h % 320); // 80..399, stable per symbol
}

function candlesFor(symbol: string, limit: number) {
  const base = priceFor(symbol);
  const n = Math.max(2, Math.min(limit, 80));
  return Array.from({ length: n }, (_, i) => {
    const open = base + Math.sin(i / 5) * base * 0.04;
    const close = open + Math.cos(i / 4) * base * 0.015;
    const high = Math.max(open, close) + base * 0.01;
    const low = Math.min(open, close) - base * 0.01;
    return {
      time: new Date(Date.UTC(2026, 0, 1) + (i + 1) * 86_400_000).toISOString(),
      open,
      high,
      low,
      close,
      volume: 500_000 + i * 12_345,
    };
  });
}

export const handlers = [
  http.get("/api/quote/:symbol", ({ params }) => {
    const symbol = String(params.symbol).toUpperCase();
    const price = priceFor(symbol);
    return HttpResponse.json({
      symbol,
      price,
      bid: price - 0.05,
      ask: price + 0.05,
      timestamp: new Date(Date.UTC(2026, 5, 23, 20, 0)).toISOString(),
      source: "alpaca-iex",
    });
  }),
  http.get("/api/candles/:symbol", ({ params, request }) => {
    const symbol = String(params.symbol).toUpperCase();
    const limit = Number(new URL(request.url).searchParams.get("limit")) || 60;
    return HttpResponse.json({ symbol, source: "alpaca-iex", candles: candlesFor(symbol, limit) });
  }),
];
