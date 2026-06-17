import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "municipal-taxation-and-tey",
  title: "Municipal Taxation & Tax-Equivalent Yield",
  level: 4,
  moduleId: "markets-muni-debt",
  moduleOrder: 2,
  summary:
    "Why muni interest is federally tax-exempt, the TEY formula that makes munis comparable to taxable bonds, triple-tax-exemption, de minimis/OID, and the AMT trap.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "The whole appeal of a municipal bond is **tax**. Interest on most munis escapes federal income tax, which means a muni's modest stated yield can beat a higher-yielding taxable bond once Uncle Sam takes his cut. The tool that makes the comparison fair is the **tax-equivalent yield (TEY)**.",
    },
    {
      type: "heading",
      text: "The TEY formula",
    },
    {
      type: "text",
      body:
        "`TEY = tax-free yield ÷ (1 − marginal bracket)`. It answers: *what would a taxable bond have to yield to match this muni after tax?* The **higher your bracket, the bigger the muni advantage** — the denominator shrinks and the TEY climbs. You can also run it in reverse: `after-tax yield of a taxable bond = taxable yield × (1 − bracket)`, then compare that to the muni's nominal yield.",
    },
    {
      type: "heading",
      text: "Worked example — TEY both directions",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Investor in the `35%` bracket; muni yields `4.0%`; comparable corporate yields `5.8%`.",
        "Forward: `TEY = 4.0% ÷ (1 − 0.35) = 4.0% ÷ 0.65 = 6.15%`.",
        "`6.15% > 5.8%` → the **muni wins**.",
        "Cross-check (reverse): `5.8% × 0.65 = 3.77%` after-tax `< 4.0%` muni → **same conclusion**.",
      ],
    },
    {
      type: "heading",
      text: "Triple-tax-exemption",
    },
    {
      type: "text",
      body:
        "An **in-state resident's** muni is typically exempt from **federal, state, AND local** tax — the prized **triple-tax-exempt** status. **Out-of-state** munis are usually **state-taxable**. Residents of **no-income-tax states** get no extra in-state benefit. For double-exempt math, plug the **combined federal + state bracket** into the TEY formula.",
    },
    {
      type: "heading",
      text: "The exemption covers interest only",
    },
    {
      type: "list",
      items: [
        "**Capital gains are taxable.** Sell a muni above its adjusted basis and the gain is a fully taxable capital gain — the exemption shields **interest**, not price appreciation.",
        "**De minimis rule:** a market discount under `0.25% × years to maturity` (× par) is *de minimis* → taxed as a capital gain. Exceed that threshold and the accreted market discount is **ordinary income**.",
        "**OID on tax-exempt munis:** the accretion is **tax-exempt interest** (not taxable). It steps the cost basis up each year, so held to maturity there's **no taxable gain**.",
        "**AMT:** interest on **non-essential-use private-activity bonds (PABs)** is a tax preference item added back for the AMT. Most public-purpose GO/revenue munis are **not** AMT bonds.",
      ],
    },
    {
      type: "heading",
      text: "Worked example — de minimis",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "`$1,000` par, `10` years to maturity.",
        "Threshold `= 0.25% × 10 = 2.5% = $25`, so the cutoff price is `$1,000 − $25 = $975`.",
        "Bought at `$980` → discount `$20 < $25` → **de minimis** → capital gain.",
        "Bought at `$960` → discount `$40 > $25` → accreted market discount taxed as **ordinary income**.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Tax-equivalent yield", def: "`tax-free yield ÷ (1 − bracket)` — the taxable yield needed to match a muni." },
        { term: "After-tax yield", def: "`taxable yield × (1 − bracket)` — the reverse comparison." },
        { term: "Marginal bracket", def: "The tax rate on the next dollar of income; drives the TEY denominator." },
        { term: "Triple-tax-exempt", def: "In-state muni exempt from federal, state, and local tax." },
        { term: "De minimis rule", def: "Discount below `0.25% × years` is a capital gain; above it is ordinary income." },
        { term: "OID accretion", def: "On a tax-exempt muni, accretion is tax-exempt interest and lifts cost basis." },
        { term: "Private-activity bond", def: "Non-essential-use muni whose interest can be an AMT preference item." },
        { term: "AMT", def: "Alternative Minimum Tax; adds back PAB interest as a preference item." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Don't say **municipal interest is always completely tax-free**. The exemption covers federal **interest** only — munis can be **state-taxable** (out-of-state), **AMT-taxable** (private-activity bonds), and any **capital gain is fully taxable**. This is educational content, not financial advice.",
    },
  ],
};
