import type { Question } from "@/lib/quiz/types";

// Quiz for the "Line charts vs. candlestick charts" lesson.
export const questions: Question[] = [
  {
    id: "line-vs-candle.q1",
    lessonSlug: "line-vs-candle",
    type: "single",
    difficulty: "easy",
    tags: ["charts"],
    prompt: "A line chart usually connects which **single** price from each period?",
    choices: [
      { id: "a", text: "The open" },
      { id: "b", text: "The close" },
      { id: "c", text: "The high" },
      { id: "d", text: "The midpoint of the range" },
    ],
    correctId: "b",
    explanation:
      "A line chart plots **one price per period — usually the close —** and connects them. Clean for spotting a trend, but it throws away everything else.",
  },
  {
    id: "line-vs-candle.q2",
    lessonSlug: "line-vs-candle",
    type: "single",
    difficulty: "medium",
    tags: ["charts", "candlesticks"],
    prompt: "What can a candlestick chart show that a line chart **cannot**?",
    choices: [
      { id: "a", text: "The long-term trend", feedback: "A line shows the trend just fine — that's its strength." },
      { id: "b", text: "The closing price of each period" },
      { id: "c", text: "The range, open-vs-close, and rejection within each period" },
      { id: "d", text: "Which day of the week it is" },
    ],
    correctId: "c",
    explanation:
      "Candles reveal the **intra-period story**: how far price ranged, whether buyers or sellers won (open vs close), and rejection wicks. A line only shows where price **ended**.",
  },
  {
    id: "line-vs-candle.q3",
    lessonSlug: "line-vs-candle",
    type: "single",
    difficulty: "medium",
    tags: ["charts"],
    prompt: "When is a **line chart** the better tool?",
    choices: [
      { id: "a", text: "Timing a precise entry, where intra-period action matters" },
      { id: "b", text: "A quick read of the long-term trend, or comparing several assets at once" },
      { id: "c", text: "Spotting long rejection wicks" },
      { id: "d", text: "Seeing whether buyers or sellers controlled a period" },
    ],
    correctId: "b",
    explanation:
      "Reach for a **line** to read the overall trend at a glance or compare multiple assets. Reach for **candles** when making an actual trading decision, where the detail counts.",
  },
  {
    id: "line-vs-candle.q4",
    lessonSlug: "line-vs-candle",
    type: "single",
    difficulty: "hard",
    tags: ["charts", "candlesticks"],
    prompt:
      "Two periods have the **same close** but very different candles. What does this best illustrate?",
    choices: [
      { id: "a", text: "The line shows the ending; the candle shows the story" },
      { id: "b", text: "The line chart must be wrong" },
      { id: "c", text: "Candles and lines always disagree" },
      { id: "d", text: "Closing price is the only thing that matters" },
    ],
    correctId: "a",
    explanation:
      "Identical closes draw an identical **line** but can produce wildly different **candles**. The candle tells you the *story* (range, who won); the line only tells you the *ending*.",
  },
  {
    id: "line-vs-candle.q5",
    lessonSlug: "line-vs-candle",
    type: "single",
    difficulty: "easy",
    tags: ["charts"],
    prompt: "Why would a trader prefer **candles** when actually entering a trade?",
    choices: [
      { id: "a", text: "The intra-period action — range, open vs close, rejection — informs the decision" },
      { id: "b", text: "Candles are more colorful" },
      { id: "c", text: "Candles hide the closing price to reduce clutter" },
      { id: "d", text: "Line charts aren't allowed for real trades" },
    ],
    correctId: "a",
    explanation:
      "Candles expose **what happened within the period** — how far price ranged and whether buyers or sellers won. That detail is exactly what you want when timing an entry; a line would hide it.",
  },
];
