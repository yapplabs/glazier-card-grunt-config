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
      cwd: 'test/',
      src: ['**/*.js', '!vendor/**/*.js'],
      dest: 'tmp/test/'
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
