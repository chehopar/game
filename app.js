// require modules
var express = require('express');

var morgan = require('morgan');

var config = require('./config');

// instantiate app
var app = module.exports = express();

// logger
app.use(morgan('dev'));

require('./core/middleware.js');

require('./core/engine.js');
require('./core/session.js');
require('./core/passport.js');

require('./routes');

require('./core/errors.js');

// bind network on given port
app.listen(config.port, function () {
    console.log('Example app listening at http://%s:%s', config.host, config.port);
});
