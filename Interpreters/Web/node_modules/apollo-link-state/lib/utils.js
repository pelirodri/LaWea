import { print } from 'graphql';
import { checkDocument, removeDirectivesFromDocument } from 'apollo-utilities';
var connectionRemoveConfig = {
    test: function (directive) { return directive.name.value === 'client'; },
    remove: true,
};
var removed = new Map();
export function removeClientSetsFromDocument(query) {
    var cached = removed.get(query);
    if (cached)
        return cached;
    checkDocument(query);
    var docClone = removeDirectivesFromDocument([connectionRemoveConfig], query);
    removed.set(query, docClone);
    return docClone;
}
export function normalizeTypeDefs(typeDefs) {
    var defs = Array.isArray(typeDefs) ? typeDefs : [typeDefs];
    return defs
        .map(function (typeDef) { return (typeof typeDef === 'string' ? typeDef : print(typeDef)); })
        .map(function (str) { return str.trim(); })
        .join('\n');
}
//# sourceMappingURL=utils.js.map