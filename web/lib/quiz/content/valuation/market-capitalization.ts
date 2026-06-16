import type { Question } from "@/lib/quiz/types";

// Quiz for the "Market capitalization" lesson.
export const questions: Question[] = [
  {
    id: "market-capitalization.q1",
    lessonSlug: "market-capitalization",
    type: "single",
    difficulty: "easy",
    tags: ["valuation", "marketcap"],
    prompt: "Market capitalization is calculated as…",
    choices: [
      { id: "a", text: "Share price ÷ shares outstanding" },
      { id: "b", text: "Share price × shares outstanding" },
      { id: "c", text: "Net income × shares outstanding", feedback: "That mixes up profit with value — market cap is built from price and share count." },
      { id: "d", text: "Share price × P/E ratio" },
    ],
    correctId: "b",
    explanation:
      "**Market cap = share price × shares outstanding** — the total market value of the company's equity, and the standard measure of its size.",
  },
  {
    id: "market-capitalization.q2",
    lessonSlug: "market-capitalization",
    type: "numericChoice",
    difficulty: "easy",
    unit: "$",
    tags: ["valuation", "marketcap", "math"],
    prompt: "A stock trades at `$30` and has `500M` shares outstanding. What's its market cap?",
    choices: [
      { id: "a", text: "$1.5B", feedback: "Check the zeros: 30 × 500 million is 15 billion, not 1.5." },
      { id: "b", text: "$15B" },
      { id: "c", text: "$150B" },
      { id: "d", text: "$530M" },
    ],
    correctId: "b",
    explanation:
      "`market cap = 30 × 500M = $15B`. That puts it comfortably in large-cap territory.",
  },
  {
    id: "market-capitalization.q3",
    lessonSlug: "market-capitalization",
    type: "numericChoice",
    difficulty: "medium",
    unit: "$",
    tags: ["valuation", "marketcap", "math"],
    prompt: "Company X trades at `$50` with `2B` shares outstanding. What is its market cap?",
    choices: [
      { id: "a", text: "$25B", feedback: "That divides price by shares — market cap multiplies them." },
      { id: "b", text: "$52B" },
      { id: "c", text: "$100B" },
      { id: "d", text: "$1B" },
    ],
    correctId: "c",
    explanation:
      "`50 × 2B = $100B` — a large-cap company, even though its $50 price is unremarkable.",
  },
  {
    id: "market-capitalization.q4",
    lessonSlug: "market-capitalization",
    type: "single",
    difficulty: "easy",
    tags: ["valuation", "marketcap", "buckets"],
    prompt: "A company with a market cap of roughly **$6B** falls into which bucket (by common convention)?",
    choices: [
      { id: "a", text: "Large cap" },
      { id: "b", text: "Mid cap" },
      { id: "c", text: "Small cap", feedback: "Small cap is roughly $300M–$2B; $6B is above that range." },
      { id: "d", text: "Micro cap" },
    ],
    correctId: "b",
    explanation:
      "By convention **mid cap** runs about $2B–$10B, so $6B lands squarely in the middle. (Large ≈ $10B+, small ≈ $300M–$2B — rough industry lines, not official.)",
  },
  {
    id: "market-capitalization.q5",
    lessonSlug: "market-capitalization",
    type: "single",
    difficulty: "medium",
    tags: ["valuation", "marketcap", "misconception"],
    prompt: "Why doesn't a higher share price tell you a company is bigger?",
    choices: [
      { id: "a", text: "Because size depends on price AND the number of shares — you must multiply the two" },
      { id: "b", text: "Because share prices are always identical across companies" },
      { id: "c", text: "Because bigger companies always have lower share prices" },
      { id: "d", text: "Because share price measures profit, not size", feedback: "Share price doesn't measure profit either — size comes from price × share count." },
    ],
    correctId: "a",
    explanation:
      "A company can have a high price with few shares or a low price with billions of shares. Only `price × shares outstanding` reveals the true size.",
  },
  {
    id: "market-capitalization.q6",
    lessonSlug: "market-capitalization",
    type: "single",
    difficulty: "medium",
    tags: ["valuation", "marketcap", "risk"],
    prompt: "Compared with small-cap companies, large-cap companies tend to be…",
    choices: [
      { id: "a", text: "More established and generally less volatile" },
      { id: "b", text: "Faster-growing with much higher risk" },
      { id: "c", text: "Always cheaper on a P/E basis" },
      { id: "d", text: "Guaranteed to outperform" },
    ],
    correctId: "a",
    explanation:
      "**Larger** generally means more established and steadier; **smaller** generally means faster potential growth alongside bigger swings and more risk.",
  },
  {
    id: "market-capitalization.q7",
    lessonSlug: "market-capitalization",
    type: "single",
    difficulty: "medium",
    tags: ["valuation", "marketcap", "indices"],
    prompt: "How does an index like the S&P 500 use market cap?",
    choices: [
      { id: "a", text: "It weights its members by market cap, so the biggest companies count the most" },
      { id: "b", text: "It weights every company equally regardless of size", feedback: "That describes an equal-weight index; the standard S&P 500 is market-cap weighted." },
      { id: "c", text: "It weights companies by share price" },
      { id: "d", text: "It ignores market cap entirely" },
    ],
    correctId: "a",
    explanation:
      "The S&P 500 is **market-cap weighted** — a company's influence on the index scales with its size, so the largest names move it most.",
  },
  {
    id: "market-capitalization.q8",
    lessonSlug: "market-capitalization",
    type: "single",
    difficulty: "hard",
    tags: ["valuation", "marketcap", "limits"],
    prompt: "Why might the cost to actually *buy out* a company differ from its market cap?",
    choices: [
      { id: "a", text: "A buyout (enterprise value) also accounts for the company's debt and cash" },
      { id: "b", text: "Market cap already includes all debt and cash", feedback: "It doesn't — market cap is the equity value only; debt and cash sit outside it." },
      { id: "c", text: "A buyout is always exactly half the market cap" },
      { id: "d", text: "Market cap and buyout price are always identical" },
    ],
    correctId: "a",
    explanation:
      "Market cap is the value of the **equity** only. The price to take over the whole business — enterprise value — also folds in debt and cash, so it can differ from market cap.",
  },
  {
    id: "market-capitalization.q9",
    lessonSlug: "market-capitalization",
    type: "numericChoice",
    difficulty: "hard",
    unit: "$",
    tags: ["valuation", "marketcap", "math", "application", "scenario"],
    prompt:
      "Company A: price `$800`, `10M` shares. Company B: price `$25`, `4B` shares. Which is the bigger company, and by how much?",
    choices: [
      { id: "a", text: "A is bigger ($8B vs $100B)", feedback: "Recompute: A is 800 × 10M = $8B, B is 25 × 4B = $100B — B is far larger." },
      { id: "b", text: "B is bigger — $100B vs A's $8B" },
      { id: "c", text: "A is bigger because its share price is higher" },
      { id: "d", text: "They're the same size" },
    ],
    correctId: "b",
    explanation:
      "A: `800 × 10M = $8B`. B: `25 × 4B = $100B`. Despite A's far higher *price*, **B** is over ten times bigger — exactly why you multiply price × shares instead of reading the price tag.",
  },
  {
    id: "market-capitalization.q10",
    lessonSlug: "market-capitalization",
    type: "single",
    difficulty: "hard",
    tags: ["valuation", "marketcap", "application", "scenario"],
    prompt:
      "Stock X: `$50` × `2B` shares = `$100B`. Stock Y: `$300` × `20M` shares = `$6B`. What's the right takeaway?",
    choices: [
      { id: "a", text: "Y is bigger because its share price is six times X's" },
      { id: "b", text: "X is far bigger ($100B vs $6B) even though Y's share price is higher" },
      { id: "c", text: "They're roughly the same size" },
      { id: "d", text: "X is small cap and Y is large cap" },
    ],
    correctId: "b",
    explanation:
      "X is a $100B large cap; Y, despite its showier $300 price, is a $6B mid cap. The share price ranking and the size ranking point in **opposite** directions — only market cap settles it.",
  },
];
