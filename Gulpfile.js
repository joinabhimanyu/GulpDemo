var gulp = require('gulp'),
	rename = require('gulp-rename'),
	sass = require('gulp-ruby-sass'),
	minifycss = require('gulp-minify-css'),
	autoprefixer = require('gulp-autoprefixer');


function startExpress() {
	var express = require('express');
	var app = express();
	app.use(express.static(__dirname));
	app.listen(4000);
}

gulp.task('default', function() {
	startExpress();
	gulp.watch('sass/*.scss', ['styles']);
});

gulp.task('styles', function() {
	return gulp.src('sass/*.scss')
    .pipe(sass({ style: 'expanded' }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
    .pipe(gulp.dest('css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('css'));
});

