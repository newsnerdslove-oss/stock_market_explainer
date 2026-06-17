import type { Question } from "@/lib/quiz/types";

// Quiz for the "Form CRS and Disclosure to Retail Investors" lesson.
export const questions: Question[] = [
  {
    id: "form-crs-disclosure-obligations.q1",
    lessonSlug: "form-crs-disclosure-obligations",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "form-crs", "disclosure"],
    prompt: "What is the page limit for `Form CRS` for a dual registrant versus a stand-alone firm?",
    choices: [
      { id: "a", text: "4 pages for a dual registrant; 2 pages for a stand-alone firm" },
      { id: "b", text: "2 pages for a dual registrant; 4 pages for a stand-alone firm" },
      { id: "c", text: "10 pages for both" },
      { id: "d", text: "No page limit applies", feedback: "Form CRS has strict limits: 2 pages stand-alone and 4 pages for a dual registrant. It is not free-form." },
    ],
    correctId: "a",
    explanation:
      "`Form CRS` is capped at **2 pages** for a stand-alone BD or RIA and **4 pages** for a **dual registrant**, in a prescribed plain-English format.",
  },
  {
    id: "form-crs-disclosure-obligations.q2",
    lessonSlug: "form-crs-disclosure-obligations",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "form-crs", "delivery", "scenario"],
    prompt: "When must `Form CRS` be delivered to a retail investor?",
    choices: [
      { id: "a", text: "Only after the first year of the relationship" },
      { id: "b", text: "At or before the earliest of a recommendation, account opening, or placing an order" },
      { id: "c", text: "Only if the customer specifically requests it" },
      { id: "d", text: "Within 30 days after the account is closed", feedback: "Delivery is an up-front trigger, not a closing event. It happens at or before the earliest of a recommendation, account opening, or first order." },
    ],
    correctId: "b",
    explanation:
      "`Form CRS` is delivered at or before the **earliest** of a recommendation, account opening, or order placement — and is also posted on the firm's website.",
  },
  {
    id: "form-crs-disclosure-obligations.q3",
    lessonSlug: "form-crs-disclosure-obligations",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "form-crs", "filing"],
    prompt: "Where does a broker-dealer file `Form CRS`, versus an investment adviser?",
    choices: [
      { id: "a", text: "BD files with the SEC; IA files with FINRA" },
      { id: "b", text: "BD files with FINRA; IA files it as Part 3 of Form ADV with the SEC" },
      { id: "c", text: "Both file only with their state regulator" },
      { id: "d", text: "Neither files it — it is delivered but never filed", feedback: "Form CRS is both delivered and filed. The BD files with FINRA; the IA files it as Form ADV Part 3 with the SEC." },
    ],
    correctId: "b",
    explanation:
      "**BDs file `Form CRS` with FINRA**; **RIAs file it as Part 3 of `Form ADV` with the SEC**.",
  },
  {
    id: "form-crs-disclosure-obligations.q4",
    lessonSlug: "form-crs-disclosure-obligations",
    type: "single",
    difficulty: "easy",
    tags: ["fn:3", "form-crs", "scope"],
    prompt: "Which firms must prepare a `Form CRS`?",
    choices: [
      { id: "a", text: "Only broker-dealers, never advisers" },
      { id: "b", text: "BDs and RIAs that serve retail investors" },
      { id: "c", text: "Only firms with institutional clients" },
      { id: "d", text: "Every firm, even those with no retail investors at all" },
    ],
    correctId: "b",
    explanation:
      "`Form CRS` is required of **BDs and RIAs that serve retail investors**. A firm with **no retail investors** need not prepare one.",
  },
  {
    id: "form-crs-disclosure-obligations.q5",
    lessonSlug: "form-crs-disclosure-obligations",
    type: "single",
    difficulty: "hard",
    tags: ["fn:3", "form-crs", "disclosure", "reg-bi"],
    prompt: "How does `Form CRS` relate to `Reg BI`'s broader Disclosure Obligation?",
    choices: [
      { id: "a", text: "Form CRS by itself fully satisfies the Disclosure Obligation" },
      { id: "b", text: "Form CRS supports but does not by itself satisfy the Disclosure Obligation" },
      { id: "c", text: "Form CRS replaces the Disclosure Obligation entirely" },
      { id: "d", text: "Form CRS has nothing to do with disclosure", feedback: "Form CRS is the front door of the disclosure regime — it supports the obligation. But additional material-fact disclosure beyond Form CRS is still required." },
    ],
    correctId: "b",
    explanation:
      "`Form CRS` **supports** disclosure but does **not by itself** discharge `Reg BI`'s full Disclosure Obligation; further disclosure of material facts is still required.",
  },
  {
    id: "form-crs-disclosure-obligations.q6",
    lessonSlug: "form-crs-disclosure-obligations",
    type: "single",
    difficulty: "easy",
    tags: ["fn:3", "form-crs", "content"],
    prompt: "Which item is required content in `Form CRS`?",
    choices: [
      { id: "a", text: "The firm's internal revenue projections" },
      { id: "b", text: "The standard of conduct, fees and costs, conflicts, and disciplinary history" },
      { id: "c", text: "A list of every security the firm has ever sold" },
      { id: "d", text: "The home addresses of all registered reps" },
    ],
    correctId: "b",
    explanation:
      "`Form CRS` must cover services, the **standard of conduct**, **fees and costs**, **conflicts of interest**, conversation-starter questions, and whether there is reportable **legal/disciplinary history**.",
  },
  {
    id: "form-crs-disclosure-obligations.q7",
    lessonSlug: "form-crs-disclosure-obligations",
    type: "single",
    difficulty: "hard",
    tags: ["fn:3", "form-crs", "scenario", "violation"],
    prompt:
      "A firm makes a perfectly suitable recommendation to a new retail customer but never delivers `Form CRS`. What is the result?",
    choices: [
      { id: "a", text: "No issue — a suitable recommendation cures the missing Form CRS" },
      { id: "b", text: "A standalone violation, because Form CRS delivery is independently required" },
      { id: "c", text: "A violation only if the customer later complains" },
      { id: "d", text: "Nothing, because Form CRS is optional", feedback: "Form CRS is mandatory, with prescribed timing. Failing to deliver it is its own violation regardless of how good the recommendation was." },
    ],
    correctId: "b",
    explanation:
      "Failing to deliver `Form CRS` is a **standalone violation**, independent of whether the recommendation was suitable.",
  },
  {
    id: "form-crs-disclosure-obligations.q8",
    lessonSlug: "form-crs-disclosure-obligations",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "form-crs", "standard-of-conduct"],
    prompt: "In `Form CRS`, what standard of conduct should a stand-alone RIA disclose?",
    choices: [
      { id: "a", text: "The Reg BI best-interest standard" },
      { id: "b", text: "The fiduciary standard" },
      { id: "c", text: "Old Rule 2111 suitability" },
      { id: "d", text: "No standard is disclosed in Form CRS", feedback: "The standard of conduct is required content. For an RIA, that disclosed standard is the fiduciary standard." },
    ],
    correctId: "b",
    explanation:
      "An RIA discloses the **fiduciary** standard in `Form CRS`, while a broker-dealer discloses the `Reg BI` best-interest standard.",
  },
];
