function solve(arr) {
    var jsonArgs, parsed, index, firstname, lastname, id, avgGrades, sum, certificate, result = {}, lectures, sortBy, level;
    result['students'] = [];
    result['trainers'] = [];
    sortBy = arr[0].split('^')[0];
    for (var i = 1; i < arr.length; i++) {
        jsonArgs = [];
        parsed = JSON.parse(arr[i]);
        for (index in parsed) {
            jsonArgs.push(parsed[index]);
        }

        id = jsonArgs[0];
        firstname = jsonArgs[1];
        lastname = jsonArgs[2];

        if (jsonArgs[4] === 'student') {
            sum = 0;
            jsonArgs[5].map(Number).forEach(function(num) {
                sum += num;
            });
            avgGrades = (sum / jsonArgs[5].length).toFixed(2);
            level = Number(jsonArgs[6]);
            certificate = jsonArgs[7];
            result['students'].push({id:id, firstname:firstname, lastname:lastname, averageGrade:avgGrades, certificate:certificate, level:level});
        }else if (jsonArgs[4] === 'trainer') {
            lectures = Number(jsonArgs[6]);
            result['trainers'].push({id:id, firstname:firstname, lastname:lastname, courses:jsonArgs[5], lecturesPerDay:lectures});
        }
    }

    if (sortBy === 'name') {
        result['students'].sort(function(a, b) {
            if (a.firstname === b.firstname) {
                return a.lastname.localeCompare(b.lastname);
            }

            return a.firstname.localeCompare(b.firstname);
        });
    }else {
        result['students'].sort(function(a, b) {
            if (a.level === b.level) {
                return a.id - b.id;
            }
            return a.level - b.level;
        });
    }

    result['students'].forEach(function(st) {
        delete st['level'];
    });

    result['trainers'].sort(function(a, b) {
        if (a.courses.length === b.courses.length) {
            return a.lecturesPerDay - b.lecturesPerDay;
        }

        return a.courses.length - b.courses.length;
    });

    console.log(JSON.stringify(result));
}

var input = [ 'level^courses',
    '{"id":0,"firstname":"Angel","lastname":"Ivanov","town":"Plovdiv","role":"student","grades":["5.89"],"level":2,"certificate":false}',
    '{"id":1,"firstname":"Mitko","lastname":"Nakova","town":"Dimitrovgrad","role":"trainer","courses":["PHP","Unity Basics"],"lecturesPerDay":6}',
    '{"id":2,"firstname":"Bobi","lastname":"Georgiev","town":"Varna","role":"student","grades":["5.59","3.50","4.54","5.05","3.45"],"level":4,"certificate":false}',
    '{"id":3,"firstname":"Ivan","lastname":"Ivanova","town":"Vidin","role":"trainer","courses":["JS","Java","JS OOP","Database","OOP","C#"],"lecturesPerDay":7}',
    '{"id":4,"firstname":"Mitko","lastname":"Petrova","town":"Sofia","role":"trainer","courses":["Database","JS Apps","Java"],"lecturesPerDay":2}' ];

solve(input);