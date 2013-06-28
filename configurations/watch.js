module.exports = {
  scripts: {
    files: ['app/**', 'test/**', 'vendor/**', 'templates/**', 'css/*.scss', 'css/*.css'],
    tasks: ['test'],
    options: {
      nospawn: true
    }
  }
};
