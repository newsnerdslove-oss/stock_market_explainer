import type { Question } from "@/lib/quiz/types";

// Quiz for the "Crypto Risk Management & Portfolio" lesson.
export const questions: Question[] = [
  {
    id: "crypto-risk-management-and-portfolio.q1",
    lessonSlug: "crypto-risk-management-and-portfolio",
    type: "single",
    difficulty: "easy",
    tags: ["risk", "position-sizing"],
    prompt: "Taken literally, \"only invest what you can afford to lose\" means…",
    choices: [
      { id: "a", text: "Invest only on days the market is up" },
      { id: "b", text: "Size positions assuming any one can go to zero, without harming your finances" },
      { id: "c", text: "Only buy assets that can't lose value" },
      { id: "d", text: "Keep all your money in stablecoins" },
    ],
    correctId: "b",
    explanation:
      "It's a **risk budget**: assume any single position can hit zero (exploit, de-peg, rug, regulation) and size it so that outcome doesn't impair you or force a panic sale.",
  },
  {
    id: "crypto-risk-management-and-portfolio.q2",
    lessonSlug: "crypto-risk-management-and-portfolio",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["risk", "position-sizing", "scenario", "math"],
    prompt:
      "You have `$10,000` you can afford to lose and cap any single new-token bet at `5%`. If that token rugs to zero, what's your max loss on it?",
    choices: [
      { id: "a", text: "$5,000" },
      { id: "b", text: "$2,000", feedback: "That would be a `20%` cap — the rule here is `5%`." },
      { id: "c", text: "$500" },
      { id: "d", text: "$10,000" },
    ],
    correctId: "c",
    explanation:
      "`5% × $10,000 = $500`. Even a total loss on that single bet is bounded at `$500` — the whole point of a position-sizing rule.",
  },
  {
    id: "crypto-risk-management-and-portfolio.q3",
    lessonSlug: "crypto-risk-management-and-portfolio",
    type: "single",
    difficulty: "medium",
    tags: ["risk", "concentration", "correlation"],
    prompt: "You hold 6 small-cap alts that tend to crash together. What's the main risk?",
    choices: [
      { id: "a", text: "Concentration risk — high correlation makes it effectively one bet" },
      { id: "b", text: "Nothing — owning 6 tokens is well diversified" },
      { id: "c", text: "Impermanent loss" },
      { id: "d", text: "Funding-rate drag" },
    ],
    correctId: "a",
    explanation:
      "Highly correlated holdings move as one. Six alts that crash together are **concentration in disguise** — a single sector drawdown can take them all down at once.",
  },
  {
    id: "crypto-risk-management-and-portfolio.q4",
    lessonSlug: "crypto-risk-management-and-portfolio",
    type: "single",
    difficulty: "medium",
    tags: ["risk", "diversification"],
    prompt: "Real diversification in crypto means spreading across…",
    choices: [
      { id: "a", text: "As many tokens as possible, regardless of correlation" },
      { id: "b", text: "Only the largest coins by market cap" },
      { id: "c", text: "Different *types* of risk (market, smart-contract, counterparty, regulatory), not just more tickers" },
      { id: "d", text: "A single audited protocol with high APY" },
    ],
    correctId: "c",
    explanation:
      "Risk is multi-dimensional. Holding many correlated tokens leaves you exposed to the same failures — true diversification spreads across **kinds** of risk and custody venues.",
  },
  {
    id: "crypto-risk-management-and-portfolio.q5",
    lessonSlug: "crypto-risk-management-and-portfolio",
    type: "single",
    difficulty: "hard",
    tags: ["risk", "scam", "scenario"],
    prompt:
      "A token advertises \"20% weekly returns, audited, liquidity locked.\" How should you read this?",
    choices: [
      { id: "a", text: "An extreme red flag — implausible yield plus easily faked claims signals high risk or a scam" },
      { id: "b", text: "Safe passive income, since it's audited" },
      { id: "c", text: "A guaranteed return because liquidity is locked" },
      { id: "d", text: "Lower risk than holding ETH" },
    ],
    correctId: "a",
    explanation:
      "`20%` weekly is implausible, and \"audited\" / \"liquidity locked\" are trivially faked. If the yield looks too good to be true, the **yield is the risk** — this is a classic rug-pull setup.",
  },
  {
    id: "crypto-risk-management-and-portfolio.q6",
    lessonSlug: "crypto-risk-management-and-portfolio",
    type: "single",
    difficulty: "hard",
    tags: ["risk", "audit", "misconception"],
    prompt: "Why is \"audited + high APY = safe passive income\" wrong?",
    choices: [
      { id: "a", text: "Audits reduce but never eliminate smart-contract risk, and unusually high APY reflects unusually high risk" },
      { id: "b", text: "Audits make exploits impossible" },
      { id: "c", text: "High APY always means the protocol is over-funded and safe" },
      { id: "d", text: "Audited protocols are legally insured against loss" },
    ],
    correctId: "a",
    explanation:
      "Audited protocols are still exploited, and high APY usually comes from emissions dilution, IL, leverage, or fraud. A high advertised yield should **raise** your risk estimate, not lower it.",
  },
  {
    id: "crypto-risk-management-and-portfolio.q7",
    lessonSlug: "crypto-risk-management-and-portfolio",
    type: "single",
    difficulty: "medium",
    tags: ["risk", "volatility", "position-sizing"],
    prompt: "Why is stock-prudent position sizing often too large for crypto?",
    choices: [
      { id: "a", text: "Crypto fees are higher" },
      { id: "b", text: "Crypto trades fewer hours than stocks" },
      { id: "c", text: "Crypto positions can't be sold quickly" },
      { id: "d", text: "Crypto routinely moves `5-10%+` a day and `50-80%` a cycle, so the same size carries far more risk" },
    ],
    correctId: "d",
    explanation:
      "Crypto's volatility is extreme. A position size that's reasonable for a stock can swing violently here, so smaller positions plus a predefined max loss per trade are the safer default.",
  },
  {
    id: "crypto-risk-management-and-portfolio.q8",
    lessonSlug: "crypto-risk-management-and-portfolio",
    type: "single",
    difficulty: "hard",
    tags: ["risk", "correlation", "stablecoin"],
    prompt: "Why can diversification fail right when you need it most?",
    choices: [
      { id: "a", text: "In a crypto-wide crash, correlations spike — most alts fall together and even stablecoins can de-peg" },
      { id: "b", text: "Diversification only works during bull markets" },
      { id: "c", text: "Exchanges forcibly merge your positions in a crash" },
      { id: "d", text: "Stablecoins always rise when alts fall" },
    ],
    correctId: "a",
    explanation:
      "Correlations rise in a panic: assets that looked independent crash together, and \"stable\" assets can de-peg. That's why diversifying across risk **types** and custody venues matters, not just tickers.",
  },
  {
    id: "crypto-risk-management-and-portfolio.q9",
    lessonSlug: "crypto-risk-management-and-portfolio",
    type: "single",
    difficulty: "easy",
    tags: ["risk", "planning"],
    prompt: "When is the best time to decide your max size, max loss, and exit trigger?",
    choices: [
      { id: "a", text: "After the position is deep in the red" },
      { id: "b", text: "Only once you've already taken profit" },
      { id: "c", text: "Never — react to the market in real time" },
      { id: "d", text: "Before you enter, while you're calm — plan the exit before the entry" },
    ],
    correctId: "d",
    explanation:
      "Decide your limits **before** the volatility hits. Planning the exit before the entry keeps emotion out of the decision when prices are swinging.",
  },
];
