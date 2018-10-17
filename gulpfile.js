var gulp = require('gulp');

var gutil  = require('gulp-util');
var compass = require('gulp-compass');
var cssmin = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');

var paths = {
    js: ['js/uikit.js', 'js/uikit-icons.js'],
    css: ['css/uikit.css', 'css/uikit-rtl.css']
};

var dist = {
    js: ['js/uikit.min.js','js/uikit-icons.min.js'],
    css: ['css/uikit.min.css', 'css/uikit-rtl.min.css']
};

gulp.task('build:css', function () {
    for (var i = 0; i < 2; i++) {
        gulp.src(paths.css[i])
            .pipe(cssmin())
            .pipe(rename(dist.css[i]))
            .pipe(gulp.dest('css/'));
    }
});

gulp.task('build:js', function() {
    for (var i = 0; i < 2; i++) {
        gulp.src(paths.js[i])
            .pipe(jshint())
            .pipe(uglify())
            .pipe(rename(dist.js[i]))
            .pipe(gulp.dest('js/'));
    }
});

gulp.task('default', function() {
    gulp.start('build:css', 'build:js');
});