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

import { hasParameter, getResource } from './resService';
import capitalize from './capitalize';

export default async function store(id, parameter, value, isSyncOn) {
  const res = getResource(id);
  if (hasParameter(id, parameter)) {
    res[parameter] = value;
    browser.storage.local.set({ [`${id}${capitalize(parameter)}`]: value });
    if (isSyncOn) {
      browser.storage.sync.set({ [`${id}${capitalize(parameter)}`]: value });
    }
  } else {
    import('./error').then((module) =>
      module.throwWrongParameter(res.name, parameter),
    );
  }
}
