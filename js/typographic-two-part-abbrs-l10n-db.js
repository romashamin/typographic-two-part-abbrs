// Language codes: https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes

var abbrDB = {

  // Russian
  'ru': [
    { 'pattern': /т\.д\./gim,   'abbreviation': 'т. д.',   'fullForm': 'и так далее' },
    { 'pattern': /т\.п\./gim,   'abbreviation': 'т. п.',   'fullForm': 'и тому подобное' },
    { 'pattern': /т\.е\./gim,   'abbreviation': 'т. е.',   'fullForm': 'то есть' },
    { 'pattern': /ст\.л\./gim,  'abbreviation': 'ст. л.',  'fullForm': 'столовая ложка' },
    { 'pattern': /ч\.л\./gim,   'abbreviation': 'ч. л.',   'fullForm': 'чайная ложка' },
    { 'pattern': /н\.ст\./gim,  'abbreviation': 'н. ст.',  'fullForm': 'новый стиль' },
    { 'pattern': /ст\.ст\./gim, 'abbreviation': 'ст. ст.', 'fullForm': 'старый стиль' },
    { 'pattern': /н\.э\./gim,   'abbreviation': 'н. э.',   'fullForm': 'нашей эры' },
    { 'pattern': /ж\.д\./gim,   'abbreviation': 'ж. д.',   'fullForm': 'железная дорога' },
    { 'pattern': /с\.х\./gim,   'abbreviation': 'с. х.',   'fullForm': 'сельское хозяйство' },
    { 'pattern': /ед\.ч\./gim,  'abbreviation': 'ед. ч.',  'fullForm': 'единственное число' },
    { 'pattern': /мн\.ч\./gim,  'abbreviation': 'мн. ч.',  'fullForm': 'множественное число' }
  ],

  // English, US; English, Canada
  'en-us': [
    { 'pattern': /i\.\se\./gim, 'abbreviation': 'i.e.', 'fullForm': 'id est' },
    { 'pattern': /e\.\sg\./gim, 'abbreviation': 'e.g.', 'fullForm': 'exempli gratia' },
    { 'pattern': /a\.\sm\./gim, 'abbreviation': 'a.m.', 'fullForm': 'ante meridian' },
    { 'pattern': /p\.\sm\./gim, 'abbreviation': 'p.m.', 'fullForm': 'post meridian' }
  ]
};
