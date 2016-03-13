var app = app || {};

(function (scope) {
    function getBookInfo(title) {
        return $.ajax({
            type: 'GET',
            url: 'https://baas.kinvey.com/appdata/kid_-J7IZvMfyb/books/?query={"title":"' + title + '"}',
            headers: {
                'Authorization': 'Basic dGhlQm9va0NvbGxlY3RvcjppbG92ZWJvb2tz'
            },
            success: function(data) {
                data.forEach(function(d) {
                    loadBookInfo(d);
                })
            },
            error: function(err) {
                console.error(err);
            }
        })
    }

    function loadBookInfo(data) {
        $.get('templates/bookInfo.html', function(template) {
            var rendered = Mustache.render(template, data);
            $('#books').after(rendered);
        })
            .then(function() {
                $('.edit-button').on('click', function() {
                    scope.editBook($(this).attr('id'));
                    $(this).parent().remove();
                });

                $('.delete-button').on('click', function() {
                    var idParams = $(this).attr('id').split('-');
                    scope.deleteBook(idParams[0]);
                    $(this).parent().remove();
                })
            })
    }

    scope.getBookInfo = getBookInfo;
})(app);