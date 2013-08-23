var grunt = require('grunt'),
    _ = grunt.util._;

module.exports = function(manifest){
  var defaults = {
    consumes: "",
    provides: "",
    ui: "",
    env: ""
  };

  var glazierConfig = grunt.config.process('<%= pkg.glazierConfig %>');

  return _.extend(defaults, manifest, glazierConfig);
};
