import { NextResponse } from "next/server";
import { getCandles, isTimeframe } from "@/lib/marketService";
import { coinbaseProduct } from "@/lib/crypto/products";
import { fetchCoinbaseCandles } from "@/lib/crypto/coinbase";
import { alpacaConfigured, fetchAlpacaCandles } from "@/lib/stocks/alpaca";

// Same-origin candle proxy for the browser (the live chart polls client-side and
// can't hit the market-service cross-origin). Routing: crypto → Coinbase candles;
// stocks → Alpaca's free IEX bars when configured (falling back to the mock market-
// service on error); otherwise the market-service. `tf` selects the timeframe
// (1m/5m/15m/1h/1d); the mock service is 1-minute only.
export async function GET(req: Request, { params }: { params: Promise<{ symbol: string }> }) {
  const { symbol } = await params;
  const url = new URL(req.url);
  const limit = Math.min(Math.max(Number(url.searchParams.get("limit")) || 60, 1), 1000);
  const tfParam = url.searchParams.get("tf");
  const tf = isTimeframe(tfParam) ? tfParam : "1m";
  const product = coinbaseProduct(symbol);
  try {
    let candles;
    if (product) {
      candles = await fetchCoinbaseCandles(symbol, product, limit, tf);
    } else if (alpacaConfigured()) {
      candles = await fetchAlpacaCandles(symbol, limit, tf).catch(() => getCandles(symbol, limit));
    } else {
      candles = await getCandles(symbol, limit);
    }
    return NextResponse.json(candles, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return NextResponse.json({ error: "candles unavailable" }, { status: 502 });
  }
}
