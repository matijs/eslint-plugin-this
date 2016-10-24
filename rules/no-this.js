'use strict';

const create = context => {
  return {
    ThisExpression: node => {
      context.report({
        node,
        message: 'Do not use this.'
      });
    }
  }
}

module.exports = {
  create
}
