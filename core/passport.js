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

/**
 * Unless authenticated, skip entire route handlers
 * up to error handler.
 *
 * @param  {Request}    req
 * @param  {Response}   res
 * @param  {Function}   next
 * @return {Boolean}
 */

module.exports.isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated())
        return next();

    // remember url of resource user was trying to access
    var data = {
            url: req.url
        };

    var err = Miscue(401, data);

    return next(err);
};
