var _ = require('grunt').util._;

module.exports = function(grunt){
  grunt.registerTask('dev_manifest', 'creates manifest.json to be used in development', function() {
    var name = grunt.config.process('<%= pkg.name %>');

    if (!name) {
      throw new Error("Missing pkg.name");
    }

    var assetHost = grunt.config.process('<%= pkg.glazierConfig.devAssetHost %>') || 'http://localhost:8000';

    var makeAssetUrl = function(filename) {
      return assetHost + '/cards/' + name + '/' + filename;
    };

    // TODO - this should be dynamic.
    var assets = {};
    assets['cards/' + name + '/card.css'] = makeAssetUrl('card.css'); // TODO remove
    assets['card.css'] = makeAssetUrl('card.css');

    var sharedManifest = require('../shared_manifest.js')(grunt);

    var manifest = {
      cardUrl: makeAssetUrl('card.js'),
      url: makeAssetUrl('manifest.json'), // The url value is only used by the grunt ingestCard task, and is not used in production
      assets: assets
    };

    manifest = _.extend({}, manifest, sharedManifest);

    grunt.file.write('dist/dev/' + name + '/manifest.json', JSON.stringify(manifest, null, 2));
  });
};
