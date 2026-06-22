import type { Question } from "@/lib/quiz/types";

// Quiz for the "Rights & Warrants" lesson.
export const questions: Question[] = [
  {
    id: "rights-and-warrants.q1",
    lessonSlug: "rights-and-warrants",
    type: "single",
    difficulty: "easy",
    tags: ["rights", "preemptive", "dilution"],
    prompt: "What is the main purpose of a **preemptive right**?",
    choices: [
      { id: "a", text: "To force shareholders to sell their stock back to the company" },
      { id: "b", text: "To let existing shareholders buy new shares first, in proportion to what they own, and avoid dilution" },
      { id: "c", text: "To pay shareholders a guaranteed dividend each quarter" },
      { id: "d", text: "To convert bonds into common stock" },
    ],
    correctId: "b",
    explanation:
      "A **preemptive right** lets current shareholders buy newly issued shares *first*, in proportion to their holdings, so their ownership percentage isn't **diluted** by the new stock.",
  },
  {
    id: "rights-and-warrants.q2",
    lessonSlug: "rights-and-warrants",
    type: "single",
    difficulty: "easy",
    tags: ["rights", "subscription-price"],
    prompt: "In a rights offering, the **subscription price** is generally set…",
    choices: [
      { id: "a", text: "Far above the current market price" },
      { id: "b", text: "Exactly at the current market price" },
      { id: "c", text: "At a discount — below the current market price" },
      { id: "d", text: "At a random price chosen daily by the exchange", feedback: "The price is fixed by the company for the offering, not set daily by an exchange." },
    ],
    correctId: "c",
    explanation:
      "FINRA notes the price in a rights offering is *generally at a discount to the current market price*. That below-market subscription price is exactly what gives a right its value.",
  },
  {
    id: "rights-and-warrants.q3",
    lessonSlug: "rights-and-warrants",
    type: "single",
    difficulty: "medium",
    tags: ["warrants", "strike", "definition"],
    prompt: "When a **warrant** is first issued, its strike (exercise) price is typically…",
    choices: [
      { id: "a", text: "Above the current market price of the stock" },
      { id: "b", text: "Below the current market price of the stock", feedback: "That describes a *right's* subscription price. A warrant's strike is usually a premium — above market." },
      { id: "c", text: "Always exactly zero" },
      { id: "d", text: "Set equal to the bond's face value" },
    ],
    correctId: "a",
    explanation:
      "FINRA describes a warrant's price as *often a premium to the stock price at the time the warrant is issued* — i.e., **above** market. So a warrant usually starts out-of-the-money and needs the stock to climb into it.",
  },
  {
    id: "rights-and-warrants.q4",
    lessonSlug: "rights-and-warrants",
    type: "single",
    difficulty: "medium",
    tags: ["warrants", "sweetener", "bonds"],
    prompt: "Why does a company often attach **warrants** to a bond offering?",
    choices: [
      { id: "a", text: "To force bondholders to buy more stock" },
      { id: "b", text: "Because regulators require a warrant on every bond" },
      { id: "c", text: "To shorten the bond's maturity" },
      { id: "d", text: "As a *sweetener* — making the offering more attractive so it can borrow at a lower rate" },
    ],
    correctId: "d",
    explanation:
      "A warrant is a long-dated bet on the stock. Attaching it as a **sweetener** makes the bond (or preferred) more appealing, letting the company raise money on better terms.",
  },
  {
    id: "rights-and-warrants.q5",
    lessonSlug: "rights-and-warrants",
    type: "single",
    difficulty: "medium",
    tags: ["rights", "warrants", "term", "contrast"],
    prompt: "Which best captures the **term** difference between rights and warrants?",
    choices: [
      { id: "a", text: "Rights last for years; warrants last only a few days" },
      { id: "b", text: "Rights are short-term (a one-to-three-month window); warrants are long-term (often several years)" },
      { id: "c", text: "Both expire the same day they are issued" },
      { id: "d", text: "Both are perpetual and never expire" },
    ],
    correctId: "b",
    explanation:
      "A rights offering runs only for its *prescribed time period* — generally one to three months. A **warrant** is long-term, often valid for several years.",
  },
  {
    id: "rights-and-warrants.q6",
    lessonSlug: "rights-and-warrants",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["rights", "intrinsic-value", "math"],
    unit: "$",
    prompt:
      "A stock trades at `$50`. A **right** lets you subscribe at `$45`. What is the right's **intrinsic value**?",
    choices: [
      { id: "a", text: "$0", feedback: "Since the subscription price is *below* market, the right is in the money and worth more than `$0`." },
      { id: "b", text: "$45" },
      { id: "c", text: "$5" },
      { id: "d", text: "$95" },
    ],
    correctId: "c",
    explanation:
      "Intrinsic value = `market price − exercise price = $50 − $45 = $5`. The below-market subscription price makes a right in-the-money the moment it's issued.",
  },
  {
    id: "rights-and-warrants.q7",
    lessonSlug: "rights-and-warrants",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["warrants", "intrinsic-value", "math"],
    unit: "$",
    prompt:
      "A stock trades at `$50`. A newly issued **warrant** has a strike of `$60`. What is the warrant's **intrinsic value** right now?",
    choices: [
      { id: "a", text: "$10" },
      { id: "b", text: "−$10", feedback: "Intrinsic value can never go below `$0` — you'd simply not exercise an out-of-the-money warrant." },
      { id: "c", text: "$60" },
      { id: "d", text: "$0" },
    ],
    correctId: "d",
    explanation:
      "Intrinsic value = `max(market − strike, $0) = max($50 − $60, $0) = $0`. With the strike *above* market, the warrant is out-of-the-money and only pays if the stock climbs past `$60`.",
  },
];
