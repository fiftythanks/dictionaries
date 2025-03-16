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
  defaultContextMenu: true,
  contextMenu: true,
  name: 'Cambridge Dictionary',
  id: 'cambridge-dictionary',
  types: [
    // Definitions
    'english',
    'learner',
    'essential-american',
    'essential-british',

    // Translation (ISO-639 language codes)
    'en-zh-simp',
    'zh-simp-en',
    'en-zh-trad',
    'zh-trad-en',
    'en-nl',
    'nl-en',
    'en-fr',
    'fr-en',
    'en-de',
    'de-en',
    'en-id',
    'id-en',
    'en-it',
    'it-en',
    'en-no',
    'no-en',
    'en-pt',
    'pt-en',
    'en-sv',
    'sv-en',
    'en-bn',
    'en-cz',
    'en-gu',
    'en-ko',
    'en-mr',
    'en-ta',
    'en-th',
    'en-uk',
    'en-vi',
    'en-ja',
    'ja-en',
    'en-pl',
    'pl-en',
    'en-es',
    'es-en',
    'en-ar',
    'en-ca',
    'en-da',
    'en-hi',
    'en-ms',
    'en-ru',
    'en-te',
    'en-tr',
    'en-ur',

    // Other
    'grammar',
    'thesaurus',
    'pronunciation',
  ],
  defaultType: 'english',
  type: 'english',
  setType(type) {
    if (this.types.includes(type)) {
      this.type = type;
      browser.storage.sync
        .set({ [`${this.id}Type`]: type })
        .then(console.log('Type set successfuly.'), console.log);
    } else {
      console.error('Unrecognized type.');
    }
  },
};
