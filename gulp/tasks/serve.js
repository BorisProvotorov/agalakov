module.exports = function () {
  $.gulp.task('serve', function () {
      $.browserSync.init({
        server: {
      		baseDir: 'build/'
    	},
    	notify: false
      });

    $.browserSync.watch('source/sass/**/*.scss').on('change', $.browserSync.reload);
    
    $.gulp.watch('source/sass/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch('source/*.html', $.gulp.series('html'));
    $.gulp.watch('source/js/**/*.js', $.gulp.series('scripts'));
    $.gulp.watch('source/img/**/*.{png, jpg, svg}', $.gulp.series('allimg'));
  });
};
