import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "sie-series7-exam-and-registration-framework",
  title: "The SIE, the Series 7, and the Registration Framework",
  level: 4,
  moduleId: "markets-regulation",
  moduleOrder: 4,
  summary:
    "Today's licensing model splits into the SIE (fundamentals, anyone can take) plus the Series 7 'top-off,' whose 125 scored questions are weighted overwhelmingly toward Function 3.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "Modern qualification is a **two-part model**: the **SIE** (Securities Industry Essentials) covers fundamentals and **anyone may take it** — no firm sponsorship required — and the **Series 7 'top-off'** covers the General Securities Representative material. The SIE is a **corequisite**: you need both to be licensed as a General Securities Rep.",
    },
    { type: "heading", text: "The SIE exam" },
    {
      type: "list",
      items: [
        "`75` scored + `5` unscored = `80` items.",
        "`105 minutes`.",
        "`70%` passing score.",
        "**No firm sponsorship** required; it is a **corequisite** for the Series 7.",
      ],
    },
    { type: "heading", text: "The Series 7 exam" },
    {
      type: "list",
      items: [
        "`125` scored + `5` pretest = `130` items.",
        "`225 minutes` (3 hours 45 minutes).",
        "`72%` passing score.",
        "**Firm sponsorship required**; the **SIE is a corequisite**.",
        "RECENT: effective **Oct 27 2025**, the pretest count dropped from `10` to `5` (total `135`→`130`); the **time, passing score, and scored count are unchanged**.",
      ],
    },
    { type: "heading", text: "The four functions — and why Function 3 dominates" },
    {
      type: "list",
      items: [
        "**Function 1 — Seeks Business:** `9` questions, `7.2%`.",
        "**Function 2 — Opens Accounts:** `11` questions, `8.8%`.",
        "**Function 3 — Provides Information, Makes Recommendations, Maintains Records:** `91` questions, `72.8%` — the **heart** of the exam.",
        "**Function 4 — Processes & Confirms Transactions:** `14` questions, `11.2%`.",
      ],
    },
    { type: "heading", text: "Worked scenario — the pass-rate calc" },
    {
      type: "text",
      body:
        "A candidate answers **88 of 125** scored items correctly. `88 ÷ 125 = 70.4%`, which is **below `72%`** → **FAIL**. To pass you effectively need **`90/125`** (`72%`). The `5` **pretest** items don't count toward the score.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "SIE", def: "Securities Industry Essentials — 75 scored + 5 unscored = 80 items, 105 min, 70% pass; no sponsorship needed; corequisite for the Series 7." },
        { term: "Series 7 (top-off)", def: "125 scored + 5 pretest = 130 items, 225 min, 72% pass; firm sponsorship required, SIE corequisite." },
        { term: "Corequisite", def: "The SIE must be passed alongside the Series 7 top-off to license a General Securities Rep." },
        { term: "Function 3", def: "Provides information / recommendations / records — 91 questions, 72.8% of the Series 7; the dominant function." },
        { term: "Pretest items", def: "Unscored questions (5 on the current Series 7) that don't count toward the result." },
        { term: "Oct 27 2025 change", def: "Series 7 pretest items dropped from 10 to 5 (total 135→130); time, score, and scored count unchanged." },
        { term: "Passing thresholds", def: "Series 7 requires 72% (effectively 90/125); the SIE requires 70%." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'The Series 7 is one standalone exam and ~70% passes.'* No — it's a **top-off** requiring the **SIE corequisite**, and it needs **`72%`** (`90/125`), **not** `70%`. The `70%` figure is the **SIE** threshold.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Educational only, not financial or legal advice.",
    },
  ],
};
