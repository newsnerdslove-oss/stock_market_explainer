// Options chain + multi-leg payoff ticket. Uses the DS PayoffDiagram.
// Paper-only concept — options aren't in the core trade store (see REPO-NOTES).
function ScreenOptions({ go, theme, setTheme }) {
  const t = useTrade();
  const [expiry, setExpiry] = React.useState('Jul 18');
  const [legs, setLegs] = React.useState([]);
  const [placed, setPlaced] = React.useState(false);
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
  if (!t) return null;

  const sym = t.getState().focus;
  const S = t.priceOf(sym);
  const niceStep = S < 50 ? 1 : S < 200 ? 2.5 : S < 1000 ? 5 : S < 10000 ? 250 : 1000;
  const atm = Math.round(S / niceStep) * niceStep;
  const strikes = [];
  for (let i = -4; i <= 4; i++) strikes.push(+(atm + i * niceStep).toFixed(2));
  const tv = Math.max(0.4, S * 0.03);
  const prem = (K, call) => {
    const intrinsic = call ? Math.max(0, S - K) : Math.max(0, K - S);
    const timeVal = tv * Math.exp(-Math.abs(K - S) / (S * 0.14));
    return +(Math.max(0.05, intrinsic + timeVal)).toFixed(2);
  };

  const hasLeg = (K, call) => legs.findIndex(l => l.strike === K && (l.instrument === 'call') === call);
  const toggleLeg = (K, call) => {
    const idx = hasLeg(K, call);
    if (idx >= 0) setLegs(legs.filter((_, i) => i !== idx));
    else setLegs([...legs, { instrument: call ? 'call' : 'put', side: 'long', strike: K, premium: prem(K, call), qty: 1 }]);
    setPlaced(false);
  };
  const flip = (i) => setLegs(legs.map((l, j) => j === i ? { ...l, side: l.side === 'long' ? 'short' : 'long' } : l));
  const up = (v) => v >= 0 ? A.green : A.red;

  const netDebit = legs.reduce((a, l) => a + (l.side === 'long' ? 1 : -1) * l.premium * l.qty, 0) * 100;

  return (
    <AppShell tab="trade" go={go} maxWidth={1180} theme={theme} setTheme={setTheme}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
        <span onClick={() => go('stock')} style={{ fontSize: 13.5, color: A.muted, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5 }}>
          <Icon name="arrow-left" size={16} /> {sym}
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18, flexWrap: 'wrap' }}>
        <h1 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-.02em', margin: 0 }}>{sym} options</h1>
        <Badge tone="amber">Concept · needs build</Badge>
        <Pill bg={A.sunk} fg={A.muted} size="sm">Spot {usd(S)}</Pill>
      </div>

      {/* expiry selector */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 18, flexWrap: 'wrap' }}>
        {['Jul 18', 'Jul 25', 'Aug 15', 'Sep 19'].map(e => (
          <div key={e} onClick={() => setExpiry(e)} style={{ padding: '8px 15px', borderRadius: 999, cursor: 'pointer', fontWeight: 700, fontSize: 13.5,
            border: `1.5px solid ${expiry === e ? A.primary : A.border}`, background: expiry === e ? A.primarySoft : A.card, color: expiry === e ? A.primaryDeep : A.muted }}>{e}</div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 22, alignItems: 'start' }}>
        {/* chain */}
        <Card pad={0}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 96px 1fr', padding: '12px 18px', borderBottom: `1px solid ${A.border}`, fontSize: 12, fontWeight: 800, letterSpacing: '.04em', textTransform: 'uppercase' }}>
            <div style={{ color: A.green }}>Calls</div>
            <div style={{ textAlign: 'center', color: A.faint }}>Strike</div>
            <div style={{ textAlign: 'right', color: A.red }}>Puts</div>
          </div>
          {strikes.map(K => {
            const atmRow = K === atm;
            const cIn = hasLeg(K, true) >= 0, pIn = hasLeg(K, false) >= 0;
            return (
              <div key={K} style={{ display: 'grid', gridTemplateColumns: '1fr 96px 1fr', alignItems: 'center',
                borderBottom: `1px solid ${A.borderSoft}`, background: atmRow ? A.sunk : 'transparent' }}>
                <div onClick={() => toggleLeg(K, true)} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 18px', cursor: 'pointer',
                  background: cIn ? A.greenSoft : 'transparent', fontFamily: A.mono, fontWeight: 700, fontSize: 14 }}>
                  <span style={{ color: cIn ? A.green : A.faint }}><Icon name={cIn ? 'check' : 'plus'} size={13} /></span>
                  <span style={{ color: S > K ? A.ink : A.muted }}>{usd(prem(K, true))}</span>
                </div>
                <div style={{ textAlign: 'center', fontFamily: A.mono, fontWeight: 800, fontSize: 14, color: atmRow ? A.primaryDeep : A.ink }}>{K}</div>
                <div onClick={() => toggleLeg(K, false)} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 18px', cursor: 'pointer',
                  background: pIn ? A.redSoft : 'transparent', fontFamily: A.mono, fontWeight: 700, fontSize: 14 }}>
                  <span style={{ color: K > S ? A.ink : A.muted }}>{usd(prem(K, false))}</span>
                  <span style={{ color: pIn ? A.red : A.faint }}><Icon name={pIn ? 'check' : 'plus'} size={13} /></span>
                </div>
              </div>
            );
          })}
        </Card>

        {/* builder + payoff */}
        <div style={{ position: 'sticky', top: 22, display: 'flex', flexDirection: 'column', gap: 18 }}>
          <Card>
            <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 4 }}>Strategy builder</div>
            <div style={{ fontSize: 13, color: A.muted, fontWeight: 600, marginBottom: 14 }}>{expiry} · tap chain rows to add legs</div>
            {legs.length === 0 && <div style={{ fontSize: 13.5, color: A.faint, fontWeight: 600, padding: '12px 0' }}>No legs yet. Tap a call or put premium to build a position.</div>}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: legs.length ? 14 : 0 }}>
              {legs.map((l, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 11, background: A.page }}>
                  <span onClick={() => flip(i)} style={{ cursor: 'pointer' }}><Badge tone={l.side === 'long' ? 'green' : 'red'}>{l.side}</Badge></span>
                  <span style={{ fontWeight: 800, fontSize: 14, textTransform: 'capitalize' }}>{l.instrument} {l.strike}</span>
                  <span style={{ fontSize: 12.5, color: A.muted, fontWeight: 600, fontFamily: A.mono }}>@ {usd(l.premium)}</span>
                  <div style={{ flex: 1 }} />
                  <Icon name="x" size={16} color={A.faint} style={{ cursor: 'pointer' }} onClick={() => setLegs(legs.filter((_, j) => j !== i))} />
                </div>
              ))}
            </div>
            {legs.length > 0 && (
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13.5, fontWeight: 700, marginBottom: 14 }}>
                <span style={{ color: A.muted }}>Net {netDebit >= 0 ? 'debit' : 'credit'}</span>
                <span style={{ fontFamily: A.mono, color: netDebit >= 0 ? A.ink : A.green }}>{usd(Math.abs(netDebit))}</span>
              </div>
            )}
            <Btn kind={placed ? 'success' : 'primary'} full icon={placed ? 'check' : undefined} disabled={!legs.length}
              style={!legs.length ? { opacity: .5, pointerEvents: 'none' } : {}} onClick={() => setPlaced(true)}>
              {placed ? 'Paper order placed · +15 XP' : 'Place paper options order'}
            </Btn>
          </Card>

          {legs.length > 0 && (
            <Card>
              <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 12 }}>Payoff at expiration</div>
              <DSChart kind="PayoffDiagram" legs={legs} title={`${sym} · ${expiry}`} />
            </Card>
          )}
        </div>
      </div>
    </AppShell>
  );
}
window.ScreenOptions = ScreenOptions;
