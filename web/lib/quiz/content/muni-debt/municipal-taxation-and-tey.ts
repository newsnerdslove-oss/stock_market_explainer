import type { Question } from "@/lib/quiz/types";

// Quiz for the "Municipal Taxation & Tax-Equivalent Yield" lesson.
export const questions: Question[] = [
  {
    id: "municipal-taxation-and-tey.q1",
    lessonSlug: "municipal-taxation-and-tey",
    type: "numericChoice",
    difficulty: "easy",
    tags: ["fn:3", "tey", "municipal-bonds"],
    unit: "%",
    prompt:
      "An investor in the `28%` bracket holds a muni yielding `3.6%`. What taxable yield is equivalent (TEY)?",
    choices: [
      { id: "a", text: "2.59%", feedback: "That's the after-tax figure (3.6 × 0.72). TEY divides by (1 − bracket)." },
      { id: "b", text: "5.00%" },
      { id: "c", text: "4.62%" },
      { id: "d", text: "12.86%" },
    ],
    correctId: "b",
    explanation:
      "`TEY = 3.6% ÷ (1 − 0.28) = 3.6% ÷ 0.72 = 5.0%`. A taxable bond must yield `5.0%` to match this muni.",
  },
  {
    id: "municipal-taxation-and-tey.q2",
    lessonSlug: "municipal-taxation-and-tey",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "tey", "yield"],
    unit: "%",
    prompt:
      "A `32%`-bracket investor compares a muni yielding `4.5%` with a corporate bond. What is the muni's TEY?",
    choices: [
      { id: "a", text: "6.62%" },
      { id: "b", text: "5.96%", feedback: "That divides by 0.755 — use (1 − 0.32) = 0.68 in the denominator." },
      { id: "c", text: "3.06%" },
      { id: "d", text: "5.94%" },
    ],
    correctId: "a",
    explanation:
      "`TEY = 4.5% ÷ (1 − 0.32) = 4.5% ÷ 0.68 = 6.62%`. The corporate must beat `6.62%` to win.",
  },
  {
    id: "municipal-taxation-and-tey.q3",
    lessonSlug: "municipal-taxation-and-tey",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "tey", "after-tax-yield"],
    unit: "%",
    prompt:
      "A `25%`-bracket investor looks at a `6.0%` corporate bond. What is its after-tax yield, to compare with a muni?",
    choices: [
      { id: "a", text: "8.00%", feedback: "Dividing by (1 − bracket) gives the muni's TEY, not the corporate's after-tax yield." },
      { id: "b", text: "1.50%" },
      { id: "c", text: "4.50%" },
      { id: "d", text: "5.00%" },
    ],
    correctId: "c",
    explanation:
      "`after-tax yield = taxable yield × (1 − bracket) = 6.0% × 0.75 = 4.50%`. Compare that to the muni's nominal yield.",
  },
  {
    id: "municipal-taxation-and-tey.q4",
    lessonSlug: "municipal-taxation-and-tey",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["fn:3", "tey", "triple-tax-exempt"],
    unit: "%",
    prompt:
      "An in-state muni yields `3.0%` and is double-exempt; the investor's combined federal + state bracket is `40%`. What is the TEY?",
    choices: [
      { id: "a", text: "4.20%", feedback: "That uses a 0.714 denominator — combine the brackets to 0.60." },
      { id: "b", text: "5.00%" },
      { id: "c", text: "7.50%" },
      { id: "d", text: "1.80%" },
    ],
    correctId: "b",
    explanation:
      "For a double-exempt muni use the combined bracket: `TEY = 3.0% ÷ (1 − 0.40) = 3.0% ÷ 0.60 = 5.0%`.",
  },
  {
    id: "municipal-taxation-and-tey.q5",
    lessonSlug: "municipal-taxation-and-tey",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "de-minimis", "municipal-bonds"],
    unit: "$",
    prompt:
      "A `$1,000` par muni has `8` years to maturity. Below what purchase price does the discount stop being de minimis?",
    choices: [
      { id: "a", text: "$980" },
      { id: "b", text: "$975", feedback: "That's the 10-year cutoff (0.25% × 10 = 2.5%). Here it's 8 years." },
      { id: "c", text: "$998" },
      { id: "d", text: "$960" },
    ],
    correctId: "a",
    explanation:
      "Threshold `= 0.25% × 8 = 2.0% = $20`, so the cutoff is `$1,000 − $20 = $980`. A purchase at `$982` (discount `$18 < $20`) stays de minimis → capital gain.",
  },
  {
    id: "municipal-taxation-and-tey.q6",
    lessonSlug: "municipal-taxation-and-tey",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "de-minimis", "taxation"],
    prompt:
      "A muni bought at `$982` with `8` years to maturity (cutoff `$980`) is sold at par at maturity. How is the `$18` discount taxed?",
    choices: [
      { id: "a", text: "As tax-exempt interest" },
      { id: "b", text: "As a capital gain, because the discount is de minimis" },
      { id: "c", text: "As ordinary income, because all market discount is ordinary", feedback: "Only discounts ABOVE the threshold are ordinary income; $18 < $20 is de minimis." },
      { id: "d", text: "It is never taxed" },
    ],
    correctId: "b",
    explanation:
      "Discount `$18 < $20` threshold → **de minimis** → taxed as a **capital gain**. Above the threshold it would be ordinary income.",
  },
  {
    id: "municipal-taxation-and-tey.q7",
    lessonSlug: "municipal-taxation-and-tey",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "amt", "private-activity-bonds"],
    prompt: "Interest from which muni can be added back as a preference item for the AMT?",
    choices: [
      { id: "a", text: "A public-school GO bond" },
      { id: "b", text: "An essential-purpose water/sewer revenue bond" },
      { id: "c", text: "A non-essential-use private-activity bond" },
      { id: "d", text: "A pre-refunded GO bond", feedback: "Pre-refunding affects credit quality, not AMT status; PABs are the AMT trap." },
    ],
    correctId: "c",
    explanation:
      "Interest on **non-essential-use private-activity bonds (PABs)** is a **tax preference item** added back for the AMT. Most public-purpose munis are not AMT bonds.",
  },
  {
    id: "municipal-taxation-and-tey.q8",
    lessonSlug: "municipal-taxation-and-tey",
    type: "single",
    difficulty: "hard",
    tags: ["fn:3", "taxation", "misconception"],
    prompt:
      "\"Municipal bond interest is always completely tax-free.\" What's the best correction?",
    choices: [
      { id: "a", text: "True — munis face no tax of any kind" },
      { id: "b", text: "Federally exempt INTEREST only; can be state-taxable, AMT-taxable on PABs, and capital gains are fully taxable" },
      { id: "c", text: "Only the capital gain is exempt; interest is taxed" },
      { id: "d", text: "Munis are exempt from state tax but not federal" },
    ],
    correctId: "b",
    explanation:
      "The exemption covers **federal interest** only. Out-of-state munis can be state-taxable, PAB interest can hit the AMT, and any **capital gain is fully taxable**.",
  },
];
