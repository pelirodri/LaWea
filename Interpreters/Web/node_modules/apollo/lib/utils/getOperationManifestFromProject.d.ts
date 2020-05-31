import { GraphQLClientProject } from "apollo-language-server";
export interface ManifestEntry {
    signature: string;
    document: string;
    metadata: {
        engineSignature: string;
    };
}
export declare function getOperationManifestFromProject(project: GraphQLClientProject, options?: {
    preserveStringAndNumericLiterals: boolean;
}): ManifestEntry[];
//# sourceMappingURL=getOperationManifestFromProject.d.ts.map