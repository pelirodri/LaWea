// Number utilities
// Converts a value (string, number, etc) to an integer number
// Assumes radix base 10
// Returns NaN if the value cannot be converted
export var toInteger = function toInteger(val) {
  return parseInt(val, 10);
}; // Converts a value (string, number, etc) to a number
// Returns NaN if the value cannot be converted

export var toFloat = function toFloat(val) {
  return parseFloat(val);
}; // Converts a value (string, number, etc) to a string
// representation with 'precision' digits after the decimal
// Returns the string 'NaN' if the value cannot be converted

export var toFixed = function toFixed(val, precision) {
  return toFloat(val).toFixed(toInteger(precision) || 0);
};