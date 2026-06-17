import type { Question } from "@/lib/quiz/types";

// Quiz for the "How Bonds Work" lesson.
export const questions: Question[] = [
  {
    id: "how-bonds-work.q1",
    lessonSlug: "how-bonds-work",
    type: "single",
    difficulty: "easy",
    tags: ["bonds", "basics"],
    prompt: "When you buy a bond, you are the…",
    choices: [
      { id: "a", text: "Lender" },
      { id: "b", text: "Borrower", feedback: "The issuer borrows; the buyer lends the money." },
      { id: "c", text: "Part-owner of the company" },
      { id: "d", text: "Guarantor of the loan" },
    ],
    correctId: "a",
    explanation:
      "A bond is a loan. The **buyer is the lender**, handing over cash today; the **issuer is the borrower**, who owes interest and repays the principal at maturity.",
  },
  {
    id: "how-bonds-work.q2",
    lessonSlug: "how-bonds-work",
    type: "single",
    difficulty: "easy",
    tags: ["bonds", "par"],
    prompt: "The **par value** of a bond is…",
    choices: [
      { id: "a", text: "The amount repaid to the holder at maturity" },
      { id: "b", text: "The price you pay to buy it today", feedback: "That's the market price — it can differ from par and changes daily." },
      { id: "c", text: "The annual interest in dollars" },
      { id: "d", text: "The issuer's total debt" },
    ],
    correctId: "a",
    explanation:
      "**Par (face) value** is the amount repaid at maturity — conventionally `$1,000`. It's a repayment convention, not the market price.",
  },
  {
    id: "how-bonds-work.q3",
    lessonSlug: "how-bonds-work",
    type: "numericChoice",
    difficulty: "easy",
    tags: ["bonds", "coupon", "math"],
    unit: "$",
    prompt: "A `$1,000` par bond has a `5%` coupon paid **semiannually**. How much is *each* coupon payment?",
    choices: [
      { id: "a", text: "$50" },
      { id: "b", text: "$25" },
      { id: "c", text: "$100", feedback: "That doubles the annual coupon instead of halving it." },
      { id: "d", text: "$10" },
    ],
    correctId: "b",
    explanation:
      "Annual coupon `= 0.05 × 1,000 = $50`. Semiannual means each payment is `$50 ÷ 2 = $25`.",
  },
  {
    id: "how-bonds-work.q4",
    lessonSlug: "how-bonds-work",
    type: "single",
    difficulty: "easy",
    tags: ["bonds", "maturity"],
    prompt: "How often do most US bonds, including Treasuries, pay their coupons?",
    choices: [
      { id: "a", text: "Once a year" },
      { id: "b", text: "Monthly" },
      { id: "c", text: "Every six months (semiannually)" },
      { id: "d", text: "Only at maturity" },
    ],
    correctId: "c",
    explanation:
      "Most US bonds pay **semiannually** — every six months. Each payment equals the annual coupon divided by two.",
  },
  {
    id: "how-bonds-work.q5",
    lessonSlug: "how-bonds-work",
    type: "single",
    difficulty: "medium",
    tags: ["bonds", "coupon", "scenario"],
    prompt:
      "You hold a bond with a `4%` coupon (`$40`/year). Market interest rates suddenly jump to `7%`. What happens to your coupon payment?",
    choices: [
      { id: "a", text: "It rises to keep pace with the 7% market rate", feedback: "The coupon rate is fixed at issuance and doesn't track market rates." },
      { id: "b", text: "It stays at $40 per year — the coupon rate is fixed" },
      { id: "c", text: "It falls because the bond is now less valuable" },
      { id: "d", text: "It is suspended until rates fall again" },
    ],
    correctId: "b",
    explanation:
      "The coupon rate is **fixed at issuance**. Your payment stays `$40`/year regardless of market rates. (What *does* change is the bond's market price — covered in the next lesson.)",
  },
  {
    id: "how-bonds-work.q6",
    lessonSlug: "how-bonds-work",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["bonds", "cashflow", "math"],
    unit: "$",
    prompt:
      "A `$1,000` par, `8%` coupon bond pays **semiannually** with `3` years to maturity. If held to maturity, what total cash do you receive?",
    choices: [
      { id: "a", text: "$1,080" },
      { id: "b", text: "$1,240" },
      { id: "c", text: "$1,480", feedback: "That counts 6 years of coupons; 3 years × 2 = 6 payments of $40." },
      { id: "d", text: "$1,000" },
    ],
    correctId: "b",
    explanation:
      "Annual coupon `= $80`, semiannual `= $40`, payments `= 3 × 2 = 6`. Total `= (6 × $40) + $1,000 = $240 + $1,000 = $1,240`.",
  },
  {
    id: "how-bonds-work.q7",
    lessonSlug: "how-bonds-work",
    type: "single",
    difficulty: "medium",
    tags: ["bonds", "zero-coupon"],
    prompt: "A **zero-coupon** bond returns a profit to the holder by…",
    choices: [
      { id: "a", text: "Paying a higher-than-normal coupon" },
      { id: "b", text: "Being sold below par, with the gain being the gap up to the $1,000 repaid at maturity" },
      { id: "c", text: "Paying monthly interest" },
      { id: "d", text: "Increasing its par value over time" },
    ],
    correctId: "b",
    explanation:
      "A zero-coupon bond pays **no** coupons. It's sold *below* par, and the entire return is the difference between the discounted price and the `$1,000` paid at maturity.",
  },
  {
    id: "how-bonds-work.q8",
    lessonSlug: "how-bonds-work",
    type: "single",
    difficulty: "hard",
    tags: ["bonds", "misconception"],
    prompt:
      "A friend says, \"Buying a bond always costs `$1,000` because that's the par value.\" What's the best correction?",
    choices: [
      { id: "a", text: "Correct — par is always the purchase price" },
      { id: "b", text: "Par is what's repaid at maturity; the market price can be above or below par and changes daily" },
      { id: "c", text: "Bonds always cost more than $1,000" },
      { id: "d", text: "Par equals the coupon payment, not the price" },
    ],
    correctId: "b",
    explanation:
      "Par (`$1,000`) is the amount **repaid at maturity**, not the price you pay. The market price floats above or below par and changes daily as interest rates move.",
  },
];
