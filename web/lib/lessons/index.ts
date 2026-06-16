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

// 200-level: Technical analysis.
import { lesson as movingAverages } from "@/lib/lessons/content/technical/moving-averages-sma-vs-ema";
import { lesson as rsi } from "@/lib/lessons/content/technical/rsi-relative-strength-index";
import { lesson as macd } from "@/lib/lessons/content/technical/macd-moving-average-convergence-divergence";
import { lesson as volumeAnalysis } from "@/lib/lessons/content/technical/volume-analysis-confirmation-obv";
import { lesson as supportResistanceDepth } from "@/lib/lessons/content/technical/support-resistance-depth";
import { lesson as trendlinesAndChannels } from "@/lib/lessons/content/technical/trendlines-and-channels";
import { lesson as candlestickPatterns } from "@/lib/lessons/content/technical/candlestick-patterns-reversal";
import { lesson as chartPatterns } from "@/lib/lessons/content/technical/chart-patterns-measured-moves";
import { lesson as divergence } from "@/lib/lessons/content/technical/divergence-price-vs-indicator";
import { lesson as multiTimeframe } from "@/lib/lessons/content/technical/multi-timeframe-analysis";

// 200-level: Fundamental analysis.
import { lesson as incomeStatement } from "@/lib/lessons/content/fundamental/the-income-statement";
import { lesson as balanceSheet } from "@/lib/lessons/content/fundamental/the-balance-sheet";
import { lesson as cashFlowStatement } from "@/lib/lessons/content/fundamental/the-cash-flow-statement";
import { lesson as peRatioInDepth } from "@/lib/lessons/content/fundamental/pe-ratio-in-depth";
import { lesson as pbAndPsRatios } from "@/lib/lessons/content/fundamental/pb-and-ps-ratios";
import { lesson as dividendMetrics } from "@/lib/lessons/content/fundamental/dividend-metrics-in-depth";
import { lesson as earningsReports } from "@/lib/lessons/content/fundamental/earnings-reports";
import { lesson as marginsAndRoe } from "@/lib/lessons/content/fundamental/margins-and-roe";
import { lesson as growthVsValue } from "@/lib/lessons/content/fundamental/growth-vs-value";

// 200-level: Risk management.
import { lesson as positionSizing } from "@/lib/lessons/content/risk/position-sizing";
import { lesson as riskPerTrade } from "@/lib/lessons/content/risk/risk-per-trade";
import { lesson as stopPlacement } from "@/lib/lessons/content/risk/stop-placement";
import { lesson as riskRewardRatio } from "@/lib/lessons/content/risk/risk-reward-ratio";
import { lesson as drawdown } from "@/lib/lessons/content/risk/drawdown";
import { lesson as diversification } from "@/lib/lessons/content/risk/diversification";
import { lesson as lossRecoveryMath } from "@/lib/lessons/content/risk/loss-recovery-math";

// 200-level: Market structure.
import { lesson as orderBookAndDepth } from "@/lib/lessons/content/market-structure/order-book-and-market-depth";
import { lesson as howMarketMakersWork } from "@/lib/lessons/content/market-structure/how-market-makers-work";
import { lesson as exchangesEcnsDarkPools } from "@/lib/lessons/content/market-structure/exchanges-ecns-dark-pools";
import { lesson as clearingAndSettlement } from "@/lib/lessons/content/market-structure/clearing-and-settlement";
import { lesson as extendedHoursMechanics } from "@/lib/lessons/content/market-structure/extended-hours-trading-mechanics";
import { lesson as haltsAndCircuitBreakers } from "@/lib/lessons/content/market-structure/trading-halts-and-circuit-breakers";

// 200-level: Derivatives intro.
import { lesson as whatIsADerivative } from "@/lib/lessons/content/derivatives/what-is-a-derivative";
import { lesson as callsAndPuts } from "@/lib/lessons/content/derivatives/calls-and-puts";
import { lesson as optionPremiumAndLeverage } from "@/lib/lessons/content/derivatives/option-premium-and-leverage";
import { lesson as futuresContracts } from "@/lib/lessons/content/derivatives/futures-contracts";

// 200-level: Crypto (wallets, DeFi & on-chain).
import { lesson as walletsInDepth } from "@/lib/lessons/content/crypto-200/wallets-in-depth";
import { lesson as onChainVsExchangePrice } from "@/lib/lessons/content/crypto-200/on-chain-vs-exchange-price";
import { lesson as stablecoins } from "@/lib/lessons/content/crypto-200/stablecoins";
import { lesson as gasAndNetworkFees } from "@/lib/lessons/content/crypto-200/gas-and-network-fees";
import { lesson as dexVsCex } from "@/lib/lessons/content/crypto-200/dex-vs-cex";
import { lesson as staking } from "@/lib/lessons/content/crypto-200/staking";
import { lesson as readingOnChainData } from "@/lib/lessons/content/crypto-200/reading-on-chain-data";

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
  // Technical analysis (200)
  movingAverages,
  rsi,
  macd,
  volumeAnalysis,
  supportResistanceDepth,
  trendlinesAndChannels,
  candlestickPatterns,
  chartPatterns,
  divergence,
  multiTimeframe,
  // Fundamental analysis (200)
  incomeStatement,
  balanceSheet,
  cashFlowStatement,
  peRatioInDepth,
  pbAndPsRatios,
  dividendMetrics,
  earningsReports,
  marginsAndRoe,
  growthVsValue,
  // Risk management (200)
  positionSizing,
  riskPerTrade,
  stopPlacement,
  riskRewardRatio,
  drawdown,
  diversification,
  lossRecoveryMath,
  // Market structure (200)
  orderBookAndDepth,
  howMarketMakersWork,
  exchangesEcnsDarkPools,
  clearingAndSettlement,
  extendedHoursMechanics,
  haltsAndCircuitBreakers,
  // Derivatives intro (200)
  whatIsADerivative,
  callsAndPuts,
  optionPremiumAndLeverage,
  futuresContracts,
  // Crypto 200
  walletsInDepth,
  onChainVsExchangePrice,
  stablecoins,
  gasAndNetworkFees,
  dexVsCex,
  staking,
  readingOnChainData,
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
