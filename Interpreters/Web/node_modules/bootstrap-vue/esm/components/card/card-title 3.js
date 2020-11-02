import { NAME_CARD_TITLE } from '../../constants/components';
import Vue, { mergeData } from '../../utils/vue';
import { toString } from '../../utils/string';
export var props = {
  title: {
    type: String // default: null

  },
  titleTag: {
    type: String,
    default: 'h4'
  }
}; // @vue/component

export var BCardTitle = /*#__PURE__*/Vue.extend({
  name: NAME_CARD_TITLE,
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.titleTag, mergeData(data, {
      staticClass: 'card-title'
    }), children || toString(props.title));
  }
});