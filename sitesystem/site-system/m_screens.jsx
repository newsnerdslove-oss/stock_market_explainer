// Mobile screens — phone-adapted versions of the core Stax loop.
// Rendered inside <IOSDevice> frames (see Stax Mobile.html). Reuses the kit
// palette (A), Icon, Pill, Badge, Ring, Bar, DSChart, ResearchChart, trade store.

// Bottom tab bar (visual active state per screen).
function MSymbolMark({ sym, color, size = 36 }) {
  return (
    <div style={{ width: size, height: size, borderRadius: 11, flex: '0 0 auto', display: 'grid', placeItems: 'center',
      background: (color || '#888') + '22', color: color || '#888', fontWeight: 800, fontSize: size * 0.32, fontFamily: window.A.font }}>
      {sym.slice(0, 2)}
    </div>
  );
}
function MTabBar({ active }) {
  const tabs = [['today', 'Today', 'sparkles'], ['learn', 'Learn', 'graduation-cap'], ['invest', 'Invest', 'line-chart'], ['you', 'You', 'user']];
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
  return (
    <div style={{ display: 'flex', borderTop: `1px solid ${A.border}`, background: A.card, paddingBottom: 24, paddingTop: 9 }}>
      {tabs.map(([id, label, ic]) => {
        const on = active === id;
        return (
          <div key={id} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, color: on ? A.primary : A.faint }}>
            <Icon name={ic} size={23} strokeWidth={on ? 2.5 : 2} />
            <span style={{ fontSize: 10.5, fontWeight: on ? 800 : 600 }}>{label}</span>
          </div>
        );
      })}
    </div>
  );
}

function MShell({ active, children, padTop = 56 }) {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: A.page, color: A.ink, fontFamily: A.font }}>
      <div style={{ flex: 1, overflow: 'auto', padding: `${padTop}px 16px 14px` }}>{children}</div>
      <MTabBar active={active} />
    </div>
  );
}

// ── Today ───────────────────────────────────────────────────────────────
function MToday() {
  const [pick, setPick] = React.useState(null);
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
  const QOTD = { q: 'A long lower wick after a downtrend usually signals…', correct: 1, options: ['Sellers still in control', 'Buyers stepped in', 'Market closed'] };
  return (
    <MShell active="today">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
        <div>
          <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-.02em' }}>Good morning, Maya</div>
          <div style={{ fontSize: 13, color: A.muted, fontWeight: 600 }}>Here's your daily warm-up</div>
        </div>
        <Pill icon="flame" bg={A.amberSoft} fg={A.amberInk} size="sm">12</Pill>
      </div>

      <div style={{ background: `linear-gradient(125deg, ${A.gradA}, ${A.gradB})`, borderRadius: 22, padding: 18, color: '#fff', marginBottom: 14, boxShadow: `0 10px 24px ${A.heroShadow}` }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,.2)', padding: '4px 10px', borderRadius: 999, fontSize: 11, fontWeight: 800, marginBottom: 10 }}>
          <Icon name="sparkles" size={13} /> CHART OF THE DAY
        </div>
        <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 4 }}>Spot the hammer</div>
        <div style={{ fontSize: 13, opacity: .92, fontWeight: 500, marginBottom: 14, lineHeight: 1.45 }}>Find the reversal candle to earn double XP.</div>
        <div style={{ background: '#fff', borderRadius: 10, padding: 8 }}>
          <DSChart kind="PatternChart" light candles={window.hammerCandles ? window.hammerCandles() : []} />
        </div>
      </div>

      <div style={{ background: A.card, border: `1px solid ${A.border}`, borderRadius: 18, padding: 16, marginBottom: 14, boxShadow: A.shadow }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <Icon name="help-circle" size={17} color={A.primary} /><span style={{ fontWeight: 800, fontSize: 14 }}>Question of the day</span>
        </div>
        <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 12, lineHeight: 1.3 }}>{QOTD.q}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {QOTD.options.map((o, i) => {
            const answered = pick !== null, correct = i === QOTD.correct, show = answered && (correct || i === pick);
            return (
              <div key={i} onClick={() => pick === null && setPick(i)} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '11px 13px', borderRadius: 12,
                border: `1.5px solid ${show ? (correct ? A.green : A.red) : A.border}`, background: show ? (correct ? A.greenSoft : A.redSoft) : A.card, fontWeight: 700, fontSize: 13.5 }}>
                <span style={{ width: 19, height: 19, borderRadius: '50%', flex: '0 0 auto', display: 'grid', placeItems: 'center', border: `2px solid ${show ? (correct ? A.green : A.red) : A.faint}`, background: show ? (correct ? A.green : A.red) : 'transparent', color: '#fff' }}>
                  {show && <Icon name={correct ? 'check' : 'x'} size={11} strokeWidth={3} />}
                </span>{o}
              </div>
            );
          })}
        </div>
        {pick !== null && <div style={{ marginTop: 10, fontSize: 12.5, color: A.muted, fontWeight: 600 }}>{pick === QOTD.correct ? '✅ Buyers absorbed the selling. +10 XP' : 'A long lower wick shows buyers defended the low.'}</div>}
      </div>

      <div style={{ background: A.card, border: `1px solid ${A.border}`, borderRadius: 18, padding: 16, display: 'flex', alignItems: 'center', gap: 14, boxShadow: A.shadow }}>
        <Ring size={62} stroke={8} pct={0.5} color={A.amber} track={A.barTrack}><div style={{ fontWeight: 800, fontSize: 16 }}>1<span style={{ color: A.faint, fontSize: 11 }}>/2</span></div></Ring>
        <div><div style={{ fontWeight: 800, fontSize: 14 }}>Daily goal</div><div style={{ fontSize: 12.5, color: A.muted, fontWeight: 600 }}>Finish the challenge + one lesson.</div></div>
      </div>
    </MShell>
  );
}

