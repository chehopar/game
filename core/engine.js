// template engine
var hbs = require('hbs');

module.exports = function (app) {
    // define template engine
    app.engine('html', hbs.__express);

    app.set('views', __dirname + '/../views');
    app.set('view engine', 'html');
};
