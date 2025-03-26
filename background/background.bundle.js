/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 59:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
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

/***/ }),

/***/ 375:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ capitalize)
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

function capitalize(word) {
  return word.replace(word.at(0), word.at(0).toUpperCase());
}

/***/ }),

/***/ 406:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  defaultContextMenu: false,
  name: 'Merriam-Webster',
  id: 'merriamWebster',
  types: ['dictionary', 'thesaurus'],
  defaultType: 'dictionary'
});

/***/ }),

/***/ 457:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  defaultContextMenu: false,
  name: 'Thesaurus.com',
  id: 'thesaurus'
});

/***/ }),

/***/ 525:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  wE: () => (/* binding */ createItem),
  ES: () => (/* binding */ createMenu),
  Ai: () => (/* binding */ removeItem),
  g6: () => (/* binding */ toggleItem)
});

// EXTERNAL MODULE: ./src/background/resService.mjs
var resService = __webpack_require__(718);
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
  const res = (0,resService/* getResource */.hZ)(id);
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
  const res = (0,resService/* getResource */.hZ)(id);
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
  res.contextMenu = true;
  return true;
}

// Returns false if successful
function removeItem(id) {
  const res = (0,resService/* getResource */.hZ)(id);
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
  res.contextMenu = false;
  return false;
}
async function toggleItem(id) {
  const res = (0,resService/* getResource */.hZ)(id);
  if (res === undefined) {
    __webpack_require__.e(/* import() */ 477).then(__webpack_require__.bind(__webpack_require__, 477)).then(module => module.throwWrongID(id));
  }
  if (res.contextMenu === true) {
    removeItem(id);
  } else if (res.contextMenu === false) {
    createItem(id);
  } else {
    throw new Error('Unpredicted behavior in toggleResource().');
  }
}

/***/ }),

/***/ 539:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  defaultContextMenu: true,
  name: 'Vocabulary',
  id: 'vocabulary'
});

/***/ }),

/***/ 594:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ settings)
});

// EXTERNAL MODULE: ./src/background/resService.mjs
var resService = __webpack_require__(718);
// EXTERNAL MODULE: ./src/background/contextMenu.mjs + 1 modules
var contextMenu = __webpack_require__(525);
// EXTERNAL MODULE: ./src/background/capitalize.mjs
var capitalize = __webpack_require__(375);
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
  const res = (0,resService/* getResource */.hZ)(id);
  if ((0,resService/* hasParameter */.Yk)(id, parameter)) {
    browser.storage.local.set({
      [`${id}${(0,capitalize/* default */.A)(parameter)}`]: value
    });
    if (isSyncOn) {
      browser.storage.sync.set({
        [`${id}${(0,capitalize/* default */.A)(parameter)}`]: value
      });
    }
  } else {
    __webpack_require__.e(/* import() */ 477).then(__webpack_require__.bind(__webpack_require__, 477)).then(module => module.throwWrongParameter(res.name, parameter));
  }
}
async function storeSync(boolValue) {
  browser.storage.local.set({
    sync: boolValue
  });
  if (boolValue === true) {
    // eslint-disable-next-line import/no-cycle
    const storage = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 780));
    await storage.sync();
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



// Dependency cycle via ./store:23 is not a problem.
// eslint-disable-next-line import/no-cycle

