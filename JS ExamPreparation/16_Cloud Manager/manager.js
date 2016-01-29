function solve(arr) {
    var args, name, extension, memory, result = [], keys = [], sorted = {};
    arr.forEach(function(el) {
        args = el.split(' ');

        name = args[0];
        extension = args[1];

        memory = args[2].substring(0, args[2].length - 2);

        if (!result[extension]) {
            result[extension] = {files:[], memory:0};
            keys.push(extension);
        }
        result[extension].files.push(name);
        result[extension].memory += Number(memory);
    });

    for (var index in result) {
        result[index].files.sort(function(a, b) {
            return a.localeCompare(b);
        });
    }

    keys.sort(function(a, b) {
        return a.localeCompare(b);
    });

    keys.forEach(function(key) {
        sorted[key] = result[key];
        sorted[key].memory = sorted[key].memory.toFixed(2);
    });

    //console.log(keys);
    console.log(JSON.stringify(sorted));
}

var input = [ 'sentinel .exe 15MB',
    'zoomIt .msi 3MB',
    'skype .exe 45MB',
    'trojanStopper .bat 23MB',
    'kindleInstaller .exe 120MB',
    'setup .msi 33.4MB',
    'winBlock .bat 1MB' ];

solve(input);
