// GULP Config

// including gulp and plugins
var gulp = require("gulp"),
  newer = require("gulp-newer"),
  imagemin = require("gulp-imagemin");

// file locations
var source = "source/",
  dest = "",
  images = {
    in: source + "images/*.*",
    out: dest + "images/",
  };

// manage images
gulp.task("images", function () {
  console.log(images.out);
  console.log(images.in);
  return gulp
    .src(images.in)
    .pipe(newer(images.out))
    .pipe(imagemin())
    .pipe(gulp.dest(images.out));
});
// default task
gulp.task("default", function () {});
