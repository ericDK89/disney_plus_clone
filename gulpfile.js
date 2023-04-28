const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const imagemin = require("gulp-imagemin");

function compileSass() {
  return gulp
    .src("./src/styles/*.scss")
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: "compressed",
      })
    )
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest("./dist/styles"));
}

function compileImages() {
  return gulp
    .src("./src/assets/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/assets"));
}

function defaultTask(cb) {
  compileSass();
  // compileImages(); uncomment on first npm run gulp
  cb();
}

exports.default = function () {
  gulp.watch("./src/**", { ignoreInitial: false }, gulp.series(defaultTask));
};
