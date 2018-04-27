module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'dev/includes/styles.css': 'src/sass/styles.scss'
        }
      }
    },
    copy: {
      main: {
        files: [
          { expand: true, flatten: true, src: ['vendor/fancybox/*'], dest: 'dev/includes/fancybox/' }
        ]
      }
    },
    watch: {
      styles: {
        files: ['src/sass/*.scss'],
        tasks: ['sass']
      },
      scripts: {
        files: 'src/javascript/*.js',
        tasks: ['jsBundle']
      }
    },
    jekyll: {
      options: {
        bundleExec: true,
        src: 'dev'
      },
      dist: {
        options: {
          dest: '_dist',
          config: '_config.yml'
        }
      },
      stage: {
        options: {
          dest: '_stage',
          config: '_config.yml,_config_stage.yml'
        }
      },
      serve: {
        options: {
          serve: true,
          dest: '.jekyll',
          config: '_config.yml'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default',
    ['sass',
      'copy',
      'jekyll:serve']);
  grunt.registerTask('stage',
    ['sass',
      'copy',
      'jekyll:stage']);
  grunt.registerTask('dist',
    ['sass',
      'copy',
      'jekyll:dist']);
};
