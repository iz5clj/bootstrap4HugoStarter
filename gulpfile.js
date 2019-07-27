const gulp = require('gulp');

gulp.task('copy_css', function() {
    gulp.src('node_modules/bootstrap/scss/**/*')
    .pipe(gulp.dest('assets/sass/bootstrap/'));
});

gulp.task('copy_js', function() {
    gulp.src([
        'node_modules/popper.js/dist/umd/popper.js',
        'node_modules/jquery/dist/jquery.js',
        'node_modules/bootstrap/dist/js/bootstrap.js'
    ])
    .pipe(gulp.dest('assets/js/'));
});

gulp.task('default', ['copy_css', 'copy_js'], function () {
    console.log('Done!');
});