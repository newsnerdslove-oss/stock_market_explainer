import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "telemarketing-cold-calling",
  title: "Telemarketing & Cold Calling: The 8am–9pm Window & Do-Not-Call Rules",
  level: 4,
  moduleId: "markets-communications",
  moduleOrder: 5,
  summary:
    "Cold calls are tightly time-boxed, must respect do-not-call lists, and require the caller to identify themselves up front.",
  estMinutes: 8,
  sections: [
    {
      type: "text",
      body:
        "Cold calling is governed by FINRA `Rule 3230`, which implements the federal **TCPA** and **Telemarketing Sales Rule** requirements. The big three are: a **time window**, **do-not-call lists**, and **mandatory caller disclosures**.",
    },
    { type: "heading", text: "The calling window" },
    {
      type: "text",
      body:
        "Under [`3230(a)(1)`], no cold calls to a residence **before `8:00 a.m.` or after `9:00 p.m.`** — and this is measured in the **called party's local time**, not the caller's. The window is `8:00 a.m.–9:00 p.m.` where the **person being called** lives.",
    },
    { type: "heading", text: "Do-not-call lists" },
    {
      type: "list",
      items: [
        "May not call numbers on the **firm-specific do-not-call list** [`3230(a)(2)`].",
        "May not call numbers on the **FTC national do-not-call registry** [`3230(a)(3)`].",
        "**Registry refresh** [`3230(c)(4)`] — the firm must use a national DNC list version obtained **no more than `31 days`** before any call.",
      ],
    },
    { type: "heading", text: "Required caller disclosures and caller ID" },
    {
      type: "list",
      items: [
        "Caller must promptly state [`3230(d)(4)`]: the caller's **name**, the **firm's name**, and a **telephone number or address** at which the firm can be contacted (plus the call's solicitation purpose).",
        "**Caller ID** [`3230(g)`] — must transmit caller ID; **blocking** caller ID is **prohibited**.",
      ],
    },
    { type: "heading", text: "Exemptions to the time / DNC restrictions" },
    {
      type: "list",
      items: [
        "**Established business relationship** [`3230(b)(1)`] — roughly an `18-month` standard.",
        "**Prior express written invitation or permission** [`3230(b)(2)`].",
        "**Personal relationship** [`3230(b)(3)`].",
      ],
    },
    { type: "heading", text: "Worked scenario — which time zone wins" },
    {
      type: "list",
      items: [
        "A rep in **NY (EST)** cold-calls a prospect in **CA (PST)** at `8:30 p.m.` EST = `5:30 p.m.` PST → **permitted** (called party's local time is within `8:00 a.m.–9:00 p.m.`).",
        "A call at `6:30 a.m.` PST (called party's time) would **violate** the rule — before `8:00 a.m.` locally.",
        "If the prospect is an **existing customer**, the **time restriction is exempt** under the established-business-relationship exception.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "8:00 a.m.–9:00 p.m. window", def: "Cold-call hours under 3230(a)(1), measured in the called party's local time." },
        { term: "Called party's local time", def: "The time zone that governs the calling window — not the caller's zone." },
        { term: "Firm-specific DNC list [3230(a)(2)]", def: "Numbers the firm's own customers asked not to be called." },
        { term: "National DNC registry [3230(a)(3)]", def: "The FTC do-not-call list; use a version obtained within 31 days of any call." },
        { term: "Caller disclosures [3230(d)(4)]", def: "Promptly state caller's name, firm's name, and a firm phone number or address." },
        { term: "Caller ID [3230(g)]", def: "Must transmit caller ID; blocking it is prohibited." },
        { term: "Established business relationship [3230(b)(1)]", def: "Exemption from time/DNC limits, roughly an 18-month standard." },
        { term: "Prior express written consent [3230(b)(2)]", def: "Written invitation/permission exempts the time/DNC restrictions and is required for autodialed/prerecorded calls." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'The `8 a.m.–9 p.m.` window is measured in the caller's time zone.'* No — it is the **called party's local time**. Also, an **existing-customer (established business) relationship** exempts the time and DNC restrictions.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Educational only, not financial or legal advice.",
    },
  ],
};
