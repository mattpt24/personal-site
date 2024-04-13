
// GULP 
const gulp = require('gulp');
const {
  src,
  dest,
  watch,
  series
} = require('gulp');




// SASS COMPILER
const sass = require('gulp-sass')(require('sass'));

// CSS MINIFIER
const minifyCSS = require('gulp-clean-css');





// BABEL
const babel = require('gulp-babel');

// COMBINE JS FILES
const concat = require('gulp-concat');

// JS MINIFIER
const minifyJS = require('gulp-minify');









// SASS COMPILER // CSS MINIFIER // AUTO PREFIXER
function buildStyles() {
  return gulp.src('build/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('./dist/css'));
  }



  // BABEL
  function buildJavascript() {
    return gulp.src('./build/js/*.js')
      .pipe(babel({
        presets: ['@babel/env'],
      }))
      .pipe(concat('script.js'))
      .pipe(minifyJS())
      .pipe(gulp.dest('./dist/js'));
  }




  // LIVE WATCH
  function watchFiles() {
    watch('./build/**/*.scss', buildStyles);
    watch('./build/**/*.js', buildJavascript);
  }






exports.buildStyles = series(buildStyles);
exports.buildJavascript = series(buildJavascript);
exports.watchFiles = series(watchFiles);

exports.default = series(watchFiles, buildStyles, buildJavascript);


