var app = app || {};

(function (scope) {
    function editBook(id) {
        var titleChangeId = $('#' + id + 'titleChange').val() !== '' ? $('#' + id + 'titleChange').val() : $('#' + id + 'title').text(),
            authorChangeId = $('#' + id + 'authorChange').val() !== '' ? $('#' + id + 'authorChange').val() : $('#' + id + 'author').text(),
            isbnChangeId = '#' + id + 'isbnChange';
        var json = {
            title: titleChangeId,
            author: authorChangeId,
            isbn: $(isbnChangeId).val() !== '' ? $(isbnChangeId).val() : $('#' + id + 'isbn').text()
        };

        return $.ajax({
            type: 'PUT',
            url: 'https://baas.kinvey.com/appdata/kid_-J7IZvMfyb/books/' + id,
            headers: {
                'Authorization': 'Kinvey 91e25418-46af-415c-aadf-325e3fc12033.h9kghXbsIxCRdKVUnyGhdhdCcSR1Zwr953FolIlOpQI='
            },
            data: json,
            success: function() {
                $('#list-of-books').empty();
                scope.listAllBooks();
            },
            error: function(err) {
                console.error(err.message);
            }
        })
    }

    scope.editBook = editBook;
})(app);