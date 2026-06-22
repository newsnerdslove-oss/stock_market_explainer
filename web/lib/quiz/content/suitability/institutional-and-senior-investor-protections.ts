import type { Question } from "@/lib/quiz/types";

// Quiz for the "Institutional Suitability & Senior-Investor Protection" lesson.
export const questions: Question[] = [
  {
    id: "institutional-and-senior-investor-protections.q1",
    lessonSlug: "institutional-and-senior-investor-protections",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "suitability", "rule-2111b", "institutional"],
    prompt:
      "Under `Rule 2111(b)`, the institutional-customer exemption excuses a firm from which obligation?",
    choices: [
      { id: "a", text: "Reasonable-basis suitability" },
      { id: "b", text: "Quantitative suitability" },
      { id: "c", text: "Customer-specific suitability" },
      { id: "d", text: "All three suitability obligations", feedback: "The exemption is narrow. Reasonable-basis and quantitative suitability still apply — only the customer-specific obligation is waived." },
    ],
    correctId: "c",
    explanation:
      "`Rule 2111(b)` waives **only customer-specific** suitability for qualifying institutional customers. The firm still owes **reasonable-basis** and **quantitative** suitability.",
  },
  {
    id: "institutional-and-senior-investor-protections.q2",
    lessonSlug: "institutional-and-senior-investor-protections",
    type: "single",
    difficulty: "hard",
    tags: ["fn:3", "rule-2111b", "institutional", "conditions"],
    prompt:
      "Which is a required condition for the `Rule 2111(b)` institutional exemption to apply?",
    choices: [
      { id: "a", text: "The customer affirmatively indicates it is exercising independent judgment in evaluating the firm's recommendations" },
      { id: "b", text: "The customer signs a waiver of all FINRA rules", feedback: "No such blanket waiver exists. The customer must affirmatively indicate it is exercising independent judgment — not waive every rule." },
      { id: "c", text: "The account has been open for at least five years" },
      { id: "d", text: "The firm charges a flat advisory fee" },
    ],
    correctId: "a",
    explanation:
      "The three conditions are: an institutional account under `Rule 4512(c)`, the firm's reasonable belief the customer can evaluate risk independently, and the customer's **affirmative indication** that it is exercising independent judgment.",
  },
  {
    id: "institutional-and-senior-investor-protections.q3",
    lessonSlug: "institutional-and-senior-investor-protections",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "rule-4512c", "institutional-account"],
    prompt:
      "Under `Rule 4512(c)`, what asset threshold lets an entity that isn't a bank, insurer, or registered fund/adviser qualify as an institutional account?",
    choices: [
      { id: "a", text: "Total assets of at least $1 million" },
      { id: "b", text: "Total assets of at least $10 million" },
      { id: "c", text: "Total assets of at least $25 million" },
      { id: "d", text: "Total assets of at least $50 million" },
    ],
    correctId: "d",
    explanation:
      "`Rule 4512(c)` includes any other person or entity with **total assets of at least `$50 million`**, alongside banks, S&Ls, insurance companies, registered investment companies, and registered investment advisers.",
  },
  {
    id: "institutional-and-senior-investor-protections.q4",
    lessonSlug: "institutional-and-senior-investor-protections",
    type: "single",
    difficulty: "easy",
    tags: ["fn:3", "rule-2165", "specified-adult"],
    prompt:
      "Who is a 'Specified Adult' under `Rule 2165`?",
    choices: [
      { id: "a", text: "Only a person age 70 or older" },
      { id: "b", text: "A person age 65 or older, or age 18+ with a mental or physical impairment preventing self-protection" },
      { id: "c", text: "Any account holder, regardless of age or condition" },
      { id: "d", text: "Only a person legally declared incompetent by a court", feedback: "No court declaration is needed. A Specified Adult is anyone 65+, or 18+ whom the firm reasonably believes has an impairment preventing self-protection." },
    ],
    correctId: "b",
    explanation:
      "A **Specified Adult** is a natural person **age `65` or older**, OR **age `18`+** whom the firm reasonably believes has a **mental or physical impairment** that renders them unable to protect their own interests.",
  },
  {
    id: "institutional-and-senior-investor-protections.q5",
    lessonSlug: "institutional-and-senior-investor-protections",
    type: "single",
    difficulty: "hard",
    tags: ["fn:3", "rule-2165", "temporary-hold", "timeline"],
    prompt:
      "A firm places a `Rule 2165` temporary hold and its internal review supports a reasonable belief of exploitation, but it has not reported the matter to any outside authority. What is the maximum length of the hold?",
    choices: [
      { id: "a", text: "15 business days" },
      { id: "b", text: "25 business days" },
      { id: "c", text: "55 business days" },
      { id: "d", text: "90 business days", feedback: "There is no 90-day option. Without an outside report, the hold tops out at 25 business days — 15 initial plus the 10-day internal-review extension." },
    ],
    correctId: "b",
    explanation:
      "The hold runs **15** business days initially and may extend **10** more on internal review — a maximum of **`25`**. The further 30-day extension (to 55) requires **reporting** to a regulator, agency, or court.",
  },
  {
    id: "institutional-and-senior-investor-protections.q6",
    lessonSlug: "institutional-and-senior-investor-protections",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "rule-4512", "trusted-contact"],
    prompt:
      "Under `Rule 4512`, what must a firm do about a trusted contact person when opening a non-institutional account?",
    choices: [
      { id: "a", text: "Refuse to open the account unless a trusted contact is provided", feedback: "The opposite is true. The customer's failure to provide a trusted contact does not prevent the firm from opening or maintaining the account." },
      { id: "b", text: "Appoint the trusted contact as a co-owner of the account" },
      { id: "c", text: "Make reasonable efforts to obtain a trusted contact age 18 or older" },
      { id: "d", text: "Obtain a trusted contact only for customers over age 65" },
    ],
    correctId: "c",
    explanation:
      "`Rule 4512` requires the firm to make **reasonable efforts** to obtain a trusted contact person **age `18` or older**. The customer's refusal does not block opening or maintaining the account — the firm only has to try.",
  },
  {
    id: "institutional-and-senior-investor-protections.q7",
    lessonSlug: "institutional-and-senior-investor-protections",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "rule-2165", "scenario"],
    prompt:
      "An 82-year-old client demands an urgent wire to a stranger's overseas account after weeks of suspicious calls. Which tool lets the firm pause the disbursement while it investigates?",
    choices: [
      { id: "a", text: "A temporary hold under `Rule 2165`" },
      { id: "b", text: "The institutional exemption under `Rule 2111(b)`", feedback: "Rule 2111(b) is about sophisticated institutions, not seniors. A retail Specified Adult is protected by the Rule 2165 temporary hold instead." },
      { id: "c", text: "A quantitative-suitability review under `Rule 2111`" },
      { id: "d", text: "Closing the account immediately" },
    ],
    correctId: "a",
    explanation:
      "She is a **Specified Adult** and the firm reasonably suspects exploitation, so `Rule 2165` permits a **temporary hold** on the disbursement while the firm investigates and contacts her trusted contact.",
  },
];
