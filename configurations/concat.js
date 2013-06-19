module.exports = {
  js: {
    src: ['tmp/**/*.js'],
    dest: 'dist/dev/<%= pkg.glazierConfig.shortName %>/card.js',
    options: {
      header: 'hi',
      footer: "requireModule('card');"
    }
  },
  css: {
    src: ['tmp/css/style.css'],
    dest: 'dist/dev/<%= pkg.glazierConfig.shortName %>/card.css'
  }
};
