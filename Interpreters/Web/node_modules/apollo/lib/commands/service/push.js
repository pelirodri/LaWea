"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const table_1 = require("table");
const graphql_1 = require("graphql");
const git_1 = require("../../git");
const Command_1 = require("../../Command");
const chalk_1 = __importDefault(require("chalk"));
const sharedMessages_1 = require("../../utils/sharedMessages");
class ServicePush extends Command_1.ProjectCommand {
    async run() {
        let result;
        let isFederated;
        let gitContext;
        await this.runTasks(({ flags, project, config }) => [
            {
                title: "Uploading service to Apollo Graph Manager",
                task: async () => {
                    if (!config.graph) {
                        throw sharedMessages_1.graphUndefinedError;
                    }
                    if (flags.federated) {
                        this.log("The --federated flag is no longer required when running federated commands. Use of the flag will not be supported in future versions of the CLI.");
                    }
                    isFederated = flags.serviceName;
                    gitContext = await git_1.gitInfo(this.log);
                    if (isFederated) {
                        this.log("Fetching info from federated service");
                        const sdl = await project.resolveFederatedServiceSDL();
                        if (!sdl)
                            throw new Error("No SDL found in response from federated service. This means that the federated service exposed a `__service` field that did not emit errors, but that did not contain a spec-compliant `sdl` field.");
                        if (!flags.serviceURL)
                            throw new Error("No URL found for federated service. Please provide the URL for the gateway to reach the service via the --serviceURL flag");
                        const { compositionConfig, errors, didUpdateGateway, serviceWasCreated } = await project.engine.uploadAndComposePartialSchema({
                            id: config.graph,
                            graphVariant: config.variant,
                            name: flags.serviceName,
                            url: flags.serviceURL,
                            revision: flags.serviceRevision ||
                                (gitContext && gitContext.commit) ||
                                "",
                            activePartialSchema: {
                                sdl
                            }
                        });
                        result = {
                            implementingServiceName: flags.serviceName,
                            hash: compositionConfig && compositionConfig.schemaHash,
                            compositionErrors: errors,
                            serviceWasCreated,
                            didUpdateGateway,
                            graphId: config.graph,
                            graphVariant: config.variant
                        };
                        return;
                    }
                    const schema = await project.resolveSchema({ tag: config.variant });
                    const variables = {
                        id: config.graph,
                        schema: graphql_1.introspectionFromSchema(schema).__schema,
                        tag: config.variant,
                        gitContext
                    };
                    const { schema: _ } = variables, restVariables = __rest(variables, ["schema"]);
                    this.debug("Variables sent to Apollo Graph Manager:");
                    this.debug(restVariables);
                    this.debug("SDL of introspection sent to Apollo Graph Manager:");
                    this.debug(graphql_1.printSchema(schema));
                    const response = await project.engine.uploadSchema(variables);
                    if (response) {
                        result = {
                            graphId: config.graph,
                            graphVariant: response.tag ? response.tag.tag : "current",
                            hash: response.tag ? response.tag.schema.hash : null,
                            code: response.code
                        };
                        this.debug("Result received from Apollo Graph Manager:");
                        this.debug(result);
                    }
                }
            }
        ]);
        const graphString = `${result.graphId}@${result.graphVariant}`;
        this.log("\n");
        if (result.code === "NO_CHANGES") {
            this.log("No change in schema from previous version\n");
        }
        if (result.serviceWasCreated) {
            this.log(`A new service called '${result.implementingServiceName}' for the '${graphString}' graph was created\n`);
        }
        else if (result.implementingServiceName && isFederated) {
            this.log(`The '${result.implementingServiceName}' service for the '${graphString}' graph was updated\n`);
        }
        const { compositionErrors } = result;
        if (compositionErrors && compositionErrors.length) {
            this.log(`*THE SERVICE UPDATE RESULTED IN COMPOSITION ERRORS.*\n\nComposition errors must be resolved before the graph's schema or corresponding gateway can be updated.\nFor more information, see https://www.apollographql.com/docs/apollo-server/federation/errors/\n`);
            let printed = "";
            const messages = [
                ...compositionErrors.map(({ message }) => ({
                    type: chalk_1.default.red("Error"),
                    description: message
                }))
            ].filter(x => x !== null);
            this.log(table_1.table([["Change", "Description"], ...messages.map(Object.values)], {
                columns: { 1: { width: 70, wrapWord: true } }
            }));
            this.log(printed);
            this.log("\n");
            this.exit(1);
        }
        if (result.didUpdateGateway) {
            this.log(`The gateway for the '${graphString}' graph was updated with a new schema, composed from the updated '${result.implementingServiceName}' service\n`);
        }
        else if (isFederated) {
            this.log(`The gateway for the '${graphString}' graph was NOT updated with a new schema\n`);
        }
        if (!isFederated || result.didUpdateGateway) {
            this.log(table_1.table([
                ["id", "graph", "tag"],
                [result.hash.slice(0, 6), result.graphId, result.graphVariant]
            ]));
            this.log("\n");
        }
    }
}
exports.default = ServicePush;
ServicePush.aliases = ["schema:publish"];
ServicePush.description = "Push a service definition to Apollo Graph Manager";
ServicePush.flags = Object.assign(Object.assign({}, Command_1.ProjectCommand.flags), { tag: command_1.flags.string({
        char: "t",
        description: "The tag (AKA variant) to publish your service to in Apollo Graph Manager",
        hidden: true,
        exclusive: ["variant"]
    }), variant: command_1.flags.string({
        char: "v",
        description: "The variant to publish your service to in Apollo Graph Manager",
        exclusive: ["tag"]
    }), graph: command_1.flags.string({
        char: "g",
        description: "The ID of the graph in Apollo Graph Manager to publish your service to. Overrides config file if set."
    }), localSchemaFile: command_1.flags.string({
        description: "Path to one or more local GraphQL schema file(s), as introspection result or SDL. Supports comma-separated list of paths (ex. `--localSchemaFile=schema.graphql,extensions.graphql`)"
    }), federated: command_1.flags.boolean({
        char: "f",
        default: false,
        hidden: true,
        description: "[Deprecated: use --serviceName to indicate federation] Indicates that the schema is a partial schema from a federated service"
    }), serviceName: command_1.flags.string({
        description: "Provides the name of the implementing service for a federated graph"
    }), serviceURL: command_1.flags.string({
        description: "Provides the url to the location of the implementing service for a federated graph"
    }), serviceRevision: command_1.flags.string({
        description: "Provides a unique revision identifier for a change to an implementing service on a federated service push. The default of this is a git sha"
    }) });
//# sourceMappingURL=push.js.map