// require modules
var express = require('express');

// middleware
var morgan = require('morgan'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    cookieParser = require('cookie-parser'),
    session = require('express-session');

var passport = require('passport');

var LocalStrategy   = require('passport-local').Strategy;


// instantiate app
var app = express();

// logger
app.use(morgan('dev'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// use HTTP verbs with fallback on "X-HTTP-Method-Override" header
app.use(methodOverride());

app.use(cookieParser());

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

// static middleware
app.use(express.static('public'));

// setup view rendering
require('./core/engine.js')(app);

// Passport integration

// dummy user
var user = {
        id: 1,
        email: 'admin@admin',
        password: 'password',
        name: 'Anna Sedokova'
    };

var users = { 1: user };

app.use(passport.initialize());
app.use(passport.session());

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
    if (user.email == 'email' && user.password == 'password')
        return done(null, user);

    return done(null, false);
}));

app.get('/login', function (req, res) {
    res.render('login.html');
});

app.post('/login', passport.authenticate('local-login', {
    successRedirect : '/profile', // redirect to the secure profile section
    failureRedirect : '/login' // redirect back to the signup page if there is an error
}));


app.get('/', function (req, res) {
    res.render('index.html', { title: 'It' });
});

var port = 4040;

// bind network on given port

var server = app.listen(port, function () {
        var host = server.address().address;
        console.log('Example app listening at http://%s:%s', host, port);
    });
