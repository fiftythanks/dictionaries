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
  name: 'Merriam-Webster',
  id: 'merriam-webster',
  types: ['dictionary', 'thesaurus'],
  defaultType: 'dictionary',
  type: 'dictionary',
  setType(type) {
    if (this.types.includes(type)) {
      this.type = type;
      browser.storage.sync
        .set({ [`${this.id}Type`]: type })
        .then(
          console.log(`${this.name} type is successfuly set to ${type}.`),
          console.log,
        );
    } else {
      console.error('Unrecognized type.');
    }
  },
};
