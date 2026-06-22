import type { Question } from "@/lib/quiz/types";

// Quiz for the "Beta, CAPM & Alpha" lesson.
export const questions: Question[] = [
  {
    id: "beta-capm-and-alpha.q1",
    lessonSlug: "beta-capm-and-alpha",
    type: "single",
    difficulty: "easy",
    tags: ["portfolio", "beta", "systematic-risk"],
    prompt: "Beta (`β`) measures a stock's…",
    choices: [
      { id: "a", text: "Total volatility, including company-specific swings" },
      { id: "b", text: "Sensitivity to the overall market — its systematic (market) risk" },
      { id: "c", text: "Dividend yield relative to its price" },
      { id: "d", text: "Return above the risk-free rate" },
    ],
    correctId: "b",
    explanation:
      "**Beta** measures how much a stock moves relative to the market — its exposure to **systematic (market) risk**, the part diversification can't remove. The market itself has a beta of `1`.",
  },
  {
    id: "beta-capm-and-alpha.q2",
    lessonSlug: "beta-capm-and-alpha",
    type: "single",
    difficulty: "easy",
    tags: ["portfolio", "beta"],
    prompt:
      "A stock has `β = 0.6`. If the overall market falls `10%`, this stock would be expected to…",
    choices: [
      { id: "a", text: "Fall about `6%` — it dampens market moves" },
      { id: "b", text: "Fall about `16%`", feedback: "A beta below `1` *dampens* the market, it doesn't amplify it. Multiply: `0.6 × 10% = 6%`." },
      { id: "c", text: "Rise about `6%`", feedback: "A positive beta moves *with* the market. Only a negative beta would move inversely." },
      { id: "d", text: "Stay flat — beta below `1` means no market exposure" },
    ],
    correctId: "a",
    explanation:
      "`β = 0.6` means the stock moves about `0.6×` the market: `0.6 × −10% ≈ −6%`. A positive beta below `1` dampens market moves rather than amplifying them.",
  },
  {
    id: "beta-capm-and-alpha.q3",
    lessonSlug: "beta-capm-and-alpha",
    type: "single",
    difficulty: "easy",
    tags: ["portfolio", "beta"],
    prompt: "A **negative** beta means the asset tends to…",
    choices: [
      { id: "a", text: "Move in the same direction as the market, only faster" },
      { id: "b", text: "Carry no risk at all" },
      { id: "c", text: "Move inversely to the market — up when it falls, down when it rises" },
      { id: "d", text: "Always lose money" },
    ],
    correctId: "c",
    explanation:
      "A **negative beta** moves *opposite* the market. Such assets are rare; gold and certain hedges sometimes show it, especially in stressed periods. Negative beta is about direction, not guaranteed losses.",
  },
  {
    id: "beta-capm-and-alpha.q4",
    lessonSlug: "beta-capm-and-alpha",
    type: "single",
    difficulty: "medium",
    tags: ["portfolio", "capm", "formula"],
    prompt: "The CAPM expected-return formula is…",
    choices: [
      { id: "a", text: "`E(R) = R_f + β × (R_m − R_f)`" },
      { id: "b", text: "`E(R) = R_m − β × R_f`" },
      { id: "c", text: "`E(R) = β × R_m`" },
      { id: "d", text: "`E(R) = (R_m − R_f) ÷ β`" },
    ],
    correctId: "a",
    explanation:
      "**CAPM**: `E(R) = R_f + β × (R_m − R_f)`. You start with the risk-free rate, then add the market risk premium `(R_m − R_f)` scaled by the stock's beta.",
  },
  {
    id: "beta-capm-and-alpha.q5",
    lessonSlug: "beta-capm-and-alpha",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["portfolio", "capm", "math"],
    prompt:
      "Using CAPM, find the expected return for a stock with `β = 1.2`, given `R_f = 3%` and an expected market return `R_m = 8%`.",
    choices: [
      { id: "a", text: "`9%`" },
      { id: "b", text: "`9.6%`", feedback: "Don't forget to add the risk-free rate back. `1.2 × (8 − 3) = 6%`, then `+ 3%`." },
      { id: "c", text: "`6%`", feedback: "That's just the scaled premium `1.2 × 5%`. CAPM adds the risk-free rate `R_f` on top." },
      { id: "d", text: "`13%`" },
    ],
    correctId: "a",
    explanation:
      "Market risk premium: `8% − 3% = 5%`. Scale by beta: `1.2 × 5% = 6%`. Add the risk-free rate: `E(R) = 3% + 6% = 9%`.",
  },
  {
    id: "beta-capm-and-alpha.q6",
    lessonSlug: "beta-capm-and-alpha",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["portfolio", "alpha", "math"],
    prompt:
      "CAPM says a stock should be expected to return `11%`. It actually delivered `8%` over the period. Its alpha is…",
    choices: [
      { id: "a", text: "`+3%`", feedback: "Alpha is *realized minus expected*. Realized `8%` came in *below* the expected `11%`, so alpha is negative." },
      { id: "b", text: "`−3%`" },
      { id: "c", text: "`+8%`", feedback: "Alpha measures performance *relative to the CAPM expectation*, not the raw return. Subtract the expected `11%`." },
      { id: "d", text: "`+19%`" },
    ],
    correctId: "b",
    explanation:
      "**Alpha** = realized return − CAPM-expected return = `8% − 11% = −3%`. The stock underperformed what its risk justified, even though `8%` sounds fine in isolation.",
  },
  {
    id: "beta-capm-and-alpha.q7",
    lessonSlug: "beta-capm-and-alpha",
    type: "single",
    difficulty: "hard",
    tags: ["portfolio", "beta", "standard-deviation", "risk"],
    prompt:
      "A biotech with one make-or-break drug trial has a huge standard deviation but only a modest beta. Why doesn't CAPM reward that extra volatility?",
    choices: [
      { id: "a", text: "Standard deviation can't be calculated for biotech stocks" },
      { id: "b", text: "Most of its volatility is company-specific (idiosyncratic) and diversifiable, so the market won't pay you to bear it" },
      { id: "c", text: "Beta always equals standard deviation, so there's no extra risk" },
      { id: "d", text: "CAPM rewards total risk, not systematic risk" },
    ],
    correctId: "b",
    explanation:
      "**Standard deviation** captures *total* risk; **beta** captures only the *systematic* (market) slice. The biotech's big swings are mostly idiosyncratic — diversifiable away — so CAPM, which prices only non-diversifiable market risk, doesn't reward them.",
  },
];
