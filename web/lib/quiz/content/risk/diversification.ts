import type { Question } from "@/lib/quiz/types";

// Quiz for the "Diversification: Don't Bet It All on One Name" lesson.
export const questions: Question[] = [
  {
    id: "diversification.q1",
    lessonSlug: "diversification",
    type: "numericChoice",
    difficulty: "easy",
    unit: "$",
    tags: ["risk", "diversification", "concentration", "math"],
    prompt:
      "All `$10,000` is in a single stock that drops `−30%`. What's the loss?",
    choices: [
      { id: "a", text: "$3,000" },
      { id: "b", text: "$300", feedback: "That's 3% of the account — the drop is 30%." },
      { id: "c", text: "$7,000" },
      { id: "d", text: "$1,000" },
    ],
    correctId: "a",
    explanation:
      "`$10,000 × 30% = $3,000`. With no diversification, the stock's full move is the portfolio's move.",
  },
  {
    id: "diversification.q2",
    lessonSlug: "diversification",
    type: "single",
    difficulty: "medium",
    tags: ["risk", "diversification", "scenario", "correlation"],
    prompt:
      "You hold `8` stocks — but all are large-cap banks. The banking sector falls `−20%`. What roughly happens to the portfolio?",
    choices: [
      { id: "a", text: "It falls about −20% too, because the holdings are correlated", feedback: undefined },
      { id: "b", text: "It's protected — 8 names means real diversification" },
      { id: "c", text: "It falls only −2.5% (the loss split eight ways)" },
      { id: "d", text: "It rises, since banks hedge each other" },
    ],
    correctId: "a",
    explanation:
      "Eight names in one sector move together. When the sector drops 20%, the whole portfolio drops roughly 20% — the same as a concentrated bet. Count of tickers isn't diversification; low correlation is.",
  },
  {
    id: "diversification.q3",
    lessonSlug: "diversification",
    type: "numericChoice",
    difficulty: "medium",
    unit: "%",
    tags: ["risk", "diversification", "math"],
    prompt:
      "`$10,000` is split into five uncorrelated `$2,000` positions. One falls `−40%`; the other four are flat. What's the portfolio return?",
    choices: [
      { id: "a", text: "−40%" },
      { id: "b", text: "−8%" },
      { id: "c", text: "−4%", feedback: "That would be if the others rose to offset; here the other four are flat, so the hit is $800 = −8%." },
      { id: "d", text: "−2%" },
    ],
    correctId: "b",
    explanation:
      "One position loses `$2,000 × 40% = $800`; the rest are flat. `−$800 ÷ $10,000 = −8%`. Spreading the bet cut the damage from −40% to −8%.",
  },
  {
    id: "diversification.q4",
    lessonSlug: "diversification",
    type: "single",
    difficulty: "medium",
    tags: ["risk", "diversification", "concept", "systematic"],
    prompt:
      "Which type of risk can diversification *not* remove?",
    choices: [
      { id: "a", text: "Company-specific (unsystematic) risk" },
      { id: "b", text: "Sector-specific risk" },
      { id: "c", text: "Systematic (market-wide) risk" },
      { id: "d", text: "Single-stock event risk" },
    ],
    correctId: "c",
    explanation:
      "Diversification reduces **unsystematic** (company/sector) risk by spreading bets. **Systematic** risk — recessions, rate shocks — hits the whole market and can't be diversified away.",
  },
  {
    id: "diversification.q5",
    lessonSlug: "diversification",
    type: "single",
    difficulty: "easy",
    tags: ["risk", "diversification", "concept", "correlation"],
    prompt:
      "What does the benefit of diversification mainly depend on?",
    choices: [
      { id: "a", text: "How many tickers you own" },
      { id: "b", text: "The correlation between your holdings" },
      { id: "c", text: "The total dollar value invested" },
      { id: "d", text: "The number of sectors that exist" },
    ],
    correctId: "b",
    explanation:
      "Low or negative **correlation** makes holdings' swings partly cancel, smoothing the portfolio. Near `+1` correlation gives almost no benefit, no matter how many names you hold.",
  },
  {
    id: "diversification.q6",
    lessonSlug: "diversification",
    type: "single",
    difficulty: "hard",
    tags: ["risk", "diversification", "misconception"],
    prompt:
      "*\"I own 10 stocks, so I'm diversified.\"* When is this false?",
    choices: [
      { id: "a", text: "It's always true — 10 names is enough" },
      { id: "b", text: "If they're correlated or all in one sector, you effectively own one position" },
      { id: "c", text: "Only if you own fewer than 5 stocks" },
      { id: "d", text: "Only if the stocks pay no dividends" },
    ],
    correctId: "b",
    explanation:
      "If the ten move together (same sector or high correlation), they behave like a single position. True diversification needs **low correlation**, not just a long ticker list.",
  },
  {
    id: "diversification.q7",
    lessonSlug: "diversification",
    type: "single",
    difficulty: "hard",
    tags: ["risk", "diversification", "edge-case", "crash"],
    prompt:
      "Why does diversification often protect you least during a market crash?",
    choices: [
      { id: "a", text: "Crashes only affect diversified portfolios" },
      { id: "b", text: "In a broad selloff, correlations spike toward +1 and holdings fall together" },
      { id: "c", text: "Brokers freeze diversified accounts in a crash" },
      { id: "d", text: "Diversified portfolios are exempt from crashes" },
    ],
    correctId: "b",
    explanation:
      "When fear grips the whole market, normally-independent assets sell off together — correlations jump toward `+1`. So diversification helps least exactly when you'd want it most.",
  },
  {
    id: "diversification.q8",
    lessonSlug: "diversification",
    type: "single",
    difficulty: "medium",
    tags: ["risk", "diversification", "diworsification"],
    prompt:
      "What is *\"diworsification\"*?",
    choices: [
      { id: "a", text: "Adding so many or so-correlated holdings that you gain complexity without real risk reduction" },
      { id: "b", text: "Diversifying into exactly the right number of stocks" },
      { id: "c", text: "Selling everything to hold cash" },
      { id: "d", text: "Concentrating in a single high-conviction name" },
    ],
    correctId: "a",
    explanation:
      "Past a point, piling on more holdings — especially correlated ones — adds tracking and complexity without meaningfully lowering risk. Thirty stocks in one theme is concentration in disguise.",
  },
  {
    id: "diversification.q9",
    lessonSlug: "diversification",
    type: "numericChoice",
    difficulty: "hard",
    unit: "%",
    tags: ["risk", "diversification", "scenario", "math"],
    prompt:
      "`$10,000` in five correlated `$2,000` positions, all in one sector that falls `−40%`. What's the portfolio return?",
    choices: [
      { id: "a", text: "−8%", feedback: "That would hold only if the others stayed flat — but a correlated sector drop hits all five." },
      { id: "b", text: "−40%" },
      { id: "c", text: "−4%" },
      { id: "d", text: "−20%" },
    ],
    correctId: "b",
    explanation:
      "All five drop `−40%` together: `5 × ($2,000 × 40%) = $4,000` lost on `$10,000` = `−40%` — identical to a fully concentrated bet. Correlation erased the diversification.",
  },
];
