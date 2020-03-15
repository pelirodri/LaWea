// --- Static ---
export var from = function from() {
  return Array.from.apply(Array, arguments);
};
export var isArray = function isArray(val) {
  return Array.isArray(val);
}; // --- Instance ---

export var arrayIncludes = function arrayIncludes(array, value) {
  return array.indexOf(value) !== -1;
};
export var concat = function concat() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Array.prototype.concat.apply([], args);
};