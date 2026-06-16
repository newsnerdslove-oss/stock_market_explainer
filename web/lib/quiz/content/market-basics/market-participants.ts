import type { Question } from "@/lib/quiz/types";

// Quiz for the "Who's in the Market" lesson.
export const questions: Question[] = [
  {
    id: "market-participants.q1",
    lessonSlug: "market-participants",
    type: "single",
    difficulty: "easy",
    tags: ["retail"],
    prompt: "What is a **retail investor**?",
    choices: [
      { id: "a", text: "A fund managing money for thousands of people" },
      { id: "b", text: "An individual trading their own money" },
      { id: "c", text: "A firm that quotes buy and sell prices" },
      { id: "d", text: "A government market regulator" },
    ],
    correctId: "b",
    explanation:
      "A **retail investor** is an individual trading their **own money**, usually in small amounts.",
  },
  {
    id: "market-participants.q2",
    lessonSlug: "market-participants",
    type: "single",
    difficulty: "easy",
    tags: ["market-maker", "liquidity"],
    prompt: "What is a **market maker's** main job?",
    choices: [
      { id: "a", text: "To set the official closing price" },
      { id: "b", text: "To regulate other traders" },
      { id: "c", text: "To quote both buy and sell prices, providing liquidity" },
      { id: "d", text: "To lend money to companies" },
    ],
    correctId: "c",
    explanation:
      "A **market maker** continuously quotes both a buy and a sell price, providing **liquidity** so there's always someone on the other side.",
  },
  {
    id: "market-participants.q3",
    lessonSlug: "market-participants",
    type: "single",
    difficulty: "easy",
    tags: ["broker"],
    prompt: "What does a **broker** do for you?",
    choices: [
      { id: "a", text: "Guarantees your trades will be profitable" },
      { id: "b", text: "Routes your orders to the market" },
      { id: "c", text: "Sets the price of the stocks you buy" },
      { id: "d", text: "Issues new shares on the company's behalf" },
    ],
    correctId: "b",
    explanation:
      "A **broker** routes your orders to a venue (an exchange or market maker), since individuals can't trade directly on an exchange.",
  },
  {
    id: "market-participants.q4",
    lessonSlug: "market-participants",
    type: "single",
    difficulty: "medium",
    tags: ["institutions", "volume"],
    prompt: "Which group accounts for the **most** trading volume?",
    choices: [
      { id: "a", text: "Retail investors" },
      { id: "b", text: "Institutional investors" },
      { id: "c", text: "Company executives" },
      { id: "d", text: "Regulators" },
    ],
    correctId: "b",
    explanation:
      "**Institutional investors** — funds, pensions, and hedge funds — dominate trading volume, far above retail.",
  },
  {
    id: "market-participants.q5",
    lessonSlug: "market-participants",
    type: "single",
    difficulty: "medium",
    tags: ["institutional"],
    prompt: "Which of these is an **institutional** investor?",
    choices: [
      { id: "a", text: "A pension fund" },
      { id: "b", text: "A college student buying 3 shares" },
      { id: "c", text: "A hobbyist day trader" },
      { id: "d", text: "An individual with a retirement account at a broker" },
    ],
    correctId: "a",
    explanation:
      "A **pension fund** is institutional — it trades huge sums on behalf of many people. The others are all retail individuals.",
  },
  {
    id: "market-participants.q6",
    lessonSlug: "market-participants",
    type: "single",
    difficulty: "medium",
    tags: ["regulators"],
    prompt: "Who regulates U.S. markets and brokers?",
    choices: [
      { id: "a", text: "The NYSE and Nasdaq" },
      { id: "b", text: "The SEC and FINRA" },
      { id: "c", text: "Individual market makers" },
      { id: "d", text: "The companies that issue stock" },
    ],
    correctId: "b",
    explanation:
      "The **SEC** oversees the markets and **FINRA** oversees brokers, setting and enforcing the rules.",
  },
  {
    id: "market-participants.q7",
    lessonSlug: "market-participants",
    type: "single",
    difficulty: "hard",
    tags: ["impact", "application", "institutions"],
    prompt:
      "You buy `10` shares while a pension fund buys `500,000` of the same stock. Whose order moves the price more, and why?",
    choices: [
      { id: "a", text: "Yours, because retail trades are prioritized" },
      { id: "b", text: "Neither — all orders move price equally" },
      { id: "c", text: "The pension fund's, because its size is far larger" },
      { id: "d", text: "Yours, because it executes first" },
    ],
    correctId: "c",
    explanation:
      "Price impact scales with **size**. The pension fund's `500,000`-share order can noticeably push the price, while your `10` shares barely register.",
  },
  {
    id: "market-participants.q8",
    lessonSlug: "market-participants",
    type: "single",
    difficulty: "hard",
    tags: ["misconception", "application", "institutions"],
    prompt:
      "A stock jumps `4%` with no news. Based on who moves markets, what's the most likely cause?",
    choices: [
      { id: "a", text: "A large institution buying or selling" },
      { id: "b", text: "A handful of retail investors", feedback: "Retail trades are usually too small to move a price 4% on their own." },
      { id: "c", text: "The exchange resetting the price" },
      { id: "d", text: "A regulator adjusting the stock" },
    ],
    correctId: "a",
    explanation:
      "Since **institutions dominate volume**, a sudden move with no obvious news is most likely a large institution trading — not a wave of retail.",
  },
];
