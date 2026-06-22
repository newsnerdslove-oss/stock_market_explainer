import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "corporate-bond-structure-and-seniority",
  title: "Corporate Bond Structure & Seniority",
  level: 3,
  moduleId: "markets-fixed-income",
  moduleOrder: 10,
  summary:
    "What backs a corporate bond — collateral or just a promise — and where each bondholder stands in line if the company fails.",
  estMinutes: 8,
  sections: [
    {
      type: "text",
      body:
        "Two corporate bonds from the *same* issuer can carry very different risk. The difference is **what backs them** and **where they sit in line** if the company goes bankrupt. A bond pledged against a specific asset is far safer than one backed only by the issuer's word — and that ranking, called **seniority**, drives both the yield and the recovery you'd get in a default.",
    },
    {
      type: "heading",
      text: "Secured bonds: backed by collateral",
    },
    {
      type: "text",
      body:
        "A **secured bond** pledges a specific asset as **collateral**. If the issuer defaults, holders have a direct claim on that asset. Because the claim is backed by property, secured bonds carry **lower yields** than unsecured debt from the same issuer.",
    },
    {
      type: "list",
      items: [
        "**Mortgage bond** — secured by *real property*: land, buildings, a plant. The most common form of secured corporate debt.",
        "**Equipment trust certificate (ETC)** — secured by *movable equipment* like aircraft, railcars, or trucks. Common for airlines and railroads; the equipment's title is held in trust until the debt is repaid.",
        "**Collateral trust bond** — secured by *financial securities* (stocks or bonds of other companies, often a subsidiary) deposited with a trustee.",
      ],
    },
    {
      type: "heading",
      text: "Unsecured bonds: backed by a promise",
    },
    {
      type: "text",
      body:
        "A **debenture** is an **unsecured** bond — no collateral, just the issuer's general credit and promise to pay. A **subordinated debenture** ranks *below* regular debentures: its holders get paid only after senior debt is satisfied. Lower in line means **higher yield** to compensate. (Strong, blue-chip companies can issue debentures cheaply precisely because their general credit is trusted.)",
    },
    {
      type: "heading",
      text: "The trust indenture and the trustee",
    },
    {
      type: "text",
      body:
        "Every public corporate bond issue comes with a **trust indenture** — the legal contract spelling out the coupon, maturity, collateral, covenants, and the issuer's obligations. Under the **Trust Indenture Act of 1939**, public corporate debt generally must be issued under a qualified indenture with an independent **trustee** (usually a bank) appointed to act *on behalf of the bondholders* and enforce the issuer's promises. The Act's main small-issue exemption (Section 304(a)(9)) covers indentures limited to `$10,000,000` or less outstanding within any 36-month window.",
    },
    {
      type: "heading",
      text: "Covenants and sinking funds",
    },
    {
      type: "list",
      items: [
        "**Protective covenants** — promises in the indenture that protect bondholders. They can be *restrictive* (e.g. limits on new debt or dividends) or *affirmative* (e.g. maintain insurance, supply financials).",
        "**Sinking fund** — money the issuer sets aside over time to retire the bonds, often by redeeming a portion early each year. It *reduces credit risk* by ensuring principal is repaid gradually rather than all at once at maturity.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Secured bond", def: "A bond backed by specific **collateral**; holders can claim that asset in a default." },
        { term: "Mortgage bond", def: "A secured bond backed by **real property** (land/buildings)." },
        { term: "Equipment trust certificate", def: "A secured bond backed by **movable equipment** (aircraft, railcars); title held in trust." },
        { term: "Collateral trust bond", def: "A secured bond backed by **other securities** deposited with a trustee." },
        { term: "Debenture", def: "An **unsecured** bond backed only by the issuer's general credit and promise to pay." },
        { term: "Subordinated debenture", def: "An unsecured bond that ranks *below* regular debentures in the payment line." },
        { term: "Trust indenture", def: "The legal contract for a bond issue; required under the **Trust Indenture Act of 1939** for public issues, with a small-issue exemption for indentures of `$10M` or less (Section 304(a)(9))." },
        { term: "Trustee", def: "An independent party (usually a bank) appointed to act for the **bondholders** and enforce the indenture." },
        { term: "Protective covenant", def: "A promise in the indenture that protects bondholders (restrictive or affirmative)." },
        { term: "Sinking fund", def: "Money set aside to retire bonds gradually, lowering credit risk." },
      ],
    },
    {
      type: "heading",
      text: "The liquidation priority ladder",
    },
    {
      type: "text",
      body:
        "If a company is liquidated in bankruptcy, claims are paid in a strict order. Each tier must be **fully satisfied** before the next gets anything. (Unpaid wages, taxes, and the IRS sit ahead of unsecured creditors, but the *securities* ladder runs as follows.)",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "**Secured creditors** — mortgage bonds, ETCs, collateral trust bonds (paid from their pledged collateral).",
        "**General creditors** — debentures and other unsecured debt (alongside trade creditors).",
        "**Subordinated debentures** — unsecured debt that ranks behind general creditors.",
        "**Preferred stockholders** — first equity holders paid, after *all* debt.",
        "**Common stockholders** — last in line; often receive nothing in a liquidation.",
      ],
    },
    {
      type: "callout",
      tone: "info",
      body:
        "A simple rule of thumb: **more protection = lower yield**. Secured bonds yield least, debentures more, subordinated debentures most. The yield you're offered is the market pricing exactly where you stand in that line.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Don't confuse the trustee with the issuer. The **trustee works for the bondholders**, not the company — its job is to enforce the indenture and protect investors. And remember: *all* bondholders (even subordinated ones) rank **ahead of every stockholder**, preferred or common.",
    },
  ],
};
