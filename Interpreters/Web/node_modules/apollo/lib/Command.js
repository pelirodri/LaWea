"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = __importStar(require("@oclif/command"));
const listr_1 = __importDefault(require("listr"));
const path_1 = require("path");
const apollo_language_server_1 = require("apollo-language-server");
const OclifLoadingHandler_1 = require("./OclifLoadingHandler");
const vscode_uri_1 = __importDefault(require("vscode-uri"));
const chalk_1 = __importDefault(require("chalk"));
const { version, referenceID } = require("../package.json");
const headersArrayToObject = (arr) => {
    if (!arr)
        return;
    return arr
        .map(val => JSON.parse(val))
        .reduce((pre, next) => (Object.assign(Object.assign({}, pre), next)), {});
};
class ProjectCommand extends command_1.default {
    constructor() {
        super(...arguments);
        this.tasks = [];
        this.type = "service";
    }
    async init() {
        const { flags, args } = this.parse(this.constructor);
        this.ctx = { flags, args };
        apollo_language_server_1.Debug.SetLoggers({
            info: this.log,
            warning: this.warn,
            error: console.error
        });
        const config = await this.createConfig(flags);
        if (!config)
            return;
        this.createService(config, flags);
        this.ctx.config = config;
        this.tasks.push({
            title: "Loading Apollo Project",
            task: async (ctx) => {
                await this.project.whenReady;
                ctx = Object.assign(Object.assign({}, ctx), this.ctx);
            }
        });
    }
    async createConfig(flags) {
        const service = flags.key ? apollo_language_server_1.getServiceFromKey(flags.key) : undefined;
        const config = await apollo_language_server_1.loadConfig({
            configPath: flags.config && path_1.parse(path_1.resolve(flags.config)).dir,
            configFileName: flags.config,
            name: service,
            type: this.type
        });
        if (!config) {
            this.error("A config failed to load, so the command couldn't be run");
            this.exit(1);
            return;
        }
        config.variant = flags.variant || flags.tag || config.variant;
        config.graph = flags.graph || apollo_language_server_1.getGraphIdFromConfig(config.rawConfig);
        if (flags.tag) {
            console.warn(chalk_1.default.yellow("Using the --tag flag is deprecated. Please use --variant (or -v) instead."));
        }
        config.setDefaults({
            engine: {
                apiKey: flags.key,
                endpoint: flags.engine,
                frontend: flags.frontend
            }
        });
        if (flags.endpoint) {
            config.setDefaults({
                service: {
                    endpoint: Object.assign({ url: flags.endpoint, headers: headersArrayToObject(flags.header) }, (flags.skipSSLValidation && { skipSSLValidation: true }))
                }
            });
        }
        if (flags.localSchemaFile) {
            const files = flags.localSchemaFile.split(",");
            if (apollo_language_server_1.isClientConfig(config)) {
                config.setDefaults({
                    client: {
                        service: {
                            localSchemaFile: files
                        }
                    }
                });
            }
            else if (apollo_language_server_1.isServiceConfig(config)) {
                config.setDefaults({
                    service: {
                        localSchemaFile: files
                    }
                });
            }
        }
        if (this.configMap) {
            const defaults = this.configMap(flags);
            config.setDefaults(defaults);
        }
        const [tokenType, identifier] = (config.engine.apiKey && config.engine.apiKey.split(":")) || [];
        if (tokenType == "service" && identifier !== config.graph) {
            throw new Error(`Cannot specify a service token that does not match graph. Graph ${config.graph} does not match graph from token (${identifier})`);
        }
        return config;
    }
    createService(config, flags) {
        const loadingHandler = new OclifLoadingHandler_1.OclifLoadingHandler(this);
        const configPath = config.configURI.fsPath;
        const rootURI = configPath === process.cwd()
            ? vscode_uri_1.default.file(configPath)
            : vscode_uri_1.default.file(path_1.parse(configPath).dir);
        const clientIdentity = {
            name: "Apollo CLI",
            version,
            referenceID
        };
        if (apollo_language_server_1.isServiceConfig(config)) {
            this.project = new apollo_language_server_1.GraphQLServiceProject({
                config,
                loadingHandler,
                rootURI,
                clientIdentity
            });
        }
        else if (apollo_language_server_1.isClientConfig(config)) {
            this.project = new apollo_language_server_1.GraphQLClientProject({
                config,
                loadingHandler,
                rootURI,
                clientIdentity
            });
        }
        else {
            throw new Error("Unable to resolve project type. Please add either a client or service config. For more information, please refer to https://go.apollo.dev/t/config");
        }
        this.ctx.project = this.project;
    }
    async runTasks(generateTasks, options) {
        const { ctx } = this;
        if (!ctx) {
            throw new Error("init must be called before trying to access this.ctx");
        }
        const tasks = await generateTasks(ctx);
        return new listr_1.default([...this.tasks, ...tasks], Object.assign(Object.assign(Object.assign({}, (process.env.NODE_ENV === "test" && { renderer: "verbose" })), (options && typeof options === "function" ? options(ctx) : options)), { dateFormat: false })).run();
    }
    async catch(err) {
        this.error(err);
    }
    async finally(err) {
    }
}
exports.ProjectCommand = ProjectCommand;
ProjectCommand.flags = {
    config: command_1.flags.string({
        char: "c",
        description: "Path to your Apollo config file"
    }),
    header: command_1.flags.string({
        multiple: true,
        parse: header => {
            const separatorIndex = header.indexOf(":");
            const key = header.substring(0, separatorIndex).trim();
            const value = header.substring(separatorIndex + 1).trim();
            return JSON.stringify({ [key]: value });
        },
        description: "Additional header to send to server for introspectionQuery. May be used multiple times to add multiple headers. NOTE: The `--endpoint` flag is REQUIRED if using the `--header` flag."
    }),
    endpoint: command_1.flags.string({
        description: "The URL for the CLI use to introspect your service"
    }),
    key: command_1.flags.string({
        description: "The API key to use for authentication to Apollo Graph Manager",
        default: () => process.env.APOLLO_KEY || process.env.ENGINE_API_KEY
    }),
    engine: command_1.flags.string({
        description: "URL for a custom Apollo Graph Manager deployment",
        hidden: true
    }),
    frontend: command_1.flags.string({
        description: "URL for a custom Apollo Graph Manager frontend",
        hidden: true
    })
};
class ClientCommand extends ProjectCommand {
    constructor(argv, config) {
        super(argv, config);
        this.type = "client";
        this.configMap = (flags) => {
            const config = {
                client: {
                    name: flags.clientName,
                    referenceID: flags.clientReferenceId,
                    version: flags.clientVersion
                }
            };
            if (flags.endpoint) {
                config.client.service = {
                    url: flags.endpoint,
                    headers: headersArrayToObject(flags.header)
                };
            }
            if (flags.includes || flags.queries) {
                config.client.includes = [flags.includes || flags.queries];
            }
            if (flags.excludes) {
                config.client.excludes = [flags.excludes];
            }
            if (flags.tagName) {
                config.client.tagName = flags.tagName;
            }
            return config;
        };
    }
}
exports.ClientCommand = ClientCommand;
ClientCommand.flags = Object.assign(Object.assign({}, ProjectCommand.flags), { clientReferenceId: command_1.flags.string({
        description: "Reference id for the client which will match ids from client traces, will use clientName if not provided"
    }), clientName: command_1.flags.string({
        description: "Name of the client that the queries will be attached to"
    }), clientVersion: command_1.flags.string({
        description: "The version of the client that the queries will be attached to"
    }), tag: command_1.flags.string({
        char: "t",
        description: "[Deprecated: please use --variant instead] The tag (AKA variant) of the graph in Apollo Graph Manager to associate this client to",
        hidden: true,
        exclusive: ["variant"]
    }), variant: command_1.flags.string({
        char: "v",
        description: "The variant of the graph in Apollo Graph Manager to associate this client to",
        exclusive: ["tag"]
    }), graph: command_1.flags.string({
        char: "g",
        description: "The ID for the graph in Apollo Graph Manager to operate client commands with. Overrides config file if set."
    }), queries: command_1.flags.string({
        description: "Deprecated in favor of the includes flag"
    }), includes: command_1.flags.string({
        description: "Glob of files to search for GraphQL operations. This should be used to find queries *and* any client schema extensions"
    }), excludes: command_1.flags.string({
        description: "Glob of files to exclude for GraphQL operations. Caveat: this doesn't currently work in watch mode"
    }), tagName: command_1.flags.string({
        description: "Name of the template literal tag used to identify template literals containing GraphQL queries in Javascript/Typescript code"
    }) });
//# sourceMappingURL=Command.js.map