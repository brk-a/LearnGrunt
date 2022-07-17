module.exports = function(grunt){
    
    //configure
    grunt.initConfig({
        concat: {
            js:{
                src: ['js/*.js'], //regex. regex everywhere
                dest: 'build/scripts.js'
            },
            css:{
                src: ['css/*.css'],
                dest: 'styles.css'
            }
        }
    });

    //load plug-ins
    grunt.loadNpmTasks('grunt-contrib-concat');

    //register tasks
    grunt.registerTask('concat-js', ['concat:js']); //concats js only
    grunt.registerTask('concat-css', ['concat:css']); //concats css only
};

/**
 * on terminal, type:
 * `grunt concat`
 * `grunt concat-js`
 * `grunt concat-css`
 * 
 * RTFM. Flow of one plug-in is not necessarily similar to another
 */