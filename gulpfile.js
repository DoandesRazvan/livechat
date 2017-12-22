const gulp = require('gulp'),
      sass = require('gulp-sass'),
      //imagemin = require('gulp-imagemin'),
      autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', () => {
    return gulp.src('./sass/2-sections/*.sass')
               .pipe(sass({
                   includePaths: ['css'],
                   onError: sass.logError
               }))
               .pipe(autoprefixer({
                   browsers: ['last 2 versions'],
                   cascade: false
               }))
               .pipe(gulp.dest('public/css'));
});

// gulp.task('imagemin', () => {
//     return gulp.src('images/*')
//                .pipe(imagemin())
//                .pipe(gulp.dest('dist/img/')); 
// });

gulp.task('default', ['sass']); //imagemin

gulp.task('watch', () => {
    gulp.watch('./sass/2-sections/*.sass', ['sass']);
    //gulp.watch('images/*', ['imagemin']);
});