import type { Lesson } from "@/lib/lessons/types";
import { MODULES, TRACKS, moduleById } from "@/lib/lessons/taxonomy";

// Existing lessons (flat).
import { lesson as whatIsACandle } from "@/lib/lessons/content/what-is-a-candle";
import { lesson as lineVsCandle } from "@/lib/lessons/content/line-vs-candle";
import { lesson as bidAskSpread } from "@/lib/lessons/content/bid-ask-spread";
import { lesson as profitAndLoss } from "@/lib/lessons/content/profit-and-loss";
import { lesson as peRatio } from "@/lib/lessons/content/pe-ratio";

// 100-level: Market basics.
import { lesson as whatIsAStockMarket } from "@/lib/lessons/content/market-basics/what-is-a-stock-market";
import { lesson as readingAStockListing } from "@/lib/lessons/content/market-basics/reading-a-stock-listing";
import { lesson as marketHoursAndSessions } from "@/lib/lessons/content/market-basics/market-hours-and-sessions";
import { lesson as marketParticipants } from "@/lib/lessons/content/market-basics/market-participants";
import { lesson as whatABrokerDoes } from "@/lib/lessons/content/market-basics/what-a-broker-does";
import { lesson as primaryVsSecondaryMarket } from "@/lib/lessons/content/market-basics/primary-vs-secondary-market";

// 100-level: Reading price (continued).
import { lesson as chartTimeframes } from "@/lib/lessons/content/reading-price/chart-timeframes";
import { lesson as volumeBasics } from "@/lib/lessons/content/reading-price/volume-basics";
import { lesson as trendBasics } from "@/lib/lessons/content/reading-price/trend-basics";
import { lesson as supportAndResistance } from "@/lib/lessons/content/reading-price/support-and-resistance";
import { lesson as priceGaps } from "@/lib/lessons/content/reading-price/price-gaps";

// 100-level: Quotes & orders (continued).
import { lesson as marketVsLimitOrders } from "@/lib/lessons/content/quotes-orders/market-vs-limit-orders";
import { lesson as stopAndStopLimitOrders } from "@/lib/lessons/content/quotes-orders/stop-and-stop-limit-orders";
import { lesson as orderLifecycle } from "@/lib/lessons/content/quotes-orders/order-lifecycle";
import { lesson as slippage } from "@/lib/lessons/content/quotes-orders/slippage";
import { lesson as liquidity } from "@/lib/lessons/content/quotes-orders/liquidity";

// 100-level: Owning a position (continued).
import { lesson as costBasis } from "@/lib/lessons/content/owning-position/cost-basis";
import { lesson as breakeven } from "@/lib/lessons/content/owning-position/breakeven";
import { lesson as longVsShort } from "@/lib/lessons/content/owning-position/long-vs-short";
import { lesson as dividends } from "@/lib/lessons/content/owning-position/dividends";

// 100-level: Valuation intro (continued).
import { lesson as epsEarningsPerShare } from "@/lib/lessons/content/valuation/eps-earnings-per-share";
import { lesson as marketCapitalization } from "@/lib/lessons/content/valuation/market-capitalization";
import { lesson as whatExpensiveMeans } from "@/lib/lessons/content/valuation/what-expensive-means";
import { lesson as sectorsAndIndices } from "@/lib/lessons/content/valuation/sectors-and-indices";

// 100-level: Crypto basics.
import { lesson as coinsVsTokens } from "@/lib/lessons/content/crypto/coins-vs-tokens";
import { lesson as exchangesVsWallets } from "@/lib/lessons/content/crypto/exchanges-vs-wallets";
import { lesson as cryptoMarketCapAndSupply } from "@/lib/lessons/content/crypto/crypto-market-cap-and-supply";
import { lesson as crypto247Markets } from "@/lib/lessons/content/crypto/crypto-24-7-markets";
import { lesson as cryptoVolatility } from "@/lib/lessons/content/crypto/crypto-volatility";
import { lesson as custodyAndKeys } from "@/lib/lessons/content/crypto/custody-and-keys";

// The single source of truth for the lesson bank. Display order is computed from
// the taxonomy (track → module → moduleOrder via getOrderedLessons); this array's
// order only needs to contain every lesson. Grouped by module for readability.
export const lessons: Lesson[] = [
  // Market basics
  whatIsAStockMarket,
  readingAStockListing,
  marketHoursAndSessions,
  marketParticipants,
  whatABrokerDoes,
  primaryVsSecondaryMarket,
  // Reading price
  whatIsACandle,
  lineVsCandle,
  chartTimeframes,
  volumeBasics,
  trendBasics,
  supportAndResistance,
  priceGaps,
  // Quotes & orders
  bidAskSpread,
  marketVsLimitOrders,
  stopAndStopLimitOrders,
  orderLifecycle,
  slippage,
  liquidity,
  // Owning a position
  profitAndLoss,
  costBasis,
  breakeven,
  longVsShort,
  dividends,
  // Valuation intro
  epsEarningsPerShare,
  peRatio,
  marketCapitalization,
  whatExpensiveMeans,
  sectorsAndIndices,
  // Crypto basics
  coinsVsTokens,
  exchangesVsWallets,
  cryptoMarketCapAndSupply,
  crypto247Markets,
  cryptoVolatility,
  custodyAndKeys,
];

export function getAllLessons(): Lesson[] {
  return lessons;
}

export function getLesson(slug: string): Lesson | undefined {
  return lessons.find((l) => l.slug === slug);
}

/**
 * Lessons in curriculum order: by track order, then module order, then the
 * lesson's order within its module. Used for prev/next sequencing across the
 * whole curriculum (the Learn list groups by module for display).
 */
export function getOrderedLessons(): Lesson[] {
  const trackOrder = new Map(TRACKS.map((t) => [t.id, t.order]));
  const moduleOrder = new Map(MODULES.map((m) => [m.id, m.order]));
  return [...lessons].sort((a, b) => {
    const ta = trackOrder.get(moduleById[a.moduleId].trackId) ?? 0;
    const tb = trackOrder.get(moduleById[b.moduleId].trackId) ?? 0;
    if (ta !== tb) return ta - tb;
    const ma = moduleOrder.get(a.moduleId) ?? 0;
    const mb = moduleOrder.get(b.moduleId) ?? 0;
    if (ma !== mb) return ma - mb;
    return a.moduleOrder - b.moduleOrder;
  });
}

export type { Lesson } from "@/lib/lessons/types";
