var gulp = require('gulp');
var webpack = require('webpack-stream');
var del = require('del');
var webpackConfig = require('./webpack.config.js');

var entry = "./source/entry.jsx";

gulp.task('clean', function () {
  return del(['build/**/*']);
});

gulp.task('index', ['clean'], function () {
  return gulp.src('source/index.html')
  .pipe(gulp.dest('build/'));
});

gulp.task('webpack', ['index'], function () {
  return gulp.src(entry)
  .pipe(webpack(webpackConfig))
  .pipe(gulp.dest(''));
});

gulp.task('watch', function() {
  gulp.watch(['source/*.js'], ['webpack']);
  gulp.watch(['source/*.jsx'], ['webpack']);
  gulp.watch(['source/*.html'], ['webpack']);
});

gulp.task('default', ['webpack', 'watch']);
