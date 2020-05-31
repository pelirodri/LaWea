"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const Command_1 = require("../../Command");
const mkdirp_1 = __importDefault(require("mkdirp"));
const fs_1 = __importDefault(require("fs"));
const path_1 = require("path");
class SchemaDownload extends Command_1.ClientCommand {
    async run() {
        await this.runTasks(({ args, project, flags, config }) => {
            const extension = args.output.split(".").pop();
            const isSDLFormat = ["graphql", "graphqls", "gql"].includes(extension);
            return [
                {
                    title: `Saving schema to ${args.output}`,
                    task: async () => {
                        const schema = await project.resolveSchema({ tag: config.variant });
                        const formattedSchema = isSDLFormat
                            ? graphql_1.printSchema(schema)
                            : JSON.stringify(graphql_1.introspectionFromSchema(schema), null, 2);
                        try {
                            await mkdirp_1.default(path_1.dirname(args.output));
                            fs_1.default.writeFileSync(args.output, formattedSchema);
                        }
                        catch (err) {
                            throw err;
                        }
                    }
                }
            ];
        });
    }
}
exports.default = SchemaDownload;
SchemaDownload.description = "Download a schema from Apollo Graph Manager or a GraphQL endpoint in JSON or SDL format";
SchemaDownload.flags = Object.assign({}, Command_1.ClientCommand.flags);
SchemaDownload.args = [
    {
        name: "output",
        description: "Path to write the introspection result to. Can be `.graphql`, `.gql`, `.graphqls`, or `.json`",
        required: true,
        default: "schema.json"
    }
];
//# sourceMappingURL=download-schema.js.map