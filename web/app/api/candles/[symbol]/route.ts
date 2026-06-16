import { NextResponse } from "next/server";
import { getCandles } from "@/lib/marketService";

// Same-origin candle proxy for the browser (the live chart polls client-side and
// can't hit the market-service cross-origin). The Next server fetches it.
export async function GET(req: Request, { params }: { params: { symbol: string } }) {
  const limitParam = new URL(req.url).searchParams.get("limit");
  const limit = Math.min(Math.max(Number(limitParam) || 60, 1), 1000);
  try {
    const candles = await getCandles(params.symbol, limit);
    return NextResponse.json(candles, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return NextResponse.json({ error: "candles unavailable" }, { status: 502 });
  }
}
