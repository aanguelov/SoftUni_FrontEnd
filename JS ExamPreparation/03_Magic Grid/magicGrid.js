function solve(arr) {
    var toDecrypt = arr[0];
    var magicNumber = Number(arr[1]);
    var matrix = '', result = '', key = 0, matrixLength = arr[2].split(' ').length, keyFound = false;

    for (var index = 2; index < arr.length; index++) {
        matrix += arr[index] + ' ';
    }

    var matrixArr = matrix.trim().split(' ');

    for (var i = 0; i < matrixArr.length; i++) {
        var first = Number(matrixArr[i]);
        for (var j = 0; j < matrixArr.length; j++) {
            var second = Number(matrixArr[j]);
            if (i !== j) {
                if (first + second === magicNumber) {
                    key = i % matrixLength + Math.floor(i/matrixLength) + Math.floor(j/matrixLength) + j % matrixLength;
                    keyFound = true;
                    break;
                }
            }
        }
        if (keyFound) {
            break;
        }
    }

    for (var k = 0; k < toDecrypt.length; k++) {
        var currentSymbolCode = toDecrypt.charCodeAt(k);
        if (k % 2 === 0) {
            result += String.fromCharCode(currentSymbolCode + key);
        }else {
            result += String.fromCharCode(currentSymbolCode - key);
        }
    }

    console.log(result);
}

var input = [ '>scsimh$deo$]$^mnxdh]}', '400', '200 100 120', '120 102 300', '150 290 370' ];

solve(input);