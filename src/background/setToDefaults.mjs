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
import { setItemState } from './contextMenu';
import throwWrongID from './error';

export default function setToDefaults(id) {
  const resIDs = Object.keys(resources);
  if (id === undefined) {
    resIDs.forEach((resID) => setToDefaults(resID));
  } else if (resIDs.includes(id)) {
    const res = resources[id];
    setItemState(id, res.defaultContextMenu);
    if (Object.hasOwn(res, 'defaultType'))
      settings.setType(id, res.defaultType);
    if (Object.hasOwn(res, 'defaultOption'))
      settings.setOption(id, res.defaultOption);
  } else {
    throwWrongID();
  }
}
