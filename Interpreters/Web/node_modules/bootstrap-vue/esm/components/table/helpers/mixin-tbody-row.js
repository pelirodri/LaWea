function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import get from '../../../utils/get';
import toString from '../../../utils/to-string';
import { isFunction, isString, isUndefinedOrNull } from '../../../utils/inspect';
import { BTr } from '../tr';
import { BTd } from '../td';
import { BTh } from '../th';
var detailsSlotName = 'row-details';
export default {
  props: {
    tbodyTrClass: {
      type: [String, Array, Function],
      default: null
    }
  },
  methods: {
    // Methods for computing classes, attributes and styles for table cells
    getTdValues: function getTdValues(item, key, tdValue, defValue) {
      var parent = this.$parent;

      if (tdValue) {
        var value = get(item, key, '');

        if (isFunction(tdValue)) {
          return tdValue(value, key, item);
        } else if (isString(tdValue) && isFunction(parent[tdValue])) {
          return parent[tdValue](value, key, item);
        }

        return tdValue;
      }

      return defValue;
    },
    getThValues: function getThValues(item, key, thValue, type, defValue) {
      var parent = this.$parent;

      if (thValue) {
        var value = get(item, key, '');

        if (isFunction(thValue)) {
          return thValue(value, key, item, type);
        } else if (isString(thValue) && isFunction(parent[thValue])) {
          return parent[thValue](value, key, item, type);
        }

        return thValue;
      }

      return defValue;
    },
    // Method to get the value for a field
    getFormattedValue: function getFormattedValue(item, field) {
      var key = field.key;
      var formatter = this.getFieldFormatter(key);
      var value = get(item, key, null);

      if (isFunction(formatter)) {
        value = formatter(value, key, item);
      }

      return isUndefinedOrNull(value) ? '' : value;
    },
    // Factory function methods
    toggleDetailsFactory: function toggleDetailsFactory(hasDetailsSlot, item) {
      var _this = this;

      // Returns a function to toggle a row's details slot
      return function () {
        if (hasDetailsSlot) {
          _this.$set(item, '_showDetails', !item._showDetails);
        }
      };
    },
    // Row event handlers
    rowHovered: function rowHovered(evt) {
      // `mouseenter` handler (non-bubbling)
      // `this.tbodyRowEvtStopped` from tbody mixin
      if (!this.tbodyRowEvtStopped(evt)) {
        // `this.emitTbodyRowEvent` from tbody mixin
        this.emitTbodyRowEvent('row-hovered', evt);
      }
    },
    rowUnhovered: function rowUnhovered(evt) {
      // `mouseleave` handler (non-bubbling)
      // `this.tbodyRowEvtStopped` from tbody mixin
      if (!this.tbodyRowEvtStopped(evt)) {
        // `this.emitTbodyRowEvent` from tbody mixin
        this.emitTbodyRowEvent('row-unhovered', evt);
      }
    },
    // Render helpers
    renderTbodyRowCell: function renderTbodyRowCell(field, colIndex, item, rowIndex) {
      // Renders a TD or TH for a row's field
      var h = this.$createElement;
      var hasDetailsSlot = this.hasNormalizedSlot(detailsSlotName);
      var formatted = this.getFormattedValue(item, field);
      var key = field.key; // We only uses the helper components for sticky columns to
      // improve performance of BTable/BTableLite by reducing the
      // total number of vue instances created during render

      var cellTag = field.stickyColumn ? field.isRowHeader ? BTh : BTd : field.isRowHeader ? 'th' : 'td';
      var cellVariant = item._cellVariants && item._cellVariants[key] ? item._cellVariants[key] : field.variant || null;
      var data = {
        // For the Vue key, we concatenate the column index and
        // field key (as field keys could be duplicated)
        // TODO: Although we do prevent duplicate field keys...
        //   So we could change this to: `row-${rowIndex}-cell-${key}`
        key: "row-".concat(rowIndex, "-cell-").concat(colIndex, "-").concat(key),
        class: [field.class ? field.class : '', this.getTdValues(item, key, field.tdClass, '')],
        props: {},
        attrs: _objectSpread({
          'aria-colindex': String(colIndex + 1)
        }, field.isRowHeader ? this.getThValues(item, key, field.thAttr, 'row', {}) : this.getTdValues(item, key, field.tdAttr, {}))
      };

      if (field.stickyColumn) {
        // We are using the helper BTd or BTh
        data.props = {
          stackedHeading: this.isStacked ? field.label : null,
          stickyColumn: field.stickyColumn,
          variant: cellVariant
        };
      } else {
        // Using native TD or TH element, so we need to
        // add in the attributes and variant class
        data.attrs['data-label'] = this.isStacked && !isUndefinedOrNull(field.label) ? toString(field.label) : null;
        data.attrs.role = field.isRowHeader ? 'rowheader' : 'cell';
        data.attrs.scope = field.isRowHeader ? 'row' : null; // Add in the variant class

        if (cellVariant) {
          data.class.push("".concat(this.dark ? 'bg' : 'table', "-").concat(cellVariant));
        }
      }

      var slotScope = {
        item: item,
        index: rowIndex,
        field: field,
        unformatted: get(item, key, ''),
        value: formatted,
        toggleDetails: this.toggleDetailsFactory(hasDetailsSlot, item),
        detailsShowing: Boolean(item._showDetails)
      };

      if (this.selectedRows) {
        // Add in rowSelected scope property if selectable rows supported
        slotScope.rowSelected = this.isRowSelected(rowIndex);
      } // The new `v-slot` syntax doesn't like a slot name starting with
      // a square bracket and if using in-document HTML templates, the
      // v-slot attributes are lower-cased by the browser.
      // Switched to round bracket syntax to prevent confusion with
      // dynamic slot name syntax.
      // We look for slots in this order: `cell(${key})`, `cell(${key.toLowerCase()})`, 'cell()'
      // Slot names are now cached by mixin tbody in `this.$_bodyFieldSlotNameCache`
      // Will be `null` if no slot (or fallback slot) exists


      var slotName = this.$_bodyFieldSlotNameCache[key];
      var $childNodes = slotName ? this.normalizeSlot(slotName, slotScope) : toString(formatted);

      if (this.isStacked) {
        // We wrap in a DIV to ensure rendered as a single cell when visually stacked!
        $childNodes = [h('div', {}, [$childNodes])];
      } // Render either a td or th cell


      return h(cellTag, data, [$childNodes]);
    },
    renderTbodyRow: function renderTbodyRow(item, rowIndex) {
      var _this2 = this;

      // Renders an item's row (or rows if details supported)
      var h = this.$createElement;
      var fields = this.computedFields;
      var tableStriped = this.striped;
      var hasDetailsSlot = this.hasNormalizedSlot(detailsSlotName);
      var rowShowDetails = Boolean(item._showDetails && hasDetailsSlot);
      var hasRowClickHandler = this.$listeners['row-clicked'] || this.isSelectable; // We can return more than one TR if rowDetails enabled

      var $rows = []; // Details ID needed for `aria-details` when details showing
      // We set it to `null` when not showing so that attribute
      // does not appear on the element

      var detailsId = rowShowDetails ? this.safeId("_details_".concat(rowIndex, "_")) : null; // For each item data field in row

      var $tds = fields.map(function (field, colIndex) {
        return _this2.renderTbodyRowCell(field, colIndex, item, rowIndex);
      }); // Calculate the row number in the dataset (indexed from 1)

      var ariaRowIndex = null;

      if (this.currentPage && this.perPage && this.perPage > 0) {
        ariaRowIndex = String((this.currentPage - 1) * this.perPage + rowIndex + 1);
      } // Create a unique :key to help ensure that sub components are re-rendered rather than
      // re-used, which can cause issues. If a primary key is not provided we use the rendered
      // rows index within the tbody.
      // See: https://github.com/bootstrap-vue/bootstrap-vue/issues/2410


      var primaryKey = this.primaryKey;
      var hasPkValue = primaryKey && !isUndefinedOrNull(item[primaryKey]);
      var rowKey = hasPkValue ? toString(item[primaryKey]) : String(rowIndex); // If primary key is provided, use it to generate a unique ID on each tbody > tr
      // In the format of '{tableId}__row_{primaryKeyValue}'

      var rowId = hasPkValue ? this.safeId("_row_".concat(item[primaryKey])) : null; // Selectable classes and attributes

      var selectableClasses = this.selectableRowClasses ? this.selectableRowClasses(rowIndex) : {};
      var selectableAttrs = this.selectableRowAttrs ? this.selectableRowAttrs(rowIndex) : {}; // Add the item row

      $rows.push(h(BTr, {
        key: "__b-table-row-".concat(rowKey, "__"),
        ref: 'itemRows',
        refInFor: true,
        class: [isFunction(this.tbodyTrClass) ? this.tbodyTrClass(item, 'row') : this.tbodyTrClass, selectableClasses, rowShowDetails ? 'b-table-has-details' : ''],
        props: {
          variant: item._rowVariant || null
        },
        attrs: _objectSpread({
          id: rowId,
          tabindex: hasRowClickHandler ? '0' : null,
          'data-pk': rowId ? String(item[primaryKey]) : null,
          // Should this be `aria-details` instead?
          'aria-details': detailsId,
          'aria-owns': detailsId,
          'aria-rowindex': ariaRowIndex
        }, selectableAttrs),
        on: {
          // Note: These events are not A11Y friendly!
          mouseenter: this.rowHovered,
          mouseleave: this.rowUnhovered
        }
      }, $tds)); // Row Details slot

      if (rowShowDetails) {
        var detailsScope = {
          item: item,
          index: rowIndex,
          fields: fields,
          toggleDetails: this.toggleDetailsFactory(hasDetailsSlot, item)
        }; // Render the details slot in a TD

        var $details = h(BTd, {
          props: {
            colspan: fields.length
          }
        }, [this.normalizeSlot(detailsSlotName, detailsScope)]); // Add a hidden row to keep table row striping consistent when details showing

        if (tableStriped) {
          $rows.push( // We don't use `BTr` here as we dont need the extra functionality
          h('tr', {
            key: "__b-table-details-stripe__".concat(rowKey),
            staticClass: 'd-none',
            attrs: {
              'aria-hidden': 'true',
              role: 'presentation'
            }
          }));
        } // Add the actual details row


        $rows.push(h(BTr, {
          key: "__b-table-details__".concat(rowKey),
          staticClass: 'b-table-details',
          class: [isFunction(this.tbodyTrClass) ? this.tbodyTrClass(item, detailsSlotName) : this.tbodyTrClass],
          props: {
            variant: item._rowVariant || null
          },
          attrs: {
            id: detailsId,
            tabindex: '-1'
          }
        }, [$details]));
      } else if (hasDetailsSlot) {
        // Only add the placeholder if a the table has a row-details slot defined (but not shown)
        $rows.push(h());

        if (tableStriped) {
          // Add extra placeholder if table is striped
          $rows.push(h());
        }
      } // Return the row(s)


      return $rows;
    }
  }
};