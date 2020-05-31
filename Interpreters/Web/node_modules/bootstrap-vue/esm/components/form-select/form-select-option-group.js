import Vue from '../../utils/vue';
import { htmlOrText } from '../../utils/html';
import formOptionsMixin from '../../mixins/form-options';
import normalizeSlotMixin from '../../mixins/normalize-slot';
import { BFormSelectOption } from './form-select-option'; // @vue/component

var BFormSelectOptionGroup = /*#__PURE__*/Vue.extend({
  name: 'BFormSelectOptionGroup',
  mixins: [normalizeSlotMixin, formOptionsMixin],
  props: {
    label: {
      type: String,
      required: true
    }
  },
  render: function render(h) {
    var $options = this.formOptions.map(function (option, index) {
      var value = option.value,
          text = option.text,
          html = option.html,
          disabled = option.disabled;
      return h(BFormSelectOption, {
        attrs: {
          value: value,
          disabled: disabled
        },
        domProps: htmlOrText(html, text),
        key: "option_".concat(index)
      });
    });
    return h('optgroup', {
      attrs: {
        label: this.label
      }
    }, [this.normalizeSlot('first'), $options, this.normalizeSlot('default')]);
  }
});
export { BFormSelectOptionGroup };