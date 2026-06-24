// Search / Explore — global search across symbols, lessons, and terms.
function ScreenSearch({ go, theme, setTheme }) {
  const t = useTrade();
  const [q, setQ] = React.useState('');
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });

  const LESSONS = [
    { t: 'Reading candlesticks', s: 'Unit 2 · Chart patterns', icon: 'candlestick-chart', to: 'lesson' },
    { t: 'Spotting reversals', s: 'Unit 2 · 4 of 7 lessons', icon: 'activity', to: 'lesson' },
    { t: 'Options payoffs', s: 'Unit 3 · Calls & puts', icon: 'git-branch', to: 'lesson' },
    { t: 'Build a portfolio', s: 'Unit 4 · Diversify & size', icon: 'wallet', to: 'catalog' },
    { t: 'Market basics', s: 'Unit 1 · Completed', icon: 'sprout', to: 'catalog' },
  ];
  const TERMS = [
    { t: 'Candlestick', s: 'A price bar showing open, high, low, close' },
    { t: 'Limit order', s: 'Buy/sell only at a set price or better' },
    { t: 'Diversification', s: 'Spreading risk across many holdings' },
    { t: 'Volatility', s: 'How much a price swings over time' },
    { t: 'EMA', s: 'Exponential moving average — a trend line' },
  ];

  const ql = q.trim().toLowerCase();
  const syms = (ql ? t.UNIVERSE.filter(u => (u.sym + ' ' + u.name).toLowerCase().includes(ql)) : t.UNIVERSE.slice(0, 4));
  const lessons = ql ? LESSONS.filter(l => (l.t + l.s).toLowerCase().includes(ql)) : LESSONS.slice(0, 3);
  const terms = ql ? TERMS.filter(x => (x.t + x.s).toLowerCase().includes(ql)) : [];
  const up = (v) => v >= 0 ? A.green : A.red;
  const goStock = (s) => { t.setFocus(s); go('stock'); };
  const none = ql && !syms.length && !lessons.length && !terms.length;

  return (
    <AppShell tab="trade" go={go} maxWidth={820} theme={theme} setTheme={setTheme}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
        <h1 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-.02em', margin: 0 }}>Search</h1>
        <Badge tone="amber">Concept · needs build</Badge>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 11, background: A.card, border: `1.5px solid ${A.primary}`, borderRadius: 15, padding: '0 16px', marginBottom: 22 }}>
        <Icon name="search" size={20} color={A.primary} />
        <input autoFocus value={q} onChange={e => setQ(e.target.value)} placeholder="Search stocks, lessons, terms…"
          style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', padding: '15px 0', fontFamily: A.font, fontSize: 16, fontWeight: 600, color: A.ink }} />
        {q && <Icon name="x" size={18} color={A.faint} style={{ cursor: 'pointer' }} onClick={() => setQ('')} />}
      </div>

      {!ql && (
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontSize: 12.5, fontWeight: 800, letterSpacing: '.04em', textTransform: 'uppercase', color: A.faint, marginBottom: 10 }}>Trending</div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['NVDA', 'BTC', 'TSLA', 'SPY', 'ETH'].map(s => (
              <div key={s} onClick={() => goStock(s)} style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '8px 13px', borderRadius: 999, cursor: 'pointer',
                border: `1px solid ${A.border}`, background: A.card, fontWeight: 700, fontSize: 13.5 }}>
                <Icon name="trending-up" size={14} color={A.primary} />{s}
              </div>
            ))}
          </div>
        </div>
      )}

      {none && (
        <div style={{ textAlign: 'center', padding: '50px 20px', color: A.faint }}>
          <Icon name="search-x" size={36} color={A.faint} />
          <div style={{ fontWeight: 700, fontSize: 16, color: A.muted, marginTop: 12 }}>No results for "{q}"</div>
          <div style={{ fontSize: 13.5, marginTop: 4 }}>Try a ticker like AAPL, or a topic like "candlestick".</div>
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
        {syms.length > 0 && <Section title="Symbols">
          {syms.map(u => { const qq = t.quote(u.sym); return (
            <Row key={u.sym} onClick={() => goStock(u.sym)} left={<SymbolMark sym={u.sym} color={u.color} size={38} />}
              title={u.sym} sub={u.name} right={<div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: A.mono, fontWeight: 700, fontSize: 14 }}>{usd(qq.price)}</div>
                <div style={{ fontFamily: A.mono, fontWeight: 700, fontSize: 12, color: up(qq.pct) }}>{pct(qq.pct)}</div></div>} />
          ); })}
        </Section>}

        {lessons.length > 0 && <Section title="Lessons">
          {lessons.map((l, i) => (
            <Row key={i} onClick={() => go(l.to)} left={<div style={{ width: 38, height: 38, borderRadius: 11, background: A.primarySoft, color: A.primary, display: 'grid', placeItems: 'center' }}><Icon name={l.icon} size={20} /></div>}
              title={l.t} sub={l.s} right={<Icon name="chevron-right" size={18} color={A.faint} />} />
          ))}
        </Section>}

        {terms.length > 0 && <Section title="Terms">
          {terms.map((x, i) => (
            <Row key={i} left={<div style={{ width: 38, height: 38, borderRadius: 11, background: A.sunk, color: A.muted, display: 'grid', placeItems: 'center' }}><Icon name="book-marked" size={19} /></div>}
              title={x.t} sub={x.s} right={<Pill bg={A.sunk} fg={A.muted} size="sm">Glossary</Pill>} />
          ))}
        </Section>}
      </div>
    </AppShell>
  );

  function Section({ title, children }) {
    return (
      <div>
        <div style={{ fontSize: 12.5, fontWeight: 800, letterSpacing: '.04em', textTransform: 'uppercase', color: A.faint, marginBottom: 8 }}>{title}</div>
        <Card pad={6}>{children}</Card>
      </div>
    );
  }
  function Row({ left, title, sub, right, onClick }) {
    return (
      <div onClick={onClick} style={{ display: 'flex', alignItems: 'center', gap: 13, padding: '11px 14px', borderRadius: 13, cursor: onClick ? 'pointer' : 'default' }}
        onMouseEnter={e => { if (onClick) e.currentTarget.style.background = A.sunk; }} onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
        {left}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontWeight: 800, fontSize: 14.5 }}>{title}</div>
          <div style={{ fontSize: 12.5, color: A.muted, fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{sub}</div>
        </div>
        {right}
      </div>
    );
  }
}
window.ScreenSearch = ScreenSearch;
