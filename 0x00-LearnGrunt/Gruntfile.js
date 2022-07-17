module.exports = function(grunt){
    
    //configure
    grunt.initConfig({
        //pass in options to plugins, references to files etc
    });

    //load plug-ins
    grunt.loadNpmTasks('');

    //register tasks
    grunt.registerTask('run', function(){
        console.log('I am running')
    });

    grunt.registerTask('sleep', function(){
        console.log('I am sleeping')
    });

    grunt.registerTask('all', ['run', 'sleep']);
};

/**
 * on the terminal, type:
 * `grunt run`
 * `grunt sleep`
 * `grunt all`
 */