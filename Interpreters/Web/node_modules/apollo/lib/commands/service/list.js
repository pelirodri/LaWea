"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const Command_1 = require("../../Command");
const lodash_sortby_1 = __importDefault(require("lodash.sortby"));
const table_1 = require("table");
const moment_1 = __importDefault(require("moment"));
const chalk_1 = __importDefault(require("chalk"));
const sharedMessages_1 = require("../../utils/sharedMessages");
const formatImplementingService = (implementingService, effectiveDate = new Date()) => {
    return {
        name: implementingService.name,
        url: implementingService.url || "",
        updatedAt: `${moment_1.default(implementingService.updatedAt).format("D MMMM YYYY")} (${moment_1.default(implementingService.updatedAt).from(effectiveDate)})`
    };
};
function formatHumanReadable({ implementingServices, graphName, frontendUrlRoot }) {
    let result = "";
    if (!implementingServices ||
        implementingServices.__typename === "NonFederatedImplementingService") {
        result =
            "\nThis graph is not federated, there are no services composing the graph";
    }
    else if (implementingServices.services.length === 0) {
        result = "\nThere are no services on this federated graph";
    }
    else {
        const sortedImplementingServices = lodash_sortby_1.default(implementingServices.services, [service => service.name.toUpperCase()]);
        console.log(table_1.table([
            ["Name", "URL", "Last Updated"],
            ...sortedImplementingServices
                .map(sortedImplementingService => formatImplementingService(sortedImplementingService, process.env.NODE_ENV === "test"
                ? new Date("2019-06-13")
                : undefined))
                .sort((s1, s2) => s1.name.toUpperCase() > s2.name.toUpperCase() ? 1 : -1)
                .map(Object.values)
                .filter(Boolean)
        ]));
        const serviceListUrlEnding = `/graph/${graphName}/service-list`;
        const targetUrl = `${frontendUrlRoot}${serviceListUrlEnding}`;
        result += `\nView full details at: ${chalk_1.default.cyan(targetUrl)}\n`;
    }
    return result;
}
class ServiceList extends Command_1.ProjectCommand {
    async run() {
        const taskOutput = {};
        let graphID;
        let graphVariant;
        try {
            await this.runTasks(({ config, flags, project }) => {
                graphID = config.graph;
                graphVariant = config.variant;
                if (!graphID) {
                    throw sharedMessages_1.graphUndefinedError;
                }
                return [
                    {
                        title: `Fetching list of services for graph ${chalk_1.default.cyan(graphID + "@" + graphVariant)}`,
                        task: async (ctx, task) => {
                            const { frontendUrlRoot, service } = await project.engine.listServices({
                                id: graphID,
                                graphVariant: graphVariant
                            });
                            const { implementingServices } = service;
                            const newContext = {
                                implementingServices,
                                frontendUrlRoot,
                                config
                            };
                            Object.assign(ctx, newContext);
                            Object.assign(taskOutput, ctx);
                        }
                    }
                ];
            });
        }
        catch (error) {
            if (error.message.includes("/upgrade")) {
                this.exit(1);
                return;
            }
            throw error;
        }
        this.log(formatHumanReadable({
            implementingServices: taskOutput.implementingServices,
            graphName: taskOutput.config.graph,
            frontendUrlRoot: taskOutput.frontendUrlRoot
        }));
    }
}
exports.default = ServiceList;
ServiceList.description = "List the services in a graph";
ServiceList.flags = Object.assign(Object.assign({}, Command_1.ProjectCommand.flags), { tag: command_1.flags.string({
        char: "t",
        description: "[Deprecated: please use --variant instead] The tag (AKA variant) to list implementing services for",
        hidden: true,
        exclusive: ["variant"]
    }), variant: command_1.flags.string({
        char: "v",
        description: "The variant to list implementing services for",
        exclusive: ["tag"]
    }), graph: command_1.flags.string({
        char: "g",
        description: "The ID of the graph in Apollo Graph Manager for which to list implementing services. Overrides config file if set."
    }) });
//# sourceMappingURL=list.js.map