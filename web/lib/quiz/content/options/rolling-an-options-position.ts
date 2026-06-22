import type { Question } from "@/lib/quiz/types";

// Quiz for the "Rolling an Options Position: Buy Time, Change Strikes" lesson.
export const questions: Question[] = [
  {
    id: "rolling-an-options-position.q1",
    lessonSlug: "rolling-an-options-position",
    type: "single",
    difficulty: "easy",
    tags: ["options", "rolling", "definition"],
    prompt: "What does it mean to **roll** an options position?",
    choices: [
      { id: "a", text: "Exercise the option early to capture intrinsic value" },
      { id: "b", text: "Close the existing option and open a new one as one adjustment" },
      { id: "c", text: "Let the option expire and re-buy the same one next week" },
      { id: "d", text: "Hedge the option with an offsetting stock position", feedback: "That's a hedge, not a roll — a roll replaces the option itself." },
    ],
    correctId: "b",
    explanation:
      "A roll **closes the current option and opens a replacement** — usually a later expiration and/or different strike — typically entered as a single net-priced order.",
  },
  {
    id: "rolling-an-options-position.q2",
    lessonSlug: "rolling-an-options-position",
    type: "single",
    difficulty: "easy",
    tags: ["options", "rolling", "roll-out"],
    prompt: "You keep the same strike but move to a **later expiration**. What kind of roll is this?",
    choices: [
      { id: "a", text: "Roll out" },
      { id: "b", text: "Roll up", feedback: "Roll up changes the strike higher, not the expiration." },
      { id: "c", text: "Roll down" },
      { id: "d", text: "Diagonal roll", feedback: "A diagonal changes strike *and* expiration; here the strike is unchanged." },
    ],
    correctId: "a",
    explanation:
      "Moving to a **later expiration at the same strike** is a **roll out** — it buys time and usually collects more premium on a short option.",
  },
  {
    id: "rolling-an-options-position.q3",
    lessonSlug: "rolling-an-options-position",
    type: "single",
    difficulty: "medium",
    tags: ["options", "rolling", "diagonal"],
    prompt: "A roll that changes **both the strike and the expiration** at the same time is called a:",
    choices: [
      { id: "a", text: "Vertical roll" },
      { id: "b", text: "Calendar roll", feedback: "A pure calendar move keeps the strike fixed; here the strike also changes." },
      { id: "c", text: "Diagonal roll" },
      { id: "d", text: "Horizontal roll" },
    ],
    correctId: "c",
    explanation:
      "Changing strike **and** expiration together traces a **diagonal** across the options chain — e.g., rolling a short call out *and* up.",
  },
  {
    id: "rolling-an-options-position.q4",
    lessonSlug: "rolling-an-options-position",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["options", "rolling", "math", "net-credit"],
    unit: "$",
    prompt: "You **buy to close** a short call for `$1.80` and **sell to open** a new call for `$2.50`. What is the net result of the roll?",
    choices: [
      { id: "a", text: "$0.70 debit", feedback: "You collect more than you pay, so it's a credit, not a debit." },
      { id: "b", text: "$4.30 credit", feedback: "You don't add the two premiums — you net them." },
      { id: "c", text: "$0.70 credit" },
      { id: "d", text: "$2.50 credit", feedback: "That ignores the cost to buy back the old call." },
    ],
    correctId: "c",
    explanation:
      "Net the legs: `$2.50` collected − `$1.80` paid = `$0.70` **credit** (`$70`). The single net price is what tells you the roll's cost or gain.",
  },
  {
    id: "rolling-an-options-position.q5",
    lessonSlug: "rolling-an-options-position",
    type: "single",
    difficulty: "medium",
    tags: ["options", "rolling", "covered-call", "purpose"],
    prompt: "Your short covered call is near expiration and still out-of-the-money. Why might you roll it out to the next cycle?",
    choices: [
      { id: "a", text: "To convert the shares into a long put" },
      { id: "b", text: "To guarantee the stock gets called away" },
      { id: "c", text: "To eliminate all downside risk on the shares", feedback: "A covered call only cushions a small drop; rolling it doesn't remove downside risk." },
      { id: "d", text: "To collect another premium on the same shares" },
    ],
    correctId: "d",
    explanation:
      "Rolling an expiring covered call to the next cycle lets you **collect another premium** on shares you still own — extending the income stream.",
  },
  {
    id: "rolling-an-options-position.q6",
    lessonSlug: "rolling-an-options-position",
    type: "single",
    difficulty: "hard",
    tags: ["options", "rolling", "tax", "wash-sale"],
    prompt: "What is the key **tax** consideration when you roll an option at a loss?",
    choices: [
      { id: "a", text: "Closing the old option realizes a gain or loss, and reopening a substantially identical position within 30 days can trigger the wash sale rule" },
      { id: "b", text: "A roll is tax-free because no cash changes hands", feedback: "Closing the old option is a taxable event regardless of the net cash." },
      { id: "c", text: "Losses on options can never be deducted" },
      { id: "d", text: "The wash sale rule only applies to stocks, never options", feedback: "Per IRS Pub 550, the rule reaches contracts and options to acquire substantially identical securities." },
    ],
    correctId: "a",
    explanation:
      "A roll is **two trades for tax**: closing the old leg **realizes a gain or loss**. Re-establishing a substantially identical position within **30 days before or after** a loss can trigger the **wash sale** rule, deferring the loss into the new position's basis.",
  },
  {
    id: "rolling-an-options-position.q7",
    lessonSlug: "rolling-an-options-position",
    type: "single",
    difficulty: "hard",
    tags: ["options", "rolling", "misconception"],
    prompt: "Why is it misleading to think of rolling as 'escaping' a losing trade?",
    choices: [
      { id: "a", text: "Rolling always locks in a guaranteed profit" },
      { id: "b", text: "Rolling doesn't erase the loss — it relocates risk to a new contract and often adds cost" },
      { id: "c", text: "Rolling is prohibited once a position is in the money", feedback: "There's no such rule; you can roll an in-the-money option." },
      { id: "d", text: "Rolling can only ever be done for a debit" },
    ],
    correctId: "b",
    explanation:
      "Rolling **moves risk to a new contract** rather than erasing the loss. A credit can mask a worse strike, and repeatedly rolling a deeply tested short can stack losses larger than simply accepting assignment.",
  },
];
