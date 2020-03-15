import get from '../utils/get';
import { stripTags } from '../utils/html';
import { isArray, isPlainObject, isUndefined } from '../utils/inspect';
import { keys } from '../utils/object';
import { warn } from '../utils/warn';
var OPTIONS_OBJECT_DEPRECATED_MSG = 'Setting prop "options" to an object is deprecated. Use the array format instead.'; // @vue/component

export default {
  props: {
    options: {
      type: [Array, Object],
      default: function _default() {
        return [];
      }
    },
    valueField: {
      type: String,
      default: 'value'
    },
    textField: {
      type: String,
      default: 'text'
    },
    htmlField: {
      type: String,
      default: 'html'
    },
    disabledField: {
      type: String,
      default: 'disabled'
    }
  },
  computed: {
    formOptions: function formOptions() {
      var _this = this;

      var options = this.options; // Normalize the given options array

      if (isArray(options)) {
        return options.map(function (option) {
          return _this.normalizeOption(option);
        });
      } // Deprecate the object options format


      warn(OPTIONS_OBJECT_DEPRECATED_MSG, this.$options.name); // Normalize a `options` object to an array of options

      return keys(options).map(function (key) {
        return _this.normalizeOption(options[key] || {}, key);
      });
    }
  },
  methods: {
    normalizeOption: function normalizeOption(option) {
      var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      // When the option is an object, normalize it
      if (isPlainObject(option)) {
        var value = get(option, this.valueField);
        var text = get(option, this.textField);
        return {
          value: isUndefined(value) ? key || text : value,
          text: stripTags(String(isUndefined(text) ? key : text)),
          html: get(option, this.htmlField),
          disabled: Boolean(get(option, this.disabledField))
        };
      } // Otherwise create an `<option>` object from the given value


      return {
        value: key || option,
        text: stripTags(String(option)),
        disabled: false
      };
    }
  }
};