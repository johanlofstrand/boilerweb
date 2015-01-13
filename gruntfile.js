module.exports = function(grunt) {
   
    grunt.initConfig ({
         sass: {
             dist: {
                 files: {
                     'public/stylesheets/application.css' : 'sass/application.scss'
                 }
             }
        },
        watch: {
            source: {
                files: ['sass/**/*.scss','views/**/*.ejs'],
                tasks: ['sass'],
                options: {
                    livereload: true, // needed to run LiveReload
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['sass']);

 };
