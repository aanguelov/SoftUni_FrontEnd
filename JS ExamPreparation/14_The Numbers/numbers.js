function solve(arr) {
    var numbers = arr[0].split(/[^0-9]+/).filter(function(value) {
        return value !== '';
    }).map(Number);

    var hexNumbers = [], current, zerosCount;

    numbers.forEach(function(n) {
        current = n.toString(16).toUpperCase();
        if (current.length < 4) {
            zerosCount = 4 - current.length;
            for (var i = 0; i < zerosCount; i++) {
                current = '0' + current;
            }
        }
        current = '0x' + current;
        hexNumbers.push(current);
    });

    console.log(hexNumbers.join('-'));
}

var input = [ '20' ];

solve(input);
