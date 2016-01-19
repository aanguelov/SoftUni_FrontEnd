function solve(arr) {
    var words = arr[0].split(/[^\w]+/);
    words = words.filter(function(value) {
        return value !== '';
    });

    var wordsCount = {}, index;
    for (index in words) {
        var current = words[index].toLowerCase();
        if (!wordsCount[current]) {
            wordsCount[current] = 0;
        }
        wordsCount[current]++;
    }

    var validWords = [];
    for (index in wordsCount) {
        if (wordsCount[index] >= 3) {
            validWords.push(index);
        }
    }

    if (validWords.length === 0) {
        console.log('No words');
        return;
    }

    var regex = /[A-Z].+?[?!.]/g, match, sentences = [];

    while (match = regex.exec(arr[1])) {
        sentences.push(match[0].trim());
    }

    var validSentences = [];

    for (index in sentences) {
        var wordsCounter = 0;
        for (var i in validWords) {

            if (sentences[index].split(/[^\w]+/).indexOf(validWords[i]) !== -1) {
                wordsCounter++;
            }
        }
        if (wordsCounter >= 2) {
            validSentences.push(sentences[index]);
        }
    }

    if (validSentences.length == 0) {
        console.log('No sentences');
    }else {
        for (index in validSentences) {
            console.log(validSentences[index]);
        }
    }
}

var input = [ 'Captain Obvious was walking down the street. As the captain was walking a person came and told him: ' +
                'You are Captain Obvious! He replied: Thank you CAPTAIN OBVIOUS you are the man!',
                'The captain was walking and he was obvious. He did not know what was going to happen to you in the future. Was he curious? ' +
                'We do not know.' ];

solve(input);
