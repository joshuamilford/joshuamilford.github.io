module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

	    compass: {                  // Task
	      dist: {                   // Target
	        options: {              // Target options
	          sassDir: 'assets/sass',
	          cssDir: 'assets/css',
	          outputStyle: 'compressed'
	        }
	      }
	    },
	    less: {
	    	development: {
				files: {
					"assets/css/woocommerce.css": "assets/less/woocommerce.less"
				}
	    	}
	    },
		uglify: {
			my_target: {
				files: {
					'assets/js/main.min.js': ['assets/js/main.js'],
					'assets/js/plugins.min.js' : [
						'assets/js/vendor/responsive-nav.min.js',
						'assets/js/vendor/jquery.sharrre.min.js'
					]
				}
			}
		},
		watch: {
			css: {
				files: 'assets/sass/*.scss',
				tasks: ['compass'],
			},
			less: {
				files: 'assets/less/*.less',
				tasks: ['less']
			},
			html:{
				files: '*.html'
			},
			js: {
				files: 'assets/js/main.js',
				tasks: ['uglify']
			},
			options: {
				livereload: true
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default',['watch']);
}