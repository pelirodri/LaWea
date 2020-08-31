"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function astTransformationToJSCodeshiftModule(transformAST) {
    const transform = (file, api, options) => {
        const j = api.jscodeshift;
        const root = j(file.source);
        transformAST({ root, j, filename: file.path }, options);
        return root.toSource({ lineTerminator: '\n' });
    };
    return transform;
}
exports.default = astTransformationToJSCodeshiftModule;
