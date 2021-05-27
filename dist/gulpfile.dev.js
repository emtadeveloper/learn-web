"use strict";

//========================================//
// require libary
var gulp = require("gulp");

var pug = require("gulp-pug");

var sass = require("gulp-sass");

var imagemin = require("gulp-imagemin");

var cleanCSS = require("gulp-clean-css");

var rename = require("gulp-rename"); //========================================//
// compile sass to css


gulp.task("compile-sass", function _callee() {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          gulp.src("src/scss/style.scss").pipe(sass().on("error", sass.logError)).pipe(gulp.dest("src/css/"));

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
}); //========================================//
// compile pug to html

gulp.task("compile-pug", function _callee2() {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", gulp.src("src/pug/index.pug").pipe(pug()).pipe(gulp.dest("src/html/")));

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
}); //========================================//
// copy  html

gulp.task("copyJS", function _callee3() {
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          gulp.src("src/js/index.js").pipe(gulp.dest("dist/js/"));

        case 1:
        case "end":
          return _context3.stop();
      }
    }
  });
}); //========================================//
// copy  html

gulp.task("copyhtml", function _callee4() {
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          gulp.src("src/html/index.html").pipe(gulp.dest("dist/html"));

        case 1:
        case "end":
          return _context4.stop();
      }
    }
  });
}); //========================================//
// minify images

gulp.task("minifyimage", function _callee5() {
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          gulp.src("src/image/*").pipe(imagemin()).pipe(gulp.dest("dist/image/"));

        case 1:
        case "end":
          return _context5.stop();
      }
    }
  });
}); //========================================//
// minfy css file

gulp.task("minify-css", function _callee6() {
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          return _context6.abrupt("return", gulp.src("src/css/*.css").pipe(cleanCSS({
            compatibility: "ie8"
          })).pipe(rename("style.min.css")).pipe(gulp.dest("dist/css")));

        case 1:
        case "end":
          return _context6.stop();
      }
    }
  });
}); //========================================//
// watch libray

gulp.task("watch", function _callee7() {
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          gulp.watch("src/scss/style.scss", gulp.series("compile-sass"));
          gulp.watch("src/pug/index.pug", gulp.series("compile-pug"));
          gulp.watch("src/image/*", gulp.series("minifyimage"));
          gulp.watch("src/css/*.css", gulp.series("minify-css"));
          gulp.watch("src/html/index.html", gulp.series("copyhtml"));
          gulp.watch("src/js/index.js", gulp.series("copyJS"));

        case 6:
        case "end":
          return _context7.stop();
      }
    }
  });
}); //========================================//
//  default libray use gulp

gulp.task("default", gulp.parallel("compile-pug", "compile-sass", "minifyimage", "minify-css", "copyhtml", "copyJS")); //========================================//