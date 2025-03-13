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
      // For reference
      types: {
        dictionaries: {
          definitions: [
            'english',
            'learner',
            'essential-american',
            'essential-british',
          ],
          // ISO-639 language codes
          translation: [
            'en-zh-simp',
            'zh-simp-en',
            'en-zh-trad',
            'zh-trad-en',
            'en-nl',
            'nl-en',
            'en-fr',
            'fr-en',
            'en-de',
            'de-en',
            'en-id',
            'id-en',
            'en-it',
            'it-en',
            'en-no',
            'no-en',
            'en-pt',
            'pt-en',
            'en-sv',
            'sv-en',
            'en-bn',
            'en-cz',
            'en-gu',
            'en-ko',
            'en-mr',
            'en-ta',
            'en-th',
            'en-uk',
            'en-vi',
            'en-ja',
            'ja-en',
            'en-pl',
            'pl-en',
            'en-es',
            'es-en',
            'en-ar',
            'en-ca',
            'en-da',
            'en-hi',
            'en-ms',
            'en-ru',
            'en-te',
            'en-tr',
            'en-ur',
          ],
        },
        other: ['grammar', 'thesaurus', 'pronunciation'],
      },
      type: 'english',
      setType(type) {
        const dictionaries = this.types.dictionaries;
        if (
          dictionaries.definitions.includes(type) ||
          dictionaries.translation.includes(type) ||
          this.types.other.includes(type)
        ) {
          this.type = type;
          browser.storage.sync
            .set({ 'cambridge-dictionaryType': type })
            .then(console.log('Type set successfuly.'), console.log);
        } else {
          console.error(
            'Unrecognized type. The default type has been set instead.'
          );
          this.type = 'english';
          browser.storage.sync
            .set({ 'cambridge-dictionaryType': 'english' })
            .catch(console.log);
        }
      },
      reset() {
        this.type = 'english';
        browser.storage.sync
          .set({ 'cambridge-dictionaryType': 'english' })
          .then(console.log("cambridge-dictionary's type is successfuly reset"))
          .catch(console.log);
        this.contextMenu = true;
        browser.storage.sync
          .set({ 'cambridge-dictionaryContextMenu': true })
          .then(
            console.log(
              "cambridge-dictionary's contextMenu is successfuly reset"
            )
          )
          .catch(console.log);
      },
    },
    vocabulary: {
      contextMenu: true,
      name: 'Vocabulary',
      reset() {
        this.contextMenu = true;
        browser.storage.sync
          .set({ vocabularyContextMenu: true })
          .then(console.log('vocabulary is successfuly reset'))
          .catch(console.log);
      },
    },
    'merriam-webster': {
      contextMenu: false,
      name: 'Merriam-Webster',
      reset() {
        this.contextMenu = false;
        browser.storage.sync
          .set({ 'merriam-websterContextMenu': false })
          .then(console.log('merriam-webster is successfuly reset'))
          .catch(console.log);
      },
    },
    collins: {
      contextMenu: false,
      name: 'Collins',
      reset() {
        this.contextMenu = false;
        browser.storage.sync
          .set({ collinsContextMenu: false })
          .then(console.log('collins is successfuly reset'))
          .catch(console.log);
      },
    },
    wiktionary: {
      contextMenu: true,
      name: 'Wiktionary',
      reset() {
        this.contextMenu = true;
        browser.storage.sync
          .set({ wiktionaryContextMenu: true })
          .then(console.log('wiktionary is successfuly reset'))
          .catch(console.log);
      },
    },
    dictionary: {
      contextMenu: false,
      name: 'Dictionary.com',
      reset() {
        this.contextMenu = false;
        browser.storage.sync
          .set({ dictionaryContextMenu: false })
          .then(console.log('dictionary is successfuly reset'))
          .catch(console.log);
      },
    },
    thesaurus: {
      contextMenu: false,
      name: 'Thesaurus.com',
      reset() {
        this.contextMenu = false;
        browser.storage.sync
          .set({ thesaurusContextMenu: false })
          .then(console.log('thesaurus is successfuly reset.'))
          .catch(console.log);
      },
    },
    thefreedictionary: {
      contextMenu: false,
      name: 'The Free Dictionary',
      reset() {
        this.contextMenu = false;
        browser.storage.sync
          .set({ thefreedictionaryContextMenu: false })
          .then(console.log('thefreedictionary is successfuly reset.'))
          .catch(console.log);
      },
    },
    cube: {
      contextMenu: false,
      name: 'CUBE',
      reset() {
        this.contextMenu = false;
        browser.storage.sync
          .set({ cube: false })
          .then(console.log('cube is successfuly reset.'))
          .catch(console.log);
      },
    },
    async reset() {
      for (let res in this) {
        if (res !== 'reset') this[res].reset();
      }
      console.log('Resources are reset.');
      const results = await browser.storage.sync.get(null);
      console.log(results);
    },
  },
};

