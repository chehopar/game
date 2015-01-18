// require modules
var express = require('express');

// middleware
var morgan = require('morgan'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    cookieParser = require('cookie-parser'),
    session = require('express-session');

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

app.use(cookieParser());

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

// static middleware
app.use(express.static('assets'));
app.use(express.static('public'));

// setup view rendering
require('./core/engine.js');
require('./core/passport.js');

require('./routes');

require('./core/errors.js');

var port = 4040;

// bind network on given port

var server = app.listen(port, function () {
        var host = server.address().address;
        console.log('Example app listening at http://%s:%s', host, port);
    });
