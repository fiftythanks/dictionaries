/* eslint-disable prefer-arrow-callback */
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

import './style.css';

const cambridgeDictionary = document.querySelector('#cambridge-dictionary');
const collins = document.querySelector('#collins');
const dictionary = document.querySelector('#dictionary');
const merriamWebster = document.querySelector('#merriam-webster');
const thefreedictionary = document.querySelector('#thefreedictionary');
const thesaurus = document.querySelector('#thesaurus');
const vocabulary = document.querySelector('#vocabulary');
const wiktionary = document.querySelector('#wiktionary');

const resources = [
  cambridgeDictionary,
  collins,
  dictionary,
  merriamWebster,
  thefreedictionary,
  thesaurus,
  vocabulary,
  wiktionary,
];

resources.forEach((res, i) => {
  res.addEventListener('change', function check() {
    res.removeEventListener('change', check);
    const summary = document.querySelector(`label[for="${res.id}"] > .summary`);
    summary.onclick = (e) => {
      e.preventDefault();
      summary.onclick = null;
      document.onclick = null;
      res.checked = false;
      res.addEventListener('change', check);
    };
    const otherRes = resources.toSpliced(i, 1);
    document.onclick = (e) => {
      if (otherRes.includes(e.target)) {
        summary.onclick = null;
        document.onclick = null;
        res.addEventListener('change', check);
      }
    };
  });
});
