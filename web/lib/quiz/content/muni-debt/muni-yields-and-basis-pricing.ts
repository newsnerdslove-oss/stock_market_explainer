import type { Question } from "@/lib/quiz/types";

// Quiz for the "Yields & Basis Pricing for Municipal Bonds" lesson.
export const questions: Question[] = [
  {
    id: "muni-yields-and-basis-pricing.q1",
    lessonSlug: "muni-yields-and-basis-pricing",
    type: "numericChoice",
    difficulty: "easy",
    tags: ["fn:3", "yield", "current-yield"],
    unit: "%",
    prompt:
      "A `6%` coupon, `$1,000` par muni trades at `$1,200`. What is its current yield?",
    choices: [
      { id: "a", text: "6.00%", feedback: "That's the nominal yield (coupon). Current yield divides by price, not par." },
      { id: "b", text: "5.00%" },
      { id: "c", text: "7.20%" },
      { id: "d", text: "4.80%" },
    ],
    correctId: "b",
    explanation:
      "`current yield = annual coupon ÷ price = $60 ÷ $1,200 = 5.0%`. Below the `6%` nominal — expected for a premium bond.",
  },
  {
    id: "muni-yields-and-basis-pricing.q2",
    lessonSlug: "muni-yields-and-basis-pricing",
    type: "single",
    difficulty: "easy",
    tags: ["fn:3", "yield", "premium-bond"],
    prompt: "For a **premium** callable bond, which yield is the lowest?",
    choices: [
      { id: "a", text: "Nominal yield" },
      { id: "b", text: "Current yield" },
      { id: "c", text: "Yield to maturity" },
      { id: "d", text: "Yield to call" },
    ],
    correctId: "d",
    explanation:
      "For a premium bond the ranking is `YTC < YTM < current < nominal`, so **yield-to-call** is the lowest — and the MSRB worst case.",
  },
  {
    id: "muni-yields-and-basis-pricing.q3",
    lessonSlug: "muni-yields-and-basis-pricing",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "yield", "current-yield", "ranking"],
    unit: "%",
    prompt:
      "A `4%` coupon, `$1,000` par **discount** muni trades at `$930`. What is its current yield (rounded), and where does it sit in the discount ranking?",
    choices: [
      { id: "a", text: "4.30%" },
      { id: "b", text: "4.00%", feedback: "That's the nominal yield; for a discount bond the current yield is higher." },
      { id: "c", text: "3.72%", feedback: "Current yield divides the coupon by price ($930), not by par." },
      { id: "d", text: "5.30%" },
    ],
    correctId: "a",
    explanation:
      "`current yield = $40 ÷ $930 = 4.30%`. For a discount bond `nominal 4.0% < current 4.30% < YTM < YTC`.",
  },
  {
    id: "muni-yields-and-basis-pricing.q4",
    lessonSlug: "muni-yields-and-basis-pricing",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "yield", "current-yield"],
    unit: "%",
    prompt:
      "A `5%` coupon, `$1,000` par muni trades at `$1,050`. What is its current yield (rounded)?",
    choices: [
      { id: "a", text: "5.00%", feedback: "That's the nominal yield; at a premium the current yield is lower." },
      { id: "b", text: "4.76%" },
      { id: "c", text: "5.25%" },
      { id: "d", text: "4.55%" },
    ],
    correctId: "b",
    explanation:
      "`current yield = $50 ÷ $1,050 = 4.76%`. The premium ranking is `YTC < YTM < 4.76% current < 5.00% nominal`.",
  },
  {
    id: "muni-yields-and-basis-pricing.q5",
    lessonSlug: "muni-yields-and-basis-pricing",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "yield", "current-yield"],
    unit: "%",
    prompt:
      "A `4%` coupon, `$1,000` par muni trades at a discount of `$800`. What is its current yield?",
    choices: [
      { id: "a", text: "4.00%" },
      { id: "b", text: "3.20%", feedback: "That divides coupon by par × price oddly — current yield is coupon ÷ price." },
      { id: "c", text: "5.00%" },
      { id: "d", text: "6.25%" },
    ],
    correctId: "c",
    explanation:
      "`current yield = $40 ÷ $800 = 5.0%`. Above the `4%` nominal — expected for a discount bond.",
  },
  {
    id: "muni-yields-and-basis-pricing.q6",
    lessonSlug: "muni-yields-and-basis-pricing",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "basis-pricing", "msrb"],
    prompt: "A muni \"quoted at a 4.50 basis\" means the bond is…",
    choices: [
      { id: "a", text: "Priced at $4.50 per bond" },
      { id: "b", text: "Priced to yield 4.50%" },
      { id: "c", text: "Carrying a 4.50% coupon", feedback: "Basis refers to yield, not the coupon rate." },
      { id: "d", text: "Trading at 4.5% of par" },
    ],
    correctId: "b",
    explanation:
      "Munis are quoted **on a basis** (by yield). A `4.50` basis means the bond is **priced to yield 4.50%**.",
  },
  {
    id: "muni-yields-and-basis-pricing.q7",
    lessonSlug: "muni-yields-and-basis-pricing",
    type: "single",
    difficulty: "hard",
    tags: ["fn:3", "msrb", "yield-to-worst"],
    prompt:
      "Under the MSRB worst-case rule, a callable **premium** muni must be priced and confirmed to which yield?",
    choices: [
      { id: "a", text: "Yield to maturity" },
      { id: "b", text: "Nominal yield" },
      { id: "c", text: "Yield to call" },
      { id: "d", text: "Current yield", feedback: "Current yield isn't a worst-case measure; for a premium callable the worst case is YTC." },
    ],
    correctId: "c",
    explanation:
      "For a premium callable, **YTC** is the lowest yield (yield-to-worst). The MSRB requires pricing to it and disclosing it on the confirmation.",
  },
  {
    id: "muni-yields-and-basis-pricing.q8",
    lessonSlug: "muni-yields-and-basis-pricing",
    type: "single",
    difficulty: "hard",
    tags: ["fn:3", "yield", "misconception"],
    prompt:
      "\"A bond is always priced to its YTM.\" What's the best correction?",
    choices: [
      { id: "a", text: "True — YTM is always the disclosed yield" },
      { id: "b", text: "For a premium callable, the worst case is YTC, and MSRB requires pricing/disclosure on a yield-to-worst basis" },
      { id: "c", text: "Bonds are priced only to current yield" },
      { id: "d", text: "YTC is always the worst case for every bond", feedback: "For a discount callable, YTM is usually the worst case — not always YTC." },
    ],
    correctId: "b",
    explanation:
      "The customer must be shown the **lowest** yield they could earn. For a premium callable that's **YTC**; the yield-to-worst is disclosed on the confirmation.",
  },
];
