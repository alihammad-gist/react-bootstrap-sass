var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var concat = require('gulp-concat');
var react = require('gulp-react');

// register react components here
var reactComponents = [
	'helloworld'
]


var miscJs = [__dirname+'/bower_components/jquery/dist/jquery.js', __dirname+'/bower_components/respond/dest/respond.js', __dirname+'/bower_components/react/react-with-addons.js'];

var twbsPath = __dirname+'/bower_components/bootstrap-sass';
var bootstrap = {
	scripts : [
		twbsPath+'/vendor/assets/javascripts/bootstrap/affix.js',
		twbsPath+'/vendor/assets/javascripts/bootstrap/alert.js',
		twbsPath+'/vendor/assets/javascripts/bootstrap/button.js',
		twbsPath+'/vendor/assets/javascripts/bootstrap/carousel.js',
		twbsPath+'/vendor/assets/javascripts/bootstrap/collapse.js',
		twbsPath+'/vendor/assets/javascripts/bootstrap/dropdown.js',
		twbsPath+'/vendor/assets/javascripts/bootstrap/tab.js',
		twbsPath+'/vendor/assets/javascripts/bootstrap/transition.js',
		twbsPath+'/vendor/assets/javascripts/bootstrap/scrollspy.js',
		twbsPath+'/vendor/assets/javascripts/bootstrap/modal.js',
		twbsPath+'/vendor/assets/javascripts/bootstrap/tooltip.js',
		twbsPath+'/vendor/assets/javascripts/bootstrap/popover.js'
	]
}

var reactFiles = {
	jsx: [],
	styles: []
};

(function () {
	reactComponents.forEach(function(el) {
		reactFiles.styles.push(__dirname+'/jsx/'+el+'/'+el+'.scss');
		reactFiles.jsx.push(__dirname+'/jsx/'+el+'/'+el+'.jsx');
	});
})();

//console.log(reactFiles);

var custom = {
	// compiled jsx components
	scripts: [__dirname+'/.jsx.js', __dirname+'/global/scripts/script.js'],
	styles: ['global/styles/styles.scss']
}

console.log(miscJs.concat(bootstrap.scripts.concat(custom.scripts)));

gulp.task('js', function () {
	gulp.src(miscJs.concat(bootstrap.scripts.concat(custom.scripts)))
		.pipe(concat('script.js'))
		.pipe(gulp.dest(__dirname+'/public/'));
});

gulp.task('jsx', function() {
	gulp.src(reactFiles.jsx)
		.pipe(react())
		.pipe(concat('.jsx.js'))
		.pipe(gulp.dest(__dirname));
});

gulp.task('sass', function () {
	gulp.src(custom.styles.concat(reactFiles.styles))
		.pipe(sass({precision:10}))
		.pipe(concat('styles.css'))
		.pipe(gulp.dest(__dirname+'/public/'));
});