// ── Lesson player ─────────────────────────────────────────────────────────
function MLesson() {
  const [pick, setPick] = React.useState(null);
  const [checked, setChecked] = React.useState(false);
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
  const opts = ['Lower than it opened', 'Higher than it opened', 'Exactly where it opened'];
  const correct = 1, isCorrect = pick === correct;
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: A.page, color: A.ink, fontFamily: A.font }}>
      <div style={{ padding: '56px 18px 0', display: 'flex', alignItems: 'center', gap: 14 }}>
        <Icon name="x" size={24} color={A.faint} />
        <div style={{ flex: 1 }}><Bar pct={55} color={A.green} track={A.barTrack} height={12} /></div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Icon name="heart" size={20} color={A.red} style={{ fill: A.red }} /><span style={{ fontWeight: 800, fontFamily: A.mono }}>3</span></div>
      </div>
      <div style={{ flex: 1, overflow: 'auto', padding: '22px 18px' }}>
        <Badge tone="amber">Quick check</Badge>
        <h1 style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-.01em', margin: '14px 0 18px', lineHeight: 1.3 }}>A green body means the candle closed…</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
          {opts.map((o, i) => {
            const sel = pick === i, showR = checked && i === correct, showW = checked && sel && i !== correct;
            return (
              <div key={i} onClick={() => !checked && setPick(i)} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '15px 15px', borderRadius: 15,
                border: `1.5px solid ${showR ? A.green : showW ? A.red : sel ? A.primary : A.border}`, background: showR ? A.greenSoft : showW ? A.redSoft : sel ? A.primarySoft : A.card, fontWeight: 700, fontSize: 15, boxShadow: A.shadow }}>
                <span style={{ width: 24, height: 24, borderRadius: 7, flex: '0 0 auto', display: 'grid', placeItems: 'center', border: `2px solid ${showR ? A.green : showW ? A.red : sel ? A.primary : A.faint}`, background: showR ? A.green : showW ? A.red : sel ? A.primary : 'transparent', color: '#fff', fontSize: 12, fontWeight: 800 }}>
                  {showR ? <Icon name="check" size={13} strokeWidth={3} /> : showW ? <Icon name="x" size={13} strokeWidth={3} /> : String.fromCharCode(65 + i)}
                </span>{o}
              </div>
            );
          })}
        </div>
        {checked && (
          <div style={{ marginTop: 16, background: isCorrect ? A.greenSoft : A.redSoft, border: `1px solid ${isCorrect ? A.green : A.red}`, borderRadius: 14, padding: '13px 15px' }}>
            <div style={{ fontWeight: 800, fontSize: 14, color: isCorrect ? A.green : A.red, marginBottom: 2 }}>{isCorrect ? 'Nailed it' : 'Not quite'}</div>
            <div style={{ fontSize: 13, color: A.ink, fontWeight: 600, lineHeight: 1.45 }}>Green = close above open. Buyers pushed the price up.</div>
          </div>
        )}
      </div>
      <div style={{ padding: '14px 18px 30px', borderTop: `1px solid ${A.borderSoft}` }}>
        {!checked
          ? <Btn kind={pick === null ? 'ghost' : 'primary'} full size="lg" style={pick === null ? { opacity: .55 } : {}} onClick={() => pick !== null && setChecked(true)}>Check</Btn>
          : <Btn kind={isCorrect ? 'success' : 'primary'} full size="lg" iconRight="arrow-right" onClick={() => { setChecked(false); setPick(null); }}>Continue</Btn>}
      </div>
    </div>
  );
}

