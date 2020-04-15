import { ConfigFile } from './ConfigFile';
/**
 * PathResolver class
 */
export declare class PathResolver {
    private readonly _projectRoot;
    private _appRoot;
    private readonly _distRoot;
    /**
     * PathResolver constructor
     */
    constructor(config: ConfigFile);
    /**
     * ProjectRoot getter
     */
    get projectRoot(): string;
    /**
     * Dist root getter
     */
    get distRoot(): string;
}
