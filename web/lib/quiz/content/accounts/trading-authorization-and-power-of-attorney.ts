import type { Question } from "@/lib/quiz/types";

// Quiz for the "Trading Authorization & Power of Attorney" lesson.
export const questions: Question[] = [
  {
    id: "trading-authorization-and-power-of-attorney.q1",
    lessonSlug: "trading-authorization-and-power-of-attorney",
    type: "single",
    difficulty: "easy",
    tags: ["fn:2", "accounts", "poa"],
    prompt:
      "A customer grants a friend a LIMITED power of attorney over her account. What may the friend do?",
    choices: [
      { id: "a", text: "Enter buy and sell orders, but not withdraw cash or securities" },
      { id: "b", text: "Both trade and have checks mailed to the friend", feedback: "That is the scope of a FULL POA. A LIMITED POA is trade-only; distributions still go to the owner." },
      { id: "c", text: "Become a joint owner of the account" },
      { id: "d", text: "Nothing until the friend opens a separate account" },
    ],
    correctId: "a",
    explanation:
      "A **limited POA** (limited trading authorization) lets the agent **enter trades only** — no withdrawal of cash or securities. Distributions still go to the **owner**.",
  },
  {
    id: "trading-authorization-and-power-of-attorney.q2",
    lessonSlug: "trading-authorization-and-power-of-attorney",
    type: "single",
    difficulty: "medium",
    tags: ["fn:2", "accounts", "poa"],
    prompt:
      "Under which authorization may an agent have cash or securities withdrawn and sent to the agent?",
    choices: [
      { id: "a", text: "A limited trading authorization" },
      { id: "b", text: "A time-and-price instruction" },
      { id: "c", text: "A full power of attorney" },
      { id: "d", text: "Any POA, as long as the firm approves each withdrawal" },
    ],
    correctId: "c",
    explanation:
      "Only a **full POA** permits the agent to **trade and withdraw** cash and securities, including to the agent. A limited POA is trade-only.",
  },
  {
    id: "trading-authorization-and-power-of-attorney.q3",
    lessonSlug: "trading-authorization-and-power-of-attorney",
    type: "single",
    difficulty: "medium",
    tags: ["fn:2", "accounts", "rule-3260", "discretion"],
    prompt:
      "Before a registered rep enters the first discretionary order, FINRA Rule 3260 requires which of the following?",
    choices: [
      { id: "a", text: "Only a verbal go-ahead from the customer" },
      { id: "b", text: "Prior written customer authorization AND written acceptance of the account by a principal" },
      { id: "c", text: "A signed margin agreement" },
      { id: "d", text: "Notice filed with the SEC", feedback: "No SEC filing is involved. Rule 3260 requires the customer's prior WRITTEN authorization plus the firm's written acceptance by a principal." },
    ],
    correctId: "b",
    explanation:
      "Rule 3260 requires **prior written authorization** from the customer **and** the firm's **written acceptance** of the discretionary account by a principal — both before the first discretionary order.",
  },
  {
    id: "trading-authorization-and-power-of-attorney.q4",
    lessonSlug: "trading-authorization-and-power-of-attorney",
    type: "single",
    difficulty: "medium",
    tags: ["fn:2", "accounts", "discretion"],
    prompt:
      "Which instruction does NOT require prior written discretionary authorization?",
    choices: [
      { id: "a", text: "\"Buy whatever pharma stock you think is best.\"" },
      { id: "b", text: "\"Sell enough of something to raise $5,000; you pick what.\"" },
      { id: "c", text: "\"Buy 200 shares of XYZ today whenever you think the price is best.\"" },
      { id: "d", text: "\"Put $10,000 to work however you choose.\"" },
    ],
    correctId: "c",
    explanation:
      "Choosing only **time or price** is not discretion — the customer already set the asset, action, and amount. The others leave the rep choosing the **Asset, Action, or Amount** (the three A's), which is discretion.",
  },
  {
    id: "trading-authorization-and-power-of-attorney.q5",
    lessonSlug: "trading-authorization-and-power-of-attorney",
    type: "single",
    difficulty: "hard",
    tags: ["fn:2", "accounts", "rule-3260"],
    prompt:
      "A customer says, \"Buy 100 ABC today at the best price.\" The rep doesn't get to it and wants to keep that authority for tomorrow. Under Rule 3260, what's true?",
    choices: [
      { id: "a", text: "The time-and-price authority expires at the end of the business day unless the customer signs and dates a contrary instruction" },
      { id: "b", text: "The authority lasts until the customer cancels it" },
      { id: "c", text: "The authority automatically carries forward up to five business days" },
      { id: "d", text: "The order becomes a full discretionary order the next day" },
    ],
    correctId: "a",
    explanation:
      "Under **Rule 3260**, time-and-price discretion **expires at the end of the business day** it's given unless the customer provides a **specific written instruction, signed and dated**, extending it.",
  },
  {
    id: "trading-authorization-and-power-of-attorney.q6",
    lessonSlug: "trading-authorization-and-power-of-attorney",
    type: "single",
    difficulty: "medium",
    tags: ["fn:2", "accounts", "termination"],
    prompt:
      "An agent holds a valid trading authorization. The account owner (principal) dies. What happens to the agent's authority?",
    choices: [
      { id: "a", text: "It continues until the estate is settled" },
      { id: "b", text: "It transfers to the principal's heirs" },
      { id: "c", text: "It terminates immediately; the agent may no longer trade or withdraw" },
      { id: "d", text: "It continues only for closing transactions" },
    ],
    correctId: "c",
    explanation:
      "The **death of the principal revokes** the authorization. Trading must **stop immediately** and the account is frozen pending estate documents — regardless of whether the POA was limited or full.",
  },
  {
    id: "trading-authorization-and-power-of-attorney.q7",
    lessonSlug: "trading-authorization-and-power-of-attorney",
    type: "single",
    difficulty: "hard",
    tags: ["fn:2", "accounts", "rule-3260"],
    prompt:
      "In an accepted discretionary account, what ongoing supervision does Rule 3260 require?",
    choices: [
      { id: "a", text: "A principal must approve each discretionary order promptly in writing, and the firm must review the account at frequent intervals for excessive trading" },
      { id: "b", text: "Annual review of the account by the firm's outside auditor only" },
      { id: "c", text: "The customer must reconfirm every order in writing" },
      { id: "d", text: "No further supervision once the account is accepted", feedback: "Acceptance is just the start. Rule 3260 requires prompt written principal approval of each discretionary order and frequent review for excessive (churning) activity." },
    ],
    correctId: "a",
    explanation:
      "Rule 3260 requires a principal to **approve each discretionary order promptly in writing** and the firm to **review the account at frequent intervals** to catch trading **excessive in size or frequency** given the account's resources and character.",
  },
];
