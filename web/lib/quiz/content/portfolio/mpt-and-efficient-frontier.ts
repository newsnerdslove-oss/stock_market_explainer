import type { Question } from "@/lib/quiz/types";

// Quiz for the "Modern Portfolio Theory: The Efficient Frontier & Sharpe Ratio" lesson.
export const questions: Question[] = [
  {
    id: "mpt-and-efficient-frontier.q1",
    lessonSlug: "mpt-and-efficient-frontier",
    type: "single",
    difficulty: "easy",
    tags: ["portfolio", "mpt", "frontier"],
    prompt: "The efficient frontier shows the portfolios that…",
    choices: [
      { id: "a", text: "Maximize expected return for a given level of risk" },
      { id: "b", text: "Have the lowest possible return at every risk level" },
      { id: "c", text: "Hold only a single asset" },
      { id: "d", text: "Carry zero risk" },
    ],
    correctId: "a",
    explanation:
      "The **efficient frontier** is the set of portfolios offering the highest expected return for each level of risk. Anything below it is inefficient — you could do better for the same risk.",
  },
  {
    id: "mpt-and-efficient-frontier.q2",
    lessonSlug: "mpt-and-efficient-frontier",
    type: "single",
    difficulty: "easy",
    tags: ["portfolio", "mpt", "sharpe"],
    prompt: "The Sharpe ratio is calculated as…",
    choices: [
      { id: "a", text: "`σₚ ÷ (Rₚ − R_f)`" },
      { id: "b", text: "`(Rₚ − R_f) ÷ σₚ`" },
      { id: "c", text: "`Rₚ ÷ R_f`" },
      { id: "d", text: "`Rₚ × σₚ`" },
    ],
    correctId: "b",
    explanation:
      "`Sharpe = (Rₚ − R_f) ÷ σₚ` — the portfolio's excess return over the risk-free rate, divided by its standard deviation. Higher means more reward per unit of risk.",
  },
  {
    id: "mpt-and-efficient-frontier.q3",
    lessonSlug: "mpt-and-efficient-frontier",
    type: "numericChoice",
    difficulty: "easy",
    tags: ["portfolio", "sharpe", "math"],
    prompt:
      "A portfolio returns `9%` with `σ = 12%`. The risk-free rate is `3%`. What's its Sharpe ratio?",
    choices: [
      { id: "a", text: "0.50" },
      { id: "b", text: "0.75" },
      { id: "c", text: "1.00", feedback: "Subtract the risk-free rate first: `(9 − 3) ÷ 12`, not `9 ÷ 12` or `12 ÷ 12`." },
      { id: "d", text: "0.25" },
    ],
    correctId: "a",
    explanation:
      "`(9% − 3%) ÷ 12% = 6 ÷ 12 = 0.50`.",
  },
  {
    id: "mpt-and-efficient-frontier.q4",
    lessonSlug: "mpt-and-efficient-frontier",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["portfolio", "sharpe", "math", "comparison"],
    prompt:
      "With `R_f = 2%`, which is better risk-adjusted: X (return `10%`, `σ = 20%`) or Y (return `7%`, `σ = 10%`)?",
    choices: [
      { id: "a", text: "X — its higher return wins", feedback: "Higher raw return often just means more risk. Compare Sharpe ratios instead." },
      { id: "b", text: "Y — Sharpe `0.50` beats X's `0.40`" },
      { id: "c", text: "They tie at `0.50`" },
      { id: "d", text: "Y — Sharpe `0.70` beats X's `0.40`" },
    ],
    correctId: "b",
    explanation:
      "X: `(10 − 2) ÷ 20 = 0.40`. Y: `(7 − 2) ÷ 10 = 0.50`. **Y** delivers more excess return per unit of risk despite its lower raw return.",
  },
  {
    id: "mpt-and-efficient-frontier.q5",
    lessonSlug: "mpt-and-efficient-frontier",
    type: "single",
    difficulty: "medium",
    tags: ["portfolio", "sharpe", "scenario"],
    prompt:
      "A fund's ad boasts the **highest 1-year return** of any fund in its category. What's the soundest reaction?",
    choices: [
      { id: "a", text: "It's clearly the best fund — buy it" },
      { id: "b", text: "The high return may just reflect more risk; check the Sharpe ratio" },
      { id: "c", text: "High return guarantees low volatility" },
      { id: "d", text: "Past return guarantees future return" },
    ],
    correctId: "b",
    explanation:
      "A top raw return often just means the fund took more risk. The **Sharpe ratio** tells you whether that return was efficient — return per unit of risk — which is the fair comparison.",
  },
  {
    id: "mpt-and-efficient-frontier.q6",
    lessonSlug: "mpt-and-efficient-frontier",
    type: "single",
    difficulty: "medium",
    tags: ["portfolio", "mpt", "history"],
    prompt: "Modern Portfolio Theory's core insight, introduced by Markowitz in 1952, is to…",
    choices: [
      { id: "a", text: "Evaluate each asset in isolation by its own return" },
      { id: "b", text: "Judge a whole portfolio by its combined risk and return, not asset by asset" },
      { id: "c", text: "Always pick the single highest-returning asset" },
      { id: "d", text: "Avoid diversification to keep things simple" },
    ],
    correctId: "b",
    explanation:
      "**MPT** evaluates the *whole portfolio* by combined risk and return. Because low-correlation assets can cut risk without cutting return, diversification is called \"the only free lunch in investing.\"",
  },
  {
    id: "mpt-and-efficient-frontier.q7",
    lessonSlug: "mpt-and-efficient-frontier",
    type: "single",
    difficulty: "hard",
    tags: ["portfolio", "sharpe", "limits"],
    prompt: "A known limitation of the Sharpe ratio is that it…",
    choices: [
      { id: "a", text: "Ignores return entirely" },
      { id: "b", text: "Uses standard deviation, penalizing upside swings like downside and understating fat-tail risk" },
      { id: "c", text: "Can only be applied to a single stock" },
      { id: "d", text: "Requires the risk-free rate to be zero" },
    ],
    correctId: "b",
    explanation:
      "Sharpe assumes standard deviation captures risk, so it penalizes upside volatility the same as downside and understates rare-crash (fat-tail) risk. The **Sortino ratio** uses downside deviation to address the first issue.",
  },
  {
    id: "mpt-and-efficient-frontier.q8",
    lessonSlug: "mpt-and-efficient-frontier",
    type: "single",
    difficulty: "hard",
    tags: ["portfolio", "misconception"],
    prompt:
      "Portfolio B returned `12%` and Portfolio A returned `8%`, but both have a Sharpe ratio of `0.5`. What does this tell you?",
    choices: [
      { id: "a", text: "B is strictly better because it returned more" },
      { id: "b", text: "B's extra return came entirely from taking more risk; they're equally efficient" },
      { id: "c", text: "A is riskier than B" },
      { id: "d", text: "The Sharpe ratios must be miscalculated" },
    ],
    correctId: "b",
    explanation:
      "Equal Sharpe ratios mean equal excess return *per unit of risk*. B's higher raw return is fully explained by its higher risk — neither is more efficient on a risk-adjusted basis.",
  },
];
