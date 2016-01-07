function getTime() {
    var time = new Date;

    var hours = time.getHours();
    if(hours < 10) {
        hours = '0' + hours;
    }

    var minutes = time.getMinutes();
    if(minutes < 10) {
        minutes = '0' + minutes;
    }

    var seconds = time.getSeconds();
    if(seconds < 10) {
        seconds = '0' + seconds;
    }

    var wholeTime = [hours, minutes, seconds];
    document.getElementById("clock").innerHTML = wholeTime.join(':');
}
setInterval(getTime, 1000);
