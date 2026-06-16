import type { Question } from "@/lib/quiz/types";

// Quiz for the "Market vs. Limit Orders" lesson.
export const questions: Question[] = [
  {
    id: "market-vs-limit-orders.q1",
    lessonSlug: "market-vs-limit-orders",
    type: "single",
    difficulty: "easy",
    tags: ["orders", "market-order"],
    prompt: "A **market order** instructs your broker to…",
    choices: [
      { id: "a", text: "Trade immediately at the best available price" },
      { id: "b", text: "Trade only at a price you specify or better", feedback: "That's a *limit* order — it controls price, not speed." },
      { id: "c", text: "Wait until the market closes to trade" },
      { id: "d", text: "Cancel if the price moves at all" },
    ],
    correctId: "a",
    explanation:
      "A **market order** trades **right now at the best available price**. You get near-certain execution, but no control over the exact price.",
  },
  {
    id: "market-vs-limit-orders.q2",
    lessonSlug: "market-vs-limit-orders",
    type: "single",
    difficulty: "easy",
    tags: ["orders", "limit-order"],
    prompt: "A **limit buy** order at `$49.90` will…",
    choices: [
      { id: "a", text: "Buy at $49.90 or higher" },
      { id: "b", text: "Buy only at $49.90 or lower" },
      { id: "c", text: "Always buy immediately at the market price", feedback: "That describes a market order — a limit waits for your price." },
      { id: "d", text: "Sell shares at $49.90" },
    ],
    correctId: "b",
    explanation:
      "A limit **buy** trades only at your limit **or better** — so `$49.90 or lower`. (A limit *sell* fills at your price or *higher*.)",
  },
  {
    id: "market-vs-limit-orders.q3",
    lessonSlug: "market-vs-limit-orders",
    type: "single",
    difficulty: "medium",
    tags: ["orders", "tradeoff"],
    prompt: "The core tradeoff between market and limit orders is between…",
    choices: [
      { id: "a", text: "Higher fees vs. lower fees" },
      { id: "b", text: "Buying vs. selling" },
      { id: "c", text: "Certainty of execution vs. certainty of price" },
      { id: "d", text: "Daytime vs. after-hours trading" },
    ],
    correctId: "c",
    explanation:
      "Market orders give **certainty of execution** (you'll almost surely fill); limit orders give **certainty of price** (never worse than your limit, but may not fill).",
  },
  {
    id: "market-vs-limit-orders.q4",
    lessonSlug: "market-vs-limit-orders",
    type: "single",
    difficulty: "medium",
    tags: ["orders", "limit-order", "outcomes"],
    prompt: "You place a limit buy that never reaches your price before it expires. What happens?",
    choices: [
      { id: "a", text: "The broker fills it at the market price anyway", feedback: "A limit never fills worse than your price — it won't convert to a market order on its own." },
      { id: "b", text: "Nothing trades — an unfilled limit is a real outcome" },
      { id: "c", text: "It automatically becomes a market order" },
      { id: "d", text: "You're charged a penalty for not filling" },
    ],
    correctId: "b",
    explanation:
      "An **unfilled limit order is a normal outcome**. If the price never reaches your limit before expiry, you simply don't trade — by design.",
  },
  {
    id: "market-vs-limit-orders.q5",
    lessonSlug: "market-vs-limit-orders",
    type: "single",
    difficulty: "medium",
    tags: ["orders", "market-order", "liquidity"],
    prompt: "On which kind of stock is a **market order** most predictable?",
    choices: [
      { id: "a", text: "A liquid stock with a tight bid/ask spread" },
      { id: "b", text: "A thinly traded micro-cap" },
      { id: "c", text: "A stock in the middle of a volatile news spike" },
      { id: "d", text: "A stock with a very wide spread" },
    ],
    correctId: "a",
    explanation:
      "Market orders are most predictable on **liquid, tight-spread** stocks, where the price barely moves between your click and your fill.",
  },
  {
    id: "market-vs-limit-orders.q6",
    lessonSlug: "market-vs-limit-orders",
    type: "single",
    difficulty: "hard",
    tags: ["orders", "misconception"],
    prompt: "Why might a market order **not** fill at the exact price shown on screen?",
    choices: [
      { id: "a", text: "Brokers add a hidden surcharge to the quote" },
      { id: "b", text: "The quote can move before you fill, so the actual price may differ (slippage)" },
      { id: "c", text: "Market orders always fill below the quoted price" },
      { id: "d", text: "The screen price is only an estimate for limit orders" },
    ],
    correctId: "b",
    explanation:
      "The quote can move in the moment between your click and your fill, so your actual price may differ. That gap is **slippage** — it's why a market order doesn't guarantee the on-screen price.",
  },
  {
    id: "market-vs-limit-orders.q7",
    lessonSlug: "market-vs-limit-orders",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["orders", "market-order", "math"],
    unit: "$",
    prompt:
      "A stock last printed at `$30.00`, but the best **ask** is `$30.10`. You send a **market buy for 100 shares**. About how much do you pay?",
    choices: [
      { id: "a", text: "$3,000", feedback: "That uses the last print, but a market buy fills at the best *ask*, which is higher here." },
      { id: "b", text: "$3,010" },
      { id: "c", text: "$30.10" },
      { id: "d", text: "$3,001" },
    ],
    correctId: "b",
    explanation:
      "A market buy fills at the best **ask**, not the last print: `100 × $30.10 = $3,010`.",
  },
  {
    id: "market-vs-limit-orders.q8",
    lessonSlug: "market-vs-limit-orders",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["orders", "market-order", "math", "application"],
    unit: "$",
    prompt:
      "Last price `$50.00`. You place a **market buy for 100 shares** and it fills at `$50.04`. What's your total cost?",
    choices: [
      { id: "a", text: "$5,000" },
      { id: "b", text: "$5,004" },
      { id: "c", text: "$50.04" },
      { id: "d", text: "$4,996", feedback: "Subtracting the slip is backwards — you paid *above* the last print, so cost is higher." },
    ],
    correctId: "b",
    explanation:
      "Cost = fill price × shares = `$50.04 × 100 = $5,004` — four dollars above the last print, because the fill came in at `$50.04`.",
  },
  {
    id: "market-vs-limit-orders.q9",
    lessonSlug: "market-vs-limit-orders",
    type: "single",
    difficulty: "hard",
    tags: ["orders", "application", "scenario"],
    prompt:
      "You want to buy a stock but refuse to pay more than `$25.00` per share, and you're fine waiting or not trading at all. Which order fits best?",
    choices: [
      { id: "a", text: "A market order" },
      { id: "b", text: "A limit buy at $25.00" },
      { id: "c", text: "A market order placed after hours", feedback: "Timing doesn't add price control — only a limit caps the price you'll pay." },
      { id: "d", text: "Any order — they all cap your price" },
    ],
    correctId: "b",
    explanation:
      "Refusing to pay above a set price, while accepting that you might not fill, is exactly what a **limit buy at $25.00** gives you: certainty of price over certainty of execution.",
  },
  {
    id: "market-vs-limit-orders.q10",
    lessonSlug: "market-vs-limit-orders",
    type: "single",
    difficulty: "hard",
    tags: ["orders", "application", "scenario"],
    prompt:
      "Breaking news is moving a liquid stock fast and you need to exit **right now**, accepting whatever price you get. Best choice?",
    choices: [
      { id: "a", text: "A limit sell well above the current price", feedback: "A limit set above the market may never fill — the opposite of getting out immediately." },
      { id: "b", text: "A market sell order" },
      { id: "c", text: "Wait for the news to settle before deciding" },
      { id: "d", text: "Cancel all orders and do nothing" },
    ],
    correctId: "b",
    explanation:
      "When **getting out now** matters more than the exact price, a **market order** is the fit — it prioritizes certainty of execution over certainty of price.",
  },
];
