module.exports = {
  cardjs: {
    src: ['vendor/**/*.js', 'tmp/**/*.js', '!tmp/test/**/*.js'],
    dest: 'dist/dev/<%= pkg.name %>/card.js',
    options: {
      footer: "requireModule('card');"
    }
  },
  testcardjs: {
    src: ['tmp/**/*.js', '!tmp/test/**/*.js'],
    dest: 'dist/dev/<%= pkg.name %>/test/card_modules.js'
  },
  testjs: {
    src: ['tmp/test/**/*.js', '!tmp/test/vendor/**'],
    dest: 'dist/dev/<%= pkg.name %>/test/test.js'
  },
  testhtml: {
    src: ['tmp/test/index.html'],
    dest: 'dist/dev/<%= pkg.name %>/test/index.html'
  },
  css: {
    src: ['tmp/css/style.css'],
    dest: 'dist/dev/<%= pkg.name %>/card.css'
  }
};
