import type { Question } from "@/lib/quiz/types";

// Quiz for the "Sectors & indices" lesson.
export const questions: Question[] = [
  {
    id: "sectors-and-indices.q1",
    lessonSlug: "sectors-and-indices",
    type: "single",
    difficulty: "easy",
    tags: ["sectors", "indices"],
    prompt: "Roughly how many companies are in the S&P 500?",
    choices: [
      { id: "a", text: "About 30" },
      { id: "b", text: "About 500" },
      { id: "c", text: "About 3,000" },
      { id: "d", text: "About 100" },
    ],
    correctId: "b",
    explanation:
      "The **S&P 500** holds about **500** large US companies (~503 stocks, because a few have dual share classes). It's the main US benchmark.",
  },
  {
    id: "sectors-and-indices.q2",
    lessonSlug: "sectors-and-indices",
    type: "single",
    difficulty: "easy",
    tags: ["sectors"],
    prompt: "What is a market **sector**?",
    choices: [
      { id: "a", text: "A group of companies in the same line of business" },
      { id: "b", text: "A single company's stock", feedback: "A sector is a group of companies, not one stock." },
      { id: "c", text: "A type of bond" },
      { id: "d", text: "The total value of one company" },
    ],
    correctId: "a",
    explanation:
      "A **sector** groups companies that do similar work — technology, energy, healthcare, and so on. The GICS framework defines 11 of them.",
  },
  {
    id: "sectors-and-indices.q3",
    lessonSlug: "sectors-and-indices",
    type: "single",
    difficulty: "easy",
    tags: ["sectors", "gics"],
    prompt: "How many sectors does the GICS framework define?",
    choices: [
      { id: "a", text: "11" },
      { id: "b", text: "30" },
      { id: "c", text: "500" },
      { id: "d", text: "3" },
    ],
    correctId: "a",
    explanation:
      "**GICS defines 11 sectors** — the standard way analysts and index providers group companies by business.",
  },
  {
    id: "sectors-and-indices.q4",
    lessonSlug: "sectors-and-indices",
    type: "single",
    difficulty: "medium",
    tags: ["indices", "dow"],
    prompt: "Which index tracks just **30** companies and is **price-weighted**?",
    choices: [
      { id: "a", text: "The S&P 500", feedback: "The S&P 500 holds ~500 companies and is market-cap weighted, not price-weighted." },
      { id: "b", text: "The Dow Jones Industrial Average" },
      { id: "c", text: "The Nasdaq Composite" },
      { id: "d", text: "The Nasdaq-100" },
    ],
    correctId: "b",
    explanation:
      "The **Dow Jones Industrial Average** holds only 30 large companies and is **price-weighted**, so high-priced stocks sway it more — famous, but narrow.",
  },
  {
    id: "sectors-and-indices.q5",
    lessonSlug: "sectors-and-indices",
    type: "single",
    difficulty: "medium",
    tags: ["indices", "investing"],
    prompt: "How can a beginner actually invest in an index like the S&P 500?",
    choices: [
      { id: "a", text: "By buying an index fund or ETF that holds the index's stocks" },
      { id: "b", text: "By buying the index directly from the exchange", feedback: "You can't buy an index itself — you buy a fund that tracks it." },
      { id: "c", text: "By purchasing one share of each of the 500 companies separately, which is the only way" },
      { id: "d", text: "Indices can't be invested in at all" },
    ],
    correctId: "a",
    explanation:
      "An index can't be bought directly, but an **index fund or ETF** holds its stocks — letting you buy the whole basket cheaply in a single trade.",
  },
  {
    id: "sectors-and-indices.q6",
    lessonSlug: "sectors-and-indices",
    type: "single",
    difficulty: "medium",
    tags: ["indices", "nasdaq"],
    prompt: "Which best describes the **Nasdaq Composite**?",
    choices: [
      { id: "a", text: "Thousands of Nasdaq-listed stocks, heavily tech-weighted" },
      { id: "b", text: "Exactly the 100 largest non-financial Nasdaq companies", feedback: "That's the Nasdaq-100 — a different index. The Composite holds thousands of stocks." },
      { id: "c", text: "The 30 biggest industrial companies" },
      { id: "d", text: "About 500 large US companies" },
    ],
    correctId: "a",
    explanation:
      "The **Nasdaq Composite** spans **thousands** of Nasdaq-listed stocks and is **tech-heavy**. Don't confuse it with the Nasdaq-100, which is only the 100 largest.",
  },
  {
    id: "sectors-and-indices.q7",
    lessonSlug: "sectors-and-indices",
    type: "single",
    difficulty: "medium",
    tags: ["indices", "sp500", "weighting"],
    prompt: "How is the S&P 500 weighted?",
    choices: [
      { id: "a", text: "By market cap — the biggest companies count the most" },
      { id: "b", text: "By share price — the priciest stocks count the most", feedback: "That's how the price-weighted Dow works, not the S&P 500." },
      { id: "c", text: "Equally — every company has identical weight" },
      { id: "d", text: "By number of employees" },
    ],
    correctId: "a",
    explanation:
      "The S&P 500 is **market-cap weighted**, so a company's pull on the index scales with its size — the largest names dominate.",
  },
  {
    id: "sectors-and-indices.q8",
    lessonSlug: "sectors-and-indices",
    type: "single",
    difficulty: "hard",
    tags: ["indices", "dow", "misconception"],
    prompt: "Someone claims \"the Dow represents the whole US market.\" Why is that misleading?",
    choices: [
      { id: "a", text: "It's only 30 companies and is price-weighted; the S&P 500 is far broader and more representative" },
      { id: "b", text: "The Dow actually holds thousands of stocks", feedback: "The Dow holds just 30 — that's exactly why it's narrow." },
      { id: "c", text: "The Dow only includes technology companies" },
      { id: "d", text: "The Dow is market-cap weighted like the S&P 500" },
    ],
    correctId: "a",
    explanation:
      "The Dow is just **30** companies and is **price-weighted**, overweighting high-priced stocks. The **S&P 500** is far broader and more representative of the US market.",
  },
  {
    id: "sectors-and-indices.q9",
    lessonSlug: "sectors-and-indices",
    type: "single",
    difficulty: "hard",
    tags: ["sectors", "indices", "application", "scenario"],
    prompt:
      "Oil prices crash: energy stocks fall **−4%** while tech rises **+2%**. On that day you'd most expect…",
    choices: [
      { id: "a", text: "A tech-heavy Nasdaq Composite fund up, an energy-sector fund down, and the S&P 500 in between" },
      { id: "b", text: "All three indices to move by exactly the same amount" },
      { id: "c", text: "The energy fund to rise and the tech fund to fall" },
      { id: "d", text: "The S&P 500 to swing more than either the energy or tech fund", feedback: "A broad, diversified index typically swings *less* than a single concentrated sector, not more." },
    ],
    correctId: "a",
    explanation:
      "The tech-heavy Nasdaq Composite rises, the energy-sector fund falls, and the broad **S&P 500** lands in between — its sector mix cushions the swings.",
  },
  {
    id: "sectors-and-indices.q10",
    lessonSlug: "sectors-and-indices",
    type: "single",
    difficulty: "hard",
    tags: ["indices", "application", "scenario"],
    prompt:
      "A beginner wants one simple, cheap way to track the **broad US large-cap market**. Which is the best fit?",
    choices: [
      { id: "a", text: "An S&P 500 index fund" },
      { id: "b", text: "A Dow Jones fund, since 30 companies cover everything", feedback: "Just 30 price-weighted names isn't a broad gauge of the market." },
      { id: "c", text: "A single energy-sector ETF" },
      { id: "d", text: "One share of the highest-priced stock they can find" },
    ],
    correctId: "a",
    explanation:
      "An **S&P 500 index fund** gives the broadest, most representative, low-cost exposure to US large caps in a single diversified trade — the standard beginner choice.",
  },
];
