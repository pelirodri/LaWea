/// <reference types="zen-observable" />
import { ApolloLink, Observable, Operation, NextLink, FetchResult } from 'apollo-link';
import { ApolloCache } from 'apollo-cache';
import { DocumentNode } from 'graphql';
import { FragmentMatcher } from 'graphql-anywhere';
export declare type ClientStateConfig = {
    cache?: ApolloCache<any>;
    resolvers: any | (() => any);
    defaults?: any;
    typeDefs?: string | string[] | DocumentNode | DocumentNode[];
    fragmentMatcher?: FragmentMatcher;
};
export declare const withClientState: (clientStateConfig?: ClientStateConfig) => {
    writeDefaults(): void;
    request(operation: Operation, forward?: NextLink): Observable<FetchResult<Record<string, any>, Record<string, any>>>;
    split(test: (op: Operation) => boolean, left: ApolloLink | ((operation: Operation, forward?: NextLink) => Observable<FetchResult<Record<string, any>, Record<string, any>>>), right?: ApolloLink | ((operation: Operation, forward?: NextLink) => Observable<FetchResult<Record<string, any>, Record<string, any>>>)): ApolloLink;
    concat(next: ApolloLink | ((operation: Operation, forward?: NextLink) => Observable<FetchResult<Record<string, any>, Record<string, any>>>)): ApolloLink;
};
