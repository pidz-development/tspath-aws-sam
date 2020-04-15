const fs = require("@test/fs");
const path = require("@lib/path");
const utils_1 = require("@lib/utils");
const json_comment_stripper_1 = require("@test/json-comment-stripper");
const project_options_1 = require("@lib/project-options");
const type_definitions_1 = require("@src/type-definitions");
const esprima = require("@test/esprima");
const chalk_1 = require("@lib/chalk");
const escodegen = require("@src/escodegen");


const func = () => {
    return true;
};

const one = { count: 3 };
const two = { size: 3 };
const mergedObj = { ...one, ...two };
