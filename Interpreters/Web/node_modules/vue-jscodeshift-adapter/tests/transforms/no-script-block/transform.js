const adapt = require('../../../src/index');

module.exports = adapt((fileInfo, api, options) => {
  throw new Error('This transform should not have been invoked');
});
