import type { Question } from "@/lib/quiz/types";

// Quiz for the "Diversification & Correlation" lesson.
export const questions: Question[] = [
  {
    id: "diversification-and-correlation.q1",
    lessonSlug: "diversification-and-correlation",
    type: "single",
    difficulty: "easy",
    tags: ["portfolio", "correlation"],
    prompt: "A correlation of `ρ = −1` between two assets means they…",
    choices: [
      { id: "a", text: "Move exactly opposite to each other" },
      { id: "b", text: "Move exactly together" },
      { id: "c", text: "Are completely unrelated" },
      { id: "d", text: "Always lose money together" },
    ],
    correctId: "a",
    explanation:
      "Correlation runs from `−1` (perfectly opposite) through `0` (unrelated) to `+1` (in lockstep). At `ρ = −1` the two assets move exactly opposite, so their swings can fully cancel.",
  },
  {
    id: "diversification-and-correlation.q2",
    lessonSlug: "diversification-and-correlation",
    type: "single",
    difficulty: "easy",
    tags: ["portfolio", "diversification"],
    prompt: "The diversification benefit appears whenever two assets have a correlation that is…",
    choices: [
      { id: "a", text: "Exactly `+1`" },
      { id: "b", text: "Less than `+1`" },
      { id: "c", text: "Greater than `+1`" },
      { id: "d", text: "Exactly `0` only" },
    ],
    correctId: "b",
    explanation:
      "Any `ρ < +1` produces some diversification benefit — the swings don't fully line up, so volatility partly cancels. At exactly `+1` there is no benefit; lower correlations help more.",
  },
  {
    id: "diversification-and-correlation.q3",
    lessonSlug: "diversification-and-correlation",
    type: "single",
    difficulty: "medium",
    tags: ["portfolio", "risk-types"],
    prompt: "Diversification primarily reduces which kind of risk?",
    choices: [
      { id: "a", text: "Systematic (market-wide) risk" },
      { id: "b", text: "Unsystematic (company- or sector-specific) risk" },
      { id: "c", text: "Inflation risk only" },
      { id: "d", text: "All risk, completely" },
    ],
    correctId: "b",
    explanation:
      "Diversification averages away **unsystematic** (diversifiable) risk specific to companies or sectors. It cannot remove **systematic** risk — the market-wide moves that hit everything at once.",
  },
  {
    id: "diversification-and-correlation.q4",
    lessonSlug: "diversification-and-correlation",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["portfolio", "correlation", "math"],
    unit: "%",
    prompt:
      "Two equal-weight assets (`w = 50%` each) each have `σ = 20%`, with `ρ = 0`. What's the portfolio volatility `σₚ`?",
    choices: [
      { id: "a", text: "10.00%" },
      { id: "b", text: "14.14%" },
      { id: "c", text: "20.00%", feedback: "That's the result only at `ρ = +1`. With `ρ = 0` the cross term drops out and risk falls." },
      { id: "d", text: "40.00%" },
    ],
    correctId: "b",
    explanation:
      "`σ²ₚ = 0.5²×0.2² + 0.5²×0.2² + 2×0.5×0.5×0.2×0.2×0 = 0.01 + 0.01 + 0 = 0.02`, so `σₚ = √0.02 = 14.14%` — below the `20%` weighted average.",
  },
  {
    id: "diversification-and-correlation.q5",
    lessonSlug: "diversification-and-correlation",
    type: "single",
    difficulty: "medium",
    tags: ["portfolio", "diversification", "scenario"],
    prompt:
      "A fund calls itself \"diversified\" because it holds **40 different large US banks**. What's the most accurate critique?",
    choices: [
      { id: "a", text: "It's well diversified — 40 holdings is plenty" },
      { id: "b", text: "The holdings are highly correlated, so the diversification benefit is small" },
      { id: "c", text: "It has too few holdings to matter" },
      { id: "d", text: "Holding 40 stocks guarantees lower risk than any single stock" },
    ],
    correctId: "b",
    explanation:
      "What matters is **low correlation**, not the count. Forty banks tend to move together, so they're largely the same bet repeated — the diversification benefit is small.",
  },
  {
    id: "diversification-and-correlation.q6",
    lessonSlug: "diversification-and-correlation",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["portfolio", "correlation", "math"],
    unit: "%",
    prompt:
      "A `60/40` portfolio has `σ_stock = 15%`, `σ_bond = 5%`, and `ρ = 0.10`. What's `σₚ` (to two decimals)?",
    choices: [
      { id: "a", text: "9.41%" },
      { id: "b", text: "11.00%", feedback: "That's the *weighted-average* volatility — the actual `σₚ` is lower because `ρ < 1`." },
      { id: "c", text: "10.89%", feedback: "Check the addition: `0.0081 + 0.0004 + 0.00036 = 0.00886`, not `0.01186`." },
      { id: "d", text: "13.20%" },
    ],
    correctId: "a",
    explanation:
      "`σ²ₚ = 0.6²×0.15² + 0.4²×0.05² + 2×0.6×0.4×0.15×0.05×0.10 = 0.0081 + 0.0004 + 0.00036 = 0.00886`, so `σₚ = √0.00886 = 9.41%` — below the `11.0%` weighted average.",
  },
  {
    id: "diversification-and-correlation.q7",
    lessonSlug: "diversification-and-correlation",
    type: "single",
    difficulty: "medium",
    tags: ["portfolio", "correlation", "limits"],
    prompt: "What tends to happen to correlations during a market crash?",
    choices: [
      { id: "a", text: "They drift toward `+1`, weakening diversification when it's most wanted" },
      { id: "b", text: "They drift toward `−1`, strengthening diversification" },
      { id: "c", text: "They stay perfectly constant" },
      { id: "d", text: "They become irrelevant because volatility falls" },
    ],
    correctId: "a",
    explanation:
      "In crashes, correlations tend to rise toward `+1` — assets that normally diverge fall together (as in 2008), so diversification weakens exactly when you need it. \"Everything goes to 1\" is an oversimplification, but the direction is real.",
  },
  {
    id: "diversification-and-correlation.q8",
    lessonSlug: "diversification-and-correlation",
    type: "single",
    difficulty: "hard",
    tags: ["portfolio", "misconception"],
    prompt:
      "Which statement best captures why simply adding more holdings isn't enough?",
    choices: [
      { id: "a", text: "More holdings always means more diversification" },
      { id: "b", text: "What matters is low correlation among holdings, not their raw number" },
      { id: "c", text: "Fewer holdings is always safer" },
      { id: "d", text: "Diversification removes systematic risk if you own enough names" },
    ],
    correctId: "b",
    explanation:
      "Diversification depends on **low correlation**, not count. Fifty assets that move together add little; a handful of low-correlation assets can reduce risk far more. And nothing removes systematic risk.",
  },
];
