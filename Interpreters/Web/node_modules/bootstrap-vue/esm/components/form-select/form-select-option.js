import Vue from '../../utils/vue';
import { mergeData } from 'vue-functional-data-merge';
var NAME = 'BFormSelectOption';
export var props = {
  value: {
    // type: [String, Number, Boolean, Object],
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  }
}; // @vue/component

export var BFormSelectOption = /*#__PURE__*/Vue.extend({
  name: NAME,
  functional: true,
  props: props,
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