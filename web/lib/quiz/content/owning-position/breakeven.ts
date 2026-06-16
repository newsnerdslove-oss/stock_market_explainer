import type { Question } from "@/lib/quiz/types";

// Quiz for the "Breakeven" lesson.
export const questions: Question[] = [
  {
    id: "breakeven.q1",
    lessonSlug: "breakeven",
    type: "single",
    difficulty: "easy",
    tags: ["breakeven", "definition"],
    prompt: "Your **breakeven price** is the price at which…",
    choices: [
      { id: "a", text: "Selling leaves you exactly even after all costs" },
      { id: "b", text: "The stock first turns a profit no matter the fees", feedback: "Profit only starts *above* breakeven — at breakeven you're exactly even." },
      { id: "c", text: "Your broker waives all commissions" },
      { id: "d", text: "The dividend covers your fees" },
    ],
    correctId: "a",
    explanation:
      "**Breakeven** is the per-share price where selling leaves you exactly even once all costs are covered. Below it = loss, above it = profit.",
  },
  {
    id: "breakeven.q2",
    lessonSlug: "breakeven",
    type: "single",
    difficulty: "easy",
    tags: ["breakeven", "fees"],
    prompt: "With **zero fees**, your breakeven price is equal to…",
    choices: [
      { id: "a", text: "Your cost basis per share" },
      { id: "b", text: "Double your purchase price" },
      { id: "c", text: "The current market price" },
      { id: "d", text: "The bid price" },
    ],
    correctId: "a",
    explanation:
      "With no fees there's nothing extra to recover, so breakeven equals your **cost basis per share** — just get back to your buy price.",
  },
  {
    id: "breakeven.q3",
    lessonSlug: "breakeven",
    type: "numericChoice",
    difficulty: "medium",
    unit: "$",
    tags: ["breakeven", "fees", "math"],
    prompt:
      "You buy **100 shares @ $20** with a **$5** buy fee and expect a **$5** sell fee. What's your breakeven price per share?",
    choices: [
      { id: "a", text: "$20.00", feedback: "That ignores the fees — you must recover both the buy and sell costs first." },
      { id: "b", text: "$20.05" },
      { id: "c", text: "$20.10" },
      { id: "d", text: "$20.50" },
    ],
    correctId: "c",
    explanation:
      "`(purchase + buy fee + sell fee) ÷ shares = ($2,000 + $5 + $5) ÷ 100 = $2,010 ÷ 100 = $20.10`.",
  },
  {
    id: "breakeven.q4",
    lessonSlug: "breakeven",
    type: "numericChoice",
    difficulty: "medium",
    unit: "$",
    tags: ["breakeven", "zero-commission", "math"],
    prompt:
      "Same trade — **100 shares @ $20** — but your broker charges **$0 commission** and there's no other fee. What's your breakeven?",
    choices: [
      { id: "a", text: "$20.00" },
      { id: "b", text: "$20.10", feedback: "That's the figure *with* $5 + $5 in fees — here commissions are $0." },
      { id: "c", text: "$19.90" },
      { id: "d", text: "$21.00" },
    ],
    correctId: "a",
    explanation:
      "With $0 commission there's nothing extra to recover, so breakeven ≈ cost basis = `$2,000 ÷ 100 = $20.00`.",
  },
  {
    id: "breakeven.q5",
    lessonSlug: "breakeven",
    type: "numericChoice",
    difficulty: "hard",
    unit: "$",
    tags: ["breakeven", "fees", "math"],
    prompt:
      "You buy **50 shares @ $40** with a **$10** buy fee and expect a **$10** sell fee. What's your breakeven price per share?",
    choices: [
      { id: "a", text: "$40.00", feedback: "You still have to recover $20 of round-trip fees on top of the purchase." },
      { id: "b", text: "$40.20" },
      { id: "c", text: "$40.40" },
      { id: "d", text: "$42.00" },
    ],
    correctId: "c",
    explanation:
      "`($2,000 + $10 + $10) ÷ 50 = $2,020 ÷ 50 = $40.40`. The $20 round-trip cost spread over 50 shares adds $0.40 per share.",
  },
  {
    id: "breakeven.q6",
    lessonSlug: "breakeven",
    type: "single",
    difficulty: "medium",
    tags: ["breakeven", "vocabulary"],
    prompt: "The combined cost of both buying **and** selling a position is called the…",
    choices: [
      { id: "a", text: "Round-trip cost" },
      { id: "b", text: "Net proceeds" },
      { id: "c", text: "Dividend yield" },
      { id: "d", text: "Margin call" },
    ],
    correctId: "a",
    explanation:
      "The buy-side and sell-side fees together are your **round-trip cost** — both legs must be recovered before you break even.",
  },
  {
    id: "breakeven.q7",
    lessonSlug: "breakeven",
    type: "single",
    difficulty: "medium",
    tags: ["breakeven", "spread", "hidden-costs"],
    prompt:
      "Your broker charges **$0 commission**, yet your true breakeven still sits slightly above your buy price. Why?",
    choices: [
      { id: "a", text: "The spread and slippage act like hidden costs" },
      { id: "b", text: "Dividends are subtracted from your shares" },
      { id: "c", text: "Brokers secretly add commission anyway" },
      { id: "d", text: "Cost basis excludes the purchase price" },
    ],
    correctId: "a",
    explanation:
      "Even at $0 commission you buy near the **ask** and sell near the **bid**, and fast markets cause **slippage**. Those hidden costs push real breakeven a bit higher.",
  },
  {
    id: "breakeven.q8",
    lessonSlug: "breakeven",
    type: "single",
    difficulty: "easy",
    tags: ["breakeven", "profit-loss"],
    prompt: "If you sell **below** your breakeven price, you have…",
    choices: [
      { id: "a", text: "A loss" },
      { id: "b", text: "A profit" },
      { id: "c", text: "Exactly broken even" },
      { id: "d", text: "A dividend" },
    ],
    correctId: "a",
    explanation:
      "Below breakeven = **loss**, above breakeven = profit, and right at it you're even. The line sits a touch above your purchase price once costs are counted.",
  },
  {
    id: "breakeven.q9",
    lessonSlug: "breakeven",
    type: "single",
    difficulty: "hard",
    tags: ["breakeven", "misconception", "application"],
    prompt:
      "A new trader buys at $50 (with fees), watches it return to exactly $50, and sells, sure they \"broke even.\" What actually happened?",
    choices: [
      { id: "a", text: "They broke even exactly, since the price matched their buy price" },
      { id: "b", text: "They took a small loss, because fees weren't recovered" },
      { id: "c", text: "They made a profit equal to the dividend" },
      { id: "d", text: "They can't tell without knowing the P/E" },
    ],
    correctId: "b",
    explanation:
      "Returning to the **purchase** price only breaks even with **zero fees**. With fees, true breakeven is above $50, so selling at $50 leaves a small **loss**.",
  },
];
