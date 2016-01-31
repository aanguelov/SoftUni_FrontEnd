function solve(arr) {
    var match, replace, str, banned, line;
    banned = arr[arr.length - 1].split(' ');
    arr.pop();

    for (var i = 0; i < arr.length; i++) {
        line = arr[i];

        if (line === '<code>') {
            console.log(line);
            while (arr[i] !== '</code>') {
                i++;
                console.log(arr[i]);
            }
            continue;
        }

        match = line.match(/#[a-zA-Z][0-9a-zA-Z_-]+[0-9a-zA-Z]/gi);

        if (match !== null) {
            for (var index in match) {
                str = match[index].substr(1);
                if (banned.indexOf(str) === -1) {
                    replace = '<a href="/users/profile/show/' + str + '">' + str + '</a>';
                }else {
                    replace = '';
                    for (var j = 0; j < str.length; j++) {
                        replace += '*'
                    }
                }

                line = line.replace(match[index], replace);
            }
        }

        console.log(line);

    }
}

var input = [ '#RoYaL: I\'m not sure what you mean,',
    'but I am confident that I\'ve written',
    'everything correctly. Ask #iordan_93',
    'and #pesho if you don\'t believe me',
    '<code>',
    '#trying to print stuff',
    'print("yoo")',
    '</code>',
    'pesho gosho' ];

solve(input);
