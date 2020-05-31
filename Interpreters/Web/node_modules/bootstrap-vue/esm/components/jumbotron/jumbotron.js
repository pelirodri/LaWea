function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import Vue from '../../utils/vue';
import { mergeData } from 'vue-functional-data-merge';
import { getComponentConfig } from '../../utils/config';
import { htmlOrText } from '../../utils/html';
import { hasNormalizedSlot, normalizeSlot } from '../../utils/normalize-slot';
import { BContainer } from '../layout/container'; // --- Constants ---

var NAME = 'BJumbotron'; // --- Props ---

export var props = {
  fluid: {
    type: Boolean,
    default: false
  },
  containerFluid: {
    type: [Boolean, String],
    default: false
  },
  header: {
    type: String // default: null

  },
  headerHtml: {
    type: String // default: null

  },
  headerTag: {
    type: String,
    default: 'h1'
  },
  headerLevel: {
    type: [Number, String],
    default: '3'
  },
  lead: {
    type: String // default: null

  },
  leadHtml: {
    type: String // default: null

  },
  leadTag: {
    type: String,
    default: 'p'
  },
  tag: {
    type: String,
    default: 'div'
  },
  bgVariant: {
    type: String,
    default: function _default() {
      return getComponentConfig(NAME, 'bgVariant');
    }
  },
  borderVariant: {
    type: String,
    default: function _default() {
      return getComponentConfig(NAME, 'borderVariant');
    }
  },
  textVariant: {
    type: String,
    default: function _default() {
      return getComponentConfig(NAME, 'textVariant');
    }
  }
}; // --- Main component ---
// @vue/component

export var BJumbotron = /*#__PURE__*/Vue.extend({
  name: NAME,
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var _class2;

    var props = _ref.props,
        data = _ref.data,
        slots = _ref.slots,
        scopedSlots = _ref.scopedSlots;
    var header = props.header,
        headerHtml = props.headerHtml,
        lead = props.lead,
        leadHtml = props.leadHtml,
        textVariant = props.textVariant,
        bgVariant = props.bgVariant,
        borderVariant = props.borderVariant;
    var $scopedSlots = scopedSlots || {};
    var $slots = slots();
    var slotScope = {};
    var $header = h();
    var hasHeaderSlot = hasNormalizedSlot('header', $scopedSlots, $slots);

    if (hasHeaderSlot || header || headerHtml) {
      var headerLevel = props.headerLevel;
      $header = h(props.headerTag, {
        class: _defineProperty({}, "display-".concat(headerLevel), headerLevel),
        domProps: hasHeaderSlot ? {} : htmlOrText(headerHtml, header)
      }, normalizeSlot('header', slotScope, $scopedSlots, $slots));
    }

    var $lead = h();
    var hasLeadSlot = hasNormalizedSlot('lead', $scopedSlots, $slots);

    if (hasLeadSlot || lead || leadHtml) {
      $lead = h(props.leadTag, {
        staticClass: 'lead',
        domProps: hasLeadSlot ? {} : htmlOrText(leadHtml, lead)
      }, normalizeSlot('lead', slotScope, $scopedSlots, $slots));
    }

    var $children = [$header, $lead, normalizeSlot('default', slotScope, $scopedSlots, $slots)]; // If fluid, wrap content in a container

    if (props.fluid) {
      $children = [h(BContainer, {
        props: {
          fluid: props.containerFluid
        }
      }, $children)];
    }

    return h(props.tag, mergeData(data, {
      staticClass: 'jumbotron',
      class: (_class2 = {
        'jumbotron-fluid': props.fluid
      }, _defineProperty(_class2, "text-".concat(textVariant), textVariant), _defineProperty(_class2, "bg-".concat(bgVariant), bgVariant), _defineProperty(_class2, "border-".concat(borderVariant), borderVariant), _defineProperty(_class2, "border", borderVariant), _class2)
    }), $children);
  }
});