/* harmony default export */ const settings = ({
  syncOn: false,
  set sync(boolValue) {
    if (this.syncOn !== boolValue) {
      this.syncOn = boolValue;
      storeSync(boolValue);
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
  setType(shouldStore, id, type) {
    const res = (0,resService/* getResource */.hZ)(id);
    if (res !== undefined) {
      if (Object.hasOwn(res, 'types') && res.types.includes(type)) {
        res.type = type;
        if (shouldStore === true) store(id, 'type', type, this.sync);
      } else {
        __webpack_require__.e(/* import() */ 477).then(__webpack_require__.bind(__webpack_require__, 477)).then(module => module.throwWrongType(res.name, type));
      }
    } else {
      __webpack_require__.e(/* import() */ 477).then(__webpack_require__.bind(__webpack_require__, 477)).then(module => module.throwWrongID(id));
    }
  },
  // temporary solution
  setOption(shouldStore, id, option) {
    const res = (0,resService/* getResource */.hZ)(id);
    if (res !== undefined) {
      if (Object.hasOwn(res, 'options') && res.options.includes(option)) {
        res.option = option;
        if (shouldStore === true) store(id, 'option', option, this.sync);
      } else {
        __webpack_require__.e(/* import() */ 477).then(__webpack_require__.bind(__webpack_require__, 477)).then(module => module.throwWrongOption(res.name, option));
      }
    } else {
      __webpack_require__.e(/* import() */ 477).then(__webpack_require__.bind(__webpack_require__, 477)).then(module => module.throwWrongID(id));
    }
  },
  addToContextMenu(shouldStore, id) {
    (0,contextMenu/* createItem */.wE)(id);
    if (shouldStore === true) store(id, 'contextMenu', true, this.sync);
  },
  removeFromContextMenu(shouldStore, id) {
    (0,contextMenu/* removeItem */.Ai)(id);
    if (shouldStore === true) store(id, 'contextMenu', false, this.sync);
  },
  toggleContextMenu(shouldStore, id) {
    const wasCreated = (0,contextMenu/* toggleItem */.g6)(id);
    if (shouldStore === true) store(id, 'contextMenu', wasCreated, this.sync);
  },
  setContextMenu(shouldStore, id, shouldAdd) {
    if (shouldAdd) {
      this.addToContextMenu(shouldStore, id);
    } else {
      this.removeFromContextMenu(shouldStore, id);
    }
  },
  // ADD STORAGE USE
  async setToDefaults(shouldStore, id, setDefaultContextMenu = true, setDefaultType = true, setDefaultOption = true) {
    if (id === undefined) {
      const {
        syncOn
      } = await browser.storage.local.get({
        sync: false
      });
      if (syncOn) this.sync = true;
      resService/* resIDs */.vd.forEach(resID => this.setToDefaults(shouldStore, resID, true, true, true));
    } else {
      const res = (0,resService/* getResource */.hZ)(id);
      if (res !== undefined) {
        if (setDefaultContextMenu) {
          this.setContextMenu(shouldStore, id, res.defaultContextMenu);
        }
        if (Object.hasOwn(res, 'defaultType') && setDefaultType) {
          this.setType(shouldStore, id, res.defaultType);
        }
        if (Object.hasOwn(res, 'defaultOption') && setDefaultOption) {
          this.setOption(shouldStore, id, res.defaultOption);
        }
      } else {
        __webpack_require__.e(/* import() */ 477).then(__webpack_require__.bind(__webpack_require__, 477)).then(module => module.throwWrongID(id));
      }
    }
  }
});

/***/ }),

/***/ 718:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Yk: () => (/* binding */ hasParameter),
/* harmony export */   bQ: () => (/* binding */ getParameters),
/* harmony export */   hZ: () => (/* binding */ getResource),
/* harmony export */   vd: () => (/* binding */ resIDs)
/* harmony export */ });
/* harmony import */ var _resources_cambridgeDictionary_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);
/* harmony import */ var _resources_collins_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(879);
/* harmony import */ var _resources_dictionary_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(971);
/* harmony import */ var _resources_merriamWebster_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(406);
/* harmony import */ var _resources_thefreedictionary_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(994);
/* harmony import */ var _resources_thesaurus_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(457);
/* harmony import */ var _resources_vocabulary_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(539);
/* harmony import */ var _resources_wiktionary_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(990);
/* harmony import */ var _capitalize_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(375);
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
  cambridgeDictionary: _resources_cambridgeDictionary_mjs__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,
  collins: _resources_collins_mjs__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
  dictionary: _resources_dictionary_mjs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
  merriamWebster: _resources_merriamWebster_mjs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
  thefreedictionary: _resources_thefreedictionary_mjs__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,
  thesaurus: _resources_thesaurus_mjs__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,
  vocabulary: _resources_vocabulary_mjs__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,
  wiktionary: _resources_wiktionary_mjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A
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
  const result = Object.hasOwn(res, `default${(0,_capitalize_mjs__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(par)}`);
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


/***/ }),

/***/ 780:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getFromStorage),
/* harmony export */   initialize: () => (/* binding */ initialize),
/* harmony export */   pullLocal: () => (/* binding */ pullLocal),
/* harmony export */   pullRemote: () => (/* binding */ pullRemote),
/* harmony export */   pushLocal: () => (/* binding */ pushLocal),
/* harmony export */   pushLocalRes: () => (/* binding */ pushLocalRes),
/* harmony export */   sync: () => (/* binding */ sync)
/* harmony export */ });
/* harmony import */ var _resService_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(718);
/* harmony import */ var _capitalize_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(375);
/* harmony import */ var _settings_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(594);
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



// Dependency cycle via ./store:23 is not a problem.
// eslint-disable-next-line import/no-cycle

function createRequestInternals(id, parameter) {
  const internals = {};
  if (id === undefined) {
    _resService_mjs__WEBPACK_IMPORTED_MODULE_0__/* .resIDs */ .vd.forEach(resID => {
      const pars = (0,_resService_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getParameters */ .bQ)(resID);
      pars.forEach(par => {
        internals[`${resID}${(0,_capitalize_mjs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(par)}`] = null;
      });
    });
  } else if (parameter === undefined) {
    const pars = (0,_resService_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getParameters */ .bQ)(id);
    pars.forEach(par => {
      internals[`${id}${(0,_capitalize_mjs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(par)}`] = null;
    });
  } else {
    internals[`${id}${(0,_capitalize_mjs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)((0,_resService_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getParameters */ .bQ)(id, parameter))}`] = null;
  }
  return internals;
}

