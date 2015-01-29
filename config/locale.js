var options = module.exports = {};

// setup some locales - other locales default to en silently
options.locales = ['en', 'de'];

// you may alter a site wide default locale
options.defaultLocale = 'de';

// sets a custom cookie name to parse locale settings from  - defaults to NULL
options.cookie = 'lang';

// where to store json files - defaults to './locales' relative to modules directory
options.directory = './locales';

// whether to write new locale information to disk - defaults to true
options.updateFiles = false;

// what to use as the indentation unit - defaults to "\t"
options.indent = "\t";

// enable object notation
options.objectNotation = false;
