import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "day-trading-buying-power",
  title: "Day-Trading Margin: From the PDT Rule to Intraday Margin",
  level: 3,
  moduleId: "markets-margin",
  moduleOrder: 6,
  summary:
    "The 2026 shift: FINRA eliminated the Pattern Day Trader rule and the $25,000 minimum, replacing them with an intraday margin standard — what that means now.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "If you've read older guides, you've seen the famous *\"you need `$25,000` to day trade\"* rule. That rule is **gone**. As of June 2026, FINRA replaced the Pattern Day Trader framework with a new **intraday margin standard** — so let's learn the current rule and treat the old one as recent history.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Verified current fact: FINRA **eliminated** the Pattern Day Trader (PDT) rule and the `$25,000` minimum effective **June 4, 2026** (FINRA Regulatory Notice 26-10), replacing them with intraday margin standards. There's an 18-month phase-in through **Oct 20, 2027**, during which some firms may still apply the old rule.",
    },
    {
      type: "heading",
      text: "The old rule (historical context)",
    },
    {
      type: "text",
      body:
        "Before June 4, 2026, a **Pattern Day Trader** was anyone who made 4 or more day trades within 5 business days in a margin account (when those trades were more than `6%` of total trades). A PDT needed at least `$25,000` in equity, could access up to `4×` intraday buying power, and — if equity fell below `$25,000` — had day trading *frozen*.",
    },
    {
      type: "heading",
      text: "The current rule (effective June 4, 2026)",
    },
    {
      type: "text",
      body:
        "The PDT designation and the `$25,000` minimum are eliminated. In their place, under **Rule 4210** you must maintain at least `25%` maintenance equity (of long marginable market value) **throughout the trading day**, measured against your *actual positions* — not a trade count. The `$2,000` minimum to trade on margin still applies. An **intraday margin deficit** must be satisfied *promptly*; if it's unmet by the **5th business day**, you face a **90-day cash-only restriction**. Day-trading buying power is **intraday only** — reduce positions by the close or what's left becomes an overnight loan.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Day trade", def: "Buying and selling (or shorting and covering) the same security within the same trading day." },
        { term: "Pattern Day Trader (historical)", def: "Pre-June-2026 designation for 4+ day trades in 5 business days; required `$25,000` equity." },
        { term: "Intraday margin standard", def: "The current rule: maintain `25%` equity against actual positions throughout the day." },
        { term: "Intraday margin deficit", def: "A shortfall below required intraday equity; must be satisfied promptly." },
        { term: "Day-trading buying power", def: "Buying power available only intraday; positions left open become an overnight loan." },
        { term: "90-day freeze", def: "A cash-only restriction imposed if an intraday deficit is unmet by the 5th business day." },
        { term: "Phase-in period", def: "The transition through Oct 20, 2027, during which some firms may still use the old PDT rule." },
      ],
    },
    {
      type: "heading",
      text: "Worked example: old vs. new",
    },
    {
      type: "text",
      body:
        "**Old rule:** `$30,000` equity gave `4× = $120,000` intraday buying power. If equity dropped to `$24,000` (below `$25,000`), day trading was frozen.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "New rule: `$30,000` equity, no PDT flag",
        "Intraday positions of `$120,000` → required equity `25% × $120,000 = $30,000` (exactly met)",
        "Positions grow to `$130,000` → required equity `25% × $130,000 = $32,500`",
        "With only `$30,000`, that's a `$32,500 − $30,000 = $2,500` intraday deficit",
        "Satisfy it promptly; if unmet by the 5th business day → 90-day cash-only restriction",
      ],
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Edge case: during the phase-in (through Oct 20, 2027) the rule is **broker-dependent** — your firm may still enforce the old `$25,000` PDT requirement, so confirm with them. And the `25%` intraday standard is a *minimum*: house requirements can be higher, and intraday leverage still amplifies losses.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *\"I just need `$25,000` and I get `4×` to day trade.\"* That's **outdated**. As of June 4, 2026, FINRA eliminated the `$25,000` PDT minimum and the trade-count designation. The binding test is now maintaining `25%` equity intraday against your positions — though during the phase-in some firms may still apply the old rule. This is educational content, not financial advice.",
    },
  ],
};
