var path = require('path');

var pathMap = module.exports = {};

// path to modules directory
var baseDir = path.join(__dirname, '../');


pathMap.assets  = basePath('./assets');
pathMap.favicon = basePath('./favicon/favicon.ico', pathMap.assets);

pathMap.views    = basePath('./views');
pathMap.partials = basePath('./partials', pathMap.views);

pathMap.locales = basePath('./locales');


/**
 * Return absolute location of given `location` relative to `base`.
 *
 * If `base` is ommited, use modules directory as default.
 *
 * @param  {String} location
 * @param  {String} base [optional]
 * @return {String}
 */

function basePath(location, base) {
    base = base || baseDir;
    return path.join(base, location);
}
