var typographicAbbrs = function(input, locale) {
  var input = input || '';
  var localeAbbrs = abbrDB[locale] || [];

  localeAbbrs.forEach(function(localeAbbr) {
    input = input.replace(localeAbbr.pattern, localeAbbr.abbreviation);
  });

  return input;
};
