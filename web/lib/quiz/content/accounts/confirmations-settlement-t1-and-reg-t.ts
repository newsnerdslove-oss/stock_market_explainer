import type { Question } from "@/lib/quiz/types";

// Quiz for the "Trade Confirmations, Settlement (T+1) & Reg T Payment" lesson.
export const questions: Question[] = [
  {
    id: "confirmations-settlement-t1-and-reg-t.q1",
    lessonSlug: "confirmations-settlement-t1-and-reg-t",
    type: "single",
    difficulty: "medium",
    tags: ["fn:4", "settlement", "t+1"],
    prompt:
      "Stock is bought regular way on Monday. What is the settlement date and the Reg T payment deadline?",
    choices: [
      { id: "a", text: "Settlement Wednesday (T+2); Reg T due the following Monday (T+4)", feedback: "That's the OLD T+2 regime. Since May 28, 2024, regular-way settlement is T+1 and Reg T payment is due T+3." },
      { id: "b", text: "Settlement Tuesday (T+1); Reg T due Thursday (T+3)" },
      { id: "c", text: "Settlement Monday (T+0); Reg T due Tuesday (T+1)" },
      { id: "d", text: "Settlement Thursday (T+3); Reg T due Friday (T+4)" },
    ],
    correctId: "b",
    explanation:
      "Regular-way settlement is **`T+1`** (Tuesday), and Reg T payment is due **settlement + 2 business days = `T+3`** (Thursday). The old `T+2`/`T+4` answer is no longer correct.",
  },
  {
    id: "confirmations-settlement-t1-and-reg-t.q2",
    lessonSlug: "confirmations-settlement-t1-and-reg-t",
    type: "single",
    difficulty: "medium",
    tags: ["fn:4", "confirmations", "capacity"],
    prompt:
      "What must a dealer acting as PRINCIPAL disclose on the confirmation that an agent would not?",
    choices: [
      { id: "a", text: "A commission" },
      { id: "b", text: "A markup or markdown" },
      { id: "c", text: "The customer's net worth" },
      { id: "d", text: "The branch manager's name" },
    ],
    correctId: "b",
    explanation:
      "Acting as **principal (dealer)**, the firm discloses a **markup/markdown**; acting as **agent (broker)**, it discloses a **commission**. A firm can't be both in the same trade.",
  },
  {
    id: "confirmations-settlement-t1-and-reg-t.q3",
    lessonSlug: "confirmations-settlement-t1-and-reg-t",
    type: "single",
    difficulty: "hard",
    tags: ["fn:4", "freeriding", "scenario"],
    prompt:
      "A customer in a cash account sells a position before ever paying for the purchase that funded it. What is this and what is the consequence?",
    choices: [
      { id: "a", text: "Legal arbitrage; no consequence" },
      { id: "b", text: "Freeriding; the account is frozen for 90 days and the customer must have settled cash up front before buying" },
      { id: "c", text: "Churning; the rep is fined" },
      { id: "d", text: "A Reg T extension is automatically granted" },
    ],
    correctId: "b",
    explanation:
      "Selling before paying in a cash account is **freeriding**, a Reg T violation. The firm **freezes the account for `90 days`**, during which the customer must have **settled cash up front** before any purchase.",
  },
  {
    id: "confirmations-settlement-t1-and-reg-t.q4",
    lessonSlug: "confirmations-settlement-t1-and-reg-t",
    type: "single",
    difficulty: "easy",
    tags: ["fn:4", "settlement", "t+1"],
    prompt:
      "Under the current regular-way cycle, when do listed equities and listed options settle?",
    choices: [
      { id: "a", text: "Two business days after the trade (T+2)", feedback: "T+2 was the rule before May 28, 2024. The current regular-way cycle is T+1 for equities and listed options." },
      { id: "b", text: "One business day after the trade (T+1)" },
      { id: "c", text: "Three business days after the trade (T+3)" },
      { id: "d", text: "On the trade date (T+0)" },
    ],
    correctId: "b",
    explanation:
      "Since May 28, 2024, regular-way settlement is **`T+1`** for equities, corporate/muni bonds, ETFs, listed options, and Treasuries. Cash settlement is `T+0` by agreement.",
  },
  {
    id: "confirmations-settlement-t1-and-reg-t.q5",
    lessonSlug: "confirmations-settlement-t1-and-reg-t",
    type: "single",
    difficulty: "medium",
    tags: ["fn:4", "confirmations", "rule-10b-10"],
    prompt:
      "Under `SEC Rule 10b-10`, when must a trade confirmation be sent?",
    choices: [
      { id: "a", text: "Within 15 days after the trade" },
      { id: "b", text: "At or before completion of the transaction (by settlement)" },
      { id: "c", text: "Only upon the customer's written request" },
      { id: "d", text: "Quarterly, with the account statement" },
    ],
    correctId: "b",
    explanation:
      "`SEC Rule 10b-10` requires the confirmation **at or before completion of the transaction** — by settlement — listing trade date, price, quantity, capacity, charges, CUSIP, and settlement date.",
  },
  {
    id: "confirmations-settlement-t1-and-reg-t.q6",
    lessonSlug: "confirmations-settlement-t1-and-reg-t",
    type: "single",
    difficulty: "medium",
    tags: ["fn:4", "reg-t", "settlement"],
    prompt:
      "If a customer has not paid for a regular-way purchase by the Reg T deadline, what must the firm do?",
    choices: [
      { id: "a", text: "Automatically extend payment by 30 days" },
      { id: "b", text: "Request a Reg T extension from FINRA or sell out the position" },
      { id: "c", text: "Convert the trade to a cash settlement" },
      { id: "d", text: "Report the customer to the SEC" },
    ],
    correctId: "b",
    explanation:
      "If unpaid by **`T+3`** (settlement + 2 business days), the firm must **request a Reg T extension** from FINRA or **sell out** the unpaid position.",
  },
  {
    id: "confirmations-settlement-t1-and-reg-t.q7",
    lessonSlug: "confirmations-settlement-t1-and-reg-t",
    type: "single",
    difficulty: "easy",
    tags: ["fn:4", "settlement", "cash"],
    prompt:
      "What is the settlement timing for a cash settlement trade?",
    choices: [
      { id: "a", text: "Same day — T+0 — by agreement between the parties" },
      { id: "b", text: "T+1, like regular way" },
      { id: "c", text: "T+2" },
      { id: "d", text: "T+3" },
    ],
    correctId: "a",
    explanation:
      "**Cash settlement** is **`T+0`** (same day) by agreement, faster than the regular-way `T+1` cycle.",
  },
  {
    id: "confirmations-settlement-t1-and-reg-t.q8",
    lessonSlug: "confirmations-settlement-t1-and-reg-t",
    type: "single",
    difficulty: "hard",
    tags: ["fn:4", "confirmations", "debt"],
    prompt:
      "Which item must appear on the confirmation for a debt security that is not relevant to a common stock trade?",
    choices: [
      { id: "a", text: "Yield and redemption (call) information" },
      { id: "b", text: "The CUSIP" },
      { id: "c", text: "The settlement date" },
      { id: "d", text: "The firm's capacity" },
    ],
    correctId: "a",
    explanation:
      "For **debt securities**, the confirmation must also show **yield** and **redemption (call)** information. CUSIP, settlement date, and capacity appear on every confirmation.",
  },
];
