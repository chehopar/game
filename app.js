// require modules
var express = require('express');

// middleware
var morgan = require('morgan'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

var favicon = require('serve-favicon');

var config = require('./config');

// instantiate app
var app = module.exports = express();

// logger
app.use(morgan('dev'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// use HTTP verbs with fallback on "X-HTTP-Method-Override" header
app.use(methodOverride());

// static middleware
app.use(express.static('assets'));
app.use(express.static('public'));

app.use(favicon(__dirname + '/public/artwork/favicon/favicon-32.ico'));

// setup view rendering
require('./core/engine.js');
require('./core/session.js');
require('./core/passport.js');

require('./routes');

require('./core/errors.js');

// bind network on given port
app.listen(config.port, function () {
    console.log('Example app listening at http://%s:%s', config.host, config.port);
});
