import type { Question } from "@/lib/quiz/types";

// Quiz for the "Bond Types & Funds" lesson.
export const questions: Question[] = [
  {
    id: "bond-types-and-funds.q1",
    lessonSlug: "bond-types-and-funds",
    type: "single",
    difficulty: "easy",
    tags: ["bonds", "treasury"],
    prompt: "Which is the shortest-maturity Treasury, sold at a discount with no coupon?",
    choices: [
      { id: "a", text: "Treasury bill" },
      { id: "b", text: "Treasury note", feedback: "Notes run 2–10 years and pay semiannual coupons." },
      { id: "c", text: "Treasury bond" },
      { id: "d", text: "Municipal bond" },
    ],
    correctId: "a",
    explanation:
      "A **Treasury bill** matures in `≤ 52` weeks, pays no coupon, and is sold at a discount to par.",
  },
  {
    id: "bond-types-and-funds.q2",
    lessonSlug: "bond-types-and-funds",
    type: "single",
    difficulty: "easy",
    tags: ["bonds", "muni", "tax"],
    prompt: "Interest from a typical municipal bond is…",
    choices: [
      { id: "a", text: "Generally exempt from federal income tax" },
      { id: "b", text: "Always fully taxable", feedback: "Munis are generally federal-tax-exempt, though not in every case." },
      { id: "c", text: "Taxed at double the corporate rate" },
      { id: "d", text: "Never taxed under any circumstances" },
    ],
    correctId: "a",
    explanation:
      "Muni interest is **generally federal-tax-exempt** (often state/local too if in-state) — though there are exceptions like taxable munis and AMT.",
  },
  {
    id: "bond-types-and-funds.q3",
    lessonSlug: "bond-types-and-funds",
    type: "single",
    difficulty: "easy",
    tags: ["bonds", "corporate"],
    prompt: "Compared with Treasuries, corporate bonds generally offer higher yields because they…",
    choices: [
      { id: "a", text: "Carry credit risk, compensated by the spread" },
      { id: "b", text: "Are tax-exempt" },
      { id: "c", text: "Have no maturity date" },
      { id: "d", text: "Are government-guaranteed" },
    ],
    correctId: "a",
    explanation:
      "Corporates carry **credit risk**, so they pay more than risk-free Treasuries — the extra yield is the credit spread. Their interest is fully taxable.",
  },
  {
    id: "bond-types-and-funds.q4",
    lessonSlug: "bond-types-and-funds",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["bonds", "muni", "tey", "math"],
    unit: "%",
    prompt:
      "An investor in the `24%` bracket holds a muni yielding `3.0%` (tax-free). What is its taxable-equivalent yield?",
    choices: [
      { id: "a", text: "2.28%", feedback: "That is 3.0% × (1 − 0.24) — the after-tax yield of a taxable bond, not the muni's TEY. TEY divides by (1 − rate)." },
      { id: "b", text: "3.95%" },
      { id: "c", text: "3.00%" },
      { id: "d", text: "12.50%" },
    ],
    correctId: "b",
    explanation:
      "`TEY = tax-free yield ÷ (1 − marginal rate) = 3.0% ÷ (1 − 0.24) = 3.0% ÷ 0.76 ≈ 3.95%`.",
  },
  {
    id: "bond-types-and-funds.q5",
    lessonSlug: "bond-types-and-funds",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["bonds", "muni", "tey", "math"],
    unit: "%",
    prompt:
      "In the `32%` bracket, what is the taxable-equivalent yield of a muni paying `3.5%`?",
    choices: [
      { id: "a", text: "5.15%" },
      { id: "b", text: "2.38%", feedback: "That's the muni after a tax it doesn't owe — TEY divides, not multiplies." },
      { id: "c", text: "4.62%" },
      { id: "d", text: "3.50%" },
    ],
    correctId: "a",
    explanation:
      "`TEY = 3.5% ÷ (1 − 0.32) = 3.5% ÷ 0.68 ≈ 5.15%`. That tops a `4.8%` taxable corporate, so the muni wins at this bracket.",
  },
  {
    id: "bond-types-and-funds.q6",
    lessonSlug: "bond-types-and-funds",
    type: "single",
    difficulty: "medium",
    tags: ["bonds", "individual", "scenario"],
    prompt: "An investor wants a known payout on one specific future date. The better fit is…",
    choices: [
      { id: "a", text: "A standard bond fund" },
      { id: "b", text: "An individual bond held to maturity" },
      { id: "c", text: "A money-market account" },
      { id: "d", text: "A high-yield bond ETF", feedback: "ETFs generally have no maturity, so they can't promise a set-date payout." },
    ],
    correctId: "b",
    explanation:
      "An **individual bond held to maturity** has a defined maturity and known cash flows — ideal for a payout on a specific date.",
  },
  {
    id: "bond-types-and-funds.q7",
    lessonSlug: "bond-types-and-funds",
    type: "single",
    difficulty: "medium",
    tags: ["bonds", "funds", "scenario"],
    prompt: "A key advantage of a bond ETF over assembling many individual bonds is…",
    choices: [
      { id: "a", text: "A guaranteed return of principal on a set date" },
      { id: "b", text: "Built-in diversification and easy trading" },
      { id: "c", text: "Complete freedom from interest-rate risk" },
      { id: "d", text: "Zero fees of any kind", feedback: "Funds charge an expense ratio." },
    ],
    correctId: "b",
    explanation:
      "Bond ETFs deliver **instant diversification and easy trading** — at the cost of no fixed maturity and an expense ratio.",
  },
  {
    id: "bond-types-and-funds.q8",
    lessonSlug: "bond-types-and-funds",
    type: "single",
    difficulty: "hard",
    tags: ["bonds", "funds", "misconception"],
    prompt: "\"A bond fund matures like a single bond, returning my principal on a set date.\" What's the best correction?",
    choices: [
      { id: "a", text: "Correct — all bond funds have a maturity date" },
      { id: "b", text: "Most funds/ETFs have no maturity; they continually trade holdings, so the price moves with rates" },
      { id: "c", text: "Bond funds mature faster than individual bonds" },
      { id: "d", text: "Only Treasury funds have a maturity" },
    ],
    correctId: "b",
    explanation:
      "Most bond funds and ETFs have **no maturity** — they continually buy and sell, so the price keeps fluctuating with rates. Defined-maturity ETFs are the exception.",
  },
  {
    id: "bond-types-and-funds.q9",
    lessonSlug: "bond-types-and-funds",
    type: "single",
    difficulty: "medium",
    tags: ["bonds", "muni", "tax", "scenario"],
    prompt:
      "An investor in a `0%` tax bracket compares a `3.5%` muni with a `4.8%` taxable corporate. Which generally wins?",
    choices: [
      { id: "a", text: "The muni, because munis always win" },
      { id: "b", text: "The taxable corporate — with no tax to avoid, its higher yield wins" },
      { id: "c", text: "They are exactly equal" },
      { id: "d", text: "Neither can be compared" },
    ],
    correctId: "b",
    explanation:
      "At `0%`, the muni TEY `= 3.5% ÷ 1 = 3.5%`, below the `4.8%` corporate. With no tax to shelter, the **taxable bond wins** — the muni's edge scales with the bracket.",
  },
];
