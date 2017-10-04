const gulp = require('gulp');
const templates = require('../config/templates');
const html = require('../config/html');
const styles = require('../config/styles');
const images = require('../config/images');
const svgSprite = require('../config/svgSprite');
const plugins = require('gulp-load-plugins')();

const watchTask = () => {
    // plugins.watch(templates.source, () => { gulp.start('pug:watch'); });
    plugins.watch(html.source, () => { gulp.start('html:watch'); });
    plugins.watch(styles.base, () => { gulp.start('styles'); });
    plugins.watch(images.source, () => { gulp.start('images'); });
    plugins.watch(svgSprite.source, () => { gulp.start('svg:sprite'); });
};

gulp.task('watch', ['browserSync', 'setWatch', 'html', 'webpack:watch'], watchTask);
module.exports = watchTask;
