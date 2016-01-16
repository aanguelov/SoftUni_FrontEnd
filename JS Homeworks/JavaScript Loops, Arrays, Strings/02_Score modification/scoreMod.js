var numbers = [200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1];

function isValidExamScore(x) {
    return x >= 0 && x <=400;
}

var filtered = numbers.filter(isValidExamScore);

for (var i = 0; i < filtered.length; i++) {
    filtered[i] -= filtered[i]*0.2;
}

filtered.sort(function(a, b) {
    return a - b;
});

console.log(filtered);
