function solve(arr) {
    var args, band, town, date, venue, result = {}, keys = [], ordered = [], orderedByInnerKeys = {};
    arr.forEach(function(el) {
        args = el.split('|');

        band = args[0].trim();
        town = args[1].trim();
        date = args[2].trim();
        venue = args[3].trim();

        if (!result[town]) {
            result[town] = {};
            keys.push(town);
        }

        if (!result[town][venue]) {
            result[town][venue] = [];
        }

        if (result[town][venue].indexOf(band) === -1) {
            result[town][venue].push(band);
        }

    });

    keys.sort();

    keys.forEach(function(key) {
        ordered[key] = result[key];
    });

    for (var index in ordered) {
        orderedByInnerKeys[index] = {};
        var innerKeys = Object.keys(ordered[index]);
        innerKeys.sort();

        innerKeys.forEach(function(innerKey) {
            orderedByInnerKeys[index][innerKey] = ordered[index][innerKey];
            orderedByInnerKeys[index][innerKey].sort();
        });
    }

    console.log(JSON.stringify(orderedByInnerKeys));
}

var input = [ 'ZZ Top | London | 2-Aug-2014 | Wembley Stadium',
    'Iron Maiden | London | 28-Jul-2014 | Wembley Stadium',
    'Metallica | Sofia | 11-Aug-2014 | Lokomotiv Stadium',
    'Helloween | Sofia | 1-Nov-2014 | Vassil Levski Stadium',
    'Iron Maiden | Sofia | 20-June-2015 | Vassil Levski Stadium',
    'Helloween | Sofia | 30-July-2015 | Vassil Levski Stadium',
    'Iron Maiden | Sofia | 26-Sep-2014 | Lokomotiv Stadium',
    'Helloween | London | 28-Jul-2014 | Wembley Stadium',
    'Twisted Sister | London | 30-Sep-2014 | Wembley Stadium',
    'Metallica | London | 03-Oct-2014 | Olympic Stadium',
    'Iron Maiden | Sofia | 11-Apr-2016 | Lokomotiv Stadium',
    'Iron Maiden | Buenos Aires | 03-Mar-2014 | River Plate Stadium' ];

solve(input);