function chooseResource(info, tab) {
  const word = encodeURI(info.selectionText);
  let url;
  switch (info.menuItemId) {
    case 'cambridge-dictionary':
      switch (settings.resources['cambridge-dictionary'].type) {
        case 'english':
          url = `https://dictionary.cambridge.org/search/english/direct/?q=${word}`;
          break;
        case 'learner':
          url = `https://dictionary.cambridge.org/search/learner-english/direct/?q=${word}`;
          break;
        case 'essential-american':
          url = `https://dictionary.cambridge.org/search/essential-american-english/direct/?q=${word}`;
          break;
        case 'essential-british':
          url = `https://dictionary.cambridge.org/search/essential-british-english/direct/?q=${word}`;
          break;
        case 'en-zh-simp':
          url = `https://dictionary.cambridge.org/search/english-chinese-simplified/direct/?q=${word}`;
          break;
        case 'zh-simp-en':
          url = `https://dictionary.cambridge.org/search/chinese-simplified-english/direct/?q=${word}`;
          break;
        case 'en-zh-trad':
          url = `https://dictionary.cambridge.org/search/english-chinese-traditional/direct/?q=${word}`;
          break;
        case 'zh-trad-en':
          url = `https://dictionary.cambridge.org/search/chinese-traditional-english/direct/?q=${word}`;
          break;
        case 'en-nl':
          url = `https://dictionary.cambridge.org/search/english-dutch/direct/?q=${word}`;
          break;
        case 'nl-en':
          url = `https://dictionary.cambridge.org/search/dutch-english/direct/?q=${word}`;
          break;
        case 'en-fr':
          url = `https://dictionary.cambridge.org/search/english-french/direct/?q=${word}`;
          break;
        case 'fr-en':
          url = `https://dictionary.cambridge.org/search/french-english/direct/?q=${word}`;
          break;
        case 'en-de':
          url = `https://dictionary.cambridge.org/search/english-german/direct/?q=${word}`;
          break;
        case 'de-en':
          url = `https://dictionary.cambridge.org/search/german-english/direct/?q=${word}`;
          break;
        case 'en-id':
          url = `https://dictionary.cambridge.org/search/english-indonesian/direct/?q=${word}`;
          break;
        case 'id-en':
          url = `https://dictionary.cambridge.org/search/indonesian-english/direct/?q=${word}`;
          break;
        case 'en-it':
          url = `https://dictionary.cambridge.org/search/english-italian/direct/?q=${word}`;
          break;
        case 'it-en':
          url = `https://dictionary.cambridge.org/search/italian-english/direct/?q=${word}`;
          break;
        case 'en-no':
          url = `https://dictionary.cambridge.org/search/english-norwegian/direct/?q=${word}`;
          break;
        case 'no-en':
          url = `https://dictionary.cambridge.org/search/norwegian-english/direct/?q=${word}`;
          break;
        case 'en-pt':
          url = `https://dictionary.cambridge.org/search/english-portuguese/direct/?q=${word}`;
          break;
        case 'pt-en':
          url = `https://dictionary.cambridge.org/search/portuguese-english/direct/?q=${word}`;
          break;
        case 'en-sv':
          url = `https://dictionary.cambridge.org/search/english-swedish/direct/?q=${word}`;
          break;
        case 'sv-en':
          url = `https://dictionary.cambridge.org/search/swedish-english/direct/?q=${word}`;
          break;
        case 'en-bn':
          url = `https://dictionary.cambridge.org/search/english-bengali/direct/?q=${word}`;
          break;
        case 'en-cz':
          url = `https://dictionary.cambridge.org/search/english-czech/direct/?q=${word}`;
          break;
        case 'en-gu':
          url = `https://dictionary.cambridge.org/search/english-gujarati/direct/?q=${word}`;
          break;
        case 'en-ko':
          url = `https://dictionary.cambridge.org/search/english-korean/direct/?q=${word}`;
          break;
        case 'en-mr':
          url = `https://dictionary.cambridge.org/search/english-marathi/direct/?q=${word}`;
          break;
        case 'en-ta':
          url = `https://dictionary.cambridge.org/search/english-tamil/direct/?q=${word}`;
          break;
        case 'en-th':
          url = `https://dictionary.cambridge.org/search/english-thai/direct/?q=${word}`;
          break;
        case 'en-uk':
          url = `https://dictionary.cambridge.org/search/english-ukrainian/direct/?q=${word}`;
          break;
        case 'en-vi':
          url = `https://dictionary.cambridge.org/search/english-vietnamese/direct/?q=${word}`;
          break;
        case 'en-ja':
          url = `https://dictionary.cambridge.org/search/english-japanese/direct/?q=${word}`;
          break;
        case 'ja-en':
          url = `https://dictionary.cambridge.org/search/japanese-english/direct/?q=${word}`;
          break;
        case 'en-pl':
          url = `https://dictionary.cambridge.org/search/english-polish/direct/?q=${word}`;
          break;
        case 'pl-en':
          url = `https://dictionary.cambridge.org/search/polish-english/direct/?q=${word}`;
          break;
        case 'en-es':
          url = `https://dictionary.cambridge.org/search/english-spanish/direct/?q=${word}`;
          break;
        case 'es-en':
          url = `https://dictionary.cambridge.org/search/spanish-english/direct/?q=${word}`;
          break;
        case 'en-ar':
          url = `https://dictionary.cambridge.org/search/english-arabic/direct/?q=${word}`;
          break;
        case 'en-ca':
          url = `https://dictionary.cambridge.org/search/english-catalan/direct/?q=${word}`;
          break;
        case 'en-da':
          url = `https://dictionary.cambridge.org/search/english-danish/direct/?q=${word}`;
          break;
        case 'en-hi':
          url = `https://dictionary.cambridge.org/search/english-hindi/direct/?q=${word}`;
          break;
        case 'en-ms':
          url = `https://dictionary.cambridge.org/search/english-malaysian/direct/?q=${word}`;
          break;
        case 'en-ru':
          url = `https://dictionary.cambridge.org/search/english-russian/direct/?q=${word}`;
          break;
        case 'en-te':
          url = `https://dictionary.cambridge.org/search/english-telugu/direct/?q=${word}`;
          break;
        case 'en-tr':
          url = `https://dictionary.cambridge.org/search/english-turkish/direct/?q=${word}`;
          break;
        case 'en-ur':
          url = `https://dictionary.cambridge.org/search/english-urdu/direct/?q=${word}`;
          break;
        case 'grammar':
          url = `https://dictionary.cambridge.org/search/british-grammar/direct/?q=${word}`;
          break;
        case 'thesaurus':
          url = `https://dictionary.cambridge.org/search/thesaurus/direct/?q=${word}`;
          break;
        case 'pronunciation':
          url = `https://dictionary.cambridge.org/search/pronunciation/direct/?q=${word}`;
          break;
        default:
          url = `https://dictionary.cambridge.org/search/english/direct/?q=${word}`;
      }
      break;
    default:
    // do nothing
  }
  const width = 750;
  const height = 650;
  const left = screen.width / 2 - width / 2;
  const top = screen.height / 2 - height / 2;
  browser.windows.create({
    url,
    width,
    height,
    left,
    top,
    type: 'popup',
    focused: false,
  });
}

