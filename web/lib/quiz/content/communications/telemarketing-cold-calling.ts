import type { Question } from "@/lib/quiz/types";

// Quiz for "Telemarketing & Cold Calling: The 8am-9pm Window & Do-Not-Call Rules".
// Series 7 Function 1 — every question carries the fn:1 tag.
export const questions: Question[] = [
  {
    id: "telemarketing-cold-calling.q1",
    lessonSlug: "telemarketing-cold-calling",
    type: "single",
    difficulty: "easy",
    tags: ["fn:1", "telemarketing", "cold-calling"],
    prompt: "Cold calls to a residence are restricted to which window, measured in which time zone?",
    choices: [
      { id: "a", text: "`8:00 a.m.–9:00 p.m.` in the caller's local time", feedback: "This is the classic trap — the window is measured in the CALLED PARTY's local time, not the caller's." },
      { id: "b", text: "`9:00 a.m.–5:00 p.m.` in the called party's local time" },
      { id: "c", text: "`8:00 a.m.–9:00 p.m.` in the called party's local time" },
      { id: "d", text: "`8:00 a.m.–9:00 p.m.` in Eastern time for everyone" },
    ],
    correctId: "c",
    explanation:
      "Under `3230(a)(1)`, no cold calls before `8:00 a.m.` or after `9:00 p.m.` — measured in the **called party's local time**.",
  },
  {
    id: "telemarketing-cold-calling.q2",
    lessonSlug: "telemarketing-cold-calling",
    type: "single",
    difficulty: "hard",
    tags: ["fn:1", "telemarketing", "cold-calling"],
    prompt: "A rep in New York (EST) cold-calls a prospect in California (PST) at 8:30 p.m. EST. Is the call permitted?",
    choices: [
      { id: "a", text: "No — it is after 8:00 p.m. in the caller's EST zone", feedback: "The caller's zone is irrelevant. At the called party's local time it is 5:30 p.m. PST, which is within 8 a.m.–9 p.m." },
      { id: "b", text: "No — cold calls after 5:00 p.m. are always barred" },
      { id: "c", text: "Yes — but only with prior written consent" },
      { id: "d", text: "Yes — it is 5:30 p.m. PST for the called party, within the window" },
    ],
    correctId: "d",
    explanation:
      "The window uses the **called party's local time**: `8:30 p.m.` EST = `5:30 p.m.` PST, which is **within `8:00 a.m.–9:00 p.m.`** → **permitted**.",
  },
  {
    id: "telemarketing-cold-calling.q3",
    lessonSlug: "telemarketing-cold-calling",
    type: "single",
    difficulty: "medium",
    tags: ["fn:1", "telemarketing", "disclosures"],
    prompt: "At the start of a cold call, the rep must promptly state:",
    choices: [
      { id: "a", text: "Caller's name, the firm's name, and a firm phone number or address" },
      { id: "b", text: "Only the rep's name", feedback: "Name alone is not enough — the firm's name and a firm contact number/address are also required under 3230(d)(4)." },
      { id: "c", text: "The rep's CRD number and home address" },
      { id: "d", text: "Nothing until the prospect agrees to listen" },
    ],
    correctId: "a",
    explanation:
      "`3230(d)(4)` requires promptly stating the **caller's name**, the **firm's name**, and a **telephone number or address** for the firm.",
  },
  {
    id: "telemarketing-cold-calling.q4",
    lessonSlug: "telemarketing-cold-calling",
    type: "single",
    difficulty: "medium",
    tags: ["fn:1", "telemarketing", "do-not-call"],
    prompt: "The time-of-day and do-not-call restrictions do NOT apply when there is:",
    choices: [
      { id: "a", text: "Any prior phone call with the prospect", feedback: "A single past call is not enough; the exemption requires an established business relationship, written consent, or a personal relationship." },
      { id: "b", text: "An established business relationship or prior express written consent" },
      { id: "c", text: "A call placed during normal business hours only" },
      { id: "d", text: "A call to an unlisted number" },
    ],
    correctId: "b",
    explanation:
      "Exemptions include an **established business relationship** [`3230(b)(1)`], **prior express written invitation/permission** [`3230(b)(2)`], and a **personal relationship** [`3230(b)(3)`].",
  },
  {
    id: "telemarketing-cold-calling.q5",
    lessonSlug: "telemarketing-cold-calling",
    type: "single",
    difficulty: "medium",
    tags: ["fn:1", "telemarketing", "do-not-call"],
    prompt: "How current must the national do-not-call list version be before any call?",
    choices: [
      { id: "a", text: "Obtained no more than `90 days` before the call", feedback: "The registry-refresh requirement is 31 days, not 90." },
      { id: "b", text: "Updated annually is sufficient" },
      { id: "c", text: "Obtained no more than `31 days` before the call" },
      { id: "d", text: "No refresh requirement applies" },
    ],
    correctId: "c",
    explanation:
      "`3230(c)(4)` requires using a national DNC list version obtained **no more than `31 days`** before any call.",
  },
  {
    id: "telemarketing-cold-calling.q6",
    lessonSlug: "telemarketing-cold-calling",
    type: "single",
    difficulty: "easy",
    tags: ["fn:1", "telemarketing", "caller-id"],
    prompt: "Regarding caller ID on telemarketing calls, the firm must:",
    choices: [
      { id: "a", text: "Block caller ID to protect the rep's identity", feedback: "Blocking caller ID is prohibited under 3230(g); the firm must transmit it." },
      { id: "b", text: "Transmit only the rep's personal cell number" },
      { id: "c", text: "Transmit caller ID only for existing customers" },
      { id: "d", text: "Transmit caller ID; blocking it is prohibited" },
    ],
    correctId: "d",
    explanation:
      "`3230(g)` requires the firm to **transmit caller ID**; **blocking** it is **prohibited**.",
  },
  {
    id: "telemarketing-cold-calling.q7",
    lessonSlug: "telemarketing-cold-calling",
    type: "single",
    difficulty: "hard",
    tags: ["fn:1", "telemarketing", "cold-calling"],
    prompt: "A rep calls a prospect at 6:30 a.m. in the prospect's own (PST) local time. The prospect has no relationship with the firm. Permitted?",
    choices: [
      { id: "a", text: "No — it is before 8:00 a.m. in the called party's local time" },
      { id: "b", text: "Yes — 6:30 a.m. PST is 9:30 a.m. EST, within the window", feedback: "The window is the called party's local time, not the caller's. 6:30 a.m. locally is before 8:00 a.m. and prohibited." },
      { id: "c", text: "Yes — early calls are exempt" },
      { id: "d", text: "Yes — the window only restricts calls after 9:00 p.m." },
    ],
    correctId: "a",
    explanation:
      "At the called party's local time it is `6:30 a.m.`, **before `8:00 a.m.`** → **prohibited**. The window applies to both ends of the day.",
  },
  {
    id: "telemarketing-cold-calling.q8",
    lessonSlug: "telemarketing-cold-calling",
    type: "single",
    difficulty: "medium",
    tags: ["fn:1", "telemarketing", "tcpa"],
    prompt: "For autodialed or prerecorded telemarketing calls, federal TCPA/TSR rules require:",
    choices: [
      { id: "a", text: "Only that the call fall within 8 a.m.–9 p.m.", feedback: "The time window applies, but autodialed/prerecorded calls also require prior express written consent." },
      { id: "b", text: "Prior express written consent" },
      { id: "c", text: "A FINRA filing 10 days before the call" },
      { id: "d", text: "Nothing beyond a do-not-call check" },
    ],
    correctId: "b",
    explanation:
      "The **TCPA / Telemarketing Sales Rule** overlay requires **prior express written consent** for autodialed/prerecorded calls and many texts; FINRA `3230` implements these federal requirements.",
  },
];
