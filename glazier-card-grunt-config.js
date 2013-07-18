function config(configFileName) {
  return require('./configurations/' + configFileName);
}

var registerDevManifestGruntTask = require('./tasks/dev_manifest.js')

var config = {
  env: process.env,
  s3: config('s3'),
  md5: config('md5'),
  copy: config('copy'),
  clean: ["tmp", "dist"],
  concat: config('concat'),
  jshint: config('jshint'),
  transpile: config('transpile'),
  qunit: config('qunit'),
  emberTemplates: config('ember_templates'),
  watch: config('watch'),
  sass: config('sass')
};

module.exports = {
  createSharedConfig: function(grunt) {
    var sharedConfig = config;
    config.pkg = grunt.file.readJSON('package.json');
    return config;
  },
  registerSharedTasks: function(grunt) {
    registerDevManifestGruntTask(grunt);
    grunt.registerTask('build', ['clean', 'emberTemplates', 'transpile', 'jshint', 'copy:main', 'copy:test', 'copy:testVendor', 'sass', 'concat', 'dev_manifest']);
    grunt.registerTask('manifest', ['build', 'md5', 'copy:manifest']);
    grunt.registerTask('deploy', ['manifest', 's3']);
    grunt.registerTask('test', ['build', 'qunit:all']);
    grunt.registerTask('autotest', ['watch']);
    grunt.registerTask('default', ['build']);
  }
};
