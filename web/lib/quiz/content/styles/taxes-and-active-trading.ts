import type { Question } from "@/lib/quiz/types";

// Quiz for the "The Tax Cost of Active Trading" lesson.
export const questions: Question[] = [
  {
    id: "taxes-and-active-trading.q1",
    lessonSlug: "taxes-and-active-trading",
    type: "single",
    difficulty: "easy",
    tags: ["styles", "taxes", "holding-period"],
    prompt: "How long must you hold an asset for a gain to qualify as **long-term**?",
    choices: [
      { id: "a", text: "More than one year" },
      { id: "b", text: "More than 30 days" },
      { id: "c", text: "More than six months" },
      { id: "d", text: "More than five years" },
    ],
    correctId: "a",
    explanation:
      "The line is **one year**. Hold *more than one year* and the gain is long-term; hold *one year or less* and it's short-term. Active traders are almost always on the short-term side.",
  },
  {
    id: "taxes-and-active-trading.q2",
    lessonSlug: "taxes-and-active-trading",
    type: "single",
    difficulty: "easy",
    tags: ["styles", "taxes", "short-term"],
    prompt: "How is a **short-term capital gain** taxed?",
    choices: [
      { id: "a", text: "At a flat 0% — short-term gains are tax-free" },
      { id: "b", text: "At the preferential 15% long-term rate" },
      { id: "c", text: "As ordinary income, at your regular wage rate (up to 37%)" },
      { id: "d", text: "Only when you withdraw the cash from your broker" },
    ],
    correctId: "c",
    explanation:
      "Short-term gains get **no discount** — they're taxed as **ordinary income** at the same graduated rates as wages, topping out at 37% federally.",
  },
  {
    id: "taxes-and-active-trading.q3",
    lessonSlug: "taxes-and-active-trading",
    type: "single",
    difficulty: "medium",
    tags: ["styles", "taxes", "long-term", "rates"],
    prompt: "What are the **long-term** capital-gains tax rates?",
    choices: [
      { id: "a", text: "A single flat 25% for everyone" },
      { id: "b", text: "0%, 15%, or 20%, depending on taxable income" },
      { id: "c", text: "The same ordinary rates as wages", feedback: "That describes short-term gains. Long-term gains get a separate, preferential schedule." },
      { id: "d", text: "Always 37%" },
    ],
    correctId: "b",
    explanation:
      "Long-term gains use a **preferential schedule of 0% / 15% / 20%** based on taxable income — which can be less than half the short-term (ordinary) rate.",
  },
  {
    id: "taxes-and-active-trading.q4",
    lessonSlug: "taxes-and-active-trading",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["styles", "taxes", "math"],
    prompt:
      "You have a **$10,000** gain. Short-term it's taxed at **35%**; long-term at **15%**. How much *extra* tax does selling early cost?",
    choices: [
      { id: "a", text: "$1,500" },
      { id: "b", text: "$3,500" },
      { id: "c", text: "$2,000" },
      { id: "d", text: "$5,000", feedback: "That would be a 50% rate. The difference is 35% − 15% = 20% of $10,000." },
    ],
    correctId: "c",
    explanation:
      "Short-term tax = `$10,000 × 35% = $3,500`; long-term = `$10,000 × 15% = $1,500`. Selling early costs an **extra $2,000** — the forfeited long-term discount.",
  },
  {
    id: "taxes-and-active-trading.q5",
    lessonSlug: "taxes-and-active-trading",
    type: "single",
    difficulty: "medium",
    tags: ["styles", "taxes", "wash-sale"],
    prompt: "The **wash-sale rule** disallows a loss deduction if you buy a substantially identical security within…",
    choices: [
      { id: "a", text: "The same calendar quarter" },
      { id: "b", text: "30 days before or after the sale (a 61-day window)" },
      { id: "c", text: "One year before or after the sale" },
      { id: "d", text: "The same trading day only" },
    ],
    correctId: "b",
    explanation:
      "The window is **30 days before or after** the sale — a 61-day span. The disallowed loss isn't lost; it's **added to the basis** of the replacement shares, deferring (not erasing) it.",
  },
  {
    id: "taxes-and-active-trading.q6",
    lessonSlug: "taxes-and-active-trading",
    type: "single",
    difficulty: "hard",
    tags: ["styles", "taxes", "trader-status", "misconception"],
    prompt:
      "A high-turnover trader asks whether the **mark-to-market (475(f)) election** is the easy fix for short-term taxes. Best read?",
    choices: [
      { id: "a", text: "Yes — anyone with a brokerage account can elect it each April" },
      { id: "b", text: "It's a rare carve-out: it requires qualifying trader tax status (substantial, frequent, regular trading), is usually filed by the prior year's deadline, and few qualify" },
      { id: "c", text: "It eliminates all taxes on trading profits" },
      { id: "d", text: "It only matters for buy-and-hold investors" },
    ],
    correctId: "b",
    explanation:
      "Mark-to-market treats gains/losses as ordinary income and waives wash-sale rules, but the **trader tax status** bar is high (trading must be substantial, frequent, regular and business-like), the election generally must be filed by the prior year's return due date, and **very few people qualify**.",
  },
  {
    id: "taxes-and-active-trading.q7",
    lessonSlug: "taxes-and-active-trading",
    type: "single",
    difficulty: "hard",
    tags: ["styles", "taxes", "breakeven", "scenario"],
    prompt:
      "Why does high turnover raise a trader's **breakeven** versus a buy-and-hold investor?",
    choices: [
      { id: "a", text: "Repeated short-term taxation plus recurring spreads, commissions, and slippage all stack up, while buy-and-hold defers tax and pays costs once" },
      { id: "b", text: "Brokers charge a special penalty for holding longer than a year" },
      { id: "c", text: "Long-term investors are required to pay tax every month" },
      { id: "d", text: "Active traders never owe any capital-gains tax" },
    ],
    correctId: "a",
    explanation:
      "Frequent trading pays **costs constantly** and settles with the IRS every year at the **higher short-term rate**, while a buy-and-hold investor pays costs once and **defers** tax for years. That gap raises the gross return a trader needs just to break even.",
  },
];
