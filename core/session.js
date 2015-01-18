var cookieParser = require('cookie-parser'),
    session = require('express-session');

var app = require('../app.js');

var config = require('../config');

app.use(cookieParser());

app.use(session(config.session));
