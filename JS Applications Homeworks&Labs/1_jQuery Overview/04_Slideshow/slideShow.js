var leftArr = $('<div>').attr('id', 'left'),
    rightArr = $('<div>').attr('id', 'right'),
    beaches = $('<div>').attr('id', 'beaches-container'),
    beachesDiv = $('<div>').attr('id', 'beaches'),
    leftArrImg = $("<img src='images/left-arrow.png'/>"),
    rightArrImg = $("<img src='images/right-arrow.png'/>"),
    firstBeach = $("<img src='images/beach1.jpg'/>"),
    secondBeach = $("<img src='images/beach2.jpg'/>"),
    thirdBeach = $("<img src='images/beach3.jpg'/>");

beaches.append(firstBeach, secondBeach, thirdBeach);
beachesDiv.append(beaches);
$('#wrapper').append(leftArr, beachesDiv, rightArr);

leftArr.hover(
    function() {
        $(this).append(leftArrImg).css('cursor', 'pointer');
    }, function() {
        $(this).find(leftArrImg).remove();
    }
);

rightArr.hover(
    function() {
        $(this).append(rightArrImg).css('cursor', 'pointer');
    }, function() {
        $(this).find(rightArrImg).remove();
    }
);

leftArr.on('click', function() {
    if (beaches.css('right') !== '550px') {
        beaches.animate({right: '+=275'});
    }
});

rightArr.on('click', function() {
    if (beaches.css('right') !== '0px' && beaches.css('right') !== 'auto') {
        beaches.animate({right: '-=275'});
    }
});

setInterval(function(){
    if (beaches.css('right') !== '550px') {
        beaches.animate({right: '+=275'});
    }else {
        beaches.css('right', 'auto');
    }
}, 5000);