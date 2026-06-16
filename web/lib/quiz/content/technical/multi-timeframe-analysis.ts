import type { Question } from "@/lib/quiz/types";

// Quiz for the "Multi-Timeframe Analysis: Trade With the Higher TF" lesson.
export const questions: Question[] = [
  {
    id: "multi-timeframe-analysis.q1",
    lessonSlug: "multi-timeframe-analysis",
    type: "single",
    difficulty: "easy",
    tags: ["technical", "multi-timeframe", "htf-ltf"],
    prompt: "In multi-timeframe analysis, what is each timeframe used for?",
    choices: [
      { id: "a", text: "The HTF sets trend/context; the LTF times the entry" },
      { id: "b", text: "The LTF sets the trend; the HTF times the entry", feedback: "It's the reverse — the higher timeframe defines the bias." },
      { id: "c", text: "Both are used only to measure volume" },
      { id: "d", text: "Each timeframe is traded independently with no link" },
    ],
    correctId: "a",
    explanation:
      "The **higher timeframe** defines trend bias and key levels; the **lower timeframe** refines entry, stop, and timing.",
  },
  {
    id: "multi-timeframe-analysis.q2",
    lessonSlug: "multi-timeframe-analysis",
    type: "single",
    difficulty: "medium",
    tags: ["technical", "multi-timeframe", "scenario", "alignment"],
    prompt:
      "The **Daily** is in a clear uptrend, and a **1-hour** bullish reversal candle forms at support. How would you characterize a long here?",
    choices: [
      { id: "a", text: "Higher-probability — the LTF entry is aligned with the HTF trend" },
      { id: "b", text: "Lower-probability — it fights the daily trend" },
      { id: "c", text: "Counter-trend and best avoided" },
      { id: "d", text: "Impossible to evaluate without volume" },
    ],
    correctId: "a",
    explanation:
      "The LTF trigger points the **same way** as the HTF trend — that alignment stacks the odds, making it a higher-probability setup.",
  },
  {
    id: "multi-timeframe-analysis.q3",
    lessonSlug: "multi-timeframe-analysis",
    type: "single",
    difficulty: "hard",
    tags: ["technical", "multi-timeframe", "scenario", "counter-trend"],
    prompt:
      "The **Weekly** is in a downtrend, but a trader takes a **15-minute** long on a small bounce. How is this trade best described?",
    choices: [
      { id: "a", text: "Lower-probability — it's counter-trend to the higher timeframe" },
      { id: "b", text: "Higher-probability because the LTF signal is fresh" },
      { id: "c", text: "Fully aligned and high-conviction" },
      { id: "d", text: "Risk-free since it's a short-term trade" },
    ],
    correctId: "a",
    explanation:
      "Going long on a tiny LTF bounce while the HTF trends down is a **counter-trend** trade — lower-probability, because it fights the dominant trend.",
  },
  {
    id: "multi-timeframe-analysis.q4",
    lessonSlug: "multi-timeframe-analysis",
    type: "single",
    difficulty: "medium",
    tags: ["technical", "multi-timeframe", "misconception"],
    prompt: "Why is watching **seven or more** timeframes usually counterproductive?",
    choices: [
      { id: "a", text: "More frames produce conflicting signals and analysis paralysis" },
      { id: "b", text: "Charting software can't display that many" },
      { id: "c", text: "It always guarantees better accuracy" },
      { id: "d", text: "Extra frames make the HTF disappear" },
    ],
    correctId: "a",
    explanation:
      "Beyond ~2–3 aligned frames, extra charts add **noise and contradictions**, not edge — leading to **analysis paralysis**. Value comes from alignment, not quantity.",
  },
  {
    id: "multi-timeframe-analysis.q5",
    lessonSlug: "multi-timeframe-analysis",
    type: "single",
    difficulty: "easy",
    tags: ["technical", "multi-timeframe", "top-down"],
    prompt: "What is the correct **top-down** workflow?",
    choices: [
      { id: "a", text: "Start on the HTF for context, then drill down to the LTF for the trigger" },
      { id: "b", text: "Start on the LTF, then zoom out only if the trade fails" },
      { id: "c", text: "Use the LTF for both trend and entry" },
      { id: "d", text: "Pick a random frame each session" },
    ],
    correctId: "a",
    explanation:
      "Top-down means **HTF first** (bias and key levels), then drill into the LTF for entry and timing.",
  },
  {
    id: "multi-timeframe-analysis.q6",
    lessonSlug: "multi-timeframe-analysis",
    type: "single",
    difficulty: "medium",
    tags: ["technical", "multi-timeframe", "ratio"],
    prompt: "Which pairing reflects a typical timeframe ratio (~4:1 to 6:1)?",
    choices: [
      { id: "a", text: "Daily for trend, 1-hour for entry" },
      { id: "b", text: "1-minute for trend, Monthly for entry", feedback: "That inverts the roles — the larger frame should set the trend." },
      { id: "c", text: "5-minute for trend, 1-minute for entry only" },
      { id: "d", text: "Two identical daily charts" },
    ],
    correctId: "a",
    explanation:
      "A common spacing is roughly **4:1 to 6:1**, e.g. **Daily → 1-hour** (or Weekly → Daily): the larger frame sets the trend, the smaller times the entry.",
  },
  {
    id: "multi-timeframe-analysis.q7",
    lessonSlug: "multi-timeframe-analysis",
    type: "single",
    difficulty: "hard",
    tags: ["technical", "multi-timeframe", "scenario", "conflict"],
    prompt:
      "The HTF points clearly up, but the LTF is dropping sharply and giving bearish signals. What's the most disciplined response?",
    choices: [
      { id: "a", text: "Often wait — conflicting frames give mixed signals until they realign" },
      { id: "b", text: "Always take the LTF bearish trade immediately" },
      { id: "c", text: "Ignore the HTF entirely" },
      { id: "d", text: "Add four more timeframes to break the tie" },
    ],
    correctId: "a",
    explanation:
      "When timeframes **conflict**, the edge is gone — the disciplined move is usually to **wait** for them to realign (or size down). Piling on more frames just adds noise.",
  },
  {
    id: "multi-timeframe-analysis.q8",
    lessonSlug: "multi-timeframe-analysis",
    type: "single",
    difficulty: "medium",
    tags: ["technical", "multi-timeframe", "levels"],
    prompt: "Compared with lower-timeframe levels, higher-timeframe support/resistance is generally…",
    choices: [
      { id: "a", text: "Heavier and deserving of more respect" },
      { id: "b", text: "Weaker and easily ignored" },
      { id: "c", text: "Identical in importance" },
      { id: "d", text: "Only relevant for day traders" },
    ],
    correctId: "a",
    explanation:
      "HTF levels reflect decisions by far more participants over a longer span, so they are **heavier** — give them more weight than LTF levels.",
  },
];
