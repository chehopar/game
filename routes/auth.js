var qs = require('querystring');

var app = require('../app.js');

var passport = require('../core/passport.js');

app.get('/login', function (req, res) {
    res.render('login.html');
});

app.post('/login', passport.authenticate('local-login'), function (req, res) {

    if (!req.isAuthenticated())
        return res.redirect(req.url);

    var url = req.url
            ? req.query.url
            : '/profile';

    return res.redirect(url);
});

app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});