// Returns promise
function getFromStorage(storage, id, parameter) {
  const requestInternals = createRequestInternals(id, parameter);
  let request;
  if (storage === 'local') {
    request = browser.storage.local.get;
  }
  if (storage === 'remote') {
    request = browser.storage.sync.get;
  }
  return request(requestInternals);
}

// If an object is passed, that object will be dealt with as if it was the local storage object.
async function pullLocal(obj) {
  let retrieved;
  if (obj === undefined || typeof obj !== 'object') {
    retrieved = await getFromStorage('local');
  } else {
    retrieved = obj;
  }
  _resService_mjs__WEBPACK_IMPORTED_MODULE_0__/* .resIDs */ .vd.forEach(id => {
    const pars = (0,_resService_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getParameters */ .bQ)(id);
    pars.forEach(par => {
      const capitalizedPar = (0,_capitalize_mjs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(par);
      const retrievedPar = retrieved[`${id}${capitalizedPar}`];
      if (retrievedPar !== null) {
        _settings_mjs__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A[`set${capitalizedPar}`](false, id, retrievedPar);
      } else {
        _settings_mjs__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A[`set${capitalizedPar}`](true, id, (0,_resService_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getResource */ .hZ)(id)[`default${capitalizedPar}`]);
      }
    });
  });
}

// If an object is passed, that object will be dealt with as if it was the local storage object.
async function pushLocal(obj) {
  let retrieved;
  if (obj === undefined || typeof obj !== 'object') {
    retrieved = await getFromStorage('local');
  } else {
    retrieved = obj;
  }
  _resService_mjs__WEBPACK_IMPORTED_MODULE_0__/* .resIDs */ .vd.forEach(id => {
    const pars = (0,_resService_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getParameters */ .bQ)(id);
    pars.forEach(par => {
      const capitalizedPar = (0,_capitalize_mjs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(par);
      const retrievedPar = retrieved[`${id}${capitalizedPar}`];
      if (retrievedPar !== null) {
        browser.storage.sync.set({
          [`${id}${capitalizedPar}`]: retrievedPar
        });
      } else {
        _settings_mjs__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A[`set${capitalizedPar}`](true, id, (0,_resService_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getResource */ .hZ)(id)[`default${capitalizedPar}`]);
      }
    });
  });
}
async function pushLocalRes(id, parameter) {
  if (_resService_mjs__WEBPACK_IMPORTED_MODULE_0__/* .resIDs */ .vd.includes(id)) {
    if (parameter !== undefined) {
      const retrieved = await getFromStorage('local', id, parameter);
      const capitalizedPar = (0,_capitalize_mjs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(parameter);
      const retrievedPar = retrieved[`${id}${capitalizedPar}`];
      if (retrievedPar !== null) {
        browser.storage.sync.set({
          [`${id}${capitalizedPar}`]: retrievedPar
        });
      } else {
        _settings_mjs__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A[`set${capitalizedPar}`](true, id, (0,_resService_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getResource */ .hZ)(id)[`default${capitalizedPar}`]);
      }
    } else {
      const retrieved = await getFromStorage('local', id);
      const pars = (0,_resService_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getParameters */ .bQ)(id);
      pars.forEach(par => {
        const capitalizedPar = (0,_capitalize_mjs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(par);
        const retrievedPar = retrieved[`${id}${capitalizedPar}`];
        if (retrievedPar !== null) {
          browser.storage.sync.set({
            [`${id}${capitalizedPar}`]: retrievedPar
          });
        } else {
          _settings_mjs__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A[`set${capitalizedPar}`](true, id, (0,_resService_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getResource */ .hZ)(id)[`default${capitalizedPar}`]);
        }
      });
    }
  } else {
    __webpack_require__.e(/* import() */ 477).then(__webpack_require__.bind(__webpack_require__, 477)).then(module => module.throwWrongID(id));
  }
}
async function pullRemote(obj) {
  let remote;
  if (remote === undefined || typeof obj !== 'object') {
    remote = await getFromStorage('remote');
  } else {
    remote = obj;
  }
  _resService_mjs__WEBPACK_IMPORTED_MODULE_0__/* .resIDs */ .vd.forEach(id => {
    const pars = (0,_resService_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getParameters */ .bQ)(id);
    pars.forEach(par => {
      const capitalizedPar = (0,_capitalize_mjs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(par);
      const retrievedPar = remote[`${id}${capitalizedPar}`];
      if (retrievedPar !== null) {
        browser.storage.local.set({
          [`${id}${capitalizedPar}`]: retrievedPar
        });
      } else {
        pushLocalRes(id, par);
      }
    });
  });
}
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}
async function initialize() {
  const initLocal = await browser.storage.local.get(null);
  const wasEmpty = isEmpty(initLocal);
  if (wasEmpty) {
    // 'true' means that setting changes will be pushed to the local storage immediately
    _settings_mjs__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.setToDefaults(true);
  } else {
    if (initLocal.sync !== null) {
      _settings_mjs__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.syncOn = initLocal.sync;
    } else {
      browser.storage.local.set({
        sync: false
      });
    }
    pullLocal(initLocal);
  }
  function areDifferent(obj1, obj2) {
    // Takes an object, returns an array.
    function sort(obj) {
      return Object.entries(obj).sort();
    }
    const [arr1, arr2] = [sort(obj1), sort(obj2)];
    return JSON.stringify(arr1) === JSON.stringify(arr2);
  }
  if (_settings_mjs__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.sync === true) {
    const remote = await browser.storage.sync.get(null);
    if (isEmpty(remote) || !areDifferent(initLocal, remote)) {
      pushLocal();
    } else {
      const local = await browser.storage.local.get(null);
      if (wasEmpty) {
        pullRemote(remote);
        pullLocal();
      } else if (areDifferent(local, remote)) {
        /* For now, it's a native popup. Then, the user will be asked to choose in the UI instead. 
        
        (Or won't he/she? What would happen if the user closed the UI before choosing an option? The native popup version doesn't have such vulnerability. But native pop-ups are a bad practice.) */

        // Give a choice of not overwriting anything and just turning off sync in the future
        if (
        // eslint-disable-next-line no-alert
        window.confirm("Differences between local and remote data are found. Do you wish to overwrite local data? If you don't, remote data will be overwritten.")) {
          pullRemote(remote);
        } else {
          pushLocal(local);
        }
      }
    }
  }
  return true;
}
async function sync() {
  function areDifferent(obj1, obj2) {
    // Takes an object, returns an array.
    function sort(obj) {
      return Object.entries(obj).sort();
    }
    const [arr1, arr2] = [sort(obj1), sort(obj2)];
    return JSON.stringify(arr1) === JSON.stringify(arr2);
  }
  const local = await browser.storage.local.get(null);
  const remote = await browser.storage.sync.get(null);
  if (isEmpty(remote)) {
    pushLocal(local);
  } else if (areDifferent(local, remote)) {
    /* For now, it's a native popup. Then, the user will be asked to choose in the UI instead. 
    
    (Or won't he/she? What would happen if the user closed the UI before choosing an option? The native popup version doesn't have such vulnerability. But native pop-ups are a bad practice.) */

    // Give a choice of not overwriting anything and just turning off sync in the future
    if (
    // eslint-disable-next-line no-alert
    window.confirm("Differences between local and remote data are found. Do you wish to overwrite local data? If you don't, remote data will be overwritten.")) {
      pullRemote(remote);
    } else {
      pushLocal(local);
    }
  }
}

/***/ }),

/***/ 879:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
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

/***/ }),

