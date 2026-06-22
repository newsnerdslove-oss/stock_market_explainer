import type { Question } from "@/lib/quiz/types";

// Quiz for the "Books, Records, Statements & Account Transfers (ACATS)" lesson.
export const questions: Question[] = [
  {
    id: "books-records-statements-and-acats.q1",
    lessonSlug: "books-records-statements-and-acats",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "recordkeeping", "retention"],
    prompt:
      "What is the retention period for (a) order tickets and (b) customer account records?",
    choices: [
      { id: "a", text: "(a) 6 years; (b) 3 years" },
      { id: "b", text: "(a) 3 years; (b) 6 years" },
      { id: "c", text: "(a) 3 years; (b) 3 years" },
      { id: "d", text: "(a) lifetime; (b) 6 years", feedback: "Order tickets are not lifetime records. They are 3-year records (first 2 years easily accessible); customer account records are 6-year." },
    ],
    correctId: "b",
    explanation:
      "**Order tickets** are **`3-year`** records (first 2 years easily accessible). **Customer account records** are **`6-year`** records, alongside blotters, ledgers, and the stock record.",
  },
  {
    id: "books-records-statements-and-acats.q2",
    lessonSlug: "books-records-statements-and-acats",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "acats", "transfers"],
    prompt:
      "After a valid TIF, how many business days does the carrying firm have to validate, and then how many to complete the transfer?",
    choices: [
      { id: "a", text: "1 day to validate; 3 days to complete" },
      { id: "b", text: "3 days to validate; 1 day to complete", feedback: "The order is reversed. Validation is the quick step — 1 business day — and completion follows within 3 business days." },
      { id: "c", text: "5 days to validate; 5 days to complete" },
      { id: "d", text: "1 day to validate; 1 day to complete" },
    ],
    correctId: "a",
    explanation:
      "Under ACATS (`FINRA Rule 11870`), the carrying firm has **`1 business day`** to validate the TIF (or take exception), then **`3 business days`** to complete the transfer — about `4–6 business days` end to end.",
  },
  {
    id: "books-records-statements-and-acats.q3",
    lessonSlug: "books-records-statements-and-acats",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "statements", "rule-2231"],
    prompt:
      "How often must customer account statements be sent under FINRA Rule 2231?",
    choices: [
      { id: "a", text: "At least once every calendar quarter" },
      { id: "b", text: "Monthly whenever there was account activity", feedback: "A common myth — FINRA proposed a monthly-on-activity requirement but did not adopt it. Rule 2231 only mandates quarterly." },
      { id: "c", text: "Monthly for every account" },
      { id: "d", text: "Only once a year" },
    ],
    correctId: "a",
    explanation:
      "`FINRA Rule 2231` requires a statement **at least once every calendar quarter** for any account with a position, money balance, or activity. There is **no** monthly-on-activity mandate.",
  },
  {
    id: "books-records-statements-and-acats.q4",
    lessonSlug: "books-records-statements-and-acats",
    type: "single",
    difficulty: "hard",
    tags: ["fn:3", "statements", "scenario"],
    prompt:
      "An account had two trades in March; a different account had no activity and only a cash balance. What statements does FINRA Rule 2231 require?",
    choices: [
      { id: "a", text: "Both get at least a quarterly statement" },
      { id: "b", text: "The traded account gets a March monthly statement; the dormant account gets just the quarterly statement", feedback: "This reflects the monthly-on-activity myth — Rule 2231 has no monthly trigger, so both accounts get at least the quarterly statement." },
      { id: "c", text: "Both get monthly statements regardless of activity" },
      { id: "d", text: "Neither gets a statement until year-end" },
    ],
    correctId: "a",
    explanation:
      "Under `FINRA Rule 2231` both accounts receive **at least a quarterly** statement — the traded account because of its activity, the other because of its money balance. Activity does **not** trigger a mandatory monthly statement.",
  },
  {
    id: "books-records-statements-and-acats.q5",
    lessonSlug: "books-records-statements-and-acats",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "recordkeeping", "retention"],
    prompt:
      "Which records must be retained for the lifetime of the firm?",
    choices: [
      { id: "a", text: "Order tickets and trade confirmations" },
      { id: "b", text: "Corporate/partnership formation documents, stock certificate books, and minute books" },
      { id: "c", text: "Customer complaints and advertising" },
      { id: "d", text: "Blotters and general ledgers" },
    ],
    correctId: "b",
    explanation:
      "**Lifetime** records are the firm's **formation documents**, **stock certificate books**, and **minute books**. Blotters and ledgers are `6-year`; order tickets and confirmations are `3-year`.",
  },
  {
    id: "books-records-statements-and-acats.q6",
    lessonSlug: "books-records-statements-and-acats",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "proxies", "voting"],
    prompt:
      "For securities held in street name, how may the broker vote uninstructed shares?",
    choices: [
      { id: "a", text: "On any matter, routine or contested" },
      { id: "b", text: "Only on routine matters, never on contested/non-routine matters" },
      { id: "c", text: "Only on contested matters" },
      { id: "d", text: "The broker may never vote uninstructed shares" },
    ],
    correctId: "b",
    explanation:
      "The broker forwards proxies to beneficial owners and may vote **uninstructed** shares only on **routine** matters — **never** on **contested or non-routine** matters.",
  },
  {
    id: "books-records-statements-and-acats.q7",
    lessonSlug: "books-records-statements-and-acats",
    type: "single",
    difficulty: "easy",
    tags: ["fn:3", "recordkeeping", "rules"],
    prompt:
      "Which SEC rule specifies how long records must be retained?",
    choices: [
      { id: "a", text: "SEC Rule 17a-3 (which records must be created)", feedback: "17a-3 covers creation of records. The retention periods are set by SEC Rule 17a-4." },
      { id: "b", text: "SEC Rule 17a-4" },
      { id: "c", text: "SEC Rule 10b-10" },
      { id: "d", text: "FINRA Rule 2231" },
    ],
    correctId: "b",
    explanation:
      "`SEC Rule 17a-4` sets **retention** periods; `SEC Rule 17a-3` specifies which records must be **created**.",
  },
  {
    id: "books-records-statements-and-acats.q8",
    lessonSlug: "books-records-statements-and-acats",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "acats", "transfers"],
    prompt:
      "What does the carrying firm do first when it receives a signed Transfer Initiation Form (TIF)?",
    choices: [
      { id: "a", text: "Immediately liquidate all positions" },
      { id: "b", text: "Validate the transfer (or take exception/reject) within 1 business day" },
      { id: "c", text: "Wait 5 business days before any action" },
      { id: "d", text: "Forward the form to the SEC for approval" },
    ],
    correctId: "b",
    explanation:
      "On a signed TIF, the carrying firm has **`1 business day`** to **validate** the transfer or take exception. Once validated, it must complete the transfer within **`3 business days`**.",
  },
];
