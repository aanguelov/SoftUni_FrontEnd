function solve(arr) {
    var start, end, num, square, fib;
    start = Number(arr[0]);
    end = Number(arr[1]);

    console.log('<table>');
    console.log('<tr><th>Num</th><th>Square</th><th>Fib</th></tr>');

    function checkFib(value) {
        var prev = 0;
        var curr = 1;
        while(prev <= value){
            if(prev == value){
                return 'yes';
            }
            curr = prev + curr;
            prev = curr - prev;
        }
        return 'no';
    }

    for (var i = start; i <= end; i++) {
        num = i;
        square = i * i;
        fib = checkFib(i);

        console.log('<tr><td>' + num + '</td><td>' + square + '</td><td>' + fib + '</td></tr>')
    }

    console.log('</table>');
}

var input = [ '55', '56' ];

solve(input);