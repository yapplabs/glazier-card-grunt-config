function config(configFileName) {
  return require('./configurations/' + configFileName);
}

var config = {
  s3: config('s3'),
  md5: config('md5'),
  copy: config('copy'),
  clean: ["tmp", "dist"],
  concat: config('concat'),
  jshint: config('jshint'),
  transpile: config('transpile'),
  ember_handlebars: config('ember_handlebars')
};

module.exports = {
  config: config
};
