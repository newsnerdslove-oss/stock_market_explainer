// ResearchChart — interactive TradingView-style chart mockup (no backend).
// Candles/bars/line/area/Heikin-Ashi · volume · EMA 9/20/50 · BB · VWAP · RSI pane ·
// crosshair + OHLC legend · working timeframes · drawing tools (H-Line/Alert) ·
// auto supply/demand zones. Faithful design stand-in for the real ResearchChart.
// Reads the global `A` palette (from aKit.jsx) so it themes light/dark.

// ---- seeded PRNG so a (symbol, timeframe) renders a stable series ----------
function mulberry32(seed) {
  return function () {
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function hashStr(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }

function genCandles(symbol, tf, base) {
  const N = 120;
  const cfg = { '1m': 0.0016, '5m': 0.0032, '15m': 0.0052, '1h': 0.009, '1d': 0.02 }[tf] || 0.003;
  const rnd = mulberry32(hashStr(symbol + '|' + tf));
  const out = [];
  let price = base * (1 - cfg * 6);
  let t = Date.now() - N * tfMs(tf);
  for (let i = 0; i < N; i++) {
    const drift = (rnd() - 0.5) * 2 * cfg;
    const o = price;
    const c = Math.max(0.01, o * (1 + drift));
    const hi = Math.max(o, c) * (1 + rnd() * cfg * 0.8);
    const lo = Math.min(o, c) * (1 - rnd() * cfg * 0.8);
    const v = Math.round(2000 + rnd() * 6000 + (Math.abs(drift) / cfg) * 4000);
    out.push({ t: t + i * tfMs(tf), o, h: hi, l: lo, c, v });
    price = c;
  }
  return out;
}
function tfMs(tf) { return { '1m': 60000, '5m': 300000, '15m': 900000, '1h': 3600000, '1d': 86400000 }[tf] || 60000; }

function rcEma(vals, p) {
  const k = 2 / (p + 1), out = []; let prev;
  vals.forEach((v, i) => { prev = i === 0 ? v : v * k + prev * (1 - k); out.push(prev); });
  return out;
}
function rcSma(vals, p) { return vals.map((_, i) => { if (i < p - 1) return null; let s = 0; for (let j = i - p + 1; j <= i; j++) s += vals[j]; return s / p; }); }
function rcRsi(closes, p = 14) {
  const out = new Array(closes.length).fill(null); let g = 0, l = 0;
  for (let i = 1; i < closes.length; i++) {
    const d = closes[i] - closes[i - 1];
    if (i <= p) { g += Math.max(0, d); l += Math.max(0, -d); if (i === p) { const rs = g / (l || 1e-9); out[i] = 100 - 100 / (1 + rs); } }
    else { g = (g * (p - 1) + Math.max(0, d)) / p; l = (l * (p - 1) + Math.max(0, -d)) / p; const rs = g / (l || 1e-9); out[i] = 100 - 100 / (1 + rs); }
  }
  return out;
}
function rcHeikin(cs) {
  const out = [];
  cs.forEach((d, i) => {
    const hc = (d.o + d.h + d.l + d.c) / 4;
    const ho = i === 0 ? (d.o + d.c) / 2 : (out[i - 1].o + out[i - 1].c) / 2;
    out.push({ t: d.t, o: ho, c: hc, h: Math.max(d.h, ho, hc), l: Math.min(d.l, ho, hc), v: d.v });
  });
  return out;
}

const TFS = ['1m', '5m', '15m', '1h', '1d'];
const TYPES = [['candles', 'Candles'], ['bars', 'Bars'], ['line', 'Line'], ['area', 'Area'], ['ha', 'HA']];
const INDS = [['ema9', 'EMA 9'], ['ema20', 'EMA 20'], ['ema50', 'EMA 50'], ['bb', 'BB'], ['vwap', 'VWAP'], ['rsi', 'RSI'], ['macd', 'MACD']];
const TOOLS = [['cursor', 'Cursor'], ['trend', 'Trend'], ['hline', 'H-Line'], ['fib', 'Fib'], ['demand', 'Demand'], ['supply', 'Supply'], ['alert', 'Alert']];

function ResearchChart({ symbol = 'AAPL', base = 295, height = 460 }) {
  const wrap = React.useRef(null);
  const [W, setW] = React.useState(820);
  const [tf, setTf] = React.useState('1m');
  const [type, setType] = React.useState('candles');
  const [inds, setInds] = React.useState({ ema9: true, ema20: true });
  const [tool, setTool] = React.useState('cursor');
  const [zones, setZones] = React.useState(false);
  const [hover, setHover] = React.useState(null);
  const [hlines, setHlines] = React.useState([]);
  const [alerts, setAlerts] = React.useState([]);

  React.useLayoutEffect(() => {
    const measure = () => { if (wrap.current) setW(wrap.current.clientWidth); };
    measure(); window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // data (stable per symbol+tf)
  const raw = React.useMemo(() => genCandles(symbol, tf, base), [symbol, tf, base]);
  const data = type === 'ha' ? rcHeikin(raw) : raw;
  const closes = data.map(d => d.c);
  const ema9 = rcEma(closes, 9), ema20 = rcEma(closes, 20), ema50 = rcEma(closes, 50);
  const mid = rcSma(closes, 20); const sd = closes.map((_, i) => { if (i < 19) return null; let s = 0; for (let j = i - 19; j <= i; j++) s += (closes[j] - mid[i]) ** 2; return Math.sqrt(s / 20); });
  const bbU = mid.map((m, i) => m == null ? null : m + 2 * sd[i]), bbL = mid.map((m, i) => m == null ? null : m - 2 * sd[i]);
  let cum = 0, cumv = 0; const vwap = data.map(d => { const tp = (d.h + d.l + d.c) / 3; cum += tp * d.v; cumv += d.v; return cum / cumv; });
  const rsiV = inds.rsi ? rcRsi(closes) : null;

  // layout
  const padL = 8, padR = 64, padT = 8;
  const rsiH = inds.rsi ? 90 : 0;
  const volH = 70, gap = 10;
  const chartTop = padT, chartH = height - padT - volH - gap - (rsiH ? rsiH + gap : 0) - 24;
  const volTop = chartTop + chartH + gap;
  const rsiTop = volTop + volH + gap;
  const plotW = W - padL - padR;
  const n = data.length, step = plotW / n;
  const cw = Math.max(1.5, step * 0.6);

  const hi = Math.max(...data.map(d => d.h)), lo = Math.min(...data.map(d => d.l));
  const padPrice = (hi - lo) * 0.08 || 1;
  const pMax = hi + padPrice, pMin = lo - padPrice;
  const yOf = (p) => chartTop + (pMax - p) / (pMax - pMin) * chartH;
  const xOf = (i) => padL + i * step + step / 2;
  const maxV = Math.max(...data.map(d => d.v));
  const vOf = (v) => volTop + volH - (v / maxV) * volH;

  const A = window.A || {};
  const up = A.green || '#1FA968', down = A.red || '#F0594C';
  const grid = A.borderSoft || '#eee', axisTxt = A.faint || '#999';
  const surface = A.card || '#fff';
  const last = data[n - 1].c;
  const lastUp = last >= data[n - 1].o;

  const polyline = (arr, color, wd = 1.5, dash) => {
    const pts = arr.map((v, i) => v == null ? null : `${xOf(i)},${yOf(v)}`).filter(Boolean).join(' ');
    return <polyline points={pts} fill="none" stroke={color} strokeWidth={wd} strokeDasharray={dash || 'none'} strokeLinejoin="round" />;
  };

  // mouse → crosshair / tool placement
  const evtXY = (e) => { const r = e.currentTarget.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
  const idxAt = (x) => Math.max(0, Math.min(n - 1, Math.floor((x - padL) / step)));
  const priceAt = (y) => pMax - (y - chartTop) / chartH * (pMax - pMin);
  const onMove = (e) => { const { x, y } = evtXY(e); setHover({ i: idxAt(x), x, y }); };
  const onLeave = () => setHover(null);
  const onClick = (e) => {
    const { y } = evtXY(e); const p = priceAt(y);
    if (tool === 'hline') setHlines(h => [...h, p]);
    else if (tool === 'alert') setAlerts(a => [...a, p]);
    else if (tool === 'demand' || tool === 'supply') setHlines(h => [...h, { band: p, kind: tool }]);
  };

  // pre-seeded auto supply/demand zones
  const autoZones = zones ? [{ kind: 'demand', lo: pMin + (pMax - pMin) * 0.12, hi: pMin + (pMax - pMin) * 0.22 },
    { kind: 'supply', lo: pMin + (pMax - pMin) * 0.74, hi: pMin + (pMax - pMin) * 0.84 }] : [];

  const hd = hover ? data[hover.i] : data[n - 1];
  const fmt = (v) => v == null ? '—' : (base >= 1000 ? v.toFixed(0) : v.toFixed(2));

  // price axis ticks
  const ticks = []; const TT = 7;
  for (let i = 0; i <= TT; i++) { const p = pMin + (pMax - pMin) * (i / TT); ticks.push(p); }

  const btn = (active, onClick, children, key) => (
    <span key={key} onClick={onClick} style={{ padding: '5px 10px', borderRadius: 8, cursor: 'pointer', fontSize: 12.5, fontWeight: 700,
      whiteSpace: 'nowrap', background: active ? (A.primary || '#2E7BE6') : 'transparent', color: active ? '#fff' : (A.muted || '#777') }}>{children}</span>
  );
  const chip = (active, onClick, children, key, color) => (
    <span key={key} onClick={onClick} style={{ padding: '5px 11px', borderRadius: 999, cursor: 'pointer', fontSize: 12, fontWeight: 700,
      border: `1.5px solid ${active ? (color || A.primary) : A.border}`, color: active ? (color || A.primaryDeep) : A.faint,
      background: active ? (A.primarySoft || '#eef') : 'transparent' }}>{children}</span>
  );

  const indColors = { ema9: A.amber || '#F5A623', ema20: A.blue || '#3B82F6', ema50: '#A855F7' };

  return (
    <div ref={wrap} style={{ background: surface, border: `1px solid ${A.border}`, borderRadius: A.radius || 18, overflow: 'hidden' }}>
      {/* toolbar */}
      <div style={{ padding: '12px 14px', borderBottom: `1px solid ${A.borderSoft}`, display: 'flex', flexDirection: 'column', gap: 9 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', gap: 2, background: A.sunk, borderRadius: 10, padding: 3 }}>{TFS.map(f => btn(tf === f, () => setTf(f), f, f))}</div>
          <div style={{ display: 'flex', gap: 2, background: A.sunk, borderRadius: 10, padding: 3 }}>{TYPES.map(([id, l]) => btn(type === id, () => setType(id), l, id))}</div>
          <div style={{ flex: 1 }} />
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            {INDS.map(([id, l]) => chip(!!inds[id], () => setInds(s => ({ ...s, [id]: !s[id] })), l, id, indColors[id]))}
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', gap: 2, background: A.sunk, borderRadius: 10, padding: 3 }}>{TOOLS.map(([id, l]) => btn(tool === id, () => setTool(id), l, id))}</div>
          {chip(zones, () => setZones(z => !z), 'Auto-zones', 'az')}
          {(hlines.length > 0 || alerts.length > 0) && (
            <span onClick={() => { setHlines([]); setAlerts([]); }} style={{ fontSize: 12, fontWeight: 700, color: A.red, cursor: 'pointer', marginLeft: 4 }}>Clear drawings</span>
          )}
        </div>
        {/* OHLC legend */}
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', fontFamily: A.mono, fontSize: 12, color: A.muted, fontWeight: 600 }}>
          <span><b style={{ color: A.faint }}>O</b> {fmt(hd.o)}</span>
          <span><b style={{ color: A.faint }}>H</b> {fmt(hd.h)}</span>
          <span><b style={{ color: A.faint }}>L</b> {fmt(hd.l)}</span>
          <span><b style={{ color: A.faint }}>C</b> <b style={{ color: hd.c >= hd.o ? up : down }}>{fmt(hd.c)}</b></span>
          <span><b style={{ color: A.faint }}>Vol</b> {hd.v.toLocaleString()}</span>
          {inds.ema9 && <span style={{ color: indColors.ema9 }}>EMA9 {fmt(ema9[hover ? hover.i : n - 1])}</span>}
          {inds.ema20 && <span style={{ color: indColors.ema20 }}>EMA20 {fmt(ema20[hover ? hover.i : n - 1])}</span>}
          {inds.ema50 && <span style={{ color: indColors.ema50 }}>EMA50 {fmt(ema50[hover ? hover.i : n - 1])}</span>}
        </div>
      </div>

      {/* chart */}
      <svg width={W} height={height} style={{ display: 'block', cursor: tool === 'cursor' ? 'crosshair' : 'copy' }}
        onMouseMove={onMove} onMouseLeave={onLeave} onClick={onClick}>
        {/* gridlines + price axis */}
        {ticks.map((p, i) => (
          <g key={i}>
            <line x1={padL} y1={yOf(p)} x2={W - padR} y2={yOf(p)} stroke={grid} strokeWidth="1" />
            <text x={W - padR + 6} y={yOf(p) + 3.5} fontSize="10.5" fill={axisTxt} fontFamily={A.mono}>{fmt(p)}</text>
          </g>
        ))}
        {/* auto zones + drawn bands */}
        {autoZones.map((z, i) => (
          <rect key={'z' + i} x={padL} y={yOf(z.hi)} width={plotW} height={Math.abs(yOf(z.lo) - yOf(z.hi))}
            fill={(z.kind === 'demand' ? up : down)} opacity="0.1" />
        ))}
        {/* Bollinger band fill */}
        {inds.bb && (() => { const u = bbU.map((v, i) => v == null ? null : `${xOf(i)},${yOf(v)}`).filter(Boolean);
          const lw = bbL.map((v, i) => v == null ? null : `${xOf(i)},${yOf(v)}`).filter(Boolean).reverse();
          return <polygon points={[...u, ...lw].join(' ')} fill={A.blue || '#3B82F6'} opacity="0.08" />; })()}

        {/* price series */}
        {(type === 'candles' || type === 'ha') && data.map((d, i) => {
          const g = d.c >= d.o, col = g ? up : down, x = xOf(i);
          return <g key={i}>
            <line x1={x} y1={yOf(d.h)} x2={x} y2={yOf(d.l)} stroke={col} strokeWidth="1" />
            <rect x={x - cw / 2} y={yOf(Math.max(d.o, d.c))} width={cw} height={Math.max(1, Math.abs(yOf(d.o) - yOf(d.c)))} fill={col} />
          </g>;
        })}
        {type === 'bars' && data.map((d, i) => {
          const g = d.c >= d.o, col = g ? up : down, x = xOf(i);
          return <g key={i}>
            <line x1={x} y1={yOf(d.h)} x2={x} y2={yOf(d.l)} stroke={col} strokeWidth="1.4" />
            <line x1={x - cw / 2} y1={yOf(d.o)} x2={x} y2={yOf(d.o)} stroke={col} strokeWidth="1.4" />
            <line x1={x} y1={yOf(d.c)} x2={x + cw / 2} y2={yOf(d.c)} stroke={col} strokeWidth="1.4" />
          </g>;
        })}
        {type === 'line' && polyline(closes, A.primary || '#2E7BE6', 2)}
        {type === 'area' && (() => { const pts = closes.map((c, i) => `${xOf(i)},${yOf(c)}`).join(' ');
          return <g><polygon points={`${padL},${chartTop + chartH} ${pts} ${W - padR},${chartTop + chartH}`} fill={A.primary || '#2E7BE6'} opacity="0.12" />
            <polyline points={pts} fill="none" stroke={A.primary || '#2E7BE6'} strokeWidth="2" /></g>; })()}

        {/* overlays */}
        {inds.ema9 && polyline(ema9, indColors.ema9, 1.5)}
        {inds.ema20 && polyline(ema20, indColors.ema20, 1.5)}
        {inds.ema50 && polyline(ema50, indColors.ema50, 1.5)}
        {inds.bb && <>{polyline(bbU, A.blue || '#3B82F6', 1, '4 3')}{polyline(bbL, A.blue || '#3B82F6', 1, '4 3')}</>}
        {inds.vwap && polyline(vwap, '#A855F7', 1.5, '5 3')}

        {/* volume */}
        {data.map((d, i) => { const g = d.c >= d.o; return <rect key={'v' + i} x={xOf(i) - cw / 2} y={vOf(d.v)} width={cw} height={volTop + volH - vOf(d.v)} fill={g ? up : down} opacity="0.5" />; })}
        <text x={padL} y={volTop + 12} fontSize="10" fill={axisTxt} fontFamily={A.mono}>Vol</text>

        {/* RSI pane */}
        {inds.rsi && rsiV && (() => {
          const ry = (v) => rsiTop + (100 - v) / 100 * rsiH;
          const pts = rsiV.map((v, i) => v == null ? null : `${xOf(i)},${ry(v)}`).filter(Boolean).join(' ');
          return <g>
            <rect x={padL} y={rsiTop} width={plotW} height={rsiH} fill="none" stroke={grid} />
            <line x1={padL} y1={ry(70)} x2={W - padR} y2={ry(70)} stroke={down} strokeWidth="0.8" strokeDasharray="3 3" opacity="0.5" />
            <line x1={padL} y1={ry(30)} x2={W - padR} y2={ry(30)} stroke={up} strokeWidth="0.8" strokeDasharray="3 3" opacity="0.5" />
            <polyline points={pts} fill="none" stroke="#A855F7" strokeWidth="1.5" />
            <text x={padL + 2} y={rsiTop + 12} fontSize="10" fill={axisTxt} fontFamily={A.mono}>RSI 14 · {fmt(rsiV[hover ? hover.i : n - 1])}</text>
          </g>;
        })()}

        {/* drawn h-lines / alerts / bands */}
        {hlines.map((h, i) => typeof h === 'number'
          ? <line key={'h' + i} x1={padL} y1={yOf(h)} x2={W - padR} y2={yOf(h)} stroke={A.ink} strokeWidth="1.2" strokeDasharray="6 3" />
          : <rect key={'h' + i} x={padL} y={yOf(h.band) - 14} width={plotW} height={28} fill={h.kind === 'demand' ? up : down} opacity="0.14" />)}
        {alerts.map((a, i) => <g key={'a' + i}>
          <line x1={padL} y1={yOf(a)} x2={W - padR} y2={yOf(a)} stroke={A.amber || '#F5A623'} strokeWidth="1.2" strokeDasharray="2 3" />
          <text x={padL + 4} y={yOf(a) - 4} fontSize="11" fill={A.amber || '#F5A623'} fontWeight="700">🔔 {fmt(a)}</text>
        </g>)}

        {/* current price label */}
        <g>
          <line x1={padL} y1={yOf(last)} x2={W - padR} y2={yOf(last)} stroke={lastUp ? up : down} strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
          <rect x={W - padR} y={yOf(last) - 9} width={padR} height={18} fill={lastUp ? up : down} />
          <text x={W - padR + 6} y={yOf(last) + 3.5} fontSize="10.5" fill="#fff" fontFamily={A.mono} fontWeight="700">{fmt(last)}</text>
        </g>

        {/* crosshair */}
        {hover && <g>
          <line x1={xOf(hover.i)} y1={chartTop} x2={xOf(hover.i)} y2={volTop + volH} stroke={axisTxt} strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1={padL} y1={hover.y} x2={W - padR} y2={hover.y} stroke={axisTxt} strokeWidth="0.8" strokeDasharray="3 3" />
          <rect x={W - padR} y={hover.y - 9} width={padR} height={18} fill={A.ink} />
          <text x={W - padR + 6} y={hover.y + 3.5} fontSize="10.5" fill={A.page} fontFamily={A.mono} fontWeight="700">{fmt(priceAt(hover.y))}</text>
        </g>}
      </svg>
    </div>
  );
}
window.ResearchChart = ResearchChart;
