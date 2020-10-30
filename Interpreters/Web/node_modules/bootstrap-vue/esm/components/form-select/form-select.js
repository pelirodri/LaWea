import Vue from '../../vue';
import { NAME_FORM_SELECT } from '../../constants/components';
import { SLOT_NAME_FIRST } from '../../constants/slot-names';
import { from as arrayFrom } from '../../utils/array';
import { attemptBlur, attemptFocus } from '../../utils/dom';
import { htmlOrText } from '../../utils/html';
import { isArray } from '../../utils/inspect';
import formCustomMixin from '../../mixins/form-custom';
import formMixin from '../../mixins/form';
import formSizeMixin from '../../mixins/form-size';
import formStateMixin from '../../mixins/form-state';
import idMixin from '../../mixins/id';
import normalizeSlotMixin from '../../mixins/normalize-slot';
import optionsMixin from './helpers/mixin-options';
import { BFormSelectOption } from './form-select-option';
import { BFormSelectOptionGroup } from './form-select-option-group'; // @vue/component

export var BFormSelect = /*#__PURE__*/Vue.extend({
  name: NAME_FORM_SELECT,
  mixins: [idMixin, normalizeSlotMixin, formMixin, formSizeMixin, formStateMixin, formCustomMixin, optionsMixin],
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: {// type: [Object, Array, String, Number, Boolean],
      // default: undefined
    },
    multiple: {
      type: Boolean,
      default: false
    },
    selectSize: {
      // Browsers default size to 0, which shows 4 rows in most browsers in multiple mode
      // Size of 1 can bork out Firefox
      type: Number,
      default: 0
    },
    ariaInvalid: {
      type: [Boolean, String],
      default: false
    }
  },
  data: function data() {
    return {
      localValue: this.value
    };
  },
  computed: {
    computedSelectSize: function computedSelectSize() {
      // Custom selects with a size of zero causes the arrows to be hidden,
      // so dont render the size attribute in this case
      return !this.plain && this.selectSize === 0 ? null : this.selectSize;
    },
    inputClass: function inputClass() {
      return [this.plain ? 'form-control' : 'custom-select', this.size && this.plain ? "form-control-".concat(this.size) : null, this.size && !this.plain ? "custom-select-".concat(this.size) : null, this.stateClass];
    },
    computedAriaInvalid: function computedAriaInvalid() {
      if (this.ariaInvalid === true || this.ariaInvalid === 'true') {
        return 'true';
      }

      return this.stateClass === 'is-invalid' ? 'true' : null;
    }
  },
  watch: {
    value: function value(newVal) {
      this.localValue = newVal;
    },
    localValue: function localValue() {
      this.$emit('input', this.localValue);
    }
  },
  methods: {
    focus: function focus() {
      attemptFocus(this.$refs.input);
    },
    blur: function blur() {
      attemptBlur(this.$refs.input);
    },
    onChange: function onChange(evt) {
      var _this = this;

      var target = evt.target;
      var selectedVal = arrayFrom(target.options).filter(function (o) {
        return o.selected;
      }).map(function (o) {
        return '_value' in o ? o._value : o.value;
      });
      this.localValue = target.multiple ? selectedVal : selectedVal[0];
      this.$nextTick(function () {
        _this.$emit('change', _this.localValue);
      });
    }
  },
  render: function render(h) {
    var name = this.name,
        disabled = this.disabled,
        required = this.required,
        size = this.computedSelectSize,
        value = this.localValue;
    var $options = this.formOptions.map(function (option, index) {
      var value = option.value,
          label = option.label,
          options = option.options,
          disabled = option.disabled;
      var key = "option_".concat(index);
      return isArray(options) ? h(BFormSelectOptionGroup, {
        props: {
          label: label,
          options: options
        },
        key: key
      }) : h(BFormSelectOption, {
        props: {
          value: value,
          disabled: disabled
        },
        domProps: htmlOrText(option.html, option.text),
        key: key
      });
    });
    return h('select', {
      class: this.inputClass,
      attrs: {
        id: this.safeId(),
        name: name,
        form: this.form || null,
        multiple: this.multiple || null,
        size: size,
        disabled: disabled,
        required: required,
        'aria-required': required ? 'true' : null,
        'aria-invalid': this.computedAriaInvalid
      },
      on: {
        change: this.onChange
      },
      directives: [{
        name: 'model',
        value: value
      }],
      ref: 'input'
    }, [this.normalizeSlot(SLOT_NAME_FIRST), $options, this.normalizeSlot()]);
  }
});