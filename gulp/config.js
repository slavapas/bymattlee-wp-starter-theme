/* ***** ----------------------------------------------- ***** **
/* ***** Gulp Config
/* ***** ----------------------------------------------- ***** */

// Global variables
var src = 'assets/src',
	dest = 'assets/dist';

// Contains all main configurations for Gulp
module.exports = {
	fileHeader: [
		'/*',
		'**',
		'**',
		'**',
		'**',
		'**',
		'**              {{ @bymattlee }}',
		'**              {{ bymattlee.com }}',
		'**              {{ front_end_thuggin }}',
		'**',
		'**',
		'**',
		'**',
		'**',
		'*/\n'
	],
	styles: {
		src: src + '/scss/**/*.scss',
		dest: dest + '/css'
	},
	scripts: {
		src: src + '/js/**/*.js',
		dest:  dest + '/js',
		order: [
			src + '/js/vendors/**/*.js',
			src + '/js/main.js',
			src + '/js/modules/**/*.js'
		],
		filter: [
			src + '/js/main.js',
			src + '/js/modules/**/*.js'
		]
	},
	images: {
		src: src + '/images/**/*',
		dest:  dest + '/images'
	},
	svgs: {
		src: src + '/svgs/*.svg',
		dest:  dest + '/svgs',
		sprite: 'sprite.svg'
	},
	copy: {
		src: [
			src + '/**/*.+(eot|svg|ttf|woff|woff2|swf|mp4|mp3)',
			'!' + src + '/svgs/*.svg'
		],
		dest:  dest
	},
	clean: {
		dest:  dest
	},
	browserSync: {
		files: '**/*.php',
		proxy: 'local.test-wp.dev'
	},
	deploy: {
		src: '.',
		exclude: [
			'.DS_Store',
			'node_modules',
			'acf-export.json',
			'LICENSE.md',
			'README.md',
			'hostSettings.json'
		]
	},
}