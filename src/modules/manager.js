exports.getCommands = ()=>{
    return globby.sync(['*.js'],{
        cwd : UKIT_COMMANDS_PATH
    }).map((name)=>{
        return {
            name: sysPath.basename(name, '.js'),
            abbr: require(sysPath.join(UKIT_COMMANDS_PATH, name)).abbr,
            module: require(sysPath.join(UKIT_COMMANDS_PATH, name))
        }
    });
}

let projectCache = {};
let Project = require('../models/project.js');
exports.getProject = (cwd, options) => {
    if (!projectCache[cwd] || !options.cache) {
        projectCache[cwd] = new Project(cwd);
    }
    return projectCache[cwd];
};