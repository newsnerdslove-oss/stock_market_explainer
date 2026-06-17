import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "backtesting-pitfalls",
  title: "The Big Backtesting Pitfalls",
  level: 3,
  moduleId: "markets-backtesting",
  moduleOrder: 3,
  summary: "Look-ahead, survivorship, ignored costs, data-snooping, and regime change quietly inflate backtests. Know the traps and the defenses.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "Even an honest, simple strategy can produce a fantasy backtest if the *data* or *method* is flawed. A handful of classic pitfalls each nudge your results upward, and because they're **additive**, a backtest riddled with all of them can look spectacular while having no real edge at all. Here are the big five and how to defend against each.",
    },
    { type: "heading", text: "Look-ahead bias" },
    {
      type: "text",
      body:
        "**Look-ahead bias** is using information that wasn't actually available at the decision moment. The sneaky version: using a day's **closing** price to make a trade *during* that day, or using **restated** fundamentals that weren't published until months later. The fix is **point-in-time data** — data stamped with exactly what was known on each date. Always ask: *was this precise value available on that date?*",
    },
    { type: "heading", text: "Survivorship bias" },
    {
      type: "text",
      body:
        "**Survivorship bias** is testing only on assets that *survived* to today — quietly excluding the companies that went bankrupt or were delisted. Because the failures vanish from your dataset, returns get **inflated** and risk gets **hidden**. The fix is a **survivorship-bias-free** dataset that still contains the dead tickers.",
    },
    { type: "heading", text: "Ignored costs and slippage" },
    {
      type: "text",
      body:
        "Real trading costs money: commissions, bid-ask **spreads**, and **slippage** — the gap between the price you expected and the price you actually got. Leave these out and a high-**turnover** strategy can be a glorious paper winner and a steady net loser once costs bite. The fix: model conservative costs and slippage from the start.",
    },
    { type: "heading", text: "Data-snooping and regime change" },
    {
      type: "list",
      items: [
        "**Data-snooping (multiple testing)** — test 100 strategies and one will look great by pure chance. Reporting only that winner is **p-hacking**: luck dressed as skill. Fix: limit how many things you test, hold out data, and discount for the number of trials.",
        "**Regime change** — markets shift in volatility, rates, liquidity, and structure. A strategy fit to one regime can break the moment that regime ends. Fix: test across multiple regimes and use out-of-sample plus walk-forward.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Look-ahead bias", def: "Using information that wasn't available at the decision moment (e.g., same-day closes, restated fundamentals)." },
        { term: "Survivorship bias", def: "Testing only on assets that survived to today, excluding delisted/bankrupt names — inflates returns, hides risk." },
        { term: "Slippage", def: "The difference between the price you expected to trade at and the price you actually got." },
        { term: "Data-snooping bias", def: "Testing many strategies and keeping only the best by chance (multiple testing / p-hacking)." },
        { term: "Regime change", def: "A shift in market conditions — volatility, rates, liquidity, structure — that can break a strategy fit to the old regime." },
        { term: "Point-in-time data", def: "Data stamped with exactly what was known on each date, the defense against look-ahead bias." },
      ],
    },
    { type: "heading", text: "Walkthrough: the survivorship trap" },
    {
      type: "text",
      body:
        "Test \"buy the 30 largest US stocks, rebalance yearly\" over `2000-2024` using **today's** list of survivors and the equity curve looks fantastic. But Enron (delisted `2001`) and Lehman Brothers (gone `2008`) never appear in your data — the very names that blew up are missing. The result **overstates** returns and **understates** risk. Re-run it on a survivorship-bias-free database that includes the dead tickers and the result is far less rosy.",
    },
    {
      type: "text",
      body:
        "A quick look-ahead trap: \"buy when today's return is in the bottom `5%` of the **whole year's** daily returns.\" To rank against the whole year, you'd need the entire year's data *in advance* — information you couldn't possibly have on the trade date. That's look-ahead bias hiding inside an innocent-looking rule.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Look-ahead can sneak in through **data revisions**: GDP and earnings figures get restated after their first release, so the number in today's database may not be the one traders actually saw. And crypto and small-cap universes are *especially* exposed to survivorship bias, since failures there are frequent and easily dropped.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *\"my costs are small enough to ignore.\"* For active, high-turnover strategies, slippage plus commissions routinely turn a paper winner into a live loser. And remember: even a pitfall-free backtest is hypothetical — clean data makes results more honest, not more guaranteed.",
    },
  ],
};
