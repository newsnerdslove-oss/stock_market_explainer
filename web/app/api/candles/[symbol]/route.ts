import { NextResponse } from "next/server";
import { getCandles } from "@/lib/marketService";
import { coinbaseProduct } from "@/lib/crypto/products";
import { fetchCoinbaseCandles } from "@/lib/crypto/coinbase";

// Same-origin candle proxy for the browser (the live chart polls client-side and
// can't hit the market-service cross-origin). Crypto symbols get real Coinbase
// 1-minute candles (public REST); everything else goes through the market-service.
export async function GET(req: Request, { params }: { params: { symbol: string } }) {
  const limitParam = new URL(req.url).searchParams.get("limit");
  const limit = Math.min(Math.max(Number(limitParam) || 60, 1), 1000);
  const product = coinbaseProduct(params.symbol);
  try {
    const candles = product
      ? await fetchCoinbaseCandles(params.symbol, product, limit)
      : await getCandles(params.symbol, limit);
    return NextResponse.json(candles, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return NextResponse.json({ error: "candles unavailable" }, { status: 502 });
  }
}
