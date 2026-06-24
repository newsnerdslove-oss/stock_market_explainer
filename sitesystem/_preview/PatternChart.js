var __dsPreview = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn2, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
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
  var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
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
      function jsx(t, p, k) {
        return R.createElement(t, k === void 0 ? p : Object.assign({ key: k }, p));
      }
      module.exports = R;
      module.exports.jsx = jsx;
      module.exports.jsxs = jsx;
      module.exports.jsxDEV = jsx;
      module.exports.Fragment = R.Fragment;
    }
  });

  // sb-stub:storybook/test
  var require_test = __commonJS({
    "sb-stub:storybook/test"(exports, module) {
      init_define_import_meta_env();
      var inert = new Proxy(function() {
      }, { get: function(t, k) {
        if (k === "then") return void 0;
        if (k === "prototype") return t.prototype;
        if (k === "valueOf" || k === "toString" || k === Symbol.toPrimitive) return function() {
          return "";
        };
        return inert;
      }, apply: function() {
        return inert;
      }, construct: function() {
        return {};
      } });
      var m = {};
      "fn action actions expect userEvent within waitFor screen fireEvent spyOn mocked jest vi configureActions decorateAction setupWorker http HttpResponse graphql rest".split(" ").forEach(function(k) {
        m[k] = inert;
      });
      var def = function(p) {
        return p && p.children !== void 0 ? p.children : null;
      };
      Object.assign(def, m);
      module.exports = new Proxy(def, { get: function(t, k) {
        if (k === "then") return void 0;
        if (k === "prototype") return t.prototype;
        return k in m ? m[k] : k === "__esModule" ? void 0 : inert;
      } });
    }
  });

  // ds-raw:__ds_raw__
  var require_ds_raw = __commonJS({
    "ds-raw:__ds_raw__"(exports, module) {
      init_define_import_meta_env();
      module.exports = window.StocksDS;
    }
  });

  // .design-sync/.cache/previews/PatternChart.tsx
  var PatternChart_exports = {};
  __export(PatternChart_exports, {
    BullishEngulfing: () => BullishEngulfing2,
    Doji: () => Doji2,
    Hammer: () => Hammer2,
    Interactive: () => Interactive2
  });
  init_define_import_meta_env();
  var React = __toESM(require_react_shim());

  // web/components/charts/PatternChart.stories.tsx
  var PatternChart_stories_exports = {};
  __export(PatternChart_stories_exports, {
    BullishEngulfing: () => BullishEngulfing,
    Doji: () => Doji,
    Hammer: () => Hammer,
    Interactive: () => Interactive,
    default: () => PatternChart_stories_default
  });
  init_define_import_meta_env();
  var import_test = __toESM(require_test());

  // ds-shim:ds:PatternChart
  var ds_PatternChart_exports = {};
  __export(ds_PatternChart_exports, {
    default: () => ds_PatternChart_default
  });
  init_define_import_meta_env();
  __reExport(ds_PatternChart_exports, __toESM(require_ds_raw()));
  var g = window.StocksDS;
  var ds_PatternChart_default = g["PatternChart"] !== void 0 ? g["PatternChart"] : g;

  // web/lib/charts/patterns.ts
  init_define_import_meta_env();
  function trend(from, step, n) {
    const out = [];
    let base = from;
    for (let i = 0; i < n; i++) {
      const open = base;
      const close = base + step;
      const hi = Math.max(open, close) + Math.abs(step) * 0.3;
      const lo = Math.min(open, close) - Math.abs(step) * 0.3;
      out.push({ open, high: hi, low: lo, close });
      base = close;
    }
    return out;
  }
  function bullishEngulfing() {
    const ctx = trend(100, -4, 3);
    const prevClose = ctx[ctx.length - 1].close;
    return [
      ...ctx,
      { open: prevClose, high: prevClose + 1, low: prevClose - 5, close: prevClose - 4 },
      // small red
      { open: prevClose - 5, high: prevClose + 6, low: prevClose - 6, close: prevClose + 5 }
      // engulfing green
    ];
  }
  function hammer() {
    const ctx = trend(100, -4, 4);
    const base = ctx[ctx.length - 1].close;
    return [...ctx, { open: base, high: base + 1, low: base - 9, close: base + 0.5 }];
  }
  function shootingStar() {
    const ctx = trend(80, 4, 4);
    const base = ctx[ctx.length - 1].close;
    return [...ctx, { open: base, high: base + 9, low: base - 1, close: base - 0.5 }];
  }
  function doji() {
    const ctx = trend(90, 3, 3);
    const base = ctx[ctx.length - 1].close;
    return [...ctx, { open: base, high: base + 5, low: base - 5, close: base + 0.1 }];
  }

  // web/components/charts/PatternChart.stories.tsx
  var meta = {
    title: "Charts/PatternChart",
    component: ds_PatternChart_exports.PatternChart,
    parameters: { layout: "centered" },
    tags: ["autodocs"]
  };
  var PatternChart_stories_default = meta;
  var BullishEngulfing = { args: { candles: bullishEngulfing() } };
  var Hammer = { args: { candles: hammer() } };
  var Doji = { args: { candles: doji() } };
  var Interactive = {
    args: {
      candles: shootingStar(),
      onPick: (0, import_test.fn)(),
      picked: 2,
      correctIndex: 4
    }
  };

  // .design-sync/.cache/previews/PatternChart.tsx
  function compose(S, key) {
    const meta2 = S.default ?? {};
    const st = S[key];
    const args = { ...meta2.args ?? {}, ...st && st.args ? st.args : {} };
    const at = { ...meta2.argTypes ?? {}, ...st && st.argTypes ? st.argTypes : {} };
    for (const k of Object.keys(args)) {
      const m = at[k] && at[k].mapping;
      if (m && typeof m === "object" && args[k] in m) args[k] = m[args[k]];
    }
    const title = typeof meta2.title === "string" ? meta2.title : "";
    const ctx = {
      args,
      name: key,
      title,
      kind: title,
      id: "",
      componentId: "",
      globals: {},
      viewMode: "story",
      parameters: (st && st.parameters) ?? meta2.parameters ?? {}
    };
    let render = null;
    if (st && typeof st.render === "function") render = () => st.render(args, ctx);
    else if (typeof st === "function") render = () => st(args, ctx);
    else if (typeof meta2.render === "function") render = () => meta2.render(args, ctx);
    else {
      const C = st && st.component || meta2.component;
      if (C) render = () => React.createElement(C, args);
    }
    if (!render) return () => null;
    const decorators = [].concat((st && st.decorators) ?? []).concat(meta2.decorators ?? []);
    return decorators.reduce((inner, dec) => () => {
      const out = dec(inner, ctx);
      return out === void 0 ? inner() : out;
    }, render);
  }
  var BullishEngulfing2 = (
    /* Bullish Engulfing */
    compose(PatternChart_stories_exports, "BullishEngulfing")
  );
  var Hammer2 = (
    /* Hammer */
    compose(PatternChart_stories_exports, "Hammer")
  );
  var Doji2 = (
    /* Doji */
    compose(PatternChart_stories_exports, "Doji")
  );
  var Interactive2 = (
    /* Interactive */
    compose(PatternChart_stories_exports, "Interactive")
  );
  return __toCommonJS(PatternChart_exports);
})();
