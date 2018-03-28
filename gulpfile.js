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
var concat = require('gulp-concat');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');


function onError(error) {
  this.emit('end');
}

gulp.task('images', function() {
  gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
    .pipe(browserSync.reload({ stream: true }))
})

gulp.task('scripts', function() {
  var b = browserify({
      entries: './src/scripts/main.js',
      debug: true,
  });

  b.transform('babelify', { presets: ['env'] })
    .bundle()
    .on('error', notify.onError({
        message: 'Error: <%= error.message %>',
        sound: 'Pop'
    }))
    .pipe(source('main.js'))
    .pipe(rename('pilot.bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/'))
    .pipe(notify({ message: 'Browserified!' }))
    .pipe(browserSync.reload({ stream: true }));

//  return gulp.src('src/scripts/**/*.js')
//    .pipe(sourcemaps.init())
//    .pipe(babel())
//    .pipe(concat('pilot.bundle.js'))
//    .pipe(sourcemaps.write('.'))
//    .pipe(gulp.dest('dist'))
//    .pipe(notify({ message: 'Scripts gulped!' }))
//    .pipe(browserSync.reload({ stream: true }));
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
  gulp.watch('src/scripts/**/*.js', ['scripts']);
  gulp.watch('src/images/*', ['images']);
  gulp.watch('index.html').on('change', browserSync.reload);
})

gulp.task('default', ['watch']);
