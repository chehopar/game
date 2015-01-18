// Load driver
var Redis   = require('redis');

var dburi   = require('dburi');

// Get options from configuration file
var config  = require('../config');

var options = dburi(config.redis);

//
function Client() {
    var client  = Redis.createClient(options.port, options.host);

    if (options.password)
        client.auth(options.password);

    if (options.db) {
        client.select(options.db);
        client.on('connect', function() {
            client.send_anyways = true;
            client.select(options.db);
            client.send_anyways = false;
        });
    }

    return client;
};


// expose Client with estabilished connection to Redis server
module.exports = Client();
