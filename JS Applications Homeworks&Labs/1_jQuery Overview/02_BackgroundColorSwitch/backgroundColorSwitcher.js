$(document).ready(function () {
    function changeColor() {
        var className = $('input:text').val(),
            color = $('#color-picker').val();

        $('.' + className).css('background', color);
    }

    $('#btn').on('click', changeColor);
});
