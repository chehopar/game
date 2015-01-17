var passport = require('passport');

var LocalStrategy   = require('passport-local').Strategy;

var app = require('../app.js');
// Passport integration

// dummy user
var user = {
        id: 1,
        email: 'admin@admin',
        password: 'password',
        name: 'Anna Sedokova'
    };

var users = { 1: user };

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

// used to deserialize the user
passport.deserializeUser(function(id, done) {
    var u = users[id];

    if (!u)
        return done(Error('no user'));

    return done(null, u);
});

passport.use('local-login', new LocalStrategy({
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true
}, function (req, email, password, done){
    if (user.email == email && user.password == password)
        return done(null, user);

    return done(null, false);
}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/login', function (req, res) {
    res.render('login.html');
});

app.post('/login', passport.authenticate('local-login', {
    successRedirect : '/profile', // redirect to the secure profile section
    failureRedirect : '/login' // redirect back to the signup page if there is an error
}));
