function solve(arr) {
    var bill = Number(arr[0]), mood = arr[1], tip, firstDigit;

    if (mood === 'happy') {
        tip = (bill * 10) / 100;
    }else if (mood === 'married') {
        tip = (bill * 0.05) / 100;
    }else if (mood === 'drunk') {
        tip = (bill * 15) / 100;
        firstDigit = tip.toString().split('')[0];
        tip = Math.pow(tip, firstDigit);
    }else {
        tip = (bill * 5) / 100;
    }

    console.log(tip.toFixed(2));
}

var input = [ '1230.83', 'drunk' ];

solve(input);
