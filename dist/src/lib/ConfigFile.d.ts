import { ProjectOptions } from './ProjectOptions';
/**
 * Config file class
 */
export declare class ConfigFile {
    private readonly _path;
    private _fullPath;
    private readonly _fileName;
    private _projectOptions;
    private jsonStripper;
    /**
     * Config file constructor
     * @param projectPath
     * @param fullPath
     * @param fileName
     */
    constructor(projectPath: string, fullPath: string, fileName: string);
    /**
     * Read and parse the configuration file
     */
    readContents(): ConfigFile;
    /**
     * Path getter
     */
    get path(): string;
    /**
     * FileName getter
     */
    get fileName(): string;
    /**
     * ProjectOptions getter
     */
    get projectOptions(): ProjectOptions;
}
