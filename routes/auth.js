var app = require('../app.js');

var passport = require('../core/passport.js');

app.use(function(req, res, next){
    res.locals.user = req.user;
    next();
});

app.get('/login', function (req, res) {
    res.render('login.html');
});

app.post('/login', passport.authenticate('local-login'), function (req, res) {
    if (req.user)
        return res.redirect('/profile');

    return res.redirect('/');
});
