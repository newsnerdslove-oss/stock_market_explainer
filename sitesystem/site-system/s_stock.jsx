// Stock detail + order ticket — the core interactive trading surface.
// Buy/Sell · market/limit/stop/stop-limit · trade-thesis journaling · review →
// confirm → post-trade scoring. Drives the live StaxTrade store.
function ScreenStock({ go, theme, setTheme }) {
  const t = useTrade();
  const [q, setQuery] = React.useState('');
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
  if (!t) return null;

  const sym = t.getState().focus;
  const quote = t.quote(sym);
  const pos = t.position(sym);
  const up = (v) => v >= 0 ? A.green : A.red;
  const series = t.seriesOf(sym);

  // illustrative key stats (placeholder values — wire to real data at build)
  const stats = [
    ['Open', usd(quote.prev)], ['Prev close', usd(quote.prev)],
    ['Day high', usd(Math.max(...series.slice(-12)))], ['Day low', usd(Math.min(...series.slice(-12)))],
    ['52-wk range', usd(quote.prev * 0.7, 0) + ' – ' + usd(quote.prev * 1.25, 0)],
    [quote.type === 'Crypto' ? 'Mkt cap' : 'Market cap', quote.type === 'Crypto' ? '$1.3T' : '$2.4T'],
  ];
  const news = [
    { tag: 'Markets', t: quote.name + ' moves as sector rotates', s: '2h ago · Placeholder headline' },
    { tag: 'Earnings', t: 'Analysts weigh in ahead of next report', s: '5h ago · Placeholder headline' },
    { tag: 'Macro', t: 'Rate outlook shifts risk appetite', s: '1d ago · Placeholder headline' },
  ];

  const matches = q.trim() ? t.UNIVERSE.filter(u => (u.sym + ' ' + u.name).toLowerCase().includes(q.toLowerCase())).slice(0, 6) : [];

  return (
    <AppShell tab="trade" go={go} maxWidth={1180} theme={theme} setTheme={setTheme}>
      {/* search to switch symbol */}
      <div style={{ position: 'relative', marginBottom: 20, maxWidth: 460 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: A.card, border: `1.5px solid ${A.border}`, borderRadius: 13, padding: '0 14px' }}>
          <Icon name="search" size={18} color={A.faint} />
          <input value={q} onChange={e => setQuery(e.target.value)} placeholder="Search a stock, ETF or coin…"
            style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', padding: '12px 0', fontFamily: A.font, fontSize: 14.5, fontWeight: 600, color: A.ink }} />
        </div>
        {matches.length > 0 && (
          <div style={{ position: 'absolute', top: 'calc(100% + 6px)', left: 0, right: 0, zIndex: 5, background: A.card,
            border: `1px solid ${A.border}`, borderRadius: 14, boxShadow: A.shadowLg, overflow: 'hidden' }}>
            {matches.map(u => (
              <div key={u.sym} onClick={() => { t.setFocus(u.sym); setQuery(''); }} style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '11px 14px', cursor: 'pointer' }}
                onMouseEnter={e => e.currentTarget.style.background = A.sunk} onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                <SymbolMark sym={u.sym} color={u.color} size={32} />
                <div style={{ flex: 1 }}><div style={{ fontWeight: 800, fontSize: 14 }}>{u.sym}</div><div style={{ fontSize: 12, color: A.muted, fontWeight: 600 }}>{u.name}</div></div>
                <span style={{ fontFamily: A.mono, fontWeight: 700, fontSize: 13.5 }}>{usd(t.priceOf(u.sym))}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 24, alignItems: 'start' }}>
        {/* left: chart, stats, news */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {/* price header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <SymbolMark sym={sym} color={quote.color} size={54} />
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <h1 style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-.02em', margin: 0 }}>{sym}</h1>
                <Badge tone="neutral">{quote.type}</Badge>
              </div>
              <div style={{ fontSize: 14, color: A.muted, fontWeight: 600 }}>{quote.name} · {quote.sector}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 30, fontWeight: 800, fontFamily: A.mono, letterSpacing: '-.02em' }}>{usd(quote.price)}</div>
              <div style={{ fontSize: 15, fontWeight: 800, color: up(quote.chg) }}>{signed(quote.chg)} ({pct(quote.pct)})</div>
            </div>
            <Btn kind="ghost" size="sm" icon="git-branch" onClick={() => go('options')}>Options</Btn>
            <div onClick={() => t.toggleWatch(sym)} title="Watchlist" style={{ width: 44, height: 44, borderRadius: 12, border: `1px solid ${A.border}`,
              display: 'grid', placeItems: 'center', cursor: 'pointer', color: t.watchlist().includes(sym) ? A.amber : A.muted, background: A.card }}>
              <Icon name="star" size={20} style={t.watchlist().includes(sym) ? { fill: A.amber } : {}} />
            </div>
          </div>

          <ResearchChart symbol={sym} base={quote.price} height={440} />

          {/* your position */}
          {pos && pos.shares > 0 && (
            <Card style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
              <div style={{ fontWeight: 800, fontSize: 15 }}>Your position</div>
              {[['Shares', qtyFmt(pos.shares)], ['Avg cost', usd(pos.avgCost)], ['Market value', usd(pos.shares * quote.price)],
                ['Total P&L', signed((quote.price - pos.avgCost) * pos.shares)]].map(([l, v], i) => (
                <div key={i}>
                  <div style={{ fontSize: 12, color: A.muted, fontWeight: 700 }}>{l}</div>
                  <div style={{ fontFamily: A.mono, fontWeight: 800, fontSize: 16, color: i === 3 ? up((quote.price - pos.avgCost)) : A.ink }}>{v}</div>
                </div>
              ))}
            </Card>
          )}

          {/* key stats */}
          <Card>
            <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 14 }}>Key stats <span style={{ fontSize: 12, color: A.faint, fontWeight: 600 }}>· illustrative</span></div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px 24px' }}>
              {stats.map(([l, v], i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: `1px solid ${A.borderSoft}`, paddingBottom: 8 }}>
                  <span style={{ fontSize: 13, color: A.muted, fontWeight: 600 }}>{l}</span>
                  <span style={{ fontSize: 13.5, fontWeight: 700, fontFamily: A.mono }}>{v}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* news */}
          <Card pad={0}>
            <div style={{ fontWeight: 800, fontSize: 16, padding: '18px 20px 8px' }}>News <span style={{ fontSize: 12, color: A.faint, fontWeight: 600 }}>· placeholder</span></div>
            {news.map((n, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, padding: '13px 20px', borderTop: `1px solid ${A.borderSoft}`, alignItems: 'center' }}>
                <div style={{ width: 54, height: 54, borderRadius: 11, background: A.sunk, flex: '0 0 auto', display: 'grid', placeItems: 'center', color: A.faint }}><Icon name="newspaper" size={20} /></div>
                <div>
                  <Badge tone="neutral">{n.tag}</Badge>
                  <div style={{ fontWeight: 700, fontSize: 14.5, color: A.ink, margin: '5px 0 2px' }}>{n.t}</div>
                  <div style={{ fontSize: 12.5, color: A.muted, fontWeight: 600 }}>{n.s}</div>
                </div>
              </div>
            ))}
          </Card>
        </div>

        {/* right: order ticket */}
        <div style={{ position: 'sticky', top: 20 }}>
          <OrderTicket key={sym} t={t} sym={sym} quote={quote} pos={pos} go={go} />
        </div>
      </div>
    </AppShell>
  );
}

