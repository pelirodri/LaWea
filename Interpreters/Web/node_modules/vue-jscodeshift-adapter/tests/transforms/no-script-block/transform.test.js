const { testTransform } = require('../test-helper');
const transform = require('./transform');

const input = `
<template>
  <h1>This is just a template</h1>
</template>
`;

// jscodeshift test utils represent a no-op transform as empty string
const output = '';

testTransform(transform, 'Widget.vue', input, output);