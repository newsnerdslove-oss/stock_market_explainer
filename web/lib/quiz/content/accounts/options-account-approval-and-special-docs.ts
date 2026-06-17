import type { Question } from "@/lib/quiz/types";

// Quiz for the "Options Account Approval & Special Account Documents" lesson.
export const questions: Question[] = [
  {
    id: "options-account-approval-and-special-docs.q1",
    lessonSlug: "options-account-approval-and-special-docs",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:2", "options", "oaa"],
    prompt:
      "Within how many days after options account approval must the firm obtain the customer's signed Options Account Agreement?",
    choices: [
      { id: "a", text: "10 days" },
      { id: "b", text: "15 days" },
      { id: "c", text: "30 days" },
      { id: "d", text: "5 days" },
    ],
    correctId: "b",
    explanation:
      "Under `FINRA Rule 2360`, the signed **OAA** is due within `15 days` after account approval. Miss it and the account is restricted to closing transactions only.",
  },
  {
    id: "options-account-approval-and-special-docs.q2",
    lessonSlug: "options-account-approval-and-special-docs",
    type: "single",
    difficulty: "medium",
    tags: ["fn:2", "options", "oaa"],
    prompt:
      "What happens if the signed Options Account Agreement is not returned within 15 days of approval?",
    choices: [
      { id: "a", text: "The account is closed and assets liquidated" },
      { id: "b", text: "The account is restricted to closing transactions only until the signed agreement is received" },
      { id: "c", text: "Nothing — the deadline is only a guideline" },
      { id: "d", text: "The customer is barred from options for one year", feedback: "There's no one-year bar. The account is simply restricted to closing transactions only, and the restriction lifts as soon as the signed OAA arrives." },
    ],
    correctId: "b",
    explanation:
      "Failure to return the signed OAA within `15 days` restricts the account to **closing transactions only** — existing positions may be reduced or closed, but no new positions opened — until the agreement is received.",
  },
  {
    id: "options-account-approval-and-special-docs.q3",
    lessonSlug: "options-account-approval-and-special-docs",
    type: "single",
    difficulty: "hard",
    tags: ["fn:2", "options", "odd"],
    prompt:
      "Which must occur at or before options account approval — delivery of the ODD or return of the signed OAA?",
    choices: [
      { id: "a", text: "The signed OAA must be returned first", feedback: "This is the classic trap. The signed OAA comes AFTER approval (within 15 days). It is the ODD that must be delivered at or before approval." },
      { id: "b", text: "Delivery of the ODD" },
      { id: "c", text: "Both must occur before approval" },
      { id: "d", text: "Neither — both come after the first trade" },
    ],
    correctId: "b",
    explanation:
      "The **ODD** must be delivered **at or prior to** approval. The signed **OAA** is due within `15 days` *after* approval, and trading may begin before it is returned.",
  },
  {
    id: "options-account-approval-and-special-docs.q4",
    lessonSlug: "options-account-approval-and-special-docs",
    type: "single",
    difficulty: "medium",
    tags: ["fn:2", "margin", "documents"],
    prompt:
      "Which margin account document is OPTIONAL rather than required?",
    choices: [
      { id: "a", text: "The margin (credit) agreement" },
      { id: "b", text: "The hypothecation agreement" },
      { id: "c", text: "The loan consent agreement" },
      { id: "d", text: "The customer identification record" },
    ],
    correctId: "c",
    explanation:
      "The **loan consent agreement** — which lets the firm lend the customer's securities to others for short sales — is **optional**. The margin (credit) and hypothecation agreements are required.",
  },
  {
    id: "options-account-approval-and-special-docs.q5",
    lessonSlug: "options-account-approval-and-special-docs",
    type: "single",
    difficulty: "easy",
    tags: ["fn:2", "options", "rop"],
    prompt:
      "Who must approve an options account before the first options trade?",
    choices: [
      { id: "a", text: "Any registered representative" },
      { id: "b", text: "A Registered Options Principal (ROP / Series 4)" },
      { id: "c", text: "The customer's attorney" },
      { id: "d", text: "FINRA staff directly" },
    ],
    correctId: "b",
    explanation:
      "A **Registered Options Principal (ROP / Series 4)** must approve the account before the first options trade. If the branch manager isn't an ROP, approval must reach one within `10 business days`.",
  },
  {
    id: "options-account-approval-and-special-docs.q6",
    lessonSlug: "options-account-approval-and-special-docs",
    type: "single",
    difficulty: "hard",
    tags: ["fn:2", "options", "scenario"],
    prompt:
      "A customer is approved for options Monday and buys 5 calls Tuesday. By day 16 the signed OAA hasn't returned. What can the customer do?",
    choices: [
      { id: "a", text: "Open new positions freely; the trade already happened" },
      { id: "b", text: "Sell the 5 calls (a closing transaction) but not open new positions" },
      { id: "c", text: "Nothing at all — the account is fully frozen" },
      { id: "d", text: "Only buy more of the same calls" },
    ],
    correctId: "b",
    explanation:
      "Past the `15 days` window with no signed OAA, the account is **closing transactions only**. The customer may **sell** (close) the 5 calls but cannot open new positions until the agreement is returned.",
  },
  {
    id: "options-account-approval-and-special-docs.q7",
    lessonSlug: "options-account-approval-and-special-docs",
    type: "single",
    difficulty: "medium",
    tags: ["fn:2", "margin", "hypothecation"],
    prompt:
      "What does the hypothecation agreement permit?",
    choices: [
      { id: "a", text: "Pledging the customer's securities as collateral, allowing the firm to rehypothecate them" },
      { id: "b", text: "Lending the customer's securities to others for short sales" },
      { id: "c", text: "Waiving the customer's right to trade confirmations" },
      { id: "d", text: "Exceeding options position limits" },
    ],
    correctId: "a",
    explanation:
      "The **hypothecation agreement** pledges the customer's securities as collateral for the margin loan and lets the firm **rehypothecate** them. Lending securities for short sales is the separate, optional **loan consent agreement**.",
  },
  {
    id: "options-account-approval-and-special-docs.q8",
    lessonSlug: "options-account-approval-and-special-docs",
    type: "single",
    difficulty: "medium",
    tags: ["fn:2", "options", "sequence"],
    prompt:
      "What is the correct sequence for opening an options account?",
    choices: [
      { id: "a", text: "Signed OAA → ROP approval → ODD delivery → first trade" },
      { id: "b", text: "ODD delivered → ROP approval → trading may begin → signed OAA within 15 days" },
      { id: "c", text: "First trade → ODD delivery → ROP approval → signed OAA" },
      { id: "d", text: "ROP approval → first trade → ODD delivery → signed OAA", feedback: "The ODD cannot come after approval. It must be delivered AT or PRIOR to approval; only the signed OAA may follow (within 15 days)." },
    ],
    correctId: "b",
    explanation:
      "The sequence is: **ODD delivered** (at/before approval) → **ROP approval** → **trading may begin** → **signed OAA within `15 days`**. Approval and the first trade can precede the signed OAA; the ODD cannot.",
  },
];
