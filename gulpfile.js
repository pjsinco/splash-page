var gulp = require('gulp');
var babel = require('gulp-babel');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('js', function() {
  return gulp.src('src/scripts/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(rename('pilot.bundle.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({ stream: true }));
})

gulp.task('sass', function() {
  return gulp.src('src/styles/**/*.scss')
    .pipe(sass())
    .pipe(rename('pilot.styles.css'))
    .pipe(autoprefixer({
      browsers: [
        'last 2 versions',
        'android 4',
        'opera 12'
      ]
    }))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('watch', function() {
  browserSync.init({
    server: {
      baseDir: './',
    },
  });

  gulp.watch('src/styles/**/*.scss', ['sass']);
  gulp.watch('src/scripts/**/*.js', ['js']);
  gulp.watch('index.html').on('change', browserSync.reload);
})

gulp.task('default', ['watch']);
