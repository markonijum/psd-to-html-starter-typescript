const gulp = require('gulp');
const browserSync = require('browser-sync');

gulp.task('html:watch', ['html'], browserSync.reload);