var pathMap = require('./pathmap.js');

// Define and expose `config`
var config = module.exports = {};

config.env = process.env.NODE_ENV || 'development';

config.host = process.env.HOST || '0.0.0.0';
config.port = process.argv[2] || process.env.PORT || 9000;

// sessions
config.session = require('./session.js');

// view engine
config.engine = {
    extension:  'html',
    views:      pathMap.views,
    partials:   pathMap.partials
};

// locales
config.locale = require('./locale.js');

// Redis connection
config.redis = process.env.REDIS_URL || 'redis://127.0.0.1:6379';

// expose `pathMap`
config.pathMap = pathMap;
