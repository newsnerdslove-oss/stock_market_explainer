import type { Question } from "@/lib/quiz/types";

// Quiz for the "Stop & Stop-Limit Orders" lesson.
export const questions: Question[] = [
  {
    id: "stop-and-stop-limit-orders.q1",
    lessonSlug: "stop-and-stop-limit-orders",
    type: "single",
    difficulty: "easy",
    tags: ["orders", "stop"],
    prompt: "A stop order does what before its stop price is reached?",
    choices: [
      { id: "a", text: "Trades immediately at the market price", feedback: "That's a market order — a stop stays dormant until triggered." },
      { id: "b", text: "Sits dormant, doing nothing" },
      { id: "c", text: "Fills a few shares at a time" },
      { id: "d", text: "Cancels itself after one minute" },
    ],
    correctId: "b",
    explanation:
      "A stop is **dormant** until the market reaches the stop price. Only then does it activate.",
  },
  {
    id: "stop-and-stop-limit-orders.q2",
    lessonSlug: "stop-and-stop-limit-orders",
    type: "single",
    difficulty: "easy",
    tags: ["orders", "stop-market"],
    prompt: "When triggered, a **stop (stop-market)** order becomes a…",
    choices: [
      { id: "a", text: "Limit order" },
      { id: "b", text: "Market order" },
      { id: "c", text: "Canceled order" },
      { id: "d", text: "Dividend payment" },
    ],
    correctId: "b",
    explanation:
      "A plain stop becomes a **market order** when triggered: near-certain fill, but the price can be worse in a fast market.",
  },
  {
    id: "stop-and-stop-limit-orders.q3",
    lessonSlug: "stop-and-stop-limit-orders",
    type: "single",
    difficulty: "medium",
    tags: ["orders", "stop-limit"],
    prompt: "When triggered, a **stop-limit** order becomes a…",
    choices: [
      { id: "a", text: "Market order with no price protection" },
      { id: "b", text: "Limit order at your chosen price" },
      { id: "c", text: "Guaranteed fill at the stop price", feedback: "Nothing about a stop-limit guarantees a fill — it can miss entirely if price gaps past the limit." },
      { id: "d", text: "Second stop order" },
    ],
    correctId: "b",
    explanation:
      "A stop-limit becomes a **limit order** at your limit price: your price is protected, but it may not fill if the stock blows past it.",
  },
  {
    id: "stop-and-stop-limit-orders.q4",
    lessonSlug: "stop-and-stop-limit-orders",
    type: "single",
    difficulty: "medium",
    tags: ["orders", "stop-loss"],
    prompt: "A **stop-loss** is typically…",
    choices: [
      { id: "a", text: "A sell stop set below your purchase price to cap losses" },
      { id: "b", text: "A buy stop set above the market to chase gains", feedback: "That's a different use of a stop; a stop-loss specifically protects an existing position from falling." },
      { id: "c", text: "A guarantee you sell at exactly your stop price" },
      { id: "d", text: "An order that only works after hours" },
    ],
    correctId: "a",
    explanation:
      "A **stop-loss** is a *sell* stop placed **below** your buy price to limit how much you can lose on the position.",
  },
  {
    id: "stop-and-stop-limit-orders.q5",
    lessonSlug: "stop-and-stop-limit-orders",
    type: "single",
    difficulty: "medium",
    tags: ["orders", "comparison"],
    prompt: "Which one-liner best captures a **stop-market**?",
    choices: [
      { id: "a", text: "\"Sell only at my price — fill uncertain\"" },
      { id: "b", text: "\"Definitely sell — price uncertain\"" },
      { id: "c", text: "\"Never sell unless I confirm\"" },
      { id: "d", text: "\"Sell exactly at the stop price, always\"" },
    ],
    correctId: "b",
    explanation:
      "Stop-market = *\"definitely sell, price uncertain.\"* Stop-limit is the opposite: *\"sell only at my price, fill uncertain.\"*",
  },
  {
    id: "stop-and-stop-limit-orders.q6",
    lessonSlug: "stop-and-stop-limit-orders",
    type: "single",
    difficulty: "hard",
    tags: ["orders", "misconception", "gap"],
    prompt: "Why does a stop-loss **not** guarantee selling at your stop price?",
    choices: [
      { id: "a", text: "Brokers ignore stop orders in fast markets" },
      { id: "b", text: "A plain stop becomes a market order, so a gap can fill well below the stop" },
      { id: "c", text: "Stop prices are only suggestions to other traders" },
      { id: "d", text: "Stop-losses can only be placed above the market" },
    ],
    correctId: "b",
    explanation:
      "A plain stop converts to a **market order**, which takes the best available price. If the stock **gaps** down, that price can be far below your stop — no guarantee.",
  },
  {
    id: "stop-and-stop-limit-orders.q7",
    lessonSlug: "stop-and-stop-limit-orders",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["orders", "stop-market", "gap", "math"],
    unit: "$",
    prompt:
      "You hold a stop-market **sell at $50**. Overnight the stock gaps and opens at `$44`. About what price does your order sell at?",
    choices: [
      { id: "a", text: "$50", feedback: "The stop becomes a *market* order — it fills at the available price, not the stop price." },
      { id: "b", text: "$44" },
      { id: "c", text: "$47" },
      { id: "d", text: "It doesn't sell at all" },
    ],
    correctId: "b",
    explanation:
      "Triggered, a stop-market becomes a market order and fills at the best available price — about `$44`, well below the `$50` stop, because the stock gapped past it.",
  },
  {
    id: "stop-and-stop-limit-orders.q8",
    lessonSlug: "stop-and-stop-limit-orders",
    type: "single",
    difficulty: "hard",
    tags: ["orders", "stop-limit", "gap", "application", "scenario"],
    prompt:
      "You set a **stop-limit to sell, stop $90 / limit $88**. Bad news gaps the stock open at `$85`. What happens?",
    choices: [
      { id: "a", text: "It sells at $85" },
      { id: "b", text: "It sells at $90" },
      { id: "c", text: "It doesn't fill — the price is below your $88 limit, so you keep holding" },
      { id: "d", text: "It sells at $88 automatically", feedback: "The market is at $85; a limit to sell no lower than $88 simply won't trade there." },
    ],
    correctId: "c",
    explanation:
      "The stop triggers, but it becomes a limit to sell **no lower than $88**. With the market at `$85`, the order **won't fill** — you still hold the stock as it falls. That's the stop-limit's risk.",
  },
  {
    id: "stop-and-stop-limit-orders.q9",
    lessonSlug: "stop-and-stop-limit-orders",
    type: "single",
    difficulty: "hard",
    tags: ["orders", "application", "scenario"],
    prompt:
      "You want to be **certain you exit** a falling position once it hits a trigger, even if the fill price is worse than you'd like. Which order?",
    choices: [
      { id: "a", text: "A stop-limit order" },
      { id: "b", text: "A stop-market (plain stop) order" },
      { id: "c", text: "A limit order above the market", feedback: "A limit above the market won't help you exit a *falling* position." },
      { id: "d", text: "No order — just watch the price" },
    ],
    correctId: "b",
    explanation:
      "When **certain exit** matters more than the exact price, use a **stop-market** — it becomes a market order and almost always fills, accepting price uncertainty.",
  },
  {
    id: "stop-and-stop-limit-orders.q10",
    lessonSlug: "stop-and-stop-limit-orders",
    type: "single",
    difficulty: "medium",
    tags: ["orders", "definition", "gap"],
    prompt: "A **gap** is when a stock…",
    choices: [
      { id: "a", text: "Trades sideways in a tight range" },
      { id: "b", text: "Jumps to a new price without trading in between" },
      { id: "c", text: "Pays a dividend" },
      { id: "d", text: "Splits its shares" },
    ],
    correctId: "b",
    explanation:
      "A **gap** is a jump to a new price with no trades in between — common at the open on news. Stops can trigger far from the stop price when a stock gaps.",
  },
];
