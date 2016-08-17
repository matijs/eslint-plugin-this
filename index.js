'use strict';

module.exports = function ( context ) {
  return {
    'ThisExpression': function ( node ) {
      context.report( node, 'Do not use this' );
    }
  };
};

module.exports.schema = [];

module.exports.configs = {
  'recommended': {
    'rules': {
      'this/no-this': 2
    }
  }
};
