var input = [
    "Pesho",
    4,
    4.21,
    { name : 'Valyo', age : 16 },
    { type : 'fish', model : 'zlatna ribka' },
    [1,2,3],
    "Gosho",
    { name : 'Penka', height: 1.65}
];

function extractObjects(arr) {
    var result = [],
        i;
    for (i = 0; i < arr.length; i++) {
        var current = arr[i];
        if (typeof current === 'object' && !Array.isArray(current)) {
            result.push(current);
        }
    }

    return result;
}

var extracted = extractObjects(input);
console.log(extracted);