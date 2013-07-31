module.exports = {
  scripts: {
    files: ['app/**', 'test/**', 'vendor/**', 'templates/**'],
    tasks: ['test'],
    options: {
      nospawn: true
    }
  },
  styles: {
  	files: ['stylesheets/*.scss'],
  	tasks: ['sass', 'concat:css']
  }
};
