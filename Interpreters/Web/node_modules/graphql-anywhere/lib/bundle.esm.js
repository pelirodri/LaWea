import { getMainDefinition, getFragmentDefinitions, createFragmentMap, shouldInclude, isField, resultKeyNameFromField, isInlineFragment, argumentsObjectFromField, getDirectiveInfoFromField, getInclusionDirectives } from 'apollo-utilities';
import { invariant } from 'ts-invariant';

function graphql(resolver, document, rootValue, contextValue, variableValues, execOptions) {
    if (variableValues === void 0) { variableValues = {}; }
    if (execOptions === void 0) { execOptions = {}; }
    var mainDefinition = getMainDefinition(document);
    var fragments = getFragmentDefinitions(document);
    var fragmentMap = createFragmentMap(fragments);
    var resultMapper = execOptions.resultMapper;
    var fragmentMatcher = execOptions.fragmentMatcher || (function () { return true; });
    var execContext = {
        fragmentMap: fragmentMap,
        contextValue: contextValue,
        variableValues: variableValues,
        resultMapper: resultMapper,
        resolver: resolver,
        fragmentMatcher: fragmentMatcher,
    };
    return executeSelectionSet(mainDefinition.selectionSet, rootValue, execContext);
}
function executeSelectionSet(selectionSet, rootValue, execContext) {
    var fragmentMap = execContext.fragmentMap, contextValue = execContext.contextValue, variables = execContext.variableValues;
    var result = {};
    selectionSet.selections.forEach(function (selection) {
        if (variables && !shouldInclude(selection, variables)) {
            return;
        }
        if (isField(selection)) {
            var fieldResult = executeField(selection, rootValue, execContext);
            var resultFieldKey = resultKeyNameFromField(selection);
            if (fieldResult !== undefined) {
                if (result[resultFieldKey] === undefined) {
                    result[resultFieldKey] = fieldResult;
                }
                else {
                    merge(result[resultFieldKey], fieldResult);
                }
            }
        }
        else {
            var fragment = void 0;
            if (isInlineFragment(selection)) {
                fragment = selection;
            }
            else {
                fragment = fragmentMap[selection.name.value];
                if (!fragment) {
                    throw new Error("No fragment named " + selection.name.value);
                }
            }
            var typeCondition = fragment.typeCondition.name.value;
            if (execContext.fragmentMatcher(rootValue, typeCondition, contextValue)) {
                var fragmentResult = executeSelectionSet(fragment.selectionSet, rootValue, execContext);
                merge(result, fragmentResult);
            }
        }
    });
    if (execContext.resultMapper) {
        return execContext.resultMapper(result, rootValue);
    }
    return result;
}
function executeField(field, rootValue, execContext) {
    var variables = execContext.variableValues, contextValue = execContext.contextValue, resolver = execContext.resolver;
    var fieldName = field.name.value;
    var args = argumentsObjectFromField(field, variables);
    var info = {
        isLeaf: !field.selectionSet,
        resultKey: resultKeyNameFromField(field),
        directives: getDirectiveInfoFromField(field, variables),
        field: field,
    };
    var result = resolver(fieldName, rootValue, args, contextValue, info);
    if (!field.selectionSet) {
        return result;
    }
    if (result == null) {
        return result;
    }
    if (Array.isArray(result)) {
        return executeSubSelectedArray(field, result, execContext);
    }
    return executeSelectionSet(field.selectionSet, result, execContext);
}
function executeSubSelectedArray(field, result, execContext) {
    return result.map(function (item) {
        if (item === null) {
            return null;
        }
        if (Array.isArray(item)) {
            return executeSubSelectedArray(field, item, execContext);
        }
        return executeSelectionSet(field.selectionSet, item, execContext);
    });
}
var hasOwn = Object.prototype.hasOwnProperty;
function merge(dest, src) {
    if (src !== null && typeof src === 'object') {
        Object.keys(src).forEach(function (key) {
            var srcVal = src[key];
            if (!hasOwn.call(dest, key)) {
                dest[key] = srcVal;
            }
            else {
                merge(dest[key], srcVal);
            }
        });
    }
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
function filter(doc, data, variableValues) {
    if (variableValues === void 0) { variableValues = {}; }
    if (data === null)
        return data;
    var resolver = function (fieldName, root, args, context, info) {
        return root[info.resultKey];
    };
    return Array.isArray(data)
        ? data.map(function (dataObj) { return graphql(resolver, doc, dataObj, null, variableValues); })
        : graphql(resolver, doc, data, null, variableValues);
}
function check(doc, data, variables) {
    if (variables === void 0) { variables = {}; }
    var resolver = function (fieldName, root, args, context, info) {
        process.env.NODE_ENV === "production" ? invariant(hasOwnProperty.call(root, info.resultKey) ||
            (!variables && hasVariableInclusions(info.field.directives)), 1) : invariant(hasOwnProperty.call(root, info.resultKey) ||
            (!variables && hasVariableInclusions(info.field.directives)), info.resultKey + " missing on " + JSON.stringify(root));
        return root[info.resultKey];
    };
    graphql(resolver, doc, data, {}, variables, {
        fragmentMatcher: function () { return false; },
    });
}
function hasVariableInclusions(directives) {
    return getInclusionDirectives(directives).some(function (_a) {
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

export default graphql;
export { check, filter, propType };
//# sourceMappingURL=bundle.esm.js.map
