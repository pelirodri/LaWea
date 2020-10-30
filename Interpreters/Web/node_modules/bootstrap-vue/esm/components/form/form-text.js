function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import Vue, { mergeData } from '../../vue';
import { NAME_FORM_TEXT } from '../../constants/components';
import { getComponentConfig } from '../../utils/config';
export var props = {
  id: {
    type: String // default: null

  },
  tag: {
    type: String,
    default: 'small'
  },
  textVariant: {
    type: String,
    default: function _default() {
      return getComponentConfig(NAME_FORM_TEXT, 'textVariant');
    }
  },
  inline: {
    type: Boolean,
    default: false
  }
}; // @vue/component

export var BFormText = /*#__PURE__*/Vue.extend({
  name: NAME_FORM_TEXT,
  functional: true,
  props: props,
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