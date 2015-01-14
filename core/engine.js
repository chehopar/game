// template engine
var hbs = require('hbs');

// specify directory to extract partials
hbs.registerPartials(__dirname + '/../views/partials');

module.exports = function (app) {
    // define template engine
    app.engine('html', hbs.__express);

    app.set('views', __dirname + '/../views');
    app.set('view engine', 'html');
};
