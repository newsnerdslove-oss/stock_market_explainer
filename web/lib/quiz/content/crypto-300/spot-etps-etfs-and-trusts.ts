import type { Question } from "@/lib/quiz/types";

// Quiz for the "Spot ETPs, ETFs & Trusts: Regulated Crypto Exposure" lesson.
export const questions: Question[] = [
  {
    id: "spot-etps-etfs-and-trusts.q1",
    lessonSlug: "spot-etps-etfs-and-trusts",
    type: "single",
    difficulty: "easy",
    tags: ["etf", "spot", "custody"],
    prompt: "What is the main thing you give up by holding a spot Bitcoin ETF instead of self-custodying coins?",
    choices: [
      { id: "a", text: "On-chain control — you can't withdraw, send, stake, or use the coins in DeFi" },
      { id: "b", text: "All price exposure to bitcoin" },
      { id: "c", text: "The ability to hold it in a brokerage account" },
      { id: "d", text: "Any chance of a 1099 tax form" },
    ],
    correctId: "a",
    explanation:
      "A spot ETF gives you price exposure with brokerage convenience, but you own a **share**, not on-chain coins — no self-custody, no staking, no DeFi, no on-chain transfers.",
  },
  {
    id: "spot-etps-etfs-and-trusts.q2",
    lessonSlug: "spot-etps-etfs-and-trusts",
    type: "single",
    difficulty: "medium",
    tags: ["etf", "futures", "spot", "contango"],
    prompt: "How does a **futures** bitcoin ETF (like BITO) differ from a **spot** ETF?",
    choices: [
      { id: "a", text: "It holds CME futures and rolls them, so contango creates a recurring roll cost" },
      { id: "b", text: "It holds actual bitcoin, so it tracks spot perfectly" },
      { id: "c", text: "It can never be held in a brokerage account" },
      { id: "d", text: "It has no expense ratio because futures are free to roll", feedback: "Rolling futures isn't free — in contango each roll sells cheap and buys dear, a real drag on top of fees." },
    ],
    correctId: "a",
    explanation:
      "A futures ETF holds dated **CME futures**, not coins. In **contango** each roll sells the cheaper expiring contract and buys a pricier later one, dragging the fund below spot over time. A spot ETF holds the coins directly.",
  },
  {
    id: "spot-etps-etfs-and-trusts.q3",
    lessonSlug: "spot-etps-etfs-and-trusts",
    type: "single",
    difficulty: "medium",
    tags: ["etf", "nav", "arbitrage"],
    prompt: "What mechanism keeps an ETF's market price close to its NAV?",
    choices: [
      { id: "a", text: "Creation/redemption arbitrage run by authorized participants" },
      { id: "b", text: "The SEC manually setting the price each morning" },
      { id: "c", text: "A funding rate paid between buyers and sellers" },
      { id: "d", text: "The fixed share count of the trust" },
    ],
    correctId: "a",
    explanation:
      "**Authorized participants** create shares when the ETF trades above NAV and redeem them when it trades below, arbitraging the gap. That **creation/redemption** loop pins the ETF near NAV.",
  },
  {
    id: "spot-etps-etfs-and-trusts.q4",
    lessonSlug: "spot-etps-etfs-and-trusts",
    type: "single",
    difficulty: "hard",
    tags: ["gbtc", "trust", "discount", "nav"],
    prompt: "Why did GBTC trade at a deep discount to NAV (nearly `-50%` in December 2022) before its 2024 ETF conversion?",
    choices: [
      { id: "a", text: "As a closed-end trust it had no redemption arbitrage, so price could drift far from NAV" },
      { id: "b", text: "Its bitcoin had been stolen" },
      { id: "c", text: "It held futures that were deep in contango" },
      { id: "d", text: "The SEC forced it to trade below NAV", feedback: "The SEC didn't set the price — the discount came from the trust structure's missing arbitrage, not a mandate." },
    ],
    correctId: "a",
    explanation:
      "A **closed-end trust** has a fixed share count and no way to redeem for the underlying, so there's no arbitrage to close a gap. GBTC's discount reached nearly `-50%` until conversion to an ETF switched the redemption mechanism on and the gap collapsed.",
  },
  {
    id: "spot-etps-etfs-and-trusts.q5",
    lessonSlug: "spot-etps-etfs-and-trusts",
    type: "single",
    difficulty: "medium",
    tags: ["etf", "in-kind", "creation-redemption"],
    prompt: "What changed when the SEC approved **in-kind** creation/redemption for crypto ETPs (2025) versus the original **cash** model (2024)?",
    choices: [
      { id: "a", text: "APs can deliver/receive the actual coins, which is generally more tax- and cost-efficient" },
      { id: "b", text: "Retail investors can now withdraw bitcoin from their ETF shares" },
      { id: "c", text: "The funds switched from holding coins to holding futures" },
      { id: "d", text: "Expense ratios were eliminated" },
    ],
    correctId: "a",
    explanation:
      "Originally APs transacted in **cash** and the fund bought/sold coins itself. **In-kind** lets APs hand over or receive the coins directly — avoiding forced on-exchange trades, so it's usually more **tax- and cost-efficient**. It does not let retail holders withdraw coins.",
  },
  {
    id: "spot-etps-etfs-and-trusts.q6",
    lessonSlug: "spot-etps-etfs-and-trusts",
    type: "single",
    difficulty: "easy",
    tags: ["etf", "fees", "expense-ratio"],
    prompt: "What is the **expense ratio** of a crypto ETF, and why does it matter?",
    choices: [
      { id: "a", text: "An annual fee deducted from fund assets that compounds against you over time" },
      { id: "b", text: "A one-time commission paid only when you buy" },
      { id: "c", text: "The discount the ETF trades at versus NAV" },
      { id: "d", text: "The interest the fund pays you for holding it" },
    ],
    correctId: "a",
    explanation:
      "The expense ratio is an **annual fee** skimmed from assets. GBTC kept `1.50%` after converting while rival spot ETFs launched near `0.20-0.25%` — a gap that compounds into real money on a long hold, unlike near-zero-cost self-custody.",
  },
  {
    id: "spot-etps-etfs-and-trusts.q7",
    lessonSlug: "spot-etps-etfs-and-trusts",
    type: "single",
    difficulty: "medium",
    tags: ["etf", "access", "ira", "tradeoff"],
    prompt: "Which is a genuine **advantage** of a spot crypto ETF over self-custody?",
    choices: [
      { id: "a", text: "You can hold crypto exposure in an IRA/401(k) and get standard brokerage tax reporting" },
      { id: "b", text: "You can stake the underlying coins for yield" },
      { id: "c", text: "You can move the coins on-chain whenever you want" },
      { id: "d", text: "It trades 24/7 like crypto itself", feedback: "ETF shares trade only during market/brokerage hours, even though the underlying crypto trades 24/7." },
    ],
    correctId: "a",
    explanation:
      "The ETF's real edge is **access and convenience**: tax-advantaged-account eligibility, a `1099` instead of on-chain cost-basis reconstruction, and custody handled by a regulated provider. Staking, on-chain transfers, and 24/7 trading are exactly what you give up.",
  },
];
