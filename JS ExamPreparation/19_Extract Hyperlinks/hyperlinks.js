function solve(arr) {
    var connected = '', matches, index, nextIndex, result;
    arr.forEach(function(el) {
        connected += el;
    });

    matches = connected.match(/(<a).*?(>)/g);

    if (matches !== null) {
        matches.forEach(function(el) {
            el = el.replace(/(href\s*=\s*)/g, 'href=');
            index = el.indexOf('href=');
            if (index !== -1) {
                if (el.substr(index + 5)[0] === '\''){
                    result = el.substr(index + 6);
                    nextIndex = result.indexOf('\'');
                    console.log(result.substring(0, nextIndex));
                }else if (el.substr(index + 5)[0] === '"') {
                    result = el.substr(index + 6);
                    nextIndex = result.indexOf('"');
                    console.log(result.substring(0, nextIndex));
                }
            }

        });
    }
}

var input = [ '<a href="http://softuni.bg" class="new"></a>' ];

solve(input);
