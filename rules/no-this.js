'use strict';

module.exports = context => ({
  ThisExpression: function ( node ) {
    context.report( node, 'Do not use this' );
  }
});
