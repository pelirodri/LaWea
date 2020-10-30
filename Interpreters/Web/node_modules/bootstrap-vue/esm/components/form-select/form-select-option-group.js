import Vue from '../../vue';
import { NAME_FORM_SELECT_OPTION_GROUP } from '../../constants/components';
import { SLOT_NAME_FIRST } from '../../constants/slot-names';
import { htmlOrText } from '../../utils/html';
import formOptionsMixin from '../../mixins/form-options';
import normalizeSlotMixin from '../../mixins/normalize-slot';
import { BFormSelectOption } from './form-select-option'; // @vue/component

var BFormSelectOptionGroup = /*#__PURE__*/Vue.extend({
  name: NAME_FORM_SELECT_OPTION_GROUP,
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
    }, [this.normalizeSlot(SLOT_NAME_FIRST), $options, this.normalizeSlot()]);
  }
});
export { BFormSelectOptionGroup };