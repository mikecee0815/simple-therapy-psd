var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssimport = require('postcss-import'),
reporter = require('postcss-reporter');

// this task will watch changes you make in your styles.css file.
gulp.task('styles',function(){
	console.log('stylesheet modified...');
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([cssimport,cssvars,nested,autoprefixer]))
	.on('error',function(errorInfo) {
		console.log(errorInfo.toString());
		this.emit('end');
	})
	.pipe(gulp.dest('./app/assets/temp/styles'));
});
