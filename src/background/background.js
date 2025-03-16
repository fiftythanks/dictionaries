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
      types: [
        // Definitions
        'english',
        'learner',
        'essential-american',
        'essential-british',

        // Translation (ISO-639 language codes)
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

        // Other
        'grammar',
        'thesaurus',
        'pronunciation',
      ],
      type: 'english',
      setType(type) {
        if (this.types.includes(type)) {
          this.type = type;
          browser.storage.sync
            .set({ 'cambridge-dictionaryType': type })
            .then(console.log('Type set successfuly.'), console.log);
        } else {
          console.error('Unrecognized type.');
        }
      },
      reset() {
        createItem('cambridge-dictionary');
        this.setType('english');
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
      types: ['dictionary', 'thesaurus'],
      type: 'dictionary',
      setType(type) {
        if (this.types.includes(type)) {
          this.type = type;
          browser.storage.sync
            .set({ 'merriam-websterType': type })
            .then(console.log('Type set successfuly.'), console.log);
        } else {
          console.error('Unrecognized type.');
        }
      },
      reset() {
        removeItem('merriam-webster');
        this.setType('dictionary');
      },
    },
    collins: {
      contextMenu: false,
      name: 'Collins',
      types: [
        // English
        'en-definitions',
        'en-summary',
        'en-synonyms',
        'en-sentences',
        'en-pronunciation',
        'en-collocations',
        'en-conjugations',
        'en-grammar',

        // American
        'en-us-definitions',
        'en-us-summary',
        'en-us-synonyms',
        'en-us-sentences',
        'en-us-pronunciation',
        'en-us-collocations',
        'en-us-conjugations',
        'en-us-grammar',

        // French
        'en-fr',
        'fr-en',
        'fr-grammar',
        'fr-pronunciation',
        'fr-conjugations',
        'fr-sentences',

        // German
        'en-de',
        'de-en',
        'de-grammar',
        'de-conjugations',
        'de-sentences',

        // Italian
        'en-it',
        'it-en',
        'it-grammar',
        'it-conjugations',
        'it-sentences',

        // Spanish
        'en-es',
        'es-en',
        'es-grammar',
        'es-pronunciation',
        'es-conjugations',
        'es-sentences',

        // Portuguese
        'en-pt',
        'pt-en',
        'pt-grammar',
        'pt-conjugations',

        // Hindi
        'en-hi',
        'hi-en',

        // Chinese
        'en-zh',
        'zh-en',
        'en-zh-trad',
        'zh-trad-en',

        // Korean
        'en-ko',
        'ko-en',

        // Japanese
        'en-ja',
        'ja-en',
      ],
      type: 'en-definitions ',
      setType(type) {
        if (this.types.includes(type)) {
          this.type = type;
          browser.storage.sync
            .set({ collinsType: type })
            .then(console.log('Type set successfuly.'), console.log);
        } else {
          console.error('Unrecognized type.');
        }
      },
      reset() {
        removeItem('collins');
        this.setType('en-definitions');
      },
    },
    wiktionary: {
      contextMenu: true,
      name: 'Wiktionary',
      // ISO-639 language codes
      types: ['en', 'fr', 'de', 'pl', 'ja', 'sv', 'es', 'zh', 'el', 'ru'],
      type: 'en',
      setType(type) {
        if (this.types.includes(type)) {
          this.type = type;
          browser.storage.sync
            .set({ wiktionaryType: type })
            .then(console.log('Type set successfuly.'), console.log);
        } else {
          console.error('Unrecognized type.');
        }
      },
      reset() {
        createItem('wiktionary');
        this.setType('en');
      },
    },
    dictionary: {
      contextMenu: false,
      name: 'Dictionary.com',
      reset() {
        removeItem('dictionary');
      },
    },
    thesaurus: {
      contextMenu: false,
      name: 'Thesaurus.com',
      reset() {
        removeItem('thesaurus');
      },
    },
    thefreedictionary: {
      contextMenu: false,
      name: 'The Free Dictionary',
      types: [
        'dictionary',
        'thesaurus',
        'medical',
        'legal',
        'financial',
        'acronyms',
        'idioms',
        'encyclopedia',
        'wikipedia',
      ],
      type: 'dictionary',
      setType(type) {
        if (this.types.includes(type)) {
          this.type = type;
          browser.storage.sync
            .set({ thefreedictionaryType: type })
            .then(console.log('Type set successfuly.'), console.log);
        } else {
          console.error('Unrecognized type.');
        }
      },
      options: ['word', 'startsWith', 'endsWith', 'text'],
      option: 'word',
      setOption(option) {
        if (this.options.includes(option)) {
          this.option = option;
          browser.storage.sync
            .set({ thefreedictionaryOption: option })
            .then(console.log('Option set successfuly.'), console.log);
        } else {
          console.error('Unrecognized option.');
        }
      },
      reset() {
        removeItem('thefreedictionary');
        this.setType('dictionary');
        this.setOption('word');
      },
    },
    // Add CUBE, YouGlish and Wikipedia later
    // cube: {
    //   contextMenu: false,
    //   name: 'CUBE',
    //   types: ['spell', 'sound'],
    //   type: 'spell',
    //   setType(type) {
    //     if (this.types.includes(type)) {
    //       this.type = type;
    //       browser.storage.sync
    //         .set({ cubeType: type })
    //         .then(console.log('Type set successfuly.'), console.log);
    //     } else {
    //       console.error('Unrecognized type.');
    //     }
    //   },
    //   options: {},
    //   reset() {
    //     removeItem('cube');
    //     this.setType('spell');
    //   },
    // },
    // youglish: {},
    // wikipedia: {},
    async reset() {
      for (let res in this) {
        if (res !== 'reset') this[res].reset();
      }
      const results = await browser.storage.sync.get(null);
      console.log('Resources are reset.');
      console.log(results);
    },
  },
};

