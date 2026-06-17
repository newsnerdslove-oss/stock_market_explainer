import { NextResponse } from "next/server";
import { getQuote } from "@/lib/marketService";
import { coinbaseProduct } from "@/lib/crypto/products";
import { fetchCoinbaseQuote } from "@/lib/crypto/coinbase";
import { alpacaConfigured, fetchAlpacaQuote } from "@/lib/stocks/alpaca";

// Same-origin quote proxy for the browser (the simulator runs client-side and
// can't hit the market-service cross-origin). Routing: crypto → Coinbase (public,
// no key); stocks → Alpaca's free IEX feed when configured (falling back to the
// mock market-service on error); otherwise the market-service.
export async function GET(_req: Request, { params }: { params: { symbol: string } }) {
  const product = coinbaseProduct(params.symbol);
  try {
    let quote;
    if (product) {
      quote = await fetchCoinbaseQuote(params.symbol, product);
    } else if (alpacaConfigured()) {
      quote = await fetchAlpacaQuote(params.symbol).catch(() => getQuote(params.symbol));
    } else {
      quote = await getQuote(params.symbol);
    }
    return NextResponse.json(quote, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return NextResponse.json({ error: "quote unavailable" }, { status: 502 });
  }
}
