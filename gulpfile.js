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
const htmlmin = require("gulp-htmlmin");
const autoprefixer = require("gulp-autoprefixer");
const babel = require("gulp-babel");
const plumber = require("gulp-plumber");
const notifier = require("gulp-notifier");

filesPath = {
  sass: "./source/sass/**/*.scss",
  less: "./source/less/styles.less",
  js: "./source/js/**/*.js",
  images: "./source/images/**/*.+(png|jpg|gif|svg)",
  php: "./source/**/*.php",
};

// SASS

gulp.task("sass", function (done) {
  return gulp
    .src(filesPath.sass)
    .pipe(plumber({ errorHandler: notifier.error }))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
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

gulp.task("less", function (done) {
  return gulp
    .src(filesPath.less)
    .pipe(plumber({ errorHandler: notifier.error }))
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(cssnano())
    .pipe(sourcemaps.write("."))
    .pipe(rename("./styles.min.css"))
    .pipe(gulp.dest("css"));
  done();
});

// JS
gulp.task("javascript", function (done) {
  return (
    gulp
      // .src("./source/js/**/*.js")
      .src(["./source/js/alert.js", "./source/js/custom-scripts.js"])
      .pipe(plumber({ errorHandler: notifier.error }))
      .pipe(
        babel({
          presets: ["@babel/env"],
        })
      )
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

// PHP

gulp.task("php", function (done) {
  return gulp
    .src(filesPath.php)
    .pipe(plumber({ errorHandler: notifier.error }))
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        ignoreCustomFragments: [/<%[\s\S]*?%>/, /<\?[=|php]?[\s\S]*?\?>/],
      })
    )
    .pipe(gulp.dest("./"));
  done();
});

// IMAGES

gulp.task("imagemin", function (done) {
  return gulp
    .src(filesPath.images)
    .pipe(cache(imagemin()))
    .pipe(gulp.dest("images"));
  done();
});

// WATCH with browserSync
gulp.task("watch", function () {
  browserSync.init({
    proxy: "dev.potapov.io",
    projectURL: "dev.potapov.io",
  });
  gulp
    .watch(
      [
        filesPath.sass,
        filesPath.less,
        filesPath.php,
        filesPath.js,
        filesPath.images,
      ],
      gulp.parallel(["sass", "less", "php", "javascript", "imagemin"])
    )
    .on("change", browserSync.reload);
});

// Clear Cache
gulp.task("clear-cache", function (done) {
  return cache.clearAll(done);
});

// Serve
gulp.task(
  "serve",
  gulp.parallel(["sass", "less", "php", "javascript", "imagemin"])
);

// DEFAULT
gulp.task("default", gulp.series(["serve", "watch"]));
