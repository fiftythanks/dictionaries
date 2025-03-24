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

import getFromStorage from './getFromStorage';
import { resIDs, getResource, getParameters } from './resService';
import settings from './settings';
import capitalize from './capitalize';

export default async function syncLocal() {
  const retrieved = await getFromStorage('extension');
  resIDs.forEach((id) => {
    const pars = getParameters(id);
    pars.forEach((par) => {
      const capitalizedPar = capitalize(par);
      const retrievedPar = retrieved[`${id}${capitalizedPar}`];
      if (retrievedPar !== null) {
        settings[`set${capitalizedPar}`](id, retrievedPar);
      } else {
        settings[`set${capitalizedPar}`](
          id,
          getResource(id)[`default${capitalizedPar}`],
        );
      }
    });
  });
}
