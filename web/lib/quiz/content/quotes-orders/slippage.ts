import type { Question } from "@/lib/quiz/types";

// Quiz for the "Slippage" lesson.
export const questions: Question[] = [
  {
    id: "slippage.q1",
    lessonSlug: "slippage",
    type: "single",
    difficulty: "easy",
    tags: ["slippage", "definition"],
    prompt: "**Slippage** is the difference between…",
    choices: [
      { id: "a", text: "The price you expected and the actual fill price" },
      { id: "b", text: "The bid and the ask", feedback: "That's the *spread* — slippage is expected vs. actual fill, though it's tied to the spread." },
      { id: "c", text: "The broker's fee and the exchange's fee" },
      { id: "d", text: "Today's price and yesterday's close" },
    ],
    correctId: "a",
    explanation:
      "**Slippage** is the gap between the price you **expected** (the quote you saw) and the **actual fill price**.",
  },
  {
    id: "slippage.q2",
    lessonSlug: "slippage",
    type: "single",
    difficulty: "easy",
    tags: ["slippage", "cause"],
    prompt: "Slippage mainly happens because…",
    choices: [
      { id: "a", text: "Brokers add a hidden charge" },
      { id: "b", text: "Prices move and the quote can be stale by the time you fill" },
      { id: "c", text: "Exchanges round prices up" },
      { id: "d", text: "Limit orders always fill late" },
    ],
    correctId: "b",
    explanation:
      "Slippage happens because **prices move** and the quote you saw can already be **stale** when your order reaches the market. It's not a fee.",
  },
  {
    id: "slippage.q3",
    lessonSlug: "slippage",
    type: "single",
    difficulty: "medium",
    tags: ["slippage", "factors"],
    prompt: "Which condition tends to make slippage **worse**?",
    choices: [
      { id: "a", text: "A liquid stock with a tight spread" },
      { id: "b", text: "Low liquidity and wide spreads" },
      { id: "c", text: "A calm, quiet market" },
      { id: "d", text: "A small order relative to volume" },
    ],
    correctId: "b",
    explanation:
      "**Low liquidity and wide spreads** mean fewer shares near the quote, so your order reaches worse prices — bigger slippage. Volatility, large orders, and gaps make it worse too.",
  },
  {
    id: "slippage.q4",
    lessonSlug: "slippage",
    type: "single",
    difficulty: "medium",
    tags: ["slippage", "limit-order"],
    prompt: "How does a **limit order** help with slippage?",
    choices: [
      { id: "a", text: "It guarantees the order always fills" },
      { id: "b", text: "It prevents negative price surprises, since you won't fill worse than your limit" },
      { id: "c", text: "It removes the bid/ask spread entirely" },
      { id: "d", text: "It speeds up execution to avoid any movement", feedback: "Limits don't fill faster — they protect price, sometimes at the cost of not filling." },
    ],
    correctId: "b",
    explanation:
      "A **limit order** caps your price, so you'll never fill worse than your limit — preventing negative price surprises. The tradeoff is it may not fill at all.",
  },
  {
    id: "slippage.q5",
    lessonSlug: "slippage",
    type: "single",
    difficulty: "medium",
    tags: ["slippage", "misconception"],
    prompt: "True or false: \"Slippage only happens on huge institutional trades.\"",
    choices: [
      { id: "a", text: "True — small orders never slip" },
      { id: "b", text: "False — any market order can slip, especially in thin, fast stocks" },
      { id: "c", text: "True — retail brokers absorb all slippage" },
      { id: "d", text: "False — only limit orders slip" },
    ],
    correctId: "b",
    explanation:
      "**False.** Any market order can slip. Small accounts often feel it *most* in thinly traded, fast-moving stocks where even 100 shares moves the price.",
  },
  {
    id: "slippage.q6",
    lessonSlug: "slippage",
    type: "single",
    difficulty: "hard",
    tags: ["slippage", "spread", "concept"],
    prompt: "Slippage is closely tied to which other concept?",
    choices: [
      { id: "a", text: "The dividend yield" },
      { id: "b", text: "The bid/ask spread" },
      { id: "c", text: "The P/E ratio" },
      { id: "d", text: "The settlement date" },
    ],
    correctId: "b",
    explanation:
      "Slippage is tied to the **bid/ask spread** — the wider the spread, the more room there is to fill at a worse price.",
  },
  {
    id: "slippage.q7",
    lessonSlug: "slippage",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["slippage", "math"],
    unit: "$",
    prompt:
      "You expect to buy **200 shares at $25.00**, but the order fills at `$25.10`. What's your **total** slippage?",
    choices: [
      { id: "a", text: "$0.10", feedback: "That's the per-share slippage — multiply by 200 shares for the total." },
      { id: "b", text: "$20" },
      { id: "c", text: "$2" },
      { id: "d", text: "$200" },
    ],
    correctId: "b",
    explanation:
      "Per-share slippage = `$25.10 − $25.00 = $0.10`. Total = `200 × $0.10 = $20`.",
  },
  {
    id: "slippage.q8",
    lessonSlug: "slippage",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["slippage", "math"],
    unit: "$",
    prompt:
      "You see a stock last at `$10.00` and place a market buy for **100 shares** that fills at `$10.06`. What's the **total** slippage?",
    choices: [
      { id: "a", text: "$0.06" },
      { id: "b", text: "$6" },
      { id: "c", text: "$60", feedback: "That's off by 10× — 100 shares × $0.06 is $6, not $60." },
      { id: "d", text: "$1,006" },
    ],
    correctId: "b",
    explanation:
      "Per-share slippage = `$10.06 − $10.00 = $0.06`. Total = `100 × $0.06 = $6` (about 0.6% of the trade).",
  },
  {
    id: "slippage.q9",
    lessonSlug: "slippage",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["slippage", "math", "percent"],
    unit: "%",
    prompt:
      "You expected `$10.00` and filled at `$10.06`. What's the slippage as a **percent** of the expected price?",
    choices: [
      { id: "a", text: "0.6%" },
      { id: "b", text: "6%", feedback: "That's off by 10× — $0.06 ÷ $10.00 is 0.006, or 0.6%." },
      { id: "c", text: "0.06%" },
      { id: "d", text: "1.06%" },
    ],
    correctId: "a",
    explanation:
      "Percent slippage = `$0.06 ÷ $10.00 = 0.006 = 0.6%`.",
  },
  {
    id: "slippage.q10",
    lessonSlug: "slippage",
    type: "single",
    difficulty: "hard",
    tags: ["slippage", "application", "scenario"],
    prompt:
      "You want to buy a thinly traded stock right after a volatile earnings release without a nasty fill. Which step best **reduces** slippage?",
    choices: [
      { id: "a", text: "Send a large market order to get filled fast" },
      { id: "b", text: "Use a limit order and avoid trading in the most volatile moment" },
      { id: "c", text: "Buy the entire position in one big market order", feedback: "A large market order in a thin name sweeps the book — more slippage, not less." },
      { id: "d", text: "Ignore the spread since it doesn't matter" },
    ],
    correctId: "b",
    explanation:
      "Reduce slippage by using a **limit order** (caps your price) and **avoiding the most volatile moment**, plus trading liquid names and sizing sensibly to volume.",
  },
];
