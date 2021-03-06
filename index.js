/* jshint node: true */
'use strict';

var SassLinter = require('broccoli-sass-lint');
var mergeTrees = require('broccoli-merge-trees');
var fs = require('fs');

module.exports = {
  name: 'ember-cli-sass-lint',

  included: function(app) {
    if (!app.isTestingSassLintAddon) {
      this._super.included(app);
    }

    this.app = app;
    this.sassLintOptions = app.options.sassLint || {};
  },

  lintTree: function(type, tree) {
    var mergedTrees;

    if (type === 'app') {
      mergedTrees = mergeTrees([this.app.trees.app]);

      return new SassLinter(mergedTrees, this.sassLintOptions);
    }
  },
};
