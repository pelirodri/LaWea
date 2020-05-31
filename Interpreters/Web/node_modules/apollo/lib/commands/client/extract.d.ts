import { flags } from "@oclif/command";
import { ClientCommand } from "../../Command";
export default class ClientExtract extends ClientCommand {
    static description: string;
    static flags: {
        preserveStringAndNumericLiterals: import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
        clientReferenceId: flags.IOptionFlag<string | undefined>;
        clientName: flags.IOptionFlag<string | undefined>;
        clientVersion: flags.IOptionFlag<string | undefined>;
        tag: flags.IOptionFlag<string | undefined>;
        variant: flags.IOptionFlag<string | undefined>;
        graph: flags.IOptionFlag<string | undefined>;
        queries: flags.IOptionFlag<string | undefined>;
        includes: flags.IOptionFlag<string | undefined>;
        excludes: flags.IOptionFlag<string | undefined>;
        tagName: flags.IOptionFlag<string | undefined>;
        config: flags.IOptionFlag<string | undefined>;
        header: flags.IOptionFlag<string | undefined>;
        endpoint: flags.IOptionFlag<string | undefined>;
        key: flags.IOptionFlag<string | undefined>;
        engine: flags.IOptionFlag<string | undefined>;
        frontend: flags.IOptionFlag<string | undefined>;
    };
    static args: {
        name: string;
        description: string;
        required: boolean;
        default: string;
    }[];
    run(): Promise<void>;
}
//# sourceMappingURL=extract.d.ts.map