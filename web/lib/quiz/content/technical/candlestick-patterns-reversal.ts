import type { Question } from "@/lib/quiz/types";

// Quiz for the "Candlestick Patterns: Doji, Hammer, Engulfing" lesson.
export const questions: Question[] = [
  {
    id: "candlestick-patterns-reversal.q1",
    lessonSlug: "candlestick-patterns-reversal",
    type: "single",
    difficulty: "easy",
    tags: ["technical", "candlesticks", "hammer"],
    prompt:
      "A candle has a small body near the top and a long lower wick, appearing after a **downtrend**. What is it?",
    choices: [
      { id: "a", text: "A hammer (bullish reversal candidate)" },
      { id: "b", text: "A shooting star" },
      { id: "c", text: "A bearish engulfing" },
      { id: "d", text: "A hanging man", feedback: "Same shape — but the hanging man appears after an uptrend, not a downtrend." },
    ],
    correctId: "a",
    explanation:
      "Small body near the top + long lower wick + **after a downtrend** = **hammer**, a bullish reversal candidate.",
  },
  {
    id: "candlestick-patterns-reversal.q2",
    lessonSlug: "candlestick-patterns-reversal",
    type: "single",
    difficulty: "medium",
    tags: ["technical", "candlesticks", "scenario", "hanging-man"],
    prompt:
      "That same hammer shape — small body near the top, long lower wick — appears at the **top of an uptrend**. Now what is it, and what does it warn?",
    choices: [
      { id: "a", text: "A hanging man — a bearish warning" },
      { id: "b", text: "Still a hammer — still bullish", feedback: "The shape is identical, but location flips the meaning; after an uptrend it's bearish." },
      { id: "c", text: "A doji — pure indecision" },
      { id: "d", text: "A bullish engulfing" },
    ],
    correctId: "a",
    explanation:
      "Location flips meaning: the hammer shape after an **uptrend** is a **hanging man** — a bearish reversal warning. Same candle, opposite implication.",
  },
  {
    id: "candlestick-patterns-reversal.q3",
    lessonSlug: "candlestick-patterns-reversal",
    type: "single",
    difficulty: "medium",
    tags: ["technical", "candlesticks", "engulfing"],
    prompt:
      "Today's candle body completely covers yesterday's body, and it's the **opposite color**. This two-candle pattern is called…",
    choices: [
      { id: "a", text: "An engulfing pattern" },
      { id: "b", text: "A doji" },
      { id: "c", text: "A shooting star" },
      { id: "d", text: "A hammer" },
    ],
    correctId: "a",
    explanation:
      "When today's body engulfs yesterday's opposite-colored body, it's an **engulfing** pattern — bullish if green-over-red after a downtrend, bearish if red-over-green after an uptrend.",
  },
  {
    id: "candlestick-patterns-reversal.q4",
    lessonSlug: "candlestick-patterns-reversal",
    type: "single",
    difficulty: "easy",
    tags: ["technical", "candlesticks", "doji"],
    prompt: "A **doji** is defined by…",
    choices: [
      { id: "a", text: "Open and close being approximately equal (a tiny body)" },
      { id: "b", text: "A long body with no wicks" },
      { id: "c", text: "Two candles of opposite color" },
      { id: "d", text: "A gap between sessions" },
    ],
    correctId: "a",
    explanation:
      "A doji has **open ≈ close** — a near-bodyless candle signaling indecision. It's most meaningful after an extended move.",
  },
  {
    id: "candlestick-patterns-reversal.q5",
    lessonSlug: "candlestick-patterns-reversal",
    type: "single",
    difficulty: "medium",
    tags: ["technical", "candlesticks", "shooting-star"],
    prompt:
      "A candle with a small body near the **low** and a long **upper** wick, appearing after an uptrend, is a…",
    choices: [
      { id: "a", text: "Shooting star (bearish)" },
      { id: "b", text: "Hammer (bullish)" },
      { id: "c", text: "Bullish engulfing" },
      { id: "d", text: "Doji" },
    ],
    correctId: "a",
    explanation:
      "Small body near the low + long upper wick + after an uptrend = **shooting star**, a bearish reversal candidate (buyers pushed up but got rejected).",
  },
  {
    id: "candlestick-patterns-reversal.q6",
    lessonSlug: "candlestick-patterns-reversal",
    type: "single",
    difficulty: "medium",
    tags: ["technical", "candlesticks", "confirmation"],
    prompt: "What strengthens a candlestick reversal signal?",
    choices: [
      { id: "a", text: "A confirmation candle — the next bar moving in the pattern's direction" },
      { id: "b", text: "Ignoring the trend that preceded it" },
      { id: "c", text: "A larger body on the same candle" },
      { id: "d", text: "The pattern appearing in the middle of a range" },
    ],
    correctId: "a",
    explanation:
      "A **confirmation candle** — the following bar moving in the expected direction — adds weight. Single candles alone produce frequent false signals.",
  },
  {
    id: "candlestick-patterns-reversal.q7",
    lessonSlug: "candlestick-patterns-reversal",
    type: "single",
    difficulty: "hard",
    tags: ["technical", "candlesticks", "scenario", "context"],
    prompt:
      "A trader buys **every doji** they see, regardless of trend or location. Why does this strategy fail?",
    choices: [
      { id: "a", text: "A doji is only meaningful in context (after an extended move) and with confirmation" },
      { id: "b", text: "Dojis are always bearish" },
      { id: "c", text: "Dojis can't appear in real markets" },
      { id: "d", text: "A doji guarantees a reversal every time" },
    ],
    correctId: "a",
    explanation:
      "A doji is indecision — meaningful mainly **after an extended move** and **with confirmation**. Buying every one ignores context and triggers on noise.",
  },
  {
    id: "candlestick-patterns-reversal.q8",
    lessonSlug: "candlestick-patterns-reversal",
    type: "single",
    difficulty: "hard",
    tags: ["technical", "candlesticks", "misconception"],
    prompt: "Which statement best captures the core lesson about candlestick patterns?",
    choices: [
      { id: "a", text: "A hammer is always bullish no matter where it appears" },
      { id: "b", text: "Context — prior trend and location — decides what a candle means" },
      { id: "c", text: "Shape alone is enough to trade any pattern" },
      { id: "d", text: "Patterns work best with no regard to the preceding trend" },
    ],
    correctId: "b",
    explanation:
      "**Context is everything.** The same shape is a hammer after a downtrend but a hanging man after an uptrend. Read the candle plus its location plus confirmation — never the shape alone.",
  },
];
