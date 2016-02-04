var tableFirstRow = document.getElementById('firstRow');
var firstRow = tableFirstRow.getElementsByTagName('td');

var tableSecondRow = document.getElementById('secondRow');
var secondRow = tableSecondRow.getElementsByTagName('td');

var tableThirdRow = document.getElementById('thirdRow');
var thirdRow = tableThirdRow.getElementsByTagName('td');

var tableFirstCol = document.getElementsByClassName('firstColumn');
var tableSecondCol = document.getElementsByClassName('secondColumn');
var tableThirdCol = document.getElementsByClassName('thirdColumn');

var calc = document.getElementById('calculate');

var firstRowSum, secondRowSum, thirdRowSum, firstColSum, secondColSum, thirdColSum;

calc.onclick = function onButtonClick() {
    firstRowSum = getRowSum(firstRow);
    appendTd(firstRowSum, tableFirstRow);

    secondRowSum = getRowSum(secondRow);
    appendTd(secondRowSum, tableSecondRow);

    thirdRowSum = getRowSum(thirdRow);
    appendTd(thirdRowSum, tableThirdRow);

    firstColSum = getColSum(tableFirstCol);
    secondColSum = getColSum(tableSecondCol);
    thirdColSum = getColSum(tableThirdCol);
    appendTr(firstColSum, secondColSum, thirdColSum);
};

function getRowSum(arr) {
    var sum = 0, i;
    for (i in arr) {
        if (!isNaN(i)) {
            sum += Number(arr[i].firstElementChild.value);
        }
    }

    return isNaN(sum) ? 'Invalid input!' : sum.toString();
}

function getColSum(arr) {
    var sum = 0, i;
    for (i in arr) {
        if (!isNaN(i)) {
            sum += Number(arr[i].value);
        }
    }

    return isNaN(sum) ? 'Invalid input!' : sum.toString();
}

function appendTd(result, row) {
    var td = document.createElement('td');
    var input = document.createElement('input');
    input.value = result;
    td.appendChild(input);
    row.appendChild(td);
}

function appendTr(col1, col2, col3) {
    var body = document.getElementById('body');
    var tr = document.createElement('tr');

    var first = document.createElement('td');
    var second = document.createElement('td');
    var third = document.createElement('td');

    var input1 = document.createElement('input');
    var input2 = document.createElement('input');
    var input3 = document.createElement('input');

    input1.value = col1;
    input2.value = col2;
    input3.value = col3;

    first.appendChild(input1);
    second.appendChild(input2);
    third.appendChild(input3);

    tr.appendChild(first);
    tr.appendChild(second);
    tr.appendChild(third);

    body.insertBefore(tr, body.childNodes[body.childNodes.length - 2]);
}

