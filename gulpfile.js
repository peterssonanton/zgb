const gulp = require('gulp');
const browserSync = require('browser-sync');
const del = require('del');
const inject = require('gulp-inject');
const reload = browserSync.reload;

gulp.task('serve', () => {
  browserSync({
    notify: false,
    port: 9000,
    browser: 'google chrome',
    server: {
      baseDir: ['.']
    }
  });

  gulp.watch([
    'index.html',
    'assets/**/*',
    'src/js/**/*.js',
    'src/css/**/*.css',
  ]).on('change', reload);
});

gulp.task('serve:dist', ['build'], () => {
  browserSync({
    notify: false,
    port: 9000,
    browser: 'google-chrome',
    server: {
      baseDir: ['dist']
    }
  });
  gulp.watch([
    'dist/**/*',
  ]).on('change', reload);
});

gulp.task('default', ['clean'], () => {
  gulp.start('build');
});

gulp.task('clean', del.bind(null, ['dist']));

gulp.task('build', ['static', 'assets', 'src']);

gulp.task('static', () => {
  return gulp.src('index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('assets', () => {
  return gulp.src('assets/**/*')
    .pipe(gulp.dest('dist/assets'));
});

gulp.task('src', () => {
  return gulp.src('src/**/*')
    .pipe(gulp.dest('dist/src'))
});
