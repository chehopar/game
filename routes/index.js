var app = require('../app.js');

var passport = require('../core/passport.js');

app.get('/', function (req, res) {
    console.log(req.user);
    res.render('index.html', { title: 'It' });
});

app.get('/profile', passport.isAuthenticated, function (req, res) {
    res.render('profile.html');
});

require('./auth.js');
