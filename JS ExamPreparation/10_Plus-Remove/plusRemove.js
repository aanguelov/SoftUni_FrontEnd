function solve(arr) {
    var result = [];
    arr.forEach(function(el) {
        result.push(el.split(''));
    });

    for (var i = 1; i < arr.length - 1; i++) {
        var middleLine = arr[i];
        var topLine = arr[i - 1];
        var bottomLine = arr[i + 1];

        for (var j = 1; j < middleLine.length - 1; j++) {
            var middleChar = middleLine[j];
            var firstChar = middleLine[j - 1];
            var lastChar = middleLine[j + 1];

            if (firstChar.toLowerCase() === middleChar.toLowerCase() && middleChar.toLowerCase() === lastChar.toLowerCase()) {
                if ((topLine[j] !== undefined && bottomLine[j] !== undefined) &&
                    (topLine[j].toLowerCase() === middleChar.toLowerCase() && bottomLine[j].toLowerCase() === middleChar.toLowerCase())) {
                    result[i][j] = '';
                    result[i][j - 1] = '';
                    result[i][j + 1] = '';
                    result[i - 1][j] = '';
                    result[i + 1][j] = '';
                }
            }
        }
    }

    result.forEach(function(el) {
        console.log(el.join(''));
    });
}

var input = [ '888**t*', '8888ttt', '888ttt<<', '*8*0t>>hi' ];

solve(input);