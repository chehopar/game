
// template engine
var hbs = require('hbs');
// i18n engine
var i18n = require('i18n');


var app = require('../app.js');

var config = require('../config/locale.js');


// apply configuration
i18n.configure(config);

// define template engine
app.engine('html', hbs.__express);

app.set('views', __dirname + '/../views');
app.set('view engine', 'html');

// i18n init parses req for language headers, cookies, etc.
app.use(i18n.init);

// specify directory to extract partials
hbs.registerPartials(__dirname + '/../views/partials');

// register hbs helpers in res.locals' context which provides this.locale
hbs.registerHelper('__', function () {
    return i18n.__.apply(null, arguments);
});

hbs.registerHelper('__n', function () {
  return i18n.__n.apply(null, arguments);
});
