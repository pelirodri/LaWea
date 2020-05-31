"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cli_ux_1 = __importDefault(require("cli-ux"));
const command_1 = require("@oclif/command");
const Command_1 = require("../../Command");
const sharedMessages_1 = require("../../utils/sharedMessages");
class ServiceDelete extends Command_1.ProjectCommand {
    async run() {
        let result;
        const { flags } = this.parse(ServiceDelete);
        const confirmed = flags.yes ||
            (await cli_ux_1.default.confirm("Are you sure you want to delete this service? THIS IS NOT REVERSIBLE! (y/N)"));
        if (!confirmed) {
            this.log("You have chosen to not delete this service. Exiting...");
            this.exit(0);
        }
        await this.runTasks(({ flags, project, config }) => [
            {
                title: "Removing service from Apollo Graph Manager",
                task: async () => {
                    if (!config.graph) {
                        throw sharedMessages_1.graphUndefinedError;
                    }
                    if (flags.federated) {
                        this.log("The --federated flag is no longer required when running federated commands. Use of the flag will not be supported in future versions of the CLI.");
                    }
                    const graphVariant = config.variant;
                    const { errors, updatedGateway } = await project.engine.removeServiceAndCompose({
                        id: config.graph,
                        graphVariant,
                        name: flags.serviceName
                    });
                    result = {
                        serviceName: flags.serviceName,
                        graphVariant,
                        graphName: config.graph,
                        errors,
                        updatedGateway
                    };
                    return;
                }
            }
        ]);
        this.log("\n");
        if (result.errors && result.errors.length) {
            this.error(result.errors.map(error => error.message).join("\n"));
        }
        if (result.updatedGateway) {
            this.log(`The ${result.serviceName} service was removed from ${result.graphName}@${result.graphVariant}. Remaining services were composed.`);
            this.log("\n");
        }
    }
}
exports.default = ServiceDelete;
ServiceDelete.description = "Delete a federated service from Apollo Graph Manager and recompose remaining services";
ServiceDelete.flags = Object.assign(Object.assign({}, Command_1.ProjectCommand.flags), { tag: command_1.flags.string({
        char: "t",
        description: "[Deprecated: please use --variant instead] The variant to delete the implementing service from",
        hidden: true,
        exclusive: ["variant"]
    }), variant: command_1.flags.string({
        char: "v",
        description: "The variant to delete the implementing service from",
        exclusive: ["tag"]
    }), graph: command_1.flags.string({
        char: "g",
        description: "The ID of the graph in Apollo Graph Manager for which to delete an implementing service. Overrides config file if set."
    }), federated: command_1.flags.boolean({
        char: "f",
        default: false,
        hidden: true,
        description: "[Deprecated: use --serviceName to indicate federation] Indicates that the schema is a partial schema from a federated service"
    }), serviceName: command_1.flags.string({
        required: true,
        description: "Provides the name of the implementing service for a federated graph"
    }), yes: command_1.flags.boolean({
        char: "y",
        required: false,
        description: "Bypass confirmation when deleting a service"
    }) });
//# sourceMappingURL=delete.js.map