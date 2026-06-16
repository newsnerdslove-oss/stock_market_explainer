import type { Question } from "@/lib/quiz/types";

// Quiz for the "The Order Lifecycle" lesson.
export const questions: Question[] = [
  {
    id: "order-lifecycle.q1",
    lessonSlug: "order-lifecycle",
    type: "single",
    difficulty: "easy",
    tags: ["lifecycle", "status"],
    prompt: "A status of **Partially Filled (30/100)** means…",
    choices: [
      { id: "a", text: "30 shares traded; 70 are still working" },
      { id: "b", text: "The whole 100-share order is done" },
      { id: "c", text: "The order was rejected", feedback: "Rejected means the broker never accepted it — a partial fill has already traded some shares." },
      { id: "d", text: "30% of the price has been paid" },
    ],
    correctId: "a",
    explanation:
      "**Partially Filled (30/100)** means 30 shares have traded and the remaining 70 stay **working** until they fill, cancel, or expire.",
  },
  {
    id: "order-lifecycle.q2",
    lessonSlug: "order-lifecycle",
    type: "single",
    difficulty: "easy",
    tags: ["lifecycle", "routing"],
    prompt: "**Routing** an order means the broker…",
    choices: [
      { id: "a", text: "Cancels it" },
      { id: "b", text: "Sends it to a trading venue to find the other side" },
      { id: "c", text: "Holds it until settlement" },
      { id: "d", text: "Converts it to a dividend" },
    ],
    correctId: "b",
    explanation:
      "**Routing** is the broker forwarding your order to a venue (an exchange or market maker) where it can be matched with the other side of the trade.",
  },
  {
    id: "order-lifecycle.q3",
    lessonSlug: "order-lifecycle",
    type: "single",
    difficulty: "medium",
    tags: ["lifecycle", "settlement", "t+1"],
    prompt: "US stock trades currently settle on what timeline?",
    choices: [
      { id: "a", text: "Same day (T+0)" },
      { id: "b", text: "One business day after the trade (T+1)" },
      { id: "c", text: "Two business days after the trade (T+2)", feedback: "T+2 was the old standard; US equities moved to T+1 on May 28, 2024." },
      { id: "d", text: "One week after the trade" },
    ],
    correctId: "b",
    explanation:
      "Since **May 28, 2024**, US stock trades settle **T+1** — one business day after the trade date.",
  },
  {
    id: "order-lifecycle.q4",
    lessonSlug: "order-lifecycle",
    type: "single",
    difficulty: "medium",
    tags: ["lifecycle", "status"],
    prompt: "Which is **not** a normal ending state for an order?",
    choices: [
      { id: "a", text: "Filled" },
      { id: "b", text: "Canceled" },
      { id: "c", text: "Expired" },
      { id: "d", text: "Routed" },
    ],
    correctId: "d",
    explanation:
      "**Routed** is a mid-flight stage, not an ending. Orders *end* as Filled, Canceled, Rejected, or Expired (a partial fill is in-between until resolved).",
  },
  {
    id: "order-lifecycle.q5",
    lessonSlug: "order-lifecycle",
    type: "single",
    difficulty: "medium",
    tags: ["lifecycle", "settlement", "scenario"],
    prompt: "Your buy order **fills on a Monday**. Assuming a normal business week, when does it settle?",
    choices: [
      { id: "a", text: "Monday (same day)" },
      { id: "b", text: "Tuesday" },
      { id: "c", text: "Wednesday", feedback: "Wednesday would be T+2; US equities settle T+1 now." },
      { id: "d", text: "Friday" },
    ],
    correctId: "b",
    explanation:
      "T+1 means **one business day** after the trade. A Monday fill settles **Tuesday**.",
  },
  {
    id: "order-lifecycle.q6",
    lessonSlug: "order-lifecycle",
    type: "single",
    difficulty: "medium",
    tags: ["lifecycle", "stages"],
    prompt: "Which sequence shows the normal happy-path stages of an order?",
    choices: [
      { id: "a", text: "Settled → Filled → Routed → Placed" },
      { id: "b", text: "Placed → Routed → Filled → Settled" },
      { id: "c", text: "Routed → Placed → Settled → Filled" },
      { id: "d", text: "Filled → Placed → Settled → Routed" },
    ],
    correctId: "b",
    explanation:
      "The main path is **Placed → Routed → Filled → Settled**, with Partially Filled as a possible step before fully Filled.",
  },
  {
    id: "order-lifecycle.q7",
    lessonSlug: "order-lifecycle",
    type: "single",
    difficulty: "hard",
    tags: ["lifecycle", "misconception", "settlement"],
    prompt: "Why isn't a status of **Filled** the same as the cash and shares having moved?",
    choices: [
      { id: "a", text: "Filled is just an estimate that often reverses" },
      { id: "b", text: "A fill locks in price and shares; the actual transfer happens at settlement (T+1)" },
      { id: "c", text: "Filled means the order was rejected by the venue" },
      { id: "d", text: "Cash always moves before the fill" },
    ],
    correctId: "b",
    explanation:
      "**Filled** locks in your price and share count, but the **transfer of cash and stock** happens later at **settlement (T+1)**. Filled ≠ Settled.",
  },
  {
    id: "order-lifecycle.q8",
    lessonSlug: "order-lifecycle",
    type: "single",
    difficulty: "hard",
    tags: ["lifecycle", "application", "scenario"],
    prompt:
      "Tuesday 10:00 you submit a limit buy for 100 shares at $25. 40 trade, then later the other 60 trade. What status sequence do you see, and when does it settle?",
    choices: [
      { id: "a", text: "Placed → Routed → Partially Filled (40/100) → Filled, settling Wednesday" },
      { id: "b", text: "Placed → Filled → Settled, all on Tuesday", feedback: "A partial fill happened first, and settlement is T+1 — not same-day." },
      { id: "c", text: "Rejected, because partials aren't allowed" },
      { id: "d", text: "Filled → Routed → Settled, settling Thursday" },
    ],
    correctId: "a",
    explanation:
      "It goes **Placed → Routed → Partially Filled (40/100) → Filled**, then settles **Wednesday** (T+1 after the Tuesday trade).",
  },
  {
    id: "order-lifecycle.q9",
    lessonSlug: "order-lifecycle",
    type: "single",
    difficulty: "medium",
    tags: ["lifecycle", "status", "application"],
    prompt:
      "Your broker shows an order as **Rejected**. What does that tell you?",
    choices: [
      { id: "a", text: "Some shares filled but not all" },
      { id: "b", text: "The broker did not accept the order, so nothing traded" },
      { id: "c", text: "The order filled and settled" },
      { id: "d", text: "You canceled it yourself", feedback: "That would show as Canceled — Rejected means the broker refused it." },
    ],
    correctId: "b",
    explanation:
      "**Rejected** means the broker never accepted the order (e.g. bad parameters or insufficient buying power), so no shares traded.",
  },
  {
    id: "order-lifecycle.q10",
    lessonSlug: "order-lifecycle",
    type: "single",
    difficulty: "easy",
    tags: ["lifecycle", "definition"],
    prompt: "**Settlement** is the point at which…",
    choices: [
      { id: "a", text: "The order is first accepted by the broker" },
      { id: "b", text: "Cash and shares actually change hands" },
      { id: "c", text: "The order is routed to a venue" },
      { id: "d", text: "The price is first quoted" },
    ],
    correctId: "b",
    explanation:
      "**Settlement** is when **cash and shares actually change hands** — finalizing the trade. In the US that's T+1.",
  },
];
