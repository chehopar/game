// require modules
var express = require('express');

// template engine
var hbs = require('hbs');

// middleware
var morgan = require('morgan');

// instantiate app
var app = express();

// define template engine
app.engine('html', hbs.__express);

app.set('views', __dirname + '/views');
app.set('view engine', 'html');

// logger
app.use(morgan('dev'));

// static middleware
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('index.html', { title: 'It' });
});

var port = 4040;

// bind network on given port

var server = app.listen(port, function () {
        var host = server.address().address;
        console.log('Example app listening at http://%s:%s', host, port);
    });
