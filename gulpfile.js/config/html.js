var config = require('./');

module.exports = {
   source : `${config.sourcePath}html/**/*`,
   dest: `${config.buildPath}`
}