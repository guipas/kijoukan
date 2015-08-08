var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function() {
  return gulp.src('less/custom.less')
    .pipe(less())
    .pipe(gulp.dest('css/'));
});

gulp.task("default", ["less"], function() {
  gulp.watch("./less/*", ["default"]);
});
