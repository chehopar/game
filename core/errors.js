var qs = require('querystring');

var app = require('../app.js');

app.use(function(err, req, res, next){
    if (err.code == 401)
        return authRequired(err, req, res);

    res.status(500).send('Something broke!');
});

/**
 * Promt user login.
 * @param  {Miscue}     err
 * @param  {Request}    req
 * @param  {Response}   res
 */

function authRequired (err, req, res) {
    var url = '/login?' + qs.stringify(err.data);
    res.redirect(url);
}
