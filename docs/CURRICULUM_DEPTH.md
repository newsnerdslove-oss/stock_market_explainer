# Curriculum depth plan — 100 → 400

The "ultraplan": does each topic have enough depth, and how does the platform climb from an intro (100-level) course to mastery (400-level) over time? This is the depth audit + the full ladder + a gap analysis against what's built today.

Companion to `docs/CURRICULUM.md` (the topic ladder). This doc is about **depth and sequencing**: how far each topic goes, in what order, and what "deep enough" means at each level.

---

## 1. Where we are today (honest audit)

Five lessons exist, all strong but all foundational:

| Lesson | Level | Depth verdict |
|---|---|---|
| What is a candlestick? | 100 | Solid. Concept + anatomy chart + key terms + green/red nuance. |
| Line vs. candlestick charts | 100 | Solid. Good "what the line hides" framing. |
| Bid, ask, and the spread | 100 | Solid. Worked example, liquidity, limit-order tie-in. |
| Profit & loss (realized/unrealized) | 100 | Solid. Cost basis, breakeven, what eats P&L. |
| The P/E ratio | 100–200 | Solid. Context + "where it misleads." |

**Verdict:** what exists is genuinely good 100-level material — clear prose, worked examples, and a "where this misleads" section that already models the right teaching instinct. But it is **~4% of a complete course**: five lessons, one band of one of three tracks, and **no assessments yet**. Depth-per-lesson is good; **breadth and altitude are the gap.** Nothing yet reaches 200, let alone 400.

---

## 2. The depth rubric (what "enough depth" means per level)

A topic isn't "done" — it **spirals**, getting deeper each time it reappears. A lesson is adequate for its level only if it hits that level's bar:

| Level | Audience | A lesson at this level must include… | Assessment |
|---|---|---|---|
| **100** Foundations | Total beginner | Plain-language concept, one concrete example, a "why it matters," and a "common misconception." | 3–5 recall questions |
| **200** Mechanics | Can place a trade | The math worked end-to-end, edge cases, how it behaves in different conditions, a hands-on sim task. | Calc + scenario questions |
| **300** Strategy | Building a method | Trade-offs vs. alternatives, when it fails, risk framing, a realistic multi-step scenario, links to related strategies. | Scenario + judgment questions |
| **400** Mastery | Exam / pro | Regulatory treatment, precise definitions, exam-style calculations, suitability reasoning, corner cases tested on the Series 7. | Timed, exam-format items |

Rule of thumb: **if a lesson can't generate a good question one level up, it isn't deep enough for its own level.**

---

## 3. The 100 → 400 ladder

Three tracks run in parallel — **Markets & Trading**, **Crypto**, and **Series 7 / regulation** — and converge at 400. Counts are target lesson counts per module.

### 100 — Foundations (market literacy)
*Objective: read a chart, understand a quote, place a basic order, and know what you own.*

- **Market basics** (6): what a market/exchange is, tickers, market hours, participants, what a broker does, primary vs. secondary market.
- **Reading price** (7): line vs. candle ✅, candlestick anatomy ✅, timeframes, volume, trend basics, support/resistance intro, gaps.
- **Quotes & orders** (6): bid/ask/spread ✅, market vs. limit, stop & stop-limit, order lifecycle, slippage, liquidity intro.
- **Owning a position** (5): P&L realized/unrealized ✅, cost basis, breakeven, long vs. short intro, dividends intro.
- **Valuation intro** (5): P/E ✅, EPS, market cap, what "expensive" means, sectors & indices.
- **Crypto 100** (6): what a coin/token is, exchanges vs. wallets, market cap & supply, 24/7 markets, volatility, custody basics.

*~35 lessons. Today: 5 of them.*

### 200 — Mechanics & analysis
*Objective: analyze an asset two ways (technical + fundamental) and manage risk on a trade.*

- **Technical analysis** (10): moving averages, RSI, MACD, volume analysis, support/resistance depth, trendlines & channels, the major candle patterns (doji, engulfing, hammer), chart patterns (flags, triangles, head-and-shoulders), divergence, multi-timeframe analysis.
- **Fundamental analysis** (9): income statement, balance sheet, cash flow, P/E depth, P/B & P/S, dividend yield & payout, earnings reports & guidance, margins & ROE, growth vs. value.
- **Risk management** (7): position sizing, risk per trade, stop placement, risk/reward ratio, drawdown, diversification, the math of recovering losses.
- **Market structure** (6): order book & depth, market makers, exchanges vs. ECNs, T+1 settlement, after-hours, halts & circuit breakers.
- **Derivatives intro** (4): what options are, calls vs. puts, what futures are, why they exist.
- **Crypto 200** (7): wallets & keys, on-chain vs. exchange price, stablecoins, gas/fees, DEX vs. CEX, staking basics, reading on-chain data.

*~43 lessons.*

### 300 — Strategy & the professional toolkit
*Objective: run an actual method — strategy, sizing, and execution — and understand leverage and the major product classes.*

