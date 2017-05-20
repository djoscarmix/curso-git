var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('compilar_sass', function() {
  gulp
    .src('curso-git/sass/index.sass')
    .pipe(sass())
    .pipe(gulp.dest('curso-git/css'));
});
// gulp.task('reload', ['compilar_sass'], function() {
//   browserSync({
//     server: {
//       baseDir: 'curso-git'
//     }
//   });
// });
gulp.watch('curso-git/sass/*.sass', ['compilar_sass']);  
//gulp.watch(['curso-git/*.html', 'curso-git/css/*.css', 'curso-git/js/*.js','curso-git/sass/*.sass'], {cwd: 'curso-git'}, reload);
gulp.task('default', ['compilar_sass']);