// --- Order ticket -----------------------------------------------------------
function OrderTicket({ t, sym, quote, pos, go }) {
  const [side, setSide] = React.useState('buy');
  const [type, setType] = React.useState('market');
  const [qty, setQty] = React.useState('');
  const [limit, setLimit] = React.useState('');
  const [stop, setStop] = React.useState('');
  const [tif, setTif] = React.useState('Day');
  const [thesis, setThesis] = React.useState('');
  const [stage, setStage] = React.useState('form'); // form | review | done
  const [result, setResult] = React.useState(null);
  const [err, setErr] = React.useState('');
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });

  const isCrypto = quote.type === 'Crypto';
  const bp = t.totals().buyingPower;
  const held = pos ? pos.shares : 0;
  const px = type === 'market' ? quote.price : (type === 'stop' ? (+stop || quote.price) : (+limit || quote.price));
  const nQty = +qty || 0;
  const est = nQty * px;
  const needsLimit = type === 'limit' || type === 'stoplimit';
  const needsStop = type === 'stop' || type === 'stoplimit';
  const todays = t.tradesToday();

  const setMax = () => {
    if (side === 'buy') setQty(isCrypto ? (Math.floor((bp / px) * 10000) / 10000).toString() : Math.floor(bp / px).toString());
    else setQty(qtyFmt(held));
  };

  const validate = () => {
    if (!nQty || nQty <= 0) return 'Enter a quantity';
    if (needsLimit && !(+limit > 0)) return 'Enter a limit price';
    if (needsStop && !(+stop > 0)) return 'Enter a stop price';
    if (side === 'buy' && est > bp) return 'Order exceeds your buying power';
    if (side === 'sell' && nQty > held) return 'You only hold ' + qtyFmt(held) + ' shares';
    return '';
  };

  const toReview = () => { const e = validate(); if (e) { setErr(e); return; } setErr(''); setStage('review'); };
  const confirm = () => {
    const r = t.placeOrder({ sym, side, type, qty: nQty, limit: +limit || undefined, stop: +stop || undefined, thesis });
    if (!r.ok) { setErr(r.reason); setStage('form'); return; }
    setResult(r); setStage('done');
  };
  const resetTicket = () => { setQty(''); setLimit(''); setStop(''); setThesis(''); setStage('form'); setResult(null); setErr(''); };

  const accent = side === 'buy' ? A.green : A.red;
  const accentSoft = side === 'buy' ? A.greenSoft : A.redSoft;

  // ---- DONE (post-trade) ----
  if (stage === 'done' && result) {
    const filled = result.filled;
    const o = result.order;
    const xpGain = 8 + (thesis.trim().length > 12 ? 12 : 0);
    const quality = [
      { ok: thesis.trim().length > 12, t: 'Logged a trade thesis' },
      { ok: type !== 'market', t: 'Used a price-controlled order' },
      { ok: todays < 6, t: 'Trading at a measured pace' },
    ];
    const score = quality.filter(x => x.ok).length;
    return (
      <Card pad={24}>
        <div style={{ textAlign: 'center', marginBottom: 18 }}>
          <div style={{ width: 64, height: 64, borderRadius: '50%', margin: '0 auto 12px', display: 'grid', placeItems: 'center',
            background: filled ? A.greenSoft : A.primarySoft, color: filled ? A.green : A.primary }}>
            <Icon name={filled ? 'check' : 'clock'} size={32} strokeWidth={filled ? 3 : 2} />
          </div>
          <div style={{ fontSize: 20, fontWeight: 800 }}>{filled ? 'Order filled' : 'Order placed'}</div>
          <div style={{ fontSize: 14, color: A.muted, fontWeight: 600, marginTop: 2 }}>
            {filled ? `${side === 'buy' ? 'Bought' : 'Sold'} ${qtyFmt(o.qty)} ${sym} @ ${usd(o.fill)}` : `${type} order working — fills when ${sym} ${side === 'buy' ? 'reaches' : 'hits'} your price`}
          </div>
        </div>
        <div style={{ background: A.page, borderRadius: 14, padding: 16, marginBottom: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <span style={{ fontWeight: 800, fontSize: 14 }}>Trade quality</span>
            <Pill icon="zap" bg={A.primarySoft} fg={A.primaryDeep} size="sm">+{xpGain} XP</Pill>
          </div>
          <div style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
            {[0, 1, 2].map(i => <div key={i} style={{ flex: 1, height: 7, borderRadius: 999, background: i < score ? A.green : A.barTrack }} />)}
          </div>
          {quality.map((x, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 13.5, fontWeight: 600, color: x.ok ? A.ink : A.faint, padding: '3px 0' }}>
              <Icon name={x.ok ? 'check-circle-2' : 'circle'} size={16} color={x.ok ? A.green : A.faint} />{x.t}
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Btn kind="primary" full onClick={() => go('trade')}>Back to portfolio</Btn>
          <Btn kind="ghost" full onClick={resetTicket}>Place another order</Btn>
        </div>
      </Card>
    );
  }

  // ---- REVIEW ----
  if (stage === 'review') {
    const rows = [
      ['Action', (side === 'buy' ? 'Buy' : 'Sell') + ' ' + sym],
      ['Quantity', qtyFmt(nQty) + (isCrypto ? '' : ' shares')],
      ['Order type', { market: 'Market', limit: 'Limit', stop: 'Stop', stoplimit: 'Stop-limit' }[type]],
      needsStop ? ['Stop price', usd(+stop)] : null,
      needsLimit ? ['Limit price', usd(+limit)] : null,
      ['Time in force', tif],
      [type === 'market' ? 'Est. ' + (side === 'buy' ? 'cost' : 'proceeds') : 'Est. value', usd(est)],
    ].filter(Boolean);
    return (
      <Card pad={24}>
        <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 4 }}>Review order</div>
        <div style={{ fontSize: 13.5, color: A.muted, fontWeight: 600, marginBottom: 18 }}>Confirm the details before placing.</div>
        <div style={{ background: A.page, borderRadius: 14, padding: '4px 16px', marginBottom: 16 }}>
          {rows.map(([l, v], i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '11px 0', borderBottom: i < rows.length - 1 ? `1px solid ${A.borderSoft}` : 'none' }}>
              <span style={{ fontSize: 13.5, color: A.muted, fontWeight: 600 }}>{l}</span>
              <span style={{ fontSize: 14, fontWeight: 800, fontFamily: A.mono }}>{v}</span>
            </div>
          ))}
        </div>
        {thesis.trim() && (
          <div style={{ background: A.primarySoft, borderRadius: 12, padding: 14, marginBottom: 16 }}>
            <div style={{ fontSize: 11.5, fontWeight: 800, letterSpacing: '.04em', textTransform: 'uppercase', color: A.primaryDeep, marginBottom: 4 }}>Your thesis</div>
            <div style={{ fontSize: 13.5, color: A.ink, fontWeight: 500, lineHeight: 1.5 }}>{thesis}</div>
          </div>
        )}
        {todays >= 6 && (
          <div style={{ display: 'flex', gap: 9, alignItems: 'flex-start', background: A.amberSoft, borderRadius: 12, padding: 13, marginBottom: 16 }}>
            <Icon name="shield-alert" size={18} color={A.amberInk} style={{ marginTop: 1 }} />
            <div style={{ fontSize: 13, fontWeight: 600, color: A.ink }}>This is trade #{todays + 1} today. Are you sticking to your plan, or chasing the market?</div>
          </div>
        )}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Btn kind={side === 'buy' ? 'success' : 'primary'} full style={side === 'sell' ? { background: A.red, boxShadow: 'none' } : {}} onClick={confirm}>
            {side === 'buy' ? 'Place buy order' : 'Place sell order'}
          </Btn>
          <Btn kind="ghost" full onClick={() => setStage('form')}>Edit</Btn>
        </div>
      </Card>
    );
  }

  // ---- FORM ----
  const TYPES = [['market', 'Market'], ['limit', 'Limit'], ['stop', 'Stop'], ['stoplimit', 'Stop-limit']];
  return (
    <Card pad={22}>
      {/* buy / sell */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, background: A.sunk, padding: 5, borderRadius: 13, marginBottom: 18 }}>
        {['buy', 'sell'].map(s => (
          <div key={s} onClick={() => setSide(s)} style={{ textAlign: 'center', padding: '10px', borderRadius: 9, cursor: 'pointer',
            fontWeight: 800, fontSize: 15, textTransform: 'capitalize',
            background: side === s ? A.card : 'transparent', color: side === s ? (s === 'buy' ? A.green : A.red) : A.muted,
            boxShadow: side === s ? A.shadow : 'none' }}>{s}</div>
        ))}
      </div>

      {/* order type */}
      <TicketLabel>Order type</TicketLabel>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 16 }}>
        {TYPES.map(([id, label]) => (
          <div key={id} onClick={() => setType(id)} style={{ textAlign: 'center', padding: '10px', borderRadius: 11, cursor: 'pointer',
            fontWeight: 700, fontSize: 13.5, border: `1.5px solid ${type === id ? A.primary : A.border}`,
            background: type === id ? A.primarySoft : A.card, color: type === id ? A.primaryDeep : A.muted }}>{label}</div>
        ))}
      </div>

      {/* qty */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <TicketLabel>{isCrypto ? 'Amount' : 'Shares'}</TicketLabel>
        <span onClick={setMax} style={{ fontSize: 12.5, fontWeight: 700, color: A.primary, cursor: 'pointer' }}>Max</span>
      </div>
      <TicketInput value={qty} onChange={setQty} placeholder="0" mono />

      {/* conditional prices */}
      {needsStop && (<><TicketLabel>Stop price</TicketLabel><TicketInput value={stop} onChange={setStop} placeholder={usd(quote.price)} prefix="$" mono /></>)}
      {needsLimit && (<><TicketLabel>Limit price</TicketLabel><TicketInput value={limit} onChange={setLimit} placeholder={usd(quote.price)} prefix="$" mono /></>)}

      {/* tif */}
      <TicketLabel>Time in force</TicketLabel>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        {['Day', 'GTC'].map(v => (
          <div key={v} onClick={() => setTif(v)} style={{ flex: 1, textAlign: 'center', padding: '9px', borderRadius: 10, cursor: 'pointer', fontSize: 13, fontWeight: 700,
            border: `1.5px solid ${tif === v ? A.primary : A.border}`, background: tif === v ? A.primarySoft : A.card, color: tif === v ? A.primaryDeep : A.muted }}>{v === 'GTC' ? "Til canceled" : 'Day'}</div>
        ))}
      </div>

      {/* trade thesis (gamified journaling) */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 7 }}>
        <Icon name="notebook-pen" size={15} color={A.primary} />
        <span style={{ fontSize: 13, fontWeight: 800, color: A.ink }}>Why this trade?</span>
        <Pill bg={A.primarySoft} fg={A.primaryDeep} size="sm">+12 XP</Pill>
      </div>
      <textarea value={thesis} onChange={e => setThesis(e.target.value)} placeholder="Your reasoning — what's the setup, your risk, your exit? Writing it down builds discipline."
        style={{ width: '100%', minHeight: 64, resize: 'vertical', border: `1.5px solid ${A.border}`, borderRadius: 12, padding: '11px 13px',
          fontFamily: A.font, fontSize: 13.5, fontWeight: 500, color: A.ink, background: A.card, outline: 'none', marginBottom: 16, lineHeight: 1.5 }} />

      {/* est + buying power */}
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13.5, fontWeight: 700, marginBottom: 5 }}>
        <span style={{ color: A.muted }}>{type === 'market' ? 'Est. ' + (side === 'buy' ? 'cost' : 'proceeds') : 'Est. value'}</span>
        <span style={{ fontFamily: A.mono }}>{usd(est)}</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12.5, fontWeight: 600, color: A.faint, marginBottom: 16 }}>
        <span>{side === 'buy' ? 'Buying power' : 'Shares held'}</span>
        <span style={{ fontFamily: A.mono }}>{side === 'buy' ? usd(bp) : qtyFmt(held)}</span>
      </div>

      {err && <div style={{ background: A.redSoft, color: A.red, borderRadius: 10, padding: '10px 13px', fontSize: 13, fontWeight: 700, marginBottom: 14 }}>{err}</div>}

      <Btn kind={side === 'buy' ? 'success' : 'primary'} full size="lg" style={side === 'sell' ? { background: A.red, boxShadow: '0 6px 16px rgba(240,89,76,.3)' } : {}} onClick={toReview}>
        Review {side === 'buy' ? 'buy' : 'sell'}
      </Btn>
      <div style={{ textAlign: 'center', fontSize: 11.5, color: A.faint, fontWeight: 600, marginTop: 12 }}>Paper trade · no real money at risk</div>
    </Card>
  );
}

function TicketLabel({ children }) {
  return <div style={{ fontSize: 12.5, fontWeight: 800, color: window.A.muted, marginBottom: 7, letterSpacing: '.01em' }}>{children}</div>;
}
function TicketInput({ value, onChange, placeholder, prefix, mono }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: window.A.card, border: `1.5px solid ${window.A.border}`, borderRadius: 12, padding: '0 13px', marginBottom: 16 }}>
      {prefix && <span style={{ color: window.A.faint, fontWeight: 700, fontFamily: window.A.mono }}>{prefix}</span>}
      <input type="number" value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
        style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', padding: '12px 0',
          fontFamily: mono ? window.A.mono : window.A.font, fontSize: 16, fontWeight: 700, color: window.A.ink }} />
    </div>
  );
}

window.ScreenStock = ScreenStock;
