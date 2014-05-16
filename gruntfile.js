
module.exports = function(grunt) {

  grunt.initConfig({

    bowercopy: {
      options: {
        srcPrefix: 'bower_components'
      },

      js: {
        options: {
          destPrefix: 'js/vendor'
        },
        files: {
          'jquery.min.js':    'jquery/dist/jquery.min.js',
          'jquery.min.map':   'jquery/dist/jquery.min.map',
          'less.min.js':      'less/dist/less-1.7.0.min.js',
          'modernizr.js':     'modernizr/modernizr.js'
        }
      },

      less: {
        options: {
          destPrefix: 'less/vendor'
        },
        files: {
          '_normalize.less': 'normalize-less/normalize.less'
        }
      }
    },


    jsonlint: {
      sample: {
        src: [ '**/*.json' ]
      }
    },


    jshint: {
      files: ['Gruntfile.js', './**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },

    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'jsonlint']
    }
  });


  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-jsonlint');
  grunt.loadNpmTasks('grunt-bowercopy');
  grunt.loadNpmTasks('grunt-bower-install-simple');

  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('bower', ['bower-install-simple', 'bowercopy']);
  grunt.registerTask('default', ['jshint', 'jsonlint', 'uglify']);

};