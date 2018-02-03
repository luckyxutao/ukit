exports.usage = '开发服务';
exports.abbr = 's';
exports.run = function(options) {
    info(options)
}
exports.setOptions = (optimist) => {
    optimist.alias('p', 'port');
    optimist.describe('p', '端口');
    optimist.alias('v', 'verbose');
    optimist.describe('v', '显示详细编译信息');
};