module.exports = function(grunt){
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    concat: {
      basic_and_extras: {
        files: {
          // main
          'build/js/main.js' :
          [
            'assets/js/require/config.js',
            'assets/js/require/modules.js',
            'assets/js/require/main.js'
          ],
          // general
          'build/js/general.js' :
          [
            'assets/js/general.js',
            'assets/js/header/header.js',
            'assets/js/footer/footer.js'
          ],
        }
      }
    },

    uglify: {
      task: {
        options: {
          report    : 'gzip',
          compress  : true,
          mangle    : false,
          sourceMap : false
        },

        files: {
          'build/js/main.js'      : 'assets/js/main.js',
          'build/js/general.js'   : 'build/js/general.js',
          'build/js/home/home.js' : 'assets/js/home/home.js',
          'build/js/cart/cart.js' : 'assets/js/cart/cart.js'
        }
      }
    }
  });

  grunt.registerTask('default', ['concat', 'uglify']);
}
