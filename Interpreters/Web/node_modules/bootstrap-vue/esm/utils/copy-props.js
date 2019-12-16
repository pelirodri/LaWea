function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import identity from './identity';
import { isArray, isObject } from './inspect';
/**
 * Copies props from one array/object to a new array/object. Prop values
 * are also cloned as new references to prevent possible mutation of original
 * prop object values. Optionally accepts a function to transform the prop name.
 *
 * @param {[]|{}} props
 * @param {Function} transformFn
 */

var copyProps = function copyProps(props) {
  var transformFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : identity;

  if (isArray(props)) {
    return props.map(transformFn);
  } // Props as an object.


  var copied = {};

  for (var prop in props) {
    /* istanbul ignore else */
    // eslint-disable-next-line no-prototype-builtins
    if (props.hasOwnProperty(prop)) {
      // If the prop value is an object, do a shallow clone to prevent
      // potential mutations to the original object.
      copied[transformFn(prop)] = isObject(props[prop]) ? _objectSpread({}, props[prop]) : props[prop];
    }
  }

  return copied;
};

export default copyProps;