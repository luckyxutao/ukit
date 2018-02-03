import utils from '../src/utils/str.js';
var expect = require('chai').expect;
describe('leftPad测试', function() {
    it('leftPad(abc,5)应该返回     abc', function() {
        expect(utils.leftPad('abc',5)).to.equal('     abc');
    });
    it('leftPad(abc,5,#)应该返回*****abc', function() {
        expect(utils.leftPad('abc',5,'#')).to.equal('#####abc');
    });
});

describe('rightPad测试', function() {
    it('rightPad(abc,5)应该返回abc', function() {
        expect(utils.rightPad('abc',5)).to.equal('abc     ');
    });
    it('rightPad(abc,5,#)应该返回abc#####', function() {
        expect(utils.rightPad('abc',5,'#')).to.equal('abc#####');
    });
});