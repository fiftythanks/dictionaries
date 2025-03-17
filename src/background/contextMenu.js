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

// eslint-disable-next-line import/no-cycle
import { resources } from './settings';
import lookUp from './lookUp';

export function createMenu() {
  browser.menus.create({
    id: 'dictionaries',
    title: 'Look up: %s',
    contexts: ['selection'],
  });
}

export function createItem(resID) {
  // add a check for the existance of such a resource
  const res = resources[resID];

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

export function removeItem(resID) {
  // add a check for the existance of such a resource
  const res = resources[resID];

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

export function toggleItem(resID) {
  // add a check for the existance of such a resource
  const res = resources[resID];

  if (res.contextMenu === true) {
    removeItem(resID);
  } else if (res.contextMenu === false) {
    createItem(resID);
  } else {
    console.error('Unpredicted behaviour in toggleResource().');
  }
}
