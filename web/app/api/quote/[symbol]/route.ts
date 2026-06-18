import { NextResponse } from "next/server";
import { getQuote } from "@/lib/marketService";
import { coinbaseProduct } from "@/lib/crypto/products";
import { fetchCoinbaseQuote } from "@/lib/crypto/coinbase";
import { alpacaConfigured, fetchAlpacaQuote } from "@/lib/stocks/alpaca";

// Same-origin quote proxy for the browser (the simulator runs client-side and
// can't hit the market-service cross-origin). Routing: crypto → Coinbase (public,
// no key); stocks → Alpaca's free IEX feed when configured (falling back to the
// mock market-service on error); otherwise the market-service.
export async function GET(_req: Request, { params }: { params: Promise<{ symbol: string }> }) {
  const { symbol } = await params;
  const product = coinbaseProduct(symbol);
  try {
    let quote;
    if (product) {
      quote = await fetchCoinbaseQuote(symbol, product);
    } else if (alpacaConfigured()) {
      quote = await fetchAlpacaQuote(symbol).catch(() => getQuote(symbol));
    } else {
      quote = await getQuote(symbol);
    }
    return NextResponse.json(quote, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return NextResponse.json({ error: "quote unavailable" }, { status: 502 });
  }
}
