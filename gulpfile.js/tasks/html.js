var gulp =  require('gulp');
var config = require('../config/html');

const htmlTask = () => gulp.src(config.source)
.pipe(gulp.dest(config.dest));

gulp.task('html',htmlTask);

module.exports = htmlTask;