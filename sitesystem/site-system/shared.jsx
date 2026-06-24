// Shared primitives for the dashboard direction explorations.
// Exposed on window for the per-direction babel files.

const cx = (...a) => a.filter(Boolean).join(' ');

// Lucide icon — relies on window.lucide.createIcons() being called after mount.
function Icon({ name, size = 18, color, strokeWidth = 2, style }) {
  return <i data-lucide={name} data-sw={strokeWidth} style={{ display: 'inline-flex', width: size, height: size, color, ...style }}></i>;
}

// Circular progress ring.
function Ring({ size = 84, stroke = 9, pct = 0, color = '#000', track = 'rgba(0,0,0,.08)', children }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const off = c * (1 - Math.max(0, Math.min(1, pct)));
  return (
    <div style={{ position: 'relative', width: size, height: size, flex: '0 0 auto', display: 'grid', placeItems: 'center' }}>
      <svg width={size} height={size} style={{ position: 'absolute', inset: 0, transform: 'rotate(-90deg)' }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={track} strokeWidth={stroke} />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={stroke}
          strokeDasharray={c} strokeDashoffset={off} strokeLinecap="round" />
      </svg>
      <div style={{ position: 'relative', textAlign: 'center', lineHeight: 1 }}>{children}</div>
    </div>
  );
}

// Linear progress bar.
function Bar({ pct = 0, color = '#000', track = 'rgba(0,0,0,.08)', height = 10, radius = 999, glow }) {
  return (
    <div style={{ width: '100%', height, background: track, borderRadius: radius, overflow: 'hidden' }}>
      <div style={{
        width: `${Math.max(0, Math.min(100, pct))}%`, height: '100%', background: color,
        borderRadius: radius, boxShadow: glow ? `0 0 12px ${color}` : 'none', transition: 'width .4s ease',
      }}></div>
    </div>
  );
}

// Avatar with initials.
function Avatar({ name = 'M', size = 36, bg = '#ddd', color = '#fff', ring }) {
  const initials = name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%', background: bg, color,
      display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: size * 0.38,
      flex: '0 0 auto', boxShadow: ring ? `0 0 0 2px ${ring}` : 'none',
    }}>{initials}</div>
  );
}

// Embed a DS chart, optionally inside a light-theme scope so its text tokens flip.
function DSChart({ kind, light, ...props }) {
  const C = (window.StocksDS || {})[kind];
  if (!C) return null;
  const el = <C {...props} />;
  // Follow the global theme unless an explicit `light` override is passed.
  const useLight = light !== undefined ? light : (window.__theme || 'light') !== 'dark';
  return useLight ? <div className="light" style={{ width: '100%' }}>{el}</div> : el;
}

// Week strip of day dots (for streaks).
function WeekDots({ days, on = '#000', off = 'rgba(0,0,0,.1)', txt = '#999', today = -1 }) {
  return (
    <div style={{ display: 'flex', gap: 8, justifyContent: 'space-between' }}>
      {days.map((d, i) => (
        <div key={i} style={{ textAlign: 'center', flex: 1 }}>
          <div style={{ fontSize: 11, color: txt, marginBottom: 6, fontWeight: 600 }}>{d.l}</div>
          <div style={{
            width: 30, height: 30, margin: '0 auto', borderRadius: '50%',
            display: 'grid', placeItems: 'center',
            background: d.done ? on : off,
            color: d.done ? '#fff' : txt,
            outline: i === today ? `2px solid ${on}` : 'none', outlineOffset: 2,
          }}>
            {d.done ? <Icon name="check" size={15} strokeWidth={3} /> : <span style={{ fontSize: 12 }}>·</span>}
          </div>
        </div>
      ))}
    </div>
  );
}

Object.assign(window, { cx, Icon, Ring, Bar, Avatar, DSChart, WeekDots });

// --- Paper-trading helpers (used by the trading screens) -----------------
// Subscribe a component to the live StaxTrade store; re-renders on every tick.
function useTrade() {
  const [, force] = React.useReducer(x => x + 1, 0);
  React.useEffect(() => window.StaxTrade && window.StaxTrade.subscribe(force), []);
  return window.StaxTrade;
}
// Money / number formatters.
const usd = (v, dp) => {
  const d = dp != null ? dp : (Math.abs(v) >= 1000 ? 0 : 2);
  return '$' + (v < 0 ? '-' : '') + Math.abs(v).toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d });
};
const signed = (v, dp = 2) => (v >= 0 ? '+' : '−') + usd(Math.abs(v), dp).replace('$', '$');
const pct = (v, dp = 2) => (v >= 0 ? '+' : '−') + Math.abs(v).toFixed(dp) + '%';
const qtyFmt = (v) => v >= 1 ? v.toLocaleString('en-US', { maximumFractionDigits: 4 }) : v.toString();

Object.assign(window, { useTrade, usd, signed, pct, qtyFmt });
