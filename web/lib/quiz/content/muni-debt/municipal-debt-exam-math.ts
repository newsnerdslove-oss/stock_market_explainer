import type { Question } from "@/lib/quiz/types";

// Quiz for the "Series 7 Municipal & Debt Math, Worked End-to-End" lesson.
export const questions: Question[] = [
  {
    id: "municipal-debt-exam-math.q1",
    lessonSlug: "municipal-debt-exam-math",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "accrued-interest", "thirty-360"],
    unit: "$",
    prompt:
      "A `5%` corporate bond (`$1,000` par) had its last coupon on **Mar 1** and settles **Jun 1** (30/360). How much accrued interest does the buyer pay?",
    choices: [
      { id: "a", text: "$12.50" },
      { id: "b", text: "$12.78", feedback: "That uses actual days (92 from Mar 1 to Jun 1); corporates use 30/360, giving exactly 90 days → $12.50." },
      { id: "c", text: "$25.00" },
      { id: "d", text: "$4.17" },
    ],
    correctId: "a",
    explanation:
      "30/360 days Mar 1 → Jun 1 `= 90`. `accrued = $1,000 × 5% × (90 ÷ 360) = $50 × 0.25 = $12.50`.",
  },
  {
    id: "municipal-debt-exam-math.q2",
    lessonSlug: "municipal-debt-exam-math",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "tey", "after-tax-yield"],
    unit: "%",
    prompt:
      "An investor in the `24%` bracket holds a muni yielding `3.2%`. What is the tax-equivalent yield?",
    choices: [
      { id: "a", text: "4.21%" },
      { id: "b", text: "2.43%", feedback: "That's the after-tax figure (3.2 × 0.76); TEY divides by 0.76 instead." },
      { id: "c", text: "3.97%" },
      { id: "d", text: "4.00%" },
    ],
    correctId: "a",
    explanation:
      "`TEY = 3.2% ÷ (1 − 0.24) = 3.2% ÷ 0.76 = 4.21%`.",
  },
  {
    id: "municipal-debt-exam-math.q3",
    lessonSlug: "municipal-debt-exam-math",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "t-bills", "discount-yield"],
    unit: "%",
    prompt:
      "A 120-day, `$10,000` T-bill is bought at `$9,800`. What is its bank-discount yield?",
    choices: [
      { id: "a", text: "2.00%", feedback: "That's the discount fraction before annualizing by 360 ÷ 120 = 3." },
      { id: "b", text: "6.00%" },
      { id: "c", text: "6.12%", feedback: "Bank discount divides by the $10,000 face, not the $9,800 price." },
      { id: "d", text: "7.20%" },
    ],
    correctId: "b",
    explanation:
      "Discount `= $200`. `yield = ($200 ÷ $10,000) × (360 ÷ 120) = 0.02 × 3 = 6.0%`.",
  },
  {
    id: "municipal-debt-exam-math.q4",
    lessonSlug: "municipal-debt-exam-math",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "accrued-interest", "thirty-360"],
    unit: "$",
    prompt:
      "A `4%` municipal bond (`$1,000` par) had its last coupon on **Jan 1** and settles **Apr 1** (30/360). What accrued interest does the buyer pay?",
    choices: [
      { id: "a", text: "$10.00" },
      { id: "b", text: "$20.00", feedback: "That's a half-year of interest; only 90 of 360 days have accrued." },
      { id: "c", text: "$13.33" },
      { id: "d", text: "$40.00" },
    ],
    correctId: "a",
    explanation:
      "30/360 days Jan 1 → Apr 1 `= 90`. `accrued = $1,000 × 4% × (90 ÷ 360) = $40 × 0.25 = $10.00`.",
  },
  {
    id: "municipal-debt-exam-math.q5",
    lessonSlug: "municipal-debt-exam-math",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["fn:3", "tey", "yield"],
    unit: "%",
    prompt:
      "A `32%`-bracket investor compares a muni yielding `3.75%` to a `5.25%` corporate. What is the muni's TEY?",
    choices: [
      { id: "a", text: "5.51%" },
      { id: "b", text: "2.55%", feedback: "That's the after-tax muni figure; TEY divides by 0.68, it doesn't multiply." },
      { id: "c", text: "5.25%" },
      { id: "d", text: "5.88%" },
    ],
    correctId: "a",
    explanation:
      "`TEY = 3.75% ÷ (1 − 0.32) = 3.75% ÷ 0.68 = 5.51% > 5.25%` → the muni wins. Cross-check: `5.25% × 0.68 = 3.57% < 3.75%`.",
  },
  {
    id: "municipal-debt-exam-math.q6",
    lessonSlug: "municipal-debt-exam-math",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "convertible-bonds", "parity"],
    unit: "$",
    prompt:
      "A bond convertible at `$50` has stock trading at `$52`. What is the bond's parity price?",
    choices: [
      { id: "a", text: "$1,040" },
      { id: "b", text: "$1,300", feedback: "Ratio is 1,000 ÷ 50 = 20 shares, not 25." },
      { id: "c", text: "$1,000" },
      { id: "d", text: "$1,020" },
    ],
    correctId: "a",
    explanation:
      "`ratio = $1,000 ÷ $50 = 20 shares`; `bond parity = $52 × 20 = $1,040`.",
  },
  {
    id: "municipal-debt-exam-math.q7",
    lessonSlug: "municipal-debt-exam-math",
    type: "single",
    difficulty: "hard",
    tags: ["fn:3", "accrued-interest", "day-count"],
    prompt:
      "Two bonds have identical dates, but one is a corporate and one is a Treasury. Why can their accrued interest differ?",
    choices: [
      { id: "a", text: "Treasuries never accrue interest" },
      { id: "b", text: "Corporates use 30/360 while Treasuries use actual/actual, so the same dates yield different day-counts" },
      { id: "c", text: "Treasuries accrue from settlement forward, corporates backward" },
      { id: "d", text: "The buyer pays accrued only on Treasuries", feedback: "The buyer pays accrued on both; the difference is the day-count convention." },
    ],
    correctId: "b",
    explanation:
      "Day-count depends on the instrument: **corporate/muni `30/360`** vs **Treasury `actual/actual`**. Identical dates can produce different accrued figures.",
  },
  {
    id: "municipal-debt-exam-math.q8",
    lessonSlug: "municipal-debt-exam-math",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "accrued-interest", "settlement"],
    prompt:
      "When does accrued interest stop accumulating, and who pays it?",
    choices: [
      { id: "a", text: "Through the settlement date inclusive; the seller pays the buyer" },
      { id: "b", text: "Up to but not including settlement; the buyer pays the seller" },
      { id: "c", text: "Through the next coupon date; the issuer pays the buyer", feedback: "The issuer pays the full coupon at the coupon date; accrued is settled buyer-to-seller at trade settlement." },
      { id: "d", text: "From settlement forward; the buyer pays the issuer" },
    ],
    correctId: "b",
    explanation:
      "Accrued runs from the last coupon **up to but NOT including settlement** (T+1), and the **buyer pays the seller** for the interest earned but not yet paid.",
  },
];
