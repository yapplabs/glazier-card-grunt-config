module.exports = {
  test: {
    files: [{
      expand: true,
      cwd: 'dist/dev/<%= pkg.name %>/',
      src: ['card.{js,css}'],
      dest: 'dist/dev/<%= pkg.name %>/test/cards/<%= pkg.name %>'
    }]
  }
};
