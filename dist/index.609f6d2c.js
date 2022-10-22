// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"kcS7R":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "921bf107609f6d2c";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"lxd7M":[function(require,module,exports) {
// import {el, pipe, is,element, fragment,setAttrs, appendTo,renderTo}  from '../index.js'
var _indexJs = require("../index.js");
const { el , is , element , fragment , setAttrs , appendTo , renderTo  } = (0, _indexJs.Popo);
const HTML = element("html");
const div = HTML("div");
const nav = HTML("nav");
const section = HTML("section");
const header = HTML("header");
const article = HTML("article");
const footer = HTML("footer");
const codeBlock = HTML("code");
const span = HTML("span");
const p = HTML("p");
const code = HTML("code");
const strong = HTML("strong");
const br = HTML("br");
const ul = HTML("ul");
const li = HTML("li");
const bold = HTML("strong");
const subTitle = HTML("h3");
const subjectSections = (subject, articles)=>{
    const storage1 = {
        [subject]: [
            ...articles
        ]
    };
    const tree = (subject)=>section({
            class: `section`,
            id: `section-${subject}`
        }, [
            header({
                class: "sub-header",
                text: subject
            }),
            div({
                class: "sub-articles-wrapper"
            }, [
                ...storage1[subject].map((article, idx)=>subjectArticle(subject, article, idx))
            ]),
            footer({
                class: "sub-footer"
            }, [
                div({
                    class: "sub-footer-info",
                    text: "sub-footer-info"
                })
            ])
        ]);
    return tree(subject);
};
const subjectArticle = (subject, articleCode, idx)=>article({
        class: `article`,
        id: `article-${subject}-${idx}`,
        text: articleCode
    });
const TagsIncreasedByNumIter = function*(init = {
    start: 1,
    end,
    code,
    symbol,
    _class
}) {
    const storage1 = {};
    let data = {};
    console.log(init, init.start, init.end);
    while(init.start <= init.end){
        if (!storage1[init.start]) storage1[init.start] = {
            ...init
        };
        const register = ({ init  })=>(extend = {
                curIdx,
                code,
                symbol,
                text
            })=>{};
        data = storage1[init.start];
        console.log(storage1, data);
        // tagInfo =
        // {
        //     code: data.code ?? code, text: data.text, class: data.class,
        //     open: `$${data.init.start ?? init.start}${data.keyword ?? keyword}${data.symbol ?? symbol}`
        // }
        init.start++;
    }
    console.log(data, storage1);
    Reflect.set(storage1, init.start, data);
};
// h4 h3 h2 h1===과 같은 태그를 위한 정보객체 생성기
// 필수 인자 - 키워드h 숫자 시작과 끝, 스탭, 심볼 h1#
const genMultiTags = ({ start =1 , end: end1 , step =1 , keyword , symbol: symbol1  })=>{
    const genTagsCollection = ({ IdxtoStop , curIdx: curIdx1 = 0 , obj ={}  })=>{
        // 9, 8 => 9+2, 9 -> IdxtoStop + step > end / 7, 8
        console.log(IdxtoStop, curIdx1, obj);
        // 현재 인덱스가 마지막보다 크거나 다음에 멈출 인덱스가 마지막보다 크면 정지
        if (curIdx1 > end1 || IdxtoStop > end1) return obj;
        // 현재 인덱스가 멈출 인덱스보다 작으면 + 1
        if (curIdx1 < IdxtoStop) return genTagsCollection({
            IdxtoStop,
            curIdx: curIdx1 + 1,
            obj
        });
        // 멈출 인덱스가 현재 인덱스와 같고, 다음에 멈출 인덱스가 마지막보다 작은경우'  
        if (IdxtoStop === curIdx1 && IdxtoStop + step <= end1) return genTagsCollection({
            IdxtoStop: IdxtoStop + step,
            curIdx: curIdx1 + step,
            obj
        });
        return genTagsCollection({
            IdxtoStop,
            curIdx: curIdx1 + 1,
            obj
        });
    };
    let cur = start;
    return genTagsCollection({
        IdxtoStop: cur,
        curIdx: cur
    });
};
const a = genMultiTags({
    start: 5,
    end: 9,
    step: 2,
    keyword: "h",
    symbol: "#"
}) // 5,7,9
;
const b = genMultiTags({
    start: 1,
    end: 9,
    step: 3,
    keyword: "h",
    symbol: "#"
}) // 1, 4, 7
;
const c = genMultiTags({
    start: 1,
    end: 13,
    step: 4,
    keyword: "h",
    symbol: "#"
}) // 1, 5, 9, 13
;
console.log(a);
console.log(b);
const TagInfoFrame = ({ num ,  })=>({
        ...Array(4).fill(1).reduce((acc, cur, i)=>({
                ...acc,
                [`h${i + 1}#`]: {
                    code: `h${i + 1}`,
                    text: true,
                    close: true,
                    children: []
                }
            }), {})
    });
