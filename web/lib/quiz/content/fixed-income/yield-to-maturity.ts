import type { Question } from "@/lib/quiz/types";

// Quiz for the "Yield to Maturity" lesson.
export const questions: Question[] = [
  {
    id: "yield-to-maturity.q1",
    lessonSlug: "yield-to-maturity",
    type: "single",
    difficulty: "easy",
    tags: ["bonds", "ytm"],
    prompt: "Unlike current yield, YTM also accounts for…",
    choices: [
      { id: "a", text: "The capital gain or loss as the price is pulled to par" },
      { id: "b", text: "Changes in the coupon rate over time", feedback: "The coupon rate is fixed; it doesn't change." },
      { id: "c", text: "The issuer's stock price" },
      { id: "d", text: "Inflation only" },
    ],
    correctId: "a",
    explanation:
      "YTM captures **both** coupon income **and** the capital gain/loss from the price's pull to par. Current yield captures income only.",
  },
  {
    id: "yield-to-maturity.q2",
    lessonSlug: "yield-to-maturity",
    type: "single",
    difficulty: "easy",
    tags: ["bonds", "ytm", "definition"],
    prompt: "YTM is best described as…",
    choices: [
      { id: "a", text: "The annual coupon divided by par" },
      { id: "b", text: "The total annualized return if the bond is held to maturity" },
      { id: "c", text: "The bond's price expressed as a percent" },
      { id: "d", text: "The coupon divided by the current price" },
    ],
    correctId: "b",
    explanation:
      "YTM is the **anticipated total annualized return if held to maturity** — the discount rate that sets the present value of cash flows equal to the price.",
  },
  {
    id: "yield-to-maturity.q3",
    lessonSlug: "yield-to-maturity",
    type: "single",
    difficulty: "medium",
    tags: ["bonds", "ordering", "scenario"],
    prompt: "For a **premium** bond, the correct ordering is…",
    choices: [
      { id: "a", text: "coupon rate < current yield < YTM" },
      { id: "b", text: "coupon rate > current yield > YTM" },
      { id: "c", text: "coupon rate = current yield = YTM" },
      { id: "d", text: "current yield > coupon rate > YTM", feedback: "For a premium, the coupon is highest and YTM lowest." },
    ],
    correctId: "b",
    explanation:
      "A premium bond loses value pulling down to par, so `coupon rate > current yield > YTM`. (A discount reverses it; a par bond makes them equal.)",
  },
  {
    id: "yield-to-maturity.q4",
    lessonSlug: "yield-to-maturity",
    type: "single",
    difficulty: "medium",
    tags: ["bonds", "par", "scenario"],
    prompt:
      "You buy a bond exactly at par and hold it to maturity, with no default. Your YTM will equal…",
    choices: [
      { id: "a", text: "The coupon rate" },
      { id: "b", text: "Zero" },
      { id: "c", text: "Twice the coupon rate" },
      { id: "d", text: "The current yield minus the coupon", feedback: "At par all three measures are equal, so this difference is zero." },
    ],
    correctId: "a",
    explanation:
      "At par there's no pull-to-par gain or loss, so `coupon rate = current yield = YTM`. YTM equals the **coupon rate**.",
  },
  {
    id: "yield-to-maturity.q5",
    lessonSlug: "yield-to-maturity",
    type: "single",
    difficulty: "medium",
    tags: ["bonds", "pull-to-par"],
    prompt: "Why does a discount bond have a YTM *higher* than its current yield?",
    choices: [
      { id: "a", text: "Its coupon rate rises over time" },
      { id: "b", text: "Its price is pulled up toward par by maturity, adding a capital gain" },
      { id: "c", text: "Its price falls further below par over time" },
      { id: "d", text: "Current yield always exceeds YTM" },
    ],
    correctId: "b",
    explanation:
      "A discount bond's price drifts **up** to par at maturity — a capital gain. YTM adds that gain on top of the income, so YTM > current yield.",
  },
  {
    id: "yield-to-maturity.q6",
    lessonSlug: "yield-to-maturity",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["bonds", "ytm", "math"],
    unit: "%",
    prompt:
      "Approximate the YTM of a `$1,000` par, `4%` annual-coupon bond with `2` years left, priced at `$980`. Use `[C + (F − P)/n] ÷ [(F + P)/2]`.",
    choices: [
      { id: "a", text: "4.00%" },
      { id: "b", text: "5.05%" },
      { id: "c", text: "4.08%", feedback: "Don't forget the (F − P)/n capital-gain term in the numerator." },
      { id: "d", text: "6.10%" },
    ],
    correctId: "b",
    explanation:
      "`C = $40`; `(F − P)/n = 20/2 = $10`; numerator `= 50`; denominator `= (1,000 + 980)/2 = $990`. `YTM ≈ 50 ÷ 990 ≈ 5.05%`.",
  },
  {
    id: "yield-to-maturity.q7",
    lessonSlug: "yield-to-maturity",
    type: "single",
    difficulty: "hard",
    tags: ["bonds", "assumptions"],
    prompt: "Which assumption is baked into a YTM figure?",
    choices: [
      { id: "a", text: "Coupons are spent immediately and never reinvested" },
      { id: "b", text: "Coupons are reinvested at the YTM rate and the bond is held to maturity" },
      { id: "c", text: "The bond is sold one year after purchase" },
      { id: "d", text: "The issuer will be downgraded", feedback: "YTM assumes no default, not a downgrade." },
    ],
    correctId: "b",
    explanation:
      "YTM assumes coupons are **reinvested at the YTM rate** (reinvestment risk) and the bond is **held to maturity** with no default or call.",
  },
  {
    id: "yield-to-maturity.q8",
    lessonSlug: "yield-to-maturity",
    type: "single",
    difficulty: "medium",
    tags: ["bonds", "misconception"],
    prompt: "\"Current yield and YTM are the same number.\" What's the best correction?",
    choices: [
      { id: "a", text: "True — they always match" },
      { id: "b", text: "Current yield is income only; YTM adds the price-to-par gain/loss, so they match only at par" },
      { id: "c", text: "YTM is always lower than current yield" },
      { id: "d", text: "They differ only for Treasuries" },
    ],
    correctId: "b",
    explanation:
      "Current yield measures **income only**. YTM adds the capital gain/loss as price pulls to par. They're equal **only for a par bond**.",
  },
  {
    id: "yield-to-maturity.q9",
    lessonSlug: "yield-to-maturity",
    type: "single",
    difficulty: "hard",
    tags: ["bonds", "callable", "ytc"],
    prompt: "For a **callable** bond that could be redeemed early, investors also look at…",
    choices: [
      { id: "a", text: "Yield to call (YTC)" },
      { id: "b", text: "The dividend yield" },
      { id: "c", text: "The earnings yield" },
      { id: "d", text: "The coupon rate alone" },
    ],
    correctId: "a",
    explanation:
      "Because a call shortens the bond's life, investors compute **yield to call (YTC)** — the yield assuming redemption at the call date.",
  },
];
