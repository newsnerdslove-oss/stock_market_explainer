import { describe, it, expect } from "vitest";
import { normalizeCryptoSymbol, isCryptoSymbol, coinbaseProduct, CRYPTO_SYMBOLS } from "@/lib/crypto/products";

describe("crypto products", () => {
  it("canonicalizes supported inputs", () => {
    expect(normalizeCryptoSymbol("BTC-USD")).toBe("BTC-USD");
    expect(normalizeCryptoSymbol("btc")).toBe("BTC-USD");
    expect(normalizeCryptoSymbol("BTC/USD")).toBe("BTC-USD");
    expect(normalizeCryptoSymbol(" eth ")).toBe("ETH-USD");
  });

  it("rejects non-crypto / unsupported symbols", () => {
    expect(normalizeCryptoSymbol("AAPL")).toBeNull();
    expect(normalizeCryptoSymbol("DOGE")).toBeNull();
    expect(isCryptoSymbol("AAPL")).toBe(false);
    expect(isCryptoSymbol("ETH")).toBe(true);
  });

  it("maps to a Coinbase product id", () => {
    expect(coinbaseProduct("btc")).toBe("BTC-USD");
    expect(coinbaseProduct("AAPL")).toBeNull();
  });

  it("exposes the canonical symbol list", () => {
    expect(CRYPTO_SYMBOLS).toContain("BTC-USD");
    expect(CRYPTO_SYMBOLS).toContain("ETH-USD");
  });
});
