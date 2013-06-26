glazier-card-grunt-config
=========================

Shared grunt configuration for glazier cards.

### Usage

You will need your package.json to add dependencies for the grunt task libraries being used:

    npm install --save-dev grunt-contrib-jshint grunt-es6-module-transpiler grunt-contrib-concat grunt-contrib-clean grunt-contrib-copy
    npm install --save-dev grunt-ember-handlebars grunt-contrib-handlebars grunt-md5 grunt-s3 lodash

Add this to your package.json to include this module:

    npm install --save-dev glazier-card-grunt-config

Your card's package.json should contain a `glazierConfig` options object.  The `consumes`, `assetHost`, `shortName` and `repositoryName` keys are required.  An example looks like:

    "glazierConfig": {
      "consumes": [
        "unauthenticatedGithubApi",
        "authenticatedGithubApi",
        "repository",
        "identity"
      ],
      "assetHost": "http://glazier.s3.amazonaws.com",
      "shortName": "github-issues",
      "repositoryName": "yapplabs/github-issues"
    }

In order to use the `deploy` task, you need to set environment variables with details for your bucket:

    GLAZIER_S3_KEY
    GLAZIER_S3_SECRET

Placing the following in your `Gruntfile.js` will give you the standard set of card grunt tasks:

    var glazierCardGruntConfig = require('glazier-card-grunt-config'),
      sharedConfig = glazierCardGruntConfig.createSharedConfig(grunt);

    grunt.initConfig(sharedConfig);
    glazierCardGruntConfig.registerSharedTasks(grunt);

### Tasks

  * `build` - copies concatenated assets into dist folder for use in dev
  * `manifest` - fingerprints assets and creates a manifest describing them
  * `deploy` - creates the manifest and fingerprinted assets and uploads them to S3
