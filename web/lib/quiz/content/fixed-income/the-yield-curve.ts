import type { Question } from "@/lib/quiz/types";

// Quiz for the "The Yield Curve" lesson.
export const questions: Question[] = [
  {
    id: "the-yield-curve.q1",
    lessonSlug: "the-yield-curve",
    type: "single",
    difficulty: "easy",
    tags: ["bonds", "yield-curve"],
    prompt: "The yield curve plots…",
    choices: [
      { id: "a", text: "One issuer's yields across different maturities" },
      { id: "b", text: "Bond prices against credit ratings" },
      { id: "c", text: "Coupon rates against par values" },
      { id: "d", text: "Stock prices against earnings" },
    ],
    correctId: "a",
    explanation:
      "The yield curve plots the **yields of one issuer** (usually Treasuries) across maturities, from short bills to the 30-year.",
  },
  {
    id: "the-yield-curve.q2",
    lessonSlug: "the-yield-curve",
    type: "single",
    difficulty: "easy",
    tags: ["bonds", "inversion"],
    prompt: "A yield curve is **inverted** when…",
    choices: [
      { id: "a", text: "Long-term yields exceed short-term yields" },
      { id: "b", text: "Short-term yields exceed long-term yields" },
      { id: "c", text: "All yields are equal" },
      { id: "d", text: "Yields are all negative", feedback: "Inversion is about the slope between short and long, not negative yields." },
    ],
    correctId: "b",
    explanation:
      "An **inverted** curve has **short yields higher than long yields** — the opposite of the normal upward slope.",
  },
  {
    id: "the-yield-curve.q3",
    lessonSlug: "the-yield-curve",
    type: "single",
    difficulty: "easy",
    tags: ["bonds", "normal-curve"],
    prompt: "In a **normal** yield curve, the extra yield on longer maturities is called the…",
    choices: [
      { id: "a", text: "Credit spread" },
      { id: "b", text: "Term premium" },
      { id: "c", text: "Coupon rate" },
      { id: "d", text: "Current yield" },
    ],
    correctId: "b",
    explanation:
      "The **term premium** is the extra yield investors demand for lending over a longer period, giving the normal curve its upward slope.",
  },
  {
    id: "the-yield-curve.q4",
    lessonSlug: "the-yield-curve",
    type: "numericChoice",
    difficulty: "easy",
    tags: ["bonds", "spread", "math"],
    unit: "%",
    prompt: "The `2`-year yields `4.5%` and the `10`-year yields `4.0%`. What is the `10y−2y` spread?",
    choices: [
      { id: "a", text: "+0.5%" },
      { id: "b", text: "−0.5%" },
      { id: "c", text: "+8.5%", feedback: "The spread is a difference, not a sum." },
      { id: "d", text: "0.0%" },
    ],
    correctId: "b",
    explanation:
      "`10y − 2y = 4.0% − 4.5% = −0.5%`. A negative spread means the curve is **inverted**.",
  },
  {
    id: "the-yield-curve.q5",
    lessonSlug: "the-yield-curve",
    type: "single",
    difficulty: "medium",
    tags: ["bonds", "inversion", "scenario"],
    prompt:
      "The `10`-year yields `3.8%` while the `2`-year yields `4.6%`. Historically, this shape has…",
    choices: [
      { id: "a", text: "Preceded US recessions" },
      { id: "b", text: "Guaranteed strong economic growth", feedback: "An inverted curve is a warning sign, the opposite of this." },
      { id: "c", text: "Signaled rising inflation ahead" },
      { id: "d", text: "Meant nothing for the economy" },
    ],
    correctId: "a",
    explanation:
      "`10y` below `2y` is an **inverted** curve, which has **preceded every US recession since the 1970s**, typically by 6–18 months.",
  },
  {
    id: "the-yield-curve.q6",
    lessonSlug: "the-yield-curve",
    type: "single",
    difficulty: "medium",
    tags: ["bonds", "inversion", "scenario"],
    prompt: "Why do long-term yields sometimes fall *below* short-term yields?",
    choices: [
      { id: "a", text: "Investors expecting a slowdown bid up long bonds while short rates stay high" },
      { id: "b", text: "The Fed cuts long-term rates directly" },
      { id: "c", text: "Coupons on long bonds are reduced" },
      { id: "d", text: "Long bonds stop paying interest" },
    ],
    correctId: "a",
    explanation:
      "Inversion forms when the Fed holds short rates high (often to fight inflation) while investors **expecting a slowdown bid up long bonds**, pulling long yields down.",
  },
  {
    id: "the-yield-curve.q7",
    lessonSlug: "the-yield-curve",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["bonds", "spread", "math"],
    unit: "%",
    prompt:
      "Given: `3`-mo `5.4%`, `2`-yr `4.9%`, `10`-yr `4.2%`. What is the `10y−2y` spread, and is the curve inverted?",
    choices: [
      { id: "a", text: "−0.7% (inverted)" },
      { id: "b", text: "+0.7% (normal)", feedback: "10y (4.2%) is below 2y (4.9%), so the spread is negative." },
      { id: "c", text: "−1.2% (inverted)" },
      { id: "d", text: "+0.5% (normal)" },
    ],
    correctId: "a",
    explanation:
      "`10y − 2y = 4.2% − 4.9% = −0.7%`. A negative spread means the curve is **inverted**.",
  },
  {
    id: "the-yield-curve.q8",
    lessonSlug: "the-yield-curve",
    type: "single",
    difficulty: "hard",
    tags: ["bonds", "misconception"],
    prompt: "What's the best way to interpret a freshly inverted yield curve?",
    choices: [
      { id: "a", text: "A recession is happening right now" },
      { id: "b", text: "A forward-looking warning signal that historically leads a recession by 6–18 months, if one follows" },
      { id: "c", text: "The inversion directly causes a recession" },
      { id: "d", text: "It guarantees a recession within one month" },
    ],
    correctId: "b",
    explanation:
      "Inversion is a **forward-looking signal**, not a cause and not a present-tense indicator. It has historically **led** recessions by 6–18 months — if one follows at all.",
  },
  {
    id: "the-yield-curve.q9",
    lessonSlug: "the-yield-curve",
    type: "single",
    difficulty: "hard",
    tags: ["bonds", "limits"],
    prompt: "Why can different versions of the yield-curve spread send mixed messages?",
    choices: [
      { id: "a", text: "They use different issuers entirely" },
      { id: "b", text: "Versions like 10y−2y and 10y−3m can invert at different times, disagreeing on timing" },
      { id: "c", text: "Only one spread version actually exists" },
      { id: "d", text: "Spreads are random and meaningless" },
    ],
    correctId: "b",
    explanation:
      "Common measures (`10y−2y`, `10y−3m`) can invert at **different times**, so they may disagree on timing even when the overall signal is similar.",
  },
];
