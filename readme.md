# 🏄 Front-end-web starter based on TotallyStatical site generator

https://github.com/aderaaij/totallystatical

This is extended version of TotallyStatical site generator github project.

## Requirements:

* [Node]( https://nodejs.org/download/ )

## Installation:
* run `yarn install` to install all node dependencies
* run `gulp` to build the app and start watching!
* run `gulp build:production` to create a production build

## Features:
* **💃 Sass/CSS**:
  * Blazing fast Node Sass(libsass) parser
  * Sass Sourcemaps for development
  * CSS prefixing with [autoprefixer](https://github.com/postcss/autoprefixer)
  * CSS minifying with [cssnano](http://cssnano.co/)
* **🤓 Javascript**:
  * ES6 support with babel and webpack
  * Easy babel presets with `babel-preset-env`: https://github.com/babel/babel-preset-env
  * Source maps
* **🍕 Templating**:
  * [Pug templating language](https://pugjs.org/) with partials support
  * Easy mixin for SVG sprite inclusion
* **👩‍💻 Development**:
  * File watching and livereloading synchronized across multiple browsers/devices with [BrowserSync](https://www.browsersync.io/)
  * Source maps
* **🚀 Deployment**:
  * Blazing fast FTP deploys with [vinyl-ftp](https://www.npmjs.com/package/vinyl-ftp)
  * SFTP deployment with [gulp-sftp](https://www.npmjs.com/package/vinyl-ftp)
* **📦 Sass Packages**:
  * Includes the following Sass packages by default:
    * [Susy v3]( http://susy.oddbird.net/ )
    * [Normalize]( https://github.com/JohnAlbin/normalize-scss )
    * [Breakpoint]( http://breakpoint-sass.com/ )
* **📷 Images**:
  * Image minifying with imagemin
  * Compiles SVG sprites from all SVG files in the `assets/sprite` directory
  * Easy Pug mixin to create `<use>` code for SVG sprite icons
* **🐍 Revisioning / cache busting**:
  Cache busting static assets for production with [gulp-rev](https://github.com/sindresorhus/gulp-rev)

## 👩‍💻 Usage 
Clone this package to a local folder and run `npm install` to install all the node dependencies.

### Development mode
To start developing, run `gulp` from the terminal. This default command will build all your assets in development mode, starts the watch command and a browsersync server which is available on `127.0.0.1:3000`.

### Production
Run `gulp build:production` to build your production app. This will build and minify your assets into the `/app/build` folder. This will also add a hash to your assets for cachebusting purposes. You can run `gulp server` to start an express server from the buildfolder at anytime. 

### Deployment
Run either `gulp deloy:ftp` or `gulp deply:sftp` to deploy through FTP or SFTP. To configure, create a `.ftppass.json` file in the root of your project(see `.ftppass-example`)  and fill in the right details. In either `/gulpfile.js/tasks/deployFTP` or `/gulpfile.js/tasks/deploySFTP`, rename the line `var ftppass = require('../../.ftppass-example')` to `var ftppass 			= require('../../.ftppass')` and deploy like the wind.

## Tasks
All tasks are defined in `gulpfile.js/tasks`. Most tasks have a corresponding config file in `gulpfile.js/config`. Some share a config file and some just use `gulpfile.js/index.js`

### 🏃🏽‍ default
Cleans, builds app and enables watch tasks

### 🏗️ build:production
Builds app with minified assets. Runs the following tasks:
* [`clean`](#clean)
* [`images`](#images)
* [`styles:production`](#stylesproduction)
* [`webppack:production`](#scripts)
* [`templates`](#templates)

### 👀 watch 

Run `gulp watch` to start webserver, watch files and livereload with browsersync. Uses the `gulp-watch` plugin to correctly handle new files while watching.

Runs the tasks:
* [`browsersync`](#browsersync)
* [`setwatch`](#setwatch)
* [`templates`](#templates)

Uses:
* `gulp-watch`

### 🗑 clean
Deletes entire build folder.

Plugins:
* `del` plugin

### 📷 images 
Minifies images and distributes them to the build asset folder

Plugins:
* `gulp-images`
* `gulp-changed`

### 👯 svg:sprites
Create a SVG sprite from icons in the configured folder

Plugins:
* `gulp-images`
* `gulp-svgstore`

### 👀 webpack:watch
Watches, prefixes, compiles, minifies and all the other magical JS things.
* `webpack`
* `babel-preset-env`

### 👀 webpack:production
Prefixes, compiles, hashes, minifies and all the other magical JS things
* `webpack`
* `babel-preset-env`

### 💃 styles 
Compile `/sass` folder to css, autoprefix and add sourcemaps for debugging. In the corresponding config file it's possible to define node modules with `includePaths` to easily define them with `@imports` in your .scss file. By default, the following paths are added:

* `./node_modules/normalize-scss/sass/`
* `./node_modules/susy/sass/`
* `./node_modules/breakpoint-sass/stylesheets/`

Plugins:
* `gulp-sass`
* `gulp-sourcemaps`
* `gulp-autoprefixer`
* `gulp-if`

### 💃 styles:production
Compile `/sass` to css and autoprefix. Doesn't minify as the css files will be rev'ed and minified after compilation.

Plugins:
* `gulp-sass`
* `gulp-autoprefixer`

### 🐶 templates
Generates html files from pug template. Every pug template prefixed with an underscore will not be built into a html file. To speed up the templating process `gulp-pug-inheritance` is used to check which template is dependent on which partial.

Plugins:
* `gulp-pug`
* `gulp-pug-inheritance`
* `gulp-changed`
* `gulp-if`
* `gulp-filter`

### ⚡️ browsersync
Start browsersync server

Plugins:
* `browser-sync`

### ➡️👀 setwatch 
Sets a global `isWatching` variable to `true`. Use to execute certain tasks, functions or configurations only when `gulp watch` is running.

## 💾 Server
Start an express server on `localhost:5000` from the build folder. Convinient for checking out your production site
