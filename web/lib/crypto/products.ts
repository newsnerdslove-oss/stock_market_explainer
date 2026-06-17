// Crypto symbols the simulator supports, mapped to Coinbase product ids. Used to
// route /api/quote and /api/candles to Coinbase's public REST for crypto while
// stocks keep flowing through the market-service.

const PRODUCTS: Record<string, string> = {
  "BTC-USD": "BTC-USD",
  "ETH-USD": "ETH-USD",
  "SOL-USD": "SOL-USD",
};

export const CRYPTO_SYMBOLS = Object.keys(PRODUCTS);

/** Canonicalize user input to a supported crypto symbol, or null. "btc"/"BTC/USD" → "BTC-USD". */
export function normalizeCryptoSymbol(input: string): string | null {
  const s = input.trim().toUpperCase().replace("/", "-");
  if (PRODUCTS[s]) return s;
  const withUsd = `${s}-USD`;
  return PRODUCTS[withUsd] ? withUsd : null;
}

export function isCryptoSymbol(input: string): boolean {
  return normalizeCryptoSymbol(input) !== null;
}

/** The Coinbase product id for a symbol (e.g. "BTC" → "BTC-USD"), or null if not crypto. */
export function coinbaseProduct(input: string): string | null {
  const sym = normalizeCryptoSymbol(input);
  return sym ? PRODUCTS[sym] : null;
}
