PayoffDiagram from stock-market-explainer-web. Use via `window.StocksDS.PayoffDiagram` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `PayoffDiagram.html`): Long Call, Bull Call Spread, Long Straddle, Covered Call.

## Props

```ts
interface PayoffDiagramProps {
  legs: PayoffLeg[];
  title?: string;
}
```

## Examples

```jsx
// Long Call
export const LongCall: Story = {
  args: {
    title: "Long call · strike 100 @ $5",
    legs: [{ instrument: "call", side: "long", strike: 100, premium: 5, qty: 1 }],
  },
};

// Bull Call Spread
export const BullCallSpread: Story = {
  args: {
    title: "Bull call spread · 100/110",
    legs: [
      { instrument: "call", side: "long", strike: 100, premium: 5, qty: 1 },
      { instrument: "call", side: "short", strike: 110, premium: 2, qty: 1 },
    ],
  },
};

// Long Straddle
export const LongStraddle: Story = {
  args: {
    title: "Long straddle · strike 100",
    legs: [
      { instrument: "call", side: "long", strike: 100, premium: 5, qty: 1 },
      { instrument: "put", side: "long", strike: 100, premium: 5, qty: 1 },
    ],
  },
};
```

### LongCall

```jsx
/* Long Call */ compose(S, "LongCall")
```

### BullCallSpread

```jsx
/* Bull Call Spread */ compose(S, "BullCallSpread")
```

### LongStraddle

```jsx
/* Long Straddle */ compose(S, "LongStraddle")
```

### CoveredCall

```jsx
/* Covered Call */ compose(S, "CoveredCall")
```
