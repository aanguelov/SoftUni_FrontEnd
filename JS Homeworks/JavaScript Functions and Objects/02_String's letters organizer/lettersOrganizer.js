function sortLetters(str, condition) {
    var arrOfLetters = str.split(''),
        result;

    if (condition === true) {
        arrOfLetters.sort(function(a, b) {
            return a.toLowerCase() > b.toLowerCase();
        });
    }else {
        arrOfLetters.sort(function(a, b) {
            return a.toLowerCase() < b.toLowerCase();
        });
    }

    return result = arrOfLetters.join('');
}

console.log(sortLetters('HelloWorld', true));
console.log(sortLetters('HelloWorld', false));


