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

import { resIDs, getResource } from './resService';
import { createItem, removeItem, toggleItem } from './contextMenu';
import store from './store';

export default {
  syncOn: false,
  set sync(boolValue) {
    if (this.syncOn !== boolValue) {
      this.syncOn = boolValue;
      browser.storage.local.set({ sync: boolValue });
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
        import('./error').then((module) =>
          module.throwWrongType(res.name, type),
        );
      }
    } else {
      import('./error').then((module) => module.throwWrongID(id));
    }
  },

  // temporary solution
  setOption(id, option) {
    const res = getResource(id);
    if (res !== undefined) {
      if (Object.hasOwn(res, 'options') && res.options.includes(option)) {
        store(id, 'option', option, this.sync);
      } else {
        import('./error').then((module) =>
          module.throwWrongOption(res.name, option),
        );
      }
    } else {
      import('./error').then((module) => module.throwWrongID(id));
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
  async setToDefaults(
    id,
    setDefaultContextMenu = true,
    setDefaultType = true,
    setDefaultOption = true,
  ) {
    if (id === undefined) {
      const { syncOn } = await browser.storage.local.get({ sync: false });
      if (syncOn) this.sync = true;
      resIDs.forEach((resID) => this.setToDefaults(resID, true, true, true));
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
        import('./error').then((module) => module.throwWrongID(id));
      }
    }
  },
};
