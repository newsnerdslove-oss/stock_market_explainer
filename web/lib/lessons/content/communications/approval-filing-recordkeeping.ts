import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "approval-filing-recordkeeping",
  title: "Principal Approval, FINRA Ad-Reg Filing Windows & 3-Year Retention",
  level: 4,
  moduleId: "markets-communications",
  moduleOrder: 2,
  summary:
    "Different categories carry different gates — who must approve a piece before it goes out, whether it must be filed with FINRA, and how long it's kept.",
  estMinutes: 8,
  sections: [
    {
      type: "text",
      body:
        "Once a communication is **categorized** (Lesson 1), three questions follow: **Who approves it? Must it be filed with FINRA? How long is it kept?** The answers turn on the category.",
    },
    { type: "heading", text: "Principal approval" },
    {
      type: "list",
      items: [
        "**Retail communications** [`2210(b)(1)(A)`] — must be approved by an **appropriately qualified registered principal** **before the earlier of use or FINRA filing**.",
        "**Correspondence** — **no principal pre-approval** required; subject to supervision and review under `Rule 3110(b)`.",
        "**Institutional communications** — covered by **written supervisory procedures**; pre-use principal review is **not mandatory** if adequate surveillance and training exist.",
      ],
    },
    { type: "heading", text: "FINRA filing — before vs. after first use" },
    {
      type: "text",
      body:
        "Filing goes to FINRA's **Advertising Regulation Department** under `Rule 2210(c)`. The exam tests **which window** applies — and most filings are **after**, not before.",
    },
    {
      type: "list",
      items: [
        "**`10 business days` BEFORE first use** (pre-file): **new-member** retail communications in public media (first year of membership); retail communications containing **self-created (firm-made) fund performance rankings**; **security-futures** retail communications.",
        "**`10 business days` AFTER first use** (post-file): retail communications about **registered investment companies (mutual funds)**, **public direct participation programs (DPPs)**, **collateralized mortgage obligations (CMOs)**, and **structured products**.",
        "**Excluded from filing** [`2210(c)(7)`]: **correspondence**, **institutional communications**, previously-filed pieces, prospectuses / SEC-filed documents, press releases, and certain research reports.",
      ],
    },
    { type: "heading", text: "Recordkeeping" },
    {
      type: "text",
      body:
        "Communications are retained **`3 years`** under `SEA Rule 17a-4` (the **first `2 years` easily accessible**). Each record must show the **name of the approving principal** and the **date**.",
    },
    { type: "heading", text: "Worked scenario — a new mutual-fund brochure" },
    {
      type: "list",
      items: [
        "It's distributed to more than `25` retail investors → **retail communication** → **principal-approved before use**.",
        "It's about a registered investment company (mutual fund) → **post-file**: filed with FINRA **within `10 business days` AFTER first use**.",
        "It's **retained `3 years`** with the approving principal's name and date on the record.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Principal pre-approval [2210(b)(1)(A)]", def: "Retail communications must be approved by a registered principal before the earlier of use or FINRA filing." },
        { term: "Correspondence supervision", def: "No pre-approval; reviewed/supervised under Rule 3110(b)." },
        { term: "Institutional supervision", def: "Covered by written supervisory procedures; no mandatory pre-use principal review with adequate surveillance/training." },
        { term: "Pre-file (10 business days before)", def: "New-member public-media, firm-created fund rankings, and security-futures retail communications." },
        { term: "Post-file (10 business days after)", def: "Retail communications on mutual funds, public DPPs, CMOs, and structured products." },
        { term: "Filing exclusions [2210(c)(7)]", def: "Correspondence, institutional communications, prior-filed pieces, prospectuses, press releases, certain research." },
        { term: "Advertising Regulation Department", def: "The FINRA department to which retail communications are filed under Rule 2210(c)." },
        { term: "3-year retention (17a-4)", def: "Communications kept 3 years (first 2 easily accessible) with the approving principal's name and date." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'Everything must be filed with FINRA, always `10` days before use.'* No — **correspondence and institutional communications are excluded** from filing, and the big retail categories (**mutual funds, DPPs, CMOs, structured products**) are filed **`10 business days` AFTER** first use, not before.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Educational only, not financial or legal advice.",
    },
  ],
};
