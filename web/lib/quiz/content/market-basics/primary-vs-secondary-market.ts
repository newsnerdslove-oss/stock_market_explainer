import type { Question } from "@/lib/quiz/types";

// Quiz for the "Primary vs. Secondary Market" lesson.
export const questions: Question[] = [
  {
    id: "primary-vs-secondary-market.q1",
    lessonSlug: "primary-vs-secondary-market",
    type: "single",
    difficulty: "easy",
    tags: ["primary-market"],
    prompt: "Where does a company actually **raise money** by selling shares?",
    choices: [
      { id: "a", text: "The primary market" },
      { id: "b", text: "The secondary market" },
      { id: "c", text: "The after-hours session" },
      { id: "d", text: "Any trade on the exchange" },
    ],
    correctId: "a",
    explanation:
      "A company raises money on the **primary market**, where it sells **new** shares and keeps the proceeds.",
  },
  {
    id: "primary-vs-secondary-market.q2",
    lessonSlug: "primary-vs-secondary-market",
    type: "single",
    difficulty: "easy",
    tags: ["ipo"],
    prompt: "What is an **IPO**?",
    choices: [
      { id: "a", text: "A company's first sale of shares to the public" },
      { id: "b", text: "An investor selling shares to another investor" },
      { id: "c", text: "A tax on stock trades" },
      { id: "d", text: "The daily matching of buyers and sellers" },
    ],
    correctId: "a",
    explanation:
      "An **IPO** (initial public offering) is a company's **first** sale of shares to the public — a primary-market event.",
  },
  {
    id: "primary-vs-secondary-market.q3",
    lessonSlug: "primary-vs-secondary-market",
    type: "single",
    difficulty: "easy",
    tags: ["secondary-market"],
    prompt: "What happens on the **secondary market**?",
    choices: [
      { id: "a", text: "Companies issue brand-new shares" },
      { id: "b", text: "Investors trade existing shares with each other" },
      { id: "c", text: "The SEC sets share prices" },
      { id: "d", text: "Companies buy back all their shares" },
    ],
    correctId: "b",
    explanation:
      "The **secondary market** is the everyday exchange where investors trade **existing** shares with each other.",
  },
  {
    id: "primary-vs-secondary-market.q4",
    lessonSlug: "primary-vs-secondary-market",
    type: "single",
    difficulty: "medium",
    tags: ["money-flow", "secondary-market"],
    prompt: "You buy Apple shares on the exchange today. Where does your money go?",
    choices: [
      { id: "a", text: "To Apple, the company" },
      { id: "b", text: "To the investor who sold the shares" },
      { id: "c", text: "Split between Apple and the exchange" },
      { id: "d", text: "Into a government fund" },
    ],
    correctId: "b",
    explanation:
      "That's a **secondary-market** trade, so your money goes to the **selling investor**. Apple gets nothing.",
  },
  {
    id: "primary-vs-secondary-market.q5",
    lessonSlug: "primary-vs-secondary-market",
    type: "single",
    difficulty: "medium",
    tags: ["ipo", "lifecycle"],
    prompt: "After a company's IPO, what happens to those shares?",
    choices: [
      { id: "a", text: "They can only be sold back to the company" },
      { id: "b", text: "They stop trading until the next IPO" },
      { id: "c", text: "They trade daily among investors on the secondary market" },
      { id: "d", text: "They are re-issued by the company every morning" },
    ],
    correctId: "c",
    explanation:
      "An IPO is a **one-time** sale for those shares; afterward they **trade daily** among investors on the secondary market.",
  },
  {
    id: "primary-vs-secondary-market.q6",
    lessonSlug: "primary-vs-secondary-market",
    type: "single",
    difficulty: "medium",
    tags: ["follow-on", "issuance"],
    prompt: "An already-public company sells a batch of brand-new shares. This is…",
    choices: [
      { id: "a", text: "A secondary-market trade" },
      { id: "b", text: "A primary-market (follow-on) offering" },
      { id: "c", text: "Impossible once a company is public" },
      { id: "d", text: "The same as a stock split" },
    ],
    correctId: "b",
    explanation:
      "Issuing **new** shares is a **primary** event — a **follow-on** (or secondary) **offering** — even though the company is already public.",
  },
  {
    id: "primary-vs-secondary-market.q7",
    lessonSlug: "primary-vs-secondary-market",
    type: "single",
    difficulty: "hard",
    tags: ["application", "money-flow", "ipo"],
    prompt:
      "Company X IPOs `10,000,000` shares at `$20`. The next day you buy `100` shares at `$25` from another investor. Who receives your `$2,500`?",
    choices: [
      { id: "a", text: "Company X" },
      { id: "b", text: "The investor who sold you the shares" },
      { id: "c", text: "Split between Company X and the seller" },
      { id: "d", text: "The exchange", feedback: "The exchange matches and records trades but doesn't collect your purchase price." },
    ],
    correctId: "b",
    explanation:
      "Your purchase the day after the IPO is a **secondary** trade, so your `$2,500` goes to **the seller**. Company X only received the `$200M` raised at the IPO.",
  },
  {
    id: "primary-vs-secondary-market.q8",
    lessonSlug: "primary-vs-secondary-market",
    type: "single",
    difficulty: "hard",
    tags: ["misconception", "ipo", "application"],
    prompt:
      "On IPO day a stock starts trading publicly and you buy it in the open market. Does your money fund the company?",
    choices: [
      { id: "a", text: "Yes — all IPO-day purchases fund the company" },
      { id: "b", text: "No — only buyers allocated at the offering price funded the company; you bought from another investor" },
      { id: "c", text: "Yes, but only half of it" },
      { id: "d", text: "No — IPOs never raise money for companies", feedback: "IPOs do raise money — but only from the shares sold at the offering price, not from later open-market trades." },
    ],
    correctId: "b",
    explanation:
      "Only investors allocated shares **at the offering price** buy from the company. Once public trading opens, you're buying from **other investors** on the secondary market.",
  },
];
