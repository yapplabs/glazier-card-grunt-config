module.exports = {
  cardjs: {
    src: ['tmp/**/*.js', '!tmp/test/**/*.js'],
    dest: 'dist/dev/<%= pkg.name %>/card.js',
    options: {
      footer: "requireModule('card');"
    }
  },
  testjs: {
    src: ['tmp/test/**/*.js', '!tmp/test/vendor/**'],
    dest: 'dist/dev/<%= pkg.name %>/test.js'
  },
  testhtml: {
    src: ['tmp/test/index.html'],
    dest: 'dist/dev/<%= pkg.name %>/test.html'
  },
  css: {
    src: ['tmp/css/style.css'],
    dest: 'dist/dev/<%= pkg.name %>/card.css'
  }
};
