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

// 300-level: Options strategies.
import { lesson as optionsGreeks } from "@/lib/lessons/content/options/options-greeks";
import { lesson as coveredCall } from "@/lib/lessons/content/options/covered-call";
import { lesson as protectivePut } from "@/lib/lessons/content/options/protective-put";
import { lesson as cashSecuredPut } from "@/lib/lessons/content/options/cash-secured-put";
import { lesson as bullCallSpread } from "@/lib/lessons/content/options/bull-call-spread";
import { lesson as bearPutSpread } from "@/lib/lessons/content/options/bear-put-spread";
import { lesson as bullPutSpreadCredit } from "@/lib/lessons/content/options/bull-put-spread-credit";
import { lesson as longStraddle } from "@/lib/lessons/content/options/long-straddle";
import { lesson as ironCondor } from "@/lib/lessons/content/options/iron-condor";

// 300-level: Margin & leverage.
import { lesson as marginAccountsRegT } from "@/lib/lessons/content/margin/margin-accounts-and-regulation-t";
import { lesson as maintenanceMarginCalls } from "@/lib/lessons/content/margin/maintenance-margin-and-margin-calls";
import { lesson as buyingPowerLeverage } from "@/lib/lessons/content/margin/buying-power-and-leverage-math";
import { lesson as shortSellingMargin } from "@/lib/lessons/content/margin/short-selling-on-margin";
import { lesson as realCostsRisksMargin } from "@/lib/lessons/content/margin/real-costs-and-risks-of-margin";
import { lesson as dayTradingBuyingPower } from "@/lib/lessons/content/margin/day-trading-buying-power";

// 300-level: Trading styles.
import { lesson as dayTrading } from "@/lib/lessons/content/styles/day-trading";
import { lesson as swingTrading } from "@/lib/lessons/content/styles/swing-trading";
import { lesson as positionTrading } from "@/lib/lessons/content/styles/position-trading-trend-following";
import { lesson as scalping } from "@/lib/lessons/content/styles/scalping";
import { lesson as systematicVsDiscretionary } from "@/lib/lessons/content/styles/systematic-vs-discretionary-edges";
import { lesson as tradingPsychology } from "@/lib/lessons/content/styles/trading-psychology-and-plan";

// 300-level: Fixed income & products.
import { lesson as howBondsWork } from "@/lib/lessons/content/fixed-income/how-bonds-work";
import { lesson as bondPricesAndYields } from "@/lib/lessons/content/fixed-income/bond-prices-and-yields";
import { lesson as yieldToMaturity } from "@/lib/lessons/content/fixed-income/yield-to-maturity";
import { lesson as interestRateRiskAndDuration } from "@/lib/lessons/content/fixed-income/interest-rate-risk-and-duration";
import { lesson as creditRiskAndRatings } from "@/lib/lessons/content/fixed-income/credit-risk-and-ratings";
import { lesson as theYieldCurve } from "@/lib/lessons/content/fixed-income/the-yield-curve";
import { lesson as bondTypesAndFunds } from "@/lib/lessons/content/fixed-income/bond-types-and-funds";

// 300-level: Portfolio construction.
import { lesson as assetAllocation } from "@/lib/lessons/content/portfolio/asset-allocation";
import { lesson as diversificationAndCorrelation } from "@/lib/lessons/content/portfolio/diversification-and-correlation";
import { lesson as mptAndEfficientFrontier } from "@/lib/lessons/content/portfolio/mpt-and-efficient-frontier";
import { lesson as rebalancing } from "@/lib/lessons/content/portfolio/rebalancing";
import { lesson as riskToleranceAndTimeHorizon } from "@/lib/lessons/content/portfolio/risk-tolerance-and-time-horizon";

// 300-level: Backtesting.
import { lesson as whatBacktestingIsAndWhy } from "@/lib/lessons/content/backtesting/what-backtesting-is-and-why";
import { lesson as overfittingAndCurveFitting } from "@/lib/lessons/content/backtesting/overfitting-and-curve-fitting";
import { lesson as backtestingPitfalls } from "@/lib/lessons/content/backtesting/backtesting-pitfalls";
import { lesson as evaluatingABacktest } from "@/lib/lessons/content/backtesting/evaluating-a-backtest-and-going-live";

// 300-level: Crypto (DeFi & derivatives).
import { lesson as defiLendingAndBorrowing } from "@/lib/lessons/content/crypto-300/defi-lending-and-borrowing";
import { lesson as liquidityProvidingImpermanentLoss } from "@/lib/lessons/content/crypto-300/liquidity-providing-and-impermanent-loss";
import { lesson as perpetualFuturesAndFunding } from "@/lib/lessons/content/crypto-300/perpetual-futures-and-funding-rates";
import { lesson as leverageAndLiquidationCrypto } from "@/lib/lessons/content/crypto-300/leverage-and-liquidation-in-crypto";
import { lesson as bridgesAndCrossChainRisk } from "@/lib/lessons/content/crypto-300/bridges-and-cross-chain-risk";
import { lesson as cryptoRiskManagement } from "@/lib/lessons/content/crypto-300/crypto-risk-management-and-portfolio";

