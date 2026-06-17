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

// 200-level: Technical analysis.
import { questions as movingAverages } from "@/lib/quiz/content/technical/moving-averages-sma-vs-ema";
import { questions as rsi } from "@/lib/quiz/content/technical/rsi-relative-strength-index";
import { questions as macd } from "@/lib/quiz/content/technical/macd-moving-average-convergence-divergence";
import { questions as volumeAnalysis } from "@/lib/quiz/content/technical/volume-analysis-confirmation-obv";
import { questions as supportResistanceDepth } from "@/lib/quiz/content/technical/support-resistance-depth";
import { questions as trendlinesAndChannels } from "@/lib/quiz/content/technical/trendlines-and-channels";
import { questions as candlestickPatterns } from "@/lib/quiz/content/technical/candlestick-patterns-reversal";
import { questions as chartPatterns } from "@/lib/quiz/content/technical/chart-patterns-measured-moves";
import { questions as divergence } from "@/lib/quiz/content/technical/divergence-price-vs-indicator";
import { questions as multiTimeframe } from "@/lib/quiz/content/technical/multi-timeframe-analysis";

// 200-level: Fundamental analysis.
import { questions as incomeStatement } from "@/lib/quiz/content/fundamental/the-income-statement";
import { questions as balanceSheet } from "@/lib/quiz/content/fundamental/the-balance-sheet";
import { questions as cashFlowStatement } from "@/lib/quiz/content/fundamental/the-cash-flow-statement";
import { questions as peRatioInDepth } from "@/lib/quiz/content/fundamental/pe-ratio-in-depth";
import { questions as pbAndPsRatios } from "@/lib/quiz/content/fundamental/pb-and-ps-ratios";
import { questions as dividendMetrics } from "@/lib/quiz/content/fundamental/dividend-metrics-in-depth";
import { questions as earningsReports } from "@/lib/quiz/content/fundamental/earnings-reports";
import { questions as marginsAndRoe } from "@/lib/quiz/content/fundamental/margins-and-roe";
import { questions as growthVsValue } from "@/lib/quiz/content/fundamental/growth-vs-value";

// 200-level: Risk management.
import { questions as positionSizing } from "@/lib/quiz/content/risk/position-sizing";
import { questions as riskPerTrade } from "@/lib/quiz/content/risk/risk-per-trade";
import { questions as stopPlacement } from "@/lib/quiz/content/risk/stop-placement";
import { questions as riskRewardRatio } from "@/lib/quiz/content/risk/risk-reward-ratio";
import { questions as drawdown } from "@/lib/quiz/content/risk/drawdown";
import { questions as diversification } from "@/lib/quiz/content/risk/diversification";
import { questions as lossRecoveryMath } from "@/lib/quiz/content/risk/loss-recovery-math";

// 200-level: Market structure.
import { questions as orderBookAndDepth } from "@/lib/quiz/content/market-structure/order-book-and-market-depth";
import { questions as howMarketMakersWork } from "@/lib/quiz/content/market-structure/how-market-makers-work";
import { questions as exchangesEcnsDarkPools } from "@/lib/quiz/content/market-structure/exchanges-ecns-dark-pools";
import { questions as clearingAndSettlement } from "@/lib/quiz/content/market-structure/clearing-and-settlement";
import { questions as extendedHoursMechanics } from "@/lib/quiz/content/market-structure/extended-hours-trading-mechanics";
import { questions as haltsAndCircuitBreakers } from "@/lib/quiz/content/market-structure/trading-halts-and-circuit-breakers";

// 200-level: Derivatives intro.
import { questions as whatIsADerivative } from "@/lib/quiz/content/derivatives/what-is-a-derivative";
import { questions as callsAndPuts } from "@/lib/quiz/content/derivatives/calls-and-puts";
import { questions as optionPremiumAndLeverage } from "@/lib/quiz/content/derivatives/option-premium-and-leverage";
import { questions as futuresContracts } from "@/lib/quiz/content/derivatives/futures-contracts";

// 200-level: Crypto (wallets, DeFi & on-chain).
import { questions as walletsInDepth } from "@/lib/quiz/content/crypto-200/wallets-in-depth";
import { questions as onChainVsExchangePrice } from "@/lib/quiz/content/crypto-200/on-chain-vs-exchange-price";
import { questions as stablecoins } from "@/lib/quiz/content/crypto-200/stablecoins";
import { questions as gasAndNetworkFees } from "@/lib/quiz/content/crypto-200/gas-and-network-fees";
import { questions as dexVsCex } from "@/lib/quiz/content/crypto-200/dex-vs-cex";
import { questions as staking } from "@/lib/quiz/content/crypto-200/staking";
import { questions as readingOnChainData } from "@/lib/quiz/content/crypto-200/reading-on-chain-data";

