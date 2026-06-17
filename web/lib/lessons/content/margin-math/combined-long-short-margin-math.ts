import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "combined-long-short-margin-math",
  title: "Combined Margin Accounts: Combined Equity, SMA & Maintenance",
  level: 4,
  moduleId: "markets-margin-math",
  moduleOrder: 3,
  summary:
    "Put long and short positions in one account and compute combined equity, combined SMA, and combined maintenance the way the Series 7 tests it.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "When a customer is long some stocks and short others in the same margin account, the exam wants you to compute each side **separately** and then combine the results — never to net market values against each other.",
    },
    {
      type: "heading",
      text: "The combining rules",
    },
    {
      type: "list",
      ordered: false,
      items: [
        "**Combined equity** = `(LMV − DR) + (CR − SMV)` — long-side equity plus short-side equity.",
        "**Combined Reg T requirement** = `(50% × LMV) + (50% × SMV)`.",
        "**Combined SMA** = `Combined EQ − Combined Reg T requirement` (when positive).",
        "**Combined maintenance** = `(25% × LMV) + (30% × SMV)` (apply low-priced tiers per side as needed).",
      ],
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Compute the long side with `LMV − DR` and the short side with `CR − SMV`, then add the two equities. The long and short figures travel in opposite directions as prices move, but you always recombine at the equity level.",
    },
    {
      type: "heading",
      text: "Worked example 1 — combined equity",
    },
    {
      type: "text",
      body:
        "An account holds a long position and a short position side by side.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Long side: `LMV = $100,000`, `DR = $40,000` → long EQ `= $100,000 − $40,000 = $60,000`.",
        "Short side: `CR = $120,000`, `SMV = $90,000` → short EQ `= $120,000 − $90,000 = $30,000`.",
        "Combined equity `= $60,000 + $30,000 = $90,000`.",
      ],
    },
    {
      type: "heading",
      text: "Worked example 2 — combined maintenance & status",
    },
    {
      type: "text",
      body:
        "Same account. Check the maintenance floor, then the Reg T requirement, to determine status and SMA.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Combined maintenance `= (25% × $100,000) + (30% × $90,000) = $25,000 + $27,000 = $52,000`.",
        "Combined EQ `$90,000` > `$52,000` → no maintenance call.",
        "Combined Reg T req `= (50% × $100,000) + (50% × $90,000) = $50,000 + $45,000 = $95,000`.",
        "Combined EQ `$90,000` < `$95,000` → account is restricted; combined SMA `= $0`.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Combined equity", def: "`(LMV − DR) + (CR − SMV)` — the two sides' equities added together." },
        { term: "LMV", def: "Long Market Value of the long side." },
        { term: "DR", def: "Debit balance on the long side; fixed, does not move with price." },
        { term: "CR", def: "Credit balance on the short side; frozen at the open." },
        { term: "SMV", def: "Short Market Value of the short side." },
        { term: "Combined Reg T", def: "`(50% × LMV) + (50% × SMV)` — the initial requirement across both sides." },
        { term: "Combined SMA", def: "Combined equity minus the combined Reg T requirement, when positive." },
        { term: "Combined maintenance", def: "`(25% × LMV) + (30% × SMV)`, with per-side low-priced tiers." },
        { term: "Restricted account", def: "Combined equity below the combined Reg T requirement but above combined maintenance." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *\"You can net the long market value against the short market value into one number.\"* The two sides are computed separately (`LMV − DR` and `CR − SMV`); only the resulting equities are added. Never subtract `SMV` from `LMV` directly. This is educational content, not financial advice.",
    },
  ],
};
