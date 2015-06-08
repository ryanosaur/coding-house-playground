var assertEqual = function(actual, expected){
  console.log(actual === expected ? "PASS" : "FAIL");
};

var splitSum = function(message, splitter){
    return message.split(splitter)
        .map(Number)
        .reduce(function(total, next){
            return total + next
        }, 0);
};

assertEqual(splitSum("3:4:5:1", ":"), 13);
assertEqual(splitSum("-1$-5$5$-4", "$"), -5);

function argsSum(){
    return Array.prototype.slice.call(arguments).reduce(function(acc, current){
        return acc + current;
    }, 0);
};

assertEqual(argsSum(3,7,8), 18);
assertEqual(argsSum(1,1,1,1,1,1,1,1,1,1,1,1,1,1), 14);

function createArrayFromAtoB(start, end){
    var array = [];
    for(var i = start; i <= end; i++){
        array.push(i);
    }
    return array;
};

assertEqual(JSON.stringify(createArrayFromAtoB(4, 9)), JSON.stringify([4, 5, 6, 7, 8, 9]));
assertEqual(JSON.stringify(createArrayFromAtoB(-1, 3)),  JSON.stringify([-1, 0, 1, 2, 3]));

Date.prototype.isTodayAWeekend = function(){
    return (this.getDay() > 0 && this.getDay() < 6) ? false : true;
};

assertEqual(new Date().isTodayAWeekend(), false);

var array = [4,28,6,16,26,12];
var key = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

assertEqual(array.map(function(e){
    return key[e/2];
}).join(''), "CODING");
