import { lowerFirst } from './string';
/**
 * @param {string} prefix
 * @param {string} value
 */

var unprefixPropName = function unprefixPropName(prefix, value) {
  return lowerFirst(value.replace(prefix, ''));
};

export default unprefixPropName;