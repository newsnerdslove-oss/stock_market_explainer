// Course catalog screen — Warm Campus.
function ScreenCatalog({ go, theme, setTheme }) {
  const [filter, setFilter] = React.useState('All');
  const filters = ['All', 'Beginner', 'Charts', 'Options', 'Portfolio'];
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });

  const units = [
    { n: '01', title: 'Market basics', sub: 'What stocks are, how prices move', icon: 'sprout', tint: [A.greenSoft, A.green], lessons: 5, mins: 22, state: 'done', tag: 'Beginner' },
    { n: '02', title: 'Chart patterns', sub: 'Candlesticks, trends & reversals', icon: 'candlestick-chart', tint: [A.primarySoft, A.primary], lessons: 7, mins: 35, state: 'active', pct: 57, tag: 'Charts' },
    { n: '03', title: 'Options payoffs', sub: 'Calls, puts & profit at expiry', icon: 'git-branch', tint: [A.blueSoft, A.blue], lessons: 5, mins: 28, state: 'locked', tag: 'Options' },
    { n: '04', title: 'Build a portfolio', sub: 'Diversify, size & rebalance', icon: 'wallet', tint: [A.amberSoft, A.amberInk], lessons: 8, mins: 40, state: 'locked', tag: 'Portfolio' },
  ];
  const shown = filter === 'All' ? units : units.filter(u => u.tag === filter);

  return (
    <AppShell tab="catalog" go={go} theme={theme} setTheme={setTheme}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 22 }}>
        <div>
          <h1 style={{ fontSize: 30, fontWeight: 800, letterSpacing: '-.02em', margin: '0 0 6px' }}>All units</h1>
          <p style={{ fontSize: 15, color: A.muted, fontWeight: 600, margin: 0 }}>4 units · 25 lessons · ~2h to finish the track</p>
        </div>
        <Pill icon="award" bg={A.greenSoft} fg={A.green}>1 of 4 complete</Pill>
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 22 }}>
        {filters.map(f => (
          <div key={f} onClick={() => setFilter(f)} style={{ padding: '8px 16px', borderRadius: 999, cursor: 'pointer',
            fontSize: 14, fontWeight: 700, background: filter === f ? A.primary : A.card,
            color: filter === f ? '#fff' : A.muted, border: `1px solid ${filter === f ? A.primary : A.border}` }}>{f}</div>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {shown.map(u => {
          const done = u.state === 'done', locked = u.state === 'locked';
          return (
            <Card key={u.n} pad={20} onClick={locked ? undefined : () => go('lesson')}
              style={{ opacity: locked ? 0.62 : 1, display: 'flex', alignItems: 'center', gap: 20 }}>
              <div style={{ fontFamily: A.mono, fontSize: 13, fontWeight: 700, color: A.faint, width: 24 }}>{u.n}</div>
              <div style={{ width: 56, height: 56, borderRadius: 16, background: u.tint[0], color: u.tint[1],
                display: 'grid', placeItems: 'center', flex: '0 0 auto' }}>
                <Icon name={locked ? 'lock' : u.icon} size={26} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 3 }}>
                  <span style={{ fontWeight: 800, fontSize: 18 }}>{u.title}</span>
                  {done && <Badge tone="green">Done</Badge>}
                  {u.state === 'active' && <Badge tone="primary">In progress</Badge>}
                </div>
                <div style={{ fontSize: 14, color: A.muted, fontWeight: 600 }}>{u.sub}</div>
                {u.state === 'active' && <div style={{ marginTop: 10, maxWidth: 360 }}><Bar pct={u.pct} color={A.primary} track={A.barTrack} height={7} /></div>}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8 }}>
                <div style={{ display: 'flex', gap: 14, fontSize: 13, color: A.muted, fontWeight: 600 }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}><Icon name="book-open" size={15} />{u.lessons}</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}><Icon name="clock" size={15} />{u.mins}m</span>
                </div>
                {!locked && <Icon name="chevron-right" size={22} color={A.faint} />}
              </div>
            </Card>
          );
        })}
      </div>
    </AppShell>
  );
}
window.ScreenCatalog = ScreenCatalog;
