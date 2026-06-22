import type { Question } from "@/lib/quiz/types";

// Quiz for the "Realized vs. Unrealized Gain" lesson.
export const questions: Question[] = [
  {
    id: "realized-vs-unrealized-gain.q1",
    lessonSlug: "realized-vs-unrealized-gain",
    type: "single",
    difficulty: "easy",
    tags: ["realized-unrealized", "definition"],
    prompt: "An **unrealized** gain is best described as…",
    choices: [
      { id: "a", text: "The paper profit on a position you still hold" },
      { id: "b", text: "The cash you received after selling", feedback: "That's a *realized* gain — it only exists once you've sold." },
      { id: "c", text: "The dividends a stock has paid you" },
      { id: "d", text: "The commission your broker charged" },
    ],
    correctId: "a",
    explanation:
      "An **unrealized** gain is the paper profit on a position you *still hold*: `current value − cost basis`. You haven't captured it yet.",
  },
  {
    id: "realized-vs-unrealized-gain.q2",
    lessonSlug: "realized-vs-unrealized-gain",
    type: "single",
    difficulty: "easy",
    tags: ["realized-unrealized", "trigger"],
    prompt: "What turns an unrealized gain into a **realized** one?",
    choices: [
      { id: "a", text: "The stock hitting a new all-time high" },
      { id: "b", text: "Selling the position" },
      { id: "c", text: "Holding it for more than a year" },
      { id: "d", text: "The company paying a dividend" },
    ],
    correctId: "b",
    explanation:
      "**Selling** locks in the result: `realized gain = proceeds − cost basis`. Until you sell, the gain stays on paper.",
  },
  {
    id: "realized-vs-unrealized-gain.q3",
    lessonSlug: "realized-vs-unrealized-gain",
    type: "single",
    difficulty: "easy",
    tags: ["realized-unrealized", "tax", "taxable-event"],
    prompt: "You buy a stock and it rises 40% — but you don't sell. Is that gain taxable this year?",
    choices: [
      { id: "a", text: "Yes — the gain is taxed as soon as the price rises", feedback: "Merely holding a stock that went up is not a taxable event — the gain is still unrealized." },
      { id: "b", text: "No — simply holding it is not a taxable event" },
      { id: "c", text: "Yes — but only the first 40%" },
      { id: "d", text: "No — gains are never taxable" },
    ],
    correctId: "b",
    explanation:
      "Capital gain is measured only **when you sell or dispose of** the asset. An unrealized gain from just holding is **not a taxable event**. (Educational only — not tax advice.)",
  },
  {
    id: "realized-vs-unrealized-gain.q4",
    lessonSlug: "realized-vs-unrealized-gain",
    type: "numericChoice",
    difficulty: "medium",
    unit: "$",
    tags: ["realized-unrealized", "math"],
    prompt:
      "You buy **100 shares @ $40** (basis `$4,000`). The stock is at **$55** but you haven't sold. What's your **unrealized** gain?",
    choices: [
      { id: "a", text: "$5,500", feedback: "That's the position's market value — the gain is the part above your basis." },
      { id: "b", text: "$1,500" },
      { id: "c", text: "$4,000" },
      { id: "d", text: "$0 — you haven't sold" },
    ],
    correctId: "b",
    explanation:
      "`unrealized gain = current value − cost basis = $5,500 − $4,000 = $1,500`. Real on screen, but not captured until you sell.",
  },
  {
    id: "realized-vs-unrealized-gain.q5",
    lessonSlug: "realized-vs-unrealized-gain",
    type: "numericChoice",
    difficulty: "medium",
    unit: "$",
    tags: ["realized-unrealized", "math", "evaporate"],
    prompt:
      "Your position peaks at a **$1,500** unrealized gain. You don't sell; it slips to **$42** (worth `$4,200`) on a `$4,000` basis, and you sell there. What's your **realized** gain?",
    choices: [
      { id: "a", text: "$1,500", feedback: "That peak was unrealized — it evaporated because you never sold at it." },
      { id: "b", text: "$200" },
      { id: "c", text: "$4,200" },
      { id: "d", text: "$0" },
    ],
    correctId: "b",
    explanation:
      "You only keep what you realize: `$4,200 − $4,000 = $200`. The $1,500 peak was a paper number that shrank before you sold.",
  },
  {
    id: "realized-vs-unrealized-gain.q6",
    lessonSlug: "realized-vs-unrealized-gain",
    type: "single",
    difficulty: "medium",
    tags: ["realized-unrealized", "mark-to-market", "vocabulary"],
    prompt: "Valuing a position at its current market price to show today's paper gain or loss is called…",
    choices: [
      { id: "a", text: "Mark-to-market" },
      { id: "b", text: "Cost basis" },
      { id: "c", text: "Settlement" },
      { id: "d", text: "Breakeven" },
    ],
    correctId: "a",
    explanation:
      "**Mark-to-market** prices a position at its current value, producing the **unrealized** gain or loss you see on your screen.",
  },
  {
    id: "realized-vs-unrealized-gain.q7",
    lessonSlug: "realized-vs-unrealized-gain",
    type: "single",
    difficulty: "hard",
    tags: ["realized-unrealized", "tax", "loss", "application"],
    prompt:
      "Your stock is down $2,000 on paper and you want to claim the loss on this year's taxes. What must happen first?",
    choices: [
      { id: "a", text: "Nothing — an unrealized loss is already deductible" },
      { id: "b", text: "You must sell to realize the loss before it's deductible" },
      { id: "c", text: "The stock must fall by at least 50%" },
      { id: "d", text: "You must hold it for more than a year" },
    ],
    correctId: "b",
    explanation:
      "Just like gains, a loss is only **realized when you sell or dispose of** the asset. An unrealized loss isn't deductible until you actually sell. (Educational only — not tax advice.)",
  },
];
