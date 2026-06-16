import type { Question } from "@/lib/quiz/types";

// Quiz for the "Volume Analysis: Confirmation, Climax, and OBV" lesson.
export const questions: Question[] = [
  {
    id: "volume-analysis-confirmation-obv.q1",
    lessonSlug: "volume-analysis-confirmation-obv",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["technical", "volume", "obv", "math"],
    prompt: "OBV currently reads `1000`. Today the stock closes **up** on volume `400`. What is the new OBV?",
    choices: [
      { id: "a", text: "600", feedback: "An up close adds volume; subtracting is for down closes." },
      { id: "b", text: "1400" },
      { id: "c", text: "400" },
      { id: "d", text: "1000" },
    ],
    correctId: "b",
    explanation:
      "Up close → add the day's volume: `1000 + 400 = 1400`.",
  },
  {
    id: "volume-analysis-confirmation-obv.q2",
    lessonSlug: "volume-analysis-confirmation-obv",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["technical", "volume", "obv", "math"],
    prompt: "OBV reads `2000`. Today's close is **unchanged** on volume `900`. What is the new OBV?",
    choices: [
      { id: "a", text: "2900", feedback: "Unchanged closes don't add volume — OBV only moves on up or down closes." },
      { id: "b", text: "1100" },
      { id: "c", text: "2000" },
      { id: "d", text: "900" },
    ],
    correctId: "c",
    explanation:
      "On an unchanged close, OBV stays flat: it remains `2000`. Volume is added only on up closes and subtracted only on down closes.",
  },
  {
    id: "volume-analysis-confirmation-obv.q3",
    lessonSlug: "volume-analysis-confirmation-obv",
    type: "single",
    difficulty: "easy",
    tags: ["technical", "volume", "obv"],
    prompt: "What is the OBV rule for a **down**-close day?",
    choices: [
      { id: "a", text: "Add the day's volume" },
      { id: "b", text: "Subtract the day's volume" },
      { id: "c", text: "Leave OBV unchanged" },
      { id: "d", text: "Reset OBV to zero", feedback: "OBV is a running cumulative total — it never resets on a down day." },
    ],
    correctId: "b",
    explanation:
      "On a down close, OBV **subtracts** the day's volume. Up closes add, unchanged closes leave it flat.",
  },
  {
    id: "volume-analysis-confirmation-obv.q4",
    lessonSlug: "volume-analysis-confirmation-obv",
    type: "single",
    difficulty: "medium",
    tags: ["technical", "volume", "confirmation"],
    prompt: "Why is a breakout on **strong** volume more credible than one on thin volume?",
    choices: [
      { id: "a", text: "Strong volume shows broad conviction behind the move; thin volume risks a fakeout" },
      { id: "b", text: "Thin-volume breakouts are always more reliable" },
      { id: "c", text: "Volume has no bearing on breakouts" },
      { id: "d", text: "Strong volume guarantees the breakout will hold" },
    ],
    correctId: "a",
    explanation:
      "Heavy volume signals broad participation and conviction. A thin breakout can be a handful of orders pushing price past a level — a prime **fakeout** candidate. Strong volume raises the odds, but guarantees nothing.",
  },
  {
    id: "volume-analysis-confirmation-obv.q5",
    lessonSlug: "volume-analysis-confirmation-obv",
    type: "single",
    difficulty: "easy",
    tags: ["technical", "volume", "relative"],
    prompt: "Volume is most useful when measured…",
    choices: [
      { id: "a", text: "Against a baseline like the 20-day average" },
      { id: "b", text: "As a fixed absolute number across all stocks" },
      { id: "c", text: "Only on the first bar of the day" },
      { id: "d", text: "By ignoring it and watching price alone" },
    ],
    correctId: "a",
    explanation:
      "Volume is **relative**. Today's bar means something only compared to a baseline such as the 20-day average — a number that's huge for one stock is normal for another.",
  },
  {
    id: "volume-analysis-confirmation-obv.q6",
    lessonSlug: "volume-analysis-confirmation-obv",
    type: "single",
    difficulty: "medium",
    tags: ["technical", "volume", "obv", "limits"],
    prompt: "What is a key limitation of OBV?",
    choices: [
      { id: "a", text: "It cannot be calculated without options data" },
      { id: "b", text: "It is direction-only — a `+0.01` close adds the same volume as a `+5%` close" },
      { id: "c", text: "It resets every Monday" },
      { id: "d", text: "It only works on indices, not individual stocks" },
    ],
    correctId: "b",
    explanation:
      "OBV looks only at the *direction* of the close, not the *size* of the move. A tiny gain and a huge gain both add the full day's volume, so OBV can mislead when small moves happen on big volume.",
  },
  {
    id: "volume-analysis-confirmation-obv.q7",
    lessonSlug: "volume-analysis-confirmation-obv",
    type: "single",
    difficulty: "hard",
    tags: ["technical", "volume", "scenario", "fakeout"],
    prompt:
      "A stock breaks above a well-watched resistance level, but on **below-average** volume. What's the soundest read?",
    choices: [
      { id: "a", text: "The breakout carries higher fakeout risk and warrants caution" },
      { id: "b", text: "The breakout is guaranteed since price closed above resistance" },
      { id: "c", text: "Low volume always confirms a stronger breakout" },
      { id: "d", text: "Volume is irrelevant once price clears the level" },
    ],
    correctId: "a",
    explanation:
      "A breakout lacking volume lacks conviction — it's more likely to be a **fakeout** that snaps back inside. Wait for volume confirmation or a successful retest before trusting it.",
  },
  {
    id: "volume-analysis-confirmation-obv.q8",
    lessonSlug: "volume-analysis-confirmation-obv",
    type: "single",
    difficulty: "hard",
    tags: ["technical", "volume", "scenario", "climax"],
    prompt:
      "After a months-long rally, a stock prints its **largest up-volume bar ever**, then stalls and goes nowhere. What does this most likely indicate?",
    choices: [
      { id: "a", text: "A buying climax — exhaustion that can mark a top" },
      { id: "b", text: "A guaranteed continuation higher" },
      { id: "c", text: "A volume dry-up signaling a fresh leg up" },
      { id: "d", text: "Distribution that will reset OBV to zero" },
    ],
    correctId: "a",
    explanation:
      "A record volume spike at the *end* of a long move is a classic **buying climax** — the last wave of buyers piling in, leaving few left to push higher. High volume late in a trend signals exhaustion, not continuation.",
  },
];
