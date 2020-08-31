import type { JSCodeshift, Transform, Core } from 'jscodeshift';
export declare type Context = {
    root: ReturnType<Core>;
    j: JSCodeshift;
    filename: string;
};
export declare type ASTTransformation<Params = void> = {
    (context: Context, params: Params): void;
};
export default function astTransformationToJSCodeshiftModule<Params = any>(transformAST: ASTTransformation<Params>): Transform;
