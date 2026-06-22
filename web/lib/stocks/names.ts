// Static ticker → display-name map for the positions table (the screenshot shows a
// company-name subtitle). Small curated set — the simulator's quick-picks plus
// common names and the supported crypto. Unknown symbols just render without a name.

export const COMPANY_NAMES: Record<string, string> = {
  AAPL: "Apple Inc.",
  MSFT: "Microsoft Corp.",
  NVDA: "NVIDIA Corp.",
  AMZN: "Amazon.com Inc.",
  GOOGL: "Alphabet Inc.",
  GOOG: "Alphabet Inc.",
  META: "Meta Platforms Inc.",
  TSLA: "Tesla Inc.",
  NFLX: "Netflix Inc.",
  AMD: "Advanced Micro Devices",
  INTC: "Intel Corp.",
  JPM: "JPMorgan Chase & Co.",
  V: "Visa Inc.",
  DIS: "Walt Disney Co.",
  KO: "Coca-Cola Co.",
  SPY: "S&P 500 ETF",
  QQQ: "Nasdaq-100 ETF",
  "BTC-USD": "Bitcoin",
  "ETH-USD": "Ethereum",
  "SOL-USD": "Solana",
};

export function companyName(symbol: string): string | undefined {
  return COMPANY_NAMES[symbol.toUpperCase()];
}
