import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "assignment-exercise-mechanics",
  title: "Exercise & Assignment: OCC Mechanics Start to Finish",
  level: 4,
  moduleId: "markets-adv-options",
  moduleOrder: 5,
  summary:
    "Follow a contract from exercise notice through OCC random assignment to T+1 settlement, and know exactly when an ITM option is auto-exercised.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "When a holder exercises an option, the **Options Clearing Corporation (OCC)** routes the obligation to a short writer through a two-step random/fair chain. Knowing that chain — plus the **auto-exercise** trigger and the **expiration-day timeline** — answers a whole cluster of Series 7 questions.",
    },
    { type: "heading", text: "American vs. European" },
    {
      type: "list",
      items: [
        "**American-style:** exercisable on **any business day** through expiration — most **US equity options**.",
        "**European-style:** exercisable **only at expiration** — most **broad-based index options** (e.g. `SPX`).",
      ],
    },
    { type: "heading", text: "The OCC assignment chain" },
    {
      type: "list",
      ordered: true,
      items: [
        "A long holder submits an **exercise notice**.",
        "The **OCC assigns a clearing firm on a random basis**.",
        "That firm assigns the obligation to one of its **short customers** — by **FIFO, random, or any fair method**.",
      ],
    },
    { type: "heading", text: "Auto-exercise (exercise by exception)" },
    {
      type: "text",
      body:
        "At expiration, the OCC **automatically exercises any option `$0.01` or more in-the-money** unless it receives contrary instructions. An option only `$0.005` ITM is **not** auto-exercised. A holder can also submit a *do-not-exercise* instruction to override.",
    },
    { type: "heading", text: "Expiration-day timeline" },
    {
      type: "list",
      items: [
        "**4:00pm ET** — trading cutoff.",
        "**5:30pm ET** — exercise-notice deadline.",
        "**11:59pm ET** — contracts expire.",
      ],
    },
    { type: "heading", text: "Settlement" },
    {
      type: "text",
      body:
        "An exercised **equity** option delivers (or pays for) the stock **T+1**. **Index** options are **cash-settled** — the ITM amount times the multiplier changes hands in cash; no shares move.",
    },
    { type: "heading", text: "Worked example" },
    {
      type: "text",
      body:
        "An `XYZ` Jul `50` call has an OCC closing price of `$50.04` at expiration (`≥ $0.01` ITM).",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "`$50.04 ≥ $50.01` → the call is **auto-exercised** with no instructions needed.",
        "The long holder **buys 100 shares at `$50` (`$5,000`)**, delivered **T+1**.",
        "The OCC picks a **clearing firm at random**; that firm assigns **one short call writer** (e.g. by FIFO), who **delivers 100 shares at `$50`**.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "OCC", def: "The Options Clearing Corporation — issues, guarantees, and assigns all listed options." },
        { term: "American-style", def: "Exercisable any business day through expiration; most US equity options." },
        { term: "European-style", def: "Exercisable only at expiration; most broad-based index options like SPX." },
        { term: "Exercise notice", def: "A holder's instruction to exercise, which starts the OCC assignment chain." },
        { term: "Random assignment", def: "The OCC assigns a clearing firm randomly; the firm then assigns a customer by a fair method." },
        { term: "Auto-exercise", def: "OCC exercises any option $0.01+ ITM at expiration unless instructed otherwise." },
        { term: "Exercise by exception", def: "Another name for the OCC's automatic $0.01-ITM exercise." },
        { term: "T+1 settlement", def: "Exercised equity options deliver stock the next business day; index options cash-settle." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'My broker only exercises if the option is at least a dollar ITM.'* Auto-exercise triggers at just **`$0.01` ITM**; an option `$0.005` ITM is **not** auto-exercised. Contrary (do-not-exercise) instructions can override either way. This is educational content, not financial advice.",
    },
  ],
};
