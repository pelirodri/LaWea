import { ApolloLink, Operation } from 'apollo-link';
import { DocumentNode, ExecutionResult, GraphQLError } from 'graphql';
export declare const VERSION = 1;
export interface ErrorResponse {
    graphQLErrors?: GraphQLError[];
    networkError?: Error;
    response?: ExecutionResult;
    operation: Operation;
}
export declare const defaultGenerateHash: (query: DocumentNode) => string;
export declare const defaultOptions: {
    generateHash: (query: DocumentNode) => string;
    disable: ({graphQLErrors, operation}: ErrorResponse) => boolean;
    useGETForHashedQueries: boolean;
};
export declare const createPersistedQueryLink: (options?: {
    generateHash?: ((document: DocumentNode) => string) | undefined;
    disable?: ((error: ErrorResponse) => boolean) | undefined;
    useGETForHashedQueries?: boolean | undefined;
}) => ApolloLink;
