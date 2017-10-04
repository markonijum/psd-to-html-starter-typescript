var gulp =  require('gulp');
var config = require('../config/html');
var htmlmin = require('gulp-htmlmin');
// var plugins = require('gulp-load-plugins');

const htmlTaskProduction = () => gulp.src(config.source)
.pipe(htmlmin({collapseWhitespace: true}))
.pipe(gulp.dest(config.dest));

gulp.task('html:production',htmlTaskProduction);

module.exports = htmlTaskProduction;