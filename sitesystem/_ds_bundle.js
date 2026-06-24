/* @ds-bundle: {"namespace":"StocksDS","components":[{"name":"CandleAnatomy","sourcePath":"components/charts/CandleAnatomy/CandleAnatomy.jsx"},{"name":"EquityCurve","sourcePath":"components/charts/EquityCurve/EquityCurve.jsx"},{"name":"PatternChart","sourcePath":"components/charts/PatternChart/PatternChart.jsx"},{"name":"PayoffDiagram","sourcePath":"components/charts/PayoffDiagram/PayoffDiagram.jsx"}],"sourceHashes":{"components/charts/CandleAnatomy/CandleAnatomy.jsx":"a38d2872fd41","components/charts/CandleAnatomy/CandleAnatomy.d.ts":"cb574a43cf41","components/charts/CandleAnatomy/CandleAnatomy.prompt.md":"33b386171ee3","components/charts/EquityCurve/EquityCurve.jsx":"964f87283e16","components/charts/EquityCurve/EquityCurve.d.ts":"193bdbcee3c9","components/charts/EquityCurve/EquityCurve.prompt.md":"da4a4b41d380","components/charts/PatternChart/PatternChart.jsx":"e1025b7ad557","components/charts/PatternChart/PatternChart.d.ts":"7d57fdc8e515","components/charts/PatternChart/PatternChart.prompt.md":"d77fcd35873d","components/charts/PayoffDiagram/PayoffDiagram.jsx":"9715e0e682e0","components/charts/PayoffDiagram/PayoffDiagram.d.ts":"68c141a58aca","components/charts/PayoffDiagram/PayoffDiagram.prompt.md":"8e2599e4ca71"},"inlinedExternals":[],"builtBy":"cc-design-sync"} */
"use strict";
var StocksDS = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e) {
      throw err = [e], e;
    }
  };
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // <define:import.meta.env>
  var init_define_import_meta_env = __esm({
    "<define:import.meta.env>"() {
    }
  });

  // shim:react-shim
  var require_react_shim = __commonJS({
    "shim:react-shim"(exports, module) {
      init_define_import_meta_env();
      var R = window.React;
      function jsx5(t, p, k) {
        return R.createElement(t, k === void 0 ? p : Object.assign({ key: k }, p));
      }
      module.exports = R;
      module.exports.jsx = jsx5;
      module.exports.jsxs = jsx5;
      module.exports.jsxDEV = jsx5;
      module.exports.Fragment = R.Fragment;
    }
  });

  // web/.ds-sync-entry.tsx
  var ds_sync_entry_exports = {};
  __export(ds_sync_entry_exports, {
    CandleAnatomy: () => CandleAnatomy,
    EquityCurve: () => EquityCurve,
    PatternChart: () => PatternChart,
    PayoffDiagram: () => PayoffDiagram
  });
  init_define_import_meta_env();

  // web/components/charts/CandleAnatomy.tsx
  init_define_import_meta_env();
  var import_jsx_runtime = __toESM(require_react_shim());
  var UP = "#2BD17E";
  var DOWN = "#FF5C5C";
  var STRONG = "#232A36";
  var INK = "#E8EDF4";
  var MUTED = "#8A94A6";
  var CX = 150;
  var HIGH_Y = 40;
  var CLOSE_Y = 110;
  var OPEN_Y = 230;
  var LOW_Y = 300;
  var BODY_HALF = 30;
  function Leader({ y, label }) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: CX + BODY_HALF + 6, y1: y, x2: 300, y2: y, stroke: STRONG, strokeWidth: 1, strokeDasharray: "3 3" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", { x: 306, y: y + 4, fill: INK, fontSize: 13, fontFamily: "Inter, ui-sans-serif, system-ui", children: label })
    ] });
  }
  function CandleAnatomy() {
    return (
      // viewBox is wide enough to fit the right-hand leader labels: the longest
      // ("High — highest price in the period") starts at x=306 and runs to ~x=536.
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "svg",
        {
          viewBox: "0 0 560 340",
          role: "img",
          "aria-label": "Anatomy of a candlestick: high, low, open, and close prices.",
          className: "w-full max-w-lg",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: CX, y1: HIGH_Y, x2: CX, y2: CLOSE_Y, stroke: UP, strokeWidth: 2 }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: CX, y1: OPEN_Y, x2: CX, y2: LOW_Y, stroke: UP, strokeWidth: 2 }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "rect",
              {
                x: CX - BODY_HALF,
                y: CLOSE_Y,
                width: BODY_HALF * 2,
                height: OPEN_Y - CLOSE_Y,
                rx: 2,
                fill: UP,
                fillOpacity: 0.85
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, { y: HIGH_Y, label: "High \u2014 highest price in the period" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, { y: CLOSE_Y, label: "Close (top of a green body)" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, { y: OPEN_Y, label: "Open (bottom of a green body)" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, { y: LOW_Y, label: "Low \u2014 lowest price in the period" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", { x: CX - BODY_HALF - 10, y: (CLOSE_Y + OPEN_Y) / 2, fill: MUTED, fontSize: 12, textAnchor: "end", children: "body" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", { x: CX, y: (HIGH_Y + CLOSE_Y) / 2, fill: MUTED, fontSize: 11, textAnchor: "middle", dx: -44, children: "wick" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { transform: "translate(20, 318)", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: 0, y: -9, width: 12, height: 12, rx: 2, fill: UP, fillOpacity: 0.85 }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", { x: 18, y: 1, fill: MUTED, fontSize: 12, children: "green = close above open (price rose)" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: 250, y: -9, width: 12, height: 12, rx: 2, fill: DOWN, fillOpacity: 0.85 }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", { x: 268, y: 1, fill: MUTED, fontSize: 12, children: "red = close below open" })
            ] })
          ]
        }
      )
    );
  }

  // web/components/charts/EquityCurve.tsx
  init_define_import_meta_env();
  var import_jsx_runtime2 = __toESM(require_react_shim());
  function EquityCurve({ equity }) {
    if (equity.length < 2) return null;
    const W = 320;
    const H = 96;
    const pad = 8;
    const max = Math.max(...equity, 100);
    const min = Math.min(...equity, 100);
    const range = max - min || 1;
    const x = (i) => pad + i / (equity.length - 1) * (W - 2 * pad);
    const y = (v) => pad + (max - v) / range * (H - 2 * pad);
    const points = equity.map((v, i) => `${x(i)},${y(v)}`).join(" ");
    const up = equity[equity.length - 1] >= 100;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "rounded-md border border-strong bg-surface p-3", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { viewBox: `0 0 ${W} ${H}`, className: "w-full", role: "img", "aria-label": "Equity curve", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("line", { x1: pad, x2: W - pad, y1: y(100), y2: y(100), className: "stroke-hairline", strokeWidth: 1, strokeDasharray: "3 3" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("polyline", { points, fill: "none", className: up ? "stroke-up" : "stroke-down", strokeWidth: 1.5 })
    ] }) });
  }

  // web/components/charts/PayoffDiagram.tsx
  init_define_import_meta_env();

  // web/lib/options/strategy.ts
  init_define_import_meta_env();
  var OPT_MULT = 100;
  function legPayoff(leg, s) {
    const qty = leg.qty ?? 1;
    const prem = leg.premium ?? 0;
    if (leg.instrument === "stock") {
      return (leg.side === "long" ? s - prem : prem - s) * qty;
    }
    const strike = leg.strike ?? 0;
    const intrinsic = leg.instrument === "call" ? Math.max(0, s - strike) : Math.max(0, strike - s);
    const per = leg.side === "long" ? intrinsic - prem : prem - intrinsic;
    return per * qty * OPT_MULT;
  }
  function totalPayoff(legs, s) {
    return legs.reduce((sum, l) => sum + legPayoff(l, s), 0);
  }

  // web/components/charts/PayoffDiagram.tsx
  var import_jsx_runtime3 = __toESM(require_react_shim());
  var UP2 = "#2BD17E";
  var DOWN2 = "#FF5C5C";
  var INK2 = "#E8EDF4";
  var MUTED2 = "#8A94A6";
  var FAINT = "#5A6376";
  var STRONG2 = "#232A36";
  var fmt = (v) => `${v < 0 ? "\u2212" : ""}$${Math.abs(Math.round(v)).toLocaleString("en-US")}`;
  var fmtPrice = (v) => `$${(Math.round(v * 100) / 100).toLocaleString("en-US")}`;
  function PayoffDiagram({ legs, title }) {
    const keys = legs.map((l) => l.instrument === "stock" ? l.premium ?? 0 : l.strike ?? 0).filter((k) => k > 0);
    const minK = keys.length ? Math.min(...keys) : 0;
    const maxK = keys.length ? Math.max(...keys) : 100;
    const pad = Math.max((maxK - minK) * 0.6, maxK * 0.2, 5);
    const lo = Math.max(0, minK - pad);
    const hi = maxK + pad;
    const N = 80;
    const grid = [];
    for (let i = 0; i <= N; i++) grid.push(lo + (hi - lo) * i / N);
    const xs = [.../* @__PURE__ */ new Set([...grid, ...keys])].filter((x) => x >= lo && x <= hi).sort((a, b) => a - b);
    let pts = xs.map((x) => ({ x, y: totalPayoff(legs, x) }));
    const crossed = [];
    for (let i = 0; i < pts.length; i++) {
      crossed.push(pts[i]);
      const a = pts[i];
      const b = pts[i + 1];
      if (b && (a.y < 0 && b.y > 0 || a.y > 0 && b.y < 0)) {
        const t = -a.y / (b.y - a.y);
        crossed.push({ x: a.x + (b.x - a.x) * t, y: 0 });
      }
    }
    pts = crossed;
    const ys = pts.map((p) => p.y);
    let yMin = Math.min(...ys, 0);
    let yMax = Math.max(...ys, 0);
    const yPad = Math.max((yMax - yMin) * 0.12, 1);
    yMin -= yPad;
    yMax += yPad;
    const W = 560;
    const H = 320;
    const m = { l: 70, r: 20, t: title ? 34 : 18, b: 48 };
    const xpix = (x) => m.l + (x - lo) / (hi - lo) * (W - m.l - m.r);
    const ypix = (y) => m.t + (yMax - y) / (yMax - yMin) * (H - m.t - m.b);
    const zeroY = ypix(0);
    const curve = pts.map((p, i) => `${i === 0 ? "M" : "L"}${xpix(p.x).toFixed(1)} ${ypix(p.y).toFixed(1)}`).join(" ");
    const areaPaths = (sign) => {
      const polys = [];
      let cur = [];
      for (const p of pts) {
        const inRun = sign > 0 ? p.y >= 0 : p.y <= 0;
        if (inRun) cur.push(p);
        else {
          if (cur.length > 1) polys.push(cur);
          cur = [];
        }
      }
      if (cur.length > 1) polys.push(cur);
      return polys.map((run) => {
        const top = run.map((p) => `${xpix(p.x).toFixed(1)} ${ypix(p.y).toFixed(1)}`).join(" L ");
        const xEnd = xpix(run[run.length - 1].x).toFixed(1);
        const xStart = xpix(run[0].x).toFixed(1);
        return `M ${top} L ${xEnd} ${zeroY.toFixed(1)} L ${xStart} ${zeroY.toFixed(1)} Z`;
      });
    };
    const breakevens = [...new Set(pts.filter((p) => Math.abs(p.y) < 1e-6).map((p) => Math.round(p.x * 100) / 100))];
    const uniqStrikes = [...new Set(keys)].sort((a, b) => a - b);
    const maxProfit = Math.max(...ys);
    const maxLoss = Math.min(...ys);
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
      "svg",
      {
        viewBox: `0 0 ${W} ${H}`,
        role: "img",
        "aria-label": `Payoff-at-expiration diagram${title ? `: ${title}` : ""}. Profit and loss versus the underlying price.`,
        className: "w-full",
        children: [
          title && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("text", { x: W / 2, y: 20, fill: INK2, fontSize: 14, textAnchor: "middle", fontFamily: "Inter, ui-sans-serif, system-ui", children: title }),
          areaPaths(1).map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d, fill: UP2, fillOpacity: 0.13 }, `p${i}`)),
          areaPaths(-1).map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d, fill: DOWN2, fillOpacity: 0.13 }, `l${i}`)),
          uniqStrikes.map((k) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("g", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: xpix(k), y1: m.t, x2: xpix(k), y2: H - m.b, stroke: FAINT, strokeWidth: 1, strokeDasharray: "2 3", opacity: 0.5 }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("text", { x: xpix(k), y: H - m.b + 14, fill: FAINT, fontSize: 10, textAnchor: "middle", fontFamily: "JetBrains Mono, monospace", children: fmtPrice(k) })
          ] }, `k${k}`)),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: m.l, y1: zeroY, x2: W - m.r, y2: zeroY, stroke: STRONG2, strokeWidth: 1.5 }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: curve, fill: "none", stroke: INK2, strokeWidth: 2, strokeLinejoin: "round" }),
          breakevens.map((b) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("g", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("circle", { cx: xpix(b), cy: zeroY, r: 3.5, fill: INK2 }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("text", { x: xpix(b), y: zeroY - 7, fill: MUTED2, fontSize: 10, textAnchor: "middle", fontFamily: "JetBrains Mono, monospace", children: fmtPrice(b) })
          ] }, `be${b}`)),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("text", { x: m.l - 8, y: ypix(maxProfit) + 4, fill: UP2, fontSize: 11, textAnchor: "end", fontFamily: "JetBrains Mono, monospace", children: fmt(maxProfit) }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("text", { x: m.l - 8, y: zeroY + 4, fill: MUTED2, fontSize: 11, textAnchor: "end", fontFamily: "JetBrains Mono, monospace", children: "$0" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("text", { x: m.l - 8, y: ypix(maxLoss) + 4, fill: DOWN2, fontSize: 11, textAnchor: "end", fontFamily: "JetBrains Mono, monospace", children: fmt(maxLoss) }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("text", { x: (m.l + W - m.r) / 2, y: H - 6, fill: MUTED2, fontSize: 11, textAnchor: "middle", fontFamily: "Inter, ui-sans-serif, system-ui", children: "Underlying price at expiration" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("text", { x: 16, y: m.t + 6, fill: MUTED2, fontSize: 11, textAnchor: "start", fontFamily: "Inter, ui-sans-serif, system-ui", children: "P/L" })
        ]
      }
    );
  }

  // web/components/charts/PatternChart.tsx
  init_define_import_meta_env();
  var import_jsx_runtime4 = __toESM(require_react_shim());
  function PatternChart({
    candles,
    onPick,
    picked,
    correctIndex
  }) {
    if (!candles.length) return null;
    const W = 360;
    const H = 160;
    const pad = 12;
    const max = Math.max(...candles.map((c) => c.high));
    const min = Math.min(...candles.map((c) => c.low));
    const range = max - min || 1;
    const y = (p) => pad + (max - p) / range * (H - 2 * pad);
    const slot = (W - 2 * pad) / candles.length;
    const bodyW = Math.max(3, slot * 0.6);
    const interactive = typeof onPick === "function";
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "rounded-md border border-strong bg-surface p-3", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("svg", { viewBox: `0 0 ${W} ${H}`, className: "w-full", role: "img", "aria-label": "Price candlestick chart", children: candles.map((c, i) => {
      const cx = pad + slot * (i + 0.5);
      const up = c.close >= c.open;
      const cls = up ? "fill-up stroke-up" : "fill-down stroke-down";
      const bodyTop = y(Math.max(c.open, c.close));
      const bodyH = Math.max(1, y(Math.min(c.open, c.close)) - bodyTop);
      const isPicked = picked === i;
      const isCorrect = correctIndex === i;
      return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("g", { children: [
        (isPicked || isCorrect) && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "rect",
          {
            x: cx - slot / 2 + 1,
            y: 2,
            width: slot - 2,
            height: H - 4,
            rx: 3,
            className: isCorrect ? "fill-up/10 stroke-up" : "fill-learn/10 stroke-learn",
            strokeWidth: 1.5
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("g", { className: cls, children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("line", { x1: cx, x2: cx, y1: y(c.high), y2: y(c.low), strokeWidth: 1.5 }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("rect", { x: cx - bodyW / 2, y: bodyTop, width: bodyW, height: bodyH })
        ] }),
        interactive && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "rect",
          {
            x: cx - slot / 2,
            y: 0,
            width: slot,
            height: H,
            fill: "transparent",
            className: "cursor-pointer",
            role: "button",
            tabIndex: 0,
            "aria-label": `Candle ${i + 1} of ${candles.length}`,
            onClick: () => onPick?.(i),
            onKeyDown: (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onPick?.(i);
              }
            }
          }
        )
      ] }, i);
    }) }) });
  }
  return __toCommonJS(ds_sync_entry_exports);
})();
window.StocksDS=StocksDS.__dsMainNs?Object.assign({},StocksDS,StocksDS.__dsMainNs,{__dsMainNs:undefined}):StocksDS;
