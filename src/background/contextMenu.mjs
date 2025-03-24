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

import { getResource } from './resService';
import lookUp from './lookUp';

export function createMenu() {
  browser.menus.create({
    id: 'dictionaries',
    title: 'Look up: %s',
    contexts: ['selection'],
  });
}

// Returns true if successful
export function createItem(id) {
  const res = getResource(id);

  if (res === undefined) {
    import('./error').then((module) => module.throwWrongID(id));
  }

  browser.menus.create(
    {
      id,
      parentId: 'dictionaries',
      title: res.name,
      contexts: ['all'],
      onclick: lookUp,
    },
    () => {
      const error = browser.runtime.lastError;
      if (error !== null && error.message !== `ID already exists: ${id}`) {
        throw error;
      } else {
        return true;
      }
    },
  );

  res.contextMenu = true;
  return true;
}

// Returns false if successful
export function removeItem(id) {
  const res = getResource(id);

  if (res === undefined) {
    import('./error').then((module) => module.throwWrongID(id));
  }

  browser.menus
    .remove(id)
    .then(() => false)
    .catch((error) => {
      if (error.message !== `Cannot find menu item with id ${id}`) {
        throw error;
      } else {
        return false;
      }
    });

  res.contextMenu = false;
  return false;
}

export async function toggleItem(id) {
  const res = getResource(id);

  if (res === undefined) {
    import('./error').then((module) => module.throwWrongID(id));
  }

  if (res.contextMenu === true) {
    removeItem(id);
  } else if (res.contextMenu === false) {
    createItem(id);
  } else {
    throw new Error('Unpredicted behavior in toggleResource().');
  }
}
