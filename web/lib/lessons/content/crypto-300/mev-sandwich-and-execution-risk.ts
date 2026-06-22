import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "mev-sandwich-and-execution-risk",
  title: "MEV, Sandwich Attacks & Execution Risk",
  level: 3,
  moduleId: "crypto-300",
  moduleOrder: 9,
  summary:
    "Why your on-chain trade can fill at a worse price than you saw — MEV, the sandwich attack, front-running and slippage, and the defenses that actually work.",
  estMinutes: 8,
  sections: [
    {
      type: "text",
      body:
        "You click *swap*, the screen quotes a clean price, you confirm — and the trade fills a little worse than the number you saw. On a centralized exchange that's slippage from a moving market. On a public blockchain it can be something more deliberate: a bot saw your trade *before it settled* and rearranged the block to profit at your expense. That whole category of value is called **MEV**.",
    },
    {
      type: "text",
      body:
        "**MEV** stands for **maximal extractable value** — the profit that whoever controls the *ordering* of transactions in a block can capture by **reordering, inserting, or censoring** transactions. The term was originally *miner* extractable value; after Ethereum's move to proof-of-stake it was renamed *maximal* because validators, not miners, now order blocks. The core idea is unchanged: on a transparent ledger, *order is power*, and order is for sale.",
    },
    { type: "heading", text: "The mempool: a public waiting room" },
    {
      type: "text",
      body:
        "When you broadcast a transaction it doesn't settle instantly. It sits in the **mempool** — a public waiting room of pending, *unconfirmed* transactions that anyone can read. Specialized bots called **searchers** scan that mempool for profitable patterns, and **block builders / proposers** decide the final order of transactions in the next block. Because your pending DEX swap is visible *before* it executes, a searcher can react to it — and pay the builder to place their own transactions exactly where they want around yours.",
    },
    { type: "heading", text: "The sandwich attack" },
    {
      type: "text",
      body:
        "The signature MEV attack on a DEX trade is the **sandwich**. A searcher spots your large buy in the mempool and wraps two of its own transactions around it. First it **front-runs** you — buying the same token *just before* you, pushing the AMM price up. Your trade then executes at that **inflated** price, buying you *fewer* tokens than you expected. Finally the searcher **back-runs** — selling immediately *after* you into the price its own front-run plus your buy created, pocketing the difference. The cost lands on you as a worse fill; the same logic works in reverse on a large sell.",
    },
    {
      type: "list",
      items: [
        "**Step 1 — front-run:** searcher buys ahead of you, price ticks up.",
        "**Step 2 — your trade:** you buy at the higher price, receiving fewer tokens.",
        "**Step 3 — back-run:** searcher sells right after you, capturing the spread.",
        "**Net:** the searcher profits, and your effective slippage is larger than the market alone would have caused.",
      ],
    },
    {
      type: "text",
      body:
        "Sandwiches need **room to move the price**, so they target trades with **loose slippage tolerance** and **thin liquidity**. A trade with a `5%` slippage cap is telling every bot in the mempool, *I will accept up to 5% worse* — that headroom is exactly the profit a sandwich aims to extract. A tight cap leaves little to take.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "MEV (maximal extractable value)", def: "Profit captured by controlling the **ordering, inclusion, or exclusion** of transactions in a block. Originally 'miner' extractable value, renamed after Ethereum's proof-of-stake transition." },
        { term: "Mempool", def: "The public pool of pending, unconfirmed transactions. Visible to anyone, which is what makes front-running possible." },
        { term: "Searcher", def: "A bot that scans the mempool for profitable MEV opportunities and submits transactions (often bidding for priority) to capture them." },
        { term: "Block builder / proposer", def: "The party that orders transactions into a block. Searchers pay builders to place their transactions in a specific position." },
        { term: "Front-running", def: "Inserting a transaction *ahead* of a known pending one to profit from its anticipated price impact." },
        { term: "Back-running", def: "Placing a transaction *immediately after* a target trade — the second slice of a sandwich." },
        { term: "Sandwich attack", def: "Front-run + your trade + back-run, engineered to make your DEX fill worse and pocket the difference." },
        { term: "Slippage tolerance", def: "The maximum price movement you'll accept versus the quote. A loose cap is free profit for a sandwich; a tight cap reverts the trade instead of filling badly." },
        { term: "Private mempool / MEV-protected RPC", def: "A submission path that keeps your transaction out of the public mempool, hiding it from searchers (e.g. Flashbots Protect)." },
      ],
    },
    { type: "heading", text: "Slippage and front-running, generally" },
    {
      type: "text",
      body:
        "Not all bad fills are attacks. **Slippage** is the gap between the price you were quoted and the price you actually get, and on an AMM it grows with your trade size relative to pool depth — your own order moves the curve. **Front-running** is the broader category of *anyone* acting on knowledge of your pending transaction. A sandwich is just the most common front-running pattern aimed at retail DEX traders. Your defense has to address both: shrink the *room* an attacker has, and hide the *information* they need.",
    },
    { type: "heading", text: "Defenses that actually work" },
    {
      type: "list",
      items: [
        "**Tight slippage tolerance.** Set the lowest cap your trade can realistically fill at (often `~0.1-0.5%` for liquid pairs). The trade reverts instead of filling badly — a failed swap beats a sandwiched one.",
        "**Private mempool / MEV-protected RPC.** Route through a service like *Flashbots Protect* so your transaction skips the public mempool. Searchers can't sandwich what they can't see.",
        "**Split large orders.** Breaking one big trade into smaller pieces reduces each slice's price impact and the headroom available to extract.",
        "**Trade deep, liquid pools** and avoid thin markets where even a modest order moves the price enough to be worth attacking.",
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "**Tighter isn't always safer in practice.** An extremely tight slippage cap protects your *price* but raises the chance the trade **reverts** — and on many chains you still pay gas on a failed transaction. The real fix for the *information* leak is a private/MEV-protected route; slippage settings only limit the *damage* a sandwich can do once your trade is public.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "**Common misconception:** *\"My DEX showed a price, so that's the price I'll get.\"* On-chain, the quote is an estimate against a pool that can move before your transaction confirms — and if your trade is visible in the public mempool, searchers can *make* it move against you via a sandwich. The displayed number is a target, not a guarantee; your slippage setting and submission path determine the actual fill.",
    },
  ],
};
