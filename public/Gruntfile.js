module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist : {
                src : [
                    'bower_components/Angular-Twitter/twitter.js',
                    'bower_components/angular-load/angular-load.js',                
                    'bower_components/angularjs-datepicker/dist/angular-datepicker.min.js',
                    'bower_components/angular-ui-bootstrap/src/position/position.js',
                    'bower_components/angular-dateparser/dist/angular-dateparser.js',
                    'bower_components/angular-timepicker/dist/angular-timepicker.js',
                    'bower_components/ng-focus-on/ng-focus-on.js',
                    'bower_components/angular-native-picker/build/angular-datepicker.js',
                    'js/plugins.js',
                    'js/main.js'
                ],
                dest: 'production/app.js'
            }
        },

        uglify: {
            build: {
                src: 'production/app.js',
                dest: 'production/app.min.js'
            }
        },
        sass: {
            dist: {
                options: {
                    style:'compressed'
                },
                files: {
                    'css/style.css' : 'css/style.scss'
                }
            }
        },
        cssmin : {
            combine : {
                files : {
                    'production/app.css' : ['css/style.css', 'css/reset.css', 'bower_components/angularjs-datepicker/src/css/angular-datepicker.css', 'bower_components/hover/css/hover-min.css']
                }
            }
        },
        watch: {
            
            scripts: {
                files: ['js/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false
                }
            },
            css : {
                files : ['css/*.scss'],
                tasks : ['sass', 'cssmin'],
                options : {
                    spawn : false
                }
            }
        }


    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['concat', 'uglify', 'sass', 'cssmin', 'watch']);

};
