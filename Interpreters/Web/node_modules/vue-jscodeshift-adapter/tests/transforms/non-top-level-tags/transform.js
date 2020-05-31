const adapt = require('../../../src/index');

module.exports = adapt((fileInfo, api, options) => {
  return `
// this is new` + fileInfo.source;
});
