# eslint-plugin-this


[![Build Status](https://travis-ci.org/matijs/eslint-plugin-this.svg?branch=master)](https://travis-ci.org/matijs/eslint-plugin-this)
[![Version on npm](https://img.shields.io/npm/v/eslint-plugin-this.svg)](https://js.com/package/eslint-plugin-this)

do not allow `this`

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm install eslint --save-dev
```

Next, install `eslint-plugin-this`:

```
$ npm install eslint-plugin-this --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` or `--global` flag) then you must also install `eslint-plugin-this` globally.

## Usage

Add `this` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "this"
    ]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "this/no-this": 2
    }
}
```

## Supported Rules

* no-this

## Thanks

Thanks to [Brian Leroux](https://twitter.com/brianleroux/) for [asking](https://twitter.com/brianleroux/status/765951425922805761) if this existed and Björn Tegelund for basically spelling out how to [create an ESLint plugin](https://medium.com/tumblbug-engineering/creating-an-eslint-plugin-87f1cb42767f#.ijk5j86go)
