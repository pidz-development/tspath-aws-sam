const fs = require('fs');
const pathFrom = process.cwd() + '/src/version.json';
const pathTo = process.cwd() + '/dist/src/version.json';
const packageContent = fs.readFileSync(process.cwd() + '/package.json');

const json = fs.readFileSync(pathFrom);
const content = JSON.parse(json);
console.log(content);
content.version = JSON.parse(packageContent).version;
fs.writeFileSync(pathTo, JSON.stringify(content, null, 2));
