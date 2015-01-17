// template engine
var hbs = require('hbs');

var app = require('../app.js');

// specify directory to extract partials
hbs.registerPartials(__dirname + '/../views/partials');

// define template engine
app.engine('html', hbs.__express);

app.set('views', __dirname + '/../views');
app.set('view engine', 'html');
