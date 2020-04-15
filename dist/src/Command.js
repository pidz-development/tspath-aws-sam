#! /usr/bin/env node
"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const Confirm = require("prompt-confirm");
const ParserEngine_1 = require("./ParserEngine");
const ConfigFinder_1 = require("./ConfigFinder");
const chalk_1 = require("chalk");
// @ts-ignore
const version_json_1 = require("./version.json");
/**
 * TSPath main class
 */
class Command {
    /**
     * TSPath constructor, logs version
     */
    constructor() {
        console.log(chalk_1.default.yellow('TSPath ' + version_json_1.version));
    }
    /**
     * Execute command
     * @param args
     */
    execute(args) {
        const force = args.force || args.f;
        const projectPath = process.cwd();
        let config = null;
        try {
            let confPath = projectPath;
            if (args.root) {
                confPath = projectPath + '/' + args.root;
            }
            config = ConfigFinder_1.ConfigFinder.find(confPath);
            config.readContents();
        }
        catch (err) {
            console.log(chalk_1.default.bold.red(err));
            process.exit(23);
        }
        // @ts-ignore
        const engine = new ParserEngine_1.ParserEngine(config, args);
        if (force) {
            engine.execute();
        }
        else {
            new Confirm('Files found at <' + config.path + '>, continue processing ?')
                .ask((answer) => {
                if (answer) {
                    engine.execute();
                }
            });
        }
    }
}
exports.Command = Command;
