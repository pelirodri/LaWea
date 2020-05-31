import { DocumentNode } from 'graphql';
import { VariableMap } from './graphql';
export declare function filter<FD = any, D extends FD = any>(doc: DocumentNode, data: D, variableValues?: VariableMap): FD;
export declare function check(doc: DocumentNode, data: any, variables?: VariableMap): void;
export declare function propType(doc: DocumentNode, mapPropsToVariables?: (props: any) => any): any;
//# sourceMappingURL=utilities.d.ts.map