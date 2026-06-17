import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "money-market-and-short-term-debt",
  title: "Money-Market & Short-Term Debt Instruments",
  level: 4,
  moduleId: "markets-muni-debt",
  moduleOrder: 5,
  summary:
    "The short end of the debt market — T-bills and the discount yield, commercial paper, negotiable CDs, bankers' acceptances, repos, and municipal anticipation notes (BAN/TAN/RAN/TRAN).",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "The **money market** is the short end of the debt world — instruments maturing in **a year or less**, prized for safety and liquidity. Most are issued **at a discount**, and the T-bill's quoting math hides a classic trap.",
    },
    {
      type: "heading",
      text: "Treasury bills and the discount yield",
    },
    {
      type: "text",
      body:
        "**T-bills** are U.S. government obligations of **52 weeks or less**, issued at a **discount** with **no coupon**, maturing at par. They're quoted on a **bank-discount basis**: `discount yield = (face − price) ÷ face × (360 ÷ days)`. Note the two quirks — it divides by **face value** (not the lower purchase price) and uses a **360-day** year.",
    },
    {
      type: "heading",
      text: "Worked example — T-bill discount yield",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "A 26-week (`182`-day), `$10,000` face T-bill is bought at `$9,750`.",
        "Discount `= $10,000 − $9,750 = $250`.",
        "`yield = ($250 ÷ $10,000) × (360 ÷ 182) = 0.025 × 1.9780 = 0.04945`.",
        "`= 4.95%` bank-discount yield.",
      ],
    },
    {
      type: "heading",
      text: "The other money-market instruments",
    },
    {
      type: "list",
      items: [
        "**Commercial paper** — short-term **unsecured corporate** debt, `≤ 270` days (exempt from Securities Act registration under that limit), issued at a discount.",
        "**Negotiable (jumbo) CDs** — bank time deposits `≥ $100,000` (typically `$1M+`), tradeable in the secondary market, **interest-bearing**.",
        "**Bankers' acceptances (BAs)** — short-term time drafts financing **international trade**; bank-guaranteed; issued at a discount.",
        "**Repurchase agreements (repos)** — a sale of securities with an agreement to repurchase at a higher price — effectively a **collateralized short-term loan**; the buyer's side is a **reverse repo**.",
      ],
    },
    {
      type: "heading",
      text: "Municipal anticipation notes",
    },
    {
      type: "text",
      body:
        "Short-term (about a year), high-quality, **tax-exempt** muni notes bridge timing gaps until a future cash source arrives:",
    },
    {
      type: "list",
      items: [
        "**BAN** — Bond Anticipation Note (repaid from an upcoming **bond** sale).",
        "**TAN** — Tax Anticipation Note (repaid from upcoming **taxes**).",
        "**RAN** — Revenue Anticipation Note (repaid from upcoming **revenue**).",
        "**TRAN** — Tax & Revenue Anticipation Note (both).",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Treasury bill", def: "U.S. government, ≤52 weeks, zero-coupon, issued at a discount to par." },
        { term: "Bank-discount yield", def: "`(face − price) ÷ face × (360 ÷ days)` — divides by face, uses 360 days." },
        { term: "Commercial paper", def: "Unsecured corporate debt ≤270 days; exempt from registration under that limit." },
        { term: "Negotiable CD", def: "Tradeable bank time deposit ≥$100,000; interest-bearing." },
        { term: "Bankers' acceptance", def: "Bank-guaranteed time draft financing international trade; issued at a discount." },
        { term: "Repurchase agreement", def: "Sale plus a buyback at a higher price — a collateralized short-term loan." },
        { term: "BAN", def: "Bond Anticipation Note — repaid from an upcoming bond sale." },
        { term: "TAN / RAN / TRAN", def: "Notes repaid from upcoming taxes, revenue, or both." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Don't treat the T-bill's **discount yield as its true return**. The bank-discount yield **understates** the actual return — it divides by **face** (not the lower purchase price) and uses **360** days. The real return is higher; the **bond-equivalent yield** uses the purchase price and **365** days. This is educational content, not financial advice.",
    },
  ],
};
