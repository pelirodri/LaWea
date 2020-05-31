const { testTransform } = require('../test-helper');
const transform = require('./transform');

const input = `
export function stop() {
  console.log('stopping');
}
`;

const output = `
export function go() {
  console.log('going');
}
`;

testTransform(transform, 'util.js', input, output);