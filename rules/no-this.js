'use strict';

module.exports = function ( context ) {
  return {
    'ThisExpression': function ( node ) {
      context.report( node, 'Do not use this' );
    }
  };
};

module.exports.schema = [];
