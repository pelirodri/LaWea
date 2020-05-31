function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { mergeData } from 'vue-functional-data-merge';
import Vue from '../../utils/vue';
import { htmlOrText } from '../../utils/html';
import { hasNormalizedSlot, normalizeSlot } from '../../utils/normalize-slot';
import { copyProps, pluckProps, prefixPropName, unprefixPropName } from '../../utils/props';
import cardMixin from '../../mixins/card';
import { BCardBody, props as bodyProps } from './card-body';
import { BCardHeader, props as headerProps } from './card-header';
import { BCardFooter, props as footerProps } from './card-footer';
import { BCardImg, props as imgProps } from './card-img';
var cardImgProps = copyProps(imgProps, prefixPropName.bind(null, 'img'));
cardImgProps.imgSrc.required = false;
export var props = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, bodyProps), headerProps), footerProps), cardImgProps), copyProps(cardMixin.props)), {}, {
  align: {
    type: String // default: null

  },
  noBody: {
    type: Boolean,
    default: false
  }
}); // @vue/component

export var BCard = /*#__PURE__*/Vue.extend({
  name: 'BCard',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var _class;

    var props = _ref.props,
        data = _ref.data,
        slots = _ref.slots,
        scopedSlots = _ref.scopedSlots;
    var imgLeft = props.imgLeft,
        imgRight = props.imgRight,
        imgStart = props.imgStart,
        imgEnd = props.imgEnd,
        header = props.header,
        headerHtml = props.headerHtml,
        footer = props.footer,
        footerHtml = props.footerHtml,
        align = props.align,
        textVariant = props.textVariant,
        bgVariant = props.bgVariant,
        borderVariant = props.borderVariant;
    var $scopedSlots = scopedSlots || {};
    var $slots = slots();
    var slotScope = {};
    var $imgFirst = h();
    var $imgLast = h();

    if (props.imgSrc) {
      var $img = h(BCardImg, {
        props: pluckProps(cardImgProps, props, unprefixPropName.bind(null, 'img'))
      });

      if (props.imgBottom) {
        $imgLast = $img;
      } else {
        $imgFirst = $img;
      }
    }

    var $header = h();
    var hasHeaderSlot = hasNormalizedSlot('header', $scopedSlots, $slots);

    if (hasHeaderSlot || header || headerHtml) {
      $header = h(BCardHeader, {
        props: pluckProps(headerProps, props),
        domProps: hasHeaderSlot ? {} : htmlOrText(headerHtml, header)
      }, normalizeSlot('header', slotScope, $scopedSlots, $slots));
    }

    var $content = normalizeSlot('default', slotScope, $scopedSlots, $slots); // Wrap content in <card-body> when `noBody` prop set

    if (!props.noBody) {
      $content = h(BCardBody, {
        props: pluckProps(bodyProps, props)
      }, $content);
    }

    var $footer = h();
    var hasFooterSlot = hasNormalizedSlot('footer', $scopedSlots, $slots);

    if (hasFooterSlot || footer || footerHtml) {
      $footer = h(BCardFooter, {
        props: pluckProps(footerProps, props),
        domProps: hasHeaderSlot ? {} : htmlOrText(footerHtml, footer)
      }, normalizeSlot('footer', slotScope, $scopedSlots, $slots));
    }

    return h(props.tag, mergeData(data, {
      staticClass: 'card',
      class: (_class = {
        'flex-row': imgLeft || imgStart,
        'flex-row-reverse': (imgRight || imgEnd) && !(imgLeft || imgStart)
      }, _defineProperty(_class, "text-".concat(align), align), _defineProperty(_class, "bg-".concat(bgVariant), bgVariant), _defineProperty(_class, "border-".concat(borderVariant), borderVariant), _defineProperty(_class, "text-".concat(textVariant), textVariant), _class)
    }), [$imgFirst, $header, $content, $footer, $imgLast]);
  }
});