import { getQuiz } from "@/lib/quiz";
import { isChoiceQuestion, type ChoiceQuestion } from "@/lib/quiz/types";

// SIE-eligible lessons across the four SIE content areas (foundational + regulatory).
// Deliberately EXCLUDES Series-7-only material — options strategy, municipal/debt depth,
// margin math, advanced suitability — and crypto, none of which is on the SIE.
// Unknown slugs resolve to [] via getQuiz, so the list is safe to over-include.
const SIE_SLUGS: string[] = [
  // Knowledge of Capital Markets
  "what-is-a-stock-market",
  "market-participants",
  "primary-vs-secondary-market",
  "what-a-broker-does",
  "market-hours-and-sessions",
  "reading-a-stock-listing",
  "clearing-and-settlement",
  "exchanges-ecns-dark-pools",
  "how-market-makers-work",
  "order-book-and-market-depth",
  "trading-halts-and-circuit-breakers",
  "opening-and-closing-auctions",
  // Understanding Products & Their Risks (foundational only)
  "bond-prices-and-yields",
  "bond-types-and-funds",
  "credit-risk-and-ratings",
  "diversification",
  "risk-reward-ratio",
  "position-sizing",
  "market-capitalization",
  "sectors-and-indices",
  "eps-earnings-per-share",
  // Trading, Customer Accounts & Prohibited Activities
  "prohibited-practices-insider-trading-manipulation",
  "anti-money-laundering-bsa-patriot-act",
  "reporting-and-recordkeeping",
  // Overview of the Regulatory Framework
  "finra-self-regulatory-organization",
  "finra-disciplinary-process-and-complaints",
  "sec-and-foundational-federal-acts",
  "new-issues-underwriting-and-securities-act-exemptions",
  "registering-representatives-u4-u5-ce",
  "sie-series7-exam-and-registration-framework",
];

/** All SIE-eligible choice questions (deterministic order). */
export function getSiePool(): ChoiceQuestion[] {
  return SIE_SLUGS.flatMap((slug) => getQuiz(slug)).filter(isChoiceQuestion);
}

/**
 * A shuffled sample of `n` SIE questions for the free taster. Call this CLIENT-SIDE
 * (it uses Math.random) — e.g. inside a useEffect — to avoid an SSR hydration mismatch.
 */
export function getSieSampler(n = 50): ChoiceQuestion[] {
  const pool = getSiePool();
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, n);
}
