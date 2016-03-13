var app = app || {};

(function (scope) {
    function deleteBook(id) {
        return $.ajax({
            type: 'DELETE',
            url: 'https://baas.kinvey.com/appdata/kid_-J7IZvMfyb/books/' + id,
            headers: {
                'Authorization': 'Kinvey 91e25418-46af-415c-aadf-325e3fc12033.h9kghXbsIxCRdKVUnyGhdhdCcSR1Zwr953FolIlOpQI='
            },
            success: function() {
                $('#list-of-books').empty();
                scope.listAllBooks();
            },
            error: function(err) {
                console.error(err.message);
            }
        })
    }

    scope.deleteBook = deleteBook;
})(app);