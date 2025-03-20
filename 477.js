"use strict";
(self["webpackChunkdictionaries"] = self["webpackChunkdictionaries"] || []).push([[477],{

/***/ 477:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   throwWrongID: () => (/* binding */ throwWrongID),
/* harmony export */   throwWrongOption: () => (/* binding */ throwWrongOption),
/* harmony export */   throwWrongParameter: () => (/* binding */ throwWrongParameter),
/* harmony export */   throwWrongStorage: () => (/* binding */ throwWrongStorage),
/* harmony export */   throwWrongType: () => (/* binding */ throwWrongType)
/* harmony export */ });
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

function throwWrongID(id) {
  throw new Error(`There's no resource with the ${id} ID.`);
}
function throwWrongType(name, type) {
  throw new Error(`${name} doesn't have a type ${type}.`);
}
function throwWrongOption(name, option) {
  throw new Error(`${name} doesn't have an option ${option}.`);
}
function throwWrongParameter(name, par) {
  throw new Error(`${name} doesn't have a parameter ${par}.`);
}
function throwWrongStorage(storageType) {
  throw new Error(`There's no such storage type as ${storageType}`);
}


/***/ })

}]);
//# sourceMappingURL=477.js.map