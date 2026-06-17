import type { Question } from "@/lib/quiz/types";

// Quiz for the "Settlement & Delivery Edge Cases" lesson.
export const questions: Question[] = [
  {
    id: "settlement-delivery-edge-cases-and-ex-date.q1",
    lessonSlug: "settlement-delivery-edge-cases-and-ex-date",
    type: "single",
    difficulty: "hard",
    tags: ["fn:4", "ex-date", "t+1"],
    prompt:
      "A dividend has a record date of Thursday. Under T+1, what is the ex-date and the last day to buy to still receive the dividend?",
    choices: [
      { id: "a", text: "Ex-date Wednesday; buy by Tuesday", feedback: "That's the OLD T+2 answer (ex-date one business day before record). Under T+1 the ex-date equals the record date (Thursday)." },
      { id: "b", text: "Ex-date Thursday (same day as record); buy by Wednesday" },
      { id: "c", text: "Ex-date Friday; buy by Thursday" },
      { id: "d", text: "Ex-date Thursday; buy by Thursday" },
    ],
    correctId: "b",
    explanation:
      "Under `T+1`, the **ex-date equals the record date** — Thursday. To receive the dividend you must buy **before** the ex-date: by **Wednesday**, which settles Thursday (the record date).",
  },
  {
    id: "settlement-delivery-edge-cases-and-ex-date.q2",
    lessonSlug: "settlement-delivery-edge-cases-and-ex-date",
    type: "single",
    difficulty: "medium",
    tags: ["fn:4", "dk", "delivery"],
    prompt:
      "A firm receives stock it has no buy order or record for. What does it send?",
    choices: [
      { id: "a", text: "A reclamation notice" },
      { id: "b", text: "A DK ('don't know') notice" },
      { id: "c", text: "A when-issued confirmation" },
      { id: "d", text: "A Reg T extension request" },
    ],
    correctId: "b",
    explanation:
      "When a firm receives a delivery/comparison it has **no record of**, it sends a **DK ('don't know') notice** under the Uniform Practice Code (`11200` series) to question the trade and ask the contra firm to verify terms.",
  },
  {
    id: "settlement-delivery-edge-cases-and-ex-date.q3",
    lessonSlug: "settlement-delivery-edge-cases-and-ex-date",
    type: "single",
    difficulty: "medium",
    tags: ["fn:4", "reclamation", "delivery"],
    prompt:
      "Improperly delivered securities are discovered after settlement. What right does the receiving firm have?",
    choices: [
      { id: "a", text: "Reclamation — return them and recover payment" },
      { id: "b", text: "Freeriding — freeze the account 90 days" },
      { id: "c", text: "DK — refuse the original comparison" },
      { id: "d", text: "Rehypothecation — pledge them as collateral" },
    ],
    correctId: "a",
    explanation:
      "**Reclamation** is the right to **return** improperly delivered securities and **recover payment** after settlement when delivery wasn't in good form.",
  },
  {
    id: "settlement-delivery-edge-cases-and-ex-date.q4",
    lessonSlug: "settlement-delivery-edge-cases-and-ex-date",
    type: "single",
    difficulty: "medium",
    tags: ["fn:4", "ex-date", "t+1"],
    prompt:
      "Under T+1, what is the general relationship between the ex-dividend date and the record date?",
    choices: [
      { id: "a", text: "The ex-date is one business day before the record date", feedback: "That was the T+2 rule. Since May 2024, under T+1 the ex-date is the SAME business day as the record date." },
      { id: "b", text: "The ex-date is the same business day as the record date" },
      { id: "c", text: "The ex-date is one business day after the record date" },
      { id: "d", text: "The ex-date is two business days before the record date" },
    ],
    correctId: "b",
    explanation:
      "Under `T+1`, the **ex-dividend date is generally the same business day as the record date** (when the record date is a business day). Buying on the record date no longer earns the dividend.",
  },
  {
    id: "settlement-delivery-edge-cases-and-ex-date.q5",
    lessonSlug: "settlement-delivery-edge-cases-and-ex-date",
    type: "single",
    difficulty: "medium",
    tags: ["fn:4", "good-delivery", "delivery"],
    prompt:
      "Which describes good delivery of securities?",
    choices: [
      { id: "a", text: "Any quantity, regardless of endorsement, as long as it is on time" },
      { id: "b", text: "Transferable form with proper endorsement, in deliverable units (multiples of 100), with required documents" },
      { id: "c", text: "Delivery only of odd lots" },
      { id: "d", text: "Delivery in unsigned, non-transferable form" },
    ],
    correctId: "b",
    explanation:
      "**Good delivery** requires **transferable form** — proper endorsement/assignment, **deliverable units** (round-lot multiples of 100 or units adding to 100), and required documents. Non-conforming delivery is rejected.",
  },
  {
    id: "settlement-delivery-edge-cases-and-ex-date.q6",
    lessonSlug: "settlement-delivery-edge-cases-and-ex-date",
    type: "single",
    difficulty: "hard",
    tags: ["fn:4", "when-issued", "settlement"],
    prompt:
      "How does a when-issued (WI) trade settle?",
    choices: [
      { id: "a", text: "Standard T+1, like any regular-way trade", feedback: "WI trades are the exception. They settle on a special date set by the clearing corporation/UPC once the security is issued — not standard T+1." },
      { id: "b", text: "On a special date set by the clearing corporation/UPC once the security is issued" },
      { id: "c", text: "Same day (T+0) always" },
      { id: "d", text: "It never settles" },
    ],
    correctId: "b",
    explanation:
      "**When-issued** trades involve securities authorized but **not yet issued**; they settle on a **special date** set by the clearing corporation/UPC once issued. Confirmations are marked **'WI'**.",
  },
  {
    id: "settlement-delivery-edge-cases-and-ex-date.q7",
    lessonSlug: "settlement-delivery-edge-cases-and-ex-date",
    type: "single",
    difficulty: "hard",
    tags: ["fn:4", "accrued-interest", "bonds"],
    prompt:
      "On a regular-way corporate bond trade, accrued interest is paid by the buyer to the seller for what period, and on what day-count?",
    choices: [
      { id: "a", text: "From the last coupon date up to but not including settlement, on a 30/360 basis" },
      { id: "b", text: "From settlement to maturity, on an actual/actual basis" },
      { id: "c", text: "From the trade date to the record date, on a 30/365 basis" },
      { id: "d", text: "There is no accrued interest on corporate bonds" },
    ],
    correctId: "a",
    explanation:
      "The buyer pays the seller accrued interest from the **last coupon date up to but NOT including settlement**, computed **30/360** for corporate/muni bonds (governments use actual/actual). T+1 shifts the cutoff one day earlier than under T+2.",
  },
  {
    id: "settlement-delivery-edge-cases-and-ex-date.q8",
    lessonSlug: "settlement-delivery-edge-cases-and-ex-date",
    type: "single",
    difficulty: "hard",
    tags: ["fn:4", "ex-date", "scenario"],
    prompt:
      "A dividend has a record date of Wednesday. Under T+1, when is the last day an investor can buy the stock regular way and still receive the dividend?",
    choices: [
      { id: "a", text: "Wednesday (the record date)", feedback: "Buying on the record date is too late under T+1 — that's the ex-date. The trade wouldn't settle by the record date." },
      { id: "b", text: "Tuesday — the trade settles Wednesday, the record date" },
      { id: "c", text: "Thursday" },
      { id: "d", text: "Monday" },
    ],
    correctId: "b",
    explanation:
      "Under `T+1`, the ex-date equals the record date (Wednesday). The last day to buy and receive the dividend is **Tuesday**, because a Tuesday regular-way purchase settles **Wednesday** — the record date.",
  },
];
