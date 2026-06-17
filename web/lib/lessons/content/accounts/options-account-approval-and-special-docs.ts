import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "options-account-approval-and-special-docs",
  title: "Options Account Approval & Special Account Documents",
  level: 4,
  moduleId: "markets-accounts",
  moduleOrder: 2,
  summary:
    "The exact paperwork choreography for options and margin accounts — who approves, what gets delivered when, and the famous 15-day rule.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "Opening an account for options trading is a choreography with a strict order. `FINRA Rule 2360` governs it, and exam-writers love testing **which document comes when**. The two pieces people confuse are the **ODD** (delivered up front) and the **signed Options Account Agreement** (due *after* approval).",
    },
    { type: "heading", text: "The ODD and ROP approval" },
    {
      type: "list",
      items: [
        "**ODD (Options Disclosure Document):** the OCC's risk-disclosure booklet must be delivered **at or PRIOR to** the time the account is approved for options trading. This is the one item that cannot come late.",
        "**ROP approval:** a **Registered Options Principal (ROP / Series 4)** must approve the account **before the first options trade**. If the branch manager is not an ROP, approval must reach an ROP within **`10 business days`**.",
      ],
    },
    { type: "heading", text: "The Options Account Agreement and the 15-day rule" },
    {
      type: "text",
      body:
        "The **Options Account Agreement (OAA)** is the customer's signed written agreement acknowledging receipt of the ODD and promising to abide by the rules and not exceed **position and exercise limits**. The firm must obtain it **within `15 days` AFTER account approval**.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'The customer must sign the options agreement before approval or before trading.'* No — the **ODD** must be delivered at/before approval, but the **signed OAA** is due within `15 days` **after** approval. Trading can begin before the signed OAA comes back.",
    },
    {
      type: "text",
      body:
        "If the signed OAA is **not returned within `15 days`**, the account is **restricted to closing transactions only** — the customer may reduce or close existing positions but **cannot open new ones** — until the signed agreement is received.",
    },
    { type: "heading", text: "The correct sequence" },
    {
      type: "list",
      ordered: true,
      items: [
        "**ODD delivered** to the customer (at or before approval).",
        "**Account approved by an ROP.**",
        "**Customer may begin trading** options.",
        "**Signed OAA returned within `15 days`** of approval — or the account is restricted to closing transactions only.",
      ],
    },
    { type: "heading", text: "Margin account documents" },
    {
      type: "text",
      body:
        "Margin accounts have their own paperwork, and one document is **optional** — a classic distractor.",
    },
    {
      type: "list",
      items: [
        "**Margin (credit) agreement — REQUIRED:** sets out the loan and interest terms.",
        "**Hypothecation agreement — REQUIRED:** pledges the customer's securities as collateral and lets the firm **rehypothecate** them.",
        "**Loan consent agreement — OPTIONAL:** permits the firm to **lend the customer's securities** to others for short sales. Not required to open the account.",
      ],
    },
    { type: "heading", text: "Worked scenario" },
    {
      type: "text",
      body:
        "A customer is approved for options on **Monday** and buys **5 calls on Tuesday**. By the **16th day** the signed OAA still hasn't come back. The firm must **restrict the account to closing transactions only**: the customer can **sell** those 5 calls but **cannot open new positions** until the signed OAA is returned.",
    },
    {
      type: "list",
      items: [
        "**ODD:** already delivered at/before Monday's approval — compliant.",
        "**Trading before OAA:** permitted — the Tuesday purchase was valid.",
        "**Day 16, no OAA:** the `15 days` window lapsed → **closing transactions only**.",
        "**Cure:** restriction lifts when the signed OAA is received.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "FINRA Rule 2360", def: "The FINRA rule governing options account approval, documentation, position/exercise limits, and supervision." },
        { term: "ODD (Options Disclosure Document)", def: "The OCC's risk-disclosure booklet that must be delivered at or prior to options account approval." },
        { term: "ROP (Registered Options Principal)", def: "A Series 4 principal who must approve an options account before the first options trade." },
        { term: "Options Account Agreement (OAA)", def: "The customer's signed agreement to abide by options rules and limits, due within 15 days after account approval." },
        { term: "Closing transactions only", def: "The restriction imposed if the signed OAA is not returned in 15 days — positions may be reduced or closed but not opened." },
        { term: "Margin (credit) agreement", def: "Required margin document setting out loan and interest terms." },
        { term: "Hypothecation agreement", def: "Required margin document pledging the customer's securities as collateral, allowing the firm to rehypothecate them." },
        { term: "Loan consent agreement", def: "OPTIONAL margin document letting the firm lend the customer's securities to others for short sales." },
      ],
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Educational only, not financial or legal advice.",
    },
  ],
};
