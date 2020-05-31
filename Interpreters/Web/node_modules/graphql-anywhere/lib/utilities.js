"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_utilities_1 = require("apollo-utilities");
var graphql_1 = require("./graphql");
var ts_invariant_1 = require("ts-invariant");
var hasOwnProperty = Object.prototype.hasOwnProperty;
function filter(doc, data, variableValues) {
    if (variableValues === void 0) { variableValues = {}; }
    if (data === null)
        return data;
    var resolver = function (fieldName, root, args, context, info) {
        return root[info.resultKey];
    };
    return Array.isArray(data)
        ? data.map(function (dataObj) { return graphql_1.graphql(resolver, doc, dataObj, null, variableValues); })
        : graphql_1.graphql(resolver, doc, data, null, variableValues);
}
exports.filter = filter;
function check(doc, data, variables) {
    if (variables === void 0) { variables = {}; }
    var resolver = function (fieldName, root, args, context, info) {
        ts_invariant_1.invariant(hasOwnProperty.call(root, info.resultKey) ||
            (!variables && hasVariableInclusions(info.field.directives)), info.resultKey + " missing on " + JSON.stringify(root));
        return root[info.resultKey];
    };
    graphql_1.graphql(resolver, doc, data, {}, variables, {
        fragmentMatcher: function () { return false; },
    });
}
exports.check = check;
function hasVariableInclusions(directives) {
    return apollo_utilities_1.getInclusionDirectives(directives).some(function (_a) {
        var ifArgument = _a.ifArgument;
        return ifArgument.value && ifArgument.value.kind === 'Variable';
    });
}
var ANONYMOUS = '<<anonymous>>';
function PropTypeError(message) {
    this.message = message;
    this.stack = '';
}
PropTypeError.prototype = Error.prototype;
var reactPropTypeLocationNames = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context',
};
function createChainableTypeChecker(validate) {
    function checkType(isRequired, props, propName, componentName, location, propFullName) {
        componentName = componentName || ANONYMOUS;
        propFullName = propFullName || propName;
        if (props[propName] == null) {
            var locationName = reactPropTypeLocationNames[location];
            if (isRequired) {
                if (props[propName] === null) {
                    return new PropTypeError("The " + locationName + " `" + propFullName + "` is marked as required " +
                        ("in `" + componentName + "`, but its value is `null`."));
                }
                return new PropTypeError("The " + locationName + " `" + propFullName + "` is marked as required in " +
                    ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
        }
        else {
            return validate(props, propName, componentName, location, propFullName);
        }
    }
    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
}
function propType(doc, mapPropsToVariables) {
    if (mapPropsToVariables === void 0) { mapPropsToVariables = function (props) { return null; }; }
    return createChainableTypeChecker(function (props, propName) {
        var prop = props[propName];
        try {
            if (!prop.loading) {
                check(doc, prop, mapPropsToVariables(props));
            }
            return null;
        }
        catch (e) {
            return e;
        }
    });
}
exports.propType = propType;
//# sourceMappingURL=utilities.js.map