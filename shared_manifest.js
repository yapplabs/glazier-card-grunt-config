module.exports = function(grunt){
  return {
    name: grunt.config.process('<%= pkg.glazierConfig.repositoryName %>'),
    consumes: grunt.config.process('<%= pkg.glazierConfig.consumes %>'),
    provides: grunt.config.process('<%= pkg.glazierConfig.provides %>'),
    ui: grunt.config.process('<%= pkg.glazierConfig.ui %>'),
    env: grunt.config.process('<%= pkg.glazierConfig.env %>')
  };
}
