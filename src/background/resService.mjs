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

import cambridgeDictionary from './resources/cambridgeDictionary';
import collins from './resources/collins';
import dictionary from './resources/dictionary';
import merriamWebster from './resources/merriamWebster';
import thefreedictionary from './resources/thefreedictionary';
import thesaurus from './resources/thesaurus';
import vocabulary from './resources/vocabulary';
import wiktionary from './resources/wiktionary';
import capitalize from './capitalize';

const resources = {
  cambridgeDictionary,
  collins,
  dictionary,
  merriamWebster,
  thefreedictionary,
  thesaurus,
  vocabulary,
  wiktionary,
};

const resIDs = [
  'cambridgeDictionary',
  'collins',
  'dictionary',
  'merriamWebster',
  'thefreedictionary',
  'thesaurus',
  'vocabulary',
  'wiktionary',
];

// returns a resource object if there is a resource corresponding to the ID and undefined if there's no such a resource
function getResource(id) {
  return resources[id];
}

function hasParameter(id, par) {
  const res = getResource(id);

  if (res === undefined) {
    import('./error').then((module) => module.throwWrongID(id));
  }

  const result = Object.hasOwn(res, `default${capitalize(par)}`);
  return result;
}

function getParameters(id, parameter) {
  const res = getResource(id);

  if (res === undefined) {
    import('./error').then((module) => module.throwWrongID(id));
  }

  if (parameter === undefined) {
    const parameters = ['contextMenu'];
    const pars = ['type', 'option'];
    pars.forEach((par) => {
      if (hasParameter(id, par)) parameters.push(par);
    });

    return parameters;
  }

  if (!hasParameter(id, parameter))
    import('./error').then((module) => {
      module.throwWrongParameter(resources[id].name, parameter);
    });

  return res[parameter];
}

export { resIDs, getResource, hasParameter, getParameters };
