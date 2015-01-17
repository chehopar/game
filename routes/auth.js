var app = require('../app.js');

var passport = require('../core/passport.js');

app.get('/login', function (req, res) {
    res.render('login.html');
});

app.post('/login', passport.authenticate('local-login'), function (req, res) {
    if (req.user)
        return res.redirect('/profile');

    return res.redirect('/');
});

app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});
