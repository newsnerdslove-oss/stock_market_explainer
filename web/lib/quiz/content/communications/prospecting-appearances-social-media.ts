import type { Question } from "@/lib/quiz/types";

// Quiz for "Public Appearances, Seminars & Social Media: Static vs Interactive".
// Series 7 Function 1 — every question carries the fn:1 tag.
export const questions: Question[] = [
  {
    id: "prospecting-appearances-social-media.q1",
    lessonSlug: "prospecting-appearances-social-media",
    type: "single",
    difficulty: "medium",
    tags: ["fn:1", "social-media", "classification"],
    prompt: "A rep's static social-media profile bio describing services is treated as:",
    choices: [
      { id: "a", text: "Correspondence, supervised but not pre-approved", feedback: "Interactive content is treated like correspondence; static content like a bio is a retail communication needing pre-approval." },
      { id: "b", text: "An institutional communication" },
      { id: "c", text: "A public appearance, so not approved at all" },
      { id: "d", text: "A retail communication requiring principal pre-approval" },
    ],
    correctId: "d",
    explanation:
      "**Static content** (profiles, bios, pinned posts) is generally a **retail communication** → requires **principal pre-approval**.",
  },
  {
    id: "prospecting-appearances-social-media.q2",
    lessonSlug: "prospecting-appearances-social-media",
    type: "single",
    difficulty: "medium",
    tags: ["fn:1", "social-media", "classification"],
    prompt: "Real-time replies to followers' comments are supervised like:",
    choices: [
      { id: "a", text: "Correspondence — no pre-approval required" },
      { id: "b", text: "Retail communication — pre-approval required", feedback: "Interactive, real-time content is treated like correspondence (supervised), not like a pre-approved retail communication." },
      { id: "c", text: "Institutional communication" },
      { id: "d", text: "A filed advertisement" },
    ],
    correctId: "a",
    explanation:
      "**Interactive content** (real-time posts, replies, live chats) is treated like **correspondence** — **supervised** but **not pre-approved**.",
  },
  {
    id: "prospecting-appearances-social-media.q3",
    lessonSlug: "prospecting-appearances-social-media",
    type: "single",
    difficulty: "hard",
    tags: ["fn:1", "social-media", "adoption-entanglement"],
    prompt: "A firm becomes responsible for a third-party post on its page when it:",
    choices: [
      { id: "a", text: "Merely allows it to remain visible", feedback: "Simply letting a third-party post sit there is not enough — responsibility attaches only through adoption or entanglement." },
      { id: "b", text: "Adopts (endorses/shares) it or is entangled with (helped create/paid for) it" },
      { id: "c", text: "Receives more than 25 views on it" },
      { id: "d", text: "Files it with FINRA" },
    ],
    correctId: "b",
    explanation:
      "Third-party posts become the firm's communication only via **adoption** (endorsing/sharing) or **entanglement** (helping create or paying for it).",
  },
  {
    id: "prospecting-appearances-social-media.q4",
    lessonSlug: "prospecting-appearances-social-media",
    type: "single",
    difficulty: "medium",
    tags: ["fn:1", "social-media", "adoption-entanglement"],
    prompt: "A customer posts an unsolicited rave on the firm's page, and the rep then 'shares' it. What happens?",
    choices: [
      { id: "a", text: "Nothing — it was the customer's post originally", feedback: "Sharing is adoption. Once the firm shares/endorses the post, it becomes the firm's communication." },
      { id: "b", text: "It becomes an institutional communication" },
      { id: "c", text: "The firm has adopted the post and is now responsible for it under Rule 2210" },
      { id: "d", text: "It must be deleted within 3 years" },
    ],
    correctId: "c",
    explanation:
      "Sharing is **adoption** — the firm has endorsed the content and is now **responsible** for it under `Rule 2210`.",
  },
  {
    id: "prospecting-appearances-social-media.q5",
    lessonSlug: "prospecting-appearances-social-media",
    type: "single",
    difficulty: "medium",
    tags: ["fn:1", "public-appearances", "filing"],
    prompt: "Public appearances such as seminars and live webinars are:",
    choices: [
      { id: "a", text: "Exempt from all content standards", feedback: "Public appearances must still be fair/balanced with no projections; they just are not pre-filed with FINRA." },
      { id: "b", text: "Always pre-filed 10 days before the event" },
      { id: "c", text: "Treated as institutional communications" },
      { id: "d", text: "Subject to the same content standards but not pre-filed" },
    ],
    correctId: "d",
    explanation:
      "Public appearances carry the **same content standards** (fair/balanced, no projections, disclosures) but are **not pre-filed**. The scripts/slides used are often retail communications subject to approval.",
  },
  {
    id: "prospecting-appearances-social-media.q6",
    lessonSlug: "prospecting-appearances-social-media",
    type: "single",
    difficulty: "easy",
    tags: ["fn:1", "social-media", "recordkeeping"],
    prompt: "Business communications via social media or text must be retained generally for how long?",
    choices: [
      { id: "a", text: "`3 years` under `SEA Rule 17a-4`" },
      { id: "b", text: "They need not be retained because they are informal", feedback: "Social media is fully regulated — business communications are retained generally 3 years under SEA Rule 17a-4." },
      { id: "c", text: "`30 days`" },
      { id: "d", text: "Life of the firm" },
    ],
    correctId: "a",
    explanation:
      "Business communications via social media/text are retained **generally `3 years`** under `SEA Rule 17a-4` — including business messages on personal devices.",
  },
  {
    id: "prospecting-appearances-social-media.q7",
    lessonSlug: "prospecting-appearances-social-media",
    type: "single",
    difficulty: "hard",
    tags: ["fn:1", "social-media", "adoption-entanglement"],
    prompt: "Which scenario is ENTANGLEMENT (not adoption)?",
    choices: [
      { id: "a", text: "The firm 'liked' an existing third-party post", feedback: "Liking an existing post is adoption (endorsement). Entanglement is being involved in creating or paying for the content." },
      { id: "b", text: "The firm paid a blogger to write a favorable post about it" },
      { id: "c", text: "The firm shared a customer's existing review" },
      { id: "d", text: "The firm commented favorably on someone else's post" },
    ],
    correctId: "b",
    explanation:
      "**Entanglement** means the firm **paid for, arranged, prepared, or helped create** the content. Liking, sharing, or favorable commenting on an existing post is **adoption**.",
  },
  {
    id: "prospecting-appearances-social-media.q8",
    lessonSlug: "prospecting-appearances-social-media",
    type: "single",
    difficulty: "medium",
    tags: ["fn:1", "social-media", "classification"],
    prompt: "An unsolicited customer post on the firm's page, with no firm involvement, is:",
    choices: [
      { id: "a", text: "Automatically the firm's advertising the moment it appears", feedback: "A bare third-party post is not the firm's communication — responsibility requires adoption or entanglement." },
      { id: "b", text: "A retail communication needing pre-approval" },
      { id: "c", text: "Not the firm's communication unless the firm adopts or is entangled with it" },
      { id: "d", text: "An institutional communication" },
    ],
    correctId: "c",
    explanation:
      "A third-party post is **not the firm's communication** unless the firm **adopts** or is **entangled** with it.",
  },
];
