/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 56:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 72:
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 113:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ 231:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(417);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(798), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* 
Copyright (C) 2025 Mikhail Sholokhov

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

If you have any questions or feedback, feel free to contact me via email at mikhail.sholokhov@tutamail.com or reach out in Telegram: https://t.me/mikhail_sholokhov. I'm happy to hear from you! 
*/

/*
  Josh's Custom CSS Reset
  https://www.joshwcomeau.com/css/custom-css-reset/
*/

*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html {
  interpolate-size: allow-keywords;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

p {
  text-wrap: pretty;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  text-wrap: balance;
}

#root,
#__next {
  isolation: isolate;
}

/* My styles  */

@font-face {
  font-family: 'Tulia Bold';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

html,
body {
  width: 250px;
  border: none;
  background-color: white;
  overflow: hidden;
}

body {
  display: flex;
  flex-direction: column;
  button:hover {
    cursor: pointer;
  }
}

header {
  display: flex;
  align-items: center;
  background-color: #023e8a;
  color: white;
  height: 40px;
  padding: 5px;
}

.logo {
  width: 30px;
}

#settings-btn {
  background: none;
  border: none;
  width: 30px;
  margin-left: auto;
}

.item-wrapper > input[type='radio'] {
  display: none;
}

.item-wrapper:not(:last-child) > .resource {
  display: block;
  border-bottom: 1px solid black;
}

.summary {
  display: flex;
  align-items: center;
  user-select: none;
  height: 40px;
  padding: 5px;
  font-size: 1.2rem;
  &:hover {
    cursor: pointer;
  }
  label[for='cambridge-dictionary'] > & {
    color: white;
    background-color: #1b224c;
    font-family: 'League Spartan', sans-serif;
  }
  label[for='collins'] > & {
    font-family: 'Tulia Bold';
  }
}

.details {
  display: none;
  padding: 10px;
  width: 100%;
}

input[type='radio']:checked + label > .details {
  display: block;
}

