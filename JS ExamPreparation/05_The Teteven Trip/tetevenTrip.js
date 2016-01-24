function solve(arr) {
    for (var i = 0; i < arr.length; i++) {
        var current = arr[i].split(' ');
        var car = current[0];
        var fuel = current[1];
        var route = current[2];
        var luggage = Number(current[3]);
        //console.log(car + ' ' + fuel + ' ' + route + ' ' + luggage);

        var consumption = 10;
        if (fuel === 'gas') {
            consumption *= 1.2;
        }else if (fuel === 'diesel') {
            consumption *= 0.8;
        }

        consumption += luggage*0.01;

        var total = 0, snowy = 0;
        if (route === '1') {
            var hundredK = 110*(consumption/100);
            snowy = 10*((0.3*consumption)/100);
            total = Math.round(hundredK + snowy);
        }else {
            var sixtyFive = 95*(consumption/100);
            snowy = 30*((0.3*consumption)/100);
            total = Math.round(sixtyFive + snowy);
        }

        console.log(car + ' ' + fuel + ' ' + route + ' ' + total);
    }
}

var input = [ 'BMW petrol 1 320.5',
    'Golf petrol 2 150.75',
    'Lada gas 1 202',
    'Mercedes diesel 2 312.54' ];

solve(input);