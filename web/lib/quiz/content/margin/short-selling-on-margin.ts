import type { Question } from "@/lib/quiz/types";

// Quiz for the "Short Selling on Margin" lesson.
export const questions: Question[] = [
  {
    id: "short-selling-on-margin.q1",
    lessonSlug: "short-selling-on-margin",
    type: "single",
    difficulty: "easy",
    tags: ["margin", "short"],
    prompt: "A short seller profits when the stock…",
    choices: [
      { id: "a", text: "Falls in price" },
      { id: "b", text: "Rises in price", feedback: "That's a loss for a short — you'd have to buy back higher than you sold." },
      { id: "c", text: "Pays a dividend" },
      { id: "d", text: "Stays exactly flat forever" },
    ],
    correctId: "a",
    explanation:
      "You borrow and sell now, then cover (buy back) later. You profit if you can buy back at a *lower* price than you sold.",
  },
  {
    id: "short-selling-on-margin.q2",
    lessonSlug: "short-selling-on-margin",
    type: "single",
    difficulty: "easy",
    tags: ["margin", "short", "reg-sho"],
    prompt: "Before you short, Reg SHO requires the broker to arrange a…",
    choices: [
      { id: "a", text: "Dividend waiver" },
      { id: "b", text: "Locate — confirmation the shares can be borrowed" },
      { id: "c", text: "Tax filing" },
      { id: "d", text: "Cash deposit equal to 100% of proceeds only" },
    ],
    correctId: "b",
    explanation:
      "Reg SHO requires a **locate** — confirming the shares are available to borrow — before a short can be placed.",
  },
  {
    id: "short-selling-on-margin.q3",
    lessonSlug: "short-selling-on-margin",
    type: "single",
    difficulty: "medium",
    tags: ["margin", "short", "reg-t"],
    prompt: "Reg T initial margin for a short position is what % of the short's market value?",
    choices: [
      { id: "a", text: "30%" },
      { id: "b", text: "50%" },
      { id: "c", text: "100%" },
      { id: "d", text: "150%" },
    ],
    correctId: "d",
    explanation:
      "`150%`: the `100%` sale proceeds are held plus `50%` of your own margin on top.",
  },
  {
    id: "short-selling-on-margin.q4",
    lessonSlug: "short-selling-on-margin",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["margin", "short", "math"],
    unit: "$",
    prompt: "You short 200 shares at `$40`. At `150%` initial margin, what's the total required — and how much is your own margin?",
    choices: [
      { id: "a", text: "$12,000 total, $4,000 your margin" },
      { id: "b", text: "$8,000 total, $8,000 your margin", feedback: "The $8,000 is the proceeds; the 150% adds 50% of that as your margin." },
      { id: "c", text: "$8,000 total, $4,000 your margin" },
      { id: "d", text: "$12,000 total, $8,000 your margin" },
    ],
    correctId: "a",
    explanation:
      "Short value = `200 × $40 = $8,000`. `150% × $8,000 = $12,000` total; your own margin is the extra `50% × $8,000 = $4,000`.",
  },
  {
    id: "short-selling-on-margin.q5",
    lessonSlug: "short-selling-on-margin",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["margin", "short", "loss", "math"],
    unit: "$",
    prompt: "You short 100 shares at `$50`. The stock rises to `$90` and you cover. What's your loss?",
    choices: [
      { id: "a", text: "$1,000" },
      { id: "b", text: "$4,000" },
      { id: "c", text: "$5,000", feedback: "That's the original proceeds — the loss is the difference between what you sold and bought back for." },
      { id: "d", text: "$9,000" },
    ],
    correctId: "b",
    explanation:
      "Sold for `$5,000`, covered for `100 × $90 = $9,000`. Loss = `$9,000 − $5,000 = $4,000`.",
  },
  {
    id: "short-selling-on-margin.q6",
    lessonSlug: "short-selling-on-margin",
    type: "single",
    difficulty: "medium",
    tags: ["margin", "short", "risk"],
    prompt: "Why is a short seller's maximum loss considered *theoretically unlimited*?",
    choices: [
      { id: "a", text: "Borrow fees can grow forever" },
      { id: "b", text: "A stock's price can rise without limit, and you must buy it back to cover" },
      { id: "c", text: "Dividends are always doubled on shorts" },
      { id: "d", text: "The broker charges 100% interest" },
    ],
    correctId: "b",
    explanation:
      "There's no ceiling on how high a price can go, and you must eventually cover. A long's loss caps at `100%`; a short's does not.",
  },
  {
    id: "short-selling-on-margin.q7",
    lessonSlug: "short-selling-on-margin",
    type: "single",
    difficulty: "medium",
    tags: ["margin", "short", "costs"],
    prompt: "Beyond price moves, what extra costs does a short seller face?",
    choices: [
      { id: "a", text: "Borrow fees (high for hard-to-borrow names) and owed dividends paid while short" },
      { id: "b", text: "Nothing — shorting is free" },
      { id: "c", text: "A guaranteed buy-in fee at cover" },
      { id: "d", text: "Double Reg T interest on the proceeds" },
    ],
    correctId: "a",
    explanation:
      "You pay borrow fees — steep for hard-to-borrow stocks — and you owe any dividends paid on the borrowed shares while you're short.",
  },
  {
    id: "short-selling-on-margin.q8",
    lessonSlug: "short-selling-on-margin",
    type: "single",
    difficulty: "hard",
    tags: ["margin", "short", "scenario", "squeeze"],
    prompt:
      "You're short a heavily shorted stock. It squeezes higher, the lender recalls the shares, and the broker buys you in at the high. What just happened?",
    choices: [
      { id: "a", text: "The recall and buy-in forced you to cover at the worst possible price" },
      { id: "b", text: "Nothing — recalls can't happen mid-trade" },
      { id: "c", text: "Your loss was capped at your original margin" },
      { id: "d", text: "The broker must wait for the price to drop first" },
    ],
    correctId: "a",
    explanation:
      "When the lender recalls borrowed shares, the broker can force a **buy-in** — covering at the worst moment. In a squeeze, that's exactly when prices are highest and your loss is deepest.",
  },
];
