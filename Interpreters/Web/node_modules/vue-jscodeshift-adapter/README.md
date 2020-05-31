# vue-jscodeshift-adapter

[![Build Status](https://travis-ci.org/psalaets/vue-jscodeshift-adapter.svg?branch=master)](https://travis-ci.org/psalaets/vue-jscodeshift-adapter) [![Greenkeeper badge](https://badges.greenkeeper.io/psalaets/vue-jscodeshift-adapter.svg)](https://greenkeeper.io/)

Run [jscodeshift](https://github.com/facebook/jscodeshift) on Vue single file components

## Install

```
npm install vue-jscodeshift-adapter -D
```

## Usage

The instructions below assume you're familiar with [jscodeshift](https://github.com/facebook/jscodeshift).

### Run a codemod on some `.js` and/or `.vue` files

|When transforming|`fileInfo.source` will be|
|-----------------|-------------------------|
|`.js`            | the contents of the file|
|`.vue`           | the contents of `<script>`|

The source file will be updated appropriately based on the return value of your `transform()`.

*If `.vue` file doesn't have a `<script>`, your `transform()` will not be called and the source file will not be changed.*

#### 1. Create wrapped transform function

```js
// my-transform.js
const adapt = require('vue-jscodeshift-adapter');
const someCodemod = require('some-codemod');

module.exports = adapt(someCodemod);
```

#### 2. Run jscodeshift

```
$ jscodeshift <path> -t my-transform.js --extensions vue,js
```

See [jscodeshift readme](https://github.com/facebook/jscodeshift#usage-cli) for more info on jscodeshift CLI.

## License

MIT