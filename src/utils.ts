/*=--------------------------------------------------------------=

 TSPath - Typescript Path Resolver

 Author : Patrik Forsberg
 Email  : patrik.forsberg@coldmind.com
 GitHub : https://github.com/duffman

 I hope this piece of software brings joy into your life, makes
 you sleep better knowing that you are no longer in path hell!

 Use this software free of charge, the only thing I ask is that
 you obey to the terms stated in the license, i would also like
 you to keep the file header intact.

 Also, I would love to see you getting involved in the project!

 Enjoy!

 This software is subject to the LGPL v2 License, please find
 the full license attached in LICENCE.md

 =----------------------------------------------------------------= */

// tslint:disable-next-line:no-var-requires
const path = require('path');

export class Utils {
    /**
     * Helper method used to safely get the value of an AST node
     * @param node
     * @returns {string}
     */
    public static safeGetAstNodeValue(node: any): string {
        if (Utils.isEmpty(node) || Utils.isEmpty(node.value)) {
            return '';
        } else {
            return node.value;
        }
    }

    /**
     * Cross platform method that verifies that the given path ends
     * with a path delimiter, NOTE that this method does no effort
     * in verifying that your path string is correct.
     * @param searchPath
     * @returns {string}
     */
    public static ensureTrailingPathDelimiter(searchPath: string): string {
        if (Utils.isEmpty(searchPath)) {
            return '';
        }

        const pathSep = path.sep;
        if (!searchPath.endsWith(pathSep)) {
            searchPath = searchPath + pathSep;
        }

        return searchPath;
    }

    /**
     * Appends given value to a given path
     * @param path
     * @param part
     * @param trailingDelim
     */
    public static appendToPath(path: string, part: string, trailingDelim: boolean = true) {
        Utils.ensureTrailingPathDelimiter(path);
        path += part;

        if (trailingDelim) {
            Utils.ensureTrailingPathDelimiter(path);
        }
    }

    /**
     * Checks for unset input string
     * @param input
     * @returns {boolean}
     */
    public static isEmpty(input: any): boolean {
        return (input === undefined || input === null || input === '');
    }

    /**
     * Removes the trailing "*" from a string (if any)
     * @returns {string}
     * @param filePath
     */
    public static stripWildcard(filePath: string): string {
        if (filePath.endsWith('/*')) {
            filePath = filePath.substr(0, filePath.length - 2);
        }

        return filePath;
    }

    /**
     * Replaces double slashes "//" (if any)
     * @param filePath
     */
    public static replaceDoubleSlashes(filePath: string): string {
        return path.normalize(filePath);
    }

    /**
     * Checks if a given filename contains a search path
     * @param filename
     * @returns {boolean}
     */
    public static fileHavePath(filename: string): boolean {
        return (filename !== path.basename(filename));
    }
}
