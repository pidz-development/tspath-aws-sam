"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = require("./Command");
const yargs_1 = require("yargs");
const Arguments_1 = require("./lib/Arguments");
const TsPathCommand = new Command_1.Command();
TsPathCommand.execute(new Arguments_1.Arguments(yargs_1.argv));
