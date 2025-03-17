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

import cambridgeDictionary from './resources/cambridge';
import vocabulary from './resources/vocabulary';
import merriamWebster from './resources/merriam';
import collins from './resources/collins';
import wiktionary from './resources/wiktionary';
import dictionary from './resources/dictionary';
import thesaurus from './resources/thesaurus';
import thefreedictionary from './resources/thefreedictionary';
// eslint-disable-next-line import/no-cycle
import lookUp from './lookUp';

browser.menus.create({
  id: 'dictionaries',
  title: 'Look up: %s',
  contexts: ['selection'],
});

// Default settings
const settings = {
  resources: {
    cambridgeDictionary,
    vocabulary,
    wiktionary,
    merriamWebster,
    collins,
    dictionary,
    thesaurus,
    thefreedictionary, // change setOption
    // Add CUBE, YouGlish and Wikipedia later
    // cube: {
    //   contextMenu: false,
    //   name: 'CUBE',
    //   types: ['spell', 'sound'],
    //   type: 'spell',
    //   setType(type) {
    //     if (this.types.includes(type)) {
    //       this.type = type;
    //       browser.storage.sync
    //         .set({ cubeType: type })
    //         .then(console.log('Type set successfuly.'), console.log);
    //     } else {
    //       console.error('Unrecognized type.');
    //     }
    //   },
    //   options: {},
    //   reset() {
    //     removeItem('cube');
    //     this.setType('spell');
    //   },
    // },
    // youglish: {},
    // wikipedia: {},
    setType(resID, type) {
      const resIDs = Object.keys(this);
      resIDs.splice(-2, 2); // Remove 'setType' and 'reset' from the array
      if (resIDs.includes(resID)) {
        const res = this[resID];
        if (res.types !== undefined && res.types.includes(type)) {
          res.type = type;
          browser.storage.sync
            .set({ [`${res.id}Type`]: type })
            .then(
              console.log(`${res.name}'s type is successfuly set to ${type}.`),
              console.log,
            );
        } else {
          console.error(`${res.name} doesn't have the type ${type}`);
        }
      } else {
        console.error(`There's no resource with the ${resID} ID.`);
      }
    },
    async reset(resID) {
      const resIDs = Object.keys(this);
      resIDs.splice(-2, 2); // Remove 'setType' and 'reset' from the array
      if (resID === undefined) {
        resIDs.forEach((id) => this.reset(id));
        const results = await browser.storage.sync.get(null);
        console.log('Resources are reset.');
        console.log(results);
      } else if (resIDs.includes(resID)) {
        const res = this[resID];
        if (res.defaultType !== undefined) this.setType(resID, res.defaultType);
        if (res.defaultContextMenu === true) {
          createItem(resID);
        } else {
          removeItem(resID);
        }
        // THERE NEEDS TO BE A BETTER WAY
        if (resID === 'thefreedictionary') res.setOption(res.defaultOption);
        console.log(`${res.name} is successfuly reset to defaults.`);
      } else {
        console.error('Unrecognized resource id.');
      }
    },
  },
};
export default settings.resources;

function createItem(resID) {
  // add a check for the existance of such a resource
  const res = settings.resources[resID];

  browser.menus.create(
    {
      parentId: 'dictionaries',
      id: resID,
      title: res.name,
      contexts: ['all'],
      onclick: lookUp,
    },
    () => {
      if (browser.runtime.lastError !== null) {
        const error = browser.runtime.lastError;
        if (error.message !== `ID already exists: ${resID}`)
          console.error(error);
      } else {
        res.contextMenu = true;
        browser.storage.sync
          .set({ [`${resID}ContextMenu`]: true })
          .then(
            console.log(`Item ${resID} successfuly created`),
            console.error,
          );
      }
    },
  );
}

function removeItem(resID) {
  // add a check for the existance of such a resource
  const res = settings.resources[resID];

  browser.menus
    .remove(resID)
    .then(() => {
      res.contextMenu = false;
      browser.storage.sync
        .set({ [`${resID}ContextMenu`]: false })
        .then(console.log(`Item ${resID} successfuly removed`), console.error);
    })
    .catch((error) => {
      if (error.message !== `Cannot find menu item with id ${resID}`) {
        console.log(error.message);
        console.error(error);
      }
    });
}

function toggleItem(resID) {
  // add a check for the existance of such a resource
  const res = settings.resources[resID];

  if (res.contextMenu === true) {
    removeItem(resID);
  } else if (res.contextMenu === false) {
    createItem(resID);
  } else {
    console.error('Unpredicted behaviour in toggleResource().');
  }
}

// Sync settings
// Make sync an option, not a default <------------------------------------
(async () => {
  const { resources } = settings;
  const resIDs = Object.keys(resources);
  resIDs.splice(-2, 2); // Remove 'setType' and 'reset' from the array

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
      // USE EXISTING METHODS
      if (retrievedContextMenu != null) res.contextMenu = retrievedContextMenu;
      if (
        [
          'cambridgeDictionary',
          'vocabulary',
          'merriamWebster',
          'collins',
          'wiktionary',
          'thefreedictionary',
        ].includes(resID)
      ) {
        const retrievedType = retrieved[`${resID}Type`];
        if (retrievedType) res.type = retrievedType;
      }
      if (resID === 'thefreedictionary') {
        const retrievedOption = retrieved[`${resID}Option`];
        if (retrievedOption) res.option = retrievedOption;
      }
    });
  } catch (error) {
    console.log(error);
  }

  // Create context menu items
  resIDs.forEach((resID) => {
    if (resources[resID].contextMenu === true) {
      createItem(resID);
    }
  });
})();

// REMOVE ON RELEASE
// -------------------------------------------------
window.createItem = createItem;
window.removeItem = removeItem;
window.toggleItem = toggleItem;
window.settings = settings;
// -------------------------------------------------
