const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");

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

function defaultTask(cb) {
  compileSass();
  cb();
}

exports.default = function () {
  gulp.watch("./src/**", { ignoreInitial: false }, gulp.series(defaultTask));
};
