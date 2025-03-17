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
import { createItem, removeItem } from './background';

export const settings = {
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
  },
  setType(resID, type) {
    const { resources } = this;
    const resIDs = Object.keys(resources);
    if (resIDs.includes(resID)) {
      const res = resources[resID];
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
    const { resources } = this;
    const resIDs = Object.keys(resources);
    if (resID === undefined) {
      resIDs.forEach((id) => this.reset(id));
      const results = await browser.storage.sync.get(null);
      console.log('Resources are reset.');
      console.log(results);
    } else if (resIDs.includes(resID)) {
      const res = resources[resID];
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
};

export const { resources } = settings;
