'use strict';

module.exports.rules = {
  'no-this': require( './rules/no-this.js' )
};

module.exports.configs = {
  'recommended': {
    'rules': {
      'this/no-this': 2
    }
  }
};
