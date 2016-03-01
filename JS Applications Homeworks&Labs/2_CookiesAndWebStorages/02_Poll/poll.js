var timerId;

$(window).on('load', function() {
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

$('#btn').on('click', function(){
    clearInterval(timerId);

    $('input:checked').each(function(){
        if ($(this).attr('value') === 'correct') {
            var correct = $('<p>').text('Correct: ' + $(this).parent().text().trim());
            $('#result').append(correct);
        }else {
            var incorrect = $('<p>').text('Incorrect: ' + $(this).parent().text().trim());
            $('#result').append(incorrect);
        }
    });
});

