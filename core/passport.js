// load `passport` and expose
var passport = module.exports = require('passport');

var Miscue = require('decanat-miscue');

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

passport.serializeUser(function(user, done) {
    done(null, '1');
});

// used to deserialize the user
passport.deserializeUser(function(id, done) {
    if (!id)
        return done(Error('no user'));

    return done(null, user);
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

// make user info always accessable in templates
app.use(function(req, res, next){
    res.locals.user = req.user;
    next();
});


module.exports.isAuthenticated = function (req, res, next) {
    var err = req.isAuthenticated()
            ? void 0
            : Miscue(401, req.url);

    return next(err);
};
