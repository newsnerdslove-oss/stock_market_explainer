import type { Question } from "@/lib/quiz/types";

// Quiz for the "Moving Averages: SMA vs EMA and the Golden Cross" lesson.
export const questions: Question[] = [
  {
    id: "moving-averages-sma-vs-ema.q1",
    lessonSlug: "moving-averages-sma-vs-ema",
    type: "numericChoice",
    difficulty: "easy",
    tags: ["technical", "moving-averages", "sma", "math"],
    prompt: "The last three closes are `12, 15, 14`. What is the 3-period **SMA**?",
    choices: [
      { id: "a", text: "12.00" },
      { id: "b", text: "13.67" },
      { id: "c", text: "14.00" },
      { id: "d", text: "15.00", feedback: "That's just the highest close — the SMA averages all three equally." },
    ],
    correctId: "b",
    explanation:
      "`SMA = (12 + 15 + 14) / 3 = 41 / 3 = 13.67`. Every close gets equal weight.",
  },
  {
    id: "moving-averages-sma-vs-ema.q2",
    lessonSlug: "moving-averages-sma-vs-ema",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["technical", "moving-averages", "ema", "math"],
    prompt: "What is the smoothing multiplier `k` for a **20-period EMA**?",
    choices: [
      { id: "a", text: "0.0952" },
      { id: "b", text: "0.0500", feedback: "That's `1/20`. The EMA multiplier is `2/(N+1)`, not `1/N`." },
      { id: "c", text: "0.1000" },
      { id: "d", text: "0.2000" },
    ],
    correctId: "a",
    explanation:
      "`k = 2 / (N + 1) = 2 / 21 ≈ 0.0952`. The `+1` and the `2` are what make the EMA weight recent prices more than a plain `1/N`.",
  },
  {
    id: "moving-averages-sma-vs-ema.q3",
    lessonSlug: "moving-averages-sma-vs-ema",
    type: "single",
    difficulty: "medium",
    tags: ["technical", "moving-averages", "ema"],
    prompt: "Why does an **EMA** react faster to a price change than an SMA of the same length?",
    choices: [
      { id: "a", text: "It uses fewer days of data" },
      { id: "b", text: "It puts more weight on the most recent prices" },
      { id: "c", text: "It ignores old prices entirely" },
      { id: "d", text: "It is calculated from highs instead of closes" },
    ],
    correctId: "b",
    explanation:
      "The EMA's multiplier `k` weights recent closes more heavily, so new information moves the line sooner. An SMA weights every close equally, so it lags more.",
  },
  {
    id: "moving-averages-sma-vs-ema.q4",
    lessonSlug: "moving-averages-sma-vs-ema",
    type: "single",
    difficulty: "easy",
    tags: ["technical", "moving-averages", "golden-cross"],
    prompt: "A **golden cross** occurs when…",
    choices: [
      { id: "a", text: "The 50 crosses above the 200" },
      { id: "b", text: "The 50 crosses below the 200", feedback: "That's a death cross — the bearish version." },
      { id: "c", text: "Price closes above the 20" },
      { id: "d", text: "The 200 turns flat" },
    ],
    correctId: "a",
    explanation:
      "Golden cross = the **50 crosses above the 200** (bullish bias). The death cross is the mirror image: 50 below 200.",
  },
  {
    id: "moving-averages-sma-vs-ema.q5",
    lessonSlug: "moving-averages-sma-vs-ema",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["technical", "moving-averages", "ema", "math"],
    prompt:
      "A 3-period EMA (`k = 0.5`) reads `13.0` today. Tomorrow's close is `14`. What is tomorrow's EMA?",
    choices: [
      { id: "a", text: "13.50" },
      { id: "b", text: "14.00", feedback: "That would mean the EMA ignores its prior value — but it blends old and new at weight k." },
      { id: "c", text: "13.00" },
      { id: "d", text: "27.00" },
    ],
    correctId: "a",
    explanation:
      "`EMA = (Close × k) + (EMA_prev × (1 − k)) = (14 × 0.5) + (13.0 × 0.5) = 7 + 6.5 = 13.5`.",
  },
  {
    id: "moving-averages-sma-vs-ema.q6",
    lessonSlug: "moving-averages-sma-vs-ema",
    type: "single",
    difficulty: "medium",
    tags: ["technical", "moving-averages", "200"],
    prompt: "Price trading **above** its rising 200-period MA most often signals…",
    choices: [
      { id: "a", text: "An uptrend bias" },
      { id: "b", text: "A guaranteed reversal down" },
      { id: "c", text: "That the stock pays a dividend" },
      { id: "d", text: "A downtrend bias" },
    ],
    correctId: "a",
    explanation:
      "The 200 is the long-term trend benchmark. Above it = **uptrend bias**, below it = downtrend bias. It's a tendency, not a promise.",
  },
  {
    id: "moving-averages-sma-vs-ema.q7",
    lessonSlug: "moving-averages-sma-vs-ema",
    type: "single",
    difficulty: "hard",
    tags: ["technical", "moving-averages", "whipsaw", "scenario"],
    prompt:
      "A stock trades sideways for months. Its 50 and 200 cross **four times** in that range, and a trader buys each golden cross / sells each death cross. What is the most likely outcome?",
    choices: [
      { id: "a", text: "Steady profits, since every cross is a real signal" },
      { id: "b", text: "A series of whipsaw losses, because there is no real trend to ride", feedback: "Correct direction of thinking — name the effect: this is whipsaw." },
      { id: "c", text: "Nothing happens; crosses can't occur without a trend" },
      { id: "d", text: "A guaranteed breakout in the trader's favor" },
    ],
    correctId: "b",
    explanation:
      "In a flat, choppy market crosses fire repeatedly with no follow-through — **whipsaw**. Trading each one bleeds money on entries and exits. MA crosses need an actual trend to be useful.",
  },
  {
    id: "moving-averages-sma-vs-ema.q8",
    lessonSlug: "moving-averages-sma-vs-ema",
    type: "single",
    difficulty: "hard",
    tags: ["technical", "moving-averages", "lag", "misconception"],
    prompt: "Which statement about moving averages is most accurate?",
    choices: [
      { id: "a", text: "They forecast where price will go next" },
      { id: "b", text: "They are lagging tools that confirm a trend rather than predict it" },
      { id: "c", text: "A golden cross guarantees prices rise" },
      { id: "d", text: "The EMA removes all lag entirely" },
    ],
    correctId: "b",
    explanation:
      "Moving averages are built from **past** prices, so they **lag** — they confirm trends late, never forecast them. The EMA reduces lag but doesn't eliminate it, and no cross is a guarantee.",
  },
];
