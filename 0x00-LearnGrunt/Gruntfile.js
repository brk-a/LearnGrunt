module.exports = function(grunt){
    
    //configure
    grunt.initConfig({
        concat: {
            js: {
                src: ['js/*.js'], //regex. regex everywhere
                dest: 'build/scripts.js'
            },
            css:{
                src: ['css/reset.css', 'css/bootstrap.css', 'css/styles.css'],
                dest: 'styles.css'
            }
        },
        sass: {
            build: {
                files: [{
                    src: 'css/sass/styles.scss',
                    dest:'css/styles.css'
                }]
            }
        },
        uglify: {
            build: {
                files: [{
                    src: 'build/scripts.js',
                    dest: 'build/scripts.js' //override the file `scripts.js`
                }]
            }
        }
    });

    //load plug-ins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //register tasks
    grunt.registerTask('concat-js', ['concat:js']); //concats js only
    grunt.registerTask('concat-css', ['concat:css']); //concats css only
};

/**
 * on terminal, type:
 * `npm install grunt-contrib-uglify --save-dev`
 * `grunt uglify`
 * `grunt concat`  //concats css and js
 * `grunt concat-js` //concats js only
 * `grunt concat-css` //concats css only
 * 
 * RTFM. Flow of one plug-in is not necessarily similar to another
 */
