import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "prospecting-appearances-social-media",
  title: "Public Appearances, Seminars & Social Media: Static vs Interactive",
  level: 4,
  moduleId: "markets-communications",
  moduleOrder: 6,
  summary:
    "Live appearances and digital channels get classified like any communication — and the static/interactive split plus adoption/entanglement decide who owns third-party content.",
  estMinutes: 8,
  sections: [
    {
      type: "text",
      body:
        "Seminars, interviews, and social media are **not exempt** from `Rule 2210` — they get **classified like any other communication**. Two ideas do most of the work: the **static vs. interactive** split, and **adoption vs. entanglement** for third-party content.",
    },
    { type: "heading", text: "Public appearances" },
    {
      type: "text",
      body:
        "**Public appearances** (seminars, interviews, live webinars) carry the **same content standards** — fair/balanced, no projections, required disclosures — but they are **not pre-filed**. The **scripts and slides** used are often **retail communications** subject to **principal approval**.",
    },
    { type: "heading", text: "Static vs. interactive social media" },
    {
      type: "list",
      items: [
        "**Static content** (profiles, bios, pinned posts, background info) = generally a **retail communication** → requires **principal pre-approval**.",
        "**Interactive content** (real-time posts, comment replies, live chats) = treated like **correspondence** → must be **supervised** but **not pre-approved**.",
      ],
    },
    { type: "heading", text: "Third-party posts: adoption & entanglement" },
    {
      type: "text",
      body:
        "Third-party posts on a firm's site are **not the firm's communication** — **unless** the firm has:",
    },
    {
      type: "list",
      items: [
        "**Entanglement** — the firm **paid for, arranged, prepared, or was otherwise involved** in creating the content.",
        "**Adoption** — the firm **explicitly or implicitly endorsed or approved** it (e.g., 'liking,' sharing, or commenting favorably).",
      ],
    },
    {
      type: "text",
      body:
        "Once either applies, the firm becomes **responsible** for the post under `Rule 2210`. **Business communications** via social media or text must be **retained** (generally **`3 years`**) under `SEA Rule 17a-4` — **business messages on personal devices included**.",
    },
    { type: "heading", text: "Worked scenario — a rep's LinkedIn" },
    {
      type: "list",
      items: [
        "The rep's **'About' section** describing services = **static** → **retail communication**, needs **principal pre-approval**.",
        "The rep **replies live** to a follower's comment = **interactive** → **supervised like correspondence** (no pre-approval).",
        "A customer posts an unsolicited rave on the firm's page → **not the firm's communication** — until the rep **'shares'** it, at which point the firm has **adopted** it and is **responsible**.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Public appearance", def: "Seminar/interview/live webinar; same content standards apply but not pre-filed." },
        { term: "Static content", def: "Profiles, bios, pinned posts — generally a retail communication requiring principal pre-approval." },
        { term: "Interactive content", def: "Real-time posts/replies/chats — supervised like correspondence, no pre-approval." },
        { term: "Entanglement", def: "Firm paid for, arranged, prepared, or helped create third-party content → firm is responsible." },
        { term: "Adoption", def: "Firm endorsed/approved (liked, shared, commented favorably on) third-party content → firm is responsible." },
        { term: "Third-party post", def: "A customer/outsider post that is not the firm's communication unless adopted or entangled." },
        { term: "Social-media retention", def: "Business communications via social media/text kept generally 3 years under SEA Rule 17a-4." },
        { term: "Personal-device messages", def: "Business communications on personal devices are still subject to retention." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'Anything customers post on our page is our advertising,'* or *'social media is too informal to be regulated.'* Third-party posts are the firm's **only** via **adoption or entanglement**, and **all firm digital communications** are fully subject to `Rule 2210` and **`3-year` retention**.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Educational only, not financial or legal advice.",
    },
  ],
};
