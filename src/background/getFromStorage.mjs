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

import { resIDs, getParameters } from './resService';
import capitalize from './capitalize';

function createRequestInternals(id) {
  const internals = {};
  if (id === undefined) {
    resIDs.forEach((resID) => {
      const pars = getParameters(resID);
      pars.forEach((par) => {
        internals[`${resID}${capitalize(par)}`] = null;
      });
    });
  } else {
    const pars = getParameters(id);
    pars.forEach((par) => {
      internals[`${id}${par}`] = null;
    });
  }
  return internals;
}

// Returns promise
export default function getFromStorage(storage, id) {
  const requestInternals = createRequestInternals(id);
  let request;

  if (storage === 'extension') {
    request = browser.storage.local.get;
  }

  if (storage === 'sync') {
    request = browser.storage.sync.get;
  }

  return request(requestInternals);
}
