require('./global');
const version = require('../package.json').version;
let Manager = require('./modules/manager.js');
let helpTitle = `\n===================== UKit ${version} ====================\n`;
module.exports = {
    run: function(option) {
        if (option === '-v' || option === '--version') {
            log(version);
            return;
        } else if (option === '-h' || option === '--help' || !option) {
            this.help();
            return;
        }
    },
    help: () => {
        info(helpTitle);
        Manager.getProject(process.cwd()).commands.forEach((command) => {
            const commandStr = rightPad(rightPad(command.name, 12) + (command.abbr || ''), 25);
            info(` ${commandStr} # ${command.module.usage || ''}`);
        })
        info();
        info(' 如果需要帮助, 请使用 ukit {命令名} --help\n');
    }
}