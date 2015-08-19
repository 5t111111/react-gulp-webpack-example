var gulp = require('gulp');
var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config.js');

gulp.task('cleanBuild', function (cb) {
  var rimraf = require('rimraf');
  rimraf('build/', cb);
});

gulp.task('copyIndex', ['cleanBuild'], function () {
  return gulp.src('source/index.html')
  .pipe(gulp.dest('build/'));
});

gulp.task('build', ['copyIndex'], function (cb) {
  return gulp.src('source/entry.js')
  .pipe(webpack(webpackConfig))
  .pipe(gulp.dest(''));
});

gulp.task('watch', function() {
  gulp.watch(['source/*.js'], ['build']);
  gulp.watch(['source/*.jsx'], ['build']);
  gulp.watch(['source/*.html'], ['build']);
});

gulp.task('default', ['build', 'watch']);
