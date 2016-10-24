'use strict';

const rule = require( `${__dirname}/../rules/no-this` );
const RuleTester = require( 'eslint' ).RuleTester;
const ruleTester = new RuleTester();

const error = {
  ruleId: 'no-this',
  message: 'Do not use this.'
}

ruleTester.run( 'no-this', rule, {
  valid: [
    `var str = 'this';`
  ],
  invalid: [
    {
      code: 'function Foo ( bar ) { this.bar = bar }',
      errors: [error]
    },
    {
      code: 'foo.call( this );',
      errors: [error]
    },
    {
      code: 'var foo = { bar: 1, baz: function() { return this.bar + 1; } }',
      errors: [error]
    }
  ]
} );
