import type { Question } from "@/lib/quiz/types";

// Quiz for the "MACD: The 12/26/9 Momentum Engine" lesson.
export const questions: Question[] = [
  {
    id: "macd-moving-average-convergence-divergence.q1",
    lessonSlug: "macd-moving-average-convergence-divergence",
    type: "numericChoice",
    difficulty: "easy",
    tags: ["technical", "macd", "math"],
    prompt: "The `12-EMA` is `50` and the `26-EMA` is `47`. What is the MACD line?",
    choices: [
      { id: "a", text: "3" },
      { id: "b", text: "97", feedback: "MACD subtracts the two EMAs; it doesn't add them." },
      { id: "c", text: "−3" },
      { id: "d", text: "0" },
    ],
    correctId: "a",
    explanation:
      "`MACD line = 12-EMA − 26-EMA = 50 − 47 = +3`.",
  },
  {
    id: "macd-moving-average-convergence-divergence.q2",
    lessonSlug: "macd-moving-average-convergence-divergence",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["technical", "macd", "histogram", "math"],
    prompt: "The MACD line is `2.0` and the signal line is `2.6`. What is the histogram?",
    choices: [
      { id: "a", text: "+0.6", feedback: "Order matters: histogram is MACD minus signal, so this is negative." },
      { id: "b", text: "−0.6" },
      { id: "c", text: "+4.6" },
      { id: "d", text: "−4.6" },
    ],
    correctId: "b",
    explanation:
      "`Histogram = MACD − signal = 2.0 − 2.6 = −0.6` — a bearish reading (MACD is below the signal line).",
  },
  {
    id: "macd-moving-average-convergence-divergence.q3",
    lessonSlug: "macd-moving-average-convergence-divergence",
    type: "single",
    difficulty: "easy",
    tags: ["technical", "macd", "parameters"],
    prompt: "What are the standard MACD parameters?",
    choices: [
      { id: "a", text: "10 / 20 / 5" },
      { id: "b", text: "9 / 12 / 26" },
      { id: "c", text: "12 / 26 / 9" },
      { id: "d", text: "14 / 70 / 30", feedback: "Those are RSI's defaults, not MACD's." },
    ],
    correctId: "c",
    explanation:
      "MACD defaults are **12 / 26 / 9**: a 12-EMA, a 26-EMA, and a 9-EMA signal line of the MACD line.",
  },
  {
    id: "macd-moving-average-convergence-divergence.q4",
    lessonSlug: "macd-moving-average-convergence-divergence",
    type: "single",
    difficulty: "medium",
    tags: ["technical", "macd", "crossover"],
    prompt: "A **bullish** MACD crossover happens when…",
    choices: [
      { id: "a", text: "The MACD line crosses above the signal line" },
      { id: "b", text: "The MACD line crosses below the signal line", feedback: "That's the bearish crossover." },
      { id: "c", text: "The histogram hits its all-time high" },
      { id: "d", text: "Price closes above the 200-MA" },
    ],
    correctId: "a",
    explanation:
      "A bullish crossover = MACD line crossing **above** the signal line. The bearish version is MACD crossing below.",
  },
  {
    id: "macd-moving-average-convergence-divergence.q5",
    lessonSlug: "macd-moving-average-convergence-divergence",
    type: "single",
    difficulty: "medium",
    tags: ["technical", "macd", "zero-line"],
    prompt: "When the MACD line crosses **above zero**, it tells you that…",
    choices: [
      { id: "a", text: "The 12-EMA has overtaken the 26-EMA" },
      { id: "b", text: "The signal line has reached its maximum" },
      { id: "c", text: "RSI is overbought" },
      { id: "d", text: "Volume has spiked" },
    ],
    correctId: "a",
    explanation:
      "MACD = 12-EMA − 26-EMA, so a zero-line cross to the upside means the **12-EMA has just overtaken the 26-EMA** — short-term momentum has moved ahead of long-term.",
  },
  {
    id: "macd-moving-average-convergence-divergence.q6",
    lessonSlug: "macd-moving-average-convergence-divergence",
    type: "single",
    difficulty: "medium",
    tags: ["technical", "macd", "histogram"],
    prompt:
      "The histogram is still positive but has shrunk from `+2.0` to `+0.5` over two days. What does that suggest?",
    choices: [
      { id: "a", text: "Upward momentum is fading, even though it's still positive" },
      { id: "b", text: "Momentum is accelerating to the upside" },
      { id: "c", text: "A bearish crossover has already occurred" },
      { id: "d", text: "The MACD line is now negative" },
    ],
    correctId: "a",
    explanation:
      "A positive but **shrinking** histogram means the MACD line is pulling back toward the signal line — upward momentum is weakening, often *before* an actual crossover.",
  },
  {
    id: "macd-moving-average-convergence-divergence.q7",
    lessonSlug: "macd-moving-average-convergence-divergence",
    type: "single",
    difficulty: "hard",
    tags: ["technical", "macd", "scenario", "whipsaw"],
    prompt:
      "A stock chops sideways and the MACD line crosses the signal line **six times** in a few weeks with no real move after any of them. What is happening?",
    choices: [
      { id: "a", text: "Six reliable trade signals were generated" },
      { id: "b", text: "False crossovers (whipsaw) in a range-bound market" },
      { id: "c", text: "A confirmed long-term uptrend" },
      { id: "d", text: "The histogram must be flat at exactly zero" },
    ],
    correctId: "b",
    explanation:
      "Near zero in a sideways market, MACD and signal cross repeatedly with no follow-through — **whipsaw**. MACD crossovers are unreliable when there's no trend to confirm.",
  },
  {
    id: "macd-moving-average-convergence-divergence.q8",
    lessonSlug: "macd-moving-average-convergence-divergence",
    type: "single",
    difficulty: "hard",
    tags: ["technical", "macd", "misconception", "divergence"],
    prompt: "Which statement about MACD is most accurate?",
    choices: [
      { id: "a", text: "It predicts future price moves before they happen" },
      { id: "b", text: "It is a lagging momentum tool; a crossover describes a change that already happened" },
      { id: "c", text: "It is leading and never lags because it uses EMAs" },
      { id: "d", text: "Divergence guarantees an immediate reversal" },
    ],
    correctId: "b",
    explanation:
      "MACD is **lagging** — built from EMAs of past prices. A crossover confirms a momentum change that already occurred; it doesn't forecast. Divergence shifts the odds toward weakening momentum but guarantees nothing.",
  },
];
