function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import Vue from '../../utils/vue';
import { mergeData } from 'vue-functional-data-merge';
export var props = {
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

export var BContainer = /*#__PURE__*/Vue.extend({
  name: 'BContainer',
  functional: true,
  props: props,
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