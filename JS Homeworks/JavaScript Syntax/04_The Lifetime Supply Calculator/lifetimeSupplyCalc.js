function calcSupply(age, maxAge, food, foodPerDay) {
    var days = (maxAge - age)*365;
    var kilos = days*foodPerDay;
    var result = kilos + 'kg of ' + food + ' would be enough until I am ' + maxAge + ' years old.';
    console.log(result);
}

calcSupply(38, 118, 'chocolate', 0.5);
calcSupply(20, 87, 'fruits', 2);
calcSupply(16, 102, 'nut', 1.1);
