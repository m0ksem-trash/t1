// Gulpfile.js running on stratumui, 
// a css framework available on npmjs.com
var gulp 	= require('gulp'),
  	sass 	= require('gulp-sass'),
  	concat 	= require('gulp-concat'),
  	uglify 	= require('gulp-uglify'),
  	rename 	= require('gulp-rename');

var paths = {
  styles: {
    src: 'src/sass/*.scss',
    dest: 'src/css/'
  },
  scripts: {
    src: '/script/src/*.js',
    dest: '/script/'
  }
};

function styles() {
  return gulp
  	.src(paths.styles.src, {
      sourcemaps: true
    })
	.pipe(sass())
	.pipe(rename({
	  basename: 'main',
	  suffix: '.min'
	}))
.pipe(gulp.dest(paths.styles.dest));
}

function scripts() {
  return gulp
	.src(paths.scripts.src, {
		sourcemaps: true
	})
	.pipe(uglify())
	.pipe(concat('main.min.js'))
	.pipe(gulp.dest(paths.scripts.dest));
}

function watch() {
  gulp
  	.watch(paths.styles.src, styles);
}

var build = gulp.parallel(styles, watch);

gulp
  .task(build);
gulp
  .task('default', build);