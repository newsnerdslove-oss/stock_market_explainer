import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "types-of-investment-risk",
  title: "Types of Investment Risk",
  level: 2,
  moduleId: "markets-risk",
  moduleOrder: 8,
  summary: "The named risk taxonomy the exams test — systematic vs. non-systematic — and the one line that matters: diversification fixes one and not the other.",
  estMinutes: 8,
  sections: [
    {
      type: "text",
      body:
        "*\"Risk\"* isn't one thing. The exams break it into a named taxonomy, and the single most-tested idea is the split at the top: **systematic** risk hits the whole market and can't be diversified away, while **non-systematic** risk hits one company or sector and **can**. Get that distinction and the dividing line right and you've answered most of the questions on this topic.",
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "The one line to memorize: **diversification reduces non-systematic risk but does *not* reduce systematic risk.** Spreading bets cancels company-specific noise; nothing diversifies away a market-wide shock.",
    },
    { type: "heading", text: "Systematic risk — the market-wide kind" },
    {
      type: "text",
      body:
        "**Systematic risk** (also called **market risk** or **non-diversifiable risk**) comes from forces outside any single issuer — the economy, rates, inflation, currencies, governments. It moves whole markets at once, so owning more names doesn't help. The named members:",
    },
    {
      type: "list",
      items: [
        "**Market (systematic) risk** — the chance an investment loses value in a broad market decline, regardless of the underlying company.",
        "**Interest-rate risk** — when market rates change, bond prices move the *opposite* way (rates up → prices down). The bedrock systematic risk for fixed income.",
        "**Reinvestment-rate risk** — when rates fall, cash from coupons or a maturing bond must be redeployed at the new, lower yields. It's the other half of interest-rate risk — driven by market-wide rates, so equally systematic.",
        "**Inflation / purchasing-power risk** — the risk that a fixed return won't keep pace with rising prices, so the *real* value of your money shrinks. Hits long-term bonds and cash hardest.",
        "**Currency / exchange-rate risk** — the risk that a shift between the bond's currency and your home currency erodes your return on a foreign holding.",
        "**Political / legislative risk** — the risk that government action — new laws, tax changes, instability, or expropriation abroad — reduces an investment's value.",
      ],
    },
    { type: "heading", text: "Non-systematic risk — the company/sector kind" },
    {
      type: "text",
      body:
        "**Non-systematic risk** (also **unsystematic**, **specific**, or **diversifiable risk**) attaches to a particular issuer, sector, or security. Because the causes are local, spreading capital across uncorrelated holdings makes these risks partly cancel. The named members:",
    },
    {
      type: "list",
      items: [
        "**Business risk** — the risk tied to one company's operations and prospects: a downturn or bankruptcy at that specific firm.",
        "**Credit / default risk** — the risk a bond issuer fails to pay interest or return principal. The reason ratings exist.",
        "**Liquidity (marketability) risk** — the risk you can't sell quickly, or only at a steep discount, because few buyers are around.",
        "**Call risk** — the risk an issuer redeems a callable bond early (when rates fall), cutting off your income and forcing reinvestment at lower yields. It attaches to the specific callable bond you hold — avoidable by buying non-callable issues — so it's non-systematic.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Systematic risk", def: "Market-wide, non-diversifiable risk from broad forces (economy, rates, inflation, currency, politics)." },
        { term: "Non-systematic risk", def: "Company- or sector-specific risk that *can* be reduced by diversification. Also called unsystematic, specific, or diversifiable risk." },
        { term: "Interest-rate risk", def: "Systematic: rate moves push bond prices the opposite way (rates up → prices down)." },
        { term: "Inflation / purchasing-power risk", def: "Systematic: a fixed return fails to keep pace with rising prices, shrinking real value." },
        { term: "Currency / exchange-rate risk", def: "Systematic: an FX swing erodes the return on a foreign-currency holding." },
        { term: "Political / legislative risk", def: "Systematic: laws, tax changes, instability, or expropriation reduce an investment's value." },
        { term: "Business risk", def: "Non-systematic: the danger tied to one company's operations — a downturn or bankruptcy at that firm." },
        { term: "Credit / default risk", def: "Non-systematic: a bond issuer fails to pay interest or return principal." },
        { term: "Liquidity risk", def: "Non-systematic: you can't sell quickly, or only at a deep discount." },
        { term: "Reinvestment-rate risk", def: "Systematic: returned cash must be reinvested at lower rates because market yields have fallen — a component of interest-rate risk." },
        { term: "Call risk", def: "Non-systematic: an issuer redeems a callable bond early when rates fall, forcing reinvestment at lower yields." },
      ],
    },
    { type: "heading", text: "Why the line matters" },
    {
      type: "text",
      body:
        "Imagine you hold one biotech stock. **Non-systematic** risks — a failed drug trial (business), a debt downgrade (credit), thin volume (liquidity) — are specific to that name. Add 30 *uncorrelated* names and those individual shocks start to wash out; one company's bad day is another's good day. That's diversification doing its job.",
    },
    {
      type: "text",
      body:
        "But none of those 30 names escape a **systematic** event. If the Fed shocks rates, inflation spikes, or a recession hits, the *whole* market reprices together. No amount of diversifying across stocks removes that — you'd have to change asset classes or hedge, not just add tickers.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Watch the cross-overs the exams love. **Price (interest-rate) risk** and **reinvestment-rate risk** are the two opposite-facing halves of the *same* systematic interest-rate risk: rising rates hurt bond prices but *help* reinvestment, while falling rates do the reverse. **Call risk** is a non-systematic cousin — it also bites when rates fall, but it's specific to the callable bond you chose to hold.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *\"More stocks means safer, period.\"* Diversification only neutralizes **non-systematic** risk. A perfectly diversified equity portfolio still carries full **systematic** risk — market, interest-rate, inflation, currency, and political. If a question asks which risk diversification *can't* fix, the answer is always the systematic one.",
    },
  ],
};