// 400-level: Advanced options.
import { lesson as optionsStrategyMatrix } from "@/lib/lessons/content/adv-options/options-strategy-matrix";
import { lesson as spreadMathMastery } from "@/lib/lessons/content/adv-options/spread-math-mastery";
import { lesson as multiLegStrategies } from "@/lib/lessons/content/adv-options/multi-leg-strategies";
import { lesson as optionsRulesPositionLimits } from "@/lib/lessons/content/adv-options/options-rules-position-limits";
import { lesson as assignmentExerciseMechanics } from "@/lib/lessons/content/adv-options/assignment-exercise-mechanics";
import { lesson as hedgingWithOptions } from "@/lib/lessons/content/adv-options/hedging-with-options";
import { lesson as indexOptionsLeaps } from "@/lib/lessons/content/adv-options/index-options-leaps";
import { lesson as optionsExamProblems } from "@/lib/lessons/content/adv-options/options-exam-problems";

// 400-level: Suitability & recommendations.
import { lesson as knowYourCustomerRule2090 } from "@/lib/lessons/content/suitability/know-your-customer-rule-2090";
import { lesson as investmentObjectivesRiskReturnTimeHorizon } from "@/lib/lessons/content/suitability/investment-objectives-risk-return-time-horizon";
import { lesson as threeComponentsSuitabilityRule2111 } from "@/lib/lessons/content/suitability/three-components-suitability-rule-2111";
import { lesson as regulationBestInterestFourObligations } from "@/lib/lessons/content/suitability/regulation-best-interest-four-obligations";
import { lesson as fiduciaryVsSuitabilityVsRegBi } from "@/lib/lessons/content/suitability/fiduciary-vs-suitability-vs-reg-bi";
import { lesson as formCrsDisclosureObligations } from "@/lib/lessons/content/suitability/form-crs-disclosure-obligations";
import { lesson as suitableRecommendationsByProfile } from "@/lib/lessons/content/suitability/suitable-recommendations-by-profile";
import { lesson as prohibitedPracticesRecommendations } from "@/lib/lessons/content/suitability/prohibited-practices-recommendations";

// 400-level: Margin math (exam depth).
import { lesson as longMarginAccountMath } from "@/lib/lessons/content/margin-math/long-margin-account-math";
import { lesson as shortMarginAccountMath } from "@/lib/lessons/content/margin-math/short-margin-account-math";
import { lesson as combinedLongShortMarginMath } from "@/lib/lessons/content/margin-math/combined-long-short-margin-math";
import { lesson as maintenanceCallsAndMinimumMaintenancePrice } from "@/lib/lessons/content/margin-math/maintenance-calls-and-minimum-maintenance-price";

// 400-level: Regulatory framework.
import { lesson as secAndFoundationalFederalActs } from "@/lib/lessons/content/regulation/sec-and-foundational-federal-acts";
import { lesson as finraSelfRegulatoryOrganization } from "@/lib/lessons/content/regulation/finra-self-regulatory-organization";
import { lesson as msrbMunicipalSecuritiesRulemaking } from "@/lib/lessons/content/regulation/msrb-municipal-securities-rulemaking";
import { lesson as sieSeries7ExamAndRegistrationFramework } from "@/lib/lessons/content/regulation/sie-series7-exam-and-registration-framework";
import { lesson as registeringRepresentativesU4U5Ce } from "@/lib/lessons/content/regulation/registering-representatives-u4-u5-ce";
import { lesson as prohibitedPracticesInsiderTradingManipulation } from "@/lib/lessons/content/regulation/prohibited-practices-insider-trading-manipulation";
import { lesson as reportingAndRecordkeeping } from "@/lib/lessons/content/regulation/reporting-and-recordkeeping";
import { lesson as antiMoneyLaunderingBsaPatriotAct } from "@/lib/lessons/content/regulation/anti-money-laundering-bsa-patriot-act";

// 400-level: Municipal & debt securities.
import { lesson as goVsRevenueBonds } from "@/lib/lessons/content/muni-debt/go-vs-revenue-bonds";
import { lesson as municipalTaxationAndTey } from "@/lib/lessons/content/muni-debt/municipal-taxation-and-tey";
import { lesson as muniYieldsAndBasisPricing } from "@/lib/lessons/content/muni-debt/muni-yields-and-basis-pricing";
import { lesson as callableRefundedConvertiblePutBonds } from "@/lib/lessons/content/muni-debt/callable-refunded-convertible-put-bonds";
import { lesson as moneyMarketAndShortTermDebt } from "@/lib/lessons/content/muni-debt/money-market-and-short-term-debt";
import { lesson as municipalDebtExamMath } from "@/lib/lessons/content/muni-debt/municipal-debt-exam-math";