const pairOfTags = [
    [
        "/--",
        "--/"
    ],
    [
        "---"
    ],
    [
        "```",
        "```"
    ],
    [
        ">"
    ],
    [
        "h3#",
        " "
    ],
    [
        "->",
        "->"
    ],
    [
        "*",
        "*"
    ]
];
const customTags = {
    "/--": {
        code: "div",
        text: true,
        class: "article"
    },
    "```": {
        code: "code",
        text: true
    },
    ">": {
        code: "blockquote",
        text: true
    },
    ...TagsIncreasedByNumIter,
    "->": {
        code: "li",
        parent: "ul",
        text: true
    },
    "---": {
        code: "br",
        text: false
    },
    "*": {
        code: "strong",
        text: true
    }
};
// key : {code,parent ...}
const tag = (symbolArry)=>{
    const changeTags = ({ symbol: symbol1 , key , val  })=>{
        Reflect.set(storage, symbol1, {
            [key]: val
        });
    };
    // [0] - open, [1] - close
    const setCloseTag = (arr)=>{
        storage = [
            ...arr
        ].reduce((acc, cur, i)=>{
            const [open, close] = [
                cur[0],
                cur[1] ?? false
            ];
            if (!acc[open]) acc[open] = {
                close,
                text: false,
                open: ""
            };
            Reflect.set(acc[open], "open", open);
            Reflect.set(acc[open], "close", close);
            Reflect.set(acc[open], "text", close ? true : false);
            return acc;
        }, storage);
        initMemo();
        return storage;
    };
    // key: 'symbol', val: '>>>'
    // key: 'code' val: 'li'
    // key: 'close',
    // key: 'close', val: '*'
    // key: 'close', val: ['*','*']]
    const generatedTextTag = ({ text: text1 , root , parent  })=>({
            code: "text",
            text: false,
            root: root,
            parent: "",
            content: [
                ...storage[parent].children,
                text1
            ]
        });
    const get = ({ symbol: symbol1  })=>{
        let selectedIdx = -1;
        const checkIfCloseTag = (symbol1)=>{
            const hasTag = Object.entries(storage).filter(([s, info], i)=>{
                if (info.close === symbol1) {
                    selectedIdx = i;
                    selectedTag = s;
                    return true;
                }
                return false;
            });
            console.log(hasTag);
            return hasTag.length > 0 ? true : false;
        };
        // parent -> 상위 루트 open code (예 div) close -> 상위 루트 부모코드 닫힘 여부,
        // text -> 현재 symbol
        if (!storage[symbol1]) {
            if (checkIfCloseTag(symbol1)) //true
            return Object.assign({}, storage[selectedTag]);
        // text default parent -? 'p'
        }
        return Object.assign({}, storage[symbol1]);
    };
    const getAll = ()=>Object.assign({}, storage);
    const initMemo = ()=>{
        for (const [symbol1, data] of Object.entries(storage)){
            if (data.memo && is["array"](data.memo)) continue;
            else if (data.close || !data.close && data.text) Reflect.set(storage[symbol1], "memo", []);
        }
        return storage;
    };
    if (symbolArry.length > 0) setCloseTag(symbolArry);
    // 해당태그의 열림 닫힘을 확인할 수 있어야함
    let parentQ = [];
    let prevSymbol = "";
    let textContent = [];
    let byOrder = [];
    const memoOpen = ({ symbol: symbol1  })=>{
        const data = storage[symbol1] // storage에 
        ;
        //등록안된 텍스트 undefine
        console.log("[data] : ", data, symbol1);
        // 일반 자식 텍스트인 경우
        if (!data) {
            console.log("[parentQ]", parentQ, "[prev]", prevSymbol, "[text]", symbol1);
            return storage;
        } else if (!data.memo || !is["array"](data.memo)) initMemo();
        else if (storage[symbol1].open) storage[symbol1].memo = [
            ...storage[symbol1].memo,
            [
                0,
                -1
            ]
        ] // [ open , closed] -1 ,0, 1 
        ;
        else if (!data.close && data.text) storage[symbol1].memo = [
            ...storage[symbol1].memo,
            [
                0,
                -1
            ]
        ];
        if (data.text) {
            prevSymbol = symbol1;
            parentQ.push(symbol1);
            byOrder.push(data.code);
            if (!storage[symbol1].children) storage[symbol1].children = [];
        } else if (!data.text) parentQ.pop();
        console.log("[parentQ]", parentQ, "[prev]", prevSymbol, "[cur]", symbol1, data);
        return storage;
    };
    // open- close 태그에 메모이제이션 (상태) 추가
    // text 입력 가능 태그에, 현재 스트링값 contents 추가
    // 위 두 항목 앨리먼트 생성시 초기화
    const memoClose = ({ symbol: symbol1  })=>{
        const curTag = get({
            symbol: symbol1
        }).open;
        const curMemo = storage[curTag].memo;
        const len = curMemo.length;
        if (curMemo[len - 1][0] > -1 && curMemo[len - 1][1] < 0) curMemo[len - 1][1] = 0;
        return storage;
    };
    return {
        changeTags,
        get,
        getAll,
        initMemo,
        memoOpen,
        memoClose
    };
};
const test1 = `/-- h1# Title 제목제목 --- 대략적인 설명입니다 --- 발표인 * name *  날짜: 2022 ---
h3# <Index>
-> 1. markdown
-> 2. parsing
-> 3. HTML DOM
additional
--/ 
/--
h2# Title2 ---
Document with code examples ---
${"``` <div>backtick</div> ```"}
written by
test testtest tesst2
> ! Todo: fsdfdfdfsfdf --/


`;
// {div:[{id:'div-1',class:'box',children:[],parentID: ''}]}
const hasTagIn = (str)=>(tag)=>str.includes(tag);
const getTagIdx = (strArr)=>(tag)=>strArr.indexOf(tag);
const handleTyping = ({ initTag , typing  })=>{
    const elementStorage = {};
    const splitByUnit = (unit)=>splitToLines({
            typing,
            storage: elementStorage,
            splitUnit: unit,
            tag: initTag
        });
    return {
        splitByUnit
    };
};
// 문자열을 나눔
const splitToLines = ({ typing , storage: storage1 , splitUnit , tag  })=>{
    const hasTag = (typings)=>hasTagIn(typings);
    let splitedTyping = typing.split(splitUnit) //arr
    ;
    console.log(splitedTyping);
    // 전체 문자열 개행으로 나누기
    return splitedTyping.reduce((acc, newline, i, s)=>{
        let { close , text: text1 , code  } = -1;
        readNewline({
            tag,
            newline,
            storage: storage1,
            hasTag: hasTag(splitedTyping.join(splitUnit))
        });
        console.log(newline);
    }, storage1);
};
// 나누어진 문자열을 띄움으로 문자열 읽음
const readNewline = ({ tag , newline , storage: storage1  })=>{
    let newlineArr = newline.trim().split(" ").filter((s)=>s !== "");
    console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^6");
    console.log("[newline]", newline);
    console.log("[newlineArr]", newlineArr);
    const tagStorage = tag.getAll();
    console.log(tagStorage);
    // 태그인경우
    // - open-close 형태라면 내부 코드를 추가하며 읽음 -> 닫힘코드가 있는경우 해당 배열 인덱스에서 다음으로
    // 시작부터 닫힐때까지 상위요소에 해당하는 배열 위치에서 저장
    // - open일 경우 해당 코드만 부모에 추가
    // - text인 경우 텍스트 앞 테그가 텍스트를 허용할때까지 추가
    // 문자열인경우
    // 텍스트노드로 요소생성
    const order = [];
    newlineArr.reduce((_acc, curStr, _i, _s)=>{
        const curTag = tag.get({
            symbol: curStr
        }) // --/ 와 같은 닫힘이 속한 태그도 가져옴
        ;
        console.log("-----[curTag]", curTag, curTag.open);
        tag.memoOpen({
            symbol: curTag.open ?? curStr
        }) //여는태그가 없는 경우, 일반 텍스트정보
        ;
    }, storage1);
    return storage1;
};
const initTag = tag(pairOfTags);
const splitedTypings = handleTyping({
    initTag,
    typing: test1
}).splitByUnit("\n");

},{"../index.js":"bB7Pu"}],"bB7Pu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Popo", ()=>Popo);
var _utilsJs = require("./src/utils.js");
var _libJs = require("./src/lib.js");
const Popo = {
    el: (0, _utilsJs.el),
    is: (0, _utilsJs.is),
    element: (0, _libJs.element),
    fragment: (0, _libJs.fragment),
    setAttrs: (0, _libJs.setAttrs),
    appendTo: (0, _libJs.appendTo),
    renderTo: (0, _libJs.renderTo)
};

},{"./src/utils.js":"en4he","./src/lib.js":"3bBc4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"en4he":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pipe", ()=>pipe);
parcelHelpers.export(exports, "el", ()=>el);
parcelHelpers.export(exports, "is", ()=>is);
parcelHelpers.export(exports, "isChildren", ()=>isChildren);
parcelHelpers.export(exports, "setObj", ()=>setObj);
const id = (id)=>document.getElementById(id);
const name = (name)=>document.getElementsByName(name);
const pipe = (initData, ...fns)=>fns.reduce((returned, fn)=>fn(returned), initData);
const el = {
    id,
    name
};
const typeOf = [
    "number",
    "function",
    "string",
    "undefined",
    "symbol",
    "object"
];
const initType = {
    array: (d)=>Array.isArray(d),
    null: (d)=>d === null,
    svg: (svg)=>svg instanceof SVGElement,
    html: (el)=>/<\/?[a-z][\s\S]*>/i.test(el)
};
const is = typeOf.reduce((typeObj, type)=>Object.assign(typeObj, {
        [type]: (d)=>typeof d === type
    }), {
    ...initType
});
const isChildren = (data)=>is["array"](data) || is["string"](data) || "nodeName" in data;
const setObj = ({ storage , key , data  })=>{
// Reflect.set( storage[key], data, tempData )
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"3bBc4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setAttrs", ()=>setAttrs);
parcelHelpers.export(exports, "setAttr", ()=>setAttr);
parcelHelpers.export(exports, "removeChildren", ()=>removeChildren);
parcelHelpers.export(exports, "appendTo", ()=>appendTo);
parcelHelpers.export(exports, "updateChildren", ()=>updateChildren);
parcelHelpers.export(exports, "createElement", ()=>createElement);
parcelHelpers.export(exports, "element", ()=>element);
parcelHelpers.export(exports, "fragment", ()=>fragment);
parcelHelpers.export(exports, "renderTo", ()=>renderTo);
var _utilsJs = require("./utils.js");
const setAttrs = (el1, attrs = {})=>{
    return Object.entries(attrs).reduce((acc, [key, val])=>{
        if (key === "text") acc.appendChild(document.createTextNode(val));
        else acc.setAttribute(key, val);
        return acc;
    }, el1);
};
const setAttr = (type, el1, attr)=>{
    // const attributes = Object.entries( attr )
    // if ( is['array']( attributes ) )
    // {
    //     return attributes.reduce( ( acc, [key, val] ) =>
    //     {
    //     },el )    
    // }
    // return el
    return setAttrs(el1, attr);
};
const removeChildren = (parent)=>{
    while(parent.firstChild)parent.removeChild(parent.firstChild);
    return parent;
};
const appendTo = (parent)=>{
    if ((0, _utilsJs.is)["undefined"](parent)) return console.log("NO PARENT");
    return {
        child: (node)=>{
            if (!(0, _utilsJs.is)["array"](node)) node = [
                node
            ];
            node.reduce((acc, cur)=>{
                acc.appendChild(cur);
                return acc;
            }, parent);
            return parent;
        }
    };
};
const updateChildren = (type, parent, children = [])=>{
    // if ( is['undefined']( children ) ) return parent
    // if ( !is['array']( children ) ) children = [children]
    // children.reduce( ( acc, cur ) =>
    // {
    //     acc.appendChild( cur )
    //     return acc
    // }, parent )
    // return parent
    // TODO: type 필요한가
    return appendTo(parent).child(children);
};
const createElement = (type)=>(tag, attr = {}, children = [])=>{
        const el1 = type === "svg" ? document.createElementNS("http://www.w3.org/2000/svg", tag) : document.createElement(tag);
        if ((0, _utilsJs.isChildren)(attr)) {
            updateChildren(type, el1, children);
            return el1;
        }
        setAttr(type, el1, attr);
        updateChildren(type, el1, children);
        return el1;
    };
const element = (type)=>(tag)=>(attr = {}, children = [])=>{
            const elByType = createElement(type);
            return (0, _utilsJs.isChildren)(attr) ? elByType(tag, {}, attr) : elByType(tag, attr, children);
        };
const fragment = (children)=>appendTo(document.createDocumentFragment()).child(children);
const renderTo = (target, children = [])=>{
    const root = el.id(target);
    root.innerHTML = "";
    updateChildren("", root, children);
};

},{"./utils.js":"en4he","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["kcS7R","lxd7M"], "lxd7M", "parcelRequirec138")

//# sourceMappingURL=index.609f6d2c.js.map
