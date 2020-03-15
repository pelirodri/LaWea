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
    return h('optgroup', {
      attrs: {
        label: this.label
      }
    }, [this.normalizeSlot('first'), this.formOptions.map(function (option, index) {
      return h(BFormSelectOption, {
        props: {
          value: option.value,
          disabled: option.disabled
        },
        domProps: htmlOrText(option.html, option.text),
        key: "option_".concat(index, "_opt")
      });
    }), this.normalizeSlot('default')]);
  }
});
export { BFormSelectOptionGroup };