var assert = require("assert")
var CH = {};

CH.sum = function(){
  var args = Array.prototype.slice.call(arguments);
  if(CH.areArrays(args)){
    return args.map(function(element){
      return CH.sum.apply(null, element);
    });
  }
  else{
    return args.reduce(function(total, element){
      return total + element || 0;
    }, 0);
  }
}

CH.areArrays = function(args){
  return args.every(function(e){
    return Array.isArray(e);
  });
}

describe('CH', function(){
  describe('the sum function', function(){
    it('returns the summ of X arguments', function(){
      assert.equal(7, CH.sum(3,4));
      assert.equal(-1, CH.sum(0,-1));
    });
    it('the returns zero when no arguments are present', function(){
      assert.equal(0, CH.sum());
    });
    it('the returns one when the other is missing', function(){
      assert.equal(3, CH.sum(3));
      assert.equal(3, CH.sum(undefined, 3));
      assert.equal(3, CH.sum(null, 3));
      assert.equal(3, CH.sum(NaN, 3));
      assert.equal(3, CH.sum(false, 3));
      assert.equal(3, CH.sum("", 3));
    });
    it('the returns an array that sums individually passed arrays', function(){
      assert.deepEqual([4,8], CH.sum([2, 2], [3,5]));
    });
  });
});
