import type { Question } from "@/lib/quiz/types";

// Quiz for the "What a Stock Market Is" lesson.
export const questions: Question[] = [
  {
    id: "what-is-a-stock-market.q1",
    lessonSlug: "what-is-a-stock-market",
    type: "single",
    difficulty: "easy",
    tags: ["basics", "ownership"],
    prompt: "What does owning one **share** of a company represent?",
    choices: [
      { id: "a", text: "A loan you've made to the company" },
      { id: "b", text: "A small slice of ownership in the company" },
      { id: "c", text: "A promise of a fixed annual payment" },
      { id: "d", text: "A discount on the company's products" },
    ],
    correctId: "b",
    explanation:
      "A **share** is a small unit of **ownership** in a company. Hold one and you own one slice of the whole business.",
  },
  {
    id: "what-is-a-stock-market.q2",
    lessonSlug: "what-is-a-stock-market",
    type: "single",
    difficulty: "easy",
    tags: ["secondary-market", "trading"],
    prompt: "When you buy a stock on an exchange, who are you buying from?",
    choices: [
      { id: "a", text: "The company that issued the stock" },
      { id: "b", text: "The stock exchange itself" },
      { id: "c", text: "Another investor who is selling" },
      { id: "d", text: "A government regulator" },
    ],
    correctId: "c",
    explanation:
      "On the exchange you buy from **another investor** who is selling. The exchange just matches you — it isn't the seller.",
  },
  {
    id: "what-is-a-stock-market.q3",
    lessonSlug: "what-is-a-stock-market",
    type: "single",
    difficulty: "easy",
    tags: ["exchange"],
    prompt: "Which of these is a U.S. stock exchange?",
    choices: [
      { id: "a", text: "Nasdaq" },
      { id: "b", text: "The SEC" },
      { id: "c", text: "The Federal Reserve" },
      { id: "d", text: "FINRA" },
    ],
    correctId: "a",
    explanation:
      "**Nasdaq** (along with the **NYSE**) is a major U.S. exchange. The SEC and FINRA are regulators, not exchanges.",
  },
  {
    id: "what-is-a-stock-market.q4",
    lessonSlug: "what-is-a-stock-market",
    type: "single",
    difficulty: "medium",
    tags: ["exchange", "role"],
    prompt: "What is the core job of a **stock exchange**?",
    choices: [
      { id: "a", text: "To set the official price of each stock" },
      { id: "b", text: "To match buyers with sellers and record the trades" },
      { id: "c", text: "To guarantee investors a profit" },
      { id: "d", text: "To lend companies money" },
    ],
    correctId: "b",
    explanation:
      "An exchange **matches buyers and sellers and records trades**. It does not set prices — supply and demand do.",
  },
  {
    id: "what-is-a-stock-market.q5",
    lessonSlug: "what-is-a-stock-market",
    type: "single",
    difficulty: "medium",
    tags: ["ownership", "fractions"],
    prompt: "A company has issued `1,000,000` shares and you own `2`. What do you own?",
    choices: [
      { id: "a", text: "Two percent of the company" },
      { id: "b", text: "A tiny but real slice of ownership" },
      { id: "c", text: "Nothing — that's too small to count" },
      { id: "d", text: "The right to set company policy" },
    ],
    correctId: "b",
    explanation:
      "Two of a million shares is a **tiny but real** ownership stake — just `0.0002%` of the company.",
  },
  {
    id: "what-is-a-stock-market.q6",
    lessonSlug: "what-is-a-stock-market",
    type: "single",
    difficulty: "medium",
    tags: ["prices", "supply-demand"],
    prompt: "Why does a stock's price move throughout the trading day?",
    choices: [
      { id: "a", text: "The exchange adjusts it on a fixed schedule" },
      { id: "b", text: "The company updates it each hour" },
      { id: "c", text: "Continuous trading shifts it with supply and demand" },
      { id: "d", text: "Regulators reset it after each trade" },
    ],
    correctId: "c",
    explanation:
      "Prices move continuously because trades happen all day — more eager buyers push it up, more eager sellers push it down. **Supply and demand**, not the exchange, sets the price.",
  },
  {
    id: "what-is-a-stock-market.q7",
    lessonSlug: "what-is-a-stock-market",
    type: "single",
    difficulty: "hard",
    tags: ["secondary-market", "application", "money-flow"],
    prompt:
      "Maria buys `1` share of `AAPL` from Tom at `$200` on the Nasdaq. Where does Maria's `$200` go?",
    choices: [
      { id: "a", text: "To Apple, the company" },
      { id: "b", text: "To Tom, the selling investor" },
      { id: "c", text: "Split between Apple and the Nasdaq" },
      { id: "d", text: "To the SEC as a market fee", feedback: "Regulators don't collect your purchase price — that goes to the seller." },
    ],
    correctId: "b",
    explanation:
      "This is a **secondary-market** trade, so the money goes to **Tom**, the seller. Apple isn't part of the transaction at all.",
  },
  {
    id: "what-is-a-stock-market.q8",
    lessonSlug: "what-is-a-stock-market",
    type: "single",
    difficulty: "hard",
    tags: ["misconception", "company-funding", "application"],
    prompt:
      "A friend says, 'Every time I buy a stock, I'm giving that company my money.' What's the correction?",
    choices: [
      { id: "a", text: "Correct — all stock purchases fund the company" },
      { id: "b", text: "Only true on the secondary market" },
      { id: "c", text: "On the exchange your money goes to the selling investor, not the company" },
      { id: "d", text: "The company gets half and the seller gets half", feedback: "There's no split — the seller receives the full amount on a secondary trade." },
    ],
    correctId: "c",
    explanation:
      "On the **secondary market** (the exchange) your money goes to the **selling investor**. A company only raises money when it *first issues* its shares.",
  },
];
