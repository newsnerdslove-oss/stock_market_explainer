import type { Question } from "@/lib/quiz/types";

// Quiz for the "Cost Basis" lesson.
export const questions: Question[] = [
  {
    id: "cost-basis.q1",
    lessonSlug: "cost-basis",
    type: "single",
    difficulty: "easy",
    tags: ["cost-basis", "definition"],
    prompt: "What does your **cost basis** represent?",
    choices: [
      { id: "a", text: "The total you paid to acquire a position, including fees" },
      { id: "b", text: "The current market value of your shares", feedback: "That's market value — basis is what you *paid*, not what it's worth now." },
      { id: "c", text: "The price you eventually sell for" },
      { id: "d", text: "The dividend a stock pays each year" },
    ],
    correctId: "a",
    explanation:
      "**Cost basis = total paid to acquire the position, including fees.** It's the baseline gain and loss are measured from.",
  },
  {
    id: "cost-basis.q2",
    lessonSlug: "cost-basis",
    type: "single",
    difficulty: "easy",
    tags: ["cost-basis", "tax"],
    prompt: "When you sell at a profit, what amount are you actually taxed on?",
    choices: [
      { id: "a", text: "The full amount the sale brings in" },
      { id: "b", text: "The capital gain — proceeds minus cost basis" },
      { id: "c", text: "Your original cost basis" },
      { id: "d", text: "Half of the proceeds, always" },
    ],
    correctId: "b",
    explanation:
      "You're taxed on the **gain**, not the whole sale: `capital gain = proceeds − cost basis`. The money you originally invested isn't taxed again.",
  },
  {
    id: "cost-basis.q3",
    lessonSlug: "cost-basis",
    type: "numericChoice",
    difficulty: "easy",
    unit: "$",
    tags: ["cost-basis", "average-cost", "math"],
    prompt: "You buy **10 shares @ $20**, then **10 shares @ $30**. What's your average cost per share?",
    choices: [
      { id: "a", text: "$20" },
      { id: "b", text: "$50", feedback: "That adds the two prices — you need to blend them across all the shares." },
      { id: "c", text: "$25" },
      { id: "d", text: "$30" },
    ],
    correctId: "c",
    explanation:
      "`total invested = (10 × $20) + (10 × $30) = $200 + $300 = $500` over **20 shares** → `$500 ÷ 20 = $25` average cost.",
  },
  {
    id: "cost-basis.q4",
    lessonSlug: "cost-basis",
    type: "numericChoice",
    difficulty: "medium",
    unit: "$",
    tags: ["cost-basis", "capital-gain", "math"],
    prompt:
      "You buy **10 @ $50** and **20 @ $65** (total invested `$1,800`), then sell all **30 @ $75** for `$2,250`. What's your capital gain?",
    choices: [
      { id: "a", text: "$2,250", feedback: "That's the full proceeds — the gain is only the part above your basis." },
      { id: "b", text: "$450" },
      { id: "c", text: "$750" },
      { id: "d", text: "$1,800" },
    ],
    correctId: "b",
    explanation:
      "`gain = proceeds − basis = $2,250 − $1,800 = $450`. Average cost was `$1,800 ÷ 30 = $60`, and you're taxed only on the $450 above it.",
  },
  {
    id: "cost-basis.q5",
    lessonSlug: "cost-basis",
    type: "numericChoice",
    difficulty: "medium",
    unit: "$",
    tags: ["cost-basis", "fees", "math"],
    prompt: "You buy **100 shares @ $30** and pay a **$10** commission. What's your total cost basis?",
    choices: [
      { id: "a", text: "$3,000", feedback: "Don't forget the fee — commissions are part of your cost basis." },
      { id: "b", text: "$2,990" },
      { id: "c", text: "$3,010" },
      { id: "d", text: "$3,100" },
    ],
    correctId: "c",
    explanation:
      "Cost basis includes fees: `(100 × $30) + $10 = $3,000 + $10 = $3,010`.",
  },
  {
    id: "cost-basis.q6",
    lessonSlug: "cost-basis",
    type: "single",
    difficulty: "medium",
    tags: ["cost-basis", "vocabulary"],
    prompt: "Buying a position in several separate purchases at different times and prices means buying in…",
    choices: [
      { id: "a", text: "Tranches" },
      { id: "b", text: "Dividends" },
      { id: "c", text: "Spreads" },
      { id: "d", text: "Margins" },
    ],
    correctId: "a",
    explanation:
      "Each separate slice of the position is a **tranche**. Blend them with `average cost = total invested ÷ total shares`.",
  },
  {
    id: "cost-basis.q7",
    lessonSlug: "cost-basis",
    type: "single",
    difficulty: "medium",
    tags: ["cost-basis", "tax", "1099"],
    prompt: "Which U.S. tax form reports your proceeds and cost basis from selling securities?",
    choices: [
      { id: "a", text: "Form W-2" },
      { id: "b", text: "Form 1099-B" },
      { id: "c", text: "Form 1040-EZ" },
      { id: "d", text: "Form 1099-DIV" },
    ],
    correctId: "b",
    explanation:
      "Brokers report sales on **Form 1099-B**, which lists your proceeds and cost basis. (Educational only — not tax advice.)",
  },
  {
    id: "cost-basis.q8",
    lessonSlug: "cost-basis",
    type: "single",
    difficulty: "hard",
    tags: ["cost-basis", "misconception", "application"],
    prompt:
      "A friend sells $5,000 of stock that cost them $4,000 and panics that they'll owe tax on the whole $5,000. What's the correct read?",
    choices: [
      { id: "a", text: "They owe tax on the full $5,000 of proceeds" },
      { id: "b", text: "They owe tax on the $1,000 gain — proceeds minus basis", },
      { id: "c", text: "They owe tax on the $4,000 they originally invested" },
      { id: "d", text: "They owe nothing because they already paid for the shares", feedback: "A realized gain is taxable — but only the gain, not the whole sale." },
    ],
    correctId: "b",
    explanation:
      "Only the **gain** is taxed: `$5,000 − $4,000 = $1,000`. The original $4,000 of invested capital isn't taxed again. (Educational only — not tax advice.)",
  },
  {
    id: "cost-basis.q9",
    lessonSlug: "cost-basis",
    type: "single",
    difficulty: "hard",
    tags: ["cost-basis", "holding-period", "tax"],
    prompt: "How long you hold a stock before selling matters mainly because it can affect…",
    choices: [
      { id: "a", text: "Whether the gain is taxed at short-term or long-term rates" },
      { id: "b", text: "Your cost basis per share" },
      { id: "c", text: "The number of shares you own" },
      { id: "d", text: "The commission your broker charges" },
    ],
    correctId: "a",
    explanation:
      "Holding period decides whether a gain is **short- or long-term**, which can change the tax rate — it doesn't change your basis or share count. (Educational only — not tax advice.)",
  },
];
