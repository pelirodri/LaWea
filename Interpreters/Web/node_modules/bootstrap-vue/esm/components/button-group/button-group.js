function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import Vue, { mergeData } from '../../vue';
import { NAME_BUTTON, NAME_BUTTON_GROUP } from '../../constants/components';
import { getComponentConfig } from '../../utils/config';
export var props = {
  vertical: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: function _default() {
      return getComponentConfig(NAME_BUTTON, 'size');
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

export var BButtonGroup = /*#__PURE__*/Vue.extend({
  name: NAME_BUTTON_GROUP,
  functional: true,
  props: props,
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