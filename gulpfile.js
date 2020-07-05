// GULP Config
const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");

gulp.task("sass", function () {
  return gulp
    .src("./source/sass/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("css"));
  done();
});

gulp.task("watch", function () {
  gulp.watch("./source/sass/**/*.scss", gulp.series(["sass"]));
});
