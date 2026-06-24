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

# StocksDS (stock-market-explainer-web@0.1.0)

This design system is the published stock-market-explainer-web React library, bundled as a single
browser global. All 4 components are the real upstream code.

## Where things are

- `_ds_bundle.js` — the whole-DS bundle at the project root; loads every component to `window.StocksDS`. First line is a `/* @ds-bundle: … */` metadata header.
- `styles.css` — the single stylesheet entry: it `@import`s the tokens, fonts, and component styles (`_ds_bundle.css`). Link this one file.
- `components/<group>/<Name>/<Name>.prompt.md` (example JSX + variants), `<Name>.d.ts` (types), `<Name>.html` (variant grid).
- `tokens/*.css` — CSS custom properties, names verbatim from upstream.
- `fonts/` — `@font-face` files + `fonts.css` (when the package ships fonts).

For a specific component, `read_file("components/<group>/<Name>/<Name>.prompt.md")`.

## Loading

Add these two lines to your page once (React must be on the page first):

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
```

Components are then available at `window.StocksDS.*`. Mount into a dedicated child node (e.g. `<div id="ds-root">`), not the host page's own React root, so the two trees don't collide:

```jsx
const { CandleAnatomy } = window.StocksDS;
ReactDOM.createRoot(document.getElementById('ds-root')).render(<CandleAnatomy />);
```

This DS's storybook wraps every story in decorators from `.storybook/preview`
(bundled for the preview cards as `_vendor/preview-decorators.js`). Components
likely need equivalent context — theme/i18n providers — in your tree too. The
exact chain hasn't been distilled into config, so check the DS's documented
provider setup before composing.

## Tokens

68 CSS custom properties from stock-market-explainer-web. Names are
preserved verbatim from upstream. They are declared inside `_ds_bundle.css` (this DS ships one compiled stylesheet rather than separate token files).

- **color** (16): `--tw-border-spacing-x`, `--tw-border-spacing-y`, `--tw-ring-offset-color`, …
- **spacing** (2): `--tw-ring-inset`, `--tw-space-y-reverse`
- **shadow** (4): `--tw-ring-offset-shadow`, `--tw-ring-shadow`, `--tw-shadow`, …
- **other** (46): `--tw-content`, `--tw-translate-x`, `--tw-translate-y`, …

## Components

### charts
- `CandleAnatomy`
- `EquityCurve` — A small SVG line of an equity curve (indexed to 100), green if it ends up.
- `PatternChart` — A small, dependency-free SVG candlestick chart  green up / red down candles
- `PayoffDiagram`
