var path = require('path');

var pathMap = module.exports = {};

var baseDir = path.join(__dirname, '../');

pathMap.assets  = path.join(baseDir, './assets');
pathMap.favicon = path.join(pathMap.assets, './favicon/favicon.ico');

pathMap.views    = path.join(baseDir, './views');
pathMap.partials = path.join(pathMap.views, './partials');

pathMap.locales = path.join(baseDir, './locales');

