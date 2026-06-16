import type { Question } from "@/lib/quiz/types";

// Quiz for the "What Is a Derivative?" lesson.
export const questions: Question[] = [
  {
    id: "what-is-a-derivative.q1",
    lessonSlug: "what-is-a-derivative",
    type: "single",
    difficulty: "easy",
    tags: ["derivatives", "definition"],
    prompt: "Which statement best defines a **derivative**?",
    choices: [
      { id: "a", text: "A contract whose value comes from an underlying asset" },
      { id: "b", text: "A share of ownership in a company" },
      { id: "c", text: "A loan a company issues to raise cash", feedback: "That describes a bond — a derivative is a contract, not direct ownership or debt." },
      { id: "d", text: "A savings account that pays interest" },
    ],
    correctId: "a",
    explanation:
      "A **derivative** is a contract whose value *derives* from an **underlying** — a stock, index, commodity, currency, or rate. You trade the contract, not the asset itself.",
  },
  {
    id: "what-is-a-derivative.q2",
    lessonSlug: "what-is-a-derivative",
    type: "single",
    difficulty: "easy",
    tags: ["derivatives", "underlying"],
    prompt: "The asset a derivative tracks is called the…",
    choices: [
      { id: "a", text: "Premium" },
      { id: "b", text: "Underlying" },
      { id: "c", text: "Strike" },
      { id: "d", text: "Notional" },
    ],
    correctId: "b",
    explanation:
      "The **underlying** is the thing the contract tracks — a stock, index, commodity, currency, or interest rate.",
  },
  {
    id: "what-is-a-derivative.q3",
    lessonSlug: "what-is-a-derivative",
    type: "single",
    difficulty: "medium",
    tags: ["derivatives", "options", "futures", "scenario"],
    prompt: "What is the **key difference** between an option and a future?",
    choices: [
      { id: "a", text: "An option is a *right*; a future is an *obligation*" },
      { id: "b", text: "An option is an *obligation*; a future is a *right*", feedback: "It's the reverse — an option lets you walk away; a future binds both sides." },
      { id: "c", text: "Both are obligations to deliver the asset" },
      { id: "d", text: "Neither involves an underlying asset" },
    ],
    correctId: "a",
    explanation:
      "An **option** gives a *right* (you may act, you never must). A **future** is an *obligation* — both sides must perform or close the position first.",
  },
  {
    id: "what-is-a-derivative.q4",
    lessonSlug: "what-is-a-derivative",
    type: "single",
    difficulty: "medium",
    tags: ["derivatives", "hedging", "scenario"],
    prompt:
      "An **airline** buys oil futures to protect itself against rising jet-fuel prices. This is an example of…",
    choices: [
      { id: "a", text: "Speculation", feedback: "Speculation *takes on* new risk; here the airline already faces fuel-price risk and is reducing it." },
      { id: "b", text: "Hedging" },
      { id: "c", text: "Issuing equity" },
      { id: "d", text: "Paying a dividend" },
    ],
    correctId: "b",
    explanation:
      "**Hedging** *reduces* an existing risk. The airline must buy fuel anyway, so locking in a price with futures offsets its real exposure.",
  },
  {
    id: "what-is-a-derivative.q5",
    lessonSlug: "what-is-a-derivative",
    type: "single",
    difficulty: "medium",
    tags: ["derivatives", "speculation"],
    prompt: "**Speculation** with a derivative means…",
    choices: [
      { id: "a", text: "Reducing a risk you already carry" },
      { id: "b", text: "Taking on risk to profit from a move, without owning the underlying" },
      { id: "c", text: "Guaranteeing a fixed return with no risk" },
      { id: "d", text: "Buying the underlying asset outright" },
    ],
    correctId: "b",
    explanation:
      "**Speculation** *takes on* risk for profit on the direction or size of a move — without owning the underlying. It's the opposite intent from hedging.",
  },
  {
    id: "what-is-a-derivative.q6",
    lessonSlug: "what-is-a-derivative",
    type: "single",
    difficulty: "easy",
    tags: ["derivatives", "leverage", "risk"],
    prompt: "Why is **leverage** described as cutting \"both ways\"?",
    choices: [
      { id: "a", text: "It only ever increases your gains" },
      { id: "b", text: "It magnifies both gains and losses" },
      { id: "c", text: "It removes all risk from a trade" },
      { id: "d", text: "It applies only to stocks, not derivatives" },
    ],
    correctId: "b",
    explanation:
      "**Leverage** lets small money control a large notional, so it magnifies *both* gains and losses. The dollar swing is symmetric, but on a tiny premium the percentage swing is brutal.",
  },
  {
    id: "what-is-a-derivative.q7",
    lessonSlug: "what-is-a-derivative",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["derivatives", "options", "risk", "math"],
    unit: "$",
    prompt:
      "You pay a `$300` premium for one call. At expiration it is out-of-the-money and expires worthless. What is your loss?",
    choices: [
      { id: "a", text: "$0" },
      { id: "b", text: "$30" },
      { id: "c", text: "$300" },
      { id: "d", text: "$3,000", feedback: "The most a long option buyer can lose is the premium paid — `$300`, not the notional." },
    ],
    correctId: "c",
    explanation:
      "A long option that expires worthless loses `100%` of the premium. You paid `$300`, so the loss is `$300` — a `−100%` result.",
  },
  {
    id: "what-is-a-derivative.q8",
    lessonSlug: "what-is-a-derivative",
    type: "single",
    difficulty: "hard",
    tags: ["derivatives", "misconception"],
    prompt:
      "A friend says a call option is \"just a cheaper way to own the stock.\" What's the best correction?",
    choices: [
      { id: "a", text: "He's right — it's identical, only cheaper" },
      { id: "b", text: "You own a *contract* with an expiration that can expire worthless, usually no dividends/voting, and a nonlinear payoff" },
      { id: "c", text: "Options always cost more than the stock" },
      { id: "d", text: "Calls pay larger dividends than the shares" },
    ],
    correctId: "b",
    explanation:
      "A derivative is a *contract*, not the asset. It has an expiration, can expire worthless, usually carries no dividends or voting rights, and has a nonlinear payoff — very different from owning shares.",
  },
  {
    id: "what-is-a-derivative.q9",
    lessonSlug: "what-is-a-derivative",
    type: "single",
    difficulty: "hard",
    tags: ["derivatives", "hedging", "scenario"],
    prompt:
      "A trader who owns **no** wheat at all buys wheat futures purely because she expects prices to rise. Is this a hedge?",
    choices: [
      { id: "a", text: "Yes — any futures purchase is a hedge" },
      { id: "b", text: "No — with no existing exposure to offset, it's speculation" },
      { id: "c", text: "Yes — futures always reduce risk" },
      { id: "d", text: "No — futures can't be used on commodities" },
    ],
    correctId: "b",
    explanation:
      "A hedge only protects if it *offsets a real exposure*. With no wheat position to protect, buying futures simply *takes on* risk for profit — that's **speculation**, not hedging.",
  },
];
