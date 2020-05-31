import { eventOff, eventOn } from '../utils/dom'; // @vue/component

export default {
  data: function data() {
    return {
      listenForFocusIn: false
    };
  },
  watch: {
    listenForFocusIn: function listenForFocusIn(newValue, oldValue) {
      if (newValue !== oldValue) {
        eventOff(this.focusInElement, 'focusin', this._focusInHandler, false);

        if (newValue) {
          eventOn(this.focusInElement, 'focusin', this._focusInHandler, false);
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
      eventOn(this.focusInElement, 'focusin', this._focusInHandler, false);
    }
  },
  beforeDestroy: function beforeDestroy()
  /* istanbul ignore next */
  {
    eventOff(this.focusInElement, 'focusin', this._focusInHandler, false);
  },
  methods: {
    _focusInHandler: function _focusInHandler(evt) {
      if (this.focusInHandler) {
        this.focusInHandler(evt);
      }
    }
  }
};