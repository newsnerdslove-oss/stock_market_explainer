import type { Question } from "@/lib/quiz/types";

// Quiz for the "Long vs. Short" lesson.
export const questions: Question[] = [
  {
    id: "long-vs-short.q1",
    lessonSlug: "long-vs-short",
    type: "single",
    difficulty: "easy",
    tags: ["long-short", "definition"],
    prompt: "Going **long** on a stock means you…",
    choices: [
      { id: "a", text: "Buy it hoping the price rises" },
      { id: "b", text: "Borrow and sell it hoping the price falls", feedback: "That's a *short* — going long is simply buying to profit on a rise." },
      { id: "c", text: "Hold it for at least a year" },
      { id: "d", text: "Collect a dividend without owning shares" },
    ],
    correctId: "a",
    explanation:
      "**Long** = buy now, profit if the price rises. It's the default way most beginners invest.",
  },
  {
    id: "long-vs-short.q2",
    lessonSlug: "long-vs-short",
    type: "single",
    difficulty: "easy",
    tags: ["long-short", "definition"],
    prompt: "Going **short** on a stock means you profit when the price…",
    choices: [
      { id: "a", text: "Rises" },
      { id: "b", text: "Falls" },
      { id: "c", text: "Stays exactly flat" },
      { id: "d", text: "Pays a dividend" },
    ],
    correctId: "b",
    explanation:
      "**Short** = borrow shares, sell now, and buy them back later cheaper to return them. You profit when the price **falls**.",
  },
  {
    id: "long-vs-short.q3",
    lessonSlug: "long-vs-short",
    type: "single",
    difficulty: "medium",
    tags: ["long-short", "risk-asymmetry"],
    prompt: "Why is the risk of long vs. short **not** symmetric?",
    choices: [
      { id: "a", text: "Long losses are capped at $0, but short losses have no ceiling" },
      { id: "b", text: "Short losses are capped but long losses are unlimited", feedback: "It's the reverse — a price can't go below $0, but it can rise without limit." },
      { id: "c", text: "Both have exactly the same maximum loss" },
      { id: "d", text: "Long positions can't lose money at all" },
    ],
    correctId: "a",
    explanation:
      "A price can only fall to **$0**, so a long loss is capped. But a price has **no ceiling**, so a short loss can grow without limit.",
  },
  {
    id: "long-vs-short.q4",
    lessonSlug: "long-vs-short",
    type: "numericChoice",
    difficulty: "medium",
    unit: "$",
    tags: ["long-short", "math", "risk"],
    prompt:
      "You **short 10 shares @ $100** and the price rises to **$150**, where you cover. What's your profit or loss?",
    choices: [
      { id: "a", text: "+$500", feedback: "A rising price hurts a short — you bought back higher than you sold." },
      { id: "b", text: "−$500" },
      { id: "c", text: "−$1,500" },
      { id: "d", text: "$0" },
    ],
    correctId: "b",
    explanation:
      "You sold for `10 × $100 = $1,000` and bought back for `10 × $150 = $1,500`. `$1,000 − $1,500 = −$500` loss.",
  },
  {
    id: "long-vs-short.q5",
    lessonSlug: "long-vs-short",
    type: "numericChoice",
    difficulty: "medium",
    unit: "$",
    tags: ["long-short", "math", "long"],
    prompt: "You go **long 10 shares @ $100** and sell at **$130**. What's your profit or loss?",
    choices: [
      { id: "a", text: "+$300" },
      { id: "b", text: "−$300", feedback: "Selling higher than you bought is a gain, not a loss." },
      { id: "c", text: "+$1,300" },
      { id: "d", text: "+$30" },
    ],
    correctId: "a",
    explanation:
      "`(130 − 100) × 10 = $300` profit. A long gains as the price rises, with no upper limit on the upside.",
  },
  {
    id: "long-vs-short.q6",
    lessonSlug: "long-vs-short",
    type: "numericChoice",
    difficulty: "hard",
    unit: "$",
    tags: ["long-short", "math", "max-loss"],
    prompt: "You go **long 10 shares @ $100** and the company goes bankrupt (price → $0). What's your maximum loss?",
    choices: [
      { id: "a", text: "Unlimited", feedback: "That's the *short* side's risk. A long can only lose what was invested." },
      { id: "b", text: "$1,000" },
      { id: "c", text: "$100" },
      { id: "d", text: "$0" },
    ],
    correctId: "b",
    explanation:
      "A price can fall no lower than $0, so a long's loss is **capped** at the amount invested: `10 × $100 = $1,000`.",
  },
  {
    id: "long-vs-short.q7",
    lessonSlug: "long-vs-short",
    type: "single",
    difficulty: "medium",
    tags: ["long-short", "vocabulary"],
    prompt: "Buying shares back to close a short position and return what you borrowed is called…",
    choices: [
      { id: "a", text: "Covering (buy to cover)" },
      { id: "b", text: "Going long" },
      { id: "c", text: "Reinvesting" },
      { id: "d", text: "Declaring a dividend" },
    ],
    correctId: "a",
    explanation:
      "Closing a short means buying the shares back — **covering** (a *buy to cover*) — so you can return the borrowed shares.",
  },
  {
    id: "long-vs-short.q8",
    lessonSlug: "long-vs-short",
    type: "single",
    difficulty: "medium",
    tags: ["long-short", "margin"],
    prompt: "Which is true about **shorting** specifically?",
    choices: [
      { id: "a", text: "It needs a margin account and can incur borrow fees" },
      { id: "b", text: "It can be done in any cash account for free" },
      { id: "c", text: "It guarantees a profit if the company is weak" },
      { id: "d", text: "It has the same capped risk as going long" },
    ],
    correctId: "a",
    explanation:
      "Shorting requires a **margin account**, charges **borrow fees**, and can force you to close (a buy-in or margin call) at a bad time.",
  },
  {
    id: "long-vs-short.q9",
    lessonSlug: "long-vs-short",
    type: "single",
    difficulty: "hard",
    tags: ["long-short", "misconception", "application"],
    prompt:
      "Someone says, \"Shorting is just buying in reverse, so the risk is the same.\" What's the flaw?",
    choices: [
      { id: "a", text: "Nothing — the risks really are identical" },
      { id: "b", text: "A long's loss is capped, but a short's loss is theoretically unlimited" },
      { id: "c", text: "A short's loss is capped, but a long's is unlimited" },
      { id: "d", text: "Both positions are risk-free if held long enough" },
    ],
    correctId: "b",
    explanation:
      "The risks aren't symmetric. A long loss is capped at the investment (price floor of $0), but a short loss is **theoretically unlimited** because the price has no ceiling.",
  },
];
