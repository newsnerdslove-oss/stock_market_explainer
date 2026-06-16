import type { Question } from "@/lib/quiz/types";

// Quiz for the "Bull Put Spread: Getting Paid for a 'Stays-Above' Bet" lesson.
export const questions: Question[] = [
  {
    id: "bull-put-spread-credit.q1",
    lessonSlug: "bull-put-spread-credit",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["options", "bull-put-spread", "credit-spread", "math", "max-loss"],
    unit: "$",
    prompt: "You sell a `50` put for `$2` and buy a `45` put for `$0.80` (same expiry). What's the max loss?",
    choices: [
      { id: "a", text: "$120", feedback: "That's the credit / max profit, not the loss." },
      { id: "b", text: "$380" },
      { id: "c", text: "$500", feedback: "The `$120` credit reduces the `$500` width." },
      { id: "d", text: "$280" },
    ],
    correctId: "b",
    explanation:
      "Max loss `= (width − credit) × 100 = (5 − 1.20) × 100 = $380`, reached if the stock is at or below the `$45` long strike.",
  },
  {
    id: "bull-put-spread-credit.q2",
    lessonSlug: "bull-put-spread-credit",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["options", "bull-put-spread", "credit-spread", "math", "breakeven"],
    unit: "$",
    prompt: "Sell a `50` put for `$2`, buy a `45` put for `$0.80`. What's the breakeven?",
    choices: [
      { id: "a", text: "$48.80" },
      { id: "b", text: "$51.20", feedback: "For a put credit spread you *subtract* the credit from the short strike." },
      { id: "c", text: "$46.20", feedback: "That applies the credit to the wrong strike." },
      { id: "d", text: "$45.00" },
    ],
    correctId: "a",
    explanation:
      "Breakeven `= short strike − credit = 50 − 1.20 = $48.80`. Above this at expiry, the position is profitable.",
  },
  {
    id: "bull-put-spread-credit.q3",
    lessonSlug: "bull-put-spread-credit",
    type: "numericChoice",
    difficulty: "easy",
    tags: ["options", "bull-put-spread", "credit-spread", "math", "max-profit"],
    unit: "$",
    prompt: "Sell a `50` put for `$2`, buy a `45` put for `$0.80`. What's the max profit?",
    choices: [
      { id: "a", text: "$120" },
      { id: "b", text: "$380", feedback: "That's the max loss." },
      { id: "c", text: "$200", feedback: "That's only the short premium, before the long put's cost." },
      { id: "d", text: "$500" },
    ],
    correctId: "a",
    explanation:
      "Max profit is the **net credit**: `(2 − 0.80) × 100 = $120`, kept if both puts expire worthless (stock at or above `$50`).",
  },
  {
    id: "bull-put-spread-credit.q4",
    lessonSlug: "bull-put-spread-credit",
    type: "single",
    difficulty: "hard",
    tags: ["options", "bull-put-spread", "credit-spread", "scenario", "asymmetry"],
    prompt:
      "A trader keeps winning most of these spreads yet still ends up down money. What explains it?",
    choices: [
      { id: "a", text: "The occasional losses (~`$380` each) outweighed the frequent wins (~`$120` each)" },
      { id: "b", text: "Winning trades secretly lose money" },
      { id: "c", text: "Credit spreads can't be profitable" },
      { id: "d", text: "The breakeven was set too low" },
    ],
    correctId: "a",
    explanation:
      "Credit spreads are **asymmetric**: each loss (`$380`) dwarfs each win (`$120`). It only takes a handful of `$380` losers to swamp many `$120` winners — so a high win rate does **not** mean low risk.",
  },
  {
    id: "bull-put-spread-credit.q5",
    lessonSlug: "bull-put-spread-credit",
    type: "single",
    difficulty: "medium",
    tags: ["options", "bull-put-spread", "credit-spread", "scenario", "construction"],
    prompt: "Why add the long lower put instead of just selling the higher put alone?",
    choices: [
      { id: "a", text: "It caps the max loss and reduces the capital required" },
      { id: "b", text: "It increases the credit collected" },
      { id: "c", text: "It removes assignment risk entirely" },
      { id: "d", text: "It raises the max profit above the credit" },
    ],
    correctId: "a",
    explanation:
      "The long lower put **defines and reduces** the worst case to `(width − credit)` and cuts the capital needed versus a cash-secured single put.",
  },
  {
    id: "bull-put-spread-credit.q6",
    lessonSlug: "bull-put-spread-credit",
    type: "single",
    difficulty: "easy",
    tags: ["options", "bull-put-spread", "credit-spread", "construction"],
    prompt: "How is a bull put (credit) spread built?",
    choices: [
      { id: "a", text: "Sell a higher-strike put and buy a lower-strike put, for a net credit" },
      { id: "b", text: "Buy a higher-strike put and sell a lower-strike put, for a net debit" },
      { id: "c", text: "Buy a call and sell a higher call" },
      { id: "d", text: "Sell a call and buy a higher call" },
    ],
    correctId: "a",
    explanation:
      "Sell the **higher** strike put (collect premium) and buy the **lower** strike put for protection — same expiration, a net credit.",
  },
  {
    id: "bull-put-spread-credit.q7",
    lessonSlug: "bull-put-spread-credit",
    type: "single",
    difficulty: "medium",
    tags: ["options", "bull-put-spread", "credit-spread", "concept"],
    prompt: "For this spread to reach max profit, the stock must…",
    choices: [
      { id: "a", text: "Stay above the short strike (`$50`) — it doesn't need to rise" },
      { id: "b", text: "Rise sharply above `$50`" },
      { id: "c", text: "Fall to the long strike" },
      { id: "d", text: "Land exactly at `$50`" },
    ],
    correctId: "a",
    explanation:
      "It's **neutral-to-bullish**: as long as the stock holds **above the short strike**, both puts expire worthless and you keep the full credit. No rally required.",
  },
  {
    id: "bull-put-spread-credit.q8",
    lessonSlug: "bull-put-spread-credit",
    type: "single",
    difficulty: "hard",
    tags: ["options", "bull-put-spread", "credit-spread", "misconception"],
    prompt: "Why is 'a high win rate means low risk' a dangerous belief for credit spreads?",
    choices: [
      { id: "a", text: "Losses are bigger than wins, so position sizing matters more than win rate" },
      { id: "b", text: "Credit spreads never win" },
      { id: "c", text: "Wins are always larger than losses" },
      { id: "d", text: "The credit grows each time you win" },
    ],
    correctId: "a",
    explanation:
      "Each loss (`$380`) is far bigger than each win (`$120`). A string of wins can be erased by one loss, so **sizing** governs survival, not the raw win rate.",
  },
];
