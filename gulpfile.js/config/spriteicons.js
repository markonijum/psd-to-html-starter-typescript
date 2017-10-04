const config = require('./');

var spritename = '_sprite';
var ext = 'scss';
// var copyFiles = ['./src/images/sprites/*.' + ext];
// var pasteFolder = './src/css/sprites/';
// var imgsForSpriteFolder = 'imgsForSprite';

module.exports = {
    source: `${config.assetsPath}icons/*.png`,
    dest: `${config.assetsPath}img/sprites`,
    settings: {
        imgName: spritename + '.png',
        cssName: spritename + '.' + ext,
        cssTemplate: './gulpfile.js/spriteTemplates/template.scss.handlebars',
        imgPath: '../img/sprites/' + spritename + '.png'
      }
};