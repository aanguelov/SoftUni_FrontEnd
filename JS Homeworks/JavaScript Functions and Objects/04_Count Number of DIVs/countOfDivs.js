function countDivs(args) {
    args = args.replace(/[\n\s+]/gi, '');

    var regex = /<div/g, divsNum = 0, match;

    while (match = regex.exec(args)) {
        divsNum++;
    }

    alert('Number of div tags: ' + divsNum);
}

var content = document.documentElement.innerHTML;

countDivs(content);


