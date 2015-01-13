// require modules

var express = require('express');

// instantiate app

var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

var port = 4040;

// bind network on given port

var server = app.listen(port, function () {
        var host = server.address().address;
        console.log('Example app listening at http://%s:%s', host, port);
    });