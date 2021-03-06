// Generated on 2014-10-22 using generator-chrome-extension 0.2.11
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Configurable paths
  var config = {
    app: 'app',
    dist: 'dist'
  };

  grunt.initConfig({

    // Project settings
    config: config,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['bowerInstall']
      },
      js: {
        files: ['<%= config.app %>/scripts/{,*/}*.js'],
        tasks: ['jshint'],
        options: {
          livereload: true
        }
      },
      compass: {
        files: ['<%= config.app %>/styles/{,*/}*.{scss,sass}'],
        tasks: ['compass:chrome']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      styles: {
        files: ['<%= config.app %>/styles/{,*/}*.css'],
        tasks: [],
        options: {
          livereload: true
        }
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.app %>/*.html',
          '<%= config.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          '<%= config.app %>/manifest.json',
          '<%= config.app %>/_locales/{,*/}*.json'
        ]
      }
    },

    // Grunt server and debug server setting
    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      chrome: {
        options: {
          open: false,
          base: [
            '<%= config.app %>'
          ]
        }
      },
      test: {
        options: {
          open: false,
          base: [
            'test',
            '<%= config.app %>'
          ]
        }
      }
    },

    // Empties folders to start fresh
    clean: {
      chrome: {
      },
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= config.dist %>/*',
            '!<%= config.dist %>/.git*'
          ]
        }]
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= config.app %>/scripts/{,*/}*.js',
        '!<%= config.app %>/scripts/vendor/*',
        'test/spec/{,*/}*.js'
      ]
    },

    // Run tests
    mocha: {
      all: {
        options: {
          run: true,
          urls: ['http://localhost:<%= connect.options.port %>/index.html']
        }
      }
    },

    // Compiles Sass to CSS and generates necessary files if requested
    compass: {
      options: {
        sassDir: '<%= config.app %>/styles',
        cssDir: '<%= config.dist %>/styles',
        generatedImagesDir: '<%= config.dist %>/images/generated',
        imagesDir: '<%= config.app %>/images',
        javascriptsDir: '<%= config.app %>/scripts',
        fontsDir: '<%= config.app %>/styles/fonts',
        importPath: '<%= config.app %>/bower_components',
        httpImagesPath: '/images',
        httpGeneratedImagesPath: '/images/generated',
        httpFontsPath: '/styles/fonts',
        relativeAssets: false,
        assetCacheBuster: false
      },
      chrome: {
        options: {
          cssDir: '<%= config.app %>/styles',
          generatedImagesDir: '<%= config.app %>/images/generated',
          debugInfo: true
        }
      },
      dist: {
      },
      test: {
      }
    },

    // Automatically inject Bower components into the HTML file
    bowerInstall: {
      app: {
        src: [
          '<%= config.app %>/*.html'
        ]
      },
      sass: {
        src: ['<%= config.app %>/styles/{,*/}*.{scss,sass}'],
        ignorePath: '<%= config.app %>/bower_components/'
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    //useminPrepare: {
    //  options: {
    //    dest: '<%= config.dist %>'
    //  },
    //  html: [
    //    '<%= config.app %>/popup.html',
    //    '<%= config.app %>/options.html'
    //  ]
    //},

    // Performs rewrites based on rev and the useminPrepare configuration
    //usemin: {
    //  options: {
    //    assetsDirs: ['<%= config.dist %>', '<%= config.dist %>/images']
    //  },
    //  html: ['<%= config.dist %>/{,*/}*.html'],
    //  css: ['<%= config.dist %>/styles/{,*/}*.css']
    //},

    htmlmin: {
      dist: {
        options: {
          // removeCommentsFromCDATA: true,
          // collapseWhitespace: true,
          // collapseBooleanAttributes: true,
          // removeAttributeQuotes: true,
          // removeRedundantAttributes: true,
          // useShortDoctype: true,
          // removeEmptyAttributes: true,
          // removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: '<%= config.app %>',
          src: '*.html',
          dest: '<%= config.dist %>'
        }]
      }
    },

    cssmin: {
      dist: {
        files: {
          '<%= config.dist %>/styles/main.css': [
            '<%= config.app %>/styles/{,*/}*.css'
          ]
        }
      }
    },


    uglify: {
      dist: {
        files: {
          '<%= config.dist %>/scripts/scripts.js': [
            '<%= config.dist %>/scripts/scripts.js'
          ]
        }
      }
    },


    concat: {
      dist: {}
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= config.app %>',
          dest: '<%= config.dist %>',
          src: [
            '*.{ico,png,txt}',
            'images/{,*/}*.{webp,gif}',
            '{,*/}*.html',
            'styles/{,*/}*.css',
            'styles/fonts/{,*/}*.*',
            '_locales/{,*/}*.json'
          ]
        }]
      }
    },

    // Auto buildnumber, exclude debug files. smart builds that event pages
    chromeManifest: {
      dist: {
        options: {
          buildnumber: false,  // disable auto-increment
          background: {
            target: 'scripts/background.js',
            exclude: [
              'scripts/chromereload.js'
            ]
          }
        },
        src: '<%= config.app %>',
        dest: '<%= config.dist %>'
      }
    },

    // Compress dist files to package
    compress: {
      dist: {
        options: {
          archive: function() {
            var manifest = grunt.file.readJSON('app/manifest.json');
            return 'package/Sherlocke-' + manifest.version + '.zip';
          }
        },
        files: [{
          expand: true,
          cwd: 'dist/',
          src: ['**'],
          dest: ''
        }]
      }
    },

    // Replace AngularJS constants per environment
    ngconstant: {
      options: {
        name: 'SherlockeConfig',
        dest: '<%= config.app %>/scripts/config.js'
      },
      chrome: {
        constants: {
          'BAKERSTREET_API': 'http://localhost:8000'
        }
      },
      dist: {
        options: {
          dest: '<%= config.dist %>/scripts/config.js'
        },
        constants: {
          'BAKERSTREET_API': 'https://sherlocke.me'
        }
      }
    },

    // Automatic dependency injection annotations
    ngAnnotate: {
      options: {
        singleQuotes: true
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.app %>/scripts',
          src: '{,*/}*.js',
          dest: '<%= config.dist %>/scripts'
        }]
      }
    }
  });

  grunt.registerTask('debug', function () {
    grunt.task.run([
      'jshint',
      'compass:chrome',
      'ngconstant:chrome',
      'connect:chrome',
      'watch'
    ]);
  });

  grunt.registerTask('test', [
    'connect:test',
    'mocha'
  ]);

  grunt.registerTask('build', [
    // Clear out dist directory
    'clean:dist',

    // Compile SCSS
    'compass:dist',

    // Generate AngularJS config module
    'ngconstant:dist',

    // Annotate AngularJS dependencies
    'ngAnnotate:dist',

    // Minify CSS
    'cssmin',

    // Concatenate JavaScripts
    'concat',

    // Minify JavaScripts
    'uglify',

    // Copy remaining files to dist
    'copy',

    // Create the archive zip
    'compress'
  ]);

  grunt.registerTask('default', [
    'jshint',
    'test',
    'build'
  ]);
};
