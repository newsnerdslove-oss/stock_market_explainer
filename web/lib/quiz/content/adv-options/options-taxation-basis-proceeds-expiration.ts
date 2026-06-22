import type { Question } from "@/lib/quiz/types";

// Quiz for the "Options & Taxes: Basis, Proceeds & Expiration" lesson.
export const questions: Question[] = [
  {
    id: "options-taxation-basis-proceeds-expiration.q1",
    lessonSlug: "options-taxation-basis-proceeds-expiration",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:4", "taxation", "call", "basis"],
    unit: "$",
    prompt:
      "An investor buys an `XYZ` `50` call for `$3` and exercises it. What is the **cost basis** of the `100` shares acquired?",
    choices: [
      { id: "a", text: "$5,300" },
      { id: "b", text: "$5,000", feedback: "That's only the strike cost — on exercise the $300 call premium is added to the basis: 5,000 + 300 = $5,300." },
      { id: "c", text: "$4,700", feedback: "The call premium is added to basis, not subtracted — subtracting is the put-writer rule." },
      { id: "d", text: "$300" },
    ],
    correctId: "a",
    explanation:
      "Exercising a call: buy `100` shares at the `$50` strike (`$5,000`) and **add** the `$3` (`$300`) premium → basis `$5,300`. No separate option gain or loss.",
  },
  {
    id: "options-taxation-basis-proceeds-expiration.q2",
    lessonSlug: "options-taxation-basis-proceeds-expiration",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:4", "taxation", "call", "proceeds"],
    unit: "$",
    prompt:
      "A writer is assigned on a short `XYZ` `50` call that was sold for `$3`. What are the writer's **sale proceeds** on the `100` shares delivered?",
    choices: [
      { id: "a", text: "$5,300" },
      { id: "b", text: "$5,000", feedback: "The premium received is added to proceeds, not ignored: 5,000 + 300 = $5,300." },
      { id: "c", text: "$4,700", feedback: "A call writer adds the premium to proceeds — subtracting describes the put-writer's basis adjustment." },
      { id: "d", text: "$300" },
    ],
    correctId: "a",
    explanation:
      "Call writer assigned: deliver `100` shares at `$50` (`$5,000`) and **add** the `$300` premium received → proceeds `$5,300`.",
  },
  {
    id: "options-taxation-basis-proceeds-expiration.q3",
    lessonSlug: "options-taxation-basis-proceeds-expiration",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:4", "taxation", "put", "proceeds"],
    unit: "$",
    prompt:
      "An investor buys an `XYZ` `50` put for `$2` and exercises it to sell `100` shares. What is the **amount realized** on the sale?",
    choices: [
      { id: "a", text: "$4,800" },
      { id: "b", text: "$5,000", feedback: "The $200 put premium reduces the amount realized: 5,000 − 200 = $4,800." },
      { id: "c", text: "$5,200", feedback: "A put holder subtracts the premium from proceeds — adding would be the call-holder/basis direction." },
      { id: "d", text: "$200" },
    ],
    correctId: "a",
    explanation:
      "Put holder exercises: sell `100` shares at `$50` (`$5,000`) and **subtract** the `$2` (`$200`) premium → amount realized `$4,800`.",
  },
  {
    id: "options-taxation-basis-proceeds-expiration.q4",
    lessonSlug: "options-taxation-basis-proceeds-expiration",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:4", "taxation", "put", "basis"],
    unit: "$",
    prompt:
      "A writer is assigned on a short `XYZ` `50` put sold for `$2` and must buy `100` shares. What is the writer's **cost basis**?",
    choices: [
      { id: "a", text: "$4,800" },
      { id: "b", text: "$5,000", feedback: "The $200 premium received reduces the basis: 5,000 − 200 = $4,800." },
      { id: "c", text: "$5,200", feedback: "A put writer subtracts the premium from basis — adding to proceeds is the call-writer rule." },
      { id: "d", text: "$200" },
    ],
    correctId: "a",
    explanation:
      "Put writer assigned: buy `100` shares at `$50` (`$5,000`) and **subtract** the `$200` premium → basis `$4,800` (`$48/share`).",
  },
  {
    id: "options-taxation-basis-proceeds-expiration.q5",
    lessonSlug: "options-taxation-basis-proceeds-expiration",
    type: "single",
    difficulty: "easy",
    tags: ["fn:4", "taxation", "expiration"],
    prompt:
      "A call **expires worthless**. What is the tax result for the **holder** and the **writer**?",
    choices: [
      { id: "a", text: "Holder: capital loss; writer: short-term capital gain — both on the expiration date" },
      { id: "b", text: "Holder: capital gain; writer: capital loss", feedback: "Reversed — the holder paid premium and loses it (loss); the writer kept the premium with no obligation (gain)." },
      { id: "c", text: "Neither has a taxable event until the underlying stock is sold", feedback: "Expiration is itself the closing event — the premium is realized on the expiration date." },
      { id: "d", text: "Both recognize ordinary income equal to the premium" },
    ],
    correctId: "a",
    explanation:
      "On expiration the holder takes a **capital loss** (premium paid) and the writer a **short-term capital gain** (premium received), recognized on the **expiration date** (IRS Pub 550).",
  },
  {
    id: "options-taxation-basis-proceeds-expiration.q6",
    lessonSlug: "options-taxation-basis-proceeds-expiration",
    type: "single",
    difficulty: "hard",
    tags: ["fn:4", "taxation", "expiration", "holding-period"],
    prompt:
      "A writer sold an option `14` months ago; it now **expires worthless**. The premium gain is taxed as:",
    choices: [
      { id: "a", text: "Short-term capital gain — a writer's expiration gain is always short-term" },
      { id: "b", text: "Long-term capital gain, because the option was open more than one year", feedback: "The holding-period test doesn't apply here — a writer's gain on an option that expires is short-term by rule regardless of time open." },
      { id: "c", text: "Ordinary income at graduated rates" },
      { id: "d", text: "Tax-free, since no stock was ever delivered" },
    ],
    correctId: "a",
    explanation:
      "When a written option expires, the writer's gain is **always short-term**, no matter how long the option was open. (The `>1 year` long-term test applies to *selling* an option to close, not to a writer's expiration gain.)",
  },
  {
    id: "options-taxation-basis-proceeds-expiration.q7",
    lessonSlug: "options-taxation-basis-proceeds-expiration",
    type: "single",
    difficulty: "medium",
    tags: ["fn:4", "taxation", "sale-to-close"],
    prompt:
      "An investor buys a call for `$4`, then **sells it to close** for `$7` ten months later. How is the `$3` profit treated?",
    choices: [
      { id: "a", text: "Short-term capital gain of $300 — the option was held one year or less" },
      { id: "b", text: "Long-term capital gain of $300", feedback: "Long-term requires holding the option more than one year; ten months is one year or less, so it's short-term." },
      { id: "c", text: "Added to the basis of the underlying stock", feedback: "Basis adjustment only happens on exercise — selling the option to close is its own capital gain/loss." },
      { id: "d", text: "Ordinary income of $300" },
    ],
    correctId: "a",
    explanation:
      "Sale-to-close: gain = `(7 − 4) × 100 = $300`. Held **10 months** (one year or less) → **short-term**. Long-term needs `>1 year` holding the option itself.",
  },
];
