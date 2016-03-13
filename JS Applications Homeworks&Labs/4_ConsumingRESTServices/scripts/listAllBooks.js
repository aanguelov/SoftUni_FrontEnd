var app = app || {};

(function(scope) {
    function listAllBooks() {
        var booksUl = $('#list-of-books');

        return $.ajax({
            type: 'GET',
            url: 'https://baas.kinvey.com/appdata/kid_-J7IZvMfyb/books',
            headers: {
                'Authorization': 'Basic dGhlQm9va0NvbGxlY3RvcjppbG92ZWJvb2tz'
            },
            success: function(data) {
                data.forEach(function(d) {
                    var book = scope.createBook(d.title, d.author, d.isbn),
                        bookLi = $('<li>').text(book.title).attr('class', 'bookLi');
                    booksUl.append(bookLi);
                })
            },
            error: function(err) {
                console.error(err);
            }
        })
    }

    scope.listAllBooks = listAllBooks;
})(app);