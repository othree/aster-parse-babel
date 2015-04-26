'use strict';

var parse = require('babel-core').transform;
var attachComments = require('estraverse').attachComments;

module.exports = function (options) {
  options = options || {};
  options.ast = true;
  options.code = false;

  var attachComment = true;

  return function (files) {
    return files.map(function (file) {
      var result = parse(file.contents, options);
      var ast = result.ast.program;

      return {
        type: 'File',
        program: ast,
        loc: {
          source: file.path
        }
      };
    });
  };
};

