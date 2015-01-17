var app = require('../app.js');

app.get('/', function (req, res) {
    console.log(req.user);
    res.render('index.html', { title: 'It' });
});

app.get('/profile', function (req, res) {
    res.render('profile.html');
});

require('./auth.js');
