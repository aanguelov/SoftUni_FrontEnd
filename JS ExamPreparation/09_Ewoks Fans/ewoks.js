function solve(arr) {
    var ewokDate = new Date(1973, 4, 25), dateArgs, haters = [], fans = [];

    arr.forEach(function(el) {
        dateArgs = el.split('.');
        var currentDate = new Date(Number(dateArgs[2]), Number(dateArgs[1]) - 1, Number(dateArgs[0]));
        if (currentDate < ewokDate) {
            if (currentDate > new Date(1900, 0, 1)) {
                haters.push(currentDate);
            }
        }else {
            if (currentDate < new Date(2015, 0, 1)) {
                fans.push(currentDate);
            }
        }
    });

    fans.sort(function(a, b) {
        return b - a;
    });
    haters.sort(function(a, b) {
        return a - b;
    });

    if (fans.length === 0 && haters.length === 0) {
        console.log('No result');
    }
    if (fans.length !== 0) {
        console.log('The biggest fan of ewoks was born on ' + fans[0].toDateString());
    }
    if (haters.length !== 0) {
        console.log('The biggest hater of ewoks was born on ' + haters[0].toDateString());
    }
}

var input = [ '27.06.1926',
    '01.08.1985',
    '20.10.1949',
    '16.05.2004',
    '10.12.2022',
    '27.12.1974',
    '20.09.1896',
    '06.09.1949',
    '20.07.1933',
    '23.05.2014',
    '27.10.1926',
    '15.12.2027',
    '26.01.1947',
    '03.09.1869',
    '05.05.1983',
    '15.09.1970',
    '03.02.1852',
    '08.09.1974',
    '14.02.1942',
    '21.02.1917',
    '02.11.2010',
    '01.06.2042',
    '04.02.1946',
    '17.01.2044',
    '02.07.1897',
    '25.01.1983',
    '21.07.1925',
    '28.02.1997',
    '25.05.1990',
    '09.07.1875',
    '23.09.1861',
    '09.04.1978',
    '23.02.1937',
    '22.03.1869',
    '22.01.1883',
    '07.06.1874',
    '18.03.1856',
    '28.05.2047',
    '05.12.2015',
    '14.03.1995',
    '07.02.1954',
    '27.07.1911',
    '22.07.1874',
    '03.05.2036',
    '15.01.1918',
    '06.08.1904',
    '26.02.1947',
    '10.04.1984',
    '11.01.1922',
    '15.02.1935',
    '15.11.1884',
    '13.01.2003',
    '11.09.1914',
    '13.10.2010',
    '15.09.1895',
    '06.12.2000',
    '05.02.1909',
    '09.05.1951',
    '27.06.1963',
    '15.01.1888' ];

solve(input);