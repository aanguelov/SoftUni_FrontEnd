function solve(arr) {
    var row, col, current, next, rights, lefts, sideMoves, nextCol;

    for (var i = 0; i < arr.length; i++) {
        current = arr[i];
        if (current.indexOf('o') !== -1) {
            row = i;
            col = current.indexOf('o');
            break;
        }
    }

    for (var j = row; j < arr.length - 1; j++) {
        current = arr[j];
        next = arr[j + 1];
        rights = next.split('>').length - 1;
        lefts = next.split('<').length - 1;
        sideMoves = rights - lefts;
        nextCol = col + sideMoves;

        if (next[nextCol] === '_') {
            console.log('Landed on the ground like a boss!');
            console.log(j + 1 + ' ' + nextCol);
            break;
        }else if (next[nextCol] === '~') {
            console.log('Drowned in the water like a cat!');
            console.log(j + 1 + ' ' + nextCol);
            break;
        }else if (next[nextCol] === '/' || next[nextCol] === '\\' || next[nextCol] === '|') {
            console.log('Got smacked on the rock like a dog!');
            console.log(j + 1 + ' ' + nextCol);
            break;
        }else {
            col = nextCol;
        }
    }
}

var input = [ '>>>>>>>>>>>o<<<<<<<<<<<<<',
              '----------~~~------------',
              '--------~/~~~\\~----------',
              '-------~/~---~\\~---------',
              '------~/~-----~\\~--------',
              '-----~/~-------~\\~-------',
              '----~/~---------~\\~------',
              '---~/~-----------~\\~-----',
              '--~/~-------------~\\~----',
              '-~/~---------------~\\~---' ];

solve(input);
