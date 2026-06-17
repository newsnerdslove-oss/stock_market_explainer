import type { Question } from "@/lib/quiz/types";

// Quiz for the "Hedging Equity With Options" lesson.
export const questions: Question[] = [
  {
    id: "hedging-with-options.q1",
    lessonSlug: "hedging-with-options",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "protective-put", "max-loss"],
    unit: "$",
    prompt:
      "Stock bought at `$40`; buy the `38` put @ `$1.50`. What is the **max loss** per share?",
    choices: [
      { id: "a", text: "$3.50" },
      { id: "b", text: "$2.00", feedback: "That's just the gap to the strike — you must also add the $1.50 put premium you paid." },
      { id: "c", text: "$1.50" },
      { id: "d", text: "$41.50" },
    ],
    correctId: "a",
    explanation:
      "Max loss = stock cost − put strike + premium = `40 − 38 + 1.50 = $3.50` per share (`$350`).",
  },
  {
    id: "hedging-with-options.q2",
    lessonSlug: "hedging-with-options",
    type: "numericChoice",
    difficulty: "easy",
    tags: ["fn:3", "protective-put", "breakeven"],
    unit: "$",
    prompt: "Same protective put (stock at `$40`, `38` put @ `$1.50`). What is the **breakeven**?",
    choices: [
      { id: "a", text: "$41.50" },
      { id: "b", text: "$38.50", feedback: "Breakeven is measured from the stock cost, not the strike: 40 + 1.50." },
      { id: "c", text: "$39.50" },
      { id: "d", text: "$40.00" },
    ],
    correctId: "a",
    explanation:
      "Breakeven = stock cost + put premium = `40 + 1.50 = $41.50`. The stock must clear the premium before you profit.",
  },
  {
    id: "hedging-with-options.q3",
    lessonSlug: "hedging-with-options",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "collar", "max-loss"],
    unit: "$",
    prompt:
      "Collar on stock at `$30`: long the `27` put @ `$0.90`, short the `34` call @ `$0.60`. What is the **max loss** per share?",
    choices: [
      { id: "a", text: "$3.30" },
      { id: "b", text: "$3.00", feedback: "That ignores the $0.30 net premium — add the net debit to the gap from cost to put strike." },
      { id: "c", text: "$3.70" },
      { id: "d", text: "$2.70" },
    ],
    correctId: "a",
    explanation:
      "Net premium = `0.90 − 0.60 = $0.30` debit. Max loss = `(30 − 27) + 0.30 = $3.30` per share (`$330`).",
  },
  {
    id: "hedging-with-options.q4",
    lessonSlug: "hedging-with-options",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "collar", "max-gain"],
    unit: "$",
    prompt:
      "Same collar (stock `$30`, `27` put @ `$0.90`, `34` call @ `$0.60`). What is the **max gain** per share?",
    choices: [
      { id: "a", text: "$3.70" },
      { id: "b", text: "$4.00", feedback: "That's the raw gap to the call strike — subtract the $0.30 net premium paid." },
      { id: "c", text: "$3.30" },
      { id: "d", text: "$4.30" },
    ],
    correctId: "a",
    explanation:
      "Max gain = `(call strike − cost) − net premium = (34 − 30) − 0.30 = $3.70` per share (`$370`).",
  },
  {
    id: "hedging-with-options.q5",
    lessonSlug: "hedging-with-options",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "collar", "breakeven"],
    unit: "$",
    prompt:
      "Same collar (stock `$30`, `27` put @ `$0.90`, `34` call @ `$0.60`). What is the **breakeven**?",
    choices: [
      { id: "a", text: "$30.30" },
      { id: "b", text: "$29.70", feedback: "Net premium is a debit, so it raises breakeven above cost: 30 + 0.90 − 0.60 = 30.30." },
      { id: "c", text: "$30.00" },
      { id: "d", text: "$31.50" },
    ],
    correctId: "a",
    explanation:
      "Breakeven = stock cost + put premium − call premium = `30 + 0.90 − 0.60 = $30.30`.",
  },
  {
    id: "hedging-with-options.q6",
    lessonSlug: "hedging-with-options",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "married-put", "holding-period"],
    prompt: "What distinguishes a **married put** from a **protective put**?",
    choices: [
      { id: "a", text: "Timing and holding-period treatment — the married put is bought with the stock and doesn't restart the holding period" },
      { id: "b", text: "The married put uses a call instead of a put", feedback: "Both use a put — the difference is the timing of purchase and the tax/holding-period effect, not the option type." },
      { id: "c", text: "The married put has unlimited downside" },
      { id: "d", text: "The protective put caps the upside" },
    ],
    correctId: "a",
    explanation:
      "Mechanically identical; the difference is **timing/holding period**. A married put (bought with the stock) doesn't restart the clock; a protective put on already-held shares can suspend it.",
  },
  {
    id: "hedging-with-options.q7",
    lessonSlug: "hedging-with-options",
    type: "single",
    difficulty: "easy",
    tags: ["fn:3", "portfolio", "index"],
    prompt: "What is the standard way to hedge a **diversified equity portfolio** with options?",
    choices: [
      { id: "a", text: "Buy broad-based index puts (e.g. SPX), which are cash-settled" },
      { id: "b", text: "Buy a protective put on every individual holding", feedback: "That works but is costly and clumsy; one broad-based index put hedges the whole book." },
      { id: "c", text: "Sell covered calls on the index" },
      { id: "d", text: "Buy a single equity call" },
    ],
    correctId: "a",
    explanation:
      "A **broad-based index put** (like `SPX`, cash-settled) hedges the whole diversified book in one position.",
  },
  {
    id: "hedging-with-options.q8",
    lessonSlug: "hedging-with-options",
    type: "single",
    difficulty: "hard",
    tags: ["fn:3", "collar", "concept"],
    prompt:
      "A customer says the collar gives 'free downside protection.' Why is that wrong?",
    choices: [
      { id: "a", text: "The short call caps the upside at its strike — the protection is paid for with forgone gains" },
      { id: "b", text: "The collar actually has unlimited downside", feedback: "The long put sets a floor, so downside is limited — the issue is the capped upside, not unlimited downside." },
      { id: "c", text: "The put premium is always larger than the call premium" },
      { id: "d", text: "A collar requires no stock position" },
    ],
    correctId: "a",
    explanation:
      "The short call **caps the upside** at its strike. You finance the put by giving up gains above that strike — the protection isn't free, it's paid for with upside.",
  },
];
