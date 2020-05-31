const adapt = require('../../../src/index');

module.exports = adapt((fileInfo, api, options) => {
  return `
export default {};
`;
});
