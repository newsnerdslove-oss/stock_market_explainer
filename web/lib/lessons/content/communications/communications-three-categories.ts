import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "communications-three-categories",
  title: "Communications With the Public: Retail, Correspondence & Institutional",
  level: 4,
  moduleId: "markets-communications",
  moduleOrder: 1,
  summary:
    "FINRA Rule 2210 sorts every public communication into one of three buckets — and the line between correspondence and retail communication is a simple headcount.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "`Rule 2210` governs **all communications with the public** and defines **three categories**. Knowing which bucket a piece falls into decides how it must be approved, filed, and kept — so the category is the first question on every communications item.",
    },
    { type: "heading", text: "The three categories" },
    {
      type: "list",
      items: [
        "**Correspondence** [`2210(a)(2)`] — any written (including electronic) communication distributed or made available to **`25` or fewer retail investors** within any **`30` calendar-day period**.",
        "**Retail communication** [`2210(a)(5)`] — distributed to **more than `25` retail investors** within any **`30` calendar-day period**. This is the **highest degree of regulation**.",
        "**Institutional communication** [`2210(a)(3)`] — distributed **only to institutional investors**; **excludes** a member's internal communications.",
      ],
    },
    { type: "heading", text: "Who counts as retail vs. institutional" },
    {
      type: "text",
      body:
        "A **retail investor** is **any person other than an institutional investor** — whether or not they have an account with the firm. An **institutional investor** [`2210(a)(4)`] tracks the `Rule 4512(c)` definition: banks, insurance companies, registered investment companies, registered investment advisers, and large entities; governmental entities; **employee-benefit or qualified plans with `100` or more participants**; and FINRA members and their registered persons.",
    },
    {
      type: "text",
      body:
        "The threshold counts **recipients across a rolling `30`-day window**, not per message. Send the same piece to a few people each day and the counts **accumulate** — once you pass `25` retail investors in any `30`-day span, the whole effort is a **retail communication**.",
    },
    { type: "heading", text: "Worked scenario — the headcount decides" },
    {
      type: "list",
      items: [
        "Same market commentary emailed to **`30` retail prospects** over two weeks → exceeds `25` in `30` days → **retail communication** (needs principal pre-approval).",
        "Same email to only **`20` prospects** in the window → stays at or under `25` → **correspondence**.",
        "A research piece sent **only to pension funds with `500` participants** → all recipients are institutional → **institutional communication**.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Rule 2210", def: "Governs all communications with the public and defines the three categories." },
        { term: "Correspondence [2210(a)(2)]", def: "Written/electronic communication to 25 or fewer retail investors in any 30 calendar-day period." },
        { term: "Retail communication [2210(a)(5)]", def: "Distributed to more than 25 retail investors in any 30 calendar-day period; highest regulation." },
        { term: "Institutional communication [2210(a)(3)]", def: "Distributed only to institutional investors; excludes a member's internal communications." },
        { term: "Retail investor", def: "Any person other than an institutional investor, whether or not they have an account." },
        { term: "Institutional investor [2210(a)(4)]", def: "Rule 4512(c) entities, governmental entities, plans with 100+ participants, FINRA members and their registered persons." },
        { term: "30 calendar-day window", def: "The rolling period over which retail recipients are counted toward the 25-investor threshold." },
        { term: "25-investor threshold", def: "The line separating correspondence (25 or fewer) from retail communication (more than 25)." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'Correspondence means one-to-one and retail communication means mass mail.'* No — the dividing line is **purely the `25`-retail-investor / `30`-calendar-day count**, not the medium or how personalized the message is. A single mass email to `20` people is correspondence; `26` individually typed emails are a retail communication.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Educational only, not financial or legal advice.",
    },
  ],
};
