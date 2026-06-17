import type { Question } from "@/lib/quiz/types";

// Quiz for the "Interest-Rate Risk & Duration" lesson.
export const questions: Question[] = [
  {
    id: "interest-rate-risk-and-duration.q1",
    lessonSlug: "interest-rate-risk-and-duration",
    type: "single",
    difficulty: "easy",
    tags: ["bonds", "duration"],
    prompt: "Duration measures a bond's…",
    choices: [
      { id: "a", text: "Sensitivity of its price to interest-rate changes" },
      { id: "b", text: "Credit rating", feedback: "That's about default risk, not rate sensitivity." },
      { id: "c", text: "Coupon payment frequency" },
      { id: "d", text: "Tax treatment" },
    ],
    correctId: "a",
    explanation:
      "Duration measures how much a bond's **price moves when interest rates change** — its interest-rate sensitivity, quoted in years.",
  },
  {
    id: "interest-rate-risk-and-duration.q2",
    lessonSlug: "interest-rate-risk-and-duration",
    type: "numericChoice",
    difficulty: "easy",
    tags: ["bonds", "duration", "math"],
    unit: "%",
    prompt: "A bond has modified duration `6`. If rates rise `1%` (`100` bps), the estimated price change is about…",
    choices: [
      { id: "a", text: "−6%" },
      { id: "b", text: "+6%", feedback: "Rising rates lower prices — the sign should be negative." },
      { id: "c", text: "−0.6%" },
      { id: "d", text: "−60%" },
    ],
    correctId: "a",
    explanation:
      "`% change ≈ −modified duration × Δyield = −6 × 0.01 = −6%`. Rising rates push the price down.",
  },
  {
    id: "interest-rate-risk-and-duration.q3",
    lessonSlug: "interest-rate-risk-and-duration",
    type: "single",
    difficulty: "easy",
    tags: ["bonds", "basis-point"],
    prompt: "One basis point equals…",
    choices: [
      { id: "a", text: "One percentage point" },
      { id: "b", text: "One-hundredth of a percentage point" },
      { id: "c", text: "One-tenth of a percentage point" },
      { id: "d", text: "Ten percentage points" },
    ],
    correctId: "b",
    explanation:
      "A basis point is `1/100` of a percentage point, so `100` bps = `1%`.",
  },
  {
    id: "interest-rate-risk-and-duration.q4",
    lessonSlug: "interest-rate-risk-and-duration",
    type: "single",
    difficulty: "medium",
    tags: ["bonds", "duration", "drivers"],
    prompt: "Holding maturity constant, which bond has the **highest** duration?",
    choices: [
      { id: "a", text: "The highest-coupon bond" },
      { id: "b", text: "The lowest-coupon bond" },
      { id: "c", text: "The one with the most frequent coupons" },
      { id: "d", text: "Coupon has no effect on duration", feedback: "Lower coupons push more value to the distant par payment, raising duration." },
    ],
    correctId: "b",
    explanation:
      "Lower coupons mean less cash returns early, so more value sits in the distant par repayment — raising duration. The **lowest-coupon** bond is most sensitive.",
  },
  {
    id: "interest-rate-risk-and-duration.q5",
    lessonSlug: "interest-rate-risk-and-duration",
    type: "single",
    difficulty: "medium",
    tags: ["bonds", "duration", "scenario"],
    prompt: "An investor fears interest rates are about to rise. To reduce interest-rate risk, they should shift toward…",
    choices: [
      { id: "a", text: "Longer-duration bonds" },
      { id: "b", text: "Shorter-duration bonds" },
      { id: "c", text: "Lower-coupon bonds", feedback: "Lower coupons raise duration, increasing rate risk." },
      { id: "d", text: "Zero-coupon long bonds" },
    ],
    correctId: "b",
    explanation:
      "**Shorter duration** means smaller price drops when rates rise. Investors expecting higher rates shorten duration to cut risk.",
  },
  {
    id: "interest-rate-risk-and-duration.q6",
    lessonSlug: "interest-rate-risk-and-duration",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["bonds", "duration", "math"],
    unit: "$",
    prompt:
      "A `$1,000` bond has modified duration `4.5`. Rates fall `0.25%` (`25` bps). What is the estimated new price?",
    choices: [
      { id: "a", text: "$988.75", feedback: "Falling rates raise the price — the change should be positive." },
      { id: "b", text: "$1,011.25" },
      { id: "c", text: "$1,045.00" },
      { id: "d", text: "$1,001.13" },
    ],
    correctId: "b",
    explanation:
      "`% change ≈ −4.5 × (−0.0025) = +1.125%`. New price `= $1,000 × 1.01125 = $1,011.25`.",
  },
  {
    id: "interest-rate-risk-and-duration.q7",
    lessonSlug: "interest-rate-risk-and-duration",
    type: "single",
    difficulty: "medium",
    tags: ["bonds", "macaulay"],
    prompt: "A zero-coupon bond's Macaulay duration equals…",
    choices: [
      { id: "a", text: "Half its maturity" },
      { id: "b", text: "Its maturity" },
      { id: "c", text: "Zero, since it pays no coupons" },
      { id: "d", text: "Its coupon rate" },
    ],
    correctId: "b",
    explanation:
      "With a single cash flow at the end, a zero-coupon bond's weighted-average time to cash flows — its Macaulay duration — equals its **maturity**.",
  },
  {
    id: "interest-rate-risk-and-duration.q8",
    lessonSlug: "interest-rate-risk-and-duration",
    type: "single",
    difficulty: "hard",
    tags: ["bonds", "convexity", "limits"],
    prompt: "Why is the duration estimate only approximate, especially for large rate moves?",
    choices: [
      { id: "a", text: "It ignores the coupon entirely" },
      { id: "b", text: "It's a linear estimate of a curved price-yield relationship; convexity corrects the gap" },
      { id: "c", text: "It only works for zero-coupon bonds" },
      { id: "d", text: "It assumes rates never change" },
    ],
    correctId: "b",
    explanation:
      "The true price-yield relationship is **curved**. Duration draws a straight line through it — accurate for small moves, but **convexity** is needed to correct large ones.",
  },
  {
    id: "interest-rate-risk-and-duration.q9",
    lessonSlug: "interest-rate-risk-and-duration",
    type: "single",
    difficulty: "hard",
    tags: ["bonds", "misconception", "scenario"],
    prompt:
      "Two bonds both mature on the same date but one has a `3%` coupon and the other `8%`. A friend says they have identical rate risk. Correct?",
    choices: [
      { id: "a", text: "Yes — same maturity means same rate risk" },
      { id: "b", text: "No — the lower-coupon (3%) bond has higher duration and more rate risk" },
      { id: "c", text: "No — the higher-coupon (8%) bond has higher duration" },
      { id: "d", text: "Yes, as long as both are Treasuries" },
    ],
    correctId: "b",
    explanation:
      "Same maturity does **not** mean same duration. The **lower-coupon** bond (3%) has higher duration and moves more when rates change.",
  },
];
