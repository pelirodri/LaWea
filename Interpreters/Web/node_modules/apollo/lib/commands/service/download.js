"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const graphql_1 = require("graphql");
const chalk_1 = __importDefault(require("chalk"));
const Command_1 = require("../../Command");
const mkdirp_1 = __importDefault(require("mkdirp"));
const fs_1 = __importDefault(require("fs"));
const path_1 = require("path");
class ServiceDownload extends Command_1.ProjectCommand {
    async run() {
        await this.runTasks(({ args, project, flags, config }) => [
            {
                title: `Saving schema to ${args.output}`,
                task: async () => {
                    try {
                        const graphVariant = config.variant;
                        const schema = await project.resolveSchema({ tag: graphVariant });
                        await mkdirp_1.default(path_1.dirname(args.output));
                        fs_1.default.writeFileSync(args.output, JSON.stringify(graphql_1.introspectionFromSchema(schema), null, 2));
                    }
                    catch (e) {
                        if (e.code == "ECONNREFUSED") {
                            this.log(chalk_1.default.red("ERROR: Connection refused."));
                            this.log(chalk_1.default.red("You may not be running a service locally, or your endpoint url is incorrect."));
                            this.log(chalk_1.default.red("If you're trying to download a schema from Apollo Graph Manager, use the `client:download-schema` command instead."));
                        }
                        throw e;
                    }
                }
            }
        ]);
    }
}
exports.default = ServiceDownload;
ServiceDownload.aliases = ["schema:download"];
ServiceDownload.description = "Download the schema from your GraphQL endpoint.";
ServiceDownload.flags = Object.assign(Object.assign({}, Command_1.ProjectCommand.flags), { tag: command_1.flags.string({
        char: "t",
        description: "[Deprecated: please use --variant instead] The tag (AKA variant) to download the schema of",
        hidden: true,
        exclusive: ["variant"]
    }), variant: command_1.flags.string({
        char: "v",
        description: "The variant to download the schema of",
        exclusive: ["tag"]
    }), graph: command_1.flags.string({
        char: "g",
        description: "The ID of the graph in Apollo Graph Manager for which to download the schema for. Overrides config file if provided."
    }), skipSSLValidation: command_1.flags.boolean({
        char: "k",
        description: "Allow connections to an SSL site without certs"
    }) });
ServiceDownload.args = [
    {
        name: "output",
        description: "Path to write the introspection result to. Supports .json output only.",
        required: true,
        default: "schema.json"
    }
];
//# sourceMappingURL=download.js.map