function createItem(resID) {
  const res = settings.resources[resID];

  browser.menus.create({
    parentId: 'dictionaries',
    id: resID,
    title: res.name,
    contexts: ['all'],
    onclick: chooseResource,
  });
  res.contextMenu = true;
  browser.storage.sync
    .set({ [`${resID}ContextMenu`]: true })
    .then(console.log(`Item ${resID} successfuly created`), console.log);
}

function removeItem(resID) {
  const res = settings.resources[resID];

  browser.menus.remove(resID);
  res.contextMenu = false;
  browser.storage.sync
    .set({ [`${resID}ContextMenu`]: false })
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

// Sync settings
(async () => {
  const resIDs = Object.keys(settings.resources);
  const resources = settings.resources;

  // If the promise is rejected, the program will jump to the catch block and the default settings won't change
  try {
    const retrieved = await browser.storage.sync.get({
      // Cambridge Dictionary
      'cambridge-dictionaryContextMenu': null,
      'cambridge-dictionaryType': null,

      // Vocabulary.com
      vocabularyContextMenu: null,

      // Merriam-Webster
      'merriam-websterContextMenu': null,

      // Collins
      collinsContextMenu: null,

      // Wiktionary
      wiktionaryContextMenu: null,

      // Dictionary.com
      dictionaryContextMenu: null,

      // Thesaurus.com
      thesaurusContextMenu: null,

      // The Free Dictionary
      thefreedictionaryContextMenu: null,

      // CUBE
      cubeContextMenu: null,
    });
    for (let resID of resIDs) {
      const res = resources[resID];
      const retrievedContextMenu = retrieved[`${resID}ContextMenu`];
      if (retrievedContextMenu) res.contextMenu = retrievedContextMenu;
      if (resID === 'cambridge-dictionary') {
        const retrievedType = retrieved[`${resID}Type`];
        if (retrievedType) res.type = retrievedType;
      }
    }
  } catch (error) {
    console.log(error);
  }

  // Create context menu items
  for (let resID of resIDs) {
    if (resources[resID].contextMenu === true) {
      createItem(resID);
    }
  }
})();

// REMOVE ON RELEASE
// -------------------------------------------------
window.createItem = createItem;
window.removeItem = removeItem;
window.toggleItem = toggleItem;
// -------------------------------------------------
