EquityCurve from stock-market-explainer-web. Use via `window.StocksDS.EquityCurve` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `EquityCurve.html`): Up, Down, Volatile.

## Props

```ts
interface EquityCurveProps {
  equity: number[];
}
```

## Examples

```jsx
// Up
export const Up: Story = {
  args: { equity: [100, 101, 103, 102, 105, 108, 107, 110, 114, 113, 118] },
};

// Down
export const Down: Story = {
  args: { equity: [100, 99, 101, 98, 96, 97, 93, 94, 90, 88, 86] },
};

// Volatile
export const Volatile: Story = {
  args: { equity: [100, 106, 97, 109, 92, 104, 88, 101, 95, 112, 103] },
};
```

### Up

```jsx
/* Up */ compose(S, "Up")
```

### Down

```jsx
/* Down */ compose(S, "Down")
```

### Volatile

```jsx
/* Volatile */ compose(S, "Volatile")
```
