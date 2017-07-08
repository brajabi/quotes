var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var sugarss = require('sugarss');
var rename  = require('gulp-rename');

gulp.task('styles', function () {
  const plugins = [
    require('autoprefixer')
  ];

  return gulp.src(['public/styles/*.css', 'public/styles/*.sss'])
    .pipe(sourcemaps.init())
    .pipe(postcss(plugins, { parser: sugarss }))
    .pipe(rename({ extname: '.css' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('public/dist/css'));
});


// Rerun the task when a file changes
gulp.task('watch', function () {
  gulp.watch('public/styles/*.css', ['styles']);
});


// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'styles']);
