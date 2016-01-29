function solve(arr) {
    var system1 = arr[0].split(' '), system2 = arr[1].split(' '), system3 = arr[2].split(' ');
    var normandyX = Number(arr[3].split(' ')[0]), normandyY = Number(arr[3].split(' ')[1]);
    var turns = Number(arr[4]);

    for (var i = 0; i <= turns; i++) {
        if ((normandyX <= Number(system1[1]) + 1 && normandyX >= Number(system1[1]) - 1) &&
            (normandyY <= Number(system1[2]) + 1 && normandyY >= Number(system1[2]) - 1)) {
            console.log(system1[0].toLowerCase());
        }else if ((normandyX <= Number(system2[1]) + 1 && normandyX >= Number(system2[1]) - 1) &&
                    (normandyY <= Number(system2[2]) + 1 && normandyY >= Number(system2[2]) - 1)) {
            console.log(system2[0].toLowerCase());
        }else if ((normandyX <= Number(system3[1]) + 1 && normandyX >= Number(system3[1]) - 1) &&
                    (normandyY <= Number(system3[2]) + 1 && normandyY >= Number(system3[2]) - 1)) {
            console.log(system3[0].toLowerCase());
        }else {
            console.log('space');
        }

        normandyY++;
    }
}

var input = [ 'Sirius 3 7',
    'Alpha-Centauri 7 5',
    'Gamma-Cygni 10 10',
    '8 1',
    '6' ];

solve(input);
