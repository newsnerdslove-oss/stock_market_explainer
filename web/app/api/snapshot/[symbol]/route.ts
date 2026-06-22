import { NextResponse } from "next/server";
import { getQuote, type Snapshot } from "@/lib/marketService";
import { coinbaseProduct } from "@/lib/crypto/products";
import { fetchCoinbaseSnapshot } from "@/lib/crypto/coinbase";
import { alpacaConfigured, fetchAlpacaSnapshot } from "@/lib/stocks/alpaca";

// Daily stats (prior close + 52-week range) for the positions table. Slow-moving,
// so it's a separate endpoint from the fast quote poll. Routing mirrors /api/quote:
// crypto → Coinbase daily candles; stocks → Alpaca daily bars when configured
// (falling back to a deterministic mock); otherwise the mock.
async function mockSnapshot(symbol: string): Promise<Snapshot> {
  const { price } = await getQuote(symbol);
  const r = (n: number) => Math.round(n * 100) / 100;
  return { symbol, prevClose: r(price * 0.99), high52: r(price * 1.3), low52: r(price * 0.78), source: "mock" };
}

export async function GET(_req: Request, { params }: { params: Promise<{ symbol: string }> }) {
  const { symbol } = await params;
  const product = coinbaseProduct(symbol);
  try {
    let snap: Snapshot;
    if (product) {
      snap = await fetchCoinbaseSnapshot(symbol, product);
    } else if (alpacaConfigured()) {
      snap = await fetchAlpacaSnapshot(symbol).catch(() => mockSnapshot(symbol));
    } else {
      snap = await mockSnapshot(symbol);
    }
    return NextResponse.json(snap, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return NextResponse.json({ error: "snapshot unavailable" }, { status: 502 });
  }
}
