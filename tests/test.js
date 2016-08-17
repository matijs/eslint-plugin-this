'use strict';
const rule = require( '../index' );
const RuleTester = require( 'eslint' ).RuleTester;
const ruleTester = new RuleTester();

ruleTester.run( 'no-this', rule, {
  'invalid': [
    {
      'code': 'function Foo ( bar ) { this.bar = bar }',
      'errors': [{
        'message': 'Do not use this',
        'type': 'ThisExpression'
      }]
    },
    {
      'code': 'foo.call( this );',
      'errors': [{
        'message': 'Do not use this',
        'type': 'ThisExpression'
      }]
    },
    {
      'code': 'var foo = { bar: 1, baz: function() { return this.bar + 1; } }',
      'errors': [{
        'message': 'Do not use this',
        'type': 'ThisExpression'
      }]
    }
  ],
  'valid': [
    'var str = "this";'
  ]
} );
