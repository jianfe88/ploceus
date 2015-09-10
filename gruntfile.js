'use strict';
 
module.exports = function (grunt) {
 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            css: {
                src: [
                    'css/main.css',   // This specific file
                    'css/css-modulos/*.css'// All CSS in the css-modulos folder
                ],
                dest: 'css/styles.css',
            }
        },
		    cssmin: {
		      options: {
		        shorthandCompacting: false,
    				roundingPrecision: -1
		      },
		      target: {
		        src: ['css/styles.css'],
		        dest: 'css/styles.min.css'
		      }
		    }
    });
 
    // Where we tell Grunt we plan to use some plug-ins.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
 		grunt.loadNpmTasks('grunt-contrib-uglify');

    // Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'cssmin', 'uglify']);
};
