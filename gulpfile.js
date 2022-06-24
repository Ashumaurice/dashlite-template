const { src, dest, parallel , series , watch } = require('gulp');
// Gulp Sass
const sass = require('gulp-sass')(require('node-sass'));
const fileinclude = require('gulp-file-include');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const minify = require('gulp-minifier');
const strip = require('gulp-strip-comments');

// sass.compiler = require('node-sass'); // no-need for gulp-sass v5+

var node_path = '../..';


function html(cb) {
  src('public/html/**')
  .pipe(dest('dist/html'));

  cb();
}

function scss(cb) {
  src(['public/assets/scss/*.scss'])
  // .pipe(sourcemaps.init())               // If you want generate source map.
  .pipe(sass().on('error', sass.logError))  // uses {outputStyle: 'compressed'} in saas() for minify css
  // .pipe(sourcemaps.write('./'))          // If you want generate source map.
  .pipe(dest('dist/assets/public/assets/css'));

  // EDITORS
  src(['public/assets/scss/editors/*.scss'])
  // .pipe(sourcemaps.init())                                           // If you want generate source map.
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))   // remove {outputStyle: 'compressed'} from saas() if do not want to minify css
  // .pipe(sourcemaps.write('./'))                                      // If you want generate source map.
  .pipe(dest('dist/public/assets/css/editors'));

  src(['public/assets/scss/libs/*.scss'])
  // .pipe(sourcemaps.init())                                           // If you want generate source map.
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))   // remove {outputStyle: 'compressed'} from saas() if do not want to minify css
  // .pipe(sourcemaps.write('./'))                                      // If you want generate source map.
  .pipe(dest('dist/public/assets/css/libs'));

  // SKINS
  src(['public/assets/scss/skins/*.scss'])
  // .pipe(sourcemaps.init())               // If you want generate source map.
  .pipe(sass().on('error', sass.logError))  // uses {outputStyle: 'compressed'} in saas() for minify css
  // .pipe(sourcemaps.write('./'))          // If you want generate source map.
  .pipe(dest('dist/public/assets/css/skins'));

  cb();
}

function js_scripts(cb) {
  src(['public/assets/js/*.js','!public/assets/js/bundle.js'])
  // .pipe(uglify())                        // If you minify the code.
  .pipe(dest('dist/public/assets/js'));

  src(['public/assets/js/charts/*.js'])
  // .pipe(uglify())                        // If you minify the code.
  .pipe(dest('dist/public/assets/js/charts'));

  src(['public/assets/js/apps/*.js'])
  // .pipe(uglify())                        // If you minify the code.
  .pipe(dest('dist/public/assets/js/apps'));

  cb();
}

function js_bundle(cb) {
  src('public/assets/js/bundle.js')
  .pipe(fileinclude({
    prefix: '@@',
    basepath: '@file',
    context: { build: 'dist', nodeRoot: node_path }
  }))
  .pipe(strip())
  .pipe(minify({ minify: true, minifyJS: { sourceMap: false } }))     // Disable, if you dont want to minify bundle file.
  .pipe(dest('dist/public/assets/js'));

  src(['public/assets/js/libs/**', '!public/assets/js/libs/editors/skins/**'])
  .pipe(fileinclude({
    prefix: '@@',
    basepath: '@file',
    context: { build: 'dist', nodeRoot: node_path }
  }))
  .pipe(strip())
  .pipe(minify({ minify: true, minifyJS: { sourceMap: false } }))     // Disable, if you dont want to minify bundle file.
  .pipe(dest('dist/public/assets/js/libs'));

  src('public/assets/js/libs/editors/skins/**').pipe(dest('dist/public/assets/js/libs/editors/skins'));

  cb();
}

function assets(cb){
  src(['public/assets/images/**'])
  .pipe(dest('dist/public/images'));

  src(['public/assets/**', '!public/assets/js/**', '!public/assets/css/**'])
  .pipe(dest('dist/public/assets'));

  cb();
}

exports.default = series(html, scss, js_scripts, js_bundle, assets);

exports.build = series(html, scss, js_scripts, js_bundle, assets);

exports.develop = function() {
    watch(['public/assets/scss/*.scss','public/assets/scss/**'], scss)
    watch(['public/assets/html/*.html','public/assets/html/**/*.html'], html)
    watch(['public/assets/images/**', 'public/assets/**'], assets)
    watch(['public/assets/js/*.js','public/assets/js/charts/*.js', 'public/assets/js/apps/*.js', '!public/assets/js/bundle.js'], js_scripts)
    watch(['public/assets/js/libs/**','public/assets/js/bundle.js'], js_bundle)
};