// ── Invest / portfolio ──────────────────────────────────────────────────
function MInvest() {
  const t = useTrade();
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
  if (!t) return null;
  const tot = t.totals(), h = t.holdings().sort((a, b) => b.value - a.value), up = (v) => v >= 0 ? A.green : A.red;
  const eq = [0, .12, .08, .22, .34, .3, .46, .58, .52, .68, .8, .76, 1].map(s => Math.round(t.getState().deposit * .985 + (tot.total - t.getState().deposit * .985) * s));
  return (
    <MShell active="invest">
      <div style={{ marginBottom: 12 }}>
        <div style={{ fontSize: 13, color: A.muted, fontWeight: 700, marginBottom: 2 }}>Paper portfolio</div>
        <div style={{ fontSize: 34, fontWeight: 800, letterSpacing: '-.03em', fontFamily: A.mono }}>{usd(tot.total)}</div>
        <div style={{ fontSize: 14, fontWeight: 800, color: up(tot.dayChg) }}>{signed(tot.dayChg)} ({pct(tot.dayPct)}) today</div>
      </div>
      <div style={{ background: A.card, border: `1px solid ${A.border}`, borderRadius: 16, padding: 12, marginBottom: 14, boxShadow: A.shadow }}>
        <DSChart kind="EquityCurve" equity={eq} />
      </div>
      <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
        <Btn kind="success" full>Buy</Btn><Btn kind="ghost" full>Sell</Btn>
      </div>
      <div style={{ fontSize: 13, fontWeight: 800, color: A.muted, textTransform: 'uppercase', letterSpacing: '.04em', marginBottom: 8 }}>Positions</div>
      <div style={{ background: A.card, border: `1px solid ${A.border}`, borderRadius: 16, boxShadow: A.shadow, overflow: 'hidden' }}>
        {h.map((x, i) => (
          <div key={x.sym} style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '12px 14px', borderTop: i ? `1px solid ${A.borderSoft}` : 'none' }}>
            <MSymbolMark sym={x.sym} color={x.color} size={36} />
            <div style={{ flex: 1, minWidth: 0 }}><div style={{ fontWeight: 800, fontSize: 14 }}>{x.sym}</div><div style={{ fontSize: 12, color: A.muted, fontWeight: 600 }}>{qtyFmt(x.shares)} sh</div></div>
            <div style={{ textAlign: 'right' }}><div style={{ fontFamily: A.mono, fontWeight: 700, fontSize: 14 }}>{usd(x.value)}</div><div style={{ fontFamily: A.mono, fontWeight: 700, fontSize: 12, color: up(x.pl) }}>{pct(x.plPct)}</div></div>
          </div>
        ))}
      </div>
    </MShell>
  );
}

// ── Stock detail (compact, with chart) ────────────────────────────────────
function MStock() {
  const t = useTrade();
  const [side, setSide] = React.useState(null);
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
  if (!t) return null;
  const sym = t.getState().focus, q = t.quote(sym), up = (v) => v >= 0 ? A.green : A.red;
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: A.page, color: A.ink, fontFamily: A.font }}>
      <div style={{ flex: 1, overflow: 'auto', padding: '56px 16px 14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
          <MSymbolMark sym={sym} color={q.color} size={44} />
          <div style={{ flex: 1 }}><div style={{ fontSize: 20, fontWeight: 800 }}>{sym}</div><div style={{ fontSize: 12.5, color: A.muted, fontWeight: 600 }}>{q.name}</div></div>
          <Icon name="star" size={22} color={A.faint} />
        </div>
        <div style={{ marginBottom: 12 }}>
          <div style={{ fontSize: 30, fontWeight: 800, fontFamily: A.mono, letterSpacing: '-.02em' }}>{usd(q.price)}</div>
          <div style={{ fontSize: 14, fontWeight: 800, color: up(q.chg) }}>{signed(q.chg)} ({pct(q.pct)})</div>
        </div>
        <ResearchChart symbol={sym} base={q.price} height={300} />
        <div style={{ marginTop: 14, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {[['Open', usd(q.prev)], ['Mkt cap', q.type === 'Crypto' ? '$1.3T' : '$2.4T'], ['Day high', usd(q.price * 1.01)], ['52w', usd(q.prev * 0.7, 0) + '–' + usd(q.prev * 1.25, 0)]].map(([l, v], i) => (
            <div key={i} style={{ background: A.card, border: `1px solid ${A.border}`, borderRadius: 12, padding: '10px 13px' }}>
              <div style={{ fontSize: 11.5, color: A.muted, fontWeight: 700 }}>{l}</div><div style={{ fontFamily: A.mono, fontWeight: 700, fontSize: 14 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ padding: '12px 16px 30px', borderTop: `1px solid ${A.borderSoft}`, display: 'flex', gap: 10, background: A.card }}>
        <Btn kind="success" full size="lg">Buy</Btn><Btn kind="ghost" full size="lg">Sell</Btn>
      </div>
    </div>
  );
}

Object.assign(window, { MTabBar, MShell, MToday, MLesson, MInvest, MStock });
