import type { Question } from "@/lib/quiz/types";

// Quiz for the "Chart Patterns: Tops, Bottoms, and Measured Moves" lesson.
export const questions: Question[] = [
  {
    id: "chart-patterns-measured-moves.q1",
    lessonSlug: "chart-patterns-measured-moves",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["technical", "chart-patterns", "head-shoulders", "math"],
    prompt:
      "A head & shoulders top has a head at `$60` and a neckline at `$50`. Price breaks the neckline at `$50`. What is the measured-move target?",
    choices: [
      { id: "a", text: "$40" },
      { id: "b", text: "$45" },
      { id: "c", text: "$50", feedback: "That's just the neckline — you still subtract the head height below it." },
      { id: "d", text: "$60" },
    ],
    correctId: "a",
    explanation:
      "Head height above neckline = `$60 − $50 = $10`. Target = `neckline − height = $50 − $10 = $40`.",
  },
  {
    id: "chart-patterns-measured-moves.q2",
    lessonSlug: "chart-patterns-measured-moves",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["technical", "chart-patterns", "double-bottom", "math"],
    prompt:
      "A double bottom has troughs at `$20` and a middle peak at `$26`. Price breaks out above `$26`. What is the target?",
    choices: [
      { id: "a", text: "$26" },
      { id: "b", text: "$30" },
      { id: "c", text: "$32" },
      { id: "d", text: "$20", feedback: "That's the trough; the target projects the pattern's height above the breakout." },
    ],
    correctId: "c",
    explanation:
      "Pattern height = `$26 − $20 = $6`. Target = `breakout + height = $26 + $6 = $32`.",
  },
  {
    id: "chart-patterns-measured-moves.q3",
    lessonSlug: "chart-patterns-measured-moves",
    type: "single",
    difficulty: "easy",
    tags: ["technical", "chart-patterns", "triangle"],
    prompt: "An **ascending triangle** (flat top, rising lows) carries which bias?",
    choices: [
      { id: "a", text: "Bullish" },
      { id: "b", text: "Bearish", feedback: "That's the descending triangle (flat bottom, falling highs)." },
      { id: "c", text: "Neutral with no bias" },
      { id: "d", text: "Always a reversal of the prior trend" },
    ],
    correctId: "a",
    explanation:
      "Ascending triangle = flat top + rising lows → **bullish** bias (buyers keep paying higher lows while sellers hold a fixed ceiling).",
  },
  {
    id: "chart-patterns-measured-moves.q4",
    lessonSlug: "chart-patterns-measured-moves",
    type: "single",
    difficulty: "medium",
    tags: ["technical", "chart-patterns", "head-shoulders"],
    prompt: "What confirms a head & shoulders **top** as a bearish reversal?",
    choices: [
      { id: "a", text: "A close below the neckline" },
      { id: "b", text: "The right shoulder being higher than the head" },
      { id: "c", text: "Price touching the head a second time" },
      { id: "d", text: "A close above the head" },
    ],
    correctId: "a",
    explanation:
      "The trigger is a **close below the neckline**. Until then it's just a shape; the neckline break is what signals the reversal.",
  },
  {
    id: "chart-patterns-measured-moves.q5",
    lessonSlug: "chart-patterns-measured-moves",
    type: "single",
    difficulty: "medium",
    tags: ["technical", "chart-patterns", "flag"],
    prompt: "A flag/pennant is best described as…",
    choices: [
      { id: "a", text: "A brief consolidation after a sharp move (flagpole), usually a continuation" },
      { id: "b", text: "A three-peak reversal pattern" },
      { id: "c", text: "A single candle with a long wick" },
      { id: "d", text: "A guaranteed trend reversal" },
    ],
    correctId: "a",
    explanation:
      "A flag/pennant is a short pause after a sharp **flagpole** move — typically a **continuation**. Its target ≈ the flagpole height projected from the breakout.",
  },
  {
    id: "chart-patterns-measured-moves.q6",
    lessonSlug: "chart-patterns-measured-moves",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["technical", "chart-patterns", "double-top", "math"],
    prompt:
      "A double top has peaks at `$80` and a middle trough at `$74`. Price breaks down below `$74`. What is the target?",
    choices: [
      { id: "a", text: "$74" },
      { id: "b", text: "$68" },
      { id: "c", text: "$80" },
      { id: "d", text: "$86", feedback: "A double top is bearish — the target is below the breakdown, not above." },
    ],
    correctId: "b",
    explanation:
      "Height = `peak − trough = $80 − $74 = $6`. Double-top target = `breakdown − height = $74 − $6 = $68`.",
  },
  {
    id: "chart-patterns-measured-moves.q7",
    lessonSlug: "chart-patterns-measured-moves",
    type: "single",
    difficulty: "hard",
    tags: ["technical", "chart-patterns", "scenario", "fakeout"],
    prompt:
      "A head & shoulders neckline breaks on **weak volume**, then price snaps back above the neckline within two days. What happened?",
    choices: [
      { id: "a", text: "A failed breakout (fakeout) — weak-volume breaks fail more often" },
      { id: "b", text: "The measured-move target is now guaranteed" },
      { id: "c", text: "The pattern became an inverse head & shoulders" },
      { id: "d", text: "Volume never affects breakouts" },
    ],
    correctId: "a",
    explanation:
      "A neckline break that reverses is a **failed breakout / fakeout**. Breaks lacking volume are especially prone to failing — patterns are probabilistic and don't always play out.",
  },
  {
    id: "chart-patterns-measured-moves.q8",
    lessonSlug: "chart-patterns-measured-moves",
    type: "single",
    difficulty: "hard",
    tags: ["technical", "chart-patterns", "misconception", "measured-move"],
    prompt: "Which statement about measured-move targets is most accurate?",
    choices: [
      { id: "a", text: "They are guaranteed price levels that must be reached" },
      { id: "b", text: "They are statistical guidelines; price can undershoot, overshoot, or the pattern can fail" },
      { id: "c", text: "They predict the exact day price will arrive" },
      { id: "d", text: "They only apply to flags, never to head & shoulders" },
    ],
    correctId: "b",
    explanation:
      "A measured move is a **guideline**, not a guarantee. Price often under- or overshoots, and patterns fail outright. Use volume for credibility and plan for the target not being hit.",
  },
];
