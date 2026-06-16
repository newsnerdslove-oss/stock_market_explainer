import type { Question } from "@/lib/quiz/types";

// Quiz for the "The P/E ratio" lesson.
export const questions: Question[] = [
  {
    id: "pe-ratio.q1",
    lessonSlug: "pe-ratio",
    type: "single",
    difficulty: "easy",
    tags: ["valuation", "pe"],
    prompt: "The P/E ratio is calculated as…",
    choices: [
      { id: "a", text: "Share price ÷ EPS" },
      { id: "b", text: "EPS ÷ share price", feedback: "That's the *earnings yield* — the P/E is the other way up." },
      { id: "c", text: "Share price × annual earnings" },
      { id: "d", text: "Earnings ÷ shares outstanding" },
    ],
    correctId: "a",
    explanation:
      "**P/E = share price ÷ EPS** — roughly the dollars you pay per `$1` of annual earnings. (EPS itself is profit ÷ shares outstanding.)",
  },
  {
    id: "pe-ratio.q2",
    lessonSlug: "pe-ratio",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["valuation", "pe", "math"],
    prompt: "A stock trades at `$40` with EPS of `$2`. What's its P/E?",
    choices: [
      { id: "a", text: "2" },
      { id: "b", text: "20" },
      { id: "c", text: "38" },
      { id: "d", text: "80", feedback: "That multiplies instead of divides — P/E is price ÷ EPS." },
    ],
    correctId: "b",
    explanation:
      "`P/E = price ÷ EPS = 40 ÷ 2 = 20`. Investors are paying $20 for every $1 the company earns per year.",
  },
  {
    id: "pe-ratio.q3",
    lessonSlug: "pe-ratio",
    type: "single",
    difficulty: "medium",
    tags: ["valuation", "pe"],
    prompt: "A **high** P/E generally signals that the market…",
    choices: [
      { id: "a", text: "Expects strong future growth" },
      { id: "b", text: "Thinks the company is unprofitable" },
      { id: "c", text: "Sees the stock as guaranteed low-risk" },
      { id: "d", text: "Considers it a certain bargain" },
    ],
    correctId: "a",
    explanation:
      "A **high** P/E means investors will pay more per dollar of earnings — usually because they **expect growth**. A low P/E says the market expects little, or sees risk.",
  },
  {
    id: "pe-ratio.q4",
    lessonSlug: "pe-ratio",
    type: "single",
    difficulty: "medium",
    tags: ["valuation", "pe", "limits"],
    prompt: "Why can a company have **no** meaningful P/E?",
    choices: [
      { id: "a", text: "Its share price is too high" },
      { id: "b", text: "It has negative or zero earnings, so EPS breaks the ratio" },
      { id: "c", text: "It pays no dividend" },
      { id: "d", text: "It was only recently listed" },
    ],
    correctId: "b",
    explanation:
      "**No earnings, no P/E.** An unprofitable company has negative or undefined EPS, so price ÷ EPS becomes meaningless.",
  },
  {
    id: "pe-ratio.q5",
    lessonSlug: "pe-ratio",
    type: "single",
    difficulty: "hard",
    tags: ["valuation", "pe", "limits"],
    prompt: "A stock has a **low** P/E. Why isn't that automatically a bargain?",
    choices: [
      { id: "a", text: "A low P/E always means a company is about to grow" },
      { id: "b", text: "Low P/E is the same as high EPS" },
      { id: "c", text: "It can signal the market expects earnings to fall" },
      { id: "d", text: "Good companies can never have a low P/E" },
    ],
    correctId: "c",
    explanation:
      "Cheap and *cheap for a reason* look identical on this one number. A low P/E can mean the market expects **earnings to decline** — always read P/E in context (history, peers, sector).",
  },
];
