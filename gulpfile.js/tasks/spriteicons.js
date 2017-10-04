var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');
var config = require('../config/spriteicons');

const makeSpriteTask = () => gulp.src(config.source)
.pipe(spritesmith(config.settings))
.pipe(gulp.dest(config.dest));

gulp.task('makeSprite',makeSpriteTask);

module.exports = makeSpriteTask;