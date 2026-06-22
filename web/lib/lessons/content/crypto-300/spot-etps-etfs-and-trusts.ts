import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "spot-etps-etfs-and-trusts",
  title: "Spot ETPs, ETFs & Trusts: Regulated Crypto Exposure",
  level: 3,
  moduleId: "crypto-300",
  moduleOrder: 7,
  summary:
    "How regulated wrappers — spot Bitcoin and Ether ETFs, futures ETFs, and closed-end trusts — give you crypto exposure inside a brokerage account, and what you trade away to get it.",
  estMinutes: 8,
  sections: [
    {
      type: "text",
      body:
        "Not everyone wants to manage a seed phrase, a hardware wallet, and an exchange login just to own some Bitcoin. A whole category of products exists to put crypto exposure inside an ordinary **brokerage account** — you buy a ticker like any stock, and a regulated issuer holds the coins for you. These are **exchange-traded products (ETPs)**, and the most important are the **spot Bitcoin and Ether ETFs** that launched in the US in 2024.",
    },
    {
      type: "text",
      body:
        "The appeal is convenience and access: you can hold crypto exposure in an **IRA or 401(k)**, get a `1099` instead of reconstructing on-chain cost basis, and rely on a regulated custodian instead of your own operational security. The cost is just as real — you give up **self-custody**, the ability to move coins on-chain, and any **staking, DeFi, or governance** utility. *Not your keys, not your coins* applies in full.",
    },
    { type: "heading", text: "Spot ETF vs. futures ETF" },
    {
      type: "text",
      body:
        "The first US bitcoin ETF was a **futures** product — *ProShares BITO*, launched **October 2021** under the *Investment Company Act of 1940*. It does **not hold bitcoin**; it holds **CME bitcoin futures** and rolls them forward as they expire. When the futures curve is in **contango** (later contracts cost more), each roll sells cheap and buys dear, creating a recurring **roll cost** that makes the fund drift below spot over time.",
    },
    {
      type: "text",
      body:
        "A **spot ETF** holds the actual coins. The SEC approved the first **spot Bitcoin ETFs on January 10, 2024** (trading began January 11), and **spot Ether ETFs** in 2024 as well (approved May 23, 2024; trading launched that July). Because a spot fund holds the underlying directly, it tracks the asset far more closely than a futures fund — no roll, no contango drag.",
    },
    { type: "heading", text: "Creation, redemption, and NAV" },
    {
      type: "text",
      body:
        "An ETF's market price is kept near its **net asset value (NAV)** — the value of the crypto it holds per share — by an arbitrage loop run by **authorized participants (APs)**. If the ETF trades above NAV, APs create new shares and sell them, pushing the price down; if it trades below, they redeem shares for the underlying, pushing it up. This **creation/redemption** mechanism is what keeps an ETF pinned to NAV.",
    },
    {
      type: "text",
      body:
        "When the US spot crypto ETFs launched in 2024, the SEC required **cash** creation/redemption — APs delivered or received dollars, and the fund bought or sold the coins itself. In **July 2025** the SEC approved **in-kind** creation/redemption, letting APs hand over or receive the actual coins. In-kind is generally more **tax- and cost-efficient** because the fund avoids forced on-exchange buying and selling.",
    },
    { type: "heading", text: "Why trusts can break from NAV — the GBTC story" },
    {
      type: "text",
      body:
        "Before the spot ETFs existed, the main wrapper was the **Grayscale Bitcoin Trust (GBTC)**, launched 2013 as a **closed-end trust**. A closed-end fund has **no creation/redemption arbitrage** — its share count is fixed and you cannot redeem for the underlying — so its market price can drift far from NAV. GBTC famously traded at a **premium** in early years, then flipped to a deep **discount**, reaching nearly **`-50%`** in December 2022. Holders owned bitcoin worth roughly double their share price, with no mechanism to capture the gap.",
    },
    {
      type: "text",
      body:
        "When GBTC **converted to an ETF on January 11, 2024**, the redemption mechanism switched on and the discount collapsed toward zero almost immediately. That is the whole lesson in one chart: **an ETF's arbitrage keeps price ≈ NAV; a closed-end trust's lack of it lets price wander.**",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "ETP", def: "Exchange-traded product — the umbrella term for ETFs and similar exchange-listed wrappers that track an asset." },
        { term: "Spot ETF", def: "A fund that holds the actual underlying crypto, tracking it closely with no futures roll." },
        { term: "Futures ETF", def: "A fund (e.g. BITO) that holds dated futures and rolls them — exposed to contango/roll cost, not just spot." },
        { term: "NAV", def: "Net asset value — the per-share value of the crypto the fund actually holds." },
        { term: "Premium / discount to NAV", def: "How far the market price sits above (premium) or below (discount) NAV." },
        { term: "Creation / redemption", def: "The AP-driven arbitrage that issues or retires shares to keep an ETF's price near NAV." },
        { term: "In-kind vs. cash", def: "Whether APs transact in the actual coins (in-kind) or in dollars (cash); in-kind is usually more tax- and cost-efficient." },
        { term: "Expense ratio", def: "The fund's annual fee, deducted from assets — e.g. GBTC's `1.50%` vs. cheaper competitors near `0.20-0.25%`." },
        { term: "Closed-end trust", def: "A wrapper with a fixed share count and no redemption arbitrage, so its price can drift far from NAV (pre-conversion GBTC)." },
      ],
    },
    { type: "heading", text: "Fees and the custody-by-proxy tradeoff" },
    {
      type: "text",
      body:
        "Wrappers charge an **expense ratio** that quietly compounds against you. GBTC kept a **`1.50%`** annual fee even after converting to an ETF, while several rival spot Bitcoin ETFs launched near **`0.20-0.25%`**. On a multi-year hold, that gap is real money — and unlike self-custody, where holding cost is roughly zero, an ETF charges you every year to hold coins *on your behalf*.",
    },
    {
      type: "text",
      body:
        "That is the core bargain: **custody-by-proxy**. A regulated custodian secures the keys, you get brokerage convenience and tax-advantaged-account access, and you accept counterparty/custodian risk plus an annual fee — in exchange for surrendering on-chain control and utility. Neither choice is strictly better; they solve different problems.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "**A spot ETF is a wrapper, not the coin.** You own a *share*, not bitcoin you can withdraw, send on-chain, stake, or use in DeFi. You inherit the fund's **expense ratio** and **custodian risk**, and trading is bound to **market and brokerage hours** even though crypto itself trades `24/7`.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "**Common misconception:** *\"A crypto ETF always trades at the price of the crypto it holds.\"* Only because of **creation/redemption arbitrage**. Strip that out — as in a **closed-end trust** like pre-2024 GBTC — and the price can sit at a steep **premium or discount** (GBTC hit nearly `-50%`). The wrapper's *structure*, not just the coin, determines whether price tracks NAV.",
    },
  ],
};
