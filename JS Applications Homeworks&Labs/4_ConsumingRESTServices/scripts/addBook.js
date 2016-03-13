var app = app || {};

(function (scope) {
    function addBook() {
        var booksUl = $('#list-of-books'),
            currentBook = {
                title: $('#title').val(),
                author: $('#author').val(),
                isbn: $('#isbn').val()
            };

        return $.ajax({
            type: 'POST',
            url: 'https://baas.kinvey.com/appdata/kid_-J7IZvMfyb/books',
            headers: {
                'Authorization': 'Kinvey 91e25418-46af-415c-aadf-325e3fc12033.h9kghXbsIxCRdKVUnyGhdhdCcSR1Zwr953FolIlOpQI='
            },
            data: currentBook,
            success: function() {
                var book = scope.createBook(currentBook.title, currentBook.author, currentBook.isbn),
                    bookLi = $('<li>').text(book.title).attr('class', 'bookLi');

                booksUl.append(bookLi);
            },
            error: function(err) {
                console.error(err.message);
            }
        })
    }

    scope.addBook = addBook;
})(app);