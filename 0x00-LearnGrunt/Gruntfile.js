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
        }
    });

    //load plug-ins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-sass');

    //register tasks
    grunt.registerTask('concat-js', ['concat:js']); //concats js only
    grunt.registerTask('concat-css', ['concat:css']); //concats css only
};

/**
 * on terminal, type:
 * `npm install node-sass --save-dev` //NOT A GRUNT PLUG-IN
 * `npm install grunt-sass --save-dev`
 * `grunt sass`
 * `grunt concat`
 * `grunt concat-js`
 * `grunt concat-css`
 * 
 * RTFM. Flow of one plug-in is not necessarily similar to another
 */