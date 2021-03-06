var grunt = require('grunt');
var path = require('path');
var _ = grunt.util._;
var CARD_URL_REGEXP = /tmp\/md5\/card-[\w\d]{32}\.js$/;

module.exports = {
  compile: {
    files: [{
      expand: true,
      cwd: "dist/dev/<%= pkg.name %>",
      src: ['**/*'],
      dest: 'tmp/md5/',
      filter: 'isFile'
    }],

    options: {
      encoding: null,
      keepBasename: true,
      keepExtension: true,
      after: function (fileChanges, options) {
        var manifest, sharedManifest, key, file, from, to, name, assetHost, displayName;

        name = grunt.config.process('<%= pkg.name %>');
        assetHost = grunt.config.process('<%= pkg.glazierConfig.assetHost %>');
        displayName = grunt.config.process('<%= pkg.glazierConfig.displayName %>');

        if (!name)      { throw new Error("Missing: pkg.name") }
        if (!assetHost) { throw new Error("Missing: pkg.glazierConfig.assetHost"); }

        var file = path.join(__dirname, '..', 'shared_manifest.js');
        manifest = require(file)({
          cardUrl: '',
          displayName: displayName,
          name: name,
          assets: {}
        });

        for (key in fileChanges) {
          file = fileChanges[key];

          var fromRegexp =  new RegExp('^dist/dev/' + name + '/');

          from = file.oldPath.replace(fromRegexp, '');
          to = file.newPath.replace(/^tmp\/md5/, assetHost + '/assets/cards/' + name + '/assets');

          console.log('testing ' + file.newPath);
          if (CARD_URL_REGEXP.test(file.newPath)) {
            manifest.cardUrl = to;
          } else {
            manifest.assets[from] = to;
          }
        }

        if (!manifest.cardUrl) {
          console.error(manifest);
          throw new Error("Missing cardUrl in: `" + name + "` manifest");
        }

        grunt.file.write('tmp/manifest.json', JSON.stringify(manifest, null, 2));
      }
    }
  }
};
