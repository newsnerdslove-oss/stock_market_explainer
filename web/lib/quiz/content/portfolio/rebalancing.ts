import type { Question } from "@/lib/quiz/types";

// Quiz for the "Rebalancing: Selling Winners to Stay on Target" lesson.
export const questions: Question[] = [
  {
    id: "rebalancing.q1",
    lessonSlug: "rebalancing",
    type: "single",
    difficulty: "easy",
    tags: ["portfolio", "rebalancing"],
    prompt: "Rebalancing a portfolio tends to mean…",
    choices: [
      { id: "a", text: "Selling what grew (winners) and buying what lagged (losers)" },
      { id: "b", text: "Selling losers and buying more winners" },
      { id: "c", text: "Selling everything and holding cash" },
      { id: "d", text: "Never trading at all" },
    ],
    correctId: "a",
    explanation:
      "Rebalancing trades back to target, which mechanically **sells what rose** (now overweight) and **buys what fell** (now underweight) — a built-in buy-low, sell-high discipline.",
  },
  {
    id: "rebalancing.q2",
    lessonSlug: "rebalancing",
    type: "single",
    difficulty: "easy",
    tags: ["portfolio", "drift"],
    prompt: "Why does a portfolio drift away from its target weights over time?",
    choices: [
      { id: "a", text: "Because the investor keeps trading" },
      { id: "b", text: "Because asset classes grow at different rates" },
      { id: "c", text: "Because fees are deducted equally" },
      { id: "d", text: "Because targets change automatically" },
    ],
    correctId: "b",
    explanation:
      "**Drift** comes from asset classes growing at *different* rates. Winners enlarge their share of the portfolio even if you never trade.",
  },
  {
    id: "rebalancing.q3",
    lessonSlug: "rebalancing",
    type: "single",
    difficulty: "medium",
    tags: ["portfolio", "rebalancing", "purpose"],
    prompt: "Rebalancing is best understood primarily as a…",
    choices: [
      { id: "a", text: "Guaranteed way to boost returns" },
      { id: "b", text: "Risk-control tool that keeps the mix near its target" },
      { id: "c", text: "Tax-avoidance strategy" },
      { id: "d", text: "Market-timing signal" },
    ],
    correctId: "b",
    explanation:
      "Rebalancing is mainly about **risk control** — keeping the allocation near its intended level. It won't always raise returns; in a long bull run, trimming winners can even lag buy-and-hold.",
  },
  {
    id: "rebalancing.q4",
    lessonSlug: "rebalancing",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["portfolio", "rebalancing", "math"],
    unit: "$",
    prompt:
      "Target `60/40`, total `$50,000`. Stocks have drifted to `66%` (`$33,000`). What trade restores the target?",
    choices: [
      { id: "a", text: "Sell $3,000 of stocks, buy $3,000 of bonds" },
      { id: "b", text: "Buy $3,000 of stocks" },
      { id: "c", text: "Sell $6,000 of stocks", feedback: "The target stock value is `0.60 × 50,000 = $30,000`, so the gap is `$3,000`, not `$6,000`." },
      { id: "d", text: "Do nothing" },
    ],
    correctId: "a",
    explanation:
      "Target stocks `= 0.60 × $50,000 = $30,000`. Current is `$33,000`, so **sell `$3,000`** of stocks and **buy `$3,000`** of bonds.",
  },
  {
    id: "rebalancing.q5",
    lessonSlug: "rebalancing",
    type: "single",
    difficulty: "medium",
    tags: ["portfolio", "rebalancing", "scenario"],
    prompt:
      "An investor wants to keep trading (and taxes) to a minimum and act only on big moves. Which approach fits?",
    choices: [
      { id: "a", text: "Calendar rebalancing every month" },
      { id: "b", text: "Threshold (band) rebalancing — trade only when a weight breaches its band" },
      { id: "c", text: "Rebalancing after every market open" },
      { id: "d", text: "Never setting a target at all" },
    ],
    correctId: "b",
    explanation:
      "**Threshold (band)** rebalancing trades only when a weight drifts beyond its band (e.g. `±5` points), so it fires less often than a fixed calendar schedule — fewer trades, fewer taxable events.",
  },
  {
    id: "rebalancing.q6",
    lessonSlug: "rebalancing",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["portfolio", "rebalancing", "math"],
    unit: "$",
    prompt:
      "Target `50/50`, total `$220,000` (stocks `$130,000`, bonds `$90,000`). What trades restore the target?",
    choices: [
      { id: "a", text: "Sell $20,000 of stocks, buy $20,000 of bonds" },
      { id: "b", text: "Sell $40,000 of stocks, buy $40,000 of bonds", feedback: "That's the full gap *between* the two holdings; the trade to target is half of it — `$20,000`." },
      { id: "c", text: "Buy $20,000 of stocks" },
      { id: "d", text: "Sell $10,000 of stocks" },
    ],
    correctId: "a",
    explanation:
      "Target each side `= 0.50 × $220,000 = $110,000`. Stocks are `$130,000` (over by `$20,000`), bonds `$90,000` (under by `$20,000`). **Sell `$20,000`** of stocks, **buy `$20,000`** of bonds.",
  },
  {
    id: "rebalancing.q7",
    lessonSlug: "rebalancing",
    type: "single",
    difficulty: "hard",
    tags: ["portfolio", "rebalancing", "taxes"],
    prompt:
      "In a **taxable** account, what's the drawback of rebalancing by selling winners — and one way to soften it?",
    choices: [
      { id: "a", text: "It triggers capital gains; soften it by directing new contributions to the underweight asset" },
      { id: "b", text: "It is illegal; soften it by never selling" },
      { id: "c", text: "It has no tax effect; nothing to soften" },
      { id: "d", text: "It eliminates all future taxes" },
    ],
    correctId: "a",
    explanation:
      "Selling winners in a taxable account realizes **capital gains**. You can soften this by steering new contributions to the underweight asset, or rebalancing within tax-advantaged accounts.",
  },
  {
    id: "rebalancing.q8",
    lessonSlug: "rebalancing",
    type: "single",
    difficulty: "medium",
    tags: ["portfolio", "rebalancing", "band"],
    prompt:
      "Target `60%` stocks with a `±5`-point band (`55–65%`). Stocks have drifted to `64.1%`. Under a strict threshold rule, what happens?",
    choices: [
      { id: "a", text: "It triggers a trade because stocks rose above 60%" },
      { id: "b", text: "No trade — `64.1%` is still inside the `55–65%` band" },
      { id: "c", text: "The whole portfolio is liquidated" },
      { id: "d", text: "The band automatically widens to allow it" },
    ],
    correctId: "b",
    explanation:
      "A threshold rule trades only when a weight breaches its band. `64.1%` is still within `55–65%`, so it wouldn't trigger — though a calendar rule due that day would trade anyway.",
  },
];
