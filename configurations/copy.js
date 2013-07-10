module.exports = {
  main: {
    files: [
      {
        expand: true,
        src: ['app/**', 'css/**', '!test/**', '!**/*.js'],
        dest: 'tmp'
      }
    ]
  },
  test: {
    files: [
      {
        expand: true,
        src: ['test/**', '!test/**/*.js'],
        dest: 'tmp'
      }
    ]
  },
  testVendor: {
    files: [
      {
        expand: true,
        src: ['test/vendor/**/*'],
        dest: 'dist/dev/<%= pkg.name %>'
      }
    ]
  },
  manifest: {
    files: [{
      expand: true,
      flatten: true,
      cwd: 'tmp/',
      src: ['manifest.json', 'md5/*.js', 'md5/*.css'],
      dest: 'dist/prod/',
      filter: 'isFile'
    }]
  }
};
