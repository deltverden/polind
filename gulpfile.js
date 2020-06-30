'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var bsReload = browserSync.reload;

var paths = {
    html:['*.html'],
    scss:['assets/styles/scss/*.scss']
}

gulp.task('sass', function(){
    gulp.src(paths.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('assets/styles/css'))
        .pipe(bsReload({stream: true}));
});

gulp.task('html', function(){
    gulp.src(paths.html)
        .pipe(bsReload({stream: true}));
});

gulp.task('brSync', function(){
    browserSync({
        server:{
            baseDir: "./"
        },
        port: 8080,
        open: 'local',
        notify: false
    });
});

gulp.task('watcher', function(){
    gulp.watch(paths.scss, ['sass']);
    gulp.watch(paths.html, ['html']);
});

gulp.task('default', ['watcher', 'brSync']);