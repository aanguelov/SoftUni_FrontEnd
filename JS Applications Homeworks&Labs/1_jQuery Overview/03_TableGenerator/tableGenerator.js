var input = $.parseJSON('[{"manufacturer":"BMW","model":"E92 320i","year":2011,"price":50000,"class":"Family"},' +
            '{"manufacturer":"Porsche","model":"Panamera","year":2012,"price":100000,"class":"Sport"},' +
            '{"manufacturer":"Peugeot","model":"305","year":1978,"price":1000,"class":"Family"}]');

function generateTable(arr) {
    var table = $('<table>'),
        tHeadCells = Object.keys(arr[0]),
        row = $('<tr>');

    tHeadCells.forEach(function(cell) {
        var th = $('<th>').text(cell);
        row.append(th);
    });
    table.append(row);

    arr.forEach(function(el) {
        row = $('<tr>');
        tHeadCells.forEach(function(cell) {
            var td = $('<td>').text(el[cell]);
            row.append(td);
        });
        table.append(row);
    });
    $('#wrapper').append(table);
}

generateTable(input);
