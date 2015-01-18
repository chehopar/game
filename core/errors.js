var qs = require('querystring');

var Miscue = require('decanat-miscue');

var app = require('../app.js');

app.use(function(req, res, next){
    var err = Miscue(404, { url: req.url });
    next(err);
});


app.use(function(err, req, res, next){
    if (err.code == 401)
        return authRequired(err, req, res);
    if (err.code == 404)
        return notFound(err, req, res);

    res.status(500).send('Something broke!');
});

/**
 * Promt user login.
 *
 * @param  {Miscue}     err
 * @param  {Request}    req
 * @param  {Response}   res
 */

function authRequired (err, req, res) {
    var url = '/login?' + qs.stringify(err.data);
    res.redirect(url);
}


function notFound (err, req, res) {
    res.status(404);

    if (req.accepts('html'))
        return res.render('errors/404.html', err.data);
    if (req.accepts('json'))
        return res.send(err.data);

    res.type('txt')
        .send('Not found');
}
