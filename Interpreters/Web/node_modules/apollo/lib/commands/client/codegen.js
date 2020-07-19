"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("apollo-env");
const command_1 = require("@oclif/command");
const path_1 = __importDefault(require("path"));
const graphql_1 = require("graphql");
const tty_1 = __importDefault(require("tty"));
const gaze_1 = require("gaze");
const vscode_uri_1 = __importDefault(require("vscode-uri"));
const chalk_1 = __importDefault(require("chalk"));
const apollo_language_server_1 = require("apollo-language-server");
const generate_1 = __importDefault(require("../../generate"));
const Command_1 = require("../../Command");
const waitForKey = async () => {
    console.log("Press any key to stop.");
    process.stdin.setRawMode(true);
    return new Promise(resolve => process.stdin.once("data", () => {
        process.stdin.unref();
        process.stdin.setRawMode(false);
        resolve();
    }));
};
class Generate extends Command_1.ClientCommand {
    async run() {
        const { flags: { watch }, args: { output } } = this.parse(Generate);
        let write;
        const run = () => this.runTasks(({ flags, args, project, config }) => {
            let inferredTarget = "";
            if ([
                "json",
                "json-modern",
                "swift",
                "typescript",
                "flow",
                "scala"
            ].includes(flags.target)) {
                inferredTarget = flags.target;
            }
            else {
                throw new Error(`Unsupported target: ${flags.target}`);
            }
            if (!args.output &&
                inferredTarget != "typescript" &&
                inferredTarget != "flow") {
                throw new Error("The output path must be specified in the arguments for targets that aren't TypeScript or Flow");
            }
            if (!flags.outputFlat &&
                (inferredTarget === "typescript" || inferredTarget === "flow") &&
                (args.output &&
                    (path_1.default.isAbsolute(args.output) ||
                        args.output.split(path_1.default.sep).length > 1))) {
                throw new Error('For TypeScript and Flow generators, "output" must be empty or a single directory name, unless the "outputFlat" flag is set.');
            }
            return [
                {
                    title: "Generating query files",
                    task: async (ctx, task) => {
                        task.title = `Generating query files with '${inferredTarget}' target`;
                        const schema = await project.resolveSchema({
                            tag: config.variant
                        });
                        if (!schema)
                            throw new Error("Error loading schema");
                        write = () => {
                            project.validate();
                            for (const document of this.project.documents) {
                                if (document.syntaxErrors.length) {
                                    const errors = document.syntaxErrors.map(e => `Syntax error in ${document.source.name}: ${e.message}\n`);
                                    throw new Error(errors.toString());
                                }
                            }
                            const operations = Object.values(this.project.operations);
                            const fragments = Object.values(this.project.fragments);
                            if (!operations.length && !fragments.length) {
                                throw new Error("No operations or fragments found to generate code for.");
                            }
                            const document = {
                                kind: graphql_1.Kind.DOCUMENT,
                                definitions: [...operations, ...fragments]
                            };
                            return generate_1.default(document, schema, typeof args.output === "string"
                                ? args.output
                                : "__generated__", flags.only, inferredTarget, flags.tagName, !flags.outputFlat, {
                                passthroughCustomScalars: flags.passthroughCustomScalars ||
                                    !!flags.customScalarsPrefix,
                                customScalarsPrefix: flags.customScalarsPrefix || "",
                                addTypename: flags.addTypename,
                                namespace: flags.namespace,
                                operationIdsPath: flags.operationIdsPath,
                                generateOperationIds: !!flags.operationIdsPath,
                                mergeInFieldsFromFragmentSpreads: flags.mergeInFieldsFromFragmentSpreads,
                                useFlowExactObjects: flags.useFlowExactObjects,
                                useReadOnlyTypes: flags.useReadOnlyTypes || flags.useFlowReadOnlyTypes,
                                globalTypesFile: flags.globalTypesFile,
                                tsFileExtension: flags.tsFileExtension,
                                suppressSwiftMultilineStringLiterals: flags.suppressSwiftMultilineStringLiterals,
                                omitDeprecatedEnumCases: flags.omitDeprecatedEnumCases,
                                exposeTypeNodes: inferredTarget === "json-modern"
                            });
                        };
                        const writtenFiles = write();
                        task.title = `Generating query files with '${inferredTarget}' target - wrote ${writtenFiles} files`;
                    }
                }
            ];
        });
        if (watch) {
            await run().catch(() => { });
            const watcher = new gaze_1.Gaze(this.project.config.client.includes);
            watcher.on("all", (event, file) => {
                if (file.indexOf("__generated__") > -1)
                    return;
                if (file.indexOf(output) > -1)
                    return;
                this.project.fileDidChange(vscode_uri_1.default.file(file).toString());
                console.log("\nChange detected, generating types...");
                try {
                    const fileCount = write();
                    console.log(`${chalk_1.default.green("✔")} Wrote ${fileCount} files`);
                }
                catch (e) {
                    apollo_language_server_1.Debug.error("Error while generating types: " + e.message);
                }
            });
            if (tty_1.default.isatty(process.stdin.fd)) {
                await waitForKey();
                watcher.close();
                process.exit(0);
            }
            return;
        }
        else {
            return run();
        }
    }
}
exports.default = Generate;
Generate.aliases = ["codegen:generate"];
Generate.description = "Generate static types for GraphQL queries. Can use the published schema in Apollo Graph Manager or a downloaded schema.";
Generate.flags = Object.assign(Object.assign({}, Command_1.ClientCommand.flags), { watch: command_1.flags.boolean({
        description: "Watch for file changes and reload codegen"
    }), target: command_1.flags.string({
        description: "Type of code generator to use (swift | typescript | flow | scala | json | json-modern (exposes raw json types))",
        required: true
    }), localSchemaFile: command_1.flags.string({
        description: "Path to one or more local GraphQL schema file(s), as introspection result or SDL. Supports comma-separated list of paths (ex. `--localSchemaFile=schema.graphql,extensions.graphql`)"
    }), addTypename: command_1.flags.boolean({
        description: "[default: true] Automatically add __typename to your queries, can be unset with --no-addTypename",
        default: true,
        allowNo: true
    }), passthroughCustomScalars: command_1.flags.boolean({
        description: "Use your own types for custom scalars"
    }), customScalarsPrefix: command_1.flags.string({
        description: "Include a prefix when using provided types for custom scalars"
    }), mergeInFieldsFromFragmentSpreads: command_1.flags.boolean({
        description: "Merge fragment fields onto its enclosing type"
    }), namespace: command_1.flags.string({
        description: "The namespace to emit generated code into."
    }), omitDeprecatedEnumCases: command_1.flags.boolean({
        description: "Omit deprecated enum cases from generated code [Swift only]"
    }), operationIdsPath: command_1.flags.string({
        description: "Path to an operation id JSON map file. If specified, also stores the operation ids (hashes) as properties on operation types [currently Swift-only]"
    }), only: command_1.flags.string({
        description: "Parse all input files, but only output generated code for the specified file [Swift only]"
    }), suppressSwiftMultilineStringLiterals: command_1.flags.boolean({
        description: "Prevents operations from being rendered as multiline strings [Swift only]"
    }), useFlowExactObjects: command_1.flags.boolean({
        description: "Use Flow exact objects for generated types [flow only]"
    }), useFlowReadOnlyTypes: command_1.flags.boolean({
        description: "Use read only types for generated types [flow only]. **Deprecated in favor of `useReadOnlyTypes`.**"
    }), useReadOnlyTypes: command_1.flags.boolean({
        description: "Use read only types for generated types [flow | typescript]"
    }), outputFlat: command_1.flags.boolean({
        description: 'By default, TypeScript/Flow will put each generated file in a directory next to its source file using the value of the "output" as the directory name. Set "outputFlat" to put all generated files in the directory relative to the current working directory defined by "output".'
    }), globalTypesFile: command_1.flags.string({
        description: 'By default, TypeScript will put a file named "globalTypes.ts" inside the "output" directory. Set "globalTypesFile" to specify a different path. Alternatively, set "tsFileExtension" to modify the extension of the file, for example "d.ts" will output "globalTypes.d.ts"'
    }), tsFileExtension: command_1.flags.string({
        description: 'By default, TypeScript will output "ts" files. Set "tsFileExtension" to specify a different file extension, for example "d.ts"'
    }) });
Generate.args = [
    {
        name: "output",
        description: `Directory to which generated files will be written.
- For TypeScript/Flow generators, this specifies a directory relative to each source file by default.
- For TypeScript/Flow generators with the "outputFlat" flag is set, and for the Swift generator, this specifies a file or directory (absolute or relative to the current working directory) to which:
  - a file will be written for each query (if "output" is a directory)
  - all generated types will be written
- For all other types, this defines a file (absolute or relative to the current working directory) to which all generated types are written.`
    }
];
//# sourceMappingURL=codegen.js.map