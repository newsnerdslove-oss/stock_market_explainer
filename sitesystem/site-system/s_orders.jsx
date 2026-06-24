// Order history & open orders. Reads the live StaxTrade store.
function ScreenOrders({ go, theme, setTheme }) {
  const t = useTrade();
  const [tab, setTab] = React.useState('all');
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
  if (!t) return null;

  const all = t.orders().slice().sort((a, b) => b.ts - a.ts);
  const theses = t.theses();
  const counts = {
    all: all.length,
    open: all.filter(o => o.status === 'open').length,
    filled: all.filter(o => o.status === 'filled').length,
    cancelled: all.filter(o => o.status === 'cancelled').length,
  };
  const rows = tab === 'all' ? all : all.filter(o => o.status === tab);
  const tone = { filled: 'green', open: 'blue', cancelled: 'neutral' };
  const when = (ts) => {
    const d = (Date.now() - ts) / 86400000;
    if (d < 1) return Math.max(1, Math.round(d * 24)) + 'h ago';
    return Math.round(d) + 'd ago';
  };
  const typeLabel = { market: 'Market', limit: 'Limit', stop: 'Stop', stoplimit: 'Stop-limit' };

  return (
    <AppShell tab="trade" go={go} maxWidth={1000} theme={theme} setTheme={setTheme}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
        <span onClick={() => go('trade')} style={{ fontSize: 13.5, color: A.muted, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5 }}>
          <Icon name="arrow-left" size={16} /> Portfolio
        </span>
      </div>
      <h1 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-.02em', margin: '0 0 18px' }}>Orders</h1>

      {/* tabs */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 18 }}>
        {[['all', 'All'], ['open', 'Open'], ['filled', 'Filled'], ['cancelled', 'Cancelled']].map(([id, label]) => (
          <div key={id} onClick={() => setTab(id)} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 16px', borderRadius: 999, cursor: 'pointer',
            fontWeight: 700, fontSize: 14, border: `1.5px solid ${tab === id ? A.primary : A.border}`,
            background: tab === id ? A.primarySoft : A.card, color: tab === id ? A.primaryDeep : A.muted }}>
            {label}<span style={{ fontSize: 12, opacity: .7 }}>{counts[id]}</span>
          </div>
        ))}
      </div>

      <Card pad={0}>
        {/* header */}
        <div style={{ display: 'grid', gridTemplateColumns: '90px 1.6fr 1.4fr 1fr 110px', gap: 10, padding: '14px 22px',
          fontSize: 11.5, fontWeight: 800, letterSpacing: '.04em', textTransform: 'uppercase', color: A.faint, borderBottom: `1px solid ${A.border}` }}>
          <div>Side</div><div>Symbol</div><div>Details</div><div style={{ textAlign: 'right' }}>Status</div><div style={{ textAlign: 'right' }}>When</div>
        </div>
        {rows.length === 0 && <div style={{ padding: 40, textAlign: 'center', color: A.faint, fontWeight: 600, fontSize: 14 }}>No {tab === 'all' ? '' : tab} orders.</div>}
        {rows.map((o) => {
          const q = t.META[o.sym];
          return (
            <div key={o.id} style={{ borderBottom: `1px solid ${A.borderSoft}` }}>
              <div style={{ display: 'grid', gridTemplateColumns: '90px 1.6fr 1.4fr 1fr 110px', gap: 10, padding: '14px 22px', alignItems: 'center' }}>
                <Badge tone={o.side === 'buy' ? 'green' : 'red'}>{o.side}</Badge>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
                  <SymbolMark sym={o.sym} color={q.color} size={32} />
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontWeight: 800, fontSize: 14 }}>{o.sym}</div>
                    <div style={{ fontSize: 12, color: A.muted, fontWeight: 600 }}>{qtyFmt(o.qty)} {q.type === 'Crypto' ? '' : 'sh'}</div>
                  </div>
                </div>
                <div style={{ fontSize: 13, color: A.ink, fontWeight: 600 }}>
                  <div style={{ fontWeight: 700 }}>{typeLabel[o.type]}</div>
                  <div style={{ fontSize: 12, color: A.muted, fontFamily: A.mono }}>
                    {o.status === 'filled' ? '@ ' + usd(o.fill) : o.limit ? 'limit ' + usd(o.limit) : o.stop ? 'stop ' + usd(o.stop) : 'at market'}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <Badge tone={tone[o.status]}>{o.status}</Badge>
                </div>
                <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
                  <span style={{ fontSize: 12.5, color: A.muted, fontWeight: 600 }}>{when(o.ts)}</span>
                  {o.status === 'open' && <span onClick={() => t.cancelOrder(o.id)} style={{ fontSize: 12, color: A.red, fontWeight: 700, cursor: 'pointer' }}>Cancel</span>}
                </div>
              </div>
              {theses[o.id] && (
                <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start', padding: '0 22px 14px 22px', marginTop: -4 }}>
                  <Icon name="notebook-pen" size={14} color={A.faint} style={{ marginTop: 2 }} />
                  <div style={{ fontSize: 12.5, color: A.muted, fontWeight: 500, lineHeight: 1.5, fontStyle: 'italic' }}>“{theses[o.id]}”</div>
                </div>
              )}
            </div>
          );
        })}
      </Card>
    </AppShell>
  );
}
window.ScreenOrders = ScreenOrders;
