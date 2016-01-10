function findRoots(a, b, c) {
    var discriminant = Math.pow(b, 2) - 4*a*c;

    if (discriminant < 0) {
        return 'No real roots';
    }else if (discriminant === 0) {
        var x = -1*b/(2*a);
        return 'X = ' + x;
    }else {
        var first = (-1*b + Math.sqrt(discriminant))/(2*a);
        var second = (-1*b - Math.sqrt(discriminant))/(2*a);

        return 'X1 = ' + first + '\n' + 'X2 = ' + second;
    }
}

console.log(findRoots(2, 5, -3));
console.log(findRoots(2, -4, 2));
console.log(findRoots(4, 2, 1));
