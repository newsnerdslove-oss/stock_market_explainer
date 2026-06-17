import type { Question } from "@/lib/quiz/types";

// Quiz for the "Credit Risk & Ratings" lesson.
export const questions: Question[] = [
  {
    id: "credit-risk-and-ratings.q1",
    lessonSlug: "credit-risk-and-ratings",
    type: "single",
    difficulty: "easy",
    tags: ["bonds", "credit-risk"],
    prompt: "Credit risk is the risk that…",
    choices: [
      { id: "a", text: "Interest rates rise" },
      { id: "b", text: "The issuer fails to make promised payments" },
      { id: "c", text: "The coupon rate changes" },
      { id: "d", text: "The bond matures early", feedback: "That's call risk, not credit risk." },
    ],
    correctId: "b",
    explanation:
      "Credit (default) risk is the chance the **issuer fails to pay** the promised interest or principal.",
  },
  {
    id: "credit-risk-and-ratings.q2",
    lessonSlug: "credit-risk-and-ratings",
    type: "single",
    difficulty: "easy",
    tags: ["bonds", "benchmark"],
    prompt: "Which bonds are treated as the near risk-free benchmark for credit?",
    choices: [
      { id: "a", text: "US Treasuries" },
      { id: "b", text: "BBB-rated corporate bonds" },
      { id: "c", text: "High-yield junk bonds" },
      { id: "d", text: "Municipal bonds" },
    ],
    correctId: "a",
    explanation:
      "**US Treasuries**, backed by the federal government, are the near risk-free benchmark; riskier bonds yield more to compensate.",
  },
  {
    id: "credit-risk-and-ratings.q3",
    lessonSlug: "credit-risk-and-ratings",
    type: "single",
    difficulty: "easy",
    tags: ["bonds", "ratings"],
    prompt: "What is the **lowest** rating still considered investment grade?",
    choices: [
      { id: "a", text: "AAA / Aaa" },
      { id: "b", text: "A / A" },
      { id: "c", text: "BBB− / Baa3" },
      { id: "d", text: "BB+ / Ba1", feedback: "BB+/Ba1 is the top of high-yield (junk), just below the line." },
    ],
    correctId: "c",
    explanation:
      "The investment-grade floor is **BBB−/Baa3**. One notch lower (BB+/Ba1) is high-yield, or junk.",
  },
  {
    id: "credit-risk-and-ratings.q4",
    lessonSlug: "credit-risk-and-ratings",
    type: "numericChoice",
    difficulty: "easy",
    tags: ["bonds", "spread", "math"],
    unit: "%",
    prompt: "A corporate bond yields `5.5%`; the same-maturity Treasury yields `3.8%`. What is the credit spread?",
    choices: [
      { id: "a", text: "1.7%" },
      { id: "b", text: "9.3%", feedback: "The spread is a difference, not a sum." },
      { id: "c", text: "3.8%" },
      { id: "d", text: "0.7%" },
    ],
    correctId: "a",
    explanation:
      "Credit spread `= bond yield − Treasury yield = 5.5% − 3.8% = 1.7%` (`170` bps).",
  },
  {
    id: "credit-risk-and-ratings.q5",
    lessonSlug: "credit-risk-and-ratings",
    type: "single",
    difficulty: "medium",
    tags: ["bonds", "downgrade", "scenario"],
    prompt: "A bond is downgraded from `BBB−` to `BB+`. What typically happens?",
    choices: [
      { id: "a", text: "Its spread narrows and its price rises" },
      { id: "b", text: "Its spread widens and its price falls — it's now a fallen angel" },
      { id: "c", text: "Nothing changes, since both are investment grade", feedback: "BB+ is junk; the bond just crossed out of investment grade." },
      { id: "d", text: "Its coupon rate is reduced" },
    ],
    correctId: "b",
    explanation:
      "Dropping from `BBB−` (IG) to `BB+` (junk) makes it a **fallen angel**: the credit spread widens and the price falls.",
  },
  {
    id: "credit-risk-and-ratings.q6",
    lessonSlug: "credit-risk-and-ratings",
    type: "single",
    difficulty: "medium",
    tags: ["bonds", "spread", "scenario"],
    prompt: "A recession scare hits and investors flee risky debt. What happens to high-yield credit spreads?",
    choices: [
      { id: "a", text: "They widen" },
      { id: "b", text: "They narrow", feedback: "Fear over default widens spreads, not narrows them." },
      { id: "c", text: "They disappear" },
      { id: "d", text: "They become negative" },
    ],
    correctId: "a",
    explanation:
      "Rising default fears push investors away from risky debt, **widening** high-yield spreads — a real-time risk gauge.",
  },
  {
    id: "credit-risk-and-ratings.q7",
    lessonSlug: "credit-risk-and-ratings",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["bonds", "spread", "math"],
    unit: "%",
    prompt:
      "After a downgrade, a corporate bond yields `7.5%` while the same-maturity Treasury yields `4.0%`. What is the new spread?",
    choices: [
      { id: "a", text: "3.5%" },
      { id: "b", text: "11.5%", feedback: "Spread is the difference, not the sum of the two yields." },
      { id: "c", text: "1.9%" },
      { id: "d", text: "4.0%" },
    ],
    correctId: "a",
    explanation:
      "Spread `= 7.5% − 4.0% = 3.5%` (`350` bps) — wider than before the downgrade, reflecting greater risk.",
  },
  {
    id: "credit-risk-and-ratings.q8",
    lessonSlug: "credit-risk-and-ratings",
    type: "single",
    difficulty: "hard",
    tags: ["bonds", "misconception"],
    prompt: "\"Investment-grade bonds can't default.\" What's the best correction?",
    choices: [
      { id: "a", text: "Correct — IG bonds never default" },
      { id: "b", text: "IG bonds default far less than junk, but default is still possible — IG means low risk, not zero" },
      { id: "c", text: "IG bonds default more often than junk bonds" },
      { id: "d", text: "Only Treasuries can default" },
    ],
    correctId: "b",
    explanation:
      "Investment grade means **relatively low** default risk (`BBB−/Baa3`+), not zero. IG bonds default far less than junk, but default remains possible.",
  },
  {
    id: "credit-risk-and-ratings.q9",
    lessonSlug: "credit-risk-and-ratings",
    type: "single",
    difficulty: "hard",
    tags: ["bonds", "ratings", "limits"],
    prompt: "Why might credit spreads move *before* a rating agency changes its rating?",
    choices: [
      { id: "a", text: "Agencies update ratings hourly" },
      { id: "b", text: "Market-driven spreads reprice risk in real time, while ratings can lag" },
      { id: "c", text: "Spreads are set by the rating agencies themselves" },
      { id: "d", text: "Treasury yields control all corporate ratings" },
    ],
    correctId: "b",
    explanation:
      "A rating is a published opinion that can **lag**. Spreads, set by the market, reprice risk continuously and often signal trouble first.",
  },
];
