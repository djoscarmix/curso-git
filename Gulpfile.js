var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('compilar_sass', function() {
  gulp
    .src('sass/index.sass')
    .pipe(sass())
    .pipe(gulp.dest('css'));
});

// watch Sass files for changes, run the Sass preprocessor with the 'sass' task and reload
  gulp.watch('sass/*.sass', ['compilar_sass']);
  
gulp.task('default', ['compilar_sass']);
