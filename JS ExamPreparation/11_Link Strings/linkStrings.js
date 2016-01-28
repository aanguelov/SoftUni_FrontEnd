function solve(arr) {
    var current, keyValuePair, key, value;
    arr.forEach(function(el) {
        current = el.split(/%20/).join(' ');
        current = current.split('+').join(' ').replace(/\s\s+/g, ' ');
        current = current.split('?').filter(function(str) {
            return str.indexOf('=') !== -1;
        }).join('&').split('&');

        var result = [], resultAsString = '', index;
        current.forEach(function(kvp) {
            keyValuePair = kvp.split('=');
            key = keyValuePair[0].trim();
            value = keyValuePair[1].trim();

            if (!result[key]) {
                result[key] = [];
            }
            result[key].push(value);
        });

        for (index in result) {
            resultAsString += index + '=[' + result[index].join(', ') + ']';
        }
        console.log(resultAsString);
    });
}

var input = [ 'foo=%20foo&value=+val&foo+=5+%20+203',
    'foo=poo%20&value=valley&dog=wow+',
    'url=https://softuni.bg/trainings/coursesinstances/details/1070',
    'https://softuni.bg/trainings?trainer=nakov&course=oop&course=php' ];

solve(input);