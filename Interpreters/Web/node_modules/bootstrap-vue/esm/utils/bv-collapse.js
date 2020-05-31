// Generic collapse transion helper component
//
// Note:
//   Applies the classes `collapse`, `show` and `collapsing`
//   during the enter/leave transition phases only
//   Although it appears that Vue may be leaving the classes
//   in-place after the transition completes
import Vue from './vue';
import { mergeData } from 'vue-functional-data-merge';
import { getBCR, reflow, requestAF } from './dom'; // Transition event handler helpers

var onEnter = function onEnter(el) {
  el.style.height = 0; // Animaton frame delay needed for `appear` to work

  requestAF(function () {
    reflow(el);
    el.style.height = "".concat(el.scrollHeight, "px");
  });
};

var onAfterEnter = function onAfterEnter(el) {
  el.style.height = null;
};

var onLeave = function onLeave(el) {
  el.style.height = 'auto';
  el.style.display = 'block';
  el.style.height = "".concat(getBCR(el).height, "px");
  reflow(el);
  el.style.height = 0;
};

var onAfterLeave = function onAfterLeave(el) {
  el.style.height = null;
}; // Default transition props
// `appear` will use the enter classes


var TRANSITION_PROPS = {
  css: true,
  enterClass: '',
  enterActiveClass: 'collapsing',
  enterToClass: 'collapse show',
  leaveClass: 'collapse show',
  leaveActiveClass: 'collapsing',
  leaveToClass: 'collapse'
}; // Default transition handlers
// `appear` will use the enter handlers

var TRANSITION_HANDLERS = {
  enter: onEnter,
  afterEnter: onAfterEnter,
  leave: onLeave,
  afterLeave: onAfterLeave
}; // @vue/component

export var BVCollapse = /*#__PURE__*/Vue.extend({
  name: 'BVCollapse',
  functional: true,
  props: {
    appear: {
      // If `true` (and `visible` is `true` on mount), animate initially visible
      type: Boolean,
      default: false
    }
  },
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h('transition', // We merge in the `appear` prop last
    mergeData(data, {
      props: TRANSITION_PROPS,
      on: TRANSITION_HANDLERS
    }, {
      props: props
    }), // Note: `<transition>` supports a single root element only
    children);
  }
});