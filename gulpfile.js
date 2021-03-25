//========================================//

// require libary

const gulp = require("gulp");
const pug = require("gulp-pug");
const sass = require("gulp-sass");

//========================================//

// compile sass to css

gulp.task("compile-sass", async function () {
  gulp
    .src("src/scss/style.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("src/css/"));
});

//========================================//

// compile pug to html

gulp.task("compile-pug", async function () {
  return gulp.src("src/pug/index.pug").pipe(pug()).pipe(gulp.dest("src/html/"));
});

//========================================//

// watch libray

gulp.task("watch", async function () {
  gulp.watch("src/scss/style.scss", gulp.series("compile-sass"));
  gulp.watch("src/pug/index.pug", gulp.series("compile-pug"));
});

//========================================//

//  default libray use gulp

gulp.task("default", gulp.parallel("compile-pug","compile-sass"));

//========================================//