// 400-level: Accounts & processing.
import { lesson as accountTypesOwnershipAndAuthority } from "@/lib/lessons/content/accounts/account-types-ownership-and-authority";
import { lesson as optionsAccountApprovalAndSpecialDocs } from "@/lib/lessons/content/accounts/options-account-approval-and-special-docs";
import { lesson as openingAccountsCipApprovalAndSpecialSituations } from "@/lib/lessons/content/accounts/opening-accounts-cip-approval-and-special-situations";
import { lesson as confirmationsSettlementT1AndRegT } from "@/lib/lessons/content/accounts/confirmations-settlement-t1-and-reg-t";
import { lesson as booksRecordsStatementsAndAcats } from "@/lib/lessons/content/accounts/books-records-statements-and-acats";
import { lesson as settlementDeliveryEdgeCasesAndExDate } from "@/lib/lessons/content/accounts/settlement-delivery-edge-cases-and-ex-date";

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
  // Options strategies (300)
  optionsGreeks,
  coveredCall,
  protectivePut,
  cashSecuredPut,
  bullCallSpread,
  bearPutSpread,
  bullPutSpreadCredit,
  longStraddle,
  ironCondor,
  // Margin & leverage (300)
  marginAccountsRegT,
  maintenanceMarginCalls,
  buyingPowerLeverage,
  shortSellingMargin,
  realCostsRisksMargin,
  dayTradingBuyingPower,
  // Trading styles (300)
  dayTrading,
  swingTrading,
  positionTrading,
  scalping,
  systematicVsDiscretionary,
  tradingPsychology,
  // Fixed income & products (300)
  howBondsWork,
  bondPricesAndYields,
  yieldToMaturity,
  interestRateRiskAndDuration,
  creditRiskAndRatings,
  theYieldCurve,
  bondTypesAndFunds,
  // Portfolio construction (300)
  assetAllocation,
  diversificationAndCorrelation,
  mptAndEfficientFrontier,
  rebalancing,
  riskToleranceAndTimeHorizon,
  // Backtesting (300)
  whatBacktestingIsAndWhy,
  overfittingAndCurveFitting,
  backtestingPitfalls,
  evaluatingABacktest,
  // Advanced options (400)
  optionsStrategyMatrix,
  spreadMathMastery,
  multiLegStrategies,
  optionsRulesPositionLimits,
  assignmentExerciseMechanics,
  hedgingWithOptions,
  indexOptionsLeaps,
  optionsExamProblems,
  // Suitability & recommendations (400)
  knowYourCustomerRule2090,
  investmentObjectivesRiskReturnTimeHorizon,
  threeComponentsSuitabilityRule2111,
  regulationBestInterestFourObligations,
  fiduciaryVsSuitabilityVsRegBi,
  formCrsDisclosureObligations,
  suitableRecommendationsByProfile,
  prohibitedPracticesRecommendations,
  // Margin math (400)
  longMarginAccountMath,
  shortMarginAccountMath,
  combinedLongShortMarginMath,
  maintenanceCallsAndMinimumMaintenancePrice,
  // Regulatory framework (400)
  secAndFoundationalFederalActs,
  finraSelfRegulatoryOrganization,
  msrbMunicipalSecuritiesRulemaking,
  sieSeries7ExamAndRegistrationFramework,
  registeringRepresentativesU4U5Ce,
  prohibitedPracticesInsiderTradingManipulation,
  reportingAndRecordkeeping,
  antiMoneyLaunderingBsaPatriotAct,
  // Municipal & debt securities (400)
  goVsRevenueBonds,
  municipalTaxationAndTey,
  muniYieldsAndBasisPricing,
  callableRefundedConvertiblePutBonds,
  moneyMarketAndShortTermDebt,
  municipalDebtExamMath,
  // Accounts & processing (400)
  accountTypesOwnershipAndAuthority,
  optionsAccountApprovalAndSpecialDocs,
  openingAccountsCipApprovalAndSpecialSituations,
  confirmationsSettlementT1AndRegT,
  booksRecordsStatementsAndAcats,
  settlementDeliveryEdgeCasesAndExDate,
  // Crypto: DeFi & derivatives (300)
  defiLendingAndBorrowing,
  liquidityProvidingImpermanentLoss,
  perpetualFuturesAndFunding,
  leverageAndLiquidationCrypto,
  bridgesAndCrossChainRisk,
  cryptoRiskManagement,
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
