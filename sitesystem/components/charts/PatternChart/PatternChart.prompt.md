PatternChart from stock-market-explainer-web. Use via `window.StocksDS.PatternChart` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `PatternChart.html`): Bullish Engulfing, Hammer, Doji, Interactive.

## Props

```ts
interface PatternChartProps {
  candles: OHLC[];
  onPick?: (index: number) => void;
  picked?: number;
  correctIndex?: number;
}
```

## Examples

```jsx
// Bullish Engulfing
export const BullishEngulfing: Story = { args: { candles: bullishEngulfing() } };

// Hammer
export const Hammer: Story = { args: { candles: hammer() } };

// Doji
export const Doji: Story = { args: { candles: doji() } };

// Interactive trainer state: clickable candles, with a wrong pick (red) and the
// correct candle (green) highlighted after a guess.
```

### BullishEngulfing

```jsx
/* Bullish Engulfing */ compose(S, "BullishEngulfing")
```

### Hammer

```jsx
/* Hammer */ compose(S, "Hammer")
```

### Doji

```jsx
/* Doji */ compose(S, "Doji")
```

### Interactive

```jsx
/* Interactive */ compose(S, "Interactive")
```
