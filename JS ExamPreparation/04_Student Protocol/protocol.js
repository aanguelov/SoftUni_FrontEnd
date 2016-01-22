function solve(arr) {
    var index;

    var student = function(name, result){
        this.name = name;
        this.result = result;
        this.makeUpExams = 0;
    };

    var exams = {};
    for (index in arr) {
        var currentLine = arr[index].split(/[-:]/);
        var score = Number(currentLine[2].trim());
        var name = currentLine[0].trim();
        var examName = currentLine[1].trim();
        if (score >= 0 && score <= 400) {
            var currentStudent = new student(name, score);

            if (!exams[examName]) {
                exams[examName] = [];
                exams[examName].push(currentStudent);
            }else {
                var nextStudent = true;
                for (index in exams[examName]) {
                    var current = exams[examName][index];
                    if (name === current.name) {
                        current.makeUpExams++;
                        nextStudent = false;
                        if (score > current.result) {
                            current.result = score;
                        }
                    }
                }
                if (nextStudent) {
                    exams[examName].push(currentStudent);
                }
            }

        }
    }

    for (index in exams) {
        exams[index].sort(function(a, b) {
            if (a.result === b.result) {
                if (a.makeUpExams === b.makeUpExams) {
                    return a.name.localeCompare(b.name);
                }
                return a.makeUpExams - b.makeUpExams;
            }
            return b.result - a.result;
        });
    }

    console.log(JSON.stringify(exams));
}

var input = [ 'Simon Cowell - PHP : 100',
    'Simon Cowell-PHP: 500',
    'Peter Jackson - PHP: 350',
    'Simon Cowell - PHP : 400' ];

solve(input);
