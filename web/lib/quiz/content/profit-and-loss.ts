import type { Question } from "@/lib/quiz/types";

// Quiz for the "Profit & loss (P&L), realized and unrealized" lesson.
export const questions: Question[] = [
  {
    id: "profit-and-loss.q1",
    lessonSlug: "profit-and-loss",
    type: "single",
    difficulty: "easy",
    tags: ["pnl"],
    prompt: "**Unrealized** P&L is…",
    choices: [
      { id: "a", text: "Gain or loss on a position you still hold — a paper profit" },
      { id: "b", text: "Gain locked in once you've sold", feedback: "That's *realized* P&L — already in your pocket." },
      { id: "c", text: "The total fees you've paid" },
      { id: "d", text: "What you originally paid for the position" },
    ],
    correctId: "a",
    explanation:
      "**Unrealized** P&L is the gain/loss on a position you **still hold** — it moves every tick and isn't real until you sell. **Realized** P&L is locked in at the sale.",
  },
  {
    id: "profit-and-loss.q2",
    lessonSlug: "profit-and-loss",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["pnl", "math"],
    unit: "$",
    prompt:
      "You buy 10 shares at `$50` (cost basis `$500`). The price is now `$58`. What's your **unrealized** P&L?",
    choices: [
      { id: "a", text: "$8", feedback: "That's the per-share gain — multiply by the 10 shares." },
      { id: "b", text: "$80" },
      { id: "c", text: "$580" },
      { id: "d", text: "$800" },
    ],
    correctId: "b",
    explanation:
      "`P&L = (current price − cost basis per share) × shares = (58 − 50) × 10 = $80`. Sell here and that $80 becomes **realized**.",
  },
  {
    id: "profit-and-loss.q3",
    lessonSlug: "profit-and-loss",
    type: "single",
    difficulty: "easy",
    tags: ["pnl"],
    prompt: "When does a gain become **realized**?",
    choices: [
      { id: "a", text: "As soon as the price rises" },
      { id: "b", text: "At the end of each trading day" },
      { id: "c", text: "Once you sell and close the position" },
      { id: "d", text: "When you first buy the shares" },
    ],
    correctId: "c",
    explanation:
      "P&L is **realized** only when you **sell/close** the position. Until then it's unrealized — a paper profit that can still vanish.",
  },
  {
    id: "profit-and-loss.q4",
    lessonSlug: "profit-and-loss",
    type: "single",
    difficulty: "hard",
    tags: ["pnl", "costs", "breakeven"],
    prompt: "Why is your real **breakeven** a little **above** your purchase price?",
    choices: [
      { id: "a", text: "Taxes are charged before you buy" },
      { id: "b", text: "It must first cover the spread and fees" },
      { id: "c", text: "Share prices always rise over time" },
      { id: "d", text: "The cost basis excludes the purchase price" },
    ],
    correctId: "b",
    explanation:
      "You buy at the ask and sell at the bid, and fees add to the cost basis and subtract on exit. Price has to climb **past** the spread + fees before you're actually in profit.",
  },
  {
    id: "profit-and-loss.q5",
    lessonSlug: "profit-and-loss",
    type: "single",
    difficulty: "easy",
    tags: ["pnl", "costs"],
    prompt: "Your **cost basis** is…",
    choices: [
      { id: "a", text: "What you actually paid to acquire the position, including fees" },
      { id: "b", text: "The position's current market value" },
      { id: "c", text: "Only the share price, excluding any fees", feedback: "Fees are part of cost basis — they raise it." },
      { id: "d", text: "The price you expect to sell at" },
    ],
    correctId: "a",
    explanation:
      "**Cost basis** is what you paid to get in — share price **plus fees**. P&L is measured against it: `(current price − cost basis) × shares`.",
  },
];
