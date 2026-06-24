# Stock Market Explainer — chart design system

A small set of **dependency-free SVG chart components** for a finance-education app,
styled with a Tailwind **design-token** palette. Dark theme by default.

## Setup & theme

Components render from `window.StocksDS.*`. They are pure SVG — no provider or context
needed. The look comes from the **design tokens** in `styles.css`, which ship a dark
`:root` theme by default; add the `light` class on an ancestor to flip to the light
theme. Render components inside a token-styled container so backgrounds and text match:

```jsx
<div className="bg-canvas text-ink font-sans" style={{ padding: 24 }}>
  <EquityCurve equity={[100, 103, 101, 107, 112, 118]} />
</div>
```

## Styling idiom — Tailwind token utilities

Style your own layout/markup with these **semantic token classes** (not raw hex). They
also take opacity modifiers, e.g. `bg-up/10`, `border-strong/40`.

| Concern | Classes |
|---|---|
| Surfaces | `bg-canvas` (page), `bg-surface`, `bg-surface-2` |
| Borders | `border-hairline`, `border-strong` |
| Text | `text-ink` (primary), `text-muted`, `text-faint` |
| Semantic | `up` (green ▲), `down` (red ▼), `learn` (purple), `streak` (amber) — as `text-*` / `bg-*` / `border-*` / `stroke-*` |
| Type | `font-sans`, `font-mono` (numeric data uses `font-mono` / `tabular-nums`) |

Every color flows through CSS variables, so the same class works in dark and light.

## Components

- **CandleAnatomy** — a fixed labeled diagram of one candlestick (no props). Teaching aid.
- **EquityCurve** — `equity: number[]` (indexed to 100). Green if it ends up, red if down; dashed break-even at 100.
- **PayoffDiagram** — `legs: PayoffLeg[]` (`{ instrument: "call"|"put"|"stock"; side: "long"|"short"; strike?; premium?; qty? }`), optional `title`. Draws the P/L-at-expiration curve with profit/loss fills and breakevens.
- **PatternChart** — `candles: OHLC[]` (`{ open, high, low, close }`). Green up / red down candles with wicks, auto-scaled. Optional `onPick`/`picked`/`correctIndex` make candles clickable with highlight boxes.

## Where the truth lives

- `styles.css` (and its imports) — the token utilities and theme variables.
- Each component's `<Name>.d.ts` (props) and `<Name>.prompt.md` (usage).
