import type { Question } from "@/lib/quiz/types";

// Quiz for the "Clearing & Settlement" lesson.
export const questions: Question[] = [
  {
    id: "clearing-and-settlement.q1",
    lessonSlug: "clearing-and-settlement",
    type: "single",
    difficulty: "easy",
    tags: ["market-structure", "settlement"],
    prompt: "As of 2026, the standard US equity **settlement cycle** is…",
    choices: [
      { id: "a", text: "T+2", feedback: "T+2 was the old cycle — the US moved to T+1 on May 28, 2024." },
      { id: "b", text: "T+1" },
      { id: "c", text: "T+0 (instant)" },
      { id: "d", text: "T+3" },
    ],
    correctId: "b",
    explanation:
      "Since **May 28, 2024**, US equities settle **T+1** — one business day after the trade date, down from the previous T+2.",
  },
  {
    id: "clearing-and-settlement.q2",
    lessonSlug: "clearing-and-settlement",
    type: "single",
    difficulty: "easy",
    tags: ["market-structure", "clearing"],
    prompt: "**Settlement** is best described as…",
    choices: [
      { id: "a", text: "The instant the buyer and seller agree on price" },
      { id: "b", text: "The final transfer of shares to the buyer and cash to the seller" },
      { id: "c", text: "The broker confirming your order was received" },
      { id: "d", text: "The exchange publishing the NBBO" },
    ],
    correctId: "b",
    explanation:
      "**Settlement** is the final transfer: shares to the buyer, cash to the seller. The price *match* is execution; settlement is the actual exchange that follows.",
  },
  {
    id: "clearing-and-settlement.q3",
    lessonSlug: "clearing-and-settlement",
    type: "single",
    difficulty: "easy",
    tags: ["market-structure", "dtc"],
    prompt: "**DTC** moves securities ownership by…",
    choices: [
      { id: "a", text: "Mailing paper share certificates" },
      { id: "b", text: "Electronic book entry" },
      { id: "c", text: "Wire transfer of physical gold" },
      { id: "d", text: "Updating the exchange's quote feed" },
    ],
    correctId: "b",
    explanation:
      "**DTC**, the depository, holds securities and moves ownership by **book entry** — electronic records, no paper certificates changing hands.",
  },
  {
    id: "clearing-and-settlement.q4",
    lessonSlug: "clearing-and-settlement",
    type: "single",
    difficulty: "medium",
    tags: ["market-structure", "execution"],
    prompt: "Why is **execution** not the same as **settlement**?",
    choices: [
      { id: "a", text: "They are the same thing with different names" },
      { id: "b", text: "Execution is the instant match; settlement is the later exchange of shares and cash" },
      { id: "c", text: "Execution happens only after settlement" },
      { id: "d", text: "Settlement is faster than execution" },
    ],
    correctId: "b",
    explanation:
      "**Execution** matches buyer and seller in milliseconds. **Settlement** is the actual delivery of shares and cash, which finalizes later — on T+1.",
  },
  {
    id: "clearing-and-settlement.q5",
    lessonSlug: "clearing-and-settlement",
    type: "single",
    difficulty: "medium",
    tags: ["market-structure", "nscc", "ccp"],
    prompt: "Acting as a **central counterparty (CCP)**, **NSCC**…",
    choices: [
      { id: "a", text: "Sets the price of every trade" },
      { id: "b", text: "Becomes buyer to every seller and seller to every buyer, guaranteeing settlement" },
      { id: "c", text: "Holds your cash for spending" },
      { id: "d", text: "Publishes company earnings" },
    ],
    correctId: "b",
    explanation:
      "As a **CCP**, **NSCC** steps into the middle — buyer to every seller, seller to every buyer — so each side faces NSCC, not an unknown counterparty, guaranteeing the trade completes.",
  },
  {
    id: "clearing-and-settlement.q6",
    lessonSlug: "clearing-and-settlement",
    type: "single",
    difficulty: "medium",
    tags: ["market-structure", "settlement", "scenario"],
    prompt:
      "You buy shares on a **Friday** (a normal trading week, no holidays). Under T+1, when does the trade **settle**?",
    choices: [
      { id: "a", text: "Saturday" },
      { id: "b", text: "The same Friday" },
      { id: "c", text: "Monday (the next business day)" },
      { id: "d", text: "The following Friday" },
    ],
    correctId: "c",
    explanation:
      "Settlement counts **business** days. A Friday trade settles the next business day — **Monday** — since the weekend isn't counted.",
  },
  {
    id: "clearing-and-settlement.q7",
    lessonSlug: "clearing-and-settlement",
    type: "single",
    difficulty: "medium",
    tags: ["market-structure", "clearing"],
    prompt: "**Clearing** (the step between execution and settlement) involves…",
    choices: [
      { id: "a", text: "Confirming, matching, and netting trades plus managing counterparty risk" },
      { id: "b", text: "Setting the company's dividend" },
      { id: "c", text: "Listing the stock on a new exchange" },
      { id: "d", text: "Choosing which broker fills the order" },
    ],
    correctId: "a",
    explanation:
      "**Clearing** is the post-trade work: confirm and match the trade, **net** offsetting positions, and manage counterparty risk — readying it for settlement.",
  },
  {
    id: "clearing-and-settlement.q8",
    lessonSlug: "clearing-and-settlement",
    type: "single",
    difficulty: "hard",
    tags: ["market-structure", "netting"],
    prompt: "The main purpose of **netting** during clearing is to…",
    choices: [
      { id: "a", text: "Increase the number of trades that must settle" },
      { id: "b", text: "Reduce the total securities and cash that actually have to change hands" },
      { id: "c", text: "Guarantee a profit on every trade" },
      { id: "d", text: "Delay settlement indefinitely" },
    ],
    correctId: "b",
    explanation:
      "**Netting** offsets a member's buys against its sells per security, leaving one net figure to move. That sharply **reduces the total securities and cash** that have to change hands.",
  },
  {
    id: "clearing-and-settlement.q9",
    lessonSlug: "clearing-and-settlement",
    type: "single",
    difficulty: "hard",
    tags: ["market-structure", "ownership", "scenario"],
    prompt:
      "Your buy order **fills** at 11:00 Monday. Which statement is most accurate about that moment?",
    choices: [
      { id: "a", text: "You instantly own the shares free and clear" },
      { id: "b", text: "You have the obligation now, but legal transfer finalizes at settlement (T+1)" },
      { id: "c", text: "Nothing is binding until you log in again" },
      { id: "d", text: "The shares settle the same second the order fills" },
    ],
    correctId: "b",
    explanation:
      "At execution you take on the **obligation**, but the legal transfer of shares and cash isn't final until **settlement on T+1**. Owning *free and clear* comes after settlement, not at the fill.",
  },
];
