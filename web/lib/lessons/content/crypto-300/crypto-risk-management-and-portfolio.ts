import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "crypto-risk-management-and-portfolio",
  title: "Crypto Risk Management & Portfolio",
  level: 3,
  moduleId: "crypto-300",
  moduleOrder: 6,
  summary:
    "Position sizing, real diversification, and risk identification for crypto's extreme volatility and unique failure modes — exploits, de-pegs, and rugs.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "Every lesson in this module described a way to lose money: liquidation, impermanent loss, funding drag, cascades, drained bridges. Risk management is how you keep any *one* of those from ending your participation. It is the most important skill in crypto, and the least exciting — which is exactly why so few people do it.",
    },
    {
      type: "text",
      body:
        "Start with the most-quoted phrase in crypto, taken literally: **\"only invest what you can afford to lose\"** is a **risk budget**. Assume any single position can go to **zero** — exploit, de-peg, rug, or regulation — and size it so that outcome doesn't impair your finances or force a panic sale at the bottom.",
    },
    { type: "heading", text: "Position sizing for extreme volatility" },
    {
      type: "text",
      body:
        "Crypto routinely moves `5-10%+` in a day and `50-80%` over a cycle. Sizing that feels prudent for stocks is often far too large here. The fix is **smaller positions** plus a **predefined max loss per trade** — decided before you enter, when you're calm.",
    },
    { type: "heading", text: "Diversify across risk *types*, not just tickers" },
    {
      type: "text",
      body:
        "Risk in crypto is **multi-dimensional**. Holding ten coins isn't diversification if they all carry the same risks. Spread across the *kinds* of risk:",
    },
    {
      type: "list",
      items: [
        "**Market risk** — raw price volatility.",
        "**Smart-contract / protocol risk** — bugs and exploits in the code.",
        "**Counterparty / custodial risk** — an exchange or bridge going insolvent or getting hacked.",
        "**Regulatory and stablecoin / de-peg risk** — rule changes or a \"stable\" asset losing its peg.",
      ],
    },
    {
      type: "text",
      body:
        "Beware **concentration risk**: one coin, one protocol, or one chain means a single failure is catastrophic. A basket of \"diversified\" tokens that all crash together isn't diversified — high correlation makes it effectively *one bet*. Scams are endemic too: anonymous teams, unaudited contracts, mint/owner backdoors, fake \"locked liquidity,\" and \"guaranteed APY.\" If the yield looks too good to be true, the **yield is the risk**. Finally, security hygiene *is* risk management — phishing, approval exploits, and self-custody mistakes lose funds just as surely as a bad trade. **Plan the exit before the entry:** max size, max loss, exit trigger, decided before the volatility hits.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Risk budget", def: "The amount you can truly afford to lose, sized assuming any one position can go to zero." },
        { term: "Position sizing", def: "Choosing how much to allocate per bet so a single loss is survivable." },
        { term: "Concentration risk", def: "Over-exposure to one coin/protocol/chain, so a single failure is catastrophic." },
        { term: "Correlation", def: "How together assets move; high correlation collapses apparent diversification into one bet." },
        { term: "Smart-contract / protocol risk", def: "The chance code bugs or exploits drain a protocol — present even after an audit." },
        { term: "Rug pull", def: "A scam where insiders drain liquidity or mint tokens and vanish." },
        { term: "Counterparty / custodial risk", def: "The risk an exchange or bridge holding your assets fails or is hacked." },
      ],
    },
    { type: "heading", text: "A worked example (illustrative numbers)" },
    {
      type: "text",
      body:
        "Suppose you have a `$10,000` risk budget you can genuinely afford to lose. You cap any single speculative position at `5%` = `$500`, so your worst-case single-name loss is bounded. You also notice a \"diversified\" basket of `5` small-cap alts that all move together — that's concentration in disguise; a sector drawdown could take all `5` down `70%` at once.",
    },
    {
      type: "text",
      body:
        "Contrast a second learner who puts the **full `$10,000`** into a token advertising *\"20% weekly, audited, liquidity locked.\"* The \"audit\" turns out to be fake, the deployer holds a mint key, and the team rugs overnight → ~`$0`. The first learner loses at most `$500` on any one bet; the second loses everything. Same market, opposite outcomes — driven entirely by sizing and risk identification.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "**Correlation breaks the diversification illusion, and audits aren't guarantees.** In a crypto-wide crash, most alts fall together and even \"stablecoins\" can de-peg — so diversify across risk *types* and custody venues, not just tickers. And an **audit is not a guarantee**: audited protocols still get exploited, and fake or stale audits are a common scam prop.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "**Common misconception:** *\"If a project is audited and offers high APY, the yield is basically safe passive income.\"* Audits **reduce but never eliminate** smart-contract risk — audited protocols are still exploited. And unusually high APY almost always reflects unusually high risk (emissions dilution, IL, leverage, or fraud). A high advertised yield should *raise* your risk estimate, not lower it.",
    },
  ],
};
