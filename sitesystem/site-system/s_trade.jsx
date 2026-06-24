// Paper-trading desk — account, portfolio, positions, watchlist, orders, missions.
// Reads the live StaxTrade store (see trade_store.js). NET-NEW (see REPO-NOTES).
function ScreenTrade({ go, theme, setTheme }) {
  const t = useTrade();
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
  if (!t) return null;

  const tot = t.totals();
  const h = t.holdings().sort((a, b) => b.value - a.value);
  const open = t.openOrders();
  const todays = t.tradesToday();
  const up = (v) => v >= 0 ? A.green : A.red;

  // portfolio equity curve: fixed shape mapped to [deposit*.985, total]
  const SHAPE = [0, .12, .08, .2, .32, .26, .4, .52, .47, .6, .72, .68, .82, .9, 1];
  const lo = t.getState().deposit * 0.985, hi = Math.max(tot.total, lo + 1);
  const equity = SHAPE.map(s => Math.round(lo + (hi - lo) * s));

  const goStock = (sym) => { t.setFocus(sym); go('stock'); };

  // --- missions (progress derived from store) ---
  const orders = t.orders();
  const usedLimit = orders.some(o => (o.type === 'limit' || o.type === 'stoplimit'));
  const journaled = Object.keys(t.theses()).length;
  const sectors = new Set(h.map(x => t.META[x.sym].sector));
  const missions = [
    { icon: 'sliders-horizontal', t: 'Place a limit order', done: usedLimit, prog: usedLimit ? 1 : 0, goal: 1 },
    { icon: 'layout-grid', t: 'Diversify across 4 sectors', prog: sectors.size, goal: 4, done: sectors.size >= 4 },
    { icon: 'notebook-pen', t: 'Journal 3 trade theses', prog: journaled, goal: 3, done: journaled >= 3 },
    { icon: 'hand-coins', t: 'Hold a position through a dip', prog: h.some(x => x.plPct < -3 && x.shares > 0) ? 1 : 0, goal: 1, done: false },
  ];

  return (
    <AppShell tab="trade" go={go} maxWidth={1240} theme={theme} setTheme={setTheme}>
      {/* account header */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 18, marginBottom: 18 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: A.muted }}>Paper portfolio</span>
            <Badge tone="amber">Concept · needs build</Badge>
            <Pill icon="circle-dollar-sign" bg={A.greenSoft} fg={A.green} size="sm">Virtual cash</Pill>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
            <span style={{ fontSize: 44, fontWeight: 800, letterSpacing: '-.03em', fontFamily: A.mono }}>{usd(tot.total)}</span>
            <span style={{ fontSize: 18, fontWeight: 800, color: up(tot.dayChg) }}>{signed(tot.dayChg)} ({pct(tot.dayPct)}) today</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <Btn kind="ghost" icon="history" onClick={() => go('orders')}>Orders</Btn>
          <Btn kind="primary" icon="search" onClick={() => go('stock')}>Trade</Btn>
        </div>
      </div>

      {/* stat tiles */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 18 }}>
        {[['Buying power', usd(tot.buyingPower), 'wallet', A.primary],
          ['Invested', usd(tot.invested), 'pie-chart', A.blue],
          ['Total P&L', signed(tot.totalPL) + ' (' + pct(tot.totalPLPct) + ')', 'trending-up', up(tot.totalPL)],
          ['Positions', String(tot.count), 'layers', A.amberInk]].map(([l, v, ic, c], i) => (
          <Card key={i} pad={18}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: A.muted, fontSize: 13, fontWeight: 700, marginBottom: 8 }}>
              <Icon name={ic} size={16} color={c} />{l}
            </div>
            <div style={{ fontSize: 22, fontWeight: 800, fontFamily: A.mono, color: i === 2 ? c : A.ink }}>{v}</div>
          </Card>
        ))}
      </div>

      {/* tilt-protection nudge */}
      {todays >= 6 && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: A.amberSoft, border: `1px solid ${A.amber}`,
          borderRadius: 14, padding: '13px 18px', marginBottom: 18 }}>
          <Icon name="shield-alert" size={20} color={A.amberInk} />
          <div style={{ fontSize: 14, fontWeight: 600, color: A.ink }}>
            <b>{todays} trades today.</b> Active traders rarely beat patient ones — take a breath before the next order. Good investing is boring.
          </div>
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 20, alignItems: 'start' }}>
        {/* left: chart + positions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <Card>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
              <div style={{ fontWeight: 800, fontSize: 16 }}>Portfolio value</div>
              <div style={{ display: 'flex', gap: 6 }}>
                {['1D', '1W', '1M', '3M', '1Y', 'All'].map((p, i) => (
                  <span key={p} style={{ fontSize: 12.5, fontWeight: 700, padding: '4px 9px', borderRadius: 8,
                    background: i === 2 ? A.primarySoft : 'transparent', color: i === 2 ? A.primaryDeep : A.faint, cursor: 'pointer' }}>{p}</span>
                ))}
              </div>
            </div>
            <DSChart kind="EquityCurve" equity={equity} />
          </Card>

          <Card pad={0}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 20px 12px' }}>
              <div style={{ fontWeight: 800, fontSize: 16 }}>Positions</div>
              <span onClick={() => go('orders')} style={{ fontSize: 13.5, color: A.primary, fontWeight: 700, cursor: 'pointer' }}>Order history →</span>
            </div>
            {/* header row */}
            <div style={{ display: 'grid', gridTemplateColumns: '2.2fr 1fr 1fr 1.2fr 1.2fr', gap: 8, padding: '0 20px 8px',
              fontSize: 11.5, fontWeight: 800, letterSpacing: '.04em', textTransform: 'uppercase', color: A.faint }}>
              <div>Symbol</div><div style={{ textAlign: 'right' }}>Price</div><div style={{ textAlign: 'right' }}>Today</div>
              <div style={{ textAlign: 'right' }}>Value</div><div style={{ textAlign: 'right' }}>Total P&L</div>
            </div>
            {h.map((x, i) => (
              <div key={x.sym} onClick={() => goStock(x.sym)} style={{ display: 'grid', gridTemplateColumns: '2.2fr 1fr 1fr 1.2fr 1.2fr', gap: 8,
                alignItems: 'center', padding: '13px 20px', cursor: 'pointer',
                borderTop: `1px solid ${A.borderSoft}`, transition: 'background .12s ease' }}
                onMouseEnter={e => e.currentTarget.style.background = A.sunk}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 11, minWidth: 0 }}>
                  <SymbolMark sym={x.sym} color={x.color} />
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontWeight: 800, fontSize: 14.5 }}>{x.sym}</div>
                    <div style={{ fontSize: 12, color: A.muted, fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{qtyFmt(x.shares)} sh · avg {usd(x.avgCost)}</div>
                  </div>
                </div>
                <div style={{ textAlign: 'right', fontFamily: A.mono, fontWeight: 700, fontSize: 14 }}>{usd(x.price)}</div>
                <div style={{ textAlign: 'right', fontFamily: A.mono, fontWeight: 700, fontSize: 13.5, color: up(x.dayPct) }}>{pct(x.dayPct)}</div>
                <div style={{ textAlign: 'right', fontFamily: A.mono, fontWeight: 700, fontSize: 14 }}>{usd(x.value)}</div>
                <div style={{ textAlign: 'right', fontFamily: A.mono, fontWeight: 800, fontSize: 14, color: up(x.pl) }}>{signed(x.pl)}<div style={{ fontSize: 11.5, fontWeight: 700 }}>{pct(x.plPct)}</div></div>
              </div>
            ))}
          </Card>
        </div>

        {/* right: watchlist + open orders + missions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <Card pad={0}>
            <div style={{ fontWeight: 800, fontSize: 16, padding: '18px 20px 10px' }}>Watchlist</div>
            {t.watchlist().map((sym) => {
              const q = t.quote(sym);
              return (
                <div key={sym} onClick={() => goStock(sym)} style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '11px 20px', cursor: 'pointer',
                  borderTop: `1px solid ${A.borderSoft}` }}
                  onMouseEnter={e => e.currentTarget.style.background = A.sunk}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                  <SymbolMark sym={sym} color={q.color} size={32} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 800, fontSize: 14 }}>{sym}</div>
                    <div style={{ fontSize: 11.5, color: A.muted, fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{q.name}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: A.mono, fontWeight: 700, fontSize: 13.5 }}>{usd(q.price)}</div>
                    <div style={{ fontFamily: A.mono, fontWeight: 700, fontSize: 12, color: up(q.pct) }}>{pct(q.pct)}</div>
                  </div>
                </div>
              );
            })}
          </Card>

          <Card>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: open.length ? 12 : 0 }}>
              <div style={{ fontWeight: 800, fontSize: 16 }}>Open orders</div>
              <Pill bg={A.sunk} fg={A.muted} size="sm">{open.length}</Pill>
            </div>
            {open.length === 0 && <div style={{ fontSize: 13.5, color: A.faint, fontWeight: 600 }}>No working orders.</div>}
            {open.map(o => (
              <div key={o.id} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0', borderTop: `1px solid ${A.borderSoft}` }}>
                <Badge tone={o.side === 'buy' ? 'green' : 'red'}>{o.side}</Badge>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 800, fontSize: 14 }}>{o.sym} · {qtyFmt(o.qty)}</div>
                  <div style={{ fontSize: 12, color: A.muted, fontWeight: 600 }}>{o.type} {o.limit ? '@ ' + usd(o.limit) : ''}{o.stop ? ' stop ' + usd(o.stop) : ''}</div>
                </div>
                <span onClick={() => t.cancelOrder(o.id)} style={{ fontSize: 12.5, color: A.red, fontWeight: 700, cursor: 'pointer' }}>Cancel</span>
              </div>
            ))}
          </Card>

          <Card>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
              <div style={{ fontWeight: 800, fontSize: 16 }}>Trading missions</div>
              <span onClick={() => go('clubs')} style={{ fontSize: 13, color: A.primary, fontWeight: 700, cursor: 'pointer' }}>All →</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {missions.map((m, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 38, height: 38, borderRadius: 11, flex: '0 0 auto', display: 'grid', placeItems: 'center',
                    background: m.done ? A.greenSoft : A.primarySoft, color: m.done ? A.green : A.primary }}>
                    <Icon name={m.done ? 'check' : m.icon} size={18} strokeWidth={m.done ? 3 : 2} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 700, fontSize: 13.5, color: A.ink }}>{m.t}</div>
                    <div style={{ marginTop: 5 }}><Bar pct={Math.min(100, (m.prog / m.goal) * 100)} color={m.done ? A.green : A.primary} track={A.barTrack} height={6} /></div>
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: A.muted, fontFamily: A.mono }}>{Math.min(m.prog, m.goal)}/{m.goal}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}

// Square ticker mark with the symbol's first letters.
function SymbolMark({ sym, color, size = 40 }) {
  return (
    <div style={{ width: size, height: size, borderRadius: 11, flex: '0 0 auto', display: 'grid', placeItems: 'center',
      background: (color || '#888') + '22', color: color || '#888', fontWeight: 800, fontSize: size * 0.32, fontFamily: window.A.font }}>
      {sym.slice(0, 2)}
    </div>
  );
}

window.ScreenTrade = ScreenTrade;
window.SymbolMark = SymbolMark;
