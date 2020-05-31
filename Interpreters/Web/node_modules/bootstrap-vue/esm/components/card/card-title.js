import Vue from '../../utils/vue';
import { mergeData } from 'vue-functional-data-merge';
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
  name: 'BCardTitle',
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