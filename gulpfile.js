//========================================//

// require libary

const gulp = require("gulp");
const pug = require("gulp-pug");
const sass = require("gulp-sass");
const imagemin = require("gulp-imagemin");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");

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

// copy  html

gulp.task("copyJS", async function () {
  gulp.src("src/js/index.js").pipe(gulp.dest("dist/js/"));
});

//========================================//

// copy  html

gulp.task("copyhtml", async function () {
  gulp.src("src/html/index.html").pipe(gulp.dest("dist/html"));
});

//========================================//

// minify images

gulp.task("minifyimage", async function () {
  gulp.src("src/image/*").pipe(imagemin()).pipe(gulp.dest("dist/image/"));
});

//========================================//

// minfy css file

gulp.task("minify-css", async function () {
  return gulp
    .src("src/css/*.css")
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("dist/css"));
});

//========================================//

// watch libray

gulp.task("watch", async function () {
  gulp.watch("src/scss/style.scss", gulp.series("compile-sass"));
  gulp.watch("src/pug/index.pug", gulp.series("compile-pug"));
  gulp.watch("src/image/*", gulp.series("minifyimage"));
  gulp.watch("src/css/*.css", gulp.series("minify-css"));
  gulp.watch("src/html/index.html", gulp.series("copyhtml"));
  gulp.watch("src/js/index.js", gulp.series("copyJS"));
});

//========================================//

//  default libray use gulp

gulp.task(
  "default",
  gulp.parallel(
    "compile-pug",
    "compile-sass",
    "minifyimage",
    "minify-css",
    "copyhtml",
    "copyJS"
  )
);

//========================================//
