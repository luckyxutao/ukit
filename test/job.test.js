// var add = require('../src/add.js');
import utils from '../src/utils/job.js';
var expect = require('chai').expect;
describe('util.isArray测试', function() {
  it('[1,2,34]应该返回true', function() {
    expect(utils.isArray([1,2,34])).to.be.true;
  });
  it('arguments对象应该返回false', function () {
    function bb(){
      expect(utils.isArray(arguments)).to.be.false;
    }
    bb();
  });
});

describe('util.uniqueEs6',()=>{
  it('[1,3,3,2,4,2]应该返回[1,3,2,4]',()=>{
    expect(utils.uniqueEs6([1, 3, 3, 2, 4, 2])).to.eql([1, 3, 2, 4]);
  });
});

