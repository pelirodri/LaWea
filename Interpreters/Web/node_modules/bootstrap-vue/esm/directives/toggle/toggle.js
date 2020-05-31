import KeyCodes from '../../utils/key-codes';
import looseEqual from '../../utils/loose-equal';
import { arrayIncludes, concat } from '../../utils/array';
import { addClass, getAttr, hasAttr, isDisabled, isTag, removeAttr, removeClass, setAttr } from '../../utils/dom';
import { isBrowser } from '../../utils/env';
import { eventOn, eventOff } from '../../utils/events';
import { isString } from '../../utils/inspect';
import { keys } from '../../utils/object'; // --- Constants ---

var ENTER = KeyCodes.ENTER,
    SPACE = KeyCodes.SPACE; // Classes to apply to trigger element

var CLASS_BV_TOGGLE_COLLAPSED = 'collapsed';
var CLASS_BV_TOGGLE_NOT_COLLAPSED = 'not-collapsed'; // Property key for handler storage

var BV_BASE = '__BV_toggle'; // Root event listener property (Function)

var BV_TOGGLE_ROOT_HANDLER = "".concat(BV_BASE, "_HANDLER__"); // Trigger element click handler property (Function)

var BV_TOGGLE_CLICK_HANDLER = "".concat(BV_BASE, "_CLICK__"); // Target visibility state property (Boolean)

var BV_TOGGLE_STATE = "".concat(BV_BASE, "_STATE__"); // Target ID list property (Array)

var BV_TOGGLE_TARGETS = "".concat(BV_BASE, "_TARGETS__"); // Commonly used strings

var STRING_FALSE = 'false';
var STRING_TRUE = 'true'; // Commonly used attribute names

var ATTR_ARIA_CONTROLS = 'aria-controls';
var ATTR_ARIA_EXPANDED = 'aria-expanded';
var ATTR_ROLE = 'role';
var ATTR_TABINDEX = 'tabindex'; // Emitted control event for collapse (emitted to collapse)

export var EVENT_TOGGLE = 'bv::toggle::collapse'; // Listen to event for toggle state update (emitted by collapse)

export var EVENT_STATE = 'bv::collapse::state'; // Private event emitted on `$root` to ensure the toggle state is always synced
// Gets emitted even if the state of b-collapse has not changed
// This event is NOT to be documented as people should not be using it

export var EVENT_STATE_SYNC = 'bv::collapse::sync::state'; // Private event we send to collapse to request state update sync event

export var EVENT_STATE_REQUEST = 'bv::request::collapse::state';
var KEYDOWN_KEY_CODES = [ENTER, SPACE];
var RX_HASH = /^#/;
var RX_HASH_ID = /^#[A-Za-z]+[\w\-:.]*$/;
var RX_SPLIT_SEPARATOR = /\s+/; // --- Helper methods ---

var isNonStandardTag = function isNonStandardTag(el) {
  return !arrayIncludes(['button', 'a'], el.tagName.toLowerCase());
};

var getTargets = function getTargets(_ref, el) {
  var modifiers = _ref.modifiers,
      arg = _ref.arg,
      value = _ref.value;
  // Any modifiers are considered target IDs
  var targets = keys(modifiers || {}); // If value is a string, split out individual targets (if space delimited)

  value = isString(value) ? value.split(RX_SPLIT_SEPARATOR) : value; // Support target ID as link href (`href="#id"`)

  if (isTag(el.tagName, 'a')) {
    var href = getAttr(el, 'href') || '';

    if (RX_HASH_ID.test(href)) {
      targets.push(href.replace(RX_HASH, ''));
    }
  } // Add ID from `arg` (if provided), and support value
  // as a single string ID or an array of string IDs
  // If `value` is not an array or string, then it gets filtered out


  concat(arg, value).forEach(function (t) {
    return isString(t) && targets.push(t);
  }); // Return only unique and truthy target IDs

  return targets.filter(function (t, index, arr) {
    return t && arr.indexOf(t) === index;
  });
};

var removeClickListener = function removeClickListener(el) {
  var handler = el[BV_TOGGLE_CLICK_HANDLER];

  if (handler) {
    eventOff(el, 'click', handler);
    eventOff(el, 'keydown', handler);
  }

  el[BV_TOGGLE_CLICK_HANDLER] = null;
};

var addClickListener = function addClickListener(el, vnode) {
  removeClickListener(el);

  if (vnode.context) {
    var handler = function handler(evt) {
      if (!(evt.type === 'keydown' && !arrayIncludes(KEYDOWN_KEY_CODES, evt.keyCode)) && !isDisabled(el)) {
        var targets = el[BV_TOGGLE_TARGETS] || [];
        targets.forEach(function (target) {
          vnode.context.$root.$emit(EVENT_TOGGLE, target);
        });
      }
    };

    el[BV_TOGGLE_CLICK_HANDLER] = handler;
    eventOn(el, 'click', handler);

    if (isNonStandardTag(el)) {
      eventOn(el, 'keydown', handler);
    }
  }
};

