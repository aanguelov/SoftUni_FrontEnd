function solve(arr) {
    var args, name, type, taskNumber, score, lines, result = {}, key, averages = [];

    arr.forEach(function(el) {
        args = el.split('&');

        name = args[0].trim();
        type = args[1].trim();
        taskNumber = Number(args[2].trim());
        score = Number(args[3].trim());
        lines = Number(args[4].trim());

        key = 'Task ' + taskNumber;

        if (!result[key]) {
            result[key] = {tasks:[], average:[], lines:0, task:taskNumber};
        }

        var currentExam = new Exam(name, type);
        result[key].tasks.push(currentExam);
        result[key].average.push(score);
        result[key].lines += lines;
    });

    function Exam(name, type) {
        this.name = name;
        this.type = type;
    }

    function createTask(name) {
        return {}
    }

    for (var index in result) {
        var currentAvg = 0;
        var count = 0;
        result[index].average.forEach(function(el) {
            currentAvg += el;
            count++;
        });
        result[index].average = Number(Number((currentAvg/count).toFixed(2)).toString());
        averages.push(currentAvg/count);
    }

    var resArr = [];
    for (var res in result) {
        resArr.push(result[res]);
    }
    resArr.sort(function(a, b) {
        if (a.average === b.average) {
            return a.lines - b.lines;
        }

        return b.average - a.average;
    });

    var ordered = {};

    resArr.forEach(function(el) {
        var orderedTask = 'Task ' + el.task;
        delete el.task;

        ordered[orderedTask] = el;
    });

    for (var ord in ordered) {
        ordered[ord].tasks.sort(function(a, b) {
            return a.name.localeCompare(b.name);
        })
    }

    console.log(JSON.stringify(ordered));
}

var input = [ 'Array Matcher & strings & 4 & 100 & 38',
    'Magic Wand & draw & 3 & 100 & 15',
    'Dream Item & loops & 2 & 88 & 80',
    'Knight Path & bits & 5 & 100 & 65',
    'Basket Battle & conditionals & 2 & 100 & 120',
    'Torrent Pirate & calculations & 1 & 100 & 20',
    'Encrypted Matrix & nested loops & 4 & 90 & 52',
    'Game of bits & bits & 5 & 100 & 18',
    'Fit box in box & conditionals & 1 & 100 & 95',
    'Disk & draw & 3 & 90 & 15',
    'Poker Straight & nested loops & 4 & 40 & 57',
    'Friend Bits & bits & 5 & 100 & 81' ];

solve(input);
