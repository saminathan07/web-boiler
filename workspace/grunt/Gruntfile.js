const sass = require('sass');
module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			dist: {
				src: [
				'../js/*.js',
                '../js/**/*.js'
				],
				dest: '../../htdocs/js/app.js'
			},
		},

		uglify: {
			options: {
				mangle: false,
				compress: false,
				beautify: false,
			},
			build: {
				files: {
					'../../htdocs/js/app.min.js': ['../../htdocs/js/app.js']
				}
			}
		},

		obfuscator: {
			options: {
				banner: '',
				debugProtection: true,
				debugProtectionInterval: true,
				controlFlowFlattening: true,
				controlFlowFlatteningThreshold: 1,
				disableConsoleOutput: true,
				mangle: true,
				selfDefending: true,
				domainLock: [
					'labs.selfmade.ninja',
					'labsbeta.selfmade.ninja'
				]
			},
			build: {
				files: {
					'../../htdocs/js/app.o.js': [
						'../../htdocs/js/app.js',
					]
				}
			}
		},

		sass: {
			options: {
				style: 'compressed',
				sourceMap: false,
                implementation: sass
			},
			dist: {
				files: {
					'../../htdocs/css/app.css': '../sass/app.scss',
				}
			}
		},

		watch: {
			scripts: {
				files: [
				'Gruntfile.js',
				'../js/*.js',
				'../js/**/*.js',
				],
				tasks: ['concat', 'uglify:build', 'obfuscator'],
				options: {
					debounceDelay: 300
				}
			},
			css: {
				files: [
				'../sass/**/*.scss',
				'../sass/**/*.sass',
				],
				tasks: ['sass'],
				options: {
					debounceDelay: 300,
					spawn: false
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-obfuscator');
	grunt.registerTask('default', ['sass:dist', 'concat', 'uglify', 'watch']);
	grunt.registerTask('build', ['sass:dist', 'concat', 'uglify', 'obfuscator']);
};

/* EOF */
