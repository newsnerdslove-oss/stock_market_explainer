import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "leverage-and-liquidation-in-crypto",
  title: "Leverage & Liquidation in Crypto",
  level: 3,
  moduleId: "crypto-300",
  moduleOrder: 4,
  summary:
    "Isolated vs cross margin, how leverage sets the distance to liquidation, and why crypto leverage and cascades are far more dangerous than stock margin.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "Leverage sounds like a magnifying glass for gains. It is — but it is also a *shrinking* glass for how much the market can move against you before you're wiped out. In crypto, where leverage can reach `100x` and markets never close, that second effect is the one that destroys accounts.",
    },
    {
      type: "text",
      body:
        "Leverage multiplies your exposure relative to the **margin** you post. The key rule of thumb: a position is roughly liquidated after an adverse move of about `1 ÷ leverage`, before fees and maintenance.",
    },
    {
      type: "list",
      items: [
        "`10x` → about a `10%` adverse move wipes you out.",
        "`50x` → about `2%`.",
        "`100x` → about `1%`.",
      ],
    },
    { type: "heading", text: "Isolated vs cross margin" },
    {
      type: "text",
      body:
        "**Isolated margin** risks only the margin you assigned to that one position — a blow-up is contained to that single trade. **Cross margin** uses your *whole account balance* as backing: it can survive larger moves, but a single bad trade can drain your entire account. The **maintenance margin** is the minimum equity needed to keep a position open; breach it and the position is force-closed plus a liquidation fee. Like perps, liquidations run on the **mark/index price**.",
    },
    { type: "heading", text: "Cascading liquidations" },
    {
      type: "text",
      body:
        "When many leveraged positions sit near the same level, a liquidation forces a market sell, which pushes the price further, which triggers *more* liquidations — a **cascade** that can crash a market in minutes. Now compare crypto to stock margin: stock margin is typically around `2x` (Reg-T overnight), trades on a clock, and has **circuit breakers**. Crypto offers `50-125x`, runs `24/7` with **no circuit breakers**, on more volatile assets — so liquidations are faster, more frequent, and more brutal.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Leverage", def: "Exposure relative to margin; `10x` means `$1,000` controls `$10,000`." },
        { term: "Isolated margin", def: "Only the margin assigned to one position is at risk — damage is contained to that trade." },
        { term: "Cross margin", def: "Your whole account balance backs the position — survives larger moves but one bad trade can drain everything." },
        { term: "Maintenance margin", def: "Minimum equity to keep a position open; breach it and you're force-closed plus a fee." },
        { term: "Liquidation price", def: "The price at which your position is forcibly closed." },
        { term: "Cascading liquidation", def: "Forced sells push price further, triggering more liquidations in a spiral." },
        { term: "Auto-deleveraging (ADL)", def: "In extremes, the exchange claws back winning traders' profits to cover bankrupt positions." },
      ],
    },
    { type: "heading", text: "A worked example (illustrative numbers)" },
    {
      type: "text",
      body:
        "You go long BTC at `$50,000`, `10x`, with `$1,000` margin controlling `$10,000` (`0.2 BTC`).",
    },
    {
      type: "list",
      items: [
        "**`10x`:** a ~`10%` drop to ~`$45,000` wipes your `$1,000` (sooner once maintenance + fees apply).",
        "**`50x`:** only ~`2%` (~`$1,000`) to ~`$49,000` liquidates you.",
        "**`100x`:** just ~`1%` (~`$500`) to ~`$49,500` — well inside ordinary intraday noise.",
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "**Liquidation is not a floor.** In a fast cascade with thin liquidity, your position can close *worse* than the liquidation price; in extremes you can hit a negative balance or face **auto-deleveraging (ADL)**, where the exchange claws back winners' profits. And **cross-margin contagion** means one blown trade can liquidate unrelated, healthy positions that share the account equity.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "**Common misconception:** *\"Higher leverage just amplifies my gains — the downside is the same risk, only bigger.\"* No. Higher leverage **shrinks the move you can survive**. At `100x`, a routine ~`1%` tick liquidates you. It isn't symmetric \"bigger bets\" — it's a far tighter margin for error, and `24/7` volatility plus cascades make full wipeouts common.",
    },
  ],
};
