var cookieParser = require('cookie-parser'),
    session = require('express-session');

var redisdb = require('../transports/redis.js');

var RedisStore = require('connect-redis')(session)

var app = require('../app.js');

var options = require('../config').session;

options.store = new RedisStore({ client: redisdb });

app.use(cookieParser());

app.use(session(options));
