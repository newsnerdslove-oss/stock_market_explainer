import type { Question } from "@/lib/quiz/types";

// Quiz for the "Futures Contracts" lesson.
export const questions: Question[] = [
  {
    id: "futures-contracts.q1",
    lessonSlug: "futures-contracts",
    type: "single",
    difficulty: "easy",
    tags: ["futures", "options", "obligation"],
    prompt: "What is the **fundamental difference** between a future and an option?",
    choices: [
      { id: "a", text: "A future is an *obligation*; an option is a *right*" },
      { id: "b", text: "A future is a *right*; an option is an *obligation*", feedback: "It's the reverse — a future binds both sides; an option lets the buyer walk away." },
      { id: "c", text: "Both are rights the buyer can ignore" },
      { id: "d", text: "Neither trades on an exchange" },
    ],
    correctId: "a",
    explanation:
      "A **future** is an *obligation* — both sides must perform or close before expiry. An **option** is a *right* the buyer may choose not to exercise.",
  },
  {
    id: "futures-contracts.q2",
    lessonSlug: "futures-contracts",
    type: "single",
    difficulty: "easy",
    tags: ["futures", "margin"],
    prompt: "On a futures contract, the **margin** is best described as…",
    choices: [
      { id: "a", text: "A down payment toward owning the asset" },
      { id: "b", text: "A performance bond — good-faith money that you'll honor the contract" },
      { id: "c", text: "The maximum you can ever lose" },
      { id: "d", text: "A fee paid to the seller" },
    ],
    correctId: "b",
    explanation:
      "Futures margin is a **performance bond**, *not* a down payment and *not* a maximum loss. Initial margin opens the position; maintenance margin is the floor.",
  },
  {
    id: "futures-contracts.q3",
    lessonSlug: "futures-contracts",
    type: "single",
    difficulty: "medium",
    tags: ["futures", "mark-to-market"],
    prompt: "What does **mark-to-market** mean for a futures position?",
    choices: [
      { id: "a", text: "Gains and losses settle in cash daily — losers pay winners every day" },
      { id: "b", text: "All gains and losses settle only at expiration" },
      { id: "c", text: "The contract price is fixed and never re-valued" },
      { id: "d", text: "Margin is returned in full each morning" },
    ],
    correctId: "a",
    explanation:
      "Futures are marked-to-market **daily**: each day's gain or loss settles in cash as *variation margin* — losers pay winners every day.",
  },
  {
    id: "futures-contracts.q4",
    lessonSlug: "futures-contracts",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["futures", "mark-to-market", "math"],
    unit: "$",
    prompt:
      "You are long `1` index future where `1 point = $50`, entered at `5,000`. It falls to `4,950`. What is your **mark-to-market loss**?",
    choices: [
      { id: "a", text: "$50" },
      { id: "b", text: "$1,000", feedback: "That's a 20-point move. From 5,000 to 4,950 is 50 points." },
      { id: "c", text: "$2,500" },
      { id: "d", text: "$5,000" },
    ],
    correctId: "c",
    explanation:
      "The drop is `5,000 − 4,950 = 50 points`. Loss = `50 × $50 = $2,500`, settled in cash that day via mark-to-market.",
  },
  {
    id: "futures-contracts.q5",
    lessonSlug: "futures-contracts",
    type: "single",
    difficulty: "medium",
    tags: ["futures", "margin-call", "scenario"],
    prompt:
      "Your account balance drops **below the maintenance margin**. What happens?",
    choices: [
      { id: "a", text: "Nothing — maintenance margin is only a suggestion" },
      { id: "b", text: "You get a margin call: deposit more funds or have the position liquidated" },
      { id: "c", text: "The exchange refunds your initial margin" },
      { id: "d", text: "Your loss is automatically capped at the initial margin" },
    ],
    correctId: "b",
    explanation:
      "Falling below the maintenance margin triggers a **margin call** — you must add funds to restore the balance, or the position is liquidated.",
  },
  {
    id: "futures-contracts.q6",
    lessonSlug: "futures-contracts",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["futures", "risk", "math"],
    unit: "$",
    prompt:
      "Your initial margin was `$12,000`. A gap move produces a `−$15,000` mark-to-market loss. How much do you owe **beyond** the initial margin?",
    choices: [
      { id: "a", text: "$0", feedback: "The loss exceeds your margin — futures losses can run past what you posted." },
      { id: "b", text: "$3,000" },
      { id: "c", text: "$12,000" },
      { id: "d", text: "$15,000" },
    ],
    correctId: "b",
    explanation:
      "A `$15,000` loss against `$12,000` of initial margin leaves `15,000 − 12,000 = $3,000` you still owe. Futures losses can *exceed* the money you posted.",
  },
  {
    id: "futures-contracts.q7",
    lessonSlug: "futures-contracts",
    type: "single",
    difficulty: "hard",
    tags: ["futures", "options", "risk"],
    prompt:
      "Why can a **future** lose you more than your deposit while a **long option** cannot lose more than the premium?",
    choices: [
      { id: "a", text: "Options are marked-to-market daily but futures are not" },
      { id: "b", text: "A future is an obligation settled daily, so a big adverse move can run past your margin; a long option's loss is capped at the premium" },
      { id: "c", text: "Futures have no underlying asset" },
      { id: "d", text: "Option buyers are obligated to perform but futures traders are not" },
    ],
    correctId: "b",
    explanation:
      "A future is an *obligation* marked-to-market daily — a gap or limit move can lose more than you deposited. A long *option* is a right whose maximum loss is the premium. That's the key risk difference.",
  },
  {
    id: "futures-contracts.q8",
    lessonSlug: "futures-contracts",
    type: "single",
    difficulty: "easy",
    tags: ["futures", "definition"],
    prompt: "A futures contract is an agreement to…",
    choices: [
      { id: "a", text: "Buy or sell a standardized quantity at a set price on a set future date" },
      { id: "b", text: "Buy the asset whenever you feel like it, with no deadline" },
      { id: "c", text: "Receive a dividend stream from the underlying" },
      { id: "d", text: "Lend money to the exchange at a fixed rate" },
    ],
    correctId: "a",
    explanation:
      "A **futures contract** is an obligation to buy or sell a *standardized* quantity at a *set price* on a *set date* — exchange-traded, with a clearinghouse guaranteeing both sides.",
  },
  {
    id: "futures-contracts.q9",
    lessonSlug: "futures-contracts",
    type: "single",
    difficulty: "medium",
    tags: ["futures", "expiry", "delivery", "scenario"],
    prompt:
      "Why do most speculators **close** a physically-settled futures contract before expiration?",
    choices: [
      { id: "a", text: "Holding to expiry can trigger actual delivery of the underlying" },
      { id: "b", text: "The exchange bans holding past the first day" },
      { id: "c", text: "Margin is no longer required after entry" },
      { id: "d", text: "Closing early guarantees a profit" },
    ],
    correctId: "a",
    explanation:
      "Holding a *physically-settled* contract to expiry can require actual **delivery** of the underlying — so speculators, who don't want the goods, close out beforehand.",
  },
  {
    id: "futures-contracts.q10",
    lessonSlug: "futures-contracts",
    type: "single",
    difficulty: "hard",
    tags: ["futures", "misconception", "margin"],
    prompt:
      "\"I can't lose more than the margin I put up on a future.\" Why is this wrong?",
    choices: [
      { id: "a", text: "Margin is a good-faith performance bond, not a max loss; daily mark-to-market plus the obligation mean a big adverse move can lose more than the initial margin" },
      { id: "b", text: "It's correct — margin is always the maximum loss" },
      { id: "c", text: "Futures losses are always refunded by the clearinghouse" },
      { id: "d", text: "You can only lose money on options, never on futures" },
    ],
    correctId: "a",
    explanation:
      "Margin is a performance bond, not a cap on losses. Because a future is an obligation marked-to-market daily, a large adverse (e.g. gap) move can cost *more* than your initial margin — you can owe the difference.",
  },
];
