import { NextResponse } from "next/server";
import { getCandles } from "@/lib/marketService";
import { coinbaseProduct } from "@/lib/crypto/products";
import { fetchCoinbaseCandles } from "@/lib/crypto/coinbase";
import { alpacaConfigured, fetchAlpacaCandles } from "@/lib/stocks/alpaca";

// Same-origin candle proxy for the browser (the live chart polls client-side and
// can't hit the market-service cross-origin). Routing: crypto → Coinbase 1-min
// candles; stocks → Alpaca's free IEX bars when configured (falling back to the
// mock market-service on error); otherwise the market-service.
export async function GET(req: Request, { params }: { params: Promise<{ symbol: string }> }) {
  const { symbol } = await params;
  const limitParam = new URL(req.url).searchParams.get("limit");
  const limit = Math.min(Math.max(Number(limitParam) || 60, 1), 1000);
  const product = coinbaseProduct(symbol);
  try {
    let candles;
    if (product) {
      candles = await fetchCoinbaseCandles(symbol, product, limit);
    } else if (alpacaConfigured()) {
      candles = await fetchAlpacaCandles(symbol, limit).catch(() => getCandles(symbol, limit));
    } else {
      candles = await getCandles(symbol, limit);
    }
    return NextResponse.json(candles, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return NextResponse.json({ error: "candles unavailable" }, { status: 502 });
  }
}
