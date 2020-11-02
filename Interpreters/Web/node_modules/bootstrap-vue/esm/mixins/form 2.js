import { attemptFocus, isVisible, matches, requestAF, select } from '../utils/dom';
var SELECTOR = 'input, textarea, select'; // @vue/component

export default {
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
      type: String // default: null

    },
    autofocus: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted() {
    this.handleAutofocus();
  },

  /* istanbul ignore next */
  activated: function activated() {
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

            attemptFocus(el);
          }
        });
      });
    }
  }
};