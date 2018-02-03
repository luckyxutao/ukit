module.exports.rightPad = function(str, len, ch) {
    if (!ch) {
        ch = ' ';
    }
    for (var i = 0; i < len; i++) {
        str += ch;
    }
    return str;
}
module.exports.leftPad = function(str, len, ch) {
    if (!ch) {
        ch = ' ';
    }
    var result = ''
    for (var i = 0; i < len; i++) {
         result += ch;
    }
    return result + str;
}