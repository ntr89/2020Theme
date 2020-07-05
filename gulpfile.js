// GULP Config
const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const browserSync = require("browser-sync").create();
const less = require("gulp-less");
const cssnano = require("gulp-cssnano");
const uglify = require("gulp-uglify");

// SASS

gulp.task("sass", function () {
  return gulp
    .src("./source/sass/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(cssnano())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("css"));
  done();
});

// LESS

gulp.task("less", function () {
  return gulp
    .src("./source/less/**/*.less")
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(cssnano())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("css"));
  done();
});

// JS
gulp.task("javascript", function () {
  return gulp.src("./source/js/**/*.js").pipe(uglify()).pipe(gulp.dest("js"));
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
      ],
      gulp.series(["sass", "less", "javascript"])
    )
    .on("change", browserSync.reload);
});

// // including gulp and plugins
// var gulp = require("gulp"),
//   newer = require("gulp-newer"),
//   imagemin = require("gulp-imagemin"),
//   del = require("del");

// // file locations
// var source = "source/",
//   dest = "",
//   images = {
//     in: source + "images/*.*",
//     out: dest + "images/",
//   };
// // cleaning build folder, turned OFF for now
// // gulp.task("clean", function() {
// //     del([
// //         dest + "*"
// //     ]);
// // });
// // manage images
// gulp.task("images", function () {
//   return gulp
//     .src(images.in)
//     .pipe(newer(images.out))
//     .pipe(imagemin())
//     .pipe(gulp.dest(images.out));
// });
// gulp.task("watch", function () {
//   gulp.watch(images.in, gulp.series(["images"]));
// });
// // default task
// // gulp.task("default", gulp.parallel("watch", "images"), function () {
// //   //   runSequence(["images"]);
// //   //image changes
// // });
// function defaultTask(cb) {
//   // place code for your default task here
//   ["watch", "images"];
//   cb();
// }

// exports.default = defaultTask;
