import type { Question } from "@/lib/quiz/types";

// Quiz for the "SIPC Protection & Customer Assets" lesson.
export const questions: Question[] = [
  {
    id: "sipc-protection-and-customer-assets.q1",
    lessonSlug: "sipc-protection-and-customer-assets",
    type: "numericChoice",
    difficulty: "easy",
    tags: ["fn:3", "sipc", "limits"],
    prompt:
      "What is the maximum total SIPC protection per customer, and the sub-limit for a claim for cash?",
    choices: [
      { id: "a", text: "$500,000 total, of which up to $250,000 may be cash" },
      { id: "b", text: "$250,000 total, of which up to $500,000 may be cash", feedback: "The figures are swapped. The total is $500,000; the cash claim is the smaller sub-limit at $250,000." },
      { id: "c", text: "$500,000 total, all of which may be cash" },
      { id: "d", text: "$1,000,000 total, of which up to $250,000 may be cash" },
    ],
    correctId: "a",
    explanation:
      "SIPC protection is **`$500,000`** per customer, which **includes** a **`$250,000`** limit for a **claim for cash**. Securities can use the full `$500,000`; cash is the constrained portion.",
  },
  {
    id: "sipc-protection-and-customer-assets.q2",
    lessonSlug: "sipc-protection-and-customer-assets",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "sipc", "coverage"],
    prompt:
      "Which of the following losses would SIPC cover?",
    choices: [
      { id: "a", text: "Cash and securities missing from your account after your SIPC-member firm fails" },
      { id: "b", text: "A $20,000 drop in your stock's market value", feedback: "SIPC never covers a decline in the value of securities. It only restores assets MISSING because the firm failed." },
      { id: "c", text: "Losses on a commodity futures contract" },
      { id: "d", text: "Losses from an unsuitable recommendation by your broker" },
    ],
    correctId: "a",
    explanation:
      "SIPC protects the **custody function** — it restores cash and securities that are **missing** when a member firm fails. It does **not** cover market declines, futures, or bad advice.",
  },
  {
    id: "sipc-protection-and-customer-assets.q3",
    lessonSlug: "sipc-protection-and-customer-assets",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "sipc", "exclusions"],
    prompt:
      "Which asset is NOT protected by SIPC?",
    choices: [
      { id: "a", text: "Registered common stock held at the firm" },
      { id: "b", text: "A money market mutual fund" },
      { id: "c", text: "Commodity futures contracts and foreign exchange (FX) positions" },
      { id: "d", text: "Treasury securities held in the account" },
    ],
    correctId: "c",
    explanation:
      "SIPC does **not** cover **commodity futures**, **FX/currency**, unregistered investment contracts, fixed annuities, or unregistered crypto. Registered securities, money market funds, and Treasuries **are** covered.",
  },
  {
    id: "sipc-protection-and-customer-assets.q4",
    lessonSlug: "sipc-protection-and-customer-assets",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["fn:3", "sipc", "scenario"],
    prompt:
      "A customer's account holds $400,000 of securities and $300,000 of cash when the firm fails. How much SIPC protection applies?",
    choices: [
      { id: "a", text: "$650,000 — all $400,000 of securities plus $250,000 of the cash" },
      { id: "b", text: "$700,000 — the full balance", feedback: "The cash claim is capped at $250,000, so $50,000 of the cash is not SIPC-protected. It becomes a general creditor claim." },
      { id: "c", text: "$500,000 — the overall cap binds first", feedback: "The $500,000 total isn't the binding constraint here; the $250,000 cash sub-limit is. Securities ($400,000) plus covered cash ($250,000) totals $650,000." },
      { id: "d", text: "$250,000 — only cash is protected" },
    ],
    correctId: "a",
    explanation:
      "Securities are covered in full (**`$400,000`**), but cash is capped at **`$250,000`** — so SIPC protection reaches **`$650,000`**. The remaining **`$50,000`** of cash is a **general creditor** claim.",
  },
  {
    id: "sipc-protection-and-customer-assets.q5",
    lessonSlug: "sipc-protection-and-customer-assets",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "sipc", "liquidation"],
    prompt:
      "In a typical SIPC liquidation of a failed broker-dealer, who winds down the firm and returns customer property?",
    choices: [
      { id: "a", text: "The SEC takes direct possession of the firm" },
      { id: "b", text: "A trustee appointed by the federal court, operating under SIPC oversight" },
      { id: "c", text: "FINRA's enforcement division" },
      { id: "d", text: "The failed firm's own management completes the wind-down", feedback: "The failed firm is not left to wind itself down. The court appoints an independent trustee to take control of the books and records." },
    ],
    correctId: "b",
    explanation:
      "A SIPC liquidation runs through a **court-appointed trustee** who takes control of the firm's books and records and returns customer property under **SIPC's oversight**. (Small cases may instead use a direct payment procedure with no trustee.)",
  },
  {
    id: "sipc-protection-and-customer-assets.q6",
    lessonSlug: "sipc-protection-and-customer-assets",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "15c3-3", "segregation"],
    prompt:
      "What does SEC Rule 15c3-3 (the Customer Protection Rule) require a carrying firm to do?",
    choices: [
      { id: "a", text: "Insure every customer account against market losses" },
      { id: "b", text: "Maintain possession or control of fully-paid customer securities and keep a Special Reserve Bank Account for net customer cash" },
      { id: "c", text: "Send a SIPC claim form to every customer each quarter" },
      { id: "d", text: "Pledge customer securities to fund the firm's own borrowing" },
    ],
    correctId: "b",
    explanation:
      "`SEC Rule 15c3-3` requires the firm to keep **physical possession or control** of customers' **fully-paid and excess-margin securities** and to maintain a **Special Reserve Bank Account** equal to the net cash owed to customers — i.e., **segregation** of customer assets.",
  },
  {
    id: "sipc-protection-and-customer-assets.q7",
    lessonSlug: "sipc-protection-and-customer-assets",
    type: "single",
    difficulty: "easy",
    tags: ["fn:3", "sipc", "concept"],
    prompt:
      "Which statement about SIPC is correct?",
    choices: [
      { id: "a", text: "SIPC is a U.S. government agency, like the SEC" },
      { id: "b", text: "SIPC is a nonprofit, member-funded corporation that backstops missing customer assets when a member firm fails" },
      { id: "c", text: "SIPC guarantees a minimum rate of return on brokerage accounts" },
      { id: "d", text: "SIPC protects against losses from poor investment advice", feedback: "SIPC does not cover bad advice or unsuitable recommendations — only assets missing due to a member firm's failure." },
    ],
    correctId: "b",
    explanation:
      "SIPC is a **nonprofit, member-funded** corporation created by SIPA in 1970 — **not** a government agency. It restores **missing** customer cash and securities when a member firm fails; it does not guarantee returns or cover bad advice.",
  },
];
