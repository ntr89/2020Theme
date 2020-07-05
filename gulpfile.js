// GULP Config
const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const browserSync = require("browser-sync").create();
const less = require("gulp-less");
const cssnano = require("gulp-cssnano");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const concat = require("gulp-concat");
const imagemin = require("gulp-imagemin");
const cache = require("gulp-cache");

// SASS

gulp.task("sass", function () {
  return gulp
    .src("./source/sass/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(cssnano())
    .pipe(sourcemaps.write("."))
    .pipe(
      rename(function (path) {
        if (!path.extname.endsWith(".map")) {
          path.basename += ".min";
        }
      })
    )
    .pipe(gulp.dest("css"));
  done();
});

// LESS

gulp.task("less", function () {
  return gulp
    .src("./source/less/styles.less")
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(cssnano())
    .pipe(sourcemaps.write("."))
    .pipe(rename("./styles.min.css"))
    .pipe(gulp.dest("css"));
  done();
});

// JS
gulp.task("javascript", function () {
  return (
    gulp
      // .src("./source/js/**/*.js")
      .src(["./source/js/alert.js", "./source/js/custom-scripts.js"])
      .pipe(concat("scripts.js"))
      .pipe(uglify())
      .pipe(
        rename({
          suffix: ".min",
        })
      )
      .pipe(gulp.dest("js"))
  );
  done();
});

// IMAGES

gulp.task("imagemin", function (done) {
  return gulp
    .src("./source/images/**/*.+(png|jpg|gif|svg)")
    .pipe(cache(imagemin()))
    .pipe(gulp.dest("images"));
  done();
});

// // BROWSER SYNC
// gulp.task("browser-sync", function () {
//   browserSync.init({
//     proxy: "dev.potapov.io",
//     projectURL: "dev.potapov.io",
//   });
// });

// WATCH with browserSync
gulp.task("watch", function () {
  browserSync.init({
    proxy: "dev.potapov.io",
    projectURL: "dev.potapov.io",
  });
  gulp
    .watch(
      [
        "./source/sass/**/*.scss",
        "./source/less/**/*.less",
        "**/*.php",
        "./source/js/**/*.js",
        "./source/images/**/*.+(png|jpg|gif|svg)",
      ],
      gulp.series(["sass", "less", "javascript", "imagemin"])
    )
    .on("change", browserSync.reload);
});

gulp.task("clear-cache", function (done) {
  return cache.clearAll(done);
});

// DEFAULT
gulp.task("default", gulp.series(["watch"]));
