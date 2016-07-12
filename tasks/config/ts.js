module.exports = function(grunt) {
    grunt.config.set('ts', {
        dev: {
            files: [
                {
                    src: [
                        'src/**/*.ts'
                    ],
                    dest: 'api'
                }
            ],

            options: {
                sourceMap: false,// Useless on the server side.
                declaration: true,// Always useful to have declarations available.
                noEmitOnError: false,// Force log errors.
                failOnTypeErrors: true,// Force log grunt errors pipeline.
                verbose: true,
                outDir:'api',
                rootDir:'src',
                watch:'.',
                module: 'commonjs',
                target:'es5'
            }
        }
    });

    grunt.loadNpmTasks('grunt-ts');
};
