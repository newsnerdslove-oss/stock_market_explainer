import type { Question } from "@/lib/quiz/types";
import { bullishEngulfing, bearishEngulfing, hammer, shootingStar, doji } from "@/lib/charts/patterns";

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

  // ── Read-a-chart questions: a candlestick chart is shown, identify the pattern ──
  {
    id: "candlestick-patterns-reversal.q9",
    lessonSlug: "candlestick-patterns-reversal",
    type: "chart",
    chartKind: "candles",
    chartData: bullishEngulfing(),
    difficulty: "medium",
    tags: ["technical", "candlesticks", "chart-reading", "engulfing"],
    prompt: "Read the chart. After the downtrend, the last two candles form which reversal pattern?",
    choices: [
      { id: "a", text: "Bullish engulfing" },
      { id: "b", text: "Bearish engulfing", feedback: "A bearish engulfing is a big red candle swallowing a green one after an *up*trend — the opposite of this." },
      { id: "c", text: "Shooting star" },
      { id: "d", text: "Doji" },
    ],
    correctId: "a",
    explanation:
      "A small red candle followed by a larger **green** candle whose body engulfs it, after a downtrend — a **bullish engulfing**, a reversal-up signal.",
  },
  {
    id: "candlestick-patterns-reversal.q10",
    lessonSlug: "candlestick-patterns-reversal",
    type: "chart",
    chartKind: "candles",
    chartData: bearishEngulfing(),
    difficulty: "medium",
    tags: ["technical", "candlesticks", "chart-reading", "engulfing"],
    prompt: "Read the chart. After the uptrend, the last two candles form which reversal pattern?",
    choices: [
      { id: "a", text: "Bullish engulfing", feedback: "Bullish engulfing is a green candle swallowing a red one after a *down*trend — the mirror image of this." },
      { id: "b", text: "Bearish engulfing" },
      { id: "c", text: "Hammer" },
      { id: "d", text: "Doji" },
    ],
    correctId: "b",
    explanation:
      "A small green candle followed by a larger **red** candle that engulfs it, after an uptrend — a **bearish engulfing**, a reversal-down signal.",
  },
  {
    id: "candlestick-patterns-reversal.q11",
    lessonSlug: "candlestick-patterns-reversal",
    type: "chart",
    chartKind: "candles",
    chartData: hammer(),
    difficulty: "medium",
    tags: ["technical", "candlesticks", "chart-reading", "hammer"],
    prompt: "Read the chart. The final candle — small body up top, long lower wick, after a downtrend — is a…",
    choices: [
      { id: "a", text: "Hammer" },
      { id: "b", text: "Shooting star", feedback: "A shooting star has the long wick on *top* and appears after an uptrend — this is its inverse." },
      { id: "c", text: "Bearish engulfing" },
      { id: "d", text: "Doji" },
    ],
    correctId: "a",
    explanation:
      "Small body near the top + a long lower wick + after a downtrend = a **hammer**, a bullish-reversal candidate (sellers pushed it down, buyers reclaimed).",
  },
  {
    id: "candlestick-patterns-reversal.q12",
    lessonSlug: "candlestick-patterns-reversal",
    type: "chart",
    chartKind: "candles",
    chartData: shootingStar(),
    difficulty: "medium",
    tags: ["technical", "candlesticks", "chart-reading", "shooting-star"],
    prompt: "Read the chart. The final candle — small body down low, long upper wick, after an uptrend — is a…",
    choices: [
      { id: "a", text: "Hammer", feedback: "A hammer has the long wick *below* and appears after a downtrend — this is its inverse." },
      { id: "b", text: "Shooting star" },
      { id: "c", text: "Bullish engulfing" },
      { id: "d", text: "Doji" },
    ],
    correctId: "b",
    explanation:
      "Small body near the bottom + a long upper wick + after an uptrend = a **shooting star**, a bearish-reversal candidate (buyers spiked it, sellers slammed it back).",
  },
  {
    id: "candlestick-patterns-reversal.q13",
    lessonSlug: "candlestick-patterns-reversal",
    type: "chart",
    chartKind: "candles",
    chartData: doji(),
    difficulty: "easy",
    tags: ["technical", "candlesticks", "chart-reading", "doji"],
    prompt: "Read the chart. The final candle opens and closes at nearly the same level with wicks both ways — that's a…",
    choices: [
      { id: "a", text: "Doji" },
      { id: "b", text: "Hammer", feedback: "A hammer has a small *body* and one long lower wick; a doji has almost no body at all." },
      { id: "c", text: "Bullish engulfing" },
      { id: "d", text: "Shooting star" },
    ],
    correctId: "a",
    explanation:
      "Open ≈ close (a near-nonexistent body) with wicks on both sides is a **doji** — indecision; a potential turning point when it follows a strong trend.",
  },
];
