function solve(arr) {
    var parameters = function(kg, fragile, type, transferredWith) {
        this.kg = kg;
        this.fragile = fragile;
        this.type = type;
        this.transferredWith = transferredWith;
    };

    var index,
        current,
        owners = {},
        name,
        luggageName,
        isFood,
        isDrink,
        isFragile,
        weight,
        transferredWith,
        type,
        criterion = arr[arr.length - 1];

    for (index in arr) {
        if (Number(index) === arr.length - 1) {
            break;
        }
        current = arr[index].replace(/([\.]*[*][\.]*)/g, '/').split('/');
        name = current[0];
        luggageName = current[1];
        isFood = (current[2] === 'true');
        isDrink = (current[3] === 'true');
        isFragile = (current[4] === 'true');
        weight = Number(current[5]);
        transferredWith = current[6];

        if (isDrink) {
            type = 'drink';
        }
        if (isFood) {
            type = 'food';
        }
        if (!isDrink && !isFood) {
            type = 'other';
        }

        if (!owners[name]) {
            owners[name] = {};
        }

        owners[name][luggageName] = new parameters(weight, isFragile, type, transferredWith);
    }

    if (criterion === 'luggage name') {
        var ordered = {};
        Object.keys(owners).forEach(function(key) {
            ordered[key] = {};
            var sortedLuggageNames = Object.keys(owners[key]).sort();

            sortedLuggageNames.forEach(function(ownKey) {
                ordered[key][ownKey] = owners[key][ownKey];
            });
        });
        console.log(JSON.stringify(ordered));
    }else if (criterion === 'weight') {
        var orderedByWeight = {};
        Object.keys(owners).forEach(function(key) {
            orderedByWeight[key] = {};
            var sortedKilos = Object.keys(owners[key]).sort(function(a, b) {
                return owners[key][a].kg - owners[key][b].kg;
            });

            sortedKilos.forEach(function(el) {
                orderedByWeight[key][el] = owners[key][el];
            });
        });
        console.log(JSON.stringify(orderedByWeight));
    }else {
        console.log(JSON.stringify(owners));
    }

}

var input = [ 'Yana Slavcheva.*.clothes.*.false.*.false.*.false.*.2.2.*.backpack',
    'Kiko.*.socks.*.false.*.false.*.false.*.0.2.*.backpack',
    'Kiko.*.banana.*.true.*.false.*.false.*.3.2.*.backpack',
    'Kiko.*.sticks.*.false.*.false.*.false.*.1.6.*.ATV',
    'Kiko.*.glasses.*.false.*.false.*.true.*.3.*.ATV',
    'Manov.*.socks.*.false.*.false.*.false.*.0.3.*.ATV',
    'weight' ];

solve(input);