// 300-level: Options strategies.
import { questions as optionsGreeks } from "@/lib/quiz/content/options/options-greeks";
import { questions as coveredCall } from "@/lib/quiz/content/options/covered-call";
import { questions as protectivePut } from "@/lib/quiz/content/options/protective-put";
import { questions as cashSecuredPut } from "@/lib/quiz/content/options/cash-secured-put";
import { questions as bullCallSpread } from "@/lib/quiz/content/options/bull-call-spread";
import { questions as bearPutSpread } from "@/lib/quiz/content/options/bear-put-spread";
import { questions as bullPutSpreadCredit } from "@/lib/quiz/content/options/bull-put-spread-credit";
import { questions as longStraddle } from "@/lib/quiz/content/options/long-straddle";
import { questions as ironCondor } from "@/lib/quiz/content/options/iron-condor";

// 300-level: Margin & leverage.
import { questions as marginAccountsRegT } from "@/lib/quiz/content/margin/margin-accounts-and-regulation-t";
import { questions as maintenanceMarginCalls } from "@/lib/quiz/content/margin/maintenance-margin-and-margin-calls";
import { questions as buyingPowerLeverage } from "@/lib/quiz/content/margin/buying-power-and-leverage-math";
import { questions as shortSellingMargin } from "@/lib/quiz/content/margin/short-selling-on-margin";
import { questions as realCostsRisksMargin } from "@/lib/quiz/content/margin/real-costs-and-risks-of-margin";
import { questions as dayTradingBuyingPower } from "@/lib/quiz/content/margin/day-trading-buying-power";

// 300-level: Trading styles.
import { questions as dayTrading } from "@/lib/quiz/content/styles/day-trading";
import { questions as swingTrading } from "@/lib/quiz/content/styles/swing-trading";
import { questions as positionTrading } from "@/lib/quiz/content/styles/position-trading-trend-following";
import { questions as scalping } from "@/lib/quiz/content/styles/scalping";
import { questions as systematicVsDiscretionary } from "@/lib/quiz/content/styles/systematic-vs-discretionary-edges";
import { questions as tradingPsychology } from "@/lib/quiz/content/styles/trading-psychology-and-plan";

// 300-level: Fixed income & products.
import { questions as howBondsWork } from "@/lib/quiz/content/fixed-income/how-bonds-work";
import { questions as bondPricesAndYields } from "@/lib/quiz/content/fixed-income/bond-prices-and-yields";
import { questions as yieldToMaturity } from "@/lib/quiz/content/fixed-income/yield-to-maturity";
import { questions as interestRateRiskAndDuration } from "@/lib/quiz/content/fixed-income/interest-rate-risk-and-duration";
import { questions as creditRiskAndRatings } from "@/lib/quiz/content/fixed-income/credit-risk-and-ratings";
import { questions as theYieldCurve } from "@/lib/quiz/content/fixed-income/the-yield-curve";
import { questions as bondTypesAndFunds } from "@/lib/quiz/content/fixed-income/bond-types-and-funds";

// 300-level: Portfolio construction.
import { questions as assetAllocation } from "@/lib/quiz/content/portfolio/asset-allocation";
import { questions as diversificationAndCorrelation } from "@/lib/quiz/content/portfolio/diversification-and-correlation";
import { questions as mptAndEfficientFrontier } from "@/lib/quiz/content/portfolio/mpt-and-efficient-frontier";
import { questions as rebalancing } from "@/lib/quiz/content/portfolio/rebalancing";
import { questions as riskToleranceAndTimeHorizon } from "@/lib/quiz/content/portfolio/risk-tolerance-and-time-horizon";

// 300-level: Backtesting.
import { questions as whatBacktestingIsAndWhy } from "@/lib/quiz/content/backtesting/what-backtesting-is-and-why";
import { questions as overfittingAndCurveFitting } from "@/lib/quiz/content/backtesting/overfitting-and-curve-fitting";
import { questions as backtestingPitfalls } from "@/lib/quiz/content/backtesting/backtesting-pitfalls";
import { questions as evaluatingABacktest } from "@/lib/quiz/content/backtesting/evaluating-a-backtest-and-going-live";

