import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "muni-credit-analysis-and-special-structures",
  title: "Muni Credit Analysis & Special Structures",
  level: 4,
  moduleId: "markets-muni-debt",
  moduleOrder: 9,
  summary:
    "How analysts size up GO credit (debt per capita, debt-to-assessed-value, overlapping debt, the tax base and collection rate) vs. revenue credit (coverage, flow of funds, rate covenant) — plus the special structures: double-barreled, moral obligation, special tax, special assessment, and industrial development / private-activity bonds.",
  estMinutes: 8,
  sections: [
    {
      type: "text",
      body:
        "Knowing a bond is a **GO** or a **revenue** bond is only the start. To judge *how strong* the credit is, analysts run a different checklist for each family — and the Series 7 expects you to know which ratios matter where. Then there are the **hybrids and special structures** that don't fit neatly into either box. This lesson covers both.",
    },
    {
      type: "heading",
      text: "Analyzing a GO bond — it's about the tax base",
    },
    {
      type: "text",
      body:
        "A GO bond is repaid from taxes, so credit analysis centers on the **economy and tax base** behind those taxes, and on how much debt that base already shoulders. Key measures:",
    },
    {
      type: "list",
      items: [
        "**Debt per capita** — total debt ÷ population. Rising per-capita debt, especially well above peer medians, is a warning sign.",
        "**Debt-to-assessed-value** — net debt ÷ assessed (or estimated full) value of taxable property. A common analyst rule of thumb is that **overall net debt should stay under about 10% of assessed value**.",
        "**Overlapping (coterminous) debt** — debt of *other* taxing bodies (school district, county, special district) that draw on the **same taxpayers**. A city's residents back this debt too, so analysts add the city's share of overlapping debt to its direct debt.",
        "**The tax base itself** — population trend, property values, diversity of employers, and per-capita income. A concentrated, declining base is riskier.",
        "**Tax collection rate** — taxes actually collected ÷ taxes levied. A falling **collection ratio** signals taxpayers are struggling and revenue may fall short.",
      ],
    },
    {
      type: "callout",
      tone: "info",
      body:
        "**Overlapping debt is shared; the issuer's own bonded debt is not.** A new road financed only by the city is **direct (self-supporting from the city's own levy)**; the county and school-district bonds layered on the same homes are **overlapping**. Both burden the same property owner, so a full GO analysis counts the city's proportionate share of the overlapping load.",
    },
    {
      type: "heading",
      text: "Analyzing a revenue bond — it's about coverage",
    },
    {
      type: "text",
      body:
        "A revenue bond has **no taxing power**, so the analysis ignores the tax base and focuses on the **project's cash flow**. The headline metric is the **debt-service coverage ratio (DSCR)** — `net revenue available for debt service ÷ annual debt service`. Supporting it are two indenture promises:",
    },
    {
      type: "list",
      items: [
        "**Flow of funds** — the order collected revenue is applied. Under a **net revenue pledge**, **O&M is paid first**, then debt service; a **gross revenue pledge** pays debt service before O&M.",
        "**Rate covenant** — the issuer's promise to set user charges high enough to cover `O&M + debt service` (plus reserves), keeping the project self-supporting.",
        "**Coverage** — covenants commonly require DSCR of about **1.20× to 1.25×**; the higher the coverage, the stronger the bond.",
      ],
    },
    {
      type: "heading",
      text: "Double-barreled bonds — GO plus revenue",
    },
    {
      type: "text",
      body:
        "A **double-barreled bond** is secured by **a defined revenue source AND the full faith, credit, and taxing power** of an issuer with taxing power. The project revenue is the first line of repayment; if it falls short, the issuer's taxing power backs the difference. Because of that second barrel, double-barreled bonds are generally **classified and rated as GO bonds**, even though a project is involved.",
    },
    {
      type: "heading",
      text: "Moral obligation bonds — a promise, not a pledge",
    },
    {
      type: "text",
      body:
        "A **moral obligation bond** carries a **non-binding covenant**: if pledged revenues fall short, the state or agency will include an appropriation to cover the deficiency in its budget recommendation to the legislature. But the legislature is **not legally obligated to appropriate** — the backing is moral, not legal. These typically need **no voter approval** (no binding tax pledge is created). The state's reputation gives comfort, yet the security is weaker than a true GO.",
    },
    {
      type: "heading",
      text: "Special tax and special assessment bonds",
    },
    {
      type: "list",
      items: [
        "**Special tax bond** — a revenue bond repaid from a **specific excise or special tax**, such as taxes on **gasoline, tobacco, or alcohol**. The tax is not on the general property base; it's an earmarked levy.",
        "**Special assessment bond** — repaid by an **assessment levied only on the properties that benefit** from the improvement (sidewalks, sewers, street lighting). Non-benefiting taxpayers don't pay, and there is **no full faith and credit pledge** — so it's a revenue-type, not a GO.",
      ],
    },
    {
      type: "heading",
      text: "Industrial development / private-activity bonds",
    },
    {
      type: "text",
      body:
        "An **industrial development bond (IDB)** / **industrial revenue bond (IRB)** is issued by a municipality but the proceeds build or buy a facility that is **leased to a private corporation**. The corporation's lease payments — not the municipality — service the debt, so the bond's credit rests on the **corporate lessee's** strength, not the issuer's. These are a form of **private-activity bond (PAB)**.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "**The AMT trap.** Interest on most public-purpose munis is fully tax-exempt, but interest on a **specified private-activity bond issued after August 7, 1986** is a **tax-preference item** added back for the **Alternative Minimum Tax (AMT)**. So an IDB/PAB can be federally exempt for a regular-tax investor yet **taxable for an AMT payer**. This is educational content, not financial advice.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Debt per capita", def: "Total debt ÷ population; a core GO tax-base ratio." },
        { term: "Debt-to-assessed-value", def: "Net debt ÷ assessed property value; rule of thumb keeps overall net debt under ~10%." },
        { term: "Overlapping (coterminous) debt", def: "Debt of other taxing bodies that draws on the same taxpayers; added to a GO issuer's direct debt." },
        { term: "Collection ratio", def: "Taxes collected ÷ taxes levied; a falling ratio warns of tax-base stress." },
        { term: "Double-barreled bond", def: "Secured by both a revenue source and full faith, credit, and taxing power; generally rated as a GO." },
        { term: "Moral obligation bond", def: "Backed by a non-binding pledge to seek a legislative appropriation if revenues fall short; legislature not legally bound." },
        { term: "Special tax bond", def: "Revenue bond repaid from a specific excise tax (gasoline, tobacco, alcohol)." },
        { term: "Special assessment bond", def: "Repaid by a levy only on the properties that benefit from the improvement." },
        { term: "Industrial development bond (IDB)", def: "Muni bond whose proceeds fund a facility leased to a corporation; backed by the corporate lessee." },
        { term: "Private-activity bond (PAB)", def: "Bond benefiting a private user; interest on specified PABs is an AMT preference item." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Don't reduce munis to \"GO = safe, revenue = risky.\" The credit lives in the details — the **tax base and overlapping load** for GOs, **coverage and the rate covenant** for revenue bonds — and the special structures (double-barreled, moral obligation, IDB) each shift *where* the repayment really comes from. This is educational content, not financial advice.",
    },
  ],
};
