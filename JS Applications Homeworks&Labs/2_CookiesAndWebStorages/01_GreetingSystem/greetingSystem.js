(function () {
    var firstVisitDiv = $('#first-visit').css('display', 'none'),
        greeting = $('#greeting').css('display', 'none'),
        btn = $('[type=button]'),
        sessionV,
        totalV;

    if (!localStorage.name) {
        firstVisitDiv.css('display', 'initial');
        btn.on('click', function(){
            localStorage.name = $('#visitor-name').val();
            firstVisitDiv.css('display', 'none');
            greeting.css('display', 'initial').text('Hello ' + localStorage.name);
        })
    }else {
        greeting.css('display', 'initial').text('Hello ' + localStorage.name);
    }

    if (!localStorage.totalVisits){
        localStorage.totalVisits = 0;
    }
    localStorage.totalVisits++;

    if (!sessionStorage.sessionVisits){
        sessionStorage.sessionVisits = 0;
    }
    sessionStorage.sessionVisits++;

    totalV = $('<div>').text('Total visits: ' + localStorage.totalVisits);
    sessionV = $('<div>').text('Session visits: ' + sessionStorage.sessionVisits);

    $('#wrapper').append(totalV, sessionV);
})();
