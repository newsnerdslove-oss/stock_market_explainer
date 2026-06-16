import { NextResponse } from "next/server";
import { getQuote } from "@/lib/marketService";

// Same-origin quote proxy for the browser (the simulator runs client-side and
// can't hit the market-service cross-origin). The Next server fetches it.
export async function GET(_req: Request, { params }: { params: { symbol: string } }) {
  try {
    const quote = await getQuote(params.symbol);
    return NextResponse.json(quote, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return NextResponse.json({ error: "quote unavailable" }, { status: 502 });
  }
}
