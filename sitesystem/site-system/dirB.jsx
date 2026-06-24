// Direction B — "Night Trader": dark, energetic, data-forward. Inter + JetBrains Mono.
const B = {
  page: '#0B0E14', card: '#141922', card2: '#1B212C', ink: '#E8EDF4', muted: '#8A94A6', faint: '#5A6376',
  green: '#2BD17E', purple: '#8B7CF6', amber: '#F5A623', red: '#FF5C5C',
  border: '#1E2530', strong: '#232A36', radius: 16,
  font: "'Inter', sans-serif", mono: "'JetBrains Mono', monospace",
};

function BpillB({ icon, children, color }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 11px', borderRadius: 10,
      background: B.card2, border: `1px solid ${B.strong}`, color: B.ink, fontSize: 13, fontWeight: 600 }}>
      {icon && <Icon name={icon} size={14} color={color} />}<span style={{ fontFamily: B.mono, color }}>{children}</span>
    </span>
  );
}

function BnodeB({ title, sub, icon, state, last }) {
  const map = {
    done: { ring: B.green, bg: 'rgba(43,209,126,.12)', glow: 'rgba(43,209,126,.35)' },
    active: { ring: B.purple, bg: 'rgba(139,124,246,.14)', glow: 'rgba(139,124,246,.45)' },
    locked: { ring: B.strong, bg: B.card2, glow: 'transparent' },
  }[state];
  return (
    <div style={{ display: 'flex', gap: 16, opacity: state === 'locked' ? 0.55 : 1 }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: 48, height: 48, borderRadius: 14, background: map.bg, border: `2px solid ${map.ring}`,
          display: 'grid', placeItems: 'center', color: map.ring, flex: '0 0 auto',
          boxShadow: `0 0 18px ${map.glow}` }}>
          <Icon name={state === 'locked' ? 'lock' : icon} size={22} />
        </div>
        {!last && <div style={{ width: 2, flex: 1, minHeight: 26, background: B.strong, marginTop: 4 }}></div>}
      </div>
      <div style={{ paddingBottom: 22, paddingTop: 4, flex: 1 }}>
        <div style={{ fontWeight: 700, fontSize: 16, color: B.ink }}>{title}</div>
        <div style={{ fontSize: 13, color: B.muted, marginTop: 2 }}>{sub}</div>
        {state === 'active' && <div style={{ marginTop: 10, maxWidth: 280 }}><Bar pct={57} color={B.purple} track={B.card2} height={7} glow /></div>}
      </div>
    </div>
  );
}

function Bstat({ label, value, unit, color }) {
  return (
    <div style={{ flex: 1, background: B.card2, borderRadius: 12, padding: '14px 16px', border: `1px solid ${B.border}` }}>
      <div style={{ fontSize: 11, color: B.faint, fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: 6 }}>{label}</div>
      <div style={{ fontFamily: B.mono, fontWeight: 600, fontSize: 24, color }}>{value}<span style={{ fontSize: 13, color: B.muted, marginLeft: 3 }}>{unit}</span></div>
    </div>
  );
}

