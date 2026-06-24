// Direction C — "Editorial Coach": light, minimal, lots of air. Inter + JetBrains Mono.
const Cc = {
  page: '#FFFFFF', section: '#F6F7F9', ink: '#14161A', muted: '#6B7280', faint: '#9AA1AC',
  green: '#15A06B', greenSoft: '#EAF6F0', border: '#ECEEF1', radius: 12,
  font: "'Inter', sans-serif", mono: "'JetBrains Mono', monospace",
};

function Crow({ n, title, sub, pct, state }) {
  const done = state === 'done', locked = state === 'locked', active = state === 'active';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '20px 4px',
      borderTop: `1px solid ${Cc.border}`, opacity: locked ? 0.5 : 1 }}>
      <div style={{ fontFamily: Cc.mono, fontSize: 13, color: Cc.faint, width: 24 }}>{n}</div>
      <div style={{ width: 34, height: 34, borderRadius: '50%', flex: '0 0 auto',
        border: `1.5px solid ${done ? Cc.green : active ? Cc.ink : Cc.border}`,
        background: done ? Cc.green : 'transparent', color: done ? '#fff' : active ? Cc.ink : Cc.faint,
        display: 'grid', placeItems: 'center' }}>
        <Icon name={done ? 'check' : locked ? 'lock' : 'circle'} size={done ? 16 : 13} strokeWidth={done ? 3 : 2} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontWeight: 600, fontSize: 17, letterSpacing: '-.01em' }}>{title}</div>
        <div style={{ fontSize: 13.5, color: Cc.muted, marginTop: 2 }}>{sub}</div>
      </div>
      <div style={{ width: 160, flex: '0 0 auto' }}>
        {!locked && <Bar pct={pct} color={done ? Cc.green : Cc.ink} track={Cc.section} height={5} />}
      </div>
      <div style={{ fontFamily: Cc.mono, fontSize: 13, color: locked ? Cc.faint : Cc.ink, width: 44, textAlign: 'right' }}>
        {locked ? '—' : `${pct}%`}
      </div>
      <Icon name="chevron-right" size={18} color={Cc.faint} />
    </div>
  );
}

function Cstat({ value, label, accent }) {
  return (
    <div>
      <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: '-.03em', color: accent ? Cc.green : Cc.ink, lineHeight: 1 }}>{value}</div>
      <div style={{ fontFamily: Cc.mono, fontSize: 11.5, color: Cc.faint, letterSpacing: '.08em', textTransform: 'uppercase', marginTop: 8 }}>{label}</div>
    </div>
  );
}

function DirectionC() {
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
  const link = (label, active) => (
    <span style={{ fontFamily: Cc.mono, fontSize: 13, color: active ? Cc.ink : Cc.muted, cursor: 'pointer',
      borderBottom: active ? `2px solid ${Cc.green}` : '2px solid transparent', paddingBottom: 4 }}>{label}</span>
  );
  return (
    <div style={{ background: Cc.page, color: Cc.ink, fontFamily: Cc.font, padding: '28px 40px', minHeight: '100%' }}>
      {/* nav */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 26, marginBottom: 48,
        borderBottom: `1px solid ${Cc.border}`, paddingBottom: 20 }}>
        <span style={{ fontWeight: 800, fontSize: 19, letterSpacing: '-.03em', marginRight: 10 }}>Stax<span style={{ color: Cc.green }}>.</span></span>
        {link('LEARN', true)}{link('PRACTICE')}{link('MARKETS')}
        <div style={{ flex: 1 }} />
        <span style={{ fontFamily: Cc.mono, fontSize: 13, color: Cc.muted }}>12-day streak</span>
        <Avatar name="Maya R" size={34} bg={Cc.ink} color="#fff" />
      </div>

      {/* editorial header */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 40, marginBottom: 44 }}>
        <div style={{ maxWidth: 560 }}>
          <div style={{ fontFamily: Cc.mono, fontSize: 13, color: Cc.green, letterSpacing: '.06em', marginBottom: 16 }}>UNIT 02 — CHART PATTERNS</div>
          <h1 style={{ margin: 0, fontSize: 52, fontWeight: 700, letterSpacing: '-.035em', lineHeight: 1.04 }}>
            Keep going,<br />Maya.
          </h1>
          <p style={{ fontSize: 17, color: Cc.muted, lineHeight: 1.5, marginTop: 18, marginBottom: 24 }}>
            You're 60% through <span style={{ color: Cc.ink, fontWeight: 600 }}>Reading candlesticks</span> — three short lessons left before you level up.
          </p>
          <button style={{ background: Cc.ink, color: '#fff', border: 'none', borderRadius: 10,
            padding: '14px 24px', fontWeight: 600, fontSize: 15.5, fontFamily: Cc.font, cursor: 'pointer',
            display: 'inline-flex', alignItems: 'center', gap: 9 }}>
            Resume lesson <Icon name="arrow-right" size={17} />
          </button>
        </div>
        <div style={{ display: 'flex', gap: 44, paddingBottom: 6 }}>
          <Cstat value="60%" label="Unit progress" accent />
          <Cstat value="12" label="Day streak" />
          <Cstat value="340" label="XP this week" />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 48 }}>
        {/* lesson list */}
        <div>
          <div style={{ fontFamily: Cc.mono, fontSize: 12, color: Cc.faint, letterSpacing: '.08em', marginBottom: 4 }}>YOUR PATH · 4 UNITS</div>
          <Crow n="01" title="Candlestick basics" sub="6 lessons · completed" pct={100} state="done" />
          <Crow n="02" title="Spotting reversals" sub="4 of 7 lessons" pct={57} state="active" />
          <Crow n="03" title="Options payoffs" sub="5 lessons · locked" pct={0} state="locked" />
          <Crow n="04" title="Build a portfolio" sub="8 lessons · locked" pct={0} state="locked" />
        </div>

        {/* side */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ border: `1px solid ${Cc.border}`, borderRadius: Cc.radius, padding: 22 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 2 }}>
              <div style={{ fontWeight: 600, fontSize: 15.5 }}>Practice portfolio</div>
              <span style={{ fontFamily: Cc.mono, fontSize: 13, color: Cc.green }}>+18.0%</span>
            </div>
            <div style={{ fontSize: 13, color: Cc.muted, marginBottom: 14 }}>Paper trades · last 30 days</div>
            <DSChart kind="EquityCurve" light equity={[100, 102, 101, 104, 103, 107, 111, 110, 114, 118]} />
          </div>

          <div style={{ background: Cc.section, borderRadius: Cc.radius, padding: 22 }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: Cc.greenSoft, color: Cc.green,
                display: 'grid', placeItems: 'center', flex: '0 0 auto' }}><Icon name="lightbulb" size={18} /></div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 15 }}>Tip of the day</div>
                <div style={{ fontSize: 13.5, color: Cc.muted, lineHeight: 1.5, marginTop: 4 }}>
                  A long lower wick after a downtrend — a <span style={{ color: Cc.ink, fontWeight: 600 }}>hammer</span> — often signals buyers stepping in.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
window.DirectionC = DirectionC;
