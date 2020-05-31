const jscodeshiftMode = require('./jscodeshift-mode');

module.exports = adapt;

function adapt(transform) {
  return jscodeshiftMode(transform);
}
