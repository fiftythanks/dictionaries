browser.menus.create({
  id: 'dictionaries',
  title: 'Look up: %s',
  contexts: ['selection'],
});

// Default settings
let settings = {
  resources: {
    'cambridge-dictionary': {
      contextMenu: true,
      name: 'Cambridge Dictionary',
    },
    vocabulary: {
      contextMenu: true,
      name: 'Vocabulary',
    },
    'merriam-webster': {
      contextMenu: false,
      name: 'Merriam-Webster',
    },
    collins: {
      contextMenu: false,
      name: 'Collins',
    },
    wiktionary: {
      contextMenu: true,
      name: 'Wiktionary',
    },
    dictionary: {
      contextMenu: false,
      name: 'Dictionary.com',
    },
    thesaurus: {
      contextMenu: false,
      name: 'Thesaurus.com',
    },
    thefreedictionary: {
      contextMenu: false,
      name: 'The Free Dictionary',
    },
    cube: {
      contextMenu: false,
      name: 'CUBE',
    },
  },
};

// Sync settings
(async () => {
  try {
    // If the promise is rejected, the program will jump to the catch block and the default settings won't change
    const retrieved = await browser.storage.sync.get({
      'cambridge-dictionary': {
        contextMenu: true,
      },
      vocabulary: {
        contextMenu: true,
      },
      'merriam-webster': {
        contextMenu: false,
      },
      collins: {
        contextMenu: false,
      },
      wiktionary: {
        contextMenu: true,
      },
      dictionary: {
        contextMenu: false,
      },
      thesaurus: {
        contextMenu: false,
      },
      thefreedictionary: {
        contextMenu: false,
      },
      cube: {
        contextMenu: false,
      },
    });
    const resIDs = Object.keys(settings.resources);
    const resources = settings.resources;
    for (let resID of resIDs) {
      resources[resID].contextMenu = retrieved[resID].contextMenu;
    }
  } catch (error) {
    console.log(error);
  }
})();

function createItem(resID) {
  const res = settings.resources[resID];

  browser.menus.create({
    parentId: 'dictionaries',
    id: resID,
    title: res.name,
    contexts: ['all'],
  });
  res.contextMenu = true;
  browser.storage.sync
    .set({ [resID]: { contextMenu: true } })
    .then(console.log(`Item ${resID} successfuly created`), console.log);
}

function removeItem(resID) {
  const res = settings.resources[resID];

  browser.menus.remove(resID);
  res.contextMenu = false;
  browser.storage.sync
    .set({ [resID]: { contextMenu: false } })
    .then(console.log(`Item ${resID} successfuly removed`), console.log);
}

function toggleItem(resID) {
  const res = settings.resources[resID];

  if (res.contextMenu === true) {
    removeItem(resID);
  } else if (res.contextMenu === false) {
    createItem(resID);
  } else {
    console.error('Unpredicted behaviour in toggleResource().');
  }
}

// REMOVE ON RELEASE
// -------------------------------------------------
window.createItem = createItem;
window.removeItem = removeItem;
window.toggleItem = toggleItem;

// -------------------------------------------------

(async () => {
  const resources = settings.resources;
  const resIDs = Object.keys(resources);
  for await (let resID of resIDs) {
    if (resources[resID].contextMenu === true) {
      createItem(resID);
    }
  }
})();

/*
The click event listener, where we perform the appropriate action given the
ID of the menu item that was clicked.
*/

// browser.menus.onClicked.addListener((info, tab) => {
//   switch (info.menuItemId) {
//     case 'log-selection':
//       console.log(info.selectionText);
//       break;
//     case 'remove-me':
//       let removing = browser.menus.remove(info.menuItemId);
//       removing.then(onRemoved, onError);
//       break;
//     case 'bluify':
//       borderify(tab.id, blue);
//       break;
//     case 'greenify':
//       borderify(tab.id, green);
//       break;
//     case 'check-uncheck':
//       updateCheckUncheck(info.checked);
//       break;
//     case 'open-sidebar':
//       console.log('Opening my sidebar');
//       break;
//     case 'tools-menu':
//       console.log('Clicked the tools menu item');
//       break;
//   }
// });
