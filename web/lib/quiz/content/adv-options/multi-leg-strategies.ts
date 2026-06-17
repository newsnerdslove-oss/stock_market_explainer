import type { Question } from "@/lib/quiz/types";

// Quiz for the "Butterflies, Calendars & Strangles" lesson.
export const questions: Question[] = [
  {
    id: "multi-leg-strategies.q1",
    lessonSlug: "multi-leg-strategies",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "butterfly", "max-gain"],
    unit: "$",
    prompt:
      "Long put butterfly, strikes `90/95/100`, net debit `$1.20`. What is the **max gain** per contract?",
    choices: [
      { id: "a", text: "$380" },
      { id: "b", text: "$500", feedback: "$500 is the adjacent-strike distance — you must subtract the $1.20 debit." },
      { id: "c", text: "$120" },
      { id: "d", text: "$620" },
    ],
    correctId: "a",
    explanation:
      "Adjacent distance `$5`, debit `$1.20`. Max gain = `(5 − 1.20) × 100 = $380`, at the middle strike `95`.",
  },
  {
    id: "multi-leg-strategies.q2",
    lessonSlug: "multi-leg-strategies",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "butterfly", "breakeven"],
    unit: "$",
    prompt:
      "Same `90/95/100` put butterfly, debit `$1.20`. What is the **lower breakeven**?",
    choices: [
      { id: "a", text: "$91.20" },
      { id: "b", text: "$93.80", feedback: "$98.80 is the upper BE; the lower BE adds the debit to the low strike: 90 + 1.20." },
      { id: "c", text: "$88.80" },
      { id: "d", text: "$95.00" },
    ],
    correctId: "a",
    explanation:
      "Lower BE = low strike + debit = `90 + 1.20 = $91.20`. (Upper BE = `100 − 1.20 = $98.80`.)",
  },
  {
    id: "multi-leg-strategies.q3",
    lessonSlug: "multi-leg-strategies",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "strangle", "breakeven"],
    unit: "$",
    prompt:
      "Long strangle: buy the `55` call @ `$2` and the `45` put @ `$1.50`. What is the **upper breakeven**?",
    choices: [
      { id: "a", text: "$58.50" },
      { id: "b", text: "$57.00", feedback: "That adds only the call's premium — use the total premium of both legs ($3.50) at the call strike." },
      { id: "c", text: "$56.50" },
      { id: "d", text: "$41.50" },
    ],
    correctId: "a",
    explanation:
      "Total premium = `2 + 1.50 = $3.50`. Upper BE = call strike + total = `55 + 3.50 = $58.50`.",
  },
  {
    id: "multi-leg-strategies.q4",
    lessonSlug: "multi-leg-strategies",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "strangle", "breakeven"],
    unit: "$",
    prompt:
      "Same strangle (`55` call @ `$2`, `45` put @ `$1.50`). What is the **lower breakeven**?",
    choices: [
      { id: "a", text: "$41.50" },
      { id: "b", text: "$43.50", feedback: "That subtracts only the put's premium — use the $3.50 total premium at the put strike." },
      { id: "c", text: "$46.50" },
      { id: "d", text: "$58.50" },
    ],
    correctId: "a",
    explanation:
      "Total premium = `$3.50`. Lower BE = put strike − total = `45 − 3.50 = $41.50`.",
  },
  {
    id: "multi-leg-strategies.q5",
    lessonSlug: "multi-leg-strategies",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "calendar", "diagonal"],
    prompt: "How does a **diagonal** spread differ from a **calendar** spread?",
    choices: [
      { id: "a", text: "The diagonal differs in both strike and expiration; the calendar shares one strike" },
      { id: "b", text: "The diagonal uses the same strike but different types", feedback: "Both legs of a calendar/diagonal are the same option type — the difference is the strike, not call vs. put." },
      { id: "c", text: "The diagonal is always a net credit" },
      { id: "d", text: "There is no difference" },
    ],
    correctId: "a",
    explanation:
      "A calendar shares the **same strike** (different expirations). A **diagonal** differs in **both** strike and expiration.",
  },
  {
    id: "multi-leg-strategies.q6",
    lessonSlug: "multi-leg-strategies",
    type: "single",
    difficulty: "easy",
    tags: ["fn:3", "calendar", "theta"],
    prompt: "A standard **calendar (horizontal) spread** is built by…",
    choices: [
      { id: "a", text: "Selling the near-term option and buying the longer-term option at the same strike" },
      { id: "b", text: "Buying the near-term and selling the longer-term", feedback: "That's reversed — you sell the faster-decaying near-term leg and buy the longer-dated one." },
      { id: "c", text: "Selling two options and buying two at different strikes" },
      { id: "d", text: "Buying a call and a put at the same strike" },
    ],
    correctId: "a",
    explanation:
      "A calendar **sells the near-term** and **buys the longer-term** at the same strike, harvesting the faster time decay of the short leg.",
  },
  {
    id: "multi-leg-strategies.q7",
    lessonSlug: "multi-leg-strategies",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "strangle", "straddle"],
    prompt: "Compared with a long straddle, a long **strangle** is…",
    choices: [
      { id: "a", text: "Cheaper, but with wider breakevens that require a bigger move" },
      { id: "b", text: "More expensive, with narrower breakevens", feedback: "The OTM legs make a strangle cheaper, not more expensive — and the breakevens widen, not narrow." },
      { id: "c", text: "Identical in cost and breakevens" },
      { id: "d", text: "A net-credit position" },
    ],
    correctId: "a",
    explanation:
      "Using OTM strikes makes the strangle **cheaper**, but the breakevens sit **farther apart**, so the stock must move **more** to profit.",
  },
  {
    id: "multi-leg-strategies.q8",
    lessonSlug: "multi-leg-strategies",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["fn:3", "butterfly", "max-loss"],
    unit: "$",
    prompt:
      "Long call butterfly: buy `45` @ `$7`, sell two `50` @ `$3.50`, buy `55` @ `$1.50`. What is the **max loss**?",
    choices: [
      { id: "a", text: "$150" },
      { id: "b", text: "$350", feedback: "$350 is the max gain at $50 — the max loss is just the net debit you paid." },
      { id: "c", text: "$500" },
      { id: "d", text: "$700" },
    ],
    correctId: "a",
    explanation:
      "Net debit = `7 − 7 + 1.50 = $1.50` (`$150`). For a long butterfly, max loss = the net debit, realized at or beyond either wing.",
  },
];
