function solve(arr) {
    var index, currentLine, type, value, silver = 0, gold = 0, diamonds = 0;
    for (index in arr) {
        currentLine = arr[index].trim().split(/\s+/);
        if (currentLine[0].trim().toLowerCase() === 'mine' && currentLine[currentLine.length - 2] === ':') {
            value = currentLine[currentLine.length - 1].trim();
            type = currentLine[currentLine.length - 3].trim().toLowerCase();
            if (type === 'gold') {
                gold += Number(value);
            }else if (type === 'silver') {
                silver += Number(value);
            }else if (type === 'diamonds') {
                diamonds += Number(value);
            }
        }
    }
    console.log('*Silver: ' + silver);
    console.log('*Gold: ' + gold);
    console.log('*Diamonds: ' + diamonds);
}

var input = [ 'mine bobovdol - gold : 10',
    'mine - diamonds : 5',
    'mine colas - wood : 10',
    'mine myMine - silver :  14',
    'mine silver:14 - silver : 14' ];

solve(input);
