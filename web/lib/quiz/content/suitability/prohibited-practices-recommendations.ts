import type { Question } from "@/lib/quiz/types";

// Quiz for the "Red Flags: Churning, Concentration, Switching, and Breakpoint Sales" lesson.
export const questions: Question[] = [
  {
    id: "prohibited-practices-recommendations.q1",
    lessonSlug: "prohibited-practices-recommendations",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "churning", "metrics"],
    prompt: "Which two metrics are commonly used to prove excessive trading or churning?",
    choices: [
      { id: "a", text: "Turnover ratio and cost-to-equity (break-even) ratio" },
      { id: "b", text: "Beta and standard deviation" },
      { id: "c", text: "Current ratio and quick ratio" },
      { id: "d", text: "P/E ratio and dividend yield" },
    ],
    correctId: "a",
    explanation:
      "Excessive trading is evidenced by the **turnover ratio** and the **cost-to-equity (break-even) ratio** — how much the account must return just to cover trading costs.",
  },
  {
    id: "prohibited-practices-recommendations.q2",
    lessonSlug: "prohibited-practices-recommendations",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "breakpoint", "scenario"],
    prompt:
      "A broker recommends $24,000 into a fund with a $25,000 breakpoint, without mentioning that $1,000 more or an LOI would lower the sales charge. Is this a violation?",
    choices: [
      { id: "a", text: "No — the customer chose the amount" },
      { id: "b", text: "Yes — it is a breakpoint sale" },
      { id: "c", text: "No — breakpoints are optional courtesies" },
      { id: "d", text: "Only if the fund underperforms", feedback: "Performance is irrelevant. Structuring a purchase just below a breakpoint so the customer overpays the sales charge is a breakpoint-sale violation by itself." },
    ],
    correctId: "b",
    explanation:
      "Recommending a purchase **just below** a breakpoint so the customer pays a higher sales charge is a **breakpoint sale** violation. The broker should have disclosed that $1,000 more or an LOI reaches the discount.",
  },
  {
    id: "prohibited-practices-recommendations.q3",
    lessonSlug: "prohibited-practices-recommendations",
    type: "single",
    difficulty: "hard",
    tags: ["fn:3", "churning", "current-state"],
    prompt:
      "After the 2020 amendments, must a broker have control or discretion over an account to be liable for excessive trading?",
    choices: [
      { id: "a", text: "Yes — control remains a required element" },
      { id: "b", text: "No — a pattern of followed recommendations suffices since the control element was removed" },
      { id: "c", text: "Yes — but only for margin accounts" },
      { id: "d", text: "No — excessive trading is no longer a violation at all", feedback: "Excessive trading is still very much a violation. What changed is that control is no longer required — a followed pattern of recommendations is enough." },
    ],
    correctId: "b",
    explanation:
      "The 2020 amendment **removed the control element**. A broker can be liable for excessive trading when a non-discretionary customer routinely follows a pattern of recommendations.",
  },
  {
    id: "prohibited-practices-recommendations.q4",
    lessonSlug: "prohibited-practices-recommendations",
    type: "single",
    difficulty: "easy",
    tags: ["fn:3", "loi", "breakpoint"],
    prompt: "How long is the pledge period for a Letter of Intent (LOI), and how far may it be backdated?",
    choices: [
      { id: "a", text: "13 months, backdated up to 90 days" },
      { id: "b", text: "12 months, backdated up to 30 days" },
      { id: "c", text: "24 months, no backdating allowed" },
      { id: "d", text: "6 months, backdated up to 180 days" },
    ],
    correctId: "a",
    explanation:
      "An **LOI** is a **13-month** pledge to reach a breakpoint and may be **backdated up to 90 days**.",
  },
  {
    id: "prohibited-practices-recommendations.q5",
    lessonSlug: "prohibited-practices-recommendations",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "roa", "breakpoint"],
    prompt: "What do Rights of Accumulation (ROA) allow a customer to do?",
    choices: [
      { id: "a", text: "Count existing fund holdings toward reaching the next breakpoint" },
      { id: "b", text: "Cancel a purchase within 13 months" },
      { id: "c", text: "Switch fund families with no new sales charge" },
      { id: "d", text: "Avoid all sales charges permanently", feedback: "ROA doesn't eliminate charges. It lets prior holdings count toward the next breakpoint so the customer reaches a volume discount sooner." },
    ],
    correctId: "a",
    explanation:
      "**Rights of Accumulation (ROA)** let a customer's **existing holdings count toward** the next breakpoint, helping reach a volume discount.",
  },
  {
    id: "prohibited-practices-recommendations.q6",
    lessonSlug: "prohibited-practices-recommendations",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "switching", "share-class"],
    prompt: "Which scenario describes prohibited share-class abuse?",
    choices: [
      { id: "a", text: "Recommending Class A shares with breakpoints for a large long-term purchase" },
      { id: "b", text: "Recommending Class B or C shares when Class A with breakpoints would be cheaper long-term" },
      { id: "c", text: "Using Rights of Accumulation to reach a breakpoint" },
      { id: "d", text: "Disclosing all sales charges before the purchase", feedback: "Disclosure and using ROA/breakpoints are proper. Abuse is steering a customer into costlier B/C shares when cheaper A shares with breakpoints fit better." },
    ],
    correctId: "b",
    explanation:
      "Steering a customer into **Class B or C** shares when **Class A** with breakpoints would be cheaper long-term is share-class abuse — a switching/best-interest violation.",
  },
  {
    id: "prohibited-practices-recommendations.q7",
    lessonSlug: "prohibited-practices-recommendations",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "concentration", "scenario"],
    prompt:
      "A conservative retiree ends up with 70% of her portfolio in a single stock on her broker's recommendations. Which violation is this?",
    choices: [
      { id: "a", text: "Breakpoint sale" },
      { id: "b", text: "Unsuitable concentration (fails customer-specific suitability)" },
      { id: "c", text: "Unauthorized trading" },
      { id: "d", text: "Reasonable-basis failure, because the stock is unknowable", feedback: "The stock itself may be perfectly understandable and sound. The violation is the 70% concentration mismatched to a conservative retiree — a customer-specific failure." },
    ],
    correctId: "b",
    explanation:
      "Over-allocating to one security is **unsuitable concentration**, failing **customer-specific** suitability even when the underlying product is fine on its own.",
  },
  {
    id: "prohibited-practices-recommendations.q8",
    lessonSlug: "prohibited-practices-recommendations",
    type: "single",
    difficulty: "hard",
    tags: ["fn:3", "switching", "scenario"],
    prompt:
      "A broker moves a customer from one fund family to another, triggering a new front-end sales charge, with no improvement in the customer's situation. What is this?",
    choices: [
      { id: "a", text: "A legitimate rebalancing, always permitted" },
      { id: "b", text: "Prohibited mutual fund switching without a best-interest rationale" },
      { id: "c", text: "A breakpoint sale" },
      { id: "d", text: "An LOI", feedback: "An LOI is a customer tool to reach a discount, not a violation. Moving across fund families to incur new charges without justification is prohibited switching." },
    ],
    correctId: "b",
    explanation:
      "Moving a customer **across fund families** to incur a **new sales charge** with no legitimate best-interest rationale is prohibited **mutual fund switching**.",
  },
];
