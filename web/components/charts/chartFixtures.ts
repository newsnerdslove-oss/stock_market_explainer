// Shared Storybook fixtures for the live, data-fetching chart components
// (ResearchChart, LiveCandleChart). Not a story or a component — just helpers the
// stories import to render these charts in isolation: deterministic candles, a
// fetch-patch that serves the /api/* routes from those fixtures (works in Storybook
// and in a backend-less preview, where MSW is inert), and a localStorage seeder.

export const BASE_MS = Date.UTC(2026, 5, 1, 14, 0, 0);
const STEP = 60_000;

/** Epoch seconds for the i-th fixture bar — for placing drawings on the time axis. */
export const tAt = (i: number) => Math.floor((BASE_MS + i * STEP) / 1000);

export interface FixtureCandle {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export function genCandles(n: number): FixtureCandle[] {
  const out: FixtureCandle[] = [];
  for (let i = 0; i < n; i++) {
    const open = 150 + Math.sin(i / 12) * 6 + Math.sin(i / 40) * 4 + i * 0.01;
    const close = open + Math.cos(i / 7) * 1.2;
    out.push({
      time: new Date(BASE_MS + i * STEP).toISOString(),
      open,
      high: Math.max(open, close) + 0.8,
      low: Math.min(open, close) - 0.8,
      close,
      volume: 10_000 + (i % 20) * 500,
    });
  }
  return out;
}

let patched = false;
/** Patch window.fetch to serve /api/candles|quote|snapshot from fixtures. Idempotent. */
export function patchFetch() {
  if (patched || typeof window === "undefined") return;
  patched = true;
  const real = window.fetch.bind(window);
  window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = typeof input === "string" ? input : input instanceof URL ? input.href : input.url;
    const json = (body: unknown) => new Response(JSON.stringify(body), { headers: { "content-type": "application/json" } });
    if (url.includes("/api/candles/")) {
      const sym = decodeURIComponent(url.split("/api/candles/")[1].split("?")[0]);
      const limit = Number(new URL(url, location.origin).searchParams.get("limit")) || 200;
      return json({ symbol: sym, source: "mock", candles: genCandles(limit) });
    }
    if (url.includes("/api/quote/")) {
      const sym = decodeURIComponent(url.split("/api/quote/")[1].split("?")[0]);
      return json({ symbol: sym, price: 153.4, bid: 153.35, ask: 153.45, timestamp: new Date(BASE_MS).toISOString(), source: "mock" });
    }
    if (url.includes("/api/snapshot/")) {
      const sym = decodeURIComponent(url.split("/api/snapshot/")[1].split("?")[0]);
      return json({ symbol: sym, prevClose: 151, high52: 168, low52: 132, source: "mock" });
    }
    return real(input, init);
  };
}

export interface SeedDrawing {
  id: string;
  type: string;
  color: string;
  points: { time: number; price: number }[];
  kind?: string;
}

/** Seed a symbol's persisted chart state (drawings / alerts / chart type). */
export function seed(symbol: string, opts: { drawings?: SeedDrawing[]; alerts?: unknown[]; type?: string } = {}) {
  if (typeof window === "undefined") return;
  const S = symbol.toUpperCase();
  window.localStorage.setItem(`chart:drawings:${S}`, JSON.stringify(opts.drawings ?? []));
  window.localStorage.setItem(`chart:alerts:${S}`, JSON.stringify(opts.alerts ?? []));
  window.localStorage.setItem("chart:type", opts.type ?? "candles");
}
