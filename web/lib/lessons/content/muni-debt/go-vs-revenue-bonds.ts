import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "go-vs-revenue-bonds",
  title: "General Obligation vs. Revenue Bonds",
  level: 4,
  moduleId: "markets-muni-debt",
  moduleOrder: 1,
  summary:
    "Two muni credit structures — GO bonds backed by taxing power and voter approval, revenue bonds backed by a project's flow of funds, rate covenant, and coverage ratio.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "Every municipal bond is a promise to repay — but **what stands behind the promise** splits munis into two great families. A **general obligation (GO)** bond is backed by the issuer's taxing power; a **revenue bond** is backed only by the cash a specific project throws off. Series 7 leans hard on telling them apart.",
    },
    {
      type: "heading",
      text: "General obligation (GO) bonds",
    },
    {
      type: "list",
      items: [
        "Backed by the **full faith, credit, and TAXING POWER** of the issuer.",
        "Fund **non-revenue** public projects — schools, roads, municipal buildings.",
        "Repaid from taxes: **ad valorem (property) taxes** locally, income/sales taxes at the state level.",
        "Often require **voter approval** (a referendum).",
        "Subject to statutory or constitutional **debt limits** that cap how much an issuer can borrow.",
      ],
    },
    {
      type: "heading",
      text: "Revenue bonds",
    },
    {
      type: "list",
      items: [
        "Backed **only** by revenue from the specific project — tolls, water/sewer fees, airport landing fees, hospital charges.",
        "**No taxing power** stands behind them.",
        "Generally **not subject to debt limits** and usually need **no voter approval**.",
        "Must be **self-supporting** — the project's own cash pays the bonds.",
      ],
    },
    {
      type: "heading",
      text: "Flow of funds and the rate covenant",
    },
    {
      type: "text",
      body:
        "A revenue bond's **trust indenture** spells out the **flow of funds** — the order in which collected revenue is applied. Under the most common **net revenue pledge**, **operations & maintenance (O&M) is paid FIRST**, then debt service. Under a **gross revenue pledge**, debt service is paid first, before O&M.",
    },
    {
      type: "list",
      items: [
        "**Rate covenant** — a promise to set rates high enough to cover `O&M + debt service` (plus reserves).",
        "**Additional-bonds test (ABT)** — restricts issuing new parity bonds unless coverage tests are met.",
        "**Debt service reserve fund** — a cushion, typically about **one year's debt service**.",
      ],
    },
    {
      type: "heading",
      text: "Debt service coverage ratio (DSCR)",
    },
    {
      type: "text",
      body:
        "The key credit metric for a revenue bond is the **DSCR**: `DSCR = net revenue available for debt service ÷ annual debt service`. Covenants commonly require **`≥ 1.20×` to `1.25×`**. A DSCR of `1.0×` means revenue exactly covers debt service with **zero cushion**; the higher the ratio, the safer the bond.",
    },
    {
      type: "heading",
      text: "Worked example — DSCR",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Net revenue available for debt service `= $6,000,000`.",
        "Annual debt service `= $4,800,000`.",
        "`DSCR = 6,000,000 ÷ 4,800,000 = 1.25×`.",
        "A `1.25×` coverage clears a typical `1.20×` covenant — there's a `25%` cushion above the required payment.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "General obligation bond", def: "Muni backed by the issuer's full faith, credit, and taxing power." },
        { term: "Revenue bond", def: "Muni backed only by revenue from a specific project; no taxing power." },
        { term: "Ad valorem tax", def: "Property tax based on assessed value — the main repayment source for local GO bonds." },
        { term: "Debt limit", def: "Statutory/constitutional cap on GO borrowing; revenue bonds are generally exempt." },
        { term: "Flow of funds", def: "The indenture-specified order revenue is applied; net pledge pays O&M first." },
        { term: "Rate covenant", def: "Promise to charge rates high enough to cover O&M plus debt service and reserves." },
        { term: "DSCR", def: "`net revenue ÷ annual debt service`; covenants commonly require `≥ 1.20–1.25×`." },
        { term: "Additional-bonds test", def: "Covenant limiting new parity debt unless coverage tests are satisfied." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Don't assume **revenue bonds are riskier and GO bonds are always safest**. A strong essential-service revenue bond with a robust rate covenant and high DSCR can outclass a GO from a distressed municipality. The driver is the **source of repayment and its coverage**, not the GO-vs-revenue label. This is educational content, not financial advice.",
    },
  ],
};
