import type { Question } from "@/lib/quiz/types";

// Quiz for the "Fiduciary, Suitability, and Reg BI: Who's Held to What" lesson.
export const questions: Question[] = [
  {
    id: "fiduciary-vs-suitability-vs-reg-bi.q1",
    lessonSlug: "fiduciary-vs-suitability-vs-reg-bi",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "reg-bi", "fiduciary", "standards"],
    prompt: "Match the role to its standard. A registered investment adviser (RIA) is held to which standard?",
    choices: [
      { id: "a", text: "Old suitability under Rule 2111" },
      { id: "b", text: "Reg BI best-interest standard" },
      { id: "c", text: "Fiduciary standard under the Investment Advisers Act of 1940" },
      { id: "d", text: "No standard applies to advisers", feedback: "Advisers are held to the strictest standard, not the loosest. RIAs owe a fiduciary duty across the whole relationship." },
    ],
    correctId: "c",
    explanation:
      "RIAs owe a **fiduciary** standard under the Investment Advisers Act of 1940 — duty of care plus loyalty across the entire ongoing relationship.",
  },
  {
    id: "fiduciary-vs-suitability-vs-reg-bi.q2",
    lessonSlug: "fiduciary-vs-suitability-vs-reg-bi",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "reg-bi", "dual-registrant", "scenario"],
    prompt:
      "A dual registrant executes a commission-based trade for a retail customer in a brokerage account. Which standard applies?",
    choices: [
      { id: "a", text: "The Advisers Act fiduciary standard" },
      { id: "b", text: "Reg BI" },
      { id: "c", text: "No standard, because it's a one-off trade" },
      { id: "d", text: "Rule 2111 suitability", feedback: "Rule 2111 now governs non-retail. For a retail customer in a brokerage capacity, the applicable standard is Reg BI." },
    ],
    correctId: "b",
    explanation:
      "The standard follows the capacity. Acting as a **broker** for a **retail** customer triggers **`Reg BI`**, regardless of the person's adviser registration.",
  },
  {
    id: "fiduciary-vs-suitability-vs-reg-bi.q3",
    lessonSlug: "fiduciary-vs-suitability-vs-reg-bi",
    type: "single",
    difficulty: "easy",
    tags: ["fn:3", "standards", "hierarchy"],
    prompt: "Rank these standards from loosest to strictest: Reg BI, old suitability, fiduciary.",
    choices: [
      { id: "a", text: "Fiduciary < Reg BI < old suitability" },
      { id: "b", text: "Old suitability < Reg BI < fiduciary" },
      { id: "c", text: "Reg BI < old suitability < fiduciary" },
      { id: "d", text: "All three are identical in strictness" },
    ],
    correctId: "b",
    explanation:
      "The hierarchy is **old suitability < `Reg BI` < Advisers Act fiduciary** — loosest to strictest.",
  },
  {
    id: "fiduciary-vs-suitability-vs-reg-bi.q4",
    lessonSlug: "fiduciary-vs-suitability-vs-reg-bi",
    type: "single",
    difficulty: "hard",
    tags: ["fn:3", "reg-bi", "fiduciary", "misconception"],
    prompt: "Which statement about `Reg BI` and the fiduciary standard is correct?",
    choices: [
      { id: "a", text: "Reg BI made broker-dealers general fiduciaries" },
      { id: "b", text: "Reg BI and the Advisers Act fiduciary duty are the same standard" },
      { id: "c", text: "The fiduciary duty is broader (whole relationship, loyalty + care); Reg BI is a best-interest standard tied to a retail recommendation" },
      { id: "d", text: "Reg BI is looser than old suitability", feedback: "Reg BI is stricter than old suitability, not looser. And it is distinct from — not equal to — the broader fiduciary duty." },
    ],
    correctId: "c",
    explanation:
      "`Reg BI` did not make brokers general fiduciaries. The Advisers Act fiduciary duty is broader (whole relationship, loyalty + care); `Reg BI` is a best-interest standard tied to a retail recommendation.",
  },
  {
    id: "fiduciary-vs-suitability-vs-reg-bi.q5",
    lessonSlug: "fiduciary-vs-suitability-vs-reg-bi",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "rule-2111", "standards"],
    prompt: "After June 2020, the old `Rule 2111` suitability standard governs which broker-dealer recommendations?",
    choices: [
      { id: "a", text: "Recommendations to retail customers" },
      { id: "b", text: "Recommendations to non-retail customers, such as institutions and entities" },
      { id: "c", text: "All recommendations of any kind" },
      { id: "d", text: "Only recommendations involving municipal bonds" },
    ],
    correctId: "b",
    explanation:
      "Old `Rule 2111` suitability was superseded by `Reg BI` for retail customers and now governs only **non-retail** recommendations.",
  },
  {
    id: "fiduciary-vs-suitability-vs-reg-bi.q6",
    lessonSlug: "fiduciary-vs-suitability-vs-reg-bi",
    type: "single",
    difficulty: "easy",
    tags: ["fn:3", "fiduciary", "advisers-act"],
    prompt: "The fiduciary duty owed by an RIA consists of which two component duties?",
    choices: [
      { id: "a", text: "Disclosure and compliance" },
      { id: "b", text: "Care and loyalty" },
      { id: "c", text: "Reasonable-basis and quantitative" },
      { id: "d", text: "Identity and authority" },
    ],
    correctId: "b",
    explanation:
      "The Advisers Act fiduciary duty comprises a duty of **care** and a duty of **loyalty**, applied across the entire ongoing relationship.",
  },
  {
    id: "fiduciary-vs-suitability-vs-reg-bi.q7",
    lessonSlug: "fiduciary-vs-suitability-vs-reg-bi",
    type: "single",
    difficulty: "hard",
    tags: ["fn:3", "dual-registrant", "scenario", "fiduciary"],
    prompt:
      "The same individual manages a client's account for an ongoing advisory fee and separately places an occasional commission trade. Which standards apply to each role?",
    choices: [
      { id: "a", text: "Reg BI for both roles" },
      { id: "b", text: "Fiduciary for the ongoing advisory relationship; Reg BI for the commission trade" },
      { id: "c", text: "Fiduciary for both roles" },
      { id: "d", text: "Rule 2111 for the advisory relationship; fiduciary for the trade", feedback: "It's reversed. The ongoing advisory relationship is fiduciary; the brokerage commission trade for a retail customer is Reg BI." },
    ],
    correctId: "b",
    explanation:
      "The standard follows the capacity: a **continuous fiduciary** duty governs the advisory relationship, while **`Reg BI`** governs the brokerage commission trade. Same person, two hats.",
  },
  {
    id: "fiduciary-vs-suitability-vs-reg-bi.q8",
    lessonSlug: "fiduciary-vs-suitability-vs-reg-bi",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "form-crs", "capacity"],
    prompt: "What helps a customer know whether a dual registrant is acting as an adviser or a broker?",
    choices: [
      { id: "a", text: "Form CRS, which discloses the capacity in which the firm acts" },
      { id: "b", text: "The customer's tax return" },
      { id: "c", text: "The stock's prospectus" },
      { id: "d", text: "The trade confirmation alone", feedback: "While confirmations report trades, it's Form CRS that explains the relationship and the capacity (adviser vs broker) up front." },
    ],
    correctId: "a",
    explanation:
      "`Form CRS` discloses the **capacity** in which the firm or professional is acting, helping the customer know which standard governs.",
  },
];
