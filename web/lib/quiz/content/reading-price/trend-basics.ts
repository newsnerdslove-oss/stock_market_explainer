import type { Question } from "@/lib/quiz/types";

// Quiz for the "Trend Basics" lesson.
export const questions: Question[] = [
  {
    id: "trend-basics.q1",
    lessonSlug: "trend-basics",
    type: "single",
    difficulty: "easy",
    tags: ["trend", "uptrend"],
    prompt: "An **uptrend** is defined by…",
    choices: [
      { id: "a", text: "Higher highs and higher lows" },
      { id: "b", text: "Lower highs and lower lows" },
      { id: "c", text: "One big up day" },
      { id: "d", text: "Highs and lows staying level" },
    ],
    correctId: "a",
    explanation:
      "An **uptrend** is a pattern of **higher highs and higher lows** — repeatedly making new peaks and pulling back to higher floors.",
  },
  {
    id: "trend-basics.q2",
    lessonSlug: "trend-basics",
    type: "single",
    difficulty: "easy",
    tags: ["trend", "vocab"],
    prompt: "A stock whose highs and lows stay roughly level is best described as…",
    choices: [
      { id: "a", text: "In an uptrend" },
      { id: "b", text: "In a downtrend" },
      { id: "c", text: "Sideways / range-bound" },
      { id: "d", text: "Gapping" },
    ],
    correctId: "c",
    explanation:
      "When highs and lows stay roughly level with no clear progress, the stock is **sideways / range-bound**.",
  },
  {
    id: "trend-basics.q3",
    lessonSlug: "trend-basics",
    type: "single",
    difficulty: "easy",
    tags: ["trend", "definition"],
    prompt: "In plain terms, a **trend** is…",
    choices: [
      { id: "a", text: "The general direction of price over time" },
      { id: "b", text: "The number of shares traded" },
      { id: "c", text: "The gap between two candles" },
      { id: "d", text: "A single day's price change" },
    ],
    correctId: "a",
    explanation:
      "A **trend** is simply the general **direction of price over time** — up, down, or sideways.",
  },
  {
    id: "trend-basics.q4",
    lessonSlug: "trend-basics",
    type: "single",
    difficulty: "medium",
    tags: ["trend", "downtrend", "scenario"],
    prompt:
      "A stock's peaks come in at `30`, `28`, then `26`, and its troughs at `25`, `23`, then `21`. What trend is this?",
    choices: [
      { id: "a", text: "Uptrend" },
      { id: "b", text: "Downtrend" },
      { id: "c", text: "Sideways" },
      { id: "d", text: "No trend can be read from this", feedback: "Falling highs and falling lows clearly describe a downtrend." },
    ],
    correctId: "b",
    explanation:
      "Lower highs (`30 → 28 → 26`) **and** lower lows (`25 → 23 → 21`) together define a **downtrend**.",
  },
  {
    id: "trend-basics.q5",
    lessonSlug: "trend-basics",
    type: "single",
    difficulty: "medium",
    tags: ["trend", "misconception"],
    prompt: "A stock rose today. Is that enough to call it an **uptrend**?",
    choices: [
      { id: "a", text: "Yes — any up day means an uptrend" },
      { id: "b", text: "No — an uptrend needs repeated higher highs and higher lows" },
      { id: "c", text: "Yes — as long as volume was high" },
      { id: "d", text: "No — you need at least one down day first" },
    ],
    correctId: "b",
    explanation:
      "One up day isn't a trend. An **uptrend** requires **repeated higher highs AND higher lows**.",
  },
  {
    id: "trend-basics.q6",
    lessonSlug: "trend-basics",
    type: "single",
    difficulty: "medium",
    tags: ["trend", "timeframe"],
    prompt: "Can a stock be in an uptrend on one timeframe and a downtrend on another?",
    choices: [
      { id: "a", text: "No — a stock has exactly one trend at a time" },
      { id: "b", text: "Yes — trends exist on every timeframe, so they can differ by zoom level" },
      { id: "c", text: "No — that would be a data error" },
      { id: "d", text: "Yes, but only during earnings season" },
    ],
    correctId: "b",
    explanation:
      "Trends exist on **every timeframe**. A daily uptrend can contain a 5-minute downtrend — they're just different zoom levels.",
  },
  {
    id: "trend-basics.q7",
    lessonSlug: "trend-basics",
    type: "single",
    difficulty: "medium",
    tags: ["trend", "scenario"],
    prompt:
      "On a weekly chart, the highs run `50 → 53 → 57` and the lows run `46 → 49 → 52`. What's the trend?",
    choices: [
      { id: "a", text: "Downtrend" },
      { id: "b", text: "Sideways" },
      { id: "c", text: "Uptrend" },
      { id: "d", text: "Reversal" },
    ],
    correctId: "c",
    explanation:
      "Higher highs (`50 → 53 → 57`) **and** higher lows (`46 → 49 → 52`) make this a clean **uptrend**.",
  },
  {
    id: "trend-basics.q8",
    lessonSlug: "trend-basics",
    type: "single",
    difficulty: "hard",
    tags: ["trend", "pullback", "application"],
    prompt:
      "A stock is in a clear **daily uptrend** but drops sharply over the last **2 hours** of intraday trading. The most sensible read is…",
    choices: [
      { id: "a", text: "The uptrend has definitely reversed" },
      { id: "b", text: "A short-term pullback within the larger uptrend" },
      { id: "c", text: "The daily chart was wrong" },
      { id: "d", text: "A new permanent downtrend has started" },
    ],
    correctId: "b",
    explanation:
      "A short intraday drop inside a longer climb is a **pullback**, not a reversal of the bigger daily **uptrend**.",
  },
  {
    id: "trend-basics.q9",
    lessonSlug: "trend-basics",
    type: "single",
    difficulty: "hard",
    tags: ["trend", "tendency", "application"],
    prompt: "What's the most accurate way to state *\"the trend is your friend\"*?",
    choices: [
      { id: "a", text: "Trends always continue forever" },
      { id: "b", text: "Trends tend to continue more often than they suddenly flip — but every trend eventually ends" },
      { id: "c", text: "You should never trade against any move" },
      { id: "d", text: "A trend guarantees tomorrow's price" },
    ],
    correctId: "b",
    explanation:
      "Trends *tend* to continue, which is a **tendency, not a guarantee**. Every trend ends eventually, so it's never a sure thing.",
  },
];
