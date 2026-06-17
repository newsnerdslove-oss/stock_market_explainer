import type { Question } from "@/lib/quiz/types";

// Quiz for the "Money-Market & Short-Term Debt Instruments" lesson.
export const questions: Question[] = [
  {
    id: "money-market-and-short-term-debt.q1",
    lessonSlug: "money-market-and-short-term-debt",
    type: "numericChoice",
    difficulty: "easy",
    tags: ["fn:3", "t-bills", "discount-yield"],
    unit: "%",
    prompt:
      "A 90-day, `$100,000` T-bill is bought at `$99,250`. What is its bank-discount yield?",
    choices: [
      { id: "a", text: "3.00%" },
      { id: "b", text: "0.75%", feedback: "You forgot to annualize — multiply by 360 ÷ 90 = 4." },
      { id: "c", text: "3.02%" },
      { id: "d", text: "1.00%" },
    ],
    correctId: "a",
    explanation:
      "Discount `= $750`. `yield = ($750 ÷ $100,000) × (360 ÷ 90) = 0.0075 × 4 = 3.0%`.",
  },
  {
    id: "money-market-and-short-term-debt.q2",
    lessonSlug: "money-market-and-short-term-debt",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "t-bills", "discount-yield"],
    unit: "%",
    prompt:
      "A 100-day, `$10,000` T-bill is bought at `$9,800`. What is its bank-discount yield?",
    choices: [
      { id: "a", text: "2.00%", feedback: "That's the discount fraction before annualizing by 360 ÷ 100." },
      { id: "b", text: "7.20%" },
      { id: "c", text: "7.35%", feedback: "Dividing by the $9,800 price gives the bond-equivalent style figure; bank discount uses face." },
      { id: "d", text: "6.00%" },
    ],
    correctId: "b",
    explanation:
      "Discount `= $200`. `yield = ($200 ÷ $10,000) × (360 ÷ 100) = 0.02 × 3.6 = 7.2%`.",
  },
  {
    id: "money-market-and-short-term-debt.q3",
    lessonSlug: "money-market-and-short-term-debt",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "t-bills", "discount-yield"],
    unit: "%",
    prompt:
      "A 60-day, `$10,000` T-bill is bought at `$9,900`. What is its bank-discount yield?",
    choices: [
      { id: "a", text: "1.00%" },
      { id: "b", text: "6.00%" },
      { id: "c", text: "6.06%", feedback: "Bank discount divides by the $10,000 face, not the $9,900 price." },
      { id: "d", text: "0.60%" },
    ],
    correctId: "b",
    explanation:
      "Discount `= $100`. `yield = ($100 ÷ $10,000) × (360 ÷ 60) = 0.01 × 6 = 6.0%`.",
  },
  {
    id: "money-market-and-short-term-debt.q4",
    lessonSlug: "money-market-and-short-term-debt",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["fn:3", "t-bills", "discount-yield"],
    unit: "%",
    prompt:
      "A 180-day, `$100,000` T-bill is bought at `$98,500`. What is its bank-discount yield?",
    choices: [
      { id: "a", text: "1.50%", feedback: "That's the discount fraction; annualize by 360 ÷ 180 = 2." },
      { id: "b", text: "3.00%" },
      { id: "c", text: "3.05%", feedback: "Dividing by the $98,500 price instead of face overstates the bank-discount yield." },
      { id: "d", text: "2.96%" },
    ],
    correctId: "b",
    explanation:
      "Discount `= $1,500`. `yield = ($1,500 ÷ $100,000) × (360 ÷ 180) = 0.015 × 2 = 3.0%`.",
  },
  {
    id: "money-market-and-short-term-debt.q5",
    lessonSlug: "money-market-and-short-term-debt",
    type: "single",
    difficulty: "easy",
    tags: ["fn:3", "municipal-notes", "ban"],
    prompt:
      "A municipality will repay a short-term note from the proceeds of an upcoming bond sale. Which note is it?",
    choices: [
      { id: "a", text: "TAN" },
      { id: "b", text: "RAN" },
      { id: "c", text: "BAN" },
      { id: "d", text: "Commercial paper", feedback: "Commercial paper is corporate, not a municipal anticipation note." },
    ],
    correctId: "c",
    explanation:
      "A **BAN** (Bond Anticipation Note) is repaid from an **upcoming bond sale**. TAN/RAN are repaid from taxes/revenue.",
  },
  {
    id: "money-market-and-short-term-debt.q6",
    lessonSlug: "money-market-and-short-term-debt",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "commercial-paper", "registration"],
    prompt:
      "What maturity ceiling keeps commercial paper exempt from Securities Act registration?",
    choices: [
      { id: "a", text: "90 days" },
      { id: "b", text: "180 days" },
      { id: "c", text: "270 days" },
      { id: "d", text: "365 days", feedback: "One year is the money-market boundary generally, but the CP exemption ceiling is 270 days." },
    ],
    correctId: "c",
    explanation:
      "Commercial paper maturing in **270 days or less** is exempt from Securities Act registration. It's unsecured corporate debt issued at a discount.",
  },
  {
    id: "money-market-and-short-term-debt.q7",
    lessonSlug: "money-market-and-short-term-debt",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "repos", "money-market"],
    prompt: "A repurchase agreement (repo) is best described as…",
    choices: [
      { id: "a", text: "A permanent sale of securities" },
      { id: "b", text: "A sale of securities with an agreement to repurchase them at a higher price — a collateralized short-term loan" },
      { id: "c", text: "An unsecured corporate loan" },
      { id: "d", text: "A bank time deposit ≥ $100,000", feedback: "That describes a negotiable CD, not a repo." },
    ],
    correctId: "b",
    explanation:
      "A **repo** sells securities with a buy-back at a higher price — effectively a **collateralized short-term loan**. The buyer's side is a **reverse repo**.",
  },
  {
    id: "money-market-and-short-term-debt.q8",
    lessonSlug: "money-market-and-short-term-debt",
    type: "single",
    difficulty: "hard",
    tags: ["fn:3", "t-bills", "misconception"],
    prompt:
      "\"The T-bill's discount yield is its true return.\" What's the best correction?",
    choices: [
      { id: "a", text: "True — discount yield is the exact return" },
      { id: "b", text: "The bank-discount yield understates the real return; it divides by face and uses 360 days, while the bond-equivalent yield uses the purchase price and 365 days" },
      { id: "c", text: "The discount yield overstates the return because it uses 365 days" },
      { id: "d", text: "T-bills have no measurable return" },
    ],
    correctId: "b",
    explanation:
      "Bank-discount yield divides by the **higher face value** and uses a **360-day** year, so it **understates** the true return. The bond-equivalent yield uses the lower purchase price and 365 days.",
  },
];
