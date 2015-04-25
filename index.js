'use strict';

var parse = require('babel-core').transform;

module.exports = function (options) {
  options = options || {};

  return function (files) {
    return files.map(function (file) {
      var result = parse(file.contents, options);

      return {
        type: 'File',
        program: result.ast,
        loc: {
          source: file.path
        }
      };
    });
  };
};