function DirectionB() {
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
  const navItem = (label, icon, active) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 14px', borderRadius: 10,
      color: active ? B.ink : B.muted, background: active ? B.card2 : 'transparent', fontWeight: 600, fontSize: 14, cursor: 'pointer' }}>
      <Icon name={icon} size={17} color={active ? B.green : B.muted} />{label}
    </div>
  );
  return (
    <div style={{ background: B.page, color: B.ink, fontFamily: B.font, padding: 28, minHeight: '100%' }}>
      {/* nav */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 26 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginRight: 16 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: `linear-gradient(135deg, ${B.green}, ${B.purple})`,
            display: 'grid', placeItems: 'center', color: '#06140C', fontWeight: 800, fontSize: 19 }}>S</div>
          <span style={{ fontWeight: 800, fontSize: 19, letterSpacing: '-.02em' }}>Stax</span>
        </div>
        {navItem('Learn', 'graduation-cap', true)}
        {navItem('Practice', 'dumbbell')}
        {navItem('Markets', 'candlestick-chart')}
        <div style={{ flex: 1 }} />
        <BpillB icon="flame" color={B.amber}>12d</BpillB>
        <BpillB icon="zap" color={B.purple}>340 XP</BpillB>
        <Avatar name="Maya R" size={38} bg={B.card2} color={B.green} ring={B.strong} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 330px', gap: 22 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          {/* hero */}
          <div style={{ position: 'relative', borderRadius: B.radius, padding: 26, overflow: 'hidden',
            background: `radial-gradient(120% 140% at 0% 0%, rgba(139,124,246,.22), transparent 55%), radial-gradient(120% 140% at 100% 100%, rgba(43,209,126,.16), transparent 55%), ${B.card}`,
            border: `1px solid ${B.strong}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
              <Ring size={94} stroke={9} pct={0.6} color={B.green} track={B.card2}>
                <div style={{ fontFamily: B.mono, fontWeight: 600, fontSize: 22, color: B.ink }}>60<span style={{ fontSize: 12, color: B.muted }}>%</span></div>
              </Ring>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: B.mono, fontSize: 12, color: B.green, letterSpacing: '.08em', marginBottom: 6 }}>UNIT 02 · CHART PATTERNS</div>
                <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-.02em', marginBottom: 6 }}>Reading candlesticks</div>
                <div style={{ fontSize: 14, color: B.muted }}>3 lessons to Level 6. Keep the streak alive.</div>
              </div>
              <button style={{ background: B.green, color: '#06140C', border: 'none', borderRadius: 12,
                padding: '13px 22px', fontWeight: 800, fontSize: 15, fontFamily: B.font, cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 8, boxShadow: `0 0 24px rgba(43,209,126,.4)` }}>
                Resume <Icon name="play" size={16} />
              </button>
            </div>
          </div>

          {/* path */}
          <div style={{ background: B.card, border: `1px solid ${B.border}`, borderRadius: B.radius, padding: 24 }}>
            <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 20 }}>Your path</div>
            <BnodeB title="Candlestick basics" sub="6 / 6 lessons · +120 XP" icon="bar-chart-3" state="done" />
            <BnodeB title="Spotting reversals" sub="4 / 7 lessons · in progress" icon="activity" state="active" />
            <BnodeB title="Options payoffs" sub="Locked · finish reversals first" icon="git-branch" state="locked" />
            <BnodeB title="Build a portfolio" sub="Locked" icon="wallet" state="locked" last />
          </div>
        </div>

        {/* right rail */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ background: B.card, border: `1px solid ${B.border}`, borderRadius: B.radius, padding: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 14 }}>Today</div>
            <div style={{ display: 'flex', gap: 10 }}>
              <Bstat label="Lessons" value="3" unit="/4" color={B.green} />
              <Bstat label="Streak" value="12" unit="d" color={B.amber} />
              <Bstat label="Level" value="5" unit="" color={B.purple} />
            </div>
          </div>

          <div style={{ background: B.card, border: `1px solid ${B.border}`, borderRadius: B.radius, padding: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
              <div style={{ fontWeight: 700, fontSize: 15 }}>Streak</div>
              <span style={{ fontFamily: B.mono, fontSize: 12, color: B.faint }}>best: 28d</span>
            </div>
            <WeekDots today={4} on={B.amber} off={B.card2} txt={B.faint}
              days={[{ l: 'M', done: true }, { l: 'T', done: true }, { l: 'W', done: true }, { l: 'T', done: true }, { l: 'F', done: false }, { l: 'S', done: false }, { l: 'S', done: false }]} />
          </div>

          <div style={{ background: B.card, border: `1px solid ${B.border}`, borderRadius: B.radius, padding: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4 }}>
              <div style={{ fontWeight: 700, fontSize: 15 }}>Paper portfolio</div>
              <span style={{ fontFamily: B.mono, fontSize: 13, color: B.green }}>+18.0%</span>
            </div>
            <div style={{ fontSize: 13, color: B.muted, marginBottom: 10 }}>30-day practice equity</div>
            <DSChart kind="EquityCurve" equity={[100, 102, 101, 104, 103, 107, 111, 110, 114, 118]} />
          </div>
        </div>
      </div>
    </div>
  );
}
window.DirectionB = DirectionB;
