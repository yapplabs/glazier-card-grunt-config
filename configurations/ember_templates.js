module.exports = {
  compile: {
    options: {
      templateName: function(filename) {
        return filename.replace(/templates\//,'').replace(/\.handlebars$/,'');
      }
    },
    files: {
      "tmp/templates.js": "templates/*.handlebars"
    }
  }
};
