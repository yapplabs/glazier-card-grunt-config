var _ = require('lodash');

module.exports = function(grunt){
  grunt.registerTask('dev_manifest', 'creates manifest.json to be used in development', function() {
    var shortName = grunt.config.process('<%= pkg.glazierConfig.shortName %>');
    var assetHost = grunt.config.process('<%= pkg.glazierConfig.devAssetHost %>') || 'http://localhost:8000';

    var makeAssetUrl = function(filename) {
      return assetHost + '/cards/' + shortName + '/' + filename;
    };

    // TODO - this should be dynamic.
    var assets = {};
    assets['cards/' + shortName + '/card.css'] = makeAssetUrl('card.css'); // TODO remove
    assets['card.css'] = makeAssetUrl('card.css');

    var sharedManifest = require('../shared_manifest.js')(grunt);

    var manifest = {
      cardUrl: makeAssetUrl('card.js'),
      url: makeAssetUrl('manifest.json'), // The url value is only used by the grunt ingestCard task, and is not used in production
      assets: assets
    };

    manifest = _.extend({}, manifest, sharedManifest);

    grunt.file.write('dist/dev/' + shortName + '/manifest.json', JSON.stringify(manifest, null, 2));
  });
};