/***/ 971:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  defaultContextMenu: false,
  name: 'Dictionary.com',
  id: 'dictionary'
});

/***/ }),

/***/ 990:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  defaultContextMenu: true,
  name: 'Wiktionary',
  id: 'wiktionary',
  // ISO-639 language codes
  types: ['en', 'fr', 'de', 'pl', 'ja', 'sv', 'es', 'zh', 'el', 'ru'],
  defaultType: 'en'
});

/***/ }),

/***/ 994:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  defaultContextMenu: false,
  name: 'The Free Dictionary',
  id: 'thefreedictionary',
  types: ['dictionary', 'thesaurus', 'medical', 'legal', 'financial', 'acronyms', 'idioms', 'encyclopedia', 'wikipedia'],
  defaultType: 'dictionary',
  options: ['word', 'startsWith', 'endsWith', 'text'],
  defaultOption: 'word'
});

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
/* harmony import */ var _contextMenu_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(525);
/* harmony import */ var _settings_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(594);
/* harmony import */ var _storage_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(780);
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




(0,_contextMenu_mjs__WEBPACK_IMPORTED_MODULE_0__/* .createMenu */ .ES)();
(0,_storage_mjs__WEBPACK_IMPORTED_MODULE_2__.initialize)().then(result => {
  if (result === true) console.log('Successfully initialized.');
});

// REMOVE ON RELEASE
// -------------------------------------------------
window.settings = _settings_mjs__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A;
// -------------------------------------------------
/******/ })()
;
//# sourceMappingURL=background.bundle.js.map