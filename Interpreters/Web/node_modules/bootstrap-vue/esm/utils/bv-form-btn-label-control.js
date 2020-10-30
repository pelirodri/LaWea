function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
// Private component used by `b-form-datepicker` and `b-form-timepicker`
//
import Vue from '../vue';
import { NAME_FORM_BUTTON_LABEL_CONTROL } from '../constants/components';
import { SLOT_NAME_BUTTON_CONTENT, SLOT_NAME_DEFAULT } from '../constants/slot-names';
import { attemptBlur, attemptFocus } from './dom';
import { stopEvent } from './events';
import { toString } from './string';
import dropdownMixin, { commonProps } from '../mixins/dropdown';
import idMixin from '../mixins/id';
import normalizeSlotMixin from '../mixins/normalize-slot';
import { VBHover } from '../directives/hover/hover';
import { BIconChevronDown } from '../icons/icons'; // Re-export common dropdown props used for convenience

export var dropdownProps = commonProps; // @vue/component

export var BVFormBtnLabelControl = /*#__PURE__*/Vue.extend({
  name: NAME_FORM_BUTTON_LABEL_CONTROL,
  directives: {
    BHover: VBHover
  },
  mixins: [idMixin, normalizeSlotMixin, dropdownMixin],
  props: {
    value: {
      // This is the value placed on the hidden input
      type: String,
      default: ''
    },
    formattedValue: {
      // This is the value shown in the label
      // Defaults back to `value`
      type: String // default: null

    },
    placeholder: {
      // This is the value placed on the hidden input when no value selected
      type: String // default: null

    },
    labelSelected: {
      // Value placed in sr-only span inside label when value is present
      type: String // default: null

    },
    state: {
      // Tri-state prop: `true`, `false`, or `null`
      type: Boolean,
      // We must explicitly default to `null` here otherwise
      // Vue coerces `undefined` into Boolean `false`
      default: null
    },
    size: {
      type: String // default: null

    },
    name: {
      type: String // default: null

    },
    form: {
      type: String // default: null

    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    lang: {
      type: String // default: null

    },
    rtl: {
      // Tri-state prop: `true`, `false` or `null`
      type: Boolean,
      // We must explicitly default to `null` here otherwise
      // Vue coerces `undefined` into Boolean `false`
      default: null
    },
    buttonOnly: {
      // When true, renders a btn-group wrapper and visually hides the label
      type: Boolean,
      default: false
    },
    buttonVariant: {
      // Applicable in button mode only
      type: String,
      default: 'secondary'
    },
    menuClass: {
      // Extra classes to apply to the `dropdown-menu` div
      type: [String, Array, Object] // default: null

    }
  },
  data: function data() {
    return {
      isHovered: false,
      hasFocus: false
    };
  },
  computed: {
    idButton: function idButton() {
      return this.safeId();
    },
    idLabel: function idLabel() {
      return this.safeId('_value_');
    },
    idMenu: function idMenu() {
      return this.safeId('_dialog_');
    },
    idWrapper: function idWrapper() {
      return this.safeId('_outer_');
    },
    computedDir: function computedDir() {
      return this.rtl === true ? 'rtl' : this.rtl === false ? 'ltr' : null;
    }
  },
  methods: {
    focus: function focus() {
      if (!this.disabled) {
        attemptFocus(this.$refs.toggle);
      }
    },
    blur: function blur() {
      if (!this.disabled) {
        attemptBlur(this.$refs.toggle);
      }
    },
    setFocus: function setFocus(evt) {
      this.hasFocus = evt.type === 'focus';
    },
    handleHover: function handleHover(hovered) {
      this.isHovered = hovered;
    }
  },
  render: function render(h) {
    var _class, _class2, _ref;

    var idButton = this.idButton;
    var idLabel = this.idLabel;
    var idMenu = this.idMenu;
    var idWrapper = this.idWrapper;
    var disabled = this.disabled;
    var readonly = this.readonly;
    var required = this.required;
    var isHovered = this.isHovered;
    var hasFocus = this.hasFocus;
    var state = this.state;
    var visible = this.visible;
    var size = this.size;
    var value = toString(this.value) || '';
    var labelSelected = this.labelSelected;
    var buttonOnly = !!this.buttonOnly;
    var buttonVariant = this.buttonVariant;
    var btnScope = {
      isHovered: isHovered,
      hasFocus: hasFocus,
      state: state,
      opened: visible
    };
    var $button = h('button', {
      ref: 'toggle',
      staticClass: 'btn',
      class: (_class = {}, _defineProperty(_class, "btn-".concat(buttonVariant), buttonOnly), _defineProperty(_class, "btn-".concat(size), !!size), _defineProperty(_class, 'h-auto', !buttonOnly), _defineProperty(_class, 'dropdown-toggle', buttonOnly), _defineProperty(_class, 'dropdown-toggle-no-caret', buttonOnly), _class),
      attrs: {
        id: idButton,
        type: 'button',
        disabled: disabled,
        'aria-haspopup': 'dialog',
        'aria-expanded': visible ? 'true' : 'false',
        'aria-invalid': state === false || required && !value ? 'true' : null,
        'aria-required': required ? 'true' : null
      },
      directives: [{
        name: 'b-hover',
        value: this.handleHover
      }],
      on: {
        mousedown: this.onMousedown,
        click: this.toggle,
        keydown: this.toggle,
        // Handle ENTER, SPACE and DOWN
        '!focus': this.setFocus,
        '!blur': this.setFocus
      }
    }, [this.hasNormalizedSlot(SLOT_NAME_BUTTON_CONTENT) ? this.normalizeSlot(SLOT_NAME_BUTTON_CONTENT, btnScope) :
    /* istanbul ignore next */
    h(BIconChevronDown, {
      props: {
        scale: 1.25
      }
    })]); // Hidden input

    var $hidden = h();

    if (this.name && !disabled) {
      $hidden = h('input', {
        attrs: {
          type: 'hidden',
          name: this.name || null,
          form: this.form || null,
          value: value
        }
      });
    } // Dropdown content


    var $menu = h('div', {
      ref: 'menu',
      staticClass: 'dropdown-menu',
      class: [this.menuClass, {
        show: visible,
        'dropdown-menu-right': this.right
      }],
      attrs: {
        id: idMenu,
        role: 'dialog',
        tabindex: '-1',
        'aria-modal': 'false',
        'aria-labelledby': idLabel
      },
      on: {
        keydown: this.onKeydown // Handle ESC

      }
    }, [this.normalizeSlot(SLOT_NAME_DEFAULT, {
      opened: visible
    })]); // Value label

    var $label = h('label', {
      staticClass: 'form-control text-break text-wrap bg-transparent h-auto',
      class: (_class2 = {
        // Hidden in button only mode
        'sr-only': buttonOnly,
        // Mute the text if showing the placeholder
        'text-muted': !value
      }, _defineProperty(_class2, "form-control-".concat(size), !!size), _defineProperty(_class2, 'is-invalid', state === false), _defineProperty(_class2, 'is-valid', state === true), _class2),
      attrs: {
        id: idLabel,
        for: idButton,
        'aria-invalid': state === false || required && !value ? 'true' : null,
        'aria-required': required ? 'true' : null
      },
      directives: [{
        name: 'b-hover',
        value: this.handleHover
      }],
      on: {
        // Disable bubbling of the click event to
        // prevent menu from closing and re-opening
        '!click':
        /* istanbul ignore next */
        function click(evt) {
          stopEvent(evt, {
            preventDefault: false
          });
        }
      }
    }, [value ? this.formattedValue || value : this.placeholder || '', // Add the selected label for screen readers when a value is provided
    value && labelSelected ? h('bdi', {
      staticClass: 'sr-only'
    }, labelSelected) : '']); // Return the custom form control wrapper

    return h('div', {
      staticClass: 'b-form-btn-label-control dropdown',
      class: [this.directionClass, this.boundaryClass, (_ref = {
        'btn-group': buttonOnly,
        'form-control': !buttonOnly
      }, _defineProperty(_ref, "form-control-".concat(size), !!size && !buttonOnly), _defineProperty(_ref, 'd-flex', !buttonOnly), _defineProperty(_ref, 'h-auto', !buttonOnly), _defineProperty(_ref, 'align-items-stretch', !buttonOnly), _defineProperty(_ref, "focus", hasFocus && !buttonOnly), _defineProperty(_ref, "show", visible), _defineProperty(_ref, 'is-valid', state === true), _defineProperty(_ref, 'is-invalid', state === false), _ref)],
      attrs: {
        id: idWrapper,
        role: buttonOnly ? null : 'group',
        lang: this.lang || null,
        dir: this.computedDir,
        'aria-disabled': disabled,
        'aria-readonly': readonly && !disabled,
        'aria-labelledby': idLabel,
        'aria-invalid': state === false || required && !value ? 'true' : null,
        'aria-required': required ? 'true' : null
      }
    }, [$button, $hidden, $menu, $label]);
  }
});