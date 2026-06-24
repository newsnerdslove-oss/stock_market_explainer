// Stax paper-trading store — single source of truth for the trading screens.
// Plain JS (loaded before the babel screens). Live price walk + order fills +
// positions/cash/P&L, persisted to localStorage. No real market data.
(function () {
  const KEY = 'stax.trading.v1';
  const START_DEPOSIT = 100000;

  // --- Instrument universe (stocks / ETFs / crypto) ------------------------
  const UNIVERSE = [
    { sym: 'AAPL', name: 'Apple Inc.',        type: 'Stock',  sector: 'Technology', price: 212.40, prev: 209.10, color: '#6E7681' },
    { sym: 'MSFT', name: 'Microsoft Corp.',   type: 'Stock',  sector: 'Technology', price: 438.20, prev: 441.60, color: '#2E7BE6' },
    { sym: 'NVDA', name: 'NVIDIA Corp.',      type: 'Stock',  sector: 'Technology', price: 121.80, prev: 117.30, color: '#1FA968' },
    { sym: 'TSLA', name: 'Tesla, Inc.',       type: 'Stock',  sector: 'Consumer',   price: 248.50, prev: 255.10, color: '#F0594C' },
    { sym: 'AMZN', name: 'Amazon.com, Inc.',  type: 'Stock',  sector: 'Consumer',   price: 201.30, prev: 199.40, color: '#F5A623' },
    { sym: 'DIS',  name: 'Walt Disney Co.',   type: 'Stock',  sector: 'Consumer',   price: 96.20,  prev: 95.10,  color: '#6C5CE7' },
    { sym: 'KO',   name: 'Coca-Cola Co.',     type: 'Stock',  sector: 'Consumer',   price: 71.40,  prev: 71.05,  color: '#E2683C' },
    { sym: 'SPY',  name: 'S&P 500 ETF',       type: 'ETF',    sector: 'Index',      price: 583.10, prev: 580.20, color: '#0E9E96' },
    { sym: 'QQQ',  name: 'Nasdaq-100 ETF',    type: 'ETF',    sector: 'Index',      price: 497.60, prev: 492.80, color: '#3B82F6' },
    { sym: 'VTI',  name: 'Total Market ETF',  type: 'ETF',    sector: 'Index',      price: 289.40, prev: 288.10, color: '#1FA968' },
    { sym: 'BTC',  name: 'Bitcoin',           type: 'Crypto', sector: 'Crypto',     price: 67250,  prev: 64800,  color: '#F5A623' },
    { sym: 'ETH',  name: 'Ethereum',          type: 'Crypto', sector: 'Crypto',     price: 3520,   prev: 3410,   color: '#6C5CE7' },
  ];
  const META = {}; UNIVERSE.forEach(u => META[u.sym] = u);

  // --- Live prices + chart series (in-memory; reset on reload) -------------
  const prices = {};
  const series = {};
  UNIVERSE.forEach(u => {
    prices[u.sym] = u.price;
    series[u.sym] = genSeries(u.price, 44, u.type === 'Crypto' ? 0.02 : 0.011);
  });
  function genSeries(end, n, vol) {
    const out = new Array(n);
    let p = end;
    out[n - 1] = round(p, end);
    for (let i = n - 2; i >= 0; i--) {
      p = p / (1 + (Math.random() - 0.48) * vol);
      out[i] = round(p, end);
    }
    return out;
  }
  function round(v, ref) { return (ref >= 1000) ? Math.round(v) : Math.round(v * 100) / 100; }

  // --- Persisted state -----------------------------------------------------
  function seed() {
    // a returning learner with a few positions already on
    const positions = {
      AAPL: { shares: 40, avgCost: 198.20 },
      NVDA: { shares: 60, avgCost: 109.50 },
      SPY:  { shares: 25, avgCost: 561.00 },
      BTC:  { shares: 0.30, avgCost: 61200 },
    };
    let spent = 0; Object.entries(positions).forEach(([s, p]) => spent += p.shares * p.avgCost);
    return {
      cash: round(START_DEPOSIT - spent, 1),
      deposit: START_DEPOSIT,
      positions,
      orders: [
        { id: 'o1', sym: 'NVDA', side: 'buy', type: 'market', qty: 60, status: 'filled', fill: 109.50, ts: Date.now() - 86400000 * 6 },
        { id: 'o2', sym: 'AAPL', side: 'buy', type: 'limit', qty: 40, limit: 198.20, status: 'filled', fill: 198.20, ts: Date.now() - 86400000 * 4 },
        { id: 'o3', sym: 'SPY',  side: 'buy', type: 'market', qty: 25, status: 'filled', fill: 561.00, ts: Date.now() - 86400000 * 3 },
        { id: 'o4', sym: 'BTC',  side: 'buy', type: 'market', qty: 0.30, status: 'filled', fill: 61200, ts: Date.now() - 86400000 * 2 },
        { id: 'o5', sym: 'TSLA', side: 'buy', type: 'limit', qty: 15, limit: 235.00, status: 'open', ts: Date.now() - 3600000 * 5 },
      ],
      watchlist: ['MSFT', 'TSLA', 'QQQ', 'ETH', 'AMZN'],
      xp: 120,
      focus: 'AAPL',
      theses: { o2: 'Strong product cycle + buyback; entering on a pullback to support.' },
    };
  }
  let S;
  try { S = JSON.parse(localStorage.getItem(KEY)) || seed(); } catch (e) { S = seed(); }
  function persist() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }

  // --- Subscriptions -------------------------------------------------------
  const subs = new Set();
  function notify() { subs.forEach(fn => { try { fn(); } catch (e) {} }); }

  // --- Selectors -----------------------------------------------------------
  function priceOf(sym) { return prices[sym]; }
  function seriesOf(sym) { return series[sym]; }
  function position(sym) { return S.positions[sym]; }
  function quote(sym) {
    const m = META[sym], p = prices[sym];
    const chg = p - m.prev, pct = (chg / m.prev) * 100;
    return { ...m, price: p, chg, pct };
  }
  function holdings() {
    return Object.entries(S.positions).filter(([, p]) => p.shares > 0).map(([sym, p]) => {
      const px = prices[sym], mv = px * p.shares, cost = p.avgCost * p.shares;
      const m = META[sym];
      return {
        sym, name: m.name, type: m.type, color: m.color, shares: p.shares, avgCost: p.avgCost,
        price: px, value: mv, pl: mv - cost, plPct: ((px - p.avgCost) / p.avgCost) * 100,
        dayChg: (px - m.prev) * p.shares, dayPct: ((px - m.prev) / m.prev) * 100,
      };
    });
  }
  function totals() {
    const h = holdings();
    const invested = h.reduce((a, x) => a + x.value, 0);
    const dayChg = h.reduce((a, x) => a + x.dayChg, 0);
    const total = invested + S.cash;
    const totalPL = total - S.deposit;
    return {
      cash: S.cash, buyingPower: S.cash, invested, total,
      dayChg, dayPct: invested ? (dayChg / (invested - dayChg)) * 100 : 0,
      totalPL, totalPLPct: (totalPL / S.deposit) * 100, count: h.length,
    };
  }
  function openOrders() { return S.orders.filter(o => o.status === 'open'); }
  function tradesToday() {
    const start = new Date(); start.setHours(0, 0, 0, 0);
    return S.orders.filter(o => o.ts >= start.getTime() && o.status !== 'cancelled').length;
  }

  // --- Order placement / fills ---------------------------------------------
  let oid = 100;
  function applyFill(o, fillPx) {
    o.status = 'filled'; o.fill = round(fillPx, fillPx);
    const pos = S.positions[o.sym] || { shares: 0, avgCost: 0 };
    if (o.side === 'buy') {
      const newShares = pos.shares + o.qty;
      pos.avgCost = (pos.avgCost * pos.shares + fillPx * o.qty) / newShares;
      pos.shares = newShares;
      S.cash = round(S.cash - fillPx * o.qty, 1);
    } else {
      pos.shares = Math.max(0, pos.shares - o.qty);
      S.cash = round(S.cash + fillPx * o.qty, 1);
      if (pos.shares <= 0.0000001) { delete S.positions[o.sym]; }
    }
    if (pos.shares > 0) S.positions[o.sym] = pos;
  }
  function tryFillOpen() {
    let changed = false;
    S.orders.forEach(o => {
      if (o.status !== 'open') return;
      const px = prices[o.sym];
      let fill = null;
      if (o.type === 'limit') {
        if (o.side === 'buy' && px <= o.limit) fill = px;
        if (o.side === 'sell' && px >= o.limit) fill = px;
      } else if (o.type === 'stop') {
        if (o.side === 'buy' && px >= o.stop) fill = px;
        if (o.side === 'sell' && px <= o.stop) fill = px;
      } else if (o.type === 'stoplimit') {
        if (o.side === 'buy' && px >= o.stop && px <= o.limit) fill = px;
        if (o.side === 'sell' && px <= o.stop && px >= o.limit) fill = px;
      }
      if (fill !== null) { applyFill(o, fill); changed = true; }
    });
    if (changed) persist();
    return changed;
  }

  // Returns { ok, order, reason }. thesis optional (journaling).
  function placeOrder(req) {
    const { sym, side, type, qty, limit, stop, thesis } = req;
    if (!META[sym] || !qty || qty <= 0) return { ok: false, reason: 'Invalid order' };
    const px = prices[sym];
    const isMarket = type === 'market';
    const o = { id: 'o' + (++oid), sym, side, type, qty: +qty, ts: Date.now(), status: 'open' };
    if (limit) o.limit = +limit;
    if (stop) o.stop = +stop;

    if (side === 'buy') {
      const need = (isMarket ? px : (limit || px)) * qty;
      if (need > S.cash + 1e-6) return { ok: false, reason: 'Not enough buying power' };
    } else {
      const have = (S.positions[sym] || {}).shares || 0;
      if (qty > have + 1e-9) return { ok: false, reason: 'Not enough shares to sell' };
    }
    S.orders.unshift(o);
    if (isMarket) applyFill(o, px);
    // award XP: trade + journaling bonus
    S.xp += 8 + (thesis && thesis.trim().length > 12 ? 12 : 0);
    if (thesis && thesis.trim()) S.theses[o.id] = thesis.trim();
    persist(); notify();
    return { ok: true, order: o, filled: isMarket };
  }
  function cancelOrder(id) {
    const o = S.orders.find(x => x.id === id);
    if (o && o.status === 'open') { o.status = 'cancelled'; persist(); notify(); }
  }
  function setFocus(sym) { if (META[sym]) { S.focus = sym; persist(); notify(); } }
  function toggleWatch(sym) {
    const i = S.watchlist.indexOf(sym);
    if (i >= 0) S.watchlist.splice(i, 1); else S.watchlist.unshift(sym);
    persist(); notify();
  }
  function reset() { S = seed(); persist(); notify(); }

  // --- Live tick -----------------------------------------------------------
  let timer = null;
  function tick() {
    UNIVERSE.forEach(u => {
      const vol = u.type === 'Crypto' ? 0.006 : 0.0032;
      let p = prices[u.sym] * (1 + (Math.random() - 0.5) * 2 * vol);
      p = round(p, u.price);
      prices[u.sym] = p;
      const s = series[u.sym]; s.push(p); if (s.length > 60) s.shift();
    });
    tryFillOpen();
    notify();
  }
  function start() { if (!timer) timer = setInterval(tick, 2600); }
  function stop() { if (timer) { clearInterval(timer); timer = null; } }

  window.StaxTrade = {
    UNIVERSE, META,
    getState: () => S,
    subscribe(fn) { subs.add(fn); start(); return () => subs.delete(fn); },
    priceOf, seriesOf, quote, position, holdings, totals, openOrders, tradesToday,
    placeOrder, cancelOrder, setFocus, toggleWatch, reset, start, stop,
    xp: () => S.xp, watchlist: () => S.watchlist, orders: () => S.orders, theses: () => S.theses,
  };
})();