- **Options strategies** (9): intrinsic vs. time value, the Greeks, covered calls, protective puts, verticals/spreads, straddles & strangles, assignment & expiration, options on the sim.
- **Margin & leverage** (6): margin accounts, buying power, maintenance & margin calls, short selling mechanics, leverage risk, Reg T basics.
- **Trading styles** (6): day trading systems, swing trading systems, scalping vs. position trading, building a trading plan, journaling & review, trading psychology.
- **Fixed income & products** (7): bonds (coupon/yield/duration), the price/yield inverse, ETFs vs. mutual funds, index funds, REITs, packaged products, bond ladders.
- **Portfolio construction** (5): asset allocation, correlation, rebalancing, tax-loss harvesting intro, modern portfolio theory intro.
- **Backtesting & systems** (4): what backtesting is, overfitting, paper-to-live, evaluating a strategy's stats.
- **Crypto 300** (6): DeFi (lending/AMMs), yield & risks, derivatives in crypto (perps/funding), portfolio role of crypto, security & scams, regulation landscape.

*~43 lessons.*

### 400 — Mastery, regulation & the Series 7
*Objective: pass a Series 7-style exam and reason like a licensed professional.*
*Weighted to mirror the real exam — Function 3 (products, analysis, recommendations) is 73%, so options, products, and suitability dominate here.*

- **Advanced options** (8): full strategy matrix, breakeven/max-gain/max-loss math, multi-leg spreads, options rules & position limits, hedging, exam-style options problems.
- **Suitability & recommendations** (8): KYC, customer profiles, investment objectives, suitability reasoning, fiduciary vs. suitability, recommendation scenarios. *(Maps to exam Function 3.)*
- **Regulatory framework** (8): SEC, FINRA, MSRB, the SIE/Series 7 structure, registration, prohibited practices, reporting, anti-money-laundering.
- **Municipal & debt securities** (6): GO vs. revenue bonds, municipal taxation, the yield curve, callable/convertible bonds, money markets, muni exam math.
- **Accounts & processing** (6): account types, options account approval, opening accounts (Function 2), processing transactions (Function 4), confirmations & records, settlement edge cases.
- **Margin math at exam depth** (4): long & short margin accounts, combined accounts, SMA, margin calculations.
- **Exam mode** (5+): timed full-length mock exams, per-function weak-spot analysis, formula drills, a final readiness check.

*~45 lessons + the exam engine.*

---

## 4. Topic spiral (proof of progression)

How a single topic deepens across levels — this is what makes it a real 100→400 climb rather than a flat pile:

| Topic | 100 | 200 | 300 | 400 |
|---|---|---|---|---|
| **Candles/charts** | what a candle is ✅ | patterns & indicators | pattern-based systems | — |
| **Orders** | market vs. limit | order book & routing | execution in a strategy | processing & confirmation rules |
| **Valuation** | P/E ✅ | full ratio analysis | portfolio construction | product suitability |
| **Options** | — | what an option is | covered calls, spreads | exam math, position limits |
| **Risk** | P&L ✅ | position sizing | drawdown & psychology | margin math, suitability |
| **Crypto** | coins & wallets | on-chain & stablecoins | DeFi & derivatives | regulatory treatment |

Total target: **~165 lessons + assessments + exam engine**, vs. **5 today**.

---

## 5. Gap analysis & build priority

**Biggest gaps, in order:**

1. **Assessments don't exist.** The "Test" pillar is unbuilt — no question bank, no mastery gating. Depth means little without checking it. *Build the quiz engine next; it also feeds exam mode later.*
2. **No 200-level anywhere.** The jump from "what is a candle" to a usable skill (technical + fundamental analysis, risk sizing) is the missing middle. *This is where daily-trainer confidence actually comes from.*
3. **Options & regulation (73% of Series 7) are absent.** The exam outcome depends on 300/400 content that doesn't exist yet. *Largest writing effort; start sourcing/vetting early.*
4. **Crypto track is one lesson-band behind.** Only a 100-level sketch is implied; needs its parallel ladder.
5. **Content accuracy at 400 is a liability.** Exam-grade material must be vetted against the current FINRA outline — consider licensing a Series 7 question bank rather than authoring 1,000 items from scratch.

**Recommended build sequence:**

1. **Finish 100-level Markets track** (~30 more lessons) + **quiz engine** + mastery gating. → A complete, gated beginner course.
2. **100-level Crypto** (6) so both markets are covered at the entry tier.
3. **200-level Technical + Fundamental + Risk** (~26). → This is the "confident day-trader" unlock.
4. **300-level Options + Margin + Styles.** → Pairs with the simulator (trade what you learn).
5. **400-level + Exam mode.** → The Series 7 outcome. Vet content hard; license a question bank.

**Authoring model that scales:** lessons are typed data (`web/lib/lessons/`), so depth is additive — new lessons are new files, no re-architecture. Define each topic once with its 100/200/300/400 rungs, then fill rungs over time. A lesson "graduates" only when it passes the rubric in §2 and can spawn a good question one level up.

---

## 6. Answer to the question

**Do we have enough depth?** Per lesson, yes — the five that exist are well-built. Across the course, no: we have a strong toe-hold on the 100 level and nothing above it, plus no assessments. The path to 400 is clear and additive — roughly **160 more lessons on a defined spiral**, built in the sequence above, with the quiz/exam engine as the connective tissue that turns content into measured mastery.
