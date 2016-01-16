var arr = ["Pesho", 2, "Gosho", 12, 2, "true", 9, undefined, 0, "Penka", { bunniesCount : 10}, [10, 20, 30, 40]];
var numArr = [];

for (var i = 0; i < arr.length; i++) {
    var value = arr[i];

    if (!isNaN(value)) {
        numArr.push(value);
    }
}

numArr = numArr.sort( function(a, b) {
    return a - b;
});
numArr.reverse();

var counter = 1;
var mostFrequent;
for (var i = 0; i < numArr.length - 1; i++) {
    var current = numArr[i];
    var next = numArr[i + 1];

    if (next === current) {
        counter++;
        mostFrequent = next;
    }else {
        counter = 1;
    }
}

console.log('Min number: ' + numArr[numArr.length - 1]);
console.log('Max number: ' + numArr[0]);
console.log('Most frequent number: ' + mostFrequent);
console.log(numArr);
