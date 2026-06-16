import type { Question } from "@/lib/quiz/types";

// Quiz for the "Divergence: When Price and Momentum Disagree" lesson.
export const questions: Question[] = [
  {
    id: "divergence-price-vs-indicator.q1",
    lessonSlug: "divergence-price-vs-indicator",
    type: "single",
    difficulty: "medium",
    tags: ["technical", "divergence", "regular-bearish"],
    prompt:
      "Price prints a **higher high** while RSI prints a **lower high**. What is this, and what does it warn?",
    choices: [
      { id: "a", text: "Regular bearish divergence — a reversal-down warning" },
      { id: "b", text: "Hidden bullish divergence — continuation up", feedback: "Hidden bullish is about higher *lows* in an uptrend, not higher highs." },
      { id: "c", text: "Regular bullish divergence — reversal up" },
      { id: "d", text: "No divergence at all" },
    ],
    correctId: "a",
    explanation:
      "Higher high in price + lower high in the indicator = **regular bearish divergence** — the new high came on less momentum, warning of a possible reversal down.",
  },
  {
    id: "divergence-price-vs-indicator.q2",
    lessonSlug: "divergence-price-vs-indicator",
    type: "single",
    difficulty: "hard",
    tags: ["technical", "divergence", "hidden-bullish"],
    prompt:
      "Within an **uptrend**, price makes a **higher low** but RSI makes a **lower low**. What is this?",
    choices: [
      { id: "a", text: "Hidden bullish divergence — continuation up" },
      { id: "b", text: "Regular bearish divergence — reversal down" },
      { id: "c", text: "Regular bullish divergence — reversal up", feedback: "Regular bullish needs price to make a *lower* low, not a higher low." },
      { id: "d", text: "Hidden bearish divergence — continuation down" },
    ],
    correctId: "a",
    explanation:
      "Uptrend + price higher low + indicator lower low = **hidden bullish divergence**, a continuation-up cue. Price is holding up better than momentum suggests.",
  },
  {
    id: "divergence-price-vs-indicator.q3",
    lessonSlug: "divergence-price-vs-indicator",
    type: "single",
    difficulty: "easy",
    tags: ["technical", "divergence"],
    prompt: "Which best summarizes the two families of divergence?",
    choices: [
      { id: "a", text: "Regular warns of a reversal; hidden suggests continuation" },
      { id: "b", text: "Regular suggests continuation; hidden warns of a reversal" },
      { id: "c", text: "Both always signal an immediate reversal" },
      { id: "d", text: "Both are continuation signals" },
    ],
    correctId: "a",
    explanation:
      "**Regular = reversal warning**; **hidden = continuation**. That's the core distinction.",
  },
  {
    id: "divergence-price-vs-indicator.q4",
    lessonSlug: "divergence-price-vs-indicator",
    type: "single",
    difficulty: "medium",
    tags: ["technical", "divergence", "regular-bullish"],
    prompt:
      "Price makes a **lower low** while the indicator makes a **higher low**. What is this?",
    choices: [
      { id: "a", text: "Regular bullish divergence — reversal-up warning" },
      { id: "b", text: "Regular bearish divergence — reversal down" },
      { id: "c", text: "Hidden bearish divergence — continuation down" },
      { id: "d", text: "No meaningful signal" },
    ],
    correctId: "a",
    explanation:
      "Price lower low + indicator higher low = **regular bullish divergence** — selling momentum is fading, warning of a possible reversal up.",
  },
  {
    id: "divergence-price-vs-indicator.q5",
    lessonSlug: "divergence-price-vs-indicator",
    type: "single",
    difficulty: "hard",
    tags: ["technical", "divergence", "hidden-bearish"],
    prompt:
      "Within a **downtrend**, price makes a **lower high** but the indicator makes a **higher high**. What does this signal?",
    choices: [
      { id: "a", text: "Hidden bearish divergence — continuation down" },
      { id: "b", text: "Regular bullish divergence — reversal up" },
      { id: "c", text: "Hidden bullish divergence — continuation up" },
      { id: "d", text: "Regular bearish divergence — reversal down" },
    ],
    correctId: "a",
    explanation:
      "Downtrend + price lower high + indicator higher high = **hidden bearish divergence**, a continuation-down cue — the downtrend is likely to resume.",
  },
  {
    id: "divergence-price-vs-indicator.q6",
    lessonSlug: "divergence-price-vs-indicator",
    type: "single",
    difficulty: "medium",
    tags: ["technical", "divergence", "definition"],
    prompt: "Divergence is fundamentally about…",
    choices: [
      { id: "a", text: "Price and a momentum indicator disagreeing at swing points" },
      { id: "b", text: "Two moving averages crossing" },
      { id: "c", text: "Volume exceeding its 20-day average" },
      { id: "d", text: "A round-number support level" },
    ],
    correctId: "a",
    explanation:
      "Divergence is the disagreement between **price** and a **momentum indicator** (RSI/MACD) at comparable swing highs or lows.",
  },
  {
    id: "divergence-price-vs-indicator.q7",
    lessonSlug: "divergence-price-vs-indicator",
    type: "single",
    difficulty: "hard",
    tags: ["technical", "divergence", "scenario", "trends"],
    prompt:
      "In a powerful bull market, a trader shorts the **first** regular bearish divergence they spot and gets stopped out — then it happens again and again. What does this demonstrate?",
    choices: [
      { id: "a", text: "Divergence recurs and fails in strong trends; it isn't a standalone trigger" },
      { id: "b", text: "Regular bearish divergence guarantees an immediate top" },
      { id: "c", text: "Divergence can never appear in a bull market" },
      { id: "d", text: "The trader simply needed a longer RSI period" },
    ],
    correctId: "a",
    explanation:
      "In strong trends divergence appears repeatedly and **fails** as the trend grinds on. It shifts odds but has no built-in timing — pair it with confirmation, and respect the trend.",
  },
  {
    id: "divergence-price-vs-indicator.q8",
    lessonSlug: "divergence-price-vs-indicator",
    type: "single",
    difficulty: "medium",
    tags: ["technical", "divergence", "misconception"],
    prompt: "What is the most accurate way to treat a divergence signal?",
    choices: [
      { id: "a", text: "Reverse your position the instant it appears" },
      { id: "b", text: "As an odds-shifter that flags weakening/strengthening momentum, confirmed by price action" },
      { id: "c", text: "As a precise timing trigger good to the day" },
      { id: "d", text: "As proof the trend has already ended" },
    ],
    correctId: "b",
    explanation:
      "Divergence shifts the **odds** and flags momentum change — it's not a timing trigger. It can persist and fail in strong trends, so wait for confirmation (e.g. a structure or trendline break).",
  },
];
