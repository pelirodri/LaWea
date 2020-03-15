/*!
 * BootstrapVue 2.7.0
 *
 * @link https://bootstrap-vue.js.org
 * @source https://github.com/bootstrap-vue/bootstrap-vue
 * @copyright (c) 2016-2020 BootstrapVue
 * @license MIT
 * https://github.com/bootstrap-vue/bootstrap-vue/blob/master/LICENSE
 */

import Vue from 'vue';
import { mergeData } from 'vue-functional-data-merge';
import Popper from 'popper.js';
import { Wormhole, PortalTarget, Portal } from 'portal-vue';

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

//

// --- Static ---
var from = function from() {
  return Array.from.apply(Array, arguments);
};
var isArray = function isArray(val) {
  return Array.isArray(val);
}; // --- Instance ---

var arrayIncludes = function arrayIncludes(array, value) {
  return array.indexOf(value) !== -1;
};
var concat = function concat() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Array.prototype.concat.apply([], args);
};

var assign = function assign() {
  return Object.assign.apply(Object, arguments);
};
var create = function create(proto, optionalProps) {
  return Object.create(proto, optionalProps);
};
var defineProperties = function defineProperties(obj, props) {
  return Object.defineProperties(obj, props);
};
var defineProperty = function defineProperty(obj, prop, descr) {
  return Object.defineProperty(obj, prop, descr);
};
var freeze = function freeze(obj) {
  return Object.freeze(obj);
};
var getOwnPropertyNames = function getOwnPropertyNames(obj) {
  return Object.getOwnPropertyNames(obj);
};
var keys = function keys(obj) {
  return Object.keys(obj);
}; // --- "Instance" ---

var hasOwnProperty = function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};
var toString = function toString(obj) {
  return Object.prototype.toString.call(obj);
}; // --- Utilities ---

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 * Note object could be a complex type like array, date, etc.
 */

var isObject = function isObject(obj) {
  return obj !== null && _typeof(obj) === 'object';
};
/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */

var isPlainObject = function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
};
/**
 * Shallow copy an object. If the passed in object
 * is null or undefined, returns an empty object
 */

var clone = function clone(obj) {
  return _objectSpread2({}, obj);
};
/**
 * Return a shallow copy of object with
 * the specified properties omitted
 * @link https://gist.github.com/bisubus/2da8af7e801ffd813fab7ac221aa7afc
 */

var omit = function omit(obj, props) {
  return keys(obj).filter(function (key) {
    return props.indexOf(key) === -1;
  }).reduce(function (result, key) {
    return _objectSpread2({}, result, _defineProperty({}, key, obj[key]));
  }, {});
};
/**
 * Convenience method to create a read-only descriptor
 */

var readonlyDescriptor = function readonlyDescriptor() {
  return {
    enumerable: true,
    configurable: false,
    writable: false
  };
};
/**
 * Deep-freezes and object, making it immutable / read-only.
 * Returns the same object passed-in, but frozen.
 * Freezes inner object/array/values first.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
 * Note: this method will not work for property values using Symbol() as a key
 */

var deepFreeze = function deepFreeze(obj) {
  // Retrieve the property names defined on object/array
  // Note: `keys` will ignore properties that are keyed by a `Symbol()`
  var props = keys(obj); // Iterate over each prop and recursively freeze it

  props.forEach(function (prop) {
    var value = obj[prop]; // If value is a plain object or array, we deepFreeze it

    obj[prop] = value && (isPlainObject(value) || isArray(value)) ? deepFreeze(value) : value;
  });
  return freeze(obj);
};

/**
 * Utilities to get information about the current environment
 */
// --- Constants ---
var hasWindowSupport = typeof window !== 'undefined';
var hasDocumentSupport = typeof document !== 'undefined';
var hasNavigatorSupport = typeof navigator !== 'undefined';
var hasPromiseSupport = typeof Promise !== 'undefined';
var hasMutationObserverSupport = typeof MutationObserver !== 'undefined' || typeof WebKitMutationObserver !== 'undefined' || typeof MozMutationObserver !== 'undefined';
var isBrowser = hasWindowSupport && hasDocumentSupport && hasNavigatorSupport; // Browser type sniffing

var userAgent = isBrowser ? window.navigator.userAgent.toLowerCase() : '';
var isJSDOM = userAgent.indexOf('jsdom') > 0;
var isIE = /msie|trident/.test(userAgent); // Determine if the browser supports the option passive for events

var hasPassiveEventSupport = function () {
  var passiveEventSupported = false;

  if (isBrowser) {
    try {
      var options = {
        get passive() {
          // This function will be called when the browser
          // attempts to access the passive property.

          /* istanbul ignore next: will never be called in JSDOM */
          passiveEventSupported = true;
        }

      };
      window.addEventListener('test', options, options);
      window.removeEventListener('test', options, options);
    } catch (err) {
      /* istanbul ignore next: will never be called in JSDOM */
      passiveEventSupported = false;
    }
  }

  return passiveEventSupported;
}();
var hasTouchSupport = isBrowser && ('ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0);
var hasPointerEventSupport = isBrowser && Boolean(window.PointerEvent || window.MSPointerEvent);
var hasIntersectionObserverSupport = isBrowser && 'IntersectionObserver' in window && 'IntersectionObserverEntry' in window && // Edge 15 and UC Browser lack support for `isIntersecting`
// but we an use intersectionRatio > 0 instead
// 'isIntersecting' in window.IntersectionObserverEntry.prototype &&
'intersectionRatio' in window.IntersectionObserverEntry.prototype; // --- Getters ---

var getEnv = function getEnv(key) {
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var env = typeof process !== 'undefined' && process ? process.env || {} : {};

  if (!key) {
    /* istanbul ignore next */
    return env;
  }

  return env[key] || fallback;
};
var getNoWarn = function getNoWarn() {
  return getEnv('BOOTSTRAP_VUE_NO_WARN');
};

var w = hasWindowSupport ? window : {};
var Element$1 = hasWindowSupport ? w.Element : /*#__PURE__*/function (_Object) {
  _inherits(Element, _Object);

  function Element() {
    _classCallCheck(this, Element);

    return _possibleConstructorReturn(this, _getPrototypeOf(Element).apply(this, arguments));
  }

  return Element;
}( /*#__PURE__*/_wrapNativeSuper(Object));
var HTMLElement = hasWindowSupport ? w.HTMLElement : /*#__PURE__*/function (_Element) {
  _inherits(HTMLElement, _Element);

  function HTMLElement() {
    _classCallCheck(this, HTMLElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(HTMLElement).apply(this, arguments));
  }

  return HTMLElement;
}(Element$1);
var SVGElement = hasWindowSupport ? w.SVGElement : /*#__PURE__*/function (_Element2) {
  _inherits(SVGElement, _Element2);

  function SVGElement() {
    _classCallCheck(this, SVGElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(SVGElement).apply(this, arguments));
  }

  return SVGElement;
}(Element$1);
var File = hasWindowSupport ? w.File : /*#__PURE__*/function (_Object2) {
  _inherits(File, _Object2);

  function File() {
    _classCallCheck(this, File);

    return _possibleConstructorReturn(this, _getPrototypeOf(File).apply(this, arguments));
  }

  return File;
}( /*#__PURE__*/_wrapNativeSuper(Object));

var toType = function toType(val) {
  return _typeof(val);
};
var toRawType = function toRawType(val) {
  return Object.prototype.toString.call(val).slice(8, -1);
};
var isUndefined = function isUndefined(val) {
  return val === undefined;
};
var isNull = function isNull(val) {
  return val === null;
};
var isUndefinedOrNull = function isUndefinedOrNull(val) {
  return isUndefined(val) || isNull(val);
};
var isFunction = function isFunction(val) {
  return toType(val) === 'function';
};
var isBoolean = function isBoolean(val) {
  return toType(val) === 'boolean';
};
var isString = function isString(val) {
  return toType(val) === 'string';
};
var isNumber = function isNumber(val) {
  return toType(val) === 'number';
};
var isDate = function isDate(val) {
  return val instanceof Date;
};
var isEvent = function isEvent(val) {
  return val instanceof Event;
};
var isFile = function isFile(val) {
  return val instanceof File;
};
var isRegExp = function isRegExp(val) {
  return toRawType(val) === 'RegExp';
};
var isPromise = function isPromise(val) {
  return !isUndefinedOrNull(val) && isFunction(val.then) && isFunction(val.catch);
}; // Extra convenience named re-exports

var cloneDeep = function cloneDeep(obj) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : obj;

  if (isArray(obj)) {
    return obj.reduce(function (result, val) {
      return [].concat(_toConsumableArray(result), [cloneDeep(val, val)]);
    }, []);
  }

  if (isPlainObject(obj)) {
    return keys(obj).reduce(function (result, key) {
      return _objectSpread2({}, result, _defineProperty({}, key, cloneDeep(obj[key], obj[key])));
    }, {});
  }

  return defaultValue;
};

var identity = function identity(x) {
  return x;
};

var RX_ARRAY_NOTATION = /\[(\d+)]/g;
/**
 * Get property defined by dot/array notation in string.
 *
 * @link https://gist.github.com/jeneg/9767afdcca45601ea44930ea03e0febf#gistcomment-1935901
 *
 * @param {Object} obj
 * @param {string|Array} path
 * @param {*} defaultValue (optional)
 * @return {*}
 */

var get = function get(obj, path) {
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  // Handle array of path values
  path = isArray(path) ? path.join('.') : path; // If no path or no object passed

  if (!path || !isObject(obj)) {
    return defaultValue;
  } // Handle edge case where user has dot(s) in top-level item field key
  // See https://github.com/bootstrap-vue/bootstrap-vue/issues/2762
  // Switched to `in` operator vs `hasOwnProperty` to handle obj.prototype getters
  // https://github.com/bootstrap-vue/bootstrap-vue/issues/3463


  if (path in obj) {
    return obj[path];
  } // Handle string array notation (numeric indices only)


  path = String(path).replace(RX_ARRAY_NOTATION, '.$1');
  var steps = path.split('.').filter(identity); // Handle case where someone passes a string of only dots

  if (steps.length === 0) {
    return defaultValue;
  } // Traverse path in object to find result
  // We use `!=` vs `!==` to test for both `null` and `undefined`
  // Switched to `in` operator vs `hasOwnProperty` to handle obj.prototype getters
  // https://github.com/bootstrap-vue/bootstrap-vue/issues/3463


  return steps.every(function (step) {
    return isObject(obj) && step in obj && (obj = obj[step]) != null;
  }) ? obj : defaultValue;
};

/**
 * Log a warning message to the console with BootstrapVue formatting
 * @param {string} message
 */

var warn = function warn(message)
/* istanbul ignore next */
{
  var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (!getNoWarn()) {
    console.warn("[BootstrapVue warn]: ".concat(source ? "".concat(source, " - ") : '').concat(message));
  }
};
/**
 * Warn when no Promise support is given
 * @param {string} source
 * @returns {boolean} warned
 */

var warnNotClient = function warnNotClient(source) {
  /* istanbul ignore else */
  if (isBrowser) {
    return false;
  } else {
    warn("".concat(source, ": Can not be called during SSR."));
    return true;
  }
};
/**
 * Warn when no Promise support is given
 * @param {string} source
 * @returns {boolean} warned
 */

var warnNoPromiseSupport = function warnNoPromiseSupport(source) {
  /* istanbul ignore else */
  if (hasPromiseSupport) {
    return false;
  } else {
    warn("".concat(source, ": Requires Promise support."));
    return true;
  }
};
/**
 * Warn when no MutationObserver support is given
 * @param {string} source
 * @returns {boolean} warned
 */

var warnNoMutationObserverSupport = function warnNoMutationObserverSupport(source) {
  /* istanbul ignore else */
  if (hasMutationObserverSupport) {
    return false;
  } else {
    warn("".concat(source, ": Requires MutationObserver support."));
    return true;
  }
};

// NOTES
//
// The global config SHALL NOT be used to set defaults for Boolean props, as the props
// would loose their semantic meaning, and force people writing 3rd party components to
// explicity set a true or false value using the v-bind syntax on boolean props
//
// Supported config values (depending on the prop's supported type(s)):
// `String`, `Array`, `Object`, `null` or `undefined`
// BREAKPOINT DEFINITIONS
//
// Some components (`<b-col>` and `<b-form-group>`) generate props based on breakpoints,
// and this occurs when the component is first loaded (evaluated), which may happen
// before the config is created/modified
//
// To get around this we make these components' props async (lazy evaluation)
// The component definition is only called/executed when the first access to the
// component is used (and cached on subsequent uses)
// PROP DEFAULTS
//
// For default values on props, we use the default value factory function approach so
// that the default values are pulled in at each component instantiation
//
//  props: {
//    variant: {
//      type: String,
//      default: () => getConfigComponent('BAlert', 'variant')
//    }
//  }
//
// We also provide a cached getter for breakpoints, which are "frozen" on first access
// prettier-ignore

var DEFAULTS = deepFreeze({
  // Breakpoints
  breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'],
  // Form controls
  formControls: {
    size: null
  },
  // Component specific defaults are keyed by the component
  // name (PascalCase) and prop name (camelCase)
  BAlert: {
    dismissLabel: 'Close',
    variant: 'info'
  },
  BBadge: {
    variant: 'secondary'
  },
  BButton: {
    size: null,
    variant: 'secondary'
  },
  BButtonClose: {
    content: '&times;',
    // `textVariant` is `null` to inherit the current text color
    textVariant: null,
    ariaLabel: 'Close'
  },
  BCalendar: {
    // BFormDate will choose these first if not provided in BFormDate section
    labelPrevYear: 'Previous year',
    labelPrevMonth: 'Previous month',
    labelCurrentMonth: 'Current month',
    labelNextMonth: 'Next month',
    labelNextYear: 'Next year',
    labelToday: 'Today',
    labelSelected: 'Selected date',
    labelNoDateSelected: 'No date selected',
    labelCalendar: 'Calendar',
    labelNav: 'Calendar navigation',
    labelHelp: 'Use cursor keys to navigate calendar dates'
  },
  BCardSubTitle: {
    // `<b-card>` and `<b-card-body>` also inherit this prop
    subTitleTextVariant: 'muted'
  },
  BCarousel: {
    labelPrev: 'Previous Slide',
    labelNext: 'Next Slide',
    labelGotoSlide: 'Goto Slide',
    labelIndicators: 'Select a slide to display'
  },
  BDropdown: {
    toggleText: 'Toggle Dropdown',
    size: null,
    variant: 'secondary',
    splitVariant: null
  },
  BFormDatepicker: {
    // BFormDatepicker will choose from BCalendar first if not provided here
    labelPrevYear: null,
    labelPrevMonth: null,
    labelCurrentMonth: null,
    labelNextMonth: null,
    labelNextYear: null,
    labelToday: null,
    labelSelected: null,
    labelNoDateSelected: null,
    labelCalendar: null,
    labelNav: null,
    labelHelp: null,
    // These props are specific to BFormDatepicker
    labelTodayButton: 'Select today',
    labelResetButton: 'Reset',
    labelCloseButton: 'Close'
  },
  BFormFile: {
    browseText: 'Browse',
    // Chrome default file prompt
    placeholder: 'No file chosen',
    dropPlaceholder: 'Drop files here'
  },
  BFormTag: {
    removeLabel: 'Remove tag',
    variant: 'secondary'
  },
  BFormTags: {
    addButtonText: 'Add',
    addButtonVariant: 'outline-secondary',
    duplicateTagText: 'Duplicate tag(s)',
    invalidTagText: 'Invalid tag(s)',
    placeholder: 'Add tag...',
    tagRemoveLabel: 'Remove tag',
    tagRemovedLabel: 'Tag removed',
    tagVariant: 'secondary'
  },
  BFormText: {
    textVariant: 'muted'
  },
  BFormTimepicker: {
    // Fallback to BTime
    labelNoTimeSelected: null,
    labelSelected: null,
    labelHours: null,
    labelMinutes: null,
    labelSeconds: null,
    labelAmpm: null,
    labelAm: null,
    labelPm: null,
    // Fallback to BTime then BFormSpinbutton
    labelDecrement: null,
    labelIncrement: null,
    // These props are specific to BFormTimepicker
    labelNowButton: 'Select now',
    labelResetButton: 'Reset',
    labelCloseButton: 'Close'
  },
  BFormSpinbutton: {
    labelDecrement: 'Decrement',
    labelIncrement: 'Increment'
  },
  BImg: {
    blankColor: 'transparent'
  },
  BImgLazy: {
    blankColor: 'transparent'
  },
  BInputGroup: {
    size: null
  },
  BJumbotron: {
    bgVariant: null,
    borderVariant: null,
    textVariant: null
  },
  BListGroupItem: {
    variant: null
  },
  BModal: {
    titleTag: 'h5',
    size: 'md',
    headerBgVariant: null,
    headerBorderVariant: null,
    headerTextVariant: null,
    headerCloseVariant: null,
    bodyBgVariant: null,
    bodyTextVariant: null,
    footerBgVariant: null,
    footerBorderVariant: null,
    footerTextVariant: null,
    cancelTitle: 'Cancel',
    cancelVariant: 'secondary',
    okTitle: 'OK',
    okVariant: 'primary',
    headerCloseContent: '&times;',
    headerCloseLabel: 'Close'
  },
  BNavbar: {
    variant: null
  },
  BNavbarToggle: {
    label: 'Toggle navigation'
  },
  BPagination: {
    size: null
  },
  BPaginationNav: {
    size: null
  },
  BPopover: {
    boundary: 'scrollParent',
    boundaryPadding: 5,
    customClass: null,
    delay: 50,
    variant: null
  },
  BProgress: {
    variant: null
  },
  BProgressBar: {
    variant: null
  },
  BSpinner: {
    variant: null
  },
  BTable: {
    selectedVariant: 'active',
    headVariant: null,
    footVariant: null
  },
  BTime: {
    labelNoTimeSelected: 'No time selected',
    labelSelected: 'Selected time',
    labelHours: 'Hours',
    labelMinutes: 'Minutes',
    labelSeconds: 'Seconds',
    labelAmpm: 'AM/PM',
    // It would be nice to be able to get these from Intl.DateTimeFormat somehow
    labelAm: 'AM',
    labelPm: 'PM',
    // The following inherit from BFormSpinbutton if not provided
    labelIncrement: null,
    labelDecrement: null
  },
  BToast: {
    toaster: 'b-toaster-top-right',
    autoHideDelay: 5000,
    variant: null,
    toastClass: null,
    headerClass: null,
    bodyClass: null
  },
  BToaster: {
    ariaLive: null,
    ariaAtomic: null,
    role: null
  },
  BTooltip: {
    boundary: 'scrollParent',
    boundaryPadding: 5,
    customClass: null,
    delay: 50,
    variant: null
  }
});

var NAME = 'BvConfig';
var PROP_NAME = '$bvConfig'; // Config manager class

var BvConfig = /*#__PURE__*/function () {
  function BvConfig() {
    _classCallCheck(this, BvConfig);

    // TODO: pre-populate with default config values (needs updated tests)
    // this.$_config = cloneDeep(DEFAULTS)
    this.$_config = {};
    this.$_cachedBreakpoints = null;
  }

  _createClass(BvConfig, [{
    key: "getDefaults",
    // Returns the defaults
    value: function getDefaults()
    /* istanbul ignore next */
    {
      return this.defaults;
    } // Method to merge in user config parameters

  }, {
    key: "setConfig",
    value: function setConfig() {
      var _this = this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!isPlainObject(config)) {
        /* istanbul ignore next */
        return;
      }

      var configKeys = getOwnPropertyNames(config);
      configKeys.forEach(function (cmpName) {
        /* istanbul ignore next */
        if (!hasOwnProperty(DEFAULTS, cmpName)) {
          warn("Unknown config property \"".concat(cmpName, "\""), NAME);
          return;
        }

        var cmpConfig = config[cmpName];

        if (cmpName === 'breakpoints') {
          // Special case for breakpoints
          var breakpoints = config.breakpoints;
          /* istanbul ignore if */

          if (!isArray(breakpoints) || breakpoints.length < 2 || breakpoints.some(function (b) {
            return !isString(b) || b.length === 0;
          })) {
            warn('"breakpoints" must be an array of at least 2 breakpoint names', NAME);
          } else {
            _this.$_config.breakpoints = cloneDeep(breakpoints);
          }
        } else if (isPlainObject(cmpConfig)) {
          // Component prop defaults
          var props = getOwnPropertyNames(cmpConfig);
          props.forEach(function (prop) {
            /* istanbul ignore if */
            if (!hasOwnProperty(DEFAULTS[cmpName], prop)) {
              warn("Unknown config property \"".concat(cmpName, ".").concat(prop, "\""), NAME);
            } else {
              // TODO: If we pre-populate the config with defaults, we can skip this line
              _this.$_config[cmpName] = _this.$_config[cmpName] || {};

              if (!isUndefined(cmpConfig[prop])) {
                _this.$_config[cmpName][prop] = cloneDeep(cmpConfig[prop]);
              }
            }
          });
        }
      });
    } // Clear the config. For testing purposes only

  }, {
    key: "resetConfig",
    value: function resetConfig() {
      this.$_config = {};
    } // Returns a deep copy of the user config

  }, {
    key: "getConfig",
    value: function getConfig() {
      return cloneDeep(this.$_config);
    }
  }, {
    key: "getConfigValue",
    value: function getConfigValue(key) {
      // First we try the user config, and if key not found we fall back to default value
      // NOTE: If we deep clone DEFAULTS into config, then we can skip the fallback for get
      return cloneDeep(get(this.$_config, key, get(DEFAULTS, key)));
    }
  }, {
    key: "defaults",
    get: function get()
    /* istanbul ignore next */
    {
      return DEFAULTS;
    }
  }], [{
    key: "Defaults",
    get: function get()
    /* istanbul ignore next */
    {
      return DEFAULTS;
    }
  }]);

  return BvConfig;
}(); // Method for applying a global config


var setConfig = function setConfig() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var Vue$1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Vue;
  // Ensure we have a $bvConfig Object on the Vue prototype.
  // We set on Vue and OurVue just in case consumer has not set an alias of `vue`.
  Vue$1.prototype[PROP_NAME] = Vue.prototype[PROP_NAME] = Vue$1.prototype[PROP_NAME] || Vue.prototype[PROP_NAME] || new BvConfig(); // Apply the config values

  Vue$1.prototype[PROP_NAME].setConfig(config);
}; // Method for resetting the user config. Exported for testing purposes only.

/**
 * Checks if there are multiple instances of Vue, and warns (once) about possible issues.
 * @param {object} Vue
 */

var checkMultipleVue = function () {
  var checkMultipleVueWarned = false;
  var MULTIPLE_VUE_WARNING = ['Multiple instances of Vue detected!', 'You may need to set up an alias for Vue in your bundler config.', 'See: https://bootstrap-vue.js.org/docs#using-module-bundlers'].join('\n');
  return function (Vue$1) {
    /* istanbul ignore next */
    if (!checkMultipleVueWarned && Vue !== Vue$1 && !isJSDOM) {
      warn(MULTIPLE_VUE_WARNING);
    }

    checkMultipleVueWarned = true;
  };
}();
/**
 * Plugin install factory function.
 * @param {object} { components, directives }
 * @returns {function} plugin install function
 */

var installFactory = function installFactory() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      components = _ref.components,
      directives = _ref.directives,
      plugins = _ref.plugins;

  var install = function install(Vue) {
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (install.installed) {
      /* istanbul ignore next */
      return;
    }

    install.installed = true;
    checkMultipleVue(Vue);
    setConfig(config, Vue);
    registerComponents(Vue, components);
    registerDirectives(Vue, directives);
    registerPlugins(Vue, plugins);
  };

  install.installed = false;
  return install;
};
/**
 * Plugin install factory function (no plugin config option).
 * @param {object} { components, directives }
 * @returns {function} plugin install function
 */

var installFactoryNoConfig = function installFactoryNoConfig() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      components = _ref2.components,
      directives = _ref2.directives,
      plugins = _ref2.plugins;

  var install = function install(Vue) {
    if (install.installed) {
      /* istanbul ignore next */
      return;
    }

    install.installed = true;
    checkMultipleVue(Vue);
    registerComponents(Vue, components);
    registerDirectives(Vue, directives);
    registerPlugins(Vue, plugins);
  };

  install.installed = false;
  return install;
};
/**
 * Plugin object factory function.
 * @param {object} { components, directives, plugins }
 * @returns {object} plugin install object
 */

var pluginFactory = function pluginFactory() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var extend = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _objectSpread2({}, extend, {
    install: installFactory(options)
  });
};
/**
 * Plugin object factory function (no config option).
 * @param {object} { components, directives, plugins }
 * @returns {object} plugin install object
 */

var pluginFactoryNoConfig = function pluginFactoryNoConfig() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var extend = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _objectSpread2({}, extend, {
    install: installFactoryNoConfig(options)
  });
};
/**
 * Load a group of plugins.
 * @param {object} Vue
 * @param {object} Plugin definitions
 */

var registerPlugins = function registerPlugins(Vue) {
  var plugins = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  for (var plugin in plugins) {
    if (plugin && plugins[plugin]) {
      Vue.use(plugins[plugin]);
    }
  }
};
/**
 * Load a component.
 * @param {object} Vue
 * @param {string} Component name
 * @param {object} Component definition
 */

var registerComponent = function registerComponent(Vue, name, def) {
  if (Vue && name && def) {
    Vue.component(name, def);
  }
};
/**
 * Load a group of components.
 * @param {object} Vue
 * @param {object} Object of component definitions
 */

var registerComponents = function registerComponents(Vue) {
  var components = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  for (var component in components) {
    registerComponent(Vue, component, components[component]);
  }
};
/**
 * Load a directive.
 * @param {object} Vue
 * @param {string} Directive name
 * @param {object} Directive definition
 */

var registerDirective = function registerDirective(Vue, name, def) {
  if (Vue && name && def) {
    // Ensure that any leading V is removed from the
    // name, as Vue adds it automatically
    Vue.directive(name.replace(/^VB/, 'B'), def);
  }
};
/**
 * Load a group of directives.
 * @param {object} Vue
 * @param {object} Object of directive definitions
 */

var registerDirectives = function registerDirectives(Vue) {
  var directives = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  for (var directive in directives) {
    registerDirective(Vue, directive, directives[directive]);
  }
};

var memoize = function memoize(fn) {
  var cache = create(null);
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var argsKey = JSON.stringify(args);
    return cache[argsKey] = cache[argsKey] || fn.apply(null, args);
  };
};

var PROP_NAME$1 = '$bvConfig';
var VueProto = Vue.prototype; // --- Getter methods ---

var getConfigValue = function getConfigValue(key) {
  return VueProto[PROP_NAME$1] ? VueProto[PROP_NAME$1].getConfigValue(key) : cloneDeep(get(DEFAULTS, key));
}; // Method to grab a config value for a particular component

var getComponentConfig = function getComponentConfig(cmpName) {
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  // Return the particular config value for key for if specified,
  // otherwise we return the full config (or an empty object if not found)
  return key ? getConfigValue("".concat(cmpName, ".").concat(key)) : getConfigValue(cmpName) || {};
}; // Convenience method for getting all breakpoint names

var getBreakpoints = function getBreakpoints() {
  return getConfigValue('breakpoints');
}; // Private function for caching / locking-in breakpoint names

var _getBreakpointsCached = memoize(function () {
  return getBreakpoints();
}); // Convenience method for getting all breakpoint names.
// Caches the results after first access.


var getBreakpointsCached = function getBreakpointsCached() {
  return cloneDeep(_getBreakpointsCached());
}; // Convenience method for getting breakpoints with
// the smallest breakpoint set as ''.
// Useful for components that create breakpoint specific props.
// Caches the results after first access.

var getBreakpointsUpCached = memoize(function () {
  var breakpoints = getBreakpointsCached();
  breakpoints[0] = '';
  return breakpoints;
}); // Convenience method for getting breakpoints with

var w$1 = hasWindowSupport ? window : {};
var d = hasDocumentSupport ? document : {};
var elProto = typeof Element !== 'undefined' ? Element.prototype : {}; // --- Normalization utils ---
// See: https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill

/* istanbul ignore next */

var matchesEl = elProto.matches || elProto.msMatchesSelector || elProto.webkitMatchesSelector; // See: https://developer.mozilla.org/en-US/docs/Web/API/Element/closest

/* istanbul ignore next */

var closestEl = elProto.closest || function (sel)
/* istanbul ignore next */
{
  var el = this;

  do {
    // Use our "patched" matches function
    if (matches(el, sel)) {
      return el;
    }

    el = el.parentElement || el.parentNode;
  } while (!isNull(el) && el.nodeType === Node.ELEMENT_NODE);

  return null;
}; // `requestAnimationFrame()` convenience method

var requestAF = w$1.requestAnimationFrame || w$1.webkitRequestAnimationFrame || w$1.mozRequestAnimationFrame || w$1.msRequestAnimationFrame || w$1.oRequestAnimationFrame || // Fallback, but not a true polyfill
// Only needed for Opera Mini

/* istanbul ignore next */
function (cb) {
  return setTimeout(cb, 16);
};
var MutationObs = w$1.MutationObserver || w$1.WebKitMutationObserver || w$1.MozMutationObserver || null; // --- Utils ---
// Remove a node from DOM

var removeNode = function removeNode(el) {
  return el && el.parentNode && el.parentNode.removeChild(el);
}; // Determine if an element is an HTML element

var isElement = function isElement(el) {
  return !!(el && el.nodeType === Node.ELEMENT_NODE);
}; // Determine if an HTML element is visible - Faster than CSS check

var isVisible = function isVisible(el) {
  if (!isElement(el) || !el.parentNode || !contains(d.body, el)) {
    // Note this can fail for shadow dom elements since they
    // are not a direct descendant of document.body
    return false;
  }

  if (el.style.display === 'none') {
    // We do this check to help with vue-test-utils when using v-show

    /* istanbul ignore next */
    return false;
  } // All browsers support getBoundingClientRect(), except JSDOM as it returns all 0's for values :(
  // So any tests that need isVisible will fail in JSDOM
  // Except when we override the getBCR prototype in some tests


  var bcr = getBCR(el);
  return !!(bcr && bcr.height > 0 && bcr.width > 0);
}; // Determine if an element is disabled

var isDisabled = function isDisabled(el) {
  return !isElement(el) || el.disabled || hasAttr(el, 'disabled') || hasClass(el, 'disabled');
}; // Cause/wait-for an element to reflow its content (adjusting its height/width)

var reflow = function reflow(el) {
  // Requesting an elements offsetHight will trigger a reflow of the element content

  /* istanbul ignore next: reflow doesn't happen in JSDOM */
  return isElement(el) && el.offsetHeight;
}; // Select all elements matching selector. Returns `[]` if none found

var selectAll = function selectAll(selector, root) {
  return from((isElement(root) ? root : d).querySelectorAll(selector));
}; // Select a single element, returns `null` if not found

var select = function select(selector, root) {
  return (isElement(root) ? root : d).querySelector(selector) || null;
}; // Determine if an element matches a selector

var matches = function matches(el, selector) {
  return isElement(el) ? matchesEl.call(el, selector) : false;
}; // Finds closest element matching selector. Returns `null` if not found

var closest = function closest(selector, root) {
  var includeRoot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (!isElement(root)) {
    return null;
  }

  var el = closestEl.call(root, selector); // Native closest behaviour when `includeRoot` is truthy,
  // else emulate jQuery closest and return `null` if match is
  // the passed in root element when `includeRoot` is falsey

  return includeRoot ? el : el === root ? null : el;
}; // Returns true if the parent element contains the child element

var contains = function contains(parent, child) {
  return parent && isFunction(parent.contains) ? parent.contains(child) : false;
}; // Get an element given an ID

var getById = function getById(id) {
  return d.getElementById(/^#/.test(id) ? id.slice(1) : id) || null;
}; // Add a class to an element

var addClass = function addClass(el, className) {
  // We are checking for `el.classList` existence here since IE 11
  // returns `undefined` for some elements (e.g. SVG elements)
  // See https://github.com/bootstrap-vue/bootstrap-vue/issues/2713
  if (className && isElement(el) && el.classList) {
    el.classList.add(className);
  }
}; // Remove a class from an element

var removeClass = function removeClass(el, className) {
  // We are checking for `el.classList` existence here since IE 11
  // returns `undefined` for some elements (e.g. SVG elements)
  // See https://github.com/bootstrap-vue/bootstrap-vue/issues/2713
  if (className && isElement(el) && el.classList) {
    el.classList.remove(className);
  }
}; // Test if an element has a class

var hasClass = function hasClass(el, className) {
  // We are checking for `el.classList` existence here since IE 11
  // returns `undefined` for some elements (e.g. SVG elements)
  // See https://github.com/bootstrap-vue/bootstrap-vue/issues/2713
  if (className && isElement(el) && el.classList) {
    return el.classList.contains(className);
  }

  return false;
}; // Set an attribute on an element

var setAttr = function setAttr(el, attr, val) {
  if (attr && isElement(el)) {
    el.setAttribute(attr, val);
  }
}; // Remove an attribute from an element

var removeAttr = function removeAttr(el, attr) {
  if (attr && isElement(el)) {
    el.removeAttribute(attr);
  }
}; // Get an attribute value from an element
// Returns `null` if not found

var getAttr = function getAttr(el, attr) {
  return attr && isElement(el) ? el.getAttribute(attr) : null;
}; // Determine if an attribute exists on an element
// Returns `true` or `false`, or `null` if element not found

var hasAttr = function hasAttr(el, attr) {
  return attr && isElement(el) ? el.hasAttribute(attr) : null;
}; // Return the Bounding Client Rect of an element
// Returns `null` if not an element

/* istanbul ignore next: getBoundingClientRect() doesn't work in JSDOM */

var getBCR = function getBCR(el) {
  return isElement(el) ? el.getBoundingClientRect() : null;
}; // Get computed style object for an element

/* istanbul ignore next: getComputedStyle() doesn't work in JSDOM */

var getCS = function getCS(el) {
  return hasWindowSupport && isElement(el) ? w$1.getComputedStyle(el) : {};
}; // Returns a `Selection` object representing the range of text selected
// Returns `null` if no window support is given

/* istanbul ignore next: getSelection() doesn't work in JSDOM */

var getSel = function getSel() {
  return hasWindowSupport && w$1.getSelection ? w$1.getSelection() : null;
}; // Return an element's offset with respect to document element
// https://j11y.io/jquery/#v=git&fn=jQuery.fn.offset

var offset = function offset(el)
/* istanbul ignore next: getBoundingClientRect(), getClientRects() doesn't work in JSDOM */
{
  var _offset = {
    top: 0,
    left: 0
  };

  if (!isElement(el) || el.getClientRects().length === 0) {
    return _offset;
  }

  var bcr = getBCR(el);

  if (bcr) {
    var win = el.ownerDocument.defaultView;
    _offset.top = bcr.top + win.pageYOffset;
    _offset.left = bcr.left + win.pageXOffset;
  }

  return _offset;
}; // Return an element's offset with respect to to its offsetParent
// https://j11y.io/jquery/#v=git&fn=jQuery.fn.position

var position = function position(el)
/* istanbul ignore next: getBoundingClientRect() doesn't work in JSDOM */
{
  var _offset = {
    top: 0,
    left: 0
  };

  if (!isElement(el)) {
    return _offset;
  }

  var parentOffset = {
    top: 0,
    left: 0
  };
  var elStyles = getCS(el);

  if (elStyles.position === 'fixed') {
    _offset = getBCR(el) || _offset;
  } else {
    _offset = offset(el);
    var doc = el.ownerDocument;
    var offsetParent = el.offsetParent || doc.documentElement;

    while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && getCS(offsetParent).position === 'static') {
      offsetParent = offsetParent.parentNode;
    }

    if (offsetParent && offsetParent !== el && offsetParent.nodeType === Node.ELEMENT_NODE) {
      parentOffset = offset(offsetParent);
      var offsetParentStyles = getCS(offsetParent);
      parentOffset.top += parseFloat(offsetParentStyles.borderTopWidth);
      parentOffset.left += parseFloat(offsetParentStyles.borderLeftWidth);
    }
  }

  return {
    top: _offset.top - parentOffset.top - parseFloat(elStyles.marginTop),
    left: _offset.left - parentOffset.left - parseFloat(elStyles.marginLeft)
  };
};

// Number utilities
// Converts a value (string, number, etc) to an integer number
// Assumes radix base 10
// Returns NaN if the value cannot be converted
var toInteger = function toInteger(val) {
  return parseInt(val, 10);
}; // Converts a value (string, number, etc) to a number
// Returns NaN if the value cannot be converted

var toFloat = function toFloat(val) {
  return parseFloat(val);
}; // Converts a value (string, number, etc) to a string
// representation with 'precision' digits after the decimal
// Returns the string 'NaN' if the value cannot be converted

var toFixed = function toFixed(val, precision) {
  return toFloat(val).toFixed(toInteger(precision) || 0);
};

var NO_FADE_PROPS = {
  name: '',
  enterClass: '',
  enterActiveClass: '',
  enterToClass: 'show',
  leaveClass: 'show',
  leaveActiveClass: '',
  leaveToClass: ''
};

var FADE_PROPS = _objectSpread2({}, NO_FADE_PROPS, {
  enterActiveClass: 'fade',
  leaveActiveClass: 'fade'
}); // @vue/component


var BVTransition = /*#__PURE__*/Vue.extend({
  name: 'BVTransition',
  functional: true,
  props: {
    noFade: {
      // Only applicable to the built in transition
      // Has no effect if `trans-props` provided
      type: Boolean,
      default: false
    },
    appear: {
      // Has no effect if `trans-props` provided
      type: Boolean,
      default: false
    },
    mode: {
      // Can be overridden by user supplied trans-props
      type: String // default: undefined

    },
    // For user supplied transitions (if needed)
    transProps: {
      type: Object,
      default: null
    }
  },
  render: function render(h, _ref) {
    var children = _ref.children,
        data = _ref.data,
        props = _ref.props;
    var transProps = props.transProps;

    if (!isPlainObject(transProps)) {
      transProps = props.noFade ? NO_FADE_PROPS : FADE_PROPS;

      if (props.appear) {
        // Default the appear classes to equal the enter classes
        transProps = _objectSpread2({}, transProps, {
          appear: true,
          appearClass: transProps.enterClass,
          appearActiveClass: transProps.enterActiveClass,
          appearToClass: transProps.enterToClass
        });
      }
    }

    transProps = _objectSpread2({
      mode: props.mode
    }, transProps, {
      // We always need `css` true
      css: true
    });
    return h('transition', // Any transition event listeners will get merged here
    mergeData(data, {
      props: transProps
    }), children);
  }
});

// In functional components, `slots` is a function so it must be called
// first before passing to the below methods. `scopedSlots` is always an
// object and may be undefined (for Vue < 2.6.x)

/**
 * Returns true if either scoped or unscoped named slot exists
 *
 * @param {String, Array} name or name[]
 * @param {Object} scopedSlots
 * @param {Object} slots
 * @returns {Array|undefined} VNodes
 */

var hasNormalizedSlot = function hasNormalizedSlot(names) {
  var $scopedSlots = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var $slots = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  // Ensure names is an array
  names = concat(names).filter(identity); // Returns true if the either a $scopedSlot or $slot exists with the specified name

  return names.some(function (name) {
    return $scopedSlots[name] || $slots[name];
  });
};
/**
 * Returns VNodes for named slot either scoped or unscoped
 *
 * @param {String, Array} name or name[]
 * @param {String} scope
 * @param {Object} scopedSlots
 * @param {Object} slots
 * @returns {Array|undefined} VNodes
 */


var normalizeSlot = function normalizeSlot(names) {
  var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var $scopedSlots = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var $slots = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  // Ensure names is an array
  names = concat(names).filter(identity);
  var slot;

  for (var i = 0; i < names.length && !slot; i++) {
    var name = names[i];
    slot = $scopedSlots[name] || $slots[name];
  } // Note: in Vue 2.6.x, all named slots are also scoped slots


  return isFunction(slot) ? slot(scope) : slot;
}; // Named exports

var normalizeSlotMixin = {
  methods: {
    hasNormalizedSlot: function hasNormalizedSlot$1(names) {
      // Returns true if the either a $scopedSlot or $slot exists with the specified name
      // `names` can be a string name or an array of names
      return hasNormalizedSlot(names, this.$scopedSlots, this.$slots);
    },
    normalizeSlot: function normalizeSlot$1(names) {
      var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      // Returns an array of rendered VNodes if slot found.
      // Returns undefined if not found.
      // `names` can be a string name or an array of names
      var vNodes = normalizeSlot(names, scope, this.$scopedSlots, this.$slots);

      return vNodes ? concat(vNodes) : vNodes;
    }
  }
};

var NAME$1 = 'BButtonClose';
var props = {
  content: {
    type: String,
    default: function _default() {
      return getComponentConfig(NAME$1, 'content');
    }
  },
  disabled: {
    type: Boolean,
    default: false
  },
  ariaLabel: {
    type: String,
    default: function _default() {
      return getComponentConfig(NAME$1, 'ariaLabel');
    }
  },
  textVariant: {
    type: String,
    default: function _default() {
      return getComponentConfig(NAME$1, 'textVariant');
    }
  }
}; // @vue/component

var BButtonClose = /*#__PURE__*/Vue.extend({
  name: NAME$1,
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        slots = _ref.slots,
        scopedSlots = _ref.scopedSlots;
    var $slots = slots();
    var $scopedSlots = scopedSlots || {};
    var componentData = {
      staticClass: 'close',
      class: _defineProperty({}, "text-".concat(props.textVariant), props.textVariant),
      attrs: {
        type: 'button',
        disabled: props.disabled,
        'aria-label': props.ariaLabel ? String(props.ariaLabel) : null
      },
      on: {
        click: function click(evt) {
          // Ensure click on button HTML content is also disabled

          /* istanbul ignore if: bug in JSDOM still emits click on inner element */
          if (props.disabled && isEvent(evt)) {
            evt.stopPropagation();
            evt.preventDefault();
          }
        }
      }
    }; // Careful not to override the default slot with innerHTML

    if (!hasNormalizedSlot('default', $scopedSlots, $slots)) {
      componentData.domProps = {
        innerHTML: props.content
      };
    }

    return h('button', mergeData(data, componentData), normalizeSlot('default', {}, $scopedSlots, $slots));
  }
});

var NAME$2 = 'BAlert'; // Convert `show` value to a number

var parseCountDown = function parseCountDown(show) {
  if (show === '' || isBoolean(show)) {
    return 0;
  }

  show = toInteger(show);
  return show > 0 ? show : 0;
}; // Convert `show` value to a boolean


var parseShow = function parseShow(show) {
  if (show === '' || show === true) {
    return true;
  }

  if (toInteger(show) < 1) {
    // Boolean will always return false for the above comparison
    return false;
  }

  return !!show;
}; // Is a value number like (i.e. a number or a number as string)


var isNumericLike = function isNumericLike(value) {
  return !isNaN(toInteger(value));
}; // @vue/component


var BAlert = /*#__PURE__*/Vue.extend({
  name: NAME$2,
  mixins: [normalizeSlotMixin],
  model: {
    prop: 'show',
    event: 'input'
  },
  props: {
    variant: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$2, 'variant');
      }
    },
    dismissible: {
      type: Boolean,
      default: false
    },
    dismissLabel: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$2, 'dismissLabel');
      }
    },
    show: {
      type: [Boolean, Number, String],
      default: false
    },
    fade: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      countDownTimerId: null,
      countDown: 0,
      // If initially shown, we need to set these for SSR
      localShow: parseShow(this.show)
    };
  },
  watch: {
    show: function show(newVal) {
      this.countDown = parseCountDown(newVal);
      this.localShow = parseShow(newVal);
    },
    countDown: function countDown(newVal) {
      var _this = this;

      this.clearTimer();

      if (isNumericLike(this.show)) {
        // Ignore if this.show transitions to a boolean value.
        this.$emit('dismiss-count-down', newVal);

        if (this.show !== newVal) {
          // Update the v-model if needed
          this.$emit('input', newVal);
        }

        if (newVal > 0) {
          this.localShow = true;
          this.countDownTimerId = setTimeout(function () {
            _this.countDown--;
          }, 1000);
        } else {
          // Slightly delay the hide to allow any UI updates
          this.$nextTick(function () {
            requestAF(function () {
              _this.localShow = false;
            });
          });
        }
      }
    },
    localShow: function localShow(newVal) {
      if (!newVal && (this.dismissible || isNumericLike(this.show))) {
        // Only emit dismissed events for dismissible or auto dismissing alerts
        this.$emit('dismissed');
      }

      if (!isNumericLike(this.show) && this.show !== newVal) {
        // Only emit booleans if we weren't passed a number via `this.show`
        this.$emit('input', newVal);
      }
    }
  },
  created: function created() {
    this.countDown = parseCountDown(this.show);
    this.localShow = parseShow(this.show);
  },
  mounted: function mounted() {
    this.countDown = parseCountDown(this.show);
    this.localShow = parseShow(this.show);
  },
  beforeDestroy: function beforeDestroy() {
    this.clearTimer();
  },
  methods: {
    dismiss: function dismiss() {
      this.clearTimer();
      this.countDown = 0;
      this.localShow = false;
    },
    clearTimer: function clearTimer() {
      if (this.countDownTimerId) {
        clearInterval(this.countDownTimerId);
        this.countDownTimerId = null;
      }
    }
  },
  render: function render(h) {
    var $alert; // undefined

    if (this.localShow) {
      var $dismissBtn = h();

      if (this.dismissible) {
        // Add dismiss button
        $dismissBtn = h(BButtonClose, {
          attrs: {
            'aria-label': this.dismissLabel
          },
          on: {
            click: this.dismiss
          }
        }, [this.normalizeSlot('dismiss')]);
      }

      $alert = h('div', {
        key: this._uid,
        staticClass: 'alert',
        class: _defineProperty({
          'alert-dismissible': this.dismissible
        }, "alert-".concat(this.variant), this.variant),
        attrs: {
          role: 'alert',
          'aria-live': 'polite',
          'aria-atomic': true
        }
      }, [$dismissBtn, this.normalizeSlot('default')]);
      $alert = [$alert];
    }

    return h(BVTransition, {
      props: {
        noFade: !this.fade
      }
    }, $alert);
  }
});

var AlertPlugin = /*#__PURE__*/pluginFactory({
  components: {
    BAlert: BAlert
  }
});

/**
 * Given an array of properties or an object of property keys,
 * plucks all the values off the target object, returning a new object
 * that has props that reference the original prop values
 *
 * @param {{}|string[]} keysToPluck
 * @param {{}} objToPluck
 * @param {Function} transformFn
 * @return {{}}
 */

var pluckProps = function pluckProps(keysToPluck, objToPluck) {
  var transformFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : identity;
  return (isArray(keysToPluck) ? keysToPluck.slice() : keys(keysToPluck)).reduce(function (memo, prop) {
    memo[transformFn(prop)] = objToPluck[prop];
    return memo;
  }, {});
};

// String utilities

var RX_TRIM_LEFT = /^\s+/;
var RX_REGEXP_REPLACE = /[-/\\^$*+?.()|[\]{}]/g;
var RX_UN_KEBAB = /-(\w)/g;
var RX_HYPHENATE = /\B([A-Z])/g; // --- Utilities ---
// Converts PascalCase or camelCase to kebab-case

var kebabCase = function kebabCase(str) {
  return str.replace(RX_HYPHENATE, '-$1').toLowerCase();
}; // Converts a kebab-case or camelCase string to PascalCase

var pascalCase = function pascalCase(str) {
  str = kebabCase(str).replace(RX_UN_KEBAB, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
  return str.charAt(0).toUpperCase() + str.slice(1);
}; // Lowercases the first letter of a string and returns a new string

var lowerFirst = function lowerFirst(str) {
  str = isString(str) ? str.trim() : String(str);
  return str.charAt(0).toLowerCase() + str.slice(1);
}; // Uppercases the first letter of a string and returns a new string

var upperFirst = function upperFirst(str) {
  str = isString(str) ? str.trim() : String(str);
  return str.charAt(0).toUpperCase() + str.slice(1);
}; // Escape characters to be used in building a regular expression

var escapeRegExp = function escapeRegExp(str) {
  return str.replace(RX_REGEXP_REPLACE, '\\$&');
}; // Convert a value to a string that can be rendered
// `undefined`/`null` will be converted to `''`
// Plain objects and arrays will be JSON stringified

var toString$1 = function toString(val) {
  var spaces = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return isUndefinedOrNull(val) ? '' : isArray(val) || isPlainObject(val) && val.toString === Object.prototype.toString ? JSON.stringify(val, null, spaces) : String(val);
}; // Remove leading white space from a string

var trimLeft = function trimLeft(str) {
  return toString$1(str).replace(RX_TRIM_LEFT, '');
}; // Remove Trailing white space from a string

var trim = function trim(str) {
  return toString$1(str).trim();
}; // Lower case a string

var lowerCase = function lowerCase(str) {
  return toString$1(str).toLowerCase();
}; // Upper case a string

var ANCHOR_TAG = 'a'; // Precompile RegExp

var commaRE = /%2C/g;
var encodeReserveRE = /[!'()*]/g;
var plusRE = /\+/g;
var queryStartRE = /^(\?|#|&)/; // Method to replace reserved chars

var encodeReserveReplacer = function encodeReserveReplacer(c) {
  return '%' + c.charCodeAt(0).toString(16);
}; // Fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas


var encode = function encode(str) {
  return encodeURIComponent(toString$1(str)).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ',');
};

var decode = decodeURIComponent; // Stringifies an object of query parameters
// See: https://github.com/vuejs/vue-router/blob/dev/src/util/query.js

var stringifyQueryObj = function stringifyQueryObj(obj) {
  if (!isPlainObject(obj)) {
    return '';
  }

  var query = keys(obj).map(function (key) {
    var val = obj[key];

    if (isUndefined(val)) {
      return '';
    } else if (isNull(val)) {
      return encode(key);
    } else if (isArray(val)) {
      return val.reduce(function (results, val2) {
        if (isNull(val2)) {
          results.push(encode(key));
        } else if (!isUndefined(val2)) {
          // Faster than string interpolation
          results.push(encode(key) + '=' + encode(val2));
        }

        return results;
      }, []).join('&');
    } // Faster than string interpolation


    return encode(key) + '=' + encode(val);
  })
  /* must check for length, as we only want to filter empty strings, not things that look falsey! */
  .filter(function (x) {
    return x.length > 0;
  }).join('&');
  return query ? "?".concat(query) : '';
};
var parseQuery = function parseQuery(query) {
  var parsed = {};
  query = toString$1(query).trim().replace(queryStartRE, '');

  if (!query) {
    return parsed;
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(plusRE, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0 ? decode(parts.join('=')) : null;

    if (isUndefined(parsed[key])) {
      parsed[key] = val;
    } else if (isArray(parsed[key])) {
      parsed[key].push(val);
    } else {
      parsed[key] = [parsed[key], val];
    }
  });
  return parsed;
};
var isRouterLink = function isRouterLink(tag) {
  return toString$1(tag).toLowerCase() !== ANCHOR_TAG;
};
var computeTag = function computeTag() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      to = _ref.to,
      disabled = _ref.disabled;

  var thisOrParent = arguments.length > 1 ? arguments[1] : undefined;
  return thisOrParent.$router && to && !disabled ? thisOrParent.$nuxt ? 'nuxt-link' : 'router-link' : ANCHOR_TAG;
};
var computeRel = function computeRel() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      target = _ref2.target,
      rel = _ref2.rel;

  if (target === '_blank' && isNull(rel)) {
    return 'noopener';
  }

  return rel || null;
};
var computeHref = function computeHref() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      href = _ref3.href,
      to = _ref3.to;

  var tag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ANCHOR_TAG;
  var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '#';
  var toFallback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '/';

  // We've already checked the $router in computeTag(), so isRouterLink() indicates a live router.
  // When deferring to Vue Router's router-link, don't use the href attribute at all.
  // We return null, and then remove href from the attributes passed to router-link
  if (isRouterLink(tag)) {
    return null;
  } // Return `href` when explicitly provided


  if (href) {
    return href;
  } // Reconstruct `href` when `to` used, but no router


  if (to) {
    // Fallback to `to` prop (if `to` is a string)
    if (isString(to)) {
      return to || toFallback;
    } // Fallback to `to.path + to.query + to.hash` prop (if `to` is an object)


    if (isPlainObject(to) && (to.path || to.query || to.hash)) {
      var path = toString$1(to.path);
      var query = stringifyQueryObj(to.query);
      var hash = toString$1(to.hash);
      hash = !hash || hash.charAt(0) === '#' ? hash : "#".concat(hash);
      return "".concat(path).concat(query).concat(hash) || toFallback;
    }
  } // If nothing is provided return the fallback


  return fallback;
};

/**
 * The Link component is used in many other BV components.
 * As such, sharing its props makes supporting all its features easier.
 * However, some components need to modify the defaults for their own purpose.
 * Prefer sharing a fresh copy of the props to ensure mutations
 * do not affect other component references to the props.
 *
 * https://github.com/vuejs/vue-router/blob/dev/src/components/link.js
 * @return {{}}
 */

var propsFactory = function propsFactory() {
  return {
    href: {
      type: String,
      default: null
    },
    rel: {
      type: String,
      default: null
    },
    target: {
      type: String,
      default: '_self'
    },
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    // router-link specific props
    to: {
      type: [String, Object],
      default: null
    },
    append: {
      type: Boolean,
      default: false
    },
    replace: {
      type: Boolean,
      default: false
    },
    event: {
      type: [String, Array],
      default: 'click'
    },
    activeClass: {
      type: String // default: undefined

    },
    exact: {
      type: Boolean,
      default: false
    },
    exactActiveClass: {
      type: String // default: undefined

    },
    routerTag: {
      type: String,
      default: 'a'
    },
    // nuxt-link specific prop(s)
    noPrefetch: {
      type: Boolean,
      default: false
    }
  };
};

var BLink = /*#__PURE__*/Vue.extend({
  name: 'BLink',
  mixins: [normalizeSlotMixin],
  inheritAttrs: false,
  props: propsFactory(),
  computed: {
    computedTag: function computedTag() {
      // We don't pass `this` as the first arg as we need reactivity of the props
      return computeTag({
        to: this.to,
        disabled: this.disabled
      }, this);
    },
    isRouterLink: function isRouterLink$1() {
      return isRouterLink(this.computedTag);
    },
    computedRel: function computedRel() {
      // We don't pass `this` as the first arg as we need reactivity of the props
      return computeRel({
        target: this.target,
        rel: this.rel
      });
    },
    computedHref: function computedHref() {
      // We don't pass `this` as the first arg as we need reactivity of the props
      return computeHref({
        to: this.to,
        href: this.href
      }, this.computedTag);
    },
    computedProps: function computedProps() {
      return this.isRouterLink ? _objectSpread2({}, this.$props, {
        tag: this.routerTag
      }) : {};
    }
  },
  methods: {
    onClick: function onClick(evt) {
      var _arguments = arguments;
      var evtIsEvent = isEvent(evt);
      var isRouterLink = this.isRouterLink;
      var suppliedHandler = this.$listeners.click;

      if (evtIsEvent && this.disabled) {
        // Stop event from bubbling up
        evt.stopPropagation(); // Kill the event loop attached to this specific `EventTarget`
        // Needed to prevent `vue-router` for doing its thing

        evt.stopImmediatePropagation();
      } else {
        /* istanbul ignore next: difficult to test, but we know it works */
        if (isRouterLink && evt.currentTarget.__vue__) {
          // Router links do not emit instance `click` events, so we
          // add in an `$emit('click', evt)` on its Vue instance
          evt.currentTarget.__vue__.$emit('click', evt);
        } // Call the suppliedHandler(s), if any provided


        concat(suppliedHandler).filter(function (h) {
          return isFunction(h);
        }).forEach(function (handler) {
          handler.apply(void 0, _toConsumableArray(_arguments));
        }); // Emit the global `$root` click event

        this.$root.$emit('clicked::link', evt);
      } // Stop scroll-to-top behavior or navigation on
      // regular links when href is just '#'


      if (evtIsEvent && (this.disabled || !isRouterLink && this.computedHref === '#')) {
        evt.preventDefault();
      }
    },
    focus: function focus() {
      if (this.$el && this.$el.focus) {
        this.$el.focus();
      }
    },
    blur: function blur() {
      if (this.$el && this.$el.blur) {
        this.$el.blur();
      }
    }
  },
  render: function render(h) {
    var tag = this.computedTag;
    var rel = this.computedRel;
    var href = this.computedHref;
    var isRouterLink = this.isRouterLink;
    var componentData = {
      class: {
        active: this.active,
        disabled: this.disabled
      },
      attrs: _objectSpread2({}, this.$attrs, {
        rel: rel,
        target: this.target,
        tabindex: this.disabled ? '-1' : isUndefined(this.$attrs.tabindex) ? null : this.$attrs.tabindex,
        'aria-disabled': this.disabled ? 'true' : null
      }),
      props: this.computedProps
    }; // Add the event handlers. We must use `nativeOn` for
    // `<router-link>`/`<nuxt-link>` instead of `on`

    componentData[isRouterLink ? 'nativeOn' : 'on'] = _objectSpread2({}, this.$listeners, {
      // We want to overwrite any click handler since our callback
      // will invoke the user supplied handler(s) if `!this.disabled`
      click: this.onClick
    }); // If href attribute exists on <router-link> (even undefined or null) it fails working on
    // SSR, so we explicitly add it here if needed (i.e. if computedHref() is truthy)

    if (href) {
      componentData.attrs.href = href;
    } else {
      // Ensure the prop HREF does not exist for router links
      delete componentData.props.href;
    }

    return h(tag, componentData, this.normalizeSlot('default'));
  }
});

var NAME$3 = 'BBadge';
var linkProps = propsFactory();
delete linkProps.href.default;
delete linkProps.to.default;
var props$1 = _objectSpread2({}, linkProps, {
  tag: {
    type: String,
    default: 'span'
  },
  variant: {
    type: String,
    default: function _default() {
      return getComponentConfig(NAME$3, 'variant');
    }
  },
  pill: {
    type: Boolean,
    default: false
  }
}); // @vue/component

var BBadge = /*#__PURE__*/Vue.extend({
  name: NAME$3,
  functional: true,
  props: props$1,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var isBLink = props.href || props.to;
    var tag = isBLink ? BLink : props.tag;
    var componentData = {
      staticClass: 'badge',
      class: [props.variant ? "badge-".concat(props.variant) : 'badge-secondary', {
        'badge-pill': props.pill,
        active: props.active,
        disabled: props.disabled
      }],
      props: isBLink ? pluckProps(linkProps, props) : {}
    };
    return h(tag, mergeData(data, componentData), children);
  }
});

var BadgePlugin = /*#__PURE__*/pluginFactory({
  components: {
    BBadge: BBadge
  }
});

var stripTagsRegex = /(<([^>]+)>)/gi; // Removes any thing that looks like an HTML tag from the supplied string

var stripTags = function stripTags() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return String(text).replace(stripTagsRegex, '');
}; // Generate a domProps object for either innerHTML, textContent or nothing

var htmlOrText = function htmlOrText(innerHTML, textContent) {
  return innerHTML ? {
    innerHTML: innerHTML
  } : textContent ? {
    textContent: textContent
  } : {};
};

var props$2 = _objectSpread2({}, propsFactory(), {
  text: {
    type: String,
    default: null
  },
  html: {
    type: String,
    default: null
  },
  ariaCurrent: {
    type: String,
    default: 'location'
  }
}); // @vue/component

var BBreadcrumbLink = /*#__PURE__*/Vue.extend({
  name: 'BBreadcrumbLink',
  functional: true,
  props: props$2,
  render: function render(h, _ref) {
    var suppliedProps = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var tag = suppliedProps.active ? 'span' : BLink;
    var componentData = {
      props: pluckProps(props$2, suppliedProps)
    };

    if (suppliedProps.active) {
      componentData.attrs = {
        'aria-current': suppliedProps.ariaCurrent
      };
    }

    if (!children) {
      componentData.domProps = htmlOrText(suppliedProps.html, suppliedProps.text);
    }

    return h(tag, mergeData(data, componentData), children);
  }
});

var BBreadcrumbItem = /*#__PURE__*/Vue.extend({
  name: 'BBreadcrumbItem',
  functional: true,
  props: props$2,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h('li', mergeData(data, {
      staticClass: 'breadcrumb-item',
      class: {
        active: props.active
      }
    }), [h(BBreadcrumbLink, {
      props: props
    }, children)]);
  }
});

var props$3 = {
  items: {
    type: Array,
    default: null
  }
}; // @vue/component

var BBreadcrumb = /*#__PURE__*/Vue.extend({
  name: 'BBreadcrumb',
  functional: true,
  props: props$3,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var childNodes = children; // Build child nodes from items if given.

    if (isArray(props.items)) {
      var activeDefined = false;
      childNodes = props.items.map(function (item, idx) {
        if (!isObject(item)) {
          item = {
            text: toString$1(item)
          };
        } // Copy the value here so we can normalize it.


        var active = item.active;

        if (active) {
          activeDefined = true;
        }

        if (!active && !activeDefined) {
          // Auto-detect active by position in list.
          active = idx + 1 === props.items.length;
        }

        return h(BBreadcrumbItem, {
          props: _objectSpread2({}, item, {
            active: active
          })
        });
      });
    }

    return h('ol', mergeData(data, {
      staticClass: 'breadcrumb'
    }), childNodes);
  }
});

var BreadcrumbPlugin = /*#__PURE__*/pluginFactory({
  components: {
    BBreadcrumb: BBreadcrumb,
    BBreadcrumbItem: BBreadcrumbItem,
    BBreadcrumbLink: BBreadcrumbLink
  }
});

/*
 * Key Codes (events)
 */
var KEY_CODES = freeze({
  SPACE: 32,
  ENTER: 13,
  ESC: 27,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  PAGEUP: 33,
  PAGEDOWN: 34,
  HOME: 36,
  END: 35,
  TAB: 9,
  SHIFT: 16,
  CTRL: 17,
  BACKSPACE: 8,
  ALT: 18,
  PAUSE: 19,
  BREAK: 19,
  INSERT: 45,
  INS: 45,
  DELETE: 46
});

var NAME$4 = 'BButton';
var btnProps = {
  block: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: function _default() {
      return getComponentConfig(NAME$4, 'size');
    }
  },
  variant: {
    type: String,
    default: function _default() {
      return getComponentConfig(NAME$4, 'variant');
    }
  },
  type: {
    type: String,
    default: 'button'
  },
  tag: {
    type: String,
    default: 'button'
  },
  pill: {
    type: Boolean,
    default: false
  },
  squared: {
    type: Boolean,
    default: false
  },
  pressed: {
    // Tri-state: `true`, `false` or `null`
    // => On, off, not a toggle
    type: Boolean,
    default: null
  }
};
var linkProps$1 = propsFactory();
delete linkProps$1.href.default;
delete linkProps$1.to.default;
var linkPropKeys = keys(linkProps$1);
var props$4 = _objectSpread2({}, linkProps$1, {}, btnProps); // --- Helper methods ---
// Returns `true` if a tag's name equals `name`

var tagIs = function tagIs(tag, name) {
  return toString$1(tag).toLowerCase() === toString$1(name).toLowerCase();
}; // Focus handler for toggle buttons
// Needs class of 'focus' when focused


var handleFocus = function handleFocus(evt) {
  if (evt.type === 'focusin') {
    addClass(evt.target, 'focus');
  } else if (evt.type === 'focusout') {
    removeClass(evt.target, 'focus');
  }
}; // Is the requested button a link?
// If tag prop is set to `a`, we use a <b-link> to get proper disabled handling


var isLink = function isLink(props) {
  return props.href || props.to || tagIs(props.tag, 'a');
}; // Is the button to be a toggle button?


var isToggle = function isToggle(props) {
  return isBoolean(props.pressed);
}; // Is the button "really" a button?


var isButton = function isButton(props) {
  return !(isLink(props) || props.tag && !tagIs(props.tag, 'button'));
}; // Is the requested tag not a button or link?


var isNonStandardTag = function isNonStandardTag(props) {
  return !isLink(props) && !isButton(props);
}; // Compute required classes (non static classes)


var computeClass = function computeClass(props) {
  var _ref;

  return ["btn-".concat(props.variant || getComponentConfig(NAME$4, 'variant')), (_ref = {}, _defineProperty(_ref, "btn-".concat(props.size), props.size), _defineProperty(_ref, 'btn-block', props.block), _defineProperty(_ref, 'rounded-pill', props.pill), _defineProperty(_ref, 'rounded-0', props.squared && !props.pill), _defineProperty(_ref, "disabled", props.disabled), _defineProperty(_ref, "active", props.pressed), _ref)];
}; // Compute the link props to pass to b-link (if required)


var computeLinkProps = function computeLinkProps(props) {
  return isLink(props) ? pluckProps(linkPropKeys, props) : null;
}; // Compute the attributes for a button


var computeAttrs = function computeAttrs(props, data) {
  var button = isButton(props);
  var link = isLink(props);
  var toggle = isToggle(props);
  var nonStandardTag = isNonStandardTag(props);
  var hashLink = link && props.href === '#';
  var role = data.attrs && data.attrs.role ? data.attrs.role : null;
  var tabindex = data.attrs ? data.attrs.tabindex : null;

  if (nonStandardTag || hashLink) {
    tabindex = '0';
  }

  return {
    // Type only used for "real" buttons
    type: button && !link ? props.type : null,
    // Disabled only set on "real" buttons
    disabled: button ? props.disabled : null,
    // We add a role of button when the tag is not a link or button for ARIA
    // Don't bork any role provided in `data.attrs` when `isLink` or `isButton`
    // Except when link has `href` of `#`
    role: nonStandardTag || hashLink ? 'button' : role,
    // We set the `aria-disabled` state for non-standard tags
    'aria-disabled': nonStandardTag ? String(props.disabled) : null,
    // For toggles, we need to set the pressed state for ARIA
    'aria-pressed': toggle ? String(props.pressed) : null,
    // `autocomplete="off"` is needed in toggle mode to prevent some browsers
    // from remembering the previous setting when using the back button
    autocomplete: toggle ? 'off' : null,
    // `tabindex` is used when the component is not a button
    // Links are tabbable, but don't allow disabled, while non buttons or links
    // are not tabbable, so we mimic that functionality by disabling tabbing
    // when disabled, and adding a `tabindex="0"` to non buttons or non links
    tabindex: props.disabled && !button ? '-1' : tabindex
  };
}; // @vue/component


var BButton = /*#__PURE__*/Vue.extend({
  name: NAME$4,
  functional: true,
  props: props$4,
  render: function render(h, _ref2) {
    var props = _ref2.props,
        data = _ref2.data,
        listeners = _ref2.listeners,
        children = _ref2.children;
    var toggle = isToggle(props);
    var link = isLink(props);
    var nonStandardTag = isNonStandardTag(props);
    var hashLink = link && props.href === '#';
    var on = {
      keydown: function keydown(evt) {
        // When the link is a `href="#"` or a non-standard tag (has `role="button"`),
        // we add a keydown handlers for SPACE/ENTER

        /* istanbul ignore next */
        if (props.disabled || !(nonStandardTag || hashLink)) {
          return;
        }

        var keyCode = evt.keyCode; // Add SPACE handler for `href="#"` and ENTER handler for non-standard tags

        if (keyCode === KEY_CODES.SPACE || keyCode === KEY_CODES.ENTER && nonStandardTag) {
          var target = evt.currentTarget || evt.target;
          evt.preventDefault();
          target.click();
        }
      },
      click: function click(evt) {
        /* istanbul ignore if: blink/button disabled should handle this */
        if (props.disabled && isEvent(evt)) {
          evt.stopPropagation();
          evt.preventDefault();
        } else if (toggle && listeners && listeners['update:pressed']) {
          // Send `.sync` updates to any "pressed" prop (if `.sync` listeners)
          // `concat()` will normalize the value to an array without
          // double wrapping an array value in an array
          concat(listeners['update:pressed']).forEach(function (fn) {
            if (isFunction(fn)) {
              fn(!props.pressed);
            }
          });
        }
      }
    };

    if (toggle) {
      on.focusin = handleFocus;
      on.focusout = handleFocus;
    }

    var componentData = {
      staticClass: 'btn',
      class: computeClass(props),
      props: computeLinkProps(props),
      attrs: computeAttrs(props, data),
      on: on
    };
    return h(link ? BLink : props.tag, mergeData(data, componentData), children);
  }
});

var ButtonPlugin = /*#__PURE__*/pluginFactory({
  components: {
    BButton: BButton,
    BBtn: BButton,
    BButtonClose: BButtonClose,
    BBtnClose: BButtonClose
  }
});

var NAME$5 = 'BButtonGroup';
var props$5 = {
  vertical: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: function _default() {
      return getComponentConfig('BButton', 'size');
    }
  },
  tag: {
    type: String,
    default: 'div'
  },
  ariaRole: {
    type: String,
    default: 'group'
  }
}; // @vue/component

var BButtonGroup = /*#__PURE__*/Vue.extend({
  name: NAME$5,
  functional: true,
  props: props$5,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, mergeData(data, {
      class: _defineProperty({
        'btn-group': !props.vertical,
        'btn-group-vertical': props.vertical
      }, "btn-group-".concat(props.size), props.size),
      attrs: {
        role: props.ariaRole
      }
    }), children);
  }
});

var ButtonGroupPlugin = /*#__PURE__*/pluginFactory({
  components: {
    BButtonGroup: BButtonGroup,
    BBtnGroup: BButtonGroup
  }
});

var ITEM_SELECTOR = ['.btn:not(.disabled):not([disabled]):not(.dropdown-item)', '.form-control:not(.disabled):not([disabled])', 'select:not(.disabled):not([disabled])', 'input[type="checkbox"]:not(.disabled)', 'input[type="radio"]:not(.disabled)'].join(','); // @vue/component

var BButtonToolbar = /*#__PURE__*/Vue.extend({
  name: 'BButtonToolbar',
  mixins: [normalizeSlotMixin],
  props: {
    justify: {
      type: Boolean,
      default: false
    },
    keyNav: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted() {
    if (this.keyNav) {
      // Pre-set the tabindexes if the markup does not include tabindex="-1" on the toolbar items
      this.getItems();
    }
  },
  methods: {
    onFocusin: function onFocusin(evt) {
      if (evt.target === this.$el) {
        evt.preventDefault();
        evt.stopPropagation();
        this.focusFirst(evt);
      }
    },
    stop: function stop(evt) {
      evt.preventDefault();
      evt.stopPropagation();
    },
    onKeydown: function onKeydown(evt) {
      if (!this.keyNav) {
        /* istanbul ignore next: should never happen */
        return;
      }

      var key = evt.keyCode;
      var shift = evt.shiftKey;

      if (key === KEY_CODES.UP || key === KEY_CODES.LEFT) {
        this.stop(evt);
        shift ? this.focusFirst(evt) : this.focusPrev(evt);
      } else if (key === KEY_CODES.DOWN || key === KEY_CODES.RIGHT) {
        this.stop(evt);
        shift ? this.focusLast(evt) : this.focusNext(evt);
      }
    },
    setItemFocus: function setItemFocus(item) {
      item && item.focus && item.focus();
    },
    focusFirst: function focusFirst() {
      var items = this.getItems();
      this.setItemFocus(items[0]);
    },
    focusPrev: function focusPrev(evt) {
      var items = this.getItems();
      var index = items.indexOf(evt.target);

      if (index > -1) {
        items = items.slice(0, index).reverse();
        this.setItemFocus(items[0]);
      }
    },
    focusNext: function focusNext(evt) {
      var items = this.getItems();
      var index = items.indexOf(evt.target);

      if (index > -1) {
        items = items.slice(index + 1);
        this.setItemFocus(items[0]);
      }
    },
    focusLast: function focusLast() {
      var items = this.getItems().reverse();
      this.setItemFocus(items[0]);
    },
    getItems: function getItems() {
      var items = selectAll(ITEM_SELECTOR, this.$el);
      items.forEach(function (item) {
        // Ensure tabfocus is -1 on any new elements
        item.tabIndex = -1;
      });
      return items.filter(function (el) {
        return isVisible(el);
      });
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'btn-toolbar',
      class: {
        'justify-content-between': this.justify
      },
      attrs: {
        role: 'toolbar',
        tabindex: this.keyNav ? '0' : null
      },
      on: this.keyNav ? {
        focusin: this.onFocusin,
        keydown: this.onKeydown
      } : {}
    }, [this.normalizeSlot('default')]);
  }
});

var ButtonToolbarPlugin = /*#__PURE__*/pluginFactory({
  components: {
    BButtonToolbar: BButtonToolbar,
    BBtnToolbar: BButtonToolbar
  }
});

// Handles when arrays are "sparse" (array.every(...) doesn't handle sparse)

var compareArrays = function compareArrays(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  var equal = true;

  for (var i = 0; equal && i < a.length; i++) {
    equal = looseEqual(a[i], b[i]);
  }

  return equal;
};
/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 * Returns boolean true or false
 */


var looseEqual = function looseEqual(a, b) {
  if (a === b) {
    return true;
  }

  var aValidType = isDate(a);
  var bValidType = isDate(b);

  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  }

  aValidType = isArray(a);
  bValidType = isArray(b);

  if (aValidType || bValidType) {
    return aValidType && bValidType ? compareArrays(a, b) : false;
  }

  aValidType = isObject(a);
  bValidType = isObject(b);

  if (aValidType || bValidType) {
    /* istanbul ignore if: this if will probably never be called */
    if (!aValidType || !bValidType) {
      return false;
    }

    var aKeysCount = keys(a).length;
    var bKeysCount = keys(b).length;

    if (aKeysCount !== bKeysCount) {
      return false;
    }

    for (var key in a) {
      // eslint-disable-next-line no-prototype-builtins
      var aHasKey = a.hasOwnProperty(key); // eslint-disable-next-line no-prototype-builtins

      var bHasKey = b.hasOwnProperty(key);

      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
        return false;
      }
    }
  }

  return String(a) === String(b);
};

var RX_DATE = /^\d+-\d+-\d+$/; // --- Date utility methods ---
// Create or clone a date (`new Date(...)` shortcut)

var createDate = function createDate() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return _construct(Date, args);
}; // Parse a date sting, or Date object, into a Date object (with no time information)

var parseYMD = function parseYMD(date) {
  if (isString(date) && RX_DATE.test(date.trim())) {
    var _date$split$map = date.split('-').map(toInteger),
        _date$split$map2 = _slicedToArray(_date$split$map, 3),
        year = _date$split$map2[0],
        month = _date$split$map2[1],
        day = _date$split$map2[2];

    return createDate(year, month - 1, day);
  } else if (isDate(date)) {
    return createDate(date.getFullYear(), date.getMonth(), date.getDate());
  }

  return null;
}; // Format a date object as `YYYY-MM-DD` format

var formatYMD = function formatYMD(date) {
  date = parseYMD(date);

  if (!date) {
    return null;
  }

  var year = date.getFullYear();
  var month = "0".concat(date.getMonth() + 1).slice(-2);
  var day = "0".concat(date.getDate()).slice(-2);
  return "".concat(year, "-").concat(month, "-").concat(day);
}; // Given a locale (or locales), resolve the browser available locale

var resolveLocale = function resolveLocale(locales)
/* istanbul ignore next */
{
  var calendar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'gregory';
  locales = concat(locales).filter(identity);
  var fmt = new Intl.DateTimeFormat(locales, {
    calendar: calendar
  });
  return fmt.resolvedOptions().locale;
}; // Create a `Intl.DateTimeFormat` formatter function

var createDateFormatter = function createDateFormatter(locale, options)
/* istanbul ignore next */
{
  var dtf = new Intl.DateTimeFormat(locale, options);
  return dtf.format;
}; // Determine if two dates are the same date (ignoring time portion)

var datesEqual = function datesEqual(date1, date2) {
  // Returns true of the date portion of two date objects are equal
  // We don't compare the time portion
  return formatYMD(date1) === formatYMD(date2);
}; // --- Date "math" utility methods (for BCalendar component mainly) ---

var firstDateOfMonth = function firstDateOfMonth(date) {
  date = createDate(date);
  date.setDate(1);
  return date;
};
var lastDateOfMonth = function lastDateOfMonth(date) {
  date = createDate(date);
  date.setMonth(date.getMonth() + 1);
  date.setDate(0);
  return date;
};
var oneMonthAgo = function oneMonthAgo(date) {
  date = createDate(date);
  var month = date.getMonth();
  date.setMonth(month - 1);

  if (date.getMonth() === month) {
    date.setDate(0);
  }

  return date;
};
var oneMonthAhead = function oneMonthAhead(date) {
  date = createDate(date);
  var month = date.getMonth();
  date.setMonth(month + 1);

  if (date.getMonth() === (month + 2) % 12) {
    date.setDate(0);
  }

  return date;
};
var oneYearAgo = function oneYearAgo(date) {
  date = createDate(date);
  var month = date.getMonth();
  date.setMonth(month - 12);

  if (date.getMonth() !== month) {
    date.setDate(0);
  }

  return date;
};
var oneYearAhead = function oneYearAhead(date) {
  date = createDate(date);
  var month = date.getMonth();
  date.setMonth(month + 12);

  if (date.getMonth() !== month) {
    date.setDate(0);
  }

  return date;
}; // Helper function to constrain a date between two values
// Always returns a `Date` object or `null` if no date passed

var constrainDate = function constrainDate(date) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  // Ensure values are `Date` objects (or `null`)
  date = parseYMD(date);
  min = parseYMD(min) || date;
  max = parseYMD(max) || date; // Return a new `Date` object (or `null`)

  return date ? date < min ? min : date > max ? max : date : null;
};

// Localization utilities

var RTL_LANGS = ['ar', 'az', 'ckb', 'fa', 'he', 'ks', 'lrc', 'mzn', 'ps', 'sd', 'te', 'ug', 'ur', 'yi'].map(function (locale) {
  return locale.toLowerCase();
}); // Precompile RegExpr

var RX_STRIP_MODS = /-u-.+/; // Returns true if the locale is RTL

var isLocaleRTL = function isLocaleRTL(locale) {
  // Determines if the locale is RTL (only single locale supported)
  var parts = toString$1(locale).toLowerCase().replace(RX_STRIP_MODS, '').split('-');
  var locale1 = parts.slice(0, 2).join('-');
  var locale2 = parts[0];
  return arrayIncludes(RTL_LANGS, locale1) || arrayIncludes(RTL_LANGS, locale2);
};

/*
 * SSR Safe Client Side ID attribute generation
 * id's can only be generated client side, after mount.
 * this._uid is not synched between server and client.
 */
// @vue/component
var idMixin = {
  props: {
    id: {
      type: String,
      default: null
    }
  },
  data: function data() {
    return {
      localId_: null
    };
  },
  computed: {
    safeId: function safeId() {
      // Computed property that returns a dynamic function for creating the ID.
      // Reacts to changes in both .id and .localId_ And regens a new function
      var id = this.id || this.localId_; // We return a function that accepts an optional suffix string
      // So this computed prop looks and works like a method!!!
      // But benefits from Vue's Computed prop caching

      var fn = function fn(suffix) {
        if (!id) {
          return null;
        }

        suffix = String(suffix || '').replace(/\s+/g, '_');
        return suffix ? id + '_' + suffix : id;
      };

      return fn;
    }
  },
  mounted: function mounted() {
    var _this = this;

    // mounted only occurs client side
    this.$nextTick(function () {
      // Update dom with auto ID after dom loaded to prevent
      // SSR hydration errors.
      _this.localId_ = "__BVID__".concat(_this._uid);
    });
  }
};

var commonIconProps = {
  variant: {
    type: String,
    default: null
  },
  fontScale: {
    type: [Number, String],
    default: 1
  },
  scale: {
    type: [Number, String],
    default: 1
  },
  rotate: {
    type: [Number, String],
    default: 0
  },
  flipH: {
    type: Boolean,
    default: false
  },
  flipV: {
    type: Boolean,
    default: false
  },
  shiftH: {
    type: [Number, String],
    default: 0
  },
  shiftV: {
    type: [Number, String],
    default: 0
  },
  animation: {
    type: String,
    default: null
  }
}; // Base attributes needed on all icons

var baseAttrs = {
  width: '1em',
  height: '1em',
  viewBox: '0 0 20 20',
  focusable: 'false',
  role: 'img',
  alt: 'icon'
}; // Shared private base component to reduce bundle/runtime size
// @vue/component

var BVIconBase = /*#__PURE__*/Vue.extend({
  name: 'BVIconBase',
  functional: true,
  props: _objectSpread2({
    content: {
      type: String
    },
    stacked: {
      type: Boolean,
      default: false
    }
  }, commonIconProps),
  render: function render(h, _ref) {
    var _class;

    var data = _ref.data,
        props = _ref.props,
        children = _ref.children;
    var fontScale = Math.max(toFloat(props.fontScale) || 1, 0) || 1;
    var scale = Math.max(toFloat(props.scale) || 1, 0) || 1;
    var rotate = toFloat(props.rotate) || 0;
    var shiftH = toFloat(props.shiftH) || 0;
    var shiftV = toFloat(props.shiftV) || 0;
    var flipH = props.flipH;
    var flipV = props.flipV;
    var animation = props.animation; // Compute the transforms
    // Note that order is important as SVG transforms are applied in order from
    // left to right and we want flipping/scale to occur before rotation
    // Note shifting is applied separately
    // Assumes that the viewbox is `0 0 20 20` (`10 10` is the center)

    var hasScale = flipH || flipV || scale !== 1;
    var hasTransforms = hasScale || rotate;
    var hasShift = shiftH || shiftV;
    var transforms = [hasTransforms ? 'translate(10 10)' : null, hasScale ? "scale(".concat((flipH ? -1 : 1) * scale, " ").concat((flipV ? -1 : 1) * scale, ")") : null, rotate ? "rotate(".concat(rotate, ")") : null, hasTransforms ? 'translate(-10 -10)' : null].filter(identity); // Handling stacked icons

    var isStacked = props.stacked;
    var hasContent = !isUndefinedOrNull(props.content); // We wrap the content in a `<g>` for handling the transforms (except shift)

    var $inner = h('g', {
      attrs: {
        transform: transforms.join(' ') || null
      },
      domProps: hasContent ? {
        innerHTML: props.content || ''
      } : {}
    }, children); // If needed, we wrap in an additional `<g>` in order to handle the shifting

    if (hasShift) {
      $inner = h('g', {
        attrs: {
          transform: "translate(".concat(20 * shiftH / 16, " ").concat(-20 * shiftV / 16, ")")
        }
      }, [$inner]);
    }

    if (isStacked) {
      // Wrap in an additional `<g>` for proper
      // animation handling if stacked
      $inner = h('g', {}, [$inner]);
    }

    return h('svg', mergeData({
      staticClass: 'b-icon bi',
      class: (_class = {}, _defineProperty(_class, "text-".concat(props.variant), !!props.variant), _defineProperty(_class, "b-icon-animation-".concat(animation), !!animation), _class),
      attrs: baseAttrs,
      style: isStacked ? {} : {
        fontSize: fontScale === 1 ? null : "".concat(fontScale * 100, "%")
      }
    }, // Merge in user supplied data
    data, // If icon is stacked, null out some attrs
    isStacked ? {
      attrs: {
        width: null,
        height: null,
        role: null,
        alt: null
      }
    } : {}, // These cannot be overridden by users
    {
      attrs: {
        xmlns: isStacked ? null : 'http://www.w3.org/2000/svg',
        fill: 'currentColor'
      }
    }), [$inner]);
  }
});

/**
 * Icon component generator function
 *
 * @param {string} icon name (minus the leading `BIcon`)
 * @param {string} raw `innerHTML` for SVG
 * @return {VueComponent}
 */

var makeIcon = function makeIcon(name, content) {
  // For performance reason we pre-compute some values, so that
  // they are not computed on each render of the icon component
  var iconName = "BIcon".concat(pascalCase(name));
  var iconNameClass = "bi-".concat(kebabCase(name));
  var svgContent = trim(content || ''); // Return the icon component definition

  return (/*#__PURE__*/Vue.extend({
      name: iconName,
      functional: true,
      props: _objectSpread2({}, commonIconProps, {
        stacked: {
          type: Boolean,
          default: false
        }
      }),
      render: function render(h, _ref) {
        var data = _ref.data,
            props = _ref.props;
        return h(BVIconBase, mergeData(data, {
          staticClass: iconNameClass,
          props: _objectSpread2({}, props, {
            content: svgContent
          })
        }));
      }
    })
  );
};

// --- BEGIN AUTO-GENERATED FILE ---

var BIconBlank = /*#__PURE__*/makeIcon('Blank', ''); // --- Bootstrap Icons ---

var BIconAlarm = /*#__PURE__*/makeIcon('Alarm', '<path fill-rule="evenodd" d="M10 17a6 6 0 100-12 6 6 0 000 12zm0 1a7 7 0 100-14 7 7 0 000 14z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M10 6.5a.5.5 0 01.5.5v4a.5.5 0 01-.053.224l-1.5 3a.5.5 0 11-.894-.448L9.5 10.882V7a.5.5 0 01.5-.5z" clip-rule="evenodd"/><path d="M2.86 7.387A2.5 2.5 0 116.387 3.86 8.035 8.035 0 002.86 7.387zM13.613 3.86a2.5 2.5 0 113.527 3.527 8.035 8.035 0 00-3.527-3.527z"/><path fill-rule="evenodd" d="M13.646 16.146a.5.5 0 01.708 0l1 1a.5.5 0 01-.708.708l-1-1a.5.5 0 010-.708zm-7.292 0a.5.5 0 00-.708 0l-1 1a.5.5 0 00.708.708l1-1a.5.5 0 000-.708zM7.5 2.5A.5.5 0 018 2h4a.5.5 0 010 1H8a.5.5 0 01-.5-.5z" clip-rule="evenodd"/><path d="M9 3h2v2H9V3z"/>');
var BIconAlarmFill = /*#__PURE__*/makeIcon('AlarmFill', '<path fill-rule="evenodd" d="M7.5 2.5A.5.5 0 018 2h4a.5.5 0 010 1h-1v1.07a7.002 7.002 0 013.537 12.26l.817.816a.5.5 0 01-.708.708l-.924-.925A6.967 6.967 0 0110 18a6.967 6.967 0 01-3.722-1.07l-.924.924a.5.5 0 01-.708-.708l.817-.816A7.002 7.002 0 019 4.07V3H8a.5.5 0 01-.5-.5zM2.86 7.387A2.5 2.5 0 116.387 3.86 8.035 8.035 0 002.86 7.387zM15.5 3c-.753 0-1.429.333-1.887.86a8.035 8.035 0 013.527 3.527A2.5 2.5 0 0015.5 3zm-5 4a.5.5 0 00-1 0v3.882l-1.447 2.894a.5.5 0 10.894.448l1.5-3A.5.5 0 0010.5 11V7z" clip-rule="evenodd"/>');
var BIconAlertCircle = /*#__PURE__*/makeIcon('AlertCircle', '<path fill-rule="evenodd" d="M10 17a7 7 0 100-14 7 7 0 000 14zm0 1a8 8 0 100-16 8 8 0 000 16z" clip-rule="evenodd"/><path d="M9.002 13a1 1 0 112 0 1 1 0 01-2 0zM9.1 6.995a.905.905 0 111.8 0l-.35 3.507a.553.553 0 01-1.1 0L9.1 6.995z"/>');
var BIconAlertCircleFill = /*#__PURE__*/makeIcon('AlertCircleFill', '<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8.998 3a1 1 0 112 0 1 1 0 01-2 0zM10 6a.905.905 0 00-.9.995l.35 3.507a.553.553 0 001.1 0l.35-3.507A.905.905 0 0010 6z" clip-rule="evenodd"/>');
var BIconAlertOctagon = /*#__PURE__*/makeIcon('AlertOctagon', '<path fill-rule="evenodd" d="M6.54 2.146A.5.5 0 016.893 2h6.214a.5.5 0 01.353.146l4.394 4.394a.5.5 0 01.146.353v6.214a.5.5 0 01-.146.353l-4.394 4.394a.5.5 0 01-.353.146H6.893a.5.5 0 01-.353-.146L2.146 13.46A.5.5 0 012 13.107V6.893a.5.5 0 01.146-.353L6.54 2.146zM7.1 3L3 7.1v5.8L7.1 17h5.8l4.1-4.1V7.1L12.9 3H7.1z" clip-rule="evenodd"/><rect width="2" height="2" x="9.002" y="12" rx="1"/><path d="M9.1 6.995a.905.905 0 111.8 0l-.35 3.507a.553.553 0 01-1.1 0L9.1 6.995z"/>');
var BIconAlertOctagonFill = /*#__PURE__*/makeIcon('AlertOctagonFill', '<path fill-rule="evenodd" d="M13.107 2a.5.5 0 01.353.146l4.394 4.394a.5.5 0 01.146.353v6.214a.5.5 0 01-.146.353l-4.394 4.394a.5.5 0 01-.353.146H6.893a.5.5 0 01-.353-.146L2.146 13.46A.5.5 0 012 13.107V6.893a.5.5 0 01.146-.353L6.54 2.146A.5.5 0 016.893 2h6.214zM9.002 13a1 1 0 112 0 1 1 0 01-2 0zM10 6a.905.905 0 00-.9.995l.35 3.507a.553.553 0 001.1 0l.35-3.507A.905.905 0 0010 6z" clip-rule="evenodd"/>');
var BIconAlertSquare = /*#__PURE__*/makeIcon('AlertSquare', '<path fill-rule="evenodd" d="M16 3H4a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4z" clip-rule="evenodd"/><rect width="2" height="2" x="9.002" y="12" rx="1"/><path d="M9.1 6.995a.905.905 0 111.8 0l-.35 3.507a.553.553 0 01-1.1 0L9.1 6.995z"/>');
var BIconAlertSquareFill = /*#__PURE__*/makeIcon('AlertSquareFill', '<path fill-rule="evenodd" d="M2 4a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm7.002 9a1 1 0 112 0 1 1 0 01-2 0zM10 6a.905.905 0 00-.9.995l.35 3.507a.553.553 0 001.1 0l.35-3.507A.905.905 0 0010 6z" clip-rule="evenodd"/>');
var BIconAlertTriangle = /*#__PURE__*/makeIcon('AlertTriangle', '<path fill-rule="evenodd" d="M9.938 4.016a.146.146 0 00-.054.057L3.027 15.74a.176.176 0 00-.002.183c.016.03.037.05.054.06.015.01.034.017.066.017h13.713a.12.12 0 00.066-.017.163.163 0 00.055-.06.176.176 0 00-.003-.183L10.12 4.073a.146.146 0 00-.054-.057.13.13 0 00-.063-.016.13.13 0 00-.064.016zm1.043-.45a1.13 1.13 0 00-1.96 0L2.166 15.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L10.982 3.566z" clip-rule="evenodd"/><rect width="2" height="2" x="9.002" y="13" rx="1"/><path d="M9.1 7.995a.905.905 0 111.8 0l-.35 3.507a.553.553 0 01-1.1 0L9.1 7.995z"/>');
var BIconAlertTriangleFill = /*#__PURE__*/makeIcon('AlertTriangleFill', '<path fill-rule="evenodd" d="M9.022 3.566a1.13 1.13 0 011.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H3.144c-.889 0-1.437-.99-.98-1.767L9.022 3.566zM9.002 14a1 1 0 112 0 1 1 0 01-2 0zM10 7a.905.905 0 00-.9.995l.35 3.507a.553.553 0 001.1 0l.35-3.507A.905.905 0 0010 7z" clip-rule="evenodd"/>');
var BIconArchive = /*#__PURE__*/makeIcon('Archive', '<path fill-rule="evenodd" d="M4 7v7.5c0 .864.642 1.5 1.357 1.5h9.286c.715 0 1.357-.636 1.357-1.5V7h1v7.5c0 1.345-1.021 2.5-2.357 2.5H5.357C4.021 17 3 15.845 3 14.5V7h1z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M7.5 9.5A.5.5 0 018 9h4a.5.5 0 010 1H8a.5.5 0 01-.5-.5zM17 4H3v2h14V4zM3 3a1 1 0 00-1 1v2a1 1 0 001 1h14a1 1 0 001-1V4a1 1 0 00-1-1H3z" clip-rule="evenodd"/>');
var BIconArchiveFill = /*#__PURE__*/makeIcon('ArchiveFill', '<path fill-rule="evenodd" d="M14.643 17C15.979 17 17 15.845 17 14.5V7H3v7.5C3 15.845 4.021 17 5.357 17h9.286zM8 9a.5.5 0 000 1h4a.5.5 0 000-1H8zM3 3a1 1 0 00-1 1v1.5a1 1 0 001 1h14a1 1 0 001-1V4a1 1 0 00-1-1H3z" clip-rule="evenodd"/>');
var BIconArrowBarBottom = /*#__PURE__*/makeIcon('ArrowBarBottom', '<path fill-rule="evenodd" d="M13.354 12.146a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 01.708-.708L10 14.793l2.646-2.647a.5.5 0 01.708 0z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M10 8a.5.5 0 01.5.5V15a.5.5 0 01-1 0V8.5A.5.5 0 0110 8zM4 5.75a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>');
var BIconArrowBarLeft = /*#__PURE__*/makeIcon('ArrowBarLeft', '<path fill-rule="evenodd" d="M7.854 6.646a.5.5 0 00-.708 0l-3 3a.5.5 0 000 .708l3 3a.5.5 0 00.708-.708L5.207 10l2.647-2.646a.5.5 0 000-.708z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12 10a.5.5 0 00-.5-.5H5a.5.5 0 000 1h6.5a.5.5 0 00.5-.5zm2.5 6a.5.5 0 01-.5-.5v-11a.5.5 0 011 0v11a.5.5 0 01-.5.5z" clip-rule="evenodd"/>');
var BIconArrowBarRight = /*#__PURE__*/makeIcon('ArrowBarRight', '<path fill-rule="evenodd" d="M12.146 6.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L14.793 10l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M8 10a.5.5 0 01.5-.5H15a.5.5 0 010 1H8.5A.5.5 0 018 10zm-2.5 6a.5.5 0 01-.5-.5v-11a.5.5 0 011 0v11a.5.5 0 01-.5.5z" clip-rule="evenodd"/>');
var BIconArrowBarUp = /*#__PURE__*/makeIcon('ArrowBarUp', '<path fill-rule="evenodd" d="M13.354 7.854a.5.5 0 000-.708l-3-3a.5.5 0 00-.708 0l-3 3a.5.5 0 10.708.708L10 5.207l2.646 2.647a.5.5 0 00.708 0z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M10 12a.5.5 0 00.5-.5V5a.5.5 0 00-1 0v6.5a.5.5 0 00.5.5zm-6 2.75a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>');
var BIconArrowClockwise = /*#__PURE__*/makeIcon('ArrowClockwise', '<path fill-rule="evenodd" d="M10 4.5a5.5 5.5 0 105.5 5.5.5.5 0 011 0 6.5 6.5 0 11-3.25-5.63l-.5.865A5.472 5.472 0 0010 4.5z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M10.646 1.646a.5.5 0 01.708 0l2.5 2.5a.5.5 0 010 .708l-2.5 2.5a.5.5 0 01-.708-.708L12.793 4.5l-2.147-2.146a.5.5 0 010-.708z" clip-rule="evenodd"/>');
var BIconArrowCounterclockwise = /*#__PURE__*/makeIcon('ArrowCounterclockwise', '<path fill-rule="evenodd" d="M10 4.5A5.5 5.5 0 114.5 10a.5.5 0 00-1 0 6.5 6.5 0 103.25-5.63l.5.865A5.472 5.472 0 0110 4.5z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M9.354 1.646a.5.5 0 00-.708 0l-2.5 2.5a.5.5 0 000 .708l2.5 2.5a.5.5 0 10.708-.708L7.207 4.5l2.147-2.146a.5.5 0 000-.708z" clip-rule="evenodd"/>');
var BIconArrowDown = /*#__PURE__*/makeIcon('ArrowDown', '<path fill-rule="evenodd" d="M6.646 11.646a.5.5 0 01.708 0L10 14.293l2.646-2.647a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 010-.708z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M10 4.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V5a.5.5 0 01.5-.5z" clip-rule="evenodd"/>');
var BIconArrowDownLeft = /*#__PURE__*/makeIcon('ArrowDownLeft', '<path fill-rule="evenodd" d="M5 9.5a.5.5 0 01.5.5v4.5H10a.5.5 0 010 1H5a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M14.354 5.646a.5.5 0 010 .708l-9 9a.5.5 0 01-.708-.708l9-9a.5.5 0 01.708 0z" clip-rule="evenodd"/>');
var BIconArrowDownRight = /*#__PURE__*/makeIcon('ArrowDownRight', '<path fill-rule="evenodd" d="M14 9.5a.5.5 0 01.5.5v5a.5.5 0 01-.5.5H9a.5.5 0 010-1h4.5V10a.5.5 0 01.5-.5z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M4.646 5.646a.5.5 0 01.708 0l9 9a.5.5 0 01-.708.708l-9-9a.5.5 0 010-.708z" clip-rule="evenodd"/>');
var BIconArrowDownShort = /*#__PURE__*/makeIcon('ArrowDownShort', '<path fill-rule="evenodd" d="M6.646 9.646a.5.5 0 01.708 0L10 12.293l2.646-2.647a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 010-.708z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M10 6.5a.5.5 0 01.5.5v5a.5.5 0 01-1 0V7a.5.5 0 01.5-.5z" clip-rule="evenodd"/>');
var BIconArrowLeft = /*#__PURE__*/makeIcon('ArrowLeft', '<path fill-rule="evenodd" d="M7.854 6.646a.5.5 0 010 .708L5.207 10l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M4.5 10a.5.5 0 01.5-.5h10.5a.5.5 0 010 1H5a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>');
var BIconArrowLeftRight = /*#__PURE__*/makeIcon('ArrowLeftRight', '<path fill-rule="evenodd" d="M12.146 9.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L14.793 13l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M4 13a.5.5 0 01.5-.5H15a.5.5 0 010 1H4.5A.5.5 0 014 13zm3.854-9.354a.5.5 0 010 .708L5.207 7l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M4.5 7a.5.5 0 01.5-.5h10.5a.5.5 0 010 1H5a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>');
var BIconArrowLeftShort = /*#__PURE__*/makeIcon('ArrowLeftShort', '<path fill-rule="evenodd" d="M9.854 6.646a.5.5 0 010 .708L7.207 10l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M6.5 10a.5.5 0 01.5-.5h6.5a.5.5 0 010 1H7a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>');
var BIconArrowRepeat = /*#__PURE__*/makeIcon('ArrowRepeat', '<path fill-rule="evenodd" d="M4 9.5a.5.5 0 00-.5.5 6.5 6.5 0 0012.13 3.25.5.5 0 00-.866-.5A5.5 5.5 0 014.5 10a.5.5 0 00-.5-.5z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M4.354 9.146a.5.5 0 00-.708 0l-2 2a.5.5 0 00.708.708L4 10.207l1.646 1.647a.5.5 0 00.708-.708l-2-2zM15.947 10.5a.5.5 0 00.5-.5 6.5 6.5 0 00-12.13-3.25.5.5 0 10.866.5A5.5 5.5 0 0115.448 10a.5.5 0 00.5.5z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M18.354 8.146a.5.5 0 00-.708 0L16 9.793l-1.646-1.647a.5.5 0 00-.708.708l2 2a.5.5 0 00.708 0l2-2a.5.5 0 000-.708z" clip-rule="evenodd"/>');
var BIconArrowRight = /*#__PURE__*/makeIcon('ArrowRight', '<path fill-rule="evenodd" d="M12.146 6.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L14.793 10l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M4 10a.5.5 0 01.5-.5H15a.5.5 0 010 1H4.5A.5.5 0 014 10z" clip-rule="evenodd"/>');
var BIconArrowRightShort = /*#__PURE__*/makeIcon('ArrowRightShort', '<path fill-rule="evenodd" d="M10.146 6.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 10l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M6 10a.5.5 0 01.5-.5H13a.5.5 0 010 1H6.5A.5.5 0 016 10z" clip-rule="evenodd"/>');
var BIconArrowUp = /*#__PURE__*/makeIcon('ArrowUp', '<path fill-rule="evenodd" d="M10 5.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V6a.5.5 0 01.5-.5z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M9.646 4.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L10 5.707 7.354 8.354a.5.5 0 11-.708-.708l3-3z" clip-rule="evenodd"/>');
var BIconArrowUpDown = /*#__PURE__*/makeIcon('ArrowUpDown', '<path fill-rule="evenodd" d="M13 5.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V6a.5.5 0 01.5-.5z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12.646 4.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L13 5.707l-2.646 2.647a.5.5 0 01-.708-.708l3-3zm-9 7a.5.5 0 01.708 0L7 14.293l2.646-2.647a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 010-.708z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M7 4.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V5a.5.5 0 01.5-.5z" clip-rule="evenodd"/>');
var BIconArrowUpLeft = /*#__PURE__*/makeIcon('ArrowUpLeft', '<path fill-rule="evenodd" d="M4.5 6a.5.5 0 01.5-.5h5a.5.5 0 010 1H5.5V11a.5.5 0 01-1 0V6z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M4.646 5.646a.5.5 0 01.708 0l9 9a.5.5 0 01-.708.708l-9-9a.5.5 0 010-.708z" clip-rule="evenodd"/>');
var BIconArrowUpRight = /*#__PURE__*/makeIcon('ArrowUpRight', '<path fill-rule="evenodd" d="M8.5 6a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v5a.5.5 0 01-1 0V6.5H9a.5.5 0 01-.5-.5z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M14.354 5.646a.5.5 0 010 .708l-9 9a.5.5 0 01-.708-.708l9-9a.5.5 0 01.708 0z" clip-rule="evenodd"/>');
var BIconArrowUpShort = /*#__PURE__*/makeIcon('ArrowUpShort', '<path fill-rule="evenodd" d="M10 7.5a.5.5 0 01.5.5v5a.5.5 0 01-1 0V8a.5.5 0 01.5-.5z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M9.646 6.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L10 7.707l-2.646 2.647a.5.5 0 01-.708-.708l3-3z" clip-rule="evenodd"/>');
var BIconArrowsAngleContract = /*#__PURE__*/makeIcon('ArrowsAngleContract', '<path fill-rule="evenodd" d="M11.5 4.036a.5.5 0 01.5.5v3.5h3.5a.5.5 0 010 1h-4a.5.5 0 01-.5-.5v-4a.5.5 0 01.5-.5z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M16.354 3.646a.5.5 0 010 .708l-4.5 4.5a.5.5 0 01-.708-.708l4.5-4.5a.5.5 0 01.708 0zm-7.5 7.5a.5.5 0 010 .708l-4.5 4.5a.5.5 0 01-.708-.708l4.5-4.5a.5.5 0 01.708 0z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M4.036 11.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v4a.5.5 0 01-1 0V12h-3.5a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>');
var BIconArrowsAngleExpand = /*#__PURE__*/makeIcon('ArrowsAngleExpand', '<path fill-rule="evenodd" d="M4 11.5a.5.5 0 01.5.5v3.5H8a.5.5 0 010 1H4a.5.5 0 01-.5-.5v-4a.5.5 0 01.5-.5z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M8.854 11.11a.5.5 0 010 .708l-4.5 4.5a.5.5 0 11-.708-.707l4.5-4.5a.5.5 0 01.708 0zm7.464-7.464a.5.5 0 010 .708l-4.5 4.5a.5.5 0 11-.707-.708l4.5-4.5a.5.5 0 01.707 0z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M11.5 4a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v4a.5.5 0 01-1 0V4.5H12a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>');
var BIconArrowsCollapse = /*#__PURE__*/makeIcon('ArrowsCollapse', '<path fill-rule="evenodd" d="M4 10a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11A.5.5 0 014 10zm6-7a.5.5 0 01.5.5V8a.5.5 0 01-1 0V3.5A.5.5 0 0110 3z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12.354 5.646a.5.5 0 010 .708l-2 2a.5.5 0 01-.708 0l-2-2a.5.5 0 11.708-.708L10 7.293l1.646-1.647a.5.5 0 01.708 0zM10 17a.5.5 0 00.5-.5V12a.5.5 0 00-1 0v4.5a.5.5 0 00.5.5z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12.354 14.354a.5.5 0 000-.708l-2-2a.5.5 0 00-.708 0l-2 2a.5.5 0 00.708.708L10 12.707l1.646 1.647a.5.5 0 00.708 0z" clip-rule="evenodd"/>');
var BIconArrowsExpand = /*#__PURE__*/makeIcon('ArrowsExpand', '<path fill-rule="evenodd" d="M4 10a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11A.5.5 0 014 10zm6-1.5a.5.5 0 00.5-.5V3.5a.5.5 0 00-1 0V8a.5.5 0 00.5.5z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12.354 5.854a.5.5 0 000-.708l-2-2a.5.5 0 00-.708 0l-2 2a.5.5 0 10.708.708L10 4.207l1.646 1.647a.5.5 0 00.708 0zM10 11.5a.5.5 0 01.5.5v4.5a.5.5 0 01-1 0V12a.5.5 0 01.5-.5z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12.354 14.146a.5.5 0 010 .708l-2 2a.5.5 0 01-.708 0l-2-2a.5.5 0 01.708-.708L10 15.793l1.646-1.647a.5.5 0 01.708 0z" clip-rule="evenodd"/>');
var BIconArrowsFullscreen = /*#__PURE__*/makeIcon('ArrowsFullscreen', '<path fill-rule="evenodd" d="M4 11.5a.5.5 0 01.5.5v3.5H8a.5.5 0 010 1H4a.5.5 0 01-.5-.5v-4a.5.5 0 01.5-.5z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M8.854 11.11a.5.5 0 010 .708l-4.5 4.5a.5.5 0 11-.708-.707l4.5-4.5a.5.5 0 01.708 0zm7.464-7.464a.5.5 0 010 .708l-4.5 4.5a.5.5 0 11-.707-.708l4.5-4.5a.5.5 0 01.707 0z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M11.5 4a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v4a.5.5 0 01-1 0V4.5H12a.5.5 0 01-.5-.5zm4.5 7.5a.5.5 0 00-.5.5v3.5H12a.5.5 0 000 1h4a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M11.146 11.11a.5.5 0 000 .708l4.5 4.5a.5.5 0 00.708-.707l-4.5-4.5a.5.5 0 00-.708 0zM3.682 3.646a.5.5 0 000 .708l4.5 4.5a.5.5 0 10.707-.708l-4.5-4.5a.5.5 0 00-.707 0z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M8.5 4a.5.5 0 00-.5-.5H4a.5.5 0 00-.5.5v4a.5.5 0 001 0V4.5H8a.5.5 0 00.5-.5z" clip-rule="evenodd"/>');
var BIconAt = /*#__PURE__*/makeIcon('At', '<path fill-rule="evenodd" d="M15.106 9.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V7.206h-1.032v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907s-.601 1.914-1.538 1.914c-.895 0-1.442-.725-1.442-1.914z" clip-rule="evenodd"/>');
var BIconAward = /*#__PURE__*/makeIcon('Award', '<path d="M10 2l1.669.864 1.858.282.842 1.68 1.337 1.32L15.4 8l.306 1.854-1.337 1.32-.842 1.68-1.858.282L10 14l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L4.6 8l-.306-1.854 1.337-1.32.842-1.68 1.858-.282L10 2z"/><path d="M6 13.794V18l4-1 4 1v-4.206l-2.018.306L10 15.126 8.018 14.1 6 13.794z"/>');
var BIconBackspace = /*#__PURE__*/makeIcon('Backspace', '<path fill-rule="evenodd" d="M8.603 4h7.08a1 1 0 011 1v10a1 1 0 01-1 1h-7.08a1 1 0 01-.76-.35L3 10l4.844-5.65A1 1 0 018.603 4zm7.08-1a2 2 0 012 2v10a2 2 0 01-2 2h-7.08a2 2 0 01-1.519-.698L2.241 10.65a1 1 0 010-1.302L7.084 3.7A2 2 0 018.603 3h7.08z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M7.83 7.146a.5.5 0 000 .708l5 5a.5.5 0 00.707-.708l-5-5a.5.5 0 00-.708 0z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M13.537 7.146a.5.5 0 010 .708l-5 5a.5.5 0 01-.708-.708l5-5a.5.5 0 01.707 0z" clip-rule="evenodd"/>');
var BIconBackspaceFill = /*#__PURE__*/makeIcon('BackspaceFill', '<path fill-rule="evenodd" d="M17.683 5a2 2 0 00-2-2h-7.08a2 2 0 00-1.519.698L2.241 9.35a1 1 0 000 1.302l4.843 5.65A2 2 0 008.603 17h7.08a2 2 0 002-2V5zM7.829 7.854a.5.5 0 11.707-.708l2.147 2.147 2.146-2.147a.5.5 0 11.707.708L11.39 10l2.146 2.146a.5.5 0 01-.707.708l-2.146-2.147-2.147 2.147a.5.5 0 01-.707-.708L9.976 10 7.829 7.854z" clip-rule="evenodd"/>');
var BIconBackspaceReverse = /*#__PURE__*/makeIcon('BackspaceReverse', '<path fill-rule="evenodd" d="M11.08 4H4a1 1 0 00-1 1v10a1 1 0 001 1h7.08a1 1 0 00.76-.35L16.682 10l-4.844-5.65A1 1 0 0011.08 4zM4 3a2 2 0 00-2 2v10a2 2 0 002 2h7.08a2 2 0 001.519-.698l4.843-5.651a1 1 0 000-1.302L12.6 3.7a2 2 0 00-1.52-.7H4z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M11.854 7.146a.5.5 0 010 .708l-5 5a.5.5 0 01-.708-.708l5-5a.5.5 0 01.708 0z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M6.146 7.146a.5.5 0 000 .708l5 5a.5.5 0 00.708-.708l-5-5a.5.5 0 00-.708 0z" clip-rule="evenodd"/>');
var BIconBackspaceReverseFill = /*#__PURE__*/makeIcon('BackspaceReverseFill', '<path fill-rule="evenodd" d="M2 5a2 2 0 012-2h7.08a2 2 0 011.519.698l4.843 5.651a1 1 0 010 1.302L12.6 16.3a2 2 0 01-1.52.7H4a2 2 0 01-2-2V5zm9.854 2.854a.5.5 0 00-.708-.708L9 9.293 6.854 7.146a.5.5 0 10-.708.708L8.293 10l-2.147 2.146a.5.5 0 00.708.708L9 10.707l2.146 2.147a.5.5 0 00.708-.708L9.707 10l2.147-2.146z" clip-rule="evenodd"/>');
var BIconBarChart = /*#__PURE__*/makeIcon('BarChart', '<path fill-rule="evenodd" d="M6 13H4v3h2v-3zm5-4H9v7h2V9zm5-5h-2v12h2V4zm-2-1a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2zM8 9a1 1 0 011-1h2a1 1 0 011 1v7a1 1 0 01-1 1H9a1 1 0 01-1-1V9zm-5 4a1 1 0 011-1h2a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3z" clip-rule="evenodd"/>');
var BIconBarChartFill = /*#__PURE__*/makeIcon('BarChartFill', '<rect width="4" height="5" x="3" y="12" rx="1"/><rect width="4" height="9" x="8" y="8" rx="1"/><rect width="4" height="14" x="13" y="3" rx="1"/>');
var BIconBattery = /*#__PURE__*/makeIcon('Battery', '<path fill-rule="evenodd" d="M14 7H4a1 1 0 00-1 1v4a1 1 0 001 1h10a1 1 0 001-1V8a1 1 0 00-1-1zM4 6a2 2 0 00-2 2v4a2 2 0 002 2h10a2 2 0 002-2V8a2 2 0 00-2-2H4z" clip-rule="evenodd"/><path d="M16.5 11.5a1.5 1.5 0 000-3v3z"/>');
var BIconBatteryCharging = /*#__PURE__*/makeIcon('BatteryCharging', '<path d="M16.5 11.5a1.5 1.5 0 000-3v3z"/><path fill-rule="evenodd" d="M11.585 4.568a.5.5 0 01.226.579l-1.134 3.686h1.99a.5.5 0 01.364.843l-5.334 5.667a.5.5 0 01-.842-.49l1.135-3.686H6a.5.5 0 01-.364-.843l5.333-5.667a.5.5 0 01.616-.09z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M8.332 6H4a2 2 0 00-2 2v4a2 2 0 002 2h2.072l.307-1H4a1 1 0 01-1-1V8a1 1 0 011-1h3.391l.941-1zM6.45 8H4v4h1.313a1.5 1.5 0 01-.405-2.361L6.45 8zm.976 5l-.308 1H8.96l.21-.224h.001l.73-.776H8.53l-.085.09.028-.09H7.426zm1.354-1H7.733l.257-.833H6a.5.5 0 01-.364-.843l.793-.843L7.823 8h1.373l-2.039 2.167h1.51a.492.492 0 01.166.028.5.5 0 01.312.619L8.78 12zm.69 0h1.373l1.395-1.482.793-.842a.5.5 0 00-.364-.843h-1.99L10.933 8H9.887l-.166.54-.199.646a.5.5 0 00.478.647h1.51L9.47 12zm.725-5h1.046l.308-1H9.706l-.942 1h1.374l.085-.09-.028.09zm2.4-1l-.308 1H14a1 1 0 011 1v4a1 1 0 01-1 1h-2.724l-.942 1H14a2 2 0 002-2V8a2 2 0 00-2-2h-1.405zm-.378 6H14v-1.98a1.499 1.499 0 01-.241.341L12.217 12zM14 8.646V8h-.646a1.5 1.5 0 01.646.646z" clip-rule="evenodd"/>');
var BIconBatteryFull = /*#__PURE__*/makeIcon('BatteryFull', '<path fill-rule="evenodd" d="M14 7H4a1 1 0 00-1 1v4a1 1 0 001 1h10a1 1 0 001-1V8a1 1 0 00-1-1zM4 6a2 2 0 00-2 2v4a2 2 0 002 2h10a2 2 0 002-2V8a2 2 0 00-2-2H4z" clip-rule="evenodd"/><path d="M4 8h10v4H4V8zm12.5 3.5a1.5 1.5 0 000-3v3z"/>');
var BIconBell = /*#__PURE__*/makeIcon('Bell', '<path d="M10 18a2 2 0 002-2H8a2 2 0 002 2z"/><path fill-rule="evenodd" d="M10 3.918l-.797.161A4.002 4.002 0 006 8c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C14.134 10.197 14 8.628 14 8a4.002 4.002 0 00-3.203-3.92L10 3.917zM16.22 14c.223.447.482.801.78 1H3c.299-.199.557-.553.78-1C4.68 12.2 5 8.88 5 8c0-2.42 1.72-4.44 4.005-4.901a1 1 0 111.99 0A5.002 5.002 0 0115 8c0 .88.32 4.2 1.22 6z" clip-rule="evenodd"/>');
var BIconBellFill = /*#__PURE__*/makeIcon('BellFill', '<path d="M10 18a2 2 0 002-2H8a2 2 0 002 2zm.995-14.901a1 1 0 10-1.99 0A5.002 5.002 0 005 8c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>');
var BIconBlockquoteLeft = /*#__PURE__*/makeIcon('BlockquoteLeft', '<path fill-rule="evenodd" d="M4 5.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm5 3a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zm-5 3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z" clip-rule="evenodd"/><path d="M5.734 8.352a6.586 6.586 0 00-.445.275 1.94 1.94 0 00-.346.299 1.38 1.38 0 00-.252.369c-.058.129-.1.295-.123.498h.282c.242 0 .431.06.568.182.14.117.21.29.21.521a.697.697 0 01-.187.463c-.12.14-.289.21-.503.21-.336 0-.577-.109-.721-.327-.145-.223-.217-.514-.217-.873 0-.254.055-.485.164-.692.11-.21.242-.398.399-.562.16-.168.33-.31.51-.428.179-.117.33-.213.45-.287l.211.352zm2.168 0a6.588 6.588 0 00-.445.275 1.94 1.94 0 00-.346.299c-.113.12-.199.246-.257.375a1.75 1.75 0 00-.118.492h.282c.242 0 .431.06.568.182.14.117.21.29.21.521a.697.697 0 01-.187.463c-.12.14-.289.21-.504.21-.335 0-.576-.109-.72-.327-.145-.223-.217-.514-.217-.873 0-.254.055-.485.164-.692.11-.21.242-.398.398-.562.16-.168.33-.31.51-.428.18-.117.33-.213.451-.287l.211.352z"/>');
var BIconBlockquoteRight = /*#__PURE__*/makeIcon('BlockquoteRight', '<path fill-rule="evenodd" d="M4 5.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z" clip-rule="evenodd"/><path d="M14.168 8.352c.184.105.332.197.445.275.114.074.229.174.346.299.11.117.193.24.252.369s.1.295.123.498h-.281c-.243 0-.432.06-.569.182-.14.117-.21.29-.21.521 0 .164.062.319.187.463.121.14.289.21.504.21.336 0 .576-.109.72-.327.145-.223.217-.514.217-.873 0-.254-.054-.485-.164-.692a2.436 2.436 0 00-.398-.562c-.16-.168-.33-.31-.51-.428-.18-.117-.33-.213-.451-.287l-.211.352zm-2.168 0c.184.105.332.197.445.275.114.074.229.174.346.299.113.12.2.246.258.375.055.125.094.289.117.492h-.281c-.242 0-.432.06-.569.182-.14.117-.21.29-.21.521 0 .164.062.319.187.463.121.14.289.21.504.21.336 0 .576-.109.72-.327.145-.223.217-.514.217-.873 0-.254-.054-.485-.164-.692a2.438 2.438 0 00-.398-.562c-.16-.168-.33-.31-.51-.428-.18-.117-.33-.213-.451-.287L12 8.352z"/>');
var BIconBook = /*#__PURE__*/makeIcon('Book', '<path fill-rule="evenodd" d="M5.214 3.072c1.599-.32 3.702-.363 5.14 1.074a.5.5 0 01.146.354v11a.5.5 0 01-.854.354c-.843-.844-2.115-1.059-3.47-.92-1.344.14-2.66.617-3.452 1.013A.5.5 0 012 15.5v-11a.5.5 0 01.276-.447L2.5 4.5l-.224-.447.002-.001.004-.002.013-.006a5.116 5.116 0 01.22-.103 12.958 12.958 0 012.7-.869zM3 4.82v9.908c.846-.343 1.944-.672 3.074-.788 1.143-.118 2.387-.023 3.426.56V4.718c-1.063-.929-2.631-.956-4.09-.664A11.958 11.958 0 003 4.82z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M14.786 3.072c-1.598-.32-3.702-.363-5.14 1.074A.5.5 0 009.5 4.5v11a.5.5 0 00.854.354c.844-.844 2.115-1.059 3.47-.92 1.344.14 2.66.617 3.452 1.013A.5.5 0 0018 15.5v-11a.5.5 0 00-.276-.447L17.5 4.5l.224-.447-.002-.001-.004-.002-.013-.006-.047-.023a12.582 12.582 0 00-.799-.34 12.96 12.96 0 00-2.073-.609zM17 4.82v9.908c-.846-.343-1.944-.672-3.074-.788-1.143-.118-2.386-.023-3.426.56V4.718c1.063-.929 2.631-.956 4.09-.664A11.956 11.956 0 0117 4.82z" clip-rule="evenodd"/>');
var BIconBookHalfFill = /*#__PURE__*/makeIcon('BookHalfFill', '<path fill-rule="evenodd" d="M5.214 3.072c1.599-.32 3.702-.363 5.14 1.074a.5.5 0 01.146.354v11a.5.5 0 01-.854.354c-.843-.844-2.115-1.059-3.47-.92-1.344.14-2.66.617-3.452 1.013A.5.5 0 012 15.5v-11a.5.5 0 01.276-.447L2.5 4.5l-.224-.447.002-.001.004-.002.013-.006a5.116 5.116 0 01.22-.103 12.958 12.958 0 012.7-.869zM3 4.82v9.908c.846-.343 1.944-.672 3.074-.788 1.143-.118 2.387-.023 3.426.56V4.718c-1.063-.929-2.631-.956-4.09-.664A11.958 11.958 0 003 4.82z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M14.786 3.072c-1.598-.32-3.702-.363-5.14 1.074A.5.5 0 009.5 4.5v11a.5.5 0 00.854.354c.844-.844 2.115-1.059 3.47-.92 1.344.14 2.66.617 3.452 1.013A.5.5 0 0018 15.5v-11a.5.5 0 00-.276-.447L17.5 4.5l.224-.447-.002-.001-.004-.002-.013-.006-.047-.023a12.582 12.582 0 00-.799-.34 12.96 12.96 0 00-2.073-.609z" clip-rule="evenodd"/>');
var BIconBookmark = /*#__PURE__*/makeIcon('Bookmark', '<path fill-rule="evenodd" d="M10 14l5 3V5a2 2 0 00-2-2H7a2 2 0 00-2 2v12l5-3zm-4 1.234l4-2.4 4 2.4V5a1 1 0 00-1-1H7a1 1 0 00-1 1v10.234z" clip-rule="evenodd"/>');
var BIconBookmarkFill = /*#__PURE__*/makeIcon('BookmarkFill', '<path fill-rule="evenodd" d="M5 5a2 2 0 012-2h6a2 2 0 012 2v12l-5-3-5 3V5z" clip-rule="evenodd"/>');
var BIconBootstrap = /*#__PURE__*/makeIcon('Bootstrap', '<path fill-rule="evenodd" d="M14 3H6a3 3 0 00-3 3v8a3 3 0 003 3h8a3 3 0 003-3V6a3 3 0 00-3-3zM6 2a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V6a4 4 0 00-4-4H6z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M10.537 14H7.062V5.545h3.398c1.588 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.482 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396zM8.375 6.658v2.467h1.558c1.16 0 1.764-.428 1.764-1.23 0-.78-.568-1.237-1.541-1.237H8.375zm1.898 6.229H8.375v-2.725h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377z" clip-rule="evenodd"/>');
var BIconBootstrapFill = /*#__PURE__*/makeIcon('BootstrapFill', '<path fill-rule="evenodd" d="M6.002 2a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V6a4 4 0 00-4-4h-8zm1.06 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.543-2.11H7.063V14zm1.313-4.875V6.658h1.78c.974 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H8.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H8.375v2.725z" clip-rule="evenodd"/>');
var BIconBootstrapReboot = /*#__PURE__*/makeIcon('BootstrapReboot', '<path fill-rule="evenodd" d="M3.161 10a6.84 6.84 0 106.842-6.84.58.58 0 110-1.16 8 8 0 11-6.556 3.412l-.663-.577a.58.58 0 01.227-.997l2.52-.69a.58.58 0 01.728.633l-.332 2.592a.58.58 0 01-.956.364l-.643-.56A6.812 6.812 0 003.16 10zm5.228-.079V7.277h1.57c.881 0 1.416.499 1.416 1.32 0 .84-.505 1.324-1.386 1.324h-1.6zm0 3.75v-2.828h1.57l1.498 2.828h1.314l-1.646-3.006c.897-.3 1.427-1.106 1.427-2.1 0-1.37-.943-2.246-2.456-2.246H7.248v7.352h1.141z" clip-rule="evenodd"/>');
var BIconBoxArrowBottomLeft = /*#__PURE__*/makeIcon('BoxArrowBottomLeft', '<path fill-rule="evenodd" d="M15 3.5A1.5 1.5 0 0116.5 5v8a1.5 1.5 0 01-1.5 1.5h-4a.5.5 0 010-1h4a.5.5 0 00.5-.5V5a.5.5 0 00-.5-.5H7a.5.5 0 00-.5.5v4a.5.5 0 01-1 0V5A1.5 1.5 0 017 3.5h8zm-11 7a.5.5 0 00-.5.5v5a.5.5 0 00.5.5h5a.5.5 0 000-1H4.5V11a.5.5 0 00-.5-.5z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M3.646 16.354a.5.5 0 00.708 0l8-8a.5.5 0 00-.708-.708l-8 8a.5.5 0 000 .708z" clip-rule="evenodd"/>');
var BIconBoxArrowBottomRight = /*#__PURE__*/makeIcon('BoxArrowBottomRight', '<path fill-rule="evenodd" d="M5 3.5A1.5 1.5 0 003.5 5v8A1.5 1.5 0 005 14.5h4a.5.5 0 000-1H5a.5.5 0 01-.5-.5V5a.5.5 0 01.5-.5h8a.5.5 0 01.5.5v4a.5.5 0 001 0V5A1.5 1.5 0 0013 3.5H5zm11 7a.5.5 0 01.5.5v5a.5.5 0 01-.5.5h-5a.5.5 0 010-1h4.5V11a.5.5 0 01.5-.5z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M16.354 16.354a.5.5 0 01-.708 0l-8-8a.5.5 0 11.708-.708l8 8a.5.5 0 010 .708z" clip-rule="evenodd"/>');
var BIconBoxArrowDown = /*#__PURE__*/makeIcon('BoxArrowDown', '<path fill-rule="evenodd" d="M6.646 13.646a.5.5 0 01.708 0L10 16.293l2.646-2.647a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 010-.708z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M10 6.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V7a.5.5 0 01.5-.5z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M4.5 4A1.5 1.5 0 016 2.5h8A1.5 1.5 0 0115.5 4v7a1.5 1.5 0 01-1.5 1.5h-1.5a.5.5 0 010-1H14a.5.5 0 00.5-.5V4a.5.5 0 00-.5-.5H6a.5.5 0 00-.5.5v7a.5.5 0 00.5.5h1.5a.5.5 0 010 1H6A1.5 1.5 0 014.5 11V4z" clip-rule="evenodd"/>');
var BIconBoxArrowLeft = /*#__PURE__*/makeIcon('BoxArrowLeft', '<path fill-rule="evenodd" d="M6.354 13.354a.5.5 0 000-.708L3.707 10l2.647-2.646a.5.5 0 10-.708-.708l-3 3a.5.5 0 000 .708l3 3a.5.5 0 00.708 0z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M13.5 10a.5.5 0 00-.5-.5H4a.5.5 0 000 1h9a.5.5 0 00.5-.5z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M16 15.5a1.5 1.5 0 001.5-1.5V6A1.5 1.5 0 0016 4.5H9A1.5 1.5 0 007.5 6v1.5a.5.5 0 001 0V6a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v8a.5.5 0 01-.5.5H9a.5.5 0 01-.5-.5v-1.5a.5.5 0 00-1 0V14A1.5 1.5 0 009 15.5h7z" clip-rule="evenodd"/>');
var BIconBoxArrowRight = /*#__PURE__*/makeIcon('BoxArrowRight', '<path fill-rule="evenodd" d="M13.646 13.354a.5.5 0 010-.708L16.293 10l-2.647-2.646a.5.5 0 01.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M6.5 10a.5.5 0 01.5-.5h9a.5.5 0 010 1H7a.5.5 0 01-.5-.5z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M4 15.5A1.5 1.5 0 012.5 14V6A1.5 1.5 0 014 4.5h7A1.5 1.5 0 0112.5 6v1.5a.5.5 0 01-1 0V6a.5.5 0 00-.5-.5H4a.5.5 0 00-.5.5v8a.5.5 0 00.5.5h7a.5.5 0 00.5-.5v-1.5a.5.5 0 011 0V14a1.5 1.5 0 01-1.5 1.5H4z" clip-rule="evenodd"/>');
var BIconBoxArrowUp = /*#__PURE__*/makeIcon('BoxArrowUp', '<path fill-rule="evenodd" d="M6.646 6.354a.5.5 0 00.708 0L10 3.707l2.646 2.647a.5.5 0 00.708-.708l-3-3a.5.5 0 00-.708 0l-3 3a.5.5 0 000 .708z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M10 13.5a.5.5 0 00.5-.5V4a.5.5 0 00-1 0v9a.5.5 0 00.5.5z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M4.5 16A1.5 1.5 0 006 17.5h8a1.5 1.5 0 001.5-1.5V9A1.5 1.5 0 0014 7.5h-1.5a.5.5 0 000 1H14a.5.5 0 01.5.5v7a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5V9a.5.5 0 01.5-.5h1.5a.5.5 0 000-1H6A1.5 1.5 0 004.5 9v7z" clip-rule="evenodd"/>');
var BIconBoxArrowUpLeft = /*#__PURE__*/makeIcon('BoxArrowUpLeft', '<path fill-rule="evenodd" d="M16.5 15a1.5 1.5 0 01-1.5 1.5H7A1.5 1.5 0 015.5 15v-4a.5.5 0 011 0v4a.5.5 0 00.5.5h8a.5.5 0 00.5-.5V7a.5.5 0 00-.5-.5h-4a.5.5 0 010-1h4A1.5 1.5 0 0116.5 7v8zm-7-11a.5.5 0 00-.5-.5H4a.5.5 0 00-.5.5v5a.5.5 0 001 0V4.5H9a.5.5 0 00.5-.5z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M3.646 3.646a.5.5 0 000 .708l8 8a.5.5 0 00.708-.708l-8-8a.5.5 0 00-.708 0z" clip-rule="evenodd"/>');
var BIconBoxArrowUpRight = /*#__PURE__*/makeIcon('BoxArrowUpRight', '<path fill-rule="evenodd" d="M3.5 15A1.5 1.5 0 005 16.5h8a1.5 1.5 0 001.5-1.5v-4a.5.5 0 00-1 0v4a.5.5 0 01-.5.5H5a.5.5 0 01-.5-.5V7a.5.5 0 01.5-.5h4a.5.5 0 000-1H5A1.5 1.5 0 003.5 7v8zm7-11a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v5a.5.5 0 01-1 0V4.5H11a.5.5 0 01-.5-.5z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M16.354 3.646a.5.5 0 010 .708l-8 8a.5.5 0 01-.708-.708l8-8a.5.5 0 01.708 0z" clip-rule="evenodd"/>');
var BIconBraces = /*#__PURE__*/makeIcon('Braces', '<path d="M4.114 10.063V9.9c1.005-.102 1.497-.615 1.497-1.6V6.503c0-1.094.39-1.538 1.354-1.538h.273V4h-.376C5.25 4 4.49 4.759 4.49 6.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538v-1.798c0-.984-.492-1.497-1.497-1.6zM15.886 9.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V9.332c-1.114 0-1.49-.362-1.49-1.456V6.352C15.51 4.759 14.75 4 13.138 4h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V8.3c0 .984.492 1.497 1.497 1.6z"/>');
var BIconBrightnessFillHigh = /*#__PURE__*/makeIcon('BrightnessFillHigh', '<circle cx="10" cy="10" r="4"/><path fill-rule="evenodd" d="M10 2a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2A.5.5 0 0110 2zm0 13a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2a.5.5 0 01.5-.5zm8-5a.5.5 0 01-.5.5h-2a.5.5 0 010-1h2a.5.5 0 01.5.5zM5 10a.5.5 0 01-.5.5h-2a.5.5 0 010-1h2a.5.5 0 01.5.5zm10.657-5.657a.5.5 0 010 .707l-1.414 1.414a.5.5 0 01-.707-.707l1.414-1.414a.5.5 0 01.707 0zm-9.193 9.193a.5.5 0 010 .707L5.05 15.657a.5.5 0 01-.707-.707l1.414-1.414a.5.5 0 01.707 0zm9.193 2.121a.5.5 0 01-.707 0l-1.414-1.414a.5.5 0 01.707-.707l1.414 1.414a.5.5 0 010 .707zM6.464 6.464a.5.5 0 01-.707 0L4.343 5.05a.5.5 0 01.707-.707l1.414 1.414a.5.5 0 010 .707z" clip-rule="evenodd"/>');
var BIconBrightnessFillLow = /*#__PURE__*/makeIcon('BrightnessFillLow', '<circle cx="10" cy="10" r="4"/><circle cx="10" cy="4.5" r=".5"/><circle cx="10" cy="15.5" r=".5"/><circle cx="15.5" cy="10" r=".5" transform="rotate(90 15.5 10)"/><circle cx="4.5" cy="10" r=".5" transform="rotate(90 4.5 10)"/><circle cx="13.889" cy="6.111" r=".5" transform="rotate(45 13.89 6.11)"/><circle cx="6.111" cy="13.889" r=".5" transform="rotate(45 6.11 13.89)"/><circle cx="13.889" cy="13.889" r=".5" transform="rotate(135 13.89 13.89)"/><circle cx="6.111" cy="6.111" r=".5" transform="rotate(135 6.11 6.11)"/>');
var BIconBrightnessHigh = /*#__PURE__*/makeIcon('BrightnessHigh', '<path fill-rule="evenodd" d="M10 13a3 3 0 100-6 3 3 0 000 6zm0 1a4 4 0 100-8 4 4 0 000 8zm0-12a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2A.5.5 0 0110 2zm0 13a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2a.5.5 0 01.5-.5zm8-5a.5.5 0 01-.5.5h-2a.5.5 0 010-1h2a.5.5 0 01.5.5zM5 10a.5.5 0 01-.5.5h-2a.5.5 0 010-1h2a.5.5 0 01.5.5zm10.657-5.657a.5.5 0 010 .707l-1.414 1.414a.5.5 0 11-.707-.707l1.414-1.414a.5.5 0 01.707 0zm-9.193 9.193a.5.5 0 010 .707L5.05 15.657a.5.5 0 01-.707-.707l1.414-1.414a.5.5 0 01.707 0zm9.193 2.121a.5.5 0 01-.707 0l-1.414-1.414a.5.5 0 01.707-.707l1.414 1.414a.5.5 0 010 .707zM6.464 6.464a.5.5 0 01-.707 0L4.343 5.05a.5.5 0 01.707-.707l1.414 1.414a.5.5 0 010 .707z" clip-rule="evenodd"/>');
var BIconBrightnessLow = /*#__PURE__*/makeIcon('BrightnessLow', '<path fill-rule="evenodd" d="M10 13a3 3 0 100-6 3 3 0 000 6zm0 1a4 4 0 100-8 4 4 0 000 8z" clip-rule="evenodd"/><circle cx="10" cy="4.5" r=".5"/><circle cx="10" cy="15.5" r=".5"/><circle cx="15.5" cy="10" r=".5" transform="rotate(90 15.5 10)"/><circle cx="4.5" cy="10" r=".5" transform="rotate(90 4.5 10)"/><circle cx="13.889" cy="6.111" r=".5" transform="rotate(45 13.89 6.11)"/><circle cx="6.111" cy="13.889" r=".5" transform="rotate(45 6.11 13.89)"/><circle cx="13.889" cy="13.889" r=".5" transform="rotate(135 13.89 13.89)"/><circle cx="6.111" cy="6.111" r=".5" transform="rotate(135 6.11 6.11)"/>');
var BIconBrush = /*#__PURE__*/makeIcon('Brush', '<path d="M17.213 3.018a.572.572 0 01.755.05.57.57 0 01.058.746c-.941 1.268-3.982 5.293-6.426 7.736a12.89 12.89 0 01-1.952 1.596c-.508.339-1.167.234-1.599-.197-.416-.416-.53-1.047-.213-1.543.347-.542.888-1.273 1.643-1.977 2.521-2.35 6.476-5.44 7.734-6.411z"/><path d="M9 14a2 2 0 01-2 2c-1 0-2 0-3.5-.5s.5-1 1-1.5 1.395-2 2.5-2a2 2 0 012 2z"/>');
var BIconBucket = /*#__PURE__*/makeIcon('Bucket', '<path fill-rule="evenodd" d="M10 3.5A4.5 4.5 0 005.5 8h-1a5.5 5.5 0 1111 0h-1A4.5 4.5 0 0010 3.5z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M3.61 7.687A.5.5 0 014 7.5h12a.5.5 0 01.488.608l-1.826 8.217a1.5 1.5 0 01-1.464 1.175H6.802a1.5 1.5 0 01-1.464-1.175L3.512 8.108a.5.5 0 01.098-.42zm1.013.813l1.691 7.608a.5.5 0 00.488.392h6.396a.5.5 0 00.488-.392l1.69-7.608H4.624z" clip-rule="evenodd"/>');
var BIconBucketFill = /*#__PURE__*/makeIcon('BucketFill', '<path fill-rule="evenodd" d="M10 3.5A4.5 4.5 0 005.5 8h-1a5.5 5.5 0 1111 0h-1A4.5 4.5 0 0010 3.5z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M3.61 7.687A.5.5 0 014 7.5h12a.5.5 0 01.488.608l-1.826 8.217a1.5 1.5 0 01-1.464 1.175H6.802a1.5 1.5 0 01-1.464-1.175L3.512 8.108a.5.5 0 01.098-.42z" clip-rule="evenodd"/>');
var BIconBuilding = /*#__PURE__*/makeIcon('Building', '<path fill-rule="evenodd" d="M17.285 2.089a.5.5 0 01.215.411v15a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V16h-1v1.5a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5v-6a.5.5 0 01.418-.493l5.582-.93V5.5a.5.5 0 01.324-.468l8-3a.5.5 0 01.46.057zM9.5 5.846V10.5a.5.5 0 01-.418.493l-5.582.93V17h8v-1.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5V17h2V3.221l-7 2.625z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M8.5 17.5v-7h1v7h-1z" clip-rule="evenodd"/><path d="M4.5 13h1v1h-1v-1zm2 0h1v1h-1v-1zm-2 2h1v1h-1v-1zm2 0h1v1h-1v-1zm6-10h1v1h-1V5zm2 0h1v1h-1V5zm-4 2h1v1h-1V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zm-2 2h1v1h-1V9zm2 0h1v1h-1V9zm-4 0h1v1h-1V9zm0 2h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zm-4 2h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1z"/>');
var BIconBullseye = /*#__PURE__*/makeIcon('Bullseye', '<path fill-rule="evenodd" d="M10 17a7 7 0 100-14 7 7 0 000 14zm0 1a8 8 0 100-16 8 8 0 000 16z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M10 15a5 5 0 100-10 5 5 0 000 10zm0 1a6 6 0 100-12 6 6 0 000 12z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M10 13a3 3 0 100-6 3 3 0 000 6zm0 1a4 4 0 100-8 4 4 0 000 8z" clip-rule="evenodd"/><path d="M11.5 10a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>');
var BIconCalendar = /*#__PURE__*/makeIcon('Calendar', '<path fill-rule="evenodd" d="M16 2H4a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2zM3 5.857C3 5.384 3.448 5 4 5h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H4c-.552 0-1-.384-1-.857V5.857z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M8.5 9a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-9 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-9 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"/>');
var BIconCalendarFill = /*#__PURE__*/makeIcon('CalendarFill', '<path d="M2 4a2 2 0 012-2h12a2 2 0 012 2H2z"/><path fill-rule="evenodd" d="M2 5h16v11a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm6.5 4a1 1 0 100-2 1 1 0 000 2zm4-1a1 1 0 11-2 0 1 1 0 012 0zm2 1a1 1 0 100-2 1 1 0 000 2zm-8 2a1 1 0 11-2 0 1 1 0 012 0zm2 1a1 1 0 100-2 1 1 0 000 2zm4-1a1 1 0 11-2 0 1 1 0 012 0zm2 1a1 1 0 100-2 1 1 0 000 2zm-8 2a1 1 0 11-2 0 1 1 0 012 0zm2 1a1 1 0 100-2 1 1 0 000 2zm4-1a1 1 0 11-2 0 1 1 0 012 0z" clip-rule="evenodd"/>');
var BIconCamera = /*#__PURE__*/makeIcon('Camera', '<path d="M11 7c-1.657 0-4 1.343-4 3a4 4 0 014-4v1z"/><path fill-rule="evenodd" d="M16.333 5h-2.015A5.97 5.97 0 0011 4a5.972 5.972 0 00-3.318 1H3.667C2.747 5 2 5.746 2 6.667v6.666C2 14.253 2.746 15 3.667 15h4.015c.95.632 2.091 1 3.318 1a5.973 5.973 0 003.318-1h2.015c.92 0 1.667-.746 1.667-1.667V6.667C18 5.747 17.254 5 16.333 5zM3.5 7a.5.5 0 100-1 .5.5 0 000 1zm7.5 8a5 5 0 100-10 5 5 0 000 10z" clip-rule="evenodd"/><path d="M4 5a1 1 0 011-1h1a1 1 0 010 2H5a1 1 0 01-1-1z"/>');
var BIconCameraVideo = /*#__PURE__*/makeIcon('CameraVideo', '<path fill-rule="evenodd" d="M4.667 5.5c-.645 0-1.167.522-1.167 1.167v6.666c0 .645.522 1.167 1.167 1.167h6.666c.645 0 1.167-.522 1.167-1.167V6.667c0-.645-.522-1.167-1.167-1.167H4.667zM2.5 6.667C2.5 5.47 3.47 4.5 4.667 4.5h6.666c1.197 0 2.167.97 2.167 2.167v6.666c0 1.197-.97 2.167-2.167 2.167H4.667A2.167 2.167 0 012.5 13.333V6.667z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M13.25 7.65l2.768-1.605a.318.318 0 01.482.263v7.384c0 .228-.26.393-.482.264l-2.767-1.605-.502.865 2.767 1.605c.859.498 1.984-.095 1.984-1.129V6.308c0-1.033-1.125-1.626-1.984-1.128L12.75 6.785l.502.865z" clip-rule="evenodd"/>');
var BIconCameraVideoFill = /*#__PURE__*/makeIcon('CameraVideoFill', '<path d="M4.667 5h6.666C12.253 5 13 5.746 13 6.667v6.666c0 .92-.746 1.667-1.667 1.667H4.667C3.747 15 3 14.254 3 13.333V6.667C3 5.747 3.746 5 4.667 5z"/><path d="M9.404 10.697l6.363 3.692c.54.313 1.233-.066 1.233-.697V6.308c0-.63-.692-1.01-1.233-.696L9.404 9.304a.802.802 0 000 1.393z"/>');
var BIconCapslock = /*#__PURE__*/makeIcon('Capslock', '<path fill-rule="evenodd" d="M9.27 3.047a1 1 0 011.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H13.5v1a1 1 0 01-1 1h-5a1 1 0 01-1-1v-1H3.654c-.875 0-1.328-1.045-.73-1.684L9.27 3.047zm7.076 7.453L10 3.731 3.654 10.5H6.5a1 1 0 011 1v1h5v-1a1 1 0 011-1h2.846zm-9.846 5a1 1 0 011-1h5a1 1 0 011 1v1a1 1 0 01-1 1h-5a1 1 0 01-1-1v-1zm6 0h-5v1h5v-1z" clip-rule="evenodd"/>');
var BIconCapslockFill = /*#__PURE__*/makeIcon('CapslockFill', '<path fill-rule="evenodd" d="M9.27 3.047a1 1 0 011.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H13.5v1a1 1 0 01-1 1h-5a1 1 0 01-1-1v-1H3.654c-.875 0-1.328-1.045-.73-1.684L9.27 3.047zM6.5 15.5a1 1 0 011-1h5a1 1 0 011 1v1a1 1 0 01-1 1h-5a1 1 0 01-1-1v-1z" clip-rule="evenodd"/>');
var BIconChat = /*#__PURE__*/makeIcon('Chat', '<path fill-rule="evenodd" d="M8.207 13.293L7.5 14a5.5 5.5 0 110-11h5a5.5 5.5 0 110 11s-1.807 2.169-4.193 2.818C7.887 16.933 7.449 17 7 17c.291-.389.488-.74.617-1.052C8.149 14.649 7.5 14 7.5 14c.707-.707.708-.707.708-.706h.001l.002.003.004.004.01.01a1.184 1.184 0 01.074.084c.039.047.085.108.134.183.097.15.206.36.284.626.114.386.154.855.047 1.394.717-.313 1.37-.765 1.895-1.201a10.266 10.266 0 001.013-.969l.05-.056.01-.012m0 0A1 1 0 0112.5 13a4.5 4.5 0 100-9h-5a4.5 4.5 0 000 9 1 1 0 01.707.293" clip-rule="evenodd"/>');
var BIconChatFill = /*#__PURE__*/makeIcon('ChatFill', '<path fill-rule="evenodd" d="M7.5 14s.65.65.117 1.948A4.821 4.821 0 017 17c.449 0 .887-.067 1.307-.181C10.692 16.169 12.5 14 12.5 14a5.5 5.5 0 100-11h-5a5.5 5.5 0 100 11z" clip-rule="evenodd"/>');
var BIconCheck = /*#__PURE__*/makeIcon('Check', '<path fill-rule="evenodd" d="M15.854 5.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L8.5 12.293l6.646-6.647a.5.5 0 01.708 0z" clip-rule="evenodd"/>');
var BIconCheckBox = /*#__PURE__*/makeIcon('CheckBox', '<path fill-rule="evenodd" d="M17.354 4.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L10 11.293l6.646-6.647a.5.5 0 01.708 0z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M3.5 15A1.5 1.5 0 005 16.5h10a1.5 1.5 0 001.5-1.5v-5a.5.5 0 00-1 0v5a.5.5 0 01-.5.5H5a.5.5 0 01-.5-.5V5a.5.5 0 01.5-.5h8a.5.5 0 000-1H5A1.5 1.5 0 003.5 5v10z" clip-rule="evenodd"/>');
var BIconCheckCircle = /*#__PURE__*/makeIcon('CheckCircle', '<path fill-rule="evenodd" d="M17.354 4.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L10 11.293l6.646-6.647a.5.5 0 01.708 0z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M10 4.5a5.5 5.5 0 105.5 5.5.5.5 0 011 0 6.5 6.5 0 11-3.25-5.63.5.5 0 11-.5.865A5.472 5.472 0 0010 4.5z" clip-rule="evenodd"/>');
var BIconChevronCompactDown = /*#__PURE__*/makeIcon('ChevronCompactDown', '<path fill-rule="evenodd" d="M3.553 8.776a.5.5 0 01.67-.223L10 11.44l5.776-2.888a.5.5 0 11.448.894l-6 3a.5.5 0 01-.448 0l-6-3a.5.5 0 01-.223-.67z" clip-rule="evenodd"/>');
var BIconChevronCompactLeft = /*#__PURE__*/makeIcon('ChevronCompactLeft', '<path fill-rule="evenodd" d="M11.224 3.553a.5.5 0 01.223.67L8.56 10l2.888 5.776a.5.5 0 11-.894.448l-3-6a.5.5 0 010-.448l3-6a.5.5 0 01.67-.223z" clip-rule="evenodd"/>');
var BIconChevronCompactRight = /*#__PURE__*/makeIcon('ChevronCompactRight', '<path fill-rule="evenodd" d="M8.776 3.553a.5.5 0 01.671.223l3 6a.5.5 0 010 .448l-3 6a.5.5 0 11-.894-.448L11.44 10 8.553 4.224a.5.5 0 01.223-.671z" clip-rule="evenodd"/>');
var BIconChevronCompactUp = /*#__PURE__*/makeIcon('ChevronCompactUp', '<path fill-rule="evenodd" d="M9.776 7.553a.5.5 0 01.448 0l6 3a.5.5 0 11-.448.894L10 8.56l-5.776 2.888a.5.5 0 11-.448-.894l6-3z" clip-rule="evenodd"/>');
var BIconChevronDown = /*#__PURE__*/makeIcon('ChevronDown', '<path fill-rule="evenodd" d="M3.646 6.646a.5.5 0 01.708 0L10 12.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clip-rule="evenodd"/>');
var BIconChevronLeft = /*#__PURE__*/makeIcon('ChevronLeft', '<path fill-rule="evenodd" d="M13.354 3.646a.5.5 0 010 .708L7.707 10l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z" clip-rule="evenodd"/>');
var BIconChevronRight = /*#__PURE__*/makeIcon('ChevronRight', '<path fill-rule="evenodd" d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z" clip-rule="evenodd"/>');
var BIconChevronUp = /*#__PURE__*/makeIcon('ChevronUp', '<path fill-rule="evenodd" d="M9.646 6.646a.5.5 0 01.708 0l6 6a.5.5 0 01-.708.708L10 7.707l-5.646 5.647a.5.5 0 01-.708-.708l6-6z" clip-rule="evenodd"/>');
var BIconCircle = /*#__PURE__*/makeIcon('Circle', '<path fill-rule="evenodd" d="M10 17a7 7 0 100-14 7 7 0 000 14zm0 1a8 8 0 100-16 8 8 0 000 16z" clip-rule="evenodd"/>');
var BIconCircleFill = /*#__PURE__*/makeIcon('CircleFill', '<circle cx="10" cy="10" r="8"/>');
var BIconCircleHalf = /*#__PURE__*/makeIcon('CircleHalf', '<path fill-rule="evenodd" d="M10 17V3a7 7 0 000 14zm0 1a8 8 0 100-16 8 8 0 000 16z" clip-rule="evenodd"/>');
var BIconCircleSlash = /*#__PURE__*/makeIcon('CircleSlash', '<path fill-rule="evenodd" d="M10 1.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zM5.071 4.347a7.5 7.5 0 0110.582 10.582L5.071 4.347zm-.724.724a7.5 7.5 0 0010.582 10.582L4.347 5.071z" clip-rule="evenodd"/>');
var BIconClock = /*#__PURE__*/makeIcon('Clock', '<path fill-rule="evenodd" d="M10 17a7 7 0 100-14 7 7 0 000 14zm8-7a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M10 4a.5.5 0 01.5.5V10a.5.5 0 01-.5.5H5.5a.5.5 0 010-1h4v-5A.5.5 0 0110 4z" clip-rule="evenodd"/>');
var BIconClockFill = /*#__PURE__*/makeIcon('ClockFill', '<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM5.5 9.5h4v-5a.5.5 0 011 0V10a.5.5 0 01-.5.5H5.5a.5.5 0 010-1z" clip-rule="evenodd"/>');
var BIconCloud = /*#__PURE__*/makeIcon('Cloud', '<path fill-rule="evenodd" d="M6.887 9.2l-.964-.165A2.5 2.5 0 105.5 14h10a1.5 1.5 0 00.237-2.982l-1.038-.164.216-1.028a4 4 0 10-7.843-1.587l-.185.96zm9.084.341a5 5 0 00-9.88-1.492A3.5 3.5 0 105.5 15h9.999a2.5 2.5 0 00.394-4.968c.033-.16.06-.324.077-.49z" clip-rule="evenodd"/>');
var BIconCloudDownload = /*#__PURE__*/makeIcon('CloudDownload', '<path d="M6.887 7.2l-.964-.165A2.5 2.5 0 105.5 12H8v1H5.5a3.5 3.5 0 11.59-6.95 5.002 5.002 0 119.804 1.98A2.501 2.501 0 0115.5 13H12v-1h3.5a1.5 1.5 0 00.237-2.981L14.7 8.854l.216-1.028a4 4 0 10-7.843-1.587l-.185.96z"/><path fill-rule="evenodd" d="M7 14.5a.5.5 0 01.707 0L10 16.793l2.293-2.293a.5.5 0 11.707.707l-2.646 2.647a.5.5 0 01-.708 0L7 15.207a.5.5 0 010-.707z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M10 8a.5.5 0 01.5.5v8a.5.5 0 01-1 0v-8A.5.5 0 0110 8z" clip-rule="evenodd"/>');
var BIconCloudFill = /*#__PURE__*/makeIcon('CloudFill', '<path fill-rule="evenodd" d="M5.5 15a3.5 3.5 0 11.59-6.95 5.002 5.002 0 119.804 1.98A2.5 2.5 0 0115.5 15h-10z" clip-rule="evenodd"/>');
var BIconCloudUpload = /*#__PURE__*/makeIcon('CloudUpload', '<path d="M6.887 8.2l-.964-.165A2.5 2.5 0 105.5 13H8v1H5.5a3.5 3.5 0 11.59-6.95 5.002 5.002 0 119.804 1.98A2.501 2.501 0 0115.5 14H12v-1h3.5a1.5 1.5 0 00.237-2.982L14.7 9.854l.216-1.028a4 4 0 10-7.843-1.587l-.185.96z"/><path fill-rule="evenodd" d="M7 10.854a.5.5 0 00.707 0L10 8.56l2.293 2.293a.5.5 0 00.707-.707L10.354 7.5a.5.5 0 00-.708 0L7 10.146a.5.5 0 000 .708z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M10 8a.5.5 0 01.5.5v8a.5.5 0 01-1 0v-8A.5.5 0 0110 8z" clip-rule="evenodd"/>');
var BIconCode = /*#__PURE__*/makeIcon('Code', '<path fill-rule="evenodd" d="M7.854 6.146a.5.5 0 010 .708L4.707 10l3.147 3.146a.5.5 0 01-.708.708l-3.5-3.5a.5.5 0 010-.708l3.5-3.5a.5.5 0 01.708 0zm4.292 0a.5.5 0 000 .708L15.293 10l-3.147 3.146a.5.5 0 00.708.708l3.5-3.5a.5.5 0 000-.708l-3.5-3.5a.5.5 0 00-.708 0z" clip-rule="evenodd"/>');
var BIconCodeSlash = /*#__PURE__*/makeIcon('CodeSlash', '<path fill-rule="evenodd" d="M6.854 6.146a.5.5 0 010 .708L3.707 10l3.147 3.146a.5.5 0 01-.708.708l-3.5-3.5a.5.5 0 010-.708l3.5-3.5a.5.5 0 01.708 0zm6.292 0a.5.5 0 000 .708L16.293 10l-3.147 3.146a.5.5 0 00.708.708l3.5-3.5a.5.5 0 000-.708l-3.5-3.5a.5.5 0 00-.708 0zm-.999-3.124a.5.5 0 01.33.625l-4 13a.5.5 0 11-.955-.294l4-13a.5.5 0 01.625-.33z" clip-rule="evenodd"/>');
var BIconColumns = /*#__PURE__*/makeIcon('Columns', '<path fill-rule="evenodd" d="M17 4H3v12h14V4zM3 3a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V4a1 1 0 00-1-1H3z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M9.5 16V4h1v12h-1zm0-8H3V7h6.5v1zm7.5 5h-6.5v-1H17v1z" clip-rule="evenodd"/>');
var BIconColumnsGutters = /*#__PURE__*/makeIcon('ColumnsGutters', '<path fill-rule="evenodd" d="M8 3H3v3h5V3zM3 2a1 1 0 00-1 1v3a1 1 0 001 1h5a1 1 0 001-1V3a1 1 0 00-1-1H3zm14 12h-5v3h5v-3zm-5-1a1 1 0 00-1 1v3a1 1 0 001 1h5a1 1 0 001-1v-3a1 1 0 00-1-1h-5zm-4-3H3v7h5v-7zM3 9a1 1 0 00-1 1v7a1 1 0 001 1h5a1 1 0 001-1v-7a1 1 0 00-1-1H3zm14-6h-5v7h5V3zm-5-1a1 1 0 00-1 1v7a1 1 0 001 1h5a1 1 0 001-1V3a1 1 0 00-1-1h-5z" clip-rule="evenodd"/>');
var BIconCommand = /*#__PURE__*/makeIcon('Command', '<path fill-rule="evenodd" d="M4 5.5A1.5 1.5 0 005.5 7H7V5.5a1.5 1.5 0 10-3 0zM8 8V5.5A2.5 2.5 0 105.5 8H8zm8-2.5A1.5 1.5 0 0114.5 7H13V5.5a1.5 1.5 0 013 0zM12 8V5.5A2.5 2.5 0 1114.5 8H12zm-8 6.5A1.5 1.5 0 015.5 13H7v1.5a1.5 1.5 0 01-3 0zM8 12v2.5A2.5 2.5 0 115.5 12H8zm8 2.5a1.5 1.5 0 00-1.5-1.5H13v1.5a1.5 1.5 0 003 0zM12 12v2.5a2.5 2.5 0 102.5-2.5H12z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12 8H8v4h4V8zM7 7v6h6V7H7z" clip-rule="evenodd"/>');
var BIconCompass = /*#__PURE__*/makeIcon('Compass', '<path fill-rule="evenodd" d="M10 17.016a6.5 6.5 0 100-13 6.5 6.5 0 000 13zm0 1a7.5 7.5 0 100-15 7.5 7.5 0 000 15z" clip-rule="evenodd"/><rect width="4" height="2" x="8" y="2" rx="1"/><path d="M8.94 9.44l4.95-2.83-2.83 4.95-4.95 2.83 2.83-4.95z"/>');
var BIconCone = /*#__PURE__*/makeIcon('Cone', '<path d="M9.03 3.88c.252-1.01 1.688-1.01 1.94 0L14 16H6L9.03 3.88z"/><path fill-rule="evenodd" d="M3.5 16a.5.5 0 01.5-.5h12a.5.5 0 010 1H4a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>');
var BIconConeStriped = /*#__PURE__*/makeIcon('ConeStriped', '<path fill-rule="evenodd" d="M9.879 13.015a.5.5 0 01.242 0l6 1.5a.5.5 0 01.037.96l-6 2a.499.499 0 01-.316 0l-6-2a.5.5 0 01.037-.96l6-1.5z" clip-rule="evenodd"/><path d="M13.885 14.538l-.72-2.877c-.862.212-1.964.339-3.165.339s-2.303-.127-3.165-.339l-.72 2.877c-.073.292-.002.6.256.756.49.295 1.545.706 3.629.706s3.14-.411 3.63-.706c.257-.155.328-.464.255-.756zM11.97 6.88l.953 3.811C12.159 10.878 11.14 11 10 11c-1.14 0-2.159-.122-2.923-.309L8.03 6.88C8.635 6.957 9.3 7 10 7s1.365-.043 1.97-.12zm-.245-.978L10.97 2.88c-.252-1.01-1.688-1.01-1.94 0L8.275 5.9C8.8 5.965 9.382 6 10 6c.618 0 1.2-.036 1.725-.098z"/>');
var BIconController = /*#__PURE__*/makeIcon('Controller', '<path fill-rule="evenodd" d="M13.119 4.693c.904.19 1.75.495 2.235.98.407.408.779 1.05 1.094 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.815-.059 1.602-.328 2.21a1.42 1.42 0 01-1.445.83c-.636-.067-1.115-.394-1.513-.773a11.307 11.307 0 01-.739-.809c-.126-.147-.25-.291-.368-.422-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.422-.243.283-.494.576-.739.81-.398.378-.877.705-1.513.772a1.42 1.42 0 01-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772.486-.485 1.331-.79 2.235-.98.932-.196 2.03-.292 3.119-.292 1.089 0 2.187.096 3.119.292zm-6.032.979c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 00-.748 2.295 12.35 12.35 0 00-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 00.426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.505.826-.912 1.943-1.854 3.965-1.854s3.139.942 3.965 1.854c.164.182.307.35.44.505.214.25.403.472.615.674.318.303.601.468.929.503a.42.42 0 00.426-.241c.18-.408.265-1.02.243-1.776a12.353 12.353 0 00-.339-2.406 13.753 13.753 0 00-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z" clip-rule="evenodd"/><path d="M13.5 8.026a.5.5 0 11-1 0 .5.5 0 011 0zm-1 1a.5.5 0 11-1 0 .5.5 0 011 0zm2 0a.5.5 0 11-1 0 .5.5 0 011 0zm-1 1.001a.5.5 0 11-1 0 .5.5 0 011 0zm-7-2.501h1v3h-1v-3z"/><path d="M5.5 8.526h3v1h-3v-1zM5.051 5.26a.5.5 0 01.354-.613l1.932-.518a.5.5 0 01.258.966l-1.932.518a.5.5 0 01-.612-.354zm9.976 0a.5.5 0 00-.353-.613l-1.932-.518a.5.5 0 10-.259.966l1.932.518a.5.5 0 00.612-.354z"/>');
var BIconCreditCard = /*#__PURE__*/makeIcon('CreditCard', '<path fill-rule="evenodd" d="M16 5H4a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1zM4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4z" clip-rule="evenodd"/><rect width="3" height="3" x="4" y="11" rx="1"/><path d="M3 7h14v2H3z"/>');
var BIconCursor = /*#__PURE__*/makeIcon('Cursor', '<path fill-rule="evenodd" d="M16.081 4.182a.5.5 0 01.104.557l-5.657 12.727a.5.5 0 01-.917-.006L7.57 12.694l-4.766-2.042a.5.5 0 01-.006-.917L15.525 4.08a.5.5 0 01.556.103zM4.25 10.184l3.897 1.67a.5.5 0 01.262.263l1.67 3.897L14.743 5.52 4.25 10.184z" clip-rule="evenodd"/>');
var BIconCursorFill = /*#__PURE__*/makeIcon('CursorFill', '<path fill-rule="evenodd" d="M16.081 4.182a.5.5 0 01.104.557l-5.657 12.727a.5.5 0 01-.917-.006L7.57 12.694l-4.766-2.042a.5.5 0 01-.006-.917L15.525 4.08a.5.5 0 01.556.103z" clip-rule="evenodd"/>');
var BIconDash = /*#__PURE__*/makeIcon('Dash', '<path fill-rule="evenodd" d="M5.5 10a.5.5 0 01.5-.5h8a.5.5 0 010 1H6a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>');
var BIconDiamond = /*#__PURE__*/makeIcon('Diamond', '<path fill-rule="evenodd" d="M5.1 2.7a.5.5 0 01.4-.2h9a.5.5 0 01.4.2l2.976 3.974c.149.185.156.45.01.644L10.4 17.3a.5.5 0 01-.8 0l-7.5-10a.5.5 0 010-.6l3-4zm11.386 3.785l-1.806-2.41-.776 2.413 2.582-.003zm-3.633.004l.961-2.989H6.186l.963 2.995 5.704-.006zM7.47 7.495l5.062-.005L10 15.366 7.47 7.495zm-1.371-.999l-.78-2.422-1.818 2.425 2.598-.003zM3.499 7.5l2.92-.003 2.193 6.82L3.5 7.5zm7.889 6.817l2.194-6.828 2.929-.003-5.123 6.831z" clip-rule="evenodd"/>');
var BIconDiamondHalf = /*#__PURE__*/makeIcon('DiamondHalf', '<path fill-rule="evenodd" d="M8.94 2.354a1.5 1.5 0 012.12 0l6.586 6.585a1.5 1.5 0 010 2.122l-6.585 6.585a1.5 1.5 0 01-2.122 0l-6.585-6.585a1.5 1.5 0 010-2.122l6.585-6.585zm1.06.56a.498.498 0 00-.354.147L3.061 9.646a.5.5 0 000 .707l6.585 6.586a.499.499 0 00.354.147V2.914z" clip-rule="evenodd"/>');
var BIconDisplay = /*#__PURE__*/makeIcon('Display', '<path d="M7.75 15.5c.167-.333.25-.833.25-1.5h4c0 .667.083 1.167.25 1.5H13a.5.5 0 010 1H7a.5.5 0 010-1h.75z"/><path fill-rule="evenodd" d="M15.991 5H4c-.325 0-.502.078-.602.145a.758.758 0 00-.254.302A1.46 1.46 0 003 6.01V12c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 00.538.143L4.01 13H16c.325 0 .502-.078.602-.145a.758.758 0 00.254-.302 1.464 1.464 0 00.143-.538L17 11.99V6c0-.325-.078-.502-.145-.602a.757.757 0 00-.302-.254A1.46 1.46 0 0015.99 5zM16 4H4C2 4 2 6 2 6v6c0 2 2 2 2 2h12c2 0 2-2 2-2V6c0-2-2-2-2-2z" clip-rule="evenodd"/>');
var BIconDisplayFill = /*#__PURE__*/makeIcon('DisplayFill', '<path d="M7.75 15.5c.167-.333.25-.833.25-1.5h4c0 .667.083 1.167.25 1.5H13a.5.5 0 010 1H7a.5.5 0 010-1h.75z"/><path fill-rule="evenodd" d="M15.991 5H4c-.325 0-.502.078-.602.145a.758.758 0 00-.254.302A1.46 1.46 0 003 6.01V12c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 00.538.143L4.01 13H16c.325 0 .502-.078.602-.145a.758.758 0 00.254-.302 1.464 1.464 0 00.143-.538L17 11.99V6c0-.325-.078-.502-.145-.602a.757.757 0 00-.302-.254A1.46 1.46 0 0015.99 5zM16 4H4C2 4 2 6 2 6v6c0 2 2 2 2 2h12c2 0 2-2 2-2V6c0-2-2-2-2-2z" clip-rule="evenodd"/><path d="M4 6h12v6H4z"/>');
var BIconDocument = /*#__PURE__*/makeIcon('Document', '<path fill-rule="evenodd" d="M6 3h8a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2zm0 1a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V5a1 1 0 00-1-1H6z" clip-rule="evenodd"/>');
var BIconDocumentCode = /*#__PURE__*/makeIcon('DocumentCode', '<path fill-rule="evenodd" d="M6 3h8a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2zm0 1a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V5a1 1 0 00-1-1H6z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M10.646 7.646a.5.5 0 01.708 0l2 2a.5.5 0 010 .708l-2 2a.5.5 0 01-.708-.708L12.293 10l-1.647-1.646a.5.5 0 010-.708zm-1.292 0a.5.5 0 00-.708 0l-2 2a.5.5 0 000 .708l2 2a.5.5 0 00.708-.708L7.707 10l1.647-1.646a.5.5 0 000-.708z" clip-rule="evenodd"/>');
var BIconDocumentDiff = /*#__PURE__*/makeIcon('DocumentDiff', '<path fill-rule="evenodd" d="M6 3h8a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2zm0 1a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V5a1 1 0 00-1-1H6z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M7.5 13a.5.5 0 01.5-.5h4a.5.5 0 010 1H8a.5.5 0 01-.5-.5zM10 6.5a.5.5 0 01.5.5v4a.5.5 0 01-1 0V7a.5.5 0 01.5-.5z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M7.5 9a.5.5 0 01.5-.5h4a.5.5 0 010 1H8a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>');
var BIconDocumentRichtext = /*#__PURE__*/makeIcon('DocumentRichtext', '<path fill-rule="evenodd" d="M6 3h8a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2zm0 1a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V5a1 1 0 00-1-1H6z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M6.5 14a.5.5 0 01.5-.5h3a.5.5 0 010 1H7a.5.5 0 01-.5-.5zm0-2a.5.5 0 01.5-.5h6a.5.5 0 010 1H7a.5.5 0 01-.5-.5zm1.639-3.958l1.33.886 1.854-1.855a.25.25 0 01.289-.047L13.5 8v1.75a.5.5 0 01-.5.5H7a.5.5 0 01-.5-.5v-.5s1.54-1.274 1.639-1.208zM8.25 7a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd"/>');
var BIconDocumentSpreadsheet = /*#__PURE__*/makeIcon('DocumentSpreadsheet', '<path fill-rule="evenodd" d="M6 3h8a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2zm0 1a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V5a1 1 0 00-1-1H6z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M15 8H5V7h10v1zm0 3H5v-1h10v1zm0 3H5v-1h10v1z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M7 16V8h1v8H7zm4 0V8h1v8h-1z" clip-rule="evenodd"/>');
var BIconDocumentText = /*#__PURE__*/makeIcon('DocumentText', '<path fill-rule="evenodd" d="M6 3h8a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2zm0 1a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V5a1 1 0 00-1-1H6z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M6.5 14a.5.5 0 01.5-.5h3a.5.5 0 010 1H7a.5.5 0 01-.5-.5zm0-2a.5.5 0 01.5-.5h6a.5.5 0 010 1H7a.5.5 0 01-.5-.5zm0-2a.5.5 0 01.5-.5h6a.5.5 0 010 1H7a.5.5 0 01-.5-.5zm0-2a.5.5 0 01.5-.5h6a.5.5 0 010 1H7a.5.5 0 01-.5-.5zm0-2a.5.5 0 01.5-.5h6a.5.5 0 010 1H7a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>');
var BIconDocuments = /*#__PURE__*/makeIcon('Documents', '<path fill-rule="evenodd" d="M5 4h8a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2zm0 1a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V6a1 1 0 00-1-1H5z" clip-rule="evenodd"/><path d="M7 2h8a2 2 0 012 2v10a2 2 0 01-2 2v-1a1 1 0 001-1V4a1 1 0 00-1-1H7a1 1 0 00-1 1H5a2 2 0 012-2z"/>');
var BIconDocumentsAlt = /*#__PURE__*/makeIcon('DocumentsAlt', '<path fill-rule="evenodd" d="M5 3h8a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm0 1a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V5a1 1 0 00-1-1H5z" clip-rule="evenodd"/><path d="M15 6V5a2 2 0 012 2v6a2 2 0 01-2 2v-1a1 1 0 001-1V7a1 1 0 00-1-1z"/>');
var BIconDot = /*#__PURE__*/makeIcon('Dot', '<path fill-rule="evenodd" d="M10 11.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clip-rule="evenodd"/>');
var BIconDownload = /*#__PURE__*/makeIcon('Download', '<path fill-rule="evenodd" d="M2.5 10a.5.5 0 01.5.5V14a1 1 0 001 1h12a1 1 0 001-1v-3.5a.5.5 0 011 0V14a2 2 0 01-2 2H4a2 2 0 01-2-2v-3.5a.5.5 0 01.5-.5z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M7 9.5a.5.5 0 01.707 0L10 11.793 12.293 9.5a.5.5 0 01.707.707l-2.646 2.647a.5.5 0 01-.708 0L7 10.207A.5.5 0 017 9.5z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M10 3a.5.5 0 01.5.5v8a.5.5 0 01-1 0v-8A.5.5 0 0110 3z" clip-rule="evenodd"/>');
var BIconEggFried = /*#__PURE__*/makeIcon('EggFried', '<path fill-rule="evenodd" d="M15.665 8.113a1 1 0 01-.667-.977L15 7a4 4 0 00-6.483-3.136 1 1 0 01-.8.2 4 4 0 00-3.693 6.61 1 1 0 01.2 1 4 4 0 006.67 4.087 1 1 0 011.262-.152 2.5 2.5 0 003.715-2.905 1 1 0 01.341-1.113 2.001 2.001 0 00-.547-3.478zM16 7c0 .057 0 .113-.003.17a3.001 3.001 0 01.822 5.216 3.5 3.5 0 01-5.201 4.065 5 5 0 01-8.336-5.109A5 5 0 017.896 3.08 5 5 0 0116 7z" clip-rule="evenodd"/><circle cx="10" cy="10" r="3"/>');
var BIconEject = /*#__PURE__*/makeIcon('Eject', '<path fill-rule="evenodd" d="M9.27 3.047a1 1 0 011.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H3.656c-.876 0-1.33-1.045-.73-1.684L9.27 3.047zm7.076 7.453L10 3.731 3.654 10.5h12.692zM2.5 13.5a1 1 0 011-1h13a1 1 0 011 1v1a1 1 0 01-1 1h-13a1 1 0 01-1-1v-1zm14 0h-13v1h13v-1z" clip-rule="evenodd"/>');
var BIconEjectFill = /*#__PURE__*/makeIcon('EjectFill', '<path fill-rule="evenodd" d="M9.27 3.047a1 1 0 011.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H3.656c-.876 0-1.33-1.045-.73-1.684L9.27 3.047zM2.5 13.5a1 1 0 011-1h13a1 1 0 011 1v1a1 1 0 01-1 1h-13a1 1 0 01-1-1v-1z" clip-rule="evenodd"/>');
var BIconEnvelope = /*#__PURE__*/makeIcon('Envelope', '<path fill-rule="evenodd" d="M16 5H4a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1zM4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M2.071 6.243a.5.5 0 01.686-.172L10 10.417l7.243-4.346a.5.5 0 11.514.858L10 11.583 2.243 6.93a.5.5 0 01-.172-.686z" clip-rule="evenodd"/>');
var BIconEnvelopeFill = /*#__PURE__*/makeIcon('EnvelopeFill', '<path d="M2.05 5.555L10 10.414l7.95-4.859A2 2 0 0016 4H4a2 2 0 00-1.95 1.555zM18 6.697l-5.875 3.59L18 13.743V6.697zm-.168 8.108l-6.675-3.926-1.157.707-1.157-.707-6.675 3.926A2 2 0 004 16h12a2 2 0 001.832-1.195zM2 13.743l5.875-3.456L2 6.697v7.046z"/>');
var BIconEnvelopeOpen = /*#__PURE__*/makeIcon('EnvelopeOpen', '<path fill-rule="evenodd" d="M2.243 8.929l.514-.858L10 12.417l7.243-4.346.514.858L10 13.583 2.243 8.93z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M9.184 12.68l-6.432 3.752-.504-.864 6.432-3.752.504.864zm1.632 0l6.432 3.752.504-.864-6.432-3.752-.504.864z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M10.47 3.318a1 1 0 00-.94 0l-6 3.2A1 1 0 003 7.4V16a1 1 0 001 1h12a1 1 0 001-1V7.4a1 1 0 00-.53-.882l-6-3.2zm-1.41-.883a2 2 0 011.882 0l6 3.2A2 2 0 0118 7.4V16a2 2 0 01-2 2H4a2 2 0 01-2-2V7.4a2 2 0 011.059-1.765l6-3.2z" clip-rule="evenodd"/>');
var BIconEnvelopeOpenFill = /*#__PURE__*/makeIcon('EnvelopeOpenFill', '<path fill-rule="evenodd" d="M10.941 2.435a2 2 0 00-1.882 0l-6 3.2A2 2 0 002 7.4v.125l8 4.889 8-4.889V7.4a2 2 0 00-1.059-1.765l-6-3.2zM18 8.697l-5.875 3.59L18 15.743V8.697zm-.168 8.108l-6.586-3.874-.088-.052-.897.548-.261.159-.26-.16-.897-.547-.09.052-6.585 3.874A2 2 0 004 18h12a2 2 0 001.832-1.195zM2 15.743l5.875-3.456L2 8.697v7.046z" clip-rule="evenodd"/>');
var BIconEye = /*#__PURE__*/makeIcon('Eye', '<path fill-rule="evenodd" d="M18 10s-3-5.5-8-5.5S2 10 2 10s3 5.5 8 5.5 8-5.5 8-5.5zM3.173 10a13.133 13.133 0 001.66 2.043C6.12 13.332 7.88 14.5 10 14.5c2.12 0 3.879-1.168 5.168-2.457A13.133 13.133 0 0016.828 10a13.133 13.133 0 00-1.66-2.043C13.879 6.668 12.119 5.5 10 5.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 003.172 10z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M10 7.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM6.5 10a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z" clip-rule="evenodd"/>');
var BIconEyeFill = /*#__PURE__*/makeIcon('EyeFill', '<path d="M12.5 10a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/><path fill-rule="evenodd" d="M2 10s3-5.5 8-5.5 8 5.5 8 5.5-3 5.5-8 5.5S2 10 2 10zm8 3.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" clip-rule="evenodd"/>');
var BIconEyeSlash = /*#__PURE__*/makeIcon('EyeSlash', '<path d="M15.359 13.238C17.06 11.72 18 10 18 10s-3-5.5-8-5.5a7.028 7.028 0 00-2.79.588l.77.771A5.944 5.944 0 0110 5.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0116.828 10c-.058.087-.122.183-.195.288a13.14 13.14 0 01-1.465 1.755c-.165.165-.337.328-.517.486l.708.709z"/><path d="M13.297 11.176a3.5 3.5 0 00-4.474-4.474l.823.823a2.5 2.5 0 012.829 2.829l.822.822zm-2.943 1.299l.822.822a3.5 3.5 0 01-4.474-4.474l.823.823a2.5 2.5 0 002.829 2.829z"/><path d="M5.35 7.47c-.18.16-.353.322-.518.487A13.134 13.134 0 003.172 10l.195.288c.335.48.83 1.12 1.465 1.755C6.121 13.332 7.881 14.5 10 14.5c.716 0 1.39-.133 2.02-.36l.77.772A7.027 7.027 0 0110 15.5c-5 0-8-5.5-8-5.5s.939-1.721 2.641-3.238l.708.709z"/><path fill-rule="evenodd" d="M15.646 16.354l-12-12 .708-.708 12 12-.708.707z" clip-rule="evenodd"/>');
var BIconEyeSlashFill = /*#__PURE__*/makeIcon('EyeSlashFill', '<path d="M12.79 14.912l-1.614-1.615a3.5 3.5 0 01-4.474-4.474l-2.06-2.06C2.938 8.278 2 10 2 10s3 5.5 8 5.5a7.027 7.027 0 002.79-.588zM7.21 5.088A7.028 7.028 0 0110 4.5c5 0 8 5.5 8 5.5s-.939 1.72-2.641 3.238l-2.062-2.062a3.5 3.5 0 00-4.474-4.474L7.21 5.088z"/><path d="M7.525 9.646a2.5 2.5 0 002.829 2.829l-2.83-2.829zm4.95.708l-2.829-2.83a2.5 2.5 0 012.829 2.829z"/><path fill-rule="evenodd" d="M15.646 16.354l-12-12 .708-.708 12 12-.708.707z" clip-rule="evenodd"/>');
var BIconFilter = /*#__PURE__*/makeIcon('Filter', '<path fill-rule="evenodd" d="M7.5 13a.5.5 0 01.5-.5h4a.5.5 0 010 1H8a.5.5 0 01-.5-.5zm-2-3a.5.5 0 01.5-.5h8a.5.5 0 010 1H6a.5.5 0 01-.5-.5zm-2-3a.5.5 0 01.5-.5h12a.5.5 0 010 1H4a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>');
var BIconFlag = /*#__PURE__*/makeIcon('Flag', '<path fill-rule="evenodd" d="M5.5 3a.5.5 0 01.5.5v13a.5.5 0 01-1 0v-13a.5.5 0 01.5-.5z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M5.762 4.558C6.735 3.909 7.348 3.5 8.5 3.5c.653 0 1.139.325 1.495.562l.032.022c.392.26.646.416.973.416.168 0 .356-.042.587-.126.187-.068.376-.153.593-.25.058-.027.117-.053.18-.08.57-.255 1.278-.544 2.14-.544a.5.5 0 01.5.5v6a.5.5 0 01-.5.5c-.638 0-1.18.21-1.734.457l-.159.07c-.22.1-.453.205-.678.287A2.718 2.718 0 0111 11.5c-.653 0-1.139-.325-1.495-.563l-.032-.021c-.391-.26-.646-.416-.973-.416-.833 0-1.218.246-2.223.916a.5.5 0 11-.515-.858C6.735 9.909 7.348 9.5 8.5 9.5c.653 0 1.139.325 1.495.563l.032.021c.392.26.646.416.973.416.168 0 .356-.042.587-.126.187-.068.376-.153.593-.25.058-.027.117-.053.18-.08.456-.204 1-.43 1.64-.512V4.543c-.433.074-.83.234-1.234.414l-.159.07c-.22.1-.453.205-.678.287A2.72 2.72 0 0111 5.5c-.653 0-1.139-.325-1.495-.562l-.032-.022c-.391-.26-.646-.416-.973-.416-.833 0-1.218.246-2.223.916a.5.5 0 01-.554-.832l.04-.026z" clip-rule="evenodd"/>');
var BIconFlagFill = /*#__PURE__*/makeIcon('FlagFill', '<path fill-rule="evenodd" d="M5.5 3a.5.5 0 01.5.5v13a.5.5 0 01-1 0v-13a.5.5 0 01.5-.5z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M5.762 4.558C6.735 3.909 7.348 3.5 8.5 3.5c.653 0 1.139.325 1.495.562l.032.022c.392.26.646.416.973.416.168 0 .356-.042.587-.126.187-.068.376-.153.593-.25.058-.027.117-.053.18-.08.57-.255 1.278-.544 2.14-.544a.5.5 0 01.5.5v6a.5.5 0 01-.5.5c-.638 0-1.18.21-1.734.457l-.159.07c-.22.1-.453.205-.678.287A2.718 2.718 0 0111 11.5c-.653 0-1.139-.325-1.495-.563l-.032-.021c-.391-.26-.646-.416-.973-.416-.833 0-1.218.246-2.223.916A.5.5 0 015.5 11V5a.5.5 0 01.223-.416l.04-.026z" clip-rule="evenodd"/>');
var BIconFolder = /*#__PURE__*/makeIcon('Folder', '<path d="M11.828 6a3 3 0 01-2.12-.879l-.83-.828A1 1 0 008.173 4H4.5a1 1 0 00-1 .981L3.546 6h-1L2.5 5a2 2 0 012-2h3.672a2 2 0 011.414.586l.828.828A2 2 0 0011.828 5v1z"/><path fill-rule="evenodd" d="M15.81 6H4.19a1 1 0 00-.996 1.09l.637 7a1 1 0 00.995.91h10.348a1 1 0 00.995-.91l.637-7A1 1 0 0015.81 6zM4.19 5a2 2 0 00-1.992 2.181l.637 7A2 2 0 004.826 16h10.348a2 2 0 001.991-1.819l.637-7A2 2 0 0015.81 5H4.19z" clip-rule="evenodd"/>');
var BIconFolderFill = /*#__PURE__*/makeIcon('FolderFill', '<path fill-rule="evenodd" d="M11.828 5h3.982a2 2 0 011.992 2.181l-.637 7A2 2 0 0115.174 16H4.826a2 2 0 01-1.991-1.819l-.637-7a1.99 1.99 0 01.342-1.31L2.5 5a2 2 0 012-2h3.672a2 2 0 011.414.586l.828.828A2 2 0 0011.828 5zm-8.322.12C3.72 5.042 3.95 5 4.19 5h5.396l-.707-.707A1 1 0 008.172 4H4.5a1 1 0 00-1 .981l.006.139z" clip-rule="evenodd"/>');
var BIconFolderSymlink = /*#__PURE__*/makeIcon('FolderSymlink', '<path d="M11.828 6a3 3 0 01-2.12-.879l-.83-.828A1 1 0 008.173 4H4.5a1 1 0 00-1 .981L3.546 6h-1L2.5 5a2 2 0 012-2h3.672a2 2 0 011.414.586l.828.828A2 2 0 0011.828 5v1z"/><path fill-rule="evenodd" d="M15.81 6H4.19a1 1 0 00-.996 1.09l.637 7a1 1 0 00.995.91h10.348a1 1 0 00.995-.91l.637-7A1 1 0 0015.81 6zM4.19 5a2 2 0 00-1.992 2.181l.637 7A2 2 0 004.826 16h10.348a2 2 0 001.991-1.819l.637-7A2 2 0 0015.81 5H4.19z" clip-rule="evenodd"/><path d="M10.616 12.24l3.182-1.969a.442.442 0 000-.742l-3.182-1.97c-.27-.166-.616.036-.616.372V8.7c-.857 0-3.429 0-4 4.8 1.429-2.7 4-2.4 4-2.4v.769c0 .336.346.538.616.371z"/>');
var BIconFolderSymlinkFill = /*#__PURE__*/makeIcon('FolderSymlinkFill', '<path fill-rule="evenodd" d="M15.81 5h-3.982a2 2 0 01-1.414-.586l-.828-.828A2 2 0 008.172 3H4.5a2 2 0 00-2 2l.04.87a1.99 1.99 0 00-.342 1.311l.637 7A2 2 0 004.826 16h10.348a2 2 0 001.991-1.819l.637-7A2 2 0 0015.81 5zM4.19 5c-.24 0-.47.042-.684.12L3.5 4.98a1 1 0 011-.98h3.672a1 1 0 01.707.293L9.586 5H4.19zm9.608 5.271l-3.182 1.97c-.27.166-.616-.036-.616-.372V11.1s-2.571-.3-4 2.4c.571-4.8 3.143-4.8 4-4.8v-.769c0-.336.346-.538.616-.371l3.182 1.969c.27.166.27.576 0 .742z" clip-rule="evenodd"/>');
var BIconFonts = /*#__PURE__*/makeIcon('Fonts', '<path d="M14.258 5H5.747l-.082 2.46h.479c.26-1.544.758-1.783 2.693-1.845l.424-.013v7.827c0 .663-.144.82-1.3.923v.52h4.082v-.52c-1.162-.103-1.306-.26-1.306-.923V5.602l.43.013c1.935.062 2.434.301 2.694 1.846h.479L14.258 5z"/>');
var BIconForward = /*#__PURE__*/makeIcon('Forward', '<path fill-rule="evenodd" d="M11.502 7.513a.144.144 0 00-.202.134V8.65a.5.5 0 01-.5.5H4.5v2.9h6.3a.5.5 0 01.5.5v1.003c0 .108.11.176.202.134l3.984-2.933a.522.522 0 01.042-.028.147.147 0 000-.252.523.523 0 01-.042-.028l-3.984-2.933zm-1.202.134a1.144 1.144 0 011.767-.96l3.994 2.94a1.147 1.147 0 010 1.946l-3.994 2.94a1.144 1.144 0 01-1.767-.96v-.503H4a.5.5 0 01-.5-.5v-3.9a.5.5 0 01.5-.5h6.3v-.503z" clip-rule="evenodd"/>');
var BIconForwardFill = /*#__PURE__*/makeIcon('ForwardFill', '<path d="M11.77 14.11l4.012-2.953a.647.647 0 000-1.114L11.771 7.09a.644.644 0 00-.971.557V8.65H4v3.9h6.8v1.003c0 .505.545.808.97.557z"/>');
var BIconGear = /*#__PURE__*/makeIcon('Gear', '<path fill-rule="evenodd" d="M10.837 3.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 016.377 5.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 01-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 011.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 012.692 1.115l.094.319c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 012.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 011.115-2.693l.319-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 01-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159a1.873 1.873 0 01-2.693-1.115l-.094-.319zm-2.633-.283c.527-1.79 3.064-1.79 3.592 0l.094.319a.873.873 0 001.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 00.52 1.255l.319.094c1.79.527 1.79 3.064 0 3.592l-.319.094a.873.873 0 00-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 00-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 00-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 00-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 00.52-1.255l-.16-.292c-.892-1.64.901-3.433 2.541-2.54l.292.159a.873.873 0 001.255-.52l.094-.319z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M10 7.754a2.246 2.246 0 100 4.492 2.246 2.246 0 000-4.492zM6.754 10a3.246 3.246 0 116.492 0 3.246 3.246 0 01-6.492 0z" clip-rule="evenodd"/>');
var BIconGearFill = /*#__PURE__*/makeIcon('GearFill', '<path fill-rule="evenodd" d="M11.405 3.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 01-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 01.872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 012.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 012.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 01.872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 01-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 01-2.105-.872l-.1-.34zM10 12.93a2.929 2.929 0 100-5.858 2.929 2.929 0 000 5.858z" clip-rule="evenodd"/>');
var BIconGearWide = /*#__PURE__*/makeIcon('GearWide', '<path fill-rule="evenodd" d="M10.932 2.724c-.243-.97-1.621-.97-1.864 0l-.072.286a.96.96 0 01-1.622.434l-.205-.211c-.695-.72-1.889-.03-1.614.932l.08.283a.96.96 0 01-1.187 1.188l-.283-.081c-.962-.275-1.651.919-.932 1.614l.211.205a.96.96 0 01-.434 1.622l-.286.072c-.97.243-.97 1.621 0 1.864l.286.072a.96.96 0 01.434 1.622l-.211.205c-.72.695-.03 1.889.932 1.614l.283-.08a.96.96 0 011.188 1.187l-.081.283c-.275.962.919 1.651 1.614.932l.205-.211a.96.96 0 011.622.434l.072.286c.243.97 1.621.97 1.864 0l.072-.286a.96.96 0 011.622-.434l.205.211c.695.72 1.889.03 1.614-.932l-.08-.283a.96.96 0 011.187-1.188l.283.081c.962.275 1.651-.919.932-1.614l-.211-.205a.96.96 0 01.434-1.622l.286-.072c.97-.243.97-1.621 0-1.864l-.286-.072a.96.96 0 01-.434-1.622l.211-.205c.72-.695.03-1.889-.932-1.614l-.283.08a.96.96 0 01-1.188-1.187l.081-.283c.275-.962-.919-1.651-1.614-.932l-.205.211a.96.96 0 01-1.622-.434l-.072-.286zM10 15a5 5 0 100-10 5 5 0 000 10z" clip-rule="evenodd"/>');
var BIconGearWideConnected = /*#__PURE__*/makeIcon('GearWideConnected', '<path fill-rule="evenodd" d="M10.932 2.724c-.243-.97-1.621-.97-1.864 0l-.072.286a.96.96 0 01-1.622.434l-.205-.211c-.695-.72-1.889-.03-1.614.932l.08.283a.96.96 0 01-1.187 1.188l-.283-.081c-.962-.275-1.651.919-.932 1.614l.211.205a.96.96 0 01-.434 1.622l-.286.072c-.97.243-.97 1.621 0 1.864l.286.072a.96.96 0 01.434 1.622l-.211.205c-.72.695-.03 1.889.932 1.614l.283-.08a.96.96 0 011.188 1.187l-.081.283c-.275.962.919 1.651 1.614.932l.205-.211a.96.96 0 011.622.434l.072.286c.243.97 1.621.97 1.864 0l.072-.286a.96.96 0 011.622-.434l.205.211c.695.72 1.889.03 1.614-.932l-.08-.283a.96.96 0 011.187-1.188l.283.081c.962.275 1.651-.919.932-1.614l-.211-.205a.96.96 0 01.434-1.622l.286-.072c.97-.243.97-1.621 0-1.864l-.286-.072a.96.96 0 01-.434-1.622l.211-.205c.72-.695.03-1.889-.932-1.614l-.283.08a.96.96 0 01-1.188-1.187l.081-.283c.275-.962-.919-1.651-1.614-.932l-.205.211a.96.96 0 01-1.622-.434l-.072-.286zM10 15a5 5 0 100-10 5 5 0 000 10z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M9.375 10L6.6 6.3l.8-.6 2.85 3.8H15v1h-4.75L7.4 14.3l-.8-.6L9.375 10z" clip-rule="evenodd"/>');
var BIconGeo = /*#__PURE__*/makeIcon('Geo', '<path d="M13 6a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M9.5 6h1v9a.5.5 0 01-1 0V6z"/><path fill-rule="evenodd" d="M8.489 14.095a.5.5 0 01-.383.594c-.565.123-1.003.292-1.286.472-.302.192-.32.321-.32.339 0 .013.005.085.146.21.14.124.372.26.701.383.655.245 1.593.407 2.653.407s1.998-.162 2.653-.407c.329-.124.56-.259.701-.383.14-.125.146-.197.146-.21 0-.018-.018-.147-.32-.339-.283-.18-.721-.35-1.286-.472a.5.5 0 11.212-.977c.63.137 1.193.34 1.61.606.4.253.784.645.784 1.182 0 .402-.219.724-.483.958-.264.235-.618.423-1.013.57-.793.298-1.855.472-3.004.472s-2.21-.174-3.004-.471c-.395-.148-.749-.337-1.013-.571-.264-.234-.483-.556-.483-.958 0-.537.384-.929.783-1.182.418-.266.98-.47 1.611-.606a.5.5 0 01.595.383z" clip-rule="evenodd"/>');
var BIconGraphDown = /*#__PURE__*/makeIcon('GraphDown', '<path d="M2 2h1v16H2V2zm1 15h15v1H3v-1z"/><path fill-rule="evenodd" d="M16.39 11.041l-4.349-5.436L9 8.646 5.354 5l-.708.707L9 10.061l2.959-2.959 3.65 4.564.781-.625z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12 11.854a.5.5 0 00.5.5h4a.5.5 0 00.5-.5v-4a.5.5 0 00-1 0v3.5h-3.5a.5.5 0 00-.5.5z" clip-rule="evenodd"/>');
var BIconGraphUp = /*#__PURE__*/makeIcon('GraphUp', '<path d="M2 2h1v16H2V2zm1 15h15v1H3v-1z"/><path fill-rule="evenodd" d="M16.39 6.312l-4.349 5.437L9 8.707l-3.646 3.647-.708-.708L9 7.293l2.959 2.958 3.65-4.563.781.624z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12 5.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v4a.5.5 0 01-1 0V6h-3.5a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>');
var BIconGrid = /*#__PURE__*/makeIcon('Grid', '<path fill-rule="evenodd" d="M9.5 4.5a1 1 0 00-1-1h-4a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1v-4zm-1 7h-4v4h4v-4zm7 0h-4v4h4v-4zm0-7h-4v4h4v-4zm-7 0h-4v4h4v-4zm2 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4zm-6 6a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1v-4a1 1 0 00-1-1h-4zm7 0a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1v-4a1 1 0 00-1-1h-4z" clip-rule="evenodd"/>');
var BIconGridFill = /*#__PURE__*/makeIcon('GridFill', '<rect width="6" height="6" x="3.5" y="10.5" rx="1"/><rect width="6" height="6" x="10.5" y="10.5" rx="1"/><rect width="6" height="6" x="10.5" y="3.5" rx="1"/><rect width="6" height="6" x="3.5" y="3.5" rx="1"/>');
var BIconHammer = /*#__PURE__*/makeIcon('Hammer', '<path d="M11.812 3.952a.5.5 0 01-.312.89c-1.671 0-2.852.596-3.616 1.185L6.857 7.073V8.21a.5.5 0 01-.146.354L5.426 9.853a.5.5 0 01-.709 0L2.146 7.274a.5.5 0 010-.706l1.286-1.29a.5.5 0 01.354-.146H4.84c1.664-1.904 3.375-2.27 4.716-2.091a5.008 5.008 0 012.076.782l.18.129z"/><path fill-rule="evenodd" d="M8.012 5.5a.5.5 0 01.359.165l9.146 8.646A.5.5 0 0117.5 15L16 16.5a.5.5 0 01-.756-.056L6.598 7.297a.5.5 0 01.048-.65l1-1a.5.5 0 01.366-.147z" clip-rule="evenodd"/>');
var BIconHash = /*#__PURE__*/makeIcon('Hash', '<path d="M10.39 14.648a1.32 1.32 0 00-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304c.008-.04.016-.117.016-.164a.51.51 0 00-.516-.516.54.54 0 00-.539.43l-.523 2.554H9.617l.477-2.304c.008-.04.015-.117.015-.164a.512.512 0 00-.523-.516.539.539 0 00-.531.43L8.53 7.484H7.414c-.43 0-.617.22-.617.532 0 .312.187.539.617.539h.906l-.515 2.523H6.609c-.421 0-.609.219-.609.531 0 .313.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242l-.515 2.492zm-1-6.109h2.266l-.515 2.563H8.859l.532-2.563z"/>');
var BIconHeart = /*#__PURE__*/makeIcon('Heart', '<path fill-rule="evenodd" d="M10 4.748l-.717-.737C7.6 2.281 4.514 2.878 3.4 5.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.837-3.362.314-4.385-1.114-2.175-4.2-2.773-5.883-1.043L10 4.748zM10 17C-5.333 6.868 5.279-1.04 9.824 3.143c.06.055.119.112.176.171a3.12 3.12 0 01.176-.17C14.72-1.042 25.333 6.867 10 17z" clip-rule="evenodd"/>');
var BIconHeartFill = /*#__PURE__*/makeIcon('HeartFill', '<path fill-rule="evenodd" d="M10 3.314C14.438-1.248 25.534 6.735 10 17-5.534 6.736 5.562-1.248 10 3.314z" clip-rule="evenodd"/>');
var BIconHouse = /*#__PURE__*/makeIcon('House', '<path fill-rule="evenodd" d="M9.646 3.146a.5.5 0 01.708 0l6 6a.5.5 0 01.146.354v7a.5.5 0 01-.5.5h-4.5a.5.5 0 01-.5-.5v-4H9v4a.5.5 0 01-.5.5H4a.5.5 0 01-.5-.5v-7a.5.5 0 01.146-.354l6-6zM4.5 9.707V16H8v-4a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v4h3.5V9.707l-5.5-5.5-5.5 5.5z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M15 4.5V8l-2-2V4.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5z" clip-rule="evenodd"/>');
var BIconHouseFill = /*#__PURE__*/makeIcon('HouseFill', '<path d="M8.5 12.995V16.5a.5.5 0 01-.5.5H4a.5.5 0 01-.5-.5v-7a.5.5 0 01.146-.354l6-6a.5.5 0 01.708 0l6 6a.5.5 0 01.146.354v7a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5V13c0-.25-.25-.5-.5-.5H9c-.25 0-.5.25-.5.495z"/><path fill-rule="evenodd" d="M15 4.5V8l-2-2V4.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5z" clip-rule="evenodd"/>');
var BIconImage = /*#__PURE__*/makeIcon('Image', '<path fill-rule="evenodd" d="M16.002 4h-12a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1V5a1 1 0 00-1-1zm-12-1a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2h-12z" clip-rule="evenodd"/><path d="M12.648 9.646a.5.5 0 01.577-.093l3.777 1.947V16h-14v-2l2.646-2.354a.5.5 0 01.63-.062l2.66 1.773 3.71-3.71z"/><path fill-rule="evenodd" d="M6.502 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clip-rule="evenodd"/>');
var BIconImageAlt = /*#__PURE__*/makeIcon('ImageAlt', '<path d="M12.648 8.646a.5.5 0 01.577-.093l4.777 3.947V17a1 1 0 01-1 1h-14a1 1 0 01-1-1v-2l3.646-4.354a.5.5 0 01.63-.062l2.66 2.773 3.71-4.71z"/><path fill-rule="evenodd" d="M6.5 7a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" clip-rule="evenodd"/>');
var BIconImageFill = /*#__PURE__*/makeIcon('ImageFill', '<path fill-rule="evenodd" d="M2.002 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2h-12a2 2 0 01-2-2V5zm1 9l2.646-2.354a.5.5 0 01.63-.062l2.66 1.773 3.71-3.71a.5.5 0 01.577-.094l3.777 1.947V15a1 1 0 01-1 1h-12a1 1 0 01-1-1v-1zm5-6.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" clip-rule="evenodd"/>');
var BIconImages = /*#__PURE__*/makeIcon('Images', '<path fill-rule="evenodd" d="M14.002 6h-10a1 1 0 00-1 1v8a1 1 0 001 1h10a1 1 0 001-1V7a1 1 0 00-1-1zm-10-1a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-10z" clip-rule="evenodd"/><path d="M12.648 10.646a.5.5 0 01.577-.093l1.777 1.947V16h-12v-1l2.646-2.354a.5.5 0 01.63-.062l2.66 1.773 3.71-3.71z"/><path fill-rule="evenodd" d="M6.502 11a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM6 4h10a1 1 0 011 1v8a1 1 0 01-1 1v1a2 2 0 002-2V5a2 2 0 00-2-2H6a2 2 0 00-2 2h1a1 1 0 011-1z" clip-rule="evenodd"/>');
var BIconInbox = /*#__PURE__*/makeIcon('Inbox', '<path fill-rule="evenodd" d="M5.81 6.063A1.5 1.5 0 016.98 5.5h6.04a1.5 1.5 0 011.17.563l3.7 4.625a.5.5 0 11-.78.624l-3.7-4.624a.5.5 0 00-.39-.188H6.98a.5.5 0 00-.39.188l-3.7 4.624a.5.5 0 11-.78-.624l3.7-4.625z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M2.125 10.67a.5.5 0 01.375-.17H8a.5.5 0 01.5.5 1.5 1.5 0 003 0 .5.5 0 01.5-.5h5.5a.5.5 0 01.496.562l-.39 3.124a1.5 1.5 0 01-1.489 1.314H3.883a1.5 1.5 0 01-1.489-1.314l-.39-3.124a.5.5 0 01.121-.393zm.941.83l.32 2.562a.5.5 0 00.497.438h12.234a.5.5 0 00.496-.438l.32-2.562H12.45a2.5 2.5 0 01-4.9 0H3.066z" clip-rule="evenodd"/>');
var BIconInboxFill = /*#__PURE__*/makeIcon('InboxFill', '<path fill-rule="evenodd" d="M5.81 6.063A1.5 1.5 0 016.98 5.5h6.04a1.5 1.5 0 011.17.563l3.7 4.625a.5.5 0 11-.78.624l-3.7-4.624a.5.5 0 00-.39-.188H6.98a.5.5 0 00-.39.188l-3.7 4.624a.5.5 0 11-.78-.624l3.7-4.625z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M2.125 10.67a.5.5 0 01.375-.17h5a.5.5 0 01.5.5c0 .828.625 2 2 2s2-1.172 2-2a.5.5 0 01.5-.5h5a.5.5 0 01.496.562l-.39 3.124a1.5 1.5 0 01-1.489 1.314H3.883a1.5 1.5 0 01-1.489-1.314l-.39-3.124a.5.5 0 01.121-.393z" clip-rule="evenodd"/>');
var BIconInboxes = /*#__PURE__*/makeIcon('Inboxes', '<path fill-rule="evenodd" d="M2.125 13.17A.5.5 0 012.5 13H8a.5.5 0 01.5.5 1.5 1.5 0 003 0 .5.5 0 01.5-.5h5.5a.5.5 0 01.496.562l-.39 3.124A1.5 1.5 0 0116.117 18H3.883a1.5 1.5 0 01-1.489-1.314l-.39-3.124a.5.5 0 01.121-.393zm.941.83l.32 2.562a.5.5 0 00.497.438h12.234a.5.5 0 00.496-.438l.32-2.562H12.45a2.5 2.5 0 01-4.9 0H3.066zM5.81 2.563A1.5 1.5 0 016.98 2h6.04a1.5 1.5 0 011.17.563l3.7 4.625a.5.5 0 11-.78.624l-3.7-4.624A.5.5 0 0013.02 3H6.98a.5.5 0 00-.39.188l-3.7 4.624a.5.5 0 11-.78-.624l3.7-4.625z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M2.125 7.17A.5.5 0 012.5 7H8a.5.5 0 01.5.5 1.5 1.5 0 003 0A.5.5 0 0112 7h5.5a.5.5 0 01.496.562l-.39 3.124A1.5 1.5 0 0116.117 12H3.883a1.5 1.5 0 01-1.489-1.314l-.39-3.124a.5.5 0 01.121-.393zm.941.83l.32 2.562a.5.5 0 00.497.438h12.234a.5.5 0 00.496-.438L16.933 8H12.45a2.5 2.5 0 01-4.9 0H3.066z" clip-rule="evenodd"/>');
var BIconInboxesFill = /*#__PURE__*/makeIcon('InboxesFill', '<path fill-rule="evenodd" d="M2.125 13.17A.5.5 0 012.5 13H8a.5.5 0 01.5.5 1.5 1.5 0 003 0 .5.5 0 01.5-.5h5.5a.5.5 0 01.496.562l-.39 3.124A1.5 1.5 0 0116.117 18H3.883a1.5 1.5 0 01-1.489-1.314l-.39-3.124a.5.5 0 01.121-.393zM5.81 2.563A1.5 1.5 0 016.98 2h6.04a1.5 1.5 0 011.17.563l3.7 4.625a.5.5 0 11-.78.624l-3.7-4.624A.5.5 0 0013.02 3H6.98a.5.5 0 00-.39.188l-3.7 4.624a.5.5 0 11-.78-.624l3.7-4.625z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M2.125 7.17A.5.5 0 012.5 7H8a.5.5 0 01.5.5 1.5 1.5 0 003 0A.5.5 0 0112 7h5.5a.5.5 0 01.496.562l-.39 3.124A1.5 1.5 0 0116.117 12H3.883a1.5 1.5 0 01-1.489-1.314l-.39-3.124a.5.5 0 01.121-.393z" clip-rule="evenodd"/>');
var BIconInfo = /*#__PURE__*/makeIcon('Info', '<path fill-rule="evenodd" d="M10 17a7 7 0 100-14 7 7 0 000 14zm8-7a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd"/><path d="M10.93 8.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533l1.002-4.705z"/><circle cx="10" cy="6.5" r="1"/>');
var BIconInfoFill = /*#__PURE__*/makeIcon('InfoFill', '<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.93-9.412l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533l1.002-4.705zM10 7.5a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"/>');
var BIconInfoSquare = /*#__PURE__*/makeIcon('InfoSquare', '<path fill-rule="evenodd" d="M16 3H4a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4z" clip-rule="evenodd"/><path d="M10.93 8.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533l1.002-4.705z"/><circle cx="10" cy="6.5" r="1"/>');
var BIconInfoSquareFill = /*#__PURE__*/makeIcon('InfoSquareFill', '<path fill-rule="evenodd" d="M2 4a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm8.93 4.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533l1.002-4.705zM10 7.5a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"/>');
var BIconJustify = /*#__PURE__*/makeIcon('Justify', '<path fill-rule="evenodd" d="M4 14.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>');
var BIconJustifyLeft = /*#__PURE__*/makeIcon('JustifyLeft', '<path fill-rule="evenodd" d="M4 14.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>');
var BIconJustifyRight = /*#__PURE__*/makeIcon('JustifyRight', '<path fill-rule="evenodd" d="M8 14.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm-4-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>');
var BIconKanban = /*#__PURE__*/makeIcon('Kanban', '<path fill-rule="evenodd" d="M15.5 3h-11a1 1 0 00-1 1v12a1 1 0 001 1h11a1 1 0 001-1V4a1 1 0 00-1-1zm-11-1a2 2 0 00-2 2v12a2 2 0 002 2h11a2 2 0 002-2V4a2 2 0 00-2-2h-11z" clip-rule="evenodd"/><rect width="3" height="5" x="8.5" y="4" rx="1"/><rect width="3" height="9" x="4.5" y="4" rx="1"/><rect width="3" height="12" x="12.5" y="4" rx="1"/>');
var BIconKanbanFill = /*#__PURE__*/makeIcon('KanbanFill', '<path fill-rule="evenodd" d="M4.5 2a2 2 0 00-2 2v12a2 2 0 002 2h11a2 2 0 002-2V4a2 2 0 00-2-2h-11zm5 2a1 1 0 00-1 1v3a1 1 0 001 1h1a1 1 0 001-1V5a1 1 0 00-1-1h-1zm-5 1a1 1 0 011-1h1a1 1 0 011 1v7a1 1 0 01-1 1h-1a1 1 0 01-1-1V5zm9-1a1 1 0 00-1 1v10a1 1 0 001 1h1a1 1 0 001-1V5a1 1 0 00-1-1h-1z" clip-rule="evenodd"/>');
var BIconLaptop = /*#__PURE__*/makeIcon('Laptop', '<path fill-rule="evenodd" d="M15.5 4h-11a.5.5 0 00-.5.5v7a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5zm-11-1A1.5 1.5 0 003 4.5v7A1.5 1.5 0 004.5 13h11a1.5 1.5 0 001.5-1.5v-7A1.5 1.5 0 0015.5 3h-11z" clip-rule="evenodd"/><path d="M2.81 13.758A1 1 0 013.78 13h12.44a1 1 0 01.97.758l.5 2A1 1 0 0116.72 17H3.28a1 1 0 01-.97-1.242l.5-2z"/>');
var BIconLayoutSidebar = /*#__PURE__*/makeIcon('LayoutSidebar', '<path fill-rule="evenodd" d="M16 4H4a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1V5a1 1 0 00-1-1zM4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M6 16V4h1v12H6z" clip-rule="evenodd"/>');
var BIconLayoutSidebarReverse = /*#__PURE__*/makeIcon('LayoutSidebarReverse', '<path fill-rule="evenodd" d="M16 4H4a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1V5a1 1 0 00-1-1zM4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M13 16V4h1v12h-1z" clip-rule="evenodd"/>');
var BIconLayoutSplit = /*#__PURE__*/makeIcon('LayoutSplit', '<path fill-rule="evenodd" d="M1.5 5A2.5 2.5 0 014 2.5h12A2.5 2.5 0 0118.5 5v10a2.5 2.5 0 01-2.5 2.5H4A2.5 2.5 0 011.5 15V5zM4 3.5A1.5 1.5 0 002.5 5v10A1.5 1.5 0 004 16.5h12a1.5 1.5 0 001.5-1.5V5A1.5 1.5 0 0016 3.5h-5.5v13h-1v-13H4z" clip-rule="evenodd"/>');
var BIconList = /*#__PURE__*/makeIcon('List', '<path fill-rule="evenodd" d="M4.5 13.5A.5.5 0 015 13h10a.5.5 0 010 1H5a.5.5 0 01-.5-.5zm0-4A.5.5 0 015 9h10a.5.5 0 010 1H5a.5.5 0 01-.5-.5zm0-4A.5.5 0 015 5h10a.5.5 0 010 1H5a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>');
var BIconListCheck = /*#__PURE__*/makeIcon('ListCheck', '<path fill-rule="evenodd" d="M7 13.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zM5.854 4.146a.5.5 0 010 .708l-1.5 1.5a.5.5 0 01-.708 0l-.5-.5a.5.5 0 11.708-.708L4 5.293l1.146-1.147a.5.5 0 01.708 0zm0 4a.5.5 0 010 .708l-1.5 1.5a.5.5 0 01-.708 0l-.5-.5a.5.5 0 11.708-.708L4 9.293l1.146-1.147a.5.5 0 01.708 0zm0 4a.5.5 0 010 .708l-1.5 1.5a.5.5 0 01-.708 0l-.5-.5a.5.5 0 01.708-.708l.146.147 1.146-1.147a.5.5 0 01.708 0z" clip-rule="evenodd"/>');
var BIconListOl = /*#__PURE__*/makeIcon('ListOl', '<path fill-rule="evenodd" d="M7 13.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5z" clip-rule="evenodd"/><path d="M3.713 13.865v-.474H4c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 01-.492.594v.033a.615.615 0 01.569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V11H3.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 00-.342.338v.041zM4.564 7h-.635V4.924h-.031l-.598.42v-.567l.629-.443h.635V7z"/>');
var BIconListTask = /*#__PURE__*/makeIcon('ListTask', '<path fill-rule="evenodd" d="M4 4.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V5a.5.5 0 00-.5-.5H4zM5 5H4v1h1V5z" clip-rule="evenodd"/><path d="M7 5.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zM7.5 9a.5.5 0 000 1h9a.5.5 0 000-1h-9zm0 4a.5.5 0 000 1h9a.5.5 0 000-1h-9z"/><path fill-rule="evenodd" d="M3.5 9a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5H4a.5.5 0 01-.5-.5V9zM4 9h1v1H4V9zm0 3.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5H4zm1 .5H4v1h1v-1z" clip-rule="evenodd"/>');
var BIconListUl = /*#__PURE__*/makeIcon('ListUl', '<path fill-rule="evenodd" d="M7 13.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm-3 1a1 1 0 100-2 1 1 0 000 2zm0 4a1 1 0 100-2 1 1 0 000 2zm0 4a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"/>');
var BIconLock = /*#__PURE__*/makeIcon('Lock', '<path fill-rule="evenodd" d="M13.655 9H6.333c-.264 0-.398.068-.471.121a.73.73 0 00-.224.296 1.626 1.626 0 00-.138.59V15c0 .342.076.531.14.635.064.106.151.18.256.237a1.122 1.122 0 00.436.127l.013.001h7.322c.264 0 .398-.068.471-.121a.73.73 0 00.224-.296 1.627 1.627 0 00.138-.59V10c0-.342-.076-.531-.14-.635a.658.658 0 00-.255-.237 1.123 1.123 0 00-.45-.128zm.012-1H6.333C4.5 8 4.5 10 4.5 10v5c0 2 1.833 2 1.833 2h7.334c1.833 0 1.833-2 1.833-2v-5c0-2-1.833-2-1.833-2zM6.5 5a3.5 3.5 0 117 0v3h-1V5a2.5 2.5 0 00-5 0v3h-1V5z" clip-rule="evenodd"/>');
var BIconLockFill = /*#__PURE__*/makeIcon('LockFill', '<rect width="11" height="9" x="4.5" y="8" rx="2"/><path fill-rule="evenodd" d="M6.5 5a3.5 3.5 0 117 0v3h-1V5a2.5 2.5 0 00-5 0v3h-1V5z" clip-rule="evenodd"/>');
var BIconMap = /*#__PURE__*/makeIcon('Map', '<path fill-rule="evenodd" d="M17.817 2.613A.5.5 0 0118 3v13a.5.5 0 01-.402.49l-5 1a.502.502 0 01-.196 0L7.5 16.51l-4.902.98A.5.5 0 012 17V4a.5.5 0 01.402-.49l5-1a.5.5 0 01.196 0l4.902.98 4.902-.98a.5.5 0 01.415.103zM12 4.41l-4-.8v11.98l4 .8V4.41zm1 11.98l4-.8V3.61l-4 .8v11.98zm-6-.8V3.61l-4 .8v11.98l4-.8z" clip-rule="evenodd"/>');
var BIconMic = /*#__PURE__*/makeIcon('Mic', '<path d="M7 5a3 3 0 016 0v5a3 3 0 11-6 0V5z"/><path fill-rule="evenodd" d="M5.5 8.5A.5.5 0 016 9v1a4 4 0 008 0V9a.5.5 0 011 0v1a5 5 0 01-4.5 4.975V17h3a.5.5 0 010 1h-7a.5.5 0 010-1h3v-2.025A5 5 0 015 10V9a.5.5 0 01.5-.5z" clip-rule="evenodd"/>');
var BIconMoon = /*#__PURE__*/makeIcon('Moon', '<path d="M17.293 13.293A8 8 0 016.707 2.707a8.002 8.002 0 1010.586 10.586z"/>');
var BIconMusicPlayer = /*#__PURE__*/makeIcon('MusicPlayer', '<path fill-rule="evenodd" d="M14 3H6a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V4a1 1 0 00-1-1zM6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M13 5H7v3h6V5zM7 4a1 1 0 00-1 1v3a1 1 0 001 1h6a1 1 0 001-1V5a1 1 0 00-1-1H7zm3 11a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0z" clip-rule="evenodd"/><circle cx="10" cy="13" r="1"/>');
var BIconMusicPlayerFill = /*#__PURE__*/makeIcon('MusicPlayerFill', '<path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 1a1 1 0 011-1h6a1 1 0 011 1v2.5a1 1 0 01-1 1H7a1 1 0 01-1-1V5zm7 8a3 3 0 11-6 0 3 3 0 016 0z" clip-rule="evenodd"/><circle cx="10" cy="13" r="1"/>');
var BIconOption = /*#__PURE__*/makeIcon('Option', '<path fill-rule="evenodd" d="M2.5 4.5A.5.5 0 013 4h4a.5.5 0 01.439.26L13.297 15H17a.5.5 0 010 1h-4a.5.5 0 01-.439-.26L6.703 5H3a.5.5 0 01-.5-.5zm10 0A.5.5 0 0113 4h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>');
var BIconOutlet = /*#__PURE__*/makeIcon('Outlet', '<path fill-rule="evenodd" d="M5.34 4.994c.275-.338.68-.494 1.074-.494h7.172c.393 0 .798.156 1.074.494.578.708 1.84 2.534 1.84 5.006 0 2.472-1.262 4.297-1.84 5.006-.276.338-.68.494-1.074.494H6.414c-.394 0-.799-.156-1.074-.494C4.762 14.297 3.5 12.472 3.5 10c0-2.472 1.262-4.298 1.84-5.006zm1.074.506a.376.376 0 00-.299.126C5.599 6.259 4.5 7.863 4.5 10c0 2.137 1.099 3.74 1.615 4.374.06.073.163.126.3.126h7.17c.137 0 .24-.053.3-.126.516-.633 1.615-2.237 1.615-4.374 0-2.137-1.099-3.74-1.615-4.374a.376.376 0 00-.3-.126h-7.17z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M8 7.5a.5.5 0 01.5.5v1.5a.5.5 0 01-1 0V8a.5.5 0 01.5-.5zm4 0a.5.5 0 01.5.5v1.5a.5.5 0 01-1 0V8a.5.5 0 01.5-.5z" clip-rule="evenodd"/><path d="M9 12v1h2v-1a1 1 0 10-2 0z"/>');
var BIconPause = /*#__PURE__*/makeIcon('Pause', '<path fill-rule="evenodd" d="M8 5.5a.5.5 0 01.5.5v8a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm4 0a.5.5 0 01.5.5v8a.5.5 0 01-1 0V6a.5.5 0 01.5-.5z" clip-rule="evenodd"/>');
var BIconPauseFill = /*#__PURE__*/makeIcon('PauseFill', '<path d="M7.5 5.5A1.5 1.5 0 019 7v6a1.5 1.5 0 01-3 0V7a1.5 1.5 0 011.5-1.5zm5 0A1.5 1.5 0 0114 7v6a1.5 1.5 0 01-3 0V7a1.5 1.5 0 011.5-1.5z"/>');
var BIconPen = /*#__PURE__*/makeIcon('Pen', '<path fill-rule="evenodd" d="M7.707 15.707a1 1 0 01-.39.242l-3 1a1 1 0 01-1.266-1.265l1-3a1 1 0 01.242-.391L12.086 4.5a2 2 0 012.828 0l.586.586a2 2 0 010 2.828l-7.793 7.793zM5 13l7.793-7.793a1 1 0 011.414 0l.586.586a1 1 0 010 1.414L7 15l-3 1 1-3z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M11.854 4.56a.5.5 0 00-.708 0L7.854 7.855a.5.5 0 11-.708-.708l3.293-3.292a1.5 1.5 0 012.122 0l.293.292a.5.5 0 11-.708.708l-.292-.293z" clip-rule="evenodd"/><path d="M15.293 3.207a1 1 0 011.414 0l.03.03a1 1 0 01.03 1.383L15.5 6 14 4.5l1.293-1.293z"/>');
var BIconPencil = /*#__PURE__*/makeIcon('Pencil', '<path fill-rule="evenodd" d="M13.293 3.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-9 9a1 1 0 01-.39.242l-3 1a1 1 0 01-1.266-1.265l1-3a1 1 0 01.242-.391l9-9zM14 4l2 2-9 9-3 1 1-3 9-9z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M14.146 8.354l-2.5-2.5.708-.708 2.5 2.5-.708.708zM5 12v.5a.5.5 0 00.5.5H6v.5a.5.5 0 00.5.5H7v.5a.5.5 0 00.5.5H8v-1.5a.5.5 0 00-.5-.5H7v-.5a.5.5 0 00-.5-.5H5z" clip-rule="evenodd"/>');
var BIconPeople = /*#__PURE__*/makeIcon('People', '<path fill-rule="evenodd" d="M17 16s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.995-.944v-.002zM9.022 15h7.956a.274.274 0 00.014-.002l.008-.002c-.002-.264-.167-1.03-.76-1.72C15.688 12.629 14.718 12 13 12c-1.717 0-2.687.63-3.24 1.276-.593.69-.759 1.457-.76 1.72a1.05 1.05 0 00.022.004zm7.973.056v-.002zM13 9a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0zm-7.064 4.28a5.873 5.873 0 00-1.23-.247A7.334 7.334 0 007 11c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 017 15c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM6.92 12c-1.668.02-2.615.64-3.16 1.276C3.163 13.97 3 14.739 3 15h3c0-1.045.323-2.086.92-3zM3.5 7.5a3 3 0 116 0 3 3 0 01-6 0zm3-2a2 2 0 100 4 2 2 0 000-4z" clip-rule="evenodd"/>');
var BIconPeopleFill = /*#__PURE__*/makeIcon('PeopleFill', '<path fill-rule="evenodd" d="M9 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H9zm4-6a3 3 0 100-6 3 3 0 000 6zm-5.784 6A2.238 2.238 0 017 15c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 007 11c-4 0-5 3-5 4s1 1 1 1h4.216zM6.5 10a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" clip-rule="evenodd"/>');
var BIconPerson = /*#__PURE__*/makeIcon('Person', '<path fill-rule="evenodd" d="M15 16s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002zM5.022 15h9.956a.274.274 0 00.014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C13.516 12.68 12.289 12 10 12c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 00.022.004zm9.974.056v-.002zM10 9a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0z" clip-rule="evenodd"/>');
var BIconPersonFill = /*#__PURE__*/makeIcon('PersonFill', '<path fill-rule="evenodd" d="M5 16s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H5zm5-6a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>');
var BIconPhone = /*#__PURE__*/makeIcon('Phone', '<path fill-rule="evenodd" d="M13 3H7a1 1 0 00-1 1v11a1 1 0 001 1h6a1 1 0 001-1V4a1 1 0 00-1-1zM7 2a2 2 0 00-2 2v11a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M10 15a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"/>');
var BIconPhoneLandscape = /*#__PURE__*/makeIcon('PhoneLandscape', '<path fill-rule="evenodd" d="M3.5 6.5v6a1 1 0 001 1h11a1 1 0 001-1v-6a1 1 0 00-1-1h-11a1 1 0 00-1 1zm-1 6a2 2 0 002 2h11a2 2 0 002-2v-6a2 2 0 00-2-2h-11a2 2 0 00-2 2v6z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M15.5 9.5a1 1 0 10-2 0 1 1 0 002 0z" clip-rule="evenodd"/>');
var BIconPieChart = /*#__PURE__*/makeIcon('PieChart', '<path fill-rule="evenodd" d="M10 17a7 7 0 100-14 7 7 0 000 14zm0 1a8 8 0 100-16 8 8 0 000 16z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M9.5 9.793V3h1v6.5H17v1h-6.793l-4.853 4.854-.708-.708L9.5 9.793z" clip-rule="evenodd"/>');
var BIconPieChartFill = /*#__PURE__*/makeIcon('PieChartFill', '<path d="M17.985 10.5h-7.778l-5.5 5.5a8 8 0 0013.277-5.5zM4 15.292A8 8 0 019.5 2.015v7.778l-5.5 5.5zm6.5-13.277V9.5h7.485A8.001 8.001 0 0010.5 2.015z"/>');
var BIconPlay = /*#__PURE__*/makeIcon('Play', '<path fill-rule="evenodd" d="M12.804 10L7 6.633v6.734L12.804 10zm.792-.696a.802.802 0 010 1.392l-6.363 3.692C6.713 14.69 6 14.345 6 13.692V6.308c0-.653.713-.998 1.233-.696l6.363 3.692z" clip-rule="evenodd"/>');
var BIconPlayFill = /*#__PURE__*/makeIcon('PlayFill', '<path d="M13.596 10.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V6.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 010 1.393z"/>');
var BIconPlug = /*#__PURE__*/makeIcon('Plug', '<path d="M6 7h8v3a4 4 0 01-8 0V7z"/><path fill-rule="evenodd" d="M8 3.5a.5.5 0 01.5.5v3a.5.5 0 01-1 0V4a.5.5 0 01.5-.5zm4 0a.5.5 0 01.5.5v3a.5.5 0 01-1 0V4a.5.5 0 01.5-.5zM9.115 15.651c.256-.511.385-1.408.385-2.651h1c0 1.257-.121 2.36-.49 3.099-.191.381-.47.707-.87.877-.401.17-.845.15-1.298-.002-.961-.32-1.534-.175-1.851.046-.33.23-.491.615-.491.98h-1c0-.635.278-1.353.918-1.8.653-.456 1.58-.561 2.74-.174.297.099.478.078.592.03.115-.05.244-.161.365-.405z" clip-rule="evenodd"/>');
var BIconPlus = /*#__PURE__*/makeIcon('Plus', '<path fill-rule="evenodd" d="M10 5.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H6a.5.5 0 010-1h3.5V6a.5.5 0 01.5-.5z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M9.5 10a.5.5 0 01.5-.5h4a.5.5 0 010 1h-3.5V14a.5.5 0 01-1 0v-4z" clip-rule="evenodd"/>');
var BIconPower = /*#__PURE__*/makeIcon('Power', '<path fill-rule="evenodd" d="M7.578 6.437a5 5 0 104.922.044l.5-.865a6 6 0 11-5.908-.053l.486.874z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M9.5 10V3h1v7h-1z" clip-rule="evenodd"/>');
var BIconQuestion = /*#__PURE__*/makeIcon('Question', '<path fill-rule="evenodd" d="M10 17a7 7 0 100-14 7 7 0 000 14zm8-7a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd"/><path d="M7.25 8.033h1.32c0-.781.458-1.384 1.36-1.384.685 0 1.313.343 1.313 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.007.463h1.307v-.355c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.326 0-2.786.647-2.754 2.533zm1.562 5.516c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>');
var BIconQuestionFill = /*#__PURE__*/makeIcon('QuestionFill', '<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.57 8.033H7.25C7.22 6.147 8.68 5.5 10.006 5.5c1.397 0 2.673.73 2.673 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.355H9.117l-.007-.463c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.901 0-1.358.603-1.358 1.384zm1.251 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927z" clip-rule="evenodd"/>');
var BIconQuestionSquare = /*#__PURE__*/makeIcon('QuestionSquare', '<path fill-rule="evenodd" d="M16 3H4a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4z" clip-rule="evenodd"/><path d="M7.25 8.033h1.32c0-.781.458-1.384 1.36-1.384.685 0 1.313.343 1.313 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.007.463h1.307v-.355c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.326 0-2.786.647-2.754 2.533zm1.562 5.516c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>');
var BIconQuestionSquareFill = /*#__PURE__*/makeIcon('QuestionSquareFill', '<path fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm4.57 6.033H7.25C7.22 6.147 8.68 5.5 10.006 5.5c1.397 0 2.673.73 2.673 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.355H9.117l-.007-.463c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.901 0-1.358.603-1.358 1.384zm1.251 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927z" clip-rule="evenodd"/>');
var BIconReply = /*#__PURE__*/makeIcon('Reply', '<path fill-rule="evenodd" d="M11.502 7.013a.144.144 0 00-.202.134V8.3a.5.5 0 01-.5.5c-.667 0-2.013.005-3.3.822-.984.624-1.99 1.76-2.595 3.876 1.02-.983 2.185-1.516 3.205-1.799a8.745 8.745 0 011.921-.306 7.468 7.468 0 01.798.008h.013l.005.001h.001l-.048.498.05-.498a.5.5 0 01.45.498v1.153c0 .108.11.176.202.134l3.984-2.933a.522.522 0 01.042-.028.147.147 0 000-.252.51.51 0 01-.042-.028l-3.984-2.933zM10.3 12.386a7.745 7.745 0 00-1.923.277c-1.326.368-2.896 1.201-3.94 3.08a.5.5 0 01-.933-.305c.464-3.71 1.886-5.662 3.46-6.66 1.245-.79 2.527-.942 3.336-.971v-.66a1.144 1.144 0 011.767-.96l3.994 2.94a1.147 1.147 0 010 1.946l-3.994 2.94a1.144 1.144 0 01-1.767-.96v-.667z" clip-rule="evenodd"/>');
var BIconReplyAll = /*#__PURE__*/makeIcon('ReplyAll', '<path fill-rule="evenodd" d="M10.002 7.013a.144.144 0 00-.202.134V8.3a.5.5 0 01-.5.5c-.667 0-2.013.005-3.3.822-.984.624-1.99 1.76-2.595 3.876 1.02-.983 2.185-1.516 3.205-1.799a8.745 8.745 0 011.921-.306 7.47 7.47 0 01.798.008h.013l.005.001h.001L9.3 11.9l.05-.498a.5.5 0 01.45.498v1.153c0 .108.11.176.202.134l3.984-2.933a.522.522 0 01.042-.028.147.147 0 000-.252.51.51 0 01-.042-.028l-3.984-2.933zM8.8 12.386a7.745 7.745 0 00-1.923.277c-1.326.368-2.896 1.201-3.94 3.08a.5.5 0 01-.933-.305c.464-3.71 1.886-5.662 3.46-6.66 1.245-.79 2.527-.942 3.336-.971v-.66a1.144 1.144 0 011.767-.96l3.994 2.94a1.147 1.147 0 010 1.946l-3.994 2.94a1.144 1.144 0 01-1.767-.96v-.667z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12.868 6.293a.5.5 0 01.7-.106l3.993 2.94a1.147 1.147 0 010 1.946l-3.994 2.94a.5.5 0 11-.593-.805l4.012-2.954a.523.523 0 01.042-.028.147.147 0 000-.252.512.512 0 01-.042-.028l-4.012-2.954a.5.5 0 01-.106-.699z" clip-rule="evenodd"/>');
var BIconReplyAllFill = /*#__PURE__*/makeIcon('ReplyAllFill', '<path d="M10.079 13.9l4.568-3.281a.719.719 0 000-1.238L10.079 6.1A.716.716 0 009 6.719V8c-1.5 0-6 0-7 8 2.5-4.5 7-4 7-4v1.281c0 .56.606.898 1.079.62z"/><path fill-rule="evenodd" d="M12.868 6.293a.5.5 0 01.7-.106l3.993 2.94a1.147 1.147 0 010 1.946l-3.994 2.94a.5.5 0 11-.593-.805l4.012-2.954a.523.523 0 01.042-.028.147.147 0 000-.252.512.512 0 01-.042-.028l-4.012-2.954a.5.5 0 01-.106-.699z" clip-rule="evenodd"/>');
var BIconReplyFill = /*#__PURE__*/makeIcon('ReplyFill', '<path d="M11.079 13.9l4.568-3.281a.719.719 0 000-1.238L11.079 6.1A.716.716 0 0010 6.719V8c-1.5 0-6 0-7 8 2.5-4.5 7-4 7-4v1.281c0 .56.606.898 1.079.62z"/>');
var BIconScrewdriver = /*#__PURE__*/makeIcon('Screwdriver', '<path fill-rule="evenodd" d="M2 3l1-1 3.081 2.2a1 1 0 01.419.815v.07a1 1 0 00.293.708L12.5 11.5l.914-.305a1 1 0 011.023.242l3.356 3.356a1 1 0 010 1.414l-1.586 1.586a1 1 0 01-1.414 0l-3.356-3.356a1 1 0 01-.242-1.023l.305-.914-5.707-5.707a1 1 0 00-.707-.293h-.071a1 1 0 01-.814-.419L2 3zm11.354 9.646a.5.5 0 00-.708.708l3 3a.5.5 0 00.708-.708l-3-3z" clip-rule="evenodd"/>');
var BIconSearch = /*#__PURE__*/makeIcon('Search', '<path fill-rule="evenodd" d="M12.442 12.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M8.5 14a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM15 8.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clip-rule="evenodd"/>');
var BIconShield = /*#__PURE__*/makeIcon('Shield', '<path fill-rule="evenodd" d="M7.443 3.991a60.17 60.17 0 00-2.725.802.454.454 0 00-.315.366C3.87 9.056 5.1 11.9 6.567 13.773c.736.94 1.533 1.636 2.197 2.093.333.228.626.394.857.5.116.053.21.089.282.11A.73.73 0 0010 16.5a.774.774 0 00.097-.023c.072-.022.166-.058.282-.111.23-.106.524-.272.857-.5a10.198 10.198 0 002.197-2.093C14.9 11.9 16.13 9.056 15.597 5.159a.454.454 0 00-.315-.366c-.626-.2-1.682-.526-2.725-.802C11.491 3.71 10.51 3.5 10 3.5c-.51 0-1.49.21-2.557.491zm-.256-.966C8.23 2.749 9.337 2.5 10 2.5c.662 0 1.77.249 2.813.525 1.066.282 2.14.614 2.772.815.528.168.926.623 1.003 1.184.573 4.197-.756 7.307-2.367 9.365a11.192 11.192 0 01-2.418 2.3 6.942 6.942 0 01-1.007.586c-.27.124-.558.225-.796.225s-.527-.101-.796-.225a6.908 6.908 0 01-1.007-.586 11.192 11.192 0 01-2.418-2.3c-1.611-2.058-2.94-5.168-2.367-9.365A1.454 1.454 0 014.415 3.84a61.113 61.113 0 012.772-.815z" clip-rule="evenodd"/>');
var BIconShieldFill = /*#__PURE__*/makeIcon('ShieldFill', '<path fill-rule="evenodd" d="M7.187 3.025C8.23 2.749 9.337 2.5 10 2.5c.662 0 1.77.249 2.813.525 1.066.282 2.14.614 2.772.815.528.168.926.623 1.003 1.184.573 4.197-.756 7.307-2.367 9.365a11.192 11.192 0 01-2.418 2.3 6.942 6.942 0 01-1.007.586c-.27.124-.558.225-.796.225s-.527-.101-.796-.225a6.908 6.908 0 01-1.007-.586 11.192 11.192 0 01-2.418-2.3c-1.611-2.058-2.94-5.168-2.367-9.365A1.454 1.454 0 014.415 3.84a61.113 61.113 0 012.772-.815z" clip-rule="evenodd"/>');
var BIconShieldLock = /*#__PURE__*/makeIcon('ShieldLock', '<path fill-rule="evenodd" d="M7.443 3.991a60.17 60.17 0 00-2.725.802.454.454 0 00-.315.366C3.87 9.056 5.1 11.9 6.567 13.773c.736.94 1.533 1.636 2.197 2.093.333.228.626.394.857.5.116.053.21.089.282.11A.73.73 0 0010 16.5a.774.774 0 00.097-.023c.072-.022.166-.058.282-.111.23-.106.524-.272.857-.5a10.198 10.198 0 002.197-2.093C14.9 11.9 16.13 9.056 15.597 5.159a.454.454 0 00-.315-.366c-.626-.2-1.682-.526-2.725-.802C11.491 3.71 10.51 3.5 10 3.5c-.51 0-1.49.21-2.557.491zm-.256-.966C8.23 2.749 9.337 2.5 10 2.5c.662 0 1.77.249 2.813.525 1.066.282 2.14.614 2.772.815.528.168.926.623 1.003 1.184.573 4.197-.756 7.307-2.367 9.365a11.192 11.192 0 01-2.418 2.3 6.942 6.942 0 01-1.007.586c-.27.124-.558.225-.796.225s-.527-.101-.796-.225a6.908 6.908 0 01-1.007-.586 11.192 11.192 0 01-2.418-2.3c-1.611-2.058-2.94-5.168-2.367-9.365A1.454 1.454 0 014.415 3.84a61.113 61.113 0 012.772-.815z" clip-rule="evenodd"/><path d="M11.5 8.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/><path d="M9.41 10.034a.5.5 0 01.494-.417h.156a.5.5 0 01.492.414l.347 2a.5.5 0 01-.493.585h-.835a.5.5 0 01-.493-.582l.333-2z"/>');
var BIconShieldLockFill = /*#__PURE__*/makeIcon('ShieldLockFill', '<path fill-rule="evenodd" d="M7.187 3.025C8.23 2.749 9.337 2.5 10 2.5c.662 0 1.77.249 2.813.525a61.1 61.1 0 012.772.815c.527.168.926.623 1.003 1.184.573 4.197-.756 7.307-2.368 9.365a11.19 11.19 0 01-2.417 2.3 6.942 6.942 0 01-1.007.586c-.27.124-.558.225-.796.225s-.527-.101-.796-.225a6.908 6.908 0 01-1.007-.586 11.192 11.192 0 01-2.418-2.3c-1.611-2.058-2.94-5.168-2.367-9.365A1.454 1.454 0 014.415 3.84a61.105 61.105 0 012.772-.815zm3.328 6.884a1.5 1.5 0 10-1.06-.011.5.5 0 00-.044.136l-.333 2a.5.5 0 00.493.582h.835a.5.5 0 00.493-.585l-.347-2a.501.501 0 00-.037-.122z" clip-rule="evenodd"/>');
var BIconShieldShaded = /*#__PURE__*/makeIcon('ShieldShaded', '<path fill-rule="evenodd" d="M7.443 3.991a60.17 60.17 0 00-2.725.802.454.454 0 00-.315.366C3.87 9.056 5.1 11.9 6.567 13.773c.736.94 1.533 1.636 2.197 2.093.333.228.626.394.857.5.116.053.21.089.282.11A.73.73 0 0010 16.5a.774.774 0 00.097-.023c.072-.022.166-.058.282-.111a5.94 5.94 0 00.857-.5 10.198 10.198 0 002.197-2.093C14.9 11.9 16.13 9.056 15.597 5.159a.454.454 0 00-.315-.366c-.626-.2-1.682-.526-2.725-.802C11.491 3.71 10.51 3.5 10 3.5c-.51 0-1.49.21-2.557.491zm-.256-.966C8.23 2.749 9.337 2.5 10 2.5c.662 0 1.77.249 2.813.525 1.066.282 2.14.614 2.772.815.528.168.926.623 1.003 1.184.573 4.197-.756 7.307-2.367 9.365a11.192 11.192 0 01-2.418 2.3 6.942 6.942 0 01-1.007.586c-.27.124-.558.225-.796.225s-.526-.101-.796-.225a6.908 6.908 0 01-1.007-.586 11.192 11.192 0 01-2.418-2.3c-1.611-2.058-2.94-5.168-2.367-9.365A1.454 1.454 0 014.415 3.84a61.105 61.105 0 012.772-.815z" clip-rule="evenodd"/><path d="M10 4.25c.909 0 3.188.685 4.254 1.022a.94.94 0 01.656.773c.814 6.424-4.13 9.452-4.91 9.452V4.25z"/>');
var BIconShift = /*#__PURE__*/makeIcon('Shift', '<path fill-rule="evenodd" d="M9.27 4.047a1 1 0 011.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H13.5v3a1 1 0 01-1 1h-5a1 1 0 01-1-1v-3H3.654c-.875 0-1.328-1.045-.73-1.684L9.27 4.047zm7.076 7.453L10 4.731 3.654 11.5H6.5a1 1 0 011 1v3h5v-3a1 1 0 011-1h2.846z" clip-rule="evenodd"/>');
var BIconShiftFill = /*#__PURE__*/makeIcon('ShiftFill', '<path fill-rule="evenodd" d="M9.27 4.047a1 1 0 011.46 0l6.345 6.769c.6.639.146 1.684-.73 1.684H13.5v3a1 1 0 01-1 1h-5a1 1 0 01-1-1v-3H3.654c-.875 0-1.328-1.045-.73-1.684L9.27 4.047z" clip-rule="evenodd"/>');
var BIconSkipBackward = /*#__PURE__*/makeIcon('SkipBackward', '<path fill-rule="evenodd" d="M2.5 5.5A.5.5 0 013 6v3.248l6.267-3.636c.52-.302 1.233.043 1.233.696v2.94l6.267-3.636c.52-.302 1.233.043 1.233.696v7.384c0 .653-.713.998-1.233.696L10.5 10.752v2.94c0 .653-.713.998-1.233.696L3 10.752V14a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm7 1.133L3.696 10 9.5 13.367V6.633zm7.5 0L11.196 10 17 13.367V6.633z" clip-rule="evenodd"/>');
var BIconSkipBackwardFill = /*#__PURE__*/makeIcon('SkipBackwardFill', '<path stroke="currentColor" stroke-linecap="round" d="M14 6v8"/><path d="M13.596 10.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V6.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 010 1.393z"/>');
var BIconSkipEnd = /*#__PURE__*/makeIcon('SkipEnd', '<path fill-rule="evenodd" d="M14 5.5a.5.5 0 01.5.5v8a.5.5 0 01-1 0V6a.5.5 0 01.5-.5z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12.804 10L7 6.633v6.734L12.804 10zm.792-.696a.802.802 0 010 1.392l-6.363 3.692C6.713 14.69 6 14.345 6 13.692V6.308c0-.653.713-.998 1.233-.696l6.363 3.692z" clip-rule="evenodd"/>');
var BIconSkipEndFill = /*#__PURE__*/makeIcon('SkipEndFill', '<path stroke="currentColor" stroke-linecap="round" d="M2.5 6v8"/><path d="M2.904 10.697l6.363 3.692c.54.313 1.233-.066 1.233-.697V6.308c0-.63-.693-1.01-1.233-.696L2.904 9.304a.802.802 0 000 1.393z"/><path d="M10.404 10.697l6.363 3.692c.54.313 1.233-.066 1.233-.697V6.308c0-.63-.692-1.01-1.233-.696l-6.363 3.692a.802.802 0 000 1.393z"/>');
var BIconSkipForward = /*#__PURE__*/makeIcon('SkipForward', '<path fill-rule="evenodd" d="M17.5 5.5a.5.5 0 01.5.5v8a.5.5 0 01-1 0v-3.248l-6.267 3.636c-.52.302-1.233-.043-1.233-.696v-2.94l-6.267 3.636C2.713 14.69 2 14.345 2 13.692V6.308c0-.653.713-.998 1.233-.696L9.5 9.248v-2.94c0-.653.713-.998 1.233-.696L17 9.248V6a.5.5 0 01.5-.5zM3 6.633v6.734L8.804 10 3 6.633zm7.5 0v6.734L16.304 10 10.5 6.633z" clip-rule="evenodd"/>');
var BIconSkipForwardFill = /*#__PURE__*/makeIcon('SkipForwardFill', '<path stroke="currentColor" stroke-linecap="round" d="M17.5 6v8"/><path d="M9.596 10.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V6.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 010 1.393z"/><path d="M17.096 10.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V6.308c0-.63.693-1.01 1.233-.696l6.363 3.692a.802.802 0 010 1.393z"/>');
var BIconSkipStart = /*#__PURE__*/makeIcon('SkipStart', '<path fill-rule="evenodd" d="M6.5 5.5A.5.5 0 006 6v8a.5.5 0 001 0V6a.5.5 0 00-.5-.5z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M7.696 10L13.5 6.633v6.734L7.696 10zm-.792-.696a.802.802 0 000 1.392l6.363 3.692c.52.302 1.233-.043 1.233-.696V6.308c0-.653-.713-.998-1.233-.696L6.904 9.304z" clip-rule="evenodd"/>');
var BIconSkipStartFill = /*#__PURE__*/makeIcon('SkipStartFill', '<path stroke="currentColor" stroke-linecap="round" d="M6.5 6v8"/><path d="M6.903 10.697l6.364 3.692c.54.313 1.232-.066 1.232-.697V6.308c0-.63-.692-1.01-1.232-.696L6.903 9.304a.802.802 0 000 1.393z"/>');
var BIconSpeaker = /*#__PURE__*/makeIcon('Speaker', '<path d="M11 6a1 1 0 11-2 0 1 1 0 012 0zm-2.5 6.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"/><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm6 4a2 2 0 11-4 0 2 2 0 014 0zm-2 3a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" clip-rule="evenodd"/>');
var BIconSquare = /*#__PURE__*/makeIcon('Square', '<path fill-rule="evenodd" d="M16 3H4a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4z" clip-rule="evenodd"/>');
var BIconSquareFill = /*#__PURE__*/makeIcon('SquareFill', '<rect width="16" height="16" x="2" y="2" rx="2"/>');
var BIconSquareHalf = /*#__PURE__*/makeIcon('SquareHalf', '<path fill-rule="evenodd" d="M10 3H4a1 1 0 00-1 1v12a1 1 0 001 1h6V3zM4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4z" clip-rule="evenodd"/>');
var BIconStar = /*#__PURE__*/makeIcon('Star', '<path fill-rule="evenodd" d="M4.866 16.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696-2.184-4.327a.513.513 0 00-.927 0L7.354 7.12l-4.898.696c-.441.062-.612.636-.282.95l3.522 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 00-.163-.505L3.71 8.745l4.052-.576a.525.525 0 00.393-.288l1.847-3.658 1.846 3.658c.08.157.226.264.393.288l4.053.575-2.907 2.77a.564.564 0 00-.163.506l.694 3.957-3.686-1.894a.503.503 0 00-.461 0z" clip-rule="evenodd"/>');
var BIconStarFill = /*#__PURE__*/makeIcon('StarFill', '<path d="M5.612 17.443c-.386.198-.824-.149-.746-.592l.83-4.73-3.522-3.356c-.33-.314-.16-.888.282-.95l4.898-.696 2.184-4.327c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L10 15.187l-4.389 2.256z"/>');
var BIconStarHalf = /*#__PURE__*/makeIcon('StarHalf', '<path fill-rule="evenodd" d="M7.354 7.119l2.184-4.327A.516.516 0 0110 2.5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0118 8.32a.55.55 0 01-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L10 15.187l-4.389 2.256a.52.52 0 01-.146.05c-.341.06-.668-.254-.6-.642l.83-4.73-3.522-3.356a.55.55 0 01-.172-.403.59.59 0 01.084-.302.513.513 0 01.37-.245l4.898-.696zM10 14.027c.08 0 .16.018.232.056l3.686 1.894-.694-3.957a.564.564 0 01.163-.505l2.907-2.77-4.053-.576a.525.525 0 01-.393-.288l-1.847-3.658-.001.003v9.8z" clip-rule="evenodd"/>');
var BIconStop = /*#__PURE__*/makeIcon('Stop', '<path fill-rule="evenodd" d="M5.5 7A1.5 1.5 0 017 5.5h6A1.5 1.5 0 0114.5 7v6a1.5 1.5 0 01-1.5 1.5H7A1.5 1.5 0 015.5 13V7zM7 6.5a.5.5 0 00-.5.5v6a.5.5 0 00.5.5h6a.5.5 0 00.5-.5V7a.5.5 0 00-.5-.5H7z" clip-rule="evenodd"/>');
var BIconStopFill = /*#__PURE__*/makeIcon('StopFill', '<path d="M7 5.5h6A1.5 1.5 0 0114.5 7v6a1.5 1.5 0 01-1.5 1.5H7A1.5 1.5 0 015.5 13V7A1.5 1.5 0 017 5.5z"/>');
var BIconStopwatch = /*#__PURE__*/makeIcon('Stopwatch', '<path fill-rule="evenodd" d="M10 17a6 6 0 100-12 6 6 0 000 12zm0 1a7 7 0 100-14 7 7 0 000 14z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M10 6.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H6.5a.5.5 0 010-1h3V7a.5.5 0 01.5-.5zm-2.5-4A.5.5 0 018 2h4a.5.5 0 010 1H8a.5.5 0 01-.5-.5z" clip-rule="evenodd"/><path d="M9 3h2v2H9V3z"/>');
var BIconStopwatchFill = /*#__PURE__*/makeIcon('StopwatchFill', '<path fill-rule="evenodd" d="M7.5 2.5A.5.5 0 018 2h4a.5.5 0 010 1h-1v1.07A7.002 7.002 0 0110 18 7 7 0 019 4.07V3H8a.5.5 0 01-.5-.5zm3 4.5a.5.5 0 00-1 0v3.5h-3a.5.5 0 000 1H10a.5.5 0 00.5-.5V7z" clip-rule="evenodd"/>');
var BIconSun = /*#__PURE__*/makeIcon('Sun', '<path d="M5.5 10a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z"/><path fill-rule="evenodd" d="M10.202 2.28a.25.25 0 00-.404 0l-.91 1.255a.25.25 0 01-.334.067L7.232 2.79a.25.25 0 00-.374.155l-.36 1.508a.25.25 0 01-.282.189l-1.532-.244a.25.25 0 00-.286.286l.244 1.532a.25.25 0 01-.189.282l-1.508.36a.25.25 0 00-.155.374l.812 1.322a.25.25 0 01-.067.333l-1.256.91a.25.25 0 000 .405l1.256.91a.25.25 0 01.067.334l-.812 1.322a.25.25 0 00.155.374l1.508.36a.25.25 0 01.19.282l-.245 1.532a.25.25 0 00.286.286l1.532-.244a.25.25 0 01.282.189l.36 1.508a.25.25 0 00.374.155l1.322-.812a.25.25 0 01.333.067l.91 1.256a.25.25 0 00.405 0l.91-1.256a.25.25 0 01.334-.067l1.322.812a.25.25 0 00.374-.155l.36-1.508a.25.25 0 01.282-.19l1.532.245a.25.25 0 00.286-.286l-.244-1.532a.25.25 0 01.189-.282l1.508-.36a.25.25 0 00.155-.374l-.812-1.322a.25.25 0 01.067-.333l1.256-.91a.25.25 0 000-.405l-1.256-.91a.25.25 0 01-.067-.334l.812-1.322a.25.25 0 00-.155-.374l-1.508-.36a.25.25 0 01-.19-.282l.245-1.532a.25.25 0 00-.286-.286l-1.532.244a.25.25 0 01-.282-.189l-.36-1.509a.25.25 0 00-.374-.154l-1.322.812a.25.25 0 01-.333-.067l-.91-1.256zM10 4.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11z" clip-rule="evenodd"/>');
var BIconTable = /*#__PURE__*/makeIcon('Table', '<path fill-rule="evenodd" d="M16 3H4a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M17 6H3V5h14v1z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M7 17.5v-14h1v14H7zm5 0v-14h1v14h-1z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M17 10H3V9h14v1zm0 4H3v-1h14v1z" clip-rule="evenodd"/><path d="M2 4a2 2 0 012-2h12a2 2 0 012 2v2H2V4z"/>');
var BIconTablet = /*#__PURE__*/makeIcon('Tablet', '<path fill-rule="evenodd" d="M14 3.5H6a1 1 0 00-1 1v11a1 1 0 001 1h8a1 1 0 001-1v-11a1 1 0 00-1-1zm-8-1a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2v-11a2 2 0 00-2-2H6z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M10 15.5a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"/>');
var BIconTabletLandscape = /*#__PURE__*/makeIcon('TabletLandscape', '<path fill-rule="evenodd" d="M3.5 6v8a1 1 0 001 1h11a1 1 0 001-1V6a1 1 0 00-1-1h-11a1 1 0 00-1 1zm-1 8a2 2 0 002 2h11a2 2 0 002-2V6a2 2 0 00-2-2h-11a2 2 0 00-2 2v8z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M15.5 10a1 1 0 10-2 0 1 1 0 002 0z" clip-rule="evenodd"/>');
var BIconTag = /*#__PURE__*/makeIcon('Tag', '<path fill-rule="evenodd" d="M2.5 4A1.5 1.5 0 014 2.5h4.586a1.5 1.5 0 011.06.44l7 7a1.5 1.5 0 010 2.12l-4.585 4.586a1.5 1.5 0 01-2.122 0l-7-7a1.5 1.5 0 01-.439-1.06V4zM4 3.5a.5.5 0 00-.5.5v4.586a.5.5 0 00.146.353l7 7a.5.5 0 00.708 0l4.585-4.585a.5.5 0 000-.708l-7-7a.5.5 0 00-.353-.146H4z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M4.5 6.5a2 2 0 114 0 2 2 0 01-4 0zm2-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"/>');
var BIconTagFill = /*#__PURE__*/makeIcon('TagFill', '<path fill-rule="evenodd" d="M4 3a1 1 0 00-1 1v4.586a1 1 0 00.293.707l7 7a1 1 0 001.414 0l4.586-4.586a1 1 0 000-1.414l-7-7A1 1 0 008.586 3H4zm4 3.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" clip-rule="evenodd"/>');
var BIconTerminal = /*#__PURE__*/makeIcon('Terminal', '<path fill-rule="evenodd" d="M16 4H4a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1V5a1 1 0 00-1-1zM4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M8 11a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3A.5.5 0 018 11zM5.146 6.146a.5.5 0 01.708 0l2 2a.5.5 0 010 .708l-2 2a.5.5 0 01-.708-.708L6.793 8.5 5.146 6.854a.5.5 0 010-.708z" clip-rule="evenodd"/>');
var BIconTerminalFill = /*#__PURE__*/makeIcon('TerminalFill', '<path fill-rule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm9.5 5.5h-3a.5.5 0 000 1h3a.5.5 0 000-1zm-6.354-.354L6.793 8.5 5.146 6.854a.5.5 0 11.708-.708l2 2a.5.5 0 010 .708l-2 2a.5.5 0 01-.708-.708z" clip-rule="evenodd"/>');
var BIconTextCenter = /*#__PURE__*/makeIcon('TextCenter', '<path fill-rule="evenodd" d="M6 14.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm-2-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm2-3a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm-2-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>');
var BIconTextIndentLeft = /*#__PURE__*/makeIcon('TextIndentLeft', '<path fill-rule="evenodd" d="M4 5.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm.646 2.146a.5.5 0 01.708 0l2 2a.5.5 0 010 .708l-2 2a.5.5 0 01-.708-.708L6.293 10 4.646 8.354a.5.5 0 010-.708zM9 8.5a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zm-5 3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>');
var BIconTextIndentRight = /*#__PURE__*/makeIcon('TextIndentRight', '<path fill-rule="evenodd" d="M4 5.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm10.646 2.146a.5.5 0 01.708.708L13.707 10l1.647 1.646a.5.5 0 01-.708.708l-2-2a.5.5 0 010-.708l2-2zM4 8.5a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>');
var BIconTextLeft = /*#__PURE__*/makeIcon('TextLeft', '<path fill-rule="evenodd" d="M4 14.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>');
var BIconTextRight = /*#__PURE__*/makeIcon('TextRight', '<path stroke="currentColor" stroke-linecap="round" d="M8.5 14.5h7m-11-3h11m-7-3h7m-11-3h11"/>');
var BIconThreeDots = /*#__PURE__*/makeIcon('ThreeDots', '<path fill-rule="evenodd" d="M5 11.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" clip-rule="evenodd"/>');
var BIconThreeDotsVertical = /*#__PURE__*/makeIcon('ThreeDotsVertical', '<path fill-rule="evenodd" d="M11.5 15a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" clip-rule="evenodd"/>');
var BIconToggleOff = /*#__PURE__*/makeIcon('ToggleOff', '<path fill-rule="evenodd" d="M13 6a4 4 0 010 8h-3a4.992 4.992 0 002-4 4.992 4.992 0 00-2-4h3zm-6 8a4 4 0 110-8 4 4 0 010 8zm-5-4a5 5 0 005 5h6a5 5 0 000-10H7a5 5 0 00-5 5z" clip-rule="evenodd"/>');
var BIconToggleOn = /*#__PURE__*/makeIcon('ToggleOn', '<path fill-rule="evenodd" d="M7 5a5 5 0 000 10h6a5 5 0 000-10H7zm6 9a4 4 0 100-8 4 4 0 000 8z" clip-rule="evenodd"/>');
var BIconToggles = /*#__PURE__*/makeIcon('Toggles', '<path fill-rule="evenodd" d="M13.5 3h-7a2.5 2.5 0 000 5h7a2.5 2.5 0 000-5zm-7-1a3.5 3.5 0 100 7h7a3.5 3.5 0 100-7h-7zm0 9a3.5 3.5 0 100 7h7a3.5 3.5 0 100-7h-7zm7 6a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M10 5.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zM6.5 8a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" clip-rule="evenodd"/>');
var BIconTools = /*#__PURE__*/makeIcon('Tools', '<path fill-rule="evenodd" d="M2 3l1-1 3.081 2.2a1 1 0 01.419.815v.07a1 1 0 00.293.708L12.5 11.5l.914-.305a1 1 0 011.023.242l3.356 3.356a1 1 0 010 1.414l-1.586 1.586a1 1 0 01-1.414 0l-3.356-3.356a1 1 0 01-.242-1.023l.305-.914-5.707-5.707a1 1 0 00-.707-.293h-.071a1 1 0 01-.814-.419L2 3zm11.354 9.646a.5.5 0 00-.708.708l3 3a.5.5 0 00.708-.708l-3-3z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M17.898 4.223a3.003 3.003 0 01-3.679 3.674L7.878 14.15a3 3 0 11-2.027-2.027l6.252-6.341a3 3 0 013.675-3.68l-2.142 2.142L14 6l1.757.364 2.141-2.141zm-13.37 9.019L5 13l.471.242.529.026.287.445.445.287.026.529L7 15l-.242.471-.026.529-.445.287-.287.445-.529.026L5 17l-.471-.242L4 16.732l-.287-.445L3.268 16l-.026-.529L3 15l.242-.471.026-.529.445-.287.287-.445.529-.026z" clip-rule="evenodd"/>');
var BIconTrash = /*#__PURE__*/makeIcon('Trash', '<path d="M7.5 7.5A.5.5 0 018 8v6a.5.5 0 01-1 0V8a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V8a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V8z"/><path fill-rule="evenodd" d="M16.5 5a1 1 0 01-1 1H15v9a2 2 0 01-2 2H7a2 2 0 01-2-2V6h-.5a1 1 0 01-1-1V4a1 1 0 011-1H8a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM6.118 6L6 6.059V15a1 1 0 001 1h6a1 1 0 001-1V6.059L13.882 6H6.118zM4.5 5V4h11v1h-11z" clip-rule="evenodd"/>');
var BIconTrashFill = /*#__PURE__*/makeIcon('TrashFill', '<path fill-rule="evenodd" d="M4.5 3a1 1 0 00-1 1v1a1 1 0 001 1H5v9a2 2 0 002 2h6a2 2 0 002-2V6h.5a1 1 0 001-1V4a1 1 0 00-1-1H12a1 1 0 00-1-1H9a1 1 0 00-1 1H4.5zm3 4a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7a.5.5 0 01.5-.5zM10 7a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7A.5.5 0 0110 7zm3 .5a.5.5 0 00-1 0v7a.5.5 0 001 0v-7z" clip-rule="evenodd"/>');
var BIconTriangle = /*#__PURE__*/makeIcon('Triangle', '<path fill-rule="evenodd" d="M9.938 4.016a.146.146 0 00-.054.057L3.027 15.74a.176.176 0 00-.002.183c.016.03.037.05.054.06.015.01.034.017.066.017h13.713a.12.12 0 00.066-.017.163.163 0 00.055-.06.176.176 0 00-.003-.183L10.12 4.073a.146.146 0 00-.054-.057.13.13 0 00-.063-.016.13.13 0 00-.064.016zm1.043-.45a1.13 1.13 0 00-1.96 0L2.166 15.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L10.982 3.566z" clip-rule="evenodd"/>');
var BIconTriangleFill = /*#__PURE__*/makeIcon('TriangleFill', '<path fill-rule="evenodd" d="M9.022 3.566a1.13 1.13 0 011.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H3.144c-.889 0-1.437-.99-.98-1.767L9.022 3.566z" clip-rule="evenodd"/>');
var BIconTriangleHalf = /*#__PURE__*/makeIcon('TriangleHalf', '<path fill-rule="evenodd" d="M9.938 4.016a.146.146 0 00-.054.057L3.027 15.74a.176.176 0 00-.002.183c.016.03.037.05.054.06.015.01.034.017.066.017l6.857-.017V4a.13.13 0 00-.064.016zm1.043-.45a1.13 1.13 0 00-1.96 0L2.166 15.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L10.982 3.566z" clip-rule="evenodd"/>');
var BIconTrophy = /*#__PURE__*/makeIcon('Trophy', '<path d="M5 3h10c-.495 3.467-.5 10-5 10S5.495 6.467 5 3zm0 15a1 1 0 011-1h8a1 1 0 011 1H5zm2-1a1 1 0 011-1h4a1 1 0 011 1H7z"/><path fill-rule="evenodd" d="M14.5 5a2 2 0 100 4 2 2 0 000-4zm-3 2a3 3 0 116 0 3 3 0 01-6 0zm-6-2a2 2 0 100 4 2 2 0 000-4zm-3 2a3 3 0 116 0 3 3 0 01-6 0z" clip-rule="evenodd"/><path d="M9 12h2v4H9v-4z"/><path d="M12 13c0 .552-.895 1-2 1s-2-.448-2-1 .895-1 2-1 2 .448 2 1z"/>');
var BIconTv = /*#__PURE__*/makeIcon('Tv', '<path fill-rule="evenodd" d="M2.216 6H1.5v-.04l.005-.083a2.957 2.957 0 01.298-1.102c.154-.309.394-.633.763-.88C2.94 3.648 3.413 3.5 4 3.5h12.039l.083.005a2.958 2.958 0 011.102.298c.309.154.633.394.88.763.248.373.396.847.396 1.434v6H18h.5v.039l-.005.083a2.957 2.957 0 01-.298 1.102 2.257 2.257 0 01-.763.88c-.373.248-.847.396-1.434.396H3.961l-.083-.005a2.956 2.956 0 01-1.102-.298 2.254 2.254 0 01-.88-.763C1.648 13.06 1.5 12.588 1.5 12V6h.716zm.284.002v-.008l.003-.044a1.959 1.959 0 01.195-.726c.095-.191.23-.367.423-.495.19-.127.466-.229.879-.229h12.006l.044.003a1.958 1.958 0 01.726.195c.191.095.367.23.495.423.127.19.229.466.229.879v6.006l-.003.044a1.959 1.959 0 01-.195.726c-.095.191-.23.367-.423.495-.19.127-.466.229-.879.229H3.994l-.044-.003a1.96 1.96 0 01-.726-.195 1.256 1.256 0 01-.495-.423c-.127-.19-.229-.466-.229-.879V6.002zM4.003 13.5zm.497 2A.5.5 0 015 15h10a.5.5 0 010 1H5a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>');
var BIconTvFill = /*#__PURE__*/makeIcon('TvFill', '<path fill-rule="evenodd" d="M4.5 15.5A.5.5 0 015 15h10a.5.5 0 010 1H5a.5.5 0 01-.5-.5zM4 4h12s2 0 2 2v6s0 2-2 2H4s-2 0-2-2V6s0-2 2-2z" clip-rule="evenodd"/>');
var BIconType = /*#__PURE__*/makeIcon('Type', '<path d="M4.244 15.081l.944-2.803H8.66l.944 2.803h1.257L7.54 5.75H6.322L3 15.081h1.244zm2.7-7.923l1.395 4.157h-2.83L6.91 7.158h.034zm9.146 7.027h.035v.896h1.128v-4.956c0-1.51-1.114-2.345-2.646-2.345-1.736 0-2.59.916-2.666 2.174h1.108c.068-.718.595-1.19 1.517-1.19.971 0 1.518.52 1.518 1.463v.732H14.19c-1.647.007-2.522.8-2.522 2.058 0 1.319.957 2.18 2.345 2.18 1.06 0 1.716-.43 2.078-1.011zm-1.763.035c-.752 0-1.456-.397-1.456-1.244 0-.65.424-1.115 1.408-1.115h1.805v.834c0 .896-.752 1.525-1.757 1.525z"/>');
var BIconTypeBold = /*#__PURE__*/makeIcon('TypeBold', '<path d="M10.21 15c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 001.852-2.14c0-1.51-1.162-2.46-3.014-2.46H5.843V15h4.368zM7.908 6.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H7.908V6.673zm0 6.788v-2.864h1.73c1.216 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H7.907z"/>');
var BIconTypeH1 = /*#__PURE__*/makeIcon('TypeH1', '<path d="M10.637 15V5.669H9.379V9.62H4.758V5.67H3.5V15h1.258v-4.273h4.62V15h1.259zm5.329 0V5.669h-1.244L12.5 7.316v1.265l2.16-1.565h.062V15h1.244z"/>');
var BIconTypeH2 = /*#__PURE__*/makeIcon('TypeH2', '<path d="M9.638 15V5.669H8.38V9.62H3.759V5.67H2.5V15h1.258v-4.273h4.62V15h1.259zm3.022-6.733v-.048c0-.889.63-1.668 1.716-1.668.957 0 1.675.608 1.675 1.572 0 .855-.554 1.504-1.067 2.085l-3.513 3.999V15H17.5v-1.094h-4.245v-.075l2.481-2.844c.875-.998 1.586-1.784 1.586-2.953 0-1.463-1.155-2.556-2.919-2.556-1.941 0-2.966 1.326-2.966 2.74v.049h1.223z"/>');
var BIconTypeH3 = /*#__PURE__*/makeIcon('TypeH3', '<path d="M9.637 15V5.669H8.379V9.62H3.758V5.67H2.5V15h1.258v-4.273h4.62V15h1.259zm3.625-4.273h1.018c1.142 0 1.935.67 1.949 1.675.013 1.005-.78 1.737-2.01 1.73-1.08-.007-1.853-.588-1.935-1.32h-1.176c.069 1.327 1.224 2.386 3.083 2.386 1.935 0 3.343-1.155 3.309-2.789-.027-1.51-1.251-2.16-2.037-2.249v-.068c.704-.123 1.764-.91 1.723-2.229-.035-1.353-1.176-2.4-2.954-2.385-1.873.006-2.857 1.162-2.898 2.358h1.196c.062-.69.711-1.299 1.696-1.299.998 0 1.695.622 1.695 1.525.007.922-.718 1.592-1.695 1.592h-.964v1.073z"/>');
var BIconTypeItalic = /*#__PURE__*/makeIcon('TypeItalic', '<path d="M9.991 13.674l1.538-7.219c.123-.595.246-.71 1.347-.807l.11-.52H9.211l-.11.52c1.06.096 1.128.212 1.005.807L8.57 13.674c-.123.595-.246.71-1.346.806l-.11.52h3.774l.11-.52c-1.06-.095-1.129-.211-1.006-.806z"/>');
var BIconTypeStrikethrough = /*#__PURE__*/makeIcon('TypeStrikethrough', '<path d="M10.527 15.164c-2.153 0-3.589-1.107-3.705-2.81h1.23c.144 1.06 1.129 1.703 2.544 1.703 1.34 0 2.31-.705 2.31-1.675 0-.827-.547-1.374-1.914-1.675l-.946-.207h3.45c.468.437.675.994.675 1.697 0 1.826-1.436 2.967-3.644 2.967zM8.602 8.5H7.167a2.776 2.776 0 01-.099-.76c0-1.627 1.436-2.768 3.48-2.768 1.969 0 3.39 1.175 3.445 2.85h-1.23c-.11-1.08-.964-1.743-2.25-1.743-1.23 0-2.18.602-2.18 1.607 0 .31.083.581.27.814z"/><path fill-rule="evenodd" d="M17 10.5H3v-1h14v1z" clip-rule="evenodd"/>');
var BIconTypeUnderline = /*#__PURE__*/makeIcon('TypeUnderline', '<path d="M7.313 5.136h-1.23v6.405c0 2.105 1.47 3.623 3.917 3.623s3.917-1.518 3.917-3.623V5.136h-1.23v6.323c0 1.49-.978 2.57-2.687 2.57-1.709 0-2.687-1.08-2.687-2.57V5.136z"/><path fill-rule="evenodd" d="M14.5 17h-9v-1h9v1z" clip-rule="evenodd"/>');
var BIconUnlock = /*#__PURE__*/makeIcon('Unlock', '<path fill-rule="evenodd" d="M11.655 9H4.333c-.264 0-.398.068-.471.121a.73.73 0 00-.224.296 1.626 1.626 0 00-.138.59V15c0 .342.076.531.14.635.064.106.151.18.256.237a1.122 1.122 0 00.436.127l.013.001h7.322c.264 0 .398-.068.471-.121a.73.73 0 00.224-.296 1.627 1.627 0 00.138-.59V10c0-.342-.076-.531-.14-.635a.658.658 0 00-.255-.237 1.123 1.123 0 00-.45-.128zm.012-1H4.333C2.5 8 2.5 10 2.5 10v5c0 2 1.833 2 1.833 2h7.334c1.833 0 1.833-2 1.833-2v-5c0-2-1.833-2-1.833-2zM10.5 5a3.5 3.5 0 117 0v3h-1V5a2.5 2.5 0 00-5 0v3h-1V5z" clip-rule="evenodd"/>');
var BIconUnlockFill = /*#__PURE__*/makeIcon('UnlockFill', '<path d="M2.5 10a2 2 0 012-2h7a2 2 0 012 2v5a2 2 0 01-2 2h-7a2 2 0 01-2-2v-5z"/><path fill-rule="evenodd" d="M10.5 5a3.5 3.5 0 117 0v3h-1V5a2.5 2.5 0 00-5 0v3h-1V5z" clip-rule="evenodd"/>');
var BIconUpload = /*#__PURE__*/makeIcon('Upload', '<path fill-rule="evenodd" d="M2.5 10a.5.5 0 01.5.5V14a1 1 0 001 1h12a1 1 0 001-1v-3.5a.5.5 0 011 0V14a2 2 0 01-2 2H4a2 2 0 01-2-2v-3.5a.5.5 0 01.5-.5zM7 6.854a.5.5 0 00.707 0L10 4.56l2.293 2.293A.5.5 0 1013 6.146L10.354 3.5a.5.5 0 00-.708 0L7 6.146a.5.5 0 000 .708z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M10 4a.5.5 0 01.5.5v8a.5.5 0 01-1 0v-8A.5.5 0 0110 4z" clip-rule="evenodd"/>');
var BIconVolumeDown = /*#__PURE__*/makeIcon('VolumeDown', '<path fill-rule="evenodd" d="M10.717 5.55A.5.5 0 0111 6v8a.5.5 0 01-.812.39L7.825 12.5H5.5A.5.5 0 015 12V8a.5.5 0 01.5-.5h2.325l2.363-1.89a.5.5 0 01.529-.06zM10 7.04L8.312 8.39A.5.5 0 018 8.5H6v3h2a.5.5 0 01.312.11L10 12.96V7.04z" clip-rule="evenodd"/><path d="M12.707 13.182A4.486 4.486 0 0014.025 10a4.486 4.486 0 00-1.318-3.182L12 7.525A3.489 3.489 0 0113.025 10c0 .966-.392 1.841-1.025 2.475l.707.707z"/>');
var BIconVolumeDownFill = /*#__PURE__*/makeIcon('VolumeDownFill', '<path fill-rule="evenodd" d="M10.717 5.55A.5.5 0 0111 6v8a.5.5 0 01-.812.39L7.825 12.5H5.5A.5.5 0 015 12V8a.5.5 0 01.5-.5h2.325l2.363-1.89a.5.5 0 01.529-.06z" clip-rule="evenodd"/><path d="M12.707 13.182A4.486 4.486 0 0014.025 10a4.486 4.486 0 00-1.318-3.182L12 7.525A3.489 3.489 0 0113.025 10c0 .966-.392 1.841-1.025 2.475l.707.707z"/>');
var BIconVolumeMute = /*#__PURE__*/makeIcon('VolumeMute', '<path fill-rule="evenodd" d="M8.717 5.55A.5.5 0 019 6v8a.5.5 0 01-.812.39L5.825 12.5H3.5A.5.5 0 013 12V8a.5.5 0 01.5-.5h2.325l2.363-1.89a.5.5 0 01.529-.06zM8 7.04L6.312 8.39A.5.5 0 016 8.5H4v3h2a.5.5 0 01.312.11L8 12.96V7.04zm7.854.606a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708l4-4a.5.5 0 01.708 0z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M11.146 7.646a.5.5 0 000 .708l4 4a.5.5 0 00.708-.708l-4-4a.5.5 0 00-.708 0z" clip-rule="evenodd"/>');
var BIconVolumeMuteFill = /*#__PURE__*/makeIcon('VolumeMuteFill', '<path fill-rule="evenodd" d="M8.717 5.55A.5.5 0 019 6v8a.5.5 0 01-.812.39L5.825 12.5H3.5A.5.5 0 013 12V8a.5.5 0 01.5-.5h2.325l2.363-1.89a.5.5 0 01.529-.06zm7.137 1.596a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708l4-4a.5.5 0 01.708 0z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M11.146 7.146a.5.5 0 000 .708l4 4a.5.5 0 00.708-.708l-4-4a.5.5 0 00-.708 0z" clip-rule="evenodd"/>');
var BIconVolumeUp = /*#__PURE__*/makeIcon('VolumeUp', '<path fill-rule="evenodd" d="M8.717 5.55A.5.5 0 019 6v8a.5.5 0 01-.812.39L5.825 12.5H3.5A.5.5 0 013 12V8a.5.5 0 01.5-.5h2.325l2.363-1.89a.5.5 0 01.529-.06zM8 7.04L6.312 8.39A.5.5 0 016 8.5H4v3h2a.5.5 0 01.312.11L8 12.96V7.04z" clip-rule="evenodd"/><path d="M13.536 16.01a8.473 8.473 0 002.49-6.01 8.473 8.473 0 00-2.49-6.01l-.708.707A7.476 7.476 0 0115.025 10c0 2.071-.84 3.946-2.197 5.303l.708.707z"/><path d="M12.121 14.596A6.48 6.48 0 0014.025 10a6.48 6.48 0 00-1.904-4.596l-.707.707A5.483 5.483 0 0113.025 10a5.483 5.483 0 01-1.61 3.89l.706.706z"/><path d="M10.707 13.182A4.486 4.486 0 0012.025 10a4.486 4.486 0 00-1.318-3.182L10 7.525A3.489 3.489 0 0111.025 10c0 .966-.392 1.841-1.025 2.475l.707.707z"/>');
var BIconVolumeUpFill = /*#__PURE__*/makeIcon('VolumeUpFill', '<path d="M13.536 16.01a8.473 8.473 0 002.49-6.01 8.473 8.473 0 00-2.49-6.01l-.708.707A7.476 7.476 0 0115.025 10c0 2.071-.84 3.946-2.197 5.303l.708.707z"/><path d="M12.121 14.596A6.48 6.48 0 0014.025 10a6.48 6.48 0 00-1.904-4.596l-.707.707A5.483 5.483 0 0113.025 10a5.483 5.483 0 01-1.61 3.89l.706.706z"/><path d="M10.707 13.182A4.486 4.486 0 0012.025 10a4.486 4.486 0 00-1.318-3.182L10 7.525A3.489 3.489 0 0111.025 10c0 .966-.392 1.841-1.025 2.475l.707.707z"/><path fill-rule="evenodd" d="M8.717 5.55A.5.5 0 019 6v8a.5.5 0 01-.812.39L5.825 12.5H3.5A.5.5 0 013 12V8a.5.5 0 01.5-.5h2.325l2.363-1.89a.5.5 0 01.529-.06z" clip-rule="evenodd"/>');
var BIconWallet = /*#__PURE__*/makeIcon('Wallet', '<path fill-rule="evenodd" d="M3.5 5a.5.5 0 00-.5.5v2h5a.5.5 0 01.5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542.637 0 .987-.254 1.194-.542.226-.314.306-.705.306-.958a.5.5 0 01.5-.5h5v-2a.5.5 0 00-.5-.5h-13zM17 8.5h-4.551a2.678 2.678 0 01-.443 1.042c-.393.546-1.043.958-2.006.958-.963 0-1.613-.412-2.006-.958A2.679 2.679 0 017.551 8.5H3v6a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-6zm-15-3A1.5 1.5 0 013.5 4h13A1.5 1.5 0 0118 5.5v9a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 012 14.5v-9z" clip-rule="evenodd"/>');
var BIconWatch = /*#__PURE__*/makeIcon('Watch', '<path fill-rule="evenodd" d="M6 16.333v-1.86A5.985 5.985 0 014 10c0-1.777.772-3.374 2-4.472V3.667C6 2.747 6.746 2 7.667 2h4.666C13.253 2 14 2.746 14 3.667v1.86A5.985 5.985 0 0116 10a5.985 5.985 0 01-2 4.472v1.861c0 .92-.746 1.667-1.667 1.667H7.667C6.747 18 6 17.254 6 16.333zM15 10a5 5 0 10-10 0 5 5 0 0010 0z" clip-rule="evenodd"/><rect width="1" height="2" x="15.5" y="9" rx=".5"/><path fill-rule="evenodd" d="M10 6.5a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H8a.5.5 0 010-1h1.5V7a.5.5 0 01.5-.5z" clip-rule="evenodd"/>');
var BIconWifi = /*#__PURE__*/makeIcon('Wifi', '<path fill-rule="evenodd" d="M8.858 13.858A1.991 1.991 0 0110 13.5c.425 0 .818.132 1.142.358L10 15l-1.142-1.142z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M9.731 14.024l.269.269.269-.269a1.506 1.506 0 00-.538 0zm-1.159-.576A2.49 2.49 0 0110 13c.53 0 1.023.165 1.428.448a.5.5 0 01.068.763l-1.143 1.143a.5.5 0 01-.707 0L8.504 14.21a.5.5 0 01.354-.853v.5l-.286-.41zM10 11.5a4.478 4.478 0 00-2.7.9.5.5 0 01-.6-.8c.919-.69 2.062-1.1 3.3-1.1s2.381.41 3.3 1.1a.5.5 0 01-.6.8 4.478 4.478 0 00-2.7-.9zm0-3c-1.833 0-3.51.657-4.814 1.748a.5.5 0 11-.642-.766A8.468 8.468 0 0110 7.5c2.076 0 3.98.745 5.456 1.982a.5.5 0 01-.642.766A7.468 7.468 0 0010 8.5z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M10 5.5c-2.657 0-5.082.986-6.932 2.613a.5.5 0 11-.66-.75A11.458 11.458 0 0110 4.5c2.91 0 5.567 1.08 7.592 2.862a.5.5 0 11-.66.751A10.458 10.458 0 0010 5.5z" clip-rule="evenodd"/>');
var BIconWindow = /*#__PURE__*/makeIcon('Window', '<path fill-rule="evenodd" d="M16 4H4a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1V5a1 1 0 00-1-1zM4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M17 8H3V7h14v1z" clip-rule="evenodd"/><path d="M5 5.5a.5.5 0 11-1 0 .5.5 0 011 0zm1.5 0a.5.5 0 11-1 0 .5.5 0 011 0zm1.5 0a.5.5 0 11-1 0 .5.5 0 011 0z"/>');
var BIconWrench = /*#__PURE__*/makeIcon('Wrench', '<path fill-rule="evenodd" d="M2.102 4.223A3.004 3.004 0 005 8c.27 0 .532-.036.78-.103l6.342 6.252A3.003 3.003 0 0015 18a3 3 0 10-.851-5.878L7.897 5.781A3.004 3.004 0 004.223 2.1l2.141 2.142L6 6l-1.757.364-2.141-2.141zm13.37 9.019L15 13l-.471.242-.529.026-.287.445-.445.287-.026.529L13 15l.242.471.026.529.445.287.287.445.529.026L15 17l.471-.242.529-.026.287-.445.445-.287.026-.529L17 15l-.242-.471-.026-.529-.445-.287-.287-.445-.529-.026z" clip-rule="evenodd"/>');
var BIconX = /*#__PURE__*/makeIcon('X', '<path fill-rule="evenodd" d="M5.646 5.646a.5.5 0 000 .708l8 8a.5.5 0 00.708-.708l-8-8a.5.5 0 00-.708 0z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M14.354 5.646a.5.5 0 010 .708l-8 8a.5.5 0 01-.708-.708l8-8a.5.5 0 01.708 0z" clip-rule="evenodd"/>');
var BIconXCircle = /*#__PURE__*/makeIcon('XCircle', '<path fill-rule="evenodd" d="M10 17a7 7 0 100-14 7 7 0 000 14zm0 1a8 8 0 100-16 8 8 0 000 16z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12.646 13.354l-6-6 .708-.708 6 6-.708.708z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M7.354 13.354l6-6-.708-.708-6 6 .708.708z" clip-rule="evenodd"/>');
var BIconXCircleFill = /*#__PURE__*/makeIcon('XCircleFill', '<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7.354 6.646L10 9.293l2.646-2.647a.5.5 0 01.708.708L10.707 10l2.647 2.646a.5.5 0 01-.708.708L10 10.707l-2.646 2.647a.5.5 0 01-.708-.708L9.293 10 6.646 7.354a.5.5 0 11.708-.708z" clip-rule="evenodd"/>');
var BIconXOctagon = /*#__PURE__*/makeIcon('XOctagon', '<path fill-rule="evenodd" d="M6.54 2.146A.5.5 0 016.893 2h6.214a.5.5 0 01.353.146l4.394 4.394a.5.5 0 01.146.353v6.214a.5.5 0 01-.146.353l-4.394 4.394a.5.5 0 01-.353.146H6.893a.5.5 0 01-.353-.146L2.146 13.46A.5.5 0 012 13.107V6.893a.5.5 0 01.146-.353L6.54 2.146zM7.1 3L3 7.1v5.8L7.1 17h5.8l4.1-4.1V7.1L12.9 3H7.1z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M9.293 10L6.646 7.354l.708-.708L10 9.293l2.646-2.647.708.708L10.707 10l2.647 2.646-.707.708L10 10.707l-2.646 2.647-.708-.707L9.293 10z" clip-rule="evenodd"/>');
var BIconXOctagonFill = /*#__PURE__*/makeIcon('XOctagonFill', '<path fill-rule="evenodd" d="M13.46 2.146A.5.5 0 0013.107 2H6.893a.5.5 0 00-.353.146L2.146 6.54A.5.5 0 002 6.893v6.214a.5.5 0 00.146.353l4.394 4.394a.5.5 0 00.353.146h6.214a.5.5 0 00.353-.146l4.394-4.394a.5.5 0 00.146-.353V6.893a.5.5 0 00-.146-.353L13.46 2.146zm-6.106 4.5L10 9.293l2.646-2.647a.5.5 0 01.708.708L10.707 10l2.647 2.646a.5.5 0 01-.708.708L10 10.707l-2.646 2.647a.5.5 0 01-.708-.708L9.293 10 6.646 7.354a.5.5 0 11.708-.708z" clip-rule="evenodd"/>');
var BIconXSquare = /*#__PURE__*/makeIcon('XSquare', '<path fill-rule="evenodd" d="M16 3H4a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M9.293 10L6.646 7.354l.708-.708L10 9.293l2.646-2.647.708.708L10.707 10l2.647 2.646-.708.708L10 10.707l-2.646 2.647-.708-.707L9.293 10z" clip-rule="evenodd"/>');
var BIconXSquareFill = /*#__PURE__*/makeIcon('XSquareFill', '<path fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm3.354 4.646L10 9.293l2.646-2.647a.5.5 0 01.708.708L10.707 10l2.647 2.646a.5.5 0 01-.708.708L10 10.707l-2.646 2.647a.5.5 0 01-.708-.708L9.293 10 6.646 7.354a.5.5 0 11.708-.708z" clip-rule="evenodd"/>'); // --- END AUTO-GENERATED FILE ---

var BIconstack = /*#__PURE__*/Vue.extend({
  name: 'BIconstack',
  functional: true,
  props: _objectSpread2({}, commonIconProps),
  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props,
        children = _ref.children;
    return h(BVIconBase, mergeData(data, {
      staticClass: 'b-iconstack',
      props: _objectSpread2({}, props, {
        stacked: false
      })
    }), children);
  }
});

var NAME$6 = 'BCalendar'; // Key Codes

var UP = KEY_CODES.UP,
    DOWN = KEY_CODES.DOWN,
    LEFT = KEY_CODES.LEFT,
    RIGHT = KEY_CODES.RIGHT,
    PAGEUP = KEY_CODES.PAGEUP,
    PAGEDOWN = KEY_CODES.PAGEDOWN,
    HOME = KEY_CODES.HOME,
    END = KEY_CODES.END,
    ENTER = KEY_CODES.ENTER,
    SPACE = KEY_CODES.SPACE; // --- BCalendar component ---
// @vue/component

var BCalendar = Vue.extend({
  name: NAME$6,
  mixins: [idMixin, normalizeSlotMixin],
  model: {
    // Even though this is the default that Vue assumes, we need
    // to add it for the docs to reflect that this is the model
    // And also for some validation libraries to work
    prop: 'value',
    event: 'input'
  },
  props: {
    value: {
      type: [String, Date] // default: null

    },
    valueAsDate: {
      // Always return the `v-model` value as a date object
      type: Boolean,
      default: false
    },
    initialDate: {
      // This specifies the calendar year/month/day that will be shown when
      // first opening the datepicker if no v-model value is provided
      // Default is the current date (or `min`/`max`)
      type: [String, Date],
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    min: {
      type: [String, Date] // default: null

    },
    max: {
      type: [String, Date] // default: null

    },
    dateDisabledFn: {
      type: Function // default: null

    },
    startWeekday: {
      // `0` (Sunday), `1` (Monday), ... `6` (Saturday)
      // Day of week to start calendar on
      type: [Number, String],
      default: 0
    },
    locale: {
      // Locale(s) to use
      // Default is to use page/browser default setting
      type: [String, Array] // default: null

    },
    direction: {
      // 'ltr', 'rtl', or `null` (for auto detect)
      type: String // default: null

    },
    selectedVariant: {
      // Variant color to use for the selected date
      type: String,
      default: 'primary'
    },
    todayVariant: {
      // Variant color to use for today's date (defaults to `variant`)
      type: String // default: null

    },
    noHighlightToday: {
      // Disable highlighting today's date
      type: Boolean,
      default: false
    },
    dateInfoFn: {
      // Function to set a class of (classes) on the date cell
      // if passed a string or an array
      // TODO:
      //   If the function returns an object, look for class prop for classes,
      //   and other props for handling events/details/descriptions
      type: Function // default: null

    },
    width: {
      // Has no effect if prop `block` is set
      type: String,
      default: '270px'
    },
    block: {
      // Makes calendar the full width of its parent container
      type: Boolean,
      default: false
    },
    hideHeader: {
      // When true makes the selected date header `sr-only`
      type: Boolean,
      default: false
    },
    hidden: {
      // When `true`, renders a comment node, but keeps the component instance active
      // Mainly for <b-form-date>, so that we can get the component's value and locale
      // But we might just use separate date formatters, using the resolved locale
      // (adjusted for the gregorian calendar)
      type: Boolean,
      default: false
    },
    ariaControls: {
      type: String // default: null

    },
    roleDescription: {
      type: String // default: null

    },
    // Labels for buttons and keyboard shortcuts
    labelPrevYear: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$6, 'labelPrevYear');
      }
    },
    labelPrevMonth: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$6, 'labelPrevMonth');
      }
    },
    labelCurrentMonth: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$6, 'labelCurrentMonth');
      }
    },
    labelNextMonth: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$6, 'labelNextMonth');
      }
    },
    labelNextYear: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$6, 'labelNextYear');
      }
    },
    labelToday: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$6, 'labelToday');
      }
    },
    labelSelected: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$6, 'labelSelected');
      }
    },
    labelNoDateSelected: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$6, 'labelNoDateSelected');
      }
    },
    labelCalendar: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$6, 'labelCalendar');
      }
    },
    labelNav: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$6, 'labelNav');
      }
    },
    labelHelp: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$6, 'labelHelp');
      }
    },
    dateFormatOptions: {
      // `Intl.DateTimeFormat` object
      type: Object,
      default: function _default() {
        return {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          weekday: 'long'
        };
      }
    }
  },
  data: function data() {
    var selected = formatYMD(this.value) || '';
    return {
      // Selected date
      selectedYMD: selected,
      // Date in calendar grid that has `tabindex` of `0`
      activeYMD: selected || formatYMD(constrainDate(this.initialDate || this.getToday()), this.min, this.max),
      // Will be true if the calendar grid has/contains focus
      gridHasFocus: false,
      // Flag to enable the `aria-live` region(s) after mount
      // to prevent screen reader "outbursts" when mounting
      isLive: false
    };
  },
  computed: {
    // TODO: Use computed props to convert `YYYY-MM-DD` to `Date` object
    selectedDate: function selectedDate() {
      // Selected as a `Date` object
      return parseYMD(this.selectedYMD);
    },
    activeDate: function activeDate() {
      // Active as a `Date` object
      return parseYMD(this.activeYMD);
    },
    computedMin: function computedMin() {
      return parseYMD(this.min);
    },
    computedMax: function computedMax() {
      return parseYMD(this.max);
    },
    computedWeekStarts: function computedWeekStarts() {
      // `startWeekday` is a prop (constrained to `0` through `6`)
      return Math.max(toInteger(this.startWeekday) || 0, 0) % 7;
    },
    computedLocale: function computedLocale() {
      // Returns the resolved locale used by the calendar
      return resolveLocale(concat(this.locale).filter(identity), 'gregory');
    },
    calendarLocale: function calendarLocale() {
      // This locale enforces the gregorian calendar (for use in formatter functions)
      // Needed because IE 11 resolves `ar-IR` as islamic-civil calendar
      // and IE 11 (and some other browsers) do not support the `calendar` option
      // And we currently only support the gregorian calendar
      var fmt = new Intl.DateTimeFormat(this.computedLocale, {
        calendar: 'gregory'
      });
      var calendar = fmt.resolvedOptions().calendar;
      var locale = fmt.resolvedOptions().locale;
      /* istanbul ignore if: mainly for IE 11 and a few other browsers, hard to test in JSDOM */

      if (calendar !== 'gregory') {
        // Ensure the locale requests the gregorian calendar
        // Mainly for IE 11, and currently we can't handle non-gregorian calendars
        // TODO: Should we always return this value?
        locale = locale.replace(/-u-.+$/i, '').concat('-u-ca-gregory');
      }

      return locale;
    },
    calendarYear: function calendarYear() {
      return this.activeDate.getFullYear();
    },
    calendarMonth: function calendarMonth() {
      return this.activeDate.getMonth();
    },
    calendarFirstDay: function calendarFirstDay() {
      return createDate(this.calendarYear, this.calendarMonth, 1);
    },
    calendarDaysInMonth: function calendarDaysInMonth() {
      // We create a new date as to not mutate the original
      var date = createDate(this.calendarFirstDay);
      date.setMonth(date.getMonth() + 1, 0);
      return date.getDate();
    },
    computedVariant: function computedVariant() {
      return "btn-".concat(this.selectedVariant || 'primary');
    },
    computedTodayVariant: function computedTodayVariant() {
      return "btn-outline-".concat(this.todayVariant || this.selectedVariant || 'primary');
    },
    isRTL: function isRTL() {
      // `true` if the language requested is RTL
      var dir = toString$1(this.direction).toLowerCase();

      if (dir === 'rtl') {
        /* istanbul ignore next */
        return true;
      } else if (dir === 'ltr') {
        /* istanbul ignore next */
        return false;
      }

      return isLocaleRTL(this.computedLocale);
    },
    context: function context() {
      var selectedYMD = this.selectedYMD;
      var selectedDate = parseYMD(selectedYMD);
      var activeYMD = this.activeYMD;
      var activeDate = parseYMD(activeYMD);
      return {
        // The current value of the `v-model`
        selectedYMD: selectedYMD,
        selectedDate: selectedDate,
        selectedFormatted: selectedDate ? this.formatDateString(selectedDate) : this.labelNoDateSelected,
        // Which date cell is considered active due to navigation
        activeYMD: activeYMD,
        activeDate: activeDate,
        activeFormatted: activeDate ? this.formatDateString(activeDate) : '',
        // `true` if the date is disabled (when using keyboard navigation)
        disabled: this.dateDisabled(activeDate),
        // Locales used in formatting dates
        locale: this.computedLocale,
        calendarLocale: this.calendarLocale,
        rtl: this.isRTL
      };
    },
    // Computed props that return a function reference
    dateOutOfRange: function dateOutOfRange() {
      // Check wether a date is within the min/max range
      // returns a new function ref if the pops change
      // We do this as we need to trigger the calendar computed prop
      // to update when these props update
      var min = this.computedMin;
      var max = this.computedMax;
      return function (date) {
        // Handle both `YYYY-MM-DD` and `Date` objects
        date = parseYMD(date);
        return min && date < min || max && date > max;
      };
    },
    dateDisabled: function dateDisabled() {
      // Returns a function for validating if a date is within range
      // We grab this variables first to ensure a new function ref
      // is generated when the props value changes
      // We do this as we need to trigger the calendar computed prop
      // to update when these props update
      var rangeFn = this.dateOutOfRange;
      var disabledFn = isFunction(this.dateDisabledFn) ? this.dateDisabledFn : function () {
        return false;
      }; // Return the function ref

      return function (date) {
        // Handle both `YYYY-MM-DD` and `Date` objects
        date = parseYMD(date);
        var ymd = formatYMD(date);
        return !!(rangeFn(date) || disabledFn(ymd, date));
      };
    },
    // Computed props that return date formatter functions
    formatDateString: function formatDateString() {
      // Returns a date formatter function
      return createDateFormatter(this.calendarLocale, _objectSpread2({
        // Ensure we have year, month, day shown for screen readers/ARIA
        // If users really want to leave one of these out, they can
        // pass `undefined` for the property value
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }, this.dateFormatOptions, {
        // Ensure hours/minutes/seconds are not shown
        // As we do not support the time portion (yet)
        hour: undefined,
        minute: undefined,
        second: undefined,
        // Ensure calendar is gregorian
        calendar: 'gregory'
      }));
    },
    formatYearMonth: function formatYearMonth() {
      // Returns a date formatter function
      return createDateFormatter(this.calendarLocale, {
        year: 'numeric',
        month: 'long',
        calendar: 'gregory'
      });
    },
    formatWeekdayName: function formatWeekdayName() {
      return createDateFormatter(this.calendarLocale, {
        weekday: 'long',
        calendar: 'gregory'
      });
    },
    formatWeekdayNameShort: function formatWeekdayNameShort() {
      // Used as the header cells
      return createDateFormatter(this.calendarLocale, {
        weekday: 'short',
        calendar: 'gregory'
      });
    },
    formatDay: function formatDay() {
      return createDateFormatter(this.calendarLocale, {
        day: 'numeric',
        calendar: 'gregory'
      });
    },
    // Disabled states for the nav buttons
    prevYearDisabled: function prevYearDisabled() {
      var min = this.computedMin;
      return this.disabled || min && lastDateOfMonth(oneYearAgo(this.activeDate)) < min;
    },
    prevMonthDisabled: function prevMonthDisabled() {
      var min = this.computedMin;
      return this.disabled || min && lastDateOfMonth(oneMonthAgo(this.activeDate)) < min;
    },
    thisMonthDisabled: function thisMonthDisabled() {
      // TODO: We could/should check if today is out of range
      return this.disabled;
    },
    nextMonthDisabled: function nextMonthDisabled() {
      var max = this.computedMax;
      return this.disabled || max && firstDateOfMonth(oneMonthAhead(this.activeDate)) > max;
    },
    nextYearDisabled: function nextYearDisabled() {
      var max = this.computedMax;
      return this.disabled || max && firstDateOfMonth(oneYearAhead(this.activeDate)) > max;
    },
    // Calendar generation
    calendar: function calendar() {
      var matrix = [];
      var firstDay = this.calendarFirstDay;
      var calendarYear = firstDay.getFullYear();
      var calendarMonth = firstDay.getMonth();
      var daysInMonth = this.calendarDaysInMonth;
      var startIndex = firstDay.getDay(); // `0`..`6`

      var weekOffset = (this.computedWeekStarts > startIndex ? 7 : 0) - this.computedWeekStarts; // TODO: Change `dateInfoFn` to handle events and notes as well as classes

      var dateInfoFn = isFunction(this.dateInfoFn) ? this.dateInfoFn : function () {
        return {};
      }; // Build the calendar matrix

      var currentDay = 0 - weekOffset - startIndex;

      for (var week = 0; week < 6 && currentDay < daysInMonth; week++) {
        // For each week
        matrix[week] = []; // The following could be a map function

        for (var j = 0; j < 7; j++) {
          // For each day in week
          currentDay++;
          var date = createDate(calendarYear, calendarMonth, currentDay);
          var month = date.getMonth();
          var dayYMD = formatYMD(date);
          var dayDisabled = this.dateDisabled(date); // TODO: This could be a normalizer method

          var dateInfo = dateInfoFn(dayYMD, parseYMD(dayYMD));
          dateInfo = isString(dateInfo) || isArray(dateInfo) ? {
            class: dateInfo
          } : isPlainObject(dateInfo) ? _objectSpread2({
            class: ''
          }, dateInfo) : {
            class: ''
          };
          matrix[week].push({
            ymd: dayYMD,
            // Cell content
            day: this.formatDay(date),
            label: this.formatDateString(date),
            // Flags for styling
            isThisMonth: month === calendarMonth,
            isDisabled: dayDisabled,
            // TODO: Handle other dateInfo properties such as notes/events
            info: dateInfo
          });
        }
      }

      return matrix;
    },
    calendarHeadings: function calendarHeadings() {
      var _this = this;

      return this.calendar[0].map(function (d) {
        return {
          text: _this.formatWeekdayNameShort(parseYMD(d.ymd)),
          label: _this.formatWeekdayName(parseYMD(d.ymd))
        };
      });
    }
  },
  watch: {
    value: function value(newVal, oldVal) {
      var selected = formatYMD(newVal) || '';
      var old = formatYMD(oldVal) || '';

      if (!datesEqual(selected, old)) {
        this.activeYMD = selected || this.activeYMD;
        this.selectedYMD = selected;
      }
    },
    selectedYMD: function selectedYMD(newYMD, oldYMD) {
      // TODO:
      //   Should we compare to `formatYMD(this.value)` and emit
      //   only if they are different?
      if (newYMD !== oldYMD) {
        this.$emit('input', this.valueAsDate ? parseYMD(newYMD) || null : newYMD || '');
      }
    },
    context: function context(newVal, oldVal) {
      if (!looseEqual(newVal, oldVal)) {
        this.$emit('context', newVal);
      }
    },
    hidden: function hidden(newVal) {
      // Reset the active focused day when hidden
      this.activeYMD = this.selectedYMD || formatYMD(this.value || this.constrainDate(this.initialDate || this.getToday())); // Enable/disable the live regions

      this.setLive(!newVal);
    }
  },
  created: function created() {
    var _this2 = this;

    this.$nextTick(function () {
      _this2.$emit('context', _this2.context);
    });
  },
  mounted: function mounted() {
    this.setLive(true);
  },
  activated: function activated()
  /* istanbul ignore next */
  {
    this.setLive(true);
  },
  deactivated: function deactivated()
  /* istanbul ignore next */
  {
    this.setLive(false);
  },
  beforeDestroy: function beforeDestroy() {
    this.setLive(false);
  },
  methods: {
    // Public method(s)
    focus: function focus() {
      if (!this.disabled) {
        try {
          this.$refs.grid.focus();
        } catch (_unused) {}
      }
    },
    blur: function blur() {
      try {
        this.$refs.grid.blur();
      } catch (_unused2) {}
    },
    // Private methods
    setLive: function setLive(on) {
      var _this3 = this;

      if (on) {
        this.$nextTick(function () {
          requestAF(function () {
            _this3.isLive = true;
          });
        });
      } else {
        this.isLive = false;
      }
    },
    getToday: function getToday() {
      return parseYMD(createDate());
    },
    constrainDate: function constrainDate$1(date) {
      // Constrains a date between min and max
      // returns a new `Date` object instance
      return constrainDate(date, this.computedMin, this.computedMax);
    },
    emitSelected: function emitSelected(date) {
      var _this4 = this;

      // Performed in a `$nextTick()` to (probably) ensure
      // the input event has emitted first
      this.$nextTick(function () {
        _this4.$emit('selected', formatYMD(date) || '', parseYMD(date) || null);
      });
    },
    // Event handlers
    setGridFocusFlag: function setGridFocusFlag(evt) {
      // Sets the gridHasFocus flag to make date "button" look focused
      this.gridHasFocus = !this.disabled && evt.type === 'focus';
    },
    onKeydownWrapper: function onKeydownWrapper(evt) {
      // Calendar keyboard navigation
      // Handles PAGEUP/PAGEDOWN/END/HOME/LEFT/UP/RIGHT/DOWN
      // Focuses grid after updating
      var keyCode = evt.keyCode;
      var altKey = evt.altKey;

      if (!arrayIncludes([PAGEUP, PAGEDOWN, END, HOME, LEFT, UP, RIGHT, DOWN], keyCode)) {
        /* istanbul ignore next */
        return;
      }

      evt.preventDefault();
      evt.stopPropagation();
      var activeDate = createDate(this.activeDate);
      var checkDate = createDate(this.activeDate);
      var day = activeDate.getDate();
      var constrainedToday = this.constrainDate(this.getToday());
      var isRTL = this.isRTL;

      if (keyCode === PAGEUP) {
        // PAGEUP - Previous month/year
        activeDate = (altKey ? oneYearAgo : oneMonthAgo)(activeDate); // We check the first day of month to be in rage

        checkDate = createDate(activeDate);
        checkDate.setDate(1);
      } else if (keyCode === PAGEDOWN) {
        // PAGEDOWN - Next month/year
        activeDate = (altKey ? oneYearAhead : oneMonthAhead)(activeDate); // We check the last day of month to be in rage

        checkDate = createDate(activeDate);
        checkDate.setMonth(checkDate.getMonth() + 1);
        checkDate.setDate(0);
      } else if (keyCode === LEFT) {
        // LEFT - Previous day (or next day for RTL)
        activeDate.setDate(day + (isRTL ? 1 : -1));
        checkDate = activeDate;
      } else if (keyCode === RIGHT) {
        // RIGHT - Next day (or previous day for RTL)
        activeDate.setDate(day + (isRTL ? -1 : 1));
        checkDate = activeDate;
      } else if (keyCode === UP) {
        // UP - Previous week
        activeDate.setDate(day - 7);
        checkDate = activeDate;
      } else if (keyCode === DOWN) {
        // DOWN - Next week
        activeDate.setDate(day + 7);
        checkDate = activeDate;
      } else if (keyCode === HOME) {
        // HOME - Today
        activeDate = constrainedToday;
        checkDate = activeDate;
      } else if (keyCode === END) {
        // END - Selected date, or today if no selected date
        activeDate = parseYMD(this.selectedDate) || constrainedToday;
        checkDate = activeDate;
      }

      if (!this.dateOutOfRange(checkDate) && !datesEqual(activeDate, this.activeDate)) {
        // We only jump to date if within min/max
        // We don't check for individual disabled dates though (via user function)
        this.activeYMD = formatYMD(activeDate);
      } // Ensure grid is focused


      this.focus();
    },
    onKeydownGrid: function onKeydownGrid(evt) {
      // Pressing enter/space on grid to select active date
      var keyCode = evt.keyCode;
      var activeDate = this.activeDate;

      if (keyCode === ENTER || keyCode === SPACE) {
        evt.preventDefault();
        evt.stopPropagation();

        if (!this.disabled && !this.readonly && !this.dateDisabled(activeDate)) {
          this.selectedYMD = formatYMD(activeDate);
          this.emitSelected(activeDate);
        } // Ensure grid is focused


        this.focus();
      }
    },
    onClickDay: function onClickDay(day) {
      // Clicking on a date "button" to select it
      var selectedDate = this.selectedDate;
      var activeDate = this.activeDate;
      var clickedDate = parseYMD(day.ymd);

      if (!this.disabled && !day.isDisabled && !this.dateDisabled(clickedDate)) {
        if (!this.readonly) {
          // If readonly mode, we don't set the selected date, just the active date
          // If the clicked date is equal to the already selected date, we don't update the model
          this.selectedYMD = formatYMD(datesEqual(clickedDate, selectedDate) ? selectedDate : clickedDate);
          this.emitSelected(clickedDate);
        }

        this.activeYMD = formatYMD(datesEqual(clickedDate, activeDate) ? activeDate : createDate(clickedDate)); // Ensure grid is focused

        this.focus();
      }
    },
    gotoPrevYear: function gotoPrevYear() {
      this.activeYMD = formatYMD(this.constrainDate(oneYearAgo(this.activeDate)));
    },
    gotoPrevMonth: function gotoPrevMonth() {
      this.activeYMD = formatYMD(this.constrainDate(oneMonthAgo(this.activeDate)));
    },
    gotoCurrentMonth: function gotoCurrentMonth() {
      // TODO: Maybe this goto date should be configurable?
      this.activeYMD = formatYMD(this.constrainDate(this.getToday()));
    },
    gotoNextMonth: function gotoNextMonth() {
      this.activeYMD = formatYMD(this.constrainDate(oneMonthAhead(this.activeDate)));
    },
    gotoNextYear: function gotoNextYear() {
      this.activeYMD = formatYMD(this.constrainDate(oneYearAhead(this.activeDate)));
    },
    onHeaderClick: function onHeaderClick() {
      if (!this.disabled) {
        this.activeYMD = this.selectedYMD || formatYMD(this.getToday());
        this.focus();
      }
    }
  },
  render: function render(h) {
    var _this5 = this;

    // If hidden prop is set, render just a placeholder node
    if (this.hidden) {
      return h();
    }

    var isRTL = this.isRTL;
    var todayYMD = formatYMD(this.getToday());
    var selectedYMD = this.selectedYMD;
    var activeYMD = this.activeYMD;
    var highlightToday = !this.noHighlightToday;
    var safeId = this.safeId; // Flag for making the `aria-live` regions live

    var isLive = this.isLive; // Pre-compute some IDs
    // This should be computed props

    var idValue = safeId();
    var idWidget = safeId('_calendar-wrapper_');
    var idNav = safeId('_calendar-nav_');
    var idGrid = safeId('_calendar-grid_');
    var idGridCaption = safeId('_calendar-grid-caption_');
    var idGridHelp = safeId('_calendar-grid-help_');
    var idActive = activeYMD ? safeId("_cell-".concat(activeYMD, "_")) : null; // Header showing current selected date

    var $header = h('output', {
      staticClass: 'd-block text-center rounded border small p-1 mb-1',
      class: {
        'text-muted': this.disabled,
        readonly: this.readonly || this.disabled
      },
      attrs: {
        id: idValue,
        for: idGrid,
        role: 'status',
        tabindex: this.disabled ? null : '-1',
        // Mainly for testing purposes, as we do not know
        // the exact format `Intl` will format the date string
        'data-selected': toString$1(selectedYMD),
        // We wait until after mount to enable `aria-live`
        // to prevent initial announcement on page render
        'aria-live': isLive ? 'polite' : 'off',
        'aria-atomic': isLive ? 'true' : null
      },
      on: {
        // Transfer focus/click to focus grid
        // and focus active date (or today if no selection)
        click: this.onHeaderClick,
        focus: this.onHeaderClick
      }
    }, this.selectedDate ? [// We use `bdi` elements here in case the label doesn't match the locale
    // Although IE 11 does not deal with <BDI> at all (equivalent to a span)
    h('bdi', {
      staticClass: 'sr-only'
    }, " (".concat(toString$1(this.labelSelected), ") ")), h('bdi', {}, this.formatDateString(this.selectedDate))] : this.labelNoDateSelected || "\xA0" // '&nbsp;'
    );
    $header = h('header', {
      class: this.hideHeader ? 'sr-only' : 'mb-1',
      attrs: {
        title: this.selectedDate ? this.labelSelectedDate || null : null
      }
    }, [$header]); // Content for the date navigation buttons

    var $prevYearIcon = h(BIconstack, {
      props: {
        shiftV: 0.5,
        flipH: isRTL
      }
    }, [h(BIconChevronLeft, {
      props: {
        shiftH: -2
      }
    }), h(BIconChevronLeft, {
      props: {
        shiftH: 2
      }
    })]);
    var $prevMonthIcon = h(BIconChevronLeft, {
      props: {
        shiftV: 0.5,
        flipH: isRTL
      }
    });
    var $thisMonthIcon = h(BIconCircleFill, {
      props: {
        shiftV: 0.5
      }
    });
    var $nextMonthIcon = h(BIconChevronLeft, {
      props: {
        shiftV: 0.5,
        flipH: !isRTL
      }
    });
    var $nextYearIcon = h(BIconstack, {
      props: {
        shiftV: 0.5,
        flipH: !isRTL
      }
    }, [h(BIconChevronLeft, {
      props: {
        shiftH: -2
      }
    }), h(BIconChevronLeft, {
      props: {
        shiftH: 2
      }
    })]); // Utility to create the date navigation buttons

    var makeNavBtn = function makeNavBtn(content, label, handler, btnDisabled, shortcut) {
      return h('button', {
        staticClass: 'btn btn-sm btn-outline-secondary border-0 flex-fill p-1 mx-1',
        class: {
          disabled: btnDisabled
        },
        attrs: {
          title: label || null,
          type: 'button',
          'aria-label': label || null,
          'aria-disabled': btnDisabled ? 'true' : null,
          'aria-keyshortcuts': shortcut || null
        },
        on: btnDisabled ? {} : {
          click: handler
        }
      }, [h('div', {
        attrs: {
          'aria-hidden': 'true'
        }
      }, [content])]);
    }; // Generate the date navigation buttons


    var $nav = h('div', {
      staticClass: 'b-calendar-nav d-flex mx-n1 mb-1',
      attrs: {
        id: idNav,
        role: 'group',
        'aria-hidden': this.disabled ? 'true' : null,
        'aria-label': this.labelNav || null,
        'aria-controls': idGrid
      }
    }, [makeNavBtn($prevYearIcon, this.labelPrevYear, this.gotoPrevYear, this.prevYearDisabled, 'Alt+PageDown'), makeNavBtn($prevMonthIcon, this.labelPrevMonth, this.gotoPrevMonth, this.prevMonthDisabled, 'PageDown'), makeNavBtn($thisMonthIcon, this.labelCurrentMonth, this.gotoCurrentMonth, this.thisMonthDisabled, 'Home'), makeNavBtn($nextMonthIcon, this.labelNextMonth, this.gotoNextMonth, this.nextMonthDisabled, 'PageUp'), makeNavBtn($nextYearIcon, this.labelNextYear, this.gotoNextYear, this.nextYearDisabled, 'Alt+PageUp')]); // Caption for calendar grid

    var $gridCaption = h('header', {
      key: 'grid-caption',
      staticClass: 'text-center font-weight-bold p-1 m-0',
      class: {
        'text-muted': this.disabled
      },
      attrs: {
        id: idGridCaption,
        'aria-live': isLive ? 'polite' : null,
        'aria-atomic': isLive ? 'true' : null
      }
    }, this.formatYearMonth(this.calendarFirstDay)); // Calendar weekday headings

    var $gridWeekDays = h('div', {
      staticClass: 'row no-gutters border-bottom',
      attrs: {
        'aria-hidden': 'true'
      }
    }, this.calendarHeadings.map(function (d, idx) {
      return h('small', {
        key: idx,
        staticClass: 'col text-truncate',
        class: {
          'text-muted': _this5.disabled
        },
        attrs: {
          title: d.label === d.text ? null : d.label,
          'aria-label': d.label
        }
      }, d.text);
    })); // Calendar day grid

    var $gridBody = this.calendar.map(function (week) {
      var $cells = week.map(function (day, dIndex) {
        var _class;

        var isSelected = day.ymd === selectedYMD;
        var isActive = day.ymd === activeYMD;
        var isToday = day.ymd === todayYMD;
        var idCell = safeId("_cell-".concat(day.ymd, "_")); // "fake" button

        var $btn = h('span', {
          staticClass: 'btn border-0 rounded-circle text-nowrap',
          // Should we add some classes to signify if today/selected/etc?
          class: (_class = {
            // Give the fake button a focus ring
            focus: isActive && _this5.gridHasFocus,
            // Styling
            disabled: day.isDisabled || _this5.disabled,
            active: isSelected
          }, _defineProperty(_class, _this5.computedVariant, isSelected), _defineProperty(_class, _this5.computedTodayVariant, isToday && highlightToday && !isSelected && day.isThisMonth), _defineProperty(_class, 'btn-outline-light', !(isToday && highlightToday) && !isSelected && !isActive), _defineProperty(_class, 'btn-light', !(isToday && highlightToday) && !isSelected && isActive), _defineProperty(_class, 'text-muted', !day.isThisMonth && !isSelected), _defineProperty(_class, 'text-dark', !(isToday && highlightToday) && !isSelected && !isActive && day.isThisMonth), _defineProperty(_class, 'font-weight-bold', (isSelected || day.isThisMonth) && !day.isDisabled), _class),
          on: {
            click: function click() {
              return _this5.onClickDay(day);
            }
          }
        }, day.day);
        return h('div', // Cell with button
        {
          key: dIndex,
          staticClass: 'col p-0',
          class: day.isDisabled ? 'bg-light' : day.info.class || '',
          attrs: {
            id: idCell,
            role: 'button',
            'data-date': day.ymd,
            // Primarily for testing purposes
            // Only days in the month are presented as buttons to screen readers
            'aria-hidden': day.isThisMonth ? null : 'true',
            'aria-disabled': day.isDisabled || _this5.disabled ? 'true' : null,
            'aria-label': [day.label, isSelected ? "(".concat(_this5.labelSelected, ")") : null, isToday ? "(".concat(_this5.labelToday, ")") : null].filter(identity).join(' '),
            // NVDA doesn't convey `aria-selected`, but does `aria-current`,
            // ChromeVox doesn't convey `aria-current`, but does `aria-selected`,
            // so we set both attributes for robustness
            'aria-selected': isSelected ? 'true' : null,
            'aria-current': isSelected ? 'date' : null
          }
        }, [$btn]);
      }); // Return the week "row"
      // We use the first day of the weeks YMD value as a
      // key for efficient DOM patching / element re-use

      return h('div', {
        key: week[0].ymd,
        staticClass: 'row no-gutters'
      }, $cells);
    });
    $gridBody = h('div', {
      // A key is only required on the body if we add in transition support
      // key: this.activeYMD.slice(0, -3),
      staticClass: 'b-calendar-grid-body',
      style: this.disabled ? {
        pointerEvents: 'none'
      } : {}
    }, $gridBody);
    var $gridHelp = h('footer', {
      staticClass: 'border-top small text-muted text-center bg-light',
      attrs: {
        id: idGridHelp
      }
    }, [h('div', {
      staticClass: 'small'
    }, this.labelHelp)]);
    var $grid = h('div', {
      ref: 'grid',
      staticClass: 'form-control h-auto text-center p-0 mb-0',
      attrs: {
        id: idGrid,
        role: 'application',
        tabindex: this.disabled ? null : '0',
        'data-month': activeYMD.slice(0, -3),
        // `YYYY-MM`, mainly for testing
        'aria-roledescription': this.labelCalendar || null,
        'aria-labelledby': idGridCaption,
        'aria-describedby': idGridHelp,
        // `aria-readonly` is not considered valid on `role="application"`
        // https://www.w3.org/TR/wai-aria-1.1/#aria-readonly
        // 'aria-readonly': this.readonly && !this.disabled ? 'true' : null,
        'aria-disabled': this.disabled ? 'true' : null,
        'aria-activedescendant': idActive
      },
      on: {
        keydown: this.onKeydownGrid,
        focus: this.setGridFocusFlag,
        blur: this.setGridFocusFlag
      }
    }, [$gridCaption, $gridWeekDays, $gridBody, $gridHelp]); // Optional bottom slot

    var $slot = this.normalizeSlot('default');
    $slot = $slot ? h('footer', {
      staticClass: 'mt-2'
    }, $slot) : h();
    var $widget = h('div', {
      staticClass: 'b-calendar-inner',
      class: this.block ? 'd-block' : 'd-inline-block',
      style: this.block ? {} : {
        width: this.width
      },
      attrs: {
        id: idWidget,
        dir: isRTL ? 'rtl' : 'ltr',
        lang: this.computedLocale || null,
        role: 'group',
        'aria-disabled': this.disabled ? 'true' : null,
        // If datepicker controls an input, this will specify the ID of the input
        'aria-controls': this.ariaControls || null,
        // This should be a prop (so it can be changed to Date picker, etc, localized
        'aria-roledescription': this.roleDescription || null,
        'aria-describedby': [// Should the attr (if present) go last?
        // Or should this attr be a prop?
        this.$attrs['aria-describedby'], idValue, idGridHelp].filter(identity).join(' ')
      },
      on: {
        keydown: this.onKeydownWrapper
      }
    }, [$header, $nav, $grid, $slot]); // Wrap in an outer div that can be styled

    return h('div', {
      staticClass: 'b-calendar',
      // We use a style here rather than class `d-inline-block` so that users can
      // override the display value (`d-*` classes use the `!important` flag)
      style: this.block ? {} : {
        display: 'inline-block'
      }
    }, [$widget]);
  }
});

var CalendarPlugin = /*#__PURE__*/pluginFactory({
  components: {
    BCalendar: BCalendar
  }
});

/**
 * @param {string} prefix
 * @param {string} value
 */

var prefixPropName = function prefixPropName(prefix, value) {
  return prefix + upperFirst(value);
};

/**
 * @param {string} prefix
 * @param {string} value
 */

var unprefixPropName = function unprefixPropName(prefix, value) {
  return lowerFirst(value.replace(prefix, ''));
};

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
      copied[transformFn(prop)] = isObject(props[prop]) ? clone(props[prop]) : props[prop];
    }
  }

  return copied;
};

// @vue/component
var cardMixin = {
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    bgVariant: {
      type: String,
      default: null
    },
    borderVariant: {
      type: String,
      default: null
    },
    textVariant: {
      type: String,
      default: null
    }
  }
};

var props$6 = {
  title: {
    type: String,
    default: ''
  },
  titleTag: {
    type: String,
    default: 'h4'
  }
}; // @vue/component

var BCardTitle = /*#__PURE__*/Vue.extend({
  name: 'BCardTitle',
  functional: true,
  props: props$6,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.titleTag, mergeData(data, {
      staticClass: 'card-title'
    }), children || props.title);
  }
});

var NAME$7 = 'BCardSubTitle';
var props$7 = {
  subTitle: {
    type: String,
    default: ''
  },
  subTitleTag: {
    type: String,
    default: 'h6'
  },
  subTitleTextVariant: {
    type: String,
    default: function _default() {
      return getComponentConfig(NAME$7, 'subTitleTextVariant');
    }
  }
}; // @vue/component

var BCardSubTitle = /*#__PURE__*/Vue.extend({
  name: NAME$7,
  functional: true,
  props: props$7,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.subTitleTag, mergeData(data, {
      staticClass: 'card-subtitle',
      class: [props.subTitleTextVariant ? "text-".concat(props.subTitleTextVariant) : null]
    }), children || props.subTitle);
  }
});

var props$8 = _objectSpread2({}, copyProps(cardMixin.props, prefixPropName.bind(null, 'body')), {
  bodyClass: {
    type: [String, Object, Array],
    default: null
  }
}, props$6, {}, props$7, {
  overlay: {
    type: Boolean,
    default: false
  }
}); // @vue/component

var BCardBody = /*#__PURE__*/Vue.extend({
  name: 'BCardBody',
  functional: true,
  props: props$8,
  render: function render(h, _ref) {
    var _ref2;

    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var cardTitle = h();
    var cardSubTitle = h();
    var cardContent = children || [h()];

    if (props.title) {
      cardTitle = h(BCardTitle, {
        props: pluckProps(props$6, props)
      });
    }

    if (props.subTitle) {
      cardSubTitle = h(BCardSubTitle, {
        props: pluckProps(props$7, props),
        class: ['mb-2']
      });
    }

    return h(props.bodyTag, mergeData(data, {
      staticClass: 'card-body',
      class: [(_ref2 = {
        'card-img-overlay': props.overlay
      }, _defineProperty(_ref2, "bg-".concat(props.bodyBgVariant), props.bodyBgVariant), _defineProperty(_ref2, "border-".concat(props.bodyBorderVariant), props.bodyBorderVariant), _defineProperty(_ref2, "text-".concat(props.bodyTextVariant), props.bodyTextVariant), _ref2), props.bodyClass || {}]
    }), [cardTitle, cardSubTitle].concat(_toConsumableArray(cardContent)));
  }
});

var props$9 = _objectSpread2({}, copyProps(cardMixin.props, prefixPropName.bind(null, 'header')), {
  header: {
    type: String,
    default: null
  },
  headerHtml: {
    type: String,
    default: null
  },
  headerClass: {
    type: [String, Object, Array],
    default: null
  }
}); // @vue/component

var BCardHeader = /*#__PURE__*/Vue.extend({
  name: 'BCardHeader',
  functional: true,
  props: props$9,
  render: function render(h, _ref) {
    var _ref2;

    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.headerTag, mergeData(data, {
      staticClass: 'card-header',
      class: [props.headerClass, (_ref2 = {}, _defineProperty(_ref2, "bg-".concat(props.headerBgVariant), props.headerBgVariant), _defineProperty(_ref2, "border-".concat(props.headerBorderVariant), props.headerBorderVariant), _defineProperty(_ref2, "text-".concat(props.headerTextVariant), props.headerTextVariant), _ref2)]
    }), children || [h('div', {
      domProps: htmlOrText(props.headerHtml, props.header)
    })]);
  }
});

var props$a = _objectSpread2({}, copyProps(cardMixin.props, prefixPropName.bind(null, 'footer')), {
  footer: {
    type: String,
    default: null
  },
  footerHtml: {
    type: String,
    default: null
  },
  footerClass: {
    type: [String, Object, Array],
    default: null
  }
}); // @vue/component

var BCardFooter = /*#__PURE__*/Vue.extend({
  name: 'BCardFooter',
  functional: true,
  props: props$a,
  render: function render(h, _ref) {
    var _ref2;

    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.footerTag, mergeData(data, {
      staticClass: 'card-footer',
      class: [props.footerClass, (_ref2 = {}, _defineProperty(_ref2, "bg-".concat(props.footerBgVariant), props.footerBgVariant), _defineProperty(_ref2, "border-".concat(props.footerBorderVariant), props.footerBorderVariant), _defineProperty(_ref2, "text-".concat(props.footerTextVariant), props.footerTextVariant), _ref2)]
    }), children || [h('div', {
      domProps: htmlOrText(props.footerHtml, props.footer)
    })]);
  }
});

var props$b = {
  src: {
    type: String,
    default: null,
    required: true
  },
  alt: {
    type: String,
    default: null
  },
  top: {
    type: Boolean,
    default: false
  },
  bottom: {
    type: Boolean,
    default: false
  },
  start: {
    type: Boolean,
    default: false
  },
  left: {
    // alias of 'start'
    type: Boolean,
    default: false
  },
  end: {
    type: Boolean,
    default: false
  },
  right: {
    // alias of 'end'
    type: Boolean,
    default: false
  },
  height: {
    type: [Number, String],
    default: null
  },
  width: {
    type: [Number, String],
    default: null
  }
}; // @vue/component

var BCardImg = /*#__PURE__*/Vue.extend({
  name: 'BCardImg',
  functional: true,
  props: props$b,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data;
    var baseClass = 'card-img';

    if (props.top) {
      baseClass += '-top';
    } else if (props.right || props.end) {
      baseClass += '-right';
    } else if (props.bottom) {
      baseClass += '-bottom';
    } else if (props.left || props.start) {
      baseClass += '-left';
    }

    return h('img', mergeData(data, {
      class: [baseClass],
      attrs: {
        src: props.src,
        alt: props.alt,
        height: props.height,
        width: props.width
      }
    }));
  }
});

var cardImgProps = copyProps(props$b, prefixPropName.bind(null, 'img'));
cardImgProps.imgSrc.required = false;
var props$c = _objectSpread2({}, props$8, {}, props$9, {}, props$a, {}, cardImgProps, {}, copyProps(cardMixin.props), {
  align: {
    type: String,
    default: null
  },
  noBody: {
    type: Boolean,
    default: false
  }
}); // @vue/component

var BCard = /*#__PURE__*/Vue.extend({
  name: 'BCard',
  functional: true,
  props: props$c,
  render: function render(h, _ref) {
    var _class;

    var props = _ref.props,
        data = _ref.data,
        slots = _ref.slots,
        scopedSlots = _ref.scopedSlots;
    var $slots = slots(); // Vue < 2.6.x may return undefined for scopedSlots

    var $scopedSlots = scopedSlots || {}; // Create placeholder elements for each section

    var imgFirst = h();
    var header = h();
    var content = h();
    var footer = h();
    var imgLast = h();

    if (props.imgSrc) {
      var img = h(BCardImg, {
        props: pluckProps(cardImgProps, props, unprefixPropName.bind(null, 'img'))
      });

      if (props.imgBottom) {
        imgLast = img;
      } else {
        imgFirst = img;
      }
    }

    if (props.header || hasNormalizedSlot('header', $scopedSlots, $slots)) {
      header = h(BCardHeader, {
        props: pluckProps(props$9, props)
      }, normalizeSlot('header', {}, $scopedSlots, $slots));
    }

    content = normalizeSlot('default', {}, $scopedSlots, $slots) || [];

    if (!props.noBody) {
      // Wrap content in card-body
      content = [h(BCardBody, {
        props: pluckProps(props$8, props)
      }, _toConsumableArray(content))];
    }

    if (props.footer || hasNormalizedSlot('footer', $scopedSlots, $slots)) {
      footer = h(BCardFooter, {
        props: pluckProps(props$a, props)
      }, normalizeSlot('footer', {}, $scopedSlots, $slots));
    }

    return h(props.tag, mergeData(data, {
      staticClass: 'card',
      class: (_class = {
        'flex-row': props.imgLeft || props.imgStart,
        'flex-row-reverse': (props.imgRight || props.imgEnd) && !(props.imgLeft || props.imgStart)
      }, _defineProperty(_class, "text-".concat(props.align), props.align), _defineProperty(_class, "bg-".concat(props.bgVariant), props.bgVariant), _defineProperty(_class, "border-".concat(props.borderVariant), props.borderVariant), _defineProperty(_class, "text-".concat(props.textVariant), props.textVariant), _class)
    }), [imgFirst, header].concat(_toConsumableArray(content), [footer, imgLast]));
  }
});

var OBSERVER_PROP_NAME = '__bv__visibility_observer';
var onlyDgitsRE = /^\d+$/;

var VisibilityObserver = /*#__PURE__*/function () {
  function VisibilityObserver(el, options, vnode) {
    _classCallCheck(this, VisibilityObserver);

    this.el = el;
    this.callback = options.callback;
    this.margin = options.margin || 0;
    this.once = options.once || false;
    this.observer = null;
    this.visible = undefined;
    this.doneOnce = false; // Create the observer instance (if possible)

    this.createObserver(vnode);
  }

  _createClass(VisibilityObserver, [{
    key: "createObserver",
    value: function createObserver(vnode) {
      var _this = this;

      // Remove any previous observer
      if (this.observer) {
        /* istanbul ignore next */
        this.stop();
      } // Should only be called once and `callback` prop should be a function


      if (this.doneOnce || !isFunction(this.callback)) {
        /* istanbul ignore next */
        return;
      } // Create the observer instance


      try {
        // Future: Possibly add in other modifiers for left/right/top/bottom
        // offsets, root element reference, and thresholds
        this.observer = new IntersectionObserver(this.handler.bind(this), {
          // `null` = 'viewport'
          root: null,
          // Pixels away from view port to consider "visible"
          rootMargin: this.margin,
          // Intersection ratio of el and root (as a value from 0 to 1)
          threshold: 0
        });
      } catch (_unused) {
        // No IntersectionObserver support, so just stop trying to observe
        this.doneOnce = true;
        this.observer = undefined;
        this.callback(null);
        return;
      } // Start observing in a `$nextTick()` (to allow DOM to complete rendering)

      /* istanbul ignore next: IntersectionObserver not supported in JSDOM */


      vnode.context.$nextTick(function () {
        requestAF(function () {
          // Placed in an `if` just in case we were destroyed before
          // this `requestAnimationFrame` runs
          if (_this.observer) {
            _this.observer.observe(_this.el);
          }
        });
      });
    }
  }, {
    key: "handler",
    value: function handler(entries)
    /* istanbul ignore next: IntersectionObserver not supported in JSDOM */
    {
      var entry = entries ? entries[0] : {};
      var isIntersecting = Boolean(entry.isIntersecting || entry.intersectionRatio > 0.0);

      if (isIntersecting !== this.visible) {
        this.visible = isIntersecting;
        this.callback(isIntersecting);

        if (this.once && this.visible) {
          this.doneOnce = true;
          this.stop();
        }
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      var observer = this.observer;
      /* istanbul ignore next */

      if (observer && observer.disconnect) {
        observer.disconnect();
      }

      this.observer = null;
    }
  }]);

  return VisibilityObserver;
}();

var destroy = function destroy(el) {
  var observer = el[OBSERVER_PROP_NAME];

  if (observer && observer.stop) {
    observer.stop();
  }

  delete el[OBSERVER_PROP_NAME];
};

var bind = function bind(el, _ref, vnode) {
  var value = _ref.value,
      modifiers = _ref.modifiers;
  // `value` is the callback function
  var options = {
    margin: '0px',
    once: false,
    callback: value
  }; // Parse modifiers

  keys(modifiers).forEach(function (mod) {
    /* istanbul ignore else: Until <b-img-lazy> is switched to use this directive */
    if (onlyDgitsRE.test(mod)) {
      options.margin = "".concat(mod, "px");
    } else if (mod.toLowerCase() === 'once') {
      options.once = true;
    }
  }); // Destroy any previous observer

  destroy(el); // Create new observer

  el[OBSERVER_PROP_NAME] = new VisibilityObserver(el, options, vnode); // Store the current modifiers on the object (cloned)

  el[OBSERVER_PROP_NAME]._prevModifiers = clone(modifiers);
}; // When the directive options may have been updated (or element)


var componentUpdated = function componentUpdated(el, _ref2, vnode) {
  var value = _ref2.value,
      oldValue = _ref2.oldValue,
      modifiers = _ref2.modifiers;
  // Compare value/oldValue and modifiers to see if anything has changed
  // and if so, destroy old observer and create new observer

  /* istanbul ignore next */
  modifiers = clone(modifiers);
  /* istanbul ignore next */

  if (el && (value !== oldValue || !el[OBSERVER_PROP_NAME] || !looseEqual(modifiers, el[OBSERVER_PROP_NAME]._prevModifiers))) {
    // Re-bind on element
    bind(el, {
      value: value,
      modifiers: modifiers
    }, vnode);
  }
}; // When directive un-binds from element


var unbind = function unbind(el) {
  // Remove the observer
  destroy(el);
}; // Export the directive


var VBVisible = {
  bind: bind,
  componentUpdated: componentUpdated,
  unbind: unbind
};

var NAME$8 = 'BImg'; // Blank image with fill template

var BLANK_TEMPLATE = '<svg width="%{w}" height="%{h}" ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'viewBox="0 0 %{w} %{h}" preserveAspectRatio="none">' + '<rect width="100%" height="100%" style="fill:%{f};"></rect>' + '</svg>';
var props$d = {
  src: {
    type: String,
    default: null
  },
  srcset: {
    type: [String, Array],
    default: null
  },
  sizes: {
    type: [String, Array],
    default: null
  },
  alt: {
    type: String,
    default: null
  },
  width: {
    type: [Number, String],
    default: null
  },
  height: {
    type: [Number, String],
    default: null
  },
  block: {
    type: Boolean,
    default: false
  },
  fluid: {
    type: Boolean,
    default: false
  },
  fluidGrow: {
    // Gives fluid images class `w-100` to make them grow to fit container
    type: Boolean,
    default: false
  },
  rounded: {
    // rounded can be:
    //   false: no rounding of corners
    //   true: slightly rounded corners
    //   'top': top corners rounded
    //   'right': right corners rounded
    //   'bottom': bottom corners rounded
    //   'left': left corners rounded
    //   'circle': circle/oval
    //   '0': force rounding off
    type: [Boolean, String],
    default: false
  },
  thumbnail: {
    type: Boolean,
    default: false
  },
  left: {
    type: Boolean,
    default: false
  },
  right: {
    type: Boolean,
    default: false
  },
  center: {
    type: Boolean,
    default: false
  },
  blank: {
    type: Boolean,
    default: false
  },
  blankColor: {
    type: String,
    default: function _default() {
      return getComponentConfig(NAME$8, 'blankColor');
    }
  }
}; // --- Helper methods ---

var makeBlankImgSrc = function makeBlankImgSrc(width, height, color) {
  var src = encodeURIComponent(BLANK_TEMPLATE.replace('%{w}', toString$1(width)).replace('%{h}', toString$1(height)).replace('%{f}', color));
  return "data:image/svg+xml;charset=UTF-8,".concat(src);
}; // @vue/component


var BImg = /*#__PURE__*/Vue.extend({
  name: NAME$8,
  functional: true,
  props: props$d,
  render: function render(h, _ref) {
    var _class;

    var props = _ref.props,
        data = _ref.data;
    var src = props.src;
    var width = toInteger(props.width) || null;
    var height = toInteger(props.height) || null;
    var align = null;
    var block = props.block;
    var srcset = concat(props.srcset).filter(identity).join(',');
    var sizes = concat(props.sizes).filter(identity).join(',');

    if (props.blank) {
      if (!height && width) {
        height = width;
      } else if (!width && height) {
        width = height;
      }

      if (!width && !height) {
        width = 1;
        height = 1;
      } // Make a blank SVG image


      src = makeBlankImgSrc(width, height, props.blankColor || 'transparent'); // Disable srcset and sizes

      srcset = null;
      sizes = null;
    }

    if (props.left) {
      align = 'float-left';
    } else if (props.right) {
      align = 'float-right';
    } else if (props.center) {
      align = 'mx-auto';
      block = true;
    }

    return h('img', mergeData(data, {
      attrs: {
        src: src,
        alt: props.alt,
        width: width ? toString$1(width) : null,
        height: height ? toString$1(height) : null,
        srcset: srcset || null,
        sizes: sizes || null
      },
      class: (_class = {
        'img-thumbnail': props.thumbnail,
        'img-fluid': props.fluid || props.fluidGrow,
        'w-100': props.fluidGrow,
        rounded: props.rounded === '' || props.rounded === true
      }, _defineProperty(_class, "rounded-".concat(props.rounded), isString(props.rounded) && props.rounded !== ''), _defineProperty(_class, align, align), _defineProperty(_class, 'd-block', block), _class)
    }));
  }
});

var NAME$9 = 'BImgLazy';
var props$e = {
  src: {
    type: String,
    default: null,
    required: true
  },
  srcset: {
    type: [String, Array],
    default: null
  },
  sizes: {
    type: [String, Array],
    default: null
  },
  alt: {
    type: String,
    default: null
  },
  width: {
    type: [Number, String],
    default: null
  },
  height: {
    type: [Number, String],
    default: null
  },
  blankSrc: {
    // If null, a blank image is generated
    type: String,
    default: null
  },
  blankColor: {
    type: String,
    default: function _default() {
      return getComponentConfig(NAME$9, 'blankColor');
    }
  },
  blankWidth: {
    type: [Number, String],
    default: null
  },
  blankHeight: {
    type: [Number, String],
    default: null
  },
  show: {
    type: Boolean,
    default: false
  },
  fluid: {
    type: Boolean,
    default: false
  },
  fluidGrow: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  },
  thumbnail: {
    type: Boolean,
    default: false
  },
  rounded: {
    type: [Boolean, String],
    default: false
  },
  left: {
    type: Boolean,
    default: false
  },
  right: {
    type: Boolean,
    default: false
  },
  center: {
    type: Boolean,
    default: false
  },
  offset: {
    // Distance away from viewport (in pixels) before being
    // considered "visible"
    type: [Number, String],
    default: 360
  }
}; // @vue/component

var BImgLazy = /*#__PURE__*/Vue.extend({
  name: NAME$9,
  directives: {
    bVisible: VBVisible
  },
  props: props$e,
  data: function data() {
    return {
      isShown: this.show
    };
  },
  computed: {
    computedSrc: function computedSrc() {
      return !this.blankSrc || this.isShown ? this.src : this.blankSrc;
    },
    computedBlank: function computedBlank() {
      return !(this.isShown || this.blankSrc);
    },
    computedWidth: function computedWidth() {
      return this.isShown ? this.width : this.blankWidth || this.width;
    },
    computedHeight: function computedHeight() {
      return this.isShown ? this.height : this.blankHeight || this.height;
    },
    computedSrcset: function computedSrcset() {
      var srcset = concat(this.srcset).filter(identity).join(',');
      return !this.blankSrc || this.isShown ? srcset : null;
    },
    computedSizes: function computedSizes() {
      var sizes = concat(this.sizes).filter(identity).join(',');
      return !this.blankSrc || this.isShown ? sizes : null;
    }
  },
  watch: {
    show: function show(newVal, oldVal) {
      if (newVal !== oldVal) {
        // If IntersectionObserver support is not available, image is always shown
        var visible = hasIntersectionObserverSupport ? newVal : true;
        this.isShown = visible;

        if (visible !== newVal) {
          // Ensure the show prop is synced (when no IntersectionObserver)
          this.$nextTick(this.updateShowProp);
        }
      }
    },
    isShown: function isShown(newVal, oldVal) {
      if (newVal !== oldVal) {
        // Update synched show prop
        this.updateShowProp();
      }
    }
  },
  mounted: function mounted() {
    // If IntersectionObserver is not available, image is always shown
    this.isShown = hasIntersectionObserverSupport ? this.show : true;
  },
  methods: {
    updateShowProp: function updateShowProp() {
      this.$emit('update:show', this.isShown);
    },
    doShow: function doShow(visible) {
      // If IntersectionObserver is not supported, the callback
      // will be called with `null` rather than `true` or `false`
      if ((visible || visible === null) && !this.isShown) {
        this.isShown = true;
      }
    }
  },
  render: function render(h) {
    var directives = [];

    if (!this.isShown) {
      var _modifiers;

      // We only add the visible directive if we are not shown
      directives.push({
        // Visible directive will silently do nothing if
        // IntersectionObserver is not supported
        name: 'b-visible',
        // Value expects a callback (passed one arg of `visible` = `true` or `false`)
        value: this.doShow,
        modifiers: (_modifiers = {}, _defineProperty(_modifiers, "".concat(toInteger(this.offset) || 0), true), _defineProperty(_modifiers, "once", true), _modifiers)
      });
    }

    return h(BImg, {
      directives: directives,
      props: {
        // Computed value props
        src: this.computedSrc,
        blank: this.computedBlank,
        width: this.computedWidth,
        height: this.computedHeight,
        srcset: this.computedSrcset || null,
        sizes: this.computedSizes || null,
        // Passthrough props
        alt: this.alt,
        blankColor: this.blankColor,
        fluid: this.fluid,
        fluidGrow: this.fluidGrow,
        block: this.block,
        thumbnail: this.thumbnail,
        rounded: this.rounded,
        left: this.left,
        right: this.right,
        center: this.center
      }
    });
  }
});

// The `omit()` util creates a new object, so we can just pass the original props

var lazyProps = omit(props$e, ['left', 'right', 'center', 'block', 'rounded', 'thumbnail', 'fluid', 'fluidGrow']);
var props$f = _objectSpread2({}, lazyProps, {
  top: {
    type: Boolean,
    default: false
  },
  bottom: {
    type: Boolean,
    default: false
  },
  start: {
    type: Boolean,
    default: false
  },
  left: {
    // alias of 'start'
    type: Boolean,
    default: false
  },
  end: {
    type: Boolean,
    default: false
  },
  right: {
    // alias of 'end'
    type: Boolean,
    default: false
  }
}); // @vue/component

var BCardImgLazy = /*#__PURE__*/Vue.extend({
  name: 'BCardImgLazy',
  functional: true,
  props: props$f,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data;
    var baseClass = 'card-img';

    if (props.top) {
      baseClass += '-top';
    } else if (props.right || props.end) {
      baseClass += '-right';
    } else if (props.bottom) {
      baseClass += '-bottom';
    } else if (props.left || props.start) {
      baseClass += '-left';
    } // False out the left/center/right props before passing to b-img-lazy


    var lazyProps = _objectSpread2({}, props, {
      left: false,
      right: false,
      center: false
    });

    return h(BImgLazy, mergeData(data, {
      class: [baseClass],
      props: lazyProps
    }));
  }
});

var props$g = {
  textTag: {
    type: String,
    default: 'p'
  }
}; // @vue/component

var BCardText = /*#__PURE__*/Vue.extend({
  name: 'BCardText',
  functional: true,
  props: props$g,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.textTag, mergeData(data, {
      staticClass: 'card-text'
    }), children);
  }
});

var props$h = {
  tag: {
    type: String,
    default: 'div'
  },
  deck: {
    type: Boolean,
    default: false
  },
  columns: {
    type: Boolean,
    default: false
  }
}; // @vue/component

var BCardGroup = /*#__PURE__*/Vue.extend({
  name: 'BCardGroup',
  functional: true,
  props: props$h,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, mergeData(data, {
      class: props.deck ? 'card-deck' : props.columns ? 'card-columns' : 'card-group'
    }), children);
  }
});

var CardPlugin = /*#__PURE__*/pluginFactory({
  components: {
    BCard: BCard,
    BCardHeader: BCardHeader,
    BCardBody: BCardBody,
    BCardTitle: BCardTitle,
    BCardSubTitle: BCardSubTitle,
    BCardFooter: BCardFooter,
    BCardImg: BCardImg,
    BCardImgLazy: BCardImgLazy,
    BCardText: BCardText,
    BCardGroup: BCardGroup
  }
});

var noop = function noop() {};

/**
 * Observe a DOM element changes, falls back to eventListener mode
 * @param {Element} el The DOM element to observe
 * @param {Function} callback callback to be called on change
 * @param {object} [options={childList: true, subtree: true}] observe options
 * @see http://stackoverflow.com/questions/3219758
 */

var observeDom = function observeDom(el, callback, options)
/* istanbul ignore next: difficult to test in JSDOM */
{
  // Handle cases where we might be passed a Vue instance
  el = el ? el.$el || el : null; // Early exit when we have no element

  /* istanbul ignore next: difficult to test in JSDOM */

  if (!isElement(el)) {
    return null;
  } // Exit and throw a warning when `MutationObserver` isn't available


  if (warnNoMutationObserverSupport('observeDom')) {
    return null;
  } // Define a new observer


  var obs = new MutationObs(function (mutations) {
    var changed = false; // A mutation can contain several change records, so we loop
    // through them to see what has changed
    // We break out of the loop early if any "significant" change
    // has been detected

    for (var i = 0; i < mutations.length && !changed; i++) {
      // The mutation record
      var mutation = mutations[i]; // Mutation type

      var type = mutation.type; // DOM node (could be any DOM node type - HTMLElement, Text, comment, etc.)

      var target = mutation.target; // Detect whether a change happened based on type and target

      if (type === 'characterData' && target.nodeType === Node.TEXT_NODE) {
        // We ignore nodes that are not TEXT (i.e. comments, etc)
        // as they don't change layout
        changed = true;
      } else if (type === 'attributes') {
        changed = true;
      } else if (type === 'childList' && (mutation.addedNodes.length > 0 || mutation.removedNodes.length > 0)) {
        // This includes HTMLElement and text nodes being
        // added/removed/re-arranged
        changed = true;
      }
    } // We only call the callback if a change that could affect
    // layout/size truely happened


    if (changed) {
      callback();
    }
  }); // Have the observer observe foo for changes in children, etc

  obs.observe(el, _objectSpread2({
    childList: true,
    subtree: true
  }, options)); // We return a reference to the observer so that `obs.disconnect()`
  // can be called if necessary
  // To reduce overhead when the root element is hidden

  return obs;
};

var EVENT_OPTIONS_PASSIVE = {
  passive: true
};
var EVENT_OPTIONS_NO_CAPTURE = {
  passive: true,
  capture: false
}; // --- Utils ---
// Normalize event options based on support of passive option
// Exported only for testing purposes

var parseEventOptions = function parseEventOptions(options) {
  /* istanbul ignore else: can't test in JSDOM, as it supports passive */
  if (hasPassiveEventSupport) {
    return isObject(options) ? options : {
      capture: !!options || false
    };
  } else {
    // Need to translate to actual Boolean value
    return !!(isObject(options) ? options.capture : options);
  }
}; // Attach an event listener to an element

var eventOn = function eventOn(el, evtName, handler, options) {
  if (el && el.addEventListener) {
    el.addEventListener(evtName, handler, parseEventOptions(options));
  }
}; // Remove an event listener from an element

var eventOff = function eventOff(el, evtName, handler, options) {
  if (el && el.removeEventListener) {
    el.removeEventListener(evtName, handler, parseEventOptions(options));
  }
}; // Utility method to add/remove a event listener based on first argument (boolean)
// It passes all other arguments to the `eventOn()` or `eventOff` method

var eventOnOff = function eventOnOff(on) {
  var method = on ? eventOn : eventOff;

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  method.apply(void 0, args);
};

var NAME$a = 'BCarousel'; // Slide directional classes

var DIRECTION = {
  next: {
    dirClass: 'carousel-item-left',
    overlayClass: 'carousel-item-next'
  },
  prev: {
    dirClass: 'carousel-item-right',
    overlayClass: 'carousel-item-prev'
  }
}; // Fallback Transition duration (with a little buffer) in ms

var TRANS_DURATION = 600 + 50; // Time for mouse compat events to fire after touch

var TOUCH_EVENT_COMPAT_WAIT = 500; // Number of pixels to consider touch move a swipe

var SWIPE_THRESHOLD = 40; // PointerEvent pointer types

var PointerType = {
  TOUCH: 'touch',
  PEN: 'pen'
}; // Transition Event names

var TransitionEndEvents = {
  WebkitTransition: 'webkitTransitionEnd',
  MozTransition: 'transitionend',
  OTransition: 'otransitionend oTransitionEnd',
  transition: 'transitionend'
}; // Return the browser specific transitionEnd event name

var getTransitionEndEvent = function getTransitionEndEvent(el) {
  for (var name in TransitionEndEvents) {
    if (!isUndefined(el.style[name])) {
      return TransitionEndEvents[name];
    }
  } // Fallback

  /* istanbul ignore next */


  return null;
}; // @vue/component


var BCarousel = /*#__PURE__*/Vue.extend({
  name: NAME$a,
  mixins: [idMixin, normalizeSlotMixin],
  provide: function provide() {
    return {
      bvCarousel: this
    };
  },
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    labelPrev: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$a, 'labelPrev');
      }
    },
    labelNext: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$a, 'labelNext');
      }
    },
    labelGotoSlide: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$a, 'labelGotoSlide');
      }
    },
    labelIndicators: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$a, 'labelIndicators');
      }
    },
    interval: {
      type: Number,
      default: 5000
    },
    indicators: {
      type: Boolean,
      default: false
    },
    controls: {
      type: Boolean,
      default: false
    },
    noAnimation: {
      // Disable slide/fade animation
      type: Boolean,
      default: false
    },
    fade: {
      // Enable cross-fade animation instead of slide animation
      type: Boolean,
      default: false
    },
    noWrap: {
      // Disable wrapping/looping when start/end is reached
      type: Boolean,
      default: false
    },
    noTouch: {
      // Sniffed by carousel-slide
      type: Boolean,
      default: false
    },
    noHoverPause: {
      // Disable pause on hover
      type: Boolean,
      default: false
    },
    imgWidth: {
      // Sniffed by carousel-slide
      type: [Number, String] // default: undefined

    },
    imgHeight: {
      // Sniffed by carousel-slide
      type: [Number, String] // default: undefined

    },
    background: {
      type: String // default: undefined

    },
    value: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      index: this.value || 0,
      isSliding: false,
      transitionEndEvent: null,
      slides: [],
      direction: null,
      isPaused: !(toInteger(this.interval) > 0),
      // Touch event handling values
      touchStartX: 0,
      touchDeltaX: 0
    };
  },
  computed: {
    numSlides: function numSlides() {
      return this.slides.length;
    }
  },
  watch: {
    value: function value(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.setSlide(toInteger(newVal) || 0);
      }
    },
    interval: function interval(newVal, oldVal) {
      if (newVal === oldVal) {
        /* istanbul ignore next */
        return;
      }

      if (!newVal) {
        // Pausing slide show
        this.pause(false);
      } else {
        // Restarting or Changing interval
        this.pause(true);
        this.start(false);
      }
    },
    isPaused: function isPaused(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.$emit(newVal ? 'paused' : 'unpaused');
      }
    },
    index: function index(to, from) {
      if (to === from || this.isSliding) {
        /* istanbul ignore next */
        return;
      }

      this.doSlide(to, from);
    }
  },
  created: function created() {
    // Create private non-reactive props
    this._intervalId = null;
    this._animationTimeout = null;
    this._touchTimeout = null; // Set initial paused state

    this.isPaused = !(toInteger(this.interval) > 0);
  },
  mounted: function mounted() {
    // Cache current browser transitionend event name
    this.transitionEndEvent = getTransitionEndEvent(this.$el) || null; // Get all slides

    this.updateSlides(); // Observe child changes so we can update slide list

    observeDom(this.$refs.inner, this.updateSlides.bind(this), {
      subtree: false,
      childList: true,
      attributes: true,
      attributeFilter: ['id']
    });
  },
  beforeDestroy: function beforeDestroy() {
    clearTimeout(this._animationTimeout);
    clearTimeout(this._touchTimeout);
    clearInterval(this._intervalId);
    this._intervalId = null;
    this._animationTimeout = null;
    this._touchTimeout = null;
  },
  methods: {
    // Set slide
    setSlide: function setSlide(slide) {
      var _this = this;

      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      // Don't animate when page is not visible

      /* istanbul ignore if: difficult to test */
      if (isBrowser && document.visibilityState && document.hidden) {
        return;
      }

      var noWrap = this.noWrap;
      var numSlides = this.numSlides; // Make sure we have an integer (you never know!)

      slide = Math.floor(slide); // Don't do anything if nothing to slide to

      if (numSlides === 0) {
        return;
      } // Don't change slide while transitioning, wait until transition is done


      if (this.isSliding) {
        // Schedule slide after sliding complete
        this.$once('sliding-end', function () {
          return _this.setSlide(slide, direction);
        });
        return;
      }

      this.direction = direction; // Set new slide index
      // Wrap around if necessary (if no-wrap not enabled)

      this.index = slide >= numSlides ? noWrap ? numSlides - 1 : 0 : slide < 0 ? noWrap ? 0 : numSlides - 1 : slide; // Ensure the v-model is synched up if no-wrap is enabled
      // and user tried to slide pass either ends

      if (noWrap && this.index !== slide && this.index !== this.value) {
        this.$emit('input', this.index);
      }
    },
    // Previous slide
    prev: function prev() {
      this.setSlide(this.index - 1, 'prev');
    },
    // Next slide
    next: function next() {
      this.setSlide(this.index + 1, 'next');
    },
    // Pause auto rotation
    pause: function pause(evt) {
      if (!evt) {
        this.isPaused = true;
      }

      if (this._intervalId) {
        clearInterval(this._intervalId);
        this._intervalId = null;
      }
    },
    // Start auto rotate slides
    start: function start(evt) {
      if (!evt) {
        this.isPaused = false;
      }
      /* istanbul ignore next: most likely will never happen, but just in case */


      if (this._intervalId) {
        clearInterval(this._intervalId);
        this._intervalId = null;
      } // Don't start if no interval, or less than 2 slides


      if (this.interval && this.numSlides > 1) {
        this._intervalId = setInterval(this.next, Math.max(1000, this.interval));
      }
    },
    // Restart auto rotate slides when focus/hover leaves the carousel
    restart: function restart()
    /* istanbul ignore next: difficult to test */
    {
      if (!this.$el.contains(document.activeElement)) {
        this.start();
      }
    },
    doSlide: function doSlide(to, from) {
      var _this2 = this;

      var isCycling = Boolean(this.interval); // Determine sliding direction

      var direction = this.calcDirection(this.direction, from, to);
      var overlayClass = direction.overlayClass;
      var dirClass = direction.dirClass; // Determine current and next slides

      var currentSlide = this.slides[from];
      var nextSlide = this.slides[to]; // Don't do anything if there aren't any slides to slide to

      if (!currentSlide || !nextSlide) {
        /* istanbul ignore next */
        return;
      } // Start animating


      this.isSliding = true;

      if (isCycling) {
        this.pause(false);
      }

      this.$emit('sliding-start', to); // Update v-model

      this.$emit('input', this.index);

      if (this.noAnimation) {
        addClass(nextSlide, 'active');
        removeClass(currentSlide, 'active');
        this.isSliding = false; // Notify ourselves that we're done sliding (slid)

        this.$nextTick(function () {
          return _this2.$emit('sliding-end', to);
        });
      } else {
        addClass(nextSlide, overlayClass); // Trigger a reflow of next slide

        reflow(nextSlide);
        addClass(currentSlide, dirClass);
        addClass(nextSlide, dirClass); // Transition End handler

        var called = false;
        /* istanbul ignore next: difficult to test */

        var onceTransEnd = function onceTransEnd() {
          if (called) {
            return;
          }

          called = true;
          /* istanbul ignore if: transition events cant be tested in JSDOM */

          if (_this2.transitionEndEvent) {
            var events = _this2.transitionEndEvent.split(/\s+/);

            events.forEach(function (evt) {
              return eventOff(currentSlide, evt, onceTransEnd, EVENT_OPTIONS_NO_CAPTURE);
            });
          }

          _this2._animationTimeout = null;
          removeClass(nextSlide, dirClass);
          removeClass(nextSlide, overlayClass);
          addClass(nextSlide, 'active');
          removeClass(currentSlide, 'active');
          removeClass(currentSlide, dirClass);
          removeClass(currentSlide, overlayClass);
          setAttr(currentSlide, 'aria-current', 'false');
          setAttr(nextSlide, 'aria-current', 'true');
          setAttr(currentSlide, 'aria-hidden', 'true');
          setAttr(nextSlide, 'aria-hidden', 'false');
          _this2.isSliding = false;
          _this2.direction = null; // Notify ourselves that we're done sliding (slid)

          _this2.$nextTick(function () {
            return _this2.$emit('sliding-end', to);
          });
        }; // Set up transitionend handler

        /* istanbul ignore if: transition events cant be tested in JSDOM */


        if (this.transitionEndEvent) {
          var events = this.transitionEndEvent.split(/\s+/);
          events.forEach(function (event) {
            return eventOn(currentSlide, event, onceTransEnd, EVENT_OPTIONS_NO_CAPTURE);
          });
        } // Fallback to setTimeout()


        this._animationTimeout = setTimeout(onceTransEnd, TRANS_DURATION);
      }

      if (isCycling) {
        this.start(false);
      }
    },
    // Update slide list
    updateSlides: function updateSlides() {
      this.pause(true); // Get all slides as DOM elements

      this.slides = selectAll('.carousel-item', this.$refs.inner);
      var numSlides = this.slides.length; // Keep slide number in range

      var index = Math.max(0, Math.min(Math.floor(this.index), numSlides - 1));
      this.slides.forEach(function (slide, idx) {
        var n = idx + 1;

        if (idx === index) {
          addClass(slide, 'active');
          setAttr(slide, 'aria-current', 'true');
        } else {
          removeClass(slide, 'active');
          setAttr(slide, 'aria-current', 'false');
        }

        setAttr(slide, 'aria-posinset', String(n));
        setAttr(slide, 'aria-setsize', String(numSlides));
      }); // Set slide as active

      this.setSlide(index);
      this.start(this.isPaused);
    },
    calcDirection: function calcDirection() {
      var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var curIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var nextIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      if (!direction) {
        return nextIndex > curIndex ? DIRECTION.next : DIRECTION.prev;
      }

      return DIRECTION[direction];
    },
    handleClick: function handleClick(evt, fn) {
      var keyCode = evt.keyCode;

      if (evt.type === 'click' || keyCode === KEY_CODES.SPACE || keyCode === KEY_CODES.ENTER) {
        evt.preventDefault();
        evt.stopPropagation();
        fn();
      }
    },
    handleSwipe: function handleSwipe()
    /* istanbul ignore next: JSDOM doesn't support touch events */
    {
      var absDeltaX = Math.abs(this.touchDeltaX);

      if (absDeltaX <= SWIPE_THRESHOLD) {
        return;
      }

      var direction = absDeltaX / this.touchDeltaX; // Reset touch delta X
      // https://github.com/twbs/bootstrap/pull/28558

      this.touchDeltaX = 0;

      if (direction > 0) {
        // Swipe left
        this.prev();
      } else if (direction < 0) {
        // Swipe right
        this.next();
      }
    },
    touchStart: function touchStart(evt)
    /* istanbul ignore next: JSDOM doesn't support touch events */
    {
      if (hasPointerEventSupport && PointerType[evt.pointerType.toUpperCase()]) {
        this.touchStartX = evt.clientX;
      } else if (!hasPointerEventSupport) {
        this.touchStartX = evt.touches[0].clientX;
      }
    },
    touchMove: function touchMove(evt)
    /* istanbul ignore next: JSDOM doesn't support touch events */
    {
      // Ensure swiping with one touch and not pinching
      if (evt.touches && evt.touches.length > 1) {
        this.touchDeltaX = 0;
      } else {
        this.touchDeltaX = evt.touches[0].clientX - this.touchStartX;
      }
    },
    touchEnd: function touchEnd(evt)
    /* istanbul ignore next: JSDOM doesn't support touch events */
    {
      if (hasPointerEventSupport && PointerType[evt.pointerType.toUpperCase()]) {
        this.touchDeltaX = evt.clientX - this.touchStartX;
      }

      this.handleSwipe(); // If it's a touch-enabled device, mouseenter/leave are fired as
      // part of the mouse compatibility events on first tap - the carousel
      // would stop cycling until user tapped out of it;
      // here, we listen for touchend, explicitly pause the carousel
      // (as if it's the second time we tap on it, mouseenter compat event
      // is NOT fired) and after a timeout (to allow for mouse compatibility
      // events to fire) we explicitly restart cycling

      this.pause(false);

      if (this._touchTimeout) {
        clearTimeout(this._touchTimeout);
      }

      this._touchTimeout = setTimeout(this.start, TOUCH_EVENT_COMPAT_WAIT + Math.max(1000, this.interval));
    }
  },
  render: function render(h) {
    var _this3 = this;

    // Wrapper for slides
    var inner = h('div', {
      ref: 'inner',
      class: ['carousel-inner'],
      attrs: {
        id: this.safeId('__BV_inner_'),
        role: 'list'
      }
    }, [this.normalizeSlot('default')]); // Prev and next controls

    var controls = h();

    if (this.controls) {
      var prevHandler = function prevHandler(evt) {
        /* istanbul ignore next */
        if (!_this3.isSliding) {
          _this3.handleClick(evt, _this3.prev);
        } else {
          evt.preventDefault();
        }
      };

      var nextHandler = function nextHandler(evt) {
        /* istanbul ignore next */
        if (!_this3.isSliding) {
          _this3.handleClick(evt, _this3.next);
        } else {
          evt.preventDefault();
        }
      };

      controls = [h('a', {
        class: ['carousel-control-prev'],
        attrs: {
          href: '#',
          role: 'button',
          'aria-controls': this.safeId('__BV_inner_'),
          'aria-disabled': this.isSliding ? 'true' : null
        },
        on: {
          click: prevHandler,
          keydown: prevHandler
        }
      }, [h('span', {
        class: ['carousel-control-prev-icon'],
        attrs: {
          'aria-hidden': 'true'
        }
      }), h('span', {
        class: ['sr-only']
      }, [this.labelPrev])]), h('a', {
        class: ['carousel-control-next'],
        attrs: {
          href: '#',
          role: 'button',
          'aria-controls': this.safeId('__BV_inner_'),
          'aria-disabled': this.isSliding ? 'true' : null
        },
        on: {
          click: nextHandler,
          keydown: nextHandler
        }
      }, [h('span', {
        class: ['carousel-control-next-icon'],
        attrs: {
          'aria-hidden': 'true'
        }
      }), h('span', {
        class: ['sr-only']
      }, [this.labelNext])])];
    } // Indicators


    var indicators = h('ol', {
      class: ['carousel-indicators'],
      directives: [{
        name: 'show',
        rawName: 'v-show',
        value: this.indicators,
        expression: 'indicators'
      }],
      attrs: {
        id: this.safeId('__BV_indicators_'),
        'aria-hidden': this.indicators ? 'false' : 'true',
        'aria-label': this.labelIndicators,
        'aria-owns': this.safeId('__BV_inner_')
      }
    }, this.slides.map(function (slide, n) {
      return h('li', {
        key: "slide_".concat(n),
        class: {
          active: n === _this3.index
        },
        attrs: {
          role: 'button',
          id: _this3.safeId("__BV_indicator_".concat(n + 1, "_")),
          tabindex: _this3.indicators ? '0' : '-1',
          'aria-current': n === _this3.index ? 'true' : 'false',
          'aria-label': "".concat(_this3.labelGotoSlide, " ").concat(n + 1),
          'aria-describedby': _this3.slides[n].id || null,
          'aria-controls': _this3.safeId('__BV_inner_')
        },
        on: {
          click: function click(evt) {
            _this3.handleClick(evt, function () {
              _this3.setSlide(n);
            });
          },
          keydown: function keydown(evt) {
            _this3.handleClick(evt, function () {
              _this3.setSlide(n);
            });
          }
        }
      });
    }));
    var on = {
      mouseenter: this.noHoverPause ? noop : this.pause,
      mouseleave: this.noHoverPause ? noop : this.restart,
      focusin: this.pause,
      focusout: this.restart,
      keydown: function keydown(evt) {
        if (/input|textarea/i.test(evt.target.tagName)) {
          /* istanbul ignore next */
          return;
        }

        var keyCode = evt.keyCode;

        if (keyCode === KEY_CODES.LEFT || keyCode === KEY_CODES.RIGHT) {
          evt.preventDefault();
          evt.stopPropagation();

          _this3[keyCode === KEY_CODES.LEFT ? 'prev' : 'next']();
        }
      }
    }; // Touch support event handlers for environment

    if (!this.noTouch && hasTouchSupport) {
      // Attach appropriate listeners (prepend event name with '&' for passive mode)

      /* istanbul ignore next: JSDOM doesn't support touch events */
      if (hasPointerEventSupport) {
        on['&pointerdown'] = this.touchStart;
        on['&pointerup'] = this.touchEnd;
      } else {
        on['&touchstart'] = this.touchStart;
        on['&touchmove'] = this.touchMove;
        on['&touchend'] = this.touchEnd;
      }
    } // Return the carousel


    return h('div', {
      staticClass: 'carousel',
      class: {
        slide: !this.noAnimation,
        'carousel-fade': !this.noAnimation && this.fade,
        'pointer-event': !this.noTouch && hasTouchSupport && hasPointerEventSupport
      },
      style: {
        background: this.background
      },
      attrs: {
        role: 'region',
        id: this.safeId(),
        'aria-busy': this.isSliding ? 'true' : 'false'
      },
      on: on
    }, [inner, controls, indicators]);
  }
});

var props$i = {
  imgSrc: {
    type: String // default: undefined

  },
  imgAlt: {
    type: String // default: undefined

  },
  imgWidth: {
    type: [Number, String] // default: undefined

  },
  imgHeight: {
    type: [Number, String] // default: undefined

  },
  imgBlank: {
    type: Boolean,
    default: false
  },
  imgBlankColor: {
    type: String,
    default: 'transparent'
  },
  contentVisibleUp: {
    type: String
  },
  contentTag: {
    type: String,
    default: 'div'
  },
  caption: {
    type: String
  },
  captionHtml: {
    type: String
  },
  captionTag: {
    type: String,
    default: 'h3'
  },
  text: {
    type: String
  },
  textHtml: {
    type: String
  },
  textTag: {
    type: String,
    default: 'p'
  },
  background: {
    type: String
  }
}; // @vue/component

var BCarouselSlide = /*#__PURE__*/Vue.extend({
  name: 'BCarouselSlide',
  mixins: [idMixin, normalizeSlotMixin],
  inject: {
    bvCarousel: {
      default: function _default() {
        return {
          // Explicitly disable touch if not a child of carousel
          noTouch: true
        };
      }
    }
  },
  props: props$i,
  computed: {
    contentClasses: function contentClasses() {
      return [this.contentVisibleUp ? 'd-none' : '', this.contentVisibleUp ? "d-".concat(this.contentVisibleUp, "-block") : ''];
    },
    computedWidth: function computedWidth() {
      // Use local width, or try parent width
      return this.imgWidth || this.bvCarousel.imgWidth || null;
    },
    computedHeight: function computedHeight() {
      // Use local height, or try parent height
      return this.imgHeight || this.bvCarousel.imgHeight || null;
    }
  },
  render: function render(h) {
    var noDrag = !this.bvCarousel.noTouch && hasTouchSupport;
    var img = this.normalizeSlot('img');

    if (!img && (this.imgSrc || this.imgBlank)) {
      img = h(BImg, {
        props: {
          fluidGrow: true,
          block: true,
          src: this.imgSrc,
          blank: this.imgBlank,
          blankColor: this.imgBlankColor,
          width: this.computedWidth,
          height: this.computedHeight,
          alt: this.imgAlt
        },
        // Touch support event handler
        on: noDrag ? {
          dragstart: function dragstart(e) {
            /* istanbul ignore next: difficult to test in JSDOM */
            e.preventDefault();
          }
        } : {}
      });
    }

    if (!img) {
      img = h();
    }

    var content = h();
    var contentChildren = [this.caption || this.captionHtml ? h(this.captionTag, {
      domProps: htmlOrText(this.captionHtml, this.caption)
    }) : false, this.text || this.textHtml ? h(this.textTag, {
      domProps: htmlOrText(this.textHtml, this.text)
    }) : false, this.normalizeSlot('default') || false];

    if (contentChildren.some(Boolean)) {
      content = h(this.contentTag, {
        staticClass: 'carousel-caption',
        class: this.contentClasses
      }, contentChildren.map(function (i) {
        return i || h();
      }));
    }

    return h('div', {
      staticClass: 'carousel-item',
      style: {
        background: this.background || this.bvCarousel.background || null
      },
      attrs: {
        id: this.safeId(),
        role: 'listitem'
      }
    }, [img, content]);
  }
});

var CarouselPlugin =
/*#__PURE*/
pluginFactory({
  components: {
    BCarousel: BCarousel,
    BCarouselSlide: BCarouselSlide
  }
});

// Generic collapse transion helper component

var onEnter = function onEnter(el) {
  el.style.height = 0; // Animaton frame delay neeeded for `appear` to work

  requestAF(function () {
    reflow(el);
    el.style.height = "".concat(el.scrollHeight, "px");
  });
};

var onAfterEnter = function onAfterEnter(el) {
  el.style.height = null;
};

var onLeave = function onLeave(el) {
  el.style.height = 'auto';
  el.style.display = 'block';
  el.style.height = "".concat(getBCR(el).height, "px");
  reflow(el);
  el.style.height = 0;
};

var onAfterLeave = function onAfterLeave(el) {
  el.style.height = null;
}; // Default transition props
// `appear` will use the enter classes


var TRANSITION_PROPS = {
  css: true,
  enterClass: '',
  enterActiveClass: 'collapsing',
  enterToClass: 'collapse show',
  leaveClass: 'collapse show',
  leaveActiveClass: 'collapsing',
  leaveToClass: 'collapse'
}; // Default transition handlers
// `appear` will use the enter handlers

var TRANSITION_HANDLERS = {
  enter: onEnter,
  afterEnter: onAfterEnter,
  leave: onLeave,
  afterLeave: onAfterLeave
}; // @vue/component

var BVCollapse = /*#__PURE__*/Vue.extend({
  name: 'BVCollapse',
  functional: true,
  props: {
    appear: {
      // If `true` (and `visible` is `true` on mount), animate initially visible
      type: Boolean,
      default: false
    }
  },
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h('transition', // We merge in the `appear` prop last
    mergeData(data, {
      props: TRANSITION_PROPS,
      on: TRANSITION_HANDLERS
    }, {
      props: props
    }), // Note: `<tranition>` supports a single root element only
    children);
  }
});

/**
 * Issue #569: collapse::toggle::state triggered too many times
 * @link https://github.com/bootstrap-vue/bootstrap-vue/issues/569
 */
// @vue/component
var listenOnRootMixin = {
  methods: {
    /**
     * Safely register event listeners on the root Vue node.
     * While Vue automatically removes listeners for individual components,
     * when a component registers a listener on root and is destroyed,
     * this orphans a callback because the node is gone,
     * but the root does not clear the callback.
     *
     * When registering a $root listener, it also registers a listener on
     * the component's `beforeDestroy` hook to automatically remove the
     * event listener from the $root instance.
     *
     * @param {string} event
     * @param {function} callback
     * @chainable
     */
    listenOnRoot: function listenOnRoot(event, callback) {
      var _this = this;

      this.$root.$on(event, callback);
      this.$on('hook:beforeDestroy', function () {
        _this.$root.$off(event, callback);
      }); // Return this for easy chaining

      return this;
    },

    /**
     * Safely register a $once event listener on the root Vue node.
     * While Vue automatically removes listeners for individual components,
     * when a component registers a listener on root and is destroyed,
     * this orphans a callback because the node is gone,
     * but the root does not clear the callback.
     *
     * When registering a $root listener, it also registers a listener on
     * the component's `beforeDestroy` hook to automatically remove the
     * event listener from the $root instance.
     *
     * @param {string} event
     * @param {function} callback
     * @chainable
     */
    listenOnRootOnce: function listenOnRootOnce(event, callback) {
      var _this2 = this;

      this.$root.$once(event, callback);
      this.$on('hook:beforeDestroy', function () {
        _this2.$root.$off(event, callback);
      }); // Return this for easy chaining

      return this;
    },

    /**
     * Convenience method for calling vm.$emit on vm.$root.
     * @param {string} event
     * @param {*} args
     * @chainable
     */
    emitOnRoot: function emitOnRoot(event) {
      var _this$$root;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      (_this$$root = this.$root).$emit.apply(_this$$root, [event].concat(args)); // Return this for easy chaining


      return this;
    }
  }
};

var EVENT_STATE = 'bv::collapse::state';
var EVENT_ACCORDION = 'bv::collapse::accordion'; // Private event we emit on `$root` to ensure the toggle state is
// always synced. It gets emitted even if the state has not changed!
// This event is NOT to be documented as people should not be using it

var EVENT_STATE_SYNC = 'bv::collapse::sync::state'; // Events we listen to on `$root`

var EVENT_TOGGLE = 'bv::toggle::collapse';
var EVENT_STATE_REQUEST = 'bv::request::collapse::state'; // @vue/component

var BCollapse = /*#__PURE__*/Vue.extend({
  name: 'BCollapse',
  mixins: [idMixin, listenOnRootMixin, normalizeSlotMixin],
  model: {
    prop: 'visible',
    event: 'input'
  },
  props: {
    isNav: {
      type: Boolean,
      default: false
    },
    accordion: {
      type: String,
      default: null
    },
    visible: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: 'div'
    },
    appear: {
      // If `true` (and `visible` is `true` on mount), animate initially visible
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      show: this.visible,
      transitioning: false
    };
  },
  computed: {
    classObject: function classObject() {
      return {
        'navbar-collapse': this.isNav,
        collapse: !this.transitioning,
        show: this.show && !this.transitioning
      };
    }
  },
  watch: {
    visible: function visible(newVal) {
      if (newVal !== this.show) {
        this.show = newVal;
      }
    },
    show: function show(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.emitState();
      }
    }
  },
  created: function created() {
    this.show = this.visible;
  },
  mounted: function mounted() {
    var _this = this;

    this.show = this.visible; // Listen for toggle events to open/close us

    this.listenOnRoot(EVENT_TOGGLE, this.handleToggleEvt); // Listen to other collapses for accordion events

    this.listenOnRoot(EVENT_ACCORDION, this.handleAccordionEvt);

    if (this.isNav) {
      // Set up handlers
      this.setWindowEvents(true);
      this.handleResize();
    }

    this.$nextTick(function () {
      _this.emitState();
    }); // Listen for "Sync state" requests from `v-b-toggle`

    this.listenOnRoot(EVENT_STATE_REQUEST, function (id) {
      if (id === _this.safeId()) {
        _this.$nextTick(_this.emitSync);
      }
    });
  },
  updated: function updated() {
    // Emit a private event every time this component updates to ensure
    // the toggle button is in sync with the collapse's state
    // It is emitted regardless if the visible state changes
    this.emitSync();
  },
  deactivated: function deactivated()
  /* istanbul ignore next */
  {
    if (this.isNav) {
      this.setWindowEvents(false);
    }
  },
  activated: function activated()
  /* istanbul ignore next */
  {
    if (this.isNav) {
      this.setWindowEvents(true);
    }

    this.emitSync();
  },
  beforeDestroy: function beforeDestroy() {
    // Trigger state emit if needed
    this.show = false;

    if (this.isNav && isBrowser) {
      this.setWindowEvents(false);
    }
  },
  methods: {
    setWindowEvents: function setWindowEvents(on) {
      eventOnOff(on, window, 'resize', this.handleResize, EVENT_OPTIONS_NO_CAPTURE);
      eventOnOff(on, window, 'orientationchange', this.handleResize, EVENT_OPTIONS_NO_CAPTURE);
    },
    toggle: function toggle() {
      this.show = !this.show;
    },
    onEnter: function onEnter() {
      this.transitioning = true; // This should be moved out so we can add cancellable events

      this.$emit('show');
    },
    onAfterEnter: function onAfterEnter() {
      this.transitioning = false;
      this.$emit('shown');
    },
    onLeave: function onLeave() {
      this.transitioning = true; // This should be moved out so we can add cancellable events

      this.$emit('hide');
    },
    onAfterLeave: function onAfterLeave() {
      this.transitioning = false;
      this.$emit('hidden');
    },
    emitState: function emitState() {
      this.$emit('input', this.show); // Let `v-b-toggle` know the state of this collapse

      this.$root.$emit(EVENT_STATE, this.safeId(), this.show);

      if (this.accordion && this.show) {
        // Tell the other collapses in this accordion to close
        this.$root.$emit(EVENT_ACCORDION, this.safeId(), this.accordion);
      }
    },
    emitSync: function emitSync() {
      // Emit a private event every time this component updates to ensure
      // the toggle button is in sync with the collapse's state
      // It is emitted regardless if the visible state changes
      this.$root.$emit(EVENT_STATE_SYNC, this.safeId(), this.show);
    },
    checkDisplayBlock: function checkDisplayBlock() {
      // Check to see if the collapse has `display: block !important` set
      // We can't set `display: none` directly on `this.$el`, as it would
      // trigger a new transition to start (or cancel a current one)
      var restore = hasClass(this.$el, 'show');
      removeClass(this.$el, 'show');
      var isBlock = getCS(this.$el).display === 'block';

      if (restore) {
        addClass(this.$el, 'show');
      }

      return isBlock;
    },
    clickHandler: function clickHandler(evt) {
      // If we are in a nav/navbar, close the collapse when non-disabled link clicked
      var el = evt.target;

      if (!this.isNav || !el || getCS(this.$el).display !== 'block') {
        /* istanbul ignore next: can't test getComputedStyle in JSDOM */
        return;
      }

      if (matches(el, '.nav-link,.dropdown-item') || closest('.nav-link,.dropdown-item', el)) {
        if (!this.checkDisplayBlock()) {
          // Only close the collapse if it is not forced to be `display: block !important`
          this.show = false;
        }
      }
    },
    handleToggleEvt: function handleToggleEvt(target) {
      if (target !== this.safeId()) {
        return;
      }

      this.toggle();
    },
    handleAccordionEvt: function handleAccordionEvt(openedId, accordion) {
      if (!this.accordion || accordion !== this.accordion) {
        return;
      }

      if (openedId === this.safeId()) {
        // Open this collapse if not shown
        if (!this.show) {
          this.toggle();
        }
      } else {
        // Close this collapse if shown
        if (this.show) {
          this.toggle();
        }
      }
    },
    handleResize: function handleResize() {
      // Handler for orientation/resize to set collapsed state in nav/navbar
      this.show = getCS(this.$el).display === 'block';
    }
  },
  render: function render(h) {
    var _this2 = this;

    var scope = {
      visible: this.show,
      close: function close() {
        return _this2.show = false;
      }
    };
    var content = h(this.tag, {
      class: this.classObject,
      directives: [{
        name: 'show',
        value: this.show
      }],
      attrs: {
        id: this.safeId()
      },
      on: {
        click: this.clickHandler
      }
    }, [this.normalizeSlot('default', scope)]);
    return h(BVCollapse, {
      props: {
        appear: this.appear
      },
      on: {
        enter: this.onEnter,
        afterEnter: this.onAfterEnter,
        leave: this.onLeave,
        afterLeave: this.onAfterLeave
      }
    }, [content]);
  }
});

var allListenTypes = {
  hover: true,
  click: true,
  focus: true
};
var BVBoundListeners = '__BV_boundEventListeners__';

var getTargets = function getTargets(binding) {
  var targets = keys(binding.modifiers || {}).filter(function (t) {
    return !allListenTypes[t];
  });

  if (binding.value) {
    targets.push(binding.value);
  }

  return targets;
};

var bindTargets = function bindTargets(vnode, binding, listenTypes, fn) {
  var targets = getTargets(binding);

  var listener = function listener() {
    fn({
      targets: targets,
      vnode: vnode
    });
  };

  keys(allListenTypes).forEach(function (type) {
    if (listenTypes[type] || binding.modifiers[type]) {
      eventOn(vnode.elm, type, listener);
      var boundListeners = vnode.elm[BVBoundListeners] || {};
      boundListeners[type] = boundListeners[type] || [];
      boundListeners[type].push(listener);
      vnode.elm[BVBoundListeners] = boundListeners;
    }
  }); // Return the list of targets

  return targets;
};

var unbindTargets = function unbindTargets(vnode, binding, listenTypes) {
  keys(allListenTypes).forEach(function (type) {
    if (listenTypes[type] || binding.modifiers[type]) {
      var boundListeners = vnode.elm[BVBoundListeners] && vnode.elm[BVBoundListeners][type];

      if (boundListeners) {
        boundListeners.forEach(function (listener) {
          return eventOff(vnode.elm, type, listener);
        });
        delete vnode.elm[BVBoundListeners][type];
      }
    }
  });
};

var listenTypes = {
  click: true
}; // Property key for handler storage

var BV_TOGGLE = '__BV_toggle__';
var BV_TOGGLE_STATE = '__BV_toggle_STATE__';
var BV_TOGGLE_CONTROLS = '__BV_toggle_CONTROLS__';
var BV_TOGGLE_TARGETS = '__BV_toggle_TARGETS__'; // Emitted control event for collapse (emitted to collapse)

var EVENT_TOGGLE$1 = 'bv::toggle::collapse'; // Listen to event for toggle state update (emitted by collapse)

var EVENT_STATE$1 = 'bv::collapse::state'; // Private event emitted on $root to ensure the toggle state is always synced.
// Gets emitted even if the state of b-collapse has not changed.
// This event is NOT to be documented as people should not be using it.

var EVENT_STATE_SYNC$1 = 'bv::collapse::sync::state'; // Private event we send to collapse to request state update sync event

var EVENT_STATE_REQUEST$1 = 'bv::request::collapse::state'; // Reset and remove a property from the provided element

var resetProp = function resetProp(el, prop) {
  el[prop] = null;
  delete el[prop];
}; // Handle targets update


var handleTargets = function handleTargets(_ref) {
  var targets = _ref.targets,
      vnode = _ref.vnode;
  targets.forEach(function (target) {
    vnode.context.$root.$emit(EVENT_TOGGLE$1, target);
  });
}; // Handle directive updates

/* istanbul ignore next: not easy to test */


var handleUpdate = function handleUpdate(el, binding, vnode) {
  if (!isBrowser) {
    return;
  }

  if (!looseEqual(getTargets(binding), el[BV_TOGGLE_TARGETS])) {
    // Targets have changed, so update accordingly
    unbindTargets(vnode, binding, listenTypes);
    var targets = bindTargets(vnode, binding, listenTypes, handleTargets); // Update targets array to element

    el[BV_TOGGLE_TARGETS] = targets; // Add aria attributes to element

    el[BV_TOGGLE_CONTROLS] = targets.join(' '); // ensure aria-controls is up to date

    setAttr(el, 'aria-controls', el[BV_TOGGLE_CONTROLS]); // Request a state update from targets so that we can ensure
    // expanded state is correct

    targets.forEach(function (target) {
      vnode.context.$root.$emit(EVENT_STATE_REQUEST$1, target);
    });
  } // Ensure the collapse class and aria-* attributes persist
  // after element is updated (either by parent re-rendering
  // or changes to this element or its contents


  if (el[BV_TOGGLE_STATE] === true) {
    addClass(el, 'collapsed');
    setAttr(el, 'aria-expanded', 'true');
  } else if (el[BV_TOGGLE_STATE] === false) {
    removeClass(el, 'collapsed');
    setAttr(el, 'aria-expanded', 'false');
  }

  setAttr(el, 'aria-controls', el[BV_TOGGLE_CONTROLS]);
};
/*
 * Export our directive
 */


var VBToggle = {
  bind: function bind(el, binding, vnode) {
    var targets = bindTargets(vnode, binding, listenTypes, handleTargets);

    if (isBrowser && vnode.context && targets.length > 0) {
      // Add targets array to element
      el[BV_TOGGLE_TARGETS] = targets; // Add aria attributes to element

      el[BV_TOGGLE_CONTROLS] = targets.join(' '); // State is initially collapsed until we receive a state event

      el[BV_TOGGLE_STATE] = false;
      setAttr(el, 'aria-controls', el[BV_TOGGLE_CONTROLS]);
      setAttr(el, 'aria-expanded', 'false'); // If element is not a button, we add `role="button"` for accessibility

      if (el.tagName !== 'BUTTON' && !hasAttr(el, 'role')) {
        setAttr(el, 'role', 'button');
      } // Toggle state handler


      var toggleDirectiveHandler = function toggleDirectiveHandler(id, state) {
        var targets = el[BV_TOGGLE_TARGETS] || [];

        if (targets.indexOf(id) !== -1) {
          // Set aria-expanded state
          setAttr(el, 'aria-expanded', state ? 'true' : 'false'); // Set/Clear 'collapsed' class state

          el[BV_TOGGLE_STATE] = state;

          if (state) {
            removeClass(el, 'collapsed');
          } else {
            addClass(el, 'collapsed');
          }
        }
      }; // Store the toggle handler on the element


      el[BV_TOGGLE] = toggleDirectiveHandler; // Listen for toggle state changes (public)

      vnode.context.$root.$on(EVENT_STATE$1, el[BV_TOGGLE]); // Listen for toggle state sync (private)

      vnode.context.$root.$on(EVENT_STATE_SYNC$1, el[BV_TOGGLE]);
    }
  },
  componentUpdated: handleUpdate,
  updated: handleUpdate,
  unbind: function unbind(el, binding, vnode)
  /* istanbul ignore next */
  {
    unbindTargets(vnode, binding, listenTypes); // Remove our $root listener

    if (el[BV_TOGGLE]) {
      vnode.context.$root.$off(EVENT_STATE$1, el[BV_TOGGLE]);
      vnode.context.$root.$off(EVENT_STATE_SYNC$1, el[BV_TOGGLE]);
    } // Reset custom  props


    resetProp(el, BV_TOGGLE);
    resetProp(el, BV_TOGGLE_STATE);
    resetProp(el, BV_TOGGLE_CONTROLS);
    resetProp(el, BV_TOGGLE_TARGETS); // Reset classes/attrs

    removeClass(el, 'collapsed');
    removeAttr(el, 'aria-expanded');
    removeAttr(el, 'aria-controls');
    removeAttr(el, 'role');
  }
};

var CollapsePlugin = /*#__PURE__*/pluginFactory({
  components: {
    BCollapse: BCollapse
  },
  directives: {
    VBToggle: VBToggle
  }
});

var BvEvent = /*#__PURE__*/function () {
  function BvEvent(type) {
    var eventInit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, BvEvent);

    // Start by emulating native Event constructor
    if (!type) {
      /* istanbul ignore next */
      throw new TypeError("Failed to construct '".concat(this.constructor.name, "'. 1 argument required, ").concat(arguments.length, " given."));
    } // Merge defaults first, the eventInit, and the type last
    // so it can't be overwritten


    assign(this, BvEvent.Defaults, this.constructor.Defaults, eventInit, {
      type: type
    }); // Freeze some props as readonly, but leave them enumerable

    defineProperties(this, {
      type: readonlyDescriptor(),
      cancelable: readonlyDescriptor(),
      nativeEvent: readonlyDescriptor(),
      target: readonlyDescriptor(),
      relatedTarget: readonlyDescriptor(),
      vueTarget: readonlyDescriptor(),
      componentId: readonlyDescriptor()
    }); // Create a private variable using closure scoping

    var defaultPrevented = false; // Recreate preventDefault method. One way setter

    this.preventDefault = function preventDefault() {
      if (this.cancelable) {
        defaultPrevented = true;
      }
    }; // Create `defaultPrevented` publicly accessible prop that
    // can only be altered by the preventDefault method


    defineProperty(this, 'defaultPrevented', {
      enumerable: true,
      get: function get() {
        return defaultPrevented;
      }
    });
  }

  _createClass(BvEvent, null, [{
    key: "Defaults",
    get: function get() {
      return {
        type: '',
        cancelable: true,
        nativeEvent: null,
        target: null,
        relatedTarget: null,
        vueTarget: null,
        componentId: null
      };
    }
  }]);

  return BvEvent;
}(); // Named Exports

var clickOutMixin = {
  data: function data() {
    return {
      listenForClickOut: false
    };
  },
  watch: {
    listenForClickOut: function listenForClickOut(newValue, oldValue) {
      if (newValue !== oldValue) {
        eventOff(this.clickOutElement, this.clickOutEventName, this._clickOutHandler, EVENT_OPTIONS_NO_CAPTURE);

        if (newValue) {
          eventOn(this.clickOutElement, this.clickOutEventName, this._clickOutHandler, EVENT_OPTIONS_NO_CAPTURE);
        }
      }
    }
  },
  beforeCreate: function beforeCreate() {
    // Declare non-reactive properties
    this.clickOutElement = null;
    this.clickOutEventName = null;
  },
  mounted: function mounted() {
    if (!this.clickOutElement) {
      this.clickOutElement = document;
    }

    if (!this.clickOutEventName) {
      this.clickOutEventName = 'click';
    }

    if (this.listenForClickOut) {
      eventOn(this.clickOutElement, this.clickOutEventName, this._clickOutHandler, EVENT_OPTIONS_NO_CAPTURE);
    }
  },
  beforeDestroy: function beforeDestroy()
  /* istanbul ignore next */
  {
    eventOff(this.clickOutElement, this.clickOutEventName, this._clickOutHandler, EVENT_OPTIONS_NO_CAPTURE);
  },
  methods: {
    isClickOut: function isClickOut(evt) {
      return !contains(this.$el, evt.target);
    },
    _clickOutHandler: function _clickOutHandler(evt) {
      if (this.clickOutHandler && this.isClickOut(evt)) {
        this.clickOutHandler(evt);
      }
    }
  }
};

var focusInMixin = {
  data: function data() {
    return {
      listenForFocusIn: false
    };
  },
  watch: {
    listenForFocusIn: function listenForFocusIn(newValue, oldValue) {
      if (newValue !== oldValue) {
        eventOff(this.focusInElement, 'focusin', this._focusInHandler, EVENT_OPTIONS_NO_CAPTURE);

        if (newValue) {
          eventOn(this.focusInElement, 'focusin', this._focusInHandler, EVENT_OPTIONS_NO_CAPTURE);
        }
      }
    }
  },
  beforeCreate: function beforeCreate() {
    // Declare non-reactive properties
    this.focusInElement = null;
  },
  mounted: function mounted() {
    if (!this.focusInElement) {
      this.focusInElement = document;
    }

    if (this.listenForFocusIn) {
      eventOn(this.focusInElement, 'focusin', this._focusInHandler, EVENT_OPTIONS_NO_CAPTURE);
    }
  },
  beforeDestroy: function beforeDestroy()
  /* istanbul ignore next */
  {
    eventOff(this.focusInElement, 'focusin', this._focusInHandler, EVENT_OPTIONS_NO_CAPTURE);
  },
  methods: {
    _focusInHandler: function _focusInHandler(evt) {
      if (this.focusInHandler) {
        this.focusInHandler(evt);
      }
    }
  }
};

var filterVisibles = function filterVisibles(els) {
  return (els || []).filter(isVisible);
}; // Root dropdown event names


var ROOT_DROPDOWN_PREFIX = 'bv::dropdown::';
var ROOT_DROPDOWN_SHOWN = "".concat(ROOT_DROPDOWN_PREFIX, "shown");
var ROOT_DROPDOWN_HIDDEN = "".concat(ROOT_DROPDOWN_PREFIX, "hidden"); // Dropdown item CSS selectors

var Selector = {
  FORM_CHILD: '.dropdown form',
  ITEM_SELECTOR: ['.dropdown-item', '.b-dropdown-form'].map(function (selector) {
    return "".concat(selector, ":not(.disabled):not([disabled])");
  }).join(', ')
}; // Popper attachment positions

var AttachmentMap = {
  // Dropup left align
  TOP: 'top-start',
  // Dropup right align
  TOPEND: 'top-end',
  // Dropdown left align
  BOTTOM: 'bottom-start',
  // Dropdown right align
  BOTTOMEND: 'bottom-end',
  // Dropright left align
  RIGHT: 'right-start',
  // Dropright right align
  RIGHTEND: 'right-end',
  // Dropleft left align
  LEFT: 'left-start',
  // Dropleft right align
  LEFTEND: 'left-end'
};
var commonProps = {
  dropup: {
    // place on top if possible
    type: Boolean,
    default: false
  },
  dropright: {
    // place right if possible
    type: Boolean,
    default: false
  },
  dropleft: {
    // place left if possible
    type: Boolean,
    default: false
  },
  right: {
    // Right align menu (default is left align)
    type: Boolean,
    default: false
  },
  offset: {
    // Number of pixels to offset menu, or a CSS unit value (i.e. 1px, 1rem, etc)
    type: [Number, String],
    default: 0
  },
  noFlip: {
    // Disable auto-flipping of menu from bottom<=>top
    type: Boolean,
    default: false
  },
  popperOpts: {
    // type: Object,
    default: function _default() {}
  },
  boundary: {
    // String: `scrollParent`, `window` or `viewport`
    // HTMLElement: HTML Element reference
    type: [String, HTMLElement],
    default: 'scrollParent'
  }
}; // @vue/component

var dropdownMixin = {
  mixins: [idMixin, clickOutMixin, focusInMixin],
  provide: function provide() {
    return {
      bvDropdown: this
    };
  },
  inject: {
    bvNavbar: {
      default: null
    }
  },
  props: _objectSpread2({
    disabled: {
      type: Boolean,
      default: false
    }
  }, commonProps),
  data: function data() {
    return {
      visible: false,
      visibleChangePrevented: false
    };
  },
  computed: {
    inNavbar: function inNavbar() {
      return !isNull(this.bvNavbar);
    },
    toggler: function toggler() {
      var toggle = this.$refs.toggle;
      return toggle ? toggle.$el || toggle : null;
    },
    directionClass: function directionClass() {
      if (this.dropup) {
        return 'dropup';
      } else if (this.dropright) {
        return 'dropright';
      } else if (this.dropleft) {
        return 'dropleft';
      }

      return '';
    }
  },
  watch: {
    visible: function visible(newValue, oldValue) {
      if (this.visibleChangePrevented) {
        this.visibleChangePrevented = false;
        return;
      }

      if (newValue !== oldValue) {
        var evtName = newValue ? 'show' : 'hide';
        var bvEvt = new BvEvent(evtName, {
          cancelable: true,
          vueTarget: this,
          target: this.$refs.menu,
          relatedTarget: null,
          componentId: this.safeId ? this.safeId() : this.id || null
        });
        this.emitEvent(bvEvt);

        if (bvEvt.defaultPrevented) {
          // Reset value and exit if canceled
          this.visibleChangePrevented = true;
          this.visible = oldValue; // Just in case a child element triggered `this.hide(true)`

          this.$off('hidden', this.focusToggler);
          return;
        }

        if (evtName === 'show') {
          this.showMenu();
        } else {
          this.hideMenu();
        }
      }
    },
    disabled: function disabled(newValue, oldValue) {
      if (newValue !== oldValue && newValue && this.visible) {
        // Hide dropdown if disabled changes to true
        this.visible = false;
      }
    }
  },
  created: function created() {
    // Create non-reactive property
    this.$_popper = null;
  },
  deactivated: function deactivated()
  /* istanbul ignore next: not easy to test */
  {
    // In case we are inside a `<keep-alive>`
    this.visible = false;
    this.whileOpenListen(false);
    this.destroyPopper();
  },
  beforeDestroy: function beforeDestroy() {
    this.visible = false;
    this.whileOpenListen(false);
    this.destroyPopper();
  },
  methods: {
    // Event emitter
    emitEvent: function emitEvent(bvEvt) {
      var type = bvEvt.type;
      this.$emit(type, bvEvt);
      this.$root.$emit("".concat(ROOT_DROPDOWN_PREFIX).concat(type), bvEvt);
    },
    showMenu: function showMenu() {
      var _this = this;

      if (this.disabled) {
        /* istanbul ignore next */
        return;
      } // Only instantiate Popper.js when dropdown is not in `<b-navbar>`


      if (!this.inNavbar) {
        if (typeof Popper === 'undefined') {
          /* istanbul ignore next */
          warn('Popper.js not found. Falling back to CSS positioning', 'BDropdown');
        } else {
          // For dropup with alignment we use the parent element as popper container
          var el = this.dropup && this.right || this.split ? this.$el : this.$refs.toggle; // Make sure we have a reference to an element, not a component!

          el = el.$el || el; // Instantiate Popper.js

          this.createPopper(el);
        }
      } // Ensure other menus are closed


      this.$root.$emit(ROOT_DROPDOWN_SHOWN, this); // Enable listeners

      this.whileOpenListen(true); // Wrap in `$nextTick()` to ensure menu is fully rendered/shown

      this.$nextTick(function () {
        // Focus on the menu container on show
        _this.focusMenu(); // Emit the shown event


        _this.$emit('shown');
      });
    },
    hideMenu: function hideMenu() {
      this.whileOpenListen(false);
      this.$root.$emit(ROOT_DROPDOWN_HIDDEN, this);
      this.$emit('hidden');
      this.destroyPopper();
    },
    createPopper: function createPopper(element) {
      this.destroyPopper();
      this.$_popper = new Popper(element, this.$refs.menu, this.getPopperConfig());
    },
    destroyPopper: function destroyPopper() {
      // Ensure popper event listeners are removed cleanly
      if (this.$_popper) {
        this.$_popper.destroy();
      }

      this.$_popper = null;
    },
    updatePopper: function updatePopper()
    /* istanbul ignore next: not easy to test */
    {
      // Instructs popper to re-computes the dropdown position
      // usefull if the content changes size
      try {
        this.$_popper.scheduleUpdate();
      } catch (_unused) {}
    },
    getPopperConfig: function getPopperConfig() {
      var placement = AttachmentMap.BOTTOM;

      if (this.dropup) {
        placement = this.right ? AttachmentMap.TOPEND : AttachmentMap.TOP;
      } else if (this.dropright) {
        placement = AttachmentMap.RIGHT;
      } else if (this.dropleft) {
        placement = AttachmentMap.LEFT;
      } else if (this.right) {
        placement = AttachmentMap.BOTTOMEND;
      }

      var popperConfig = {
        placement: placement,
        modifiers: {
          offset: {
            offset: this.offset || 0
          },
          flip: {
            enabled: !this.noFlip
          }
        }
      };

      if (this.boundary) {
        popperConfig.modifiers.preventOverflow = {
          boundariesElement: this.boundary
        };
      }

      return _objectSpread2({}, popperConfig, {}, this.popperOpts || {});
    },
    // Turn listeners on/off while open
    whileOpenListen: function whileOpenListen(isOpen) {
      // Hide the dropdown when clicked outside
      this.listenForClickOut = isOpen; // Hide the dropdown when it loses focus

      this.listenForFocusIn = isOpen; // Hide the dropdown when another dropdown is opened

      var method = isOpen ? '$on' : '$off';
      this.$root[method](ROOT_DROPDOWN_SHOWN, this.rootCloseListener);
    },
    rootCloseListener: function rootCloseListener(vm) {
      if (vm !== this) {
        this.visible = false;
      }
    },
    show: function show() {
      var _this2 = this;

      // Public method to show dropdown
      if (this.disabled) {
        return;
      } // Wrap in a `requestAF()` to allow any previous
      // click handling to occur first


      requestAF(function () {
        _this2.visible = true;
      });
    },
    hide: function hide() {
      var refocus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      // Public method to hide dropdown
      if (this.disabled) {
        /* istanbul ignore next */
        return;
      }

      this.visible = false;

      if (refocus) {
        // Child element is closing the dropdown on click
        this.$once('hidden', this.focusToggler);
      }
    },
    // Called only by a button that toggles the menu
    toggle: function toggle(evt) {
      evt = evt || {}; // Early exit when not a click event or ENTER, SPACE or DOWN were pressed

      var _evt = evt,
          type = _evt.type,
          keyCode = _evt.keyCode;

      if (type !== 'click' && !(type === 'keydown' && [KEY_CODES.ENTER, KEY_CODES.SPACE, KEY_CODES.DOWN].indexOf(keyCode) !== -1)) {
        /* istanbul ignore next */
        return;
      }
      /* istanbul ignore next */


      if (this.disabled) {
        this.visible = false;
        return;
      }

      this.$emit('toggle', evt);
      evt.preventDefault();
      evt.stopPropagation(); // Toggle visibility

      if (this.visible) {
        this.hide(true);
      } else {
        this.show();
      }
    },
    // Mousedown handler for the toggle
    onMousedown: function onMousedown(evt)
    /* istanbul ignore next */
    {
      // We prevent the 'mousedown' event for the toggle to stop the
      // 'focusin' event from being fired
      // The event would otherwise be picked up by the global 'focusin'
      // listener and there is no cross-browser solution to detect it
      // relates to the toggle click
      // The 'click' event will still be fired and we handle closing
      // other dropdowns there too
      // See https://github.com/bootstrap-vue/bootstrap-vue/issues/4328
      evt.preventDefault();
    },
    // Called from dropdown menu context
    onKeydown: function onKeydown(evt) {
      var keyCode = evt.keyCode;

      if (keyCode === KEY_CODES.ESC) {
        // Close on ESC
        this.onEsc(evt);
      } else if (keyCode === KEY_CODES.DOWN) {
        // Down Arrow
        this.focusNext(evt, false);
      } else if (keyCode === KEY_CODES.UP) {
        // Up Arrow
        this.focusNext(evt, true);
      }
    },
    // If user presses ESC, close the menu
    onEsc: function onEsc(evt) {
      if (this.visible) {
        this.visible = false;
        evt.preventDefault();
        evt.stopPropagation(); // Return focus to original trigger button

        this.$once('hidden', this.focusToggler);
      }
    },
    // Called only in split button mode, for the split button
    onSplitClick: function onSplitClick(evt) {
      /* istanbul ignore next */
      if (this.disabled) {
        this.visible = false;
        return;
      }

      this.$emit('click', evt);
    },
    // Shared hide handler between click-out and focus-in events
    hideHandler: function hideHandler(evt) {
      var target = evt.target;

      if (this.visible && !contains(this.$refs.menu, target) && !contains(this.toggler, target)) {
        this.hide();
      }
    },
    // Document click-out listener
    clickOutHandler: function clickOutHandler(evt) {
      this.hideHandler(evt);
    },
    // Document focus-in listener
    focusInHandler: function focusInHandler(evt) {
      this.hideHandler(evt);
    },
    // Keyboard nav
    focusNext: function focusNext(evt, up) {
      var _this3 = this;

      // Ignore key up/down on form elements
      var target = evt.target;

      if (!this.visible || evt && closest(Selector.FORM_CHILD, target)) {
        /* istanbul ignore next: should never happen */
        return;
      }

      evt.preventDefault();
      evt.stopPropagation();
      this.$nextTick(function () {
        var items = _this3.getItems();

        if (items.length < 1) {
          /* istanbul ignore next: should never happen */
          return;
        }

        var index = items.indexOf(target);

        if (up && index > 0) {
          index--;
        } else if (!up && index < items.length - 1) {
          index++;
        }

        if (index < 0) {
          /* istanbul ignore next: should never happen */
          index = 0;
        }

        _this3.focusItem(index, items);
      });
    },
    focusItem: function focusItem(idx, items) {
      var el = items.find(function (el, i) {
        return i === idx;
      });

      if (el && el.focus) {
        el.focus();
      }
    },
    getItems: function getItems() {
      // Get all items
      return filterVisibles(selectAll(Selector.ITEM_SELECTOR, this.$refs.menu));
    },
    focusMenu: function focusMenu() {
      try {
        this.$refs.menu.focus();
      } catch (_unused2) {}
    },
    focusToggler: function focusToggler() {
      var _this4 = this;

      this.$nextTick(function () {
        var toggler = _this4.toggler;

        if (toggler && toggler.focus) {
          toggler.focus();
        }
      });
    }
  }
};

var NAME$b = 'BDropdown';
var props$j = {
  text: {
    // Button label
    type: String,
    default: ''
  },
  html: {
    // Button label
    type: String
  },
  size: {
    type: String,
    default: function _default() {
      return getComponentConfig(NAME$b, 'size');
    }
  },
  variant: {
    type: String,
    default: function _default() {
      return getComponentConfig(NAME$b, 'variant');
    }
  },
  block: {
    type: Boolean,
    default: false
  },
  menuClass: {
    type: [String, Array, Object],
    default: null
  },
  toggleTag: {
    type: String,
    default: 'button'
  },
  toggleText: {
    // This really should be toggleLabel
    type: String,
    default: function _default() {
      return getComponentConfig(NAME$b, 'toggleText');
    }
  },
  toggleClass: {
    type: [String, Array, Object],
    default: null
  },
  noCaret: {
    type: Boolean,
    default: false
  },
  split: {
    type: Boolean,
    default: false
  },
  splitHref: {
    type: String // default: undefined

  },
  splitTo: {
    type: [String, Object] // default: undefined

  },
  splitVariant: {
    type: String,
    default: function _default() {
      return getComponentConfig(NAME$b, 'splitVariant');
    }
  },
  splitClass: {
    type: [String, Array, Object],
    default: null
  },
  splitButtonType: {
    type: String,
    default: 'button',
    validator: function validator(value) {
      return arrayIncludes(['button', 'submit', 'reset'], value);
    }
  },
  lazy: {
    // If true, only render menu contents when open
    type: Boolean,
    default: false
  },
  role: {
    type: String,
    default: 'menu'
  }
}; // @vue/component

var BDropdown = /*#__PURE__*/Vue.extend({
  name: NAME$b,
  mixins: [idMixin, dropdownMixin, normalizeSlotMixin],
  props: props$j,
  computed: {
    dropdownClasses: function dropdownClasses() {
      return [this.directionClass, {
        show: this.visible,
        // The 'btn-group' class is required in `split` mode for button alignment
        // It needs also to be applied when `block` is disabled to allow multiple
        // dropdowns to be aligned one line
        'btn-group': this.split || !this.block,
        // When `block` is enabled and we are in `split` mode the 'd-flex' class
        // needs to be applied to allow the buttons to stretch to full width
        'd-flex': this.block && this.split,
        // Position `static` is needed to allow menu to "breakout" of the `scrollParent`
        // boundaries when boundary is anything other than `scrollParent`
        // See: https://github.com/twbs/bootstrap/issues/24251#issuecomment-341413786
        'position-static': this.boundary !== 'scrollParent' || !this.boundary
      }];
    },
    menuClasses: function menuClasses() {
      return [this.menuClass, {
        'dropdown-menu-right': this.right,
        show: this.visible
      }];
    },
    toggleClasses: function toggleClasses() {
      return [this.toggleClass, {
        'dropdown-toggle-split': this.split,
        'dropdown-toggle-no-caret': this.noCaret && !this.split
      }];
    }
  },
  render: function render(h) {
    var split = h();
    var buttonContent = this.normalizeSlot('button-content') || this.html || stripTags(this.text);

    if (this.split) {
      var btnProps = {
        variant: this.splitVariant || this.variant,
        size: this.size,
        block: this.block,
        disabled: this.disabled
      }; // We add these as needed due to router-link issues with defined property with undefined/null values

      if (this.splitTo) {
        btnProps.to = this.splitTo;
      } else if (this.splitHref) {
        btnProps.href = this.splitHref;
      } else if (this.splitButtonType) {
        btnProps.type = this.splitButtonType;
      }

      split = h(BButton, {
        ref: 'button',
        props: btnProps,
        class: this.splitClass,
        attrs: {
          id: this.safeId('_BV_button_')
        },
        on: {
          click: this.onSplitClick
        }
      }, [buttonContent]);
    }

    var toggle = h(BButton, {
      ref: 'toggle',
      staticClass: 'dropdown-toggle',
      class: this.toggleClasses,
      props: {
        tag: this.toggleTag,
        variant: this.variant,
        size: this.size,
        block: this.block && !this.split,
        disabled: this.disabled
      },
      attrs: {
        id: this.safeId('_BV_toggle_'),
        'aria-haspopup': 'true',
        'aria-expanded': this.visible ? 'true' : 'false'
      },
      on: {
        mousedown: this.onMousedown,
        click: this.toggle,
        keydown: this.toggle // Handle ENTER, SPACE and DOWN

      }
    }, [this.split ? h('span', {
      class: ['sr-only']
    }, [this.toggleText]) : buttonContent]);
    var menu = h('ul', {
      ref: 'menu',
      staticClass: 'dropdown-menu',
      class: this.menuClasses,
      attrs: {
        role: this.role,
        tabindex: '-1',
        'aria-labelledby': this.safeId(this.split ? '_BV_button_' : '_BV_toggle_')
      },
      on: {
        keydown: this.onKeydown // Handle UP, DOWN and ESC

      }
    }, !this.lazy || this.visible ? this.normalizeSlot('default', {
      hide: this.hide
    }) : [h()]);
    return h('div', {
      staticClass: 'dropdown b-dropdown',
      class: this.dropdownClasses,
      attrs: {
        id: this.safeId()
      }
    }, [split, toggle, menu]);
  }
});

var props$k = propsFactory(); // @vue/component

var BDropdownItem = /*#__PURE__*/Vue.extend({
  name: 'BDropdownItem',
  mixins: [normalizeSlotMixin],
  inheritAttrs: false,
  inject: {
    bvDropdown: {
      default: null
    }
  },
  props: _objectSpread2({}, props$k, {
    variant: {
      type: String,
      default: null
    }
  }),
  methods: {
    closeDropdown: function closeDropdown() {
      var _this = this;

      // Close on next animation frame to allow <b-link> time to process
      requestAF(function () {
        if (_this.bvDropdown) {
          _this.bvDropdown.hide(true);
        }
      });
    },
    onClick: function onClick(evt) {
      this.$emit('click', evt);
      this.closeDropdown();
    }
  },
  render: function render(h) {
    return h('li', {
      attrs: {
        role: 'presentation'
      }
    }, [h(BLink, {
      props: this.$props,
      staticClass: 'dropdown-item',
      class: _defineProperty({}, "text-".concat(this.variant), this.variant && !(this.active || this.disabled)),
      attrs: _objectSpread2({}, this.$attrs, {
        role: 'menuitem'
      }),
      on: {
        click: this.onClick
      },
      ref: 'item'
    }, this.normalizeSlot('default'))]);
  }
});

var props$l = {
  active: {
    type: Boolean,
    default: false
  },
  activeClass: {
    type: String,
    default: 'active'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  variant: {
    type: String,
    default: null
  }
}; // @vue/component

var BDropdownItemButton = /*#__PURE__*/Vue.extend({
  name: 'BDropdownItemButton',
  mixins: [normalizeSlotMixin],
  inheritAttrs: false,
  inject: {
    bvDropdown: {
      default: null
    }
  },
  props: props$l,
  methods: {
    closeDropdown: function closeDropdown() {
      if (this.bvDropdown) {
        this.bvDropdown.hide(true);
      }
    },
    onClick: function onClick(evt) {
      this.$emit('click', evt);
      this.closeDropdown();
    }
  },
  render: function render(h) {
    var _class;

    return h('li', {
      attrs: {
        role: 'presentation'
      }
    }, [h('button', {
      staticClass: 'dropdown-item',
      class: (_class = {}, _defineProperty(_class, this.activeClass, this.active), _defineProperty(_class, "text-".concat(this.variant), this.variant && !(this.active || this.disabled)), _class),
      attrs: _objectSpread2({}, this.$attrs, {
        role: 'menuitem',
        type: 'button',
        disabled: this.disabled
      }),
      on: {
        click: this.onClick
      },
      ref: 'button'
    }, this.normalizeSlot('default'))]);
  }
});

var props$m = {
  id: {
    type: String,
    default: null
  },
  tag: {
    type: String,
    default: 'header'
  },
  variant: {
    type: String,
    default: null
  }
}; // @vue/component

var BDropdownHeader = /*#__PURE__*/Vue.extend({
  name: 'BDropdownHeader',
  functional: true,
  props: props$m,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var $attrs = data.attrs || {};
    data.attrs = {};
    return h('li', mergeData(data, {
      attrs: {
        role: 'presentation'
      }
    }), [h(props.tag, {
      staticClass: 'dropdown-header',
      class: _defineProperty({}, "text-".concat(props.variant), props.variant),
      attrs: _objectSpread2({}, $attrs, {
        id: props.id || null,
        role: 'heading'
      }),
      ref: 'header'
    }, children)]);
  }
});

var props$n = {
  tag: {
    type: String,
    default: 'hr'
  }
}; // @vue/component

var BDropdownDivider = /*#__PURE__*/Vue.extend({
  name: 'BDropdownDivider',
  functional: true,
  props: props$n,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data;
    var $attrs = data.attrs || {};
    data.attrs = {};
    return h('li', mergeData(data, {
      attrs: {
        role: 'presentation'
      }
    }), [h(props.tag, {
      staticClass: 'dropdown-divider',
      attrs: _objectSpread2({}, $attrs, {
        role: 'separator',
        'aria-orientation': 'horizontal'
      }),
      ref: 'divider'
    })]);
  }
});

var props$o = {
  id: {
    type: String,
    default: null
  },
  inline: {
    type: Boolean,
    default: false
  },
  novalidate: {
    type: Boolean,
    default: false
  },
  validated: {
    type: Boolean,
    default: false
  }
}; // @vue/component

var BForm = /*#__PURE__*/Vue.extend({
  name: 'BForm',
  functional: true,
  props: props$o,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h('form', mergeData(data, {
      class: {
        'form-inline': props.inline,
        'was-validated': props.validated
      },
      attrs: {
        id: props.id,
        novalidate: props.novalidate
      }
    }), children);
  }
});

var BDropdownForm = /*#__PURE__*/Vue.extend({
  name: 'BDropdownForm',
  functional: true,
  props: _objectSpread2({}, props$o, {
    disabled: {
      type: Boolean,
      default: false
    },
    formClass: {
      type: [String, Object, Array],
      default: null
    }
  }),
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var $attrs = data.attrs || {};
    var $listeners = data.on || {};
    data.attrs = {};
    data.on = {};
    return h('li', mergeData(data, {
      attrs: {
        role: 'presentation'
      }
    }), [h(BForm, {
      ref: 'form',
      staticClass: 'b-dropdown-form',
      class: [props.formClass, {
        disabled: props.disabled
      }],
      props: props,
      attrs: _objectSpread2({}, $attrs, {
        disabled: props.disabled,
        // Tab index of -1 for keyboard navigation
        tabindex: props.disabled ? null : '-1'
      }),
      on: $listeners
    }, children)]);
  }
});

var BDropdownText = /*#__PURE__*/Vue.extend({
  name: 'BDropdownText',
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'p'
    },
    variant: {
      type: String,
      default: null
    }
  },
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var $attrs = data.attrs || {};
    data.attrs = {};
    return h('li', mergeData(data, {
      attrs: {
        role: 'presentation'
      }
    }), [h(props.tag, {
      staticClass: 'b-dropdown-text',
      class: _defineProperty({}, "text-".concat(props.variant), props.variant),
      props: props,
      attrs: $attrs,
      ref: 'text'
    }, children)]);
  }
});

var props$p = {
  id: {
    type: String,
    default: null
  },
  header: {
    type: String,
    default: null
  },
  headerTag: {
    type: String,
    default: 'header'
  },
  headerVariant: {
    type: String,
    default: null
  },
  headerClasses: {
    type: [String, Array, Object],
    default: null
  },
  ariaDescribedby: {
    type: String,
    default: null
  }
}; // @vue/component

var BDropdownGroup = /*#__PURE__*/Vue.extend({
  name: 'BDropdownGroup',
  functional: true,
  props: props$p,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        slots = _ref.slots,
        scopedSlots = _ref.scopedSlots;
    var $slots = slots();
    var $scopedSlots = scopedSlots || {};
    var $attrs = data.attrs || {};
    data.attrs = {};
    var header;
    var headerId = null;

    if (hasNormalizedSlot('header', $scopedSlots, $slots) || props.header) {
      headerId = props.id ? "_bv_".concat(props.id, "_group_dd_header") : null;
      header = h(props.headerTag, {
        staticClass: 'dropdown-header',
        class: [props.headerClasses, _defineProperty({}, "text-".concat(props.variant), props.variant)],
        attrs: {
          id: headerId,
          role: 'heading'
        }
      }, normalizeSlot('header', {}, $scopedSlots, $slots) || props.header);
    }

    var adb = [headerId, props.ariaDescribedBy].filter(Boolean).join(' ').trim();
    return h('li', mergeData(data, {
      attrs: {
        role: 'presentation'
      }
    }), [header || h(), h('ul', {
      staticClass: 'list-unstyled',
      attrs: _objectSpread2({}, $attrs, {
        id: props.id || null,
        role: 'group',
        'aria-describedby': adb || null
      })
    }, normalizeSlot('default', {}, $scopedSlots, $slots))]);
  }
});

var DropdownPlugin = /*#__PURE__*/pluginFactory({
  components: {
    BDropdown: BDropdown,
    BDd: BDropdown,
    BDropdownItem: BDropdownItem,
    BDdItem: BDropdownItem,
    BDropdownItemButton: BDropdownItemButton,
    BDropdownItemBtn: BDropdownItemButton,
    BDdItemButton: BDropdownItemButton,
    BDdItemBtn: BDropdownItemButton,
    BDropdownHeader: BDropdownHeader,
    BDdHeader: BDropdownHeader,
    BDropdownDivider: BDropdownDivider,
    BDdDivider: BDropdownDivider,
    BDropdownForm: BDropdownForm,
    BDdForm: BDropdownForm,
    BDropdownText: BDropdownText,
    BDdText: BDropdownText,
    BDropdownGroup: BDropdownGroup,
    BDdGroup: BDropdownGroup
  }
});

var props$q = {
  type: {
    type: String,
    default: 'iframe',
    validator: function validator(str) {
      return arrayIncludes(['iframe', 'embed', 'video', 'object', 'img', 'b-img', 'b-img-lazy'], str);
    }
  },
  tag: {
    type: String,
    default: 'div'
  },
  aspect: {
    type: String,
    default: '16by9'
  }
}; // @vue/component

var BEmbed = /*#__PURE__*/Vue.extend({
  name: 'BEmbed',
  functional: true,
  props: props$q,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, {
      ref: data.ref,
      staticClass: 'embed-responsive',
      class: _defineProperty({}, "embed-responsive-".concat(props.aspect), props.aspect)
    }, [h(props.type, mergeData(data, {
      ref: '',
      staticClass: 'embed-responsive-item'
    }), children)]);
  }
});

var EmbedPlugin = /*#__PURE__*/pluginFactory({
  components: {
    BEmbed: BEmbed
  }
});

var OPTIONS_OBJECT_DEPRECATED_MSG = 'Setting prop "options" to an object is deprecated. Use the array format instead.'; // @vue/component

var formOptionsMixin = {
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

var BFormDatalist = /*#__PURE__*/Vue.extend({
  name: 'BFormDatalist',
  mixins: [formOptionsMixin, normalizeSlotMixin],
  props: {
    id: {
      type: String,
      default: null,
      required: true
    }
  },
  render: function render(h) {
    var options = this.formOptions.map(function (option, index) {
      return h('option', {
        key: "option_".concat(index, "_opt"),
        attrs: {
          disabled: option.disabled
        },
        domProps: _objectSpread2({}, htmlOrText(option.html, option.text), {
          value: option.value
        })
      });
    });
    return h('datalist', {
      attrs: {
        id: this.id
      }
    }, [options, this.normalizeSlot('default')]);
  }
});

var NAME$c = 'BFormText';
var props$r = {
  id: {
    type: String,
    default: null
  },
  tag: {
    type: String,
    default: 'small'
  },
  textVariant: {
    type: String,
    default: function _default() {
      return getComponentConfig(NAME$c, 'textVariant');
    }
  },
  inline: {
    type: Boolean,
    default: false
  }
}; // @vue/component

var BFormText = /*#__PURE__*/Vue.extend({
  name: NAME$c,
  functional: true,
  props: props$r,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, mergeData(data, {
      class: _defineProperty({
        'form-text': !props.inline
      }, "text-".concat(props.textVariant), props.textVariant),
      attrs: {
        id: props.id
      }
    }), children);
  }
});

var props$s = {
  id: {
    type: String,
    default: null
  },
  tag: {
    type: String,
    default: 'div'
  },
  tooltip: {
    type: Boolean,
    default: false
  },
  forceShow: {
    type: Boolean,
    default: false
  },
  state: {
    type: Boolean,
    default: null
  },
  ariaLive: {
    type: String,
    default: null
  },
  role: {
    type: String,
    default: null
  }
}; // @vue/component

var BFormInvalidFeedback = /*#__PURE__*/Vue.extend({
  name: 'BFormInvalidFeedback',
  functional: true,
  props: props$s,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var show = props.forceShow === true || props.state === false;
    return h(props.tag, mergeData(data, {
      class: {
        'invalid-feedback': !props.tooltip,
        'invalid-tooltip': props.tooltip,
        'd-block': show
      },
      attrs: {
        id: props.id,
        role: props.role,
        'aria-live': props.ariaLive,
        'aria-atomic': props.ariaLive ? 'true' : null
      }
    }), children);
  }
});

var props$t = {
  id: {
    type: String,
    default: null
  },
  tag: {
    type: String,
    default: 'div'
  },
  tooltip: {
    type: Boolean,
    default: false
  },
  forceShow: {
    type: Boolean,
    default: false
  },
  state: {
    type: Boolean,
    default: null
  },
  ariaLive: {
    type: String,
    default: null
  },
  role: {
    type: String,
    default: null
  }
}; // @vue/component

var BFormValidFeedback = /*#__PURE__*/Vue.extend({
  name: 'BFormValidFeedback',
  functional: true,
  props: props$t,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var show = props.forceShow === true || props.state === true;
    return h(props.tag, mergeData(data, {
      class: {
        'valid-feedback': !props.tooltip,
        'valid-tooltip': props.tooltip,
        'd-block': show
      },
      attrs: {
        id: props.id,
        role: props.role,
        'aria-live': props.ariaLive,
        'aria-atomic': props.ariaLive ? 'true' : null
      }
    }), children);
  }
});

var props$u = {
  tag: {
    type: String,
    default: 'div'
  }
}; // @vue/component

var BFormRow = /*#__PURE__*/Vue.extend({
  name: 'BFormRow',
  functional: true,
  props: props$u,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, mergeData(data, {
      staticClass: 'form-row'
    }), children);
  }
});

var FormPlugin = /*#__PURE__*/pluginFactory({
  components: {
    BForm: BForm,
    BFormDatalist: BFormDatalist,
    BDatalist: BFormDatalist,
    BFormText: BFormText,
    BFormInvalidFeedback: BFormInvalidFeedback,
    BFormFeedback: BFormInvalidFeedback,
    BFormValidFeedback: BFormValidFeedback,
    // Added here for convenience
    BFormRow: BFormRow
  }
}); // BFormRow is not exported here as a named export, as it is exported by Layout

var looseIndexOf = function looseIndexOf(arr, val) {
  // Assumes that the first argument is an array
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) {
      return i;
    }
  }

  return -1;
};

var SELECTOR = 'input, textarea, select'; // @vue/component

var formMixin = {
  props: {
    name: {
      type: String // default: undefined

    },
    id: {
      type: String // default: undefined

    },
    disabled: {
      type: Boolean
    },
    required: {
      type: Boolean,
      default: false
    },
    form: {
      type: String,
      default: null
    },
    autofocus: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted() {
    this.handleAutofocus();
  },
  activated: function activated()
  /* istanbul ignore next */
  {
    this.handleAutofocus();
  },
  methods: {
    handleAutofocus: function handleAutofocus() {
      var _this = this;

      this.$nextTick(function () {
        requestAF(function () {
          var el = _this.$el;

          if (_this.autofocus && isVisible(el)) {
            if (!matches(el, SELECTOR)) {
              el = select(SELECTOR, el);
            }

            el && el.focus && el.focus();
          }
        });
      });
    }
  }
};

var formRadioCheckMixin = {
  mixins: [normalizeSlotMixin],
  inheritAttrs: false,
  model: {
    prop: 'checked',
    event: 'input'
  },
  props: {
    value: {// Value when checked
      // type: Object,
      // default: undefined
    },
    checked: {// This is the v-model
      // type: Object,
      // default: undefined
    },
    inline: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    button: {
      // Only applicable in standalone mode (non group)
      type: Boolean,
      default: false
    },
    buttonVariant: {
      // Only applicable when rendered with button style
      type: String,
      default: null
    },
    ariaLabel: {
      // Placed on the input if present.
      type: String,
      default: null
    },
    ariaLabelledby: {
      // Placed on the input if present.
      type: String,
      default: null
    }
  },
  data: function data() {
    return {
      localChecked: this.isGroup ? this.bvGroup.checked : this.checked,
      hasFocus: false
    };
  },
  computed: {
    computedLocalChecked: {
      get: function get() {
        return this.isGroup ? this.bvGroup.localChecked : this.localChecked;
      },
      set: function set(val) {
        if (this.isGroup) {
          this.bvGroup.localChecked = val;
        } else {
          this.localChecked = val;
        }
      }
    },
    isGroup: function isGroup() {
      // Is this check/radio a child of check-group or radio-group?
      return Boolean(this.bvGroup);
    },
    isBtnMode: function isBtnMode() {
      // Support button style in single input mode
      return this.isGroup ? this.bvGroup.buttons : this.button;
    },
    isPlain: function isPlain() {
      return this.isBtnMode ? false : this.isGroup ? this.bvGroup.plain : this.plain;
    },
    isCustom: function isCustom() {
      return this.isBtnMode ? false : !this.isPlain;
    },
    isSwitch: function isSwitch() {
      // Custom switch styling (checkboxes only)
      return this.isBtnMode || this.isRadio || this.isPlain ? false : this.isGroup ? this.bvGroup.switches : this.switch;
    },
    isInline: function isInline() {
      return this.isGroup ? this.bvGroup.inline : this.inline;
    },
    isDisabled: function isDisabled() {
      // Child can be disabled while parent isn't, but is always disabled if group is
      return this.isGroup ? this.bvGroup.disabled || this.disabled : this.disabled;
    },
    isRequired: function isRequired() {
      // Required only works when a name is provided for the input(s)
      // Child can only be required when parent is
      // Groups will always have a name (either user supplied or auto generated)
      return this.getName && (this.isGroup ? this.bvGroup.required : this.required);
    },
    getName: function getName() {
      // Group name preferred over local name
      return (this.isGroup ? this.bvGroup.groupName : this.name) || null;
    },
    getForm: function getForm() {
      return (this.isGroup ? this.bvGroup.form : this.form) || null;
    },
    getSize: function getSize() {
      return (this.isGroup ? this.bvGroup.size : this.size) || '';
    },
    getState: function getState() {
      return this.isGroup ? this.bvGroup.computedState : this.computedState;
    },
    getButtonVariant: function getButtonVariant() {
      // Local variant preferred over group variant
      if (this.buttonVariant) {
        return this.buttonVariant;
      } else if (this.isGroup && this.bvGroup.buttonVariant) {
        return this.bvGroup.buttonVariant;
      } // default variant


      return 'secondary';
    },
    buttonClasses: function buttonClasses() {
      var _ref;

      // Same for radio & check
      return ['btn', "btn-".concat(this.getButtonVariant), (_ref = {}, _defineProperty(_ref, "btn-".concat(this.getSize), this.getSize), _defineProperty(_ref, "disabled", this.isDisabled), _defineProperty(_ref, "active", this.isChecked), _defineProperty(_ref, "focus", this.hasFocus), _ref)];
    }
  },
  watch: {
    checked: function checked(newVal) {
      this.computedLocalChecked = newVal;
    }
  },
  methods: {
    handleFocus: function handleFocus(evt) {
      // When in buttons mode, we need to add 'focus' class to label when input focused
      // As it is the hidden input which has actual focus
      if (evt.target) {
        if (evt.type === 'focus') {
          this.hasFocus = true;
        } else if (evt.type === 'blur') {
          this.hasFocus = false;
        }
      }
    },
    // Convenience methods for focusing the input
    focus: function focus() {
      if (!this.isDisabled && this.$refs.input && this.$refs.input.focus) {
        this.$refs.input.focus();
      }
    },
    blur: function blur() {
      if (!this.isDisabled && this.$refs.input && this.$refs.input.blur) {
        this.$refs.input.blur();
      }
    }
  },
  render: function render(h) {
    var defaultSlot = this.normalizeSlot('default'); // Generate the input element

    var on = {
      change: this.handleChange
    };

    if (this.isBtnMode) {
      // Handlers for focus styling when in button mode
      on.focus = on.blur = this.handleFocus;
    }

    var input = h('input', {
      ref: 'input',
      key: 'input',
      on: on,
      class: {
        'form-check-input': this.isPlain,
        'custom-control-input': this.isCustom,
        'is-valid': this.getState === true && !this.isBtnMode,
        'is-invalid': this.getState === false && !this.isBtnMode,
        // https://github.com/bootstrap-vue/bootstrap-vue/issues/2911
        'position-static': this.isPlain && !defaultSlot
      },
      directives: [{
        name: 'model',
        rawName: 'v-model',
        value: this.computedLocalChecked,
        expression: 'computedLocalChecked'
      }],
      attrs: _objectSpread2({}, this.$attrs, {
        id: this.safeId(),
        type: this.isRadio ? 'radio' : 'checkbox',
        name: this.getName,
        form: this.getForm,
        disabled: this.isDisabled,
        required: this.isRequired,
        autocomplete: 'off',
        'aria-required': this.isRequired || null,
        'aria-label': this.ariaLabel || null,
        'aria-labelledby': this.ariaLabelledby || null
      }),
      domProps: {
        value: this.value,
        checked: this.isChecked
      }
    });

    if (this.isBtnMode) {
      // Button mode
      var button = h('label', {
        class: this.buttonClasses
      }, [input, defaultSlot]);

      if (!this.isGroup) {
        // Standalone button mode, so wrap in 'btn-group-toggle'
        // and flag it as inline-block to mimic regular buttons
        button = h('div', {
          class: ['btn-group-toggle', 'd-inline-block']
        }, [button]);
      }

      return button;
    } else {
      // Not button mode
      var label = h(); // If no label content in plain mode we dont render the label
      // https://github.com/bootstrap-vue/bootstrap-vue/issues/2911

      if (!(this.isPlain && !defaultSlot)) {
        label = h('label', {
          class: {
            'form-check-label': this.isPlain,
            'custom-control-label': this.isCustom
          },
          attrs: {
            for: this.safeId()
          }
        }, defaultSlot);
      } // Wrap it in a div


      return h('div', {
        class: _defineProperty({
          'form-check': this.isPlain,
          'form-check-inline': this.isPlain && this.isInline,
          'custom-control': this.isCustom,
          'custom-control-inline': this.isCustom && this.isInline,
          'custom-checkbox': this.isCustom && this.isCheck && !this.isSwitch,
          'custom-switch': this.isSwitch,
          'custom-radio': this.isCustom && this.isRadio
        }, "b-custom-control-".concat(this.getSize), Boolean(this.getSize && !this.isBtnMode))
      }, [input, label]);
    }
  }
};

var formSizeMixin = {
  props: {
    size: {
      type: String,
      default: function _default() {
        return getComponentConfig('formControls', 'size');
      }
    }
  },
  computed: {
    sizeFormClass: function sizeFormClass() {
      return [this.size ? "form-control-".concat(this.size) : null];
    },
    sizeBtnClass: function sizeBtnClass()
    /* istanbul ignore next: don't think this is used */
    {
      return [this.size ? "btn-".concat(this.size) : null];
    }
  }
};

/* Form control contextual state class computation
 *
 * Returned class is either 'is-valid' or 'is-invalid' based on the 'state' prop
 * state can be one of five values:
 *  - true for is-valid
 *  - false for is-invalid
 *  - null for no contextual state
 */

var formStateMixin = {
  props: {
    state: {
      // Tri-state prop: true, false, null (or undefined)
      type: Boolean,
      default: null
    }
  },
  computed: {
    computedState: function computedState() {
      // If not a boolean, ensure that value is null
      return isBoolean(this.state) ? this.state : null;
    },
    stateClass: function stateClass() {
      var state = this.computedState;
      return state === true ? 'is-valid' : state === false ? 'is-invalid' : null;
    }
  }
};

var BFormCheckbox = /*#__PURE__*/Vue.extend({
  name: 'BFormCheckbox',
  mixins: [formRadioCheckMixin, // Includes shared render function
  idMixin, formMixin, formSizeMixin, formStateMixin],
  inject: {
    bvGroup: {
      from: 'bvCheckGroup',
      default: false
    }
  },
  props: {
    value: {
      // type: [String, Number, Boolean, Object],
      default: true
    },
    uncheckedValue: {
      // type: [String, Number, Boolean, Object],
      // Not applicable in multi-check mode
      default: false
    },
    indeterminate: {
      // Not applicable in multi-check mode
      type: Boolean,
      default: false
    },
    switch: {
      // Custom switch styling
      type: Boolean,
      default: false
    },
    checked: {
      // v-model (Array when multiple checkboxes have same name)
      // type: [String, Number, Boolean, Object, Array],
      default: null
    }
  },
  computed: {
    isChecked: function isChecked() {
      var checked = this.computedLocalChecked;
      var value = this.value;

      if (isArray(checked)) {
        return looseIndexOf(checked, value) > -1;
      } else {
        return looseEqual(checked, value);
      }
    },
    isRadio: function isRadio() {
      return false;
    },
    isCheck: function isCheck() {
      return true;
    }
  },
  watch: {
    computedLocalChecked: function computedLocalChecked(newVal) {
      this.$emit('input', newVal);

      if (this.$refs && this.$refs.input) {
        this.$emit('update:indeterminate', this.$refs.input.indeterminate);
      }
    },
    indeterminate: function indeterminate(newVal) {
      this.setIndeterminate(newVal);
    }
  },
  mounted: function mounted() {
    // Set initial indeterminate state
    this.setIndeterminate(this.indeterminate);
  },
  methods: {
    handleChange: function handleChange(_ref) {
      var _ref$target = _ref.target,
          checked = _ref$target.checked,
          indeterminate = _ref$target.indeterminate;
      var localChecked = this.computedLocalChecked;
      var value = this.value;
      var isArr = isArray(localChecked);
      var uncheckedValue = isArr ? null : this.uncheckedValue; // Update computedLocalChecked

      if (isArr) {
        var idx = looseIndexOf(localChecked, value);

        if (checked && idx < 0) {
          // Add value to array
          localChecked = localChecked.concat(value);
        } else if (!checked && idx > -1) {
          // Remove value from array
          localChecked = localChecked.slice(0, idx).concat(localChecked.slice(idx + 1));
        }
      } else {
        localChecked = checked ? value : uncheckedValue;
      }

      this.computedLocalChecked = localChecked; // Change is only emitted on user interaction

      this.$emit('change', checked ? value : uncheckedValue); // If this is a child of form-checkbox-group, we emit a change event on it as well

      if (this.isGroup) {
        this.bvGroup.$emit('change', localChecked);
      }

      this.$emit('update:indeterminate', indeterminate);
    },
    setIndeterminate: function setIndeterminate(state) {
      // Indeterminate only supported in single checkbox mode
      if (isArray(this.computedLocalChecked)) {
        state = false;
      }

      if (this.$refs && this.$refs.input) {
        this.$refs.input.indeterminate = state; // Emit update event to prop

        this.$emit('update:indeterminate', state);
      }
    }
  }
});

var BFormRadio = /*#__PURE__*/Vue.extend({
  name: 'BFormRadio',
  mixins: [idMixin, formRadioCheckMixin, // Includes shared render function
  formMixin, formSizeMixin, formStateMixin],
  inject: {
    bvGroup: {
      from: 'bvRadioGroup',
      default: false
    }
  },
  props: {
    checked: {
      // v-model
      // type: [String, Number, Boolean, Object],
      default: null
    }
  },
  computed: {
    // Radio Groups can only have a single value, so determining if checked is simple
    isChecked: function isChecked() {
      return looseEqual(this.value, this.computedLocalChecked);
    },
    // Flags for form-radio-check mixin
    isRadio: function isRadio() {
      return true;
    },
    isCheck: function isCheck() {
      return false;
    }
  },
  watch: {
    // Radio Groups can only have a single value, so our watchers are simple
    computedLocalChecked: function computedLocalChecked() {
      this.$emit('input', this.computedLocalChecked);
    }
  },
  methods: {
    handleChange: function handleChange(_ref) {
      var checked = _ref.target.checked;
      var value = this.value;
      this.computedLocalChecked = value; // Change is only emitted on user interaction

      this.$emit('change', checked ? value : null); // If this is a child of form-radio-group, we emit a change event on it as well

      if (this.isGroup) {
        this.bvGroup.$emit('change', checked ? value : null);
      }
    }
  }
});

var formRadioCheckGroupMixin = {
  mixins: [normalizeSlotMixin],
  model: {
    prop: 'checked',
    event: 'input'
  },
  props: {
    validated: {
      type: Boolean,
      default: false
    },
    ariaInvalid: {
      type: [Boolean, String],
      default: false
    },
    stacked: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    buttons: {
      // Render as button style
      type: Boolean,
      default: false
    },
    buttonVariant: {
      // Only applicable when rendered with button style
      type: String,
      default: 'secondary'
    }
  },
  computed: {
    inline: function inline() {
      return !this.stacked;
    },
    groupName: function groupName() {
      // Checks/Radios tied to the same model must have the same name,
      // especially for ARIA accessibility.
      return this.name || this.safeId();
    },
    groupClasses: function groupClasses() {
      if (this.buttons) {
        return ['btn-group-toggle', this.inline ? 'btn-group' : 'btn-group-vertical', this.size ? "btn-group-".concat(this.size) : '', this.validated ? "was-validated" : ''];
      }

      return [this.validated ? "was-validated" : ''];
    },
    computedAriaInvalid: function computedAriaInvalid() {
      var ariaInvalid = this.ariaInvalid;

      if (ariaInvalid === true || ariaInvalid === 'true' || ariaInvalid === '') {
        return 'true';
      }

      return this.computedState === false ? 'true' : null;
    }
  },
  watch: {
    checked: function checked(newVal) {
      this.localChecked = newVal;
    },
    localChecked: function localChecked(newVal) {
      this.$emit('input', newVal);
    }
  },
  render: function render(h) {
    var _this = this;

    var inputs = this.formOptions.map(function (option, idx) {
      var uid = "_BV_option_".concat(idx, "_");
      return h(_this.isRadioGroup ? BFormRadio : BFormCheckbox, {
        key: uid,
        props: {
          id: _this.safeId(uid),
          value: option.value,
          // Individual radios or checks can be disabled in a group
          disabled: option.disabled || false // We don't need to include these, since the input's will know they are inside here
          // name: this.groupName,
          // form: this.form || null,
          // required: Boolean(this.name && this.required)

        }
      }, [h('span', {
        domProps: htmlOrText(option.html, option.text)
      })]);
    });
    return h('div', {
      class: [this.groupClasses, 'bv-no-focus-ring'],
      attrs: {
        id: this.safeId(),
        role: this.isRadioGroup ? 'radiogroup' : 'group',
        // Tabindex to allow group to be focused
        // if needed by screen readers
        tabindex: '-1',
        'aria-required': this.required ? 'true' : null,
        'aria-invalid': this.computedAriaInvalid
      }
    }, [this.normalizeSlot('first'), inputs, this.normalizeSlot('default')]);
  }
};

var props$v = {
  switches: {
    // Custom switch styling
    type: Boolean,
    default: false
  },
  checked: {
    type: Array,
    default: null
  }
}; // @vue/component

var BFormCheckboxGroup = /*#__PURE__*/Vue.extend({
  name: 'BFormCheckboxGroup',
  mixins: [idMixin, formMixin, formRadioCheckGroupMixin, // Includes render function
  formOptionsMixin, formSizeMixin, formStateMixin],
  provide: function provide() {
    return {
      bvCheckGroup: this
    };
  },
  props: props$v,
  data: function data() {
    return {
      localChecked: this.checked || []
    };
  },
  computed: {
    isRadioGroup: function isRadioGroup() {
      return false;
    }
  }
});

var FormCheckboxPlugin = /*#__PURE__*/pluginFactory({
  components: {
    BFormCheckbox: BFormCheckbox,
    BCheckbox: BFormCheckbox,
    BCheck: BFormCheckbox,
    BFormCheckboxGroup: BFormCheckboxGroup,
    BCheckboxGroup: BFormCheckboxGroup,
    BCheckGroup: BFormCheckboxGroup
  }
});

// v-b-hover directive

var PROP = '__BV_hover_handler__';
var MOUSEENTER = 'mouseenter';
var MOUSELEAVE = 'mouseleave'; // --- Utility methods ---

var createListener = function createListener(handler) {
  var listener = function listener(evt) {
    handler(evt.type === MOUSEENTER, evt);
  };

  listener.fn = handler;
  return listener;
};

var updateListeners = function updateListeners(on, el, listener) {
  eventOnOff(on, el, MOUSEENTER, listener, EVENT_OPTIONS_NO_CAPTURE);
  eventOnOff(on, el, MOUSELEAVE, listener, EVENT_OPTIONS_NO_CAPTURE);
}; // --- Directive bind/unbind/update handler ---


var directive = function directive(el, _ref) {
  var _ref$value = _ref.value,
      handler = _ref$value === void 0 ? null : _ref$value;

  if (isBrowser) {
    var listener = el[PROP];
    var hasListener = isFunction(listener);
    var handlerChanged = !(hasListener && listener.fn === handler);

    if (hasListener && handlerChanged) {
      updateListeners(false, el, listener);
      delete el[PROP];
    }

    if (isFunction(handler) && handlerChanged) {
      el[PROP] = createListener(handler);
      updateListeners(true, el, el[PROP]);
    }
  }
}; // VBHover directive


var VBHover = {
  bind: directive,
  componentUpdated: directive,
  unbind: function unbind(el) {
    directive(el, {
      value: null
    });
  }
};

var dropdownProps = commonProps; // @vue/component

var BVFormBtnLabelControl = /*#__PURE__*/Vue.extend({
  name: 'BVFormBtnLabelControl',
  directives: {
    BHover: VBHover
  },
  mixins: [idMixin, normalizeSlotMixin, dropdownMixin],
  props: {
    value: {
      // This is the value placed on the hidden input
      type: String,
      default: ''
    },
    formattedValue: {
      // This is the value shown in the label
      // Defaults back to `value`
      type: String // default: null

    },
    placeholder: {
      // This is the value placed on the hidden input when no value selected
      type: String // default: null

    },
    labelSelected: {
      // Value placed in sr-only span inside label when value is present
      type: String // default: null

    },
    state: {
      // Tri-state prop: `true`, `false`, or `null`
      type: Boolean,
      // We must explicitly default to `null` here otherwise
      // Vue coerces `undefined` into Boolean `false`
      default: null
    },
    size: {
      type: String // default: null

    },
    name: {
      type: String // default: null

    },
    form: {
      type: String // default: null

    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    lang: {
      type: String // default: null

    },
    rtl: {
      // Tri-state prop: `true`, `false` or `null`
      type: Boolean,
      // We must explicitly default to `null` here otherwise
      // Vue coerces `undefined` into Boolean `false`
      default: null
    },
    buttonOnly: {
      // When true, renders a btn-group wrapper and visually hides the label
      type: Boolean,
      default: false
    },
    buttonVariant: {
      // Applicable in button mode only
      type: String,
      default: 'secondary'
    },
    menuClass: {
      // Extra classes to apply to the `dropdown-menu` div
      type: [String, Array, Object] // default: null

    }
  },
  data: function data() {
    return {
      isHovered: false,
      hasFocus: false
    };
  },
  computed: {
    idButton: function idButton() {
      return this.safeId();
    },
    idLabel: function idLabel() {
      return this.safeId('_value_');
    },
    idMenu: function idMenu() {
      return this.safeId('_dialog_');
    },
    idWrapper: function idWrapper() {
      return this.safeId('_outer_');
    },
    computedDir: function computedDir() {
      return this.rtl === true ? 'rtl' : this.rtl === false ? 'ltr' : null;
    }
  },
  methods: {
    focus: function focus() {
      if (!this.disabled) {
        try {
          this.$refs.toggle.focus();
        } catch (_unused) {}
      }
    },
    blur: function blur() {
      if (!this.disabled) {
        try {
          this.$refs.toggle.blur();
        } catch (_unused2) {}
      }
    },
    setFocus: function setFocus(evt) {
      this.hasFocus = evt.type === 'focus';
    },
    handleHover: function handleHover(hovered) {
      this.isHovered = hovered;
    },
    stopEvent: function stopEvent(evt)
    /* istanbul ignore next */
    {
      evt.stopPropagation();
    }
  },
  render: function render(h) {
    var _class, _class2, _ref;

    var idButton = this.idButton;
    var idLabel = this.idLabel;
    var idMenu = this.idMenu;
    var idWrapper = this.idWrapper;
    var disabled = this.disabled;
    var readonly = this.readonly;
    var required = this.required;
    var isHovered = this.isHovered;
    var hasFocus = this.hasFocus;
    var state = this.state;
    var visible = this.visible;
    var size = this.size;
    var value = toString$1(this.value) || '';
    var labelSelected = this.labelSelected;
    var buttonOnly = !!this.buttonOnly;
    var buttonVariant = this.buttonVariant;
    var btnScope = {
      isHovered: isHovered,
      hasFocus: hasFocus,
      state: state,
      opened: visible
    };
    var $button = h('button', {
      ref: 'toggle',
      staticClass: 'btn',
      class: (_class = {}, _defineProperty(_class, "btn-".concat(buttonVariant), buttonOnly), _defineProperty(_class, "btn-".concat(size), !!size), _defineProperty(_class, 'border-0', !buttonOnly), _defineProperty(_class, 'h-auto', !buttonOnly), _defineProperty(_class, 'py-0', !buttonOnly), _defineProperty(_class, 'dropdown-toggle', buttonOnly), _defineProperty(_class, 'dropdown-toggle-no-caret', buttonOnly), _class),
      attrs: {
        id: idButton,
        type: 'button',
        disabled: disabled,
        'aria-haspopup': 'dialog',
        'aria-expanded': visible ? 'true' : 'false',
        'aria-invalid': state === false || required && !value ? 'true' : null,
        'aria-required': required ? 'true' : null
      },
      directives: [{
        name: 'b-hover',
        value: this.handleHover
      }],
      on: {
        mousedown: this.onMousedown,
        click: this.toggle,
        keydown: this.toggle,
        // Handle ENTER, SPACE and DOWN
        '!focus': this.setFocus,
        '!blur': this.setFocus
      }
    }, [this.hasNormalizedSlot('button-content') ? this.normalizeSlot('button-content', btnScope) : h(BIconChevronDown, {
      props: {
        scale: 1.25
      }
    })]); // Hidden input

    var $hidden = h();

    if (this.name && !disabled) {
      $hidden = h('input', {
        attrs: {
          type: 'hidden',
          name: this.name || null,
          form: this.form || null,
          value: value
        }
      });
    } // Dropdown content


    var $menu = h('div', {
      ref: 'menu',
      staticClass: 'dropdown-menu p-2',
      class: [this.menuClass, {
        show: visible,
        'dropdown-menu-right': this.right
      }],
      attrs: {
        id: idMenu,
        role: 'dialog',
        tabindex: '-1',
        'aria-modal': 'false',
        'aria-labelledby': idLabel
      },
      on: {
        keydown: this.onKeydown // Handle ESC

      }
    }, [this.normalizeSlot('default', {
      opened: visible
    })]); // Value label

    var $label = h('label', {
      staticClass: 'form-control text-break text-wrap border-0 bg-transparent h-auto pl-1 m-0',
      class: (_class2 = {
        // Hidden in button only mode
        'sr-only': buttonOnly,
        // Mute the text if showing the placeholder
        'text-muted': !value
      }, _defineProperty(_class2, "form-control-".concat(size), !!size), _defineProperty(_class2, 'is-invalid', state === false), _defineProperty(_class2, 'is-valid', state === true), _class2),
      attrs: {
        id: idLabel,
        for: idButton,
        'aria-invalid': state === false || required && !value ? 'true' : null,
        'aria-required': required ? 'true' : null
      },
      directives: [{
        name: 'b-hover',
        value: this.handleHover
      }],
      on: {
        // Disable bubbling of the click event to
        // prevent menu from closing and re-opening
        '!click': this.stopEvent
      }
    }, [value ? this.formattedValue || value : this.placeholder || '', // Add the selected label for screen readers when a value is provided
    value && labelSelected ? h('bdi', {
      staticClass: 'sr-only'
    }, labelSelected) : '']); // Return the custom form control wrapper

    return h('div', {
      staticClass: 'dropdown',
      class: [this.directionClass, (_ref = {
        'btn-group': buttonOnly,
        'b-form-btn-label-control': !buttonOnly,
        'form-control': !buttonOnly
      }, _defineProperty(_ref, "form-control-".concat(size), !!size && !buttonOnly), _defineProperty(_ref, 'd-flex', !buttonOnly), _defineProperty(_ref, 'p-0', !buttonOnly), _defineProperty(_ref, 'h-auto', !buttonOnly), _defineProperty(_ref, 'align-items-stretch', !buttonOnly), _defineProperty(_ref, "focus", hasFocus && !buttonOnly), _defineProperty(_ref, "show", visible), _defineProperty(_ref, 'is-valid', state === true), _defineProperty(_ref, 'is-invalid', state === false), _ref)],
      attrs: {
        id: idWrapper,
        role: buttonOnly ? null : 'group',
        lang: this.lang || null,
        dir: this.computedDir,
        'aria-disabled': disabled,
        'aria-readonly': readonly && !disabled,
        'aria-labelledby': idLabel,
        'aria-invalid': state === false || required && !value ? 'true' : null,
        'aria-required': required ? 'true' : null
      }
    }, [$button, $hidden, $menu, $label]);
  }
});

var NAME$d = 'BFormDatepicker'; // Fallback to BCalendar prop if no value found

var getConfigFallback = function getConfigFallback(prop) {
  return getComponentConfig(NAME$d, prop) || getComponentConfig('BCalendar', prop);
}; // We create our props as a mixin so that we can control
// where they appear in the props listing reference section


var propsMixin = {
  props: _objectSpread2({
    value: {
      type: [String, Date],
      default: null
    },
    valueAsDate: {
      type: Boolean,
      default: false
    },
    resetValue: {
      type: [String, Date],
      default: ''
    },
    initialDate: {
      // This specifies the calendar year/month/day that will be shown when
      // first opening the datepicker if no v-model value is provided
      // Default is the current date (or `min`/`max`)
      // Passed directly to <b-calendar>
      type: [String, Date],
      default: null
    },
    placeholder: {
      type: String,
      // Defaults to `labelNoDateSelected` from calendar context
      default: null
    },
    size: {
      type: String,
      default: null
    },
    min: {
      type: [String, Date],
      default: null
    },
    max: {
      type: [String, Date],
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    required: {
      // If true adds the `aria-required` attribute
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: null
    },
    form: {
      type: String,
      default: null
    },
    state: {
      // Tri-state prop: `true`, `false` or `null`
      type: Boolean,
      default: null
    },
    dateDisabledFn: {
      type: Function,
      default: null
    },
    noCloseOnSelect: {
      type: Boolean,
      default: false
    },
    hideHeader: {
      type: Boolean,
      default: false
    },
    locale: {
      type: [String, Array],
      default: null
    },
    startWeekday: {
      // `0` (Sunday), `1` (Monday), ... `6` (Saturday)
      // Day of week to start calendar on
      type: [Number, String],
      default: 0
    },
    direction: {
      type: String,
      default: null
    },
    buttonOnly: {
      type: Boolean,
      default: false
    },
    buttonVariant: {
      // Applicable in button only mode
      type: String,
      default: 'secondary'
    },
    calendarWidth: {
      // Width of the calendar dropdown
      type: String,
      default: '270px'
    },
    selectedVariant: {
      // Variant color to use for the selected date
      type: String,
      default: 'primary'
    },
    todayVariant: {
      // Variant color to use for today's date (defaults to `variant`)
      type: String,
      default: null
    },
    noHighlightToday: {
      // Disable highlighting today's date
      type: Boolean,
      default: false
    },
    todayButton: {
      type: Boolean,
      default: false
    },
    labelTodayButton: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$d, 'labelTodayButton');
      }
    },
    todayButtonVariant: {
      type: String,
      default: 'outline-primary'
    },
    resetButton: {
      type: Boolean,
      default: false
    },
    labelResetButton: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$d, 'labelResetButton');
      }
    },
    resetButtonVariant: {
      type: String,
      default: 'outline-danger'
    },
    closeButton: {
      type: Boolean,
      default: false
    },
    labelCloseButton: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$d, 'labelCloseButton');
      }
    },
    closeButtonVariant: {
      type: String,
      default: 'outline-secondary'
    },
    // Labels for buttons and keyboard shortcuts
    // These pick BCalendar global config if no BFormDate global config
    labelPrevYear: {
      type: String,
      default: function _default() {
        return getConfigFallback('labelPrevYear');
      }
    },
    labelPrevMonth: {
      type: String,
      default: function _default() {
        return getConfigFallback('labelPrevMonth');
      }
    },
    labelCurrentMonth: {
      type: String,
      default: function _default() {
        return getConfigFallback('labelCurrentMonth');
      }
    },
    labelNextMonth: {
      type: String,
      default: function _default() {
        return getConfigFallback('labelNextMonth');
      }
    },
    labelNextYear: {
      type: String,
      default: function _default() {
        return getConfigFallback('labelNextYear');
      }
    },
    labelToday: {
      type: String,
      default: function _default() {
        return getConfigFallback('labelToday');
      }
    },
    labelSelected: {
      type: String,
      default: function _default() {
        return getConfigFallback('labelSelected');
      }
    },
    labelNoDateSelected: {
      type: String,
      default: function _default() {
        return getConfigFallback('labelNoDateSelected');
      }
    },
    labelCalendar: {
      type: String,
      default: function _default() {
        return getConfigFallback('labelCalendar');
      }
    },
    labelNav: {
      type: String,
      default: function _default() {
        return getConfigFallback('labelNav');
      }
    },
    labelHelp: {
      type: String,
      default: function _default() {
        return getConfigFallback('labelHelp');
      }
    },
    dateFormatOptions: {
      // `Intl.DateTimeFormat` object
      type: Object,
      default: function _default() {
        return {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          weekday: 'long'
        };
      }
    },
    // Dark mode
    dark: {
      type: Boolean,
      default: false
    },
    // extra dropdown stuff
    menuClass: {
      type: [String, Array, Object],
      default: null
    }
  }, dropdownProps)
}; // --- BFormDate component ---
// @vue/component

var BFormDatepicker = /*#__PURE__*/Vue.extend({
  name: NAME$d,
  // The mixins order determines the order of appearance in the props reference section
  mixins: [idMixin, propsMixin],
  model: {
    prop: 'value',
    event: 'input'
  },
  data: function data() {
    return {
      // We always use `YYYY-MM-DD` value internally
      localYMD: formatYMD(this.value) || '',
      // If the popup is open
      isVisible: false,
      // Context data from BCalendar
      localLocale: null,
      isRTL: false,
      formattedValue: '',
      activeYMD: ''
    };
  },
  computed: {
    calendarYM: function calendarYM() {
      // Returns the calendar year/month
      // Returns the `YYYY-MM` portion of the active calendar date
      return this.activeYMD.slice(0, -3);
    },
    calendarProps: function calendarProps() {
      // Use self for better minification, as `this` won't
      // minimize and we reference it many times below
      var self = this;
      return {
        hidden: !self.isVisible,
        value: self.localYMD,
        min: self.min,
        max: self.max,
        initialDate: self.initialDate,
        readonly: self.readonly,
        disabled: self.disabled,
        locale: self.locale,
        startWeekday: self.startWeekday,
        direction: self.direction,
        width: self.calendarWidth,
        dateDisabledFn: self.dateDisabledFn,
        selectedVariant: self.selectedVariant,
        todayVariant: self.todayVariant,
        hideHeader: self.hideHeader,
        labelPrevYear: self.labelPrevYear,
        labelPrevMonth: self.labelPrevMonth,
        labelCurrentMonth: self.labelCurrentMonth,
        labelNextMonth: self.labelNextMonth,
        labelNextYear: self.labelNextYear,
        labelToday: self.labelToday,
        labelSelected: self.labelSelected,
        labelNoDateSelected: self.labelNoDateSelected,
        labelCalendar: self.labelCalendar,
        labelNav: self.labelNav,
        labelHelp: self.labelHelp,
        dateFormatOptions: self.dateFormatOptions
      };
    },
    computedLang: function computedLang() {
      return (this.localLocale || '').replace(/-u-.*$/i, '') || null;
    },
    computedResetValue: function computedResetValue() {
      return formatYMD(constrainDate(this.resetValue)) || '';
    }
  },
  watch: {
    value: function value(newVal) {
      this.localYMD = formatYMD(newVal) || '';
    },
    localYMD: function localYMD(newVal) {
      // We only update the v-model when the datepicker is open
      if (this.isVisible) {
        this.$emit('input', this.valueAsDate ? parseYMD(newVal) || null : newVal || '');
      }
    },
    calendarYM: function calendarYM(newVal, oldVal)
    /* istanbul ignore next */
    {
      // Displayed calendar month has changed
      // So possibly the calendar height has changed...
      // We need to update popper computed position
      if (newVal !== oldVal && oldVal) {
        try {
          this.$refs.control.updatePopper();
        } catch (_unused) {}
      }
    }
  },
  methods: {
    // Public methods
    focus: function focus() {
      if (!this.disabled) {
        try {
          this.$refs.control.focus();
        } catch (_unused2) {}
      }
    },
    blur: function blur() {
      if (!this.disabled) {
        try {
          this.$refs.control.blur();
        } catch (_unused3) {}
      }
    },
    // Private methods
    setAndClose: function setAndClose(ymd) {
      var _this = this;

      this.localYMD = ymd; // Close calendar popup, unless `noCloseOnSelect`

      if (!this.noCloseOnSelect) {
        this.$nextTick(function () {
          _this.$refs.control.hide(true);
        });
      }
    },
    onSelected: function onSelected(ymd) {
      var _this2 = this;

      this.$nextTick(function () {
        _this2.setAndClose(ymd);
      });
    },
    onInput: function onInput(ymd) {
      if (this.localYMD !== ymd) {
        this.localYMD = ymd;
      }
    },
    onContext: function onContext(ctx) {
      var activeYMD = ctx.activeYMD,
          isRTL = ctx.isRTL,
          locale = ctx.locale,
          selectedYMD = ctx.selectedYMD,
          selectedFormatted = ctx.selectedFormatted;
      this.isRTL = isRTL;
      this.localLocale = locale;
      this.formattedValue = selectedFormatted;
      this.localYMD = selectedYMD;
      this.activeYMD = activeYMD; // Re-emit the context event

      this.$emit('context', ctx);
    },
    onTodayButton: function onTodayButton() {
      // Set to today (or min/max if today is out of range)
      this.setAndClose(formatYMD(constrainDate(createDate(), this.min, this.max)));
    },
    onResetButton: function onResetButton() {
      this.setAndClose(this.computedResetValue);
    },
    onCloseButton: function onCloseButton() {
      this.$refs.control.hide(true);
    },
    // Menu handlers
    onShow: function onShow() {
      this.isVisible = true;
    },
    onShown: function onShown() {
      var _this3 = this;

      this.$nextTick(function () {
        try {
          _this3.$refs.calendar.focus();
        } catch (_unused4) {}
      });
    },
    onHidden: function onHidden() {
      this.isVisible = false;
    },
    // Render helpers
    defaultButtonFn: function defaultButtonFn(_ref) {
      var isHovered = _ref.isHovered,
          hasFocus = _ref.hasFocus;
      return this.$createElement(isHovered || hasFocus ? BIconCalendarFill : BIconCalendar, {
        props: {
          scale: 1.25
        },
        attrs: {
          'aria-hidden': 'true'
        }
      });
    }
  },
  render: function render(h) {
    var localYMD = this.localYMD;
    var disabled = this.disabled;
    var readonly = this.readonly;
    var placeholder = isUndefinedOrNull(this.placeholder) ? this.labelNoDateSelected : this.placeholder; // Optional footer buttons

    var $footer = [];

    if (this.todayButton) {
      var label = this.labelTodayButton;
      $footer.push(h(BButton, {
        props: {
          size: 'sm',
          disabled: disabled || readonly,
          variant: this.todayButtonVariant
        },
        attrs: {
          'aria-label': label || null
        },
        on: {
          click: this.onTodayButton
        }
      }, label));
    }

    if (this.resetButton) {
      var _label = this.labelResetButton;
      $footer.push(h(BButton, {
        props: {
          size: 'sm',
          disabled: disabled || readonly,
          variant: this.resetButtonVariant
        },
        attrs: {
          'aria-label': _label || null
        },
        on: {
          click: this.onResetButton
        }
      }, _label));
    }

    if (this.closeButton) {
      var _label2 = this.labelCloseButton;
      $footer.push(h(BButton, {
        props: {
          size: 'sm',
          disabled: disabled,
          variant: this.closeButtonVariant
        },
        attrs: {
          'aria-label': _label2 || null
        },
        on: {
          click: this.onCloseButton
        }
      }, _label2));
    }

    if ($footer.length > 0) {
      $footer = [h('div', {
        staticClass: 'b-form-date-controls d-flex flex-wrap',
        class: {
          'justify-content-between': $footer.length > 1,
          'justify-content-end': $footer.length < 2
        }
      }, $footer)];
    }

    var $calendar = h(BCalendar, {
      key: 'calendar',
      ref: 'calendar',
      staticClass: 'b-form-date-calendar',
      props: this.calendarProps,
      on: {
        selected: this.onSelected,
        input: this.onInput,
        context: this.onContext
      }
    }, $footer);
    return h(BVFormBtnLabelControl, {
      ref: 'control',
      staticClass: 'b-form-datepicker',
      props: _objectSpread2({}, this.$props, {
        // Overridden / computed props
        id: this.safeId(),
        rtl: this.isRTL,
        lang: this.computedLang,
        value: localYMD || '',
        formattedValue: localYMD ? this.formattedValue : '',
        placeholder: placeholder || '',
        menuClass: [{
          'bg-dark': !!this.dark,
          'text-light': !!this.dark
        }, this.menuClass]
      }),
      on: {
        show: this.onShow,
        shown: this.onShown,
        hidden: this.onHidden
      },
      scopedSlots: {
        'button-content': this.$scopedSlots['button-content'] || this.defaultButtonFn
      }
    }, [$calendar]);
  }
});

var FormDatepickerPlugin = /*#__PURE__*/pluginFactory({
  components: {
    BFormDatepicker: BFormDatepicker,
    BDatepicker: BFormDatepicker
  }
});

// @vue/component
var formCustomMixin = {
  props: {
    plain: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    custom: function custom() {
      return !this.plain;
    }
  }
};

var NAME$e = 'BFormFile';
var VALUE_EMPTY_DEPRECATED_MSG = 'Setting "value"/"v-model" to an empty string for reset is deprecated. Set to "null" instead.'; // --- Helper methods ---

var isValidValue = function isValidValue(value) {
  return isFile(value) || isArray(value) && value.every(function (v) {
    return isValidValue(v);
  });
}; // @vue/component


var BFormFile = /*#__PURE__*/Vue.extend({
  name: NAME$e,
  mixins: [idMixin, formMixin, formStateMixin, formCustomMixin, normalizeSlotMixin],
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    size: {
      type: String,
      default: function _default() {
        return getComponentConfig('BFormControl', 'size');
      }
    },
    value: {
      type: [File, Array],
      default: null,
      validator: function validator(value) {
        /* istanbul ignore next */
        if (value === '') {
          warn(VALUE_EMPTY_DEPRECATED_MSG, NAME$e);
          return true;
        }

        return isUndefinedOrNull(value) || isValidValue(value);
      }
    },
    accept: {
      type: String,
      default: ''
    },
    // Instruct input to capture from camera
    capture: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$e, 'placeholder');
      }
    },
    browseText: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$e, 'browseText');
      }
    },
    dropPlaceholder: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$e, 'dropPlaceholder');
      }
    },
    multiple: {
      type: Boolean,
      default: false
    },
    directory: {
      type: Boolean,
      default: false
    },
    noTraverse: {
      type: Boolean,
      default: false
    },
    noDrop: {
      type: Boolean,
      default: false
    },
    fileNameFormatter: {
      type: Function,
      default: null
    }
  },
  data: function data() {
    return {
      selectedFile: null,
      dragging: false,
      hasFocus: false
    };
  },
  computed: {
    selectLabel: function selectLabel() {
      // Draging active
      if (this.dragging && this.dropPlaceholder) {
        return this.dropPlaceholder;
      } // No file chosen


      if (!this.selectedFile || this.selectedFile.length === 0) {
        return this.placeholder;
      } // Convert selectedFile to an array (if not already one)


      var files = concat(this.selectedFile).filter(identity);

      if (this.hasNormalizedSlot('file-name')) {
        // There is a slot for formatting the files/names
        return [this.normalizeSlot('file-name', {
          files: files,
          names: files.map(function (f) {
            return f.name;
          })
        })];
      } else {
        // Use the user supplied formatter, or the built in one.
        return isFunction(this.fileNameFormatter) ? toString$1(this.fileNameFormatter(files)) : files.map(function (file) {
          return file.name;
        }).join(', ');
      }
    }
  },
  watch: {
    selectedFile: function selectedFile(newVal, oldVal) {
      // The following test is needed when the file input is "reset" or the
      // exact same file(s) are selected to prevent an infinite loop.
      // When in `multiple` mode we need to check for two empty arrays or
      // two arrays with identical files
      if (newVal === oldVal || isArray(newVal) && isArray(oldVal) && newVal.length === oldVal.length && newVal.every(function (v, i) {
        return v === oldVal[i];
      })) {
        return;
      }

      if (!newVal && this.multiple) {
        this.$emit('input', []);
      } else {
        this.$emit('input', newVal);
      }
    },
    value: function value(newVal) {
      if (!newVal || isArray(newVal) && newVal.length === 0) {
        this.reset();
      }
    }
  },
  methods: {
    focusHandler: function focusHandler(evt) {
      // Bootstrap v4 doesn't have focus styling for custom file input
      // Firefox has a '[type=file]:focus ~ sibling' selector issue,
      // so we add a 'focus' class to get around these bugs
      if (this.plain || evt.type === 'focusout') {
        this.hasFocus = false;
      } else {
        // Add focus styling for custom file input
        this.hasFocus = true;
      }
    },
    reset: function reset() {
      // IE 11 doesn't support setting `$input.value` to `''` or `null`
      // So we use this little extra hack to reset the value, just in case
      // This also appears to work on modern browsers as well
      // Wrapped in try in case IE 11 or mobile Safari crap out
      try {
        var $input = this.$refs.input;
        $input.value = '';
        $input.type = '';
        $input.type = 'file';
      } catch (e) {}

      this.selectedFile = this.multiple ? [] : null;
    },
    onFileChange: function onFileChange(evt) {
      var _this = this;

      // Always emit original event
      this.$emit('change', evt); // Check if special `items` prop is available on event (drop mode)
      // Can be disabled by setting no-traverse

      var items = evt.dataTransfer && evt.dataTransfer.items;
      /* istanbul ignore next: not supported in JSDOM */

      if (items && !this.noTraverse) {
        var queue = [];

        for (var i = 0; i < items.length; i++) {
          var item = items[i].webkitGetAsEntry();

          if (item) {
            queue.push(this.traverseFileTree(item));
          }
        }

        Promise.all(queue).then(function (filesArr) {
          _this.setFiles(from(filesArr));
        });
        return;
      } // Normal handling


      this.setFiles(evt.target.files || evt.dataTransfer.files);
    },
    setFiles: function setFiles() {
      var files = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (!files) {
        /* istanbul ignore next: this will probably not happen */
        this.selectedFile = null;
      } else if (this.multiple) {
        // Convert files to array
        var filesArray = [];

        for (var i = 0; i < files.length; i++) {
          filesArray.push(files[i]);
        } // Return file(s) as array


        this.selectedFile = filesArray;
      } else {
        // Return single file object
        this.selectedFile = files[0] || null;
      }
    },
    onReset: function onReset() {
      // Triggered when the parent form (if any) is reset
      this.selectedFile = this.multiple ? [] : null;
    },
    onDragover: function onDragover(evt)
    /* istanbul ignore next: difficult to test in JSDOM */
    {
      evt.preventDefault();
      evt.stopPropagation();

      if (this.noDrop || !this.custom) {
        return;
      }

      this.dragging = true;
      evt.dataTransfer.dropEffect = 'copy';
    },
    onDragleave: function onDragleave(evt)
    /* istanbul ignore next: difficult to test in JSDOM */
    {
      evt.preventDefault();
      evt.stopPropagation();
      this.dragging = false;
    },
    onDrop: function onDrop(evt)
    /* istanbul ignore next: difficult to test in JSDOM */
    {
      evt.preventDefault();
      evt.stopPropagation();

      if (this.noDrop) {
        return;
      }

      this.dragging = false;

      if (evt.dataTransfer.files && evt.dataTransfer.files.length > 0) {
        this.onFileChange(evt);
      }
    },
    traverseFileTree: function traverseFileTree(item, path)
    /* istanbul ignore next: not supported in JSDOM */
    {
      var _this2 = this;

      // Based on http://stackoverflow.com/questions/3590058
      return new Promise(function (resolve) {
        path = path || '';

        if (item.isFile) {
          // Get file
          item.file(function (file) {
            file.$path = path; // Inject $path to file obj

            resolve(file);
          });
        } else if (item.isDirectory) {
          // Get folder contents
          item.createReader().readEntries(function (entries) {
            var queue = [];

            for (var i = 0; i < entries.length; i++) {
              queue.push(_this2.traverseFileTree(entries[i], path + item.name + '/'));
            }

            Promise.all(queue).then(function (filesArr) {
              resolve(from(filesArr));
            });
          });
        }
      });
    }
  },
  render: function render(h) {
    // Form Input
    var input = h('input', {
      ref: 'input',
      class: [{
        'form-control-file': this.plain,
        'custom-file-input': this.custom,
        focus: this.custom && this.hasFocus
      }, this.stateClass],
      attrs: _objectSpread2({}, this.$attrs, {
        type: 'file',
        id: this.safeId(),
        name: this.name,
        disabled: this.disabled,
        required: this.required,
        form: this.form || null,
        capture: this.capture || null,
        accept: this.accept || null,
        multiple: this.multiple,
        webkitdirectory: this.directory,
        'aria-required': this.required ? 'true' : null
      }),
      on: {
        change: this.onFileChange,
        focusin: this.focusHandler,
        focusout: this.focusHandler,
        reset: this.onReset
      }
    });

    if (this.plain) {
      return input;
    } // Overlay Labels


    var label = h('label', {
      staticClass: 'custom-file-label',
      class: [this.dragging ? 'dragging' : null],
      attrs: {
        for: this.safeId(),
        'data-browse': this.browseText || null
      }
    }, this.selectLabel); // Return rendered custom file input

    return h('div', {
      staticClass: 'custom-file b-form-file',
      class: [this.stateClass, _defineProperty({}, "b-custom-control-".concat(this.size), this.size)],
      attrs: {
        id: this.safeId('_BV_file_outer_')
      },
      on: {
        dragover: this.onDragover,
        dragleave: this.onDragleave,
        drop: this.onDrop
      }
    }, [input, label]);
  }
});

var FormFilePlugin = /*#__PURE__*/pluginFactory({
  components: {
    BFormFile: BFormFile,
    BFile: BFormFile
  }
});

/**
 * Suffix can be a falsey value so nothing is appended to string.
 * (helps when looping over props & some shouldn't change)
 * Use data last parameters to allow for currying.
 * @param {string} suffix
 * @param {string} str
 */

var suffixPropName = function suffixPropName(suffix, str) {
  return str + (suffix ? upperFirst(suffix) : '');
};

var RX_COL_CLASS = /^col-/; // Generates a prop object with a type of `[Boolean, String, Number]`

var boolStrNum = function boolStrNum() {
  return {
    type: [Boolean, String, Number],
    default: false
  };
}; // Generates a prop object with a type of `[String, Number]`


var strNum = function strNum() {
  return {
    type: [String, Number],
    default: null
  };
}; // Compute a breakpoint class name


var computeBreakpoint = function computeBreakpoint(type, breakpoint, val) {
  var className = type;

  if (isUndefinedOrNull(val) || val === false) {
    return undefined;
  }

  if (breakpoint) {
    className += "-".concat(breakpoint);
  } // Handling the boolean style prop when accepting [Boolean, String, Number]
  // means Vue will not convert <b-col sm></b-col> to sm: true for us.
  // Since the default is false, an empty string indicates the prop's presence.


  if (type === 'col' && (val === '' || val === true)) {
    // .col-md
    return lowerCase(className);
  } // .order-md-6


  className += "-".concat(val);
  return lowerCase(className);
}; // Memoized function for better performance on generating class names


var computeBreakpointClass = memoize(computeBreakpoint); // Cached copy of the breakpoint prop names

var breakpointPropMap = create(null); // Lazy evaled props factory for BCol

var generateProps = function generateProps() {
  // Grab the breakpoints from the cached config (exclude the '' (xs) breakpoint)
  var breakpoints = getBreakpointsUpCached().filter(identity); // Supports classes like: .col-sm, .col-md-6, .col-lg-auto

  var breakpointCol = breakpoints.reduce(function (propMap, breakpoint) {
    if (breakpoint) {
      // We filter out the '' breakpoint (xs), as making a prop name ''
      // would not work. The `cols` prop is used for `xs`
      propMap[breakpoint] = boolStrNum();
    }

    return propMap;
  }, create(null)); // Supports classes like: .offset-md-1, .offset-lg-12

  var breakpointOffset = breakpoints.reduce(function (propMap, breakpoint) {
    propMap[suffixPropName(breakpoint, 'offset')] = strNum();
    return propMap;
  }, create(null)); // Supports classes like: .order-md-1, .order-lg-12

  var breakpointOrder = breakpoints.reduce(function (propMap, breakpoint) {
    propMap[suffixPropName(breakpoint, 'order')] = strNum();
    return propMap;
  }, create(null)); // For loop doesn't need to check hasOwnProperty
  // when using an object created from null

  breakpointPropMap = assign(create(null), {
    col: keys(breakpointCol),
    offset: keys(breakpointOffset),
    order: keys(breakpointOrder)
  }); // Return the generated props

  return _objectSpread2({
    // Generic flexbox .col (xs)
    col: {
      type: Boolean,
      default: false
    },
    // .col-[1-12]|auto  (xs)
    cols: strNum()
  }, breakpointCol, {
    offset: strNum()
  }, breakpointOffset, {
    order: strNum()
  }, breakpointOrder, {
    // Flex alignment
    alignSelf: {
      type: String,
      default: null,
      validator: function validator(str) {
        return arrayIncludes(['auto', 'start', 'end', 'center', 'baseline', 'stretch'], str);
      }
    },
    tag: {
      type: String,
      default: 'div'
    }
  });
}; // We do not use Vue.extend here as that would evaluate the props
// immediately, which we do not want to happen
// @vue/component


var BCol = {
  name: 'BCol',
  functional: true,

  get props() {
    // Allow props to be lazy evaled on first access and
    // then they become a non-getter afterwards.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get#Smart_self-overwriting_lazy_getters
    delete this.props; // eslint-disable-next-line no-return-assign

    return this.props = generateProps();
  },

  render: function render(h, _ref) {
    var _classList$push;

    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var classList = []; // Loop through `col`, `offset`, `order` breakpoint props

    for (var type in breakpointPropMap) {
      // Returns colSm, offset, offsetSm, orderMd, etc.
      var _keys = breakpointPropMap[type];

      for (var i = 0; i < _keys.length; i++) {
        // computeBreakpoint(col, colSm => Sm, value=[String, Number, Boolean])
        var c = computeBreakpointClass(type, _keys[i].replace(type, ''), props[_keys[i]]); // If a class is returned, push it onto the array.

        if (c) {
          classList.push(c);
        }
      }
    }

    var hasColClasses = classList.some(function (className) {
      return RX_COL_CLASS.test(className);
    });
    classList.push((_classList$push = {
      // Default to .col if no other col-{bp}-* classes generated nor `cols` specified.
      col: props.col || !hasColClasses && !props.cols
    }, _defineProperty(_classList$push, "col-".concat(props.cols), props.cols), _defineProperty(_classList$push, "offset-".concat(props.offset), props.offset), _defineProperty(_classList$push, "order-".concat(props.order), props.order), _defineProperty(_classList$push, "align-self-".concat(props.alignSelf), props.alignSelf), _classList$push));
    return h(props.tag, mergeData(data, {
      class: classList
    }), children);
  }
};

var NAME$f = 'BFormGroup'; // Selector for finding first input in the form-group

var SELECTOR$1 = 'input:not([disabled]),textarea:not([disabled]),select:not([disabled])'; // Render helper functions (here rather than polluting the instance with more methods)

var renderInvalidFeedback = function renderInvalidFeedback(h, ctx) {
  var content = ctx.normalizeSlot('invalid-feedback') || ctx.invalidFeedback;
  var invalidFeedback = h();

  if (content) {
    invalidFeedback = h(BFormInvalidFeedback, {
      props: {
        id: ctx.invalidFeedbackId,
        // If state is explicitly false, always show the feedback
        state: ctx.computedState,
        tooltip: ctx.tooltip,
        ariaLive: ctx.feedbackAriaLive,
        role: ctx.feedbackAriaLive ? 'alert' : null
      },
      attrs: {
        tabindex: content ? '-1' : null
      }
    }, [content]);
  }

  return invalidFeedback;
};

var renderValidFeedback = function renderValidFeedback(h, ctx) {
  var content = ctx.normalizeSlot('valid-feedback') || ctx.validFeedback;
  var validFeedback = h();

  if (content) {
    validFeedback = h(BFormValidFeedback, {
      props: {
        id: ctx.validFeedbackId,
        // If state is explicitly true, always show the feedback
        state: ctx.computedState,
        tooltip: ctx.tooltip,
        ariaLive: ctx.feedbackAriaLive,
        role: ctx.feedbackAriaLive ? 'alert' : null
      },
      attrs: {
        tabindex: content ? '-1' : null
      }
    }, [content]);
  }

  return validFeedback;
};

var renderHelpText = function renderHelpText(h, ctx) {
  // Form help text (description)
  var content = ctx.normalizeSlot('description') || ctx.description;
  var description = h();

  if (content) {
    description = h(BFormText, {
      attrs: {
        id: ctx.descriptionId,
        tabindex: content ? '-1' : null
      }
    }, [content]);
  }

  return description;
};

var renderLabel = function renderLabel(h, ctx) {
  // Render label/legend inside b-col if necessary
  var content = ctx.normalizeSlot('label') || ctx.label;
  var labelFor = ctx.labelFor;
  var isLegend = !labelFor;
  var isHorizontal = ctx.isHorizontal;
  var labelTag = isLegend ? 'legend' : 'label';

  if (!content && !isHorizontal) {
    return h();
  } else if (ctx.labelSrOnly) {
    var label = h();

    if (content) {
      label = h(labelTag, {
        class: 'sr-only',
        attrs: {
          id: ctx.labelId,
          for: labelFor || null
        }
      }, [content]);
    }

    return h(isHorizontal ? BCol : 'div', {
      props: isHorizontal ? ctx.labelColProps : {}
    }, [label]);
  } else {
    return h(isHorizontal ? BCol : labelTag, {
      on: isLegend ? {
        click: ctx.legendClick
      } : {},
      props: isHorizontal ? _objectSpread2({
        tag: labelTag
      }, ctx.labelColProps) : {},
      attrs: {
        id: ctx.labelId,
        for: labelFor || null,
        // We add a tab index to legend so that screen readers
        // will properly read the aria-labelledby in IE.
        tabindex: isLegend ? '-1' : null
      },
      class: [// Hide the focus ring on the legend
      isLegend ? 'bv-no-focus-ring' : '', // When horizontal or if a legend is rendered, add col-form-label
      // for correct sizing as Bootstrap has inconsistent font styling
      // for legend in non-horizontal form-groups.
      // See: https://github.com/twbs/bootstrap/issues/27805
      isHorizontal || isLegend ? 'col-form-label' : '', // Emulate label padding top of 0 on legend when not horizontal
      !isHorizontal && isLegend ? 'pt-0' : '', // If not horizontal and not a legend, we add d-block to label
      // so that label-align works
      !isHorizontal && !isLegend ? 'd-block' : '', ctx.labelSize ? "col-form-label-".concat(ctx.labelSize) : '', ctx.labelAlignClasses, ctx.labelClass]
    }, [content]);
  }
}; // -- BFormGroup Prop factory -- used for lazy generation of props
// Memoize this function to return cached values to
// save time in computed functions


var makePropName = memoize(function () {
  var breakpoint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var prefix = arguments.length > 1 ? arguments[1] : undefined;
  return "".concat(prefix).concat(upperFirst(breakpoint));
}); // BFormGroup prop generator for lazy generation of props

var generateProps$1 = function generateProps() {
  var BREAKPOINTS = getBreakpointsUpCached(); // Generate the labelCol breakpoint props

  var bpLabelColProps = BREAKPOINTS.reduce(function (props, breakpoint) {
    // i.e. label-cols, label-cols-sm, label-cols-md, ...
    props[makePropName(breakpoint, 'labelCols')] = {
      type: [Number, String, Boolean],
      default: breakpoint ? false : null
    };
    return props;
  }, create(null)); // Generate the labelAlign breakpoint props

  var bpLabelAlignProps = BREAKPOINTS.reduce(function (props, breakpoint) {
    // label-align, label-align-sm, label-align-md, ...
    props[makePropName(breakpoint, 'labelAlign')] = {
      type: String,
      // left, right, center
      default: null
    };
    return props;
  }, create(null));
  return _objectSpread2({
    label: {
      type: String,
      default: null
    },
    labelFor: {
      type: String,
      default: null
    },
    labelSize: {
      type: String,
      default: null
    },
    labelSrOnly: {
      type: Boolean,
      default: false
    }
  }, bpLabelColProps, {}, bpLabelAlignProps, {
    labelClass: {
      type: [String, Array, Object],
      default: null
    },
    description: {
      type: String,
      default: null
    },
    invalidFeedback: {
      type: String,
      default: null
    },
    validFeedback: {
      type: String,
      default: null
    },
    tooltip: {
      // Enable tooltip style feedback
      type: Boolean,
      default: false
    },
    feedbackAriaLive: {
      type: String,
      default: 'assertive'
    },
    validated: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  });
}; // We do not use Vue.extend here as that would evaluate the props
// immediately, which we do not want to happen
// @vue/component


var BFormGroup = {
  name: NAME$f,
  mixins: [idMixin, formStateMixin, normalizeSlotMixin],

  get props() {
    // Allow props to be lazy evaled on first access and
    // then they become a non-getter afterwards.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get#Smart_self-overwriting_lazy_getters
    delete this.props; // eslint-disable-next-line no-return-assign

    return this.props = generateProps$1();
  },

  computed: {
    labelColProps: function labelColProps() {
      var _this = this;

      var props = {};
      getBreakpointsUpCached().forEach(function (breakpoint) {
        // Grab the value if the label column breakpoint prop
        var propVal = _this[makePropName(breakpoint, 'labelCols')]; // Handle case where the prop's value is an empty string,
        // which represents true


        propVal = propVal === '' ? true : propVal || false;

        if (!isBoolean(propVal) && propVal !== 'auto') {
          // Convert to column size to number
          propVal = parseInt(propVal, 10) || 0; // Ensure column size is greater than 0

          propVal = propVal > 0 ? propVal : false;
        }

        if (propVal) {
          // Add the prop to the list of props to give to b-col
          // If breakpoint is '' (labelCols=true), then we use the
          // col prop to make equal width at xs
          var bColPropName = breakpoint || (isBoolean(propVal) ? 'col' : 'cols'); // Add it to the props

          props[bColPropName] = propVal;
        }
      });
      return props;
    },
    labelAlignClasses: function labelAlignClasses() {
      var _this2 = this;

      var classes = [];
      getBreakpointsUpCached().forEach(function (breakpoint) {
        // Assemble the label column breakpoint align classes
        var propVal = _this2[makePropName(breakpoint, 'labelAlign')] || null;

        if (propVal) {
          var className = breakpoint ? "text-".concat(breakpoint, "-").concat(propVal) : "text-".concat(propVal);
          classes.push(className);
        }
      });
      return classes;
    },
    isHorizontal: function isHorizontal() {
      // Determine if the resultant form-group will be rendered
      // horizontal (meaning it has label-col breakpoints)
      return keys(this.labelColProps).length > 0;
    },
    labelId: function labelId() {
      return this.hasNormalizedSlot('label') || this.label ? this.safeId('_BV_label_') : null;
    },
    descriptionId: function descriptionId() {
      return this.hasNormalizedSlot('description') || this.description ? this.safeId('_BV_description_') : null;
    },
    hasInvalidFeedback: function hasInvalidFeedback() {
      // Used for computing aria-describedby
      return this.computedState === false && (this.hasNormalizedSlot('invalid-feedback') || this.invalidFeedback);
    },
    invalidFeedbackId: function invalidFeedbackId() {
      return this.hasInvalidFeedback ? this.safeId('_BV_feedback_invalid_') : null;
    },
    hasValidFeedback: function hasValidFeedback() {
      // Used for computing aria-describedby
      return this.computedState === true && (this.hasNormalizedSlot('valid-feedback') || this.validFeedback);
    },
    validFeedbackId: function validFeedbackId() {
      return this.hasValidFeedback ? this.safeId('_BV_feedback_valid_') : null;
    },
    describedByIds: function describedByIds() {
      // Screen readers will read out any content linked to by aria-describedby
      // even if the content is hidden with `display: none;`, hence we only include
      // feedback IDs if the form-group's state is explicitly valid or invalid.
      return [this.descriptionId, this.invalidFeedbackId, this.validFeedbackId].filter(Boolean).join(' ') || null;
    }
  },
  watch: {
    describedByIds: function describedByIds(add, remove) {
      if (add !== remove) {
        this.setInputDescribedBy(add, remove);
      }
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    this.$nextTick(function () {
      // Set the aria-describedby IDs on the input specified by label-for
      // We do this in a nextTick to ensure the children have finished rendering
      _this3.setInputDescribedBy(_this3.describedByIds);
    });
  },
  methods: {
    legendClick: function legendClick(evt) {
      if (this.labelFor) {
        // Don't do anything if labelFor is set

        /* istanbul ignore next: clicking a label will focus the input, so no need to test */
        return;
      }

      var tagName = evt.target ? evt.target.tagName : '';

      if (/^(input|select|textarea|label|button|a)$/i.test(tagName)) {
        // If clicked an interactive element inside legend,
        // we just let the default happen

        /* istanbul ignore next */
        return;
      }

      var inputs = selectAll(SELECTOR$1, this.$refs.content).filter(isVisible);

      if (inputs && inputs.length === 1 && inputs[0].focus) {
        // if only a single input, focus it, emulating label behaviour
        try {
          inputs[0].focus();
        } catch (_unused) {}
      }
    },
    setInputDescribedBy: function setInputDescribedBy(add, remove) {
      // Sets the `aria-describedby` attribute on the input if label-for is set.
      // Optionally accepts a string of IDs to remove as the second parameter.
      // Preserves any aria-describedby value(s) user may have on input.
      if (this.labelFor && isBrowser) {
        var input = select("#".concat(this.labelFor), this.$refs.content);

        if (input) {
          var adb = 'aria-describedby';
          var ids = (getAttr(input, adb) || '').split(/\s+/);
          add = (add || '').split(/\s+/);
          remove = (remove || '').split(/\s+/); // Update ID list, preserving any original IDs
          // and ensuring the ID's are unique

          ids = ids.filter(function (id) {
            return !arrayIncludes(remove, id);
          }).concat(add).filter(Boolean);
          ids = keys(ids.reduce(function (memo, id) {
            return _objectSpread2({}, memo, _defineProperty({}, id, true));
          }, {})).join(' ').trim();

          if (ids) {
            setAttr(input, adb, ids);
          } else {
            // No IDs, so remove the attribute
            removeAttr(input, adb);
          }
        }
      }
    }
  },
  render: function render(h) {
    var isFieldset = !this.labelFor;
    var isHorizontal = this.isHorizontal; // Generate the label

    var label = renderLabel(h, this); // Generate the content

    var content = h(isHorizontal ? BCol : 'div', {
      ref: 'content',
      // Hide focus ring
      staticClass: 'bv-no-focus-ring',
      attrs: {
        tabindex: isFieldset ? '-1' : null,
        role: isFieldset ? 'group' : null
      }
    }, [this.normalizeSlot('default') || h(), renderInvalidFeedback(h, this), renderValidFeedback(h, this), renderHelpText(h, this)]); // Create the form-group

    var data = {
      staticClass: 'form-group',
      class: [this.validated ? 'was-validated' : null, this.stateClass],
      attrs: {
        id: this.safeId(),
        disabled: isFieldset ? this.disabled : null,
        role: isFieldset ? null : 'group',
        'aria-invalid': this.computedState === false ? 'true' : null,
        // Only apply aria-labelledby if we are a horizontal fieldset
        // as the legend is no longer a direct child of fieldset
        'aria-labelledby': isFieldset && isHorizontal ? this.labelId : null,
        // Only apply aria-describedby IDs if we are a fieldset
        // as the input will have the IDs when not a fieldset
        'aria-describedby': isFieldset ? this.describedByIds : null
      }
    }; // Return it wrapped in a form-group
    // Note: Fieldsets do not support adding `row` or `form-row` directly
    // to them due to browser specific render issues, so we move the `form-row`
    // to an inner wrapper div when horizontal and using a fieldset

    return h(isFieldset ? 'fieldset' : isHorizontal ? BFormRow : 'div', data, isHorizontal && isFieldset ? [h(BFormRow, [label, content])] : [label, content]);
  }
};

var FormGroupPlugin = /*#__PURE__*/pluginFactory({
  components: {
    BFormGroup: BFormGroup,
    BFormFieldset: BFormGroup
  }
});

var formTextMixin = {
  model: {
    prop: 'value',
    event: 'update'
  },
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    ariaInvalid: {
      type: [Boolean, String],
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    plaintext: {
      type: Boolean,
      default: false
    },
    autocomplete: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    formatter: {
      type: Function,
      default: null
    },
    lazyFormatter: {
      type: Boolean,
      default: false
    },
    trim: {
      type: Boolean,
      default: false
    },
    number: {
      type: Boolean,
      default: false
    },
    lazy: {
      // Only update the `v-model` on blur/change events
      type: Boolean,
      default: false
    },
    debounce: {
      // Debounce timout (in ms). Not applicable with `lazy` prop
      type: [Number, String],
      default: 0
    }
  },
  data: function data() {
    return {
      localValue: toString$1(this.value),
      vModelValue: this.value
    };
  },
  computed: {
    computedClass: function computedClass() {
      return [{
        // Range input needs class `custom-range`
        'custom-range': this.type === 'range',
        // `plaintext` not supported by `type="range"` or `type="color"`
        'form-control-plaintext': this.plaintext && this.type !== 'range' && this.type !== 'color',
        // `form-control` not used by `type="range"` or `plaintext`
        // Always used by `type="color"`
        'form-control': !this.plaintext && this.type !== 'range' || this.type === 'color'
      }, this.sizeFormClass, this.stateClass];
    },
    computedAriaInvalid: function computedAriaInvalid() {
      if (!this.ariaInvalid || this.ariaInvalid === 'false') {
        // `this.ariaInvalid` is `null` or `false` or 'false'
        return this.computedState === false ? 'true' : null;
      }

      if (this.ariaInvalid === true) {
        // User wants explicit `:aria-invalid="true"`
        return 'true';
      } // Most likely a string value (which could be the string 'true')


      return this.ariaInvalid;
    },
    computedDebounce: function computedDebounce() {
      // Ensure we have a positive number equal to or greater than 0
      return Math.max(toInteger(this.debounce) || 0, 0);
    },
    hasFormatter: function hasFormatter() {
      return isFunction(this.formatter);
    }
  },
  watch: {
    value: function value(newVal) {
      var stringifyValue = toString$1(newVal);

      if (stringifyValue !== this.localValue && newVal !== this.vModelValue) {
        // Clear any pending debounce timeout, as we are overwriting the user input
        this.clearDebounce(); // Update the local values

        this.localValue = stringifyValue;
        this.vModelValue = newVal;
      }
    }
  },
  mounted: function mounted() {
    // Create non-reactive property and set up destroy handler
    this.$_inputDebounceTimer = null;
    this.$on('hook:beforeDestroy', this.clearDebounce); // Preset the internal state

    var value = this.value;
    var stringifyValue = toString$1(value);
    /* istanbul ignore next */

    if (stringifyValue !== this.localValue && value !== this.vModelValue) {
      this.localValue = stringifyValue;
      this.vModelValue = value;
    }
  },
  methods: {
    clearDebounce: function clearDebounce() {
      clearTimeout(this.$_inputDebounceTimer);
      this.$_inputDebounceTimer = null;
    },
    formatValue: function formatValue(value, evt) {
      var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      value = toString$1(value);

      if (this.hasFormatter && (!this.lazyFormatter || force)) {
        value = this.formatter(value, evt);
      }

      return value;
    },
    modifyValue: function modifyValue(value) {
      // Emulate `.trim` modifier behaviour
      if (this.trim) {
        value = value.trim();
      } // Emulate `.number` modifier behaviour


      if (this.number) {
        var number = toFloat(value);
        value = isNaN(number) ? value : number;
      }

      return value;
    },
    updateValue: function updateValue(value) {
      var _this = this;

      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var lazy = this.lazy;

      if (lazy && !force) {
        return;
      }

      value = this.modifyValue(value);

      if (value !== this.vModelValue) {
        this.clearDebounce();

        var doUpdate = function doUpdate() {
          _this.vModelValue = value;

          _this.$emit('update', value);
        };

        var debounce = this.computedDebounce; // Only debounce the value update when a value greater than `0`
        // is set and we are not in lazy mode or this is a forced update

        if (debounce > 0 && !lazy && !force) {
          this.$_inputDebounceTimer = setTimeout(doUpdate, debounce);
        } else {
          // Immediately update the v-model
          doUpdate();
        }
      } else if (this.hasFormatter) {
        // When the `vModelValue` hasn't changed but the actual input value
        // is out of sync, make sure to change it to the given one
        // Usually caused by browser autocomplete and how it triggers the
        // change or input event, or depending on the formatter function
        // https://github.com/bootstrap-vue/bootstrap-vue/issues/2657
        // https://github.com/bootstrap-vue/bootstrap-vue/issues/3498

        /* istanbul ignore next: hard to test */
        var $input = this.$refs.input;
        /* istanbul ignore if: hard to test out of sync value */

        if ($input && value !== $input.value) {
          $input.value = value;
        }
      }
    },
    onInput: function onInput(evt) {
      // `evt.target.composing` is set by Vue
      // https://github.com/vuejs/vue/blob/dev/src/platforms/web/runtime/directives/model.js
      // TODO: Is this needed now with the latest Vue?

      /* istanbul ignore if: hard to test composition events */
      if (evt.target.composing) {
        return;
      }

      var value = evt.target.value;
      var formattedValue = this.formatValue(value, evt); // Exit when the `formatter` function strictly returned `false`
      // or prevented the input event

      /* istanbul ignore next */

      if (formattedValue === false || evt.defaultPrevented) {
        evt.preventDefault();
        return;
      }

      this.localValue = formattedValue;
      this.updateValue(formattedValue);
      this.$emit('input', formattedValue);
    },
    onChange: function onChange(evt) {
      var value = evt.target.value;
      var formattedValue = this.formatValue(value, evt); // Exit when the `formatter` function strictly returned `false`
      // or prevented the input event

      /* istanbul ignore next */

      if (formattedValue === false || evt.defaultPrevented) {
        evt.preventDefault();
        return;
      }

      this.localValue = formattedValue;
      this.updateValue(formattedValue, true);
      this.$emit('change', formattedValue);
    },
    onBlur: function onBlur(evt) {
      // Apply the `localValue` on blur to prevent cursor jumps
      // on mobile browsers (e.g. caused by autocomplete)
      var value = evt.target.value;
      var formattedValue = this.formatValue(value, evt, true);

      if (formattedValue !== false) {
        // We need to use the modified value here to apply the
        // `.trim` and `.number` modifiers properly
        this.localValue = toString$1(this.modifyValue(formattedValue)); // We pass the formatted value here since the `updateValue` method
        // handles the modifiers itself

        this.updateValue(formattedValue, true);
      } // Emit native blur event


      this.$emit('blur', evt);
    },
    focus: function focus() {
      // For external handler that may want a focus method
      if (!this.disabled) {
        this.$el.focus();
      }
    },
    blur: function blur() {
      // For external handler that may want a blur method
      if (!this.disabled) {
        this.$el.blur();
      }
    }
  }
};

// @vue/component
var formSelectionMixin = {
  computed: {
    selectionStart: {
      // Expose selectionStart for formatters, etc
      cache: false,
      get: function get()
      /* istanbul ignore next */
      {
        return this.$refs.input.selectionStart;
      },
      set: function set(val)
      /* istanbul ignore next */
      {
        this.$refs.input.selectionStart = val;
      }
    },
    selectionEnd: {
      // Expose selectionEnd for formatters, etc
      cache: false,
      get: function get()
      /* istanbul ignore next */
      {
        return this.$refs.input.selectionEnd;
      },
      set: function set(val)
      /* istanbul ignore next */
      {
        this.$refs.input.selectionEnd = val;
      }
    },
    selectionDirection: {
      // Expose selectionDirection for formatters, etc
      cache: false,
      get: function get()
      /* istanbul ignore next */
      {
        return this.$refs.input.selectionDirection;
      },
      set: function set(val)
      /* istanbul ignore next */
      {
        this.$refs.input.selectionDirection = val;
      }
    }
  },
  methods: {
    select: function select()
    /* istanbul ignore next */
    {
      var _this$$refs$input;

      // For external handler that may want a select() method
      (_this$$refs$input = this.$refs.input).select.apply(_this$$refs$input, arguments);
    },
    setSelectionRange: function setSelectionRange()
    /* istanbul ignore next */
    {
      var _this$$refs$input2;

      // For external handler that may want a setSelectionRange(a,b,c) method
      (_this$$refs$input2 = this.$refs.input).setSelectionRange.apply(_this$$refs$input2, arguments);
    },
    setRangeText: function setRangeText()
    /* istanbul ignore next */
    {
      var _this$$refs$input3;

      // For external handler that may want a setRangeText(a,b,c) method
      (_this$$refs$input3 = this.$refs.input).setRangeText.apply(_this$$refs$input3, arguments);
    }
  }
};

// @vue/component
var formValidityMixin = {
  computed: {
    validity: {
      // Expose validity property
      cache: false,
      get: function get()
      /* istanbul ignore next */
      {
        return this.$refs.input.validity;
      }
    },
    validationMessage: {
      // Expose validationMessage property
      cache: false,
      get: function get()
      /* istanbul ignore next */
      {
        return this.$refs.input.validationMessage;
      }
    },
    willValidate: {
      // Expose willValidate property
      cache: false,
      get: function get()
      /* istanbul ignore next */
      {
        return this.$refs.input.willValidate;
      }
    }
  },
  methods: {
    setCustomValidity: function setCustomValidity()
    /* istanbul ignore next */
    {
      var _this$$refs$input;

      // For external handler that may want a setCustomValidity(...) method
      return (_this$$refs$input = this.$refs.input).setCustomValidity.apply(_this$$refs$input, arguments);
    },
    checkValidity: function checkValidity()
    /* istanbul ignore next */
    {
      var _this$$refs$input2;

      // For external handler that may want a checkValidity(...) method
      return (_this$$refs$input2 = this.$refs.input).checkValidity.apply(_this$$refs$input2, arguments);
    },
    reportValidity: function reportValidity()
    /* istanbul ignore next */
    {
      var _this$$refs$input3;

      // For external handler that may want a reportValidity(...) method
      return (_this$$refs$input3 = this.$refs.input).reportValidity.apply(_this$$refs$input3, arguments);
    }
  }
};

var TYPES = ['text', 'password', 'email', 'number', 'url', 'tel', 'search', 'range', 'color', 'date', 'time', 'datetime', 'datetime-local', 'month', 'week']; // @vue/component

var BFormInput = /*#__PURE__*/Vue.extend({
  name: 'BFormInput',
  mixins: [idMixin, formMixin, formSizeMixin, formStateMixin, formTextMixin, formSelectionMixin, formValidityMixin],
  props: {
    // value prop defined in form-text mixin
    // value: { },
    type: {
      type: String,
      default: 'text',
      validator: function validator(type) {
        return arrayIncludes(TYPES, type);
      }
    },
    noWheel: {
      // Disable mousewheel to prevent wheel from changing values (i.e. number/date).
      type: Boolean,
      default: false
    },
    min: {
      type: [String, Number],
      default: null
    },
    max: {
      type: [String, Number],
      default: null
    },
    step: {
      type: [String, Number],
      default: null
    },
    list: {
      type: String,
      default: null
    }
  },
  computed: {
    localType: function localType() {
      // We only allow certain types
      return arrayIncludes(TYPES, this.type) ? this.type : 'text';
    }
  },
  watch: {
    noWheel: function noWheel(newVal) {
      this.setWheelStopper(newVal);
    }
  },
  mounted: function mounted() {
    this.setWheelStopper(this.noWheel);
  },
  deactivated: function deactivated() {
    // Turn off listeners when keep-alive component deactivated

    /* istanbul ignore next */
    this.setWheelStopper(false);
  },
  activated: function activated() {
    // Turn on listeners (if no-wheel) when keep-alive component activated

    /* istanbul ignore next */
    this.setWheelStopper(this.noWheel);
  },
  beforeDestroy: function beforeDestroy() {
    /* istanbul ignore next */
    this.setWheelStopper(false);
  },
  methods: {
    setWheelStopper: function setWheelStopper(on) {
      var input = this.$el; // We use native events, so that we don't interfere with propagation

      eventOnOff(on, input, 'focus', this.onWheelFocus);
      eventOnOff(on, input, 'blur', this.onWheelBlur);

      if (!on) {
        eventOff(document, 'wheel', this.stopWheel);
      }
    },
    onWheelFocus: function onWheelFocus() {
      eventOn(document, 'wheel', this.stopWheel);
    },
    onWheelBlur: function onWheelBlur() {
      eventOff(document, 'wheel', this.stopWheel);
    },
    stopWheel: function stopWheel(evt) {
      evt.preventDefault();
      this.$el.blur();
    }
  },
  render: function render(h) {
    var self = this;
    return h('input', {
      ref: 'input',
      class: self.computedClass,
      directives: [{
        name: 'model',
        rawName: 'v-model',
        value: self.localValue,
        expression: 'localValue'
      }],
      attrs: {
        id: self.safeId(),
        name: self.name,
        form: self.form || null,
        type: self.localType,
        disabled: self.disabled,
        placeholder: self.placeholder,
        required: self.required,
        autocomplete: self.autocomplete || null,
        readonly: self.readonly || self.plaintext,
        min: self.min,
        max: self.max,
        step: self.step,
        list: self.localType !== 'password' ? self.list : null,
        'aria-required': self.required ? 'true' : null,
        'aria-invalid': self.computedAriaInvalid
      },
      domProps: {
        value: self.localValue
      },
      on: _objectSpread2({}, self.$listeners, {
        input: self.onInput,
        change: self.onChange,
        blur: self.onBlur
      })
    });
  }
});

var FormInputPlugin = /*#__PURE__*/pluginFactory({
  components: {
    BFormInput: BFormInput,
    BInput: BFormInput
  }
});

var props$w = {
  checked: {
    // type: [String, Number, Boolean, Object],
    default: null
  }
}; // @vue/component

var BFormRadioGroup = /*#__PURE__*/Vue.extend({
  name: 'BFormRadioGroup',
  mixins: [idMixin, formMixin, formRadioCheckGroupMixin, // Includes render function
  formOptionsMixin, formSizeMixin, formStateMixin],
  provide: function provide() {
    return {
      bvRadioGroup: this
    };
  },
  props: props$w,
  data: function data() {
    return {
      localChecked: this.checked
    };
  },
  computed: {
    isRadioGroup: function isRadioGroup() {
      return true;
    }
  }
});

var FormRadioPlugin = /*#__PURE__*/pluginFactory({
  components: {
    BFormRadio: BFormRadio,
    BRadio: BFormRadio,
    BFormRadioGroup: BFormRadioGroup,
    BRadioGroup: BFormRadioGroup
  }
});

var optionsMixin = {
  mixins: [formOptionsMixin],
  props: {
    labelField: {
      type: String,
      default: 'label'
    },
    optionsField: {
      type: String,
      default: 'options'
    }
  },
  methods: {
    normalizeOption: function normalizeOption(option) {
      var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      // When the option is an object, normalize it
      if (isPlainObject(option)) {
        var value = get(option, this.valueField);
        var text = get(option, this.textField);
        var options = get(option, this.optionsField); // When it has options, create an `<optgroup>` object

        if (isArray(options)) {
          return {
            label: String(get(option, this.labelField) || text),
            options: options
          };
        } // Otherwise create an `<option>` object


        return {
          value: isUndefined(value) ? key || text : value,
          text: String(isUndefined(text) ? key : text),
          html: get(option, this.htmlField),
          disabled: Boolean(get(option, this.disabledField))
        };
      } // Otherwise create an `<option>` object from the given value


      return {
        value: key || option,
        text: String(option),
        disabled: false
      };
    }
  }
};

var NAME$g = 'BFormSelectOption';
var props$x = {
  value: {
    // type: [String, Number, Boolean, Object],
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  }
}; // @vue/component

var BFormSelectOption = /*#__PURE__*/Vue.extend({
  name: NAME$g,
  functional: true,
  props: props$x,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var value = props.value,
        disabled = props.disabled;
    return h('option', mergeData(data, {
      attrs: {
        disabled: disabled
      },
      domProps: {
        value: value
      }
    }), children);
  }
});

var BFormSelectOptionGroup = /*#__PURE__*/Vue.extend({
  name: 'BFormSelectOptionGroup',
  mixins: [normalizeSlotMixin, formOptionsMixin],
  props: {
    label: {
      type: String,
      required: true
    }
  },
  render: function render(h) {
    return h('optgroup', {
      attrs: {
        label: this.label
      }
    }, [this.normalizeSlot('first'), this.formOptions.map(function (option, index) {
      return h(BFormSelectOption, {
        props: {
          value: option.value,
          disabled: option.disabled
        },
        domProps: htmlOrText(option.html, option.text),
        key: "option_".concat(index, "_opt")
      });
    }), this.normalizeSlot('default')]);
  }
});

var BFormSelect = /*#__PURE__*/Vue.extend({
  name: 'BFormSelect',
  mixins: [idMixin, normalizeSlotMixin, formMixin, formSizeMixin, formStateMixin, formCustomMixin, optionsMixin],
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: {// type: [Object, Array, String, Number, Boolean],
      // default: undefined
    },
    multiple: {
      type: Boolean,
      default: false
    },
    selectSize: {
      // Browsers default size to 0, which shows 4 rows in most browsers in multiple mode
      // Size of 1 can bork out Firefox
      type: Number,
      default: 0
    },
    ariaInvalid: {
      type: [Boolean, String],
      default: false
    }
  },
  data: function data() {
    return {
      localValue: this.value
    };
  },
  computed: {
    computedSelectSize: function computedSelectSize() {
      // Custom selects with a size of zero causes the arrows to be hidden,
      // so dont render the size attribute in this case
      return !this.plain && this.selectSize === 0 ? null : this.selectSize;
    },
    inputClass: function inputClass() {
      return [this.plain ? 'form-control' : 'custom-select', this.size && this.plain ? "form-control-".concat(this.size) : null, this.size && !this.plain ? "custom-select-".concat(this.size) : null, this.stateClass];
    },
    computedAriaInvalid: function computedAriaInvalid() {
      if (this.ariaInvalid === true || this.ariaInvalid === 'true') {
        return 'true';
      }

      return this.stateClass === 'is-invalid' ? 'true' : null;
    }
  },
  watch: {
    value: function value(newVal) {
      this.localValue = newVal;
    },
    localValue: function localValue() {
      this.$emit('input', this.localValue);
    }
  },
  methods: {
    focus: function focus() {
      this.$refs.input.focus();
    },
    blur: function blur() {
      this.$refs.input.blur();
    }
  },
  render: function render(h) {
    var _this = this;

    return h('select', {
      ref: 'input',
      class: this.inputClass,
      directives: [{
        name: 'model',
        rawName: 'v-model',
        value: this.localValue,
        expression: 'localValue'
      }],
      attrs: {
        id: this.safeId(),
        name: this.name,
        form: this.form || null,
        multiple: this.multiple || null,
        size: this.computedSelectSize,
        disabled: this.disabled,
        required: this.required,
        'aria-required': this.required ? 'true' : null,
        'aria-invalid': this.computedAriaInvalid
      },
      on: {
        change: function change(evt) {
          var target = evt.target;
          var selectedVal = from(target.options).filter(function (o) {
            return o.selected;
          }).map(function (o) {
            return '_value' in o ? o._value : o.value;
          });
          _this.localValue = target.multiple ? selectedVal : selectedVal[0];

          _this.$nextTick(function () {
            _this.$emit('change', _this.localValue);
          });
        }
      }
    }, [this.normalizeSlot('first'), this.formOptions.map(function (option, index) {
      var key = "option_".concat(index, "_opt");
      var options = option.options;
      return isArray(options) ? h(BFormSelectOptionGroup, {
        props: {
          label: option.label,
          options: options
        },
        key: key
      }) : h(BFormSelectOption, {
        props: {
          value: option.value,
          disabled: option.disabled
        },
        domProps: htmlOrText(option.html, option.text),
        key: key
      });
    }), this.normalizeSlot('default')]);
  }
});

var FormSelectPlugin = /*#__PURE__*/pluginFactory({
  components: {
    BFormSelect: BFormSelect,
    BFormSelectOption: BFormSelectOption,
    BFormSelectOptionGroup: BFormSelectOptionGroup,
    BSelect: BFormSelect,
    BSelectOption: BFormSelectOption,
    BSelectOptionGroup: BFormSelectOptionGroup
  }
});

var NAME$h = 'BFormSpinbutton';
var UP$1 = KEY_CODES.UP,
    DOWN$1 = KEY_CODES.DOWN,
    HOME$1 = KEY_CODES.HOME,
    END$1 = KEY_CODES.END,
    PAGEUP$1 = KEY_CODES.PAGEUP,
    PAGEDOWN$1 = KEY_CODES.PAGEDOWN; // Default for spin button range and step

var DEFAULT_MIN = 1;
var DEFAULT_MAX = 100;
var DEFAULT_STEP = 1; // Delay before auto-repeat in ms

var DEFAULT_REPEAT_DELAY = 500; // Repeat interval in ms

var DEFAULT_REPEAT_INTERVAL = 100; // Repeat rate increased after number of repeats

var DEFAULT_REPEAT_THRESHOLD = 10; // Repeat speed multiplier (step multiplier, must be an integer)

var DEFAULT_REPEAT_MULTIPLIER = 4; // --- Helper functions ---

var defaultNumber = function defaultNumber(value) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  value = toFloat(value);
  return isNaN(value) ? defaultValue : value;
};

var defaultInteger = function defaultInteger(value) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  value = toInteger(value);
  return isNaN(value) ? Math.abs(defaultValue) : value;
}; // --- BFormSpinbutton ---
// @vue/component


var BFormSpinbutton = /*#__PURE__*/Vue.extend({
  name: NAME$h,
  mixins: [idMixin],
  inheritAttrs: false,
  props: {
    value: {
      // Should this really be String, to match native number inputs?
      type: Number,
      default: null
    },
    min: {
      type: [Number, String],
      default: DEFAULT_MIN
    },
    max: {
      type: [Number, String],
      default: DEFAULT_MAX
    },
    step: {
      type: [Number, String],
      default: DEFAULT_STEP
    },
    wrap: {
      type: Boolean,
      default: false
    },
    formatterFn: {
      type: Function // default: null

    },
    size: {
      type: String // default: null

    },
    placeholder: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    required: {
      // Only affects the `aria-invalid` attribute
      type: Boolean,
      default: false
    },
    name: {
      type: String // default: null

    },
    form: {
      type: String // default: null

    },
    state: {
      // Tri-state prop: `true`, `false`, or `null`
      type: Boolean,
      default: null
    },
    inline: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    },
    ariaLabel: {
      type: String,
      default: null
    },
    ariaControls: {
      type: String,
      default: null
    },
    labelDecrement: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$h, 'labelDecrement');
      }
    },
    labelIncrement: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$h, 'labelIncrement');
      }
    },
    locale: {
      type: [String, Array],
      default: null
    },
    repeatDelay: {
      type: [Number, String],
      default: DEFAULT_REPEAT_DELAY
    },
    repeatInterval: {
      type: [Number, String],
      default: DEFAULT_REPEAT_INTERVAL
    },
    repeatThreshold: {
      type: [Number, String],
      default: DEFAULT_REPEAT_THRESHOLD
    },
    repeatStepMultiplier: {
      type: [Number, String],
      default: DEFAULT_REPEAT_MULTIPLIER
    }
  },
  data: function data() {
    return {
      localValue: defaultNumber(this.value),
      hasFocus: false
    };
  },
  computed: {
    computedStep: function computedStep() {
      return defaultNumber(this.step, DEFAULT_STEP);
    },
    computedMin: function computedMin() {
      return defaultNumber(this.min, DEFAULT_MIN);
    },
    computedMax: function computedMax() {
      // We round down to the nearest maximum step value
      var max = defaultNumber(this.max, DEFAULT_MAX);
      var step = this.computedStep;
      var min = this.computedMin;
      return Math.floor((max - min) / step) * step + min;
    },
    computedDelay: function computedDelay() {
      return defaultInteger(this.repeatDelay, DEFAULT_REPEAT_DELAY) || DEFAULT_REPEAT_DELAY;
    },
    computedInterval: function computedInterval() {
      return defaultInteger(this.repeatInterval, DEFAULT_REPEAT_INTERVAL) || DEFAULT_REPEAT_INTERVAL;
    },
    computedThreshold: function computedThreshold() {
      return defaultInteger(this.repeatThreshold, DEFAULT_REPEAT_THRESHOLD) || 1;
    },
    computedStepMultiplier: function computedStepMultiplier() {
      return defaultInteger(this.repeatStepMultiplier, DEFAULT_REPEAT_MULTIPLIER) || 1;
    },
    computedPrecision: function computedPrecision() {
      // Quick and dirty way to get the number of decimals
      var step = this.computedStep;
      return Math.floor(step) === step ? 0 : (step.toString().split('.')[1] || '').length;
    },
    computedMultiplier: function computedMultiplier() {
      return Math.pow(10, this.computedPrecision || 0);
    },
    valueAsFixed: function valueAsFixed() {
      var value = this.localValue;
      return isNull(value) ? '' : value.toFixed(this.computedPrecision);
    },
    computedLocale: function computedLocale() {
      var locales = concat(this.locale).filter(identity);
      var nf = new Intl.NumberFormat(locales);
      return nf.resolvedOptions().locale;
    },
    computedRTL: function computedRTL() {
      return isLocaleRTL(this.computedLocale);
    },
    defaultFormatter: function defaultFormatter() {
      // Returns and `Intl.NumberFormat` formatter method reference
      var precision = this.computedPrecision;
      var nf = new Intl.NumberFormat(this.computedLocale, {
        style: 'decimal',
        useGrouping: false,
        minimumIntegerDigits: 1,
        minimumFractionDigits: precision,
        maximumFractionDigits: precision,
        notation: 'standard'
      }); // Return the format method reference

      return nf.format;
    }
  },
  watch: {
    value: function value(_value) {
      _value = toFloat(_value); // Will be `NaN` if `value` is `null`

      this.localValue = isNaN(_value) ? null : _value;
    },
    localValue: function localValue(value) {
      this.$emit('input', value);
    },
    disabled: function disabled(_disabled) {
      if (_disabled) {
        this.clearRepeat();
      }
    },
    readonly: function readonly(_readonly) {
      if (_readonly) {
        this.clearRepeat();
      }
    }
  },
  created: function created() {
    // Create non reactive properties
    this.$_autoDelayTimer = null;
    this.$_autoRepeatTimer = null;
    this.$_keyIsDown = false;
  },
  beforeDestroy: function beforeDestroy() {
    this.clearRepeat();
  },
  deactivated: function deactivated()
  /* istanbul ignore next */
  {
    this.clearRepeat();
  },
  methods: {
    // --- Public methods ---
    focus: function focus() {
      if (!this.disabled) {
        try {
          this.$refs.spinner.focus();
        } catch (_unused) {}
      }
    },
    blur: function blur() {
      if (!this.disabled) {
        try {
          this.$refs.spinner.blur();
        } catch (_unused2) {}
      }
    },
    // --- Private methods ---
    emitChange: function emitChange() {
      this.$emit('change', this.localValue);
    },
    stepValue: function stepValue(direction) {
      // Sets a new incremented or decremented value, supporting optional wrapping
      // Direction is either +1 or -1 (or a multiple thereof)
      var value = this.localValue;

      if (!this.disabled && !isNull(value)) {
        var step = this.computedStep * direction;
        var min = this.computedMin;
        var max = this.computedMax;
        var multiplier = this.computedMultiplier;
        var wrap = this.wrap; // We ensure that the value steps like a native input

        value = Math.round((value - min) / step) * step + min + step; // We ensure that precision is maintained (decimals)

        value = Math.round(value * multiplier) / multiplier; // Handle if wrapping is enabled

        this.localValue = value > max ? wrap ? min : max : value < min ? wrap ? max : min : value;
      }
    },
    onFocusBlur: function onFocusBlur(evt) {
      if (!this.disabled) {
        this.hasFocus = evt.type === 'focus';
      } else {
        this.hasFocus = false;
      }
    },
    stepUp: function stepUp() {
      var multiplier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var value = this.localValue;

      if (isNull(value)) {
        this.localValue = this.computedMin;
      } else {
        this.stepValue(+1 * multiplier);
      }
    },
    stepDown: function stepDown() {
      var multiplier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var value = this.localValue;

      if (isNull(value)) {
        this.localValue = this.wrap ? this.computedMax : this.computedMin;
      } else {
        this.stepValue(-1 * multiplier);
      }
    },
    onKeydown: function onKeydown(evt) {
      var keyCode = evt.keyCode,
          altKey = evt.altKey,
          ctrlKey = evt.ctrlKey,
          metaKey = evt.metaKey;
      /* istanbul ignore if */

      if (this.disabled || this.readonly || altKey || ctrlKey || metaKey) {
        return;
      }

      if (arrayIncludes([UP$1, DOWN$1, HOME$1, END$1, PAGEUP$1, PAGEDOWN$1], keyCode)) {
        // https://w3c.github.io/aria-practices/#spinbutton
        evt.preventDefault();
        /* istanbul ignore if */

        if (this.$_keyIsDown) {
          // Keypress is already in progress
          return;
        }

        this.resetTimers();

        if (arrayIncludes([UP$1, DOWN$1], keyCode)) {
          // The following use the custom auto-repeat handling
          this.$_keyIsDown = true;

          if (keyCode === UP$1) {
            this.handleStepRepeat(evt, this.stepUp);
          } else if (keyCode === DOWN$1) {
            this.handleStepRepeat(evt, this.stepDown);
          }
        } else {
          // These use native OS key repeating
          if (keyCode === PAGEUP$1) {
            this.stepUp(this.computedStepMultiplier);
          } else if (keyCode === PAGEDOWN$1) {
            this.stepDown(this.computedStepMultiplier);
          } else if (keyCode === HOME$1) {
            this.localValue = this.computedMin;
          } else if (keyCode === END$1) {
            this.localValue = this.computedMax;
          }
        }
      }
    },
    onKeyup: function onKeyup(evt) {
      // Emit a change event when the keyup happens
      var keyCode = evt.keyCode,
          altKey = evt.altKey,
          ctrlKey = evt.ctrlKey,
          metaKey = evt.metaKey;
      /* istanbul ignore if */

      if (this.disabled || this.readonly || altKey || ctrlKey || metaKey) {
        return;
      }

      if (arrayIncludes([UP$1, DOWN$1, HOME$1, END$1, PAGEUP$1, PAGEDOWN$1], keyCode)) {
        this.resetTimers();
        this.$_keyIsDown = false;
        evt.preventDefault();
        this.emitChange();
      }
    },
    handleStepRepeat: function handleStepRepeat(evt, stepper) {
      var _this = this;

      var _ref = evt || {},
          type = _ref.type,
          button = _ref.button;

      if (!this.disabled && !this.readonly) {
        /* istanbul ignore if */
        if (type === 'mousedown' && button) {
          // We only respond to left (main === 0) button clicks
          return;
        }

        this.resetTimers(); // Step the counter initially

        stepper(1);
        var threshold = this.computedThreshold;
        var multiplier = this.computedStepMultiplier;
        var delay = this.computedDelay;
        var interval = this.computedInterval; // Initiate the delay/repeat interval

        this.$_autoDelayTimer = setTimeout(function () {
          var count = 0;
          _this.$_autoRepeatTimer = setInterval(function () {
            // After N initial repeats, we increase the incrementing step amount
            // We do this to minimize screen reader announcements of the value
            // (values are announced every change, which can be chatty for SR users)
            // And to make it easer to select a value when the range is large
            stepper(count < threshold ? 1 : multiplier);
            count++;
          }, interval);
        }, delay);
      }
    },
    onMouseup: function onMouseup(evt) {
      // `<body>` listener, only enabled when mousedown starts
      var _ref2 = evt || {},
          type = _ref2.type,
          button = _ref2.button;
      /* istanbul ignore if */


      if (type === 'mouseup' && button) {
        // Ignore non left button (main === 0) mouse button click
        return;
      }

      evt.preventDefault();
      this.resetTimers();
      this.setMouseup(false); // Trigger the change event

      this.emitChange();
    },
    setMouseup: function setMouseup(on) {
      // Enable or disabled the body mouseup/touchend handlers
      // Use try/catch to handle case when called server side
      try {
        eventOnOff(on, document.body, 'mouseup', this.onMouseup, false);
        eventOnOff(on, document.body, 'touchend', this.onMouseup, false);
      } catch (_unused3) {}
    },
    resetTimers: function resetTimers() {
      clearTimeout(this.$_autoDelayTimer);
      clearInterval(this.$_autoRepeatTimer);
    },
    clearRepeat: function clearRepeat() {
      this.resetTimers();
      this.setMouseup(false);
      this.$_keyIsDown = false;
    }
  },
  render: function render(h) {
    var _this2 = this,
        _class;

    var spinId = this.safeId();
    var value = this.localValue;
    var isVertical = this.vertical;
    var isInline = this.inline && !isVertical;
    var isDisabled = this.disabled;
    var isReadonly = this.readonly && !isDisabled;
    var isRequired = this.required && !isReadonly && !isDisabled;
    var state = this.state;
    var size = this.size;
    var hasValue = !isNull(value);
    var formatter = isFunction(this.formatterFn) ? this.formatterFn : this.defaultFormatter;

    var makeButton = function makeButton(stepper, label, IconCmp, keyRef, shortcut, btnDisabled) {
      var $icon = h(IconCmp, {
        props: {
          scale: _this2.hasFocus ? 1.5 : 1.25
        },
        attrs: {
          'aria-hidden': 'true'
        }
      });

      var handler = function handler(evt) {
        if (!isDisabled && !isReadonly) {
          evt.preventDefault();

          _this2.setMouseup(true);

          try {
            // Since we `preventDefault()`, we must manually focus the button
            evt.currentTarget.focus();
          } catch (_unused4) {}

          _this2.handleStepRepeat(evt, stepper);
        }
      };

      return h('button', {
        key: keyRef || null,
        ref: keyRef,
        staticClass: 'btn btn-sm border-0 rounded-0',
        class: {
          'py-0': !isVertical
        },
        attrs: {
          tabindex: '-1',
          type: 'button',
          disabled: isDisabled || isReadonly || btnDisabled,
          'aria-disabled': isDisabled || isReadonly || btnDisabled ? 'true' : null,
          'aria-controls': spinId,
          'aria-label': label || null,
          'aria-keyshortcuts': shortcut || null
        },
        on: {
          mousedown: handler,
          touchstart: handler
        }
      }, [h('div', {}, [$icon])]);
    }; // TODO: Add button disabled state when `wrap` is `false` and at value max/min


    var $increment = makeButton(this.stepUp, this.labelIncrement, BIconPlus, 'inc', 'ArrowUp');
    var $decrement = makeButton(this.stepDown, this.labelDecrement, BIconDash, 'dec', 'ArrowDown');
    var $hidden = h();

    if (this.name && !isDisabled) {
      $hidden = h('input', {
        key: 'hidden',
        attrs: {
          type: 'hidden',
          name: this.name,
          form: this.form || null,
          // TODO: Should this be set to '' if value is out of range?
          value: this.valueAsFixed
        }
      });
    }

    var $spin = h( // We use 'output' element to make this accept a `<label for="id">` (Except IE)
    'output', {
      ref: 'spinner',
      key: 'output',
      staticClass: 'flex-grow-1',
      class: {
        'w-100': !isVertical && !isInline,
        'd-flex': isVertical,
        'align-self-center': !isVertical,
        'align-items-center': isVertical,
        'py-1': isVertical,
        'px-1': !isVertical,
        'mx-1': isVertical,
        'border-top': isVertical,
        'border-bottom': isVertical,
        'border-left': !isVertical,
        'border-right': !isVertical
      },
      attrs: _objectSpread2({
        dir: this.computedRTL ? 'rtl' : 'ltr'
      }, this.$attrs, {
        id: spinId,
        role: 'spinbutton',
        tabindex: isDisabled ? null : '0',
        'aria-live': 'off',
        'aria-label': this.ariaLabel || null,
        'aria-controls': this.ariaControls || null,
        // TODO: May want to check if the value is in range
        'aria-invalid': state === false || !hasValue && isRequired ? 'true' : null,
        'aria-required': isRequired ? 'true' : null,
        // These attrs are required for role spinbutton
        'aria-valuemin': toString$1(this.computedMin),
        'aria-valuemax': toString$1(this.computedMax),
        // These should be `null` if the value is out of range
        // They must also be non-existent attrs if the value is out of range or `null`
        'aria-valuenow': hasValue ? value : null,
        'aria-valuetext': hasValue ? formatter(value) : null
      })
    }, [h('bdi', {
      staticClass: 'w-100'
    }, hasValue ? formatter(value) : this.placeholder || '')]);
    return h('div', {
      staticClass: 'b-form-spinbutton form-control p-0',
      class: (_class = {
        disabled: isDisabled,
        readonly: isReadonly,
        focus: this.hasFocus
      }, _defineProperty(_class, "form-control-".concat(size), !!size), _defineProperty(_class, 'd-inline-flex', isInline || isVertical), _defineProperty(_class, 'd-flex', !isInline && !isVertical), _defineProperty(_class, 'align-items-stretch', !isVertical), _defineProperty(_class, 'flex-column', isVertical), _defineProperty(_class, 'is-valid', state === true), _defineProperty(_class, 'is-invalid', state === false), _class),
      attrs: {
        role: 'group',
        lang: this.computedLocale,
        tabindex: isDisabled ? null : '-1',
        title: this.ariaLabel
      },
      on: {
        keydown: this.onKeydown,
        keyup: this.onKeyup,
        // We use capture phase (`!` prefix) since focus and blur do not bubble
        '!focus': this.onFocusBlur,
        '!blur': this.onFocusBlur
      }
    }, isVertical ? [$increment, $hidden, $spin, $decrement] : [$decrement, $hidden, $spin, $increment]);
  }
});

var FormSpinbuttonPlugin = /*#__PURE__*/pluginFactory({
  components: {
    BFormSpinbutton: BFormSpinbutton,
    BSpinbutton: BFormSpinbutton
  }
});

var NAME$i = 'BFormTag';
var BFormTag = /*#__PURE__*/Vue.extend({
  name: NAME$i,
  mixins: [idMixin, normalizeSlotMixin],
  props: {
    variant: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$i, 'variant');
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: null
    },
    pill: {
      type: Boolean,
      default: false
    },
    removeLabel: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$i, 'removeLabel');
      }
    },
    tag: {
      type: String,
      default: 'span'
    }
  },
  methods: {
    onDelete: function onDelete(evt) {
      var type = evt.type,
          keyCode = evt.keyCode;

      if (!this.disabled && (type === 'click' || type === 'keydown' && keyCode === KEY_CODES.DELETE)) {
        this.$emit('remove');
      }
    }
  },
  render: function render(h) {
    var tagId = this.safeId();
    var tagLabelId = this.safeId('_taglabel_');
    var $remove = h();

    if (!this.disabled) {
      $remove = h(BButtonClose, {
        staticClass: 'b-form-tag-remove ml-1',
        props: {
          ariaLabel: this.removeLabel
        },
        attrs: {
          'aria-controls': tagId,
          'aria-describedby': tagLabelId,
          'aria-keyshortcuts': 'Delete'
        },
        on: {
          click: this.onDelete,
          keydown: this.onDelete
        }
      });
    }

    var $tag = h('span', {
      staticClass: 'b-form-tag-content flex-grow-1 text-truncate',
      attrs: {
        id: tagLabelId
      }
    }, this.normalizeSlot('default') || this.title || [h()]);
    return h(BBadge, {
      staticClass: 'b-form-tag d-inline-flex align-items-baseline mw-100',
      class: {
        disabled: this.disabled
      },
      attrs: {
        id: tagId,
        title: this.title || null,
        'aria-labelledby': tagLabelId
      },
      props: {
        tag: this.tag,
        variant: this.variant,
        pill: this.pill
      }
    }, [$tag, $remove]);
  }
});

var NAME$j = 'BFormTags'; // Supported input types (for built in input)

var TYPES$1 = ['text', 'email', 'tel', 'url', 'number']; // Pre-compiled regular expressions for performance reasons

var RX_SPACES = /[\s\uFEFF\xA0]+/g; // KeyCode constants

var ENTER$1 = KEY_CODES.ENTER,
    BACKSPACE = KEY_CODES.BACKSPACE,
    DELETE = KEY_CODES.DELETE; // --- Utility methods ---
// Escape special chars in string and replace
// contiguous spaces with a whitespace match

var escapeRegExpChars = function escapeRegExpChars(str) {
  return escapeRegExp(str).replace(RX_SPACES, '\\s');
}; // Remove leading/trailing spaces from array of tags and remove duplicates


var cleanTags = function cleanTags(tags) {
  return concat(tags).map(function (tag) {
    return trim(toString$1(tag));
  }).filter(function (tag, index, arr) {
    return tag.length > 0 && arr.indexOf(tag) === index;
  });
}; // Processes an input/change event, normalizing string or event argument


var processEventValue = function processEventValue(evt) {
  return isString(evt) ? evt : isEvent(evt) ? evt.target.value || '' : '';
}; // Returns a fresh empty `tagsState` object


var cleanTagsState = function cleanTagsState() {
  return {
    all: [],
    valid: [],
    invalid: [],
    duplicate: []
  };
}; // @vue/component


var BFormTags = /*#__PURE__*/Vue.extend({
  name: NAME$j,
  mixins: [idMixin, normalizeSlotMixin],
  model: {
    // Even though this is the default that Vue assumes, we need
    // to add it for the docs to reflect that this is the model
    prop: 'value',
    event: 'input'
  },
  props: {
    inputId: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$j, 'placeholder');
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: null
    },
    form: {
      type: String,
      default: null
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    state: {
      // Tri-state: `true`, `false`, `null`
      type: Boolean,
      default: null
    },
    size: {
      type: String,
      default: null
    },
    inputType: {
      type: String,
      default: 'text',
      validator: function validator(type) {
        return arrayIncludes(TYPES$1, type);
      }
    },
    inputClass: {
      type: [String, Array, Object],
      default: null
    },
    inputAttrs: {
      // Additional attributes to add to the input element
      type: Object,
      default: function _default() {
        return {};
      }
    },
    addButtonText: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$j, 'addButtonText');
      }
    },
    addButtonVariant: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$j, 'addButtonVariant');
      }
    },
    tagVariant: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$j, 'tagVariant');
      }
    },
    tagClass: {
      type: [String, Array, Object],
      default: null
    },
    tagPills: {
      type: Boolean,
      default: false
    },
    tagRemoveLabel: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$j, 'tagRemoveLabel');
      }
    },
    tagRemovedLabel: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$j, 'tagRemovedLabel');
      }
    },
    tagValidator: {
      type: Function,
      default: null
    },
    duplicateTagText: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$j, 'duplicateTagText');
      }
    },
    invalidTagText: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$j, 'invalidTagText');
      }
    },
    separator: {
      // Character (or characters) that trigger adding tags
      type: [String, Array],
      default: null
    },
    removeOnDelete: {
      // Enable deleting last tag in list when BACKSPACE is
      // pressed and input is empty
      type: Boolean,
      default: false
    },
    addOnChange: {
      // Enable change event triggering tag addition
      // Handy if using <select> as the input
      type: Boolean,
      default: false
    },
    noAddOnEnter: {
      // Disable ENTER key from triggering tag addition
      type: Boolean,
      default: false
    },
    noOuterFocus: {
      // Disable the focus ring on the root element
      type: Boolean,
      default: false
    },
    value: {
      // The v-model prop
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      hasFocus: false,
      newTag: '',
      tags: [],
      // Tags that were removed
      removedTags: [],
      // Populated when tags are parsed
      tagsState: cleanTagsState()
    };
  },
  computed: {
    computedInputId: function computedInputId() {
      return this.inputId || this.safeId('__input__');
    },
    computedInputType: function computedInputType() {
      // We only allow certain types
      return arrayIncludes(TYPES$1, this.inputType) ? this.inputType : 'text';
    },
    computedInputAttrs: function computedInputAttrs() {
      return _objectSpread2({}, this.inputAttrs, {
        // Must have attributes
        id: this.computedInputId,
        value: this.newTag,
        disabled: this.disabled || null,
        form: this.form || null
      });
    },
    computedInputHandlers: function computedInputHandlers() {
      return {
        input: this.onInputInput,
        change: this.onInputChange,
        keydown: this.onInputKeydown
      };
    },
    computedSeparator: function computedSeparator() {
      // Merge the array into a string
      return concat(this.separator).filter(isString).filter(identity).join('');
    },
    computedSeparatorRegExp: function computedSeparatorRegExp() {
      // We use a computed prop here to precompile the RegExp
      // The RegExp is a character class RE in the form of `/[abc]+/`
      // where a, b, and c are the valid separator characters
      // -> `tags = str.split(/[abc]+/).filter(t => t)`
      var separator = this.computedSeparator;
      return separator ? new RegExp("[".concat(escapeRegExpChars(separator), "]+")) : null;
    },
    computedJoiner: function computedJoiner() {
      // When tag(s) are invalid or duplicate, we leave them
      // in the input so that the user can see them
      // If there are more than one tag in the input, we use the
      // first separator character as the separator in the input
      // We append a space if the first separator is not a space
      var joiner = this.computedSeparator.charAt(0);
      return joiner !== ' ' ? "".concat(joiner, " ") : joiner;
    },
    disableAddButton: function disableAddButton() {
      var _this = this;

      // If 'Add' button should be disabled
      // If the input contains at least one tag that can
      // be added, then the 'Add' button should be enabled
      var newTag = trim(this.newTag);
      return newTag === '' || !this.splitTags(newTag).some(function (t) {
        return !arrayIncludes(_this.tags, t) && _this.validateTag(t);
      });
    },
    duplicateTags: function duplicateTags() {
      return this.tagsState.duplicate;
    },
    hasDuplicateTags: function hasDuplicateTags() {
      return this.duplicateTags.length > 0;
    },
    invalidTags: function invalidTags() {
      return this.tagsState.invalid;
    },
    hasInvalidTags: function hasInvalidTags() {
      return this.invalidTags.length > 0;
    }
  },
  watch: {
    value: function value(newVal) {
      this.tags = cleanTags(newVal);
    },
    tags: function tags(newVal, oldVal) {
      // Update the `v-model` (if it differs from the value prop)
      if (!looseEqual(newVal, this.value)) {
        this.$emit('input', newVal);
      }

      if (!looseEqual(newVal, oldVal)) {
        newVal = concat(newVal).filter(identity);
        oldVal = concat(oldVal).filter(identity);
        this.removedTags = oldVal.filter(function (old) {
          return !arrayIncludes(newVal, old);
        });
      }
    },
    tagsState: function tagsState(newVal, oldVal) {
      // Emit a tag-state event when the `tagsState` object changes
      if (!looseEqual(newVal, oldVal)) {
        this.$emit('tag-state', newVal.valid, newVal.invalid, newVal.duplicate);
      }
    }
  },
  created: function created() {
    // We do this in created to make sure an input event emits
    // if the cleaned tags are not equal to the value prop
    this.tags = cleanTags(this.value);
  },
  mounted: function mounted() {
    this.handleAutofocus();
  },
  activated: function activated()
  /* istanbul ignore next */
  {
    this.handleAutofocus();
  },
  methods: {
    addTag: function addTag(newTag) {
      newTag = isString(newTag) ? newTag : this.newTag;
      /* istanbul ignore next */

      if (this.disabled || trim(newTag) === '') {
        // Early exit
        return;
      }

      var parsed = this.parseTags(newTag); // Add any new tags to the `tags` array, or if the
      // array of `allTags` is empty, we clear the input

      if (parsed.valid.length > 0 || parsed.all.length === 0) {
        // Clear the user input element (and leave in any invalid/duplicate tag(s)

        /* istanbul ignore if: full testing to be added later */
        if (matches(this.getInput(), 'select')) {
          // The following is needed to properly
          // work with `<select>` elements
          this.newTag = '';
        } else {
          var invalidAndDuplicates = [].concat(_toConsumableArray(parsed.invalid), _toConsumableArray(parsed.duplicate));
          this.newTag = parsed.all.filter(function (tag) {
            return arrayIncludes(invalidAndDuplicates, tag);
          }).join(this.computedJoiner).concat(invalidAndDuplicates.length > 0 ? this.computedJoiner.charAt(0) : '');
        }
      }

      if (parsed.valid.length > 0) {
        // We add the new tags in one atomic operation
        // to trigger reactivity once (instead of once per tag)
        // We do this after we update the new tag input value
        // `concat()` can be faster than array spread, when both args are arrays
        this.tags = concat(this.tags, parsed.valid);
      }

      this.tagsState = parsed; // Attempt to re-focus the input (specifically for when using the Add
      // button, as the button disappears after successfully adding a tag

      this.focus();
    },
    removeTag: function removeTag(tag) {
      var _this2 = this;

      /* istanbul ignore next */
      if (this.disabled) {
        return;
      } // TODO:
      //   Add `onRemoveTag(tag)` user method, which if returns `false`
      //   will prevent the tag from being removed (i.e. confirmation)
      //   Or emit cancelable `BvEvent`


      this.tags = this.tags.filter(function (t) {
        return t !== tag;
      }); // Return focus to the input (if possible)

      this.$nextTick(function () {
        _this2.focus();
      });
    },
    // --- Input element event handlers ---
    onInputInput: function onInputInput(evt) {
      /* istanbul ignore next: hard to test composition events */
      if (this.disabled || isEvent(evt) && evt.target.composing) {
        // `evt.target.composing` is set by Vue (`v-model` directive)
        // https://github.com/vuejs/vue/blob/dev/src/platforms/web/runtime/directives/model.js
        return;
      }

      var newTag = processEventValue(evt);
      var separatorRe = this.computedSeparatorRegExp;

      if (this.newTag !== newTag) {
        this.newTag = newTag;
      } // We ignore leading whitespace for the following


      newTag = trimLeft(newTag);

      if (separatorRe && separatorRe.test(newTag.slice(-1))) {
        // A trailing separator character was entered, so add the tag(s)
        // Note: More than one tag on input event is possible via copy/paste
        this.addTag();
      } else {
        // Validate (parse tags) on input event
        this.tagsState = newTag === '' ? cleanTagsState() : this.parseTags(newTag);
      }
    },
    onInputChange: function onInputChange(evt) {
      // Change is triggered on `<input>` blur, or `<select>` selected
      // This event is opt-in
      if (!this.disabled && this.addOnChange) {
        var newTag = processEventValue(evt);
        /* istanbul ignore next */

        if (this.newTag !== newTag) {
          this.newTag = newTag;
        }

        this.addTag();
      }
    },
    onInputKeydown: function onInputKeydown(evt) {
      // Early exit

      /* istanbul ignore next */
      if (this.disabled || !isEvent(evt)) {
        return;
      }

      var keyCode = evt.keyCode;
      var value = evt.target.value || '';
      /* istanbul ignore else: testing to be added later */

      if (!this.noAddOnEnter && keyCode === ENTER$1) {
        // Attempt to add the tag when user presses enter
        evt.preventDefault();
        this.addTag();
      } else if (this.removeOnDelete && (keyCode === BACKSPACE || keyCode === DELETE) && value === '') {
        // Remove the last tag if the user pressed backspace/delete and the input is empty
        evt.preventDefault();
        this.tags = this.tags.slice(0, -1);
      }
    },
    // --- Wrapper event handlers ---
    onClick: function onClick(evt) {
      var _this3 = this;

      if (!this.disabled && isEvent(evt) && evt.target === evt.currentTarget) {
        this.$nextTick(function () {
          _this3.focus();
        });
      }
    },
    onFocusin: function onFocusin() {
      this.hasFocus = true;
    },
    onFocusout: function onFocusout() {
      this.hasFocus = false;
    },
    handleAutofocus: function handleAutofocus() {
      var _this4 = this;

      this.$nextTick(function () {
        requestAF(function () {
          if (_this4.autofocus && !_this4.disabled) {
            _this4.focus();
          }
        });
      });
    },
    // --- Public methods ---
    focus: function focus() {
      if (!this.disabled) {
        try {
          this.getInput().focus();
        } catch (_unused) {}
      }
    },
    blur: function blur() {
      try {
        this.getInput().blur();
      } catch (_unused2) {}
    },
    // --- Private methods ---
    splitTags: function splitTags(newTag) {
      // Split the input into an array of raw tags
      newTag = toString$1(newTag);
      var separatorRe = this.computedSeparatorRegExp; // Split the tag(s) via the optional separator
      // Normally only a single tag is provided, but copy/paste
      // can enter multiple tags in a single operation

      return (separatorRe ? newTag.split(separatorRe) : [newTag]).map(trim).filter(identity);
    },
    parseTags: function parseTags(newTag) {
      var _this5 = this;

      // Takes `newTag` value and parses it into `validTags`,
      // `invalidTags`, and duplicate tags as an object
      // Split the input into raw tags
      var tags = this.splitTags(newTag); // Base results

      var parsed = {
        all: tags,
        valid: [],
        invalid: [],
        duplicate: []
      }; // Parse the unique tags

      tags.forEach(function (tag) {
        if (arrayIncludes(_this5.tags, tag) || arrayIncludes(parsed.valid, tag)) {
          // Unique duplicate tags
          if (!arrayIncludes(parsed.duplicate, tag)) {
            parsed.duplicate.push(tag);
          }
        } else if (_this5.validateTag(tag)) {
          // We only add unique/valid tags
          parsed.valid.push(tag);
        } else {
          // Unique invalid tags
          if (!arrayIncludes(parsed.invalid, tag)) {
            parsed.invalid.push(tag);
          }
        }
      });
      return parsed;
    },
    validateTag: function validateTag(tag) {
      // Call the user supplied tag validator
      var validator = this.tagValidator;
      return isFunction(validator) ? validator(tag) : true;
    },
    getInput: function getInput() {
      // Returns the input element reference (or null if not found)
      return select("#".concat(this.computedInputId), this.$el);
    },
    // Default User Interface render
    defaultRender: function defaultRender(_ref) {
      var tags = _ref.tags,
          addTag = _ref.addTag,
          removeTag = _ref.removeTag,
          inputType = _ref.inputType,
          inputAttrs = _ref.inputAttrs,
          inputHandlers = _ref.inputHandlers,
          inputClass = _ref.inputClass,
          tagClass = _ref.tagClass,
          tagVariant = _ref.tagVariant,
          tagPills = _ref.tagPills,
          tagRemoveLabel = _ref.tagRemoveLabel,
          invalidTagText = _ref.invalidTagText,
          duplicateTagText = _ref.duplicateTagText,
          isInvalid = _ref.isInvalid,
          isDuplicate = _ref.isDuplicate,
          disabled = _ref.disabled,
          placeholder = _ref.placeholder,
          addButtonText = _ref.addButtonText,
          addButtonVariant = _ref.addButtonVariant,
          disableAddButton = _ref.disableAddButton;
      var h = this.$createElement; // Make the list of tags

      var $tags = tags.map(function (tag) {
        tag = toString$1(tag);
        return h(BFormTag, {
          key: "li-tag__".concat(tag),
          staticClass: 'mt-1 mr-1',
          class: tagClass,
          props: {
            // `BFormTag` will auto generate an ID
            // so we do not need to set the ID prop
            tag: 'li',
            title: tag,
            disabled: disabled,
            variant: tagVariant,
            pill: tagPills,
            removeLabel: tagRemoveLabel
          },
          on: {
            remove: function remove() {
              return removeTag(tag);
            }
          }
        }, tag);
      }); // Feedback IDs if needed

      var invalidFeedbackId = invalidTagText && isInvalid ? this.safeId('__invalid_feedback__') : null;
      var duplicateFeedbackId = duplicateTagText && isDuplicate ? this.safeId('__duplicate_feedback__') : null; // Compute the `aria-describedby` attribute value

      var ariaDescribedby = [inputAttrs['aria-describedby'], invalidFeedbackId, duplicateFeedbackId].filter(identity).join(' '); // Input

      var $input = h('input', {
        ref: 'input',
        // Directive needed to get `evt.target.composing` set (if needed)
        directives: [{
          name: 'model',
          value: inputAttrs.value
        }],
        staticClass: 'b-form-tags-input w-100 flex-grow-1 p-0 m-0 bg-transparent border-0',
        class: inputClass,
        style: {
          outline: 0,
          minWidth: '5rem'
        },
        attrs: _objectSpread2({}, inputAttrs, {
          'aria-describedby': ariaDescribedby || null,
          type: inputType,
          placeholder: placeholder || null
        }),
        domProps: {
          value: inputAttrs.value
        },
        on: inputHandlers
      }); // Add button

      var $button = h(BButton, {
        ref: 'button',
        staticClass: 'b-form-tags-button py-0',
        class: {
          // Only show the button if the tag can be added
          // We use the `invisible` class instead of not rendering
          // the button, so that we maintain layout to prevent
          // the user input from jumping around
          invisible: disableAddButton
        },
        style: {
          fontSize: '90%'
        },
        props: {
          variant: addButtonVariant,
          disabled: disableAddButton
        },
        on: {
          click: function click() {
            return addTag();
          }
        }
      }, [this.normalizeSlot('add-button-text') || addButtonText]); // ID of the tags+input `<ul>` list
      // Note we could concatenate inputAttrs.id with `__TAG__LIST__`
      // But note that the inputID may be null until after mount
      // `safeId` returns `null`, if no user provided ID, until after
      // mount when a unique ID is generated

      var tagListId = this.safeId('__TAG__LIST__');
      var $field = h('li', {
        key: '__li-input__',
        staticClass: 'flex-grow-1 mt-1',
        attrs: {
          role: 'none',
          'aria-live': 'off',
          'aria-controls': tagListId
        }
      }, [h('div', {
        staticClass: 'd-flex',
        attrs: {
          role: 'group'
        }
      }, [$input, $button])]); // Wrap in an unordered list element (we use a list for accessibility)

      var $ul = h('ul', {
        key: '_tags_list_',
        staticClass: 'list-unstyled mt-n1 mb-0 d-flex flex-wrap align-items-center',
        attrs: {
          id: tagListId
        }
      }, // `concat()` is faster than array spread when args are known to be arrays
      concat($tags, $field)); // Assemble the feedback

      var $feedback = h();

      if (invalidTagText || duplicateTagText) {
        // Add an aria live region for the invalid/duplicate tag
        // messages if the user has not disabled the messages
        var joiner = this.computedJoiner; // Invalid tag feedback if needed (error)

        var $invalid = h();

        if (invalidFeedbackId) {
          $invalid = h(BFormInvalidFeedback, {
            key: '_tags_invalid_feedback_',
            props: {
              id: invalidFeedbackId,
              forceShow: true
            }
          }, [this.invalidTagText, ': ', this.invalidTags.join(joiner)]);
        } // Duplicate tag feedback if needed (warning, not error)


        var $duplicate = h();

        if (duplicateFeedbackId) {
          $duplicate = h(BFormText, {
            key: '_tags_duplicate_feedback_',
            props: {
              id: duplicateFeedbackId
            }
          }, [this.duplicateTagText, ': ', this.duplicateTags.join(joiner)]);
        }

        $feedback = h('div', {
          key: '_tags_feedback_',
          attrs: {
            'aria-live': 'polite',
            'aria-atomic': 'true'
          }
        }, [$invalid, $duplicate]);
      } // Return the content


      return [$ul, $feedback];
    }
  },
  render: function render(h) {
    var _this6 = this;

    // Scoped slot properties
    var scope = {
      // Array of tags (shallow copy to prevent mutations)
      tags: this.tags.slice(),
      // Methods
      removeTag: this.removeTag,
      addTag: this.addTag,
      // We don't include this in the attrs, as users may want to override this
      inputType: this.computedInputType,
      // <input> v-bind:inputAttrs
      inputAttrs: this.computedInputAttrs,
      // <input> v-on:inputHandlers
      inputHandlers: this.computedInputHandlers,
      // <input> :id="inputId"
      inputId: this.computedInputId,
      // Invalid/Duplicate state information
      invalidTags: this.invalidTags.slice(),
      isInvalid: this.hasInvalidTags,
      duplicateTags: this.duplicateTags.slice(),
      isDuplicate: this.hasDuplicateTags,
      // If the 'Add' button should be disabled
      disableAddButton: this.disableAddButton,
      // Pass-though values
      state: this.state,
      separator: this.separator,
      disabled: this.disabled,
      size: this.size,
      placeholder: this.placeholder,
      inputClass: this.inputClass,
      tagRemoveLabel: this.tagRemoveLabel,
      tagVariant: this.tagVariant,
      tagPills: this.tagPills,
      tagClass: this.tagClass,
      addButtonText: this.addButtonText,
      addButtonVariant: this.addButtonVariant,
      invalidTagText: this.invalidTagText,
      duplicateTagText: this.duplicateTagText
    }; // Generate the user interface

    var $content = this.normalizeSlot('default', scope) || this.defaultRender(scope); // Generate the `aria-live` region for the current value(s)

    var $output = h('output', {
      staticClass: 'sr-only',
      attrs: {
        id: this.safeId('_selected-tags_'),
        role: 'status',
        for: this.computedInputId,
        'aria-live': this.hasFocus ? 'polite' : 'off',
        'aria-atomic': 'true',
        'aria-relevant': 'additions text'
      }
    }, this.tags.join(', ')); // Removed tag live region

    var $removed = h('div', {
      staticClass: 'sr-only',
      attrs: {
        id: this.safeId('_removed-tags_'),
        role: 'status',
        'aria-live': this.hasFocus ? 'assertive' : 'off',
        'aria-atomic': 'true'
      }
    }, this.removedTags.length > 0 ? "(".concat(this.tagRemovedLabel, ") ").concat(this.removedTags.join(', ')) : ''); // Add hidden inputs for form submission

    var $hidden = h();

    if (this.name && !this.disabled) {
      // We add hidden inputs for each tag if a name is provided
      // for native submission of forms
      $hidden = this.tags.map(function (tag) {
        return h('input', {
          key: tag,
          attrs: {
            type: 'hidden',
            value: tag,
            name: _this6.name,
            form: _this6.form || null
          }
        });
      });
    } // Return the rendered output


    return h('div', {
      staticClass: 'b-form-tags form-control h-auto',
      class: _defineProperty({
        focus: this.hasFocus && !this.noOuterFocus && !this.disabled,
        disabled: this.disabled,
        'is-valid': this.state === true,
        'is-invalid': this.state === false
      }, "form-control-".concat(this.size), this.size),
      attrs: {
        id: this.safeId(),
        role: 'group',
        tabindex: this.disabled || this.noOuterFocus ? null : '-1',
        'aria-describedby': this.safeId('_selected_')
      },
      on: {
        focusin: this.onFocusin,
        focusout: this.onFocusout,
        click: this.onClick
      }
    }, concat($output, $removed, $content, $hidden));
  }
});

var FormTagsPlugin = /*#__PURE__*/pluginFactory({
  components: {
    BFormTags: BFormTags,
    BTags: BFormTags,
    BFormTag: BFormTag,
    BTag: BFormTag
  }
});

var BFormTextarea = /*#__PURE__*/Vue.extend({
  name: 'BFormTextarea',
  directives: {
    'b-visible': VBVisible
  },
  mixins: [idMixin, listenOnRootMixin, formMixin, formSizeMixin, formStateMixin, formTextMixin, formSelectionMixin, formValidityMixin],
  props: {
    rows: {
      type: [Number, String],
      default: 2
    },
    maxRows: {
      type: [Number, String],
      default: null
    },
    wrap: {
      // 'soft', 'hard' or 'off'. Browser default is 'soft'
      type: String,
      default: 'soft'
    },
    noResize: {
      // Disable the resize handle of textarea
      type: Boolean,
      default: false
    },
    noAutoShrink: {
      // When in auto resize mode, disable shrinking to content height
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      heightInPx: null
    };
  },
  computed: {
    computedStyle: function computedStyle() {
      var styles = {
        // Setting `noResize` to true will disable the ability for the user to
        // manually resize the textarea. We also disable when in auto height mode
        resize: !this.computedRows || this.noResize ? 'none' : null
      };

      if (!this.computedRows) {
        // Conditionally set the computed CSS height when auto rows/height is enabled
        // We avoid setting the style to `null`, which can override user manual resize handle
        styles.height = this.heightInPx; // We always add a vertical scrollbar to the textarea when auto-height is
        // enabled so that the computed height calculation returns a stable value

        styles.overflowY = 'scroll';
      }

      return styles;
    },
    computedMinRows: function computedMinRows() {
      // Ensure rows is at least 2 and positive (2 is the native textarea value)
      // A value of 1 can cause issues in some browsers, and most browsers
      // only support 2 as the smallest value
      return Math.max(parseInt(this.rows, 10) || 2, 2);
    },
    computedMaxRows: function computedMaxRows() {
      return Math.max(this.computedMinRows, parseInt(this.maxRows, 10) || 0);
    },
    computedRows: function computedRows() {
      // This is used to set the attribute 'rows' on the textarea
      // If auto-height is enabled, then we return `null` as we use CSS to control height
      return this.computedMinRows === this.computedMaxRows ? this.computedMinRows : null;
    }
  },
  watch: {
    localValue: function localValue() {
      this.setHeight();
    }
  },
  mounted: function mounted() {
    this.setHeight();
  },
  methods: {
    // Called by intersection observer directive
    visibleCallback: function visibleCallback(visible)
    /* istanbul ignore next */
    {
      if (visible) {
        // We use a `$nextTick()` here just to make sure any
        // transitions or portalling have completed
        this.$nextTick(this.setHeight);
      }
    },
    setHeight: function setHeight() {
      var _this = this;

      this.$nextTick(function () {
        requestAF(function () {
          _this.heightInPx = _this.computeHeight();
        });
      });
    },
    computeHeight: function computeHeight()
    /* istanbul ignore next: can't test getComputedStyle in JSDOM */
    {
      if (this.$isServer || !isNull(this.computedRows)) {
        return null;
      }

      var el = this.$el; // Element must be visible (not hidden) and in document
      // Must be checked after above checks

      if (!isVisible(el)) {
        return null;
      } // Get current computed styles


      var computedStyle = getCS(el); // Height of one line of text in px

      var lineHeight = parseFloat(computedStyle.lineHeight); // Calculate height of border and padding

      var border = (parseFloat(computedStyle.borderTopWidth) || 0) + (parseFloat(computedStyle.borderBottomWidth) || 0);
      var padding = (parseFloat(computedStyle.paddingTop) || 0) + (parseFloat(computedStyle.paddingBottom) || 0); // Calculate offset

      var offset = border + padding; // Minimum height for min rows (which must be 2 rows or greater for cross-browser support)

      var minHeight = lineHeight * this.computedMinRows + offset; // Get the current style height (with `px` units)

      var oldHeight = el.style.height || computedStyle.height; // Probe scrollHeight by temporarily changing the height to `auto`

      el.style.height = 'auto';
      var scrollHeight = el.scrollHeight; // Place the original old height back on the element, just in case `computedProp`
      // returns the same value as before

      el.style.height = oldHeight; // Calculate content height in 'rows' (scrollHeight includes padding but not border)

      var contentRows = Math.max((scrollHeight - padding) / lineHeight, 2); // Calculate number of rows to display (limited within min/max rows)

      var rows = Math.min(Math.max(contentRows, this.computedMinRows), this.computedMaxRows); // Calculate the required height of the textarea including border and padding (in pixels)

      var height = Math.max(Math.ceil(rows * lineHeight + offset), minHeight); // Computed height remains the larger of `oldHeight` and new `height`,
      // when height is in `sticky` mode (prop `no-auto-shrink` is true)

      if (this.noAutoShrink && (parseFloat(oldHeight) || 0) > height) {
        return oldHeight;
      } // Return the new computed CSS height in px units


      return "".concat(height, "px");
    }
  },
  render: function render(h) {
    // Using self instead of this helps reduce code size during minification
    var self = this;
    return h('textarea', {
      ref: 'input',
      class: self.computedClass,
      style: self.computedStyle,
      directives: [{
        name: 'model',
        value: self.localValue
      }, {
        name: 'b-visible',
        value: this.visibleCallback,
        // If textarea is within 640px of viewport, consider it visible
        modifiers: {
          '640': true
        }
      }],
      attrs: {
        id: self.safeId(),
        name: self.name,
        form: self.form || null,
        disabled: self.disabled,
        placeholder: self.placeholder,
        required: self.required,
        autocomplete: self.autocomplete || null,
        readonly: self.readonly || self.plaintext,
        rows: self.computedRows,
        wrap: self.wrap || null,
        'aria-required': self.required ? 'true' : null,
        'aria-invalid': self.computedAriaInvalid
      },
      domProps: {
        value: self.localValue
      },
      on: _objectSpread2({}, self.$listeners, {
        input: self.onInput,
        change: self.onChange,
        blur: self.onBlur
      })
    });
  }
});

var FormTextareaPlugin = /*#__PURE__*/pluginFactory({
  components: {
    BFormTextarea: BFormTextarea,
    BTextarea: BFormTextarea
  }
});

var NAME$k = 'BTime';
var NUMERIC = 'numeric';
var LEFT$1 = KEY_CODES.LEFT,
    RIGHT$1 = KEY_CODES.RIGHT; // Time string RegExpr (optional seconds)

var RE_TIME = /^([0-1]?[0-9]|2[0-3]):[0-5]?[0-9](:[0-5]?[0-9])?$/; // --- Helpers ---
// Fallback to BFormSpinbutton prop if no value found

var getConfigFallback$1 = function getConfigFallback(prop) {
  return getComponentConfig(NAME$k, prop) || getComponentConfig('BFormSpinbutton', prop);
};

var padLeftZeros = function padLeftZeros(num) {
  return "00".concat(num || '').slice(-2);
};

var parseHMS = function parseHMS(hms) {
  hms = toString$1(hms);
  var hh = null,
      mm = null,
      ss = null;

  if (RE_TIME.test(hms)) {

    var _hms$split$map$map = hms.split(':').map(toInteger).map(function (v) {
      return isNaN(v) ? null : v;
    });

    var _hms$split$map$map2 = _slicedToArray(_hms$split$map$map, 3);

    hh = _hms$split$map$map2[0];
    mm = _hms$split$map$map2[1];
    ss = _hms$split$map$map2[2];
  }

  return {
    hours: isUndefinedOrNull(hh) ? null : hh,
    minutes: isUndefinedOrNull(mm) ? null : mm,
    seconds: isUndefinedOrNull(ss) ? null : ss,
    ampm: isUndefinedOrNull(hh) || hh < 12 ? 0 : 1
  };
};

var formatHMS = function formatHMS(_ref) {
  var hours = _ref.hours,
      minutes = _ref.minutes,
      seconds = _ref.seconds;
  var requireSeconds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (isNull(hours) || isNull(minutes) || requireSeconds && isNull(seconds)) {
    return '';
  }

  var hms = [hours, minutes, requireSeconds ? seconds : 0];
  return hms.map(padLeftZeros).join(':');
}; // @vue/component


var BTime = /*#__PURE__*/Vue.extend({
  name: NAME$k,
  mixins: [idMixin, normalizeSlotMixin],
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    showSeconds: {
      // If true, show the second spinbutton
      type: Boolean,
      default: false
    },
    hour12: {
      // Explicitly force 12 or 24 hour time
      // Default is to use resolved locale for 12/24 hour display
      // Tri-state: `true` = 12, `false` = 24, `null` = auto
      type: Boolean,
      default: null
    },
    locale: {
      type: [String, Array],
      default: null
    },
    ariaLabelledby: {
      // ID of label element
      type: String,
      default: null
    },
    secondsStep: {
      type: [Number, String],
      default: 1
    },
    minutesStep: {
      type: [Number, String],
      default: 1
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    hideHeader: {
      type: Boolean,
      default: false
    },
    labelNoTimeSelected: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$k, 'labelNoTimeSelected');
      }
    },
    labelSelected: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$k, 'labelSelected');
      }
    },
    labelHours: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$k, 'labelHours');
      }
    },
    labelMinutes: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$k, 'labelMinutes');
      }
    },
    labelSeconds: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$k, 'labelSeconds');
      }
    },
    labelAmpm: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$k, 'labelAmpm');
      }
    },
    labelAm: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$k, 'labelAm');
      }
    },
    labelPm: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$k, 'labelPm');
      }
    },
    // Passed to the spin buttons
    labelIncrement: {
      type: String,
      // Falls back to BFormSpinbutton label
      default: function _default() {
        return getConfigFallback$1('labelIncrement');
      }
    },
    labelDecrement: {
      type: String,
      // Falls back to BFormSpinbutton label
      default: function _default() {
        return getConfigFallback$1('labelDecrement');
      }
    },
    hidden: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    var parsed = parseHMS(this.value || '');
    return {
      // Spin button models
      modelHours: parsed.hours,
      modelMinutes: parsed.minutes,
      modelSeconds: parsed.seconds,
      modelAmpm: parsed.ampm,
      // Internal flag to enable aria-live regions
      isLive: false
    };
  },
  computed: {
    computedHMS: function computedHMS() {
      var hours = this.modelHours;
      var minutes = this.modelMinutes;
      var seconds = this.modelSeconds;
      return formatHMS({
        hours: hours,
        minutes: minutes,
        seconds: seconds
      }, this.showSeconds);
    },
    resolvedOptions: function resolvedOptions() {
      // Resolved locale options
      var locale = concat(this.locale).filter(identity);
      var options = {
        hour: NUMERIC,
        minute: NUMERIC,
        second: NUMERIC
      };

      if (!isUndefinedOrNull(this.hour12)) {
        // Force 12 or 24 hour clock
        options.hour12 = !!this.hour12;
      }

      var dtf = new Intl.DateTimeFormat(locale, options);
      var resolved = dtf.resolvedOptions();
      var hour12 = resolved.hour12 || false; // IE 11 doesn't resolve the hourCycle, so we make
      // an assumption and fall back to common values

      var hourCycle = resolved.hourCycle || (hour12 ? 'h12' : 'h23');
      return {
        locale: resolved.locale,
        hour12: hour12,
        hourCycle: hourCycle
      };
    },
    computedLocale: function computedLocale() {
      return this.resolvedOptions.locale;
    },
    computedLang: function computedLang() {
      return (this.computedLocale || '').replace(/-u-.*$/, '');
    },
    computedRTL: function computedRTL() {
      return isLocaleRTL(this.computedLang);
    },
    computedHourCycle: function computedHourCycle() {
      // h11, h12, h23, or h24
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Locale/hourCycle
      // h12 - Hour system using 1–12. Corresponds to 'h' in patterns. The 12 hour clock, with midnight starting at 12:00 am
      // h23 - Hour system using 0–23. Corresponds to 'H' in patterns. The 24 hour clock, with midnight starting at 0:00
      // h11 - Hour system using 0–11. Corresponds to 'K' in patterns. The 12 hour clock, with midnight starting at 0:00 am
      // h24 - Hour system using 1–24. Corresponds to 'k' in pattern. The 24 hour clock, with midnight starting at 24:00
      // For h12 or h24, we visually format 00 hours as 12
      return this.resolvedOptions.hourCycle;
    },
    is12Hour: function is12Hour() {
      return !!this.resolvedOptions.hour12;
    },
    context: function context() {
      return {
        locale: this.computedLocale,
        isRTL: this.computedRTL,
        hourCycle: this.computedHourCycle,
        hour12: this.is12Hour,
        hours: this.modelHours,
        minutes: this.modelMinutes,
        seconds: this.showSeconds ? this.modelSeconds : 0,
        value: this.computedHMS,
        formatted: this.formattedTimeString
      };
    },
    valueId: function valueId() {
      return this.safeId() || null;
    },
    computedAriaLabelledby: function computedAriaLabelledby() {
      return [this.ariaLabelledby, this.valueId].filter(identity).join(' ') || null;
    },
    timeFormatter: function timeFormatter() {
      // Returns a formatter function reference
      // The formatter converts the time to a localized string
      var options = {
        hour12: this.is12Hour,
        hourCycle: this.computedHourCycle,
        hour: NUMERIC,
        minute: NUMERIC,
        timeZone: 'UTC'
      };

      if (this.showSeconds) {
        options.second = NUMERIC;
      } // Formats the time as a localized string


      return createDateFormatter(this.computedLocale, options);
    },
    numberFormatter: function numberFormatter() {
      // Returns a formatter function reference
      // The formatter always formats as 2 digits and is localized
      var nf = new Intl.NumberFormat(this.computedLocale, {
        style: 'decimal',
        minimumIntegerDigits: 2,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
        notation: 'standard'
      });
      return nf.format;
    },
    formattedTimeString: function formattedTimeString() {
      var hours = this.modelHours;
      var minutes = this.modelMinutes;
      var seconds = this.showSeconds ? this.modelSeconds || 0 : 0;

      if (this.computedHMS) {
        return this.timeFormatter(createDate(Date.UTC(0, 0, 1, hours, minutes, seconds)));
      }

      return this.labelNoTimeSelected || ' ';
    }
  },
  watch: {
    value: function value(newVal, oldVal) {
      if (newVal !== oldVal && !looseEqual(parseHMS(newVal), parseHMS(this.computedHMS))) {
        var _parseHMS = parseHMS(newVal),
            hours = _parseHMS.hours,
            minutes = _parseHMS.minutes,
            seconds = _parseHMS.seconds,
            ampm = _parseHMS.ampm;

        this.modelHours = hours;
        this.modelMinutes = minutes;
        this.modelSeconds = seconds;
        this.modelAmpm = ampm;
      }
    },
    computedHMS: function computedHMS(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.$emit('input', newVal);
      }
    },
    context: function context(newVal, oldVal) {
      if (!looseEqual(newVal, oldVal)) {
        this.$emit('context', newVal);
      }
    },
    modelAmpm: function modelAmpm(newVal, oldVal) {
      var _this = this;

      if (newVal !== oldVal) {
        var hours = isNull(this.modelHours) ? 0 : this.modelHours;
        this.$nextTick(function () {
          if (newVal === 0 && hours > 11) {
            // Switched to AM
            _this.modelHours = hours - 12;
          } else if (newVal === 1 && hours < 12) {
            // Switched to PM
            _this.modelHours = hours + 12;
          }
        });
      }
    },
    modelHours: function modelHours(newHours, oldHours) {
      if (newHours !== oldHours) {
        this.modelAmpm = newHours > 11 ? 1 : 0;
      }
    }
  },
  created: function created() {
    var _this2 = this;

    this.$nextTick(function () {
      _this2.$emit('context', _this2.context);
    });
  },
  mounted: function mounted() {
    this.setLive(true);
  },
  activated: function activated()
  /* istanbul ignore next */
  {
    this.setLive(true);
  },
  deactivated: function deactivated()
  /* istanbul ignore next */
  {
    this.setLive(false);
  },
  beforeDestroy: function beforeDestroy() {
    this.setLive(false);
  },
  methods: {
    // Public methods
    focus: function focus() {
      if (!this.disabled) {
        try {
          // We focus the first spin button
          this.$refs.spinners[0].focus();
        } catch (_unused) {}
      }
    },
    blur: function blur() {
      if (!this.disabled) {
        try {
          if (contains(this.$el, document.activeElement)) {
            document.activeElement.blur();
          }
        } catch (_unused2) {}
      }
    },
    // Formatters for the spin buttons
    formatHours: function formatHours(hh) {
      var hourCycle = this.computedHourCycle; // We always store 0-23, but format based on h11/h12/h23/h24 formats

      hh = this.is12Hour && hh > 12 ? hh - 12 : hh; // Determine how 00:00 and 12:00 are shown

      hh = hh === 0 && hourCycle === 'h12' ? 12 : hh === 0 && hourCycle === 'h24' ? 24 : hh === 12 && hourCycle === 'h11' ? 0 : hh;
      return this.numberFormatter(hh);
    },
    formatMinutes: function formatMinutes(mm) {
      return this.numberFormatter(mm);
    },
    formatSeconds: function formatSeconds(ss) {
      return this.numberFormatter(ss);
    },
    formatAmpm: function formatAmpm(ampm) {
      // These should come from label props???
      // `ampm` should always be a value of `0` or `1`
      return ampm === 0 ? this.labelAm : ampm === 1 ? this.labelPm : '';
    },
    // Spinbutton on change handlers
    setHours: function setHours(value) {
      this.modelHours = value;
    },
    setMinutes: function setMinutes(value) {
      this.modelMinutes = value;
    },
    setSeconds: function setSeconds(value) {
      this.modelSeconds = value;
    },
    setAmpm: function setAmpm(value) {
      this.modelAmpm = value;
    },
    onSpinLeftRight: function onSpinLeftRight() {
      var evt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var type = evt.type,
          keyCode = evt.keyCode;

      if (!this.disabled && type === 'keydown' && (keyCode === LEFT$1 || keyCode === RIGHT$1)) {
        evt.preventDefault();
        evt.stopPropagation();
        var spinners = this.$refs.spinners || [];
        var index = spinners.map(function (cmp) {
          return !!cmp.hasFocus;
        }).indexOf(true);
        index = index + (keyCode === LEFT$1 ? -1 : 1);
        index = index >= spinners.length ? 0 : index < 0 ? spinners.length - 1 : index;

        try {
          spinners[index].focus();
        } catch (_unused3) {}
      }
    },
    setLive: function setLive(on) {
      var _this3 = this;

      if (on) {
        this.$nextTick(function () {
          requestAF(function () {
            _this3.isLive = true;
          });
        });
      } else {
        this.isLive = false;
      }
    }
  },
  render: function render(h) {
    var _this4 = this;

    /* istanbul ignore if */
    if (this.hidden) {
      // If hidden, we just render a placeholder comment
      return h();
    }

    var valueId = this.valueId;
    var computedAriaLabelledby = this.computedAriaLabelledby;
    var spinIds = []; // Helper method to render a spinbutton

    var makeSpinbutton = function makeSpinbutton(handler, key, classes) {
      var spinbuttonProps = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var id = _this4.safeId("_spinbutton_".concat(key, "_")) || null;
      spinIds.push(id);
      return h(BFormSpinbutton, {
        key: key,
        ref: 'spinners',
        refInFor: true,
        class: classes,
        props: _objectSpread2({
          id: id,
          placeholder: '--',
          vertical: true,
          required: true,
          disabled: _this4.disabled,
          readonly: _this4.readonly,
          locale: _this4.computedLocale,
          labelIncrement: _this4.labelIncrement,
          labelDecrement: _this4.labelDecrement,
          wrap: true,
          ariaControls: valueId,
          min: 0
        }, spinbuttonProps),
        on: {
          // We use `change` event to minimize SR verbosity
          // As the spinbutton will announce each value change
          // and we don't want the formatted time to be announced
          // on each value input if repeat is happening
          change: handler
        }
      });
    }; // Helper method to return a "colon" separator


    var makeColon = function makeColon() {
      return h('div', {
        staticClass: 'd-flex flex-column',
        class: {
          'text-muted': _this4.disabled || _this4.readonly
        },
        attrs: {
          'aria-hidden': 'true'
        }
      }, [h(BIconCircleFill, {
        props: {
          shiftV: 4,
          scale: 0.5
        }
      }), h(BIconCircleFill, {
        props: {
          shiftV: -4,
          scale: 0.5
        }
      })]);
    };

    var $spinners = []; // Hours

    $spinners.push(makeSpinbutton(this.setHours, 'hours', '', {
      value: this.modelHours,
      max: 23,
      step: 1,
      formatterFn: this.formatHours,
      ariaLabel: this.labelHours
    })); // Spacer

    $spinners.push(makeColon()); // Minutes

    $spinners.push(makeSpinbutton(this.setMinutes, 'minutes', '', {
      value: this.modelMinutes,
      max: 59,
      step: this.minutesStep || 1,
      formatterFn: this.formatMinutes,
      ariaLabel: this.labelMinutes
    }));

    if (this.showSeconds) {
      // Spacer
      $spinners.push(makeColon()); // Seconds

      $spinners.push(makeSpinbutton(this.setSeconds, 'seconds', '', {
        value: this.modelSeconds,
        max: 59,
        step: this.secondsStep || 1,
        formatterFn: this.formatSeconds,
        ariaLabel: this.labelSeconds
      }));
    } // AM/PM ?


    if (this.is12Hour) {
      // TODO:
      //   If locale is RTL, unshift this instead of push?
      //   And switch class `ml-2` to `mr-2`
      //   Note some LTR locales (i.e. zh) also place AM/PM to the left
      $spinners.push(makeSpinbutton(this.setAmpm, 'ampm', 'ml-2', {
        value: this.modelAmpm,
        max: 1,
        formatterFn: this.formatAmpm,
        ariaLabel: this.labelAmpm,
        // We set `required` as `false`, since this always has a value
        required: false
      }));
    } // Assemble spinners


    $spinners = h('div', {
      staticClass: 'd-flex align-items-center justify-content-center mx-auto',
      attrs: {
        role: 'group',
        tabindex: this.disabled || this.readonly ? null : '-1',
        'aria-labelledby': computedAriaLabelledby
      },
      on: {
        keydown: this.onSpinLeftRight,
        click: function click(evt)
        /* istanbul ignore next */
        {
          if (evt.target === evt.currentTarget) {
            _this4.focus();
          }
        }
      }
    }, $spinners); // Selected type display

    var $value = h('output', {
      staticClass: 'border rounded d-block p-1 small text-center',
      class: {
        disabled: this.disabled || this.readonly
      },
      attrs: {
        id: valueId,
        role: 'status',
        for: spinIds.filter(identity).join(' ') || null,
        tabindex: this.disabled ? null : '-1',
        'aria-live': this.isLive ? 'polite' : 'off',
        'aria-atomic': 'true'
      },
      on: {
        // Transfer focus/click to focus hours spinner
        click: this.focus,
        focus: this.focus
      }
    }, [h('bdi', this.formattedTimeString), this.computedHMS ? h('span', {
      staticClass: 'sr-only'
    }, " (".concat(this.labelSelected, ") ")) : '']);
    var $header = h('header', {
      class: {
        'sr-only': this.hideHeader,
        'mb-2': !this.hideHeader
      }
    }, [$value]); // Optional bottom slot

    var $slot = this.normalizeSlot('default');
    $slot = $slot ? h('footer', {
      staticClass: 'mt-2'
    }, $slot) : h();
    return h('div', {
      staticClass: 'b-time d-inline-flex flex-column text-center',
      attrs: {
        role: 'group',
        lang: this.computedLang || null,
        'aria-labelledby': computedAriaLabelledby || null,
        'aria-disabled': this.disabled ? 'true' : null,
        'aria-readonly': this.readonly && !this.disabled ? 'true' : null
      }
    }, [$header, $spinners, $slot]);
  }
});

var NAME$l = 'BFormTimepicker'; // Fallback to BTime/BFormSpinbutton prop if no value found

var getConfigFallback$2 = function getConfigFallback(prop) {
  return getComponentConfig(NAME$l, prop) || getComponentConfig('BTime', prop) || getComponentConfig('BFormSpinbutton', prop);
}; // We create our props as a mixin so that we can control
// where they appear in the props listing reference section


var propsMixin$1 = {
  props: _objectSpread2({
    value: {
      type: String,
      default: ''
    },
    resetValue: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      // Defaults to `labelNoTime` from BTime context
      default: null
    },
    size: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    required: {
      // If true adds the `aria-required` attribute
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: null
    },
    form: {
      type: String,
      default: null
    },
    state: {
      // Tri-state prop: `true`, `false` or `null`
      type: Boolean,
      default: null
    },
    hour12: {
      // Tri-state prop: `true` => 12 hour, `false` => 24 hour, `null` => auto
      type: Boolean,
      default: null
    },
    locale: {
      type: [String, Array],
      default: null
    },
    showSeconds: {
      type: Boolean,
      default: false
    },
    hideHeader: {
      type: Boolean,
      default: false
    },
    secondsStep: {
      type: [Number, String],
      default: 1
    },
    minutesStep: {
      type: [Number, String],
      default: 1
    },
    buttonOnly: {
      type: Boolean,
      default: false
    },
    buttonVariant: {
      // Applicable in button only mode
      type: String,
      default: 'secondary'
    },
    nowButton: {
      type: Boolean,
      default: false
    },
    labelNowButton: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$l, 'labelNowButton');
      }
    },
    nowButtonVariant: {
      type: String,
      default: 'outline-primary'
    },
    resetButton: {
      type: Boolean,
      default: false
    },
    labelResetButton: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$l, 'labelResetButton');
      }
    },
    resetButtonVariant: {
      type: String,
      default: 'outline-danger'
    },
    noCloseButton: {
      type: Boolean,
      default: false
    },
    labelCloseButton: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$l, 'labelCloseButton');
      }
    },
    closeButtonVariant: {
      type: String,
      default: 'outline-secondary'
    },
    // Labels
    // These fallback to BTime values
    labelSelected: {
      type: String,
      default: function _default() {
        return getConfigFallback$2('labelSelected');
      }
    },
    labelNoTimeSelected: {
      type: String,
      default: function _default() {
        return getConfigFallback$2('labelNoTimeSelected');
      }
    },
    labelHours: {
      type: String,
      default: function _default() {
        return getConfigFallback$2('labelHours');
      }
    },
    labelMinutes: {
      type: String,
      default: function _default() {
        return getConfigFallback$2('labelMinutes');
      }
    },
    labelSeconds: {
      type: String,
      default: function _default() {
        return getConfigFallback$2('labelSeconds');
      }
    },
    labelAmpm: {
      type: String,
      default: function _default() {
        return getConfigFallback$2('labelAmpm');
      }
    },
    labelAm: {
      type: String,
      default: function _default() {
        return getConfigFallback$2('labelAm');
      }
    },
    labelPm: {
      type: String,
      default: function _default() {
        return getConfigFallback$2('labelPm');
      }
    },
    // These pick BTime or BFormSpinbutton global config if no BFormTimepicker global config
    labelIncrement: {
      type: String,
      default: function _default() {
        return getConfigFallback$2('labelIncrement');
      }
    },
    labelDecrement: {
      type: String,
      default: function _default() {
        return getConfigFallback$2('labelDecrement');
      }
    },
    // extra dropdown stuff
    menuClass: {
      type: [String, Array, Object],
      default: null
    }
  }, dropdownProps)
}; // --- BFormDate component ---
// @vue/component

var BFormTimepicker = /*#__PURE__*/Vue.extend({
  name: NAME$l,
  // The mixins order determines the order of appearance in the props reference section
  mixins: [idMixin, propsMixin$1],
  model: {
    prop: 'value',
    event: 'input'
  },
  data: function data() {
    return {
      // We always use `HH:mm:ss` value internally
      localHMS: this.value || '',
      // Context data from BTime
      localLocale: null,
      isRTL: false,
      formattedValue: '',
      // If the menu is opened
      isVisible: false
    };
  },
  computed: {
    computedLang: function computedLang() {
      return (this.localLocale || '').replace(/-u-.*$/i, '') || null;
    },
    timeProps: function timeProps() {
      // Props we pass to BTime
      // Use self for better minification, as `this` won't
      // minimize and we reference it many times below
      var self = this;
      return {
        hidden: !self.isVisible,
        value: self.localHMS,
        // Passthrough props
        readonly: self.readonly,
        disabled: self.disabled,
        locale: self.locale,
        hour12: self.hour12,
        hideHeader: self.hideHeader,
        showSeconds: self.showSeconds,
        secondsStep: self.secondsStep,
        minutesStep: self.minutesStep,
        labelNoTimeSelected: self.labelNoTimeSelected,
        labelSelected: self.labelSelected,
        labelHours: self.labelHours,
        labelMinutes: self.labelMinutes,
        labelSeconds: self.labelSeconds,
        labelAmpm: self.labelAmpm,
        labelAm: self.labelAm,
        labelPm: self.labelPm,
        labelIncrement: self.labelIncrement,
        labelDecrement: self.labelDecrement
      };
    }
  },
  watch: {
    value: function value(newVal) {
      this.localHMS = newVal || '';
    },
    localHMS: function localHMS(newVal) {
      // We only update hte v-model value when the timepicker
      // is open, to prevent cursor jumps when bound to a
      // text input in button only mode
      if (this.isVisible) {
        this.$emit('input', newVal || '');
      }
    }
  },
  methods: {
    // Public methods
    focus: function focus() {
      if (!this.disabled) {
        try {
          this.$refs.control.focus();
        } catch (_unused) {}
      }
    },
    blur: function blur() {
      if (!this.disabled) {
        try {
          this.$refs.control.blur();
        } catch (_unused2) {}
      }
    },
    // Private methods
    setAndClose: function setAndClose(value) {
      var _this = this;

      this.localHMS = value;
      this.$nextTick(function () {
        _this.$refs.control.hide(true);
      });
    },
    onInput: function onInput(hms) {
      if (this.localHMS !== hms) {
        this.localHMS = hms;
      }
    },
    onContext: function onContext(ctx) {
      var isRTL = ctx.isRTL,
          locale = ctx.locale,
          value = ctx.value,
          formatted = ctx.formatted;
      this.isRTL = isRTL;
      this.localLocale = locale;
      this.formattedValue = formatted;
      this.localHMS = value || ''; // Re-emit the context event

      this.$emit('context', ctx);
    },
    onNowButton: function onNowButton() {
      var now = new Date();
      var hours = now.getHours();
      var minutes = now.getMinutes();
      var seconds = this.showSeconds ? now.getSeconds() : 0;
      var value = [hours, minutes, seconds].map(function (v) {
        return "00".concat(v || '').slice(-2);
      }).join(':');
      this.setAndClose(value);
    },
    onResetButton: function onResetButton() {
      this.setAndClose(this.resetValue);
    },
    onCloseButton: function onCloseButton() {
      this.$refs.control.hide(true);
    },
    onShow: function onShow() {
      this.isVisible = true;
    },
    onShown: function onShown() {
      var _this2 = this;

      this.$nextTick(function () {
        try {
          _this2.$refs.time.focus();
        } catch (_unused3) {}
      });
    },
    onHidden: function onHidden() {
      this.isVisible = false;
    },
    // Render function helpers
    defaultButtonFn: function defaultButtonFn(_ref) {
      var isHovered = _ref.isHovered,
          hasFocus = _ref.hasFocus;
      return this.$createElement(isHovered || hasFocus ? BIconClockFill : BIconClock, {
        props: {
          scale: 1.25
        },
        attrs: {
          'aria-hidden': 'true'
        }
      });
    }
  },
  render: function render(h) {
    var localHMS = this.localHMS;
    var disabled = this.disabled;
    var readonly = this.readonly;
    var placeholder = isUndefinedOrNull(this.placeholder) ? this.labelNoTimeSelected : this.placeholder; // Footer buttons

    var $footer = [];

    if (this.nowButton) {
      var label = this.labelNowButton;
      $footer.push(h(BButton, {
        staticClass: 'mx-1',
        props: {
          size: 'sm',
          disabled: disabled || readonly,
          variant: this.nowButtonVariant
        },
        attrs: {
          'aria-label': label || null
        },
        on: {
          click: this.onNowButton
        }
      }, label));
    }

    if (this.resetButton) {
      var _label = this.labelResetButton;
      $footer.push(h(BButton, {
        staticClass: 'mx-1',
        props: {
          size: 'sm',
          disabled: disabled || readonly,
          variant: this.resetButtonVariant
        },
        attrs: {
          'aria-label': _label || null
        },
        on: {
          click: this.onResetButton
        }
      }, _label));
    }

    if (!this.noCloseButton) {
      var _label2 = this.labelCloseButton;
      $footer.push(h(BButton, {
        staticClass: 'mx-1',
        props: {
          size: 'sm',
          disabled: disabled,
          variant: this.closeButtonVariant
        },
        attrs: {
          'aria-label': _label2 || null
        },
        on: {
          click: this.onCloseButton
        }
      }, _label2));
    }

    if ($footer.length > 0) {
      $footer = [h('div', {
        staticClass: 'b-form-date-controls d-flex flex-wrap mx-n1',
        class: {
          'justify-content-between': $footer.length > 1,
          'justify-content-end': $footer.length < 2
        }
      }, $footer)];
    }

    var $time = h(BTime, {
      ref: 'time',
      staticClass: 'b-form-time-control',
      props: this.timeProps,
      on: {
        input: this.onInput,
        context: this.onContext
      }
    }, $footer);
    return h(BVFormBtnLabelControl, {
      ref: 'control',
      staticClass: 'b-form-timepicker',
      props: _objectSpread2({}, this.$props, {
        // Overridden / computed props
        id: this.safeId(),
        rtl: this.isRTL,
        lang: this.computedLang,
        value: localHMS || '',
        formattedValue: localHMS ? this.formattedValue : '',
        placeholder: placeholder || ''
      }),
      on: {
        show: this.onShow,
        shown: this.onShown,
        hidden: this.onHidden
      },
      scopedSlots: {
        'button-content': this.$scopedSlots['button-content'] || this.defaultButtonFn
      }
    }, [$time]);
  }
});

var FormTimepickerPlugin = /*#__PURE__*/pluginFactory({
  components: {
    BFormTimepicker: BFormTimepicker,
    BTimepicker: BFormTimepicker
  }
});

var ImagePlugin = /*#__PURE__*/pluginFactory({
  components: {
    BImg: BImg,
    BImgLazy: BImgLazy
  }
});

var props$y = {
  tag: {
    type: String,
    default: 'div'
  }
}; // @vue/component

var BInputGroupText = /*#__PURE__*/Vue.extend({
  name: 'BInputGroupText',
  functional: true,
  props: props$y,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, mergeData(data, {
      staticClass: 'input-group-text'
    }), children);
  }
});

var commonProps$1 = {
  id: {
    type: String,
    default: null
  },
  tag: {
    type: String,
    default: 'div'
  },
  isText: {
    type: Boolean,
    default: false
  }
}; // @vue/component

var BInputGroupAddon = /*#__PURE__*/Vue.extend({
  name: 'BInputGroupAddon',
  functional: true,
  props: _objectSpread2({}, commonProps$1, {
    append: {
      type: Boolean,
      default: false
    }
  }),
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, mergeData(data, {
      class: {
        'input-group-append': props.append,
        'input-group-prepend': !props.append
      },
      attrs: {
        id: props.id
      }
    }), props.isText ? [h(BInputGroupText, children)] : children);
  }
});

var BInputGroupPrepend = /*#__PURE__*/Vue.extend({
  name: 'BInputGroupPrepend',
  functional: true,
  props: commonProps$1,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    // pass all our props/attrs down to child, and set`append` to false
    return h(BInputGroupAddon, mergeData(data, {
      props: _objectSpread2({}, props, {
        append: false
      })
    }), children);
  }
});

var BInputGroupAppend = /*#__PURE__*/Vue.extend({
  name: 'BInputGroupAppend',
  functional: true,
  props: commonProps$1,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    // pass all our props/attrs down to child, and set`append` to true
    return h(BInputGroupAddon, mergeData(data, {
      props: _objectSpread2({}, props, {
        append: true
      })
    }), children);
  }
});

var NAME$m = 'BInputGroup';
var props$z = {
  id: {
    type: String
  },
  size: {
    type: String,
    default: function _default() {
      return getComponentConfig(NAME$m, 'size');
    }
  },
  prepend: {
    type: String
  },
  prependHtml: {
    type: String
  },
  append: {
    type: String
  },
  appendHtml: {
    type: String
  },
  tag: {
    type: String,
    default: 'div'
  }
}; // @vue/component

var BInputGroup = /*#__PURE__*/Vue.extend({
  name: NAME$m,
  functional: true,
  props: props$z,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        slots = _ref.slots,
        scopedSlots = _ref.scopedSlots;
    var $slots = slots();
    var $scopedSlots = scopedSlots || {};
    var childNodes = []; // Prepend prop/slot

    if (props.prepend || props.prependHtml || hasNormalizedSlot('prepend', $scopedSlots, $slots)) {
      childNodes.push(h(BInputGroupPrepend, [// Prop
      props.prepend || props.prependHtml ? h(BInputGroupText, {
        domProps: htmlOrText(props.prependHtml, props.prepend)
      }) : h(), // Slot
      normalizeSlot('prepend', {}, $scopedSlots, $slots) || h()]));
    } else {
      childNodes.push(h());
    } // Default slot


    if (hasNormalizedSlot('default', $scopedSlots, $slots)) {
      childNodes.push.apply(childNodes, _toConsumableArray(normalizeSlot('default', {}, $scopedSlots, $slots)));
    } else {
      childNodes.push(h());
    } // Append prop


    if (props.append || props.appendHtml || hasNormalizedSlot('append', $scopedSlots, $slots)) {
      childNodes.push(h(BInputGroupAppend, [// prop
      props.append || props.appendHtml ? h(BInputGroupText, {
        domProps: htmlOrText(props.appendHtml, props.append)
      }) : h(), // Slot
      normalizeSlot('append', {}, $scopedSlots, $slots) || h()]));
    } else {
      childNodes.push(h());
    }

    return h(props.tag, mergeData(data, {
      staticClass: 'input-group',
      class: _defineProperty({}, "input-group-".concat(props.size), props.size),
      attrs: {
        id: props.id || null,
        role: 'group'
      }
    }), childNodes);
  }
});

var InputGroupPlugin = /*#__PURE__*/pluginFactory({
  components: {
    BInputGroup: BInputGroup,
    BInputGroupAddon: BInputGroupAddon,
    BInputGroupPrepend: BInputGroupPrepend,
    BInputGroupAppend: BInputGroupAppend,
    BInputGroupText: BInputGroupText
  }
});

var props$A = {
  tag: {
    type: String,
    default: 'div'
  },
  fluid: {
    // String breakpoint name new in Bootstrap v4.4.x
    type: [Boolean, String],
    default: false
  }
}; // @vue/component

var BContainer = /*#__PURE__*/Vue.extend({
  name: 'BContainer',
  functional: true,
  props: props$A,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, mergeData(data, {
      class: _defineProperty({
        container: !(props.fluid || props.fluid === ''),
        'container-fluid': props.fluid === true || props.fluid === ''
      }, "container-".concat(props.fluid), props.fluid && props.fluid !== true)
    }), children);
  }
});

var NAME$n = 'BJumbotron';
var props$B = {
  fluid: {
    type: Boolean,
    default: false
  },
  containerFluid: {
    type: [Boolean, String],
    default: false
  },
  header: {
    type: String,
    default: null
  },
  headerHtml: {
    type: String,
    default: null
  },
  headerTag: {
    type: String,
    default: 'h1'
  },
  headerLevel: {
    type: [Number, String],
    default: '3'
  },
  lead: {
    type: String,
    default: null
  },
  leadHtml: {
    type: String,
    default: null
  },
  leadTag: {
    type: String,
    default: 'p'
  },
  tag: {
    type: String,
    default: 'div'
  },
  bgVariant: {
    type: String,
    default: function _default() {
      return getComponentConfig(NAME$n, 'bgVariant');
    }
  },
  borderVariant: {
    type: String,
    default: function _default() {
      return getComponentConfig(NAME$n, 'borderVariant');
    }
  },
  textVariant: {
    type: String,
    default: function _default() {
      return getComponentConfig(NAME$n, 'textVariant');
    }
  }
}; // @vue/component

var BJumbotron = /*#__PURE__*/Vue.extend({
  name: NAME$n,
  functional: true,
  props: props$B,
  render: function render(h, _ref) {
    var _class2;

    var props = _ref.props,
        data = _ref.data,
        slots = _ref.slots,
        scopedSlots = _ref.scopedSlots;
    // The order of the conditionals matter.
    // We are building the component markup in order.
    var childNodes = [];
    var $slots = slots();
    var $scopedSlots = scopedSlots || {}; // Header

    if (props.header || hasNormalizedSlot('header', $scopedSlots, $slots) || props.headerHtml) {
      childNodes.push(h(props.headerTag, {
        class: _defineProperty({}, "display-".concat(props.headerLevel), props.headerLevel)
      }, normalizeSlot('header', {}, $scopedSlots, $slots) || props.headerHtml || stripTags(props.header)));
    } // Lead


    if (props.lead || hasNormalizedSlot('lead', $scopedSlots, $slots) || props.leadHtml) {
      childNodes.push(h(props.leadTag, {
        staticClass: 'lead'
      }, normalizeSlot('lead', {}, $scopedSlots, $slots) || props.leadHtml || stripTags(props.lead)));
    } // Default slot


    if (hasNormalizedSlot('default', $scopedSlots, $slots)) {
      childNodes.push(normalizeSlot('default', {}, $scopedSlots, $slots));
    } // If fluid, wrap content in a container/container-fluid


    if (props.fluid) {
      // Children become a child of a container
      childNodes = [h(BContainer, {
        props: {
          fluid: props.containerFluid
        }
      }, childNodes)];
    } // Return the jumbotron


    return h(props.tag, mergeData(data, {
      staticClass: 'jumbotron',
      class: (_class2 = {
        'jumbotron-fluid': props.fluid
      }, _defineProperty(_class2, "text-".concat(props.textVariant), props.textVariant), _defineProperty(_class2, "bg-".concat(props.bgVariant), props.bgVariant), _defineProperty(_class2, "border-".concat(props.borderVariant), props.borderVariant), _defineProperty(_class2, "border", props.borderVariant), _class2)
    }), childNodes);
  }
});

var JumbotronPlugin = /*#__PURE__*/pluginFactory({
  components: {
    BJumbotron: BJumbotron
  }
});

var COMMON_ALIGNMENT = ['start', 'end', 'center']; // Generates a prop object with a type of `[String, Number]`

var strNum$1 = function strNum() {
  return {
    type: [String, Number],
    default: null
  };
}; // Compute a `row-cols-{breakpoint}-{cols}` class name
// Memoized function for better performance on generating class names


var computeRowColsClass = memoize(function (breakpoint, cols) {
  cols = trim(toString$1(cols));
  return cols ? lowerCase(['row-cols', breakpoint, cols].filter(identity).join('-')) : null;
}); // Get the breakpoint name from the `rowCols` prop name
// Memoized function for better performance on extracting breakpoint names

var computeRowColsBreakpoint = memoize(function (prop) {
  return lowerCase(prop.replace('cols', ''));
}); // Cached copy of the `row-cols` breakpoint prop names
// Will be populated when the props are generated

var rowColsPropList = []; // Lazy evaled props factory for <b-row> (called only once,
// the first time the component is used)

var generateProps$2 = function generateProps() {
  // Grab the breakpoints from the cached config (including the '' (xs) breakpoint)
  var breakpoints = getBreakpointsUpCached(); // Supports classes like: `row-cols-2`, `row-cols-md-4`, `row-cols-xl-6`

  var rowColsProps = breakpoints.reduce(function (props, breakpoint) {
    props[suffixPropName(breakpoint, 'cols')] = strNum$1();
    return props;
  }, create(null)); // Cache the row-cols prop names

  rowColsPropList = keys(rowColsProps); // Return the generated props

  return _objectSpread2({
    tag: {
      type: String,
      default: 'div'
    },
    noGutters: {
      type: Boolean,
      default: false
    },
    alignV: {
      type: String,
      default: null,
      validator: function validator(str) {
        return arrayIncludes(COMMON_ALIGNMENT.concat(['baseline', 'stretch']), str);
      }
    },
    alignH: {
      type: String,
      default: null,
      validator: function validator(str) {
        return arrayIncludes(COMMON_ALIGNMENT.concat(['between', 'around']), str);
      }
    },
    alignContent: {
      type: String,
      default: null,
      validator: function validator(str) {
        return arrayIncludes(COMMON_ALIGNMENT.concat(['between', 'around', 'stretch']), str);
      }
    }
  }, rowColsProps);
}; // We do not use `Vue.extend()` here as that would evaluate the props
// immediately, which we do not want to happen
// @vue/component


var BRow = {
  name: 'BRow',
  functional: true,

  get props() {
    // Allow props to be lazy evaled on first access and
    // then they become a non-getter afterwards
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get#Smart_self-overwriting_lazy_getters
    delete this.props;
    this.props = generateProps$2();
    return this.props;
  },

  render: function render(h, _ref) {
    var _classList$push;

    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var classList = []; // Loop through row-cols breakpoint props and generate the classes

    rowColsPropList.forEach(function (prop) {
      var c = computeRowColsClass(computeRowColsBreakpoint(prop), props[prop]); // If a class is returned, push it onto the array

      if (c) {
        classList.push(c);
      }
    });
    classList.push((_classList$push = {
      'no-gutters': props.noGutters
    }, _defineProperty(_classList$push, "align-items-".concat(props.alignV), props.alignV), _defineProperty(_classList$push, "justify-content-".concat(props.alignH), props.alignH), _defineProperty(_classList$push, "align-content-".concat(props.alignContent), props.alignContent), _classList$push));
    return h(props.tag, mergeData(data, {
      staticClass: 'row',
      class: classList
    }), children);
  }
};

var LayoutPlugin = /*#__PURE__*/pluginFactory({
  components: {
    BContainer: BContainer,
    BRow: BRow,
    BCol: BCol,
    BFormRow: BFormRow
  }
});

var LinkPlugin = /*#__PURE__*/pluginFactory({
  components: {
    BLink: BLink
  }
});

var props$C = {
  tag: {
    type: String,
    default: 'div'
  },
  flush: {
    type: Boolean,
    default: false
  },
  horizontal: {
    type: [Boolean, String],
    default: false
  }
}; // @vue/component

var BListGroup = /*#__PURE__*/Vue.extend({
  name: 'BListGroup',
  functional: true,
  props: props$C,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var horizontal = props.horizontal === '' ? true : props.horizontal;
    horizontal = props.flush ? false : horizontal;
    var componentData = {
      staticClass: 'list-group',
      class: _defineProperty({
        'list-group-flush': props.flush,
        'list-group-horizontal': horizontal === true
      }, "list-group-horizontal-".concat(horizontal), isString(horizontal))
    };
    return h(props.tag, mergeData(data, componentData), children);
  }
});

var NAME$o = 'BListGroupItem';
var actionTags = ['a', 'router-link', 'button', 'b-link'];
var linkProps$2 = propsFactory();
delete linkProps$2.href.default;
delete linkProps$2.to.default;
var props$D = _objectSpread2({
  tag: {
    type: String,
    default: 'div'
  },
  action: {
    type: Boolean,
    default: null
  },
  button: {
    type: Boolean,
    default: null
  },
  variant: {
    type: String,
    default: function _default() {
      return getComponentConfig(NAME$o, 'variant');
    }
  }
}, linkProps$2); // @vue/component

var BListGroupItem = /*#__PURE__*/Vue.extend({
  name: NAME$o,
  functional: true,
  props: props$D,
  render: function render(h, _ref) {
    var _class;

    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var tag = props.button ? 'button' : !props.href && !props.to ? props.tag : BLink;
    var isAction = Boolean(props.href || props.to || props.action || props.button || arrayIncludes(actionTags, props.tag));
    var attrs = {};
    var itemProps = {};

    if (tag === 'button') {
      if (!data.attrs || !data.attrs.type) {
        // Add a type for button is one not provided in passed attributes
        attrs.type = 'button';
      }

      if (props.disabled) {
        // Set disabled attribute if button and disabled
        attrs.disabled = true;
      }
    } else {
      itemProps = pluckProps(linkProps$2, props);
    }

    var componentData = {
      attrs: attrs,
      props: itemProps,
      staticClass: 'list-group-item',
      class: (_class = {}, _defineProperty(_class, "list-group-item-".concat(props.variant), props.variant), _defineProperty(_class, 'list-group-item-action', isAction), _defineProperty(_class, "active", props.active), _defineProperty(_class, "disabled", props.disabled), _class)
    };
    return h(tag, mergeData(data, componentData), children);
  }
});

var ListGroupPlugin = /*#__PURE__*/pluginFactory({
  components: {
    BListGroup: BListGroup,
    BListGroupItem: BListGroupItem
  }
});

var props$E = {
  tag: {
    type: String,
    default: 'div'
  }
}; // @vue/component

var BMediaBody = /*#__PURE__*/Vue.extend({
  name: 'BMediaBody',
  functional: true,
  props: props$E,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, mergeData(data, {
      staticClass: 'media-body'
    }), children);
  }
});

var props$F = {
  tag: {
    type: String,
    default: 'div'
  },
  verticalAlign: {
    type: String,
    default: 'top'
  }
}; // @vue/component

var BMediaAside = /*#__PURE__*/Vue.extend({
  name: 'BMediaAside',
  functional: true,
  props: props$F,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var align = props.verticalAlign === 'top' ? 'start' : props.verticalAlign === 'bottom' ? 'end' : props.verticalAlign;
    return h(props.tag, mergeData(data, {
      staticClass: 'd-flex',
      class: _defineProperty({}, "align-self-".concat(align), align)
    }), children);
  }
});

var props$G = {
  tag: {
    type: String,
    default: 'div'
  },
  rightAlign: {
    type: Boolean,
    default: false
  },
  verticalAlign: {
    type: String,
    default: 'top'
  },
  noBody: {
    type: Boolean,
    default: false
  }
}; // @vue/component

var BMedia = /*#__PURE__*/Vue.extend({
  name: 'BMedia',
  functional: true,
  props: props$G,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        slots = _ref.slots,
        scopedSlots = _ref.scopedSlots,
        children = _ref.children;
    var childNodes = props.noBody ? children : [];

    if (!props.noBody) {
      var $slots = slots();
      var $scopedSlots = scopedSlots || {};
      var $aside = normalizeSlot('aside', {}, $scopedSlots, $slots);
      var $default = normalizeSlot('default', {}, $scopedSlots, $slots);

      if ($aside && !props.rightAlign) {
        childNodes.push(h(BMediaAside, {
          staticClass: 'mr-3',
          props: {
            verticalAlign: props.verticalAlign
          }
        }, $aside));
      }

      childNodes.push(h(BMediaBody, $default));

      if ($aside && props.rightAlign) {
        childNodes.push(h(BMediaAside, {
          staticClass: 'ml-3',
          props: {
            verticalAlign: props.verticalAlign
          }
        }, $aside));
      }
    }

    return h(props.tag, mergeData(data, {
      staticClass: 'media'
    }), childNodes);
  }
});

var MediaPlugin = /*#__PURE__*/pluginFactory({
  components: {
    BMedia: BMedia,
    BMediaAside: BMediaAside,
    BMediaBody: BMediaBody
  }
});

//
// Single root node portaling of content, which retains parent/child hierarchy
// Unlike Portal-Vue where portaled content is no longer a descendent of its
// intended parent components
//
// Private components for use by Tooltips, Popovers and Modals
//
// Based on vue-simple-portal
// https://github.com/LinusBorg/vue-simple-portal
// Transporter target used by BTransporterSingle
// Supports only a single root element
// @vue/component

var BTransporterTargetSingle = /*#__PURE__*/Vue.extend({
  // As an abstract component, it doesn't appear in the $parent chain of
  // components, which means the next parent of any component rendered inside
  // of this one will be the parent from which is was portal'd
  abstract: true,
  name: 'BTransporterTargetSingle',
  props: {
    nodes: {
      // Even though we only support a single root element,
      // VNodes are always passed as an array
      type: [Array, Function] // default: undefined

    }
  },
  data: function data(vm) {
    return {
      updatedNodes: vm.nodes
    };
  },
  destroyed: function destroyed() {
    removeNode(this.$el);
  },
  render: function render(h) {
    var nodes = isFunction(this.updatedNodes) ? this.updatedNodes({}) : this.updatedNodes;
    nodes = concat(nodes).filter(Boolean);
    /* istanbul ignore else */

    if (nodes && nodes.length > 0 && !nodes[0].text) {
      return nodes[0];
    } else {
      /* istanbul ignore next */
      return h();
    }
  }
}); // This component has no root element, so only a single VNode is allowed
// @vue/component

var BTransporterSingle = /*#__PURE__*/Vue.extend({
  name: 'BTransporterSingle',
  mixins: [normalizeSlotMixin],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    container: {
      // String: CSS selector,
      // HTMLElement: Element reference
      // Mainly needed for tooltips/popovers inside modals
      type: [String, HTMLElement],
      default: 'body'
    },
    tag: {
      // This should be set to match the root element type
      type: String,
      default: 'div'
    }
  },
  watch: {
    disabled: {
      immediate: true,
      handler: function handler(disabled) {
        disabled ? this.unmountTarget() : this.$nextTick(this.mountTarget);
      }
    }
  },
  created: function created() {
    this._bv_defaultFn = null;
    this._bv_target = null;
  },
  beforeMount: function beforeMount() {
    this.mountTarget();
  },
  updated: function updated() {
    // We need to make sure that all children have completed updating
    // before rendering in the target
    // `vue-simple-portal` has the this in a `$nextTick()`,
    // while `portal-vue` doesn't
    // Just trying to see if the `$nextTick()` delay is required or not
    // Since all slots in Vue 2.6.x are always functions
    this.updateTarget();
  },
  beforeDestroy: function beforeDestroy() {
    this.unmountTarget();
    this._bv_defaultFn = null;
  },
  methods: {
    // Get the element which the target should be appended to
    getContainer: function getContainer() {
      /* istanbul ignore else */
      if (isBrowser) {
        var container = this.container;
        return isString(container) ? select(container) : container;
      } else {
        return null;
      }
    },
    // Mount the target
    mountTarget: function mountTarget() {
      if (!this._bv_target) {
        var container = this.getContainer();

        if (container) {
          var el = document.createElement('div');
          container.appendChild(el);
          this._bv_target = new BTransporterTargetSingle({
            el: el,
            parent: this,
            propsData: {
              // Initial nodes to be rendered
              nodes: concat(this.normalizeSlot('default'))
            }
          });
        }
      }
    },
    // Update the content of the target
    updateTarget: function updateTarget() {
      if (isBrowser && this._bv_target) {
        var defaultFn = this.$scopedSlots.default;

        if (!this.disabled) {
          /* istanbul ignore else: only applicable in Vue 2.5.x */
          if (defaultFn && this._bv_defaultFn !== defaultFn) {
            // We only update the target component if the scoped slot
            // function is a fresh one. The new slot syntax (since Vue 2.6)
            // can cache unchanged slot functions and we want to respect that here
            this._bv_target.updatedNodes = defaultFn;
          } else if (!defaultFn) {
            // We also need to be back compatible with non-scoped default slot (i.e. 2.5.x)
            this._bv_target.updatedNodes = this.$slots.default;
          }
        } // Update the scoped slot function cache


        this._bv_defaultFn = defaultFn;
      }
    },
    // Unmount the target
    unmountTarget: function unmountTarget() {
      if (this._bv_target) {
        this._bv_target.$destroy();

        this._bv_target = null;
      }
    }
  },
  render: function render(h) {
    if (this.disabled) {
      var nodes = concat(this.normalizeSlot('default')).filter(identity);

      if (nodes.length > 0 && !nodes[0].text) {
        return nodes[0];
      }
    }

    return h();
  }
});

var PROP$1 = '$_bv_documentHandlers_'; // @vue/component

var listenOnDocumentMixin = {
  created: function created() {
    var _this = this;

    /* istanbul ignore next */
    if (!isBrowser) {
      return;
    } // Declare non-reactive property
    // Object of arrays, keyed by event name,
    // where value is an array of handlers
    // Prop will be defined on client only


    this[PROP$1] = {}; // Set up our beforeDestroy handler (client only)

    this.$once('hook:beforeDestroy', function () {
      var items = _this[PROP$1] || {}; // Immediately delete this[PROP] to prevent the
      // listenOn/Off methods from running (which may occur
      // due to requestAnimationFrame/transition delays)

      delete _this[PROP$1]; // Remove all registered event handlers

      keys(items).forEach(function (evtName) {
        var handlers = items[evtName] || [];
        handlers.forEach(function (handler) {
          return eventOff(document, evtName, handler, EVENT_OPTIONS_NO_CAPTURE);
        });
      });
    });
  },
  methods: {
    listenDocument: function listenDocument(on, evtName, handler) {
      on ? this.listenOnDocument(evtName, handler) : this.listenOffDocument(evtName, handler);
    },
    listenOnDocument: function listenOnDocument(evtName, handler) {
      if (this[PROP$1] && isString(evtName) && isFunction(handler)) {
        this[PROP$1][evtName] = this[PROP$1][evtName] || [];

        if (!arrayIncludes(this[PROP$1][evtName], handler)) {
          this[PROP$1][evtName].push(handler);
          eventOn(document, evtName, handler, EVENT_OPTIONS_NO_CAPTURE);
        }
      }
    },
    listenOffDocument: function listenOffDocument(evtName, handler) {
      if (this[PROP$1] && isString(evtName) && isFunction(handler)) {
        eventOff(document, evtName, handler, EVENT_OPTIONS_NO_CAPTURE);
        this[PROP$1][evtName] = (this[PROP$1][evtName] || []).filter(function (h) {
          return h !== handler;
        });
      }
    }
  }
};

var PROP$2 = '$_bv_windowHandlers_'; // @vue/component

var listenOnWindowMixin = {
  beforeCreate: function beforeCreate() {
    // Declare non-reactive property
    // Object of arrays, keyed by event name,
    // where value is an array of handlers
    this[PROP$2] = {};
  },
  beforeDestroy: function beforeDestroy() {
    if (isBrowser) {
      var items = this[PROP$2]; // Immediately delete this[PROP] to prevent the
      // listenOn/Off methods from running (which may occur
      // due to requestAnimationFrame delays)

      delete this[PROP$2]; // Remove all registered event handlers

      keys(items).forEach(function (evtName) {
        var handlers = items[evtName] || [];
        handlers.forEach(function (handler) {
          return eventOff(window, evtName, handler, EVENT_OPTIONS_NO_CAPTURE);
        });
      });
    }
  },
  methods: {
    listenWindow: function listenWindow(on, evtName, handler) {
      on ? this.listenOnWindow(evtName, handler) : this.listenOffWindow(evtName, handler);
    },
    listenOnWindow: function listenOnWindow(evtName, handler) {
      if (isBrowser && this[PROP$2] && isString(evtName) && isFunction(handler)) {
        this[PROP$2][evtName] = this[PROP$2][evtName] || [];

        if (!arrayIncludes(this[PROP$2][evtName], handler)) {
          this[PROP$2][evtName].push(handler);
          eventOn(window, evtName, handler, EVENT_OPTIONS_NO_CAPTURE);
        }
      }
    },
    listenOffWindow: function listenOffWindow(evtName, handler) {
      if (isBrowser && this[PROP$2] && isString(evtName) && isFunction(handler)) {
        eventOff(window, evtName, handler, EVENT_OPTIONS_NO_CAPTURE);
        this[PROP$2][evtName] = (this[PROP$2][evtName] || []).filter(function (h) {
          return h !== handler;
        });
      }
    }
  }
};

// This method returns a component's scoped style attribute name: `data-v-xxxxxxx`
// The `_scopeId` options property is added by vue-loader when using scoped styles
// and will be `undefined` if no scoped styles are in use
var getScopeId = function getScopeId(vm) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return vm ? vm.$options._scopeId || defaultValue : defaultValue;
};

var scopedStyleAttrsMixin = {
  computed: {
    scopedStyleAttrs: function scopedStyleAttrs() {
      var scopeId = getScopeId(this.$parent);
      return scopeId ? _defineProperty({}, scopeId, '') : {};
    }
  }
};

/**
 * Private ModalManager helper
 * Handles controlling modal stacking zIndexes and body adjustments/classes
 */
// Default modal backdrop z-index

var DEFAULT_ZINDEX = 1040; // Selectors for padding/margin adjustments

var Selector$1 = {
  FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
  STICKY_CONTENT: '.sticky-top',
  NAVBAR_TOGGLER: '.navbar-toggler'
}; // @vue/component

var ModalManager = /*#__PURE__*/Vue.extend({
  data: function data() {
    return {
      modals: [],
      baseZIndex: null,
      scrollbarWidth: null,
      isBodyOverflowing: false
    };
  },
  computed: {
    modalCount: function modalCount() {
      return this.modals.length;
    },
    modalsAreOpen: function modalsAreOpen() {
      return this.modalCount > 0;
    }
  },
  watch: {
    modalCount: function modalCount(newCount, oldCount) {
      if (isBrowser) {
        this.getScrollbarWidth();

        if (newCount > 0 && oldCount === 0) {
          // Transitioning to modal(s) open
          this.checkScrollbar();
          this.setScrollbar();
          addClass(document.body, 'modal-open');
        } else if (newCount === 0 && oldCount > 0) {
          // Transitioning to modal(s) closed
          this.resetScrollbar();
          removeClass(document.body, 'modal-open');
        }

        setAttr(document.body, 'data-modal-open-count', String(newCount));
      }
    },
    modals: function modals(newVal) {
      var _this = this;

      this.checkScrollbar();
      requestAF(function () {
        _this.updateModals(newVal || []);
      });
    }
  },
  methods: {
    // Public methods
    registerModal: function registerModal(modal) {
      var _this2 = this;

      // Register the modal if not already registered
      if (modal && this.modals.indexOf(modal) === -1) {
        // Add modal to modals array
        this.modals.push(modal);
        modal.$once('hook:beforeDestroy', function () {
          _this2.unregisterModal(modal);
        });
      }
    },
    unregisterModal: function unregisterModal(modal) {
      var index = this.modals.indexOf(modal);

      if (index > -1) {
        // Remove modal from modals array
        this.modals.splice(index, 1); // Reset the modal's data

        if (!(modal._isBeingDestroyed || modal._isDestroyed)) {
          this.resetModal(modal);
        }
      }
    },
    getBaseZIndex: function getBaseZIndex() {
      if (isNull(this.baseZIndex) && isBrowser) {
        // Create a temporary `div.modal-backdrop` to get computed z-index
        var div = document.createElement('div');
        div.className = 'modal-backdrop d-none';
        div.style.display = 'none';
        document.body.appendChild(div);
        this.baseZIndex = toInteger(getCS(div).zIndex || DEFAULT_ZINDEX);
        document.body.removeChild(div);
      }

      return this.baseZIndex || DEFAULT_ZINDEX;
    },
    getScrollbarWidth: function getScrollbarWidth() {
      if (isNull(this.scrollbarWidth) && isBrowser) {
        // Create a temporary `div.measure-scrollbar` to get computed z-index
        var div = document.createElement('div');
        div.className = 'modal-scrollbar-measure';
        document.body.appendChild(div);
        this.scrollbarWidth = getBCR(div).width - div.clientWidth;
        document.body.removeChild(div);
      }

      return this.scrollbarWidth || 0;
    },
    // Private methods
    updateModals: function updateModals(modals) {
      var _this3 = this;

      var baseZIndex = this.getBaseZIndex();
      var scrollbarWidth = this.getScrollbarWidth();
      modals.forEach(function (modal, index) {
        // We update data values on each modal
        modal.zIndex = baseZIndex + index;
        modal.scrollbarWidth = scrollbarWidth;
        modal.isTop = index === _this3.modals.length - 1;
        modal.isBodyOverflowing = _this3.isBodyOverflowing;
      });
    },
    resetModal: function resetModal(modal) {
      if (modal) {
        modal.zIndex = this.getBaseZIndex();
        modal.isTop = true;
        modal.isBodyOverflowing = false;
      }
    },
    checkScrollbar: function checkScrollbar() {
      // Determine if the body element is overflowing
      var _getBCR = getBCR(document.body),
          left = _getBCR.left,
          right = _getBCR.right;

      this.isBodyOverflowing = left + right < window.innerWidth;
    },
    setScrollbar: function setScrollbar() {
      var body = document.body; // Storage place to cache changes to margins and padding
      // Note: This assumes the following element types are not added to the
      // document after the modal has opened.

      body._paddingChangedForModal = body._paddingChangedForModal || [];
      body._marginChangedForModal = body._marginChangedForModal || [];

      if (this.isBodyOverflowing) {
        var scrollbarWidth = this.scrollbarWidth; // Adjust fixed content padding

        /* istanbul ignore next: difficult to test in JSDOM */

        selectAll(Selector$1.FIXED_CONTENT).forEach(function (el) {
          var actualPadding = el.style.paddingRight;
          var calculatedPadding = getCS(el).paddingRight || 0;
          setAttr(el, 'data-padding-right', actualPadding);
          el.style.paddingRight = "".concat(toFloat(calculatedPadding) + scrollbarWidth, "px");

          body._paddingChangedForModal.push(el);
        }); // Adjust sticky content margin

        /* istanbul ignore next: difficult to test in JSDOM */

        selectAll(Selector$1.STICKY_CONTENT).forEach(function (el)
        /* istanbul ignore next */
        {
          var actualMargin = el.style.marginRight;
          var calculatedMargin = getCS(el).marginRight || 0;
          setAttr(el, 'data-margin-right', actualMargin);
          el.style.marginRight = "".concat(toFloat(calculatedMargin) - scrollbarWidth, "px");

          body._marginChangedForModal.push(el);
        }); // Adjust <b-navbar-toggler> margin

        /* istanbul ignore next: difficult to test in JSDOM */

        selectAll(Selector$1.NAVBAR_TOGGLER).forEach(function (el)
        /* istanbul ignore next */
        {
          var actualMargin = el.style.marginRight;
          var calculatedMargin = getCS(el).marginRight || 0;
          setAttr(el, 'data-margin-right', actualMargin);
          el.style.marginRight = "".concat(toFloat(calculatedMargin) + scrollbarWidth, "px");

          body._marginChangedForModal.push(el);
        }); // Adjust body padding

        var actualPadding = body.style.paddingRight;
        var calculatedPadding = getCS(body).paddingRight;
        setAttr(body, 'data-padding-right', actualPadding);
        body.style.paddingRight = "".concat(toFloat(calculatedPadding) + scrollbarWidth, "px");
      }
    },
    resetScrollbar: function resetScrollbar() {
      var body = document.body;

      if (body._paddingChangedForModal) {
        // Restore fixed content padding
        body._paddingChangedForModal.forEach(function (el) {
          /* istanbul ignore next: difficult to test in JSDOM */
          if (hasAttr(el, 'data-padding-right')) {
            el.style.paddingRight = getAttr(el, 'data-padding-right') || '';
            removeAttr(el, 'data-padding-right');
          }
        });
      }

      if (body._marginChangedForModal) {
        // Restore sticky content and navbar-toggler margin
        body._marginChangedForModal.forEach(function (el) {
          /* istanbul ignore next: difficult to test in JSDOM */
          if (hasAttr(el, 'data-margin-right')) {
            el.style.marginRight = getAttr(el, 'data-margin-right') || '';
            removeAttr(el, 'data-margin-right');
          }
        });
      }

      body._paddingChangedForModal = null;
      body._marginChangedForModal = null; // Restore body padding

      if (hasAttr(body, 'data-padding-right')) {
        body.style.paddingRight = getAttr(body, 'data-padding-right') || '';
        removeAttr(body, 'data-padding-right');
      }
    }
  }
}); // Create and export our modal manager instance

var modalManager = new ModalManager();

var BvModalEvent = /*#__PURE__*/function (_BvEvent) {
  _inherits(BvModalEvent, _BvEvent);

  function BvModalEvent(type) {
    var _this;

    var eventInit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, BvModalEvent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BvModalEvent).call(this, type, eventInit)); // Freeze our new props as readonly, but leave them enumerable

    defineProperties(_assertThisInitialized(_this), {
      trigger: readonlyDescriptor()
    });
    return _this;
  }

  _createClass(BvModalEvent, null, [{
    key: "Defaults",
    get: function get() {
      return _objectSpread2({}, _get(_getPrototypeOf(BvModalEvent), "Defaults", this), {
        trigger: null
      });
    }
  }]);

  return BvModalEvent;
}(BvEvent); // Named exports

var NAME$p = 'BModal'; // ObserveDom config to detect changes in modal content
// so that we can adjust the modal padding if needed

var OBSERVER_CONFIG = {
  subtree: true,
  childList: true,
  characterData: true,
  attributes: true,
  attributeFilter: ['style', 'class']
}; // Query selector to find all tabbable elements
// (includes tabindex="-1", which we filter out after)

var TABABLE_SELECTOR = ['button', '[href]:not(.disabled)', 'input', 'select', 'textarea', '[tabindex]', '[contenteditable]'].map(function (s) {
  return "".concat(s, ":not(:disabled):not([disabled])");
}).join(', '); // --- Utility methods ---
// Attempt to focus an element, and return true if successful

var attemptFocus = function attemptFocus(el) {
  if (el && isVisible(el) && el.focus) {
    try {
      el.focus();
    } catch (_unused) {}
  } // If the element has focus, then return true


  return document.activeElement === el;
}; // --- Props ---


var props$H = {
  size: {
    type: String,
    default: function _default() {
      return getComponentConfig(NAME$p, 'size');
    }
  },
  centered: {
    type: Boolean,
    default: false
  },
  scrollable: {
    type: Boolean,
    default: false
  },
  buttonSize: {
    type: String,
    default: ''
  },
  noStacking: {
    type: Boolean,
    default: false
  },
  noFade: {
    type: Boolean,
    default: false
  },
  noCloseOnBackdrop: {
    type: Boolean,
    default: false
  },
  noCloseOnEsc: {
    type: Boolean,
    default: false
  },
  noEnforceFocus: {
    type: Boolean,
    default: false
  },
  ignoreEnforceFocusSelector: {
    type: [Array, String],
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  titleHtml: {
    type: String
  },
  titleTag: {
    type: String,
    default: function _default() {
      return getComponentConfig(NAME$p, 'titleTag');
    }
  },
  titleClass: {
    type: [String, Array, Object],
    default: null
  },
  titleSrOnly: {
    type: Boolean,
    default: false
  },
  ariaLabel: {
    type: String,
    default: null
  },
  headerBgVariant: {
    type: String,
    default: function _default() {
      return getComponentConfig(NAME$p, 'headerBgVariant');
    }
  },
  headerBorderVariant: {
    type: String,
    default: function _default() {
      return getComponentConfig(NAME$p, 'headerBorderVariant');
    }
  },
  headerTextVariant: {
    type: String,
    default: function _default() {
      return getComponentConfig(NAME$p, 'headerTextVariant');
    }
  },
  headerCloseVariant: {
    type: String,
    default: function _default() {
      return getComponentConfig(NAME$p, 'headerCloseVariant');
    }
  },
  headerClass: {
    type: [String, Array, Object],
    default: null
  },
  bodyBgVariant: {
    type: String,
    default: function _default() {
      return getComponentConfig(NAME$p, 'bodyBgVariant');
    }
  },
  bodyTextVariant: {
    type: String,
    default: function _default() {
      return getComponentConfig(NAME$p, 'bodyTextVariant');
    }
  },
  modalClass: {
    type: [String, Array, Object],
    default: null
  },
  dialogClass: {
    type: [String, Array, Object],
    default: null
  },
  contentClass: {
    type: [String, Array, Object],
    default: null
  },
  bodyClass: {
    type: [String, Array, Object],
    default: null
  },
  footerBgVariant: {
    type: String,
    default: function _default() {
      return getComponentConfig(NAME$p, 'footerBgVariant');
    }
  },
  footerBorderVariant: {
    type: String,
    default: function _default() {
      return getComponentConfig(NAME$p, 'footerBorderVariant');
    }
  },
  footerTextVariant: {
    type: String,
    default: function _default() {
      return getComponentConfig(NAME$p, 'footerTextVariant');
    }
  },
  footerClass: {
    type: [String, Array, Object],
    default: null
  },
  hideHeader: {
    type: Boolean,
    default: false
  },
  hideFooter: {
    type: Boolean,
    default: false
  },
  hideHeaderClose: {
    type: Boolean,
    default: false
  },
  hideBackdrop: {
    type: Boolean,
    default: false
  },
  okOnly: {
    type: Boolean,
    default: false
  },
  okDisabled: {
    type: Boolean,
    default: false
  },
  cancelDisabled: {
    type: Boolean,
    default: false
  },
  visible: {
    type: Boolean,
    default: false
  },
  returnFocus: {
    // HTML Element, CSS selector string or Vue component instance
    type: [HTMLElement, String, Object],
    default: null
  },
  headerCloseContent: {
    type: String,
    default: function _default() {
      return getComponentConfig(NAME$p, 'headerCloseContent');
    }
  },
  headerCloseLabel: {
    type: String,
    default: function _default() {
      return getComponentConfig(NAME$p, 'headerCloseLabel');
    }
  },
  cancelTitle: {
    type: String,
    default: function _default() {
      return getComponentConfig(NAME$p, 'cancelTitle');
    }
  },
  cancelTitleHtml: {
    type: String
  },
  okTitle: {
    type: String,
    default: function _default() {
      return getComponentConfig(NAME$p, 'okTitle');
    }
  },
  okTitleHtml: {
    type: String
  },
  cancelVariant: {
    type: String,
    default: function _default() {
      return getComponentConfig(NAME$p, 'cancelVariant');
    }
  },
  okVariant: {
    type: String,
    default: function _default() {
      return getComponentConfig(NAME$p, 'okVariant');
    }
  },
  lazy: {
    type: Boolean,
    default: false
  },
  busy: {
    type: Boolean,
    default: false
  },
  static: {
    type: Boolean,
    default: false
  },
  autoFocusButton: {
    type: String,
    default: null,
    validator: function validator(val) {
      /* istanbul ignore next */
      return isUndefinedOrNull(val) || arrayIncludes(['ok', 'cancel', 'close'], val);
    }
  }
}; // @vue/component

var BModal = /*#__PURE__*/Vue.extend({
  name: NAME$p,
  mixins: [idMixin, listenOnDocumentMixin, listenOnRootMixin, listenOnWindowMixin, normalizeSlotMixin, scopedStyleAttrsMixin],
  inheritAttrs: false,
  model: {
    prop: 'visible',
    event: 'change'
  },
  props: props$H,
  data: function data() {
    return {
      isHidden: true,
      // If modal should not be in document
      isVisible: false,
      // Controls modal visible state
      isTransitioning: false,
      // Used for style control
      isShow: false,
      // Used for style control
      isBlock: false,
      // Used for style control
      isOpening: false,
      // To signal that the modal is in the process of opening
      isClosing: false,
      // To signal that the modal is in the process of closing
      ignoreBackdropClick: false,
      // Used to signify if click out listener should ignore the click
      isModalOverflowing: false,
      return_focus: this.returnFocus || null,
      // The following items are controlled by the modalManager instance
      scrollbarWidth: 0,
      zIndex: modalManager.getBaseZIndex(),
      isTop: true,
      isBodyOverflowing: false
    };
  },
  computed: {
    modalClasses: function modalClasses() {
      return [{
        fade: !this.noFade,
        show: this.isShow
      }, this.modalClass];
    },
    modalStyles: function modalStyles() {
      var sbWidth = "".concat(this.scrollbarWidth, "px");
      return {
        paddingLeft: !this.isBodyOverflowing && this.isModalOverflowing ? sbWidth : '',
        paddingRight: this.isBodyOverflowing && !this.isModalOverflowing ? sbWidth : '',
        // Needed to fix issue https://github.com/bootstrap-vue/bootstrap-vue/issues/3457
        // Even though we are using v-show, we must ensure 'none' is restored in the styles
        display: this.isBlock ? 'block' : 'none'
      };
    },
    dialogClasses: function dialogClasses() {
      var _ref;

      return [(_ref = {}, _defineProperty(_ref, "modal-".concat(this.size), this.size), _defineProperty(_ref, 'modal-dialog-centered', this.centered), _defineProperty(_ref, 'modal-dialog-scrollable', this.scrollable), _ref), this.dialogClass];
    },
    headerClasses: function headerClasses() {
      var _ref2;

      return [(_ref2 = {}, _defineProperty(_ref2, "bg-".concat(this.headerBgVariant), this.headerBgVariant), _defineProperty(_ref2, "text-".concat(this.headerTextVariant), this.headerTextVariant), _defineProperty(_ref2, "border-".concat(this.headerBorderVariant), this.headerBorderVariant), _ref2), this.headerClass];
    },
    titleClasses: function titleClasses() {
      return [{
        'sr-only': this.titleSrOnly
      }, this.titleClass];
    },
    bodyClasses: function bodyClasses() {
      var _ref3;

      return [(_ref3 = {}, _defineProperty(_ref3, "bg-".concat(this.bodyBgVariant), this.bodyBgVariant), _defineProperty(_ref3, "text-".concat(this.bodyTextVariant), this.bodyTextVariant), _ref3), this.bodyClass];
    },
    footerClasses: function footerClasses() {
      var _ref4;

      return [(_ref4 = {}, _defineProperty(_ref4, "bg-".concat(this.footerBgVariant), this.footerBgVariant), _defineProperty(_ref4, "text-".concat(this.footerTextVariant), this.footerTextVariant), _defineProperty(_ref4, "border-".concat(this.footerBorderVariant), this.footerBorderVariant), _ref4), this.footerClass];
    },
    modalOuterStyle: function modalOuterStyle() {
      // Styles needed for proper stacking of modals
      return {
        position: 'absolute',
        zIndex: this.zIndex
      };
    },
    slotScope: function slotScope() {
      return {
        ok: this.onOk,
        cancel: this.onCancel,
        close: this.onClose,
        hide: this.hide,
        visible: this.isVisible
      };
    },
    computeIgnoreEnforceFocusSelector: function computeIgnoreEnforceFocusSelector() {
      // Normalize to an single selector with selectors separated by `,`
      return concat(this.ignoreEnforceFocusSelector).filter(identity).join(',').trim();
    }
  },
  watch: {
    visible: function visible(newVal, oldVal) {
      if (newVal !== oldVal) {
        this[newVal ? 'show' : 'hide']();
      }
    }
  },
  created: function created() {
    // Define non-reactive properties
    this._observer = null;
  },
  mounted: function mounted() {
    // Set initial z-index as queried from the DOM
    this.zIndex = modalManager.getBaseZIndex(); // Listen for events from others to either open or close ourselves
    // and listen to all modals to enable/disable enforce focus

    this.listenOnRoot('bv::show::modal', this.showHandler);
    this.listenOnRoot('bv::hide::modal', this.hideHandler);
    this.listenOnRoot('bv::toggle::modal', this.toggleHandler); // Listen for `bv:modal::show events`, and close ourselves if the
    // opening modal not us

    this.listenOnRoot('bv::modal::show', this.modalListener); // Initially show modal?

    if (this.visible === true) {
      this.$nextTick(this.show);
    }
  },
  beforeDestroy: function beforeDestroy() {
    // Ensure everything is back to normal
    if (this._observer) {
      this._observer.disconnect();

      this._observer = null;
    }

    if (this.isVisible) {
      this.isVisible = false;
      this.isShow = false;
      this.isTransitioning = false;
    }
  },
  methods: {
    // Private method to update the v-model
    updateModel: function updateModel(val) {
      if (val !== this.visible) {
        this.$emit('change', val);
      }
    },
    // Private method to create a BvModalEvent object
    buildEvent: function buildEvent(type) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new BvModalEvent(type, _objectSpread2({
        // Default options
        cancelable: false,
        target: this.$refs.modal || this.$el || null,
        relatedTarget: null,
        trigger: null
      }, options, {
        // Options that can't be overridden
        vueTarget: this,
        componentId: this.safeId()
      }));
    },
    // Public method to show modal
    show: function show() {
      if (this.isVisible || this.isOpening) {
        // If already open, or in the process of opening, do nothing

        /* istanbul ignore next */
        return;
      }
      /* istanbul ignore next */


      if (this.isClosing) {
        // If we are in the process of closing, wait until hidden before re-opening

        /* istanbul ignore next */
        this.$once('hidden', this.show);
        /* istanbul ignore next */

        return;
      }

      this.isOpening = true; // Set the element to return focus to when closed

      this.return_focus = this.return_focus || this.getActiveElement();
      var showEvt = this.buildEvent('show', {
        cancelable: true
      });
      this.emitEvent(showEvt); // Don't show if canceled

      if (showEvt.defaultPrevented || this.isVisible) {
        this.isOpening = false; // Ensure the v-model reflects the current state

        this.updateModel(false);
        return;
      } // Show the modal


      this.doShow();
    },
    // Public method to hide modal
    hide: function hide() {
      var trigger = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      if (!this.isVisible || this.isClosing) {
        /* istanbul ignore next */
        return;
      }

      this.isClosing = true;
      var hideEvt = this.buildEvent('hide', {
        cancelable: trigger !== 'FORCE',
        trigger: trigger || null
      }); // We emit specific event for one of the three built-in buttons

      if (trigger === 'ok') {
        this.$emit('ok', hideEvt);
      } else if (trigger === 'cancel') {
        this.$emit('cancel', hideEvt);
      } else if (trigger === 'headerclose') {
        this.$emit('close', hideEvt);
      }

      this.emitEvent(hideEvt); // Hide if not canceled

      if (hideEvt.defaultPrevented || !this.isVisible) {
        this.isClosing = false; // Ensure v-model reflects current state

        this.updateModel(true);
        return;
      } // Stop observing for content changes


      if (this._observer) {
        this._observer.disconnect();

        this._observer = null;
      } // Trigger the hide transition


      this.isVisible = false; // Update the v-model

      this.updateModel(false);
    },
    // Public method to toggle modal visibility
    toggle: function toggle(triggerEl) {
      if (triggerEl) {
        this.return_focus = triggerEl;
      }

      if (this.isVisible) {
        this.hide('toggle');
      } else {
        this.show();
      }
    },
    // Private method to get the current document active element
    getActiveElement: function getActiveElement() {
      if (isBrowser) {
        var activeElement = document.activeElement; // Note: On IE 11, `document.activeElement` may be null.
        // So we test it for truthiness first.
        // https://github.com/bootstrap-vue/bootstrap-vue/issues/3206
        // Returning focus to document.body may cause unwanted scrolls, so we
        // exclude setting focus on body

        if (activeElement && activeElement !== document.body && activeElement.focus) {
          // Preset the fallback return focus value if it is not set
          // `document.activeElement` should be the trigger element that was clicked or
          // in the case of using the v-model, which ever element has current focus
          // Will be overridden by some commands such as toggle, etc.
          return activeElement;
        }
      }

      return null;
    },
    // Private method to get a list of all tabable elements within modal content
    getTabables: function getTabables() {
      // Find all tabable elements in the modal content
      // Assumes users have not used tabindex > 0 on elements!
      return selectAll(TABABLE_SELECTOR, this.$refs.content).filter(isVisible).filter(function (i) {
        return i.tabIndex > -1 && !i.disabled;
      });
    },
    // Private method to finish showing modal
    doShow: function doShow() {
      var _this = this;

      /* istanbul ignore next: commenting out for now until we can test stacking */
      if (modalManager.modalsAreOpen && this.noStacking) {
        // If another modal(s) is already open, wait for it(them) to close
        this.listenOnRootOnce('bv::modal::hidden', this.doShow);
        return;
      }

      modalManager.registerModal(this); // Place modal in DOM

      this.isHidden = false;
      this.$nextTick(function () {
        // We do this in `$nextTick()` to ensure the modal is in DOM first
        // before we show it
        _this.isVisible = true;
        _this.isOpening = false; // Update the v-model

        _this.updateModel(true);

        _this.$nextTick(function () {
          // In a nextTick in case modal content is lazy
          // Observe changes in modal content and adjust if necessary
          _this._observer = observeDom(_this.$refs.content, _this.checkModalOverflow.bind(_this), OBSERVER_CONFIG);
        });
      });
    },
    // Transition handlers
    onBeforeEnter: function onBeforeEnter() {
      this.isTransitioning = true;
      this.setResizeEvent(true);
    },
    onEnter: function onEnter() {
      var _this2 = this;

      this.isBlock = true; // We add the `show` class 1 frame later
      // `requestAF()` runs the callback before the next repaint, so we need
      // two calls to guarantee the next frame has been rendered

      requestAF(function () {
        requestAF(function () {
          _this2.isShow = true;
        });
      });
    },
    onAfterEnter: function onAfterEnter() {
      var _this3 = this;

      this.checkModalOverflow();
      this.isTransitioning = false; // We use `requestAF()` to allow transition hooks to complete
      // before passing control over to the other handlers
      // This will allow users to not have to use `$nextTick()` or `requestAF()`
      // when trying to pre-focus an element

      requestAF(function () {
        _this3.emitEvent(_this3.buildEvent('shown'));

        _this3.setEnforceFocus(true);

        _this3.$nextTick(function () {
          // Delayed in a `$nextTick()` to allow users time to pre-focus
          // an element if the wish
          _this3.focusFirst();
        });
      });
    },
    onBeforeLeave: function onBeforeLeave() {
      this.isTransitioning = true;
      this.setResizeEvent(false);
      this.setEnforceFocus(false);
    },
    onLeave: function onLeave() {
      // Remove the 'show' class
      this.isShow = false;
    },
    onAfterLeave: function onAfterLeave() {
      var _this4 = this;

      this.isBlock = false;
      this.isTransitioning = false;
      this.isModalOverflowing = false;
      this.isHidden = true;
      this.$nextTick(function () {
        _this4.isClosing = false;
        modalManager.unregisterModal(_this4);

        _this4.returnFocusTo(); // TODO: Need to find a way to pass the `trigger` property
        //       to the `hidden` event, not just only the `hide` event


        _this4.emitEvent(_this4.buildEvent('hidden'));
      });
    },
    // Event emitter
    emitEvent: function emitEvent(bvModalEvt) {
      var type = bvModalEvt.type; // We emit on root first incase a global listener wants to cancel
      // the event first before the instance emits its event

      this.emitOnRoot("bv::modal::".concat(type), bvModalEvt, bvModalEvt.componentId);
      this.$emit(type, bvModalEvt);
    },
    // UI event handlers
    onDialogMousedown: function onDialogMousedown() {
      var _this5 = this;

      // Watch to see if the matching mouseup event occurs outside the dialog
      // And if it does, cancel the clickOut handler
      var modal = this.$refs.modal;

      var onceModalMouseup = function onceModalMouseup(evt) {
        eventOff(modal, 'mouseup', onceModalMouseup, EVENT_OPTIONS_NO_CAPTURE);

        if (evt.target === modal) {
          _this5.ignoreBackdropClick = true;
        }
      };

      eventOn(modal, 'mouseup', onceModalMouseup, EVENT_OPTIONS_NO_CAPTURE);
    },
    onClickOut: function onClickOut(evt) {
      if (this.ignoreBackdropClick) {
        // Click was initiated inside the modal content, but finished outside.
        // Set by the above onDialogMousedown handler
        this.ignoreBackdropClick = false;
        return;
      } // Do nothing if not visible, backdrop click disabled, or element
      // that generated click event is no longer in document body


      if (!this.isVisible || this.noCloseOnBackdrop || !contains(document.body, evt.target)) {
        return;
      } // If backdrop clicked, hide modal


      if (!contains(this.$refs.content, evt.target)) {
        this.hide('backdrop');
      }
    },
    onOk: function onOk() {
      this.hide('ok');
    },
    onCancel: function onCancel() {
      this.hide('cancel');
    },
    onClose: function onClose() {
      this.hide('headerclose');
    },
    onEsc: function onEsc(evt) {
      // If ESC pressed, hide modal
      if (evt.keyCode === KEY_CODES.ESC && this.isVisible && !this.noCloseOnEsc) {
        this.hide('esc');
      }
    },
    // Document focusin listener
    focusHandler: function focusHandler(evt) {
      // If focus leaves modal content, bring it back
      var content = this.$refs.content;
      var target = evt.target;

      if (this.noEnforceFocus || !this.isTop || !this.isVisible || !content || document === target || contains(content, target) || this.computeIgnoreEnforceFocusSelector && closest(this.computeIgnoreEnforceFocusSelector, target, true)) {
        return;
      }

      var tabables = this.getTabables();
      var _this$$refs = this.$refs,
          bottomTrap = _this$$refs.bottomTrap,
          topTrap = _this$$refs.topTrap;

      if (bottomTrap && target === bottomTrap) {
        // If user pressed TAB out of modal into our bottom trab trap element
        // Find the first tabable element in the modal content and focus it
        if (attemptFocus(tabables[0])) {
          // Focus was successful
          return;
        }
      } else if (topTrap && target === topTrap) {
        // If user pressed CTRL-TAB out of modal and into our top tab trap element
        // Find the last tabable element in the modal content and focus it
        if (attemptFocus(tabables[tabables.length - 1])) {
          // Focus was successful
          return;
        }
      } // Otherwise focus the modal content container


      content.focus({
        preventScroll: true
      });
    },
    // Turn on/off focusin listener
    setEnforceFocus: function setEnforceFocus(on) {
      this.listenDocument(on, 'focusin', this.focusHandler);
    },
    // Resize listener
    setResizeEvent: function setResizeEvent(on) {
      this.listenWindow(on, 'resize', this.checkModalOverflow);
      this.listenWindow(on, 'orientationchange', this.checkModalOverflow);
    },
    // Root listener handlers
    showHandler: function showHandler(id, triggerEl) {
      if (id === this.safeId()) {
        this.return_focus = triggerEl || this.getActiveElement();
        this.show();
      }
    },
    hideHandler: function hideHandler(id) {
      if (id === this.safeId()) {
        this.hide('event');
      }
    },
    toggleHandler: function toggleHandler(id, triggerEl) {
      if (id === this.safeId()) {
        this.toggle(triggerEl);
      }
    },
    modalListener: function modalListener(bvEvt) {
      // If another modal opens, close this one if stacking not permitted
      if (this.noStacking && bvEvt.vueTarget !== this) {
        this.hide();
      }
    },
    // Focus control handlers
    focusFirst: function focusFirst() {
      var _this6 = this;

      // Don't try and focus if we are SSR
      if (isBrowser) {
        requestAF(function () {
          var modal = _this6.$refs.modal;
          var content = _this6.$refs.content;

          var activeElement = _this6.getActiveElement(); // If the modal contains the activeElement, we don't do anything


          if (modal && content && !(activeElement && contains(content, activeElement))) {
            var ok = _this6.$refs['ok-button'];
            var cancel = _this6.$refs['cancel-button'];
            var close = _this6.$refs['close-button']; // Focus the appropriate button or modal content wrapper

            var autoFocus = _this6.autoFocusButton;
            var el = autoFocus === 'ok' && ok ? ok.$el || ok : autoFocus === 'cancel' && cancel ? cancel.$el || cancel : autoFocus === 'close' && close ? close.$el || close : content; // Focus the element

            attemptFocus(el);

            if (el === content) {
              // Make sure top of modal is showing (if longer than the viewport)
              _this6.$nextTick(function () {
                modal.scrollTop = 0;
              });
            }
          }
        });
      }
    },
    returnFocusTo: function returnFocusTo() {
      // Prefer `returnFocus` prop over event specified
      // `return_focus` value
      var el = this.returnFocus || this.return_focus || null;
      this.return_focus = null;
      this.$nextTick(function () {
        // Is el a string CSS selector?
        el = isString(el) ? select(el) : el;

        if (el) {
          // Possibly could be a component reference
          el = el.$el || el;
          attemptFocus(el);
        }
      });
    },
    checkModalOverflow: function checkModalOverflow() {
      if (this.isVisible) {
        var modal = this.$refs.modal;
        this.isModalOverflowing = modal.scrollHeight > document.documentElement.clientHeight;
      }
    },
    makeModal: function makeModal(h) {
      // Modal header
      var header = h();

      if (!this.hideHeader) {
        var modalHeader = this.normalizeSlot('modal-header', this.slotScope);

        if (!modalHeader) {
          var closeButton = h();

          if (!this.hideHeaderClose) {
            closeButton = h(BButtonClose, {
              ref: 'close-button',
              props: {
                content: this.headerCloseContent,
                disabled: this.isTransitioning,
                ariaLabel: this.headerCloseLabel,
                textVariant: this.headerCloseVariant || this.headerTextVariant
              },
              on: {
                click: this.onClose
              }
            }, [this.normalizeSlot('modal-header-close')]);
          }

          var domProps = !this.hasNormalizedSlot('modal-title') && this.titleHtml ? {
            innerHTML: this.titleHtml
          } : {};
          modalHeader = [h(this.titleTag, {
            staticClass: 'modal-title',
            class: this.titleClasses,
            attrs: {
              id: this.safeId('__BV_modal_title_')
            },
            domProps: domProps
          }, [this.normalizeSlot('modal-title', this.slotScope) || stripTags(this.title)]), closeButton];
        }

        header = h('header', {
          ref: 'header',
          staticClass: 'modal-header',
          class: this.headerClasses,
          attrs: {
            id: this.safeId('__BV_modal_header_')
          }
        }, [modalHeader]);
      } // Modal body


      var body = h('div', {
        ref: 'body',
        staticClass: 'modal-body',
        class: this.bodyClasses,
        attrs: {
          id: this.safeId('__BV_modal_body_')
        }
      }, this.normalizeSlot('default', this.slotScope)); // Modal footer

      var footer = h();

      if (!this.hideFooter) {
        var modalFooter = this.normalizeSlot('modal-footer', this.slotScope);

        if (!modalFooter) {
          var cancelButton = h();

          if (!this.okOnly) {
            var cancelHtml = this.cancelTitleHtml ? {
              innerHTML: this.cancelTitleHtml
            } : null;
            cancelButton = h(BButton, {
              ref: 'cancel-button',
              props: {
                variant: this.cancelVariant,
                size: this.buttonSize,
                disabled: this.cancelDisabled || this.busy || this.isTransitioning
              },
              on: {
                click: this.onCancel
              }
            }, [this.normalizeSlot('modal-cancel') || (cancelHtml ? h('span', {
              domProps: cancelHtml
            }) : stripTags(this.cancelTitle))]);
          }

          var okHtml = this.okTitleHtml ? {
            innerHTML: this.okTitleHtml
          } : null;
          var okButton = h(BButton, {
            ref: 'ok-button',
            props: {
              variant: this.okVariant,
              size: this.buttonSize,
              disabled: this.okDisabled || this.busy || this.isTransitioning
            },
            on: {
              click: this.onOk
            }
          }, [this.normalizeSlot('modal-ok') || (okHtml ? h('span', {
            domProps: okHtml
          }) : stripTags(this.okTitle))]);
          modalFooter = [cancelButton, okButton];
        }

        footer = h('footer', {
          ref: 'footer',
          staticClass: 'modal-footer',
          class: this.footerClasses,
          attrs: {
            id: this.safeId('__BV_modal_footer_')
          }
        }, [modalFooter]);
      } // Assemble modal content


      var modalContent = h('div', {
        ref: 'content',
        staticClass: 'modal-content',
        class: this.contentClass,
        attrs: {
          role: 'document',
          id: this.safeId('__BV_modal_content_'),
          tabindex: '-1'
        }
      }, [header, body, footer]); // Tab trap to prevent page from scrolling to next element in
      // tab index during enforce focus tab cycle

      var tabTrapTop = h();
      var tabTrapBottom = h();

      if (this.isVisible && !this.noEnforceFocus) {
        tabTrapTop = h('span', {
          ref: 'topTrap',
          attrs: {
            tabindex: '0'
          }
        });
        tabTrapBottom = h('span', {
          ref: 'bottomTrap',
          attrs: {
            tabindex: '0'
          }
        });
      } // Modal dialog wrapper


      var modalDialog = h('div', {
        ref: 'dialog',
        staticClass: 'modal-dialog',
        class: this.dialogClasses,
        on: {
          mousedown: this.onDialogMousedown
        }
      }, [tabTrapTop, modalContent, tabTrapBottom]); // Modal

      var modal = h('div', {
        ref: 'modal',
        staticClass: 'modal',
        class: this.modalClasses,
        style: this.modalStyles,
        directives: [{
          name: 'show',
          rawName: 'v-show',
          value: this.isVisible,
          expression: 'isVisible'
        }],
        attrs: {
          id: this.safeId(),
          role: 'dialog',
          'aria-hidden': this.isVisible ? null : 'true',
          'aria-modal': this.isVisible ? 'true' : null,
          'aria-label': this.ariaLabel,
          'aria-labelledby': this.hideHeader || this.ariaLabel || !(this.hasNormalizedSlot('modal-title') || this.titleHtml || this.title) ? null : this.safeId('__BV_modal_title_'),
          'aria-describedby': this.safeId('__BV_modal_body_')
        },
        on: {
          keydown: this.onEsc,
          click: this.onClickOut
        }
      }, [modalDialog]); // Wrap modal in transition
      // Sadly, we can't use BVTransition here due to the differences in
      // transition durations for .modal and .modal-dialog. Not until
      // issue https://github.com/vuejs/vue/issues/9986 is resolved

      modal = h('transition', {
        props: {
          enterClass: '',
          enterToClass: '',
          enterActiveClass: '',
          leaveClass: '',
          leaveActiveClass: '',
          leaveToClass: ''
        },
        on: {
          beforeEnter: this.onBeforeEnter,
          enter: this.onEnter,
          afterEnter: this.onAfterEnter,
          beforeLeave: this.onBeforeLeave,
          leave: this.onLeave,
          afterLeave: this.onAfterLeave
        }
      }, [modal]); // Modal backdrop

      var backdrop = h();

      if (!this.hideBackdrop && this.isVisible) {
        backdrop = h('div', {
          staticClass: 'modal-backdrop',
          attrs: {
            id: this.safeId('__BV_modal_backdrop_')
          }
        }, [this.normalizeSlot('modal-backdrop')]);
      }

      backdrop = h(BVTransition, {
        props: {
          noFade: this.noFade
        }
      }, [backdrop]); // If the parent has a scoped style attribute, and the modal
      // is portalled, add the scoped attribute to the modal wrapper

      var scopedStyleAttrs = !this.static ? this.scopedStyleAttrs : {}; // Assemble modal and backdrop in an outer <div>

      return h('div', {
        key: "modal-outer-".concat(this._uid),
        style: this.modalOuterStyle,
        attrs: _objectSpread2({}, scopedStyleAttrs, {}, this.$attrs, {
          id: this.safeId('__BV_modal_outer_')
        })
      }, [modal, backdrop]);
    }
  },
  render: function render(h) {
    if (this.static) {
      return this.lazy && this.isHidden ? h() : this.makeModal(h);
    } else {
      return this.isHidden ? h() : h(BTransporterSingle, [this.makeModal(h)]);
    }
  }
});

var EVENT_SHOW = 'bv::show::modal'; // Prop name we use to store info on root element

var PROPERTY = '__bv_modal_directive__';

var getTarget = function getTarget(_ref) {
  var _ref$modifiers = _ref.modifiers,
      modifiers = _ref$modifiers === void 0 ? {} : _ref$modifiers,
      arg = _ref.arg,
      value = _ref.value;
  // Try value, then arg, otherwise pick last modifier
  return isString(value) ? value : isString(arg) ? arg : keys(modifiers).reverse()[0];
};

var getTriggerElement = function getTriggerElement(el) {
  // If root element is a dropdown-item or nav-item, we
  // need to target the inner link or button instead
  return el && matches(el, '.dropdown-menu > li, li.nav-item') ? select('a, button', el) || el : el;
};

var setRole = function setRole(trigger) {
  // Ensure accessibility on non button elements
  if (trigger && trigger.tagName !== 'BUTTON') {
    // Only set a role if the trigger element doesn't have one
    if (!hasAttr(trigger, 'role')) {
      setAttr(trigger, 'role', 'button');
    } // Add a tabindex is not a button or link, and tabindex is not provided


    if (trigger.tagName !== 'A' && !hasAttr(trigger, 'tabindex')) {
      setAttr(trigger, 'tabindex', '0');
    }
  }
};

var bind$1 = function bind(el, binding, vnode) {
  var target = getTarget(binding);
  var trigger = getTriggerElement(el);

  if (target && trigger) {
    var handler = function handler(evt) {
      // `currentTarget` is the element with the listener on it
      var currentTarget = evt.currentTarget;

      if (!isDisabled(currentTarget)) {
        var type = evt.type;
        var key = evt.keyCode; // Open modal only if trigger is not disabled

        if (type === 'click' || type === 'keydown' && (key === KEY_CODES.ENTER || key === KEY_CODES.SPACE)) {
          vnode.context.$root.$emit(EVENT_SHOW, target, currentTarget);
        }
      }
    };

    el[PROPERTY] = {
      handler: handler,
      target: target,
      trigger: trigger
    }; // If element is not a button, we add `role="button"` for accessibility

    setRole(trigger); // Listen for click events

    eventOn(trigger, 'click', handler, EVENT_OPTIONS_PASSIVE);

    if (trigger.tagName !== 'BUTTON' && getAttr(trigger, 'role') === 'button') {
      // If trigger isn't a button but has role button,
      // we also listen for `keydown.space` && `keydown.enter`
      eventOn(trigger, 'keydown', handler, EVENT_OPTIONS_PASSIVE);
    }
  }
};

var unbind$1 = function unbind(el) {
  var oldProp = el[PROPERTY] || {};
  var trigger = oldProp.trigger;
  var handler = oldProp.handler;

  if (trigger && handler) {
    eventOff(trigger, 'click', handler, EVENT_OPTIONS_PASSIVE);
    eventOff(trigger, 'keydown', handler, EVENT_OPTIONS_PASSIVE);
    eventOff(el, 'click', handler, EVENT_OPTIONS_PASSIVE);
    eventOff(el, 'keydown', handler, EVENT_OPTIONS_PASSIVE);
  }

  delete el[PROPERTY];
};

var componentUpdated$1 = function componentUpdated(el, binding, vnode) {
  var oldProp = el[PROPERTY] || {};
  var target = getTarget(binding);
  var trigger = getTriggerElement(el);

  if (target !== oldProp.target || trigger !== oldProp.trigger) {
    // We bind and rebind if the target or trigger changes
    unbind$1(el);
    bind$1(el, binding, vnode);
  } // If trigger element is not a button, ensure `role="button"`
  // is still set for accessibility


  setRole(trigger);
};

var updated = function updated() {};
/*
 * Export our directive
 */


var VBModal = {
  inserted: componentUpdated$1,
  updated: updated,
  componentUpdated: componentUpdated$1,
  unbind: unbind$1
};

var PROP_NAME$2 = '$bvModal';
var PROP_NAME_PRIV = '_bv__modal'; // Base modal props that are allowed
// Some may be ignored or overridden on some message boxes
// Prop ID is allowed, but really only should be used for testing
// We need to add it in explicitly as it comes from the `idMixin`

var BASE_PROPS = ['id'].concat(_toConsumableArray(keys(omit(props$H, ['busy', 'lazy', 'noStacking', "static", 'visible'])))); // Fallback event resolver (returns undefined)

var defaultResolver = function defaultResolver() {}; // Map prop names to modal slot names


var propsToSlots = {
  msgBoxContent: 'default',
  title: 'modal-title',
  okTitle: 'modal-ok',
  cancelTitle: 'modal-cancel'
}; // --- Utility methods ---
// Method to filter only recognized props that are not undefined

var filterOptions = function filterOptions(options) {
  return BASE_PROPS.reduce(function (memo, key) {
    if (!isUndefined(options[key])) {
      memo[key] = options[key];
    }

    return memo;
  }, {});
}; // Method to install `$bvModal` VM injection


var plugin = function plugin(Vue) {
  // Create a private sub-component that extends BModal
  // which self-destructs after hidden
  // @vue/component
  var BMsgBox = Vue.extend({
    name: 'BMsgBox',
    extends: BModal,
    destroyed: function destroyed() {
      // Make sure we not in document any more
      if (this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el);
      }
    },
    mounted: function mounted() {
      var _this = this;

      // Self destruct handler
      var handleDestroy = function handleDestroy() {
        var self = _this;

        _this.$nextTick(function () {
          // In a `setTimeout()` to release control back to application
          setTimeout(function () {
            return self.$destroy();
          }, 0);
        });
      }; // Self destruct if parent destroyed


      this.$parent.$once('hook:destroyed', handleDestroy); // Self destruct after hidden

      this.$once('hidden', handleDestroy); // Self destruct on route change

      /* istanbul ignore if */

      if (this.$router && this.$route) {
        // Destroy ourselves if route changes

        /* istanbul ignore next */
        this.$once('hook:beforeDestroy', this.$watch('$router', handleDestroy));
      } // Show the `BMsgBox`


      this.show();
    }
  }); // Method to generate the on-demand modal message box
  // Returns a promise that resolves to a value returned by the resolve

  var asyncMsgBox = function asyncMsgBox($parent, props) {
    var resolver = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultResolver;

    if (warnNotClient(PROP_NAME$2) || warnNoPromiseSupport(PROP_NAME$2)) {
      /* istanbul ignore next */
      return;
    } // Create an instance of `BMsgBox` component


    var msgBox = new BMsgBox({
      // We set parent as the local VM so these modals can emit events on
      // the app `$root`, as needed by things like tooltips and popovers
      // And it helps to ensure `BMsgBox` is destroyed when parent is destroyed
      parent: $parent,
      // Preset the prop values
      propsData: _objectSpread2({}, filterOptions(getComponentConfig('BModal') || {}), {
        // Defaults that user can override
        hideHeaderClose: true,
        hideHeader: !(props.title || props.titleHtml)
      }, omit(props, keys(propsToSlots)), {
        // Props that can't be overridden
        lazy: false,
        busy: false,
        visible: false,
        noStacking: false,
        noEnforceFocus: false
      })
    }); // Convert certain props to scoped slots

    keys(propsToSlots).forEach(function (prop) {
      if (!isUndefined(props[prop])) {
        // Can be a string, or array of VNodes.
        // Alternatively, user can use HTML version of prop to pass an HTML string.
        msgBox.$slots[propsToSlots[prop]] = concat(props[prop]);
      }
    }); // Return a promise that resolves when hidden, or rejects on destroyed

    return new Promise(function (resolve, reject) {
      var resolved = false;
      msgBox.$once('hook:destroyed', function () {
        if (!resolved) {
          /* istanbul ignore next */
          reject(new Error('BootstrapVue MsgBox destroyed before resolve'));
        }
      });
      msgBox.$on('hide', function (bvModalEvt) {
        if (!bvModalEvt.defaultPrevented) {
          var result = resolver(bvModalEvt); // If resolver didn't cancel hide, we resolve

          if (!bvModalEvt.defaultPrevented) {
            resolved = true;
            resolve(result);
          }
        }
      }); // Create a mount point (a DIV) and mount the msgBo which will trigger it to show

      var div = document.createElement('div');
      document.body.appendChild(div);
      msgBox.$mount(div);
    });
  }; // Private utility method to open a user defined message box and returns a promise.
  // Not to be used directly by consumers, as this method may change calling syntax


  var makeMsgBox = function makeMsgBox($parent, content) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var resolver = arguments.length > 3 ? arguments[3] : undefined;

    if (!content || warnNoPromiseSupport(PROP_NAME$2) || warnNotClient(PROP_NAME$2) || !isFunction(resolver)) {
      /* istanbul ignore next */
      return;
    }

    return asyncMsgBox($parent, _objectSpread2({}, filterOptions(options), {
      msgBoxContent: content
    }), resolver);
  }; // BvModal instance class


  var BvModal = /*#__PURE__*/function () {
    function BvModal(vm) {
      _classCallCheck(this, BvModal);

      // Assign the new properties to this instance
      assign(this, {
        _vm: vm,
        _root: vm.$root
      }); // Set these properties as read-only and non-enumerable

      defineProperties(this, {
        _vm: readonlyDescriptor(),
        _root: readonlyDescriptor()
      });
    } // --- Instance methods ---
    // Show modal with the specified ID args are for future use


    _createClass(BvModal, [{
      key: "show",
      value: function show(id) {
        if (id && this._root) {
          var _this$_root;

          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          (_this$_root = this._root).$emit.apply(_this$_root, ['bv::show::modal', id].concat(args));
        }
      } // Hide modal with the specified ID args are for future use

    }, {
      key: "hide",
      value: function hide(id) {
        if (id && this._root) {
          var _this$_root2;

          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          (_this$_root2 = this._root).$emit.apply(_this$_root2, ['bv::hide::modal', id].concat(args));
        }
      } // The following methods require Promise support!
      // IE 11 and others do not support Promise natively, so users
      // should have a Polyfill loaded (which they need anyways for IE 11 support)
      // Open a message box with OK button only and returns a promise

    }, {
      key: "msgBoxOk",
      value: function msgBoxOk(message) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        // Pick the modal props we support from options
        var props = _objectSpread2({}, options, {
          // Add in overrides and our content prop
          okOnly: true,
          okDisabled: false,
          hideFooter: false,
          msgBoxContent: message
        });

        return makeMsgBox(this._vm, message, props, function () {
          // Always resolve to true for OK
          return true;
        });
      } // Open a message box modal with OK and CANCEL buttons
      // and returns a promise

    }, {
      key: "msgBoxConfirm",
      value: function msgBoxConfirm(message) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        // Set the modal props we support from options
        var props = _objectSpread2({}, options, {
          // Add in overrides and our content prop
          okOnly: false,
          okDisabled: false,
          cancelDisabled: false,
          hideFooter: false
        });

        return makeMsgBox(this._vm, message, props, function (bvModalEvt) {
          var trigger = bvModalEvt.trigger;
          return trigger === 'ok' ? true : trigger === 'cancel' ? false : null;
        });
      }
    }]);

    return BvModal;
  }(); // Add our instance mixin


  Vue.mixin({
    beforeCreate: function beforeCreate() {
      // Because we need access to `$root` for `$emits`, and VM for parenting,
      // we have to create a fresh instance of `BvModal` for each VM
      this[PROP_NAME_PRIV] = new BvModal(this);
    }
  }); // Define our read-only `$bvModal` instance property
  // Placed in an if just in case in HMR mode
  // eslint-disable-next-line no-prototype-builtins

  if (!Vue.prototype.hasOwnProperty(PROP_NAME$2)) {
    defineProperty(Vue.prototype, PROP_NAME$2, {
      get: function get() {
        /* istanbul ignore next */
        if (!this || !this[PROP_NAME_PRIV]) {
          warn("\"".concat(PROP_NAME$2, "\" must be accessed from a Vue instance \"this\" context."), 'BModal');
        }

        return this[PROP_NAME_PRIV];
      }
    });
  }
};

var BVModalPlugin = /*#__PURE__*/pluginFactory({
  plugins: {
    plugin: plugin
  }
});

var ModalPlugin = /*#__PURE__*/pluginFactory({
  components: {
    BModal: BModal
  },
  directives: {
    VBModal: VBModal
  },
  // $bvModal injection
  plugins: {
    BVModalPlugin: BVModalPlugin
  }
});

var props$I = {
  tag: {
    type: String,
    default: 'ul'
  },
  fill: {
    type: Boolean,
    default: false
  },
  justified: {
    type: Boolean,
    default: false
  },
  align: {
    type: String,
    default: null
  },
  tabs: {
    type: Boolean,
    default: false
  },
  pills: {
    type: Boolean,
    default: false
  },
  vertical: {
    type: Boolean,
    default: false
  },
  small: {
    type: Boolean,
    default: false
  },
  cardHeader: {
    // Set to true if placing in a card header
    type: Boolean,
    default: false
  }
}; // -- Utils --

var computeJustifyContent = function computeJustifyContent(value) {
  // Normalize value
  value = value === 'left' ? 'start' : value === 'right' ? 'end' : value;
  return "justify-content-".concat(value);
}; // @vue/component


var BNav = /*#__PURE__*/Vue.extend({
  name: 'BNav',
  functional: true,
  props: props$I,
  render: function render(h, _ref) {
    var _class;

    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, mergeData(data, {
      staticClass: 'nav',
      class: (_class = {
        'nav-tabs': props.tabs,
        'nav-pills': props.pills && !props.tabs,
        'card-header-tabs': !props.vertical && props.cardHeader && props.tabs,
        'card-header-pills': !props.vertical && props.cardHeader && props.pills && !props.tabs,
        'flex-column': props.vertical,
        'nav-fill': !props.vertical && props.fill,
        'nav-justified': !props.vertical && props.justified
      }, _defineProperty(_class, computeJustifyContent(props.align), !props.vertical && props.align), _defineProperty(_class, "small", props.small), _class)
    }), children);
  }
});

var props$J = propsFactory(); // @vue/component

var BNavItem = /*#__PURE__*/Vue.extend({
  name: 'BNavItem',
  functional: true,
  props: _objectSpread2({}, props$J, {
    linkAttrs: {
      type: Object,
      default: function _default() {}
    },
    linkClasses: {
      type: [String, Object, Array],
      default: null
    }
  }),
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        listeners = _ref.listeners,
        children = _ref.children;
    // We transfer the listeners to the link
    delete data.on;
    return h('li', mergeData(data, {
      staticClass: 'nav-item'
    }), [h(BLink, {
      staticClass: 'nav-link',
      class: props.linkClasses,
      attrs: props.linkAttrs,
      props: props,
      on: listeners
    }, children)]);
  }
});

var props$K = {}; // @vue/component

var BNavText = /*#__PURE__*/Vue.extend({
  name: 'BNavText',
  functional: true,
  props: props$K,
  render: function render(h, _ref) {
    var data = _ref.data,
        children = _ref.children;
    return h('li', mergeData(data, {
      staticClass: 'navbar-text'
    }), children);
  }
});

var props$L = _objectSpread2({}, omit(props$o, ['inline']), {
  formClass: {
    type: [String, Array, Object],
    default: null
  }
}); // @vue/component

var BNavForm = /*#__PURE__*/Vue.extend({
  name: 'BNavForm',
  functional: true,
  props: props$L,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children,
        _ref$listeners = _ref.listeners,
        listeners = _ref$listeners === void 0 ? {} : _ref$listeners;
    var attrs = data.attrs; // The following data properties are cleared out
    // as they will be passed to BForm directly

    data.attrs = {};
    data.on = {};
    var $form = h(BForm, {
      class: props.formClass,
      props: _objectSpread2({}, props, {
        inline: true
      }),
      attrs: attrs,
      on: listeners
    }, children);
    return h('li', mergeData(data, {
      staticClass: 'form-inline'
    }), [$form]);
  }
});

var props$M = pluckProps(['text', 'html', 'menuClass', 'toggleClass', 'noCaret', 'role', 'lazy'], props$j); // @vue/component

var BNavItemDropdown = /*#__PURE__*/Vue.extend({
  name: 'BNavItemDropdown',
  mixins: [idMixin, dropdownMixin, normalizeSlotMixin],
  props: props$M,
  computed: {
    isNav: function isNav() {
      // Signal to dropdown mixin that we are in a navbar
      return true;
    },
    dropdownClasses: function dropdownClasses() {
      return [this.directionClass, {
        show: this.visible
      }];
    },
    menuClasses: function menuClasses() {
      return [this.menuClass, {
        'dropdown-menu-right': this.right,
        show: this.visible
      }];
    },
    toggleClasses: function toggleClasses() {
      return [this.toggleClass, {
        'dropdown-toggle-no-caret': this.noCaret
      }];
    }
  },
  render: function render(h) {
    var button = h(BLink, {
      ref: 'toggle',
      staticClass: 'nav-link dropdown-toggle',
      class: this.toggleClasses,
      props: {
        href: '#',
        disabled: this.disabled
      },
      attrs: {
        id: this.safeId('_BV_button_'),
        'aria-haspopup': 'true',
        'aria-expanded': this.visible ? 'true' : 'false'
      },
      on: {
        mousedown: this.onMousedown,
        click: this.toggle,
        keydown: this.toggle // Handle ENTER, SPACE and DOWN

      }
    }, [this.$slots['button-content'] || this.$slots.text || h('span', {
      domProps: htmlOrText(this.html, this.text)
    })]);
    var menu = h('ul', {
      staticClass: 'dropdown-menu',
      class: this.menuClasses,
      ref: 'menu',
      attrs: {
        tabindex: '-1',
        'aria-labelledby': this.safeId('_BV_button_')
      },
      on: {
        keydown: this.onKeydown // Handle UP, DOWN and ESC

      }
    }, !this.lazy || this.visible ? this.normalizeSlot('default', {
      hide: this.hide
    }) : [h()]);
    return h('li', {
      staticClass: 'nav-item b-nav-dropdown dropdown',
      class: this.dropdownClasses,
      attrs: {
        id: this.safeId()
      }
    }, [button, menu]);
  }
});

var NavPlugin = /*#__PURE__*/pluginFactory({
  components: {
    BNav: BNav,
    BNavItem: BNavItem,
    BNavText: BNavText,
    BNavForm: BNavForm,
    BNavItemDropdown: BNavItemDropdown,
    BNavItemDd: BNavItemDropdown,
    BNavDropdown: BNavItemDropdown,
    BNavDd: BNavItemDropdown
  },
  plugins: {
    DropdownPlugin: DropdownPlugin
  }
});

var NAME$q = 'BNavbar';
var props$N = {
  tag: {
    type: String,
    default: 'nav'
  },
  type: {
    type: String,
    default: 'light'
  },
  variant: {
    type: String,
    default: function _default() {
      return getComponentConfig(NAME$q, 'variant');
    }
  },
  toggleable: {
    type: [Boolean, String],
    default: false
  },
  fixed: {
    type: String
  },
  sticky: {
    type: Boolean,
    default: false
  },
  print: {
    type: Boolean,
    default: false
  }
}; // @vue/component

var BNavbar = /*#__PURE__*/Vue.extend({
  name: NAME$q,
  mixins: [normalizeSlotMixin],
  props: props$N,
  provide: function provide() {
    return {
      bvNavbar: this
    };
  },
  computed: {
    breakpointClass: function breakpointClass() {
      var breakpoint = null;
      var xs = getBreakpoints()[0];
      var toggleable = this.toggleable;

      if (toggleable && isString(toggleable) && toggleable !== xs) {
        breakpoint = "navbar-expand-".concat(toggleable);
      } else if (toggleable === false) {
        breakpoint = 'navbar-expand';
      }

      return breakpoint;
    }
  },
  render: function render(h) {
    var _ref;

    return h(this.tag, {
      staticClass: 'navbar',
      class: [(_ref = {
        'd-print': this.print,
        'sticky-top': this.sticky
      }, _defineProperty(_ref, "navbar-".concat(this.type), this.type), _defineProperty(_ref, "bg-".concat(this.variant), this.variant), _defineProperty(_ref, "fixed-".concat(this.fixed), this.fixed), _ref), this.breakpointClass],
      attrs: {
        role: this.tag === 'nav' ? null : 'navigation'
      }
    }, [this.normalizeSlot('default')]);
  }
});

var props$O = pluckProps(['tag', 'fill', 'justified', 'align', 'small'], props$I); // -- Utils --

var computeJustifyContent$1 = function computeJustifyContent(value) {
  // Normalize value
  value = value === 'left' ? 'start' : value === 'right' ? 'end' : value;
  return "justify-content-".concat(value);
}; // @vue/component


var BNavbarNav = /*#__PURE__*/Vue.extend({
  name: 'BNavbarNav',
  functional: true,
  props: props$O,
  render: function render(h, _ref) {
    var _class;

    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, mergeData(data, {
      staticClass: 'navbar-nav',
      class: (_class = {
        'nav-fill': props.fill,
        'nav-justified': props.justified
      }, _defineProperty(_class, computeJustifyContent$1(props.align), props.align), _defineProperty(_class, "small", props.small), _class)
    }), children);
  }
});

var linkProps$3 = propsFactory();
linkProps$3.href.default = undefined;
linkProps$3.to.default = undefined;
var props$P = _objectSpread2({}, linkProps$3, {
  tag: {
    type: String,
    default: 'div'
  }
}); // @vue/component

var BNavbarBrand = /*#__PURE__*/Vue.extend({
  name: 'BNavbarBrand',
  functional: true,
  props: props$P,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var isLink = props.to || props.href;
    var tag = isLink ? BLink : props.tag;
    return h(tag, mergeData(data, {
      staticClass: 'navbar-brand',
      props: isLink ? pluckProps(linkProps$3, props) : {}
    }), children);
  }
});

var NAME$r = 'BNavbarToggle'; // TODO: Switch to using VBToggle directive, will reduce code footprint
// Events we emit on $root

var EVENT_TOGGLE$2 = 'bv::toggle::collapse'; // Events we listen to on $root

var EVENT_STATE$2 = 'bv::collapse::state'; // This private event is NOT to be documented as people should not be using it.

var EVENT_STATE_SYNC$2 = 'bv::collapse::sync::state'; // @vue/component

var BNavbarToggle = /*#__PURE__*/Vue.extend({
  name: NAME$r,
  mixins: [listenOnRootMixin, normalizeSlotMixin],
  props: {
    label: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$r, 'label');
      }
    },
    target: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      toggleState: false
    };
  },
  created: function created() {
    this.listenOnRoot(EVENT_STATE$2, this.handleStateEvt);
    this.listenOnRoot(EVENT_STATE_SYNC$2, this.handleStateEvt);
  },
  methods: {
    onClick: function onClick(evt) {
      this.$emit('click', evt);

      if (!evt.defaultPrevented) {
        this.$root.$emit(EVENT_TOGGLE$2, this.target);
      }
    },
    handleStateEvt: function handleStateEvt(id, state) {
      if (id === this.target) {
        this.toggleState = state;
      }
    }
  },
  render: function render(h) {
    return h('button', {
      class: ['navbar-toggler'],
      attrs: {
        type: 'button',
        'aria-label': this.label,
        'aria-controls': this.target,
        'aria-expanded': this.toggleState ? 'true' : 'false'
      },
      on: {
        click: this.onClick
      }
    }, [this.normalizeSlot('default') || h('span', {
      class: ['navbar-toggler-icon']
    })]);
  }
});

var NavbarPlugin = /*#__PURE__*/pluginFactory({
  components: {
    BNavbar: BNavbar,
    BNavbarNav: BNavbarNav,
    BNavbarBrand: BNavbarBrand,
    BNavbarToggle: BNavbarToggle,
    BNavToggle: BNavbarToggle
  },
  plugins: {
    NavPlugin: NavPlugin,
    CollapsePlugin: CollapsePlugin,
    DropdownPlugin: DropdownPlugin
  }
});

var NAME$s = 'BSpinner'; // @vue/component

var BSpinner = /*#__PURE__*/Vue.extend({
  name: NAME$s,
  functional: true,
  props: {
    type: {
      type: String,
      default: 'border' // SCSS currently supports 'border' or 'grow'

    },
    label: {
      type: String,
      default: null
    },
    variant: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$s, 'variant');
      }
    },
    small: {
      type: Boolean,
      default: false
    },
    role: {
      type: String,
      default: 'status'
    },
    tag: {
      type: String,
      default: 'span'
    }
  },
  render: function render(h, _ref) {
    var _class;

    var props = _ref.props,
        data = _ref.data,
        slots = _ref.slots,
        scopedSlots = _ref.scopedSlots;
    var $slots = slots();
    var $scopedSlots = scopedSlots || {};
    var label = normalizeSlot('label', {}, $scopedSlots, $slots) || props.label;

    if (label) {
      label = h('span', {
        staticClass: 'sr-only'
      }, label);
    }

    return h(props.tag, mergeData(data, {
      attrs: {
        role: label ? props.role || 'status' : null,
        'aria-hidden': label ? null : 'true'
      },
      class: (_class = {}, _defineProperty(_class, "spinner-".concat(props.type), props.type), _defineProperty(_class, "spinner-".concat(props.type, "-sm"), props.small), _defineProperty(_class, "text-".concat(props.variant), props.variant), _class)
    }), [label || h()]);
  }
});

var positionCover = {
  top: 0,
  left: 0,
  bottom: 0,
  right: 0
};
var BOverlay = /*#__PURE__*/Vue.extend({
  name: 'BOverlay',
  mixins: [normalizeSlotMixin],
  props: {
    show: {
      type: Boolean,
      default: false
    },
    variant: {
      type: String,
      default: 'light'
    },
    bgColor: {
      // Alternative to variant, allowing a specific
      // CSS color to be applied to the overlay
      type: String,
      default: null
    },
    opacity: {
      type: [Number, String],
      default: 0.85,
      validator: function validator(value) {
        var number = toFloat(value);
        return number >= 0 && number <= 1;
      }
    },
    blur: {
      type: String,
      default: '2px'
    },
    rounded: {
      type: [Boolean, String],
      default: false
    },
    noCenter: {
      type: Boolean,
      default: false
    },
    noFade: {
      type: Boolean,
      default: false
    },
    spinnerType: {
      type: String,
      default: 'border'
    },
    spinnerVariant: {
      type: String,
      default: null
    },
    spinnerSmall: {
      type: Boolean,
      default: false
    },
    overlayTag: {
      type: String,
      default: 'div'
    },
    wrapTag: {
      type: String,
      default: 'div'
    },
    noWrap: {
      // If set, does not render the default slot
      // and switches to absolute positioning
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: [Number, String],
      default: 10
    }
  },
  computed: {
    computedRounded: function computedRounded() {
      var rounded = this.rounded;
      return rounded === true || rounded === '' ? 'rounded' : !rounded ? '' : "rounded-".concat(rounded);
    },
    computedVariant: function computedVariant() {
      return this.variant && !this.bgColor ? "bg-".concat(this.variant) : '';
    },
    overlayScope: function overlayScope() {
      return {
        spinnerType: this.spinnerType,
        spinnerVariant: this.spinnerVariant || null,
        spinnerSmall: this.spinnerSmall
      };
    }
  },
  methods: {
    defaultOverlayFn: function defaultOverlayFn(_ref) {
      var spinnerType = _ref.spinnerType,
          spinnerVariant = _ref.spinnerVariant,
          spinnerSmall = _ref.spinnerSmall;
      return this.$createElement(BSpinner, {
        props: {
          type: spinnerType,
          variant: spinnerVariant,
          small: spinnerSmall
        }
      });
    }
  },
  render: function render(h) {
    var _this = this;

    var $overlay = h();

    if (this.show) {
      var scope = this.overlayScope; // Overlay backdrop

      var $background = h('div', {
        staticClass: 'position-absolute',
        class: [this.computedVariant, this.computedRounded],
        style: _objectSpread2({}, positionCover, {
          opacity: this.opacity,
          backgroundColor: this.bgColor || null,
          backdropFilter: this.blur ? "blur(".concat(this.blur, ")") : null
        })
      }); // Overlay content

      var $content = h('div', {
        staticClass: 'position-absolute',
        style: this.noCenter ? _objectSpread2({}, positionCover) : {
          top: '50%',
          left: '50%',
          transform: 'translateX(-50%) translateY(-50%)'
        }
      }, [this.normalizeSlot('overlay', scope) || this.defaultOverlayFn(scope)]); // Overlay positioning

      $overlay = h(this.overlayTag, {
        key: 'overlay',
        staticClass: 'b-overlay',
        class: {
          'position-absolute': !this.noWrap || this.noWrap && !this.fixed,
          'position-fixed': this.noWrap && this.fixed
        },
        style: _objectSpread2({}, positionCover, {
          zIndex: this.zIndex || 10
        })
      }, [$background, $content]);
    } // Wrap in a fade transition


    $overlay = h(BVTransition, {
      props: {
        noFade: this.noFade,
        appear: true
      },
      on: {
        'after-enter': function afterEnter() {
          return _this.$emit('shown');
        },
        'after-leave': function afterLeave() {
          return _this.$emit('hidden');
        }
      }
    }, [$overlay]);

    if (this.noWrap) {
      return $overlay;
    }

    return h(this.wrapTag, {
      staticClass: 'b-overlay-wrap position-relative',
      attrs: {
        'aria-busy': this.show ? 'true' : null
      }
    }, this.noWrap ? [$overlay] : [this.normalizeSlot('default'), $overlay]);
  }
});

var OverlayPlugin = /*#__PURE__*/pluginFactory({
  components: {
    BOverlay: BOverlay
  }
});

/**
 * @param {number} length
 * @return {Array}
 */
var range = function range(length) {
  return Array.apply(null, {
    length: length
  });
};

// for `<b-pagination>` and `<b-pagination-nav>`
// --- Constants ---
// Threshold of limit size when we start/stop showing ellipsis

var ELLIPSIS_THRESHOLD = 3; // Default # of buttons limit

var DEFAULT_LIMIT = 5; // --- Helper methods ---
// Make an array of N to N+X

var makePageArray = function makePageArray(startNumber, numberOfPages) {
  return range(numberOfPages).map(function (val, i) {
    return {
      number: startNumber + i,
      classes: null
    };
  });
}; // Sanitize the provided limit value (converting to a number)


var sanitizeLimit = function sanitizeLimit(val) {
  var limit = toInteger(val) || 1;
  return limit < 1 ? DEFAULT_LIMIT : limit;
}; // Sanitize the provided current page number (converting to a number)


var sanitizeCurrentPage = function sanitizeCurrentPage(val, numberOfPages) {
  var page = toInteger(val) || 1;
  return page > numberOfPages ? numberOfPages : page < 1 ? 1 : page;
}; // Links don't normally respond to SPACE, so we add that
// functionality via this handler


var onSpaceKey = function onSpaceKey(evt) {
  if (evt.keyCode === KEY_CODES.SPACE) {
    evt.preventDefault(); // Stop page from scrolling

    evt.stopImmediatePropagation();
    evt.stopPropagation(); // Trigger the click event on the link

    evt.currentTarget.click();
    return false;
  }
}; // --- Props ---


var props$Q = {
  disabled: {
    type: Boolean,
    default: false
  },
  value: {
    type: [Number, String],
    default: null,
    validator: function validator(value)
    /* istanbul ignore next */
    {
      var number = toInteger(value);

      if (!isNull(value) && (isNaN(number) || number < 1)) {
        warn('"v-model" value must be a number greater than "0"', 'BPagination');
        return false;
      }

      return true;
    }
  },
  limit: {
    type: [Number, String],
    default: DEFAULT_LIMIT,
    validator: function validator(value)
    /* istanbul ignore next */
    {
      var number = toInteger(value);

      if (isNaN(number) || number < 1) {
        warn('Prop "limit" must be a number greater than "0"', 'BPagination');
        return false;
      }

      return true;
    }
  },
  align: {
    type: String,
    default: 'left'
  },
  pills: {
    type: Boolean,
    default: false
  },
  hideGotoEndButtons: {
    type: Boolean,
    default: false
  },
  ariaLabel: {
    type: String,
    default: 'Pagination'
  },
  labelFirstPage: {
    type: String,
    default: 'Go to first page'
  },
  firstText: {
    type: String,
    default: "\xAB" // '«'

  },
  firstNumber: {
    type: Boolean,
    default: false
  },
  firstClass: {
    type: [String, Array, Object],
    default: null
  },
  labelPrevPage: {
    type: String,
    default: 'Go to previous page'
  },
  prevText: {
    type: String,
    default: "\u2039" // '‹'

  },
  prevClass: {
    type: [String, Array, Object],
    default: null
  },
  labelNextPage: {
    type: String,
    default: 'Go to next page'
  },
  nextText: {
    type: String,
    default: "\u203A" // '›'

  },
  nextClass: {
    type: [String, Array, Object],
    default: null
  },
  labelLastPage: {
    type: String,
    default: 'Go to last page'
  },
  lastText: {
    type: String,
    default: "\xBB" // '»'

  },
  lastNumber: {
    type: Boolean,
    default: false
  },
  lastClass: {
    type: [String, Array, Object],
    default: null
  },
  labelPage: {
    type: [String, Function],
    default: 'Go to page'
  },
  pageClass: {
    type: [String, Array, Object],
    default: null
  },
  hideEllipsis: {
    type: Boolean,
    default: false
  },
  ellipsisText: {
    type: String,
    default: "\u2026" // '…'

  },
  ellipsisClass: {
    type: [String, Array, Object],
    default: null
  }
}; // @vue/component

var paginationMixin = {
  mixins: [normalizeSlotMixin],
  model: {
    prop: 'value',
    event: 'input'
  },
  props: props$Q,
  data: function data() {
    var curr = toInteger(this.value);
    return {
      // -1 signifies no page initially selected
      currentPage: curr > 0 ? curr : -1,
      localNumberOfPages: 1,
      localLimit: DEFAULT_LIMIT
    };
  },
  computed: {
    btnSize: function btnSize() {
      return this.size ? "pagination-".concat(this.size) : '';
    },
    alignment: function alignment() {
      var align = this.align;

      if (align === 'center') {
        return 'justify-content-center';
      } else if (align === 'end' || align === 'right') {
        return 'justify-content-end';
      } else if (align === 'fill') {
        // The page-items will also have 'flex-fill' added
        // We add text centering to make the button appearance better in fill mode
        return 'text-center';
      }

      return '';
    },
    styleClass: function styleClass() {
      return this.pills ? 'b-pagination-pills' : '';
    },
    computedCurrentPage: function computedCurrentPage() {
      return sanitizeCurrentPage(this.currentPage, this.localNumberOfPages);
    },
    paginationParams: function paginationParams() {
      // Determine if we should show the the ellipsis
      var limit = this.localLimit;
      var numberOfPages = this.localNumberOfPages;
      var currentPage = this.computedCurrentPage;
      var hideEllipsis = this.hideEllipsis;
      var firstNumber = this.firstNumber;
      var lastNumber = this.lastNumber;
      var showFirstDots = false;
      var showLastDots = false;
      var numberOfLinks = limit;
      var startNumber = 1;

      if (numberOfPages <= limit) {
        // Special case: Less pages available than the limit of displayed pages
        numberOfLinks = numberOfPages;
      } else if (currentPage < limit - 1 && limit > ELLIPSIS_THRESHOLD) {
        if (!hideEllipsis || lastNumber) {
          showLastDots = true;
          numberOfLinks = limit - (firstNumber ? 0 : 1);
        }

        numberOfLinks = Math.min(numberOfLinks, limit);
      } else if (numberOfPages - currentPage + 2 < limit && limit > ELLIPSIS_THRESHOLD) {
        if (!hideEllipsis || firstNumber) {
          showFirstDots = true;
          numberOfLinks = limit - (lastNumber ? 0 : 1);
        }

        startNumber = numberOfPages - numberOfLinks + 1;
      } else {
        // We are somewhere in the middle of the page list
        if (limit > ELLIPSIS_THRESHOLD) {
          numberOfLinks = limit - 2;
          showFirstDots = !!(!hideEllipsis || firstNumber);
          showLastDots = !!(!hideEllipsis || lastNumber);
        }

        startNumber = currentPage - Math.floor(numberOfLinks / 2);
      } // Sanity checks

      /* istanbul ignore if */


      if (startNumber < 1) {
        startNumber = 1;
        showFirstDots = false;
      } else if (startNumber > numberOfPages - numberOfLinks) {
        startNumber = numberOfPages - numberOfLinks + 1;
        showLastDots = false;
      }

      if (showFirstDots && firstNumber && startNumber < 4) {
        numberOfLinks = numberOfLinks + 2;
        startNumber = 1;
        showFirstDots = false;
      }

      var lastPageNumber = startNumber + numberOfLinks - 1;

      if (showLastDots && lastNumber && lastPageNumber > numberOfPages - 3) {
        numberOfLinks = numberOfLinks + (lastPageNumber === numberOfPages - 2 ? 2 : 3);
        showLastDots = false;
      } // Special handling for lower limits (where ellipsis are never shown)


      if (limit <= ELLIPSIS_THRESHOLD) {
        if (firstNumber && startNumber === 1) {
          numberOfLinks = Math.min(numberOfLinks + 1, numberOfPages, limit + 1);
        } else if (lastNumber && numberOfPages === startNumber + numberOfLinks - 1) {
          startNumber = Math.max(startNumber - 1, 1);
          numberOfLinks = Math.min(numberOfPages - startNumber + 1, numberOfPages, limit + 1);
        }
      }

      numberOfLinks = Math.min(numberOfLinks, numberOfPages - startNumber + 1);
      return {
        showFirstDots: showFirstDots,
        showLastDots: showLastDots,
        numberOfLinks: numberOfLinks,
        startNumber: startNumber
      };
    },
    pageList: function pageList() {
      // Generates the pageList array
      var _this$paginationParam = this.paginationParams,
          numberOfLinks = _this$paginationParam.numberOfLinks,
          startNumber = _this$paginationParam.startNumber;
      var currentPage = this.computedCurrentPage; // Generate list of page numbers

      var pages = makePageArray(startNumber, numberOfLinks); // We limit to a total of 3 page buttons on XS screens
      // So add classes to page links to hide them for XS breakpoint
      // Note: Ellipsis will also be hidden on XS screens
      // TODO: Make this visual limit configurable based on breakpoint(s)

      if (pages.length > 3) {
        var idx = currentPage - startNumber; // THe following is a bootstrap-vue custom utility class

        var classes = 'bv-d-xs-down-none';

        if (idx === 0) {
          // Keep leftmost 3 buttons visible when current page is first page
          for (var i = 3; i < pages.length; i++) {
            pages[i].classes = classes;
          }
        } else if (idx === pages.length - 1) {
          // Keep rightmost 3 buttons visible when current page is last page
          for (var _i = 0; _i < pages.length - 3; _i++) {
            pages[_i].classes = classes;
          }
        } else {
          // Hide all except current page, current page - 1 and current page + 1
          for (var _i2 = 0; _i2 < idx - 1; _i2++) {
            // hide some left button(s)
            pages[_i2].classes = classes;
          }

          for (var _i3 = pages.length - 1; _i3 > idx + 1; _i3--) {
            // hide some right button(s)
            pages[_i3].classes = classes;
          }
        }
      }

      return pages;
    }
  },
  watch: {
    value: function value(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.currentPage = sanitizeCurrentPage(newValue, this.localNumberOfPages);
      }
    },
    currentPage: function currentPage(newValue, oldValue) {
      if (newValue !== oldValue) {
        // Emit null if no page selected
        this.$emit('input', newValue > 0 ? newValue : null);
      }
    },
    limit: function limit(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.localLimit = sanitizeLimit(newValue);
      }
    }
  },
  created: function created() {
    var _this = this;

    // Set our default values in data
    this.localLimit = sanitizeLimit(this.limit);
    this.$nextTick(function () {
      // Sanity check
      _this.currentPage = _this.currentPage > _this.localNumberOfPages ? _this.localNumberOfPages : _this.currentPage;
    });
  },
  methods: {
    handleKeyNav: function handleKeyNav(evt) {
      var keyCode = evt.keyCode,
          shiftKey = evt.shiftKey;
      /* istanbul ignore if */

      if (this.isNav) {
        // We disable left/right keyboard navigation in `<b-pagination-nav>`
        return;
      }

      if (keyCode === KEY_CODES.LEFT || keyCode === KEY_CODES.UP) {
        evt.preventDefault();
        shiftKey ? this.focusFirst() : this.focusPrev();
      } else if (keyCode === KEY_CODES.RIGHT || keyCode === KEY_CODES.DOWN) {
        evt.preventDefault();
        shiftKey ? this.focusLast() : this.focusNext();
      }
    },
    getButtons: function getButtons() {
      // Return only buttons that are visible
      return selectAll('button.page-link, a.page-link', this.$el).filter(function (btn) {
        return isVisible(btn);
      });
    },
    setBtnFocus: function setBtnFocus(btn) {
      btn.focus();
    },
    focusCurrent: function focusCurrent() {
      var _this2 = this;

      // We do this in `$nextTick()` to ensure buttons have finished rendering
      this.$nextTick(function () {
        var btn = _this2.getButtons().find(function (el) {
          return toInteger(getAttr(el, 'aria-posinset')) === _this2.computedCurrentPage;
        });

        if (btn && btn.focus) {
          _this2.setBtnFocus(btn);
        } else {
          // Fallback if current page is not in button list
          _this2.focusFirst();
        }
      });
    },
    focusFirst: function focusFirst() {
      var _this3 = this;

      // We do this in `$nextTick()` to ensure buttons have finished rendering
      this.$nextTick(function () {
        var btn = _this3.getButtons().find(function (el) {
          return !isDisabled(el);
        });

        if (btn && btn.focus && btn !== document.activeElement) {
          _this3.setBtnFocus(btn);
        }
      });
    },
    focusLast: function focusLast() {
      var _this4 = this;

      // We do this in `$nextTick()` to ensure buttons have finished rendering
      this.$nextTick(function () {
        var btn = _this4.getButtons().reverse().find(function (el) {
          return !isDisabled(el);
        });

        if (btn && btn.focus && btn !== document.activeElement) {
          _this4.setBtnFocus(btn);
        }
      });
    },
    focusPrev: function focusPrev() {
      var _this5 = this;

      // We do this in `$nextTick()` to ensure buttons have finished rendering
      this.$nextTick(function () {
        var buttons = _this5.getButtons();

        var idx = buttons.indexOf(document.activeElement);

        if (idx > 0 && !isDisabled(buttons[idx - 1]) && buttons[idx - 1].focus) {
          _this5.setBtnFocus(buttons[idx - 1]);
        }
      });
    },
    focusNext: function focusNext() {
      var _this6 = this;

      // We do this in `$nextTick()` to ensure buttons have finished rendering
      this.$nextTick(function () {
        var buttons = _this6.getButtons();

        var idx = buttons.indexOf(document.activeElement);
        var cnt = buttons.length - 1;

        if (idx < cnt && !isDisabled(buttons[idx + 1]) && buttons[idx + 1].focus) {
          _this6.setBtnFocus(buttons[idx + 1]);
        }
      });
    }
  },
  render: function render(h) {
    var _this7 = this;

    var buttons = [];
    var numberOfPages = this.localNumberOfPages;
    var pageNumbers = this.pageList.map(function (p) {
      return p.number;
    });
    var disabled = this.disabled;
    var _this$paginationParam2 = this.paginationParams,
        showFirstDots = _this$paginationParam2.showFirstDots,
        showLastDots = _this$paginationParam2.showLastDots;
    var currentPage = this.computedCurrentPage;
    var fill = this.align === 'fill'; // Used to control what type of aria attributes are rendered and wrapper

    var isNav = this.isNav; // Helper function and flag

    var isActivePage = function isActivePage(pageNumber) {
      return pageNumber === currentPage;
    };

    var noCurrentPage = this.currentPage < 1; // Factory function for prev/next/first/last buttons

    var makeEndBtn = function makeEndBtn(linkTo, ariaLabel, btnSlot, btnText, btnClass, pageTest, key) {
      var isDisabled = disabled || isActivePage(pageTest) || noCurrentPage || linkTo < 1 || linkTo > numberOfPages;
      var pageNumber = linkTo < 1 ? 1 : linkTo > numberOfPages ? numberOfPages : linkTo;
      var scope = {
        disabled: isDisabled,
        page: pageNumber,
        index: pageNumber - 1
      };
      var $btnContent = _this7.normalizeSlot(btnSlot, scope) || toString$1(btnText) || h();
      var $inner = h(isDisabled ? 'span' : isNav ? BLink : 'button', {
        staticClass: 'page-link',
        class: {
          'flex-grow-1': !isNav && !isDisabled && fill
        },
        props: isDisabled || !isNav ? {} : _this7.linkProps(linkTo),
        attrs: {
          role: isNav ? null : 'menuitem',
          type: isNav || isDisabled ? null : 'button',
          tabindex: isDisabled || isNav ? null : '-1',
          'aria-label': ariaLabel,
          'aria-controls': _this7.ariaControls || null,
          'aria-disabled': isDisabled ? 'true' : null
        },
        on: isDisabled ? {} : {
          '!click': function click(evt) {
            _this7.onClick(linkTo, evt);
          },
          keydown: onSpaceKey
        }
      }, [$btnContent]);
      return h('li', {
        key: key,
        staticClass: 'page-item',
        class: [{
          disabled: isDisabled,
          'flex-fill': fill,
          'd-flex': fill && !isNav && !isDisabled
        }, btnClass],
        attrs: {
          role: isNav ? null : 'presentation',
          'aria-hidden': isDisabled ? 'true' : null
        }
      }, [$inner]);
    }; // Ellipsis factory


    var makeEllipsis = function makeEllipsis(isLast) {
      return h('li', {
        key: "ellipsis-".concat(isLast ? 'last' : 'first'),
        staticClass: 'page-item',
        class: ['disabled', 'bv-d-xs-down-none', fill ? 'flex-fill' : '', _this7.ellipsisClass],
        attrs: {
          role: 'separator'
        }
      }, [h('span', {
        staticClass: 'page-link'
      }, [_this7.normalizeSlot('ellipsis-text') || toString$1(_this7.ellipsisText) || h()])]);
    }; // Page button factory


    var makePageButton = function makePageButton(page, idx) {
      var active = isActivePage(page.number) && !noCurrentPage; // Active page will have tabindex of 0, or if no current page and first page button

      var tabIndex = disabled ? null : active || noCurrentPage && idx === 0 ? '0' : '-1';
      var attrs = {
        role: isNav ? null : 'menuitemradio',
        type: isNav || disabled ? null : 'button',
        'aria-disabled': disabled ? 'true' : null,
        'aria-controls': _this7.ariaControls || null,
        'aria-label': isFunction(_this7.labelPage) ? _this7.labelPage(page.number) : "".concat(_this7.labelPage, " ").concat(page.number),
        'aria-checked': isNav ? null : active ? 'true' : 'false',
        'aria-current': isNav && active ? 'page' : null,
        'aria-posinset': page.number,
        'aria-setsize': numberOfPages,
        // ARIA "roving tabindex" method (except in isNav mode)
        tabindex: isNav ? null : tabIndex
      };
      var btnContent = toString$1(_this7.makePage(page.number));
      var scope = {
        page: page.number,
        index: page.number - 1,
        content: btnContent,
        active: active,
        disabled: disabled
      };
      var $inner = h(disabled ? 'span' : isNav ? BLink : 'button', {
        props: disabled || !isNav ? {} : _this7.linkProps(page.number),
        staticClass: 'page-link',
        class: {
          'flex-grow-1': !isNav && !disabled && fill
        },
        attrs: attrs,
        on: disabled ? {} : {
          '!click': function click(evt) {
            _this7.onClick(page.number, evt);
          },
          keydown: onSpaceKey
        }
      }, [_this7.normalizeSlot('page', scope) || btnContent]);
      return h('li', {
        key: "page-".concat(page.number),
        staticClass: 'page-item',
        class: [{
          disabled: disabled,
          active: active,
          'flex-fill': fill,
          'd-flex': fill && !isNav && !disabled
        }, page.classes, _this7.pageClass],
        attrs: {
          role: isNav ? null : 'presentation'
        }
      }, [$inner]);
    }; // Goto first page button
    // Don't render button when `hideGotoEndButtons` or `firstNumber` is set


    var $firstPageBtn = h();

    if (!this.firstNumber && !this.hideGotoEndButtons) {
      $firstPageBtn = makeEndBtn(1, this.labelFirstPage, 'first-text', this.firstText, this.firstClass, 1, 'pagination-goto-first');
    }

    buttons.push($firstPageBtn); // Goto previous page button

    buttons.push(makeEndBtn(currentPage - 1, this.labelPrevPage, 'prev-text', this.prevText, this.prevClass, 1, 'pagination-goto-prev')); // Show first (1) button?

    buttons.push(this.firstNumber && pageNumbers[0] !== 1 ? makePageButton({
      number: 1
    }, 0) : h()); // First ellipsis

    buttons.push(showFirstDots ? makeEllipsis(false) : h()); // Individual page links

    this.pageList.forEach(function (page, idx) {
      var offset = showFirstDots && _this7.firstNumber && pageNumbers[0] !== 1 ? 1 : 0;
      buttons.push(makePageButton(page, idx + offset));
    }); // Last ellipsis

    buttons.push(showLastDots ? makeEllipsis(true) : h()); // Show last page button?

    buttons.push(this.lastNumber && pageNumbers[pageNumbers.length - 1] !== numberOfPages ? makePageButton({
      number: numberOfPages
    }, -1) : h()); // Goto next page button

    buttons.push(makeEndBtn(currentPage + 1, this.labelNextPage, 'next-text', this.nextText, this.nextClass, numberOfPages, 'pagination-goto-next')); // Goto last page button
    // Don't render button when `hideGotoEndButtons` or `lastNumber` is set

    var $lastPageBtn = h();

    if (!this.lastNumber && !this.hideGotoEndButtons) {
      $lastPageBtn = makeEndBtn(numberOfPages, this.labelLastPage, 'last-text', this.lastText, this.lastClass, numberOfPages, 'pagination-goto-last');
    }

    buttons.push($lastPageBtn); // Assemble the pagination buttons

    var $pagination = h('ul', {
      ref: 'ul',
      staticClass: 'pagination',
      class: ['b-pagination', this.btnSize, this.alignment, this.styleClass],
      attrs: {
        role: isNav ? null : 'menubar',
        'aria-disabled': disabled ? 'true' : 'false',
        'aria-label': isNav ? null : this.ariaLabel || null
      },
      // We disable keyboard left/right nav when `<b-pagination-nav>`
      on: isNav ? {} : {
        keydown: this.handleKeyNav
      }
    }, buttons); // If we are `<b-pagination-nav>`, wrap in `<nav>` wrapper

    if (isNav) {
      return h('nav', {
        attrs: {
          'aria-disabled': disabled ? 'true' : null,
          'aria-hidden': disabled ? 'true' : 'false',
          'aria-label': isNav ? this.ariaLabel || null : null
        }
      }, [$pagination]);
    }

    return $pagination;
  }
};

var NAME$t = 'BPagination';
var DEFAULT_PER_PAGE = 20;
var DEFAULT_TOTAL_ROWS = 0;
var props$R = {
  size: {
    type: String,
    default: function _default() {
      return getComponentConfig(NAME$t, 'size');
    }
  },
  perPage: {
    type: [Number, String],
    default: DEFAULT_PER_PAGE
  },
  totalRows: {
    type: [Number, String],
    default: DEFAULT_TOTAL_ROWS
  },
  ariaControls: {
    type: String,
    default: null
  }
}; // --- Helper functions ---
// Sanitize the provided per page number (converting to a number)

var sanitizePerPage = function sanitizePerPage(val) {
  var perPage = toInteger(val) || DEFAULT_PER_PAGE;
  return perPage < 1 ? 1 : perPage;
}; // Sanitize the provided total rows number (converting to a number)


var sanitizeTotalRows = function sanitizeTotalRows(val) {
  var totalRows = toInteger(val) || DEFAULT_TOTAL_ROWS;
  return totalRows < 0 ? 0 : totalRows;
}; // The render function is brought in via the `paginationMixin`
// @vue/component


var BPagination = /*#__PURE__*/Vue.extend({
  name: NAME$t,
  mixins: [paginationMixin],
  props: props$R,
  computed: {
    numberOfPages: function numberOfPages() {
      var result = Math.ceil(sanitizeTotalRows(this.totalRows) / sanitizePerPage(this.perPage));
      return result < 1 ? 1 : result;
    },
    pageSizeNumberOfPages: function pageSizeNumberOfPages() {
      // Used for watching changes to `perPage` and `numberOfPages`
      return {
        perPage: sanitizePerPage(this.perPage),
        totalRows: sanitizeTotalRows(this.totalRows),
        numberOfPages: this.numberOfPages
      };
    }
  },
  watch: {
    pageSizeNumberOfPages: function pageSizeNumberOfPages(newVal, oldVal) {
      if (!isUndefinedOrNull(oldVal)) {
        if (newVal.perPage !== oldVal.perPage && newVal.totalRows === oldVal.totalRows) {
          // If the page size changes, reset to page 1
          this.currentPage = 1;
        } else if (newVal.numberOfPages !== oldVal.numberOfPages && this.currentPage > newVal.numberOfPages) {
          // If `numberOfPages` changes and is less than
          // the `currentPage` number, reset to page 1
          this.currentPage = 1;
        }
      }

      this.localNumberOfPages = newVal.numberOfPages;
    }
  },
  created: function created() {
    var _this = this;

    // Set the initial page count
    this.localNumberOfPages = this.numberOfPages; // Set the initial page value

    var currentPage = toInteger(this.value) || 0;

    if (currentPage > 0) {
      this.currentPage = currentPage;
    } else {
      this.$nextTick(function () {
        // If this value parses to NaN or a value less than 1
        // Trigger an initial emit of 'null' if no page specified
        _this.currentPage = 0;
      });
    }
  },
  mounted: function mounted() {
    // Set the initial page count
    this.localNumberOfPages = this.numberOfPages;
  },
  methods: {
    // These methods are used by the render function
    onClick: function onClick(num, evt) {
      var _this2 = this;

      // Handle edge cases where number of pages has changed (i.e. if perPage changes)
      // This should normally not happen, but just in case.
      if (num > this.numberOfPages) {
        /* istanbul ignore next */
        num = this.numberOfPages;
      } else if (num < 1) {
        /* istanbul ignore next */
        num = 1;
      } // Update the v-model


      this.currentPage = num; // Emit event triggered by user interaction

      this.$emit('change', this.currentPage);
      this.$nextTick(function () {
        // Keep the current button focused if possible
        var target = evt.target;

        if (isVisible(target) && _this2.$el.contains(target) && target.focus) {
          target.focus();
        } else {
          _this2.focusCurrent();
        }
      });
    },
    makePage: function makePage(pageNum) {
      return pageNum;
    },
    linkProps: function linkProps() {
      // No props, since we render a plain button

      /* istanbul ignore next */
      return {};
    }
  }
});

var PaginationPlugin = /*#__PURE__*/pluginFactory({
  components: {
    BPagination: BPagination
  }
});

var NAME$u = 'BPaginationNav'; // Sanitize the provided number of pages (converting to a number)

var sanitizeNumberOfPages = function sanitizeNumberOfPages(value) {
  var numberOfPages = toInteger(value) || 1;
  return numberOfPages < 1 ? 1 : numberOfPages;
};
var props$S = {
  size: {
    type: String,
    default: function _default() {
      return getComponentConfig(NAME$u, 'size');
    }
  },
  numberOfPages: {
    type: [Number, String],
    default: 1,
    validator: function validator(value)
    /* istanbul ignore next */
    {
      var num = toInteger(value);

      if (isNaN(num) || num < 1) {
        warn('Prop "number-of-pages" must be a number greater than "0"', NAME$u);
        return false;
      }

      return true;
    }
  },
  baseUrl: {
    type: String,
    default: '/'
  },
  useRouter: {
    type: Boolean,
    default: false
  },
  linkGen: {
    type: Function,
    default: null
  },
  pageGen: {
    type: Function,
    default: null
  },
  pages: {
    // Optional array of page links
    type: Array,
    default: null
  },
  noPageDetect: {
    // Disable auto page number detection if true
    type: Boolean,
    default: false
  },
  // router-link specific props
  activeClass: {
    type: String // default: undefined

  },
  exact: {
    type: Boolean,
    default: false
  },
  exactActiveClass: {
    type: String // default: undefined

  },
  // nuxt-link specific prop(s)
  noPrefetch: {
    type: Boolean,
    default: false
  }
}; // The render function is brought in via the pagination mixin
// @vue/component

var BPaginationNav = /*#__PURE__*/Vue.extend({
  name: NAME$u,
  mixins: [paginationMixin],
  props: props$S,
  computed: {
    // Used by render function to trigger wrapping in '<nav>' element
    isNav: function isNav() {
      return true;
    },
    computedValue: function computedValue() {
      // Returns the value prop as a number or `null` if undefined or < 1
      var val = toInteger(this.value);
      return isNaN(val) || val < 1 ? null : val;
    }
  },
  watch: {
    numberOfPages: function numberOfPages() {
      var _this = this;

      this.$nextTick(function () {
        _this.setNumberOfPages();
      });
    },
    pages: function pages() {
      var _this2 = this;

      this.$nextTick(function () {
        _this2.setNumberOfPages();
      });
    }
  },
  created: function created() {
    this.setNumberOfPages();
  },
  mounted: function mounted() {
    var _this3 = this;

    if (this.$router) {
      // We only add the watcher if vue router is detected
      this.$watch('$route', function () {
        _this3.$nextTick(function () {
          requestAF(function () {
            _this3.guessCurrentPage();
          });
        });
      });
    }
  },
  methods: {
    setNumberOfPages: function setNumberOfPages() {
      var _this4 = this;

      if (isArray(this.pages) && this.pages.length > 0) {
        this.localNumberOfPages = this.pages.length;
      } else {
        this.localNumberOfPages = sanitizeNumberOfPages(this.numberOfPages);
      }

      this.$nextTick(function () {
        _this4.guessCurrentPage();
      });
    },
    onClick: function onClick(pageNum, evt) {
      var _this5 = this;

      // Dont do anything if clicking the current active page
      if (pageNum === this.currentPage) {
        return;
      }

      requestAF(function () {
        // Update the v-model
        // Done in in requestAF() to allow browser to complete the
        // native browser click handling of a link
        _this5.currentPage = pageNum;

        _this5.$emit('change', pageNum);
      });
      this.$nextTick(function () {
        // Done in a nextTick() to ensure rendering complete
        try {
          // Emulate native link click page reloading behaviour by blurring the
          // paginator and returning focus to the document
          var target = evt.currentTarget || evt.target;
          target.blur();
        } catch (e) {}
      });
    },
    getPageInfo: function getPageInfo(pageNum) {
      if (!isArray(this.pages) || this.pages.length === 0 || isUndefined(this.pages[pageNum - 1])) {
        var link = "".concat(this.baseUrl).concat(pageNum);
        return {
          link: this.useRouter ? {
            path: link
          } : link,
          text: toString$1(pageNum)
        };
      }

      var info = this.pages[pageNum - 1];

      if (isObject(info)) {
        var _link = info.link;
        return {
          // Normalize link for router use
          link: isObject(_link) ? _link : this.useRouter ? {
            path: _link
          } : _link,
          // Make sure text has a value
          text: toString$1(info.text || pageNum)
        };
      } else {
        return {
          link: toString$1(info),
          text: toString$1(pageNum)
        };
      }
    },
    makePage: function makePage(pageNum) {
      var info = this.getPageInfo(pageNum);

      if (this.pageGen && isFunction(this.pageGen)) {
        return this.pageGen(pageNum, info);
      }

      return info.text;
    },
    makeLink: function makeLink(pageNum) {
      var info = this.getPageInfo(pageNum);

      if (this.linkGen && isFunction(this.linkGen)) {
        return this.linkGen(pageNum, info);
      }

      return info.link;
    },
    linkProps: function linkProps(pageNum) {
      var link = this.makeLink(pageNum);
      var props = {
        target: this.target || null,
        rel: this.rel || null,
        disabled: this.disabled,
        // The following props are only used if BLink detects router
        exact: this.exact,
        activeClass: this.activeClass,
        exactActiveClass: this.exactActiveClass,
        append: this.append,
        replace: this.replace,
        // nuxt-link specific prop
        noPrefetch: this.noPrefetch
      };

      if (this.useRouter || isObject(link)) {
        props.to = link;
      } else {
        props.href = link;
      }

      return props;
    },
    resolveLink: function resolveLink() {
      var to = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      // Given a to (or href string), convert to normalized route-like structure
      // Works only client side!!
      var link;

      try {
        // Convert the `to` to a HREF via a temporary `a` tag
        link = document.createElement('a');
        link.href = computeHref({
          to: to
        }, 'a', '/', '/'); // We need to add the anchor to the document to make sure the
        // `pathname` is correctly detected in any browser (i.e. IE)

        document.body.appendChild(link); // Once href is assigned, the link will be normalized to the full URL bits

        var _link2 = link,
            pathname = _link2.pathname,
            hash = _link2.hash,
            search = _link2.search; // Remove link from document

        document.body.removeChild(link); // Return the location in a route-like object

        return {
          path: pathname,
          hash: hash,
          query: parseQuery(search)
        };
      } catch (e) {
        /* istanbul ignore next */
        try {
          link && link.parentNode && link.parentNode.removeChild(link);
        } catch (e) {}
        /* istanbul ignore next */


        return {};
      }
    },
    resolveRoute: function resolveRoute() {
      var to = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      // Given a to (or href string), convert to normalized route location structure
      // works only when router available!!
      try {
        var route = this.$router.resolve(to, this.$route).route;
        return {
          path: route.path,
          hash: route.hash,
          query: route.query
        };
      } catch (e) {
        /* istanbul ignore next */
        return {};
      }
    },
    guessCurrentPage: function guessCurrentPage() {
      var guess = this.computedValue;
      var $router = this.$router;
      var $route = this.$route; // This section only occurs if we are client side, or server-side with $router

      /* istanbul ignore else */

      if (!this.noPageDetect && !guess && (isBrowser || !isBrowser && $router)) {
        // Current route (if router available)
        var currRoute = $router && $route ? {
          path: $route.path,
          hash: $route.hash,
          query: $route.query
        } : {}; // Current page full HREF (if client side). Can't be done as a computed prop!

        var loc = isBrowser ? window.location || document.location : null;
        var currLink = loc ? {
          path: loc.pathname,
          hash: loc.hash,
          query: parseQuery(loc.search)
        } : {}; // Loop through the possible pages looking for a match until found

        for (var page = 1; !guess && page <= this.localNumberOfPages; page++) {
          var to = this.makeLink(page);

          if ($router && (isObject(to) || this.useRouter)) {
            // Resolve the page via the $router
            guess = looseEqual(this.resolveRoute(to), currRoute) ? page : null;
          } else if (isBrowser) {
            // If no $router available (or !this.useRouter when `to` is a string)
            // we compare using parsed URIs
            guess = looseEqual(this.resolveLink(to), currLink) ? page : null;
          } else {
            // probably SSR, but no $router so we can't guess, so lets break out of
            // the loop early

            /* istanbul ignore next */
            guess = -1;
          }
        }
      } // We set currentPage to 0 to trigger an $emit('input', null)
      // As the default for this.currentPage is -1 when no value is specified
      // And valid page numbers are greater than 0


      this.currentPage = guess > 0 ? guess : 0;
    }
  }
});

var PaginationNavPlugin = /*#__PURE__*/pluginFactory({
  components: {
    BPaginationNav: BPaginationNav
  }
});

// Base on-demand component for tooltip / popover templates
var NAME$v = 'BVPopper';
var AttachmentMap$1 = {
  AUTO: 'auto',
  TOP: 'top',
  RIGHT: 'right',
  BOTTOM: 'bottom',
  LEFT: 'left',
  TOPLEFT: 'top',
  TOPRIGHT: 'top',
  RIGHTTOP: 'right',
  RIGHTBOTTOM: 'right',
  BOTTOMLEFT: 'bottom',
  BOTTOMRIGHT: 'bottom',
  LEFTTOP: 'left',
  LEFTBOTTOM: 'left'
};
var OffsetMap = {
  AUTO: 0,
  TOPLEFT: -1,
  TOP: 0,
  TOPRIGHT: +1,
  RIGHTTOP: -1,
  RIGHT: 0,
  RIGHTBOTTOM: +1,
  BOTTOMLEFT: -1,
  BOTTOM: 0,
  BOTTOMRIGHT: +1,
  LEFTTOP: -1,
  LEFT: 0,
  LEFTBOTTOM: +1
}; // @vue/component

var BVPopper = /*#__PURE__*/Vue.extend({
  name: NAME$v,
  props: {
    target: {
      // Element that the tooltip/popover is positioned relative to
      type: [HTMLElement, SVGElement],
      default: null
    },
    placement: {
      type: String,
      default: 'top'
    },
    fallbackPlacement: {
      type: [String, Array],
      default: 'flip'
    },
    offset: {
      type: Number,
      default: 0
    },
    boundary: {
      // 'scrollParent', 'viewport', 'window', or Element
      type: [String, HTMLElement],
      default: 'scrollParent'
    },
    boundaryPadding: {
      // Tooltip/popover will try and stay away from
      // boundary edge by this many pixels
      type: Number,
      default: 5
    },
    arrowPadding: {
      // The minimum distance (in `px`) from the edge of the
      // tooltip/popover that the arrow can be positioned
      type: Number,
      default: 6
    }
  },
  data: function data() {
    return {
      // reactive props set by parent
      noFade: false,
      // State related data
      localShow: true,
      attachment: this.getAttachment(this.placement)
    };
  },
  computed: {
    templateType: function templateType()
    /* istanbul ignore next */
    {
      // Overridden by template component
      return 'unknown';
    },
    popperConfig: function popperConfig() {
      var _this = this;

      var placement = this.placement;
      return {
        placement: this.getAttachment(placement),
        modifiers: {
          offset: {
            offset: this.getOffset(placement)
          },
          flip: {
            behavior: this.fallbackPlacement
          },
          // `arrow.element` can also be a reference to an HTML Element
          // maybe we should make this a `$ref` in the templates?
          arrow: {
            element: '.arrow'
          },
          preventOverflow: {
            padding: this.boundaryPadding,
            boundariesElement: this.boundary
          }
        },
        onCreate: function onCreate(data) {
          // Handle flipping arrow classes
          if (data.originalPlacement !== data.placement) {
            /* istanbul ignore next: can't test in JSDOM */
            _this.popperPlacementChange(data);
          }
        },
        onUpdate: function onUpdate(data) {
          // Handle flipping arrow classes
          _this.popperPlacementChange(data);
        }
      };
    }
  },
  created: function created() {
    var _this2 = this;

    // Note: We are created on-demand, and should be guaranteed that
    // DOM is rendered/ready by the time the created hook runs
    this.$_popper = null; // Ensure we show as we mount

    this.localShow = true; // Create popper instance before shown

    this.$on('show', function (el) {
      _this2.popperCreate(el);
    }); // Self destruct once hidden

    this.$on('hidden', function () {
      _this2.$nextTick(_this2.$destroy);
    }); // If parent is destroyed, ensure we are destroyed

    this.$parent.$once('hook:destroyed', this.$destroy);
  },
  beforeMount: function beforeMount() {
    // Ensure that the attachment position is correct before mounting
    // as our propsData is added after `new Template({...})`
    this.attachment = this.getAttachment(this.placement);
  },
  mounted: function mounted() {// TBD
  },
  updated: function updated() {
    // Update popper if needed
    // TODO: Should this be a watcher on `this.popperConfig` instead?
    this.popperUpdate();
  },
  beforeDestroy: function beforeDestroy() {
    this.popperDestroy();
  },
  destroyed: function destroyed() {
    // Make sure template is removed from DOM
    var el = this.$el;
    el && el.parentNode && el.parentNode.removeChild(el);
  },
  methods: {
    // "Public" method to trigger hide template
    hide: function hide() {
      this.localShow = false;
    },
    // Private
    getAttachment: function getAttachment(placement) {
      return AttachmentMap$1[String(placement).toUpperCase()] || 'auto';
    },
    getOffset: function getOffset(placement) {
      if (!this.offset) {
        // Could set a ref for the arrow element
        var arrow = this.$refs.arrow || select('.arrow', this.$el);
        var arrowOffset = (parseFloat(getCS(arrow).width) || 0) + (parseFloat(this.arrowPadding) || 0);

        switch (OffsetMap[String(placement).toUpperCase()] || 0) {
          case +1:
            /* istanbul ignore next: can't test in JSDOM */
            return "+50%p - ".concat(arrowOffset, "px");

          case -1:
            /* istanbul ignore next: can't test in JSDOM */
            return "-50%p + ".concat(arrowOffset, "px");

          default:
            return 0;
        }
      }
      /* istanbul ignore next */


      return this.offset;
    },
    popperCreate: function popperCreate(el) {
      this.popperDestroy(); // We use `el` rather than `this.$el` just in case the original
      // mountpoint root element type was changed by the template

      this.$_popper = new Popper(this.target, el, this.popperConfig);
    },
    popperDestroy: function popperDestroy() {
      this.$_popper && this.$_popper.destroy();
      this.$_popper = null;
    },
    popperUpdate: function popperUpdate() {
      this.$_popper && this.$_popper.scheduleUpdate();
    },
    popperPlacementChange: function popperPlacementChange(data) {
      // Callback used by popper to adjust the arrow placement
      this.attachment = this.getAttachment(data.placement);
    },
    renderTemplate: function renderTemplate(h)
    /* istanbul ignore next */
    {
      // Will be overridden by templates
      return h('div');
    }
  },
  render: function render(h) {
    var _this3 = this;

    // Note: `show` and 'fade' classes are only appled during transition
    return h(BVTransition, {
      // Transitions as soon as mounted
      props: {
        appear: true,
        noFade: this.noFade
      },
      on: {
        // Events used by parent component/instance
        beforeEnter: function beforeEnter(el) {
          return _this3.$emit('show', el);
        },
        afterEnter: function afterEnter(el) {
          return _this3.$emit('shown', el);
        },
        beforeLeave: function beforeLeave(el) {
          return _this3.$emit('hide', el);
        },
        afterLeave: function afterLeave(el) {
          return _this3.$emit('hidden', el);
        }
      }
    }, [this.localShow ? this.renderTemplate(h) : h()]);
  }
});

var NAME$w = 'BVTooltipTemplate'; // @vue/component

var BVTooltipTemplate = /*#__PURE__*/Vue.extend({
  name: NAME$w,
  extends: BVPopper,
  mixins: [scopedStyleAttrsMixin],
  props: {
    // Other non-reactive (while open) props are pulled in from BVPopper
    id: {
      type: String,
      default: null
    },
    html: {
      // Used only by the directive versions
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    // We use data, rather than props to ensure reactivity
    // Parent component will directly set this data
    return {
      title: '',
      content: '',
      variant: null,
      customClass: null,
      interactive: true
    };
  },
  computed: {
    templateType: function templateType() {
      return 'tooltip';
    },
    templateClasses: function templateClasses() {
      var _ref;

      return [(_ref = {
        // Disables pointer events to hide the tooltip when the user
        // hovers over its content
        noninteractive: !this.interactive
      }, _defineProperty(_ref, "b-".concat(this.templateType, "-").concat(this.variant), this.variant), _defineProperty(_ref, "bs-".concat(this.templateType, "-").concat(this.attachment), this.attachment), _ref), this.customClass];
    },
    templateAttributes: function templateAttributes() {
      return _objectSpread2({
        id: this.id,
        role: 'tooltip',
        tabindex: '-1'
      }, this.scopedStyleAttrs);
    },
    templateListeners: function templateListeners() {
      var _this = this;

      // Used for hover/focus trigger listeners
      return {
        mouseenter: function mouseenter(evt) {
          /* istanbul ignore next: difficult to test in JSDOM */
          _this.$emit('mouseenter', evt);
        },
        mouseleave: function mouseleave(evt) {
          /* istanbul ignore next: difficult to test in JSDOM */
          _this.$emit('mouseleave', evt);
        },
        focusin: function focusin(evt) {
          /* istanbul ignore next: difficult to test in JSDOM */
          _this.$emit('focusin', evt);
        },
        focusout: function focusout(evt) {
          /* istanbul ignore next: difficult to test in JSDOM */
          _this.$emit('focusout', evt);
        }
      };
    }
  },
  methods: {
    renderTemplate: function renderTemplate(h) {
      // Title can be a scoped slot function
      var $title = isFunction(this.title) ? this.title({}) : isUndefinedOrNull(this.title) ? h() : this.title; // Directive versions only

      var domProps = this.html && !isFunction(this.title) ? {
        innerHTML: this.title
      } : {};
      return h('div', {
        staticClass: 'tooltip b-tooltip',
        class: this.templateClasses,
        attrs: this.templateAttributes,
        on: this.templateListeners
      }, [h('div', {
        ref: 'arrow',
        staticClass: 'arrow'
      }), h('div', {
        staticClass: 'tooltip-inner',
        domProps: domProps
      }, [$title])]);
    }
  }
});

var NAME$x = 'BVTooltip'; // Modal container selector for appending tooltip/popover

var MODAL_SELECTOR = '.modal-content'; // Modal `$root` hidden event

var MODAL_CLOSE_EVENT = 'bv::modal::hidden'; // For dropdown sniffing

var DROPDOWN_CLASS = 'dropdown';
var DROPDOWN_OPEN_SELECTOR = '.dropdown-menu.show'; // Data specific to popper and template
// We don't use props, as we need reactivity (we can't pass reactive props)

var templateData = {
  // Text string or Scoped slot function
  title: '',
  // Text string or Scoped slot function
  content: '',
  // String
  variant: null,
  // String, Array, Object
  customClass: null,
  // String or array of Strings (overwritten by BVPopper)
  triggers: '',
  // String (overwritten by BVPopper)
  placement: 'auto',
  // String or array of strings
  fallbackPlacement: 'flip',
  // Element or Component reference (or function that returns element) of
  // the element that will have the trigger events bound, and is also
  // default element for positioning
  target: null,
  // HTML ID, Element or Component reference
  container: null,
  // 'body'
  // Boolean
  noFade: false,
  // 'scrollParent', 'viewport', 'window', Element, or Component reference
  boundary: 'scrollParent',
  // Tooltip/popover will try and stay away from
  // boundary edge by this many pixels (Number)
  boundaryPadding: 5,
  // Arrow offset (Number)
  offset: 0,
  // Hover/focus delay (Number or Object)
  delay: 0,
  // Arrow of Tooltip/popover will try and stay away from
  // the edge of tooltip/popover edge by this many pixels
  arrowPadding: 6,
  // Interactive state (Boolean)
  interactive: true,
  // Disabled state (Boolean)
  disabled: false,
  // ID to use for tooltip/popover
  id: null,
  // Flag used by directives only, for HTML content
  html: false
}; // @vue/component

var BVTooltip = /*#__PURE__*/Vue.extend({
  name: NAME$x,
  props: {// None
  },
  data: function data() {
    return _objectSpread2({}, templateData, {
      // State management data
      activeTrigger: {
        // manual: false,
        hover: false,
        click: false,
        focus: false
      },
      localShow: false
    });
  },
  computed: {
    templateType: function templateType() {
      // Overwritten by BVPopover
      return 'tooltip';
    },
    computedId: function computedId() {
      return this.id || "__bv_".concat(this.templateType, "_").concat(this._uid, "__");
    },
    computedDelay: function computedDelay() {
      // Normalizes delay into object form
      var delay = {
        show: 0,
        hide: 0
      };

      if (isPlainObject(this.delay)) {
        delay.show = Math.max(parseInt(this.delay.show, 10) || 0, 0);
        delay.hide = Math.max(parseInt(this.delay.hide, 10) || 0, 0);
      } else if (isNumber(this.delay) || isString(this.delay)) {
        delay.show = delay.hide = Math.max(parseInt(this.delay, 10) || 0, 0);
      }

      return delay;
    },
    computedTriggers: function computedTriggers() {
      // Returns the triggers in sorted array form
      // TODO: Switch this to object form for easier lookup
      return concat(this.triggers).filter(Boolean).join(' ').trim().toLowerCase().split(/\s+/).sort();
    },
    isWithActiveTrigger: function isWithActiveTrigger() {
      for (var trigger in this.activeTrigger) {
        if (this.activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    },
    computedTemplateData: function computedTemplateData() {
      return {
        title: this.title,
        content: this.content,
        variant: this.variant,
        customClass: this.customClass,
        noFade: this.noFade,
        interactive: this.interactive
      };
    }
  },
  watch: {
    computedTriggers: function computedTriggers(newTriggers, oldTriggers) {
      var _this = this;

      // Triggers have changed, so re-register them

      /* istanbul ignore next */
      if (!looseEqual(newTriggers, oldTriggers)) {
        this.$nextTick(function () {
          // Disable trigger listeners
          _this.unListen(); // Clear any active triggers that are no longer in the list of triggers


          oldTriggers.forEach(function (trigger) {
            if (!arrayIncludes(newTriggers, trigger)) {
              if (_this.activeTrigger[trigger]) {
                _this.activeTrigger[trigger] = false;
              }
            }
          }); // Re-enable the trigger listeners

          _this.listen();
        });
      }
    },
    computedTemplateData: function computedTemplateData() {
      // If any of the while open reactive "props" change,
      // ensure that the template updates accordingly
      this.handleTemplateUpdate();
    },
    disabled: function disabled(newVal) {
      newVal ? this.disable() : this.enable();
    }
  },
  created: function created() {
    var _this2 = this;

    // Create non-reactive properties
    this.$_tip = null;
    this.$_hoverTimeout = null;
    this.$_hoverState = '';
    this.$_visibleInterval = null;
    this.$_enabled = !this.disabled;
    this.$_noop = noop.bind(this); // Destroy ourselves when the parent is destroyed

    if (this.$parent) {
      this.$parent.$once('hook:beforeDestroy', this.$destroy);
    }

    this.$nextTick(function () {
      var target = _this2.getTarget();

      if (target && contains(document.body, target)) {
        // Copy the parent's scoped style attribute
        _this2.scopeId = getScopeId(_this2.$parent); // Set up all trigger handlers and listeners

        _this2.listen();
      } else {
        /* istanbul ignore next */
        warn('Unable to find target element in document.', _this2.templateType);
      }
    });
  },
  updated: function updated()
  /* istanbul ignore next */
  {
    // Usually called when the slots/data changes
    this.$nextTick(this.handleTemplateUpdate);
  },
  deactivated: function deactivated()
  /* istanbul ignore next */
  {
    // In a keepalive that has been deactivated, so hide
    // the tooltip/popover if it is showing
    this.forceHide();
  },
  beforeDestroy: function beforeDestroy()
  /* istanbul ignore next */
  {
    // Remove all handler/listeners
    this.unListen();
    this.setWhileOpenListeners(false); // Clear any timeouts/intervals

    this.clearHoverTimeout();
    this.clearVisibilityInterval(); // Destroy the template

    this.destroyTemplate();
  },
  methods: {
    // --- Methods for creating and destroying the template ---
    getTemplate: function getTemplate() {
      // Overridden by BVPopover
      return BVTooltipTemplate;
    },
    updateData: function updateData() {
      var _this3 = this;

      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // Method for updating popper/template data
      // We only update data if it exists, and has not changed
      var titleUpdated = false;
      keys(templateData).forEach(function (prop) {
        if (!isUndefined(data[prop]) && _this3[prop] !== data[prop]) {
          _this3[prop] = data[prop];

          if (prop === 'title') {
            titleUpdated = true;
          }
        }
      });

      if (titleUpdated && this.localShow) {
        // If the title has updated, we may need to handle the title
        // attribute on the trigger target. We only do this while the
        // template is open
        this.fixTitle();
      }
    },
    createTemplateAndShow: function createTemplateAndShow() {
      // Creates the template instance and show it
      var container = this.getContainer();
      var Template = this.getTemplate();
      var $tip = this.$_tip = new Template({
        parent: this,
        // The following is not reactive to changes in the props data
        propsData: {
          // These values cannot be changed while template is showing
          id: this.computedId,
          html: this.html,
          placement: this.placement,
          fallbackPlacement: this.fallbackPlacement,
          target: this.getPlacementTarget(),
          boundary: this.getBoundary(),
          // Ensure the following are integers
          offset: parseInt(this.offset, 10) || 0,
          arrowPadding: parseInt(this.arrowPadding, 10) || 0,
          boundaryPadding: parseInt(this.boundaryPadding, 10) || 0
        }
      }); // We set the initial reactive data (values that can be changed while open)

      this.handleTemplateUpdate(); // Template transition phase events (handled once only)
      // When the template has mounted, but not visibly shown yet

      $tip.$once('show', this.onTemplateShow); // When the template has completed showing

      $tip.$once('shown', this.onTemplateShown); // When the template has started to hide

      $tip.$once('hide', this.onTemplateHide); // When the template has completed hiding

      $tip.$once('hidden', this.onTemplateHidden); // When the template gets destroyed for any reason

      $tip.$once('hook:destroyed', this.destroyTemplate); // Convenience events from template
      // To save us from manually adding/removing DOM
      // listeners to tip element when it is open

      $tip.$on('focusin', this.handleEvent);
      $tip.$on('focusout', this.handleEvent);
      $tip.$on('mouseenter', this.handleEvent);
      $tip.$on('mouseleave', this.handleEvent); // Mount (which triggers the `show`)

      $tip.$mount(container.appendChild(document.createElement('div'))); // Template will automatically remove its markup from DOM when hidden
    },
    hideTemplate: function hideTemplate() {
      // Trigger the template to start hiding
      // The template will emit the `hide` event after this and
      // then emit the `hidden` event once it is fully hidden
      // The `hook:destroyed` will also be called (safety measure)
      this.$_tip && this.$_tip.hide(); // Clear out any stragging active triggers

      this.clearActiveTriggers(); // Reset the hover state

      this.$_hoverState = '';
    },
    // Destroy the template instance and reset state
    destroyTemplate: function destroyTemplate() {
      this.setWhileOpenListeners(false);
      this.clearHoverTimeout();
      this.$_hoverState = '';
      this.clearActiveTriggers();
      this.localPlacementTarget = null;

      try {
        this.$_tip && this.$_tip.$destroy();
      } catch (_unused) {}

      this.$_tip = null;
      this.removeAriaDescribedby();
      this.restoreTitle();
      this.localShow = false;
    },
    getTemplateElement: function getTemplateElement() {
      return this.$_tip ? this.$_tip.$el : null;
    },
    handleTemplateUpdate: function handleTemplateUpdate() {
      var _this4 = this;

      // Update our template title/content "props"
      // So that the template updates accordingly
      var $tip = this.$_tip;

      if ($tip) {
        var props = ['title', 'content', 'variant', 'customClass', 'noFade', 'interactive']; // Only update the values if they have changed

        props.forEach(function (prop) {
          if ($tip[prop] !== _this4[prop]) {
            $tip[prop] = _this4[prop];
          }
        });
      }
    },
    // --- Show/Hide handlers ---
    // Show the tooltip
    show: function show() {
      var target = this.getTarget();

      if (!target || !contains(document.body, target) || !isVisible(target) || this.dropdownOpen() || (isUndefinedOrNull(this.title) || this.title === '') && (isUndefinedOrNull(this.content) || this.content === '')) {
        // If trigger element isn't in the DOM or is not visible, or
        // is on an open dropdown toggle, or has no content, then
        // we exit without showing
        return;
      } // If tip already exists, exit early


      if (this.$_tip || this.localShow) {
        /* istanbul ignore next */
        return;
      } // In the process of showing


      this.localShow = true; // Create a cancelable BvEvent

      var showEvt = this.buildEvent('show', {
        cancelable: true
      });
      this.emitEvent(showEvt); // Don't show if event cancelled

      /* istanbul ignore next: ignore for now */

      if (showEvt.defaultPrevented) {
        // Destroy the template (if for some reason it was created)

        /* istanbul ignore next */
        this.destroyTemplate();
        /* istanbul ignore next */

        return;
      } // Fix the title attribute on target


      this.fixTitle(); // Set aria-describedby on target

      this.addAriaDescribedby(); // Create and show the tooltip

      this.createTemplateAndShow();
    },
    hide: function hide() {
      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      // Hide the tooltip
      var tip = this.getTemplateElement();

      if (!tip || !this.localShow) {
        /* istanbul ignore next */
        this.restoreTitle();
        /* istanbul ignore next */

        return;
      } // Emit cancelable BvEvent 'hide'
      // We disable cancelling if `force` is true


      var hideEvt = this.buildEvent('hide', {
        cancelable: !force
      });
      this.emitEvent(hideEvt);
      /* istanbul ignore next: ignore for now */

      if (hideEvt.defaultPrevented) {
        // Don't hide if event cancelled

        /* istanbul ignore next */
        return;
      } // Tell the template to hide


      this.hideTemplate();
    },
    forceHide: function forceHide() {
      // Forcefully hides/destroys the template, regardless of any active triggers
      var tip = this.getTemplateElement();

      if (!tip || !this.localShow) {
        /* istanbul ignore next */
        return;
      } // Disable while open listeners/watchers
      // This is also done in the template `hide` evt handler


      this.setWhileOpenListeners(false); // Clear any hover enter/leave event

      this.clearHoverTimeout();
      this.$_hoverState = '';
      this.clearActiveTriggers(); // Disable the fade animation on the template

      if (this.$_tip) {
        this.$_tip.noFade = true;
      } // Hide the tip (with force = true)


      this.hide(true);
    },
    enable: function enable() {
      this.$_enabled = true; // Create a non-cancelable BvEvent

      this.emitEvent(this.buildEvent('enabled'));
    },
    disable: function disable() {
      this.$_enabled = false; // Create a non-cancelable BvEvent

      this.emitEvent(this.buildEvent('disabled'));
    },
    // --- Handlers for template events ---
    // When template is inserted into DOM, but not yet shown
    onTemplateShow: function onTemplateShow() {
      // Enable while open listeners/watchers
      this.setWhileOpenListeners(true);
    },
    // When template show transition completes
    onTemplateShown: function onTemplateShown() {
      var prevHoverState = this.$_hoverState;
      this.$_hoverState = '';

      if (prevHoverState === 'out') {
        this.leave(null);
      } // Emit a non-cancelable BvEvent 'shown'


      this.emitEvent(this.buildEvent('shown'));
    },
    // When template is starting to hide
    onTemplateHide: function onTemplateHide() {
      // Disable while open listeners/watchers
      this.setWhileOpenListeners(false);
    },
    // When template has completed closing (just before it self destructs)
    onTemplateHidden: function onTemplateHidden() {
      // Destroy the template
      this.destroyTemplate(); // Emit a non-cancelable BvEvent 'shown'

      this.emitEvent(this.buildEvent('hidden'));
    },
    // --- Utility methods ---
    getTarget: function getTarget() {
      // Handle case where target may be a component ref
      var target = this.target ? this.target.$el || this.target : null; // If an ID

      target = isString(target) ? getById(target.replace(/^#/, '')) : target; // If a function

      target = isFunction(target) ? target() : target; // If an element ref

      return isElement(target) ? target : null;
    },
    getPlacementTarget: function getPlacementTarget() {
      // This is the target that the tooltip will be placed on, which may not
      // necessarily be the same element that has the trigger event listeners
      // For now, this is the same as target
      // TODO:
      //   Add in child selector support
      //   Add in visibility checks for this element
      //   Fallback to target if not found
      return this.getTarget();
    },
    getTargetId: function getTargetId() {
      // Returns the ID of the trigger element
      var target = this.getTarget();
      return target && target.id ? target.id : null;
    },
    getContainer: function getContainer() {
      // Handle case where container may be a component ref
      var container = this.container ? this.container.$el || this.container : false;
      var body = document.body;
      var target = this.getTarget(); // If we are in a modal, we append to the modal instead
      // of body, unless a container is specified
      // TODO:
      //   Template should periodically check to see if it is in dom
      //   And if not, self destruct (if container got v-if'ed out of DOM)
      //   Or this could possibly be part of the visibility check

      return container === false ? closest(MODAL_SELECTOR, target) || body : isString(container) ? getById(container.replace(/^#/, '')) || body : body;
    },
    getBoundary: function getBoundary() {
      return this.boundary ? this.boundary.$el || this.boundary : 'scrollParent';
    },
    isInModal: function isInModal() {
      var target = this.getTarget();
      return target && closest(MODAL_SELECTOR, target);
    },
    isDropdown: function isDropdown() {
      // Returns true if trigger is a dropdown
      var target = this.getTarget();
      return target && hasClass(target, DROPDOWN_CLASS);
    },
    dropdownOpen: function dropdownOpen() {
      // Returns true if trigger is a dropdown and the dropdown menu is open
      var target = this.getTarget();
      return this.isDropdown() && target && select(DROPDOWN_OPEN_SELECTOR, target);
    },
    clearHoverTimeout: function clearHoverTimeout() {
      if (this.$_hoverTimeout) {
        clearTimeout(this.$_hoverTimeout);
        this.$_hoverTimeout = null;
      }
    },
    clearVisibilityInterval: function clearVisibilityInterval() {
      if (this.$_visibleInterval) {
        clearInterval(this.$_visibleInterval);
        this.$_visibleInterval = null;
      }
    },
    clearActiveTriggers: function clearActiveTriggers() {
      for (var trigger in this.activeTrigger) {
        this.activeTrigger[trigger] = false;
      }
    },
    addAriaDescribedby: function addAriaDescribedby() {
      // Add aria-describedby on trigger element, without removing any other IDs
      var target = this.getTarget();
      var desc = getAttr(target, 'aria-describedby') || '';
      desc = desc.split(/\s+/).concat(this.computedId).join(' ').trim(); // Update/add aria-described by

      setAttr(target, 'aria-describedby', desc);
    },
    removeAriaDescribedby: function removeAriaDescribedby() {
      var _this5 = this;

      // Remove aria-describedby on trigger element, without removing any other IDs
      var target = this.getTarget();
      var desc = getAttr(target, 'aria-describedby') || '';
      desc = desc.split(/\s+/).filter(function (d) {
        return d !== _this5.computedId;
      }).join(' ').trim(); // Update or remove aria-describedby

      if (desc) {
        /* istanbul ignore next */
        setAttr(target, 'aria-describedby', desc);
      } else {
        removeAttr(target, 'aria-describedby');
      }
    },
    fixTitle: function fixTitle() {
      // If the target has a title attribute, null it out and
      // store on data-title
      var target = this.getTarget();

      if (target && getAttr(target, 'title')) {
        // We only update title attribute if it has a value
        setAttr(target, 'data-original-title', getAttr(target, 'title') || '');
        setAttr(target, 'title', '');
      }
    },
    restoreTitle: function restoreTitle() {
      // If target had a title, restore the title attribute
      // and remove the data-title attribute
      var target = this.getTarget();

      if (target && hasAttr(target, 'data-original-title')) {
        setAttr(target, 'title', getAttr(target, 'data-original-title') || '');
        removeAttr(target, 'data-original-title');
      }
    },
    // --- BvEvent helpers ---
    buildEvent: function buildEvent(type) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      // Defaults to a non-cancellable event
      return new BvEvent(type, _objectSpread2({
        cancelable: false,
        target: this.getTarget(),
        relatedTarget: this.getTemplateElement() || null,
        componentId: this.computedId,
        vueTarget: this
      }, options));
    },
    emitEvent: function emitEvent(bvEvt) {
      // Emits a BvEvent on $root and this instance
      var evtName = bvEvt.type;
      var $root = this.$root;

      if ($root && $root.$emit) {
        // Emit an event on $root
        $root.$emit("bv::".concat(this.templateType, "::").concat(evtName), bvEvt);
      }

      this.$emit(evtName, bvEvt);
    },
    // --- Event handler setup methods ---
    listen: function listen() {
      var _this6 = this;

      // Enable trigger event handlers
      var el = this.getTarget();

      if (!el) {
        /* istanbul ignore next */
        return;
      } // Listen for global show/hide events


      this.setRootListener(true); // Set up our listeners on the target trigger element

      this.computedTriggers.forEach(function (trigger) {
        if (trigger === 'click') {
          eventOn(el, 'click', _this6.handleEvent, EVENT_OPTIONS_NO_CAPTURE);
        } else if (trigger === 'focus') {
          eventOn(el, 'focusin', _this6.handleEvent, EVENT_OPTIONS_NO_CAPTURE);
          eventOn(el, 'focusout', _this6.handleEvent, EVENT_OPTIONS_NO_CAPTURE);
        } else if (trigger === 'blur') {
          // Used to close $tip when element looses focus

          /* istanbul ignore next */
          eventOn(el, 'focusout', _this6.handleEvent, EVENT_OPTIONS_NO_CAPTURE);
        } else if (trigger === 'hover') {
          eventOn(el, 'mouseenter', _this6.handleEvent, EVENT_OPTIONS_NO_CAPTURE);
          eventOn(el, 'mouseleave', _this6.handleEvent, EVENT_OPTIONS_NO_CAPTURE);
        }
      }, this);
    },
    unListen: function unListen()
    /* istanbul ignore next */
    {
      var _this7 = this;

      // Remove trigger event handlers
      var events = ['click', 'focusin', 'focusout', 'mouseenter', 'mouseleave'];
      var target = this.getTarget(); // Stop listening for global show/hide/enable/disable events

      this.setRootListener(false); // Clear out any active target listeners

      events.forEach(function (evt) {
        target && eventOff(target, evt, _this7.handleEvent, EVENT_OPTIONS_NO_CAPTURE);
      }, this);
    },
    setRootListener: function setRootListener(on) {
      // Listen for global `bv::{hide|show}::{tooltip|popover}` hide request event
      var $root = this.$root;

      if ($root) {
        var method = on ? '$on' : '$off';
        var type = this.templateType;
        $root[method]("bv::hide::".concat(type), this.doHide);
        $root[method]("bv::show::".concat(type), this.doShow);
        $root[method]("bv::disable::".concat(type), this.doDisable);
        $root[method]("bv::enable::".concat(type), this.doEnable);
      }
    },
    setWhileOpenListeners: function setWhileOpenListeners(on) {
      // Events that are only registered when the template is showing
      // Modal close events
      this.setModalListener(on); // Dropdown open events (if we are attached to a dropdown)

      this.setDropdownListener(on); // Periodic $element visibility check
      // For handling when tip target is in <keepalive>, tabs, carousel, etc

      this.visibleCheck(on); // On-touch start listeners

      this.setOnTouchStartListener(on);
    },
    // Handler for periodic visibility check
    visibleCheck: function visibleCheck(on) {
      var _this8 = this;

      this.clearVisibilityInterval();
      var target = this.getTarget();
      var tip = this.getTemplateElement();

      if (on) {
        this.$_visibleInterval = setInterval(function () {
          if (tip && _this8.localShow && (!target.parentNode || !isVisible(target))) {
            // Target element is no longer visible or not in DOM, so force-hide the tooltip
            _this8.forceHide();
          }
        }, 100);
      }
    },
    setModalListener: function setModalListener(on) {
      // Handle case where tooltip/target is in a modal
      if (this.isInModal()) {
        // We can listen for modal hidden events on `$root`
        this.$root[on ? '$on' : '$off'](MODAL_CLOSE_EVENT, this.forceHide);
      }
    },
    setOnTouchStartListener: function setOnTouchStartListener(on)
    /* istanbul ignore next: JSDOM doesn't support `ontouchstart` */
    {
      var _this9 = this;

      // If this is a touch-enabled device we add extra empty
      // `mouseover` listeners to the body's immediate children
      // Only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
      if ('ontouchstart' in document.documentElement) {
        from(document.body.children).forEach(function (el) {
          eventOnOff(on, el, 'mouseover', _this9.$_noop);
        });
      }
    },
    setDropdownListener: function setDropdownListener(on) {
      var target = this.getTarget();

      if (!target || !this.$root || !this.isDropdown) {
        return;
      } // We can listen for dropdown shown events on its instance
      // TODO:
      //   We could grab the ID from the dropdown, and listen for
      //   $root events for that particular dropdown id
      //   Dropdown shown and hidden events will need to emit
      //   Note: Dropdown auto-ID happens in a `$nextTick()` after mount
      //         So the ID lookup would need to be done in a `$nextTick()`


      if (target.__vue__) {
        target.__vue__[on ? '$on' : '$off']('shown', this.forceHide);
      }
    },
    // --- Event handlers ---
    handleEvent: function handleEvent(evt) {
      // General trigger event handler
      // target is the trigger element
      var target = this.getTarget();

      if (!target || isDisabled(target) || !this.$_enabled || this.dropdownOpen()) {
        // If disabled or not enabled, or if a dropdown that is open, don't do anything
        // If tip is shown before element gets disabled, then tip will not
        // close until no longer disabled or forcefully closed
        return;
      }

      var type = evt.type;
      var triggers = this.computedTriggers;

      if (type === 'click' && arrayIncludes(triggers, 'click')) {
        this.click(evt);
      } else if (type === 'mouseenter' && arrayIncludes(triggers, 'hover')) {
        // `mouseenter` is a non-bubbling event
        this.enter(evt);
      } else if (type === 'focusin' && arrayIncludes(triggers, 'focus')) {
        // `focusin` is a bubbling event
        // `evt` includes `relatedTarget` (element loosing focus)
        this.enter(evt);
      } else if (type === 'focusout' && (arrayIncludes(triggers, 'focus') || arrayIncludes(triggers, 'blur')) || type === 'mouseleave' && arrayIncludes(triggers, 'hover')) {
        // `focusout` is a bubbling event
        // `mouseleave` is a non-bubbling event
        // `tip` is the template (will be null if not open)
        var tip = this.getTemplateElement(); // `evtTarget` is the element which is loosing focus/hover and

        var evtTarget = evt.target; // `relatedTarget` is the element gaining focus/hover

        var relatedTarget = evt.relatedTarget;
        /* istanbul ignore next */

        if ( // From tip to target
        tip && contains(tip, evtTarget) && contains(target, relatedTarget) || // From target to tip
        tip && contains(target, evtTarget) && contains(tip, relatedTarget) || // Within tip
        tip && contains(tip, evtTarget) && contains(tip, relatedTarget) || // Within target
        contains(target, evtTarget) && contains(target, relatedTarget)) {
          // If focus/hover moves within `tip` and `target`, don't trigger a leave
          return;
        } // Otherwise trigger a leave


        this.leave(evt);
      }
    },
    doHide: function doHide(id) {
      // Programmatically hide tooltip or popover
      if (!id || this.getTargetId() === id || this.computedId === id) {
        // Close all tooltips or popovers, or this specific tip (with ID)
        this.forceHide();
      }
    },
    doShow: function doShow(id) {
      // Programmatically show tooltip or popover
      if (!id || this.getTargetId() === id || this.computedId === id) {
        // Open all tooltips or popovers, or this specific tip (with ID)
        this.show();
      }
    },
    doDisable: function doDisable(id)
    /*istanbul ignore next: ignore for now */
    {
      // Programmatically disable tooltip or popover
      if (!id || this.getTargetId() === id || this.computedId === id) {
        // Disable all tooltips or popovers (no ID), or this specific tip (with ID)
        this.disable();
      }
    },
    doEnable: function doEnable(id)
    /*istanbul ignore next: ignore for now */
    {
      // Programmatically enable tooltip or popover
      if (!id || this.getTargetId() === id || this.computedId === id) {
        // Enable all tooltips or popovers (no ID), or this specific tip (with ID)
        this.enable();
      }
    },
    click: function click() {
      if (!this.$_enabled || this.dropdownOpen()) {
        /* istanbul ignore next */
        return;
      }

      this.activeTrigger.click = !this.activeTrigger.click;

      if (this.isWithActiveTrigger) {
        this.enter(null);
      } else {
        /* istanbul ignore next */
        this.leave(null);
      }
    },
    toggle: function toggle()
    /* istanbul ignore next */
    {
      // Manual toggle handler
      if (!this.$_enabled || this.dropdownOpen()) {
        /* istanbul ignore next */
        return;
      } // Should we register as an active trigger?
      // this.activeTrigger.manual = !this.activeTrigger.manual


      if (this.localShow) {
        this.leave(null);
      } else {
        this.enter(null);
      }
    },
    enter: function enter() {
      var _this10 = this;

      var evt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      // Opening trigger handler
      // Note: Click events are sent with evt === null
      if (evt) {
        this.activeTrigger[evt.type === 'focusin' ? 'focus' : 'hover'] = true;
      }
      /* istanbul ignore next */


      if (this.localShow || this.$_hoverState === 'in') {
        this.$_hoverState = 'in';
        return;
      }

      this.clearHoverTimeout();
      this.$_hoverState = 'in';

      if (!this.computedDelay.show) {
        this.show();
      } else {
        // Hide any title attribute while enter delay is active
        this.fixTitle();
        this.$_hoverTimeout = setTimeout(function () {
          /* istanbul ignore else */
          if (_this10.$_hoverState === 'in') {
            _this10.show();
          } else if (!_this10.localShow) {
            _this10.restoreTitle();
          }
        }, this.computedDelay.show);
      }
    },
    leave: function leave() {
      var _this11 = this;

      var evt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      // Closing trigger handler
      // Note: Click events are sent with evt === null
      if (evt) {
        this.activeTrigger[evt.type === 'focusout' ? 'focus' : 'hover'] = false;
        /* istanbul ignore next */

        if (evt.type === 'focusout' && arrayIncludes(this.computedTriggers, 'blur')) {
          // Special case for `blur`: we clear out the other triggers
          this.activeTrigger.click = false;
          this.activeTrigger.hover = false;
        }
      }
      /* istanbul ignore next: ignore for now */


      if (this.isWithActiveTrigger) {
        return;
      }

      this.clearHoverTimeout();
      this.$_hoverState = 'out';

      if (!this.computedDelay.hide) {
        this.hide();
      } else {
        this.$_hoverTimeout = setTimeout(function () {
          if (_this11.$_hoverState === 'out') {
            _this11.hide();
          }
        }, this.computedDelay.hide);
      }
    }
  }
});

var NAME$y = 'BTooltip'; // @vue/component

var BTooltip = /*#__PURE__*/Vue.extend({
  name: NAME$y,
  props: {
    title: {
      type: String // default: undefined

    },
    // Added in by BPopover
    // content: {
    //   type: String,
    //   default: undefined
    // },
    target: {
      // String ID of element, or element/component reference
      // Or function that returns one of the above
      type: [String, HTMLElement, SVGElement, Function, Object],
      // default: undefined,
      required: true
    },
    triggers: {
      type: [String, Array],
      default: 'hover focus'
    },
    placement: {
      type: String,
      default: 'top'
    },
    fallbackPlacement: {
      type: [String, Array],
      default: 'flip',
      validator: function validator(value) {
        return isArray(value) && value.every(function (v) {
          return isString(v);
        }) || arrayIncludes(['flip', 'clockwise', 'counterclockwise'], value);
      }
    },
    variant: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$y, 'variant');
      }
    },
    customClass: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$y, 'customClass');
      }
    },
    delay: {
      type: [Number, Object, String],
      default: function _default() {
        return getComponentConfig(NAME$y, 'delay');
      }
    },
    boundary: {
      // String: scrollParent, window, or viewport
      // Element: element reference
      // Object: Vue component
      type: [String, HTMLElement, Object],
      default: function _default() {
        return getComponentConfig(NAME$y, 'boundary');
      }
    },
    boundaryPadding: {
      type: [Number, String],
      default: function _default() {
        return getComponentConfig(NAME$y, 'boundaryPadding');
      }
    },
    offset: {
      type: [Number, String],
      default: 0
    },
    noFade: {
      type: Boolean,
      default: false
    },
    container: {
      // String: HTML ID of container, if null body is used (default)
      // HTMLElement: element reference reference
      // Object: Vue Component
      type: [String, HTMLElement, Object] // default: undefined

    },
    show: {
      type: Boolean,
      default: false
    },
    noninteractive: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    id: {
      // ID to use for tooltip element
      // If not provided on will automatically be generated
      type: String,
      default: null
    }
  },
  data: function data() {
    return {
      localShow: this.show,
      localTitle: '',
      localContent: ''
    };
  },
  computed: {
    templateData: function templateData() {
      // Data that will be passed to the template and popper
      return {
        // We use massaged versions of the title and content props/slots
        title: this.localTitle,
        content: this.localContent,
        // Pass these props as is
        target: this.target,
        triggers: this.triggers,
        placement: this.placement,
        fallbackPlacement: this.fallbackPlacement,
        variant: this.variant,
        customClass: this.customClass,
        container: this.container,
        boundary: this.boundary,
        boundaryPadding: this.boundaryPadding,
        delay: this.delay,
        offset: this.offset,
        noFade: this.noFade,
        interactive: !this.noninteractive,
        disabled: this.disabled,
        id: this.id
      };
    },
    templateTitleContent: function templateTitleContent() {
      // Used to watch for changes to the title and content props
      return {
        title: this.title,
        content: this.content
      };
    }
  },
  watch: {
    show: function show(_show, oldVal) {
      if (_show !== oldVal && _show !== this.localShow && this.$_bv_toolpop) {
        if (_show) {
          this.$_bv_toolpop.show();
        } else {
          // We use `forceHide()` to override any active triggers
          this.$_bv_toolpop.forceHide();
        }
      }
    },
    disabled: function disabled(newVal) {
      if (newVal) {
        this.doDisable();
      } else {
        this.doEnable();
      }
    },
    localShow: function localShow(newVal) {
      // TODO: May need to be done in a `$nextTick()`
      this.$emit('update:show', newVal);
    },
    templateData: function templateData() {
      var _this = this;

      this.$nextTick(function () {
        if (_this.$_bv_toolpop) {
          _this.$_bv_toolpop.updateData(_this.templateData);
        }
      });
    },
    // Watchers for title/content props (prop changes do not trigger the `updated()` hook)
    templateTitleContent: function templateTitleContent() {
      this.$nextTick(this.updateContent);
    }
  },
  created: function created() {
    // Non reactive properties
    this.$_bv_toolpop = null;
  },
  updated: function updated() {
    // Update the `propData` object
    // Done in a `$nextTick()` to ensure slot(s) have updated
    this.$nextTick(this.updateContent);
  },
  beforeDestroy: function beforeDestroy() {
    // Shutdown our local event listeners
    this.$off('open', this.doOpen);
    this.$off('close', this.doClose);
    this.$off('disable', this.doDisable);
    this.$off('enable', this.doEnable); // Destroy the tip instance

    this.$_bv_toolpop && this.$_bv_toolpop.$destroy();
    this.$_bv_toolpop = null;
  },
  mounted: function mounted() {
    var _this2 = this;

    // Instantiate a new BVTooltip instance
    // Done in a `$nextTick()` to ensure DOM has completed rendering
    // so that target can be found
    this.$nextTick(function () {
      // Load the on demand child instance
      var Component = _this2.getComponent(); // Ensure we have initial content


      _this2.updateContent(); // Pass down the scoped style attribute if available


      var scopeId = getScopeId(_this2) || getScopeId(_this2.$parent); // Create the instance

      var $toolpop = _this2.$_bv_toolpop = new Component({
        parent: _this2,
        // Pass down the scoped style ID
        _scopeId: scopeId || undefined
      }); // Set the initial data

      $toolpop.updateData(_this2.templateData); // Set listeners

      $toolpop.$on('show', _this2.onShow);
      $toolpop.$on('shown', _this2.onShown);
      $toolpop.$on('hide', _this2.onHide);
      $toolpop.$on('hidden', _this2.onHidden);
      $toolpop.$on('disabled', _this2.onDisabled);
      $toolpop.$on('enabled', _this2.onEnabled); // Initially disabled?

      if (_this2.disabled) {
        // Initially disabled
        _this2.doDisable();
      } // Listen to open signals from others


      _this2.$on('open', _this2.doOpen); // Listen to close signals from others


      _this2.$on('close', _this2.doClose); // Listen to disable signals from others


      _this2.$on('disable', _this2.doDisable); // Listen to enable signals from others


      _this2.$on('enable', _this2.doEnable); // Initially show tooltip?


      if (_this2.localShow) {
        _this2.$_bv_toolpop && _this2.$_bv_toolpop.show();
      }
    });
  },
  methods: {
    getComponent: function getComponent() {
      // Overridden by BPopover
      return BVTooltip;
    },
    updateContent: function updateContent() {
      // Overridden by BPopover
      // Tooltip: Default slot is `title`
      // Popover: Default slot is `content`, `title` slot is title
      // We pass a scoped slot function reference by default (Vue v2.6x)
      // And pass the title prop as a fallback
      this.setTitle(this.$scopedSlots.default || this.title);
    },
    // Helper methods for `updateContent()`
    setTitle: function setTitle(val) {
      val = isUndefinedOrNull(val) ? '' : val; // We only update the value if it has changed

      if (this.localTitle !== val) {
        this.localTitle = val;
      }
    },
    setContent: function setContent(val) {
      val = isUndefinedOrNull(val) ? '' : val; // We only update the value if it has changed

      if (this.localContent !== val) {
        this.localContent = val;
      }
    },
    // --- Template event handlers ---
    onShow: function onShow(bvEvt) {
      // Placeholder
      this.$emit('show', bvEvt);

      if (bvEvt) {
        this.localShow = !bvEvt.defaultPrevented;
      }
    },
    onShown: function onShown(bvEvt) {
      // Tip is now showing
      this.localShow = true;
      this.$emit('shown', bvEvt);
    },
    onHide: function onHide(bvEvt) {
      this.$emit('hide', bvEvt);
    },
    onHidden: function onHidden(bvEvt) {
      // Tip is no longer showing
      this.$emit('hidden', bvEvt);
      this.localShow = false;
    },
    onDisabled: function onDisabled(bvEvt) {
      // Prevent possible endless loop if user mistakenly
      // fires `disabled` instead of `disable`
      if (bvEvt && bvEvt.type === 'disabled') {
        this.$emit('update:disabled', true);
        this.$emit('disabled', bvEvt);
      }
    },
    onEnabled: function onEnabled(bvEvt) {
      // Prevent possible endless loop if user mistakenly
      // fires `enabled` instead of `enable`
      if (bvEvt && bvEvt.type === 'enabled') {
        this.$emit('update:disabled', false);
        this.$emit('enabled', bvEvt);
      }
    },
    // --- Local event listeners ---
    doOpen: function doOpen() {
      !this.localShow && this.$_bv_toolpop && this.$_bv_toolpop.show();
    },
    doClose: function doClose() {
      this.localShow && this.$_bv_toolpop && this.$_bv_toolpop.hide();
    },
    doDisable: function doDisable() {
      this.$_bv_toolpop && this.$_bv_toolpop.disable();
    },
    doEnable: function doEnable() {
      this.$_bv_toolpop && this.$_bv_toolpop.enable();
    }
  },
  render: function render(h) {
    // Always renders a comment node
    // TODO:
    //   Future: Possibly render a target slot (single root element)
    //   which we can apply the listeners to (pass `this.$el` to BVTooltip)
    return h();
  }
});

var NAME$z = 'BVPopoverTemplate'; // @vue/component

var BVPopoverTemplate = /*#__PURE__*/Vue.extend({
  name: NAME$z,
  extends: BVTooltipTemplate,
  computed: {
    templateType: function templateType() {
      return 'popover';
    }
  },
  methods: {
    renderTemplate: function renderTemplate(h) {
      // Title and content could be a scoped slot function
      var $title = isFunction(this.title) ? this.title({}) : this.title;
      var $content = isFunction(this.content) ? this.content({}) : this.content; // Directive usage only

      var titleDomProps = this.html && !isFunction(this.title) ? {
        innerHTML: this.title
      } : {};
      var contentDomProps = this.html && !isFunction(this.content) ? {
        innerHTML: this.content
      } : {};
      return h('div', {
        staticClass: 'popover b-popover',
        class: this.templateClasses,
        attrs: this.templateAttributes,
        on: this.templateListeners
      }, [h('div', {
        ref: 'arrow',
        staticClass: 'arrow'
      }), isUndefinedOrNull($title) || $title === '' ? h() : h('h3', {
        staticClass: 'popover-header',
        domProps: titleDomProps
      }, [$title]), isUndefinedOrNull($content) || $content === '' ? h() : h('div', {
        staticClass: 'popover-body',
        domProps: contentDomProps
      }, [$content])]);
    }
  }
});

// Popover "Class" (Built as a renderless Vue instance)
var NAME$A = 'BVPopover'; // @vue/component

var BVPopover = /*#__PURE__*/Vue.extend({
  name: NAME$A,
  extends: BVTooltip,
  computed: {
    // Overwrites BVTooltip
    templateType: function templateType() {
      return 'popover';
    }
  },
  methods: {
    getTemplate: function getTemplate() {
      // Overwrites BVTooltip
      return BVPopoverTemplate;
    }
  }
});

var NAME$B = 'BPopover';
var BPopover = /*#__PURE__*/Vue.extend({
  name: NAME$B,
  extends: BTooltip,
  inheritAttrs: false,
  props: {
    title: {
      type: String // default: undefined

    },
    content: {
      type: String // default: undefined

    },
    triggers: {
      type: [String, Array],
      default: 'click'
    },
    placement: {
      type: String,
      default: 'right'
    },
    variant: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$B, 'variant');
      }
    },
    customClass: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$B, 'customClass');
      }
    },
    delay: {
      type: [Number, Object, String],
      default: function _default() {
        return getComponentConfig(NAME$B, 'delay');
      }
    },
    boundary: {
      // String: scrollParent, window, or viewport
      // Element: element reference
      // Object: Vue component
      type: [String, HTMLElement, Object],
      default: function _default() {
        return getComponentConfig(NAME$B, 'boundary');
      }
    },
    boundaryPadding: {
      type: [Number, String],
      default: function _default() {
        return getComponentConfig(NAME$B, 'boundaryPadding');
      }
    }
  },
  methods: {
    getComponent: function getComponent() {
      // Overridden by BPopover
      return BVPopover;
    },
    updateContent: function updateContent() {
      // Tooltip: Default slot is `title`
      // Popover: Default slot is `content`, `title` slot is title
      // We pass a scoped slot function references by default (Vue v2.6x)
      // And pass the title prop as a fallback
      this.setContent(this.$scopedSlots.default || this.content);
      this.setTitle(this.$scopedSlots.title || this.title);
    }
  } // Render function provided by BTooltip

});

var BV_POPOVER = '__BV_Popover__'; // Default trigger

var DefaultTrigger = 'click'; // Valid event triggers

var validTriggers = {
  focus: true,
  hover: true,
  click: true,
  blur: true,
  manual: true
}; // Directive modifier test regular expressions. Pre-compile for performance

var htmlRE = /^html$/i;
var noFadeRE = /^nofade$/i;
var placementRE = /^(auto|top(left|right)?|bottom(left|right)?|left(top|bottom)?|right(top|bottom)?)$/i;
var boundaryRE = /^(window|viewport|scrollParent)$/i;
var delayRE = /^d\d+$/i;
var delayShowRE = /^ds\d+$/i;
var delayHideRE = /^dh\d+$/i;
var offsetRE = /^o-?\d+$/i;
var variantRE = /^v-.+$/i;
var spacesRE = /\s+/; // Build a Popover config based on bindings (if any)
// Arguments and modifiers take precedence over passed value config object

var parseBindings = function parseBindings(bindings, vnode)
/* istanbul ignore next: not easy to test */
{
  // We start out with a basic config
  var NAME = 'BPopover';
  var config = {
    title: undefined,
    content: undefined,
    trigger: '',
    // Default set below if needed
    placement: 'right',
    fallbackPlacement: 'flip',
    container: false,
    // Default of body
    animation: true,
    offset: 0,
    disabled: false,
    id: null,
    html: false,
    delay: getComponentConfig(NAME, 'delay'),
    boundary: String(getComponentConfig(NAME, 'boundary')),
    boundaryPadding: parseInt(getComponentConfig(NAME, 'boundaryPadding'), 10) || 0,
    variant: getComponentConfig(NAME, 'variant'),
    customClass: getComponentConfig(NAME, 'customClass')
  }; // Process `bindings.value`

  if (isString(bindings.value) || isNumber(bindings.value)) {
    // Value is popover content (html optionally supported)
    config.content = bindings.value;
  } else if (isFunction(bindings.value)) {
    // Content generator function
    config.content = bindings.value;
  } else if (isPlainObject(bindings.value)) {
    // Value is config object, so merge
    config = _objectSpread2({}, config, {}, bindings.value);
  } // If argument, assume element ID of container element


  if (bindings.arg) {
    // Element ID specified as arg
    // We must prepend '#' to become a CSS selector
    config.container = "#".concat(bindings.arg);
  } // If title is not provided, try title attribute


  if (isUndefined(config.title)) {
    // Try attribute
    var data = vnode.data || {};
    config.title = data.attrs && !isUndefinedOrNull(data.attrs.title) ? data.attrs.title : undefined;
  } // Normalize delay


  if (!isPlainObject(config.delay)) {
    config.delay = {
      show: parseInt(config.delay, 10) || 0,
      hide: parseInt(config.delay, 10) || 0
    };
  } // Process modifiers


  keys(bindings.modifiers).forEach(function (mod) {
    if (htmlRE.test(mod)) {
      // Title/content allows HTML
      config.html = true;
    } else if (noFadeRE.test(mod)) {
      // No animation
      config.animation = false;
    } else if (placementRE.test(mod)) {
      // Placement of popover
      config.placement = mod;
    } else if (boundaryRE.test(mod)) {
      // Boundary of popover
      mod = mod === 'scrollparent' ? 'scrollParent' : mod;
      config.boundary = mod;
    } else if (delayRE.test(mod)) {
      // Delay value
      var delay = parseInt(mod.slice(1), 10) || 0;
      config.delay.show = delay;
      config.delay.hide = delay;
    } else if (delayShowRE.test(mod)) {
      // Delay show value
      config.delay.show = parseInt(mod.slice(2), 10) || 0;
    } else if (delayHideRE.test(mod)) {
      // Delay hide value
      config.delay.hide = parseInt(mod.slice(2), 10) || 0;
    } else if (offsetRE.test(mod)) {
      // Offset value, negative allowed
      config.offset = parseInt(mod.slice(1), 10) || 0;
    } else if (variantRE.test(mod)) {
      // Variant
      config.variant = mod.slice(2) || null;
    }
  }); // Special handling of event trigger modifiers trigger is
  // a space separated list

  var selectedTriggers = {}; // Parse current config object trigger

  concat(config.trigger || '').filter(identity).join(' ').trim().toLowerCase().split(spacesRE).forEach(function (trigger) {
    if (validTriggers[trigger]) {
      selectedTriggers[trigger] = true;
    }
  }); // Parse modifiers for triggers

  keys(bindings.modifiers).forEach(function (mod) {
    mod = mod.toLowerCase();

    if (validTriggers[mod]) {
      // If modifier is a valid trigger
      selectedTriggers[mod] = true;
    }
  }); // Sanitize triggers

  config.trigger = keys(selectedTriggers).join(' ');

  if (config.trigger === 'blur') {
    // Blur by itself is useless, so convert it to 'focus'
    config.trigger = 'focus';
  }

  if (!config.trigger) {
    // Use default trigger
    config.trigger = DefaultTrigger;
  }

  return config;
}; // Add or update Popover on our element


var applyPopover = function applyPopover(el, bindings, vnode) {
  if (!isBrowser) {
    /* istanbul ignore next */
    return;
  }

  var config = parseBindings(bindings, vnode);

  if (!el[BV_POPOVER]) {
    var $parent = vnode.context;
    el[BV_POPOVER] = new BVPopover({
      parent: $parent,
      // Add the parent's scoped style attribute data
      _scopeId: getScopeId($parent, undefined)
    });
    el[BV_POPOVER].__bv_prev_data__ = {};
    el[BV_POPOVER].$on('show', function ()
    /* istanbul ignore next: for now */
    {
      // Before showing the popover, we update the title
      // and content if they are functions
      var data = {};

      if (isFunction(config.title)) {
        data.title = config.title(el);
      }

      if (isFunction(config.content)) {
        data.content = config.content(el);
      }

      if (keys(data).length > 0) {
        el[BV_POPOVER].updateData(data);
      }
    });
  }

  var data = {
    title: config.title,
    content: config.content,
    triggers: config.trigger,
    placement: config.placement,
    fallbackPlacement: config.fallbackPlacement,
    variant: config.variant,
    customClass: config.customClass,
    container: config.container,
    boundary: config.boundary,
    delay: config.delay,
    offset: config.offset,
    noFade: !config.animation,
    id: config.id,
    disabled: config.disabled,
    html: config.html
  };
  var oldData = el[BV_POPOVER].__bv_prev_data__;
  el[BV_POPOVER].__bv_prev_data__ = data;

  if (!looseEqual(data, oldData)) {
    // We only update the instance if data has changed
    var newData = {
      target: el
    };
    keys(data).forEach(function (prop) {
      // We only pass data properties that have changed
      if (data[prop] !== oldData[prop]) {
        // If title/content is a function, we execute it here
        newData[prop] = (prop === 'title' || prop === 'content') && isFunction(data[prop]) ? data[prop](el) : data[prop];
      }
    });
    el[BV_POPOVER].updateData(newData);
  }
}; // Remove Popover from our element


var removePopover = function removePopover(el) {
  if (el[BV_POPOVER]) {
    el[BV_POPOVER].$destroy();
    el[BV_POPOVER] = null;
  }

  delete el[BV_POPOVER];
}; // Export our directive


var VBPopover = {
  bind: function bind(el, bindings, vnode) {
    applyPopover(el, bindings, vnode);
  },
  // We use `componentUpdated` here instead of `update`, as the former
  // waits until the containing component and children have finished updating
  componentUpdated: function componentUpdated(el, bindings, vnode) {
    // Performed in a `$nextTick()` to prevent endless render/update loops
    vnode.context.$nextTick(function () {
      applyPopover(el, bindings, vnode);
    });
  },
  unbind: function unbind(el) {
    removePopover(el);
  }
};

var VBPopoverPlugin = /*#__PURE__*/pluginFactory({
  directives: {
    VBPopover: VBPopover
  }
});

var PopoverPlugin = /*#__PURE__*/pluginFactory({
  components: {
    BPopover: BPopover
  },
  plugins: {
    VBPopoverPlugin: VBPopoverPlugin
  }
});

var NAME$C = 'BProgressBar'; // @vue/component

var BProgressBar = /*#__PURE__*/Vue.extend({
  name: NAME$C,
  mixins: [normalizeSlotMixin],
  inject: {
    bvProgress: {
      default: function _default()
      /* istanbul ignore next */
      {
        return {};
      }
    }
  },
  props: {
    value: {
      type: [Number, String],
      default: 0
    },
    label: {
      type: String,
      default: null
    },
    labelHtml: {
      type: String
    },
    // $parent (this.bvProgress) prop values may take precedence over the following props
    // Which is why they are defaulted to null
    max: {
      type: [Number, String],
      default: null
    },
    precision: {
      type: [Number, String],
      default: null
    },
    variant: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$C, 'variant');
      }
    },
    striped: {
      type: Boolean,
      default: null
    },
    animated: {
      type: Boolean,
      default: null
    },
    showProgress: {
      type: Boolean,
      default: null
    },
    showValue: {
      type: Boolean,
      default: null
    }
  },
  computed: {
    progressBarClasses: function progressBarClasses() {
      return [this.computedVariant ? "bg-".concat(this.computedVariant) : '', this.computedStriped || this.computedAnimated ? 'progress-bar-striped' : '', this.computedAnimated ? 'progress-bar-animated' : ''];
    },
    progressBarStyles: function progressBarStyles() {
      return {
        width: 100 * (this.computedValue / this.computedMax) + '%'
      };
    },
    computedValue: function computedValue() {
      return toFloat(this.value) || 0;
    },
    computedMax: function computedMax() {
      // Prefer our max over parent setting
      var max = toFloat(this.max);
      return isNaN(max) ? toFloat(this.bvProgress.max) || 100 : max;
    },
    computedPrecision: function computedPrecision() {
      // Prefer our precision over parent setting
      var precision = toInteger(this.precision);
      return isNaN(precision) ? toInteger(this.bvProgress.precision) || 0 : precision;
    },
    computedProgress: function computedProgress() {
      var precision = this.computedPrecision;
      var p = Math.pow(10, precision);
      return toFixed(100 * p * this.computedValue / this.computedMax / p, precision);
    },
    computedVariant: function computedVariant() {
      // Prefer our variant over parent setting
      return this.variant || this.bvProgress.variant;
    },
    computedStriped: function computedStriped() {
      // Prefer our striped over parent setting
      return isBoolean(this.striped) ? this.striped : this.bvProgress.striped || false;
    },
    computedAnimated: function computedAnimated() {
      // Prefer our animated over parent setting
      return isBoolean(this.animated) ? this.animated : this.bvProgress.animated || false;
    },
    computedShowProgress: function computedShowProgress() {
      // Prefer our showProgress over parent setting
      return isBoolean(this.showProgress) ? this.showProgress : this.bvProgress.showProgress || false;
    },
    computedShowValue: function computedShowValue() {
      // Prefer our showValue over parent setting
      return isBoolean(this.showValue) ? this.showValue : this.bvProgress.showValue || false;
    }
  },
  render: function render(h) {
    var childNodes = h();

    if (this.hasNormalizedSlot('default')) {
      childNodes = this.normalizeSlot('default');
    } else if (this.label || this.labelHtml) {
      childNodes = h('span', {
        domProps: htmlOrText(this.labelHtml, this.label)
      });
    } else if (this.computedShowProgress) {
      childNodes = this.computedProgress;
    } else if (this.computedShowValue) {
      childNodes = toFixed(this.computedValue, this.computedPrecision);
    }

    return h('div', {
      staticClass: 'progress-bar',
      class: this.progressBarClasses,
      style: this.progressBarStyles,
      attrs: {
        role: 'progressbar',
        'aria-valuemin': '0',
        'aria-valuemax': toString$1(this.computedMax),
        'aria-valuenow': toFixed(this.computedValue, this.computedPrecision)
      }
    }, [childNodes]);
  }
});

var NAME$D = 'BProgress'; // @vue/component

var BProgress = /*#__PURE__*/Vue.extend({
  name: NAME$D,
  mixins: [normalizeSlotMixin],
  provide: function provide() {
    return {
      bvProgress: this
    };
  },
  props: {
    // These props can be inherited via the child b-progress-bar(s)
    variant: {
      type: String,
      default: function _default() {
        return getComponentConfig(NAME$D, 'variant');
      }
    },
    striped: {
      type: Boolean,
      default: false
    },
    animated: {
      type: Boolean,
      default: false
    },
    height: {
      type: String,
      default: null
    },
    precision: {
      type: [Number, String],
      default: 0
    },
    showProgress: {
      type: Boolean,
      default: false
    },
    showValue: {
      type: Boolean,
      default: false
    },
    max: {
      type: [Number, String],
      default: 100
    },
    // This prop is not inherited by child b-progress-bar(s)
    value: {
      type: [Number, String],
      default: 0
    }
  },
  computed: {
    progressHeight: function progressHeight() {
      return {
        height: this.height || null
      };
    }
  },
  render: function render(h) {
    var childNodes = this.normalizeSlot('default');

    if (!childNodes) {
      childNodes = h(BProgressBar, {
        props: {
          value: this.value,
          max: this.max,
          precision: this.precision,
          variant: this.variant,
          animated: this.animated,
          striped: this.striped,
          showProgress: this.showProgress,
          showValue: this.showValue
        }
      });
    }

    return h('div', {
      class: ['progress'],
      style: this.progressHeight
    }, [childNodes]);
  }
});

var ProgressPlugin = /*#__PURE__*/pluginFactory({
  components: {
    BProgress: BProgress,
    BProgressBar: BProgressBar
  }
});

var SpinnerPlugin = /*#__PURE__*/pluginFactory({
  components: {
    BSpinner: BSpinner
  }
});

// Mixin to determine if an event listener has been registered

var hasListenerMixin = {
  methods: {
    hasListener: function hasListener(name) {
      // Only includes listeners registerd via `v-on:name`
      var $listeners = this.$listeners || {}; // Includes `v-on:name` and `this.$on('name')` registerd listeners
      // Note this property is not part of the public Vue API, but it is
      // the only way to determine if a listener was added via `vm.$on`

      var $events = this._events || {}; // Registered listeners in `this._events` are always an array,
      // but might be zero length

      return !isUndefined($listeners[name]) || isArray($events[name]) && $events[name].length > 0;
    }
  }
};

/**
 * Converts a string, including strings in camelCase or snake_case, into Start Case (a variant
 * of Title Case where all words start with a capital letter), it keeps original single quote
 * and hyphen in the word.
 *
 * Copyright (c) 2017 Compass (MIT)
 * https://github.com/UrbanCompass/to-start-case
 * @author Zhuoyuan Zhang <https://github.com/drawyan>
 * @author Wei Wang <https://github.com/onlywei>
 *
 *
 *   'management_companies' to 'Management Companies'
 *   'managementCompanies' to 'Management Companies'
 *   `hell's kitchen` to `Hell's Kitchen`
 *   `co-op` to `Co-op`
 *
 * @param {String} str
 * @returns {String}
 */
// Precompile regular expressions for performance
var RX_UNDERSCORE = /_/g;
var RX_LOWER_UPPER = /([a-z])([A-Z])/g;
var RX_START_SPACE_WORD = /(\s|^)(\w)/g;

var startCase = function startCase(str) {
  return str.replace(RX_UNDERSCORE, ' ').replace(RX_LOWER_UPPER, function (str, $1, $2) {
    return $1 + ' ' + $2;
  }).replace(RX_START_SPACE_WORD, function (str, $1, $2) {
    return $1 + $2.toUpperCase();
  });
};

// Constants used by table helpers
// Object of item keys that should be ignored for headers and
// stringification and filter events
var IGNORED_FIELD_KEYS = {
  _rowVariant: true,
  _cellVariants: true,
  _showDetails: true
}; // Filter CSS selector for click/dblclick/etc. events
// If any of these selectors match the clicked element, we ignore the event

var EVENT_FILTER = ['a', 'a *', // Include content inside links
'button', 'button *', // Include content inside buttons
'input:not(.disabled):not([disabled])', 'select:not(.disabled):not([disabled])', 'textarea:not(.disabled):not([disabled])', '[role="link"]', '[role="link"] *', '[role="button"]', '[role="button"] *', '[tabindex]:not(.disabled):not([disabled])'].join(',');

var processField = function processField(key, value) {
  var field = null;

  if (isString(value)) {
    // Label shortcut
    field = {
      key: key,
      label: value
    };
  } else if (isFunction(value)) {
    // Formatter shortcut
    field = {
      key: key,
      formatter: value
    };
  } else if (isObject(value)) {
    field = clone(value);
    field.key = field.key || key;
  } else if (value !== false) {
    // Fallback to just key

    /* istanbul ignore next */
    field = {
      key: key
    };
  }

  return field;
}; // We normalize fields into an array of objects
// [ { key:..., label:..., ...}, {...}, ..., {..}]


var normalizeFields = function normalizeFields(origFields, items) {
  var fields = [];

  if (isArray(origFields)) {
    // Normalize array Form
    origFields.filter(identity).forEach(function (f) {
      if (isString(f)) {
        fields.push({
          key: f,
          label: startCase(f)
        });
      } else if (isObject(f) && f.key && isString(f.key)) {
        // Full object definition. We use assign so that we don't mutate the original
        fields.push(clone(f));
      } else if (isObject(f) && keys(f).length === 1) {
        // Shortcut object (i.e. { 'foo_bar': 'This is Foo Bar' }
        var key = keys(f)[0];
        var field = processField(key, f[key]);

        if (field) {
          fields.push(field);
        }
      }
    });
  } // If no field provided, take a sample from first record (if exits)


  if (fields.length === 0 && isArray(items) && items.length > 0) {
    var sample = items[0];
    keys(sample).forEach(function (k) {
      if (!IGNORED_FIELD_KEYS[k]) {
        fields.push({
          key: k,
          label: startCase(k)
        });
      }
    });
  } // Ensure we have a unique array of fields and that they have String labels


  var memo = {};
  return fields.filter(function (f) {
    if (!memo[f.key]) {
      memo[f.key] = true;
      f.label = isString(f.label) ? f.label : startCase(f.key);
      return true;
    }

    return false;
  });
};

var itemsMixin = {
  props: {
    items: {
      // Provider mixin adds in `Function` type
      type: Array,
      default: function _default()
      /* istanbul ignore next */
      {
        return [];
      }
    },
    fields: {
      type: Array,
      default: null
    },
    primaryKey: {
      // Primary key for record
      // If provided the value in each row must be unique!
      type: String,
      default: null
    },
    value: {
      // `v-model` for retrieving the current displayed rows
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      // Our local copy of the items
      // Must be an array
      localItems: isArray(this.items) ? this.items.slice() : []
    };
  },
  computed: {
    computedFields: function computedFields() {
      // We normalize fields into an array of objects
      // `[ { key:..., label:..., ...}, {...}, ..., {..}]`
      return normalizeFields(this.fields, this.localItems);
    },
    computedFieldsObj: function computedFieldsObj() {
      // Fields as a simple lookup hash object
      // Mainly for formatter lookup and use in `scopedSlots` for convenience
      // If the field has a formatter, it normalizes formatter to a
      // function ref or `undefined` if no formatter
      var parent = this.$parent;
      return this.computedFields.reduce(function (obj, f) {
        // We use object spread here so we don't mutate the original field object
        obj[f.key] = clone(f);

        if (f.formatter) {
          // Normalize formatter to a function ref or `undefined`
          var formatter = f.formatter;

          if (isString(formatter) && isFunction(parent[formatter])) {
            formatter = parent[formatter];
          } else if (!isFunction(formatter)) {
            /* istanbul ignore next */
            formatter = undefined;
          } // Return formatter function or `undefined` if none


          obj[f.key].formatter = formatter;
        }

        return obj;
      }, {});
    },
    computedItems: function computedItems() {
      // Fallback if various mixins not provided
      return (this.paginatedItems || this.sortedItems || this.filteredItems || this.localItems || []).slice();
    },
    context: function context() {
      // Current state of sorting, filtering and pagination props/values
      return {
        filter: this.localFilter,
        sortBy: this.localSortBy,
        sortDesc: this.localSortDesc,
        perPage: parseInt(this.perPage, 10) || 0,
        currentPage: parseInt(this.currentPage, 10) || 1,
        apiUrl: this.apiUrl
      };
    }
  },
  watch: {
    items: function items(newItems) {
      /* istanbul ignore else */
      if (isArray(newItems)) {
        // Set `localItems`/`filteredItems` to a copy of the provided array
        this.localItems = newItems.slice();
      } else if (isUndefinedOrNull(newItems)) {
        /* istanbul ignore next */
        this.localItems = [];
      }
    },
    // Watch for changes on `computedItems` and update the `v-model`
    computedItems: function computedItems(newVal) {
      this.$emit('input', newVal);
    },
    // Watch for context changes
    context: function context(newVal, oldVal) {
      // Emit context information for external paging/filtering/sorting handling
      if (!looseEqual(newVal, oldVal)) {
        this.$emit('context-changed', newVal);
      }
    }
  },
  mounted: function mounted() {
    // Initially update the `v-model` of displayed items
    this.$emit('input', this.computedItems);
  },
  methods: {
    // Method to get the formatter method for a given field key
    getFieldFormatter: function getFieldFormatter(key) {
      var field = this.computedFieldsObj[key]; // `this.computedFieldsObj` has pre-normalized the formatter to a
      // function ref if present, otherwise `undefined`

      return field ? field.formatter : undefined;
    }
  }
};

// Mixin for providing stacked tables
var stackedMixin = {
  props: {
    stacked: {
      type: [Boolean, String],
      default: false
    }
  },
  computed: {
    isStacked: function isStacked() {
      // `true` when always stacked, or returns breakpoint specified
      return this.stacked === '' ? true : this.stacked;
    },
    isStackedAlways: function isStackedAlways() {
      return this.isStacked === true;
    },
    stackedTableClasses: function stackedTableClasses() {
      return _defineProperty({
        'b-table-stacked': this.isStackedAlways
      }, "b-table-stacked-".concat(this.stacked), !this.isStackedAlways && this.isStacked);
    }
  }
};

var sanitizeRow = function sanitizeRow(row, ignoreFields, includeFields) {
  var fieldsObj = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  return keys(row).reduce(function (obj, key) {
    // Ignore special fields that start with `_`
    // Ignore fields in the `ignoreFields` array
    // Include only fields in the `includeFields` array
    if (!IGNORED_FIELD_KEYS[key] && !(ignoreFields && ignoreFields.length > 0 && arrayIncludes(ignoreFields, key)) && !(includeFields && includeFields.length > 0 && !arrayIncludes(includeFields, key))) {
      var f = fieldsObj[key] || {};
      var val = row[key]; // `f.filterByFormatted` will either be a function or boolean
      // `f.formater` will have already been noramlized into a function ref

      var filterByFormatted = f.filterByFormatted;
      var formatter = isFunction(filterByFormatted) ? filterByFormatted : filterByFormatted ? f.formatter : null;
      obj[key] = isFunction(formatter) ? formatter(val, key, row) : val;
    }

    return obj;
  }, {});
};

// SSR safe deterministic way (keys are sorted before stringification)
//
//   ex:
//     { b: 3, c: { z: 'zzz', d: null, e: 2 }, d: [10, 12, 11], a: 'one' }
//   becomes
//     'one 3 2 zzz 10 12 11'
//
// Primitives (numbers/strings) are returned as-is
// Null and undefined values are filtered out
// Dates are converted to their native string format

var stringifyObjectValues = function stringifyObjectValues(val) {
  if (isUndefinedOrNull(val)) {
    /* istanbul ignore next */
    return '';
  } // Arrays are also object, and keys just returns the array indexes
  // Date objects we convert to strings


  if (isObject(val) && !isDate(val)) {
    return keys(val).sort() // Sort to prevent SSR issues on pre-rendered sorted tables
    .filter(function (v) {
      return !isUndefinedOrNull(v);
    }) // Ignore undefined/null values
    .map(function (k) {
      return stringifyObjectValues(val[k]);
    }).join(' ');
  }

  return toString$1(val);
};

// TODO: Add option to stringify `scopedSlot` items

var stringifyRecordValues = function stringifyRecordValues(row, ignoreFields, includeFields, fieldsObj) {
  return isObject(row) ? stringifyObjectValues(sanitizeRow(row, ignoreFields, includeFields, fieldsObj)) : '';
};

var DEBOUNCE_DEPRECATED_MSG = 'Prop "filter-debounce" is deprecated. Use the debounce feature of "<b-form-input>" instead.';
var RX_SPACES$1 = /[\s\uFEFF\xA0]+/g;
var filteringMixin = {
  props: {
    filter: {
      type: [String, RegExp, Object, Array],
      default: null
    },
    filterFunction: {
      type: Function,
      default: null
    },
    filterIgnoredFields: {
      type: Array // default: undefined

    },
    filterIncludedFields: {
      type: Array // default: undefined

    },
    filterDebounce: {
      type: [Number, String],
      deprecated: DEBOUNCE_DEPRECATED_MSG,
      default: 0,
      validator: function validator(val) {
        return /^\d+/.test(String(val));
      }
    }
  },
  data: function data() {
    return {
      // Flag for displaying which empty slot to show and some event triggering
      isFiltered: false,
      // Where we store the copy of the filter criteria after debouncing
      // We pre-set it with the sanitized filter value
      localFilter: this.filterSanitize(this.filter)
    };
  },
  computed: {
    computedFilterIgnored: function computedFilterIgnored() {
      return this.filterIgnoredFields ? concat(this.filterIgnoredFields).filter(Boolean) : null;
    },
    computedFilterIncluded: function computedFilterIncluded() {
      return this.filterIncludedFields ? concat(this.filterIncludedFields).filter(Boolean) : null;
    },
    computedFilterDebounce: function computedFilterDebounce() {
      var ms = toInteger(this.filterDebounce) || 0;
      /* istanbul ignore next */

      if (ms > 0) {
        warn(DEBOUNCE_DEPRECATED_MSG, 'BTable');
      }

      return ms;
    },
    localFiltering: function localFiltering() {
      return this.hasProvider ? !!this.noProviderFiltering : true;
    },
    // For watching changes to `filteredItems` vs `localItems`
    filteredCheck: function filteredCheck() {
      return {
        filteredItems: this.filteredItems,
        localItems: this.localItems,
        localFilter: this.localFilter
      };
    },
    // Sanitized/normalize filter-function prop
    localFilterFn: function localFilterFn() {
      // Return `null` to signal to use internal filter function
      return isFunction(this.filterFunction) ? this.filterFunction : null;
    },
    // Returns the records in `localItems` that match the filter criteria
    // Returns the original `localItems` array if not sorting
    filteredItems: function filteredItems() {
      var items = this.localItems || []; // Note the criteria is debounced and sanitized

      var criteria = this.localFilter; // Resolve the filtering function, when requested
      // We prefer the provided filtering function and fallback to the internal one
      // When no filtering criteria is specified the filtering factories will return `null`

      var filterFn = this.localFiltering ? this.filterFnFactory(this.localFilterFn, criteria) || this.defaultFilterFnFactory(criteria) : null; // We only do local filtering when requested and there are records to filter

      return filterFn && items.length > 0 ? items.filter(filterFn) : items;
    }
  },
  watch: {
    // Watch for debounce being set to 0
    computedFilterDebounce: function computedFilterDebounce(newVal) {
      if (!newVal && this.$_filterTimer) {
        clearTimeout(this.$_filterTimer);
        this.$_filterTimer = null;
        this.localFilter = this.filterSanitize(this.filter);
      }
    },
    // Watch for changes to the filter criteria, and debounce if necessary
    filter: {
      // We need a deep watcher in case the user passes
      // an object when using `filter-function`
      deep: true,
      handler: function handler(newCriteria) {
        var _this = this;

        var timeout = this.computedFilterDebounce;
        clearTimeout(this.$_filterTimer);
        this.$_filterTimer = null;

        if (timeout && timeout > 0) {
          // If we have a debounce time, delay the update of `localFilter`
          this.$_filterTimer = setTimeout(function () {
            _this.localFilter = _this.filterSanitize(newCriteria);
          }, timeout);
        } else {
          // Otherwise, immediately update `localFilter` with `newFilter` value
          this.localFilter = this.filterSanitize(newCriteria);
        }
      }
    },
    // Watch for changes to the filter criteria and filtered items vs `localItems`
    // Set visual state and emit events as required
    filteredCheck: function filteredCheck(_ref) {
      var filteredItems = _ref.filteredItems,
          localFilter = _ref.localFilter;
      // Determine if the dataset is filtered or not
      var isFiltered = false;

      if (!localFilter) {
        // If filter criteria is falsey
        isFiltered = false;
      } else if (looseEqual(localFilter, []) || looseEqual(localFilter, {})) {
        // If filter criteria is an empty array or object
        isFiltered = false;
      } else if (localFilter) {
        // If filter criteria is truthy
        isFiltered = true;
      }

      if (isFiltered) {
        this.$emit('filtered', filteredItems, filteredItems.length);
      }

      this.isFiltered = isFiltered;
    },
    isFiltered: function isFiltered(newVal, oldVal) {
      if (newVal === false && oldVal === true) {
        // We need to emit a filtered event if isFiltered transitions from true to
        // false so that users can update their pagination controls.
        this.$emit('filtered', this.localItems, this.localItems.length);
      }
    }
  },
  created: function created() {
    var _this2 = this;

    // Create non-reactive prop where we store the debounce timer id
    this.$_filterTimer = null; // If filter is "pre-set", set the criteria
    // This will trigger any watchers/dependents
    // this.localFilter = this.filterSanitize(this.filter)
    // Set the initial filtered state in a `$nextTick()` so that
    // we trigger a filtered event if needed

    this.$nextTick(function () {
      _this2.isFiltered = Boolean(_this2.localFilter);
    });
  },
  beforeDestroy: function beforeDestroy()
  /* istanbul ignore next */
  {
    clearTimeout(this.$_filterTimer);
    this.$_filterTimer = null;
  },
  methods: {
    filterSanitize: function filterSanitize(criteria) {
      // Sanitizes filter criteria based on internal or external filtering
      if (this.localFiltering && !this.localFilterFn && !(isString(criteria) || isRegExp(criteria))) {
        // If using internal filter function, which only accepts string or RegExp,
        // return '' to signify no filter
        return '';
      } // Could be a string, object or array, as needed by external filter function
      // We use `cloneDeep` to ensure we have a new copy of an object or array
      // without Vue's reactive observers


      return cloneDeep(criteria);
    },
    // Filter Function factories
    filterFnFactory: function filterFnFactory(filterFn, criteria) {
      // Wrapper factory for external filter functions
      // Wrap the provided filter-function and return a new function
      // Returns `null` if no filter-function defined or if criteria is falsey
      // Rather than directly grabbing `this.computedLocalFilterFn` or `this.filterFunction`
      // we have it passed, so that the caller computed prop will be reactive to changes
      // in the original filter-function (as this routine is a method)
      if (!filterFn || !isFunction(filterFn) || !criteria || looseEqual(criteria, []) || looseEqual(criteria, {})) {
        return null;
      } // Build the wrapped filter test function, passing the criteria to the provided function


      var fn = function fn(item) {
        // Generated function returns true if the criteria matches part
        // of the serialized data, otherwise false
        return filterFn(item, criteria);
      }; // Return the wrapped function


      return fn;
    },
    defaultFilterFnFactory: function defaultFilterFnFactory(criteria) {
      var _this3 = this;

      // Generates the default filter function, using the given filter criteria
      // Returns `null` if no criteria or criteria format not supported
      if (!criteria || !(isString(criteria) || isRegExp(criteria))) {
        // Built in filter can only support strings or RegExp criteria (at the moment)
        return null;
      } // Build the RegExp needed for filtering


      var regExp = criteria;

      if (isString(regExp)) {
        // Escape special RegExp characters in the string and convert contiguous
        // whitespace to \s+ matches
        var pattern = escapeRegExp(criteria).replace(RX_SPACES$1, '\\s+'); // Build the RegExp (no need for global flag, as we only need
        // to find the value once in the string)

        regExp = new RegExp(".*".concat(pattern, ".*"), 'i');
      } // Generate the wrapped filter test function to use


      var fn = function fn(item) {
        // This searches all row values (and sub property values) in the entire (excluding
        // special `_` prefixed keys), because we convert the record to a space-separated
        // string containing all the value properties (recursively), even ones that are
        // not visible (not specified in this.fields)
        // Users can ignore filtering on specific fields, or on only certain fields,
        // and can optionall specify searching results of fields with formatter
        //
        // TODO: Enable searching on scoped slots (optional, as it will be SLOW)
        //
        // Generated function returns true if the criteria matches part of
        // the serialized data, otherwise false
        //
        // We set `lastIndex = 0` on the `RegExp` in case someone specifies the `/g` global flag
        regExp.lastIndex = 0;
        return regExp.test(stringifyRecordValues(item, _this3.computedFilterIgnored, _this3.computedFilterIncluded, _this3.computedFieldsObj));
      }; // Return the generated function


      return fn;
    }
  }
};

/*
 * Consistent and stable sort function across JavaScript platforms
 *
 * Inconsistent sorts can cause SSR problems between client and server
 * such as in <b-table> if sortBy is applied to the data on server side render.
 * Chrome and V8 native sorts are inconsistent/unstable
 *
 * This function uses native sort with fallback to index compare when the a and b
 * compare returns 0
 *
 * Algorithm based on:
 * https://stackoverflow.com/questions/1427608/fast-stable-sorting-algorithm-implementation-in-javascript/45422645#45422645
 *
 * @param {array} array to sort
 * @param {function} sort compare function
 * @return {array}
 */
var stableSort = function stableSort(array, compareFn) {
  // Using `.bind(compareFn)` on the wrapped anonymous function improves
  // performance by avoiding the function call setup. We don't use an arrow
  // function here as it binds `this` to the `stableSort` context rather than
  // the `compareFn` context, which wouldn't give us the performance increase.
  return array.map(function (a, index) {
    return [index, a];
  }).sort(function (a, b) {
    return this(a[1], b[1]) || a[0] - b[0];
  }.bind(compareFn)).map(function (e) {
    return e[1];
  });
};

//
// TODO: Add option to sort by multiple columns (tri-state per column,
//       plus order of columns in sort)  where sortBy could be an array
//       of objects `[ {key: 'foo', sortDir: 'asc'}, {key:'bar', sortDir: 'desc'} ...]`
//       or an array of arrays `[ ['foo','asc'], ['bar','desc'] ]`
//       Multisort will most likely be handled in mixin-sort.js by
//       calling this method for each sortBy

var defaultSortCompare = function defaultSortCompare(a, b, sortBy, sortDesc, formatter, localeOpts, locale, nullLast) {
  var aa = get(a, sortBy, null);
  var bb = get(b, sortBy, null);

  if (isFunction(formatter)) {
    aa = formatter(aa, sortBy, a);
    bb = formatter(bb, sortBy, b);
  }

  aa = isUndefinedOrNull(aa) ? '' : aa;
  bb = isUndefinedOrNull(bb) ? '' : bb;

  if (isDate(aa) && isDate(bb) || isNumber(aa) && isNumber(bb)) {
    // Special case for comparing dates and numbers
    // Internally dates are compared via their epoch number values
    return aa < bb ? -1 : aa > bb ? 1 : 0;
  } else if (nullLast && aa === '' && bb !== '') {
    // Special case when sorting null/undefined/empty string last
    return 1;
  } else if (nullLast && aa !== '' && bb === '') {
    // Special case when sorting null/undefined/empty string last
    return -1;
  } // Do localized string comparison


  return stringifyObjectValues(aa).localeCompare(stringifyObjectValues(bb), locale, localeOpts);
};

var sortingMixin = {
  props: {
    sortBy: {
      type: String,
      default: ''
    },
    sortDesc: {
      // TODO: Make this tri-state: true, false, null
      type: Boolean,
      default: false
    },
    sortDirection: {
      // This prop is named incorrectly
      // It should be `initialSortDirection` as it is a bit misleading
      // (not to mention it screws up the ARIA label on the headers)
      type: String,
      default: 'asc',
      validator: function validator(direction) {
        return arrayIncludes(['asc', 'desc', 'last'], direction);
      }
    },
    sortCompare: {
      type: Function,
      default: null
    },
    sortCompareOptions: {
      // Supported localCompare options, see `options` section of:
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
      type: Object,
      default: function _default() {
        return {
          numeric: true
        };
      }
    },
    sortCompareLocale: {
      // String: locale code
      // Array: array of Locale strings
      type: [String, Array] // default: undefined

    },
    sortNullLast: {
      // Sort null and undefined to appear last
      type: Boolean,
      default: false
    },
    noSortReset: {
      // Another prop that should have had a better name.
      // It should be noSortClear (on non-sortable headers).
      // We will need to make sure the documentation is clear on what
      // this prop does (as well as in the code for future reference)
      type: Boolean,
      default: false
    },
    labelSortAsc: {
      type: String,
      default: 'Click to sort Ascending'
    },
    labelSortDesc: {
      type: String,
      default: 'Click to sort Descending'
    },
    labelSortClear: {
      type: String,
      default: 'Click to clear sorting'
    },
    noLocalSorting: {
      type: Boolean,
      default: false
    },
    noFooterSorting: {
      type: Boolean,
      default: false
    },
    sortIconLeft: {
      // Place the sorting icon on the left of the header cells
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      localSortBy: this.sortBy || '',
      localSortDesc: this.sortDesc || false
    };
  },
  computed: {
    localSorting: function localSorting() {
      return this.hasProvider ? !!this.noProviderSorting : !this.noLocalSorting;
    },
    isSortable: function isSortable() {
      return this.computedFields.some(function (f) {
        return f.sortable;
      });
    },
    sortedItems: function sortedItems() {
      // Sorts the filtered items and returns a new array of the sorted items
      // or the original items array if not sorted.
      var items = (this.filteredItems || this.localItems || []).slice();
      var sortBy = this.localSortBy;
      var sortDesc = this.localSortDesc;
      var sortCompare = this.sortCompare;
      var localSorting = this.localSorting;

      var sortOptions = _objectSpread2({}, this.sortCompareOptions, {
        usage: 'sort'
      });

      var sortLocale = this.sortCompareLocale || undefined;
      var nullLast = this.sortNullLast;

      if (sortBy && localSorting) {
        var field = this.computedFieldsObj[sortBy] || {};
        var sortByFormatted = field.sortByFormatted;
        var formatter = isFunction(sortByFormatted) ? sortByFormatted : sortByFormatted ? this.getFieldFormatter(sortBy) : undefined; // `stableSort` returns a new array, and leaves the original array intact

        return stableSort(items, function (a, b) {
          var result = null;

          if (isFunction(sortCompare)) {
            // Call user provided sortCompare routine
            result = sortCompare(a, b, sortBy, sortDesc, formatter, sortOptions, sortLocale);
          }

          if (isUndefinedOrNull(result) || result === false) {
            // Fallback to built-in defaultSortCompare if sortCompare
            // is not defined or returns null/false
            result = defaultSortCompare(a, b, sortBy, sortDesc, formatter, sortOptions, sortLocale, nullLast);
          } // Negate result if sorting in descending order


          return (result || 0) * (sortDesc ? -1 : 1);
        });
      }

      return items;
    }
  },
  watch: {
    isSortable: function isSortable(newVal)
    /* istanbul ignore next: pain in the butt to test */
    {
      if (newVal) {
        if (this.isSortable) {
          this.$on('head-clicked', this.handleSort);
        }
      } else {
        this.$off('head-clicked', this.handleSort);
      }
    },
    sortDesc: function sortDesc(newVal) {
      if (newVal === this.localSortDesc) {
        /* istanbul ignore next */
        return;
      }

      this.localSortDesc = newVal || false;
    },
    sortBy: function sortBy(newVal) {
      if (newVal === this.localSortBy) {
        /* istanbul ignore next */
        return;
      }

      this.localSortBy = newVal || '';
    },
    // Update .sync props
    localSortDesc: function localSortDesc(newVal, oldVal) {
      // Emit update to sort-desc.sync
      if (newVal !== oldVal) {
        this.$emit('update:sortDesc', newVal);
      }
    },
    localSortBy: function localSortBy(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.$emit('update:sortBy', newVal);
      }
    }
  },
  created: function created() {
    if (this.isSortable) {
      this.$on('head-clicked', this.handleSort);
    }
  },
  methods: {
    // Handlers
    // Need to move from thead-mixin
    handleSort: function handleSort(key, field, evt, isFoot) {
      var _this = this;

      if (!this.isSortable) {
        /* istanbul ignore next */
        return;
      }

      if (isFoot && this.noFooterSorting) {
        return;
      } // TODO: make this tri-state sorting
      // cycle desc => asc => none => desc => ...


      var sortChanged = false;

      var toggleLocalSortDesc = function toggleLocalSortDesc() {
        var sortDirection = field.sortDirection || _this.sortDirection;

        if (sortDirection === 'asc') {
          _this.localSortDesc = false;
        } else if (sortDirection === 'desc') {
          _this.localSortDesc = true;
        }
      };

      if (field.sortable) {
        if (key === this.localSortBy) {
          // Change sorting direction on current column
          this.localSortDesc = !this.localSortDesc;
        } else {
          // Start sorting this column ascending
          this.localSortBy = key; // this.localSortDesc = false

          toggleLocalSortDesc();
        }

        sortChanged = true;
      } else if (this.localSortBy && !this.noSortReset) {
        this.localSortBy = '';
        toggleLocalSortDesc();
        sortChanged = true;
      }

      if (sortChanged) {
        // Sorting parameters changed
        this.$emit('sort-changed', this.context);
      }
    },
    // methods to compute classes and attrs for thead>th cells
    sortTheadThClasses: function sortTheadThClasses(key, field, isFoot) {
      return {
        // If sortable and sortIconLeft are true, then place sort icon on the left
        'b-table-sort-icon-left': field.sortable && this.sortIconLeft && !(isFoot && this.noFooterSorting)
      };
    },
    sortTheadThAttrs: function sortTheadThAttrs(key, field, isFoot) {
      if (!this.isSortable || isFoot && this.noFooterSorting) {
        // No attributes if not a sortable table
        return {};
      }

      var sortable = field.sortable; // Assemble the aria-sort attribute value

      var ariaSort = sortable && this.localSortBy === key ? this.localSortDesc ? 'descending' : 'ascending' : sortable ? 'none' : null; // Return the attribute

      return {
        'aria-sort': ariaSort
      };
    },
    sortTheadThLabel: function sortTheadThLabel(key, field, isFoot) {
      // A label to be placed in an `.sr-only` element in the header cell
      if (!this.isSortable || isFoot && this.noFooterSorting) {
        // No label if not a sortable table
        return null;
      }

      var sortable = field.sortable; // The correctness of these labels is very important for screen-reader users.

      var labelSorting = '';

      if (sortable) {
        if (this.localSortBy === key) {
          // currently sorted sortable column.
          labelSorting = this.localSortDesc ? this.labelSortAsc : this.labelSortDesc;
        } else {
          // Not currently sorted sortable column.
          // Not using nested ternary's here for clarity/readability
          // Default for ariaLabel
          labelSorting = this.localSortDesc ? this.labelSortDesc : this.labelSortAsc; // Handle sortDirection setting

          var sortDirection = this.sortDirection || field.sortDirection;

          if (sortDirection === 'asc') {
            labelSorting = this.labelSortAsc;
          } else if (sortDirection === 'desc') {
            labelSorting = this.labelSortDesc;
          }
        }
      } else if (!this.noSortReset) {
        // Non sortable column
        labelSorting = this.localSortBy ? this.labelSortClear : '';
      } // Return the sr-only sort label or null if no label


      return trim(labelSorting) || null;
    }
  }
};

var paginationMixin$1 = {
  props: {
    perPage: {
      type: [Number, String],
      default: 0
    },
    currentPage: {
      type: [Number, String],
      default: 1
    }
  },
  computed: {
    localPaging: function localPaging() {
      return this.hasProvider ? !!this.noProviderPaging : true;
    },
    paginatedItems: function paginatedItems() {
      var items = this.sortedItems || this.filteredItems || this.localItems || [];
      var currentPage = Math.max(parseInt(this.currentPage, 10) || 1, 1);
      var perPage = Math.max(parseInt(this.perPage, 10) || 0, 0); // Apply local pagination

      if (this.localPaging && !!perPage) {
        // Grab the current page of data (which may be past filtered items limit)
        items = items.slice((currentPage - 1) * perPage, currentPage * perPage);
      } // Return the items to display in the table


      return items;
    }
  }
};

var captionMixin = {
  props: {
    // `caption-top` is part of table-redere mixin (styling)
    // captionTop: {
    //   type: Boolean,
    //   default: false
    // },
    caption: {
      type: String,
      default: null
    },
    captionHtml: {
      type: String
    }
  },
  computed: {
    captionId: function captionId() {
      // Even though `this.safeId` looks like a method, it is a computed prop
      // that returns a new function if the underlying ID changes
      return this.isStacked ? this.safeId('_caption_') : null;
    }
  },
  methods: {
    renderCaption: function renderCaption() {
      var h = this.$createElement; // Build the caption

      var $captionSlot = this.normalizeSlot('table-caption');
      var $caption = h();

      if ($captionSlot || this.caption || this.captionHtml) {
        var data = {
          key: 'caption',
          attrs: {
            id: this.captionId
          }
        };

        if (!$captionSlot) {
          data.domProps = htmlOrText(this.captionHtml, this.caption);
        }

        $caption = h('caption', data, [$captionSlot]);
      }

      return $caption;
    }
  }
};

var colgroupMixin = {
  methods: {
    renderColgroup: function renderColgroup() {
      var h = this.$createElement;
      var fields = this.computedFields;
      var $colgroup = h();

      if (this.hasNormalizedSlot('table-colgroup')) {
        $colgroup = h('colgroup', {
          key: 'colgroup'
        }, [this.normalizeSlot('table-colgroup', {
          columns: fields.length,
          fields: fields
        })]);
      }

      return $colgroup;
    }
  }
};

var TABLE_TAG_NAMES = ['TD', 'TH', 'TR']; // Returns `true` if we should ignore the click/double-click/keypress event
// Avoids having the user need to use `@click.stop` on the form control

var filterEvent = function filterEvent(evt) {
  // Exit early when we don't have a target element
  if (!evt || !evt.target) {
    /* istanbul ignore next */
    return false;
  }

  var el = evt.target; // Exit early when element is disabled or a table element

  if (el.disabled || TABLE_TAG_NAMES.indexOf(el.tagName) !== -1) {
    return false;
  } // Ignore the click when it was inside a dropdown menu


  if (closest('.dropdown-menu', el)) {
    return true;
  }

  var label = el.tagName === 'LABEL' ? el : closest('label', el); // If the label's form control is not disabled then we don't propagate event
  // Modern browsers have `label.control` that references the associated input, but IE 11
  // does not have this property on the label element, so we resort to DOM lookups

  if (label) {
    var labelFor = getAttr(label, 'for');
    var input = labelFor ? getById(labelFor) : select('input, select, textarea', label);

    if (input && !input.disabled) {
      return true;
    }
  } // Otherwise check if the event target matches one of the selectors in the
  // event filter (i.e. anchors, non disabled inputs, etc.)
  // Return `true` if we should ignore the event


  return matches(el, EVENT_FILTER);
};

// Used to filter out click events caused by the mouse up at end of selection
//
// Accepts an element as only argument to test to see if selection overlaps or is
// contained within the element

var textSelectionActive = function textSelectionActive() {
  var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
  var sel = getSel();
  return sel && sel.toString().trim() !== '' && sel.containsNode && isElement(el) ? sel.containsNode(el, true) : false;
};

var props$T = {
  headVariant: {
    // Also sniffed by <b-tr> / <b-td> / <b-th>
    type: String,
    // supported values: 'lite', 'dark', or null
    default: null
  }
}; // @vue/component

var BThead = /*#__PURE__*/Vue.extend({
  name: 'BThead',
  mixins: [normalizeSlotMixin],
  inheritAttrs: false,
  provide: function provide() {
    return {
      bvTableRowGroup: this
    };
  },
  inject: {
    bvTable: {
      // Sniffed by <b-tr> / <b-td> / <b-th>
      default: function _default()
      /* istanbul ignore next */
      {
        return {};
      }
    }
  },
  props: props$T,
  computed: {
    isThead: function isThead() {
      // Sniffed by <b-tr> / <b-td> / <b-th>
      return true;
    },
    isDark: function isDark() {
      // Sniffed by <b-tr> / <b-td> / <b-th>
      return this.bvTable.dark;
    },
    isStacked: function isStacked() {
      // Sniffed by <b-tr> / <b-td> / <b-th>
      return this.bvTable.isStacked;
    },
    isResponsive: function isResponsive() {
      // Sniffed by <b-tr> / <b-td> / <b-th>
      return this.bvTable.isResponsive;
    },
    isStickyHeader: function isStickyHeader() {
      // Sniffed by <b-tr> / <b-td> / <b-th>
      // Needed to handle header background classes, due to lack of
      // background color inheritance with Bootstrap v4 table CSS
      // Sticky headers only apply to cells in table `thead`
      return !this.isStacked && this.bvTable.stickyHeader;
    },
    hasStickyHeader: function hasStickyHeader() {
      // Sniffed by <b-tr> / <b-td> / <b-th>
      // Needed to handle header background classes, due to lack of
      // background color inheritance with Bootstrap v4 table CSS
      return !this.isStacked && this.bvTable.stickyHeader;
    },
    tableVariant: function tableVariant() {
      // Sniffed by <b-tr> / <b-td> / <b-th>
      return this.bvTable.tableVariant;
    },
    theadClasses: function theadClasses() {
      return [this.headVariant ? "thead-".concat(this.headVariant) : null];
    },
    theadAttrs: function theadAttrs() {
      return _objectSpread2({
        role: 'rowgroup'
      }, this.$attrs);
    }
  },
  render: function render(h) {
    return h('thead', {
      class: this.theadClasses,
      attrs: this.theadAttrs,
      // Pass down any native listeners
      on: this.$listeners
    }, this.normalizeSlot('default'));
  }
});

var props$U = {
  footVariant: {
    type: String,
    // supported values: 'lite', 'dark', or null
    default: null
  }
}; // @vue/component

var BTfoot = /*#__PURE__*/Vue.extend({
  name: 'BTfoot',
  mixins: [normalizeSlotMixin],
  inheritAttrs: false,
  provide: function provide() {
    return {
      bvTableRowGroup: this
    };
  },
  inject: {
    bvTable: {
      // Sniffed by <b-tr> / <b-td> / <b-th>
      default: function _default()
      /* istanbul ignore next */
      {
        return {};
      }
    }
  },
  props: props$U,
  computed: {
    isTfoot: function isTfoot() {
      // Sniffed by <b-tr> / <b-td> / <b-th>
      return true;
    },
    isDark: function isDark()
    /* istanbul ignore next: Not currently sniffed in tests */
    {
      // Sniffed by <b-tr> / <b-td> / <b-th>
      return this.bvTable.dark;
    },
    isStacked: function isStacked() {
      // Sniffed by <b-tr> / <b-td> / <b-th>
      return this.bvTable.isStacked;
    },
    isResponsive: function isResponsive() {
      // Sniffed by <b-tr> / <b-td> / <b-th>
      return this.bvTable.isResponsive;
    },
    isStickyHeader: function isStickyHeader() {
      // Sniffed by <b-tr> / <b-td> / <b-th>
      // Sticky headers are only supported in thead
      return false;
    },
    hasStickyHeader: function hasStickyHeader() {
      // Sniffed by <b-tr> / <b-td> / <b-th>
      // Needed to handle header background classes, due to lack of
      // background color inheritance with Bootstrap v4 table CSS
      return !this.isStacked && this.bvTable.stickyHeader;
    },
    tableVariant: function tableVariant()
    /* istanbul ignore next: Not currently sniffed in tests */
    {
      // Sniffed by <b-tr> / <b-td> / <b-th>
      return this.bvTable.tableVariant;
    },
    tfootClasses: function tfootClasses() {
      return [this.footVariant ? "thead-".concat(this.footVariant) : null];
    },
    tfootAttrs: function tfootAttrs() {
      return _objectSpread2({
        role: 'rowgroup'
      }, this.$attrs);
    }
  },
  render: function render(h) {
    return h('tfoot', {
      class: this.tfootClasses,
      attrs: this.tfootAttrs,
      // Pass down any native listeners
      on: this.$listeners
    }, this.normalizeSlot('default'));
  }
});

var props$V = {
  variant: {
    type: String,
    default: null
  }
};
var LIGHT = 'light';
var DARK = 'dark'; // @vue/component

var BTr = /*#__PURE__*/Vue.extend({
  name: 'BTr',
  mixins: [normalizeSlotMixin],
  inheritAttrs: false,
  provide: function provide() {
    return {
      bvTableTr: this
    };
  },
  inject: {
    bvTableRowGroup: {
      default: function _default()
      /* istanbul ignore next */
      {
        return {};
      }
    }
  },
  props: props$V,
  computed: {
    inTbody: function inTbody() {
      // Sniffed by <b-td> / <b-th>
      return this.bvTableRowGroup.isTbody;
    },
    inThead: function inThead() {
      // Sniffed by <b-td> / <b-th>
      return this.bvTableRowGroup.isThead;
    },
    inTfoot: function inTfoot() {
      // Sniffed by <b-td> / <b-th>
      return this.bvTableRowGroup.isTfoot;
    },
    isDark: function isDark() {
      // Sniffed by <b-td> / <b-th>
      return this.bvTableRowGroup.isDark;
    },
    isStacked: function isStacked() {
      // Sniffed by <b-td> / <b-th>
      return this.bvTableRowGroup.isStacked;
    },
    isResponsive: function isResponsive() {
      // Sniffed by <b-td> / <b-th>
      return this.bvTableRowGroup.isResponsive;
    },
    isStickyHeader: function isStickyHeader() {
      // Sniffed by <b-td> / <b-th>
      // Sticky headers are only supported in thead
      return this.bvTableRowGroup.isStickyHeader;
    },
    hasStickyHeader: function hasStickyHeader() {
      // Sniffed by <b-tr> / <b-td> / <b-th>
      // Needed to handle header background classes, due to lack of
      // background color inheritance with Bootstrap v4 table CSS
      return !this.isStacked && this.bvTableRowGroup.hasStickyHeader;
    },
    tableVariant: function tableVariant() {
      // Sniffed by <b-td> / <b-th>
      return this.bvTableRowGroup.tableVariant;
    },
    headVariant: function headVariant() {
      // Sniffed by <b-td> / <b-th>
      return this.inThead ? this.bvTableRowGroup.headVariant : null;
    },
    footVariant: function footVariant() {
      // Sniffed by <b-td> / <b-th>
      return this.inTfoot ? this.bvTableRowGroup.footVariant : null;
    },
    isRowDark: function isRowDark() {
      return this.headVariant === LIGHT || this.footVariant === LIGHT ? false : this.headVariant === DARK || this.footVariant === DARK ? true : this.isDark;
    },
    trClasses: function trClasses() {
      return [this.variant ? "".concat(this.isRowDark ? 'bg' : 'table', "-").concat(this.variant) : null];
    },
    trAttrs: function trAttrs() {
      return _objectSpread2({
        role: 'row'
      }, this.$attrs);
    }
  },
  render: function render(h) {
    return h('tr', {
      class: this.trClasses,
      attrs: this.trAttrs,
      // Pass native listeners to child
      on: this.$listeners
    }, this.normalizeSlot('default'));
  }
});

var digitsRx = /^\d+$/; // Parse a rowspan or colspan into a digit (or null if < 1 or NaN)

var parseSpan = function parseSpan(val) {
  val = parseInt(val, 10);
  return digitsRx.test(String(val)) && val > 0 ? val : null;
};
/* istanbul ignore next */


var spanValidator = function spanValidator(val) {
  return isUndefinedOrNull(val) || parseSpan(val) > 0;
};

var props$W = {
  variant: {
    type: String,
    default: null
  },
  colspan: {
    type: [Number, String],
    default: null,
    validator: spanValidator
  },
  rowspan: {
    type: [Number, String],
    default: null,
    validator: spanValidator
  },
  stackedHeading: {
    type: String,
    default: null
  },
  stickyColumn: {
    type: Boolean,
    default: false
  }
}; // @vue/component

var BTd = /*#__PURE__*/Vue.extend({
  name: 'BTableCell',
  mixins: [normalizeSlotMixin],
  inheritAttrs: false,
  inject: {
    bvTableTr: {
      default: function _default()
      /* istanbul ignore next */
      {
        return {};
      }
    }
  },
  props: props$W,
  computed: {
    tag: function tag() {
      // Overridden by <b-th>
      return 'td';
    },
    inTbody: function inTbody() {
      return this.bvTableTr.inTbody;
    },
    inThead: function inThead() {
      return this.bvTableTr.inThead;
    },
    inTfoot: function inTfoot() {
      return this.bvTableTr.inTfoot;
    },
    isDark: function isDark() {
      return this.bvTableTr.isDark;
    },
    isStacked: function isStacked() {
      return this.bvTableTr.isStacked;
    },
    isStackedCell: function isStackedCell() {
      // We only support stacked-heading in tbody in stacked mode
      return this.inTbody && this.isStacked;
    },
    isResponsive: function isResponsive() {
      return this.bvTableTr.isResponsive;
    },
    isStickyHeader: function isStickyHeader() {
      // Needed to handle header background classes, due to lack of
      // background color inheritance with Bootstrap v4 table CSS
      // Sticky headers only apply to cells in table `thead`
      return this.bvTableTr.isStickyHeader;
    },
    hasStickyHeader: function hasStickyHeader() {
      // Needed to handle header background classes, due to lack of
      // background color inheritance with Bootstrap v4 table CSS
      return this.bvTableTr.hasStickyHeader;
    },
    isStickyColumn: function isStickyColumn() {
      // Needed to handle background classes, due to lack of
      // background color inheritance with Bootstrap v4 table CSS
      // Sticky column cells are only available in responsive
      // mode (horizontal scrolling) or when sticky header mode
      // Applies to cells in `thead`, `tbody` and `tfoot`
      return !this.isStacked && (this.isResponsive || this.hasStickyHeader) && this.stickyColumn;
    },
    rowVariant: function rowVariant() {
      return this.bvTableTr.variant;
    },
    headVariant: function headVariant() {
      return this.bvTableTr.headVariant;
    },
    footVariant: function footVariant()
    /* istanbul ignore next: need to add in tests for footer variant */
    {
      return this.bvTableTr.footVariant;
    },
    tableVariant: function tableVariant() {
      return this.bvTableTr.tableVariant;
    },
    computedColspan: function computedColspan() {
      return parseSpan(this.colspan);
    },
    computedRowspan: function computedRowspan() {
      return parseSpan(this.rowspan);
    },
    cellClasses: function cellClasses() {
      // We use computed props here for improved performance by caching
      // the results of the string interpolation
      // TODO: need to add handling for footVariant
      var variant = this.variant;

      if (!variant && this.isStickyHeader && !this.headVariant || !variant && this.isStickyColumn) {
        // Needed for sticky-header mode as Bootstrap v4 table cells do
        // not inherit parent's background-color. Boo!
        variant = this.rowVariant || this.tableVariant || 'b-table-default';
      }

      return [variant ? "".concat(this.isDark ? 'bg' : 'table', "-").concat(variant) : null, this.isStickyColumn ? 'b-table-sticky-column' : null];
    },
    cellAttrs: function cellAttrs() {
      // We use computed props here for improved performance by caching
      // the results of the object spread (Object.assign)
      var headOrFoot = this.inThead || this.inTfoot; // Make sure col/rowspan's are > 0 or null

      var colspan = this.computedColspan;
      var rowspan = this.computedRowspan; // Default role and scope

      var role = 'cell';
      var scope = null; // Compute role and scope
      // We only add scopes with an explicit span of 1 or greater

      if (headOrFoot) {
        // Header or footer cells
        role = 'columnheader';
        scope = colspan > 0 ? 'colspan' : 'col';
      } else if (this.tag === 'th') {
        // th's in tbody
        role = 'rowheader';
        scope = rowspan > 0 ? 'rowgroup' : 'row';
      }

      return _objectSpread2({
        colspan: colspan,
        rowspan: rowspan,
        role: role,
        scope: scope
      }, this.$attrs, {
        // Add in the stacked cell label data-attribute if in
        // stacked mode (if a stacked heading label is provided)
        'data-label': this.isStackedCell && !isUndefinedOrNull(this.stackedHeading) ? toString$1(this.stackedHeading) : null
      });
    }
  },
  render: function render(h) {
    var content = [this.normalizeSlot('default')];
    return h(this.tag, {
      class: this.cellClasses,
      attrs: this.cellAttrs,
      // Transfer any native listeners
      on: this.$listeners
    }, [this.isStackedCell ? h('div', [content]) : content]);
  }
});

var BTh = /*#__PURE__*/Vue.extend({
  name: 'BTh',
  extends: BTd,
  computed: {
    tag: function tag() {
      return 'th';
    }
  }
});

var theadMixin = {
  props: {
    headVariant: {
      type: String,
      // 'light', 'dark' or `null` (or custom)
      default: function _default() {
        return getComponentConfig('BTable', 'headVariant');
      }
    },
    headRowVariant: {
      type: String,
      // Any Bootstrap theme variant (or custom)
      default: null
    },
    theadClass: {
      type: [String, Array, Object] // default: undefined

    },
    theadTrClass: {
      type: [String, Array, Object] // default: undefined

    }
  },
  methods: {
    fieldClasses: function fieldClasses(field) {
      // Header field (<th>) classes
      return [field.class ? field.class : '', field.thClass ? field.thClass : ''];
    },
    headClicked: function headClicked(evt, field, isFoot) {
      if (this.stopIfBusy && this.stopIfBusy(evt)) {
        // If table is busy (via provider) then don't propagate
        return;
      } else if (filterEvent(evt)) {
        // Clicked on a non-disabled control so ignore
        return;
      } else if (textSelectionActive(this.$el)) {
        // User is selecting text, so ignore

        /* istanbul ignore next: JSDOM doesn't support getSelection() */
        return;
      }

      evt.stopPropagation();
      evt.preventDefault();
      this.$emit('head-clicked', field.key, field, evt, isFoot);
    },
    renderThead: function renderThead() {
      var _this = this;

      var isFoot = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var h = this.$createElement;
      var fields = this.computedFields || [];

      if (this.isStackedAlways || fields.length === 0) {
        // In always stacked mode, we don't bother rendering the head/foot
        // Or if no field headings (empty table)
        return h();
      } // Reference to `selectAllRows` and `clearSelected()`, if table is selectable


      var selectAllRows = this.isSelectable ? this.selectAllRows : function () {};
      var clearSelected = this.isSelectable ? this.clearSelected : function () {}; // Helper function to generate a field <th> cell

      var makeCell = function makeCell(field, colIndex) {
        var ariaLabel = null;

        if (!field.label.trim() && !field.headerTitle) {
          // In case field's label and title are empty/blank
          // We need to add a hint about what the column is about for non-sighted users

          /* istanbul ignore next */
          ariaLabel = startCase(field.key);
        }

        var hasHeadClickListener = _this.hasListener('head-clicked') || _this.isSortable;

        var handlers = {};

        if (hasHeadClickListener) {
          handlers.click = function (evt) {
            _this.headClicked(evt, field, isFoot);
          };

          handlers.keydown = function (evt) {
            var keyCode = evt.keyCode;

            if (keyCode === KEY_CODES.ENTER || keyCode === KEY_CODES.SPACE) {
              _this.headClicked(evt, field, isFoot);
            }
          };
        }

        var sortAttrs = _this.isSortable ? _this.sortTheadThAttrs(field.key, field, isFoot) : {};
        var sortClass = _this.isSortable ? _this.sortTheadThClasses(field.key, field, isFoot) : null;
        var sortLabel = _this.isSortable ? _this.sortTheadThLabel(field.key, field, isFoot) : null;
        var data = {
          key: field.key,
          class: [_this.fieldClasses(field), sortClass],
          props: {
            variant: field.variant,
            stickyColumn: field.stickyColumn
          },
          style: field.thStyle || {},
          attrs: _objectSpread2({
            // We only add a tabindex of 0 if there is a head-clicked listener
            tabindex: hasHeadClickListener ? '0' : null,
            abbr: field.headerAbbr || null,
            title: field.headerTitle || null,
            'aria-colindex': colIndex + 1,
            'aria-label': ariaLabel
          }, _this.getThValues(null, field.key, field.thAttr, isFoot ? 'foot' : 'head', {}), {}, sortAttrs),
          on: handlers
        }; // Handle edge case where in-document templates are used with new
        // `v-slot:name` syntax where the browser lower-cases the v-slot's
        // name (attributes become lower cased when parsed by the browser)
        // We have replaced the square bracket syntax with round brackets
        // to prevent confusion with dynamic slot names

        var slotNames = ["head(".concat(field.key, ")"), "head(".concat(field.key.toLowerCase(), ")"), 'head()'];

        if (isFoot) {
          // Footer will fallback to header slot names
          slotNames = ["foot(".concat(field.key, ")"), "foot(".concat(field.key.toLowerCase(), ")"), 'foot()'].concat(_toConsumableArray(slotNames));
        }

        var scope = {
          label: field.label,
          column: field.key,
          field: field,
          isFoot: isFoot,
          // Add in row select methods
          selectAllRows: selectAllRows,
          clearSelected: clearSelected
        };
        var content = _this.normalizeSlot(slotNames, scope) || (field.labelHtml ? h('div', {
          domProps: htmlOrText(field.labelHtml)
        }) : field.label);
        var srLabel = sortLabel ? h('span', {
          staticClass: 'sr-only'
        }, " (".concat(sortLabel, ")")) : null; // Return the header cell

        return h(BTh, data, [content, srLabel].filter(identity));
      }; // Generate the array of <th> cells


      var $cells = fields.map(makeCell).filter(identity); // Genrate the row(s)

      var $trs = [];

      if (isFoot) {
        var trProps = {
          variant: isUndefinedOrNull(this.footRowVariant) ? this.headRowVariant : this.footRowVariant
        };
        $trs.push(h(BTr, {
          class: this.tfootTrClass,
          props: trProps
        }, $cells));
      } else {
        var scope = {
          columns: fields.length,
          fields: fields,
          // Add in row select methods
          selectAllRows: selectAllRows,
          clearSelected: clearSelected
        };
        $trs.push(this.normalizeSlot('thead-top', scope) || h());
        $trs.push(h(BTr, {
          class: this.theadTrClass,
          props: {
            variant: this.headRowVariant
          }
        }, $cells));
      }

      return h(isFoot ? BTfoot : BThead, {
        key: isFoot ? 'bv-tfoot' : 'bv-thead',
        class: (isFoot ? this.tfootClass : this.theadClass) || null,
        props: isFoot ? {
          footVariant: this.footVariant || this.headVariant || null
        } : {
          headVariant: this.headVariant || null
        }
      }, $trs);
    }
  }
};

var tfootMixin = {
  props: {
    footClone: {
      type: Boolean,
      default: false
    },
    footVariant: {
      type: String,
      // 'dark', 'light', or `null` (or custom)
      default: function _default() {
        return getComponentConfig('BTable', 'footVariant');
      }
    },
    footRowVariant: {
      type: String,
      // Any Bootstrap theme variant (or custom). Falls back to `headRowVariant`
      default: null
    },
    tfootClass: {
      type: [String, Array, Object],
      default: null
    },
    tfootTrClass: {
      type: [String, Array, Object],
      default: null
    }
  },
  methods: {
    renderTFootCustom: function renderTFootCustom() {
      var h = this.$createElement;

      if (this.hasNormalizedSlot('custom-foot')) {
        return h(BTfoot, {
          key: 'bv-tfoot-custom',
          class: this.tfootClass || null,
          props: {
            footVariant: this.footVariant || this.headVariant || null
          }
        }, this.normalizeSlot('custom-foot', {
          items: this.computedItems.slice(),
          fields: this.computedFields.slice(),
          columns: this.computedFields.length
        }));
      } else {
        return h();
      }
    },
    renderTfoot: function renderTfoot() {
      // Passing true to renderThead will make it render a tfoot
      return this.footClone ? this.renderThead(true) : this.renderTFootCustom();
    }
  }
};

var props$X = {
  tbodyTransitionProps: {
    type: Object // default: undefined

  },
  tbodyTransitionHandlers: {
    type: Object // default: undefined

  }
}; // @vue/component

var BTbody = /*#__PURE__*/Vue.extend({
  name: 'BTbody',
  mixins: [normalizeSlotMixin],
  inheritAttrs: false,
  provide: function provide() {
    return {
      bvTableRowGroup: this
    };
  },
  inject: {
    bvTable: {
      // Sniffed by <b-tr> / <b-td> / <b-th>
      default: function _default()
      /* istanbul ignore next */
      {
        return {};
      }
    }
  },
  props: props$X,
  computed: {
    isTbody: function isTbody() {
      // Sniffed by <b-tr> / <b-td> / <b-th>
      return true;
    },
    isDark: function isDark() {
      // Sniffed by <b-tr> / <b-td> / <b-th>
      return this.bvTable.dark;
    },
    isStacked: function isStacked() {
      // Sniffed by <b-tr> / <b-td> / <b-th>
      return this.bvTable.isStacked;
    },
    isResponsive: function isResponsive() {
      // Sniffed by <b-tr> / <b-td> / <b-th>
      return this.bvTable.isResponsive;
    },
    isStickyHeader: function isStickyHeader() {
      // Sniffed by <b-tr> / <b-td> / <b-th>
      // Sticky headers are only supported in thead
      return false;
    },
    hasStickyHeader: function hasStickyHeader() {
      // Sniffed by <b-tr> / <b-td> / <b-th>
      // Needed to handle header background classes, due to lack of
      // background color inheritance with Bootstrap v4 table CSS
      return !this.isStacked && this.bvTable.stickyHeader;
    },
    tableVariant: function tableVariant()
    /* istanbul ignore next: Not currently sniffed in tests */
    {
      // Sniffed by <b-tr> / <b-td> / <b-th>
      return this.bvTable.tableVariant;
    },
    isTransitionGroup: function isTransitionGroup() {
      return this.tbodyTransitionProps || this.tbodyTransitionHandlers;
    },
    tbodyAttrs: function tbodyAttrs() {
      return _objectSpread2({
        role: 'rowgroup'
      }, this.$attrs);
    },
    tbodyProps: function tbodyProps() {
      return this.tbodyTransitionProps ? _objectSpread2({}, this.tbodyTransitionProps, {
        tag: 'tbody'
      }) : {};
    }
  },
  render: function render(h) {
    var data = {
      props: this.tbodyProps,
      attrs: this.tbodyAttrs
    };

    if (this.isTransitionGroup) {
      // We use native listeners if a transition group
      // for any delegated events
      data.on = this.tbodyTransitionHandlers || {};
      data.nativeOn = this.$listeners || {};
    } else {
      // Otherwise we place any listeners on the tbody element
      data.on = this.$listeners || {};
    }

    return h(this.isTransitionGroup ? 'transition-group' : 'tbody', data, this.normalizeSlot('default'));
  }
});

var detailsSlotName = 'row-details';
var tbodyRowMixin = {
  props: {
    tbodyTrClass: {
      type: [String, Array, Object, Function],
      default: null
    },
    tbodyTrAttr: {
      type: [Object, Function],
      default: null
    },
    detailsTdClass: {
      type: [String, Array, Object],
      default: null
    }
  },
  methods: {
    // Methods for computing classes, attributes and styles for table cells
    getTdValues: function getTdValues(item, key, tdValue, defValue) {
      var parent = this.$parent;

      if (tdValue) {
        var value = get(item, key, '');

        if (isFunction(tdValue)) {
          return tdValue(value, key, item);
        } else if (isString(tdValue) && isFunction(parent[tdValue])) {
          return parent[tdValue](value, key, item);
        }

        return tdValue;
      }

      return defValue;
    },
    getThValues: function getThValues(item, key, thValue, type, defValue) {
      var parent = this.$parent;

      if (thValue) {
        var value = get(item, key, '');

        if (isFunction(thValue)) {
          return thValue(value, key, item, type);
        } else if (isString(thValue) && isFunction(parent[thValue])) {
          return parent[thValue](value, key, item, type);
        }

        return thValue;
      }

      return defValue;
    },
    // Method to get the value for a field
    getFormattedValue: function getFormattedValue(item, field) {
      var key = field.key;
      var formatter = this.getFieldFormatter(key);
      var value = get(item, key, null);

      if (isFunction(formatter)) {
        value = formatter(value, key, item);
      }

      return isUndefinedOrNull(value) ? '' : value;
    },
    // Factory function methods
    toggleDetailsFactory: function toggleDetailsFactory(hasDetailsSlot, item) {
      var _this = this;

      // Returns a function to toggle a row's details slot
      return function () {
        if (hasDetailsSlot) {
          _this.$set(item, '_showDetails', !item._showDetails);
        }
      };
    },
    // Row event handlers
    rowHovered: function rowHovered(evt) {
      // `mouseenter` handler (non-bubbling)
      // `this.tbodyRowEvtStopped` from tbody mixin
      if (!this.tbodyRowEvtStopped(evt)) {
        // `this.emitTbodyRowEvent` from tbody mixin
        this.emitTbodyRowEvent('row-hovered', evt);
      }
    },
    rowUnhovered: function rowUnhovered(evt) {
      // `mouseleave` handler (non-bubbling)
      // `this.tbodyRowEvtStopped` from tbody mixin
      if (!this.tbodyRowEvtStopped(evt)) {
        // `this.emitTbodyRowEvent` from tbody mixin
        this.emitTbodyRowEvent('row-unhovered', evt);
      }
    },
    // Render helpers
    renderTbodyRowCell: function renderTbodyRowCell(field, colIndex, item, rowIndex) {
      var _this2 = this;

      // Renders a TD or TH for a row's field
      var h = this.$createElement;
      var hasDetailsSlot = this.hasNormalizedSlot(detailsSlotName);
      var formatted = this.getFormattedValue(item, field);
      var key = field.key;
      var stickyColumn = !this.isStacked && (this.isResponsive || this.stickyHeader) && field.stickyColumn; // We only uses the helper components for sticky columns to
      // improve performance of BTable/BTableLite by reducing the
      // total number of vue instances created during render

      var cellTag = stickyColumn ? field.isRowHeader ? BTh : BTd : field.isRowHeader ? 'th' : 'td';
      var cellVariant = item._cellVariants && item._cellVariants[key] ? item._cellVariants[key] : field.variant || null;
      var data = {
        // For the Vue key, we concatenate the column index and
        // field key (as field keys could be duplicated)
        // TODO: Although we do prevent duplicate field keys...
        //   So we could change this to: `row-${rowIndex}-cell-${key}`
        key: "row-".concat(rowIndex, "-cell-").concat(colIndex, "-").concat(key),
        class: [field.class ? field.class : '', this.getTdValues(item, key, field.tdClass, '')],
        props: {},
        attrs: _objectSpread2({
          'aria-colindex': String(colIndex + 1)
        }, field.isRowHeader ? this.getThValues(item, key, field.thAttr, 'row', {}) : this.getTdValues(item, key, field.tdAttr, {}))
      };

      if (stickyColumn) {
        // We are using the helper BTd or BTh
        data.props = {
          stackedHeading: this.isStacked ? field.label : null,
          stickyColumn: true,
          variant: cellVariant
        };
      } else {
        // Using native TD or TH element, so we need to
        // add in the attributes and variant class
        data.attrs['data-label'] = this.isStacked && !isUndefinedOrNull(field.label) ? toString$1(field.label) : null;
        data.attrs.role = field.isRowHeader ? 'rowheader' : 'cell';
        data.attrs.scope = field.isRowHeader ? 'row' : null; // Add in the variant class

        if (cellVariant) {
          data.class.push("".concat(this.dark ? 'bg' : 'table', "-").concat(cellVariant));
        }
      }

      var slotScope = {
        item: item,
        index: rowIndex,
        field: field,
        unformatted: get(item, key, ''),
        value: formatted,
        toggleDetails: this.toggleDetailsFactory(hasDetailsSlot, item),
        detailsShowing: Boolean(item._showDetails)
      }; // If table supports selectable mode, then add in the following scope
      // this.supportsSelectableRows will be undefined if mixin isn't loaded

      if (this.supportsSelectableRows) {
        slotScope.rowSelected = this.isRowSelected(rowIndex);

        slotScope.selectRow = function () {
          return _this2.selectRow(rowIndex);
        };

        slotScope.unselectRow = function () {
          return _this2.unselectRow(rowIndex);
        };
      } // The new `v-slot` syntax doesn't like a slot name starting with
      // a square bracket and if using in-document HTML templates, the
      // v-slot attributes are lower-cased by the browser.
      // Switched to round bracket syntax to prevent confusion with
      // dynamic slot name syntax.
      // We look for slots in this order: `cell(${key})`, `cell(${key.toLowerCase()})`, 'cell()'
      // Slot names are now cached by mixin tbody in `this.$_bodyFieldSlotNameCache`
      // Will be `null` if no slot (or fallback slot) exists


      var slotName = this.$_bodyFieldSlotNameCache[key];
      var $childNodes = slotName ? this.normalizeSlot(slotName, slotScope) : toString$1(formatted);

      if (this.isStacked) {
        // We wrap in a DIV to ensure rendered as a single cell when visually stacked!
        $childNodes = [h('div', [$childNodes])];
      } // Render either a td or th cell


      return h(cellTag, data, [$childNodes]);
    },
    renderTbodyRow: function renderTbodyRow(item, rowIndex) {
      var _this3 = this;

      // Renders an item's row (or rows if details supported)
      var h = this.$createElement;
      var fields = this.computedFields;
      var tableStriped = this.striped;
      var hasDetailsSlot = this.hasNormalizedSlot(detailsSlotName);
      var rowShowDetails = item._showDetails && hasDetailsSlot;
      var hasRowClickHandler = this.$listeners['row-clicked'] || this.hasSelectableRowClick; // We can return more than one TR if rowDetails enabled

      var $rows = []; // Details ID needed for `aria-details` when details showing
      // We set it to `null` when not showing so that attribute
      // does not appear on the element

      var detailsId = rowShowDetails ? this.safeId("_details_".concat(rowIndex, "_")) : null; // For each item data field in row

      var $tds = fields.map(function (field, colIndex) {
        return _this3.renderTbodyRowCell(field, colIndex, item, rowIndex);
      }); // Calculate the row number in the dataset (indexed from 1)

      var ariaRowIndex = null;

      if (this.currentPage && this.perPage && this.perPage > 0) {
        ariaRowIndex = String((this.currentPage - 1) * this.perPage + rowIndex + 1);
      } // Create a unique :key to help ensure that sub components are re-rendered rather than
      // re-used, which can cause issues. If a primary key is not provided we use the rendered
      // rows index within the tbody.
      // See: https://github.com/bootstrap-vue/bootstrap-vue/issues/2410


      var primaryKey = this.primaryKey;
      var primaryKeyValue = toString$1(get(item, primaryKey)) || null;
      var rowKey = primaryKeyValue || toString$1(rowIndex); // If primary key is provided, use it to generate a unique ID on each tbody > tr
      // In the format of '{tableId}__row_{primaryKeyValue}'

      var rowId = primaryKeyValue ? this.safeId("_row_".concat(primaryKeyValue)) : null; // Selectable classes and attributes

      var selectableClasses = this.selectableRowClasses ? this.selectableRowClasses(rowIndex) : {};
      var selectableAttrs = this.selectableRowAttrs ? this.selectableRowAttrs(rowIndex) : {}; // Additional classes and attributes

      var userTrClasses = isFunction(this.tbodyTrClass) ? this.tbodyTrClass(item, 'row') : this.tbodyTrClass;
      var userTrAttrs = isFunction(this.tbodyTrAttr) ? this.tbodyTrAttr(item, 'row') : this.tbodyTrAttr; // Add the item row

      $rows.push(h(BTr, {
        key: "__b-table-row-".concat(rowKey, "__"),
        ref: 'itemRows',
        refInFor: true,
        class: [userTrClasses, selectableClasses, rowShowDetails ? 'b-table-has-details' : ''],
        props: {
          variant: item._rowVariant || null
        },
        attrs: _objectSpread2({
          id: rowId
        }, userTrAttrs, {
          // Users cannot override the following attributes
          tabindex: hasRowClickHandler ? '0' : null,
          'data-pk': primaryKeyValue || null,
          'aria-details': detailsId,
          'aria-owns': detailsId,
          'aria-rowindex': ariaRowIndex
        }, selectableAttrs),
        on: {
          // Note: These events are not A11Y friendly!
          mouseenter: this.rowHovered,
          mouseleave: this.rowUnhovered
        }
      }, $tds)); // Row Details slot

      if (rowShowDetails) {
        var detailsScope = {
          item: item,
          index: rowIndex,
          fields: fields,
          toggleDetails: this.toggleDetailsFactory(hasDetailsSlot, item)
        }; // If table supports selectable mode, then add in the following scope
        // this.supportsSelectableRows will be undefined if mixin isn't loaded

        if (this.supportsSelectableRows) {
          detailsScope.rowSelected = this.isRowSelected(rowIndex);

          detailsScope.selectRow = function () {
            return _this3.selectRow(rowIndex);
          };

          detailsScope.unselectRow = function () {
            return _this3.unselectRow(rowIndex);
          };
        } // Render the details slot in a TD


        var $details = h(BTd, {
          props: {
            colspan: fields.length
          },
          class: this.detailsTdClass
        }, [this.normalizeSlot(detailsSlotName, detailsScope)]); // Add a hidden row to keep table row striping consistent when details showing
        // Only added if the table is striped

        if (tableStriped) {
          $rows.push( // We don't use `BTr` here as we don't need the extra functionality
          h('tr', {
            key: "__b-table-details-stripe__".concat(rowKey),
            staticClass: 'd-none',
            attrs: {
              'aria-hidden': 'true',
              role: 'presentation'
            }
          }));
        } // Add the actual details row


        var userDetailsTrClasses = isFunction(this.tbodyTrClass) ? this.tbodyTrClass(item, detailsSlotName) : this.tbodyTrClass;
        var userDetailsTrAttrs = isFunction(this.tbodyTrAttr) ? this.tbodyTrAttr(item, detailsSlotName) : this.tbodyTrAttr;
        $rows.push(h(BTr, {
          key: "__b-table-details__".concat(rowKey),
          staticClass: 'b-table-details',
          class: [userDetailsTrClasses],
          props: {
            variant: item._rowVariant || null
          },
          attrs: _objectSpread2({}, userDetailsTrAttrs, {
            // Users cannot override the following attributes
            id: detailsId,
            tabindex: '-1'
          })
        }, [$details]));
      } else if (hasDetailsSlot) {
        // Only add the placeholder if a the table has a row-details slot defined (but not shown)
        $rows.push(h());

        if (tableStriped) {
          // Add extra placeholder if table is striped
          $rows.push(h());
        }
      } // Return the row(s)


      return $rows;
    }
  }
};

var props$Y = _objectSpread2({}, props$X, {
  tbodyClass: {
    type: [String, Array, Object] // default: undefined

  }
});

var tbodyMixin = {
  mixins: [tbodyRowMixin],
  props: props$Y,
  methods: {
    // Helper methods
    getTbodyTrs: function getTbodyTrs() {
      // Returns all the item TR elements (excludes detail and spacer rows)
      // `this.$refs.itemRows` is an array of item TR components/elements
      // Rows should all be B-TR components, but we map to TR elements
      // Also note that `this.$refs.itemRows` may not always be in document order
      var refs = this.$refs || {};
      var tbody = refs.tbody ? refs.tbody.$el || refs.tbody : null;
      var trs = (refs.itemRows || []).map(function (tr) {
        return tr.$el || tr;
      });
      return tbody && tbody.children && tbody.children.length > 0 && trs && trs.length > 0 ? from(tbody.children).filter(function (tr) {
        return arrayIncludes(trs, tr);
      }) : [];
    },
    getTbodyTrIndex: function getTbodyTrIndex(el) {
      // Returns index of a particular TBODY item TR
      // We set `true` on closest to include self in result

      /* istanbul ignore next: should not normally happen */
      if (!isElement(el)) {
        return -1;
      }

      var tr = el.tagName === 'TR' ? el : closest('tr', el, true);
      return tr ? this.getTbodyTrs().indexOf(tr) : -1;
    },
    emitTbodyRowEvent: function emitTbodyRowEvent(type, evt) {
      // Emits a row event, with the item object, row index and original event
      if (type && this.hasListener(type) && evt && evt.target) {
        var rowIndex = this.getTbodyTrIndex(evt.target);

        if (rowIndex > -1) {
          // The array of TRs correlate to the `computedItems` array
          var item = this.computedItems[rowIndex];
          this.$emit(type, item, rowIndex, evt);
        }
      }
    },
    tbodyRowEvtStopped: function tbodyRowEvtStopped(evt) {
      return this.stopIfBusy && this.stopIfBusy(evt);
    },
    // Delegated row event handlers
    onTbodyRowKeydown: function onTbodyRowKeydown(evt) {
      // Keyboard navigation and row click emulation
      var target = evt.target;

      if (this.tbodyRowEvtStopped(evt) || target.tagName !== 'TR' || target !== document.activeElement || target.tabIndex !== 0) {
        // Early exit if not an item row TR
        return;
      }

      var keyCode = evt.keyCode;

      if (arrayIncludes([KEY_CODES.ENTER, KEY_CODES.SPACE], keyCode)) {
        // Emulated click for keyboard users, transfer to click handler
        evt.stopPropagation();
        evt.preventDefault();
        this.onTBodyRowClicked(evt);
      } else if (arrayIncludes([KEY_CODES.UP, KEY_CODES.DOWN, KEY_CODES.HOME, KEY_CODES.END], keyCode)) {
        // Keyboard navigation
        var rowIndex = this.getTbodyTrIndex(target);

        if (rowIndex > -1) {
          evt.stopPropagation();
          evt.preventDefault();
          var trs = this.getTbodyTrs();
          var shift = evt.shiftKey;

          if (keyCode === KEY_CODES.HOME || shift && keyCode === KEY_CODES.UP) {
            // Focus first row
            trs[0].focus();
          } else if (keyCode === KEY_CODES.END || shift && keyCode === KEY_CODES.DOWN) {
            // Focus last row
            trs[trs.length - 1].focus();
          } else if (keyCode === KEY_CODES.UP && rowIndex > 0) {
            // Focus previous row
            trs[rowIndex - 1].focus();
          } else if (keyCode === KEY_CODES.DOWN && rowIndex < trs.length - 1) {
            // Focus next row
            trs[rowIndex + 1].focus();
          }
        }
      }
    },
    onTBodyRowClicked: function onTBodyRowClicked(evt) {
      if (this.tbodyRowEvtStopped(evt)) {
        // If table is busy, then don't propagate
        return;
      } else if (filterEvent(evt) || textSelectionActive(this.$el)) {
        // Clicked on a non-disabled control so ignore
        // Or user is selecting text, so ignore
        return;
      }

      this.emitTbodyRowEvent('row-clicked', evt);
    },
    onTbodyRowMiddleMouseRowClicked: function onTbodyRowMiddleMouseRowClicked(evt) {
      if (!this.tbodyRowEvtStopped(evt) && evt.which === 2) {
        this.emitTbodyRowEvent('row-middle-clicked', evt);
      }
    },
    onTbodyRowContextmenu: function onTbodyRowContextmenu(evt) {
      if (!this.tbodyRowEvtStopped(evt)) {
        this.emitTbodyRowEvent('row-contextmenu', evt);
      }
    },
    onTbodyRowDblClicked: function onTbodyRowDblClicked(evt) {
      if (!this.tbodyRowEvtStopped(evt) && !filterEvent(evt)) {
        this.emitTbodyRowEvent('row-dblclicked', evt);
      }
    },
    // Note: Row hover handlers are handled by the tbody-row mixin
    // As mouseenter/mouseleave events do not bubble
    //
    // Render Helper
    renderTbody: function renderTbody() {
      var _this = this;

      // Render the tbody element and children
      var items = this.computedItems; // Shortcut to `createElement` (could use `this._c()` instead)

      var h = this.$createElement;
      var hasRowClickHandler = this.hasListener('row-clicked') || this.hasSelectableRowClick; // Prepare the tbody rows

      var $rows = []; // Add the item data rows or the busy slot

      var $busy = this.renderBusy ? this.renderBusy() : null;

      if ($busy) {
        // If table is busy and a busy slot, then return only the busy "row" indicator
        $rows.push($busy);
      } else {
        // Table isn't busy, or we don't have a busy slot
        // Create a slot cache for improved performance when looking up cell slot names
        // Values will be keyed by the field's `key` and will store the slot's name
        // Slots could be dynamic (i.e. `v-if`), so we must compute on each render
        // Used by tbody-row mixin render helper
        var cache = {};
        var defaultSlotName = this.hasNormalizedSlot('cell()') ? 'cell()' : null;
        this.computedFields.forEach(function (field) {
          var key = field.key;
          var fullName = "cell(".concat(key, ")");
          var lowerName = "cell(".concat(key.toLowerCase(), ")");
          cache[key] = _this.hasNormalizedSlot(fullName) ? fullName : _this.hasNormalizedSlot(lowerName) ? lowerName : defaultSlotName;
        }); // Created as a non-reactive property so to not trigger component updates
        // Must be a fresh object each render

        this.$_bodyFieldSlotNameCache = cache; // Add static top row slot (hidden in visibly stacked mode
        // as we can't control `data-label` attr)

        $rows.push(this.renderTopRow ? this.renderTopRow() : h()); // Render the rows

        items.forEach(function (item, rowIndex) {
          // Render the individual item row (rows if details slot)
          $rows.push(_this.renderTbodyRow(item, rowIndex));
        }); // Empty items / empty filtered row slot (only shows if `items.length < 1`)

        $rows.push(this.renderEmpty ? this.renderEmpty() : h()); // Static bottom row slot (hidden in visibly stacked mode
        // as we can't control `data-label` attr)

        $rows.push(this.renderBottomRow ? this.renderBottomRow() : h());
      } // Note: these events will only emit if a listener is registered


      var handlers = {
        auxclick: this.onTbodyRowMiddleMouseRowClicked,
        // TODO:
        //   Perhaps we do want to automatically prevent the
        //   default context menu from showing if there is a
        //   `row-contextmenu` listener registered
        contextmenu: this.onTbodyRowContextmenu,
        // The following event(s) is not considered A11Y friendly
        dblclick: this.onTbodyRowDblClicked // Hover events (`mouseenter`/`mouseleave`) are handled by `tbody-row` mixin

      }; // Add in click/keydown listeners if needed

      if (hasRowClickHandler) {
        handlers.click = this.onTBodyRowClicked;
        handlers.keydown = this.onTbodyRowKeydown;
      } // Assemble rows into the tbody


      var $tbody = h(BTbody, {
        ref: 'tbody',
        class: this.tbodyClass || null,
        props: {
          tbodyTransitionProps: this.tbodyTransitionProps,
          tbodyTransitionHandlers: this.tbodyTransitionHandlers
        },
        // BTbody transfers all native event listeners to the root element
        // TODO: Only set the handlers if the table is not busy
        on: handlers
      }, $rows); // Return the assembled tbody

      return $tbody;
    }
  }
};

var emptyMixin = {
  props: {
    showEmpty: {
      type: Boolean,
      default: false
    },
    emptyText: {
      type: String,
      default: 'There are no records to show'
    },
    emptyHtml: {
      type: String
    },
    emptyFilteredText: {
      type: String,
      default: 'There are no records matching your request'
    },
    emptyFilteredHtml: {
      type: String
    }
  },
  methods: {
    renderEmpty: function renderEmpty() {
      var h = this.$createElement;
      var items = this.computedItems;
      var $empty;

      if (this.showEmpty && (!items || items.length === 0) && !(this.computedBusy && this.hasNormalizedSlot('table-busy'))) {
        $empty = this.normalizeSlot(this.isFiltered ? 'emptyfiltered' : 'empty', {
          emptyFilteredHtml: this.emptyFilteredHtml,
          emptyFilteredText: this.emptyFilteredText,
          emptyHtml: this.emptyHtml,
          emptyText: this.emptyText,
          fields: this.computedFields,
          // Not sure why this is included, as it will always be an empty array
          items: this.computedItems
        });

        if (!$empty) {
          $empty = h('div', {
            class: ['text-center', 'my-2'],
            domProps: this.isFiltered ? htmlOrText(this.emptyFilteredHtml, this.emptyFilteredText) : htmlOrText(this.emptyHtml, this.emptyText)
          });
        }

        $empty = h(BTd, {
          props: {
            colspan: this.computedFields.length || null
          }
        }, [h('div', {
          attrs: {
            role: 'alert',
            'aria-live': 'polite'
          }
        }, [$empty])]);
        $empty = h(BTr, {
          key: this.isFiltered ? 'b-empty-filtered-row' : 'b-empty-row',
          staticClass: 'b-table-empty-row',
          class: [isFunction(this.tbodyTrClass) ? this.tbodyTrClass(null, 'row-empty') : this.tbodyTrClass],
          attrs: isFunction(this.tbodyTrAttr) ? this.tbodyTrAttr(null, 'row-empty') : this.tbodyTrAttr
        }, [$empty]);
      }

      return $empty || h();
    }
  }
};

var slotName = 'top-row';
var topRowMixin = {
  methods: {
    renderTopRow: function renderTopRow() {
      var h = this.$createElement; // Add static Top Row slot (hidden in visibly stacked mode as we can't control the data-label)
      // If in *always* stacked mode, we don't bother rendering the row

      if (!this.hasNormalizedSlot(slotName) || this.stacked === true || this.stacked === '') {
        return h();
      }

      var fields = this.computedFields;
      return h(BTr, {
        key: 'b-top-row',
        staticClass: 'b-table-top-row',
        class: [isFunction(this.tbodyTrClass) ? this.tbodyTrClass(null, 'row-top') : this.tbodyTrClass],
        attrs: isFunction(this.tbodyTrAttr) ? this.tbodyTrAttr(null, 'row-top') : this.tbodyTrAttr
      }, [this.normalizeSlot(slotName, {
        columns: fields.length,
        fields: fields
      })]);
    }
  }
};

var slotName$1 = 'bottom-row';
var bottomRowMixin = {
  methods: {
    renderBottomRow: function renderBottomRow() {
      var h = this.$createElement; // Static bottom row slot (hidden in visibly stacked mode as we can't control the data-label)
      // If in *always* stacked mode, we don't bother rendering the row

      if (!this.hasNormalizedSlot(slotName$1) || this.stacked === true || this.stacked === '') {
        return h();
      }

      var fields = this.computedFields;
      return h(BTr, {
        key: 'b-bottom-row',
        staticClass: 'b-table-bottom-row',
        class: [isFunction(this.tbodyTrClass) ? this.tbodyTrClass(null, 'row-bottom') : this.tbodyTrClass],
        attrs: isFunction(this.tbodyTrAttr) ? this.tbodyTrAttr(null, 'row-bottom') : this.tbodyTrAttr
      }, this.normalizeSlot(slotName$1, {
        columns: fields.length,
        fields: fields
      }));
    }
  }
};

var busySlotName = 'table-busy';
var busyMixin = {
  props: {
    busy: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      localBusy: false
    };
  },
  computed: {
    computedBusy: function computedBusy() {
      return this.busy || this.localBusy;
    }
  },
  watch: {
    localBusy: function localBusy(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.$emit('update:busy', newVal);
      }
    }
  },
  methods: {
    // Event handler helper
    stopIfBusy: function stopIfBusy(evt) {
      if (this.computedBusy) {
        // If table is busy (via provider) then don't propagate
        evt.preventDefault();
        evt.stopPropagation();
        return true;
      }

      return false;
    },
    // Render the busy indicator or return `null` if not busy
    renderBusy: function renderBusy() {
      var h = this.$createElement; // Return a busy indicator row, or `null` if not busy

      if (this.computedBusy && this.hasNormalizedSlot(busySlotName)) {
        // Show the busy slot
        return h(BTr, {
          key: 'table-busy-slot',
          staticClass: 'b-table-busy-slot',
          class: [isFunction(this.tbodyTrClass) ? this.tbodyTrClass(null, busySlotName) : this.tbodyTrClass],
          attrs: isFunction(this.tbodyTrAttr) ? this.tbodyTrAttr(null, busySlotName) : this.tbodyTrAttr
        }, [h(BTd, {
          props: {
            colspan: this.computedFields.length || null
          }
        }, [this.normalizeSlot(busySlotName)])]);
      } else {
        // We return `null` here so that we can determine if we need to
        // render the table items rows or not
        return null;
      }
    }
  }
};

var selectableMixin = {
  props: {
    selectable: {
      type: Boolean,
      default: false
    },
    selectMode: {
      type: String,
      default: 'multi',
      validator: function validator(val) {
        return arrayIncludes(['range', 'multi', 'single'], val);
      }
    },
    selectedVariant: {
      type: String,
      default: function _default() {
        return getComponentConfig('BTable', 'selectedVariant');
      }
    },
    noSelectOnClick: {
      // Disable use of click handlers for row selection
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      selectedRows: [],
      selectedLastRow: -1
    };
  },
  computed: {
    isSelectable: function isSelectable() {
      return this.selectable && this.selectMode;
    },
    hasSelectableRowClick: function hasSelectableRowClick() {
      return this.isSelectable && !this.noSelectOnClick;
    },
    supportsSelectableRows: function supportsSelectableRows() {
      return true;
    },
    selectableHasSelection: function selectableHasSelection() {
      return this.isSelectable && this.selectedRows && this.selectedRows.length > 0 && this.selectedRows.some(identity);
    },
    selectableIsMultiSelect: function selectableIsMultiSelect() {
      return this.isSelectable && arrayIncludes(['range', 'multi'], this.selectMode);
    },
    selectableTableClasses: function selectableTableClasses() {
      var _ref;

      return _ref = {
        'b-table-selectable': this.isSelectable
      }, _defineProperty(_ref, "b-table-select-".concat(this.selectMode), this.isSelectable), _defineProperty(_ref, 'b-table-selecting', this.selectableHasSelection), _defineProperty(_ref, 'b-table-selectable-no-click', this.isSelectable && !this.hasSelectableRowClick), _ref;
    },
    selectableTableAttrs: function selectableTableAttrs() {
      return {
        // TODO:
        //   Should this attribute not be included when no-select-on-click is set
        //   since this attribute implies keyboard navigation?
        'aria-multiselectable': !this.isSelectable ? null : this.selectableIsMultiSelect ? 'true' : 'false'
      };
    }
  },
  watch: {
    computedItems: function computedItems(newVal, oldVal) {
      // Reset for selectable
      var equal = false;

      if (this.isSelectable && this.selectedRows.length > 0) {
        // Quick check against array length
        equal = isArray(newVal) && isArray(oldVal) && newVal.length === oldVal.length;

        for (var i = 0; equal && i < newVal.length; i++) {
          // Look for the first non-loosely equal row, after ignoring reserved fields
          equal = looseEqual(sanitizeRow(newVal[i]), sanitizeRow(oldVal[i]));
        }
      }

      if (!equal) {
        this.clearSelected();
      }
    },
    selectable: function selectable(newVal) {
      this.clearSelected();
      this.setSelectionHandlers(newVal);
    },
    selectMode: function selectMode() {
      this.clearSelected();
    },
    hasSelectableRowClick: function hasSelectableRowClick(newVal) {
      this.clearSelected();
      this.setSelectionHandlers(!newVal);
    },
    selectedRows: function selectedRows(_selectedRows, oldVal) {
      var _this = this;

      if (this.isSelectable && !looseEqual(_selectedRows, oldVal)) {
        var items = []; // `.forEach()` skips over non-existent indices (on sparse arrays)

        _selectedRows.forEach(function (v, idx) {
          if (v) {
            items.push(_this.computedItems[idx]);
          }
        });

        this.$emit('row-selected', items);
      }
    }
  },
  beforeMount: function beforeMount() {
    // Set up handlers if needed
    if (this.isSelectable) {
      this.setSelectionHandlers(true);
    }
  },
  methods: {
    // Public methods
    selectRow: function selectRow(index) {
      // Select a particular row (indexed based on computedItems)
      if (this.isSelectable && isNumber(index) && index >= 0 && index < this.computedItems.length && !this.isRowSelected(index)) {
        var selectedRows = this.selectableIsMultiSelect ? this.selectedRows.slice() : [];
        selectedRows[index] = true;
        this.selectedLastClicked = -1;
        this.selectedRows = selectedRows;
      }
    },
    unselectRow: function unselectRow(index) {
      // Un-select a particular row (indexed based on `computedItems`)
      if (this.isSelectable && isNumber(index) && this.isRowSelected(index)) {
        var selectedRows = this.selectedRows.slice();
        selectedRows[index] = false;
        this.selectedLastClicked = -1;
        this.selectedRows = selectedRows;
      }
    },
    selectAllRows: function selectAllRows() {
      var length = this.computedItems.length;

      if (this.isSelectable && length > 0) {
        this.selectedLastClicked = -1;
        this.selectedRows = this.selectableIsMultiSelect ? range(length).map(function () {
          return true;
        }) : [true];
      }
    },
    isRowSelected: function isRowSelected(index) {
      // Determine if a row is selected (indexed based on `computedItems`)
      return !!(isNumber(index) && this.selectedRows[index]);
    },
    clearSelected: function clearSelected() {
      // Clear any active selected row(s)
      this.selectedLastClicked = -1;
      this.selectedRows = [];
    },
    // Internal private methods
    selectableRowClasses: function selectableRowClasses(index) {
      if (this.isSelectable && this.isRowSelected(index)) {
        var variant = this.selectedVariant;
        return _defineProperty({
          'b-table-row-selected': true
        }, "".concat(this.dark ? 'bg' : 'table', "-").concat(variant), variant);
      } else {
        return {};
      }
    },
    selectableRowAttrs: function selectableRowAttrs(index) {
      return {
        'aria-selected': !this.isSelectable ? null : this.isRowSelected(index) ? 'true' : 'false'
      };
    },
    setSelectionHandlers: function setSelectionHandlers(on) {
      var method = on && !this.noSelectOnClick ? '$on' : '$off'; // Handle row-clicked event

      this[method]('row-clicked', this.selectionHandler); // Clear selection on filter, pagination, and sort changes

      this[method]('filtered', this.clearSelected);
      this[method]('context-changed', this.clearSelected);
    },
    selectionHandler: function selectionHandler(item, index, evt) {
      /* istanbul ignore if: should never happen */
      if (!this.isSelectable || this.noSelectOnClick) {
        // Don't do anything if table is not in selectable mode
        this.clearSelected();
        return;
      }

      var selectMode = this.selectMode;
      var selectedRows = this.selectedRows.slice();
      var selected = !selectedRows[index]; // Note 'multi' mode needs no special event handling

      if (selectMode === 'single') {
        selectedRows = [];
      } else if (selectMode === 'range') {
        if (this.selectedLastRow > -1 && evt.shiftKey) {
          // range
          for (var idx = Math.min(this.selectedLastRow, index); idx <= Math.max(this.selectedLastRow, index); idx++) {
            selectedRows[idx] = true;
          }

          selected = true;
        } else {
          if (!(evt.ctrlKey || evt.metaKey)) {
            // Clear range selection if any
            selectedRows = [];
            selected = true;
          }

          this.selectedLastRow = selected ? index : -1;
        }
      }

      selectedRows[index] = selected;
      this.selectedRows = selectedRows;
    }
  }
};

var providerMixin = {
  mixins: [listenOnRootMixin],
  props: {
    // Prop override(s)
    items: {
      // Adds in 'Function' support
      type: [Array, Function],
      default: function _default()
      /* istanbul ignore next */
      {
        return [];
      }
    },
    // Additional props
    noProviderPaging: {
      type: Boolean,
      default: false
    },
    noProviderSorting: {
      type: Boolean,
      default: false
    },
    noProviderFiltering: {
      type: Boolean,
      default: false
    },
    apiUrl: {
      // Passthrough prop. Passed to the context object. Not used by b-table directly
      type: String,
      default: ''
    }
  },
  computed: {
    hasProvider: function hasProvider() {
      return isFunction(this.items);
    },
    providerTriggerContext: function providerTriggerContext() {
      // Used to trigger the provider function via a watcher. Only the fields that
      // are needed for triggering a provider update are included. Note that the
      // regular this.context is sent to the provider during fetches though, as they
      // may need all the prop info.
      var ctx = {
        apiUrl: this.apiUrl,
        filter: null,
        sortBy: null,
        sortDesc: null,
        perPage: null,
        currentPage: null
      };

      if (!this.noProviderFiltering) {
        // Either a string, or could be an object or array.
        ctx.filter = this.localFilter;
      }

      if (!this.noProviderSorting) {
        ctx.sortBy = this.localSortBy;
        ctx.sortDesc = this.localSortDesc;
      }

      if (!this.noProviderPaging) {
        ctx.perPage = this.perPage;
        ctx.currentPage = this.currentPage;
      }

      return clone(ctx);
    }
  },
  watch: {
    // Provider update triggering
    items: function items(newVal) {
      // If a new provider has been specified, trigger an update
      if (this.hasProvider || isFunction(newVal)) {
        this.$nextTick(this._providerUpdate);
      }
    },
    providerTriggerContext: function providerTriggerContext(newVal, oldVal) {
      // Trigger the provider to update as the relevant context values have changed.
      if (!looseEqual(newVal, oldVal)) {
        this.$nextTick(this._providerUpdate);
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    // Call the items provider if necessary
    if (this.hasProvider && (!this.localItems || this.localItems.length === 0)) {
      // Fetch on mount if localItems is empty
      this._providerUpdate();
    } // Listen for global messages to tell us to force refresh the table


    this.listenOnRoot('bv::refresh::table', function (id) {
      if (id === _this.id || id === _this) {
        _this.refresh();
      }
    });
  },
  methods: {
    refresh: function refresh() {
      // Public Method: Force a refresh of the provider function
      this.$off('refreshed', this.refresh);

      if (this.computedBusy) {
        // Can't force an update when forced busy by user (busy prop === true)
        if (this.localBusy && this.hasProvider) {
          // But if provider running (localBusy), re-schedule refresh once `refreshed` emitted
          this.$on('refreshed', this.refresh);
        }
      } else {
        this.clearSelected();

        if (this.hasProvider) {
          this.$nextTick(this._providerUpdate);
        } else {
          /* istanbul ignore next */
          this.localItems = isArray(this.items) ? this.items.slice() : [];
        }
      }
    },
    // Provider related methods
    _providerSetLocal: function _providerSetLocal(items) {
      this.localItems = isArray(items) ? items.slice() : [];
      this.localBusy = false;
      this.$emit('refreshed'); // New root emit

      if (this.id) {
        this.emitOnRoot('bv::table::refreshed', this.id);
      }
    },
    _providerUpdate: function _providerUpdate() {
      var _this2 = this;

      // Refresh the provider function items.
      if (!this.hasProvider) {
        // Do nothing if no provider
        return;
      } // If table is busy, wait until refreshed before calling again


      if (this.computedBusy) {
        // Schedule a new refresh once `refreshed` is emitted
        this.$nextTick(this.refresh);
        return;
      } // Set internal busy state


      this.localBusy = true; // Call provider function with context and optional callback after DOM is fully updated

      this.$nextTick(function () {
        try {
          // Call provider function passing it the context and optional callback
          var data = _this2.items(_this2.context, _this2._providerSetLocal);

          if (isPromise(data)) {
            // Provider returned Promise
            data.then(function (items) {
              // Provider resolved with items
              _this2._providerSetLocal(items);
            });
          } else if (isArray(data)) {
            // Provider returned Array data
            _this2._providerSetLocal(data);
          } else {
            /* istanbul ignore if */
            if (_this2.items.length !== 2) {
              // Check number of arguments provider function requested
              // Provider not using callback (didn't request second argument), so we clear
              // busy state as most likely there was an error in the provider function

              /* istanbul ignore next */
              warn("Provider function didn't request callback and did not return a promise or data.", 'BTable');
              _this2.localBusy = false;
            }
          }
        } catch (e)
        /* istanbul ignore next */
        {
          // Provider function borked on us, so we spew out a warning
          // and clear the busy state
          warn("Provider function error [".concat(e.name, "] ").concat(e.message, "."), 'BTable');
          _this2.localBusy = false;

          _this2.$off('refreshed', _this2.refresh);
        }
      });
    }
  }
};

// Includes all main table styling options

var tableRendererMixin = {
  // Don't place attributes on root element automatically,
  // as table could be wrapped in responsive `<div>`
  inheritAttrs: false,
  provide: function provide() {
    return {
      bvTable: this
    };
  },
  props: {
    striped: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: false
    },
    borderless: {
      type: Boolean,
      default: false
    },
    outlined: {
      type: Boolean,
      default: false
    },
    dark: {
      type: Boolean,
      default: false
    },
    hover: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    responsive: {
      type: [Boolean, String],
      default: false
    },
    stickyHeader: {
      // If a string, it is assumed to be the table `max-height` value
      type: [Boolean, String],
      default: false
    },
    noBorderCollapse: {
      type: Boolean,
      default: false
    },
    captionTop: {
      type: Boolean,
      default: false
    },
    tableVariant: {
      type: String,
      default: null
    },
    tableClass: {
      type: [String, Array, Object],
      default: null
    }
  },
  computed: {
    // Layout related computed props
    isResponsive: function isResponsive() {
      var responsive = this.responsive === '' ? true : this.responsive;
      return this.isStacked ? false : responsive;
    },
    isStickyHeader: function isStickyHeader() {
      var stickyHeader = this.stickyHeader === '' ? true : this.stickyHeader;
      return this.isStacked ? false : stickyHeader;
    },
    wrapperClasses: function wrapperClasses() {
      return [this.isStickyHeader ? 'b-table-sticky-header' : '', this.isResponsive === true ? 'table-responsive' : this.isResponsive ? "table-responsive-".concat(this.responsive) : ''].filter(identity);
    },
    wrapperStyles: function wrapperStyles() {
      return this.isStickyHeader && !isBoolean(this.isStickyHeader) ? {
        maxHeight: this.isStickyHeader
      } : {};
    },
    tableClasses: function tableClasses() {
      var hover = this.isTableSimple ? this.hover : this.hover && this.computedItems.length > 0 && !this.computedBusy;
      return [// User supplied classes
      this.tableClass, // Styling classes
      {
        'table-striped': this.striped,
        'table-hover': hover,
        'table-dark': this.dark,
        'table-bordered': this.bordered,
        'table-borderless': this.borderless,
        'table-sm': this.small,
        // The following are b-table custom styles
        border: this.outlined,
        'b-table-fixed': this.fixed,
        'b-table-caption-top': this.captionTop,
        'b-table-no-border-collapse': this.noBorderCollapse
      }, this.tableVariant ? "".concat(this.dark ? 'bg' : 'table', "-").concat(this.tableVariant) : '', // Stacked table classes
      this.stackedTableClasses, // Selectable classes
      this.selectableTableClasses];
    },
    tableAttrs: function tableAttrs() {
      // Preserve user supplied aria-describedby, if provided in `$attrs`
      var adb = [(this.$attrs || {})['aria-describedby'], this.captionId].filter(identity).join(' ') || null;
      var items = this.computedItems;
      var filteredItems = this.filteredItems;
      var fields = this.computedFields;
      var selectableAttrs = this.selectableTableAttrs || {};
      var ariaAttrs = this.isTableSimple ? {} : {
        'aria-busy': this.computedBusy ? 'true' : 'false',
        'aria-colcount': toString$1(fields.length),
        'aria-describedby': adb
      };
      var rowCount = items && filteredItems && filteredItems.length > items.length ? toString$1(filteredItems.length) : null;
      return _objectSpread2({
        // We set `aria-rowcount` before merging in `$attrs`,
        // in case user has supplied their own
        'aria-rowcount': rowCount
      }, this.$attrs, {
        // Now we can override any `$attrs` here
        id: this.safeId(),
        role: 'table'
      }, ariaAttrs, {}, selectableAttrs);
    }
  },
  render: function render(h) {
    var $content = [];

    if (this.isTableSimple) {
      $content.push(this.normalizeSlot('default'));
    } else {
      // Build the `<caption>` (from caption mixin)
      $content.push(this.renderCaption ? this.renderCaption() : null); // Build the `<colgroup>`

      $content.push(this.renderColgroup ? this.renderColgroup() : null); // Build the `<thead>`

      $content.push(this.renderThead ? this.renderThead() : null); // Build the `<tbody>`

      $content.push(this.renderTbody ? this.renderTbody() : null); // Build the `<tfoot>`

      $content.push(this.renderTfoot ? this.renderTfoot() : null);
    } // Assemble `<table>`


    var $table = h('table', {
      key: 'b-table',
      staticClass: 'table b-table',
      class: this.tableClasses,
      attrs: this.tableAttrs
    }, $content.filter(identity)); // Add responsive/sticky wrapper if needed and return table

    return this.wrapperClasses.length > 0 ? h('div', {
      key: 'wrap',
      class: this.wrapperClasses,
      style: this.wrapperStyles
    }, [$table]) : $table;
  }
};

// @vue/component

var BTable = /*#__PURE__*/Vue.extend({
  name: 'BTable',
  // Order of mixins is important!
  // They are merged from first to last, followed by this component.
  mixins: [// Required Mixins
  hasListenerMixin, idMixin, normalizeSlotMixin, itemsMixin, tableRendererMixin, stackedMixin, theadMixin, tfootMixin, tbodyMixin, // Features Mixins
  stackedMixin, filteringMixin, sortingMixin, paginationMixin$1, captionMixin, colgroupMixin, selectableMixin, emptyMixin, topRowMixin, bottomRowMixin, busyMixin, providerMixin] // render function provided by table-renderer mixin

});

// @vue/component

var BTableLite = /*#__PURE__*/Vue.extend({
  name: 'BTableLite',
  // Order of mixins is important!
  // They are merged from first to last, followed by this component.
  mixins: [// Required mixins
  hasListenerMixin, idMixin, normalizeSlotMixin, itemsMixin, tableRendererMixin, stackedMixin, theadMixin, tfootMixin, tbodyMixin, // Features Mixins
  // These are pretty lightweight, and are useful for lightweight tables
  captionMixin, colgroupMixin] // render function provided by table-renderer mixin

});

// @vue/component

var BTableSimple = /*#__PURE__*/Vue.extend({
  name: 'BTableSimple',
  // Order of mixins is important!
  // They are merged from first to last, followed by this component.
  mixins: [// Required mixins
  idMixin, normalizeSlotMixin, tableRendererMixin, // feature mixin
  // Stacked requires extra handling by users via
  // the table cell `stacked-heading` prop
  stackedMixin],
  computed: {
    isTableSimple: function isTableSimple() {
      return true;
    }
  } // render function provided by table-renderer mixin

});

var TableLitePlugin = /*#__PURE__*/pluginFactory({
  components: {
    BTableLite: BTableLite
  }
});
var TableSimplePlugin = /*#__PURE__*/pluginFactory({
  components: {
    BTableSimple: BTableSimple,
    BTbody: BTbody,
    BThead: BThead,
    BTfoot: BTfoot,
    BTr: BTr,
    BTd: BTd,
    BTh: BTh
  }
});
var TablePlugin = /*#__PURE__*/pluginFactory({
  components: {
    BTable: BTable
  },
  plugins: {
    TableLitePlugin: TableLitePlugin,
    TableSimplePlugin: TableSimplePlugin
  }
});

var navProps = omit(props$I, ['tabs', 'isNavBar', 'cardHeader']); // -- Utils --
// Filter function to filter out disabled tabs

var notDisabled = function notDisabled(tab) {
  return !tab.disabled;
}; // --- Helper components ---
// @vue/component


var BTabButtonHelper = /*#__PURE__*/Vue.extend({
  name: 'BTabButtonHelper',
  inject: {
    bvTabs: {
      default: function _default()
      /* istanbul ignore next */
      {
        return {};
      }
    }
  },
  props: {
    // Reference to the child <b-tab> instance
    tab: {
      default: null
    },
    tabs: {
      type: Array,
      default: function _default()
      /* istanbul ignore next */
      {
        return [];
      }
    },
    id: {
      type: String,
      default: null
    },
    controls: {
      type: String,
      default: null
    },
    tabIndex: {
      type: Number,
      default: null
    },
    posInSet: {
      type: Number,
      default: null
    },
    setSize: {
      type: Number,
      default: null
    },
    noKeyNav: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    focus: function focus() {
      if (this.$refs && this.$refs.link && this.$refs.link.focus) {
        this.$refs.link.focus();
      }
    },
    handleEvt: function handleEvt(evt) {
      var stop = function stop() {
        evt.preventDefault();
        evt.stopPropagation();
      };

      if (this.tab.disabled) {
        /* istanbul ignore next */
        return;
      }

      var type = evt.type;
      var key = evt.keyCode;
      var shift = evt.shiftKey;

      if (type === 'click') {
        stop();
        this.$emit('click', evt);
      } else if (type === 'keydown' && key === KEY_CODES.SPACE) {
        // For ARIA tabs the SPACE key will also trigger a click/select
        // Even with keyboard navigation disabled, SPACE should "click" the button
        // See: https://github.com/bootstrap-vue/bootstrap-vue/issues/4323
        stop();
        this.$emit('click', evt);
      } else if (type === 'keydown' && !this.noKeyNav) {
        // For keyboard navigation
        if (key === KEY_CODES.UP || key === KEY_CODES.LEFT || key === KEY_CODES.HOME) {
          stop();

          if (shift || key === KEY_CODES.HOME) {
            this.$emit('first', evt);
          } else {
            this.$emit('prev', evt);
          }
        } else if (key === KEY_CODES.DOWN || key === KEY_CODES.RIGHT || key === KEY_CODES.END) {
          stop();

          if (shift || key === KEY_CODES.END) {
            this.$emit('last', evt);
          } else {
            this.$emit('next', evt);
          }
        }
      }
    }
  },
  render: function render(h) {
    var link = h(BLink, {
      ref: 'link',
      staticClass: 'nav-link',
      class: [{
        active: this.tab.localActive && !this.tab.disabled,
        disabled: this.tab.disabled
      }, this.tab.titleLinkClass, // Apply <b-tabs> `activeNavItemClass` styles when the tab is active
      this.tab.localActive ? this.bvTabs.activeNavItemClass : null],
      props: {
        disabled: this.tab.disabled
      },
      attrs: _objectSpread2({}, this.tab.titleLinkAttributes, {
        role: 'tab',
        id: this.id,
        // Roving tab index when keynav enabled
        tabindex: this.tabIndex,
        'aria-selected': this.tab.localActive && !this.tab.disabled ? 'true' : 'false',
        'aria-setsize': this.setSize,
        'aria-posinset': this.posInSet,
        'aria-controls': this.controls
      }),
      on: {
        click: this.handleEvt,
        keydown: this.handleEvt
      }
    }, [this.tab.normalizeSlot('title') || this.tab.title]);
    return h('li', {
      staticClass: 'nav-item',
      class: [this.tab.titleItemClass],
      attrs: {
        role: 'presentation'
      }
    }, [link]);
  }
}); // @vue/component

var BTabs = /*#__PURE__*/Vue.extend({
  name: 'BTabs',
  mixins: [idMixin, normalizeSlotMixin],
  provide: function provide() {
    return {
      bvTabs: this
    };
  },
  model: {
    prop: 'value',
    event: 'input'
  },
  props: _objectSpread2({}, navProps, {
    tag: {
      type: String,
      default: 'div'
    },
    card: {
      type: Boolean,
      default: false
    },
    end: {
      // Synonym for 'bottom'
      type: Boolean,
      default: false
    },
    noFade: {
      type: Boolean,
      default: false
    },
    noNavStyle: {
      type: Boolean,
      default: false
    },
    noKeyNav: {
      type: Boolean,
      default: false
    },
    lazy: {
      // This prop is sniffed by the <b-tab> child
      type: Boolean,
      default: false
    },
    contentClass: {
      type: [String, Array, Object],
      default: null
    },
    navClass: {
      type: [String, Array, Object],
      default: null
    },
    navWrapperClass: {
      type: [String, Array, Object],
      default: null
    },
    activeNavItemClass: {
      // Only applied to the currently active <b-nav-item>
      type: [String, Array, Object],
      default: null
    },
    activeTabClass: {
      // Only applied to the currently active <b-tab>
      // This prop is sniffed by the <b-tab> child
      type: [String, Array, Object],
      default: null
    },
    value: {
      // v-model
      type: Number,
      default: null
    }
  }),
  data: function data() {
    var tabIdx = parseInt(this.value, 10);
    tabIdx = isNaN(tabIdx) ? -1 : tabIdx;
    return {
      // Index of current tab
      currentTab: tabIdx,
      // Array of direct child <b-tab> instances, in DOM order
      tabs: [],
      // Array of child instances registered (for triggering reactive updates)
      registeredTabs: [],
      // Flag to know if we are mounted or not
      isMounted: false
    };
  },
  computed: {
    fade: function fade() {
      // This computed prop is sniffed by the tab child
      return !this.noFade;
    },
    localNavClass: function localNavClass() {
      var classes = [];

      if (this.card && this.vertical) {
        classes.push('card-header', 'h-100', 'border-bottom-0', 'rounded-0');
      }

      return [].concat(classes, [this.navClass]);
    }
  },
  watch: {
    currentTab: function currentTab(newVal) {
      var index = -1; // Ensure only one tab is active at most

      this.tabs.forEach(function (tab, idx) {
        if (newVal === idx && !tab.disabled) {
          tab.localActive = true;
          index = idx;
        } else {
          tab.localActive = false;
        }
      }); // Update the v-model

      this.$emit('input', index);
    },
    value: function value(newVal, oldVal) {
      if (newVal !== oldVal) {
        newVal = parseInt(newVal, 10);
        newVal = isNaN(newVal) ? -1 : newVal;
        oldVal = parseInt(oldVal, 10) || 0;
        var tabs = this.tabs;

        if (tabs[newVal] && !tabs[newVal].disabled) {
          this.activateTab(tabs[newVal]);
        } else {
          // Try next or prev tabs
          if (newVal < oldVal) {
            this.previousTab();
          } else {
            this.nextTab();
          }
        }
      }
    },
    registeredTabs: function registeredTabs() {
      var _this = this;

      // Each b-tab will register/unregister itself.
      // We use this to detect when tabs are added/removed
      // to trigger the update of the tabs.
      this.$nextTick(function () {
        requestAF(function () {
          _this.updateTabs();
        });
      });
    },
    tabs: function tabs(newVal, oldVal) {
      var _this2 = this;

      // If tabs added, removed, or re-ordered, we emit a `changed` event.
      // We use `tab._uid` instead of `tab.safeId()`, as the later is changed
      // in a nextTick if no explicit ID is provided, causing duplicate emits.
      if (!looseEqual(newVal.map(function (t) {
        return t._uid;
      }), oldVal.map(function (t) {
        return t._uid;
      }))) {
        // In a nextTick to ensure currentTab has been set first.
        this.$nextTick(function () {
          // We emit shallow copies of the new and old arrays of tabs, to
          // prevent users from potentially mutating the internal arrays.
          _this2.$emit('changed', newVal.slice(), oldVal.slice());
        });
      }
    },
    isMounted: function isMounted(newVal) {
      var _this3 = this;

      // Trigger an update after mounted.  Needed for tabs inside lazy modals.
      if (newVal) {
        requestAF(function () {
          _this3.updateTabs();
        });
      } // Enable or disable the observer


      this.setObserver(newVal);
    }
  },
  created: function created() {
    var _this4 = this;

    var tabIdx = parseInt(this.value, 10);
    this.currentTab = isNaN(tabIdx) ? -1 : tabIdx;
    this._bvObserver = null; // For SSR and to make sure only a single tab is shown on mount
    // We wrap this in a `$nextTick()` to ensure the child tabs have been created

    this.$nextTick(function () {
      _this4.updateTabs();
    });
  },
  mounted: function mounted() {
    var _this5 = this;

    // Call `updateTabs()` just in case...
    this.updateTabs();
    this.$nextTick(function () {
      // Flag we are now mounted and to switch to DOM for tab probing.
      // As this.$slots.default appears to lie about component instances
      // after b-tabs is destroyed and re-instantiated.
      // And this.$children does not respect DOM order.
      _this5.isMounted = true;
    });
  },
  deactivated: function deactivated()
  /* istanbul ignore next */
  {
    this.isMounted = false;
  },
  activated: function activated()
  /* istanbul ignore next */
  {
    var _this6 = this;

    var tabIdx = parseInt(this.value, 10);
    this.currentTab = isNaN(tabIdx) ? -1 : tabIdx;
    this.$nextTick(function () {
      _this6.updateTabs();

      _this6.isMounted = true;
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.isMounted = false;
  },
  destroyed: function destroyed() {
    // Ensure no references to child instances exist
    this.tabs = [];
  },
  methods: {
    registerTab: function registerTab(tab) {
      var _this7 = this;

      if (!arrayIncludes(this.registeredTabs, tab)) {
        this.registeredTabs.push(tab);
        tab.$once('hook:destroyed', function () {
          _this7.unregisterTab(tab);
        });
      }
    },
    unregisterTab: function unregisterTab(tab) {
      this.registeredTabs = this.registeredTabs.slice().filter(function (t) {
        return t !== tab;
      });
    },
    setObserver: function setObserver(on) {
      // DOM observer is needed to detect changes in order of tabs
      if (on) {
        // Make sure no existing observer running
        this.setObserver(false);
        var self = this;
        /* istanbul ignore next: difficult to test mutation observer in JSDOM */

        var handler = function handler() {
          // We delay the update to ensure that `tab.safeId()` has
          // updated with the final ID value.
          self.$nextTick(function () {
            requestAF(function () {
              self.updateTabs();
            });
          });
        }; // Watch for changes to <b-tab> sub components


        this._bvObserver = observeDom(this.$refs.tabsContainer, handler, {
          childList: true,
          subtree: false,
          attributes: true,
          attributeFilter: ['id']
        });
      } else {
        if (this._bvObserver && this._bvObserver.disconnect) {
          this._bvObserver.disconnect();
        }

        this._bvObserver = null;
      }
    },
    getTabs: function getTabs() {
      // We use registeredTabs as the source of truth for child tab components. And we
      // filter out any BTab components that are extended BTab with a root child BTab.
      // https://github.com/bootstrap-vue/bootstrap-vue/issues/3260
      var tabs = this.registeredTabs.filter(function (tab) {
        return tab.$children.filter(function (t) {
          return t._isTab;
        }).length === 0;
      }); // DOM Order of Tabs

      var order = [];

      if (this.isMounted && tabs.length > 0) {
        // We rely on the DOM when mounted to get the 'true' order of the b-tab children.
        // querySelectorAll(...) always returns elements in document order, regardless of
        // order specified in the selector.
        var selector = tabs.map(function (tab) {
          return "#".concat(tab.safeId());
        }).join(', ');
        order = selectAll(selector, this.$el).map(function (el) {
          return el.id;
        }).filter(identity);
      } // Stable sort keeps the original order if not found in the
      // `order` array, which will be an empty array before mount.


      return stableSort(tabs, function (a, b) {
        return order.indexOf(a.safeId()) - order.indexOf(b.safeId());
      });
    },
    // Update list of <b-tab> children
    updateTabs: function updateTabs() {
      // Probe tabs
      var tabs = this.getTabs(); // Find *last* active non-disabled tab in current tabs
      // We trust tab state over currentTab, in case tabs were added/removed/re-ordered

      var tabIndex = tabs.indexOf(tabs.slice().reverse().find(function (tab) {
        return tab.localActive && !tab.disabled;
      })); // Else try setting to currentTab

      if (tabIndex < 0) {
        var currentTab = this.currentTab;

        if (currentTab >= tabs.length) {
          // Handle last tab being removed, so find the last non-disabled tab
          tabIndex = tabs.indexOf(tabs.slice().reverse().find(notDisabled));
        } else if (tabs[currentTab] && !tabs[currentTab].disabled) {
          // Current tab is not disabled
          tabIndex = currentTab;
        }
      } // Else find *first* non-disabled tab in current tabs


      if (tabIndex < 0) {
        tabIndex = tabs.indexOf(tabs.find(notDisabled));
      } // Set the current tab state to active


      tabs.forEach(function (tab) {
        // tab.localActive = idx === tabIndex && !tab.disabled
        tab.localActive = false;
      });

      if (tabs[tabIndex]) {
        tabs[tabIndex].localActive = true;
      } // Update the array of tab children


      this.tabs = tabs; // Set the currentTab index (can be -1 if no non-disabled tabs)

      this.currentTab = tabIndex;
    },
    // Find a button that controls a tab, given the tab reference
    // Returns the button vm instance
    getButtonForTab: function getButtonForTab(tab) {
      return (this.$refs.buttons || []).find(function (btn) {
        return btn.tab === tab;
      });
    },
    // Force a button to re-render its content, given a <b-tab> instance
    // Called by <b-tab> on `update()`
    updateButton: function updateButton(tab) {
      var button = this.getButtonForTab(tab);

      if (button && button.$forceUpdate) {
        button.$forceUpdate();
      }
    },
    // Activate a tab given a <b-tab> instance
    // Also accessed by <b-tab>
    activateTab: function activateTab(tab) {
      var result = false;

      if (tab) {
        var index = this.tabs.indexOf(tab);

        if (!tab.disabled && index > -1 && index !== this.currentTab) {
          var tabEvt = new BvEvent('activate-tab', {
            cancelable: true,
            vueTarget: this,
            componentId: this.safeId()
          });
          this.$emit(tabEvt.type, index, this.currentTab, tabEvt);

          if (!tabEvt.defaultPrevented) {
            result = true;
            this.currentTab = index;
          }
        }
      } // Couldn't set tab, so ensure v-model is set to `this.currentTab`

      /* istanbul ignore next: should rarely happen */


      if (!result && this.currentTab !== this.value) {
        this.$emit('input', this.currentTab);
      }

      return result;
    },
    // Deactivate a tab given a <b-tab> instance
    // Accessed by <b-tab>
    deactivateTab: function deactivateTab(tab) {
      if (tab) {
        // Find first non-disabled tab that isn't the one being deactivated
        // If no tabs are available, then don't deactivate current tab
        return this.activateTab(this.tabs.filter(function (t) {
          return t !== tab;
        }).find(notDisabled));
      }
      /* istanbul ignore next: should never/rarely happen */


      return false;
    },
    // Focus a tab button given its <b-tab> instance
    focusButton: function focusButton(tab) {
      var _this8 = this;

      // Wrap in `$nextTick()` to ensure DOM has completed rendering/updating before focusing
      this.$nextTick(function () {
        var button = _this8.getButtonForTab(tab);

        if (button && button.focus) {
          button.focus();
        }
      });
    },
    // Emit a click event on a specified <b-tab> component instance
    emitTabClick: function emitTabClick(tab, evt) {
      if (isEvent(evt) && tab && tab.$emit && !tab.disabled) {
        tab.$emit('click', evt);
      }
    },
    // Click handler
    clickTab: function clickTab(tab, evt) {
      this.activateTab(tab);
      this.emitTabClick(tab, evt);
    },
    // Move to first non-disabled tab
    firstTab: function firstTab(focus) {
      var tab = this.tabs.find(notDisabled);

      if (this.activateTab(tab) && focus) {
        this.focusButton(tab);
        this.emitTabClick(tab, focus);
      }
    },
    // Move to previous non-disabled tab
    previousTab: function previousTab(focus) {
      var currentIndex = Math.max(this.currentTab, 0);
      var tab = this.tabs.slice(0, currentIndex).reverse().find(notDisabled);

      if (this.activateTab(tab) && focus) {
        this.focusButton(tab);
        this.emitTabClick(tab, focus);
      }
    },
    // Move to next non-disabled tab
    nextTab: function nextTab(focus) {
      var currentIndex = Math.max(this.currentTab, -1);
      var tab = this.tabs.slice(currentIndex + 1).find(notDisabled);

      if (this.activateTab(tab) && focus) {
        this.focusButton(tab);
        this.emitTabClick(tab, focus);
      }
    },
    // Move to last non-disabled tab
    lastTab: function lastTab(focus) {
      var tab = this.tabs.slice().reverse().find(notDisabled);

      if (this.activateTab(tab) && focus) {
        this.focusButton(tab);
        this.emitTabClick(tab, focus);
      }
    }
  },
  render: function render(h) {
    var _this9 = this;

    var tabs = this.tabs; // Currently active tab

    var activeTab = tabs.find(function (tab) {
      return tab.localActive && !tab.disabled;
    }); // Tab button to allow focusing when no active tab found (keynav only)

    var fallbackTab = tabs.find(function (tab) {
      return !tab.disabled;
    }); // For each <b-tab> found create the tab buttons

    var buttons = tabs.map(function (tab, index) {
      var tabIndex = null; // Ensure at least one tab button is focusable when keynav enabled (if possible)

      if (!_this9.noKeyNav) {
        // Buttons are not in tab index unless active, or a fallback tab
        tabIndex = -1;

        if (activeTab === tab || !activeTab && fallbackTab === tab) {
          // Place tab button in tab sequence
          tabIndex = null;
        }
      }

      return h(BTabButtonHelper, {
        key: tab._uid || index,
        ref: 'buttons',
        // Needed to make `this.$refs.buttons` an array
        refInFor: true,
        props: {
          tab: tab,
          tabs: tabs,
          id: tab.controlledBy || (tab.safeId ? tab.safeId("_BV_tab_button_") : null),
          controls: tab.safeId ? tab.safeId() : null,
          tabIndex: tabIndex,
          setSize: tabs.length,
          posInSet: index + 1,
          noKeyNav: _this9.noKeyNav
        },
        on: {
          click: function click(evt) {
            _this9.clickTab(tab, evt);
          },
          first: _this9.firstTab,
          prev: _this9.previousTab,
          next: _this9.nextTab,
          last: _this9.lastTab
        }
      });
    }); // Nav

    var nav = h(BNav, {
      ref: 'nav',
      class: this.localNavClass,
      attrs: {
        role: 'tablist',
        id: this.safeId('_BV_tab_controls_')
      },
      props: {
        fill: this.fill,
        justified: this.justified,
        align: this.align,
        tabs: !this.noNavStyle && !this.pills,
        pills: !this.noNavStyle && this.pills,
        vertical: this.vertical,
        small: this.small,
        cardHeader: this.card && !this.vertical
      }
    }, [this.normalizeSlot('tabs-start') || h(), buttons, this.normalizeSlot('tabs-end') || h()]);
    nav = h('div', {
      key: 'bv-tabs-nav',
      class: [{
        'card-header': this.card && !this.vertical && !this.end,
        'card-footer': this.card && !this.vertical && this.end,
        'col-auto': this.vertical
      }, this.navWrapperClass]
    }, [nav]);
    var empty = h();

    if (!tabs || tabs.length === 0) {
      empty = h('div', {
        key: 'bv-empty-tab',
        class: ['tab-pane', 'active', {
          'card-body': this.card
        }]
      }, this.normalizeSlot('empty'));
    } // Main content section


    var content = h('div', {
      ref: 'tabsContainer',
      key: 'bv-tabs-container',
      staticClass: 'tab-content',
      class: [{
        col: this.vertical
      }, this.contentClass],
      attrs: {
        id: this.safeId('_BV_tab_container_')
      }
    }, concat(this.normalizeSlot('default'), empty)); // Render final output

    return h(this.tag, {
      staticClass: 'tabs',
      class: {
        row: this.vertical,
        'no-gutters': this.vertical && this.card
      },
      attrs: {
        id: this.safeId()
      }
    }, [this.end ? content : h(), [nav], this.end ? h() : content]);
  }
});

var BTab = /*#__PURE__*/Vue.extend({
  name: 'BTab',
  mixins: [idMixin, normalizeSlotMixin],
  inject: {
    bvTabs: {
      default: function _default() {
        return {};
      }
    }
  },
  props: {
    active: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: 'div'
    },
    buttonId: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    titleItemClass: {
      // Sniffed by tabs.js and added to nav 'li.nav-item'
      type: [String, Array, Object],
      default: null
    },
    titleLinkClass: {
      // Sniffed by tabs.js and added to nav 'a.nav-link'
      type: [String, Array, Object],
      default: null
    },
    titleLinkAttributes: {
      type: Object,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    noBody: {
      type: Boolean,
      default: false
    },
    lazy: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      localActive: this.active && !this.disabled,
      show: false
    };
  },
  computed: {
    tabClasses: function tabClasses() {
      return [{
        active: this.localActive,
        disabled: this.disabled,
        'card-body': this.bvTabs.card && !this.noBody
      }, // Apply <b-tabs> `activeTabClass` styles when this tab is active
      this.localActive ? this.bvTabs.activeTabClass : null];
    },
    controlledBy: function controlledBy() {
      return this.buttonId || this.safeId('__BV_tab_button__');
    },
    computedNoFade: function computedNoFade() {
      return !(this.bvTabs.fade || false);
    },
    computedLazy: function computedLazy() {
      return this.bvTabs.lazy || this.lazy;
    },
    _isTab: function _isTab() {
      // For parent sniffing of child
      return true;
    }
  },
  watch: {
    localActive: function localActive(newVal) {
      // Make 'active' prop work with `.sync` modifier
      this.$emit('update:active', newVal);
    },
    active: function active(newVal, oldVal) {
      if (newVal !== oldVal) {
        if (newVal) {
          // If activated post mount
          this.activate();
        } else {
          /* istanbul ignore next */
          if (!this.deactivate()) {
            // Tab couldn't be deactivated, so we reset the synced active prop
            // Deactivation will fail if no other tabs to activate
            this.$emit('update:active', this.localActive);
          }
        }
      }
    },
    disabled: function disabled(newVal, oldVal) {
      if (newVal !== oldVal) {
        if (newVal && this.localActive && this.bvTabs.firstTab) {
          this.localActive = false;
          this.bvTabs.firstTab();
        }
      }
    }
  },
  mounted: function mounted() {
    // Inform b-tabs of our presence
    this.registerTab(); // Initially show on mount if active and not disabled

    this.show = this.localActive;
  },
  updated: function updated() {
    // Force the tab button content to update (since slots are not reactive)
    // Only done if we have a title slot, as the title prop is reactive
    if (this.hasNormalizedSlot('title') && this.bvTabs.updateButton) {
      this.bvTabs.updateButton(this);
    }
  },
  destroyed: function destroyed() {
    // inform b-tabs of our departure
    this.unregisterTab();
  },
  methods: {
    // Private methods
    registerTab: function registerTab() {
      // Inform `b-tabs` of our presence
      this.bvTabs.registerTab && this.bvTabs.registerTab(this);
    },
    unregisterTab: function unregisterTab() {
      // Inform `b-tabs` of our departure
      this.bvTabs.unregisterTab && this.bvTabs.unregisterTab(this);
    },
    // Public methods
    activate: function activate() {
      if (this.bvTabs.activateTab && !this.disabled) {
        return this.bvTabs.activateTab(this);
      } else {
        // Not inside a <b-tabs> component or tab is disabled
        return false;
      }
    },
    deactivate: function deactivate() {
      if (this.bvTabs.deactivateTab && this.localActive) {
        return this.bvTabs.deactivateTab(this);
      } else {
        // Not inside a <b-tabs> component or not active to begin with
        return false;
      }
    }
  },
  render: function render(h) {
    var content = h(this.tag, {
      ref: 'panel',
      staticClass: 'tab-pane',
      class: this.tabClasses,
      directives: [{
        name: 'show',
        rawName: 'v-show',
        value: this.localActive,
        expression: 'localActive'
      }],
      attrs: {
        role: 'tabpanel',
        id: this.safeId(),
        'aria-hidden': this.localActive ? 'false' : 'true',
        'aria-labelledby': this.controlledBy || null
      }
    }, // Render content lazily if requested
    [this.localActive || !this.computedLazy ? this.normalizeSlot('default') : h()]);
    return h(BVTransition, {
      props: {
        mode: 'out-in',
        noFade: this.computedNoFade
      }
    }, [content]);
  }
});

var TabsPlugin = /*#__PURE__*/pluginFactory({
  components: {
    BTabs: BTabs,
    BTab: BTab
  }
});

var TimePlugin = /*#__PURE__*/pluginFactory({
  components: {
    BTime: BTime
  }
});

var NAME$E = 'BToaster';
var props$Z = {
  name: {
    type: String,
    required: true
  },
  ariaLive: {
    type: String,
    default: function _default() {
      return getComponentConfig(NAME$E, 'ariaLive');
    }
  },
  ariaAtomic: {
    type: String,
    default: function _default() {
      return getComponentConfig(NAME$E, 'ariaAtomic');
    } // Allowed: 'true' or 'false' or null

  },
  role: {
    // Aria role
    type: String,
    default: function _default() {
      return getComponentConfig(NAME$E, 'role');
    }
  }
  /*
  transition: {
    type: [Boolean, String, Object],
    default: false
  }
  */

}; // @vue/component

var DefaultTransition = /*#__PURE__*/Vue.extend({
  data: function data() {
    return {
      // Transition classes base name
      name: 'b-toaster'
    };
  },
  methods: {
    onAfterEnter: function onAfterEnter(el) {
      var _this = this;

      // Handle bug where enter-to class is not removed.
      // Bug is related to portal-vue and transition-groups.
      requestAF(function () {
        removeClass(el, "".concat(_this.name, "-enter-to")); // The *-move class is also stuck on elements that moved,
        // but there are no javascript hooks to handle after move.
      });
    }
  },
  render: function render(h) {
    return h('transition-group', {
      props: {
        tag: 'div',
        name: this.name
      },
      on: {
        afterEnter: this.onAfterEnter
      }
    }, this.$slots.default);
  }
}); // @vue/component

var BToaster = /*#__PURE__*/Vue.extend({
  name: NAME$E,
  props: props$Z,
  data: function data() {
    return {
      // We don't render on SSR or if a an existing target found
      doRender: false,
      dead: false,
      // Toaster names cannot change once created
      staticName: this.name
    };
  },
  beforeMount: function beforeMount() {
    var _this2 = this;

    this.staticName = this.name;
    /* istanbul ignore if */

    if (Wormhole.hasTarget(this.staticName)) {
      warn("A \"<portal-target>\" with name \"".concat(this.name, "\" already exists in the document."), 'BToaster');
      this.dead = true;
    } else {
      this.doRender = true;
      this.$once('hook:beforeDestroy', function () {
        // Let toasts made with `this.$bvToast.toast()` know that this toaster
        // is being destroyed and should should also destroy/hide themselves
        _this2.$root.$emit('bv::toaster::destroyed', _this2.staticName);
      });
    }
  },
  destroyed: function destroyed() {
    // Remove from DOM if needed

    /* istanbul ignore next: difficult to test */
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
  },
  render: function render(h) {
    var $toaster = h('div', {
      class: ['d-none', {
        'b-dead-toaster': this.dead
      }]
    });

    if (this.doRender) {
      var $target = h(PortalTarget, {
        staticClass: 'b-toaster-slot',
        props: {
          name: this.staticName,
          multiple: true,
          tag: 'div',
          slim: false,
          // transition: this.transition || DefaultTransition
          transition: DefaultTransition
        }
      });
      $toaster = h('div', {
        staticClass: 'b-toaster',
        class: [this.staticName],
        attrs: {
          id: this.staticName,
          role: this.role || null,
          // Fallback to null to make sure attribute doesn't exist
          'aria-live': this.ariaLive,
          'aria-atomic': this.ariaAtomic
        }
      }, [$target]);
    }

    return $toaster;
  }
});

var NAME$F = 'BToast';
var MIN_DURATION = 1000; // --- Props ---

var props$_ = {
  id: {
    // Even though the ID prop is provided by idMixin, we
    // add it here for $bvToast props filtering
    type: String,
    default: null
  },
  title: {
    type: String,
    default: null
  },
  toaster: {
    type: String,
    default: function _default() {
      return getComponentConfig(NAME$F, 'toaster');
    }
  },
  visible: {
    type: Boolean,
    default: false
  },
  variant: {
    type: String,
    default: function _default() {
      return getComponentConfig(NAME$F, 'variant');
    }
  },
  isStatus: {
    // Switches role to 'status' and aria-live to 'polite'
    type: Boolean,
    default: false
  },
  appendToast: {
    type: Boolean,
    default: false
  },
  noAutoHide: {
    type: Boolean,
    default: false
  },
  autoHideDelay: {
    type: [Number, String],
    default: function _default() {
      return getComponentConfig(NAME$F, 'autoHideDelay');
    }
  },
  noCloseButton: {
    type: Boolean,
    default: false
  },
  noFade: {
    type: Boolean,
    default: false
  },
  noHoverPause: {
    type: Boolean,
    default: false
  },
  solid: {
    type: Boolean,
    default: false
  },
  toastClass: {
    type: [String, Object, Array],
    default: function _default() {
      return getComponentConfig(NAME$F, 'toastClass');
    }
  },
  headerClass: {
    type: [String, Object, Array],
    default: function _default() {
      return getComponentConfig(NAME$F, 'headerClass');
    }
  },
  bodyClass: {
    type: [String, Object, Array],
    default: function _default() {
      return getComponentConfig(NAME$F, 'bodyClass');
    }
  },
  href: {
    type: String,
    default: null
  },
  to: {
    type: [String, Object],
    default: null
  },
  static: {
    // Render the toast in place, rather than in a portal-target
    type: Boolean,
    default: false
  }
}; // @vue/component

var BToast = /*#__PURE__*/Vue.extend({
  name: NAME$F,
  mixins: [idMixin, listenOnRootMixin, normalizeSlotMixin, scopedStyleAttrsMixin],
  inheritAttrs: false,
  model: {
    prop: 'visible',
    event: 'change'
  },
  props: props$_,
  data: function data() {
    return {
      isMounted: false,
      doRender: false,
      localShow: false,
      isTransitioning: false,
      isHiding: false,
      order: 0,
      timer: null,
      dismissStarted: 0,
      resumeDismiss: 0
    };
  },
  computed: {
    bToastClasses: function bToastClasses() {
      return _defineProperty({
        'b-toast-solid': this.solid,
        'b-toast-append': this.appendToast,
        'b-toast-prepend': !this.appendToast
      }, "b-toast-".concat(this.variant), this.variant);
    },
    slotScope: function slotScope() {
      return {
        hide: this.hide
      };
    },
    computedDuration: function computedDuration() {
      // Minimum supported duration is 1 second
      return Math.max(toInteger(this.autoHideDelay) || 0, MIN_DURATION);
    },
    computedToaster: function computedToaster() {
      return String(this.toaster);
    },
    transitionHandlers: function transitionHandlers() {
      return {
        beforeEnter: this.onBeforeEnter,
        afterEnter: this.onAfterEnter,
        beforeLeave: this.onBeforeLeave,
        afterLeave: this.onAfterLeave
      };
    }
  },
  watch: {
    visible: function visible(newVal) {
      newVal ? this.show() : this.hide();
    },
    localShow: function localShow(newVal) {
      if (newVal !== this.visible) {
        this.$emit('change', newVal);
      }
    },
    toaster: function toaster()
    /* istanbul ignore next */
    {
      // If toaster target changed, make sure toaster exists
      this.$nextTick(this.ensureToaster);
    },
    static: function _static(newVal)
    /* istanbul ignore next */
    {
      // If static changes to true, and the toast is showing,
      // ensure the toaster target exists
      if (newVal && this.localShow) {
        this.ensureToaster();
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.isMounted = true;
    this.$nextTick(function () {
      if (_this.visible) {
        requestAF(function () {
          _this.show();
        });
      }
    }); // Listen for global $root show events

    this.listenOnRoot('bv::show::toast', function (id) {
      if (id === _this.safeId()) {
        _this.show();
      }
    }); // Listen for global $root hide events

    this.listenOnRoot('bv::hide::toast', function (id) {
      if (!id || id === _this.safeId()) {
        _this.hide();
      }
    }); // Make sure we hide when toaster is destroyed

    /* istanbul ignore next: difficult to test */

    this.listenOnRoot('bv::toaster::destroyed', function (toaster) {
      /* istanbul ignore next */
      if (toaster === _this.computedToaster) {
        /* istanbul ignore next */
        _this.hide();
      }
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.clearDismissTimer();
  },
  methods: {
    show: function show() {
      var _this2 = this;

      if (!this.localShow) {
        this.ensureToaster();
        var showEvt = this.buildEvent('show');
        this.emitEvent(showEvt);
        this.dismissStarted = this.resumeDismiss = 0;
        this.order = Date.now() * (this.appendToast ? 1 : -1);
        this.isHiding = false;
        this.doRender = true;
        this.$nextTick(function () {
          // We show the toast after we have rendered the portal and b-toast wrapper
          // so that screen readers will properly announce the toast
          requestAF(function () {
            _this2.localShow = true;
          });
        });
      }
    },
    hide: function hide() {
      var _this3 = this;

      if (this.localShow) {
        var hideEvt = this.buildEvent('hide');
        this.emitEvent(hideEvt);
        this.setHoverHandler(false);
        this.dismissStarted = this.resumeDismiss = 0;
        this.clearDismissTimer();
        this.isHiding = true;
        requestAF(function () {
          _this3.localShow = false;
        });
      }
    },
    buildEvent: function buildEvent(type) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new BvEvent(type, _objectSpread2({
        cancelable: false,
        target: this.$el || null,
        relatedTarget: null
      }, options, {
        vueTarget: this,
        componentId: this.safeId()
      }));
    },
    emitEvent: function emitEvent(bvEvt) {
      var type = bvEvt.type;
      this.$root.$emit("bv::toast:".concat(type), bvEvt);
      this.$emit(type, bvEvt);
    },
    ensureToaster: function ensureToaster() {
      if (this.static) {
        return;
      }

      if (!Wormhole.hasTarget(this.computedToaster)) {
        var div = document.createElement('div');
        document.body.appendChild(div);
        var toaster = new BToaster({
          parent: this.$root,
          propsData: {
            name: this.computedToaster
          }
        });
        toaster.$mount(div);
      }
    },
    startDismissTimer: function startDismissTimer() {
      this.clearDismissTimer();

      if (!this.noAutoHide) {
        this.timer = setTimeout(this.hide, this.resumeDismiss || this.computedDuration);
        this.dismissStarted = Date.now();
        this.resumeDismiss = 0;
      }
    },
    clearDismissTimer: function clearDismissTimer() {
      clearTimeout(this.timer);
      this.timer = null;
    },
    setHoverHandler: function setHoverHandler(on) {
      var el = this.$refs['b-toast'];
      eventOnOff(on, el, 'mouseenter', this.onPause, EVENT_OPTIONS_NO_CAPTURE);
      eventOnOff(on, el, 'mouseleave', this.onUnPause, EVENT_OPTIONS_NO_CAPTURE);
    },
    onPause: function onPause() {
      // Determine time remaining, and then pause timer
      if (this.noAutoHide || this.noHoverPause || !this.timer || this.resumeDismiss) {
        return;
      }

      var passed = Date.now() - this.dismissStarted;

      if (passed > 0) {
        this.clearDismissTimer();
        this.resumeDismiss = Math.max(this.computedDuration - passed, MIN_DURATION);
      }
    },
    onUnPause: function onUnPause() {
      // Restart timer with max of time remaining or 1 second
      if (this.noAutoHide || this.noHoverPause || !this.resumeDismiss) {
        this.resumeDismiss = this.dismissStarted = 0;
        return;
      }

      this.startDismissTimer();
    },
    onLinkClick: function onLinkClick() {
      var _this4 = this;

      // We delay the close to allow time for the
      // browser to process the link click
      this.$nextTick(function () {
        requestAF(function () {
          _this4.hide();
        });
      });
    },
    onBeforeEnter: function onBeforeEnter() {
      this.isTransitioning = true;
    },
    onAfterEnter: function onAfterEnter() {
      this.isTransitioning = false;
      var hiddenEvt = this.buildEvent('shown');
      this.emitEvent(hiddenEvt);
      this.startDismissTimer();
      this.setHoverHandler(true);
    },
    onBeforeLeave: function onBeforeLeave() {
      this.isTransitioning = true;
    },
    onAfterLeave: function onAfterLeave() {
      this.isTransitioning = false;
      this.order = 0;
      this.resumeDismiss = this.dismissStarted = 0;
      var hiddenEvt = this.buildEvent('hidden');
      this.emitEvent(hiddenEvt);
      this.doRender = false;
    },
    makeToast: function makeToast(h) {
      var _this5 = this;

      // Render helper for generating the toast
      // Assemble the header content
      var $headerContent = [];
      var $title = this.normalizeSlot('toast-title', this.slotScope);

      if ($title) {
        $headerContent.push($title);
      } else if (this.title) {
        $headerContent.push(h('strong', {
          staticClass: 'mr-2'
        }, this.title));
      }

      if (!this.noCloseButton) {
        $headerContent.push(h(BButtonClose, {
          staticClass: 'ml-auto mb-1',
          on: {
            click: function click() {
              _this5.hide();
            }
          }
        }));
      } // Assemble the header (if needed)


      var $header = h();

      if ($headerContent.length > 0) {
        $header = h('header', {
          staticClass: 'toast-header',
          class: this.headerClass
        }, $headerContent);
      } // Toast body


      var isLink = this.href || this.to;
      var $body = h(isLink ? BLink : 'div', {
        staticClass: 'toast-body',
        class: this.bodyClass,
        props: isLink ? {
          to: this.to,
          href: this.href
        } : {},
        on: isLink ? {
          click: this.onLinkClick
        } : {}
      }, [this.normalizeSlot('default', this.slotScope) || h()]); // Build the toast

      var $toast = h('div', {
        key: "toast-".concat(this._uid),
        ref: 'toast',
        staticClass: 'toast',
        class: this.toastClass,
        attrs: _objectSpread2({}, this.$attrs, {
          tabindex: '0',
          id: this.safeId()
        })
      }, [$header, $body]);
      return $toast;
    }
  },
  render: function render(h) {
    if (!this.doRender || !this.isMounted) {
      return h();
    }

    var name = "b-toast-".concat(this._uid); // If scoped styles are applied and the toast is not static,
    // make sure the scoped style data attribute is applied

    var scopedStyleAttrs = !this.static ? this.scopedStyleAttrs : {};
    return h(Portal, {
      props: {
        name: name,
        to: this.computedToaster,
        order: this.order,
        slim: true,
        disabled: this.static
      }
    }, [h('div', {
      key: name,
      ref: 'b-toast',
      staticClass: 'b-toast',
      class: this.bToastClasses,
      attrs: _objectSpread2({}, scopedStyleAttrs, {
        id: this.safeId('_toast_outer'),
        role: this.isHiding ? null : this.isStatus ? 'status' : 'alert',
        'aria-live': this.isHiding ? null : this.isStatus ? 'polite' : 'assertive',
        'aria-atomic': this.isHiding ? null : 'true'
      })
    }, [h(BVTransition, {
      props: {
        noFade: this.noFade
      },
      on: this.transitionHandlers
    }, [this.localShow ? this.makeToast(h) : h()])])]);
  }
});

var PROP_NAME$3 = '$bvToast';
var PROP_NAME_PRIV$1 = '_bv__toast'; // Base toast props that are allowed
// Some may be ignored or overridden on some message boxes
// Prop ID is allowed, but really only should be used for testing
// We need to add it in explicitly as it comes from the `idMixin`

var BASE_PROPS$1 = ['id'].concat(_toConsumableArray(keys(omit(props$_, ['static', 'visible'])))); // Map prop names to toast slot names

var propsToSlots$1 = {
  toastContent: 'default',
  title: 'toast-title'
}; // --- Utility methods ---
// Method to filter only recognized props that are not undefined

var filterOptions$1 = function filterOptions(options) {
  return BASE_PROPS$1.reduce(function (memo, key) {
    if (!isUndefined(options[key])) {
      memo[key] = options[key];
    }

    return memo;
  }, {});
}; // Method to install `$bvToast` VM injection


var plugin$1 = function plugin(Vue) {
  // Create a private sub-component constructor that
  // extends BToast and self-destructs after hidden
  // @vue/component
  var BToastPop = Vue.extend({
    name: 'BToastPop',
    extends: BToast,
    destroyed: function destroyed() {
      // Make sure we not in document any more
      if (this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el);
      }
    },
    mounted: function mounted() {
      var self = this; // Self destruct handler

      var handleDestroy = function handleDestroy() {
        // Ensure the toast has been force hidden
        self.localShow = false;
        self.doRender = false;
        self.$nextTick(function () {
          self.$nextTick(function () {
            // In a `requestAF()` to release control back to application
            // and to allow the portal-target time to remove the content
            requestAF(function () {
              self.$destroy();
            });
          });
        });
      }; // Self destruct if parent destroyed


      this.$parent.$once('hook:destroyed', handleDestroy); // Self destruct after hidden

      this.$once('hidden', handleDestroy); // Self destruct when toaster is destroyed

      this.listenOnRoot('bv::toaster::destroyed', function (toaster) {
        /* istanbul ignore next: hard to test */
        if (toaster === self.toaster) {
          handleDestroy();
        }
      });
    }
  }); // Private method to generate the on-demand toast

  var makeToast = function makeToast(props, $parent) {
    if (warnNotClient(PROP_NAME$3)) {
      /* istanbul ignore next */
      return;
    } // Create an instance of `BToastPop` component


    var toast = new BToastPop({
      // We set parent as the local VM so these toasts can emit events on the
      // app `$root`, and it ensures `BToast` is destroyed when parent is destroyed
      parent: $parent,
      propsData: _objectSpread2({}, filterOptions$1(getComponentConfig('BToast') || {}), {}, omit(props, keys(propsToSlots$1)), {
        // Props that can't be overridden
        static: false,
        visible: true
      })
    }); // Convert certain props to slots

    keys(propsToSlots$1).forEach(function (prop) {
      var value = props[prop];

      if (!isUndefined(value)) {
        // Can be a string, or array of VNodes
        if (prop === 'title' && isString(value)) {
          // Special case for title if it is a string, we wrap in a <strong>
          value = [$parent.$createElement('strong', {
            class: 'mr-2'
          }, value)];
        }

        toast.$slots[propsToSlots$1[prop]] = concat(value);
      }
    }); // Create a mount point (a DIV) and mount it (which triggers the show)

    var div = document.createElement('div');
    document.body.appendChild(div);
    toast.$mount(div);
  }; // Declare BvToast instance property class


  var BvToast = /*#__PURE__*/function () {
    function BvToast(vm) {
      _classCallCheck(this, BvToast);

      // Assign the new properties to this instance
      assign(this, {
        _vm: vm,
        _root: vm.$root
      }); // Set these properties as read-only and non-enumerable

      defineProperties(this, {
        _vm: readonlyDescriptor(),
        _root: readonlyDescriptor()
      });
    } // --- Public Instance methods ---
    // Opens a user defined toast and returns immediately


    _createClass(BvToast, [{
      key: "toast",
      value: function toast(content) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (!content || warnNotClient(PROP_NAME$3)) {
          /* istanbul ignore next */
          return;
        }

        makeToast(_objectSpread2({}, filterOptions$1(options), {
          toastContent: content
        }), this._vm);
      } // shows a `<b-toast>` component with the specified ID

    }, {
      key: "show",
      value: function show(id) {
        if (id) {
          this._root.$emit('bv::show::toast', id);
        }
      } // Hide a toast with specified ID, or if not ID all toasts

    }, {
      key: "hide",
      value: function hide() {
        var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        this._root.$emit('bv::hide::toast', id);
      }
    }]);

    return BvToast;
  }(); // Add our instance mixin


  Vue.mixin({
    beforeCreate: function beforeCreate() {
      // Because we need access to `$root` for `$emits`, and VM for parenting,
      // we have to create a fresh instance of `BvToast` for each VM
      this[PROP_NAME_PRIV$1] = new BvToast(this);
    }
  }); // Define our read-only `$bvToast` instance property
  // Placed in an if just in case in HMR mode
  // eslint-disable-next-line no-prototype-builtins

  if (!Vue.prototype.hasOwnProperty(PROP_NAME$3)) {
    defineProperty(Vue.prototype, PROP_NAME$3, {
      get: function get() {
        /* istanbul ignore next */
        if (!this || !this[PROP_NAME_PRIV$1]) {
          warn("\"".concat(PROP_NAME$3, "\" must be accessed from a Vue instance \"this\" context."), 'BToast');
        }

        return this[PROP_NAME_PRIV$1];
      }
    });
  }
};

var BVToastPlugin = /*#__PURE__*/pluginFactory({
  plugins: {
    plugin: plugin$1
  }
});

var ToastPlugin = /*#__PURE__*/pluginFactory({
  components: {
    BToast: BToast,
    BToaster: BToaster
  },
  // $bvToast injection
  plugins: {
    BVToastPlugin: BVToastPlugin
  }
});

var BV_TOOLTIP = '__BV_Tooltip__'; // Default trigger

var DefaultTrigger$1 = 'hover focus'; // Valid event triggers

var validTriggers$1 = {
  focus: true,
  hover: true,
  click: true,
  blur: true,
  manual: true
}; // Directive modifier test regular expressions. Pre-compile for performance

var htmlRE$1 = /^html$/i;
var noninteractiveRE = /^noninteractive$/i;
var noFadeRE$1 = /^nofade$/i;
var placementRE$1 = /^(auto|top(left|right)?|bottom(left|right)?|left(top|bottom)?|right(top|bottom)?)$/i;
var boundaryRE$1 = /^(window|viewport|scrollParent)$/i;
var delayRE$1 = /^d\d+$/i;
var delayShowRE$1 = /^ds\d+$/i;
var delayHideRE$1 = /^dh\d+$/i;
var offsetRE$1 = /^o-?\d+$/i;
var variantRE$1 = /^v-.+$/i;
var spacesRE$1 = /\s+/; // Build a Tooltip config based on bindings (if any)
// Arguments and modifiers take precedence over passed value config object

var parseBindings$1 = function parseBindings(bindings, vnode)
/* istanbul ignore next: not easy to test */
{
  // We start out with a basic config
  var NAME = 'BTooltip'; // Default config

  var config = {
    title: undefined,
    trigger: '',
    // Default set below if needed
    placement: 'top',
    fallbackPlacement: 'flip',
    container: false,
    // Default of body
    animation: true,
    offset: 0,
    id: null,
    html: false,
    interactive: true,
    disabled: false,
    delay: getComponentConfig(NAME, 'delay'),
    boundary: String(getComponentConfig(NAME, 'boundary')),
    boundaryPadding: parseInt(getComponentConfig(NAME, 'boundaryPadding'), 10) || 0,
    variant: getComponentConfig(NAME, 'variant'),
    customClass: getComponentConfig(NAME, 'customClass')
  }; // Process `bindings.value`

  if (isString(bindings.value) || isNumber(bindings.value)) {
    // Value is tooltip content (HTML optionally supported)
    config.title = bindings.value;
  } else if (isFunction(bindings.value)) {
    // Title generator function
    config.title = bindings.value;
  } else if (isPlainObject(bindings.value)) {
    // Value is config object, so merge
    config = _objectSpread2({}, config, {}, bindings.value);
  } // If title is not provided, try title attribute


  if (isUndefined(config.title)) {
    // Try attribute
    var data = vnode.data || {};
    config.title = data.attrs && !isUndefinedOrNull(data.attrs.title) ? data.attrs.title : undefined;
  } // Normalize delay


  if (!isPlainObject(config.delay)) {
    config.delay = {
      show: parseInt(config.delay, 10) || 0,
      hide: parseInt(config.delay, 10) || 0
    };
  } // If argument, assume element ID of container element


  if (bindings.arg) {
    // Element ID specified as arg
    // We must prepend '#' to become a CSS selector
    config.container = "#".concat(bindings.arg);
  } // Process modifiers


  keys(bindings.modifiers).forEach(function (mod) {
    if (htmlRE$1.test(mod)) {
      // Title allows HTML
      config.html = true;
    } else if (noninteractiveRE.test(mod)) {
      // Noninteractive
      config.interactive = false;
    } else if (noFadeRE$1.test(mod)) {
      // No animation
      config.animation = false;
    } else if (placementRE$1.test(mod)) {
      // Placement of tooltip
      config.placement = mod;
    } else if (boundaryRE$1.test(mod)) {
      // Boundary of tooltip
      mod = mod === 'scrollparent' ? 'scrollParent' : mod;
      config.boundary = mod;
    } else if (delayRE$1.test(mod)) {
      // Delay value
      var delay = parseInt(mod.slice(1), 10) || 0;
      config.delay.show = delay;
      config.delay.hide = delay;
    } else if (delayShowRE$1.test(mod)) {
      // Delay show value
      config.delay.show = parseInt(mod.slice(2), 10) || 0;
    } else if (delayHideRE$1.test(mod)) {
      // Delay hide value
      config.delay.hide = parseInt(mod.slice(2), 10) || 0;
    } else if (offsetRE$1.test(mod)) {
      // Offset value, negative allowed
      config.offset = parseInt(mod.slice(1), 10) || 0;
    } else if (variantRE$1.test(mod)) {
      // Variant
      config.variant = mod.slice(2) || null;
    }
  }); // Special handling of event trigger modifiers trigger is
  // a space separated list

  var selectedTriggers = {}; // Parse current config object trigger

  concat(config.trigger || '').filter(identity).join(' ').trim().toLowerCase().split(spacesRE$1).forEach(function (trigger) {
    if (validTriggers$1[trigger]) {
      selectedTriggers[trigger] = true;
    }
  }); // Parse modifiers for triggers

  keys(bindings.modifiers).forEach(function (mod) {
    mod = mod.toLowerCase();

    if (validTriggers$1[mod]) {
      // If modifier is a valid trigger
      selectedTriggers[mod] = true;
    }
  }); // Sanitize triggers

  config.trigger = keys(selectedTriggers).join(' ');

  if (config.trigger === 'blur') {
    // Blur by itself is useless, so convert it to 'focus'
    config.trigger = 'focus';
  }

  if (!config.trigger) {
    // Use default trigger
    config.trigger = DefaultTrigger$1;
  } // Return the config


  return config;
}; // Add/update Tooltip on our element


var applyTooltip = function applyTooltip(el, bindings, vnode) {
  if (!isBrowser) {
    /* istanbul ignore next */
    return;
  }

  var config = parseBindings$1(bindings, vnode);

  if (!el[BV_TOOLTIP]) {
    var $parent = vnode.context;
    el[BV_TOOLTIP] = new BVTooltip({
      parent: $parent,
      // Add the parent's scoped style attribute data
      _scopeId: getScopeId($parent, undefined)
    });
    el[BV_TOOLTIP].__bv_prev_data__ = {};
    el[BV_TOOLTIP].$on('show', function ()
    /* istanbul ignore next: for now */
    {
      // Before showing the tooltip, we update the title if it is a function
      if (isFunction(config.title)) {
        el[BV_TOOLTIP].updateData({
          title: config.title(el)
        });
      }
    });
  }

  var data = {
    title: config.title,
    triggers: config.trigger,
    placement: config.placement,
    fallbackPlacement: config.fallbackPlacement,
    variant: config.variant,
    customClass: config.customClass,
    container: config.container,
    boundary: config.boundary,
    delay: config.delay,
    offset: config.offset,
    noFade: !config.animation,
    id: config.id,
    interactive: config.interactive,
    disabled: config.disabled,
    html: config.html
  };
  var oldData = el[BV_TOOLTIP].__bv_prev_data__;
  el[BV_TOOLTIP].__bv_prev_data__ = data;

  if (!looseEqual(data, oldData)) {
    // We only update the instance if data has changed
    var newData = {
      target: el
    };
    keys(data).forEach(function (prop) {
      // We only pass data properties that have changed
      if (data[prop] !== oldData[prop]) {
        // if title is a function, we execute it here
        newData[prop] = prop === 'title' && isFunction(data[prop]) ? data[prop](el) : data[prop];
      }
    });
    el[BV_TOOLTIP].updateData(newData);
  }
}; // Remove Tooltip on our element


var removeTooltip = function removeTooltip(el) {
  if (el[BV_TOOLTIP]) {
    el[BV_TOOLTIP].$destroy();
    el[BV_TOOLTIP] = null;
  }

  delete el[BV_TOOLTIP];
}; // Export our directive


var VBTooltip = {
  bind: function bind(el, bindings, vnode) {
    applyTooltip(el, bindings, vnode);
  },
  // We use `componentUpdated` here instead of `update`, as the former
  // waits until the containing component and children have finished updating
  componentUpdated: function componentUpdated(el, bindings, vnode) {
    // Performed in a `$nextTick()` to prevent render update loops
    vnode.context.$nextTick(function () {
      applyTooltip(el, bindings, vnode);
    });
  },
  unbind: function unbind(el) {
    removeTooltip(el);
  }
};

var VBTooltipPlugin = /*#__PURE__*/pluginFactory({
  directives: {
    VBTooltip: VBTooltip
  }
});

var TooltipPlugin = /*#__PURE__*/pluginFactory({
  components: {
    BTooltip: BTooltip
  },
  plugins: {
    VBTooltipPlugin: VBTooltipPlugin
  }
});

var componentsPlugin = /*#__PURE__*/pluginFactory({
  plugins: {
    AlertPlugin: AlertPlugin,
    BadgePlugin: BadgePlugin,
    BreadcrumbPlugin: BreadcrumbPlugin,
    ButtonPlugin: ButtonPlugin,
    ButtonGroupPlugin: ButtonGroupPlugin,
    ButtonToolbarPlugin: ButtonToolbarPlugin,
    CalendarPlugin: CalendarPlugin,
    CardPlugin: CardPlugin,
    CarouselPlugin: CarouselPlugin,
    CollapsePlugin: CollapsePlugin,
    DropdownPlugin: DropdownPlugin,
    EmbedPlugin: EmbedPlugin,
    FormPlugin: FormPlugin,
    FormCheckboxPlugin: FormCheckboxPlugin,
    FormDatepickerPlugin: FormDatepickerPlugin,
    FormFilePlugin: FormFilePlugin,
    FormGroupPlugin: FormGroupPlugin,
    FormInputPlugin: FormInputPlugin,
    FormRadioPlugin: FormRadioPlugin,
    FormSelectPlugin: FormSelectPlugin,
    FormSpinbuttonPlugin: FormSpinbuttonPlugin,
    FormTagsPlugin: FormTagsPlugin,
    FormTextareaPlugin: FormTextareaPlugin,
    FormTimepickerPlugin: FormTimepickerPlugin,
    ImagePlugin: ImagePlugin,
    InputGroupPlugin: InputGroupPlugin,
    JumbotronPlugin: JumbotronPlugin,
    LayoutPlugin: LayoutPlugin,
    LinkPlugin: LinkPlugin,
    ListGroupPlugin: ListGroupPlugin,
    MediaPlugin: MediaPlugin,
    ModalPlugin: ModalPlugin,
    NavPlugin: NavPlugin,
    NavbarPlugin: NavbarPlugin,
    OverlayPlugin: OverlayPlugin,
    PaginationPlugin: PaginationPlugin,
    PaginationNavPlugin: PaginationNavPlugin,
    PopoverPlugin: PopoverPlugin,
    ProgressPlugin: ProgressPlugin,
    SpinnerPlugin: SpinnerPlugin,
    TablePlugin: TablePlugin,
    TabsPlugin: TabsPlugin,
    TimePlugin: TimePlugin,
    ToastPlugin: ToastPlugin,
    TooltipPlugin: TooltipPlugin
  }
});

var VBHoverPlugin = /*#__PURE__*/pluginFactory({
  directives: {
    VBHover: VBHover
  }
});

var VBModalPlugin = /*#__PURE__*/pluginFactory({
  directives: {
    VBModal: VBModal
  }
});

/*
 * Constants / Defaults
 */

var NAME$G = 'v-b-scrollspy';
var ACTIVATE_EVENT = 'bv::scrollspy::activate';
var Default = {
  element: 'body',
  offset: 10,
  method: 'auto',
  throttle: 75
};
var DefaultType = {
  element: '(string|element|component)',
  offset: 'number',
  method: 'string',
  throttle: 'number'
};
var ClassName = {
  DROPDOWN_ITEM: 'dropdown-item',
  ACTIVE: 'active'
};
var Selector$2 = {
  ACTIVE: '.active',
  NAV_LIST_GROUP: '.nav, .list-group',
  NAV_LINKS: '.nav-link',
  NAV_ITEMS: '.nav-item',
  LIST_ITEMS: '.list-group-item',
  DROPDOWN: '.dropdown, .dropup',
  DROPDOWN_ITEMS: '.dropdown-item',
  DROPDOWN_TOGGLE: '.dropdown-toggle'
};
var OffsetMethod = {
  OFFSET: 'offset',
  POSITION: 'position'
}; // HREFs must end with a hash followed by at least one non-hash character.
// HREFs in the links are assumed to point to non-external links.
// Comparison to the current page base URL is not performed!

var HREF_REGEX = /^.*(#[^#]+)$/; // Transition Events

var TransitionEndEvents$1 = ['webkitTransitionEnd', 'transitionend', 'otransitionend', 'oTransitionEnd'];
/*
 * Utility Methods
 */
// Better var type detection

var toType$1 = function toType(obj)
/* istanbul ignore next: not easy to test */
{
  return toString(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}; // Check config properties for expected types


var typeCheckConfig = function typeCheckConfig(componentName, config, configTypes)
/* istanbul ignore next: not easy to test */
{
  for (var property in configTypes) {
    if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
      var expectedTypes = configTypes[property];
      var value = config[property];
      var valueType = value && isElement(value) ? 'element' : toType$1(value); // handle Vue instances

      valueType = value && value._isVue ? 'component' : valueType;

      if (!new RegExp(expectedTypes).test(valueType)) {
        /* istanbul ignore next */
        warn("".concat(componentName, ": Option \"").concat(property, "\" provided type \"").concat(valueType, "\" but expected type \"").concat(expectedTypes, "\""));
      }
    }
  }
};
/*
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

/* istanbul ignore next: not easy to test */


var ScrollSpy
/* istanbul ignore next: not easy to test */
= /*#__PURE__*/function () {
  function ScrollSpy(element, config, $root) {
    _classCallCheck(this, ScrollSpy);

    // The element we activate links in
    this.$el = element;
    this.$scroller = null;
    this.$selector = [Selector$2.NAV_LINKS, Selector$2.LIST_ITEMS, Selector$2.DROPDOWN_ITEMS].join(',');
    this.$offsets = [];
    this.$targets = [];
    this.$activeTarget = null;
    this.$scrollHeight = 0;
    this.$resizeTimeout = null;
    this.$obs_scroller = null;
    this.$obs_targets = null;
    this.$root = $root || null;
    this.$config = null;
    this.updateConfig(config);
  }

  _createClass(ScrollSpy, [{
    key: "updateConfig",
    value: function updateConfig(config, $root) {
      if (this.$scroller) {
        // Just in case out scroll element has changed
        this.unlisten();
        this.$scroller = null;
      }

      var cfg = _objectSpread2({}, this.constructor.Default, {}, config);

      if ($root) {
        this.$root = $root;
      }

      typeCheckConfig(this.constructor.Name, cfg, this.constructor.DefaultType);
      this.$config = cfg;

      if (this.$root) {
        var self = this;
        this.$root.$nextTick(function () {
          self.listen();
        });
      } else {
        this.listen();
      }
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this.unlisten();
      clearTimeout(this.$resizeTimeout);
      this.$resizeTimeout = null;
      this.$el = null;
      this.$config = null;
      this.$scroller = null;
      this.$selector = null;
      this.$offsets = null;
      this.$targets = null;
      this.$activeTarget = null;
      this.$scrollHeight = null;
    }
  }, {
    key: "listen",
    value: function listen() {
      var _this = this;

      var scroller = this.getScroller();

      if (scroller && scroller.tagName !== 'BODY') {
        eventOn(scroller, 'scroll', this, EVENT_OPTIONS_NO_CAPTURE);
      }

      eventOn(window, 'scroll', this, EVENT_OPTIONS_NO_CAPTURE);
      eventOn(window, 'resize', this, EVENT_OPTIONS_NO_CAPTURE);
      eventOn(window, 'orientationchange', this, EVENT_OPTIONS_NO_CAPTURE);
      TransitionEndEvents$1.forEach(function (evtName) {
        eventOn(window, evtName, _this, EVENT_OPTIONS_NO_CAPTURE);
      });
      this.setObservers(true); // Schedule a refresh

      this.handleEvent('refresh');
    }
  }, {
    key: "unlisten",
    value: function unlisten() {
      var _this2 = this;

      var scroller = this.getScroller();
      this.setObservers(false);

      if (scroller && scroller.tagName !== 'BODY') {
        eventOff(scroller, 'scroll', this, EVENT_OPTIONS_NO_CAPTURE);
      }

      eventOff(window, 'scroll', this, EVENT_OPTIONS_NO_CAPTURE);
      eventOff(window, 'resize', this, EVENT_OPTIONS_NO_CAPTURE);
      eventOff(window, 'orientationchange', this, EVENT_OPTIONS_NO_CAPTURE);
      TransitionEndEvents$1.forEach(function (evtName) {
        eventOff(window, evtName, _this2, EVENT_OPTIONS_NO_CAPTURE);
      });
    }
  }, {
    key: "setObservers",
    value: function setObservers(on) {
      var _this3 = this;

      // We observe both the scroller for content changes, and the target links
      if (this.$obs_scroller) {
        this.$obs_scroller.disconnect();
        this.$obs_scroller = null;
      }

      if (this.$obs_targets) {
        this.$obs_targets.disconnect();
        this.$obs_targets = null;
      }

      if (on) {
        this.$obs_targets = observeDom(this.$el, function () {
          _this3.handleEvent('mutation');
        }, {
          subtree: true,
          childList: true,
          attributes: true,
          attributeFilter: ['href']
        });
        this.$obs_scroller = observeDom(this.getScroller(), function () {
          _this3.handleEvent('mutation');
        }, {
          subtree: true,
          childList: true,
          characterData: true,
          attributes: true,
          attributeFilter: ['id', 'style', 'class']
        });
      }
    } // General event handler

  }, {
    key: "handleEvent",
    value: function handleEvent(evt) {
      var type = isString(evt) ? evt : evt.type;
      var self = this;

      var resizeThrottle = function resizeThrottle() {
        if (!self.$resizeTimeout) {
          self.$resizeTimeout = setTimeout(function () {
            self.refresh();
            self.process();
            self.$resizeTimeout = null;
          }, self.$config.throttle);
        }
      };

      if (type === 'scroll') {
        if (!this.$obs_scroller) {
          // Just in case we are added to the DOM before the scroll target is
          // We re-instantiate our listeners, just in case
          this.listen();
        }

        this.process();
      } else if (/(resize|orientationchange|mutation|refresh)/.test(type)) {
        // Postpone these events by throttle time
        resizeThrottle();
      }
    } // Refresh the list of target links on the element we are applied to

  }, {
    key: "refresh",
    value: function refresh() {
      var _this4 = this;

      var scroller = this.getScroller();

      if (!scroller) {
        return;
      }

      var autoMethod = scroller !== scroller.window ? OffsetMethod.POSITION : OffsetMethod.OFFSET;
      var method = this.$config.method === 'auto' ? autoMethod : this.$config.method;
      var methodFn = method === OffsetMethod.POSITION ? position : offset;
      var offsetBase = method === OffsetMethod.POSITION ? this.getScrollTop() : 0;
      this.$offsets = [];
      this.$targets = [];
      this.$scrollHeight = this.getScrollHeight(); // Find all the unique link HREFs that we will control

      selectAll(this.$selector, this.$el) // Get HREF value
      .map(function (link) {
        return getAttr(link, 'href');
      }) // Filter out HREFs that do not match our RegExp
      .filter(function (href) {
        return href && HREF_REGEX.test(href || '');
      }) // Find all elements with ID that match HREF hash
      .map(function (href) {
        // Convert HREF into an ID (including # at beginning)
        var id = href.replace(HREF_REGEX, '$1').trim();

        if (!id) {
          return null;
        } // Find the element with the ID specified by id


        var el = select(id, scroller);

        if (el && isVisible(el)) {
          return {
            offset: parseInt(methodFn(el).top, 10) + offsetBase,
            target: id
          };
        }

        return null;
      }).filter(Boolean) // Sort them by their offsets (smallest first)
      .sort(function (a, b) {
        return a.offset - b.offset;
      }) // record only unique targets/offsets
      .reduce(function (memo, item) {
        if (!memo[item.target]) {
          _this4.$offsets.push(item.offset);

          _this4.$targets.push(item.target);

          memo[item.target] = true;
        }

        return memo;
      }, {}); // Return this for easy chaining

      return this;
    } // Handle activating/clearing

  }, {
    key: "process",
    value: function process() {
      var scrollTop = this.getScrollTop() + this.$config.offset;
      var scrollHeight = this.getScrollHeight();
      var maxScroll = this.$config.offset + scrollHeight - this.getOffsetHeight();

      if (this.$scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this.$targets[this.$targets.length - 1];

        if (this.$activeTarget !== target) {
          this.activate(target);
        }

        return;
      }

      if (this.$activeTarget && scrollTop < this.$offsets[0] && this.$offsets[0] > 0) {
        this.$activeTarget = null;
        this.clear();
        return;
      }

      for (var i = this.$offsets.length; i--;) {
        var isActiveTarget = this.$activeTarget !== this.$targets[i] && scrollTop >= this.$offsets[i] && (isUndefined(this.$offsets[i + 1]) || scrollTop < this.$offsets[i + 1]);

        if (isActiveTarget) {
          this.activate(this.$targets[i]);
        }
      }
    }
  }, {
    key: "getScroller",
    value: function getScroller() {
      if (this.$scroller) {
        return this.$scroller;
      }

      var scroller = this.$config.element;

      if (!scroller) {
        return null;
      } else if (isElement(scroller.$el)) {
        scroller = scroller.$el;
      } else if (isString(scroller)) {
        scroller = select(scroller);
      }

      if (!scroller) {
        return null;
      }

      this.$scroller = scroller.tagName === 'BODY' ? window : scroller;
      return this.$scroller;
    }
  }, {
    key: "getScrollTop",
    value: function getScrollTop() {
      var scroller = this.getScroller();
      return scroller === window ? scroller.pageYOffset : scroller.scrollTop;
    }
  }, {
    key: "getScrollHeight",
    value: function getScrollHeight() {
      return this.getScroller().scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }
  }, {
    key: "getOffsetHeight",
    value: function getOffsetHeight() {
      var scroller = this.getScroller();
      return scroller === window ? window.innerHeight : getBCR(scroller).height;
    }
  }, {
    key: "activate",
    value: function activate(target) {
      var _this5 = this;

      this.$activeTarget = target;
      this.clear(); // Grab the list of target links (<a href="{$target}">)

      var links = selectAll(this.$selector // Split out the base selectors
      .split(',') // Map to a selector that matches links with HREF ending in the ID (including '#')
      .map(function (selector) {
        return "".concat(selector, "[href$=\"").concat(target, "\"]");
      }) // Join back into a single selector string
      .join(','), this.$el);
      links.forEach(function (link) {
        if (hasClass(link, ClassName.DROPDOWN_ITEM)) {
          // This is a dropdown item, so find the .dropdown-toggle and set its state
          var dropdown = closest(Selector$2.DROPDOWN, link);

          if (dropdown) {
            _this5.setActiveState(select(Selector$2.DROPDOWN_TOGGLE, dropdown), true);
          } // Also set this link's state


          _this5.setActiveState(link, true);
        } else {
          // Set triggered link as active
          _this5.setActiveState(link, true);

          if (matches(link.parentElement, Selector$2.NAV_ITEMS)) {
            // Handle nav-link inside nav-item, and set nav-item active
            _this5.setActiveState(link.parentElement, true);
          } // Set triggered links parents as active
          // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor


          var el = link;

          while (el) {
            el = closest(Selector$2.NAV_LIST_GROUP, el);
            var sibling = el ? el.previousElementSibling : null;

            if (sibling && matches(sibling, "".concat(Selector$2.NAV_LINKS, ", ").concat(Selector$2.LIST_ITEMS))) {
              _this5.setActiveState(sibling, true);
            } // Handle special case where nav-link is inside a nav-item


            if (sibling && matches(sibling, Selector$2.NAV_ITEMS)) {
              _this5.setActiveState(select(Selector$2.NAV_LINKS, sibling), true); // Add active state to nav-item as well


              _this5.setActiveState(sibling, true);
            }
          }
        }
      }); // Signal event to via $root, passing ID of activated target and reference to array of links

      if (links && links.length > 0 && this.$root) {
        this.$root.$emit(ACTIVATE_EVENT, target, links);
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      var _this6 = this;

      selectAll("".concat(this.$selector, ", ").concat(Selector$2.NAV_ITEMS), this.$el).filter(function (el) {
        return hasClass(el, ClassName.ACTIVE);
      }).forEach(function (el) {
        return _this6.setActiveState(el, false);
      });
    }
  }, {
    key: "setActiveState",
    value: function setActiveState(el, active) {
      if (!el) {
        return;
      }

      if (active) {
        addClass(el, ClassName.ACTIVE);
      } else {
        removeClass(el, ClassName.ACTIVE);
      }
    }
  }], [{
    key: "Name",
    get: function get() {
      return NAME$G;
    }
  }, {
    key: "Default",
    get: function get() {
      return Default;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType;
    }
  }]);

  return ScrollSpy;
}();

var BV_SCROLLSPY = '__BV_ScrollSpy__'; // Pre-compiled regular expressions

var onlyDigitsRE = /^\d+$/;
var offsetRE$2 = /^(auto|position|offset)$/; // Build a ScrollSpy config based on bindings (if any)
// Arguments and modifiers take precedence over passed value config object

/* istanbul ignore next: not easy to test */

var parseBindings$2 = function parseBindings(bindings)
/* istanbul ignore next: not easy to test */
{
  var config = {}; // If argument, assume element ID

  if (bindings.arg) {
    // Element ID specified as arg
    // We must prepend '#' to become a CSS selector
    config.element = "#".concat(bindings.arg);
  } // Process modifiers


  keys(bindings.modifiers).forEach(function (mod) {
    if (onlyDigitsRE.test(mod)) {
      // Offset value
      config.offset = parseInt(mod, 10);
    } else if (offsetRE$2.test(mod)) {
      // Offset method
      config.method = mod;
    }
  }); // Process value

  if (isString(bindings.value)) {
    // Value is a CSS ID or selector
    config.element = bindings.value;
  } else if (isNumber(bindings.value)) {
    // Value is offset
    config.offset = Math.round(bindings.value);
  } else if (isObject(bindings.value)) {
    // Value is config object
    // Filter the object based on our supported config options
    keys(bindings.value).filter(function (k) {
      return !!ScrollSpy.DefaultType[k];
    }).forEach(function (k) {
      config[k] = bindings.value[k];
    });
  }

  return config;
}; // Add or update ScrollSpy on our element


var applyScrollspy = function applyScrollspy(el, bindings, vnode)
/* istanbul ignore next: not easy to test */
{
  if (!isBrowser) {
    /* istanbul ignore next */
    return;
  }

  var config = parseBindings$2(bindings);

  if (el[BV_SCROLLSPY]) {
    el[BV_SCROLLSPY].updateConfig(config, vnode.context.$root);
  } else {
    el[BV_SCROLLSPY] = new ScrollSpy(el, config, vnode.context.$root);
  }
}; // Remove ScrollSpy on our element

/* istanbul ignore next: not easy to test */


var removeScrollspy = function removeScrollspy(el)
/* istanbul ignore next: not easy to test */
{
  if (el[BV_SCROLLSPY]) {
    el[BV_SCROLLSPY].dispose();
    el[BV_SCROLLSPY] = null;
    delete el[BV_SCROLLSPY];
  }
};
/*
 * Export our directive
 */


var VBScrollspy = {
  bind: function bind(el, bindings, vnode)
  /* istanbul ignore next: not easy to test */
  {
    applyScrollspy(el, bindings, vnode);
  },
  inserted: function inserted(el, bindings, vnode)
  /* istanbul ignore next: not easy to test */
  {
    applyScrollspy(el, bindings, vnode);
  },
  update: function update(el, bindings, vnode)
  /* istanbul ignore next: not easy to test */
  {
    if (bindings.value !== bindings.oldValue) {
      applyScrollspy(el, bindings, vnode);
    }
  },
  componentUpdated: function componentUpdated(el, bindings, vnode)
  /* istanbul ignore next: not easy to test */
  {
    if (bindings.value !== bindings.oldValue) {
      applyScrollspy(el, bindings, vnode);
    }
  },
  unbind: function unbind(el)
  /* istanbul ignore next: not easy to test */
  {
    removeScrollspy(el);
  }
};

var VBScrollspyPlugin = /*#__PURE__*/pluginFactory({
  directives: {
    VBScrollspy: VBScrollspy
  }
});

var VBTogglePlugin = /*#__PURE__*/pluginFactory({
  directives: {
    VBToggle: VBToggle
  }
});

var VBVisiblePlugin = /*#__PURE__*/pluginFactory({
  directives: {
    VBVisible: VBVisible
  }
});

var directivesPlugin = /*#__PURE__*/pluginFactory({
  plugins: {
    VBHoverPlugin: VBHoverPlugin,
    VBModalPlugin: VBModalPlugin,
    VBPopoverPlugin: VBPopoverPlugin,
    VBScrollspyPlugin: VBScrollspyPlugin,
    VBTogglePlugin: VBTogglePlugin,
    VBTooltipPlugin: VBTooltipPlugin,
    VBVisiblePlugin: VBVisiblePlugin
  }
});

//
var BVConfigPlugin = /*#__PURE__*/pluginFactory();

var RX_ICON_PREFIX = /^BIcon/; // Helper BIcon component
// Requires the requested icon component to be installed

var BIcon = /*#__PURE__*/Vue.extend({
  name: 'BIcon',
  functional: true,
  props: _objectSpread2({
    icon: {
      type: String,
      default: null
    }
  }, commonIconProps, {
    stacked: {
      type: Boolean,
      default: false
    }
  }),
  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props,
        parent = _ref.parent;
    var icon = pascalCase(trim(props.icon || '')).replace(RX_ICON_PREFIX, '');
    var iconName = "BIcon".concat(icon); // If parent context exists, we check to see if the icon has been registered
    // Either locally in the parent component, or globally at the `$root` level
    // If not registered, we render a blank icon

    var components = ((parent || {}).$options || {}).components;
    var componentRefOrName = icon && components ? components[iconName] || BIconBlank : icon ? iconName : BIconBlank;
    return h(componentRefOrName, mergeData(data, {
      props: _objectSpread2({}, props, {
        icon: null
      })
    }));
  }
});

// --- BEGIN AUTO-GENERATED FILE ---

var IconsPlugin = /*#__PURE__*/pluginFactoryNoConfig({
  components: {
    // Icon helper component
    BIcon: BIcon,
    // Icon stacking component
    BIconstack: BIconstack,
    // BootstrapVue custom icon components
    BIconBlank: BIconBlank,
    // Bootstrap icon components
    BIconAlarm: BIconAlarm,
    BIconAlarmFill: BIconAlarmFill,
    BIconAlertCircle: BIconAlertCircle,
    BIconAlertCircleFill: BIconAlertCircleFill,
    BIconAlertOctagon: BIconAlertOctagon,
    BIconAlertOctagonFill: BIconAlertOctagonFill,
    BIconAlertSquare: BIconAlertSquare,
    BIconAlertSquareFill: BIconAlertSquareFill,
    BIconAlertTriangle: BIconAlertTriangle,
    BIconAlertTriangleFill: BIconAlertTriangleFill,
    BIconArchive: BIconArchive,
    BIconArchiveFill: BIconArchiveFill,
    BIconArrowBarBottom: BIconArrowBarBottom,
    BIconArrowBarLeft: BIconArrowBarLeft,
    BIconArrowBarRight: BIconArrowBarRight,
    BIconArrowBarUp: BIconArrowBarUp,
    BIconArrowClockwise: BIconArrowClockwise,
    BIconArrowCounterclockwise: BIconArrowCounterclockwise,
    BIconArrowDown: BIconArrowDown,
    BIconArrowDownLeft: BIconArrowDownLeft,
    BIconArrowDownRight: BIconArrowDownRight,
    BIconArrowDownShort: BIconArrowDownShort,
    BIconArrowLeft: BIconArrowLeft,
    BIconArrowLeftRight: BIconArrowLeftRight,
    BIconArrowLeftShort: BIconArrowLeftShort,
    BIconArrowRepeat: BIconArrowRepeat,
    BIconArrowRight: BIconArrowRight,
    BIconArrowRightShort: BIconArrowRightShort,
    BIconArrowUp: BIconArrowUp,
    BIconArrowUpDown: BIconArrowUpDown,
    BIconArrowUpLeft: BIconArrowUpLeft,
    BIconArrowUpRight: BIconArrowUpRight,
    BIconArrowUpShort: BIconArrowUpShort,
    BIconArrowsAngleContract: BIconArrowsAngleContract,
    BIconArrowsAngleExpand: BIconArrowsAngleExpand,
    BIconArrowsCollapse: BIconArrowsCollapse,
    BIconArrowsExpand: BIconArrowsExpand,
    BIconArrowsFullscreen: BIconArrowsFullscreen,
    BIconAt: BIconAt,
    BIconAward: BIconAward,
    BIconBackspace: BIconBackspace,
    BIconBackspaceFill: BIconBackspaceFill,
    BIconBackspaceReverse: BIconBackspaceReverse,
    BIconBackspaceReverseFill: BIconBackspaceReverseFill,
    BIconBarChart: BIconBarChart,
    BIconBarChartFill: BIconBarChartFill,
    BIconBattery: BIconBattery,
    BIconBatteryCharging: BIconBatteryCharging,
    BIconBatteryFull: BIconBatteryFull,
    BIconBell: BIconBell,
    BIconBellFill: BIconBellFill,
    BIconBlockquoteLeft: BIconBlockquoteLeft,
    BIconBlockquoteRight: BIconBlockquoteRight,
    BIconBook: BIconBook,
    BIconBookHalfFill: BIconBookHalfFill,
    BIconBookmark: BIconBookmark,
    BIconBookmarkFill: BIconBookmarkFill,
    BIconBootstrap: BIconBootstrap,
    BIconBootstrapFill: BIconBootstrapFill,
    BIconBootstrapReboot: BIconBootstrapReboot,
    BIconBoxArrowBottomLeft: BIconBoxArrowBottomLeft,
    BIconBoxArrowBottomRight: BIconBoxArrowBottomRight,
    BIconBoxArrowDown: BIconBoxArrowDown,
    BIconBoxArrowLeft: BIconBoxArrowLeft,
    BIconBoxArrowRight: BIconBoxArrowRight,
    BIconBoxArrowUp: BIconBoxArrowUp,
    BIconBoxArrowUpLeft: BIconBoxArrowUpLeft,
    BIconBoxArrowUpRight: BIconBoxArrowUpRight,
    BIconBraces: BIconBraces,
    BIconBrightnessFillHigh: BIconBrightnessFillHigh,
    BIconBrightnessFillLow: BIconBrightnessFillLow,
    BIconBrightnessHigh: BIconBrightnessHigh,
    BIconBrightnessLow: BIconBrightnessLow,
    BIconBrush: BIconBrush,
    BIconBucket: BIconBucket,
    BIconBucketFill: BIconBucketFill,
    BIconBuilding: BIconBuilding,
    BIconBullseye: BIconBullseye,
    BIconCalendar: BIconCalendar,
    BIconCalendarFill: BIconCalendarFill,
    BIconCamera: BIconCamera,
    BIconCameraVideo: BIconCameraVideo,
    BIconCameraVideoFill: BIconCameraVideoFill,
    BIconCapslock: BIconCapslock,
    BIconCapslockFill: BIconCapslockFill,
    BIconChat: BIconChat,
    BIconChatFill: BIconChatFill,
    BIconCheck: BIconCheck,
    BIconCheckBox: BIconCheckBox,
    BIconCheckCircle: BIconCheckCircle,
    BIconChevronCompactDown: BIconChevronCompactDown,
    BIconChevronCompactLeft: BIconChevronCompactLeft,
    BIconChevronCompactRight: BIconChevronCompactRight,
    BIconChevronCompactUp: BIconChevronCompactUp,
    BIconChevronDown: BIconChevronDown,
    BIconChevronLeft: BIconChevronLeft,
    BIconChevronRight: BIconChevronRight,
    BIconChevronUp: BIconChevronUp,
    BIconCircle: BIconCircle,
    BIconCircleFill: BIconCircleFill,
    BIconCircleHalf: BIconCircleHalf,
    BIconCircleSlash: BIconCircleSlash,
    BIconClock: BIconClock,
    BIconClockFill: BIconClockFill,
    BIconCloud: BIconCloud,
    BIconCloudDownload: BIconCloudDownload,
    BIconCloudFill: BIconCloudFill,
    BIconCloudUpload: BIconCloudUpload,
    BIconCode: BIconCode,
    BIconCodeSlash: BIconCodeSlash,
    BIconColumns: BIconColumns,
    BIconColumnsGutters: BIconColumnsGutters,
    BIconCommand: BIconCommand,
    BIconCompass: BIconCompass,
    BIconCone: BIconCone,
    BIconConeStriped: BIconConeStriped,
    BIconController: BIconController,
    BIconCreditCard: BIconCreditCard,
    BIconCursor: BIconCursor,
    BIconCursorFill: BIconCursorFill,
    BIconDash: BIconDash,
    BIconDiamond: BIconDiamond,
    BIconDiamondHalf: BIconDiamondHalf,
    BIconDisplay: BIconDisplay,
    BIconDisplayFill: BIconDisplayFill,
    BIconDocument: BIconDocument,
    BIconDocumentCode: BIconDocumentCode,
    BIconDocumentDiff: BIconDocumentDiff,
    BIconDocumentRichtext: BIconDocumentRichtext,
    BIconDocumentSpreadsheet: BIconDocumentSpreadsheet,
    BIconDocumentText: BIconDocumentText,
    BIconDocuments: BIconDocuments,
    BIconDocumentsAlt: BIconDocumentsAlt,
    BIconDot: BIconDot,
    BIconDownload: BIconDownload,
    BIconEggFried: BIconEggFried,
    BIconEject: BIconEject,
    BIconEjectFill: BIconEjectFill,
    BIconEnvelope: BIconEnvelope,
    BIconEnvelopeFill: BIconEnvelopeFill,
    BIconEnvelopeOpen: BIconEnvelopeOpen,
    BIconEnvelopeOpenFill: BIconEnvelopeOpenFill,
    BIconEye: BIconEye,
    BIconEyeFill: BIconEyeFill,
    BIconEyeSlash: BIconEyeSlash,
    BIconEyeSlashFill: BIconEyeSlashFill,
    BIconFilter: BIconFilter,
    BIconFlag: BIconFlag,
    BIconFlagFill: BIconFlagFill,
    BIconFolder: BIconFolder,
    BIconFolderFill: BIconFolderFill,
    BIconFolderSymlink: BIconFolderSymlink,
    BIconFolderSymlinkFill: BIconFolderSymlinkFill,
    BIconFonts: BIconFonts,
    BIconForward: BIconForward,
    BIconForwardFill: BIconForwardFill,
    BIconGear: BIconGear,
    BIconGearFill: BIconGearFill,
    BIconGearWide: BIconGearWide,
    BIconGearWideConnected: BIconGearWideConnected,
    BIconGeo: BIconGeo,
    BIconGraphDown: BIconGraphDown,
    BIconGraphUp: BIconGraphUp,
    BIconGrid: BIconGrid,
    BIconGridFill: BIconGridFill,
    BIconHammer: BIconHammer,
    BIconHash: BIconHash,
    BIconHeart: BIconHeart,
    BIconHeartFill: BIconHeartFill,
    BIconHouse: BIconHouse,
    BIconHouseFill: BIconHouseFill,
    BIconImage: BIconImage,
    BIconImageAlt: BIconImageAlt,
    BIconImageFill: BIconImageFill,
    BIconImages: BIconImages,
    BIconInbox: BIconInbox,
    BIconInboxFill: BIconInboxFill,
    BIconInboxes: BIconInboxes,
    BIconInboxesFill: BIconInboxesFill,
    BIconInfo: BIconInfo,
    BIconInfoFill: BIconInfoFill,
    BIconInfoSquare: BIconInfoSquare,
    BIconInfoSquareFill: BIconInfoSquareFill,
    BIconJustify: BIconJustify,
    BIconJustifyLeft: BIconJustifyLeft,
    BIconJustifyRight: BIconJustifyRight,
    BIconKanban: BIconKanban,
    BIconKanbanFill: BIconKanbanFill,
    BIconLaptop: BIconLaptop,
    BIconLayoutSidebar: BIconLayoutSidebar,
    BIconLayoutSidebarReverse: BIconLayoutSidebarReverse,
    BIconLayoutSplit: BIconLayoutSplit,
    BIconList: BIconList,
    BIconListCheck: BIconListCheck,
    BIconListOl: BIconListOl,
    BIconListTask: BIconListTask,
    BIconListUl: BIconListUl,
    BIconLock: BIconLock,
    BIconLockFill: BIconLockFill,
    BIconMap: BIconMap,
    BIconMic: BIconMic,
    BIconMoon: BIconMoon,
    BIconMusicPlayer: BIconMusicPlayer,
    BIconMusicPlayerFill: BIconMusicPlayerFill,
    BIconOption: BIconOption,
    BIconOutlet: BIconOutlet,
    BIconPause: BIconPause,
    BIconPauseFill: BIconPauseFill,
    BIconPen: BIconPen,
    BIconPencil: BIconPencil,
    BIconPeople: BIconPeople,
    BIconPeopleFill: BIconPeopleFill,
    BIconPerson: BIconPerson,
    BIconPersonFill: BIconPersonFill,
    BIconPhone: BIconPhone,
    BIconPhoneLandscape: BIconPhoneLandscape,
    BIconPieChart: BIconPieChart,
    BIconPieChartFill: BIconPieChartFill,
    BIconPlay: BIconPlay,
    BIconPlayFill: BIconPlayFill,
    BIconPlug: BIconPlug,
    BIconPlus: BIconPlus,
    BIconPower: BIconPower,
    BIconQuestion: BIconQuestion,
    BIconQuestionFill: BIconQuestionFill,
    BIconQuestionSquare: BIconQuestionSquare,
    BIconQuestionSquareFill: BIconQuestionSquareFill,
    BIconReply: BIconReply,
    BIconReplyAll: BIconReplyAll,
    BIconReplyAllFill: BIconReplyAllFill,
    BIconReplyFill: BIconReplyFill,
    BIconScrewdriver: BIconScrewdriver,
    BIconSearch: BIconSearch,
    BIconShield: BIconShield,
    BIconShieldFill: BIconShieldFill,
    BIconShieldLock: BIconShieldLock,
    BIconShieldLockFill: BIconShieldLockFill,
    BIconShieldShaded: BIconShieldShaded,
    BIconShift: BIconShift,
    BIconShiftFill: BIconShiftFill,
    BIconSkipBackward: BIconSkipBackward,
    BIconSkipBackwardFill: BIconSkipBackwardFill,
    BIconSkipEnd: BIconSkipEnd,
    BIconSkipEndFill: BIconSkipEndFill,
    BIconSkipForward: BIconSkipForward,
    BIconSkipForwardFill: BIconSkipForwardFill,
    BIconSkipStart: BIconSkipStart,
    BIconSkipStartFill: BIconSkipStartFill,
    BIconSpeaker: BIconSpeaker,
    BIconSquare: BIconSquare,
    BIconSquareFill: BIconSquareFill,
    BIconSquareHalf: BIconSquareHalf,
    BIconStar: BIconStar,
    BIconStarFill: BIconStarFill,
    BIconStarHalf: BIconStarHalf,
    BIconStop: BIconStop,
    BIconStopFill: BIconStopFill,
    BIconStopwatch: BIconStopwatch,
    BIconStopwatchFill: BIconStopwatchFill,
    BIconSun: BIconSun,
    BIconTable: BIconTable,
    BIconTablet: BIconTablet,
    BIconTabletLandscape: BIconTabletLandscape,
    BIconTag: BIconTag,
    BIconTagFill: BIconTagFill,
    BIconTerminal: BIconTerminal,
    BIconTerminalFill: BIconTerminalFill,
    BIconTextCenter: BIconTextCenter,
    BIconTextIndentLeft: BIconTextIndentLeft,
    BIconTextIndentRight: BIconTextIndentRight,
    BIconTextLeft: BIconTextLeft,
    BIconTextRight: BIconTextRight,
    BIconThreeDots: BIconThreeDots,
    BIconThreeDotsVertical: BIconThreeDotsVertical,
    BIconToggleOff: BIconToggleOff,
    BIconToggleOn: BIconToggleOn,
    BIconToggles: BIconToggles,
    BIconTools: BIconTools,
    BIconTrash: BIconTrash,
    BIconTrashFill: BIconTrashFill,
    BIconTriangle: BIconTriangle,
    BIconTriangleFill: BIconTriangleFill,
    BIconTriangleHalf: BIconTriangleHalf,
    BIconTrophy: BIconTrophy,
    BIconTv: BIconTv,
    BIconTvFill: BIconTvFill,
    BIconType: BIconType,
    BIconTypeBold: BIconTypeBold,
    BIconTypeH1: BIconTypeH1,
    BIconTypeH2: BIconTypeH2,
    BIconTypeH3: BIconTypeH3,
    BIconTypeItalic: BIconTypeItalic,
    BIconTypeStrikethrough: BIconTypeStrikethrough,
    BIconTypeUnderline: BIconTypeUnderline,
    BIconUnlock: BIconUnlock,
    BIconUnlockFill: BIconUnlockFill,
    BIconUpload: BIconUpload,
    BIconVolumeDown: BIconVolumeDown,
    BIconVolumeDownFill: BIconVolumeDownFill,
    BIconVolumeMute: BIconVolumeMute,
    BIconVolumeMuteFill: BIconVolumeMuteFill,
    BIconVolumeUp: BIconVolumeUp,
    BIconVolumeUpFill: BIconVolumeUpFill,
    BIconWallet: BIconWallet,
    BIconWatch: BIconWatch,
    BIconWifi: BIconWifi,
    BIconWindow: BIconWindow,
    BIconWrench: BIconWrench,
    BIconX: BIconX,
    BIconXCircle: BIconXCircle,
    BIconXCircleFill: BIconXCircleFill,
    BIconXOctagon: BIconXOctagon,
    BIconXOctagonFill: BIconXOctagonFill,
    BIconXSquare: BIconXSquare,
    BIconXSquareFill: BIconXSquareFill
  }
}); // Export the BootstrapVueIcons plugin installer
// Mainly for the stand-alone bootstrap-vue-icons.xxx.js builds

var BootstrapVueIcons = /*#__PURE__*/pluginFactoryNoConfig({
  plugins: {
    IconsPlugin: IconsPlugin
  }
}, {
  NAME: 'BootstrapVueIcons'
}); // --- END AUTO-GENERATED FILE ---

var NAME$H = 'BootstrapVue'; // --- BootstrapVue installer ---

var install = /*#__PURE__*/installFactory({
  plugins: {
    componentsPlugin: componentsPlugin,
    directivesPlugin: directivesPlugin
  }
}); // --- BootstrapVue plugin ---

var BootstrapVue = /*#__PURE__*/{
  install: install,
  NAME: NAME$H
}; // --- Named exports for BvConfigPlugin ---

export default BootstrapVue;
export { AlertPlugin, BAlert, BBadge, BBreadcrumb, BBreadcrumbItem, BButton, BButtonClose, BButtonGroup, BButtonToolbar, BCalendar, BCard, BCardBody, BCardFooter, BCardGroup, BCardHeader, BCardImg, BCardImgLazy, BCardSubTitle, BCardText, BCardTitle, BCarousel, BCarouselSlide, BCol, BCollapse, BContainer, BDropdown, BDropdownDivider, BDropdownForm, BDropdownGroup, BDropdownHeader, BDropdownItem, BDropdownItemButton, BDropdownText, BEmbed, BForm, BFormCheckbox, BFormCheckboxGroup, BFormDatalist, BFormDatepicker, BFormFile, BFormGroup, BFormInput, BFormInvalidFeedback, BFormRadio, BFormRadioGroup, BFormRow, BFormSelect, BFormSelectOption, BFormSelectOptionGroup, BFormSpinbutton, BFormTag, BFormTags, BFormText, BFormTextarea, BFormTimepicker, BFormValidFeedback, BIcon, BIconAlarm, BIconAlarmFill, BIconAlertCircle, BIconAlertCircleFill, BIconAlertOctagon, BIconAlertOctagonFill, BIconAlertSquare, BIconAlertSquareFill, BIconAlertTriangle, BIconAlertTriangleFill, BIconArchive, BIconArchiveFill, BIconArrowBarBottom, BIconArrowBarLeft, BIconArrowBarRight, BIconArrowBarUp, BIconArrowClockwise, BIconArrowCounterclockwise, BIconArrowDown, BIconArrowDownLeft, BIconArrowDownRight, BIconArrowDownShort, BIconArrowLeft, BIconArrowLeftRight, BIconArrowLeftShort, BIconArrowRepeat, BIconArrowRight, BIconArrowRightShort, BIconArrowUp, BIconArrowUpDown, BIconArrowUpLeft, BIconArrowUpRight, BIconArrowUpShort, BIconArrowsAngleContract, BIconArrowsAngleExpand, BIconArrowsCollapse, BIconArrowsExpand, BIconArrowsFullscreen, BIconAt, BIconAward, BIconBackspace, BIconBackspaceFill, BIconBackspaceReverse, BIconBackspaceReverseFill, BIconBarChart, BIconBarChartFill, BIconBattery, BIconBatteryCharging, BIconBatteryFull, BIconBell, BIconBellFill, BIconBlank, BIconBlockquoteLeft, BIconBlockquoteRight, BIconBook, BIconBookHalfFill, BIconBookmark, BIconBookmarkFill, BIconBootstrap, BIconBootstrapFill, BIconBootstrapReboot, BIconBoxArrowBottomLeft, BIconBoxArrowBottomRight, BIconBoxArrowDown, BIconBoxArrowLeft, BIconBoxArrowRight, BIconBoxArrowUp, BIconBoxArrowUpLeft, BIconBoxArrowUpRight, BIconBraces, BIconBrightnessFillHigh, BIconBrightnessFillLow, BIconBrightnessHigh, BIconBrightnessLow, BIconBrush, BIconBucket, BIconBucketFill, BIconBuilding, BIconBullseye, BIconCalendar, BIconCalendarFill, BIconCamera, BIconCameraVideo, BIconCameraVideoFill, BIconCapslock, BIconCapslockFill, BIconChat, BIconChatFill, BIconCheck, BIconCheckBox, BIconCheckCircle, BIconChevronCompactDown, BIconChevronCompactLeft, BIconChevronCompactRight, BIconChevronCompactUp, BIconChevronDown, BIconChevronLeft, BIconChevronRight, BIconChevronUp, BIconCircle, BIconCircleFill, BIconCircleHalf, BIconCircleSlash, BIconClock, BIconClockFill, BIconCloud, BIconCloudDownload, BIconCloudFill, BIconCloudUpload, BIconCode, BIconCodeSlash, BIconColumns, BIconColumnsGutters, BIconCommand, BIconCompass, BIconCone, BIconConeStriped, BIconController, BIconCreditCard, BIconCursor, BIconCursorFill, BIconDash, BIconDiamond, BIconDiamondHalf, BIconDisplay, BIconDisplayFill, BIconDocument, BIconDocumentCode, BIconDocumentDiff, BIconDocumentRichtext, BIconDocumentSpreadsheet, BIconDocumentText, BIconDocuments, BIconDocumentsAlt, BIconDot, BIconDownload, BIconEggFried, BIconEject, BIconEjectFill, BIconEnvelope, BIconEnvelopeFill, BIconEnvelopeOpen, BIconEnvelopeOpenFill, BIconEye, BIconEyeFill, BIconEyeSlash, BIconEyeSlashFill, BIconFilter, BIconFlag, BIconFlagFill, BIconFolder, BIconFolderFill, BIconFolderSymlink, BIconFolderSymlinkFill, BIconFonts, BIconForward, BIconForwardFill, BIconGear, BIconGearFill, BIconGearWide, BIconGearWideConnected, BIconGeo, BIconGraphDown, BIconGraphUp, BIconGrid, BIconGridFill, BIconHammer, BIconHash, BIconHeart, BIconHeartFill, BIconHouse, BIconHouseFill, BIconImage, BIconImageAlt, BIconImageFill, BIconImages, BIconInbox, BIconInboxFill, BIconInboxes, BIconInboxesFill, BIconInfo, BIconInfoFill, BIconInfoSquare, BIconInfoSquareFill, BIconJustify, BIconJustifyLeft, BIconJustifyRight, BIconKanban, BIconKanbanFill, BIconLaptop, BIconLayoutSidebar, BIconLayoutSidebarReverse, BIconLayoutSplit, BIconList, BIconListCheck, BIconListOl, BIconListTask, BIconListUl, BIconLock, BIconLockFill, BIconMap, BIconMic, BIconMoon, BIconMusicPlayer, BIconMusicPlayerFill, BIconOption, BIconOutlet, BIconPause, BIconPauseFill, BIconPen, BIconPencil, BIconPeople, BIconPeopleFill, BIconPerson, BIconPersonFill, BIconPhone, BIconPhoneLandscape, BIconPieChart, BIconPieChartFill, BIconPlay, BIconPlayFill, BIconPlug, BIconPlus, BIconPower, BIconQuestion, BIconQuestionFill, BIconQuestionSquare, BIconQuestionSquareFill, BIconReply, BIconReplyAll, BIconReplyAllFill, BIconReplyFill, BIconScrewdriver, BIconSearch, BIconShield, BIconShieldFill, BIconShieldLock, BIconShieldLockFill, BIconShieldShaded, BIconShift, BIconShiftFill, BIconSkipBackward, BIconSkipBackwardFill, BIconSkipEnd, BIconSkipEndFill, BIconSkipForward, BIconSkipForwardFill, BIconSkipStart, BIconSkipStartFill, BIconSpeaker, BIconSquare, BIconSquareFill, BIconSquareHalf, BIconStar, BIconStarFill, BIconStarHalf, BIconStop, BIconStopFill, BIconStopwatch, BIconStopwatchFill, BIconSun, BIconTable, BIconTablet, BIconTabletLandscape, BIconTag, BIconTagFill, BIconTerminal, BIconTerminalFill, BIconTextCenter, BIconTextIndentLeft, BIconTextIndentRight, BIconTextLeft, BIconTextRight, BIconThreeDots, BIconThreeDotsVertical, BIconToggleOff, BIconToggleOn, BIconToggles, BIconTools, BIconTrash, BIconTrashFill, BIconTriangle, BIconTriangleFill, BIconTriangleHalf, BIconTrophy, BIconTv, BIconTvFill, BIconType, BIconTypeBold, BIconTypeH1, BIconTypeH2, BIconTypeH3, BIconTypeItalic, BIconTypeStrikethrough, BIconTypeUnderline, BIconUnlock, BIconUnlockFill, BIconUpload, BIconVolumeDown, BIconVolumeDownFill, BIconVolumeMute, BIconVolumeMuteFill, BIconVolumeUp, BIconVolumeUpFill, BIconWallet, BIconWatch, BIconWifi, BIconWindow, BIconWrench, BIconX, BIconXCircle, BIconXCircleFill, BIconXOctagon, BIconXOctagonFill, BIconXSquare, BIconXSquareFill, BIconstack, BImg, BImgLazy, BInputGroup, BInputGroupAddon, BInputGroupAppend, BInputGroupPrepend, BInputGroupText, BJumbotron, BLink, BListGroup, BListGroupItem, BMedia, BMediaAside, BMediaBody, BModal, BNav, BNavForm, BNavItem, BNavItemDropdown, BNavText, BNavbar, BNavbarBrand, BNavbarNav, BNavbarToggle, BOverlay, BPagination, BPaginationNav, BPopover, BProgress, BProgressBar, BRow, BSpinner, BTab, BTable, BTableLite, BTableSimple, BTabs, BTbody, BTd, BTfoot, BTh, BThead, BTime, BToast, BToaster, BTooltip, BTr, BVConfigPlugin as BVConfig, BVConfigPlugin, BVModalPlugin, BVToastPlugin, BadgePlugin, BootstrapVue, BootstrapVueIcons, BreadcrumbPlugin, ButtonGroupPlugin, ButtonPlugin, ButtonToolbarPlugin, CalendarPlugin, CardPlugin, CarouselPlugin, CollapsePlugin, DropdownPlugin, EmbedPlugin, FormCheckboxPlugin, FormDatepickerPlugin, FormFilePlugin, FormGroupPlugin, FormInputPlugin, FormPlugin, FormRadioPlugin, FormSelectPlugin, FormSpinbuttonPlugin, FormTagsPlugin, FormTextareaPlugin, FormTimepickerPlugin, IconsPlugin, ImagePlugin, InputGroupPlugin, JumbotronPlugin, LayoutPlugin, LinkPlugin, ListGroupPlugin, MediaPlugin, ModalPlugin, NAME$H as NAME, NavPlugin, NavbarPlugin, OverlayPlugin, PaginationNavPlugin, PaginationPlugin, PopoverPlugin, ProgressPlugin, SpinnerPlugin, TableLitePlugin, TablePlugin, TableSimplePlugin, TabsPlugin, TimePlugin, ToastPlugin, TooltipPlugin, VBHover, VBHoverPlugin, VBModal, VBModalPlugin, VBPopover, VBPopoverPlugin, VBScrollspy, VBScrollspyPlugin, VBToggle, VBTogglePlugin, VBTooltip, VBTooltipPlugin, VBVisible, VBVisiblePlugin, install };
//# sourceMappingURL=bootstrap-vue.esm.js.map