function chooseResource(info, tab) {
  const resources = settings.resources;
  const word = encodeURI(info.selectionText);
  let url;
  switch (info.menuItemId) {
    case 'cambridge-dictionary':
      switch (resources['cambridge-dictionary'].type) {
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
    case 'vocabulary':
      url = `https://www.vocabulary.com/dictionary/${word}`;
      break;
    case 'merriam-webster':
      switch (resources['merriam-webster'].type) {
        case 'dictionary':
          url = `https://www.merriam-webster.com/dictionary/${word}`;
          break;
        case 'thesaurus':
          url = `https://www.merriam-webster.com/thesaurus/${word}`;
          break;
        default:
          url = `https://www.merriam-webster.com/dictionary/${word}`;
      }
      break;
    case 'collins':
      switch (resources.collins.type) {
        case 'en-definitions':
          url = `https://www.collinsdictionary.com/search/?dictCode=english&q=${word}`;
          break;
        case 'en-summary':
          url = `https://www.collinsdictionary.com/search/?dictCode=english-word&q=${word}`;
          break;
        case 'en-synonyms':
          url = `https://www.collinsdictionary.com/search/?dictCode=english-thesaurus&q=${word}`;
          break;
        case 'en-sentences':
          url = `https://www.collinsdictionary.com/search/?dictCode=english-sentences&q=${word}`;
          break;
        case 'en-pronunciation':
          url = `https://www.collinsdictionary.com/search/?dictCode=english-pronunciations&q=${word}`;
          break;
        case 'en-collocations':
          url = `https://www.collinsdictionary.com/search/?dictCode=english-collocations&q=${word}`;
          break;
        case 'en-conjugations':
          url = `https://www.collinsdictionary.com/search/?dictCode=english-conjugation&q=${word}`;
          break;
        case 'en-grammar':
          url = `https://www.collinsdictionary.com/search/?dictCode=elt-grammar&q=${word}`;
          break;
        case 'en-us-definitions':
          url = `https://www.collinsdictionary.com/us/search/?dictCode=english&q=${word}`;
          break;
        case 'en-us-summary':
          url = `https://www.collinsdictionary.com/us/search/?dictCode=english-word&q=${word}`;
          break;
        case 'en-us-synonyms':
          url = `https://www.collinsdictionary.com/us/search/?dictCode=english-thesaurus&q=${word}`;
          break;
        case 'en-us-sentences':
          url = `https://www.collinsdictionary.com/us/search/?dictCode=english-sentences&q=${word}`;
          break;
        case 'en-us-pronunciation':
          url = `https://www.collinsdictionary.com/us/search/?dictCode=english-pronunciations&q=${word}`;
          break;
        case 'en-us-collocations':
          url = `https://www.collinsdictionary.com/us/search/?dictCode=english-collocations&q=${word}`;
          break;
        case 'en-us-conjugations':
          url = `https://www.collinsdictionary.com/us/search/?dictCode=english-conjugation&q=${word}`;
          break;
        case 'en-us-grammar':
          url = `https://www.collinsdictionary.com/us/search/?dictCode=elt-grammar&q=${word}`;
          break;
        case 'en-fr':
          url = `https://www.collinsdictionary.com/search/?dictCode=english-french&q=${word}`;
          break;
        case 'fr-en':
          url = `https://www.collinsdictionary.com/search/?dictCode=french-english&q=${word}`;
          break;
        case 'fr-grammar':
          url = `https://www.collinsdictionary.com/search/?dictCode=grammar-elf&q=${word}`;
          break;
        case 'fr-pronunciation':
          url = `https://www.collinsdictionary.com/search/?dictCode=grammar-pron-guide-fr&q=${word}`;
          break;
        case 'fr-conjugations':
          url = `https://www.collinsdictionary.com/search/?dictCode=french-conjugation&q=${word}`;
          break;
        case 'fr-sentences':
          url = `https://www.collinsdictionary.com/search/?dictCode=french-sentences&q=${word}`;
          break;
        case 'en-de':
          url = `https://www.collinsdictionary.com/search/?dictCode=english-german&q=${word}`;
          break;
        case 'de-en':
          url = `https://www.collinsdictionary.com/search/?dictCode=german-english&q=${word}`;
          break;
        case 'de-grammar':
          url = `https://www.collinsdictionary.com/search/?dictCode=grammar-elg&q=${word}`;
          break;
        case 'de-conjugations':
          url = `https://www.collinsdictionary.com/search/?dictCode=german-conjugation&q=${word}`;
          break;
        case 'de-sentences':
          url = `https://www.collinsdictionary.com/search/?dictCode=german-sentences&q=${word}`;
          break;
        case 'en-it':
          url = `https://www.collinsdictionary.com/search/?dictCode=english-italian&q=${word}`;
          break;
        case 'it-en':
          url = `https://www.collinsdictionary.com/search/?dictCode=italian-english&q=${word}`;
          break;
        case 'it-grammar':
          url = `https://www.collinsdictionary.com/search/?dictCode=grammar-eli&q=${word}`;
          break;
        case 'it-conjugations':
          url = `https://www.collinsdictionary.com/search/?dictCode=italian-conjugation&q=${word}`;
          break;
        case 'it-sentences':
          url = `https://www.collinsdictionary.com/search/?dictCode=italian-sentences&q=${word}`;
          break;
        case 'en-es':
          url = `https://www.collinsdictionary.com/search/?dictCode=english-spanish&q=${word}`;
          break;
        case 'es-en':
          url = `https://www.collinsdictionary.com/search/?dictCode=spanish-english&q=${word}`;
          break;
        case 'es-grammar':
          url = `https://www.collinsdictionary.com/search/?dictCode=grammar-els&q=${word}`;
          break;
        case 'es-pronunciation':
          url = `https://www.collinsdictionary.com/search/?dictCode=grammar-pron-guide&q=${word}`;
          break;
        case 'es-conjugations':
          url = `https://www.collinsdictionary.com/search/?dictCode=spanish-conjugation&q=${word}`;
          break;
        case 'es-sentences':
          url = `https://www.collinsdictionary.com/search/?dictCode=spanish-sentences&q=${word}`;
          break;
        case 'en-pt':
          url = `https://www.collinsdictionary.com/search/?dictCode=english-portuguese&q=${word}`;
          break;
        case 'pt-en':
          url = `https://www.collinsdictionary.com/search/?dictCode=portuguese-english&q=${word}`;
          break;
        case 'pt-grammar':
          url = `https://www.collinsdictionary.com/search/?dictCode=grammar-elp&q=${word}`;
          break;
        case 'pt-conjugations':
          url = `https://www.collinsdictionary.com/search/?dictCode=portuguese-conjugation&q=${word}`;
          break;
        case 'en-hi':
          url = `https://www.collinsdictionary.com/search/?dictCode=english-hindi&q=${word}`;
          break;
        case 'hi-en':
          url = `https://www.collinsdictionary.com/search/?dictCode=hindi-english&q=${word}`;
          break;
        case 'en-zh':
          url = `https://www.collinsdictionary.com/search/?dictCode=english-chinese&q=${word}`;
          break;
        case 'zh-en':
          url = `https://www.collinsdictionary.com/search/?dictCode=chinese-english&q=${word}`;
          break;
        case 'en-zh-trad':
          url = `https://www.collinsdictionary.com/search/?dictCode=english-chinese_traditional&q=${word}`;
          break;
        case 'zh-trad-en':
          url = `https://www.collinsdictionary.com/search/?dictCode=chinese_traditional-english&q=${word}`;
          break;
        case 'en-ko':
          url = `https://www.collinsdictionary.com/search/?dictCode=english-korean&q=${word}`;
          break;
        case 'ko-en':
          url = `https://www.collinsdictionary.com/search/?dictCode=korean-english&q=${word}`;
          break;
        case 'en-ja':
          url = `https://www.collinsdictionary.com/search/?dictCode=english-japanese&q=${word}`;
          break;
        case 'ja-en':
          url = `https://www.collinsdictionary.com/search/?dictCode=japanese-english&q=${word}`;
          break;
        default:
          url = `https://www.collinsdictionary.com/search/?dictCode=english&q=${word}`;
      }
      break;
    case 'wiktionary':
      switch (resources.wiktionary.type) {
        case 'en':
          url = `https://en.wiktionary.org/w/index.php?search=${word}&title=Special:Search&wprov=acrw1_-1`;
          break;
        case 'fr':
          url = `https://fr.wiktionary.org/w/index.php?search=${word}&title=Spécial:Recherche&wprov=acrw1_-1`;
          break;
        case 'de':
          url = `https://de.wiktionary.org/w/index.php?search=${word}&title=Spezial:Suche&wprov=acrw1_-1`;
          break;
        case 'pl':
          url = `https://pl.wiktionary.org/w/index.php?search=${word}&title=Specjalna:Szukaj&wprov=acrw1_-1`;
          break;
        case 'ja':
          url = `https://ja.wiktionary.org/w/index.php?search=${word}&title=特別:検索&wprov=acrw1_-1`;
          break;
        case 'sv':
          url = `https://sv.wiktionary.org/w/index.php?search=${word}&title=Special:Sök&wprov=acrw1_-1`;
          break;
        case 'es':
          url = `https://es.wiktionary.org/w/index.php?search=${word}&title=Especial:Buscar&wprov=acrw1_-1`;
          break;
        case 'zh':
          url = `https://zh.wiktionary.org/w/index.php?search=${word}&title=Special:搜索&wprov=acrw1_-1`;
          break;
        case 'el':
          url = `https://el.wiktionary.org/w/index.php?search=${word}&title=Ειδικό:Αναζήτηση&wprov=acrw1_-1`;
          break;
        case 'ru':
          url = `https://ru.wiktionary.org/w/index.php?search=${word}&title=Служебная:Поиск&wprov=acrw1_-1`;
          break;
        default:
          url = `https://en.wiktionary.org/w/index.php?search=${word}&title=Special:Search&wprov=acrw1_-1`;
      }
      break;
    case 'dictionary':
      url = `https://www.dictionary.com/browse/${word}`;
      break;
    case 'thesaurus':
      url = `https://www.thesaurus.com/browse/${word}`;
      break;
    case 'thefreedictionary':
      const thefreedictionary = resources.thefreedictionary;
      let option;
      switch (thefreedictionary.option) {
        case 'word':
          option = 0;
          break;
        case 'startsWith':
          option = 1;
          break;
        case 'endsWith':
          option = 2;
          break;
        case 'text':
          option = 3;
          break;
        default:
          option = 0;
      }
      switch (thefreedictionary.type) {
        case 'dictionary':
          url = `https://www.thefreedictionary.com/_/search.aspx?tab=1&SearchBy=0&Word=${word}&TFDBy=${option}`;
          break;
        case 'thesaurus':
          url = `https://www.freethesaurus.com/_/search.aspx?tab=2048&SearchBy=0&Word=${word}&TFDBy=${option}`;
          break;
        case 'medical':
          url = `https://medical-dictionary.thefreedictionary.com/_/search.aspx?tab=4&SearchBy=0&Word=${word}&TFDBy=${option}`;
          break;
        case 'legal':
          url = `https://legal-dictionary.thefreedictionary.com/_/search.aspx?tab=2&SearchBy=0&Word=${word}&TFDBy=${option}`;
          break;
        case 'financial':
          url = `https://financial-dictionary.thefreedictionary.com/_/search.aspx?tab=256&SearchBy=0&Word=${word}&TFDBy=${option}`;
          break;
        case 'acronyms':
          url = `https://acronyms.thefreedictionary.com/_/search.aspx?tab=32&SearchBy=0&Word=${word}&TFDBy=${option}`;
          break;
        case 'idioms':
          url = `https://idioms.thefreedictionary.com/_/search.aspx?tab=1024&SearchBy=0&Word=${word}&TFDBy=${option}`;
          break;
        case 'encyclopedia':
          url = `https://encyclopedia2.thefreedictionary.com/_/search.aspx?tab=8&SearchBy=0&Word=${word}&TFDBy=${option}`;
          break;
        case 'wikipedia':
          url = `https://encyclopedia.thefreedictionary.com/_/search.aspx?tab=16&SearchBy=0&Word=${word}&TFDBy=${option}`;
          break;
        default:
          url = `https://www.thefreedictionary.com/_/search.aspx?tab=1&SearchBy=0&Word=${word}&TFDBy=${option}`;
      }
      break;
    // case 'cube':
    // case 'youglish':
    default:
      url = `https://dictionary.cambridge.org/search/english/direct/?q=${word}`;
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
// Make sync an option, not a default <------------------------------------
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
      'merriam-websterType': null,

      // Collins
      collinsContextMenu: null,
      collinsType: null,

      // Wiktionary
      wiktionaryContextMenu: null,
      wiktionaryType: null,

      // Dictionary.com
      dictionaryContextMenu: null,

      // Thesaurus.com
      thesaurusContextMenu: null,

      // The Free Dictionary
      thefreedictionaryContextMenu: null,
      thefreedictionaryType: null,
      thefreedictionaryOption: null,

      // CUBE
      // cubeContextMenu: null,

      // YouGlish
    });
    for (let resID of resIDs) {
      const res = resources[resID];
      const retrievedContextMenu = retrieved[`${resID}ContextMenu`];
      if (retrievedContextMenu != null) res.contextMenu = retrievedContextMenu;
      if (
        [
          'cambridge-dictionary',
          'vocabulary',
          'merriam-webster',
          'collins',
          'wiktionary',
          'thefreedictionary',
        ].includes(resID)
      ) {
        const retrievedType = retrieved[`${resID}Type`];
        if (retrievedType) res.type = retrievedType;
      }
      if (resID === 'thefreedictionary') {
        const retrievedOption = retrieved[`${resID}Option`];
        if (retrievedOption) res.option = retrievedOption;
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