var removeRootListeners = function removeRootListeners(el, vnode) {
  if (el[BV_TOGGLE_ROOT_HANDLER] && vnode.context) {
    vnode.context.$root.$off([EVENT_STATE, EVENT_STATE_SYNC], el[BV_TOGGLE_ROOT_HANDLER]);
  }

  el[BV_TOGGLE_ROOT_HANDLER] = null;
};

var addRootListeners = function addRootListeners(el, vnode) {
  removeRootListeners(el, vnode);

  if (vnode.context) {
    var handler = function handler(id, state) {
      // `state` will be `true` if target is expanded
      if (arrayIncludes(el[BV_TOGGLE_TARGETS] || [], id)) {
        // Set/Clear 'collapsed' visibility class state
        el[BV_TOGGLE_STATE] = state; // Set `aria-expanded` and class state on trigger element

        setToggleState(el, state);
      }
    };

    el[BV_TOGGLE_ROOT_HANDLER] = handler; // Listen for toggle state changes (public) and sync (private)

    vnode.context.$root.$on([EVENT_STATE, EVENT_STATE_SYNC], handler);
  }
};

var setToggleState = function setToggleState(el, state) {
  // State refers to the visibility of the collapse/sidebar
  if (state) {
    removeClass(el, CLASS_BV_TOGGLE_COLLAPSED);
    addClass(el, CLASS_BV_TOGGLE_NOT_COLLAPSED);
    setAttr(el, ATTR_ARIA_EXPANDED, STRING_TRUE);
  } else {
    removeClass(el, CLASS_BV_TOGGLE_NOT_COLLAPSED);
    addClass(el, CLASS_BV_TOGGLE_COLLAPSED);
    setAttr(el, ATTR_ARIA_EXPANDED, STRING_FALSE);
  }
}; // Reset and remove a property from the provided element


var resetProp = function resetProp(el, prop) {
  el[prop] = null;
  delete el[prop];
}; // Handle directive updates


var handleUpdate = function handleUpdate(el, binding, vnode) {
  /* istanbul ignore next: should never happen */
  if (!isBrowser || !vnode.context) {
    return;
  } // If element is not a button or link, we add `role="button"`
  // and `tabindex="0"` for accessibility reasons


  if (isNonStandardTag(el)) {
    if (!hasAttr(el, ATTR_ROLE)) {
      setAttr(el, ATTR_ROLE, 'button');
    }

    if (!hasAttr(el, ATTR_TABINDEX)) {
      setAttr(el, ATTR_TABINDEX, '0');
    }
  } // Ensure the collapse class and `aria-*` attributes persist
  // after element is updated (either by parent re-rendering
  // or changes to this element or its contents)


  setToggleState(el, el[BV_TOGGLE_STATE]); // Parse list of target IDs

  var targets = getTargets(binding, el);
  /* istanbul ignore else */
  // Ensure the `aria-controls` hasn't been overwritten
  // or removed when vnode updates

  if (targets.length) {
    setAttr(el, ATTR_ARIA_CONTROLS, targets.join(' '));
  } else {
    removeAttr(el, ATTR_ARIA_CONTROLS);
  } // Add/Update our click listener(s)


  addClickListener(el, vnode); // If targets array has changed, update

  if (!looseEqual(targets, el[BV_TOGGLE_TARGETS])) {
    // Update targets array to element storage
    el[BV_TOGGLE_TARGETS] = targets; // Ensure `aria-controls` is up to date
    // Request a state update from targets so that we can
    // ensure expanded state is correct (in most cases)

    targets.forEach(function (target) {
      vnode.context.$root.$emit(EVENT_STATE_REQUEST, target);
    });
  }
};
/*
 * Export our directive
 */


export var VBToggle = {
  bind: function bind(el, binding, vnode) {
    // State is initially collapsed until we receive a state event
    el[BV_TOGGLE_STATE] = false; // Assume no targets initially

    el[BV_TOGGLE_TARGETS] = []; // Add our root listeners

    addRootListeners(el, vnode); // Initial update of trigger

    handleUpdate(el, binding, vnode);
  },
  componentUpdated: handleUpdate,
  updated: handleUpdate,
  unbind: function unbind(el, binding, vnode) {
    removeClickListener(el); // Remove our $root listener

    removeRootListeners(el, vnode); // Reset custom props

    resetProp(el, BV_TOGGLE_ROOT_HANDLER);
    resetProp(el, BV_TOGGLE_CLICK_HANDLER);
    resetProp(el, BV_TOGGLE_STATE);
    resetProp(el, BV_TOGGLE_TARGETS); // Reset classes/attrs

    removeClass(el, CLASS_BV_TOGGLE_COLLAPSED);
    removeClass(el, CLASS_BV_TOGGLE_NOT_COLLAPSED);
    removeAttr(el, ATTR_ARIA_EXPANDED);
    removeAttr(el, ATTR_ARIA_CONTROLS);
    removeAttr(el, ATTR_ROLE);
  }
};