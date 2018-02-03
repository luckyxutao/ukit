require('colors');
global.info = console.info; // eslint-disable-line

global.success = function() {
    info((' √ ' + Array.prototype.join.call(arguments, ' ')).green);
};
global.error = function() {
    info((' X ' + Array.prototype.join.call(arguments, ' ')).red);
};
global.warn = function() {
    info((' ∆ ' + Array.prototype.join.call(arguments, ' ')).yellow);
};
global.log = function() {
    info(('[Ykit] ').gray + Array.prototype.join.call(arguments, ' '));
};
global.logError = function() {
    info(('[Error] ').red + Array.prototype.join.call(arguments, ' '));
};
global.logWarn = function() {
    info(('[Warn] ').yellow + Array.prototype.join.call(arguments, ' '));
};
global.logInfo = function() {
    info(('[Info] ').blue + Array.prototype.join.call(arguments, ' '));
};
global.optimist = require('optimist');
global.globby = require('globby');
global.sysPath = require('path');
global.leftPad = require('./utils/str').leftPad;
global.rightPad = require('./utils/str').rightPad;
global.UKIT_COMMANDS_PATH = sysPath.join(__dirname, 'commands');