// 300-level: Crypto (DeFi & derivatives).
import { questions as defiLendingAndBorrowing } from "@/lib/quiz/content/crypto-300/defi-lending-and-borrowing";
import { questions as liquidityProvidingImpermanentLoss } from "@/lib/quiz/content/crypto-300/liquidity-providing-and-impermanent-loss";
import { questions as perpetualFuturesAndFunding } from "@/lib/quiz/content/crypto-300/perpetual-futures-and-funding-rates";
import { questions as leverageAndLiquidationCrypto } from "@/lib/quiz/content/crypto-300/leverage-and-liquidation-in-crypto";
import { questions as bridgesAndCrossChainRisk } from "@/lib/quiz/content/crypto-300/bridges-and-cross-chain-risk";
import { questions as cryptoRiskManagement } from "@/lib/quiz/content/crypto-300/crypto-risk-management-and-portfolio";

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
  // Technical analysis (200)
  "moving-averages-sma-vs-ema": movingAverages,
  "rsi-relative-strength-index": rsi,
  "macd-moving-average-convergence-divergence": macd,
  "volume-analysis-confirmation-obv": volumeAnalysis,
  "support-resistance-depth": supportResistanceDepth,
  "trendlines-and-channels": trendlinesAndChannels,
  "candlestick-patterns-reversal": candlestickPatterns,
  "chart-patterns-measured-moves": chartPatterns,
  "divergence-price-vs-indicator": divergence,
  "multi-timeframe-analysis": multiTimeframe,
  // Fundamental analysis (200)
  "the-income-statement": incomeStatement,
  "the-balance-sheet": balanceSheet,
  "the-cash-flow-statement": cashFlowStatement,
  "pe-ratio-in-depth": peRatioInDepth,
  "pb-and-ps-ratios": pbAndPsRatios,
  "dividend-metrics-in-depth": dividendMetrics,
  "earnings-reports": earningsReports,
  "margins-and-roe": marginsAndRoe,
  "growth-vs-value": growthVsValue,
  // Risk management (200)
  "position-sizing": positionSizing,
  "risk-per-trade": riskPerTrade,
  "stop-placement": stopPlacement,
  "risk-reward-ratio": riskRewardRatio,
  drawdown,
  diversification,
  "loss-recovery-math": lossRecoveryMath,
  // Market structure (200)
  "order-book-and-market-depth": orderBookAndDepth,
  "how-market-makers-work": howMarketMakersWork,
  "exchanges-ecns-dark-pools": exchangesEcnsDarkPools,
  "clearing-and-settlement": clearingAndSettlement,
  "extended-hours-trading-mechanics": extendedHoursMechanics,
  "trading-halts-and-circuit-breakers": haltsAndCircuitBreakers,
  // Derivatives intro (200)
  "what-is-a-derivative": whatIsADerivative,
  "calls-and-puts": callsAndPuts,
  "option-premium-and-leverage": optionPremiumAndLeverage,
  "futures-contracts": futuresContracts,
  // Crypto 200
  "wallets-in-depth": walletsInDepth,
  "on-chain-vs-exchange-price": onChainVsExchangePrice,
  stablecoins,
  "gas-and-network-fees": gasAndNetworkFees,
  "dex-vs-cex": dexVsCex,
  staking,
  "reading-on-chain-data": readingOnChainData,
  // Options strategies (300)
  "options-greeks": optionsGreeks,
  "covered-call": coveredCall,
  "protective-put": protectivePut,
  "cash-secured-put": cashSecuredPut,
  "bull-call-spread": bullCallSpread,
  "bear-put-spread": bearPutSpread,
  "bull-put-spread-credit": bullPutSpreadCredit,
  "long-straddle": longStraddle,
  "iron-condor": ironCondor,
  // Margin & leverage (300)
  "margin-accounts-and-regulation-t": marginAccountsRegT,
  "maintenance-margin-and-margin-calls": maintenanceMarginCalls,
  "buying-power-and-leverage-math": buyingPowerLeverage,
  "short-selling-on-margin": shortSellingMargin,
  "real-costs-and-risks-of-margin": realCostsRisksMargin,
  "day-trading-buying-power": dayTradingBuyingPower,
  // Trading styles (300)
  "day-trading": dayTrading,
  "swing-trading": swingTrading,
  "position-trading-trend-following": positionTrading,
  scalping,
  "systematic-vs-discretionary-edges": systematicVsDiscretionary,
  "trading-psychology-and-plan": tradingPsychology,
  // Fixed income & products (300)
  "how-bonds-work": howBondsWork,
  "bond-prices-and-yields": bondPricesAndYields,
  "yield-to-maturity": yieldToMaturity,
  "interest-rate-risk-and-duration": interestRateRiskAndDuration,
  "credit-risk-and-ratings": creditRiskAndRatings,
  "the-yield-curve": theYieldCurve,
  "bond-types-and-funds": bondTypesAndFunds,
  // Portfolio construction (300)
  "asset-allocation": assetAllocation,
  "diversification-and-correlation": diversificationAndCorrelation,
  "mpt-and-efficient-frontier": mptAndEfficientFrontier,
  rebalancing,
  "risk-tolerance-and-time-horizon": riskToleranceAndTimeHorizon,
  // Backtesting (300)
  "what-backtesting-is-and-why": whatBacktestingIsAndWhy,
  "overfitting-and-curve-fitting": overfittingAndCurveFitting,
  "backtesting-pitfalls": backtestingPitfalls,
  "evaluating-a-backtest-and-going-live": evaluatingABacktest,
  // Crypto: DeFi & derivatives (300)
  "defi-lending-and-borrowing": defiLendingAndBorrowing,
  "liquidity-providing-and-impermanent-loss": liquidityProvidingImpermanentLoss,
  "perpetual-futures-and-funding-rates": perpetualFuturesAndFunding,
  "leverage-and-liquidation-in-crypto": leverageAndLiquidationCrypto,
  "bridges-and-cross-chain-risk": bridgesAndCrossChainRisk,
  "crypto-risk-management-and-portfolio": cryptoRiskManagement,
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
