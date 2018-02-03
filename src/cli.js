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
        // 处理核心命令
        let project = this.getProject();
        let command = project.commands.filter((command) => command.name === option || command.abbr === option)[0];
        if (!command) {
            error('Command ' + option + ' not found.');
            return;
        }
        let module = command.module;
        let options = this.initOptions(module);
        if (options.h || options.help) {
            info(helpTitle);
            info('命令:', option);
            info('说明:', module.usage || '');
            info();
            optimist.showHelp();
            info(' 如果需要帮助, 请使用 ykit {命令名} --help ');
        } else {
            module.run.call({
                project
            }, options);
        }
    },
    initOptions: function(cmd) {
        cmd.setOptions(optimist);
        optimist.alias('h', 'help');
        optimist.describe('h', '查看帮助');
        let options = optimist.argv;
        options.cwd = process.cwd();
        return options;
    },
    getProject: function() {
        return Manager.getProject(process.cwd());
    },
    help: function() {
        info(helpTitle);
        this.getProject().commands.forEach((command) => {
            const commandStr = rightPad(rightPad(command.name, 12) + (command.abbr || ''), 25);
            info(` ${commandStr} # ${command.module.usage || ''}`);
        })
        info();
        info(' 如果需要帮助, 请使用 ukit {命令名} --help\n');
    }
}