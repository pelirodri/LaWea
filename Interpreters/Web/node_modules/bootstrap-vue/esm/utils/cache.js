function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { hasOwnProperty } from './object';
export var makePropWatcher = function makePropWatcher(propName) {
  return {
    handler: function handler(newVal, oldVal) {
      for (var key in oldVal) {
        if (!hasOwnProperty(newVal, key)) {
          this.$delete(this.$data[propName], key);
        }
      }

      for (var _key in newVal) {
        this.$set(this.$data[propName], _key, newVal[_key]);
      }
    }
  };
};
export var makePropCacheMixin = function makePropCacheMixin(propName, proxyPropName) {
  return {
    data: function data() {
      return _defineProperty({}, proxyPropName, {});
    },
    watch: _defineProperty({}, propName, makePropWatcher(proxyPropName)),
    created: function created() {
      this[proxyPropName] = _objectSpread({}, this[propName]);
    }
  };
};