var app = require('../app.js');

app.get('/', function (req, res) {
    console.log(req.user);
    res.render('index.html', { title: 'It' });
});

require('./auth.js');
