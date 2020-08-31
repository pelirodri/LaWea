import type { Transform, Parser } from 'jscodeshift';
declare type JSTransformationModule = {
    default: Transform;
    parser?: string | Parser;
};
declare const transformationMap: {
    [name: string]: JSTransformationModule;
};
export default transformationMap;
