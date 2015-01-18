// middleware
var bodyParser = require('body-parser'),
    methodOverride = require('method-override');

var favicon = require('serve-favicon'),
    serveStatic = require('serve-static');

var app = require('../app.js');

var pathMap = require('../config/').pathMap;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// use HTTP verbs with fallback on "X-HTTP-Method-Override" header
app.use(methodOverride());

// static middleware
app.use(serveStatic('assets'));
app.use(serveStatic('public'));

// serve favicon
app.use(favicon(pathMap.favicon));
