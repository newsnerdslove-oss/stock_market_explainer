import type { Question } from "@/lib/quiz/types";

// Quiz for the "Price Gaps" lesson.
export const questions: Question[] = [
  {
    id: "price-gaps.q1",
    lessonSlug: "price-gaps",
    type: "single",
    difficulty: "easy",
    tags: ["gaps", "basics"],
    prompt: "A price **gap** on a chart is…",
    choices: [
      { id: "a", text: "An empty space where price jumped with no trades in between" },
      { id: "b", text: "A day with unusually high volume" },
      { id: "c", text: "The difference between two stocks' prices" },
      { id: "d", text: "A slow, gradual price decline" },
    ],
    correctId: "a",
    explanation:
      "A **gap** is a blank space where the price opened far from the prior close, with **no trades in between**.",
  },
  {
    id: "price-gaps.q2",
    lessonSlug: "price-gaps",
    type: "single",
    difficulty: "easy",
    tags: ["gaps", "vocab"],
    prompt: "A **gap up** means the stock…",
    choices: [
      { id: "a", text: "Opened lower than the prior close" },
      { id: "b", text: "Opened notably higher than the prior close" },
      { id: "c", text: "Traded at the same price all day" },
      { id: "d", text: "Closed higher than it opened" },
    ],
    correctId: "b",
    explanation:
      "A **gap up** is when the stock opens notably **higher** than the previous close.",
  },
  {
    id: "price-gaps.q3",
    lessonSlug: "price-gaps",
    type: "single",
    difficulty: "easy",
    tags: ["gaps", "timing"],
    prompt: "When do gaps most commonly appear?",
    choices: [
      { id: "a", text: "In the middle of a quiet trading day" },
      { id: "b", text: "Overnight or over a weekend, when news arrives while the market is closed" },
      { id: "c", text: "Only on the first trading day of the year" },
      { id: "d", text: "Whenever volume is low" },
    ],
    correctId: "b",
    explanation:
      "Gaps usually form **overnight or over a weekend**, when news hits while the market is closed.",
  },
  {
    id: "price-gaps.q4",
    lessonSlug: "price-gaps",
    type: "single",
    difficulty: "medium",
    tags: ["gaps", "catalyst"],
    prompt: "Which of these is a common **catalyst** for a gap?",
    choices: [
      { id: "a", text: "An earnings report released after the close" },
      { id: "b", text: "A normal, news-free trading session" },
      { id: "c", text: "A drop in the stock's average volume" },
      { id: "d", text: "Choosing a shorter chart timeframe", feedback: "Changing the timeframe doesn't create a gap; a catalyst is real news." },
    ],
    correctId: "a",
    explanation:
      "Earnings, company news, analyst changes, and economic news are common **catalysts**. Earnings released while the market is closed often gap the stock.",
  },
  {
    id: "price-gaps.q5",
    lessonSlug: "price-gaps",
    type: "single",
    difficulty: "medium",
    tags: ["gaps", "misconception"],
    prompt: "Inside the blank space of a gap, what trading occurred?",
    choices: [
      { id: "a", text: "Trades happened there but the chart hides them" },
      { id: "b", text: "No trades occurred — that's why the space is empty" },
      { id: "c", text: "Only institutions traded there" },
      { id: "d", text: "Trades happened at the average of the two prices" },
    ],
    correctId: "b",
    explanation:
      "**No trades occurred inside the gap.** The price jumped straight across at the open, which is exactly why the space is blank.",
  },
  {
    id: "price-gaps.q6",
    lessonSlug: "price-gaps",
    type: "single",
    difficulty: "medium",
    tags: ["gaps", "gap-fill"],
    prompt: "What does it mean when traders say a gap **fills**?",
    choices: [
      { id: "a", text: "Volume returns to normal" },
      { id: "b", text: "Price later drifts back through the blank space — a tendency, not a rule" },
      { id: "c", text: "The company issues more shares" },
      { id: "d", text: "The gap is guaranteed to close by the next day" },
    ],
    correctId: "b",
    explanation:
      "A **gap fill** is price retracing back through the gap. It happens often, but it's a **tendency, not a rule** — many gaps never fill.",
  },
  {
    id: "price-gaps.q7",
    lessonSlug: "price-gaps",
    type: "single",
    difficulty: "medium",
    tags: ["gaps", "scenario"],
    prompt:
      "A stock **closes Tuesday at `$80`**, reports strong earnings after the close, and **opens Wednesday at `$90`**. This is a…",
    choices: [
      { id: "a", text: "`$10` gap down" },
      { id: "b", text: "`$10` gap up" },
      { id: "c", text: "Normal intraday move" },
      { id: "d", text: "Gap fill" },
    ],
    correctId: "b",
    explanation:
      "Opening at `$90` versus the `$80` **prior close** is a `$10` **gap up** — and nothing traded between `$80` and `$90`.",
  },
  {
    id: "price-gaps.q8",
    lessonSlug: "price-gaps",
    type: "single",
    difficulty: "hard",
    tags: ["gaps", "scenario", "application"],
    prompt:
      "A stock **closes at `$50`**, then **bad news** breaks overnight and it **opens at `$44`**. What kind of gap is this?",
    choices: [
      { id: "a", text: "A `$6` gap up" },
      { id: "b", text: "A `$6` gap down" },
      { id: "c", text: "No gap — it's a slow decline" },
      { id: "d", text: "A gap fill", feedback: "A gap fill is a later retrace, not the initial jump itself." },
    ],
    correctId: "b",
    explanation:
      "Opening at `$44` below the `$50` **prior close** is a `$6` **gap down**, triggered by the overnight bad-news **catalyst**.",
  },
  {
    id: "price-gaps.q9",
    lessonSlug: "price-gaps",
    type: "single",
    difficulty: "hard",
    tags: ["gaps", "application"],
    prompt:
      "From which price is a gap measured when a stock jumps overnight?",
    choices: [
      { id: "a", text: "The prior period's close" },
      { id: "b", text: "The prior period's high" },
      { id: "c", text: "The current day's close" },
      { id: "d", text: "The 52-week average" },
    ],
    correctId: "a",
    explanation:
      "A gap is measured from the **prior close** to the new open — the size of the leap between those two points.",
  },
];
