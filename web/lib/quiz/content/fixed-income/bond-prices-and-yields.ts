import type { Question } from "@/lib/quiz/types";

// Quiz for the "Bond Prices & Yields" lesson.
export const questions: Question[] = [
  {
    id: "bond-prices-and-yields.q1",
    lessonSlug: "bond-prices-and-yields",
    type: "single",
    difficulty: "easy",
    tags: ["bonds", "price-yield"],
    prompt: "Bond prices and yields generally move…",
    choices: [
      { id: "a", text: "In the same direction" },
      { id: "b", text: "In opposite directions" },
      { id: "c", text: "Independently of each other" },
      { id: "d", text: "Only when the coupon changes", feedback: "The coupon is fixed; it's the price that adjusts." },
    ],
    correctId: "b",
    explanation:
      "Prices and yields move **inversely** — the SEC's seesaw. When rates rise, prices fall, and vice versa.",
  },
  {
    id: "bond-prices-and-yields.q2",
    lessonSlug: "bond-prices-and-yields",
    type: "single",
    difficulty: "easy",
    tags: ["bonds", "rates", "scenario"],
    prompt: "Market interest rates fall sharply. What happens to the price of an existing fixed-coupon bond?",
    choices: [
      { id: "a", text: "It rises" },
      { id: "b", text: "It falls", feedback: "Rates and prices move opposite ways — falling rates lift prices." },
      { id: "c", text: "It stays the same" },
      { id: "d", text: "Its coupon increases instead" },
    ],
    correctId: "a",
    explanation:
      "When rates fall, an existing bond's higher fixed coupon becomes more attractive, so its **price rises** — the inverse relationship.",
  },
  {
    id: "bond-prices-and-yields.q3",
    lessonSlug: "bond-prices-and-yields",
    type: "single",
    difficulty: "easy",
    tags: ["bonds", "premium-discount"],
    prompt: "A bond trading at a **premium** is one whose price is…",
    choices: [
      { id: "a", text: "Below par, because its coupon trails market rates" },
      { id: "b", text: "Above par, because its coupon beats market rates" },
      { id: "c", text: "Exactly at par" },
      { id: "d", text: "Equal to its annual coupon" },
    ],
    correctId: "b",
    explanation:
      "A **premium** bond trades *above* par because its coupon beats current market rates, so buyers pay extra.",
  },
  {
    id: "bond-prices-and-yields.q4",
    lessonSlug: "bond-prices-and-yields",
    type: "numericChoice",
    difficulty: "easy",
    tags: ["bonds", "current-yield", "math"],
    unit: "%",
    prompt: "A bond pays a `$60` annual coupon and trades at `$1,200`. What is its current yield?",
    choices: [
      { id: "a", text: "6.00%" },
      { id: "b", text: "5.00%" },
      { id: "c", text: "7.20%", feedback: "That multiplies instead of dividing — current yield is coupon ÷ price." },
      { id: "d", text: "4.55%" },
    ],
    correctId: "b",
    explanation:
      "Current yield `= annual coupon ÷ price = $60 ÷ $1,200 = 5.00%`. The premium price pulls the yield below a 6% coupon.",
  },
  {
    id: "bond-prices-and-yields.q5",
    lessonSlug: "bond-prices-and-yields",
    type: "single",
    difficulty: "medium",
    tags: ["bonds", "quoted-price"],
    prompt: "A bond is quoted at `98`. What dollar price does that represent on a `$1,000` par bond?",
    choices: [
      { id: "a", text: "$98" },
      { id: "b", text: "$980" },
      { id: "c", text: "$1,098", feedback: "A quote of 98 means 98% of par, not par plus 98." },
      { id: "d", text: "$9,800" },
    ],
    correctId: "b",
    explanation:
      "Quotes are a **percent of par**: `98 = 98% × $1,000 = $980`. That's a discount price.",
  },
  {
    id: "bond-prices-and-yields.q6",
    lessonSlug: "bond-prices-and-yields",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["bonds", "current-yield", "math"],
    unit: "%",
    prompt: "A `$1,000` par bond with a `7%` coupon is quoted at `98`. What is its current yield?",
    choices: [
      { id: "a", text: "7.00%" },
      { id: "b", text: "7.14%" },
      { id: "c", text: "6.86%", feedback: "That divides by par; current yield uses the market price ($980)." },
      { id: "d", text: "7.40%" },
    ],
    correctId: "b",
    explanation:
      "Annual coupon `= $70`; price `= 98% × $1,000 = $980`. Current yield `= $70 ÷ $980 = 7.14%`.",
  },
  {
    id: "bond-prices-and-yields.q7",
    lessonSlug: "bond-prices-and-yields",
    type: "single",
    difficulty: "medium",
    tags: ["bonds", "discount", "scenario"],
    prompt:
      "A bond has a `4%` coupon and trades at `$920`. Which description fits, and where is its current yield?",
    choices: [
      { id: "a", text: "Premium bond; current yield below 4%" },
      { id: "b", text: "Discount bond; current yield above 4% (about 4.35%)" },
      { id: "c", text: "Par bond; current yield exactly 4%" },
      { id: "d", text: "Discount bond; current yield below 4%", feedback: "A discount price raises the yield above the coupon, not below it." },
    ],
    correctId: "b",
    explanation:
      "At `$920` < par, it's a **discount** bond. Current yield `= $40 ÷ $920 = 4.35%` — above the 4% coupon, as expected for a discount.",
  },
  {
    id: "bond-prices-and-yields.q8",
    lessonSlug: "bond-prices-and-yields",
    type: "single",
    difficulty: "hard",
    tags: ["bonds", "misconception"],
    prompt: "\"A bond's yield always equals its coupon rate.\" When is this actually true?",
    choices: [
      { id: "a", text: "Always — yield and coupon are the same thing" },
      { id: "b", text: "Only when the bond trades at par" },
      { id: "c", text: "Only for premium bonds" },
      { id: "d", text: "Never — they are unrelated" },
    ],
    correctId: "b",
    explanation:
      "Yield equals the coupon rate **only at par**. For a discount bond, yield > coupon; for a premium bond, yield < coupon.",
  },
];
