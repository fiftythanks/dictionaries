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

import { settings, resources } from './settings';
import { createItem, removeItem } from './contextMenu';

export default async function sync() {
  const resIDs = Object.keys(resources);

  // If the promise is rejected, the program will jump to the catch block and the default settings won't change
  try {
    const retrieved = await browser.storage.sync.get({
      // Cambridge Dictionary
      cambridgeDictionaryContextMenu: null,
      cambridgeDictionaryType: null,

      // Vocabulary.com
      vocabularyContextMenu: null,

      // merriamWebster
      merriamWebsterContextMenu: null,
      merriamWebsterType: null,

      // Collins
      collinsContextMenu: null,
      collinsType: null,

      // Wiktionary
      wiktionaryContextMenu: null,
      wiktionaryType: null,

      // Dictionary.com
      dictionaryContextMenu: null,

      // Thesaurus.com
      thesaurusContextMenu: null,

      // The Free Dictionary
      thefreedictionaryContextMenu: null,
      thefreedictionaryType: null,
      thefreedictionaryOption: null,

      // CUBE
      // cubeContextMenu: null,

      // YouGlish
    });
    resIDs.forEach((resID) => {
      const res = resources[resID];
      const retrievedContextMenu = retrieved[`${resID}ContextMenu`];

      if (retrievedContextMenu != null) {
        if (retrievedContextMenu === true) {
          createItem(resID);
        } else {
          removeItem(resID);
        }
      }

      const type = retrieved[`${resID}Type`];
      if (res.types !== undefined && type !== null && res.type !== type)
        settings.setType(resID, type);

      const option = retrieved[`${resID}Option`];
      if (res.options !== undefined && option !== null && res.option !== option)
        res.setOption(option);
    });
  } catch (error) {
    console.log(error);
  }
}
