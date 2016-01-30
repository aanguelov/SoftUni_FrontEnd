function solve(arr) {
    var result = [], current, next, currentChar, first, second, third;
    arr.forEach(function(el) {
        result.push(el.split(''));
    });

    for (var i = 0; i < arr.length - 1; i++) {
        current = arr[i];
        next = arr[i + 1];

        for (var j = 1; j < current.length; j++) {
            currentChar = current[j];
            first = next[j - 1];
            second = next[j];
            third = next[j + 1];

            if (third !== undefined && currentChar === first && first === second && second === third) {
                result[i][j] = '*';
                result[i + 1][j - 1] = '*';
                result[i + 1][j] = '*';
                result[i + 1][j + 1] = '*';
            }
        }
    }

    result.forEach(function(el) {
        console.log(el.join(''));
    });
}

var input = [ 'dffdsgyefg',
    'ffffeyeee',
    'jbfffays',
    'dagfffdsss',
    'dfdfa',
    'dadaaadddf',
    'sdaaaaa',
    'daaaaaaasf' ];

solve(input);
