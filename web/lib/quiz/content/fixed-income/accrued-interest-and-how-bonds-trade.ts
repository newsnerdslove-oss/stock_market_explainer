import type { Question } from "@/lib/quiz/types";

// Quiz for the "Accrued Interest & How Bonds Trade" lesson.
export const questions: Question[] = [
  {
    id: "accrued-interest-and-how-bonds-trade.q1",
    lessonSlug: "accrued-interest-and-how-bonds-trade",
    type: "single",
    difficulty: "easy",
    tags: ["bonds", "accrued-interest"],
    prompt: "When a bond is bought between coupon dates, who pays the accrued interest to whom?",
    choices: [
      { id: "a", text: "The buyer pays the seller" },
      { id: "b", text: "The seller pays the buyer", feedback: "Reversed. The seller earned the interest since the last coupon, so the buyer reimburses the seller at settlement." },
      { id: "c", text: "The issuer pays the buyer directly" },
      { id: "d", text: "No one — interest only changes hands on coupon dates" },
    ],
    correctId: "a",
    explanation:
      "The **buyer pays the seller** the interest the seller earned since the last coupon. The buyer then collects the **full** coupon on the next payment date, recovering what they advanced.",
  },
  {
    id: "accrued-interest-and-how-bonds-trade.q2",
    lessonSlug: "accrued-interest-and-how-bonds-trade",
    type: "single",
    difficulty: "medium",
    tags: ["bonds", "day-count"],
    prompt: "Which day-count convention do **corporate and municipal** bonds use?",
    choices: [
      { id: "a", text: "`30/360`" },
      { id: "b", text: "`actual/actual`", feedback: "That's the Treasury convention. Corporates and munis use 30/360." },
      { id: "c", text: "`actual/360`" },
      { id: "d", text: "`30/365`" },
    ],
    correctId: "a",
    explanation:
      "**Corporate and municipal** bonds use **`30/360`** (each month = 30 days, year = 360). **US Treasuries** use **`actual/actual`**.",
  },
  {
    id: "accrued-interest-and-how-bonds-trade.q3",
    lessonSlug: "accrued-interest-and-how-bonds-trade",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["bonds", "accrued-interest", "math"],
    unit: "$",
    prompt: "A `$1,000` par corporate bond with a `6%` coupon last paid `60` days ago (30/360). What is the accrued interest per bond?",
    choices: [
      { id: "a", text: "$10.00" },
      { id: "b", text: "$30.00", feedback: "$30 is a full semiannual coupon (180 days). Sixty days is one-third of that period." },
      { id: "c", text: "$60.00", feedback: "$60 is a full year of interest, not 60 days' worth." },
      { id: "d", text: "$5.00" },
    ],
    correctId: "a",
    explanation:
      "Annual interest is `$60`. Accrued = `$60 × (60 ÷ 360) = $10`.",
  },
  {
    id: "accrued-interest-and-how-bonds-trade.q4",
    lessonSlug: "accrued-interest-and-how-bonds-trade",
    type: "single",
    difficulty: "medium",
    tags: ["bonds", "pricing"],
    prompt: "A bond's **quoted** price is its…",
    choices: [
      { id: "a", text: "Clean price — excluding accrued interest" },
      { id: "b", text: "Dirty price — including accrued interest", feedback: "The dirty (invoice) price is what the buyer pays; quotes are the clean price." },
      { id: "c", text: "Par value" },
      { id: "d", text: "Yield to maturity" },
    ],
    correctId: "a",
    explanation:
      "Bonds are **quoted clean** (no accrued). The buyer's **invoice / dirty price** = clean price + accrued interest.",
  },
  {
    id: "accrued-interest-and-how-bonds-trade.q5",
    lessonSlug: "accrued-interest-and-how-bonds-trade",
    type: "single",
    difficulty: "hard",
    tags: ["bonds", "trading-flat"],
    prompt: "Which of these bonds trades **flat** (with no accrued interest)?",
    choices: [
      { id: "a", text: "A bond in default" },
      { id: "b", text: "A newly issued investment-grade corporate", feedback: "A current-pay coupon bond accrues interest normally." },
      { id: "c", text: "A premium Treasury note", feedback: "Treasuries accrue interest (actual/actual); only zeros, defaults, and income bonds trade flat." },
      { id: "d", text: "A municipal GO bond paying its coupons on time" },
    ],
    correctId: "a",
    explanation:
      "Bonds **trade flat** when there's no current interest to accrue: **zero-coupon** bonds, **bonds in default**, and **income/adjustment** bonds. A defaulted bond isn't paying, so accrued interest is `$0`.",
  },
  {
    id: "accrued-interest-and-how-bonds-trade.q6",
    lessonSlug: "accrued-interest-and-how-bonds-trade",
    type: "single",
    difficulty: "medium",
    tags: ["bonds", "accrual-period"],
    prompt: "Over what period does accrued interest accumulate?",
    choices: [
      { id: "a", text: "From the last coupon date up to (but not including) settlement" },
      { id: "b", text: "From the trade date to the next coupon date", feedback: "Accrual looks backward from settlement to the last coupon paid, not forward." },
      { id: "c", text: "From issuance to maturity" },
      { id: "d", text: "Only on the coupon date itself" },
    ],
    correctId: "a",
    explanation:
      "Accrued interest runs from the **last coupon date** up to **(but not including) the settlement date** — the stretch the seller held the bond without being paid.",
  },
];
