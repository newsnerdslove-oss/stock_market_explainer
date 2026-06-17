import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "options-strategy-matrix",
  title: "The Strategy Matrix: Choosing by Outlook + Volatility",
  level: 4,
  moduleId: "markets-adv-options",
  moduleOrder: 1,
  summary:
    "Map any market opinion (direction + volatility) to the right option structure so you can pick — and on the exam, recognize — the correct strategy in seconds.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "Every options question hides a two-part opinion: a **direction** (bullish, bearish, or neutral) and a view on **volatility / conviction** (a big move vs. a quiet range). Lock those two axes down first and the correct structure almost always names itself. This lesson builds the recognition matrix the Series 7 expects you to apply instantly.",
    },
    { type: "heading", text: "The two axes" },
    {
      type: "list",
      items: [
        "**Direction:** bullish / bearish / neutral — which way you think the underlying goes (or that it goes nowhere).",
        "**Volatility / conviction:** do you expect a *big move* (buy premium) or a *quiet range* (sell premium)?",
        "**Same side of the market:** bullish = long calls + short puts; bearish = long puts + short calls.",
      ],
    },
    { type: "heading", text: "Debit vs. credit — the cash rule" },
    {
      type: "text",
      body:
        "You **pay a debit** when you *buy* net premium: max loss is that debit. You **receive a credit** when you *sell* net premium: max gain is that credit. Debit structures are buyers (they want the move); credit structures are sellers (they want time decay and a range). On any spread, `width = max gain + max loss`, so once you know the credit or debit and the strike width, every number follows.",
    },
    { type: "heading", text: "The matrix cells" },
    {
      type: "list",
      items: [
        "**Bullish, low cost** → long call. **Bullish + income** → covered call or cash-secured put. **Bullish, defined risk** → bull call (debit) or bull put (credit) spread.",
        "**Bearish** → long put. **Bearish, defined risk** → bear put (debit) or bear call (credit) spread. **Bearish + own the stock** → protective put or collar.",
        "**Neutral / range-bound** → iron condor, short straddle/strangle, or long butterfly — positive-theta *sellers* of premium.",
        "**Big move, direction unknown** → long straddle or long strangle — negative-theta *buyers* of premium.",
      ],
    },
    { type: "heading", text: "Worked example — recognition" },
    {
      type: "text",
      body:
        "Read the scenario, place it on the two axes, then name the cell:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Owns `100` shares of `XYZ` at `$50`, mildly bullish but wants downside protection at low or zero net cost → already long stock + needs a floor cheaply → **collar** (long stock, long OTM put, short OTM call).",
        "Expects a sharp earnings move but doesn't know the direction → big move, direction unknown → **long straddle** (buy the ATM call and put).",
        "Bearish and wants defined risk while collecting a credit → bearish + credit + capped risk → **bear call (credit) spread**.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Direction axis", def: "Bullish, bearish, or neutral — the first thing to pin down in any options scenario." },
        { term: "Volatility axis", def: "Whether you expect a large move (buy premium) or a quiet range (sell premium)." },
        { term: "Debit", def: "Net premium paid when you buy a structure; the debit is the max loss." },
        { term: "Credit", def: "Net premium received when you sell a structure; the credit is the max gain." },
        { term: "Same side of the market", def: "Bullish = long calls + short puts; bearish = long puts + short calls." },
        { term: "Positive theta", def: "A position that gains as time passes — premium sellers (condors, butterflies, short straddles)." },
        { term: "Negative theta", def: "A position that decays against you over time — premium buyers (long straddles/strangles)." },
        { term: "Collar", def: "Long stock + long OTM put (floor) + short OTM call (cap) for low-cost protection." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'Credit strategies are safer because you get paid up front.'* A credit only **caps the gain**. On a credit spread, max loss = `width − credit`, which is usually **larger** than the credit collected — e.g. a `$2` credit on `$5`-wide strikes risks `$3` to make `$2`. This is educational content, not financial advice.",
    },
  ],
};
