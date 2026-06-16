import type { Question } from "@/lib/quiz/types";

// Quiz for the "Cash-Secured Put: Getting Paid to Set a Buy Price" lesson.
export const questions: Question[] = [
  {
    id: "cash-secured-put.q1",
    lessonSlug: "cash-secured-put",
    type: "numericChoice",
    difficulty: "easy",
    tags: ["options", "cash-secured-put", "math", "breakeven"],
    unit: "$",
    prompt: "You sell a `$50` put for `$2.30` and secure it with cash. What's your effective buy price (breakeven)?",
    choices: [
      { id: "a", text: "$52.30", feedback: "The premium *lowers* your effective cost; you subtract it." },
      { id: "b", text: "$47.70" },
      { id: "c", text: "$50.00", feedback: "That ignores the premium you collected." },
      { id: "d", text: "$2.30" },
    ],
    correctId: "b",
    explanation:
      "Effective buy price `= strike − premium = 50 − 2.30 = $47.70`. The collected premium discounts your entry.",
  },
  {
    id: "cash-secured-put.q2",
    lessonSlug: "cash-secured-put",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["options", "cash-secured-put", "math", "max-loss"],
    unit: "$",
    prompt: "Sell a `$50` put for `$2.30`, cash-secured. If the stock goes to zero, what's the max loss?",
    choices: [
      { id: "a", text: "$5,000", feedback: "The `$230` premium offsets part of that." },
      { id: "b", text: "$4,770" },
      { id: "c", text: "$230", feedback: "That's the max *profit*, not the loss." },
      { id: "d", text: "$5,230" },
    ],
    correctId: "b",
    explanation:
      "Max loss `= (strike − premium) × 100 = (50 − 2.30) × 100 = $4,770`. You're obligated to buy at `$50` even if the stock collapses.",
  },
  {
    id: "cash-secured-put.q3",
    lessonSlug: "cash-secured-put",
    type: "numericChoice",
    difficulty: "easy",
    tags: ["options", "cash-secured-put", "math", "max-profit"],
    unit: "$",
    prompt: "Sell a `$50` put for `$2.30`. What's the maximum profit?",
    choices: [
      { id: "a", text: "$230" },
      { id: "b", text: "$5,000", feedback: "That's the cash secured, not the profit." },
      { id: "c", text: "$4,770", feedback: "That's the max loss." },
      { id: "d", text: "$2,300" },
    ],
    correctId: "a",
    explanation:
      "Max profit is the premium collected, `2.30 × 100 = $230`, kept if the put expires worthless (stock at or above `$50`).",
  },
  {
    id: "cash-secured-put.q4",
    lessonSlug: "cash-secured-put",
    type: "single",
    difficulty: "medium",
    tags: ["options", "cash-secured-put", "scenario"],
    prompt: "You sold a cash-secured put hoping to buy cheaper, but the stock rallies 30%. What happens?",
    choices: [
      { id: "a", text: "The put expires worthless; you keep the premium but miss the rally" },
      { id: "b", text: "You're forced to buy at the higher price", feedback: "A rally leaves the put out-of-the-money; you aren't assigned." },
      { id: "c", text: "You capture the full 30% gain" },
      { id: "d", text: "You lose the secured cash" },
    ],
    correctId: "a",
    explanation:
      "If the stock rallies, the put expires worthless. You keep the `$230` premium but don't own the shares, so you **miss the rally**.",
  },
  {
    id: "cash-secured-put.q5",
    lessonSlug: "cash-secured-put",
    type: "single",
    difficulty: "hard",
    tags: ["options", "cash-secured-put", "scenario", "naked-put"],
    prompt: "What distinguishes a cash-secured put from a naked put?",
    choices: [
      { id: "a", text: "The cash-secured version reserves cash to buy the shares, removing margin/leverage risk" },
      { id: "b", text: "The naked put has a higher strike automatically" },
      { id: "c", text: "The cash-secured put can never be assigned" },
      { id: "d", text: "There is no real difference" },
    ],
    correctId: "a",
    explanation:
      "A cash-secured put sets aside `strike × 100` in cash, so assignment is fully funded. A **naked** put uses margin — far higher, leveraged risk.",
  },
  {
    id: "cash-secured-put.q6",
    lessonSlug: "cash-secured-put",
    type: "single",
    difficulty: "easy",
    tags: ["options", "cash-secured-put", "construction"],
    prompt: "How is a cash-secured put set up?",
    choices: [
      { id: "a", text: "Sell 1 put and set aside `strike × 100` in cash" },
      { id: "b", text: "Buy 1 put and set aside cash" },
      { id: "c", text: "Sell 1 call against 100 shares" },
      { id: "d", text: "Buy 100 shares and sell a put" },
    ],
    correctId: "a",
    explanation:
      "You **sell 1 put** and reserve `strike × 100` in cash to honor a potential purchase — no margin, no naked risk.",
  },
  {
    id: "cash-secured-put.q7",
    lessonSlug: "cash-secured-put",
    type: "single",
    difficulty: "medium",
    tags: ["options", "cash-secured-put", "comparison", "limit-order"],
    prompt: "Versus a plain buy-limit order, a cash-secured put…",
    choices: [
      { id: "a", text: "Pays a premium for the same 'buy lower' intent, but obligates you and ties up cash" },
      { id: "b", text: "Is identical in every way" },
      { id: "c", text: "Pays nothing and has no obligation" },
      { id: "d", text: "Guarantees you'll buy the shares" },
    ],
    correctId: "a",
    explanation:
      "A buy limit is free but pays nothing. The cash-secured put **earns premium** for the same intent, at the cost of an **obligation** and **tied-up cash**.",
  },
  {
    id: "cash-secured-put.q8",
    lessonSlug: "cash-secured-put",
    type: "single",
    difficulty: "medium",
    tags: ["options", "cash-secured-put", "misconception"],
    prompt: "Why is 'selling puts is free income' misleading?",
    choices: [
      { id: "a", text: "You carry nearly the full downside from the strike to zero and tie up cash" },
      { id: "b", text: "Premiums are never actually paid to the seller" },
      { id: "c", text: "Selling puts has unlimited loss", feedback: "Loss is bounded — the stock can only fall to zero." },
      { id: "d", text: "The strike has no effect on risk" },
    ],
    correctId: "a",
    explanation:
      "The premium is real, but you shoulder almost the full decline from the strike down (minus premium) and your cash is committed the whole time.",
  },
];
