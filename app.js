// require modules
var express = require('express');

// middleware
var morgan = require('morgan'),
    bodyParser = require('body-parser');

// instantiate app
var app = express();

// logger
app.use(morgan('dev'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// static middleware
app.use(express.static('public'));

// setup view rendering
require('./core/engine.js')(app);

app.get('/', function (req, res) {
    res.render('index.html', { title: 'It' });
});

var port = 4040;

// bind network on given port

var server = app.listen(port, function () {
        var host = server.address().address;
        console.log('Example app listening at http://%s:%s', host, port);
    });
