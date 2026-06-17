import { NextResponse } from "next/server";
import { getQuote } from "@/lib/marketService";
import { coinbaseProduct } from "@/lib/crypto/products";
import { fetchCoinbaseQuote } from "@/lib/crypto/coinbase";

// Same-origin quote proxy for the browser (the simulator runs client-side and
// can't hit the market-service cross-origin). Crypto symbols get real Coinbase
// prices (public REST, no key); everything else goes through the market-service.
export async function GET(_req: Request, { params }: { params: { symbol: string } }) {
  const product = coinbaseProduct(params.symbol);
  try {
    const quote = product
      ? await fetchCoinbaseQuote(params.symbol, product)
      : await getQuote(params.symbol);
    return NextResponse.json(quote, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return NextResponse.json({ error: "quote unavailable" }, { status: 502 });
  }
}
