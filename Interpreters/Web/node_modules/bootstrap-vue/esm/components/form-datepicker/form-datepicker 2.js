function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import Vue from '../../utils/vue';
import { arrayIncludes } from '../../utils/array';
import { BVFormBtnLabelControl, dropdownProps } from '../../utils/bv-form-btn-label-control';
import { getComponentConfig } from '../../utils/config';
import { createDate, constrainDate, formatYMD, parseYMD } from '../../utils/date';
import { attemptBlur, attemptFocus } from '../../utils/dom';
import { isUndefinedOrNull } from '../../utils/inspect';
import { pick } from '../../utils/object';
import idMixin from '../../mixins/id';
import { BButton } from '../button/button';
import { BCalendar, STR_LONG, STR_NARROW, STR_NUMERIC, STR_SHORT } from '../calendar/calendar';
import { BIconCalendar, BIconCalendarFill } from '../../icons/icons';
var NAME = 'BFormDatepicker'; // Fallback to BCalendar prop if no value found

var getConfigFallback = function getConfigFallback(prop) {
  return getComponentConfig(NAME, prop) || getComponentConfig('BCalendar', prop);
}; // We create our props as a mixin so that we can control
// where they appear in the props listing reference section


var propsMixin = {
  props: _objectSpread({
    value: {
      type: [String, Date],
      default: null
    },
    valueAsDate: {
      type: Boolean,
      default: false
    },
    resetValue: {
      type: [String, Date] // default: null

    },
    initialDate: {
      // This specifies the calendar year/month/day that will be shown when
      // first opening the datepicker if no v-model value is provided
      // Default is the current date (or `min`/`max`)
      // Passed directly to <b-calendar>
      type: [String, Date] // default: null

    },
    placeholder: {
      type: String // Defaults to `labelNoDateSelected` from calendar context
      // default: null

    },
    size: {
      type: String // default: null

    },
    min: {
      type: [String, Date] // default: null

    },
    max: {
      type: [String, Date] // default: null

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
      type: String // default: null

    },
    form: {
      type: String // default: null

    },
    state: {
      // Tri-state prop: `true`, `false` or `null`
      type: Boolean,
      default: null
    },
    dateDisabledFn: {
      type: Function // default: null

    },
    noCloseOnSelect: {
      type: Boolean,
      default: false
    },
    hideHeader: {
      type: Boolean,
      default: false
    },
    showDecadeNav: {
      // When `true` enables the decade navigation buttons
      type: Boolean,
      default: false
    },
    locale: {
      type: [String, Array] // default: null

    },
    startWeekday: {
      // `0` (Sunday), `1` (Monday), ... `6` (Saturday)
      // Day of week to start calendar on
      type: [Number, String],
      default: 0
    },
    direction: {
      type: String // default: null

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
      type: String // default: null

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
        return getComponentConfig(NAME, 'labelTodayButton');
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
        return getComponentConfig(NAME, 'labelResetButton');
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
        return getComponentConfig(NAME, 'labelCloseButton');
      }
    },
    closeButtonVariant: {
      type: String,
      default: 'outline-secondary'
    },
    dateInfoFn: {
      // Passed through to b-calendar
      type: Function // default: undefined

    },
    // Labels for buttons and keyboard shortcuts
    // These pick BCalendar global config if no BFormDate global config
    labelPrevDecade: {
      type: String,
      default: function _default() {
        return getConfigFallback('labelPrevDecade');
      }
    },
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
    labelNextDecade: {
      type: String,
      default: function _default() {
        return getConfigFallback('labelNextDecade');
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
      // Note: This value is *not* to be placed in the global config
      type: Object,
      default: function _default() {
        return {
          year: STR_NUMERIC,
          month: STR_LONG,
          day: STR_NUMERIC,
          weekday: STR_LONG
        };
      }
    },
    weekdayHeaderFormat: {
      // Format of the weekday names at the top of the calendar
      // Note: This value is *not* to be placed in the global config
      type: String,
      // `short` is typically a 3 letter abbreviation,
      // `narrow` is typically a single letter
      // `long` is the full week day name
      // Although some locales may override this (i.e `ar`, etc)
      default: STR_SHORT,
      validator: function validator(value) {
        return arrayIncludes([STR_LONG, STR_SHORT, STR_NARROW], value);
      }
    },
    // Dark mode
    dark: {
      type: Boolean,
      default: false
    },
    // extra dropdown stuff
    menuClass: {
      type: [String, Array, Object] // default: null

    }
  }, dropdownProps)
}; // --- BFormDate component ---
// @vue/component

export var BFormDatepicker = /*#__PURE__*/Vue.extend({
  name: NAME,
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
        dateInfoFn: self.dateInfoFn,
        hideHeader: self.hideHeader,
        showDecadeNav: self.showDecadeNav,
        noHighlightToday: self.noHighlightToday,
        labelPrevDecade: self.labelPrevDecade,
        labelPrevYear: self.labelPrevYear,
        labelPrevMonth: self.labelPrevMonth,
        labelCurrentMonth: self.labelCurrentMonth,
        labelNextMonth: self.labelNextMonth,
        labelNextYear: self.labelNextYear,
        labelNextDecade: self.labelNextDecade,
        labelToday: self.labelToday,
        labelSelected: self.labelSelected,
        labelNoDateSelected: self.labelNoDateSelected,
        labelCalendar: self.labelCalendar,
        labelNav: self.labelNav,
        labelHelp: self.labelHelp,
        dateFormatOptions: self.dateFormatOptions,
        weekdayHeaderFormat: self.weekdayHeaderFormat
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
        attemptFocus(this.$refs.control);
      }
    },
    blur: function blur() {
      if (!this.disabled) {
        attemptBlur(this.$refs.control);
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
        attemptFocus(_this3.$refs.calendar);

        _this3.$emit('shown');
      });
    },
    onHidden: function onHidden() {
      this.isVisible = false;
      this.$emit('hidden');
    },
    // Render helpers
    defaultButtonFn: function defaultButtonFn(_ref) {
      var isHovered = _ref.isHovered,
          hasFocus = _ref.hasFocus;
      return this.$createElement(isHovered || hasFocus ? BIconCalendarFill : BIconCalendar, {
        attrs: {
          'aria-hidden': 'true'
        }
      });
    }
  },
  render: function render(h) {
    var $scopedSlots = this.$scopedSlots;
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
      staticClass: 'b-form-date-calendar w-100',
      props: this.calendarProps,
      on: {
        selected: this.onSelected,
        input: this.onInput,
        context: this.onContext
      },
      scopedSlots: pick($scopedSlots, ['nav-prev-decade', 'nav-prev-year', 'nav-prev-month', 'nav-this-month', 'nav-next-month', 'nav-next-year', 'nav-next-decade'])
    }, $footer);
    return h(BVFormBtnLabelControl, {
      ref: 'control',
      staticClass: 'b-form-datepicker',
      props: _objectSpread(_objectSpread({}, this.$props), {}, {
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
        'button-content': $scopedSlots['button-content'] || this.defaultButtonFn
      }
    }, [$calendar]);
  }
});