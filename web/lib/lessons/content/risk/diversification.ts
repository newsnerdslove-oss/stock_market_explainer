import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "diversification",
  title: "Diversification: Don't Bet It All on One Name",
  level: 2,
  moduleId: "markets-risk",
  moduleOrder: 6,
  summary: "Spreading money across uncorrelated bets smooths the ride — but only if the bets are genuinely uncorrelated.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "*\"Don't put all your eggs in one basket.\"* **Diversification** is that proverb turned into a portfolio: spread your money across positions, sectors, and asset types so no single event can sink you. But the benefit lives or dies on one variable — **correlation**.",
    },
    {
      type: "text",
      body:
        "Correlation runs from `−1` to `+1`. Assets with low or negative correlation move independently, so their swings partly cancel and the portfolio gets smoother. Assets near `+1` move together, so holding many of them gives you almost no protection at all.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Diversification", def: "Spreading capital across positions, sectors, and asset types to reduce risk." },
        { term: "Correlation", def: "A number from −1 to +1 describing how closely two assets move together." },
        { term: "Concentration risk", def: "The danger of having too much riding on a single name or theme." },
        { term: "Systematic risk", def: "Market-wide risk (recessions, rate shocks) that diversification cannot remove." },
        { term: "Unsystematic risk", def: "Company- or sector-specific risk that diversification *can* reduce." },
        { term: "Sector exposure", def: "How much of the portfolio sits in one industry — clusters here erase diversification." },
        { term: "Diworsification", def: "Adding so many holdings (or correlated ones) that you add complexity without real diversification benefit." },
      ],
    },
    { type: "heading", text: "Worked example" },
    {
      type: "text",
      body:
        "Take `$10,000` and a stock that drops `−40%`. Watch what diversification does — and doesn't — do:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "**Concentrated** — all `$10,000` in one stock, down `−40%`: loss = `−$4,000` → portfolio `−40%`.",
        "**Diversified (uncorrelated)** — five `$2,000` positions; one falls `−40%` (`−$800`) while the other four rise `+5%` (`+$400` total): net = `−$400` → portfolio `−4%`.",
        "**Correlated trap** — five `$2,000` positions but all in the *same* sector, which falls `−40%`: loss = `−$4,000` → portfolio `−40%`, identical to being concentrated.",
      ],
    },
    {
      type: "text",
      body:
        "Five tickers protected you in case 2 and protected you not at all in case 3. The difference was never the *count* of holdings — it was whether they moved together.",
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "Practical guardrails: cap each position around `5–10%` of the portfolio, cap each sector, and watch **aggregate open risk** — eight names each \"risking 1%\" in one sector behave like a single `~8%` bet.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Edge case — diversification protects you least when you need it most. In a market-wide selloff, correlations across stocks jump toward `+1` and previously independent holdings all fall together. Thirty stocks in one theme isn't diversification; it's **concentration in disguise**.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *\"I own 10 stocks, so I'm diversified.\"* If they're correlated or all in one sector, you effectively own **one position**. True diversification needs **low correlation**, not a long list of tickers. And note what it can never fix: diversification reduces **unsystematic** (company/sector) risk, not **systematic** (market-wide) risk.",
    },
  ],
};
