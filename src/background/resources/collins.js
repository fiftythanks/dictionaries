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

export default {
  defaultContextMenu: false,
  contextMenu: false,
  name: 'Collins',
  id: 'collins',
  types: [
    // English
    'en-definitions',
    'en-summary',
    'en-synonyms',
    'en-sentences',
    'en-pronunciation',
    'en-collocations',
    'en-conjugations',
    'en-grammar',

    // American
    'en-us-definitions',
    'en-us-summary',
    'en-us-synonyms',
    'en-us-sentences',
    'en-us-pronunciation',
    'en-us-collocations',
    'en-us-conjugations',
    'en-us-grammar',

    // French
    'en-fr',
    'fr-en',
    'fr-grammar',
    'fr-pronunciation',
    'fr-conjugations',
    'fr-sentences',

    // German
    'en-de',
    'de-en',
    'de-grammar',
    'de-conjugations',
    'de-sentences',

    // Italian
    'en-it',
    'it-en',
    'it-grammar',
    'it-conjugations',
    'it-sentences',

    // Spanish
    'en-es',
    'es-en',
    'es-grammar',
    'es-pronunciation',
    'es-conjugations',
    'es-sentences',

    // Portuguese
    'en-pt',
    'pt-en',
    'pt-grammar',
    'pt-conjugations',

    // Hindi
    'en-hi',
    'hi-en',

    // Chinese
    'en-zh',
    'zh-en',
    'en-zh-trad',
    'zh-trad-en',

    // Korean
    'en-ko',
    'ko-en',

    // Japanese
    'en-ja',
    'ja-en',
  ],
  defaultType: 'en-definitions',
  type: 'en-definitions',
};
