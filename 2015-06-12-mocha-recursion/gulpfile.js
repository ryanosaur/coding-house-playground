//npm install --save-dev gulp-mocha
//npm install --save-dev gulp

var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('default', function () {
  gulp.watch(['./test.js'], ['mocha']);
});

gulp.task('mocha', function(){
    return gulp.src('./test.js', {read: true})
        // gulp-mocha needs filepaths so you can't have any plugins before it
        .pipe(mocha({reporter: 'nyan'}));
});
