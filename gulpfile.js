var gulp = require('gulp');
const fs = require('fs-extra');
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
const watch = require('gulp-watch');

gulp.task('default',['clearLib','compileJS']);

gulp.task("compileJS", function () {
    return watch("src/**/*.js",{
            verbose : true,
            ignoreInitial : false
        })
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("dist"));
});
gulp.task("clearLib",[],function(){
    return fs.removeSync('./dist/');
});