var remapify = require('remapify');
module.exports = function(grunt) {
    var pkg = grunt.file.readJSON('package.json');
    grunt.initConfig({
        pkg: pkg,
        browserify: {
            options: {
                debug: true
            },
            dist: {
                src: ['index.js'],
                dest: 'dist/fh-filesystem.js',
                options: {
                    debug: false,
                    banner: "//File System API"
                },
                transform: ["browserify-shim"]
            },
            specs: {
                src: [],
                dest: []
            }
        },
        jshint: {
            dist: {
                options: {
                    debug: false
                },
                src: ['Gruntfile.js', 'lib/**/*.js']
            }
        },
        clean: ["dist/fh-filesystem.js"]
    });

    //Nice packages.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('buildTest', ['clean', 'jshint:dist', 'browserify:dist']);

    grunt.registerTask('default', ['buildTest']);

};