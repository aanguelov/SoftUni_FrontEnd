function solve(arr) {
    var args, student, course, points, bonus, grade, courses = [], courseForAverage, average = 0;

    courseForAverage = arr[arr.length - 1].trim();
    arr.pop();

    arr.forEach(function(el) {
        args = el.split(' ').filter(function(value) {
            return value !== '';
        });

        student = args[0].trim();
        course = args[1].trim();
        points = Number(args[2].trim());
        bonus = Number(args[3].trim());

        if (!courses[course]) {
            courses[course] = [];
        }
        courses[course].push(points);

        if (points >= 100) {
            points = (points * 20) / 100;
            points += bonus;

            grade = ((points / 80) * 4) + 2;
            if (grade > 6) {
                grade = 6;
            }

            console.log(student + ': Exam - "' + course + '"; Points - ' + Number(points.toFixed(2)).toString() + '; Grade - ' + grade.toFixed(2));
        }else {
            console.log(student + ' failed at "' + course + '"');
        }
    });

    courses[courseForAverage].forEach(function(el) {
        average += el;
    });

    average = average / courses[courseForAverage].length;

    console.log('"' + courseForAverage + '" average points -> ' + Number(average.toFixed(2)).toString());
}

var input = [ 'Pesho C#-Advanced 100 3',
    'Gosho Java-Basics 157 3',
    'Tosho HTML&CSS 317 12',
    'Minka C#-Advanced 57 15',
    'Stanka C#-Advanced 157 15',
    'Kircho C#-Advanced 300 0',
    'Niki C#-Advanced 400 10',
    'C#-Advanced' ];

solve(input);
