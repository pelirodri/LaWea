var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { ApolloLink, Observable, } from 'apollo-link';
import { hasDirectives, getMainDefinition } from 'apollo-utilities';
import * as Async from 'graphql-anywhere/lib/async';
var graphql = Async.graphql;
import { removeClientSetsFromDocument, normalizeTypeDefs } from './utils';
var capitalizeFirstLetter = function (str) { return str.charAt(0).toUpperCase() + str.slice(1); };
export var withClientState = function (clientStateConfig) {
    if (clientStateConfig === void 0) { clientStateConfig = { resolvers: {}, defaults: {} }; }
    var defaults = clientStateConfig.defaults, cache = clientStateConfig.cache, typeDefs = clientStateConfig.typeDefs, fragmentMatcher = clientStateConfig.fragmentMatcher;
    if (cache && defaults) {
        cache.writeData({ data: defaults });
    }
    return new (function (_super) {
        __extends(StateLink, _super);
        function StateLink() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        StateLink.prototype.writeDefaults = function () {
            if (cache && defaults) {
                cache.writeData({ data: defaults });
            }
        };
        StateLink.prototype.request = function (operation, forward) {
            if (forward === void 0) { forward = function () { return Observable.of({ data: {} }); }; }
            if (typeDefs) {
                var directives_1 = 'directive @client on FIELD';
                var definition_1 = normalizeTypeDefs(typeDefs);
                operation.setContext(function (_a) {
                    var _b = _a.schemas, schemas = _b === void 0 ? [] : _b;
                    return ({
                        schemas: schemas.concat([{ definition: definition_1, directives: directives_1 }]),
                    });
                });
            }
            var isClient = hasDirectives(['client'], operation.query);
            if (!isClient)
                return forward(operation);
            var resolvers = typeof clientStateConfig.resolvers === 'function'
                ? clientStateConfig.resolvers()
                : clientStateConfig.resolvers;
            var server = removeClientSetsFromDocument(operation.query);
            var query = operation.query;
            var type = capitalizeFirstLetter((getMainDefinition(query) || {}).operation) || 'Query';
            var resolver = function (fieldName, rootValue, args, context, info) {
                if (rootValue === void 0) { rootValue = {}; }
                var resultKey = info.resultKey;
                var aliasedNode = rootValue[resultKey];
                var preAliasingNode = rootValue[fieldName];
                var aliasNeeded = resultKey !== fieldName;
                if (aliasedNode !== undefined || preAliasingNode !== undefined) {
                    return aliasedNode || preAliasingNode;
                }
                var resolverMap = resolvers[rootValue.__typename || type];
                if (resolverMap) {
                    var resolve = resolverMap[fieldName];
                    if (resolve)
                        return resolve(rootValue, args, context, info);
                }
                return ((aliasNeeded ? aliasedNode : preAliasingNode) ||
                    (defaults || {})[fieldName]);
            };
            if (server)
                operation.query = server;
            var obs = server && forward
                ? forward(operation)
                : Observable.of({
                    data: {},
                });
            return new Observable(function (observer) {
                var complete = false;
                var handlingNext = false;
                obs.subscribe({
                    next: function (_a) {
                        var data = _a.data, errors = _a.errors;
                        var observerErrorHandler = observer.error.bind(observer);
                        var context = operation.getContext();
                        handlingNext = true;
                        graphql(resolver, query, data, context, operation.variables, {
                            fragmentMatcher: fragmentMatcher,
                        })
                            .then(function (nextData) {
                            observer.next({
                                data: nextData,
                                errors: errors,
                            });
                            if (complete) {
                                observer.complete();
                            }
                            handlingNext = false;
                        })
                            .catch(observerErrorHandler);
                    },
                    error: observer.error.bind(observer),
                    complete: function () {
                        if (!handlingNext) {
                            observer.complete();
                        }
                        complete = true;
                    },
                });
            });
        };
        return StateLink;
    }(ApolloLink))();
};
//# sourceMappingURL=index.js.map