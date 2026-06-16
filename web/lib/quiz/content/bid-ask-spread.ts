import type { Question } from "@/lib/quiz/types";

// Quiz for the "Bid, ask, and the spread" lesson.
export const questions: Question[] = [
  {
    id: "bid-ask-spread.q1",
    lessonSlug: "bid-ask-spread",
    type: "single",
    difficulty: "easy",
    tags: ["spread", "orders"],
    prompt: "The **bid** is…",
    choices: [
      { id: "a", text: "The highest price a buyer is willing to pay" },
      { id: "b", text: "The lowest price a seller will accept", feedback: "That's the *ask* (offer), not the bid." },
      { id: "c", text: "The last price the stock traded at" },
      { id: "d", text: "The gap between buy and sell prices" },
    ],
    correctId: "a",
    explanation:
      "The **bid** is the highest price a **buyer** will pay; the **ask** is the lowest a **seller** will accept. The gap between them is the **spread**.",
  },
  {
    id: "bid-ask-spread.q2",
    lessonSlug: "bid-ask-spread",
    type: "single",
    difficulty: "easy",
    tags: ["spread", "orders"],
    prompt: "You place a **market buy** order right now. Which price do you pay?",
    choices: [
      { id: "a", text: "The bid", feedback: "You *receive* the bid when you sell now; buying pays the ask." },
      { id: "b", text: "The ask" },
      { id: "c", text: "The midpoint of bid and ask" },
      { id: "d", text: "Yesterday's close" },
    ],
    correctId: "b",
    explanation:
      "Buy now → you pay the **ask**. Sell now → you receive the **bid**. That's why buying and immediately selling loses you the spread.",
  },
  {
    id: "bid-ask-spread.q3",
    lessonSlug: "bid-ask-spread",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["spread", "math"],
    unit: "$",
    prompt:
      "Bid `$10.00`, ask `$10.05`. You buy 100 shares at the ask and immediately sell them at the bid. Ignoring fees, how much did you lose to the spread?",
    choices: [
      { id: "a", text: "$0" },
      { id: "b", text: "$5" },
      { id: "c", text: "$50", feedback: "Check the gap: it's $0.05 per share, not $0.50." },
      { id: "d", text: "$505" },
    ],
    correctId: "b",
    explanation:
      "The spread is `$10.05 − $10.00 = $0.05` per share. Over 100 shares that's `0.05 × 100 = $5`. You're down $5 before the price even moves.",
  },
  {
    id: "bid-ask-spread.q4",
    lessonSlug: "bid-ask-spread",
    type: "single",
    difficulty: "medium",
    tags: ["spread", "liquidity"],
    prompt: "A **tight** spread (a cent or two) usually signals…",
    choices: [
      { id: "a", text: "An illiquid asset with few participants" },
      { id: "b", text: "A liquid asset with many buyers and sellers" },
      { id: "c", text: "That the stock is about to fall" },
      { id: "d", text: "That fees will be higher" },
    ],
    correctId: "b",
    explanation:
      "A **tight** spread means lots of buyers and sellers — the asset is **liquid** and cheap to trade. **Wide** spreads mean few participants (illiquid), so each round trip costs more.",
  },
  {
    id: "bid-ask-spread.q5",
    lessonSlug: "bid-ask-spread",
    type: "single",
    difficulty: "medium",
    tags: ["spread", "orders"],
    prompt: "How does a **limit order** help with the spread?",
    choices: [
      { id: "a", text: "It guarantees your order fills instantly" },
      { id: "b", text: "It removes all trading fees" },
      { id: "c", text: "It lets you set your own price, at the risk of not getting filled" },
      { id: "d", text: "It forces you to pay the ask" },
    ],
    correctId: "c",
    explanation:
      "A **limit order** lets you name your price instead of accepting the bid/ask — a way to avoid paying the full spread. The trade-off: it might not fill.",
  },
  {
    id: "bid-ask-spread.q6",
    lessonSlug: "bid-ask-spread",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["spread", "math", "application"],
    unit: "$",
    prompt:
      "Bid `$20.00`, ask `$20.10`. You buy **200** shares at market, the quote doesn't move, and you sell all 200 at market. What does the round trip cost you in spread (ignoring fees)?",
    choices: [
      { id: "a", text: "$10" },
      { id: "b", text: "$20" },
      { id: "c", text: "$40", feedback: "Don't double the share count — the spread is $0.10 once per share." },
      { id: "d", text: "$0" },
    ],
    correctId: "b",
    explanation:
      "You buy at the ask and sell at the bid, losing the `$0.10` spread on each share **once**: `0.10 × 200 = $20`. The number of shares matters, but you don't pay the spread twice per share.",
  },
];
