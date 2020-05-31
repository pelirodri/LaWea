import { getComponentConfig } from '../utils/config'; // @vue/component

export default {
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

    /* istanbul ignore next: don't think this is used */
    sizeBtnClass: function sizeBtnClass() {
      return [this.size ? "btn-".concat(this.size) : null];
    }
  }
};