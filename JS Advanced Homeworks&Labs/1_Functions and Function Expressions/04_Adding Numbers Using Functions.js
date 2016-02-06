var add = (function add() {
    var sum = 0;

    function inner(num1) {
        sum += num1;
        return inner;
    }

    inner.toString = function() {return sum};

    return inner;
}());

var addTwo = add(1)(2);

var addThree = addTwo;

console.log(addTwo.toString());
console.log(addThree.toString());
console.log(addThree(3).toString());