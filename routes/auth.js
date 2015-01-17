var router = require('./index.js');

var passport = require('../core/passport.js');

router.get('/login', function (req, res) {
    res.render('login.html');
});

router.post('/login', passport.authenticate('local-login', {
    successRedirect : '/profile', // redirect to the secure profile section
    failureRedirect : '/login' // redirect back to the signup page if there is an error
}));