.search {
  display: flex;
  gap: 5px;
  & > input {
    min-width: 0;
  }
}
`, "",{"version":3,"sources":["webpack://./src/popup/style.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;CAiBC;;AAED;;;CAGC;;AAED;;;EAGE,sBAAsB;AACxB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,gBAAgB;EAChB,mCAAmC;AACrC;;AAEA;;;;;EAKE,cAAc;EACd,eAAe;AACjB;;AAEA;;;;EAIE,aAAa;AACf;;AAEA;;;;;;;EAOE,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;AACnB;AACA;;;;;;EAME,kBAAkB;AACpB;;AAEA;;EAEE,kBAAkB;AACpB;;AAEA,eAAe;;AAEf;EACE,yBAAyB;EACzB,4CAAmC;AACrC;;AAEA;;EAEE,YAAY;EACZ,YAAY;EACZ,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB;IACE,eAAe;EACjB;AACF;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;EACd,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB;IACE,eAAe;EACjB;EACA;IACE,YAAY;IACZ,yBAAyB;IACzB,yCAAyC;EAC3C;EACA;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE,aAAa;EACb,aAAa;EACb,WAAW;AACb;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,QAAQ;EACR;IACE,YAAY;EACd;AACF","sourcesContent":["/* \nCopyright (C) 2025 Mikhail Sholokhov\n\nThis program is free software: you can redistribute it and/or modify\nit under the terms of the GNU General Public License as published by\nthe Free Software Foundation, either version 3 of the License, or\n(at your option) any later version.\n\nThis program is distributed in the hope that it will be useful,\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\nGNU General Public License for more details.\n\nYou should have received a copy of the GNU General Public License\nalong with this program. If not, see <https://www.gnu.org/licenses/>.\n\nIf you have any questions or feedback, feel free to contact me via email at mikhail.sholokhov@tutamail.com or reach out in Telegram: https://t.me/mikhail_sholokhov. I'm happy to hear from you! \n*/\n\n/*\n  Josh's Custom CSS Reset\n  https://www.joshwcomeau.com/css/custom-css-reset/\n*/\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n}\n\nhtml {\n  interpolate-size: allow-keywords;\n}\n\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\np {\n  text-wrap: pretty;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  text-wrap: balance;\n}\n\n#root,\n#__next {\n  isolation: isolate;\n}\n\n/* My styles  */\n\n@font-face {\n  font-family: 'Tulia Bold';\n  src: url('./fonts/tulia-bold.woff');\n}\n\nhtml,\nbody {\n  width: 250px;\n  border: none;\n  background-color: white;\n  overflow: hidden;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  button:hover {\n    cursor: pointer;\n  }\n}\n\nheader {\n  display: flex;\n  align-items: center;\n  background-color: #023e8a;\n  color: white;\n  height: 40px;\n  padding: 5px;\n}\n\n.logo {\n  width: 30px;\n}\n\n#settings-btn {\n  background: none;\n  border: none;\n  width: 30px;\n  margin-left: auto;\n}\n\n.item-wrapper > input[type='radio'] {\n  display: none;\n}\n\n.item-wrapper:not(:last-child) > .resource {\n  display: block;\n  border-bottom: 1px solid black;\n}\n\n.summary {\n  display: flex;\n  align-items: center;\n  user-select: none;\n  height: 40px;\n  padding: 5px;\n  font-size: 1.2rem;\n  &:hover {\n    cursor: pointer;\n  }\n  label[for='cambridge-dictionary'] > & {\n    color: white;\n    background-color: #1b224c;\n    font-family: 'League Spartan', sans-serif;\n  }\n  label[for='collins'] > & {\n    font-family: 'Tulia Bold';\n  }\n}\n\n.details {\n  display: none;\n  padding: 10px;\n  width: 100%;\n}\n\ninput[type='radio']:checked + label > .details {\n  display: block;\n}\n\n.search {\n  display: flex;\n  gap: 5px;\n  & > input {\n    min-width: 0;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 314:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 354:
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ 417:
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ 540:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 659:
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 798:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3039204370d0d3b7a046.woff";

/***/ }),

/***/ 825:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "dictionaries:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			887: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkdictionaries"] = self["webpackChunkdictionaries"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(72);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(56);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/popup/style.css
var style = __webpack_require__(231);
;// ./src/popup/style.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(style/* default */.A, options);




       /* harmony default export */ const popup_style = (style/* default */.A && style/* default */.A.locals ? style/* default */.A.locals : undefined);

;// ./src/background/resources/cambridgeDictionary.mjs
/* eslint-disable no-console */
/*
Copyright (C) 2025 Mikhail Sholokhov

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

If you have any questions or feedback, feel free to contact me via email at mikhail.sholokhov@tutamail.com or reach out in Telegram: https://t.me/mikhail_sholokhov. I'm happy to hear from you!
*/

/* harmony default export */ const cambridgeDictionary = ({
  defaultContextMenu: true,
  name: 'Cambridge Dictionary',
  id: 'cambridgeDictionary',
  types: [
  // Definitions
  'english', 'learner', 'essential-american', 'essential-british',
  // Translation (ISO-639 language codes)
  'en-zh-simp', 'zh-simp-en', 'en-zh-trad', 'zh-trad-en', 'en-nl', 'nl-en', 'en-fr', 'fr-en', 'en-de', 'de-en', 'en-id', 'id-en', 'en-it', 'it-en', 'en-no', 'no-en', 'en-pt', 'pt-en', 'en-sv', 'sv-en', 'en-bn', 'en-cz', 'en-gu', 'en-ko', 'en-mr', 'en-ta', 'en-th', 'en-uk', 'en-vi', 'en-ja', 'ja-en', 'en-pl', 'pl-en', 'en-es', 'es-en', 'en-ar', 'en-ca', 'en-da', 'en-hi', 'en-ms', 'en-ru', 'en-te', 'en-tr', 'en-ur',
  // Other
  'grammar', 'thesaurus', 'pronunciation'],
  defaultType: 'english'
});
;// ./src/background/resources/collins.mjs
/* eslint-disable no-console */
/*
Copyright (C) 2025 Mikhail Sholokhov

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

If you have any questions or feedback, feel free to contact me via email at mikhail.sholokhov@tutamail.com or reach out in Telegram: https://t.me/mikhail_sholokhov. I'm happy to hear from you!
*/

/* harmony default export */ const collins = ({
  defaultContextMenu: false,
  name: 'Collins',
  id: 'collins',
  types: [
  // English
  'en-definitions', 'en-summary', 'en-synonyms', 'en-sentences', 'en-pronunciation', 'en-collocations', 'en-conjugations', 'en-grammar',
  // American
  'en-us-definitions', 'en-us-summary', 'en-us-synonyms', 'en-us-sentences', 'en-us-pronunciation', 'en-us-collocations', 'en-us-conjugations', 'en-us-grammar',
  // French
  'en-fr', 'fr-en', 'fr-grammar', 'fr-pronunciation', 'fr-conjugations', 'fr-sentences',
  // German
  'en-de', 'de-en', 'de-grammar', 'de-conjugations', 'de-sentences',
  // Italian
  'en-it', 'it-en', 'it-grammar', 'it-conjugations', 'it-sentences',
  // Spanish
  'en-es', 'es-en', 'es-grammar', 'es-pronunciation', 'es-conjugations', 'es-sentences',
  // Portuguese
  'en-pt', 'pt-en', 'pt-grammar', 'pt-conjugations',
  // Hindi
  'en-hi', 'hi-en',
  // Chinese
  'en-zh', 'zh-en', 'en-zh-trad', 'zh-trad-en',
  // Korean
  'en-ko', 'ko-en',
  // Japanese
  'en-ja', 'ja-en'],
  defaultType: 'en-definitions'
});
;// ./src/background/resources/dictionary.mjs
/* eslint-disable no-console */
/*
Copyright (C) 2025 Mikhail Sholokhov

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

If you have any questions or feedback, feel free to contact me via email at mikhail.sholokhov@tutamail.com or reach out in Telegram: https://t.me/mikhail_sholokhov. I'm happy to hear from you!
*/

/* harmony default export */ const dictionary = ({
  defaultContextMenu: false,
  name: 'Dictionary.com',
  id: 'dictionary'
});
;// ./src/background/resources/merriamWebster.mjs
/* eslint-disable no-console */
/*
Copyright (C) 2025 Mikhail Sholokhov

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

If you have any questions or feedback, feel free to contact me via email at mikhail.sholokhov@tutamail.com or reach out in Telegram: https://t.me/mikhail_sholokhov. I'm happy to hear from you!
*/

/* harmony default export */ const merriamWebster = ({
  defaultContextMenu: false,
  name: 'Merriam-Webster',
  id: 'merriamWebster',
  types: ['dictionary', 'thesaurus'],
  defaultType: 'dictionary'
});
;// ./src/background/resources/thefreedictionary.mjs
/* eslint-disable no-console */
/*
Copyright (C) 2025 Mikhail Sholokhov

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

If you have any questions or feedback, feel free to contact me via email at mikhail.sholokhov@tutamail.com or reach out in Telegram: https://t.me/mikhail_sholokhov. I'm happy to hear from you!
*/

/* harmony default export */ const thefreedictionary = ({
  defaultContextMenu: false,
  name: 'The Free Dictionary',
  id: 'thefreedictionary',
  types: ['dictionary', 'thesaurus', 'medical', 'legal', 'financial', 'acronyms', 'idioms', 'encyclopedia', 'wikipedia'],
  defaultType: 'dictionary',
  options: ['word', 'startsWith', 'endsWith', 'text'],
  defaultOption: 'word'
});
;// ./src/background/resources/thesaurus.mjs
/* eslint-disable no-console */
/*
Copyright (C) 2025 Mikhail Sholokhov

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

If you have any questions or feedback, feel free to contact me via email at mikhail.sholokhov@tutamail.com or reach out in Telegram: https://t.me/mikhail_sholokhov. I'm happy to hear from you!
*/

/* harmony default export */ const thesaurus = ({
  defaultContextMenu: false,
  name: 'Thesaurus.com',
  id: 'thesaurus'
});
;// ./src/background/resources/vocabulary.mjs
/* eslint-disable no-console */
/*
Copyright (C) 2025 Mikhail Sholokhov

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

If you have any questions or feedback, feel free to contact me via email at mikhail.sholokhov@tutamail.com or reach out in Telegram: https://t.me/mikhail_sholokhov. I'm happy to hear from you!
*/

/* harmony default export */ const vocabulary = ({
  defaultContextMenu: true,
  name: 'Vocabulary',
  id: 'vocabulary'
});
;// ./src/background/resources/wiktionary.mjs
/* eslint-disable no-console */
/*
Copyright (C) 2025 Mikhail Sholokhov

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

If you have any questions or feedback, feel free to contact me via email at mikhail.sholokhov@tutamail.com or reach out in Telegram: https://t.me/mikhail_sholokhov. I'm happy to hear from you!
*/

/* harmony default export */ const wiktionary = ({
  defaultContextMenu: true,
  name: 'Wiktionary',
  id: 'wiktionary',
  // ISO-639 language codes
  types: ['en', 'fr', 'de', 'pl', 'ja', 'sv', 'es', 'zh', 'el', 'ru'],
  defaultType: 'en'
});
;// ./src/background/resService.mjs
/* eslint-disable no-console */
/*
Copyright (C) 2025 Mikhail Sholokhov

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

If you have any questions or feedback, feel free to contact me via email at mikhail.sholokhov@tutamail.com or reach out in Telegram: https://t.me/mikhail_sholokhov. I'm happy to hear from you!
*/










const resources = {
  cambridgeDictionary: cambridgeDictionary,
  collins: collins,
  dictionary: dictionary,
  merriamWebster: merriamWebster,
  thefreedictionary: thefreedictionary,
  thesaurus: thesaurus,
  vocabulary: vocabulary,
  wiktionary: wiktionary
};
const resIDs = (/* unused pure expression or super */ null && (['cambridgeDictionary', 'collins', 'dictionary', 'merriamWebster', 'thefreedictionary', 'thesaurus', 'vocabulary', 'wiktionary']));

// returns a resource object if there is a resource corresponding to the ID and undefined if there's no such a resource
function getResource(id) {
  return resources[id];
}
function hasParameter(id, par) {
  const res = getResource(id);
  if (res === undefined) {
    __webpack_require__.e(/* import() */ 477).then(__webpack_require__.bind(__webpack_require__, 477)).then(module => module.throwWrongID(id));
  }
  const result = Object.hasOwn(res, `default${capitalize(par)}`);
  return result;
}
function getParameters(id, parameter) {
  const res = getResource(id);
  if (res === undefined) {
    __webpack_require__.e(/* import() */ 477).then(__webpack_require__.bind(__webpack_require__, 477)).then(module => module.throwWrongID(id));
  }
  if (parameter === undefined) {
    const parameters = ['contextMenu'];
    const pars = ['type', 'option'];
    pars.forEach(par => {
      if (hasParameter(id, par)) parameters.push(par);
    });
    return parameters;
  }
  if (!hasParameter(id, parameter)) __webpack_require__.e(/* import() */ 477).then(__webpack_require__.bind(__webpack_require__, 477)).then(module => {
    module.throwWrongParameter(resources[id].name, parameter);
  });
  return res[parameter];
}

;// ./src/popup/lookup.mjs
/* eslint-disable no-console */
/*
Copyright (C) 2025 Mikhail Sholokhov

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

If you have any questions or feedback, feel free to contact me via email at mikhail.sholokhov@tutamail.com or reach out in Telegram: https://t.me/mikhail_sholokhov. I'm happy to hear from you!
*/


function lookUp(input, id) {
  const word = encodeURI(input);
  let url;
  const res = getResource(id);
  switch (id) {
    case 'cambridgeDictionary':
      switch (res.type) {
        case 'english':
          url = `https://dictionary.cambridge.org/search/english/direct/?q=${word}`;
          break;
        case 'learner':
          url = `https://dictionary.cambridge.org/search/learner-english/direct/?q=${word}`;
          break;
        case 'essential-american':
          url = `https://dictionary.cambridge.org/search/essential-american-english/direct/?q=${word}`;
          break;
        case 'essential-british':
          url = `https://dictionary.cambridge.org/search/essential-british-english/direct/?q=${word}`;
          break;
        case 'en-zh-simp':
          url = `https://dictionary.cambridge.org/search/english-chinese-simplified/direct/?q=${word}`;
          break;
        case 'zh-simp-en':
          url = `https://dictionary.cambridge.org/search/chinese-simplified-english/direct/?q=${word}`;
          break;
        case 'en-zh-trad':
          url = `https://dictionary.cambridge.org/search/english-chinese-traditional/direct/?q=${word}`;
          break;
        case 'zh-trad-en':
          url = `https://dictionary.cambridge.org/search/chinese-traditional-english/direct/?q=${word}`;
          break;
        case 'en-nl':
          url = `https://dictionary.cambridge.org/search/english-dutch/direct/?q=${word}`;
          break;
        case 'nl-en':
          url = `https://dictionary.cambridge.org/search/dutch-english/direct/?q=${word}`;
          break;
        case 'en-fr':
          url = `https://dictionary.cambridge.org/search/english-french/direct/?q=${word}`;
          break;
        case 'fr-en':
          url = `https://dictionary.cambridge.org/search/french-english/direct/?q=${word}`;
          break;
        case 'en-de':
          url = `https://dictionary.cambridge.org/search/english-german/direct/?q=${word}`;
          break;
        case 'de-en':
          url = `https://dictionary.cambridge.org/search/german-english/direct/?q=${word}`;
          break;
        case 'en-id':
          url = `https://dictionary.cambridge.org/search/english-indonesian/direct/?q=${word}`;
          break;
        case 'id-en':
          url = `https://dictionary.cambridge.org/search/indonesian-english/direct/?q=${word}`;
          break;
        case 'en-it':
          url = `https://dictionary.cambridge.org/search/english-italian/direct/?q=${word}`;
          break;
        case 'it-en':
          url = `https://dictionary.cambridge.org/search/italian-english/direct/?q=${word}`;
          break;
        case 'en-no':
          url = `https://dictionary.cambridge.org/search/english-norwegian/direct/?q=${word}`;
          break;
        case 'no-en':
          url = `https://dictionary.cambridge.org/search/norwegian-english/direct/?q=${word}`;
          break;
        case 'en-pt':
          url = `https://dictionary.cambridge.org/search/english-portuguese/direct/?q=${word}`;
          break;
        case 'pt-en':
          url = `https://dictionary.cambridge.org/search/portuguese-english/direct/?q=${word}`;
          break;
        case 'en-sv':
          url = `https://dictionary.cambridge.org/search/english-swedish/direct/?q=${word}`;
          break;
        case 'sv-en':
          url = `https://dictionary.cambridge.org/search/swedish-english/direct/?q=${word}`;
          break;
        case 'en-bn':
          url = `https://dictionary.cambridge.org/search/english-bengali/direct/?q=${word}`;
          break;
        case 'en-cz':
          url = `https://dictionary.cambridge.org/search/english-czech/direct/?q=${word}`;
          break;
        case 'en-gu':
          url = `https://dictionary.cambridge.org/search/english-gujarati/direct/?q=${word}`;
          break;
        case 'en-ko':
          url = `https://dictionary.cambridge.org/search/english-korean/direct/?q=${word}`;
          break;
        case 'en-mr':
          url = `https://dictionary.cambridge.org/search/english-marathi/direct/?q=${word}`;
          break;
        case 'en-ta':
          url = `https://dictionary.cambridge.org/search/english-tamil/direct/?q=${word}`;
          break;
        case 'en-th':
          url = `https://dictionary.cambridge.org/search/english-thai/direct/?q=${word}`;
          break;
        case 'en-uk':
          url = `https://dictionary.cambridge.org/search/english-ukrainian/direct/?q=${word}`;
          break;
        case 'en-vi':
          url = `https://dictionary.cambridge.org/search/english-vietnamese/direct/?q=${word}`;
          break;
        case 'en-ja':
          url = `https://dictionary.cambridge.org/search/english-japanese/direct/?q=${word}`;
          break;
        case 'ja-en':
          url = `https://dictionary.cambridge.org/search/japanese-english/direct/?q=${word}`;
          break;
        case 'en-pl':
          url = `https://dictionary.cambridge.org/search/english-polish/direct/?q=${word}`;
          break;
        case 'pl-en':
          url = `https://dictionary.cambridge.org/search/polish-english/direct/?q=${word}`;
          break;
        case 'en-es':
          url = `https://dictionary.cambridge.org/search/english-spanish/direct/?q=${word}`;
          break;
        case 'es-en':
          url = `https://dictionary.cambridge.org/search/spanish-english/direct/?q=${word}`;
          break;
        case 'en-ar':
          url = `https://dictionary.cambridge.org/search/english-arabic/direct/?q=${word}`;
          break;
        case 'en-ca':
          url = `https://dictionary.cambridge.org/search/english-catalan/direct/?q=${word}`;
          break;
        case 'en-da':
          url = `https://dictionary.cambridge.org/search/english-danish/direct/?q=${word}`;
          break;
        case 'en-hi':
          url = `https://dictionary.cambridge.org/search/english-hindi/direct/?q=${word}`;
          break;
        case 'en-ms':
          url = `https://dictionary.cambridge.org/search/english-malaysian/direct/?q=${word}`;
          break;
        case 'en-ru':
          url = `https://dictionary.cambridge.org/search/english-russian/direct/?q=${word}`;
          break;
        case 'en-te':
          url = `https://dictionary.cambridge.org/search/english-telugu/direct/?q=${word}`;
          break;
        case 'en-tr':
          url = `https://dictionary.cambridge.org/search/english-turkish/direct/?q=${word}`;
          break;
        case 'en-ur':
          url = `https://dictionary.cambridge.org/search/english-urdu/direct/?q=${word}`;
          break;
        case 'grammar':
          url = `https://dictionary.cambridge.org/search/british-grammar/direct/?q=${word}`;
          break;
        case 'thesaurus':
          url = `https://dictionary.cambridge.org/search/thesaurus/direct/?q=${word}`;
          break;
        case 'pronunciation':
          url = `https://dictionary.cambridge.org/search/pronunciation/direct/?q=${word}`;
          break;
        default:
          url = `https://dictionary.cambridge.org/search/english/direct/?q=${word}`;
      }
      break;
    case 'vocabulary':
      url = `https://www.vocabulary.com/dictionary/${word}`;
      break;
    case 'merriamWebster':
      switch (res.type) {
        case 'dictionary':
          url = `https://www.merriamWebster.com/dictionary/${word}`;
          break;
        case 'thesaurus':
          url = `https://www.merriamWebster.com/thesaurus/${word}`;
          break;
        default:
          url = `https://www.merriamWebster.com/dictionary/${word}`;
      }
      break;
    case 'collins':
      switch (res.type) {
        case 'en-definitions':
          url = `https://www.collinsdictionary.com/search/?dictCode=english&q=${word}`;
          break;
        case 'en-summary':
          url = `https://www.collinsdictionary.com/search/?dictCode=english-word&q=${word}`;
          break;
        case 'en-synonyms':
          url = `https://www.collinsdictionary.com/search/?dictCode=english-thesaurus&q=${word}`;
          break;
        case 'en-sentences':
          url = `https://www.collinsdictionary.com/search/?dictCode=english-sentences&q=${word}`;
          break;
        case 'en-pronunciation':
          url = `https://www.collinsdictionary.com/search/?dictCode=english-pronunciations&q=${word}`;
          break;
        case 'en-collocations':
          url = `https://www.collinsdictionary.com/search/?dictCode=english-collocations&q=${word}`;
          break;
        case 'en-conjugations':
          url = `https://www.collinsdictionary.com/search/?dictCode=english-conjugation&q=${word}`;
          break;
        case 'en-grammar':
          url = `https://www.collinsdictionary.com/search/?dictCode=elt-grammar&q=${word}`;
          break;
        case 'en-us-definitions':
          url = `https://www.collinsdictionary.com/us/search/?dictCode=english&q=${word}`;
          break;
        case 'en-us-summary':
          url = `https://www.collinsdictionary.com/us/search/?dictCode=english-word&q=${word}`;
          break;
        case 'en-us-synonyms':
          url = `https://www.collinsdictionary.com/us/search/?dictCode=english-thesaurus&q=${word}`;
          break;
        case 'en-us-sentences':
          url = `https://www.collinsdictionary.com/us/search/?dictCode=english-sentences&q=${word}`;
          break;
        case 'en-us-pronunciation':
          url = `https://www.collinsdictionary.com/us/search/?dictCode=english-pronunciations&q=${word}`;
          break;
        case 'en-us-collocations':
          url = `https://www.collinsdictionary.com/us/search/?dictCode=english-collocations&q=${word}`;
          break;
        case 'en-us-conjugations':
          url = `https://www.collinsdictionary.com/us/search/?dictCode=english-conjugation&q=${word}`;
          break;
        case 'en-us-grammar':
          url = `https://www.collinsdictionary.com/us/search/?dictCode=elt-grammar&q=${word}`;
          break;
        case 'en-fr':
          url = `https://www.collinsdictionary.com/search/?dictCode=english-french&q=${word}`;
          break;
        case 'fr-en':
          url = `https://www.collinsdictionary.com/search/?dictCode=french-english&q=${word}`;
          break;
        case 'fr-grammar':
          url = `https://www.collinsdictionary.com/search/?dictCode=grammar-elf&q=${word}`;
          break;
        case 'fr-pronunciation':
          url = `https://www.collinsdictionary.com/search/?dictCode=grammar-pron-guide-fr&q=${word}`;
          break;
        case 'fr-conjugations':
          url = `https://www.collinsdictionary.com/search/?dictCode=french-conjugation&q=${word}`;
          break;
        case 'fr-sentences':
          url = `https://www.collinsdictionary.com/search/?dictCode=french-sentences&q=${word}`;
          break;
        case 'en-de':
          url = `https://www.collinsdictionary.com/search/?dictCode=english-german&q=${word}`;
          break;
        case 'de-en':
          url = `https://www.collinsdictionary.com/search/?dictCode=german-english&q=${word}`;
          break;
        case 'de-grammar':
          url = `https://www.collinsdictionary.com/search/?dictCode=grammar-elg&q=${word}`;
          break;
        case 'de-conjugations':
          url = `https://www.collinsdictionary.com/search/?dictCode=german-conjugation&q=${word}`;
          break;
        case 'de-sentences':
          url = `https://www.collinsdictionary.com/search/?dictCode=german-sentences&q=${word}`;
          break;
        case 'en-it':
          url = `https://www.collinsdictionary.com/search/?dictCode=english-italian&q=${word}`;
          break;
        case 'it-en':
          url = `https://www.collinsdictionary.com/search/?dictCode=italian-english&q=${word}`;
          break;
        case 'it-grammar':
          url = `https://www.collinsdictionary.com/search/?dictCode=grammar-eli&q=${word}`;
          break;
        case 'it-conjugations':
          url = `https://www.collinsdictionary.com/search/?dictCode=italian-conjugation&q=${word}`;
          break;
        case 'it-sentences':
          url = `https://www.collinsdictionary.com/search/?dictCode=italian-sentences&q=${word}`;
          break;
        case 'en-es':
          url = `https://www.collinsdictionary.com/search/?dictCode=english-spanish&q=${word}`;
          break;
        case 'es-en':
          url = `https://www.collinsdictionary.com/search/?dictCode=spanish-english&q=${word}`;
          break;
        case 'es-grammar':
          url = `https://www.collinsdictionary.com/search/?dictCode=grammar-els&q=${word}`;
          break;
        case 'es-pronunciation':
          url = `https://www.collinsdictionary.com/search/?dictCode=grammar-pron-guide&q=${word}`;
          break;
        case 'es-conjugations':
          url = `https://www.collinsdictionary.com/search/?dictCode=spanish-conjugation&q=${word}`;
          break;
        case 'es-sentences':
          url = `https://www.collinsdictionary.com/search/?dictCode=spanish-sentences&q=${word}`;
          break;
        case 'en-pt':
          url = `https://www.collinsdictionary.com/search/?dictCode=english-portuguese&q=${word}`;
          break;
        case 'pt-en':
          url = `https://www.collinsdictionary.com/search/?dictCode=portuguese-english&q=${word}`;
          break;
        case 'pt-grammar':
          url = `https://www.collinsdictionary.com/search/?dictCode=grammar-elp&q=${word}`;
          break;
        case 'pt-conjugations':
          url = `https://www.collinsdictionary.com/search/?dictCode=portuguese-conjugation&q=${word}`;
          break;
        case 'en-hi':
          url = `https://www.collinsdictionary.com/search/?dictCode=english-hindi&q=${word}`;
          break;
        case 'hi-en':
          url = `https://www.collinsdictionary.com/search/?dictCode=hindi-english&q=${word}`;
          break;
        case 'en-zh':
          url = `https://www.collinsdictionary.com/search/?dictCode=english-chinese&q=${word}`;
          break;
        case 'zh-en':
          url = `https://www.collinsdictionary.com/search/?dictCode=chinese-english&q=${word}`;
          break;
        case 'en-zh-trad':
          url = `https://www.collinsdictionary.com/search/?dictCode=english-chinese_traditional&q=${word}`;
          break;
        case 'zh-trad-en':
          url = `https://www.collinsdictionary.com/search/?dictCode=chinese_traditional-english&q=${word}`;
          break;
        case 'en-ko':
          url = `https://www.collinsdictionary.com/search/?dictCode=english-korean&q=${word}`;
          break;
        case 'ko-en':
          url = `https://www.collinsdictionary.com/search/?dictCode=korean-english&q=${word}`;
          break;
        case 'en-ja':
          url = `https://www.collinsdictionary.com/search/?dictCode=english-japanese&q=${word}`;
          break;
        case 'ja-en':
          url = `https://www.collinsdictionary.com/search/?dictCode=japanese-english&q=${word}`;
          break;
        default:
          url = `https://www.collinsdictionary.com/search/?dictCode=english&q=${word}`;
      }
      break;
    case 'wiktionary':
      switch (res.type) {
        case 'en':
          url = `https://en.wiktionary.org/w/index.php?search=${word}&title=Special:Search&wprov=acrw1_-1`;
          break;
        case 'fr':
          url = `https://fr.wiktionary.org/w/index.php?search=${word}&title=Spécial:Recherche&wprov=acrw1_-1`;
          break;
        case 'de':
          url = `https://de.wiktionary.org/w/index.php?search=${word}&title=Spezial:Suche&wprov=acrw1_-1`;
          break;
        case 'pl':
          url = `https://pl.wiktionary.org/w/index.php?search=${word}&title=Specjalna:Szukaj&wprov=acrw1_-1`;
          break;
        case 'ja':
          url = `https://ja.wiktionary.org/w/index.php?search=${word}&title=特別:検索&wprov=acrw1_-1`;
          break;
        case 'sv':
          url = `https://sv.wiktionary.org/w/index.php?search=${word}&title=Special:Sök&wprov=acrw1_-1`;
          break;
        case 'es':
          url = `https://es.wiktionary.org/w/index.php?search=${word}&title=Especial:Buscar&wprov=acrw1_-1`;
          break;
        case 'zh':
          url = `https://zh.wiktionary.org/w/index.php?search=${word}&title=Special:搜索&wprov=acrw1_-1`;
          break;
        case 'el':
          url = `https://el.wiktionary.org/w/index.php?search=${word}&title=Ειδικό:Αναζήτηση&wprov=acrw1_-1`;
          break;
        case 'ru':
          url = `https://ru.wiktionary.org/w/index.php?search=${word}&title=Служебная:Поиск&wprov=acrw1_-1`;
          break;
        default:
          url = `https://en.wiktionary.org/w/index.php?search=${word}&title=Special:Search&wprov=acrw1_-1`;
      }
      break;
    case 'dictionary':
      url = `https://www.dictionary.com/browse/${word}`;
      break;
    case 'thesaurus':
      url = `https://www.thesaurus.com/browse/${word}`;
      break;
    case 'thefreedictionary':
      {
        let option;
        switch (res.option) {
          case 'word':
            option = 0;
            break;
          case 'startsWith':
            option = 1;
            break;
          case 'endsWith':
            option = 2;
            break;
          case 'text':
            option = 3;
            break;
          default:
            option = 0;
        }
        switch (res.type) {
          case 'dictionary':
            url = `https://www.thefreedictionary.com/_/search.aspx?tab=1&SearchBy=0&Word=${word}&TFDBy=${option}`;
            break;
          case 'thesaurus':
            url = `https://www.freethesaurus.com/_/search.aspx?tab=2048&SearchBy=0&Word=${word}&TFDBy=${option}`;
            break;
          case 'medical':
            url = `https://medical-dictionary.thefreedictionary.com/_/search.aspx?tab=4&SearchBy=0&Word=${word}&TFDBy=${option}`;
            break;
          case 'legal':
            url = `https://legal-dictionary.thefreedictionary.com/_/search.aspx?tab=2&SearchBy=0&Word=${word}&TFDBy=${option}`;
            break;
          case 'financial':
            url = `https://financial-dictionary.thefreedictionary.com/_/search.aspx?tab=256&SearchBy=0&Word=${word}&TFDBy=${option}`;
            break;
          case 'acronyms':
            url = `https://acronyms.thefreedictionary.com/_/search.aspx?tab=32&SearchBy=0&Word=${word}&TFDBy=${option}`;
            break;
          case 'idioms':
            url = `https://idioms.thefreedictionary.com/_/search.aspx?tab=1024&SearchBy=0&Word=${word}&TFDBy=${option}`;
            break;
          case 'encyclopedia':
            url = `https://encyclopedia2.thefreedictionary.com/_/search.aspx?tab=8&SearchBy=0&Word=${word}&TFDBy=${option}`;
            break;
          case 'wikipedia':
            url = `https://encyclopedia.thefreedictionary.com/_/search.aspx?tab=16&SearchBy=0&Word=${word}&TFDBy=${option}`;
            break;
          default:
            url = `https://www.thefreedictionary.com/_/search.aspx?tab=1&SearchBy=0&Word=${word}&TFDBy=${option}`;
        }
        break;
      }
    // case 'cube':
    // case 'youglish'
    // case 'urban'
    // case 'wikipedia
    default:
      url = `https://dictionary.cambridge.org/search/english/direct/?q=${word}`;
  }
  const width = 750;
  const height = 650;
  const left = window.screen.width / 2 - width / 2;
  const top = window.screen.height / 2 - height / 2;
  browser.windows.create({
    url,
    width,
    height,
    left,
    top,
    type: 'popup',
    focused: false
  });
}
;// ./src/popup/popup.js
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-console */
/*
Copyright (C) 2025 Mikhail Sholokhov

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

If you have any questions or feedback, feel free to contact me via email at mikhail.sholokhov@tutamail.com or reach out in Telegram: https://t.me/mikhail_sholokhov. I'm happy to hear from you!
*/



