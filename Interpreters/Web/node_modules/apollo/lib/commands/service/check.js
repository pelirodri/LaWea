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
const chalk_1 = __importDefault(require("chalk"));
const env_ci_1 = __importDefault(require("env-ci"));
const git_1 = require("../../git");
const Command_1 = require("../../Command");
const utils_1 = require("../../utils");
const graphqlTypes_1 = require("apollo-language-server/lib/graphqlTypes");
const moment_1 = __importDefault(require("moment"));
const lodash_sortby_1 = __importDefault(require("lodash.sortby"));
const apollo_env_1 = require("apollo-env");
const sharedMessages_1 = require("../../utils/sharedMessages");
const formatChange = (change) => {
    let color = (x) => x;
    if (change.severity === graphqlTypes_1.ChangeSeverity.FAILURE) {
        color = chalk_1.default.red;
    }
    const changeDictionary = {
        [graphqlTypes_1.ChangeSeverity.FAILURE]: "FAIL",
        [graphqlTypes_1.ChangeSeverity.NOTICE]: "PASS"
    };
    return {
        severity: color(changeDictionary[change.severity]),
        code: color(change.code),
        description: color(change.description)
    };
};
function formatTimePeriod(hours) {
    if (hours <= 24) {
        return utils_1.pluralize(hours, "hour");
    }
    return utils_1.pluralize(Math.floor(hours / 24), "day");
}
exports.formatTimePeriod = formatTimePeriod;
function formatMarkdown({ checkSchemaResult, graphName, serviceName, tag, graphCompositionID }) {
    const { diffToPrevious } = checkSchemaResult;
    if (!diffToPrevious) {
        throw new Error("checkSchemaResult.diffToPrevious missing");
    }
    const { validationConfig } = diffToPrevious;
    let validationText = "";
    if (validationConfig) {
        const hours = Math.abs(moment_1.default()
            .add(validationConfig.from, "second")
            .diff(moment_1.default().add(validationConfig.to, "second"), "hours"));
        validationText = `🔢 Compared **${utils_1.pluralize(diffToPrevious.changes.length, "schema change")}** against **${utils_1.pluralize(diffToPrevious.numberOfCheckedOperations, "operation")}** seen over the **last ${formatTimePeriod(hours)}**.`;
    }
    const breakingChanges = diffToPrevious.changes.filter(change => change.severity === "FAILURE");
    const affectedQueryCount = diffToPrevious.affectedQueries
        ? diffToPrevious.affectedQueries.length
        : 0;
    return `
### Apollo Service Check
🔄 Validated your local schema against metrics from variant \`${tag}\` ${serviceName ? `for graph \`${serviceName}\` ` : ""}on graph \`${graphName}@${tag}\`.
${validationText}
${breakingChanges.length > 0
        ? `❌ Found **${utils_1.pluralize(diffToPrevious.changes.filter(change => change.severity === "FAILURE")
            .length, "breaking change")}** that would affect **${utils_1.pluralize(affectedQueryCount, "operation")}** across **${utils_1.pluralize(diffToPrevious.affectedClients && diffToPrevious.affectedClients.length, "client")}**`
        : diffToPrevious.changes.length === 0
            ? `✅ Found **no changes**.`
            : `✅ Found **no breaking changes**.`}

🔗 [View your service check details](${checkSchemaResult.targetUrl +
        (graphCompositionID ? `?graphCompositionId=${graphCompositionID})` : `)`)}.
`;
}
exports.formatMarkdown = formatMarkdown;
function formatCompositionErrorsMarkdown({ compositionErrors, graphName, serviceName, tag }) {
    return `
### Apollo Service Check
🔄 Validated graph composition for service \`${serviceName}\` on graph \`${graphName}@${tag}\`.
❌ Found **${compositionErrors.length} composition errors**

| Service   | Field     | Message   |
| --------- | --------- | --------- |
${compositionErrors
        .map(({ service, field, message }) => `| ${service} | ${field} | ${message} |`)
        .join("\n")}
`;
}
exports.formatCompositionErrorsMarkdown = formatCompositionErrorsMarkdown;
function formatHumanReadable({ checkSchemaResult, graphCompositionID }) {
    const { targetUrl, diffToPrevious: { changes } } = checkSchemaResult;
    let result = "";
    if (changes.length === 0) {
        result = "\nNo changes present between schemas";
    }
    else {
        const sortedChanges = lodash_sortby_1.default(changes, [
            change => change.code,
            change => change.description
        ]);
        const breakingChanges = sortedChanges.filter(change => change.severity === graphqlTypes_1.ChangeSeverity.FAILURE);
        lodash_sortby_1.default(breakingChanges, change => change.severity);
        const nonBreakingChanges = sortedChanges.filter(change => change.severity !== graphqlTypes_1.ChangeSeverity.FAILURE);
        result += table_1.table([
            ["Change", "Code", "Description"],
            ...[
                ...breakingChanges.map(formatChange).map(Object.values),
                ...nonBreakingChanges.map(formatChange).map(Object.values)
            ].filter(Boolean)
        ]);
    }
    if (targetUrl) {
        result += `\n\nView full details at: ${targetUrl}${graphCompositionID ? `?graphCompositionId=${graphCompositionID}` : ``}`;
    }
    return result;
}
exports.formatHumanReadable = formatHumanReadable;
class ServiceCheck extends Command_1.ProjectCommand {
    async run() {
        const taskOutput = {};
        const breakingChangesErrorMessage = "breaking changes found";
        const federatedServiceCompositionUnsuccessfulErrorMessage = "Federated service composition was unsuccessful. Please see the reasons below.";
        const { isCi } = env_ci_1.default();
        let schema;
        let graphID;
        let graphVariant;
        try {
            await this.runTasks(({ config, flags, project }) => {
                graphID = config.graph;
                graphVariant = config.variant;
                const serviceName = flags.serviceName;
                if (!graphID) {
                    throw sharedMessages_1.graphUndefinedError;
                }
                const graphSpecifier = `${graphID}@${graphVariant}`;
                taskOutput.shouldOutputJson = !!flags.json;
                taskOutput.shouldOutputMarkdown = !!flags.markdown;
                taskOutput.shouldAlwaysExit0 = !!flags.ignoreFailures;
                taskOutput.serviceName = flags.serviceName;
                taskOutput.config = config;
                return [
                    {
                        enabled: () => !!serviceName,
                        title: `Validate graph composition for service ${chalk_1.default.cyan(serviceName || "")} on graph ${chalk_1.default.cyan(graphSpecifier)}`,
                        task: async (ctx, task) => {
                            if (!serviceName) {
                                throw new Error("This task should not be run without a `serviceName`. Check the `enabled` function.");
                            }
                            task.output = "Fetching local service's partial schema";
                            const sdl = await project.resolveFederatedServiceSDL();
                            if (!sdl) {
                                throw new Error("No SDL found for federated service");
                            }
                            task.output = `Attempting to compose graph with ${chalk_1.default.cyan(serviceName)} service's partial schema`;
                            const historicParameters = utils_1.validateHistoricParams({
                                validationPeriod: flags.validationPeriod,
                                queryCountThreshold: flags.queryCountThreshold,
                                queryCountThresholdPercentage: flags.queryCountThresholdPercentage
                            });
                            const gitInfoFromEnv = await git_1.gitInfo(this.log);
                            const { compositionValidationResult, checkSchemaResult } = await project.engine.checkPartialSchema(Object.assign(Object.assign({ id: graphID, graphVariant: graphVariant, implementingServiceName: serviceName, partialSchema: {
                                    sdl
                                } }, (historicParameters && { historicParameters })), { gitContext: Object.assign(Object.assign(Object.assign({}, gitInfoFromEnv), (flags.author ? { committer: flags.author } : undefined)), (flags.branch ? { branch: flags.branch } : undefined)) }));
                            task.title = `Found ${utils_1.pluralize(compositionValidationResult.errors.length, "graph composition error")} for service ${chalk_1.default.cyan(serviceName)} on graph ${chalk_1.default.cyan(graphSpecifier)}`;
                            if (compositionValidationResult.errors.length > 0) {
                                taskOutput.compositionErrors = compositionValidationResult.errors
                                    .filter(apollo_env_1.isNotNullOrUndefined)
                                    .map(error => {
                                    const match = error.message.match(/^\[([^\[]+)\]\s+(\S+)\ ->\ (.+)/);
                                    if (!match) {
                                        return { message: error.message };
                                    }
                                    const [, service, field, message] = match;
                                    return { service, field, message };
                                });
                                taskOutput.graphCompositionID =
                                    compositionValidationResult.graphCompositionID;
                                this.error(federatedServiceCompositionUnsuccessfulErrorMessage);
                            }
                            else {
                                if (!checkSchemaResult) {
                                    throw new Error("Violated invariant. Schema should have been validated against operations if" +
                                        "there were no composition errors");
                                }
                                taskOutput.checkSchemaResult = checkSchemaResult;
                                ctx.checkSchemaResult = checkSchemaResult;
                            }
                        }
                    },
                    {
                        title: `Validating ${serviceName ? "composed " : ""}schema against metrics from variant ${chalk_1.default.cyan(graphVariant)} on graph ${chalk_1.default.cyan(graphSpecifier)}`,
                        enabled: () => !serviceName,
                        task: async (ctx, task) => {
                            let schemaCheckSchemaVariables;
                            task.output = "Resolving schema";
                            schema = await project.resolveSchema({ tag: config.variant });
                            if (!schema) {
                                throw new Error("Failed to resolve schema");
                            }
                            schemaCheckSchemaVariables = {
                                schema: graphql_1.introspectionFromSchema(schema)
                                    .__schema
                            };
                            const historicParameters = utils_1.validateHistoricParams({
                                validationPeriod: flags.validationPeriod,
                                queryCountThreshold: flags.queryCountThreshold,
                                queryCountThresholdPercentage: flags.queryCountThresholdPercentage
                            });
                            task.output = "Validating schema";
                            const gitInfoFromEnv = await git_1.gitInfo(this.log);
                            const variables = Object.assign(Object.assign({ id: graphID, tag: config.variant, gitContext: Object.assign(Object.assign(Object.assign({}, gitInfoFromEnv), (flags.committer
                                    ? { committer: flags.committer }
                                    : undefined)), (flags.branch ? { branch: flags.branch } : undefined)) }, (historicParameters && { historicParameters })), schemaCheckSchemaVariables);
                            const { schema: _ } = variables, restVariables = __rest(variables, ["schema"]);
                            this.debug("Variables sent to Apollo Graph Manager:");
                            this.debug(restVariables);
                            if (schema) {
                                this.debug("SDL of introspection sent to Apollo Graph Manager:");
                                this.debug(graphql_1.printSchema(schema));
                            }
                            else {
                                this.debug("Schema hash generated:");
                                this.debug(schemaCheckSchemaVariables);
                            }
                            const checkSchemaResult = await project.engine.checkSchema(variables);
                            ctx.checkSchemaResult = checkSchemaResult;
                            taskOutput.checkSchemaResult = checkSchemaResult;
                            task.title = task.title.replace("Validating", "Validated");
                        }
                    },
                    {
                        title: "Comparing schema changes",
                        task: async (ctx, task) => {
                            const schemaChanges = ctx.checkSchemaResult.diffToPrevious.changes;
                            const numberOfCheckedOperations = ctx.checkSchemaResult.diffToPrevious
                                .numberOfCheckedOperations || 0;
                            const validationConfig = ctx.checkSchemaResult.diffToPrevious.validationConfig;
                            const hours = validationConfig
                                ? Math.abs(moment_1.default()
                                    .add(validationConfig.from, "second")
                                    .diff(moment_1.default().add(validationConfig.to, "second"), "hours"))
                                : null;
                            task.title = `Compared ${utils_1.pluralize(chalk_1.default.cyan(schemaChanges.length.toString()), "schema change")} against ${utils_1.pluralize(chalk_1.default.cyan(numberOfCheckedOperations.toString()), "operation")}${hours
                                ? ` over the last ${chalk_1.default.cyan(formatTimePeriod(hours))}`
                                : ""}`;
                        }
                    },
                    {
                        title: "Reporting result",
                        task: async (ctx, task) => {
                            const breakingSchemaChangeCount = ctx.checkSchemaResult.diffToPrevious.changes.filter(change => change.severity === graphqlTypes_1.ChangeSeverity.FAILURE).length;
                            const nonBreakingSchemaChangeCount = ctx.checkSchemaResult.diffToPrevious.changes.length -
                                breakingSchemaChangeCount;
                            task.title = `Found ${utils_1.pluralize(chalk_1.default.cyan(breakingSchemaChangeCount.toString()), "breaking change")} and ${utils_1.pluralize(chalk_1.default.cyan(nonBreakingSchemaChangeCount.toString()), "compatible change")}`;
                            if (breakingSchemaChangeCount) {
                                throw new Error(breakingChangesErrorMessage);
                            }
                        }
                    }
                ];
            }, context => ({
                renderer: isCi
                    ? utils_1.CompactRenderer
                    : context.flags.markdown || context.flags.json
                        ? "silent"
                        : "default"
            }));
        }
        catch (error) {
            if (error.message.includes("/upgrade")) {
                this.exit(1);
                return;
            }
            if (error.message !== breakingChangesErrorMessage &&
                error.message !== federatedServiceCompositionUnsuccessfulErrorMessage) {
                throw error;
            }
        }
        const { checkSchemaResult, config, shouldOutputJson, shouldOutputMarkdown, serviceName, compositionErrors, graphCompositionID, shouldAlwaysExit0 } = taskOutput;
        if (shouldOutputJson) {
            if (compositionErrors) {
                return this.log(JSON.stringify({ errors: compositionErrors }, null, 2));
            }
            return this.log(JSON.stringify({
                targetUrl: checkSchemaResult.targetUrl +
                    (graphCompositionID
                        ? `?graphCompositionId=${graphCompositionID}`
                        : ``),
                changes: checkSchemaResult.diffToPrevious.changes,
                validationConfig: checkSchemaResult.diffToPrevious.validationConfig
            }, null, 2));
        }
        else if (shouldOutputMarkdown) {
            if (!graphID) {
                throw new Error("The graph name should have been defined in the Apollo config and validated when the config was loaded. Please file an issue if you're seeing this error.");
            }
            if (compositionErrors) {
                if (!serviceName) {
                    throw new Error("Composition errors should only occur when `serviceName` is present. Please file an issue if you're seeing this error.");
                }
                return this.log(formatCompositionErrorsMarkdown({
                    compositionErrors,
                    graphName: graphID,
                    serviceName,
                    tag: config.variant
                }));
            }
            return this.log(formatMarkdown({
                checkSchemaResult,
                graphName: graphID,
                serviceName,
                tag: config.variant,
                graphCompositionID
            }));
        }
        if (compositionErrors) {
            console.log("");
            const unformattedErrors = compositionErrors.filter(e => !e.field && !e.service);
            const formattedErrors = compositionErrors.filter(e => e.field || e.service);
            if (formattedErrors.length)
                this.log(table_1.table([
                    ["Service", "Field", "Message"],
                    ...formattedErrors.map(Object.values)
                ], {
                    columns: {
                        2: {
                            width: 50,
                            wrapWord: true
                        }
                    }
                }));
            if (unformattedErrors.length)
                this.log(table_1.table([["Message"], ...unformattedErrors.map(e => [e.message])]));
            if (shouldAlwaysExit0) {
                return;
            }
            this.exit(1);
        }
        else {
            this.log(formatHumanReadable({ checkSchemaResult, graphCompositionID }));
            if (checkSchemaResult.diffToPrevious.changes.find(({ severity }) => severity === graphqlTypes_1.ChangeSeverity.FAILURE)) {
                if (shouldAlwaysExit0) {
                    return;
                }
                this.exit(1);
            }
        }
    }
}
exports.default = ServiceCheck;
ServiceCheck.aliases = ["schema:check"];
ServiceCheck.description = "Check a service against known operation workloads to find breaking changes";
ServiceCheck.flags = Object.assign(Object.assign({}, Command_1.ProjectCommand.flags), { tag: command_1.flags.string({
        char: "t",
        description: "[Deprecated: please use --variant instead] The tag (AKA variant) to check the proposed schema against",
        hidden: true,
        exclusive: ["variant"]
    }), variant: command_1.flags.string({
        char: "v",
        description: "The variant to check the proposed schema against",
        exclusive: ["tag"]
    }), graph: command_1.flags.string({
        char: "g",
        description: "The ID of the graph in Apollo Graph Manager to check your proposed schema changes against. Overrides config file if set."
    }), branch: command_1.flags.string({
        description: "The branch name to associate with this check"
    }), author: command_1.flags.string({
        description: "The author to associate with this proposed schema"
    }), validationPeriod: command_1.flags.string({
        description: "The size of the time window with which to validate the schema against. You may provide a number (in seconds), or an ISO8601 format duration for more granularity (see: https://en.wikipedia.org/wiki/ISO_8601#Durations)"
    }), queryCountThreshold: command_1.flags.integer({
        description: "Minimum number of requests within the requested time window for a query to be considered."
    }), queryCountThresholdPercentage: command_1.flags.integer({
        description: "Number of requests within the requested time window for a query to be considered, relative to total request count. Expected values are between 0 and 0.05 (minimum 5% of total request volume)"
    }), json: command_1.flags.boolean({
        description: "Output result in json, which can then be parsed by CLI tools such as jq.",
        exclusive: ["markdown"]
    }), localSchemaFile: command_1.flags.string({
        description: "Path to one or more local GraphQL schema file(s), as introspection result or SDL. Supports comma-separated list of paths (ex. `--localSchemaFile=schema.graphql,extensions.graphql`)"
    }), markdown: command_1.flags.boolean({
        description: "Output result in markdown.",
        exclusive: ["json"]
    }), serviceName: command_1.flags.string({
        description: "Provides the name of the implementing service for a federated graph. This flag will indicate that the schema is a partial schema from a federated service"
    }), ignoreFailures: command_1.flags.boolean({
        description: "Exit with status 0 when the check completes, even if errors are found"
    }) });
//# sourceMappingURL=check.js.map