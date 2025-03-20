/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({});
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
/******/ 			// no module.id needed
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
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			471: 0
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
/************************************************************************/
var __webpack_exports__ = {};

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
;// ./src/background/capitalize.mjs
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

function capitalize(word) {
  return word.replace(word.at(0), word.at(0).toUpperCase());
}
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
const resIDs = ['cambridgeDictionary', 'collins', 'dictionary', 'merriamWebster', 'thefreedictionary', 'thesaurus', 'vocabulary', 'wiktionary'];

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
function getParameters(id) {
  const res = getResource(id);
  if (res === undefined) {
    __webpack_require__.e(/* import() */ 477).then(__webpack_require__.bind(__webpack_require__, 477)).then(module => module.throwWrongID(id));
  }

  // used in getFromStorage.mjs
  const parameters = ['contextMenu'];
  const pars = ['type', 'option'];
  pars.forEach(par => {
    if (hasParameter(id, par)) parameters.push(par);
  });
  return parameters;
}

;// ./src/background/lookUp.mjs
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


function lookUp(info) {
  const word = encodeURI(info.selectionText);
  let url;
  const id = info.menuItemId;
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
;// ./src/background/contextMenu.mjs
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



function createMenu() {
  browser.menus.create({
    id: 'dictionaries',
    title: 'Look up: %s',
    contexts: ['selection']
  });
}

// Returns true if successful
function createItem(id) {
  const res = getResource(id);
  if (res === undefined) {
    __webpack_require__.e(/* import() */ 477).then(__webpack_require__.bind(__webpack_require__, 477)).then(module => module.throwWrongID(id));
  }
  browser.menus.create({
    id,
    parentId: 'dictionaries',
    title: res.name,
    contexts: ['all'],
    onclick: lookUp
  }, () => {
    const error = browser.runtime.lastError;
    if (error !== null && error.message !== `ID already exists: ${id}`) {
      throw error;
    } else {
      return true;
    }
  });
}

// Returns false if successful
function removeItem(id) {
  const res = getResource(id);
  if (res === undefined) {
    __webpack_require__.e(/* import() */ 477).then(__webpack_require__.bind(__webpack_require__, 477)).then(module => module.throwWrongID(id));
  }
  browser.menus.remove(id).then(() => false).catch(error => {
    if (error.message !== `Cannot find menu item with id ${id}`) {
      throw error;
    } else {
      return false;
    }
  });
}
async function toggleItem(id) {
  const res = getResource(id);
  if (res === undefined) {
    __webpack_require__.e(/* import() */ 477).then(__webpack_require__.bind(__webpack_require__, 477)).then(module => module.throwWrongID(id));
  }
  if (res.contextMenu === true) {
    removeItem(id);
  } else if (res.contextMenu === false) {
    createItem(id);
  } else {
    throw new Error('Unpredicted behaviour in toggleResource().');
  }
}
;// ./src/background/store.mjs
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



async function store(id, parameter, value, isSyncOn) {
  const res = getResource(id);
  if (hasParameter(id, parameter)) {
    res[parameter] = value;
    browser.storage.local.set({
      [`${id}${capitalize(parameter)}`]: value
    });
    if (isSyncOn) {
      browser.storage.sync.set({
        [`${id}${capitalize(parameter)}`]: value
      });
    }
  } else {
    __webpack_require__.e(/* import() */ 477).then(__webpack_require__.bind(__webpack_require__, 477)).then(module => module.throwWrongParameter(res.name, parameter));
  }
}
;// ./src/background/settings.mjs
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




/* harmony default export */ const settings = ({
  syncOn: false,
  set sync(boolValue) {
    if (this.syncOn !== boolValue) {
      this.syncOn = boolValue;
      browser.storage.local.set({
        sync: boolValue
      });
    }
  },
  get sync() {
    return this.syncOn;
  },
  toggleSync() {
    if (this.sync === false) {
      this.sync = true;
    } else {
      this.sync = false;
    }
  },
  // REFACTOR FOR CORRECT USE OF STORAGES
  setType(id, type) {
    const res = getResource(id);
    if (res !== undefined) {
      if (Object.hasOwn(res, 'types') && res.types.includes(type)) {
        store(id, 'type', type, this.sync);
      } else {
        __webpack_require__.e(/* import() */ 477).then(__webpack_require__.bind(__webpack_require__, 477)).then(module => module.throwWrongType(res.name, type));
      }
    } else {
      __webpack_require__.e(/* import() */ 477).then(__webpack_require__.bind(__webpack_require__, 477)).then(module => module.throwWrongID(id));
    }
  },
  // temporary solution
  setOption(id, option) {
    const res = getResource(id);
    if (res !== undefined) {
      if (Object.hasOwn(res, 'options') && res.options.includes(option)) {
        store(id, 'option', option, this.sync);
      } else {
        __webpack_require__.e(/* import() */ 477).then(__webpack_require__.bind(__webpack_require__, 477)).then(module => module.throwWrongOption(res.name, option));
      }
    } else {
      __webpack_require__.e(/* import() */ 477).then(__webpack_require__.bind(__webpack_require__, 477)).then(module => module.throwWrongID(id));
    }
  },
  addToContextMenu(id) {
    createItem(id);
    store(id, 'contextMenu', true, this.sync);
  },
  removeFromContextMenu(id) {
    removeItem(id);
    store(id, 'contextMenu', false, this.sync);
  },
  toggleContextMenu(id) {
    const wasCreated = toggleItem(id);
    store(id, 'contextMenu', wasCreated, this.sync);
  },
  setContextMenu(id, shouldAdd) {
    if (shouldAdd) {
      this.addToContextMenu(id);
    } else {
      this.removeFromContextMenu(id);
    }
  },
  // ADD STORAGE USE
  async setToDefaults(id, setDefaultContextMenu = true, setDefaultType = true, setDefaultOption = true) {
    if (id === undefined) {
      const {
        syncOn
      } = await browser.storage.local.get({
        sync: false
      });
      if (syncOn) this.sync = true;
      resIDs.forEach(resID => this.setToDefaults(resID, true, true, true));
    } else {
      const res = getResource(id);
      if (res !== undefined) {
        if (setDefaultContextMenu) {
          this.setContextMenu(id, res.defaultContextMenu);
        }
        if (Object.hasOwn(res, 'defaultType') && setDefaultType) {
          this.setType(id, res.defaultType);
        }
        if (Object.hasOwn(res, 'defaultOption') && setDefaultOption) {
          this.setOption(id, res.defaultOption);
        }
      } else {
        __webpack_require__.e(/* import() */ 477).then(__webpack_require__.bind(__webpack_require__, 477)).then(module => module.throwWrongID(id));
      }
    }
  }
});
;// ./src/background/getFromStorage.mjs
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



function createRequestInternals(id) {
  const internals = {};
  if (id === undefined) {
    resIDs.forEach(resID => {
      const pars = getParameters(resID);
      pars.forEach(par => {
        internals[`${resID}${capitalize(par)}`] = null;
      });
    });
  } else {
    const pars = getParameters(id);
    pars.forEach(par => {
      internals[`${id}${par}`] = null;
    });
  }
  return internals;
}

// Returns promise
function getFromStorage(storage, id) {
  const requestInternals = createRequestInternals(id);
  let request;
  if (storage === 'extension') {
    request = browser.storage.local.get;
  }
  if (storage === 'sync') {
    request = browser.storage.sync.get;
  }
  return request(requestInternals);
}
;// ./src/background/syncLocal.mjs
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





async function syncLocal() {
  const retrieved = await getFromStorage('extension');
  resIDs.forEach(id => {
    const pars = getParameters(id);
    pars.forEach(par => {
      const retrievedPar = retrieved[`${id}${capitalize(par)}`];
      if (retrievedPar !== null) {
        settings[`set${capitalize(par)}`](id, retrievedPar);
      }
    });
  });
}
;// ./src/background/sync.mjs
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






// It should check the local storage as well, not only the resource object itself
async function sync() {
  const retrieved = await getFromStorage('sync');
  resIDs.forEach(id => {
    const pars = getParameters(id);
    pars.forEach(par => {
      const retrievedPar = retrieved[`${id}${capitalize(par)}`];
      if (retrievedPar !== null) {
        settings[`set${capitalize(par)}`](id, retrievedPar);
      }
    });
  });
}
;// ./src/background/background.js
/* eslint-disable no-use-before-define */
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





createMenu();
settings.setToDefaults();
syncLocal();

// Add a check for whether local and sync storages don't differ. If they do, the extension should ask the user to decide if they want to overwrite their local data or their sync data
if (settings.sync === true) sync();

// REMOVE ON RELEASE
// -------------------------------------------------
window.settings = settings;
// -------------------------------------------------
/******/ })()
;
//# sourceMappingURL=background.bundle.js.map