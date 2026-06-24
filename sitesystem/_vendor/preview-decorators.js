(() => {
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

  // <define:import.meta.env>
  var init_define_import_meta_env = __esm({
    "<define:import.meta.env>"() {
    }
  });

  // sb-stub:msw/browser
  var require_browser = __commonJS({
    "sb-stub:msw/browser"(exports, module) {
      init_define_import_meta_env();
      var inert = new Proxy(function() {
      }, { get: function(t, k3) {
        if (k3 === "then") return void 0;
        if (k3 === "prototype") return t.prototype;
        if (k3 === "valueOf" || k3 === "toString" || k3 === Symbol.toPrimitive) return function() {
          return "";
        };
        return inert;
      }, apply: function() {
        return inert;
      }, construct: function() {
        return {};
      } });
      var m = {};
      "fn action actions expect userEvent within waitFor screen fireEvent spyOn mocked jest vi configureActions decorateAction setupWorker http HttpResponse graphql rest".split(" ").forEach(function(k3) {
        m[k3] = inert;
      });
      var def = function(p) {
        return p && p.children !== void 0 ? p.children : null;
      };
      Object.assign(def, m);
      module.exports = new Proxy(def, { get: function(t, k3) {
        if (k3 === "then") return void 0;
        if (k3 === "prototype") return t.prototype;
        return k3 in m ? m[k3] : k3 === "__esModule" ? void 0 : inert;
      } });
    }
  });

  // sb-stub:msw
  var require_msw = __commonJS({
    "sb-stub:msw"(exports, module) {
      init_define_import_meta_env();
      var inert = new Proxy(function() {
      }, { get: function(t, k3) {
        if (k3 === "then") return void 0;
        if (k3 === "prototype") return t.prototype;
        if (k3 === "valueOf" || k3 === "toString" || k3 === Symbol.toPrimitive) return function() {
          return "";
        };
        return inert;
      }, apply: function() {
        return inert;
      }, construct: function() {
        return {};
      } });
      var m = {};
      "fn action actions expect userEvent within waitFor screen fireEvent spyOn mocked jest vi configureActions decorateAction setupWorker http HttpResponse graphql rest".split(" ").forEach(function(k3) {
        m[k3] = inert;
      });
      var def = function(p) {
        return p && p.children !== void 0 ? p.children : null;
      };
      Object.assign(def, m);
      module.exports = new Proxy(def, { get: function(t, k3) {
        if (k3 === "then") return void 0;
        if (k3 === "prototype") return t.prototype;
        return k3 in m ? m[k3] : k3 === "__esModule" ? void 0 : inert;
      } });
    }
  });

  // rg:r
  var require_r = __commonJS({
    "rg:r"(exports, module) {
      init_define_import_meta_env();
      function jsx2(t, p, k3) {
        return window.React.createElement(t, k3 === void 0 ? p : Object.assign({ key: k3 }, p));
      }
      module.exports = new Proxy({ jsx: jsx2, jsxs: jsx2, jsxDEV: jsx2, Fragment: void 0 }, {
        get: function(o, k3) {
          return k3 in o ? o[k3] : (window.React || {})[k3];
        },
        ownKeys: function(o) {
          return Array.from(new Set(Object.keys(o).concat(Object.keys(window.React || {}))));
        },
        getOwnPropertyDescriptor: function(o, k3) {
          return { enumerable: true, configurable: true, get: function() {
            return k3 in o ? o[k3] : (window.React || {})[k3];
          } };
        }
      });
    }
  });

  // ds-bundle/.preview-decorators-entry.mjs
  init_define_import_meta_env();

  // web/.storybook/preview.tsx
  init_define_import_meta_env();

  // web/node_modules/msw-storybook-addon/dist/index.browser.js
  init_define_import_meta_env();
  var import_browser = __toESM(require_browser(), 1);
  var fileExtensionPattern = /\.(js|jsx|ts|tsx|mjs|woff|woff2|ttf|otf|eot)$/;
  var filteredURLSubstrings = [
    "sb-common-assets",
    "node_modules",
    "node-modules",
    "hot-update.json",
    "__webpack_hmr",
    "iframe.html",
    "sb-vite",
    "@vite",
    "@react-refresh",
    "/virtual:",
    ".stories.",
    ".mdx"
  ];
  var shouldFilterUrl = (url) => {
    if (fileExtensionPattern.test(url)) {
      return true;
    }
    const isStorybookRequest = filteredURLSubstrings.some(
      (substring) => url.includes(substring)
    );
    if (isStorybookRequest) {
      return true;
    }
    return false;
  };
  var augmentInitializeOptions = (options) => {
    if (typeof options?.onUnhandledRequest === "string") {
      return options;
    }
    return {
      ...options,
      // Filter requests that we know are not relevant to the user e.g. HMR, builder requests, statics assets, etc.
      onUnhandledRequest: (...args) => {
        const [{ url }, print] = args;
        if (shouldFilterUrl(url)) {
          return;
        }
        if (!options?.onUnhandledRequest) {
          print.warning();
          return;
        }
        if (typeof options?.onUnhandledRequest === "function") {
          options.onUnhandledRequest(...args);
        }
      }
    };
  };
  var api;
  var activationPromise;
  function initialize(options, initialHandlers = []) {
    const worker = (0, import_browser.setupWorker)(...initialHandlers);
    activationPromise = worker.start(augmentInitializeOptions(options)).then(() => {
    });
    api = worker;
    return worker;
  }
  async function waitForMswReady() {
    getWorker();
    await activationPromise;
  }
  function getWorker() {
    if (api === void 0) {
      throw new Error(
        `[MSW] Failed to retrieve the worker: no active worker found. Did you forget to call "initialize"?`
      );
    }
    return api;
  }
  function dedent(templ) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      values[_i - 1] = arguments[_i];
    }
    var strings = Array.from(typeof templ === "string" ? [templ] : templ);
    strings[strings.length - 1] = strings[strings.length - 1].replace(/\r?\n([\t ]*)$/, "");
    var indentLengths = strings.reduce(function(arr, str) {
      var matches = str.match(/\n([\t ]+|(?!\s).)/g);
      if (matches) {
        return arr.concat(matches.map(function(match) {
          var _a, _b;
          return (_b = (_a = match.match(/[\t ]/g)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
        }));
      }
      return arr;
    }, []);
    if (indentLengths.length) {
      var pattern_1 = new RegExp("\n[	 ]{" + Math.min.apply(Math, indentLengths) + "}", "g");
      strings = strings.map(function(str) {
        return str.replace(pattern_1, "\n");
      });
    }
    strings[0] = strings[0].replace(/^\r?\n/, "");
    var string = strings[0];
    values.forEach(function(value, i) {
      var endentations = string.match(/(?:^|\n)( *)$/);
      var endentation = endentations ? endentations[1] : "";
      var indentedValue = value;
      if (typeof value === "string" && value.includes("\n")) {
        indentedValue = String(value).split("\n").map(function(str, i2) {
          return i2 === 0 ? str : "" + endentation + str;
        }).join("\n");
      }
      string += indentedValue + strings[i + 1];
    });
    return string;
  }
  function once(fn) {
    let called = false;
    let value;
    const wrapper = (...args) => {
      if (!called) {
        called = true;
        value = fn(...args);
      }
      return value;
    };
    return wrapper;
  }
  function deprecate(message) {
    return once(() => {
      console.warn(dedent(message));
    });
  }
  var deprecateMessage = deprecate(`
[msw-storybook-addon] You are using parameters.msw as an Array instead of an Object with a property "handlers". This usage is deprecated and will be removed in the next release. Please use the Object syntax instead.

More info: https://github.com/mswjs/msw-storybook-addon/blob/main/MIGRATION.md#parametersmsw-array-notation-deprecated-in-favor-of-object-notation
`);
  function applyRequestHandlers(handlersListOrObject) {
    api?.resetHandlers();
    if (handlersListOrObject == null) {
      return;
    }
    if (Array.isArray(handlersListOrObject) && handlersListOrObject.length > 0) {
      deprecateMessage();
      api.use(...handlersListOrObject);
      return;
    }
    if ("handlers" in handlersListOrObject && handlersListOrObject.handlers) {
      const handlers2 = Object.values(handlersListOrObject.handlers).filter(Boolean).reduce(
        (handlers22, handlersList) => handlers22.concat(handlersList),
        []
      );
      if (handlers2.length > 0) {
        api.use(...handlers2);
      }
      return;
    }
  }
  var deprecateMessage2 = deprecate(`
[msw-storybook-addon] The mswDecorator is deprecated and will be removed in the next release. Please use the mswLoader instead.

More info: https://github.com/mswjs/msw-storybook-addon/blob/main/MIGRATION.md#mswdecorator-is-deprecated-in-favor-of-mswloader
`);
  var mswLoader = async (context) => {
    await waitForMswReady();
    applyRequestHandlers(context.parameters.msw);
    return {};
  };

  // web/.storybook/msw-handlers.ts
  init_define_import_meta_env();
  var import_msw = __toESM(require_msw());
  function priceFor(symbol) {
    let h = 0;
    for (const ch of symbol) h = (h * 31 + ch.charCodeAt(0)) % 1e3;
    return 80 + h % 320;
  }
  function candlesFor(symbol, limit) {
    const base = priceFor(symbol);
    const n = Math.max(2, Math.min(limit, 80));
    return Array.from({ length: n }, (_, i) => {
      const open = base + Math.sin(i / 5) * base * 0.04;
      const close = open + Math.cos(i / 4) * base * 0.015;
      const high = Math.max(open, close) + base * 0.01;
      const low = Math.min(open, close) - base * 0.01;
      return {
        time: new Date(Date.UTC(2026, 0, 1) + (i + 1) * 864e5).toISOString(),
        open,
        high,
        low,
        close,
        volume: 5e5 + i * 12345
      };
    });
  }
  var handlers = [
    import_msw.http.get("/api/quote/:symbol", ({ params }) => {
      const symbol = String(params.symbol).toUpperCase();
      const price = priceFor(symbol);
      return import_msw.HttpResponse.json({
        symbol,
        price,
        bid: price - 0.05,
        ask: price + 0.05,
        timestamp: new Date(Date.UTC(2026, 5, 23, 20, 0)).toISOString(),
        source: "alpaca-iex"
      });
    }),
    import_msw.http.get("/api/candles/:symbol", ({ params, request }) => {
      const symbol = String(params.symbol).toUpperCase();
      const limit = Number(new URL(request.url).searchParams.get("limit")) || 60;
      return import_msw.HttpResponse.json({ symbol, source: "alpaca-iex", candles: candlesFor(symbol, limit) });
    })
  ];

  // web/.storybook/preview.tsx
  var import_jsx_runtime = __toESM(require_r());
  try {
    initialize({ onUnhandledRequest: "bypass" });
  } catch {
  }
  var withCanvas = (Story, ctx2) => {
    const theme = ctx2.globals.theme === "light" ? "light" : "";
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `${theme} bg-canvas text-ink font-sans`, style: { minHeight: "100vh", padding: 24 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Story, {}) });
  };
  var preview = {
    parameters: {
      controls: {
        matchers: {
          color: /(background|color)$/i,
          date: /Date$/i
        }
      },
      backgrounds: { disable: true },
      // the canvas decorator paints the background
      a11y: { test: "todo" },
      msw: { handlers }
      // default API mocks; override per-story via parameters.msw.handlers
    },
    // A toolbar toggle to preview the light theme (flips the `.light` token set).
    globalTypes: {
      theme: {
        description: "Design-token theme",
        defaultValue: "dark",
        toolbar: {
          title: "Theme",
          icon: "circlehollow",
          items: [
            { value: "dark", title: "Dark" },
            { value: "light", title: "Light" }
          ],
          dynamicTitle: true
        }
      }
    },
    loaders: [mswLoader],
    decorators: [withCanvas]
  };
  var preview_default = preview;

  // ds-bundle/.preview-decorators-entry.mjs
  var ds = [].concat(preview_default && preview_default.decorators || void 0 || []).filter(function(d) {
    return typeof d === "function";
  });
  if (!ds.length) console.warn("[ds] preview decorators: the preview module mentions decorators but exposed none at runtime (indirect export?) \u2014 previews render without the provider chain; set cfg.provider if components need one");
  var GT = preview_default && preview_default.globalTypes || void 0 || {};
  var G = {};
  for (k in GT) {
    if (GT[k] && GT[k].defaultValue !== void 0) G[k] = GT[k].defaultValue;
  }
  var k;
  var IG = preview_default && preview_default.initialGlobals || void 0 || {};
  for (k2 in IG) {
    G[k2] = IG[k2];
  }
  var k2;
  var ctx = { args: {}, argTypes: {}, globals: G, parameters: {}, viewMode: "story", loaded: {}, id: "", name: "", title: "", kind: "", componentId: "" };
  window.__dsDecorate = !ds.length ? null : function(el) {
    return window.React.createElement(function() {
      return ds.reduce(function(inner, d) {
        var out = d(function() {
          return inner;
        }, ctx);
        if (out === void 0) {
          if (!window.__dsDecoratorWarned) {
            window.__dsDecoratorWarned = 1;
            console.warn("[ds] a preview decorator returned undefined \u2014 skipped (addon stub?)");
          }
          return inner;
        }
        return out;
      }, el);
    });
  };
})();
