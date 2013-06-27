module.exports = {
  code: {
    type: "amd",
    files: [{
      expand: true,
      src: ['app/**/*.js', 'card.js'],
      dest: 'tmp/'
    }]
  },
  tests: {
    type: "amd",
    files: [{
      expand: true,
      src: ['test/**/*.js', '!test/vendor/**/*.js'],
      dest: 'tmp/'
    }]
  },

  templates: {
    type: "amd",
    files: [{
      expand: true,
      cwd: 'tmp/',
      src: ['**/templates.js'],
      dest: 'tmp/'
    }]
  }
};
