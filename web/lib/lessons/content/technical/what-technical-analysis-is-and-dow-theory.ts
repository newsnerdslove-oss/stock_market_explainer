import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "what-technical-analysis-is-and-dow-theory",
  title: "What Technical Analysis Is + Dow Theory",
  level: 2,
  moduleId: "markets-technical",
  moduleOrder: 12,
  summary:
    "The three premises behind technical analysis, the technician-vs-fundamentalist split, and the founding framework — Dow Theory.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "**Technical analysis** studies *price and volume* to gauge where a market may go next. It doesn't ask what a company is *worth* — it reads the footprints buyers and sellers leave on the chart. Everything that follows describes *tendencies*, not certainties, and this is educational material, not financial advice.",
    },
    { type: "heading", text: "The three premises" },
    {
      type: "text",
      body:
        "Technical analysis rests on three assumptions. **(1) Price discounts everything** — every known fact, fear, and forecast is *already* baked into the price, so the chart reflects all information. **(2) Prices move in trends** — moves persist in a direction rather than wandering randomly. **(3) History tends to repeat** — recurring patterns in price reflect crowd psychology that behaves similarly over time.",
    },
    { type: "heading", text: "Technician vs. fundamentalist" },
    {
      type: "text",
      body:
        "A **fundamentalist** asks *why* — studying earnings, the balance sheet, and the economy to estimate a security's intrinsic value, then buying when price sits below it. A **technician** asks *what* and *when* — reading the chart itself, indifferent to the cause. The fundamentalist studies the **cause** of a move; the technician studies its **effect**. Many investors blend the two: fundamentals for *what* to own, technicals for *when* to act.",
    },
    { type: "heading", text: "Dow Theory: the original framework" },
    {
      type: "text",
      body:
        "**Dow Theory** — drawn from **Charles Dow's** editorials in *The Wall Street Journal* around the turn of the 20th century — is the grandparent of modern technical analysis. It introduced the idea that the *averages* (the **Industrials** and the **Transports**, originally the Rails) reveal the market's underlying trend, and laid down a set of tenets technicians still lean on today.",
    },
    { type: "heading", text: "Three trends" },
    {
      type: "text",
      body:
        "Dow described three trends at once, like tides, waves, and ripples. The **primary trend** is the major tide — the long-term direction lasting *months to years*. The **secondary** (intermediate) trend is a counter-move *against* the primary — a correction in a bull market or a rally in a bear — lasting *weeks to a few months*. The **minor trend** is day-to-day *noise* lasting *days to weeks*, the least reliable of the three.",
    },
    { type: "heading", text: "Three phases of a primary trend" },
    {
      type: "text",
      body:
        "A primary **bull** market unfolds in three phases: **accumulation** (informed money quietly buys while sentiment is still grim), **public participation** (the trend becomes obvious, the crowd piles in, prices rise fastest), and **excess/distribution** (euphoria peaks and the smart money quietly sells to latecomers). A primary **bear** market mirrors this — distribution, public participation, then **panic** capitulation.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Technical analysis", def: "Studying price and volume to forecast direction — reads the chart, not the company's books." },
        { term: "Price discounts everything", def: "Premise that all known information is already reflected in the current price." },
        { term: "Technician", def: "An analyst who studies the chart (the *effect*) and is indifferent to the cause of a move." },
        { term: "Fundamentalist", def: "An analyst who studies intrinsic value (the *cause*) — earnings, financials, the economy." },
        { term: "Dow Theory", def: "Charles Dow's founding framework: the averages reveal the market's trend." },
        { term: "Primary trend", def: "The major, long-term direction lasting months to years — the 'tide.'" },
        { term: "Secondary trend", def: "An intermediate counter-move against the primary, lasting weeks to months." },
        { term: "Minor trend", def: "Short-term day-to-day noise lasting days to weeks — the least reliable trend." },
        { term: "Confirmation", def: "The Industrial and Transportation averages must move the same way for a trend signal to be valid." },
      ],
    },
    { type: "heading", text: "Confirmation: the averages must agree" },
    {
      type: "text",
      body:
        "Dow Theory's signature rule: the **Industrial** and **Transportation** averages must **confirm** each other. The logic is economic — if factories (Industrials) are producing more goods, the railroads and shippers (Transports) must be *moving* those goods. If only one average makes a new high while the other lags, the signal is **unconfirmed** and suspect. A new high in *both* confirms the primary uptrend.",
    },
    {
      type: "text",
      body:
        "Two more tenets round it out. **Volume should confirm the trend** — volume ought to expand in the primary trend's direction and contract on counter-moves. And a **trend persists until a clear reversal** — you assume the primary trend remains in force until decisive evidence (often a *failure* to make a new high plus a break of the prior low, confirmed by both averages) says otherwise. Don't call the top on a single wobble.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Where it falls short: Dow Theory is *descriptive*, not a precise trading system — it confirms trends only *after* they're well underway, so signals lag. And the Industrials-confirm-Transports logic was built for a 1900s industrial economy; in a service- and tech-heavy market, some argue the Transports are a weaker proxy for the whole economy than they once were.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *\"technical analysis ignores the news.\"* The opposite — the first premise is that **price already discounts** all the news. The technician isn't ignoring fundamentals; they're assuming the crowd has *already priced them in*, so the chart is where that collective verdict shows up.",
    },
  ],
};
