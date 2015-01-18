var path = require('path');

var pathMap = module.exports = {};

var baseDir = path.join(__dirname, '../');

pathMap.assets = path.join(baseDir, './assets');

pathMap.favicon = path.join(pathMap.assets, './favicon/favicon.ico');
