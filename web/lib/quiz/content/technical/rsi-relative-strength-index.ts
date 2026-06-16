import type { Question } from "@/lib/quiz/types";

// Quiz for the "RSI: Reading Momentum on a 0–100 Scale" lesson.
export const questions: Question[] = [
  {
    id: "rsi-relative-strength-index.q1",
    lessonSlug: "rsi-relative-strength-index",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["technical", "rsi", "math"],
    prompt: "Average gain is `3` and average loss is `1`. What is the RSI?",
    choices: [
      { id: "a", text: "33.33", feedback: "Check the formula sign: RSI is `100 − 100/(1+RS)`, not `100/(1+RS)`." },
      { id: "b", text: "66.67" },
      { id: "c", text: "75.00" },
      { id: "d", text: "80.00" },
    ],
    correctId: "c",
    explanation:
      "`RS = 3 / 1 = 3`, so `RSI = 100 − [100 / (1 + 3)] = 100 − 25 = 75`.",
  },
  {
    id: "rsi-relative-strength-index.q2",
    lessonSlug: "rsi-relative-strength-index",
    type: "single",
    difficulty: "easy",
    tags: ["technical", "rsi"],
    prompt: "An RSI reading of exactly `100` means…",
    choices: [
      { id: "a", text: "There were no down-period losses over the lookback (RS is infinite)" },
      { id: "b", text: "The stock is guaranteed to fall", feedback: "RSI describes past momentum, not a guaranteed future move." },
      { id: "c", text: "Average gain equals average loss" },
      { id: "d", text: "The period was set to zero" },
    ],
    correctId: "a",
    explanation:
      "With no losses, AvgLoss = 0, so RS is infinite and `RSI = 100 − [100/(1+∞)] = 100`. Every period in the window was an up move.",
  },
  {
    id: "rsi-relative-strength-index.q3",
    lessonSlug: "rsi-relative-strength-index",
    type: "single",
    difficulty: "easy",
    tags: ["technical", "rsi", "parameters"],
    prompt: "What are RSI's default **period** and its **overbought** threshold?",
    choices: [
      { id: "a", text: "Period 9, overbought 80" },
      { id: "b", text: "Period 14, overbought 70" },
      { id: "c", text: "Period 20, overbought 50" },
      { id: "d", text: "Period 14, overbought 30", feedback: "30 is the oversold level; 70 is overbought." },
    ],
    correctId: "b",
    explanation:
      "RSI's defaults are a **14**-period lookback, **70** for overbought, and **30** for oversold.",
  },
  {
    id: "rsi-relative-strength-index.q4",
    lessonSlug: "rsi-relative-strength-index",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["technical", "rsi", "math"],
    prompt: "Average gain is `2.0` and average loss is `1.0`. What is the RSI?",
    choices: [
      { id: "a", text: "50.00" },
      { id: "b", text: "60.00" },
      { id: "c", text: "66.67" },
      { id: "d", text: "200.00", feedback: "RSI is bounded 0–100; it can never exceed 100." },
    ],
    correctId: "c",
    explanation:
      "`RS = 2.0 / 1.0 = 2`, so `RSI = 100 − [100 / (1 + 2)] = 100 − 33.33 = 66.67`.",
  },
  {
    id: "rsi-relative-strength-index.q5",
    lessonSlug: "rsi-relative-strength-index",
    type: "single",
    difficulty: "medium",
    tags: ["technical", "rsi", "smoothing"],
    prompt: "How does Wilder's smoothing update the average gain each new bar?",
    choices: [
      { id: "a", text: "`AvgGain = [(priorAvg × 13) + currentGain] / 14`" },
      { id: "b", text: "`AvgGain = priorAvg + currentGain`" },
      { id: "c", text: "`AvgGain = currentGain / 14`" },
      { id: "d", text: "`AvgGain = (priorAvg + currentGain) / 2`" },
    ],
    correctId: "a",
    explanation:
      "Wilder's smoothing carries `13` parts of the prior average plus `1` part of the new gain, divided by `14`. That damping is what keeps RSI from jerking on a single bar.",
  },
  {
    id: "rsi-relative-strength-index.q6",
    lessonSlug: "rsi-relative-strength-index",
    type: "single",
    difficulty: "easy",
    tags: ["technical", "rsi", "midline"],
    prompt: "An RSI hovering around `50` is best described as…",
    choices: [
      { id: "a", text: "Deeply oversold" },
      { id: "b", text: "Neutral momentum, no clear edge" },
      { id: "c", text: "Extremely overbought" },
      { id: "d", text: "A guaranteed buy signal" },
    ],
    correctId: "b",
    explanation:
      "The `50` midline is neutral — gains and losses are roughly balanced. Above 50 leans to bullish momentum, below 50 to bearish.",
  },
  {
    id: "rsi-relative-strength-index.q7",
    lessonSlug: "rsi-relative-strength-index",
    type: "single",
    difficulty: "hard",
    tags: ["technical", "rsi", "scenario", "trends"],
    prompt:
      "A stock rips higher for weeks and its RSI stays pinned above `70`. A trader shorts every day it reads overbought and keeps getting stopped out. What does this reveal?",
    choices: [
      { id: "a", text: "RSI is broken and should be ignored" },
      { id: "b", text: "Overbought can persist for a long time in a strong uptrend", feedback: "Right idea — the key point is that strong trends keep RSI stretched." },
      { id: "c", text: "RSI above 70 always means an immediate top" },
      { id: "d", text: "The trader simply needs a faster period" },
    ],
    correctId: "b",
    explanation:
      "In a powerful trend RSI can stay overbought for weeks. \"Overbought\" is not \"sell now\" — shorting each reading bleeds out while the trend runs. Use RSI with the trend, not against it.",
  },
  {
    id: "rsi-relative-strength-index.q8",
    lessonSlug: "rsi-relative-strength-index",
    type: "single",
    difficulty: "hard",
    tags: ["technical", "rsi", "misconception"],
    prompt: "Which is the most disciplined way to act on an RSI above `70`?",
    choices: [
      { id: "a", text: "Sell immediately the moment it crosses 70" },
      { id: "b", text: "Treat it as context and wait for RSI to roll back below 70 plus price confirmation" },
      { id: "c", text: "Add to the long because 70 guarantees more upside" },
      { id: "d", text: "Ignore the trend entirely" },
    ],
    correctId: "b",
    explanation:
      "Overbought ≠ sell. Momentum can stay stretched in a trend, so wait for RSI to *roll back* and for price structure to confirm before acting. RSI is a probabilistic context tool, not a trigger.",
  },
];
