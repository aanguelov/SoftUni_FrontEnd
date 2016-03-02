var timerId,
    answers;

$(window).on('load', function() {
    if (!localStorage.answers) {
        answers = {};
    }else {
        answers = JSON.parse(localStorage.getItem('answers'));
    }

    var time = 5 * 60,
        timerDiv = $('#timer'),
        temp = time;

    timerId = setInterval(function(){
        var count = temp--,
            minutes = (count / 60) >> 0,
            seconds = (count - minutes * 60) + '',
            timeDisplay = minutes + ':' + (seconds.length> 1 ? '' : '0') + seconds;
        timerDiv.text('Time remaining: ' + timeDisplay);
        if (temp < 0) {
            clearInterval(timerId);
        }
    }, 1000);

});

$(window).unload(function() {
    localStorage.setItem('answers', JSON.stringify(answers));
});

$('input:checkbox').change(function() {
    var answer = $(this).parent().text().trim();

    answers[answer] = $(this).attr('value');

    localStorage.setItem('answers', JSON.stringify(answers));
});

$('#btn').on('click', function(){
    clearInterval(timerId);

    var totalAnswers = JSON.parse(localStorage.getItem('answers'));

    Object.keys(totalAnswers).forEach(function(key) {
        var answerP = $('<p>').text(key + ' - ' + totalAnswers[key]);
        $('#result').append(answerP);
    });

    answers = {};
    localStorage.setItem('answers', JSON.stringify(answers));
});

