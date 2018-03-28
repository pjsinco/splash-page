var gulp = require('gulp');
var babel = require('gulp-babel');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var imagemin = require('gulp-imagemin');

function onError(error) {
  this.emit('end');
}

gulp.task('images', function() {
  gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
    .pipe(browserSync.reload({ stream: true }))
})

gulp.task('js', function() {
  return gulp.src('src/scripts/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(rename('pilot.bundle.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'))
    .pipe(notify({ message: 'Browserified!' }))
    .pipe(browserSync.reload({ stream: true }));
})

gulp.task('sass', function() {
  return gulp.src('src/styles/**/*.scss')
    .pipe(plumber({ errorHandler: onError }))
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(rename('pilot.styles.css'))
    .pipe(autoprefixer({
      browsers: [
        'last 2 versions',
        'android 4',
        'opera 12'
      ]
    }))
    .pipe(gulp.dest('dist'))
    .pipe(notify({ message: 'Sassed!' }))
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
  gulp.watch('src/images/*', ['images']);
  gulp.watch('index.html').on('change', browserSync.reload);
})

gulp.task('default', ['watch']);
