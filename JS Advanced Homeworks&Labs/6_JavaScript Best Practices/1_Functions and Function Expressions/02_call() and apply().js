function printArgsInfo() {
    var type;
    arguments[0].forEach(function(el) {
        type = typeof el;
        if (Array.isArray(el)) {
            type = 'array';
        }
        console.log(el + ' (' + type + ')');
    });
}

var input = [2, 3, 2.5, -110.5564, false];
//var input = [null, undefined, "", 0, [], {}];
//var input = [[1, 2], ["string", "array"], ["single value"]];
//var input = ["some string", [1, 2], ["string", "array"], ["mixed", 2, false, "array"], {name: "Peter", age: 20}];
//var input = [[[1, [2, [3, [4, 5]]]], ["string", "array"]]];

printArgsInfo.call(null, input);
console.log('-------------------');
printArgsInfo.apply(null, [input]);