const popup_cambridgeDictionary = document.querySelector('#cambridgeDictionary');
const popup_collins = document.querySelector('#collins');
const popup_dictionary = document.querySelector('#dictionary');
const popup_merriamWebster = document.querySelector('#merriamWebster');
const popup_thefreedictionary = document.querySelector('#thefreedictionary');
const popup_thesaurus = document.querySelector('#thesaurus');
const popup_vocabulary = document.querySelector('#vocabulary');
const popup_wiktionary = document.querySelector('#wiktionary');
const popup_resources = [popup_cambridgeDictionary, popup_collins, popup_dictionary, popup_merriamWebster, popup_thefreedictionary, popup_thesaurus, popup_vocabulary, popup_wiktionary];

// Show/hide a resource
popup_resources.forEach((res, i) => {
  res.addEventListener('change', function check() {
    res.removeEventListener('change', check);
    const summary = document.querySelector(`label[for="${res.id}"] > .summary`);
    summary.onclick = e => {
      e.preventDefault();
      summary.onclick = null;
      document.onclick = null;
      res.checked = false;

      // Force browser to repaint the popup to fix a resize glitch
      document.body.style.transform = 'scale(1.00000001)';
      document.body.style.transform = '';
      res.addEventListener('change', check);
    };
    const otherRes = popup_resources.toSpliced(i, 1);
    document.onclick = e => {
      if (otherRes.includes(e.target)) {
        summary.onclick = null;
        document.onclick = null;
        res.addEventListener('change', check);
      }
    };
  });
});
popup_resources.forEach(res => {
  const searchBar = document.querySelector(`label[for="${res.id}"] .search > input`);
  const searchBtn = document.querySelector(`label[for="${res.id}"] .search > button`);
  searchBtn.addEventListener('click', () => {
    if (searchBar.value !== '') {
      lookUp(searchBar.value, res.id);
    }
  });
});
/******/ })()
;
//# sourceMappingURL=popup.bundle.js.map