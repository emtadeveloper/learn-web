//========================================//


// require libary

const gulp = require("gulp");
const pug = require("gulp-pug");

//========================================//

// compile pug to html 

gulp.task("compile-pug", async function () {
    return gulp.src("src/pug/index.pug").pipe(pug()).pipe(gulp.dest("src/html/"));
  });
  
//========================================//

// watch libray

gulp.task("watch", async function () {
  gulp.watch("src/pug/index.pug", gulp.series("compile-pug"));
});

//========================================//

//  default libray use gulp 

gulp.task("default", gulp.parallel("compile-pug"));

//========================================//