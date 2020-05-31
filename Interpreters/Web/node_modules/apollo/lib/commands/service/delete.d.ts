import { flags } from "@oclif/command";
import { ProjectCommand } from "../../Command";
export default class ServiceDelete extends ProjectCommand {
    static description: string;
    static flags: {
        tag: flags.IOptionFlag<string | undefined>;
        variant: flags.IOptionFlag<string | undefined>;
        graph: flags.IOptionFlag<string | undefined>;
        federated: import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
        serviceName: flags.IOptionFlag<string>;
        yes: import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
        config: flags.IOptionFlag<string | undefined>;
        header: flags.IOptionFlag<string | undefined>;
        endpoint: flags.IOptionFlag<string | undefined>;
        key: flags.IOptionFlag<string | undefined>;
        engine: flags.IOptionFlag<string | undefined>;
        frontend: flags.IOptionFlag<string | undefined>;
    };
    run(): Promise<void>;
}
//# sourceMappingURL=delete.d.ts.map