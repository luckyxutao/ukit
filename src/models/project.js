const Manager = require('../modules/manager.js');
class Project {
    constructor(cwd) {
        this.cwd = cwd;
        this.commands = Manager.getCommands();
    }
}
module.exports = Project;