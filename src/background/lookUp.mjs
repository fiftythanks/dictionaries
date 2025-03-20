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

import { getResource } from './resService';

export default function lookUp(info) {
  const word = encodeURI(info.selectionText);
  let url;
  const id = info.menuItemId;
  const res = getResource(id);
  switch (id) {
    case 'cambridgeDictionary':
      switch (res.type) {
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
    case 'merriamWebster':
      switch (res.type) {
        case 'dictionary':
          url = `https://www.merriamWebster.com/dictionary/${word}`;
          break;
        case 'thesaurus':
          url = `https://www.merriamWebster.com/thesaurus/${word}`;
          break;
        default:
          url = `https://www.merriamWebster.com/dictionary/${word}`;
      }
      break;
    case 'collins':
      switch (res.type) {
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
      switch (res.type) {
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
    case 'thefreedictionary': {
      let option;
      switch (res.option) {
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
      switch (res.type) {
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
    }
    // case 'cube':
    // case 'youglish'
    // case 'urban'
    // case 'wikipedia
    default:
      url = `https://dictionary.cambridge.org/search/english/direct/?q=${word}`;
  }
  const width = 750;
  const height = 650;
  const left = window.screen.width / 2 - width / 2;
  const top = window.screen.height / 2 - height / 2;
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
