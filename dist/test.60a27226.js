// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var string = "\n.head *{margin:0;padding:0;box-sizing: border-box;}\n.head *::before,.head *::after{box-sizing: border-box;}\n\n.head{\n    width: 100vw;\n    min-height: 50vh;\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color:#b0cac7;\n    z-index:1;\n}\n.face{\n    width: 250px;\n    height: 250px;\n    position: absolute;\n    background-color: #ffb78e;\n    border-radius: 70% 65% 12% 90%/70% 50% 70% 65%;\n    border: 2px solid #000;\n}\n.face::before{\n    content: '';\n    position: absolute;\n    width: 65px;\n    height: 80px;\n    background-color: #ffb78e;\n    transform: translate(-60px,100px) rotate(-10deg);\n    border-radius: 80% 65% 73% 80% / 80% 40% 30% 70%;\n    border-top: 2px solid #000;\n    border-left: 2px solid #000;\n    border-bottom: 2px solid #000;\n}\n.face::after{\n    content: '';\n    position: absolute;\n    width: 155px;\n    height: 149px;\n    background-color: #ffb78e;\n    transform: translate(145px,98px);\n    border-radius: 90% 65% 80% 90% / 40% 100% 70% 60%;\n    border-right: 3px solid #000;\n}\n.hair{\n    width: 150px;\n    height: 15px;\n    background-color: #000;\n    position: absolute;\n    border-radius: 45% 65% 0% 100% / 100% 100% 0% 0%;\n    top: -2px;\n    left: 39px;\n}\n.hair::before{\n    content: '';\n    position:absolute;\n    width: 100px;\n    height: 140px;\n    background-color: #000;\n    top: -5px;\n    left: -50px;\n    transform: rotate(19deg);\n    z-index: -1;\n    border-radius: 100% 0% 0% 100% / 100% 0% 100% 0%;\n}\n.eyebrowLeft{\n    position: absolute;\n    background-color: #000;\n    width: 67px;\n    height: 25px;\n    border-radius: 30px;\n    transform: rotate(137deg);\n    top: 12px;\n    left: 9px;\n    animation: wave 0.4s infinite ease-in-out;\n}\n.eyebrowLeft::after{\n    content: '';\n    position: absolute;\n    background-color: #000;\n    width: 67px;\n    height: 25px;\n    border-radius: 30px;\n    transform: rotate(85deg);\n    top: -24px;\n    right: 25px;\n}\n.eyebrowRight{\n    position: absolute;\n    background-color: #000;\n    width: 67px;\n    height: 25px;\n    border-radius: 30px;\n    transform: rotate(137deg);\n    top: 12px;\n    left: 130px;\n    animation: wave 0.4s infinite ease-in-out;\n}\n.eyebrowRight::after{\n    content: '';\n    position: absolute;\n    background-color: #000;\n    width: 67px;\n    height: 25px;\n    border-radius: 30px;\n    transform: rotate(85deg);\n    top: -24px;\n    right: 25px;\n}\n@keyframes wave {\n    to {top :-0.01px}\n}\n.eyeLeft{\n    position: absolute;\n    background-color: #000;\n    width: 68px;\n    height: 60px;\n    border-radius: 50%;\n    top: 80px;\n    left: 43px;\n}\n.eyeLeft::before{\n    content: '';\n    position: absolute;\n    width: 80px;\n    height: 60px;\n    border-top: 4px solid #000;\n    border-radius: 53% 47% 45% 55% / 57% 36% 64% 43%;\n    top: -25px;\n    left: -15px;\n}\n.eyeLeft::after{\n    content: '';\n    position: absolute;\n    width: 26px;\n    height: 23px;\n    background-color: #fff;\n    border-radius: 50%;\n    top: 16px;\n    left: 20px;\n}\n.eyeRight{\n    position: absolute;\n    background-color: #000;\n    width: 68px;\n    height: 60px;\n    border-radius: 50%;\n    top: 80px;\n    left: 143px;\n    z-index: 3;\n}\n.eyeRight::before{\n    content: '';\n    position: absolute;\n    width: 80px;\n    height: 60px;\n    border-top: 4px solid #000;\n    border-radius: 53% 47% 45% 55% / 38% 52% 48% 66%;;\n    top: -25px;\n    left: -2px;\n}\n.eyeRight::after{\n    content: '';\n    position: absolute;\n    width: 26px;\n    height: 23px;\n    background-color: #fff;\n    border-radius: 50%;\n    top: 16px;\n    left: 20px;\n}\n.mouth{\n    position: absolute;\n    width: 45px;\n    height: 60px;\n    background-color: rgb(165, 67, 84);\n    border-radius: 50%;\n    border: 2px solid  #000;\n    top: 205px;\n    right:50px;\n    z-index: 2;\n    animation: move 2s infinite ease-in-out;\n}\n@keyframes move {\n    0% {transform: scale(0.3, 0.5)}\n    10% {transform: scale(1, 1)}\n    20% {transform: scale(0.3, 0.5)}\n    30% {transform: scale(1, 1)}\n    40% {transform: scale(0.3, 0.7)}\n    60% {transform: scale(1, 1)}\n    80% {transform: scale(0.8, 0.3)}\n    100% {transform: scale(0.5, 0.9)}\n}\n\n\n";
exports.default = string;
},{}],"test.js":[function(require,module,exports) {
'use strict';

var _css = require('./css.js');

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var n = 1;
demo.innerTerunt = _css2.default.substring(0, n);
demo2.innerHTML = _css2.default.substring(0, n);

var time = 100;

var run = function run() {
    n += 1;
    if (n > _css2.default.length) {
        window.clearInterval(id);
        return;
    }
    demo.innerText = _css2.default.substring(0, n);
    demo2.innerHTML = _css2.default.substring(0, n);
    demo.scrollTop = demo.scrollHeight;
};
var play = function play() {
    return setInterval(run, time);
};
var pause = function pause() {
    window.clearInterval(id);
};
var id = play();

btnPause.onclick = function () {
    pause();
};
btnPlay.onclick = function () {
    id = play();
};
btnSlow.onclick = function () {
    pause();
    time = 300;
    id = play();
};
btnNormal.onclick = function () {
    pause();
    time = 100;
    id = play();
};
btnFast.onclick = function () {
    pause();
    time = 0;
    id = play();
};
},{"./css.js":"css.js"}],"C:\\Users\\123\\AppData\\Roaming\\npm\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '59483' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["C:\\Users\\123\\AppData\\Roaming\\npm\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.60a27226.map