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

import { resIDs, getParameters, getResource } from './resService';
import capitalize from './capitalize';
// Dependency cycle via ./store:23 is not a problem.
// eslint-disable-next-line import/no-cycle
import settings from './settings';

function createRequestInternals(id, parameter) {
  const internals = {};
  if (id === undefined) {
    resIDs.forEach((resID) => {
      const pars = getParameters(resID);
      pars.forEach((par) => {
        internals[`${resID}${capitalize(par)}`] = null;
      });
    });
  } else if (parameter === undefined) {
    const pars = getParameters(id);
    pars.forEach((par) => {
      internals[`${id}${capitalize(par)}`] = null;
    });
  } else {
    internals[`${id}${capitalize(getParameters(id, parameter))}`] = null;
  }
  return internals;
}

// Returns promise
export default function getFromStorage(storage, id, parameter) {
  const requestInternals = createRequestInternals(id, parameter);

  let request;
  if (storage === 'local') {
    request = browser.storage.local.get;
  }

  if (storage === 'remote') {
    request = browser.storage.sync.get;
  }

  return request(requestInternals);
}

// If an object is passed, that object will be dealt with as if it was the local storage object.
export async function pullLocal(obj) {
  let retrieved;
  if (obj === undefined || typeof obj !== 'object') {
    retrieved = await getFromStorage('local');
  } else {
    retrieved = obj;
  }

  resIDs.forEach((id) => {
    const pars = getParameters(id);
    pars.forEach((par) => {
      const capitalizedPar = capitalize(par);
      const retrievedPar = retrieved[`${id}${capitalizedPar}`];
      if (retrievedPar !== null) {
        settings[`set${capitalizedPar}`](false, id, retrievedPar);
      } else {
        settings[`set${capitalizedPar}`](
          true,
          id,
          getResource(id)[`default${capitalizedPar}`],
        );
      }
    });
  });
}

// If an object is passed, that object will be dealt with as if it was the local storage object.
export async function pushLocal(obj) {
  let retrieved;
  if (obj === undefined || typeof obj !== 'object') {
    retrieved = await getFromStorage('local');
  } else {
    retrieved = obj;
  }

  resIDs.forEach((id) => {
    const pars = getParameters(id);
    pars.forEach((par) => {
      const capitalizedPar = capitalize(par);
      const retrievedPar = retrieved[`${id}${capitalizedPar}`];
      if (retrievedPar !== null) {
        browser.storage.sync.set({ [`${id}${capitalizedPar}`]: retrievedPar });
      } else {
        settings[`set${capitalizedPar}`](
          true,
          id,
          getResource(id)[`default${capitalizedPar}`],
        );
      }
    });
  });
}

export async function pushLocalRes(id, parameter) {
  if (resIDs.includes(id)) {
    if (parameter !== undefined) {
      const retrieved = await getFromStorage('local', id, parameter);
      const capitalizedPar = capitalize(parameter);
      const retrievedPar = retrieved[`${id}${capitalizedPar}`];

      if (retrievedPar !== null) {
        browser.storage.sync.set({ [`${id}${capitalizedPar}`]: retrievedPar });
      } else {
        settings[`set${capitalizedPar}`](
          true,
          id,
          getResource(id)[`default${capitalizedPar}`],
        );
      }
    } else {
      const retrieved = await getFromStorage('local', id);
      const pars = getParameters(id);
      pars.forEach((par) => {
        const capitalizedPar = capitalize(par);
        const retrievedPar = retrieved[`${id}${capitalizedPar}`];
        if (retrievedPar !== null) {
          browser.storage.sync.set({
            [`${id}${capitalizedPar}`]: retrievedPar,
          });
        } else {
          settings[`set${capitalizedPar}`](
            true,
            id,
            getResource(id)[`default${capitalizedPar}`],
          );
        }
      });
    }
  } else {
    import('./error').then((module) => module.throwWrongID(id));
  }
}

export async function pullRemote(obj) {
  let remote;
  if (remote === undefined || typeof obj !== 'object') {
    remote = await getFromStorage('remote');
  } else {
    remote = obj;
  }

  resIDs.forEach((id) => {
    const pars = getParameters(id);
    pars.forEach((par) => {
      const capitalizedPar = capitalize(par);
      const retrievedPar = remote[`${id}${capitalizedPar}`];
      if (retrievedPar !== null) {
        browser.storage.local.set({ [`${id}${capitalizedPar}`]: retrievedPar });
      } else {
        pushLocalRes(id, par);
      }
    });
  });
}

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

export async function initialize() {
  const initLocal = await browser.storage.local.get(null);
  const wasEmpty = isEmpty(initLocal);

  if (wasEmpty) {
    // 'true' means that setting changes will be pushed to the local storage immediately
    settings.setToDefaults(true);
  } else {
    if (initLocal.sync !== null) {
      settings.syncOn = initLocal.sync;
    } else {
      browser.storage.local.set({ sync: false });
    }
    pullLocal(initLocal);
  }

  function areDifferent(obj1, obj2) {
    // Takes an object, returns an array.
    function sort(obj) {
      return Object.entries(obj).sort();
    }

    const [arr1, arr2] = [sort(obj1), sort(obj2)];
    return JSON.stringify(arr1) === JSON.stringify(arr2);
  }

  if (settings.sync === true) {
    const remote = await browser.storage.sync.get(null);

    if (isEmpty(remote) || !areDifferent(initLocal, remote)) {
      pushLocal();
    } else {
      const local = await browser.storage.local.get(null);
      if (wasEmpty) {
        pullRemote(remote);
        pullLocal();
      } else if (areDifferent(local, remote)) {
        /* For now, it's a native popup. Then, the user will be asked to choose in the UI instead. 
        
        (Or won't he/she? What would happen if the user closed the UI before choosing an option? The native popup version doesn't have such vulnerability. But native pop-ups are a bad practice.) */

        // Give a choice of not overwriting anything and just turning off sync in the future
        if (
          // eslint-disable-next-line no-alert
          window.confirm(
            "Differences between local and remote data are found. Do you wish to overwrite local data? If you don't, remote data will be overwritten.",
          )
        ) {
          pullRemote(remote);
        } else {
          pushLocal(local);
        }
      }
    }
  }
  return true;
}

export async function sync() {
  function areDifferent(obj1, obj2) {
    // Takes an object, returns an array.
    function sort(obj) {
      return Object.entries(obj).sort();
    }

    const [arr1, arr2] = [sort(obj1), sort(obj2)];
    return JSON.stringify(arr1) === JSON.stringify(arr2);
  }

  const local = await browser.storage.local.get(null);
  const remote = await browser.storage.sync.get(null);

  if (isEmpty(remote)) {
    pushLocal(local);
  } else if (areDifferent(local, remote)) {
    /* For now, it's a native popup. Then, the user will be asked to choose in the UI instead. 
    
    (Or won't he/she? What would happen if the user closed the UI before choosing an option? The native popup version doesn't have such vulnerability. But native pop-ups are a bad practice.) */

    // Give a choice of not overwriting anything and just turning off sync in the future
    if (
      // eslint-disable-next-line no-alert
      window.confirm(
        "Differences between local and remote data are found. Do you wish to overwrite local data? If you don't, remote data will be overwritten.",
      )
    ) {
      pullRemote(remote);
    } else {
      pushLocal(local);
    }
  }
}
