# vue-sfc-descriptor-to-string

Convert SFCDescriptor to source

## Install

`npm install vue-sfc-descriptor-to-string`

## Usage

```js
// parse an sfc
const compiler = require('vue-template-compiler');
const sfcDescriptor = compiler.parseComponent(sfcSource);

// convert sfc descriptor back to source
const toString = require('vue-sfc-descriptor-to-string');
const result = toString(sfcDescriptor);

result == sfcSource // => true, but see caveats below
```

## API

`const toString = require('vue-sfc-descriptor-to-string');`

### `toString(SFCDescriptor, options)`

#### SFCDescriptor

Object that looks like an [SFCDescriptor](https://github.com/vuejs/vue/blob/dev/flow/compiler.js#L177)

#### options

Optional object, defaults to `{}`

##### options.indents

Optional object that can have a property for each sfc block name (e.g. `template`). Values are the number of spaces to indent that block's content.

Defaults to

```js
{
  template: 2,
  script: 0,
  style: 0
}
```

## Caveats

This module isn't a true inverse of `compiler.parseComponent()` because it doesn't always produce the exact same sfc compared to what was parsed. It assumes the parsed sfc

- ends with a single newline
- has a single space before each attribute on `<script>`, `<template>`, `<style>`
- has attributes in abc order on `<script>`, `<template>`, `<style>`
- other stuff

## License

MIT