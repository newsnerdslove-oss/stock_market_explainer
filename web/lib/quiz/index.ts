import type { Question } from "@/lib/quiz/types";

// Existing quizzes (flat).
import { questions as whatIsACandle } from "@/lib/quiz/content/what-is-a-candle";
import { questions as lineVsCandle } from "@/lib/quiz/content/line-vs-candle";
import { questions as bidAskSpread } from "@/lib/quiz/content/bid-ask-spread";
import { questions as profitAndLoss } from "@/lib/quiz/content/profit-and-loss";
import { questions as peRatio } from "@/lib/quiz/content/pe-ratio";

// 100-level: Market basics.
import { questions as whatIsAStockMarket } from "@/lib/quiz/content/market-basics/what-is-a-stock-market";
import { questions as readingAStockListing } from "@/lib/quiz/content/market-basics/reading-a-stock-listing";
import { questions as marketHoursAndSessions } from "@/lib/quiz/content/market-basics/market-hours-and-sessions";
import { questions as marketParticipants } from "@/lib/quiz/content/market-basics/market-participants";
import { questions as whatABrokerDoes } from "@/lib/quiz/content/market-basics/what-a-broker-does";
import { questions as primaryVsSecondaryMarket } from "@/lib/quiz/content/market-basics/primary-vs-secondary-market";

// 100-level: Reading price (continued).
import { questions as chartTimeframes } from "@/lib/quiz/content/reading-price/chart-timeframes";
import { questions as volumeBasics } from "@/lib/quiz/content/reading-price/volume-basics";
import { questions as trendBasics } from "@/lib/quiz/content/reading-price/trend-basics";
import { questions as supportAndResistance } from "@/lib/quiz/content/reading-price/support-and-resistance";
import { questions as priceGaps } from "@/lib/quiz/content/reading-price/price-gaps";

// 100-level: Quotes & orders (continued).
import { questions as marketVsLimitOrders } from "@/lib/quiz/content/quotes-orders/market-vs-limit-orders";
import { questions as stopAndStopLimitOrders } from "@/lib/quiz/content/quotes-orders/stop-and-stop-limit-orders";
import { questions as orderLifecycle } from "@/lib/quiz/content/quotes-orders/order-lifecycle";
import { questions as slippage } from "@/lib/quiz/content/quotes-orders/slippage";
import { questions as liquidity } from "@/lib/quiz/content/quotes-orders/liquidity";

// 100-level: Owning a position (continued).
import { questions as costBasis } from "@/lib/quiz/content/owning-position/cost-basis";
import { questions as breakeven } from "@/lib/quiz/content/owning-position/breakeven";
import { questions as longVsShort } from "@/lib/quiz/content/owning-position/long-vs-short";
import { questions as dividends } from "@/lib/quiz/content/owning-position/dividends";

// 100-level: Valuation intro (continued).
import { questions as epsEarningsPerShare } from "@/lib/quiz/content/valuation/eps-earnings-per-share";
import { questions as marketCapitalization } from "@/lib/quiz/content/valuation/market-capitalization";
import { questions as whatExpensiveMeans } from "@/lib/quiz/content/valuation/what-expensive-means";
import { questions as sectorsAndIndices } from "@/lib/quiz/content/valuation/sectors-and-indices";

// 100-level: Crypto basics.
import { questions as coinsVsTokens } from "@/lib/quiz/content/crypto/coins-vs-tokens";
import { questions as exchangesVsWallets } from "@/lib/quiz/content/crypto/exchanges-vs-wallets";
import { questions as cryptoMarketCapAndSupply } from "@/lib/quiz/content/crypto/crypto-market-cap-and-supply";
import { questions as crypto247Markets } from "@/lib/quiz/content/crypto/crypto-24-7-markets";
import { questions as cryptoVolatility } from "@/lib/quiz/content/crypto/crypto-volatility";
import { questions as custodyAndKeys } from "@/lib/quiz/content/crypto/custody-and-keys";

// Single source of truth for the question bank, keyed by lesson slug. Mirrors
// lib/lessons/index.ts; later phases swap this for Supabase-backed queries while
// keeping the same Question shape and helper signatures.
const byLesson: Record<string, Question[]> = {
  // Market basics
  "what-is-a-stock-market": whatIsAStockMarket,
  "reading-a-stock-listing": readingAStockListing,
  "market-hours-and-sessions": marketHoursAndSessions,
  "market-participants": marketParticipants,
  "what-a-broker-does": whatABrokerDoes,
  "primary-vs-secondary-market": primaryVsSecondaryMarket,
  // Reading price
  "what-is-a-candle": whatIsACandle,
  "line-vs-candle": lineVsCandle,
  "chart-timeframes": chartTimeframes,
  "volume-basics": volumeBasics,
  "trend-basics": trendBasics,
  "support-and-resistance": supportAndResistance,
  "price-gaps": priceGaps,
  // Quotes & orders
  "bid-ask-spread": bidAskSpread,
  "market-vs-limit-orders": marketVsLimitOrders,
  "stop-and-stop-limit-orders": stopAndStopLimitOrders,
  "order-lifecycle": orderLifecycle,
  slippage,
  liquidity,
  // Owning a position
  "profit-and-loss": profitAndLoss,
  "cost-basis": costBasis,
  breakeven,
  "long-vs-short": longVsShort,
  dividends,
  // Valuation intro
  "eps-earnings-per-share": epsEarningsPerShare,
  "pe-ratio": peRatio,
  "market-capitalization": marketCapitalization,
  "what-expensive-means": whatExpensiveMeans,
  "sectors-and-indices": sectorsAndIndices,
  // Crypto basics
  "coins-vs-tokens": coinsVsTokens,
  "exchanges-vs-wallets": exchangesVsWallets,
  "crypto-market-cap-and-supply": cryptoMarketCapAndSupply,
  "crypto-24-7-markets": crypto247Markets,
  "crypto-volatility": cryptoVolatility,
  "custody-and-keys": custodyAndKeys,
};

/** Questions for one lesson's quiz, in authored order. Empty if none exist. */
export function getQuiz(lessonSlug: string): Question[] {
  return byLesson[lessonSlug] ?? [];
}

/** True if a lesson has any questions authored. */
export function hasQuiz(lessonSlug: string): boolean {
  return getQuiz(lessonSlug).length > 0;
}

/** Every question across all lessons (for future review/spaced-repetition use). */
export function getAllQuestions(): Question[] {
  return Object.values(byLesson).flat();
}

export type { Question } from "@/lib/quiz/types";
